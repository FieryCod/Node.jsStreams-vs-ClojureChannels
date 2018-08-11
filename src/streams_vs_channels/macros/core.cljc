(ns streams-vs-channels.macros.core)

(defmacro with-timeout
  "Takes body and executes it after 4s"
  [body]
  `(js/setTimeout (fn [] ~body) 4000))

(defmacro with-monitor
  [name body]
  `(let [memory-filename# (str ~name "_memory.report")
         eventloop-filename# (str ~name "_eventloop.report")
         should-close# (streams-vs-channels.nodejs/register-close)
         writable-memory-stream# (streams-vs-channels.nodejs/create-writable-stream memory-filename#)
         writable-eventloop-stream# (streams-vs-channels.nodejs/create-writable-stream eventloop-filename#)]

     ~body

     (let [secs# (atom 1)
           id# (streams-vs-channels.nodejs/set-interval
                 (fn []
                   (if-not @should-close#
                     (do
                       (.write writable-memory-stream#
                               (str (.round js/Math (/ (.-heapUsed (.memoryUsage js/process)) 1024 1024)) " " @secs# "\n"))

                       (.write writable-eventloop-stream#
                               (str (count (._getActiveRequests js/process)) " " @secs# "\n"))

                       (swap! secs# inc))

                     (do
                       (.end writable-memory-stream#)
                       (.end writable-eventloop-stream#))))
                 1000)]

       (.on writable-memory-stream# "close"
            (fn []
              (streams-vs-channels.nodejs/clear-interval id#))))))

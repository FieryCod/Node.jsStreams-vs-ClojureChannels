(ns streams-vs-channels.macros.core)

(defmacro with-timeout
  "Takes body and executes it after 4s"
  [body]
  `(js/setTimeout (fn [] ~body) 4000))

(defmacro with-monitor
  [name body]
  `(let [should-close# (streams-vs-channels.tools/register-close)
         memory-stream# (streams-vs-channels.tools/create-writable-stream (str ~name "_memory.report"))
         eventloop-stream# (streams-vs-channels.tools/create-writable-stream (str ~name "_eventloop.report"))]

     ~body

     (let [id# (.setInterval foreign.node-modules/timers
                            (fn []
                              (if-not @should-close#
                                (do
                                  (.write memory-stream#
                                          (str (/ (.-heapUsed (.memoryUsage js/process)) 1024 1024) "\n"))

                                  (.write eventloop-stream#
                                          (str (count (._getActiveRequests js/process)) "\n")))

                                (do
                                  (.end memory-stream#)
                                  (.end eventloop-stream#))))
                            1000)]

       (.on memory-stream# "close" #(.clearInterval foreign.node-modules/timers id#)))))

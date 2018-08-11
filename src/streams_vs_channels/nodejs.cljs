(ns streams-vs-channels.nodejs
  (:require
   [foreign.CloseProgramEventEmitter :as close-emitter]
   timers
   stream
   fs))

(defn set-interval [f t]
  (.setInterval timers f t))

(defn clear-interval [id]
  (.clearInterval timers id))

(defn create-writable-stream
  [filename]
  (.createWriteStream fs filename (clj->js {:encoding "utf-8"})))

(defn create-readable-stream
  [filename read-options]
  (.createReadStream fs filename read-options))

(defn register-close
  []
  (let [close (atom false)]
    (.on close-emitter/emitter "CloseProgram"
         (fn []
           (swap! close (fn [] true))))
    close))

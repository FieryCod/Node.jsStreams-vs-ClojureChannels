(ns streams-vs-channels.tools)

(defn elapsed-time
  "Taken from cljs.core. Measures the time using the start time"
  [start-time]
  (.toFixed (- (system-time) start-time) 6 "msec"))

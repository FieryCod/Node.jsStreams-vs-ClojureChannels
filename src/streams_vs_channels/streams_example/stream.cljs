(ns streams-vs-channels.streams-example.stream
  (:require [streams-vs-channels.streams-example.impl :as impl]
            [streams-vs-channels.settings :as settings]
            [streams-vs-channels.reader :as reader]
            [streams-vs-channels.tools :as tools]))

(defn process-with-streams
  []
  (js/Promise.
   (fn [resolve]
     (let [start-time (system-time)
           stream-example (impl/newStreamExample)
           EndProcessingEventEmitter (.-EndProcessingEventEmitter stream-example)]

       (.on EndProcessingEventEmitter "EndProcessing"
            (fn []
              (tools/print-exit-program-msg start-time)
              (resolve true)))

       (reader/read-file settings/seed-filename (.-onData stream-example) (.-onEnd stream-example))))))

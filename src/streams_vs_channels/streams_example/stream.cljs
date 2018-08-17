(ns streams-vs-channels.streams-example.stream
  (:require [streams-vs-channels.streams-example.impl :as impl]
            [streams-vs-channels.streams-example.impl-with-transform :as impl-transform]
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

(defn process-with-transform-streams
  []
  (js/Promise.
   (fn [resolve]
     (let [start-time (system-time)
           [fizz-stream buzz-stream fizzbuzz-stream others-stream :as streams] (tools/create-writeable-streams)
           others-transformer (impl-transform/othersSplitTransformer others-stream)
           fizz-transformer (impl-transform/splitTransformer fizz-stream 3)
           buzz-transformer (impl-transform/splitTransformer buzz-stream 5)
           fizzbuzz-transformer (impl-transform/splitTransformer fizzbuzz-stream 15)
           stream-example (impl-transform/newStreamExample fizz-transformer buzz-transformer fizzbuzz-transformer others-transformer)
           EndProcessingEventEmitter (.-EndProcessingEventEmitter stream-example)]

       (.on EndProcessingEventEmitter "EndProcessing"
            (fn []
              (tools/print-exit-program-msg start-time)
              (resolve true)))

       (reader/read-file settings/seed-filename (.-onData stream-example) (.-onEnd stream-example))))))

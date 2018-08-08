(ns streams-vs-channels.channels-example.channel
  (:require [clojure.core.async :as async]
            [streams-vs-channels.tools :as tools]
            [streams-vs-channels.reader :as reader]
            [streams-vs-channels.settings :as settings]
            [streams-vs-channels.channels-example.state :as state]
            [streams-vs-channels.channels-example.writer :as writer]
            [streams-vs-channels.channels-example.tasks :refer [select-chan-1
                                                                group-string-3
                                                                process-channel-3
                                                                write-counter-state-4]]))
(defn create-processing-chans []
  [(async/chan settings/fizz-size (partition-all settings/fizz-size))
   (async/chan settings/buzz-size (partition-all settings/buzz-size))
   (async/chan settings/fizzbuzz-size (partition-all settings/fizzbuzz-size))
   (async/chan settings/default-size)])

(defn process-with-channels
  []
  (let [[fizz-stream buzz-stream fizzbuzz-stream others-stream :as streams] (writer/create-writeable-streams)
        [fizz-chan buzz-chan fizzbuzz-chan others-chan :as chans] (create-processing-chans)
        [fizz-group buzz-group fizzbuzz-group] (state/create-group-counters)

        start-time (system-time)
        counters (state/create-coll-counters)]

    ;; Task #1 #2
    (reader/read-file settings/seed-filename
                      (fn [num]
                        (apply select-chan-1
                               (js/parseInt num)
                               (concat chans counters)))
                      (fn []
                        (doseq [c chans]
                          (async/close! c))))

    ;; Task #3 #4
    (let [ch1 (process-channel-3 fizz-chan fizz-stream #(group-string-3 fizz-group %))
          ch2 (process-channel-3 buzz-chan buzz-stream #(group-string-3 buzz-group %))
          ch3 (process-channel-3 fizzbuzz-chan fizzbuzz-stream #(group-string-3 fizzbuzz-group %))
          ch4 (process-channel-3 others-chan others-stream #(str % " "))]

      (async/go

        (<! ch1)
        (<! ch2)
        (<! ch3)
        (<! ch4)

        (doseq [[stream name counter] (map vector streams ["fizz" "buzz" "fizzbuzz" "other"] counters)]
          (write-counter-state-4 stream name counter))

        (tools/print-exit-program-msg start-time)))))

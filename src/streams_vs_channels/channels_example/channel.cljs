(ns streams-vs-channels.channels-example.channel
  (:require [clojure.core.async :as async]
            [streams-vs-channels.settings :as settings]
            [streams-vs-channels.channels-example.reader :as reader]
            [streams-vs-channels.channels-example.writer :as writer]
            [streams-vs-channels.channels-example.state :as state]
            [streams-vs-channels.channels-example.tasks :refer [select-chan-1
                                                                group-string-3
                                                                process-channel-3
                                                                write-counter-state-4]]))

(defn process-with-channels
  []
  (let [start-time (system-time)

        others-chan (async/chan settings/default-size)
        fizz-chan (async/chan settings/fizz-size (partition-all settings/fizz-size))
        buzz-chan (async/chan settings/buzz-size (partition-all settings/buzz-size))
        fizzbuzz-chan (async/chan settings/fizzbuzz-size (partition-all settings/fizzbuzz-size))
        all-chans [fizz-chan buzz-chan fizzbuzz-chan others-chan]

        [fizz-stream buzz-stream fizzbuzz-stream others-stream :as streams] (writer/create-writeable-streams)]

     ;; Task #1 #2
    (reader/read-file settings/seed-filename
                      (fn [num]
                        (apply select-chan-1
                               (js/parseInt num)
                               (concat all-chans state/counters)))
                      (fn []
                        (doseq [c all-chans]
                          (async/close! c))))

    ;; Task #3 #4
    (let [ch1 (process-channel-3 fizz-chan fizz-stream #(group-string-3 state/fizz-group %))
          ch2 (process-channel-3 buzz-chan buzz-stream #(group-string-3 state/buzz-group %))
          ch3 (process-channel-3 fizzbuzz-chan fizzbuzz-stream #(group-string-3 state/fizzbuzz-group %))
          ch4 (process-channel-3 others-chan others-stream #(str % " "))]

      (async/go

        (<! ch1)
        (<! ch2)
        (<! ch3)
        (<! ch4)

        (doseq [[stream name counter] (map vector streams ["fizz" "buzz" "fizzbuzz" "other"] state/counters)]
          (write-counter-state-4 stream name counter))

        (println "All datasets processed! Good job!")
        (println "Program took" (.toFixed (- (system-time) start-time) 6) "msec")))))

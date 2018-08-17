(ns streams-vs-channels.channels-example.tasks
  (:require [clojure.core.async :as async]
            [streams-vs-channels.settings :as settings]))

(defn- put-and-count
  "Puts the number onto the chan and updates the counter"
  [n ch at]
  (do (async/put! ch n)
      (swap! at inc)
      nil))


(defn select-chan-1
  "Groups the numbers by fizz-buzz task and counts the numbers inside the channels
  (Task #1)"
  [n fizz-chan buzz-chan fizzbuzz-chan others-chan
   fizz-atom buzz-atom fizzbuzz-atom others-atom]

  (condp #(zero? (mod %2 %1)) n
    15 (put-and-count n fizzbuzz-chan fizzbuzz-atom)
    3  (put-and-count n fizz-chan fizz-atom)
    5  (put-and-count n buzz-chan buzz-atom)
    (put-and-count n others-chan others-atom)))

(defn group-string-3
  "Takes the group state and creates the string \"Group n: '(GroupContent)\"
  Updates the group-state and returns string
  (Task #3)"
  [group-state group]
  (let [ret-str (str "Group " @group-state ": " group "\n")]
    (swap! group-state inc)
    ret-str))

(defn process-channel-3
  "Processes channel of values and puts the transformed values to stream"
  [achan stream transform-fn]
  (async/go-loop [group (<! achan)]
    (when (not (nil? group))
      (.write stream (transform-fn group))
      (recur (<! achan)))))

(defn write-counter-state-4
  "Writes the end string to the output stream"
  [stream name counter]
  (.write stream (str "\nThere was " @counter " numbers processed for stream " name " \n"))
  (.end stream))

(ns streams-vs-channels.channels-example.state)

(defn create-coll-counters
  []
  (map (fn [_] (atom 0)) (range 0 4)))

(defn create-group-counters
  []
  (map (fn [_] (atom 1)) (range 0 3)))

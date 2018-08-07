(ns streams-vs-channels.channels-example.state)

;; Counts the number of processed items
(def fizz-counter (atom 0))
(def buzz-counter (atom 0))
(def fizzbuzz-counter (atom 0))
(def other-counter (atom 0))

(def counters [fizz-counter buzz-counter fizzbuzz-counter other-counter])

(def fizz-group (atom 1))
(def buzz-group (atom 1))
(def fizzbuzz-group (atom 1))

(def groups [fizz-group buzz-group fizzbuzz-group])

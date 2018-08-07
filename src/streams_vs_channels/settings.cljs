(ns streams-vs-channels.settings)

(def max-save-integer
  "Max Node.js save integer (will be used during a test)"
  js/Number.MAX_SAFE_INTEGER)

(def iterations
  "Number of iterations"
  10000)

(def padding-len
  "Padding is equal the length of highest possible number during iteration"
  (count (str iterations)))

(def bytes-per-write
  "Indicates how much bytes are used by a single write to file"
  (+ padding-len 1))

;; Filenames to which we write and from which we read
(def seed-filename "seeds.file")
(def fizz-filename "fizz.file")
(def buzz-filename "buzz.file")
(def fizzbuzz-filename "fizzbuzz.file")
(def others-filename "others.file")

;; Default channel size based on (Task #2)
(def fizz-size 3)
(def buzz-size 5)
(def fizzbuzz-size 15)
(def default-size 5)

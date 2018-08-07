(ns streams-vs-channels.channels-example.writer
  (:require [streams-vs-channels.settings :as settings]
            [foreign.node-modules :as nm]))

(defn create-writeable-streams
  "Returns the writable streams of files fizz, buzz, fizzbuzz and others"
  []
  (mapv #(.createWriteStream nm/fs % (clj->js {:encoding "utf-8"}))
        [settings/fizz-filename
         settings/buzz-filename
         settings/fizzbuzz-filename
         settings/others-filename]))

(defn inject-ending-string
  "Injects the ending string to each stream (Task #4)"
  [streams states]
  (doseq [[stream state] (map vector streams states)]
    (.write stream (str "Number of items processed in stream:" @state "\n"))))

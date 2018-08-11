(ns streams-vs-channels.seeder
  (:require [goog.string.format]
            [goog.string :as gstring]
            [streams-vs-channels.nodejs]
            [streams-vs-channels.settings :as settings]))

(defn seed-file
  "Seed the file with numbers starting from 0 up to settings/iterations"
  []
  (let [writable-stream (streams-vs-channels.nodejs/create-writable-stream settings/seed-filename)
        with-padding    #(gstring/format (str "%" settings/padding-len "d ") %1)]

    (loop [i 0]
      (when (< i settings/iterations)
        (.write writable-stream (with-padding i) "utf8")
        (recur (inc i))))

    (.end writable-stream)))

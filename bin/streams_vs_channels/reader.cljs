(ns streams-vs-channels.reader
  (:require [streams-vs-channels.settings :as settings]
            [streams-vs-channels.nodejs]))

(def read-seed-options
  "Read options for readable-stream"
  (clj->js {:encoding "utf8" :highWaterMark settings/bytes-per-write}))

(defn read-file
  "Reads the content of the file"
  [filename on-data-fn on-end-fn]
  (let [readable-stream (streams-vs-channels.nodejs/create-readable-stream filename read-seed-options)]
    (.on readable-stream "data" on-data-fn)
    (.on readable-stream "end" on-end-fn)))

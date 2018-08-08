(ns streams-vs-channels.reader
  (:require [foreign.node-modules :as nm]
            [streams-vs-channels.settings :as settings]))

(def read-seed-options
  "Read options for readable-stream"
  (clj->js {:encoding "utf8" :highWaterMark settings/bytes-per-write}))

(defn read-file
  "Reads the content of the file"
  [filename on-data-fn on-end-fn]
  (let [readable-stream (.createReadStream nm/fs filename read-seed-options)]
    (.on readable-stream "data" on-data-fn)
    (.on readable-stream "end" on-end-fn)))

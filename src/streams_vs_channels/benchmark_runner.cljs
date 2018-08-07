(ns streams-vs-channels.benchmark-runner
  (:require [clojure.core.async :as async]
            [streams-vs-channels.channels-example.channel :as channel]
            [streams-vs-channels.tools :as tools])
  (:require-macros [streams-vs-channels.macros :refer [with-timeout]]))

(defn run-channels-benchmark
  "Runs the benchmark number of times. We should wait couple of seconds to warm up Clojurescript/Node.js"
  [times]
  (println "Preparing the env for benchmarking\n")

  (with-timeout
    (let [start-time (system-time)]
      (async/go
        (loop [i 0]
          (when (< i times)
            (async/<! (channel/process-with-channels))
            (println "\n")
            (recur (inc i))))

        (println "Benchmark took" (tools/elapsed-time start-time) "ms ;)\n")))))

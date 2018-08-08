(ns streams-vs-channels.benchmark-runner
  (:require [clojure.core.async :as async]
            [streams-vs-channels.tools :as tools]
            [streams-vs-channels.channels-example.channel :as channel-example]
            [streams-vs-channels.streams-example.stream :as stream-example])
  (:require-macros [streams-vs-channels.macros :refer [with-timeout]]))

(defn run-channels-benchmark
  "Runs the channels benchmark number of times.
  We should wait couple of seconds to warm up Clojurescript/Node.js"
  [times]
  (println "Preparing the env for benchmarking\n")
  (println "Wait 3 seconds for env warmup")

  (with-timeout
    (let [start-time (system-time)]
      (async/go
        (loop [i 0]
          (when (< i times)
            (async/<! (channel-example/process-with-channels))
            (println "\n")
            (recur (inc i))))

        (println "Benchmark took" (tools/elapsed-time start-time) "ms ;)\n")))))

(defn run-streams-benchmark
  "Runs the streams benchmark number of times.
  We should wait couple of seconds to warm up Clojurescript/Node.js"
  [times]
  (println "Preparing the env for benchmarking\n")
  (println "Wait 3 seconds for env warmup")

  (with-timeout
    (let [start-time (system-time)]
      (async/go
        (loop [i 0]
          (when (< i times)
            (async/<! (tools/promise->chan (stream-example/process-with-streams)))
            (println "\n")
            (recur (inc i))))

        (println "Benchmark took" (tools/elapsed-time start-time) "ms ;)\n")))))

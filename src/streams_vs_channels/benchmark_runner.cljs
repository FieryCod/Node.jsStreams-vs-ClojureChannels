(ns streams-vs-channels.benchmark-runner
  (:require [clojure.core.async :as async]
            [streams-vs-channels.macros.core :refer [with-timeout with-monitor]]
            [streams-vs-channels.tools :as tools]
            [streams-vs-channels.channels-example.channel :as channel-example]
            [streams-vs-channels.streams-example.stream :as stream-example]
            [foreign.CloseProgramEventEmitter :as close-emitter]))

(defn- welcome-str
  []
  (println "Preparing the env for benchmarking\n")
  (println "Wait 4 seconds for env warmup"))

(defn run-channels-benchmark
  "Runs the channels benchmark number of times.
  We should wait couple of seconds to warm up Clojurescript/Node.js"
  [times]

  (welcome-str)

  (with-monitor "channels"
    (with-timeout
      (let [start-time (system-time)]
        (async/go
          (loop [i 0]
            (when (< i times)
              (async/<! (channel-example/process-with-channels))
              (println "\n")
              (recur (inc i))))

          (println "Benchmark took" (tools/elapsed-time start-time) "ms ;)\n")
          (.emit close-emitter/emitter "CloseProgram"))))))

(defn run-streams-benchmark
  "Runs the streams benchmark number of times.
  We should wait couple of seconds to warm up Clojurescript/Node.js"
  [times]

  (welcome-str)

  (with-timeout
    (let [start-time (system-time)]
      (async/go
        (loop [i 0]
          (when (< i times)
            (async/<! (tools/promise->chan (stream-example/process-with-streams)))
            (println "\n")
            (recur (inc i))))

        (println "Benchmark took" (tools/elapsed-time start-time) "ms ;)\n")
        (.emit close-emitter/emitter "CloseProgram")))))

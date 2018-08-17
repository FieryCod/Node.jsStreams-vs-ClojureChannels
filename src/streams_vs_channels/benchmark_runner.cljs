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

(defn benchmark-runner
  [benchmark times]
  (if times
    (benchmark times)
    (println "Please specify how many times should benchmark run")))

(defn setup-benchmark
  [name process-fn]
  (fn [times]
    (welcome-str)

    (with-monitor name
      (with-timeout
        (let [start-time (system-time)]
          (async/go
            (loop [i 0]
              (when (< i times)
                (async/<! (process-fn))
                (println "\n")
                (recur (inc i))))

            (println "Benchmark took" (tools/elapsed-time start-time) "ms ;)\n")
            (.emit close-emitter/emitter "CloseProgram")))))))

(def run-channels-benchmark (setup-benchmark "channels" #(channel-example/process-with-channels)))

(def run-streams-benchmark (setup-benchmark "streams" #(tools/promise->chan (stream-example/process-with-streams))))

(def run-streams-with-transform-benchmark (setup-benchmark "streams-with-transform" #(tools/promise->chan (stream-example/process-with-transform-streams))))

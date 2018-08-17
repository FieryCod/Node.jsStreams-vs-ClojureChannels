(ns streams-vs-channels.core
  (:require [streams-vs-channels.seeder :as seeder]
            [streams-vs-channels.benchmark-runner :as benchmark]
            [streams-vs-channels.channels-example.channel :as channel-example]
            [streams-vs-channels.streams-example.stream :as stream-example]
            [clojure.core.async :as async]))

(defn -main [& args]
  (condp = (first args)
    "seed" (do (seeder/seed-file) (println "Seed file created!"))

    "channels" (channel-example/process-with-channels)
    "streams"  (stream-example/process-with-streams)
    "streams-with-transform" (stream-example/process-with-transform-streams)

    "benchmark-channels" (benchmark/benchmark-runner benchmark/run-channels-benchmark (second args))
    "benchmark-streams" (benchmark/benchmark-runner benchmark/run-streams-benchmark (second args))
    "benchmark-streams-with-transform" (benchmark/benchmark-runner benchmark/run-streams-with-transform-benchmark (second args))

    (do (println "I do not know what you mean.")
        (println "Possible options are [seed, channels, streams, streams-with-transform, benchmark-channels, benchmark-streams, benchmark-streams-with-transform]"))))

(set! *main-cli-fn* -main)

(ns streams-vs-channels.core
  (:require [streams-vs-channels.seeder :as seeder]
            [streams-vs-channels.settings :as settings]
            [streams-vs-channels.benchmark-runner :as benchmark]
            [streams-vs-channels.channels-example.channel :as channel-example]
            [streams-vs-channels.streams-example.stream :as stream-example]))

(enable-console-print!)

(defn -main [& args]
  (condp = (first args)
    "seed" (do (seeder/seed-file)
               (println "Seed file created!"))
    "channels" (channel-example/process-with-channels)
    "streams"  (stream-example/process-with-streams)
    "benchmark-channels" (if-let [times (second args)]
                           (benchmark/run-channels-benchmark times)
                           (println "Please specify how many times should benchmark run"))
    "benchmark-streams" (if-let [times (second args)]
                           (benchmark/run-streams-benchmark times)
                           (println "Please specify how many times should benchmark run"))
    (do (println "I do not know what you mean.")
        (println "Possible options are [seed, channels, streams, benchmark-channels, benchmark-streams]"))))

(set! *main-cli-fn* -main)

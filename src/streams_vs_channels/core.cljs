(ns streams-vs-channels.core
  (:require [streams-vs-channels.seeder :as seeder]
            [streams-vs-channels.settings :as settings]
            [streams-vs-channels.benchmark-runner :as benchmark]
            [streams-vs-channels.channels-example.channel :as channel]))

(enable-console-print!)

(defn -main [& args]
  (condp = (first args)
    "seed" (do (seeder/seed-file)
               (println "Seed file created!"))
    "channels" (channel/process-with-channels)
    "benchmark-channels" (if-let [times (second args)]
                           (benchmark/run-channels-benchmark times)
                           (println "Please specify how many times should benchmark run"))
    (println "I do not know what you mean. Possible options are [seed, channels, benchmark-channels]")))

(set! *main-cli-fn* -main)

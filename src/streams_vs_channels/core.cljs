(ns streams-vs-channels.core
  (:require [streams-vs-channels.seeder :as seeder]
            [streams-vs-channels.channels-example.channel :as channel]))

(enable-console-print!)

(defn -main [& args]
  (condp = (first args)
    "seed" (do (seeder/seed-file)
               (println "Seed file created!"))
    "channels" (channel/process-with-channels)
    (println "I do not know what you mean. Possible options are [seed, channels]")))

(set! *main-cli-fn* -main)

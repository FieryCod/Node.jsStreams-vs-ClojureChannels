(defproject streams_vs_channels "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]
                 [figwheel "0.5.16"]
                 [figwheel-sidecar "0.5.16"]
                 [org.clojure/core.async  "0.4.474"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.16"]]

  :jvm-opts ^:replace ["-Xmx1g" "-server"]

  :clean-targets ^{:protect false} ["target" "seeds.file" "fizz.file" "buzz.file" "fizzbuzz.file" "others.file"]

  :profiles {:dev {:dependencies [[cider/piggieback "0.3.8"]]
                   :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}}
  :figwheel {}

  :cljsbuild
  {:builds
   {:prod {:source-paths ["src"]
           :compiler     {:output-to     "target/prod/streams_vs_channels.js"
                          :output-dir    "target/prod"
                          :main          streams-vs-channels.core
                          :libs          ["src/foreign"]
                          :source-map    "target/prod/streams_vs_channels.js.map"
                          :target        :nodejs
                          :optimizations :simple}}

    :dev {:source-paths ["src"]
          :figwheel     true
          :compiler     {:output-to     "target/dev/figwheel_exec.js"
                         :output-dir    "target/dev"
                         :main          streams-vs-channels.core
                         :libs          ["src/foreign"]
                         :target        :nodejs
                         :source-map    true
                         :optimizations :none}}}})

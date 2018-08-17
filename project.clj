(defproject streams_vs_channels "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]
                 [com.bhauman/figwheel-main "0.1.8-SNAPSHOT"]
                 [com.bhauman/rebel-readline-cljs "0.1.4"]
                 [org.clojure/core.async  "0.4.474"]]

  :plugins [[lein-cljsbuild "1.1.7"]]

  :jvm-opts ^:replace ["-Xmx1g" "-server"]

  :clean-targets ^{:protect false} ["target"]

  :profiles {:dev {:dependencies [[cider/piggieback "0.3.8"]]
                   :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}}

  :aliases {"fig" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]}

  :cljsbuild
  {:builds
   {:prod {:source-paths ["src"]
           :compiler     {:output-to     "bin/exec.js"
                          :source-map    "bin/exec.map.js"
                          :output-dir    "bin"
                          :main          streams-vs-channels.core
                          :libs          ["src/foreign", "src/streams_vs_channels/streams_example"]
                          :target        :nodejs
                          :language-in   :ecmascript6
                          :optimizations :simple}}}})

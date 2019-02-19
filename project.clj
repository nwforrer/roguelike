(defproject roguelike "0.1.0-SNAPSHOT"
  :description "Basic Roguelike game"
  :url "http://github.com/nwforrer/roguelike"
  :license {:name "MIT"
            :url "https://opensource.org/licenses/MIT"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]]
  :plugins [[lein-cljsbuild "1.1.7"]]
  :cljsbuild {:builds [{:source-paths ["src-cljs"]
                        :compiler {:output-to "docs/js/main.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}]}
  :main ^:skip-aot roguelike.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})

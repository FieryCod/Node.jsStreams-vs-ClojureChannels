(ns streams-vs-channels.tools
  (:require [clojure.core.async :as async]
            [foreign.CloseProgramEventEmitter :as close-emitter]
            [foreign.node-modules]))

(defn elapsed-time
  "Taken from cljs.core. Measures the time using the start time"
  [start-time]
  (.toFixed (- (system-time) start-time) 6 "msec"))

(defn print-exit-program-msg
  [start-time]
  (println "All datasets processed! Good job!")
  (println "Program took" (elapsed-time start-time) "msec"))

(defn promise->chan
  "Converts the promise to channel"
  [p]
  (let [c (async/chan)]
    (.then p #(async/put! c %))
    c))

(defn register-close
  []
  (let [close (atom false)]
    (.on close-emitter/emitter "CloseProgram"
         (fn []
           (swap! close (fn [] true))))
    close))

(defn create-writable-stream
  "Creates the writable stream using filename passed"
  [filename]
  (.createWriteStream foreign.node-modules/fs filename (clj->js {:encoding "utf-8"})))

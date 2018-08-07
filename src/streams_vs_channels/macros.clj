(ns streams-vs-channels.macros)

(defmacro with-timeout
  "Takes body and executes it after 4s"
  [body]
  `(js/setTimeout (fn [] ~body) 4000))

// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.reader');
goog.require('cljs.core');
goog.require('foreign.node_modules');
goog.require('streams_vs_channels.settings');
/**
 * Read options for readable-stream
 */
streams_vs_channels.reader.read_seed_options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),"utf8",new cljs.core.Keyword(null,"highWaterMark","highWaterMark",-1530358803),streams_vs_channels.settings.bytes_per_write], null));
/**
 * Reads the content of the file
 */
streams_vs_channels.reader.read_file = (function streams_vs_channels$reader$read_file(filename,on_data_fn,on_end_fn){
var readable_stream = foreign.node_modules.fs.createReadStream(filename,streams_vs_channels.reader.read_seed_options);
readable_stream.on("data",on_data_fn);

return readable_stream.on("end",on_end_fn);
});

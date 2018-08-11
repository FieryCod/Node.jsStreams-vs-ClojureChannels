// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.nodejs');
goog.require('cljs.core');
goog.require('foreign.CloseProgramEventEmitter');
streams_vs_channels.nodejs.node$module$timers = require('timers');
streams_vs_channels.nodejs.node$module$stream = require('stream');
streams_vs_channels.nodejs.node$module$fs = require('fs');
streams_vs_channels.nodejs.set_interval = (function streams_vs_channels$nodejs$set_interval(f,t){
return streams_vs_channels.nodejs.node$module$timers.setInterval(f,t);
});
streams_vs_channels.nodejs.clear_interval = (function streams_vs_channels$nodejs$clear_interval(id){
return streams_vs_channels.nodejs.node$module$timers.clearInterval(id);
});
streams_vs_channels.nodejs.create_writable_stream = (function streams_vs_channels$nodejs$create_writable_stream(filename){
return streams_vs_channels.nodejs.node$module$fs.createWriteStream(filename,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),"utf-8"], null)));
});
streams_vs_channels.nodejs.create_readable_stream = (function streams_vs_channels$nodejs$create_readable_stream(filename,read_options){
return streams_vs_channels.nodejs.node$module$fs.createReadStream(filename,read_options);
});
streams_vs_channels.nodejs.register_close = (function streams_vs_channels$nodejs$register_close(){
var close = cljs.core.atom.call(null,false);
foreign.CloseProgramEventEmitter.emitter.on("CloseProgram",((function (close){
return (function (){
return cljs.core.swap_BANG_.call(null,close,((function (close){
return (function (){
return true;
});})(close))
);
});})(close))
);

return close;
});

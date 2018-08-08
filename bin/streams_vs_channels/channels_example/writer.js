// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.channels_example.writer');
goog.require('cljs.core');
goog.require('streams_vs_channels.settings');
goog.require('foreign.node_modules');
/**
 * Returns the writable streams of files fizz, buzz, fizzbuzz and others
 */
streams_vs_channels.channels_example.writer.create_writeable_streams = (function streams_vs_channels$channels_example$writer$create_writeable_streams(){
return cljs.core.mapv.call(null,(function (p1__8434_SHARP_){
return foreign.node_modules.fs.createWriteStream(p1__8434_SHARP_,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),"utf-8"], null)));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [streams_vs_channels.settings.fizz_filename,streams_vs_channels.settings.buzz_filename,streams_vs_channels.settings.fizzbuzz_filename,streams_vs_channels.settings.others_filename], null));
});
/**
 * Injects the ending string to each stream (Task #4)
 */
streams_vs_channels.channels_example.writer.inject_ending_string = (function streams_vs_channels$channels_example$writer$inject_ending_string(streams,states){
var seq__8435 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,streams,states));
var chunk__8436 = null;
var count__8437 = (0);
var i__8438 = (0);
while(true){
if((i__8438 < count__8437)){
var vec__8439 = cljs.core._nth.call(null,chunk__8436,i__8438);
var stream = cljs.core.nth.call(null,vec__8439,(0),null);
var state = cljs.core.nth.call(null,vec__8439,(1),null);
stream.write(["Number of items processed in stream:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),"\n"].join(''));


var G__8445 = seq__8435;
var G__8446 = chunk__8436;
var G__8447 = count__8437;
var G__8448 = (i__8438 + (1));
seq__8435 = G__8445;
chunk__8436 = G__8446;
count__8437 = G__8447;
i__8438 = G__8448;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__8435);
if(temp__5457__auto__){
var seq__8435__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8435__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__8435__$1);
var G__8449 = cljs.core.chunk_rest.call(null,seq__8435__$1);
var G__8450 = c__4351__auto__;
var G__8451 = cljs.core.count.call(null,c__4351__auto__);
var G__8452 = (0);
seq__8435 = G__8449;
chunk__8436 = G__8450;
count__8437 = G__8451;
i__8438 = G__8452;
continue;
} else {
var vec__8442 = cljs.core.first.call(null,seq__8435__$1);
var stream = cljs.core.nth.call(null,vec__8442,(0),null);
var state = cljs.core.nth.call(null,vec__8442,(1),null);
stream.write(["Number of items processed in stream:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),"\n"].join(''));


var G__8453 = cljs.core.next.call(null,seq__8435__$1);
var G__8454 = null;
var G__8455 = (0);
var G__8456 = (0);
seq__8435 = G__8453;
chunk__8436 = G__8454;
count__8437 = G__8455;
i__8438 = G__8456;
continue;
}
} else {
return null;
}
}
break;
}
});

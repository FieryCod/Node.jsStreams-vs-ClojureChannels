// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.seeder');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('streams_vs_channels.nodejs');
goog.require('streams_vs_channels.settings');
/**
 * Seed the file with numbers starting from 0 up to settings/iterations
 */
streams_vs_channels.seeder.seed_file = (function streams_vs_channels$seeder$seed_file(){
var writable_stream = streams_vs_channels.nodejs.create_writable_stream.call(null,streams_vs_channels.settings.seed_filename);
var with_padding = ((function (writable_stream){
return (function (p1__10641_SHARP_){
return goog.string.format(["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(streams_vs_channels.settings.padding_len),"d "].join(''),p1__10641_SHARP_);
});})(writable_stream))
;
var i_10642 = (0);
while(true){
if((i_10642 < streams_vs_channels.settings.iterations)){
writable_stream.write(with_padding.call(null,i_10642),"utf8");

var G__10643 = (i_10642 + (1));
i_10642 = G__10643;
continue;
} else {
}
break;
}

return writable_stream.end();
});

// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.tools');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('streams_vs_channels.settings');
goog.require('streams_vs_channels.nodejs');
/**
 * Taken from cljs.core. Measures the time using the start time
 */
streams_vs_channels.tools.elapsed_time = (function streams_vs_channels$tools$elapsed_time(start_time){
return (cljs.core.system_time.call(null) - start_time).toFixed((6),"msec");
});
streams_vs_channels.tools.print_exit_program_msg = (function streams_vs_channels$tools$print_exit_program_msg(start_time){
cljs.core.println.call(null,"All datasets processed! Good job!");

return cljs.core.println.call(null,"Program took",streams_vs_channels.tools.elapsed_time.call(null,start_time),"msec");
});
/**
 * Converts the promise to channel
 */
streams_vs_channels.tools.promise__GT_chan = (function streams_vs_channels$tools$promise__GT_chan(p){
var c = cljs.core.async.chan.call(null);
p.then(((function (c){
return (function (p1__10435_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__10435_SHARP_);
});})(c))
);

return c;
});
/**
 * Returns the writable streams of files fizz, buzz, fizzbuzz and others
 */
streams_vs_channels.tools.create_writeable_streams = (function streams_vs_channels$tools$create_writeable_streams(){
return cljs.core.mapv.call(null,(function (p1__10436_SHARP_){
return streams_vs_channels.nodejs.create_writable_stream.call(null,p1__10436_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [streams_vs_channels.settings.fizz_filename,streams_vs_channels.settings.buzz_filename,streams_vs_channels.settings.fizzbuzz_filename,streams_vs_channels.settings.others_filename], null));
});

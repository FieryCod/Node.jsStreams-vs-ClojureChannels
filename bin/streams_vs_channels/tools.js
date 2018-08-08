// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.tools');
goog.require('cljs.core');
goog.require('cljs.core.async');
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
return (function (p1__8425_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__8425_SHARP_);
});})(c))
);

return c;
});

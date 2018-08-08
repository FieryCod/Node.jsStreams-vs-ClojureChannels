// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.channels_example.state');
goog.require('cljs.core');
streams_vs_channels.channels_example.state.create_coll_counters = (function streams_vs_channels$channels_example$state$create_coll_counters(){
return cljs.core.map.call(null,(function (_){
return cljs.core.atom.call(null,(0));
}),cljs.core.range.call(null,(0),(4)));
});
streams_vs_channels.channels_example.state.create_group_counters = (function streams_vs_channels$channels_example$state$create_group_counters(){
return cljs.core.map.call(null,(function (_){
return cljs.core.atom.call(null,(1));
}),cljs.core.range.call(null,(0),(3)));
});

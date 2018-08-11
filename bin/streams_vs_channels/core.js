// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.core');
goog.require('cljs.core');
goog.require('streams_vs_channels.seeder');
goog.require('streams_vs_channels.benchmark_runner');
goog.require('streams_vs_channels.channels_example.channel');
goog.require('streams_vs_channels.streams_example.stream');
goog.require('cljs.core.async');
streams_vs_channels.core._main = (function streams_vs_channels$core$_main(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8742 = arguments.length;
var i__4532__auto___8743 = (0);
while(true){
if((i__4532__auto___8743 < len__4531__auto___8742)){
args__4534__auto__.push((arguments[i__4532__auto___8743]));

var G__8744 = (i__4532__auto___8743 + (1));
i__4532__auto___8743 = G__8744;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return streams_vs_channels.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

streams_vs_channels.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pred__8739 = cljs.core._EQ_;
var expr__8740 = cljs.core.first.call(null,args);
if(cljs.core.truth_(pred__8739.call(null,"seed",expr__8740))){
streams_vs_channels.seeder.seed_file.call(null);

return cljs.core.println.call(null,"Seed file created!");
} else {
if(cljs.core.truth_(pred__8739.call(null,"channels",expr__8740))){
return streams_vs_channels.channels_example.channel.process_with_channels.call(null);
} else {
if(cljs.core.truth_(pred__8739.call(null,"streams",expr__8740))){
return streams_vs_channels.streams_example.stream.process_with_streams.call(null);
} else {
if(cljs.core.truth_(pred__8739.call(null,"benchmark-channels",expr__8740))){
var temp__5455__auto__ = cljs.core.second.call(null,args);
if(cljs.core.truth_(temp__5455__auto__)){
var times = temp__5455__auto__;
return streams_vs_channels.benchmark_runner.run_channels_benchmark.call(null,times);
} else {
return cljs.core.println.call(null,"Please specify how many times should benchmark run");
}
} else {
if(cljs.core.truth_(pred__8739.call(null,"benchmark-streams",expr__8740))){
var temp__5455__auto__ = cljs.core.second.call(null,args);
if(cljs.core.truth_(temp__5455__auto__)){
var times = temp__5455__auto__;
return streams_vs_channels.benchmark_runner.run_streams_benchmark.call(null,times);
} else {
return cljs.core.println.call(null,"Please specify how many times should benchmark run");
}
} else {
cljs.core.println.call(null,"I do not know what you mean.");

return cljs.core.println.call(null,"Possible options are [seed, channels, streams, benchmark-channels, benchmark-streams]");
}
}
}
}
}
});

streams_vs_channels.core._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
streams_vs_channels.core._main.cljs$lang$applyTo = (function (seq8738){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8738));
});

cljs.core._STAR_main_cli_fn_STAR_ = streams_vs_channels.core._main;

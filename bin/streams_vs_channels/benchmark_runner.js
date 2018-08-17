// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.benchmark_runner');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('streams_vs_channels.macros.core');
goog.require('streams_vs_channels.tools');
goog.require('streams_vs_channels.channels_example.channel');
goog.require('streams_vs_channels.streams_example.stream');
goog.require('foreign.CloseProgramEventEmitter');
streams_vs_channels.benchmark_runner.welcome_str = (function streams_vs_channels$benchmark_runner$welcome_str(){
cljs.core.println.call(null,"Preparing the env for benchmarking\n");

return cljs.core.println.call(null,"Wait 4 seconds for env warmup");
});
streams_vs_channels.benchmark_runner.benchmark_runner = (function streams_vs_channels$benchmark_runner$benchmark_runner(benchmark,times){
if(cljs.core.truth_(times)){
return benchmark.call(null,times);
} else {
return cljs.core.println.call(null,"Please specify how many times should benchmark run");
}
});
streams_vs_channels.benchmark_runner.setup_benchmark = (function streams_vs_channels$benchmark_runner$setup_benchmark(name,process_fn){
return (function (times){
streams_vs_channels.benchmark_runner.welcome_str.call(null);

var memory_filename__10659__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"_memory.report"].join('');
var eventloop_filename__10660__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"_eventloop.report"].join('');
var should_close__10661__auto__ = streams_vs_channels.nodejs.register_close.call(null);
var writable_memory_stream__10662__auto__ = streams_vs_channels.nodejs.create_writable_stream.call(null,memory_filename__10659__auto__);
var writable_eventloop_stream__10663__auto__ = streams_vs_channels.nodejs.create_writable_stream.call(null,eventloop_filename__10660__auto__);
setTimeout(((function (memory_filename__10659__auto__,eventloop_filename__10660__auto__,should_close__10661__auto__,writable_memory_stream__10662__auto__,writable_eventloop_stream__10663__auto__){
return (function (){
var start_time = cljs.core.system_time.call(null);
var c__6646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto__,start_time,memory_filename__10659__auto__,eventloop_filename__10660__auto__,should_close__10661__auto__,writable_memory_stream__10662__auto__,writable_eventloop_stream__10663__auto__){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto__,start_time,memory_filename__10659__auto__,eventloop_filename__10660__auto__,should_close__10661__auto__,writable_memory_stream__10662__auto__,writable_eventloop_stream__10663__auto__){
return (function (state_10694){
var state_val_10695 = (state_10694[(1)]);
if((state_val_10695 === (1))){
var inst_10675 = (0);
var state_10694__$1 = (function (){var statearr_10696 = state_10694;
(statearr_10696[(7)] = inst_10675);

return statearr_10696;
})();
var statearr_10697_10709 = state_10694__$1;
(statearr_10697_10709[(2)] = null);

(statearr_10697_10709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (2))){
var inst_10675 = (state_10694[(7)]);
var inst_10677 = (inst_10675 < times);
var state_10694__$1 = state_10694;
if(cljs.core.truth_(inst_10677)){
var statearr_10698_10710 = state_10694__$1;
(statearr_10698_10710[(1)] = (4));

} else {
var statearr_10699_10711 = state_10694__$1;
(statearr_10699_10711[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (3))){
var inst_10689 = (state_10694[(2)]);
var inst_10690 = streams_vs_channels.tools.elapsed_time.call(null,start_time);
var inst_10691 = cljs.core.println.call(null,"Benchmark took",inst_10690,"ms ;)\n");
var inst_10692 = foreign.CloseProgramEventEmitter.emitter.emit("CloseProgram");
var state_10694__$1 = (function (){var statearr_10700 = state_10694;
(statearr_10700[(8)] = inst_10691);

(statearr_10700[(9)] = inst_10689);

return statearr_10700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10694__$1,inst_10692);
} else {
if((state_val_10695 === (4))){
var inst_10679 = process_fn.call(null);
var state_10694__$1 = state_10694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10694__$1,(7),inst_10679);
} else {
if((state_val_10695 === (5))){
var state_10694__$1 = state_10694;
var statearr_10701_10712 = state_10694__$1;
(statearr_10701_10712[(2)] = null);

(statearr_10701_10712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (6))){
var inst_10687 = (state_10694[(2)]);
var state_10694__$1 = state_10694;
var statearr_10702_10713 = state_10694__$1;
(statearr_10702_10713[(2)] = inst_10687);

(statearr_10702_10713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (7))){
var inst_10675 = (state_10694[(7)]);
var inst_10681 = (state_10694[(2)]);
var inst_10682 = cljs.core.println.call(null,"\n");
var inst_10683 = (inst_10675 + (1));
var inst_10675__$1 = inst_10683;
var state_10694__$1 = (function (){var statearr_10703 = state_10694;
(statearr_10703[(10)] = inst_10682);

(statearr_10703[(11)] = inst_10681);

(statearr_10703[(7)] = inst_10675__$1);

return statearr_10703;
})();
var statearr_10704_10714 = state_10694__$1;
(statearr_10704_10714[(2)] = null);

(statearr_10704_10714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6646__auto__,start_time,memory_filename__10659__auto__,eventloop_filename__10660__auto__,should_close__10661__auto__,writable_memory_stream__10662__auto__,writable_eventloop_stream__10663__auto__))
;
return ((function (switch__6487__auto__,c__6646__auto__,start_time,memory_filename__10659__auto__,eventloop_filename__10660__auto__,should_close__10661__auto__,writable_memory_stream__10662__auto__,writable_eventloop_stream__10663__auto__){
return (function() {
var streams_vs_channels$benchmark_runner$setup_benchmark_$_state_machine__6488__auto__ = null;
var streams_vs_channels$benchmark_runner$setup_benchmark_$_state_machine__6488__auto____0 = (function (){
var statearr_10705 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10705[(0)] = streams_vs_channels$benchmark_runner$setup_benchmark_$_state_machine__6488__auto__);

(statearr_10705[(1)] = (1));

return statearr_10705;
});
var streams_vs_channels$benchmark_runner$setup_benchmark_$_state_machine__6488__auto____1 = (function (state_10694){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_10694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e10706){if((e10706 instanceof Object)){
var ex__6491__auto__ = e10706;
var statearr_10707_10715 = state_10694;
(statearr_10707_10715[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10716 = state_10694;
state_10694 = G__10716;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
streams_vs_channels$benchmark_runner$setup_benchmark_$_state_machine__6488__auto__ = function(state_10694){
switch(arguments.length){
case 0:
return streams_vs_channels$benchmark_runner$setup_benchmark_$_state_machine__6488__auto____0.call(this);
case 1:
return streams_vs_channels$benchmark_runner$setup_benchmark_$_state_machine__6488__auto____1.call(this,state_10694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
streams_vs_channels$benchmark_runner$setup_benchmark_$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = streams_vs_channels$benchmark_runner$setup_benchmark_$_state_machine__6488__auto____0;
streams_vs_channels$benchmark_runner$setup_benchmark_$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = streams_vs_channels$benchmark_runner$setup_benchmark_$_state_machine__6488__auto____1;
return streams_vs_channels$benchmark_runner$setup_benchmark_$_state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto__,start_time,memory_filename__10659__auto__,eventloop_filename__10660__auto__,should_close__10661__auto__,writable_memory_stream__10662__auto__,writable_eventloop_stream__10663__auto__))
})();
var state__6648__auto__ = (function (){var statearr_10708 = f__6647__auto__.call(null);
(statearr_10708[(6)] = c__6646__auto__);

return statearr_10708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto__,start_time,memory_filename__10659__auto__,eventloop_filename__10660__auto__,should_close__10661__auto__,writable_memory_stream__10662__auto__,writable_eventloop_stream__10663__auto__))
);

return c__6646__auto__;
});})(memory_filename__10659__auto__,eventloop_filename__10660__auto__,should_close__10661__auto__,writable_memory_stream__10662__auto__,writable_eventloop_stream__10663__auto__))
,(4000));

var secs__10664__auto__ = cljs.core.atom.call(null,(1));
var id__10665__auto__ = streams_vs_channels.nodejs.set_interval.call(null,((function (secs__10664__auto__,memory_filename__10659__auto__,eventloop_filename__10660__auto__,should_close__10661__auto__,writable_memory_stream__10662__auto__,writable_eventloop_stream__10663__auto__){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,should_close__10661__auto__))){
writable_memory_stream__10662__auto__.write([cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((process.memoryUsage().heapUsed / (1024)) / (1024))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,secs__10664__auto__)),"\n"].join(''));

writable_eventloop_stream__10663__auto__.write([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,process._getActiveRequests()))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,secs__10664__auto__)),"\n"].join(''));

return cljs.core.swap_BANG_.call(null,secs__10664__auto__,cljs.core.inc);
} else {
writable_memory_stream__10662__auto__.end();

return writable_eventloop_stream__10663__auto__.end();
}
});})(secs__10664__auto__,memory_filename__10659__auto__,eventloop_filename__10660__auto__,should_close__10661__auto__,writable_memory_stream__10662__auto__,writable_eventloop_stream__10663__auto__))
,(1000));
return writable_memory_stream__10662__auto__.on("close",((function (secs__10664__auto__,id__10665__auto__,memory_filename__10659__auto__,eventloop_filename__10660__auto__,should_close__10661__auto__,writable_memory_stream__10662__auto__,writable_eventloop_stream__10663__auto__){
return (function (){
return streams_vs_channels.nodejs.clear_interval.call(null,id__10665__auto__);
});})(secs__10664__auto__,id__10665__auto__,memory_filename__10659__auto__,eventloop_filename__10660__auto__,should_close__10661__auto__,writable_memory_stream__10662__auto__,writable_eventloop_stream__10663__auto__))
);
});
});
streams_vs_channels.benchmark_runner.run_channels_benchmark = streams_vs_channels.benchmark_runner.setup_benchmark.call(null,"channels",(function (){
return streams_vs_channels.channels_example.channel.process_with_channels.call(null);
}));
streams_vs_channels.benchmark_runner.run_streams_benchmark = streams_vs_channels.benchmark_runner.setup_benchmark.call(null,"streams",(function (){
return streams_vs_channels.tools.promise__GT_chan.call(null,streams_vs_channels.streams_example.stream.process_with_streams.call(null));
}));
streams_vs_channels.benchmark_runner.run_streams_with_transform_benchmark = streams_vs_channels.benchmark_runner.setup_benchmark.call(null,"streams-with-transform",(function (){
return streams_vs_channels.tools.promise__GT_chan.call(null,streams_vs_channels.streams_example.stream.process_with_transform_streams.call(null));
}));

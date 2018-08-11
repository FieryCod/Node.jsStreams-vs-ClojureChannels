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
/**
 * Runs the channels benchmark number of times.
 *   We should wait couple of seconds to warm up Clojurescript/Node.js
 */
streams_vs_channels.benchmark_runner.run_channels_benchmark = (function streams_vs_channels$benchmark_runner$run_channels_benchmark(times){
streams_vs_channels.benchmark_runner.welcome_str.call(null);

var memory_filename__992__auto__ = ["channels","_memory.report"].join('');
var eventloop_filename__993__auto__ = ["channels","_eventloop.report"].join('');
var should_close__994__auto__ = streams_vs_channels.nodejs.register_close.call(null);
var writable_memory_stream__995__auto__ = streams_vs_channels.nodejs.create_writable_stream.call(null,memory_filename__992__auto__);
var writable_eventloop_stream__996__auto__ = streams_vs_channels.nodejs.create_writable_stream.call(null,eventloop_filename__993__auto__);
setTimeout(((function (memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__){
return (function (){
var start_time = cljs.core.system_time.call(null);
var c__6516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto__,start_time,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto__,start_time,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__){
return (function (state_8670){
var state_val_8671 = (state_8670[(1)]);
if((state_val_8671 === (1))){
var inst_8651 = (0);
var state_8670__$1 = (function (){var statearr_8672 = state_8670;
(statearr_8672[(7)] = inst_8651);

return statearr_8672;
})();
var statearr_8673_8685 = state_8670__$1;
(statearr_8673_8685[(2)] = null);

(statearr_8673_8685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8671 === (2))){
var inst_8651 = (state_8670[(7)]);
var inst_8653 = (inst_8651 < times);
var state_8670__$1 = state_8670;
if(cljs.core.truth_(inst_8653)){
var statearr_8674_8686 = state_8670__$1;
(statearr_8674_8686[(1)] = (4));

} else {
var statearr_8675_8687 = state_8670__$1;
(statearr_8675_8687[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8671 === (3))){
var inst_8665 = (state_8670[(2)]);
var inst_8666 = streams_vs_channels.tools.elapsed_time.call(null,start_time);
var inst_8667 = cljs.core.println.call(null,"Benchmark took",inst_8666,"ms ;)\n");
var inst_8668 = foreign.CloseProgramEventEmitter.emitter.emit("CloseProgram");
var state_8670__$1 = (function (){var statearr_8676 = state_8670;
(statearr_8676[(8)] = inst_8665);

(statearr_8676[(9)] = inst_8667);

return statearr_8676;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8670__$1,inst_8668);
} else {
if((state_val_8671 === (4))){
var inst_8655 = streams_vs_channels.channels_example.channel.process_with_channels.call(null);
var state_8670__$1 = state_8670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8670__$1,(7),inst_8655);
} else {
if((state_val_8671 === (5))){
var state_8670__$1 = state_8670;
var statearr_8677_8688 = state_8670__$1;
(statearr_8677_8688[(2)] = null);

(statearr_8677_8688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8671 === (6))){
var inst_8663 = (state_8670[(2)]);
var state_8670__$1 = state_8670;
var statearr_8678_8689 = state_8670__$1;
(statearr_8678_8689[(2)] = inst_8663);

(statearr_8678_8689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8671 === (7))){
var inst_8651 = (state_8670[(7)]);
var inst_8657 = (state_8670[(2)]);
var inst_8658 = cljs.core.println.call(null,"\n");
var inst_8659 = (inst_8651 + (1));
var inst_8651__$1 = inst_8659;
var state_8670__$1 = (function (){var statearr_8679 = state_8670;
(statearr_8679[(10)] = inst_8657);

(statearr_8679[(11)] = inst_8658);

(statearr_8679[(7)] = inst_8651__$1);

return statearr_8679;
})();
var statearr_8680_8690 = state_8670__$1;
(statearr_8680_8690[(2)] = null);

(statearr_8680_8690[(1)] = (2));


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
});})(c__6516__auto__,start_time,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__))
;
return ((function (switch__6425__auto__,c__6516__auto__,start_time,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__){
return (function() {
var streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6426__auto__ = null;
var streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6426__auto____0 = (function (){
var statearr_8681 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8681[(0)] = streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6426__auto__);

(statearr_8681[(1)] = (1));

return statearr_8681;
});
var streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6426__auto____1 = (function (state_8670){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_8670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e8682){if((e8682 instanceof Object)){
var ex__6429__auto__ = e8682;
var statearr_8683_8691 = state_8670;
(statearr_8683_8691[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8692 = state_8670;
state_8670 = G__8692;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6426__auto__ = function(state_8670){
switch(arguments.length){
case 0:
return streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6426__auto____0.call(this);
case 1:
return streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6426__auto____1.call(this,state_8670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6426__auto____0;
streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6426__auto____1;
return streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto__,start_time,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__))
})();
var state__6518__auto__ = (function (){var statearr_8684 = f__6517__auto__.call(null);
(statearr_8684[(6)] = c__6516__auto__);

return statearr_8684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto__,start_time,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__))
);

return c__6516__auto__;
});})(memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__))
,(4000));

var secs__997__auto__ = cljs.core.atom.call(null,(1));
var id__998__auto__ = streams_vs_channels.nodejs.set_interval.call(null,((function (secs__997__auto__,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,should_close__994__auto__))){
writable_memory_stream__995__auto__.write([cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((process.memoryUsage().heapUsed / (1024)) / (1024))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,secs__997__auto__)),"\n"].join(''));

writable_eventloop_stream__996__auto__.write([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,process._getActiveRequests()))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,secs__997__auto__)),"\n"].join(''));

return cljs.core.swap_BANG_.call(null,secs__997__auto__,cljs.core.inc);
} else {
writable_memory_stream__995__auto__.end();

return writable_eventloop_stream__996__auto__.end();
}
});})(secs__997__auto__,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__))
,(1000));
return writable_memory_stream__995__auto__.on("close",((function (secs__997__auto__,id__998__auto__,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__){
return (function (){
return streams_vs_channels.nodejs.clear_interval.call(null,id__998__auto__);
});})(secs__997__auto__,id__998__auto__,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__))
);
});
/**
 * Runs the streams benchmark number of times.
 *   We should wait couple of seconds to warm up Clojurescript/Node.js
 */
streams_vs_channels.benchmark_runner.run_streams_benchmark = (function streams_vs_channels$benchmark_runner$run_streams_benchmark(times){
streams_vs_channels.benchmark_runner.welcome_str.call(null);

var memory_filename__992__auto__ = ["streams","_memory.report"].join('');
var eventloop_filename__993__auto__ = ["streams","_eventloop.report"].join('');
var should_close__994__auto__ = streams_vs_channels.nodejs.register_close.call(null);
var writable_memory_stream__995__auto__ = streams_vs_channels.nodejs.create_writable_stream.call(null,memory_filename__992__auto__);
var writable_eventloop_stream__996__auto__ = streams_vs_channels.nodejs.create_writable_stream.call(null,eventloop_filename__993__auto__);
setTimeout(((function (memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__){
return (function (){
var start_time = cljs.core.system_time.call(null);
var c__6516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto__,start_time,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto__,start_time,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__){
return (function (state_8713){
var state_val_8714 = (state_8713[(1)]);
if((state_val_8714 === (1))){
var inst_8693 = (0);
var state_8713__$1 = (function (){var statearr_8715 = state_8713;
(statearr_8715[(7)] = inst_8693);

return statearr_8715;
})();
var statearr_8716_8728 = state_8713__$1;
(statearr_8716_8728[(2)] = null);

(statearr_8716_8728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8714 === (2))){
var inst_8693 = (state_8713[(7)]);
var inst_8695 = (inst_8693 < times);
var state_8713__$1 = state_8713;
if(cljs.core.truth_(inst_8695)){
var statearr_8717_8729 = state_8713__$1;
(statearr_8717_8729[(1)] = (4));

} else {
var statearr_8718_8730 = state_8713__$1;
(statearr_8718_8730[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8714 === (3))){
var inst_8708 = (state_8713[(2)]);
var inst_8709 = streams_vs_channels.tools.elapsed_time.call(null,start_time);
var inst_8710 = cljs.core.println.call(null,"Benchmark took",inst_8709,"ms ;)\n");
var inst_8711 = foreign.CloseProgramEventEmitter.emitter.emit("CloseProgram");
var state_8713__$1 = (function (){var statearr_8719 = state_8713;
(statearr_8719[(8)] = inst_8710);

(statearr_8719[(9)] = inst_8708);

return statearr_8719;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8713__$1,inst_8711);
} else {
if((state_val_8714 === (4))){
var inst_8697 = streams_vs_channels.streams_example.stream.process_with_streams.call(null);
var inst_8698 = streams_vs_channels.tools.promise__GT_chan.call(null,inst_8697);
var state_8713__$1 = state_8713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8713__$1,(7),inst_8698);
} else {
if((state_val_8714 === (5))){
var state_8713__$1 = state_8713;
var statearr_8720_8731 = state_8713__$1;
(statearr_8720_8731[(2)] = null);

(statearr_8720_8731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8714 === (6))){
var inst_8706 = (state_8713[(2)]);
var state_8713__$1 = state_8713;
var statearr_8721_8732 = state_8713__$1;
(statearr_8721_8732[(2)] = inst_8706);

(statearr_8721_8732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8714 === (7))){
var inst_8693 = (state_8713[(7)]);
var inst_8700 = (state_8713[(2)]);
var inst_8701 = cljs.core.println.call(null,"\n");
var inst_8702 = (inst_8693 + (1));
var inst_8693__$1 = inst_8702;
var state_8713__$1 = (function (){var statearr_8722 = state_8713;
(statearr_8722[(10)] = inst_8701);

(statearr_8722[(11)] = inst_8700);

(statearr_8722[(7)] = inst_8693__$1);

return statearr_8722;
})();
var statearr_8723_8733 = state_8713__$1;
(statearr_8723_8733[(2)] = null);

(statearr_8723_8733[(1)] = (2));


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
});})(c__6516__auto__,start_time,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__))
;
return ((function (switch__6425__auto__,c__6516__auto__,start_time,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__){
return (function() {
var streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6426__auto__ = null;
var streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6426__auto____0 = (function (){
var statearr_8724 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8724[(0)] = streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6426__auto__);

(statearr_8724[(1)] = (1));

return statearr_8724;
});
var streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6426__auto____1 = (function (state_8713){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_8713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e8725){if((e8725 instanceof Object)){
var ex__6429__auto__ = e8725;
var statearr_8726_8734 = state_8713;
(statearr_8726_8734[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8735 = state_8713;
state_8713 = G__8735;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6426__auto__ = function(state_8713){
switch(arguments.length){
case 0:
return streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6426__auto____0.call(this);
case 1:
return streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6426__auto____1.call(this,state_8713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6426__auto____0;
streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6426__auto____1;
return streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto__,start_time,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__))
})();
var state__6518__auto__ = (function (){var statearr_8727 = f__6517__auto__.call(null);
(statearr_8727[(6)] = c__6516__auto__);

return statearr_8727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto__,start_time,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__))
);

return c__6516__auto__;
});})(memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__))
,(4000));

var secs__997__auto__ = cljs.core.atom.call(null,(1));
var id__998__auto__ = streams_vs_channels.nodejs.set_interval.call(null,((function (secs__997__auto__,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,should_close__994__auto__))){
writable_memory_stream__995__auto__.write([cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((process.memoryUsage().heapUsed / (1024)) / (1024))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,secs__997__auto__)),"\n"].join(''));

writable_eventloop_stream__996__auto__.write([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,process._getActiveRequests()))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,secs__997__auto__)),"\n"].join(''));

return cljs.core.swap_BANG_.call(null,secs__997__auto__,cljs.core.inc);
} else {
writable_memory_stream__995__auto__.end();

return writable_eventloop_stream__996__auto__.end();
}
});})(secs__997__auto__,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__))
,(1000));
return writable_memory_stream__995__auto__.on("close",((function (secs__997__auto__,id__998__auto__,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__){
return (function (){
return streams_vs_channels.nodejs.clear_interval.call(null,id__998__auto__);
});})(secs__997__auto__,id__998__auto__,memory_filename__992__auto__,eventloop_filename__993__auto__,should_close__994__auto__,writable_memory_stream__995__auto__,writable_eventloop_stream__996__auto__))
);
});

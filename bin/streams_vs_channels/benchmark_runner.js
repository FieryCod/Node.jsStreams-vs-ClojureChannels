// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.benchmark_runner');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('streams_vs_channels.tools');
goog.require('streams_vs_channels.channels_example.channel');
goog.require('streams_vs_channels.streams_example.stream');
/**
 * Runs the channels benchmark number of times.
 *   We should wait couple of seconds to warm up Clojurescript/Node.js
 */
streams_vs_channels.benchmark_runner.run_channels_benchmark = (function streams_vs_channels$benchmark_runner$run_channels_benchmark(times){
cljs.core.println.call(null,"Preparing the env for benchmarking\n");

cljs.core.println.call(null,"Wait 3 seconds for env warmup");

return setTimeout((function (){
var start_time = cljs.core.system_time.call(null);
var c__6502__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto__,start_time){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto__,start_time){
return (function (state_8677){
var state_val_8678 = (state_8677[(1)]);
if((state_val_8678 === (1))){
var inst_8659 = (0);
var state_8677__$1 = (function (){var statearr_8679 = state_8677;
(statearr_8679[(7)] = inst_8659);

return statearr_8679;
})();
var statearr_8680_8692 = state_8677__$1;
(statearr_8680_8692[(2)] = null);

(statearr_8680_8692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8678 === (2))){
var inst_8659 = (state_8677[(7)]);
var inst_8661 = (inst_8659 < times);
var state_8677__$1 = state_8677;
if(cljs.core.truth_(inst_8661)){
var statearr_8681_8693 = state_8677__$1;
(statearr_8681_8693[(1)] = (4));

} else {
var statearr_8682_8694 = state_8677__$1;
(statearr_8682_8694[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8678 === (3))){
var inst_8673 = (state_8677[(2)]);
var inst_8674 = streams_vs_channels.tools.elapsed_time.call(null,start_time);
var inst_8675 = cljs.core.println.call(null,"Benchmark took",inst_8674,"ms ;)\n");
var state_8677__$1 = (function (){var statearr_8683 = state_8677;
(statearr_8683[(8)] = inst_8673);

return statearr_8683;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8677__$1,inst_8675);
} else {
if((state_val_8678 === (4))){
var inst_8663 = streams_vs_channels.channels_example.channel.process_with_channels.call(null);
var state_8677__$1 = state_8677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8677__$1,(7),inst_8663);
} else {
if((state_val_8678 === (5))){
var state_8677__$1 = state_8677;
var statearr_8684_8695 = state_8677__$1;
(statearr_8684_8695[(2)] = null);

(statearr_8684_8695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8678 === (6))){
var inst_8671 = (state_8677[(2)]);
var state_8677__$1 = state_8677;
var statearr_8685_8696 = state_8677__$1;
(statearr_8685_8696[(2)] = inst_8671);

(statearr_8685_8696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8678 === (7))){
var inst_8659 = (state_8677[(7)]);
var inst_8665 = (state_8677[(2)]);
var inst_8666 = cljs.core.println.call(null,"\n");
var inst_8667 = (inst_8659 + (1));
var inst_8659__$1 = inst_8667;
var state_8677__$1 = (function (){var statearr_8686 = state_8677;
(statearr_8686[(9)] = inst_8666);

(statearr_8686[(10)] = inst_8665);

(statearr_8686[(7)] = inst_8659__$1);

return statearr_8686;
})();
var statearr_8687_8697 = state_8677__$1;
(statearr_8687_8697[(2)] = null);

(statearr_8687_8697[(1)] = (2));


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
});})(c__6502__auto__,start_time))
;
return ((function (switch__6411__auto__,c__6502__auto__,start_time){
return (function() {
var streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6412__auto__ = null;
var streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6412__auto____0 = (function (){
var statearr_8688 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8688[(0)] = streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6412__auto__);

(statearr_8688[(1)] = (1));

return statearr_8688;
});
var streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6412__auto____1 = (function (state_8677){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_8677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e8689){if((e8689 instanceof Object)){
var ex__6415__auto__ = e8689;
var statearr_8690_8698 = state_8677;
(statearr_8690_8698[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8699 = state_8677;
state_8677 = G__8699;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6412__auto__ = function(state_8677){
switch(arguments.length){
case 0:
return streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6412__auto____0.call(this);
case 1:
return streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6412__auto____1.call(this,state_8677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6412__auto____0;
streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6412__auto____1;
return streams_vs_channels$benchmark_runner$run_channels_benchmark_$_state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto__,start_time))
})();
var state__6504__auto__ = (function (){var statearr_8691 = f__6503__auto__.call(null);
(statearr_8691[(6)] = c__6502__auto__);

return statearr_8691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto__,start_time))
);

return c__6502__auto__;
}),(4000));
});
/**
 * Runs the streams benchmark number of times.
 *   We should wait couple of seconds to warm up Clojurescript/Node.js
 */
streams_vs_channels.benchmark_runner.run_streams_benchmark = (function streams_vs_channels$benchmark_runner$run_streams_benchmark(times){
cljs.core.println.call(null,"Preparing the env for benchmarking\n");

cljs.core.println.call(null,"Wait 3 seconds for env warmup");

return setTimeout((function (){
var start_time = cljs.core.system_time.call(null);
var c__6502__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto__,start_time){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto__,start_time){
return (function (state_8719){
var state_val_8720 = (state_8719[(1)]);
if((state_val_8720 === (1))){
var inst_8700 = (0);
var state_8719__$1 = (function (){var statearr_8721 = state_8719;
(statearr_8721[(7)] = inst_8700);

return statearr_8721;
})();
var statearr_8722_8734 = state_8719__$1;
(statearr_8722_8734[(2)] = null);

(statearr_8722_8734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8720 === (2))){
var inst_8700 = (state_8719[(7)]);
var inst_8702 = (inst_8700 < times);
var state_8719__$1 = state_8719;
if(cljs.core.truth_(inst_8702)){
var statearr_8723_8735 = state_8719__$1;
(statearr_8723_8735[(1)] = (4));

} else {
var statearr_8724_8736 = state_8719__$1;
(statearr_8724_8736[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8720 === (3))){
var inst_8715 = (state_8719[(2)]);
var inst_8716 = streams_vs_channels.tools.elapsed_time.call(null,start_time);
var inst_8717 = cljs.core.println.call(null,"Benchmark took",inst_8716,"ms ;)\n");
var state_8719__$1 = (function (){var statearr_8725 = state_8719;
(statearr_8725[(8)] = inst_8715);

return statearr_8725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8719__$1,inst_8717);
} else {
if((state_val_8720 === (4))){
var inst_8704 = streams_vs_channels.streams_example.stream.process_with_streams.call(null);
var inst_8705 = streams_vs_channels.tools.promise__GT_chan.call(null,inst_8704);
var state_8719__$1 = state_8719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8719__$1,(7),inst_8705);
} else {
if((state_val_8720 === (5))){
var state_8719__$1 = state_8719;
var statearr_8726_8737 = state_8719__$1;
(statearr_8726_8737[(2)] = null);

(statearr_8726_8737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8720 === (6))){
var inst_8713 = (state_8719[(2)]);
var state_8719__$1 = state_8719;
var statearr_8727_8738 = state_8719__$1;
(statearr_8727_8738[(2)] = inst_8713);

(statearr_8727_8738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8720 === (7))){
var inst_8700 = (state_8719[(7)]);
var inst_8707 = (state_8719[(2)]);
var inst_8708 = cljs.core.println.call(null,"\n");
var inst_8709 = (inst_8700 + (1));
var inst_8700__$1 = inst_8709;
var state_8719__$1 = (function (){var statearr_8728 = state_8719;
(statearr_8728[(9)] = inst_8707);

(statearr_8728[(7)] = inst_8700__$1);

(statearr_8728[(10)] = inst_8708);

return statearr_8728;
})();
var statearr_8729_8739 = state_8719__$1;
(statearr_8729_8739[(2)] = null);

(statearr_8729_8739[(1)] = (2));


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
});})(c__6502__auto__,start_time))
;
return ((function (switch__6411__auto__,c__6502__auto__,start_time){
return (function() {
var streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6412__auto__ = null;
var streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6412__auto____0 = (function (){
var statearr_8730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8730[(0)] = streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6412__auto__);

(statearr_8730[(1)] = (1));

return statearr_8730;
});
var streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6412__auto____1 = (function (state_8719){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_8719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e8731){if((e8731 instanceof Object)){
var ex__6415__auto__ = e8731;
var statearr_8732_8740 = state_8719;
(statearr_8732_8740[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8741 = state_8719;
state_8719 = G__8741;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6412__auto__ = function(state_8719){
switch(arguments.length){
case 0:
return streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6412__auto____0.call(this);
case 1:
return streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6412__auto____1.call(this,state_8719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6412__auto____0;
streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6412__auto____1;
return streams_vs_channels$benchmark_runner$run_streams_benchmark_$_state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto__,start_time))
})();
var state__6504__auto__ = (function (){var statearr_8733 = f__6503__auto__.call(null);
(statearr_8733[(6)] = c__6502__auto__);

return statearr_8733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto__,start_time))
);

return c__6502__auto__;
}),(4000));
});

// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.channels_example.tasks');
goog.require('cljs.core');
goog.require('cljs.core.async');
/**
 * Puts the number onto the chan and updates the counter
 */
streams_vs_channels.channels_example.tasks.put_and_count = (function streams_vs_channels$channels_example$tasks$put_and_count(n,ch,at){
cljs.core.async.put_BANG_.call(null,ch,n);

cljs.core.swap_BANG_.call(null,at,cljs.core.inc);

return null;
});
/**
 * Groups the numbers by fizz-buzz task and counts the numbers inside the channels
 *   (Task #1)
 */
streams_vs_channels.channels_example.tasks.select_chan_1 = (function streams_vs_channels$channels_example$tasks$select_chan_1(n,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,fizz_atom,buzz_atom,fizzbuzz_atom,others_atom){
var pred__8463 = (function (p1__8462_SHARP_,p2__8461_SHARP_){
return (cljs.core.mod.call(null,p2__8461_SHARP_,p1__8462_SHARP_) === (0));
});
var expr__8464 = n;
if(cljs.core.truth_(pred__8463.call(null,(15),expr__8464))){
return streams_vs_channels.channels_example.tasks.put_and_count.call(null,n,fizzbuzz_chan,fizzbuzz_atom);
} else {
if(cljs.core.truth_(pred__8463.call(null,(3),expr__8464))){
return streams_vs_channels.channels_example.tasks.put_and_count.call(null,n,fizz_chan,fizz_atom);
} else {
if(cljs.core.truth_(pred__8463.call(null,(5),expr__8464))){
return streams_vs_channels.channels_example.tasks.put_and_count.call(null,n,buzz_chan,buzz_atom);
} else {
return streams_vs_channels.channels_example.tasks.put_and_count.call(null,n,others_chan,others_atom);
}
}
}
});
/**
 * Takes the group state and creates the string "Group n: '(GroupContent)"
 *   Updates the group-state and returns string
 *   (Task #3)
 */
streams_vs_channels.channels_example.tasks.group_string_3 = (function streams_vs_channels$channels_example$tasks$group_string_3(group_state,group){
var ret_str = ["Group ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,group_state)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group),"\n"].join('');
cljs.core.swap_BANG_.call(null,group_state,cljs.core.inc);

return ret_str;
});
/**
 * Processes channel of values and puts the transformed values to stream
 */
streams_vs_channels.channels_example.tasks.process_channel_3 = (function streams_vs_channels$channels_example$tasks$process_channel_3(achan,stream,transform_fn){
var c__6502__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto__){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto__){
return (function (state_8484){
var state_val_8485 = (state_8484[(1)]);
if((state_val_8485 === (1))){
var state_8484__$1 = state_8484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8484__$1,(2),achan);
} else {
if((state_val_8485 === (2))){
var inst_8467 = (state_8484[(2)]);
var inst_8468 = inst_8467;
var state_8484__$1 = (function (){var statearr_8486 = state_8484;
(statearr_8486[(7)] = inst_8468);

return statearr_8486;
})();
var statearr_8487_8499 = state_8484__$1;
(statearr_8487_8499[(2)] = null);

(statearr_8487_8499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8485 === (3))){
var inst_8468 = (state_8484[(7)]);
var inst_8470 = (inst_8468 == null);
var inst_8471 = cljs.core.not.call(null,inst_8470);
var state_8484__$1 = state_8484;
if(inst_8471){
var statearr_8488_8500 = state_8484__$1;
(statearr_8488_8500[(1)] = (5));

} else {
var statearr_8489_8501 = state_8484__$1;
(statearr_8489_8501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8485 === (4))){
var inst_8482 = (state_8484[(2)]);
var state_8484__$1 = state_8484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8484__$1,inst_8482);
} else {
if((state_val_8485 === (5))){
var inst_8468 = (state_8484[(7)]);
var inst_8473 = transform_fn.call(null,inst_8468);
var inst_8474 = stream.write(inst_8473);
var state_8484__$1 = (function (){var statearr_8490 = state_8484;
(statearr_8490[(8)] = inst_8474);

return statearr_8490;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8484__$1,(8),achan);
} else {
if((state_val_8485 === (6))){
var state_8484__$1 = state_8484;
var statearr_8491_8502 = state_8484__$1;
(statearr_8491_8502[(2)] = null);

(statearr_8491_8502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8485 === (7))){
var inst_8480 = (state_8484[(2)]);
var state_8484__$1 = state_8484;
var statearr_8492_8503 = state_8484__$1;
(statearr_8492_8503[(2)] = inst_8480);

(statearr_8492_8503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8485 === (8))){
var inst_8476 = (state_8484[(2)]);
var inst_8468 = inst_8476;
var state_8484__$1 = (function (){var statearr_8493 = state_8484;
(statearr_8493[(7)] = inst_8468);

return statearr_8493;
})();
var statearr_8494_8504 = state_8484__$1;
(statearr_8494_8504[(2)] = null);

(statearr_8494_8504[(1)] = (3));


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
}
});})(c__6502__auto__))
;
return ((function (switch__6411__auto__,c__6502__auto__){
return (function() {
var streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6412__auto__ = null;
var streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6412__auto____0 = (function (){
var statearr_8495 = [null,null,null,null,null,null,null,null,null];
(statearr_8495[(0)] = streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6412__auto__);

(statearr_8495[(1)] = (1));

return statearr_8495;
});
var streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6412__auto____1 = (function (state_8484){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_8484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e8496){if((e8496 instanceof Object)){
var ex__6415__auto__ = e8496;
var statearr_8497_8505 = state_8484;
(statearr_8497_8505[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8506 = state_8484;
state_8484 = G__8506;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6412__auto__ = function(state_8484){
switch(arguments.length){
case 0:
return streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6412__auto____0.call(this);
case 1:
return streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6412__auto____1.call(this,state_8484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6412__auto____0;
streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6412__auto____1;
return streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto__))
})();
var state__6504__auto__ = (function (){var statearr_8498 = f__6503__auto__.call(null);
(statearr_8498[(6)] = c__6502__auto__);

return statearr_8498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto__))
);

return c__6502__auto__;
});
/**
 * Writes the end string to the output stream
 */
streams_vs_channels.channels_example.tasks.write_counter_state_4 = (function streams_vs_channels$channels_example$tasks$write_counter_state_4(stream,name,counter){
stream.write(["\nThere was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,counter))," numbers processed for stream ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," \n"].join(''));

return stream.end();
});

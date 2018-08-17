// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.channels_example.tasks');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('streams_vs_channels.settings');
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
var pred__10450 = (function (p1__10449_SHARP_,p2__10448_SHARP_){
return (cljs.core.mod.call(null,p2__10448_SHARP_,p1__10449_SHARP_) === (0));
});
var expr__10451 = n;
if(cljs.core.truth_(pred__10450.call(null,(15),expr__10451))){
return streams_vs_channels.channels_example.tasks.put_and_count.call(null,n,fizzbuzz_chan,fizzbuzz_atom);
} else {
if(cljs.core.truth_(pred__10450.call(null,(3),expr__10451))){
return streams_vs_channels.channels_example.tasks.put_and_count.call(null,n,fizz_chan,fizz_atom);
} else {
if(cljs.core.truth_(pred__10450.call(null,(5),expr__10451))){
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
var c__6646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto__){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto__){
return (function (state_10471){
var state_val_10472 = (state_10471[(1)]);
if((state_val_10472 === (1))){
var state_10471__$1 = state_10471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10471__$1,(2),achan);
} else {
if((state_val_10472 === (2))){
var inst_10454 = (state_10471[(2)]);
var inst_10455 = inst_10454;
var state_10471__$1 = (function (){var statearr_10473 = state_10471;
(statearr_10473[(7)] = inst_10455);

return statearr_10473;
})();
var statearr_10474_10486 = state_10471__$1;
(statearr_10474_10486[(2)] = null);

(statearr_10474_10486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10472 === (3))){
var inst_10455 = (state_10471[(7)]);
var inst_10457 = (inst_10455 == null);
var inst_10458 = cljs.core.not.call(null,inst_10457);
var state_10471__$1 = state_10471;
if(inst_10458){
var statearr_10475_10487 = state_10471__$1;
(statearr_10475_10487[(1)] = (5));

} else {
var statearr_10476_10488 = state_10471__$1;
(statearr_10476_10488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10472 === (4))){
var inst_10469 = (state_10471[(2)]);
var state_10471__$1 = state_10471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10471__$1,inst_10469);
} else {
if((state_val_10472 === (5))){
var inst_10455 = (state_10471[(7)]);
var inst_10460 = transform_fn.call(null,inst_10455);
var inst_10461 = stream.write(inst_10460);
var state_10471__$1 = (function (){var statearr_10477 = state_10471;
(statearr_10477[(8)] = inst_10461);

return statearr_10477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10471__$1,(8),achan);
} else {
if((state_val_10472 === (6))){
var state_10471__$1 = state_10471;
var statearr_10478_10489 = state_10471__$1;
(statearr_10478_10489[(2)] = null);

(statearr_10478_10489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10472 === (7))){
var inst_10467 = (state_10471[(2)]);
var state_10471__$1 = state_10471;
var statearr_10479_10490 = state_10471__$1;
(statearr_10479_10490[(2)] = inst_10467);

(statearr_10479_10490[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10472 === (8))){
var inst_10463 = (state_10471[(2)]);
var inst_10455 = inst_10463;
var state_10471__$1 = (function (){var statearr_10480 = state_10471;
(statearr_10480[(7)] = inst_10455);

return statearr_10480;
})();
var statearr_10481_10491 = state_10471__$1;
(statearr_10481_10491[(2)] = null);

(statearr_10481_10491[(1)] = (3));


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
});})(c__6646__auto__))
;
return ((function (switch__6487__auto__,c__6646__auto__){
return (function() {
var streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6488__auto__ = null;
var streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6488__auto____0 = (function (){
var statearr_10482 = [null,null,null,null,null,null,null,null,null];
(statearr_10482[(0)] = streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6488__auto__);

(statearr_10482[(1)] = (1));

return statearr_10482;
});
var streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6488__auto____1 = (function (state_10471){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_10471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e10483){if((e10483 instanceof Object)){
var ex__6491__auto__ = e10483;
var statearr_10484_10492 = state_10471;
(statearr_10484_10492[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10493 = state_10471;
state_10471 = G__10493;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6488__auto__ = function(state_10471){
switch(arguments.length){
case 0:
return streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6488__auto____0.call(this);
case 1:
return streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6488__auto____1.call(this,state_10471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6488__auto____0;
streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6488__auto____1;
return streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto__))
})();
var state__6648__auto__ = (function (){var statearr_10485 = f__6647__auto__.call(null);
(statearr_10485[(6)] = c__6646__auto__);

return statearr_10485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto__))
);

return c__6646__auto__;
});
/**
 * Writes the end string to the output stream
 */
streams_vs_channels.channels_example.tasks.write_counter_state_4 = (function streams_vs_channels$channels_example$tasks$write_counter_state_4(stream,name,counter){
stream.write(["\nThere was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,counter))," numbers processed for stream ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," \n"].join(''));

return stream.end();
});

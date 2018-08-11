// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.channels_example.tasks');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('streams_vs_channels.settings');
goog.require('streams_vs_channels.nodejs');
/**
 * Puts the number onto the chan and updates the counter
 */
streams_vs_channels.channels_example.tasks.put_and_count = (function streams_vs_channels$channels_example$tasks$put_and_count(n,ch,at){
cljs.core.async.put_BANG_.call(null,ch,n);

cljs.core.swap_BANG_.call(null,at,cljs.core.inc);

return null;
});
/**
 * Returns the writable streams of files fizz, buzz, fizzbuzz and others
 */
streams_vs_channels.channels_example.tasks.create_writeable_streams_1 = (function streams_vs_channels$channels_example$tasks$create_writeable_streams_1(){
return cljs.core.mapv.call(null,(function (p1__8450_SHARP_){
return streams_vs_channels.nodejs.create_writable_stream.call(null,p1__8450_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [streams_vs_channels.settings.fizz_filename,streams_vs_channels.settings.buzz_filename,streams_vs_channels.settings.fizzbuzz_filename,streams_vs_channels.settings.others_filename], null));
});
/**
 * Groups the numbers by fizz-buzz task and counts the numbers inside the channels
 *   (Task #1)
 */
streams_vs_channels.channels_example.tasks.select_chan_1 = (function streams_vs_channels$channels_example$tasks$select_chan_1(n,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,fizz_atom,buzz_atom,fizzbuzz_atom,others_atom){
var pred__8453 = (function (p1__8452_SHARP_,p2__8451_SHARP_){
return (cljs.core.mod.call(null,p2__8451_SHARP_,p1__8452_SHARP_) === (0));
});
var expr__8454 = n;
if(cljs.core.truth_(pred__8453.call(null,(15),expr__8454))){
return streams_vs_channels.channels_example.tasks.put_and_count.call(null,n,fizzbuzz_chan,fizzbuzz_atom);
} else {
if(cljs.core.truth_(pred__8453.call(null,(3),expr__8454))){
return streams_vs_channels.channels_example.tasks.put_and_count.call(null,n,fizz_chan,fizz_atom);
} else {
if(cljs.core.truth_(pred__8453.call(null,(5),expr__8454))){
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
var c__6516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto__){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto__){
return (function (state_8474){
var state_val_8475 = (state_8474[(1)]);
if((state_val_8475 === (1))){
var state_8474__$1 = state_8474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8474__$1,(2),achan);
} else {
if((state_val_8475 === (2))){
var inst_8457 = (state_8474[(2)]);
var inst_8458 = inst_8457;
var state_8474__$1 = (function (){var statearr_8476 = state_8474;
(statearr_8476[(7)] = inst_8458);

return statearr_8476;
})();
var statearr_8477_8489 = state_8474__$1;
(statearr_8477_8489[(2)] = null);

(statearr_8477_8489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8475 === (3))){
var inst_8458 = (state_8474[(7)]);
var inst_8460 = (inst_8458 == null);
var inst_8461 = cljs.core.not.call(null,inst_8460);
var state_8474__$1 = state_8474;
if(inst_8461){
var statearr_8478_8490 = state_8474__$1;
(statearr_8478_8490[(1)] = (5));

} else {
var statearr_8479_8491 = state_8474__$1;
(statearr_8479_8491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8475 === (4))){
var inst_8472 = (state_8474[(2)]);
var state_8474__$1 = state_8474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8474__$1,inst_8472);
} else {
if((state_val_8475 === (5))){
var inst_8458 = (state_8474[(7)]);
var inst_8463 = transform_fn.call(null,inst_8458);
var inst_8464 = stream.write(inst_8463);
var state_8474__$1 = (function (){var statearr_8480 = state_8474;
(statearr_8480[(8)] = inst_8464);

return statearr_8480;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8474__$1,(8),achan);
} else {
if((state_val_8475 === (6))){
var state_8474__$1 = state_8474;
var statearr_8481_8492 = state_8474__$1;
(statearr_8481_8492[(2)] = null);

(statearr_8481_8492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8475 === (7))){
var inst_8470 = (state_8474[(2)]);
var state_8474__$1 = state_8474;
var statearr_8482_8493 = state_8474__$1;
(statearr_8482_8493[(2)] = inst_8470);

(statearr_8482_8493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8475 === (8))){
var inst_8466 = (state_8474[(2)]);
var inst_8458 = inst_8466;
var state_8474__$1 = (function (){var statearr_8483 = state_8474;
(statearr_8483[(7)] = inst_8458);

return statearr_8483;
})();
var statearr_8484_8494 = state_8474__$1;
(statearr_8484_8494[(2)] = null);

(statearr_8484_8494[(1)] = (3));


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
});})(c__6516__auto__))
;
return ((function (switch__6425__auto__,c__6516__auto__){
return (function() {
var streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6426__auto__ = null;
var streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6426__auto____0 = (function (){
var statearr_8485 = [null,null,null,null,null,null,null,null,null];
(statearr_8485[(0)] = streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6426__auto__);

(statearr_8485[(1)] = (1));

return statearr_8485;
});
var streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6426__auto____1 = (function (state_8474){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_8474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e8486){if((e8486 instanceof Object)){
var ex__6429__auto__ = e8486;
var statearr_8487_8495 = state_8474;
(statearr_8487_8495[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8496 = state_8474;
state_8474 = G__8496;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6426__auto__ = function(state_8474){
switch(arguments.length){
case 0:
return streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6426__auto____0.call(this);
case 1:
return streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6426__auto____1.call(this,state_8474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6426__auto____0;
streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6426__auto____1;
return streams_vs_channels$channels_example$tasks$process_channel_3_$_state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto__))
})();
var state__6518__auto__ = (function (){var statearr_8488 = f__6517__auto__.call(null);
(statearr_8488[(6)] = c__6516__auto__);

return statearr_8488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto__))
);

return c__6516__auto__;
});
/**
 * Writes the end string to the output stream
 */
streams_vs_channels.channels_example.tasks.write_counter_state_4 = (function streams_vs_channels$channels_example$tasks$write_counter_state_4(stream,name,counter){
stream.write(["\nThere was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,counter))," numbers processed for stream ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," \n"].join(''));

return stream.end();
});

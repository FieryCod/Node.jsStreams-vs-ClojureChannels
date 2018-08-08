// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.channels_example.channel');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('streams_vs_channels.tools');
goog.require('streams_vs_channels.reader');
goog.require('streams_vs_channels.settings');
goog.require('streams_vs_channels.channels_example.state');
goog.require('streams_vs_channels.channels_example.writer');
goog.require('streams_vs_channels.channels_example.tasks');
streams_vs_channels.channels_example.channel.create_processing_chans = (function streams_vs_channels$channels_example$channel$create_processing_chans(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.chan.call(null,streams_vs_channels.settings.fizz_size,cljs.core.partition_all.call(null,streams_vs_channels.settings.fizz_size)),cljs.core.async.chan.call(null,streams_vs_channels.settings.buzz_size,cljs.core.partition_all.call(null,streams_vs_channels.settings.buzz_size)),cljs.core.async.chan.call(null,streams_vs_channels.settings.fizzbuzz_size,cljs.core.partition_all.call(null,streams_vs_channels.settings.fizzbuzz_size)),cljs.core.async.chan.call(null,streams_vs_channels.settings.default_size)], null);
});
streams_vs_channels.channels_example.channel.process_with_channels = (function streams_vs_channels$channels_example$channel$process_with_channels(){
var vec__8513 = streams_vs_channels.channels_example.writer.create_writeable_streams.call(null);
var fizz_stream = cljs.core.nth.call(null,vec__8513,(0),null);
var buzz_stream = cljs.core.nth.call(null,vec__8513,(1),null);
var fizzbuzz_stream = cljs.core.nth.call(null,vec__8513,(2),null);
var others_stream = cljs.core.nth.call(null,vec__8513,(3),null);
var streams = vec__8513;
var vec__8516 = streams_vs_channels.channels_example.channel.create_processing_chans.call(null);
var fizz_chan = cljs.core.nth.call(null,vec__8516,(0),null);
var buzz_chan = cljs.core.nth.call(null,vec__8516,(1),null);
var fizzbuzz_chan = cljs.core.nth.call(null,vec__8516,(2),null);
var others_chan = cljs.core.nth.call(null,vec__8516,(3),null);
var chans = vec__8516;
var vec__8519 = streams_vs_channels.channels_example.state.create_group_counters.call(null);
var fizz_group = cljs.core.nth.call(null,vec__8519,(0),null);
var buzz_group = cljs.core.nth.call(null,vec__8519,(1),null);
var fizzbuzz_group = cljs.core.nth.call(null,vec__8519,(2),null);
var start_time = cljs.core.system_time.call(null);
var counters = streams_vs_channels.channels_example.state.create_coll_counters.call(null);
streams_vs_channels.reader.read_file.call(null,streams_vs_channels.settings.seed_filename,((function (vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (num){
return cljs.core.apply.call(null,streams_vs_channels.channels_example.tasks.select_chan_1,parseInt(num),cljs.core.concat.call(null,chans,counters));
});})(vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
,((function (vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (){
var seq__8522 = cljs.core.seq.call(null,chans);
var chunk__8523 = null;
var count__8524 = (0);
var i__8525 = (0);
while(true){
if((i__8525 < count__8524)){
var c = cljs.core._nth.call(null,chunk__8523,i__8525);
cljs.core.async.close_BANG_.call(null,c);


var G__8624 = seq__8522;
var G__8625 = chunk__8523;
var G__8626 = count__8524;
var G__8627 = (i__8525 + (1));
seq__8522 = G__8624;
chunk__8523 = G__8625;
count__8524 = G__8626;
i__8525 = G__8627;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__8522);
if(temp__5457__auto__){
var seq__8522__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8522__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__8522__$1);
var G__8628 = cljs.core.chunk_rest.call(null,seq__8522__$1);
var G__8629 = c__4351__auto__;
var G__8630 = cljs.core.count.call(null,c__4351__auto__);
var G__8631 = (0);
seq__8522 = G__8628;
chunk__8523 = G__8629;
count__8524 = G__8630;
i__8525 = G__8631;
continue;
} else {
var c = cljs.core.first.call(null,seq__8522__$1);
cljs.core.async.close_BANG_.call(null,c);


var G__8632 = cljs.core.next.call(null,seq__8522__$1);
var G__8633 = null;
var G__8634 = (0);
var G__8635 = (0);
seq__8522 = G__8632;
chunk__8523 = G__8633;
count__8524 = G__8634;
i__8525 = G__8635;
continue;
}
} else {
return null;
}
}
break;
}
});})(vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);

var ch1 = streams_vs_channels.channels_example.tasks.process_channel_3.call(null,fizz_chan,fizz_stream,((function (vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (p1__8509_SHARP_){
return streams_vs_channels.channels_example.tasks.group_string_3.call(null,fizz_group,p1__8509_SHARP_);
});})(vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);
var ch2 = streams_vs_channels.channels_example.tasks.process_channel_3.call(null,buzz_chan,buzz_stream,((function (ch1,vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (p1__8510_SHARP_){
return streams_vs_channels.channels_example.tasks.group_string_3.call(null,buzz_group,p1__8510_SHARP_);
});})(ch1,vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);
var ch3 = streams_vs_channels.channels_example.tasks.process_channel_3.call(null,fizzbuzz_chan,fizzbuzz_stream,((function (ch1,ch2,vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (p1__8511_SHARP_){
return streams_vs_channels.channels_example.tasks.group_string_3.call(null,fizzbuzz_group,p1__8511_SHARP_);
});})(ch1,ch2,vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);
var ch4 = streams_vs_channels.channels_example.tasks.process_channel_3.call(null,others_chan,others_stream,((function (ch1,ch2,ch3,vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (p1__8512_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8512_SHARP_)," "].join('');
});})(ch1,ch2,ch3,vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);
var c__6502__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto__,ch1,ch2,ch3,ch4,vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto__,ch1,ch2,ch3,ch4,vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (state_8592){
var state_val_8593 = (state_8592[(1)]);
if((state_val_8593 === (7))){
var inst_8589 = (state_8592[(2)]);
var inst_8590 = streams_vs_channels.tools.print_exit_program_msg.call(null,start_time);
var state_8592__$1 = (function (){var statearr_8594 = state_8592;
(statearr_8594[(7)] = inst_8589);

return statearr_8594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8592__$1,inst_8590);
} else {
if((state_val_8593 === (1))){
var state_8592__$1 = state_8592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8592__$1,(2),ch1);
} else {
if((state_val_8593 === (4))){
var inst_8531 = (state_8592[(2)]);
var state_8592__$1 = (function (){var statearr_8595 = state_8592;
(statearr_8595[(8)] = inst_8531);

return statearr_8595;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8592__$1,(5),ch4);
} else {
if((state_val_8593 === (15))){
var inst_8562 = (state_8592[(9)]);
var inst_8574 = cljs.core.first.call(null,inst_8562);
var inst_8575 = cljs.core.nth.call(null,inst_8574,(0),null);
var inst_8576 = cljs.core.nth.call(null,inst_8574,(1),null);
var inst_8577 = cljs.core.nth.call(null,inst_8574,(2),null);
var inst_8578 = streams_vs_channels.channels_example.tasks.write_counter_state_4.call(null,inst_8575,inst_8576,inst_8577);
var inst_8579 = cljs.core.next.call(null,inst_8562);
var inst_8543 = inst_8579;
var inst_8544 = null;
var inst_8545 = (0);
var inst_8546 = (0);
var state_8592__$1 = (function (){var statearr_8596 = state_8592;
(statearr_8596[(10)] = inst_8544);

(statearr_8596[(11)] = inst_8545);

(statearr_8596[(12)] = inst_8543);

(statearr_8596[(13)] = inst_8578);

(statearr_8596[(14)] = inst_8546);

return statearr_8596;
})();
var statearr_8597_8636 = state_8592__$1;
(statearr_8597_8636[(2)] = null);

(statearr_8597_8636[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8593 === (13))){
var inst_8585 = (state_8592[(2)]);
var state_8592__$1 = state_8592;
var statearr_8598_8637 = state_8592__$1;
(statearr_8598_8637[(2)] = inst_8585);

(statearr_8598_8637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8593 === (6))){
var inst_8545 = (state_8592[(11)]);
var inst_8546 = (state_8592[(14)]);
var inst_8548 = (inst_8546 < inst_8545);
var inst_8549 = inst_8548;
var state_8592__$1 = state_8592;
if(cljs.core.truth_(inst_8549)){
var statearr_8599_8638 = state_8592__$1;
(statearr_8599_8638[(1)] = (8));

} else {
var statearr_8600_8639 = state_8592__$1;
(statearr_8600_8639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8593 === (3))){
var inst_8529 = (state_8592[(2)]);
var state_8592__$1 = (function (){var statearr_8601 = state_8592;
(statearr_8601[(15)] = inst_8529);

return statearr_8601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8592__$1,(4),ch3);
} else {
if((state_val_8593 === (12))){
var state_8592__$1 = state_8592;
var statearr_8602_8640 = state_8592__$1;
(statearr_8602_8640[(2)] = null);

(statearr_8602_8640[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8593 === (2))){
var inst_8527 = (state_8592[(2)]);
var state_8592__$1 = (function (){var statearr_8603 = state_8592;
(statearr_8603[(16)] = inst_8527);

return statearr_8603;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8592__$1,(3),ch2);
} else {
if((state_val_8593 === (11))){
var inst_8562 = (state_8592[(9)]);
var inst_8564 = cljs.core.chunked_seq_QMARK_.call(null,inst_8562);
var state_8592__$1 = state_8592;
if(inst_8564){
var statearr_8604_8641 = state_8592__$1;
(statearr_8604_8641[(1)] = (14));

} else {
var statearr_8605_8642 = state_8592__$1;
(statearr_8605_8642[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8593 === (9))){
var inst_8562 = (state_8592[(9)]);
var inst_8543 = (state_8592[(12)]);
var inst_8562__$1 = cljs.core.seq.call(null,inst_8543);
var state_8592__$1 = (function (){var statearr_8606 = state_8592;
(statearr_8606[(9)] = inst_8562__$1);

return statearr_8606;
})();
if(inst_8562__$1){
var statearr_8607_8643 = state_8592__$1;
(statearr_8607_8643[(1)] = (11));

} else {
var statearr_8608_8644 = state_8592__$1;
(statearr_8608_8644[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8593 === (5))){
var inst_8533 = (state_8592[(2)]);
var inst_8538 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8539 = ["fizz","buzz","fizzbuzz","other"];
var inst_8540 = (new cljs.core.PersistentVector(null,4,(5),inst_8538,inst_8539,null));
var inst_8541 = cljs.core.map.call(null,cljs.core.vector,streams,inst_8540,counters);
var inst_8542 = cljs.core.seq.call(null,inst_8541);
var inst_8543 = inst_8542;
var inst_8544 = null;
var inst_8545 = (0);
var inst_8546 = (0);
var state_8592__$1 = (function (){var statearr_8609 = state_8592;
(statearr_8609[(10)] = inst_8544);

(statearr_8609[(11)] = inst_8545);

(statearr_8609[(12)] = inst_8543);

(statearr_8609[(17)] = inst_8533);

(statearr_8609[(14)] = inst_8546);

return statearr_8609;
})();
var statearr_8610_8645 = state_8592__$1;
(statearr_8610_8645[(2)] = null);

(statearr_8610_8645[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8593 === (14))){
var inst_8562 = (state_8592[(9)]);
var inst_8566 = cljs.core.chunk_first.call(null,inst_8562);
var inst_8567 = cljs.core.chunk_rest.call(null,inst_8562);
var inst_8568 = cljs.core.count.call(null,inst_8566);
var inst_8543 = inst_8567;
var inst_8544 = inst_8566;
var inst_8545 = inst_8568;
var inst_8546 = (0);
var state_8592__$1 = (function (){var statearr_8611 = state_8592;
(statearr_8611[(10)] = inst_8544);

(statearr_8611[(11)] = inst_8545);

(statearr_8611[(12)] = inst_8543);

(statearr_8611[(14)] = inst_8546);

return statearr_8611;
})();
var statearr_8612_8646 = state_8592__$1;
(statearr_8612_8646[(2)] = null);

(statearr_8612_8646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8593 === (16))){
var inst_8582 = (state_8592[(2)]);
var state_8592__$1 = state_8592;
var statearr_8616_8647 = state_8592__$1;
(statearr_8616_8647[(2)] = inst_8582);

(statearr_8616_8647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8593 === (10))){
var inst_8587 = (state_8592[(2)]);
var state_8592__$1 = state_8592;
var statearr_8617_8648 = state_8592__$1;
(statearr_8617_8648[(2)] = inst_8587);

(statearr_8617_8648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8593 === (8))){
var inst_8544 = (state_8592[(10)]);
var inst_8545 = (state_8592[(11)]);
var inst_8543 = (state_8592[(12)]);
var inst_8546 = (state_8592[(14)]);
var inst_8554 = cljs.core._nth.call(null,inst_8544,inst_8546);
var inst_8555 = cljs.core.nth.call(null,inst_8554,(0),null);
var inst_8556 = cljs.core.nth.call(null,inst_8554,(1),null);
var inst_8557 = cljs.core.nth.call(null,inst_8554,(2),null);
var inst_8558 = streams_vs_channels.channels_example.tasks.write_counter_state_4.call(null,inst_8555,inst_8556,inst_8557);
var inst_8559 = (inst_8546 + (1));
var tmp8613 = inst_8544;
var tmp8614 = inst_8545;
var tmp8615 = inst_8543;
var inst_8543__$1 = tmp8615;
var inst_8544__$1 = tmp8613;
var inst_8545__$1 = tmp8614;
var inst_8546__$1 = inst_8559;
var state_8592__$1 = (function (){var statearr_8618 = state_8592;
(statearr_8618[(10)] = inst_8544__$1);

(statearr_8618[(11)] = inst_8545__$1);

(statearr_8618[(12)] = inst_8543__$1);

(statearr_8618[(18)] = inst_8558);

(statearr_8618[(14)] = inst_8546__$1);

return statearr_8618;
})();
var statearr_8619_8649 = state_8592__$1;
(statearr_8619_8649[(2)] = null);

(statearr_8619_8649[(1)] = (6));


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
}
}
}
}
}
}
}
}
});})(c__6502__auto__,ch1,ch2,ch3,ch4,vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
;
return ((function (switch__6411__auto__,c__6502__auto__,ch1,ch2,ch3,ch4,vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function() {
var streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6412__auto__ = null;
var streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6412__auto____0 = (function (){
var statearr_8620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8620[(0)] = streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6412__auto__);

(statearr_8620[(1)] = (1));

return statearr_8620;
});
var streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6412__auto____1 = (function (state_8592){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_8592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e8621){if((e8621 instanceof Object)){
var ex__6415__auto__ = e8621;
var statearr_8622_8650 = state_8592;
(statearr_8622_8650[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8651 = state_8592;
state_8592 = G__8651;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6412__auto__ = function(state_8592){
switch(arguments.length){
case 0:
return streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6412__auto____0.call(this);
case 1:
return streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6412__auto____1.call(this,state_8592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6412__auto____0;
streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6412__auto____1;
return streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto__,ch1,ch2,ch3,ch4,vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
})();
var state__6504__auto__ = (function (){var statearr_8623 = f__6503__auto__.call(null);
(statearr_8623[(6)] = c__6502__auto__);

return statearr_8623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto__,ch1,ch2,ch3,ch4,vec__8513,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8516,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8519,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);

return c__6502__auto__;
});

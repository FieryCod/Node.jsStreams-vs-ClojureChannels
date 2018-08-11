// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.channels_example.channel');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('streams_vs_channels.tools');
goog.require('streams_vs_channels.reader');
goog.require('streams_vs_channels.settings');
goog.require('streams_vs_channels.channels_example.state');
goog.require('streams_vs_channels.channels_example.tasks');
streams_vs_channels.channels_example.channel.create_processing_chans = (function streams_vs_channels$channels_example$channel$create_processing_chans(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.chan.call(null,streams_vs_channels.settings.fizz_size,cljs.core.partition_all.call(null,streams_vs_channels.settings.fizz_size)),cljs.core.async.chan.call(null,streams_vs_channels.settings.buzz_size,cljs.core.partition_all.call(null,streams_vs_channels.settings.buzz_size)),cljs.core.async.chan.call(null,streams_vs_channels.settings.fizzbuzz_size,cljs.core.partition_all.call(null,streams_vs_channels.settings.fizzbuzz_size)),cljs.core.async.chan.call(null,streams_vs_channels.settings.default_size)], null);
});
streams_vs_channels.channels_example.channel.process_with_channels = (function streams_vs_channels$channels_example$channel$process_with_channels(){
var vec__8503 = streams_vs_channels.channels_example.tasks.create_writeable_streams_1.call(null);
var fizz_stream = cljs.core.nth.call(null,vec__8503,(0),null);
var buzz_stream = cljs.core.nth.call(null,vec__8503,(1),null);
var fizzbuzz_stream = cljs.core.nth.call(null,vec__8503,(2),null);
var others_stream = cljs.core.nth.call(null,vec__8503,(3),null);
var streams = vec__8503;
var vec__8506 = streams_vs_channels.channels_example.channel.create_processing_chans.call(null);
var fizz_chan = cljs.core.nth.call(null,vec__8506,(0),null);
var buzz_chan = cljs.core.nth.call(null,vec__8506,(1),null);
var fizzbuzz_chan = cljs.core.nth.call(null,vec__8506,(2),null);
var others_chan = cljs.core.nth.call(null,vec__8506,(3),null);
var chans = vec__8506;
var vec__8509 = streams_vs_channels.channels_example.state.create_group_counters.call(null);
var fizz_group = cljs.core.nth.call(null,vec__8509,(0),null);
var buzz_group = cljs.core.nth.call(null,vec__8509,(1),null);
var fizzbuzz_group = cljs.core.nth.call(null,vec__8509,(2),null);
var start_time = cljs.core.system_time.call(null);
var counters = streams_vs_channels.channels_example.state.create_coll_counters.call(null);
streams_vs_channels.reader.read_file.call(null,streams_vs_channels.settings.seed_filename,((function (vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (num){
return cljs.core.apply.call(null,streams_vs_channels.channels_example.tasks.select_chan_1,parseInt(num),cljs.core.concat.call(null,chans,counters));
});})(vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
,((function (vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (){
var seq__8512 = cljs.core.seq.call(null,chans);
var chunk__8513 = null;
var count__8514 = (0);
var i__8515 = (0);
while(true){
if((i__8515 < count__8514)){
var c = cljs.core._nth.call(null,chunk__8513,i__8515);
cljs.core.async.close_BANG_.call(null,c);


var G__8614 = seq__8512;
var G__8615 = chunk__8513;
var G__8616 = count__8514;
var G__8617 = (i__8515 + (1));
seq__8512 = G__8614;
chunk__8513 = G__8615;
count__8514 = G__8616;
i__8515 = G__8617;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__8512);
if(temp__5457__auto__){
var seq__8512__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8512__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__8512__$1);
var G__8618 = cljs.core.chunk_rest.call(null,seq__8512__$1);
var G__8619 = c__4351__auto__;
var G__8620 = cljs.core.count.call(null,c__4351__auto__);
var G__8621 = (0);
seq__8512 = G__8618;
chunk__8513 = G__8619;
count__8514 = G__8620;
i__8515 = G__8621;
continue;
} else {
var c = cljs.core.first.call(null,seq__8512__$1);
cljs.core.async.close_BANG_.call(null,c);


var G__8622 = cljs.core.next.call(null,seq__8512__$1);
var G__8623 = null;
var G__8624 = (0);
var G__8625 = (0);
seq__8512 = G__8622;
chunk__8513 = G__8623;
count__8514 = G__8624;
i__8515 = G__8625;
continue;
}
} else {
return null;
}
}
break;
}
});})(vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);

var ch1 = streams_vs_channels.channels_example.tasks.process_channel_3.call(null,fizz_chan,fizz_stream,((function (vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (p1__8499_SHARP_){
return streams_vs_channels.channels_example.tasks.group_string_3.call(null,fizz_group,p1__8499_SHARP_);
});})(vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);
var ch2 = streams_vs_channels.channels_example.tasks.process_channel_3.call(null,buzz_chan,buzz_stream,((function (ch1,vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (p1__8500_SHARP_){
return streams_vs_channels.channels_example.tasks.group_string_3.call(null,buzz_group,p1__8500_SHARP_);
});})(ch1,vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);
var ch3 = streams_vs_channels.channels_example.tasks.process_channel_3.call(null,fizzbuzz_chan,fizzbuzz_stream,((function (ch1,ch2,vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (p1__8501_SHARP_){
return streams_vs_channels.channels_example.tasks.group_string_3.call(null,fizzbuzz_group,p1__8501_SHARP_);
});})(ch1,ch2,vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);
var ch4 = streams_vs_channels.channels_example.tasks.process_channel_3.call(null,others_chan,others_stream,((function (ch1,ch2,ch3,vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (p1__8502_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8502_SHARP_)," "].join('');
});})(ch1,ch2,ch3,vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);
var c__6516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto__,ch1,ch2,ch3,ch4,vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto__,ch1,ch2,ch3,ch4,vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (state_8582){
var state_val_8583 = (state_8582[(1)]);
if((state_val_8583 === (7))){
var inst_8579 = (state_8582[(2)]);
var inst_8580 = streams_vs_channels.tools.print_exit_program_msg.call(null,start_time);
var state_8582__$1 = (function (){var statearr_8584 = state_8582;
(statearr_8584[(7)] = inst_8579);

return statearr_8584;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8582__$1,inst_8580);
} else {
if((state_val_8583 === (1))){
var state_8582__$1 = state_8582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8582__$1,(2),ch1);
} else {
if((state_val_8583 === (4))){
var inst_8521 = (state_8582[(2)]);
var state_8582__$1 = (function (){var statearr_8585 = state_8582;
(statearr_8585[(8)] = inst_8521);

return statearr_8585;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8582__$1,(5),ch4);
} else {
if((state_val_8583 === (15))){
var inst_8552 = (state_8582[(9)]);
var inst_8564 = cljs.core.first.call(null,inst_8552);
var inst_8565 = cljs.core.nth.call(null,inst_8564,(0),null);
var inst_8566 = cljs.core.nth.call(null,inst_8564,(1),null);
var inst_8567 = cljs.core.nth.call(null,inst_8564,(2),null);
var inst_8568 = streams_vs_channels.channels_example.tasks.write_counter_state_4.call(null,inst_8565,inst_8566,inst_8567);
var inst_8569 = cljs.core.next.call(null,inst_8552);
var inst_8533 = inst_8569;
var inst_8534 = null;
var inst_8535 = (0);
var inst_8536 = (0);
var state_8582__$1 = (function (){var statearr_8586 = state_8582;
(statearr_8586[(10)] = inst_8568);

(statearr_8586[(11)] = inst_8535);

(statearr_8586[(12)] = inst_8534);

(statearr_8586[(13)] = inst_8533);

(statearr_8586[(14)] = inst_8536);

return statearr_8586;
})();
var statearr_8587_8626 = state_8582__$1;
(statearr_8587_8626[(2)] = null);

(statearr_8587_8626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (13))){
var inst_8575 = (state_8582[(2)]);
var state_8582__$1 = state_8582;
var statearr_8588_8627 = state_8582__$1;
(statearr_8588_8627[(2)] = inst_8575);

(statearr_8588_8627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (6))){
var inst_8535 = (state_8582[(11)]);
var inst_8536 = (state_8582[(14)]);
var inst_8538 = (inst_8536 < inst_8535);
var inst_8539 = inst_8538;
var state_8582__$1 = state_8582;
if(cljs.core.truth_(inst_8539)){
var statearr_8589_8628 = state_8582__$1;
(statearr_8589_8628[(1)] = (8));

} else {
var statearr_8590_8629 = state_8582__$1;
(statearr_8590_8629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (3))){
var inst_8519 = (state_8582[(2)]);
var state_8582__$1 = (function (){var statearr_8591 = state_8582;
(statearr_8591[(15)] = inst_8519);

return statearr_8591;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8582__$1,(4),ch3);
} else {
if((state_val_8583 === (12))){
var state_8582__$1 = state_8582;
var statearr_8592_8630 = state_8582__$1;
(statearr_8592_8630[(2)] = null);

(statearr_8592_8630[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (2))){
var inst_8517 = (state_8582[(2)]);
var state_8582__$1 = (function (){var statearr_8593 = state_8582;
(statearr_8593[(16)] = inst_8517);

return statearr_8593;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8582__$1,(3),ch2);
} else {
if((state_val_8583 === (11))){
var inst_8552 = (state_8582[(9)]);
var inst_8554 = cljs.core.chunked_seq_QMARK_.call(null,inst_8552);
var state_8582__$1 = state_8582;
if(inst_8554){
var statearr_8594_8631 = state_8582__$1;
(statearr_8594_8631[(1)] = (14));

} else {
var statearr_8595_8632 = state_8582__$1;
(statearr_8595_8632[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (9))){
var inst_8552 = (state_8582[(9)]);
var inst_8533 = (state_8582[(13)]);
var inst_8552__$1 = cljs.core.seq.call(null,inst_8533);
var state_8582__$1 = (function (){var statearr_8596 = state_8582;
(statearr_8596[(9)] = inst_8552__$1);

return statearr_8596;
})();
if(inst_8552__$1){
var statearr_8597_8633 = state_8582__$1;
(statearr_8597_8633[(1)] = (11));

} else {
var statearr_8598_8634 = state_8582__$1;
(statearr_8598_8634[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (5))){
var inst_8523 = (state_8582[(2)]);
var inst_8528 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8529 = ["fizz","buzz","fizzbuzz","others"];
var inst_8530 = (new cljs.core.PersistentVector(null,4,(5),inst_8528,inst_8529,null));
var inst_8531 = cljs.core.map.call(null,cljs.core.vector,streams,inst_8530,counters);
var inst_8532 = cljs.core.seq.call(null,inst_8531);
var inst_8533 = inst_8532;
var inst_8534 = null;
var inst_8535 = (0);
var inst_8536 = (0);
var state_8582__$1 = (function (){var statearr_8599 = state_8582;
(statearr_8599[(17)] = inst_8523);

(statearr_8599[(11)] = inst_8535);

(statearr_8599[(12)] = inst_8534);

(statearr_8599[(13)] = inst_8533);

(statearr_8599[(14)] = inst_8536);

return statearr_8599;
})();
var statearr_8600_8635 = state_8582__$1;
(statearr_8600_8635[(2)] = null);

(statearr_8600_8635[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (14))){
var inst_8552 = (state_8582[(9)]);
var inst_8556 = cljs.core.chunk_first.call(null,inst_8552);
var inst_8557 = cljs.core.chunk_rest.call(null,inst_8552);
var inst_8558 = cljs.core.count.call(null,inst_8556);
var inst_8533 = inst_8557;
var inst_8534 = inst_8556;
var inst_8535 = inst_8558;
var inst_8536 = (0);
var state_8582__$1 = (function (){var statearr_8601 = state_8582;
(statearr_8601[(11)] = inst_8535);

(statearr_8601[(12)] = inst_8534);

(statearr_8601[(13)] = inst_8533);

(statearr_8601[(14)] = inst_8536);

return statearr_8601;
})();
var statearr_8602_8636 = state_8582__$1;
(statearr_8602_8636[(2)] = null);

(statearr_8602_8636[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (16))){
var inst_8572 = (state_8582[(2)]);
var state_8582__$1 = state_8582;
var statearr_8606_8637 = state_8582__$1;
(statearr_8606_8637[(2)] = inst_8572);

(statearr_8606_8637[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (10))){
var inst_8577 = (state_8582[(2)]);
var state_8582__$1 = state_8582;
var statearr_8607_8638 = state_8582__$1;
(statearr_8607_8638[(2)] = inst_8577);

(statearr_8607_8638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (8))){
var inst_8535 = (state_8582[(11)]);
var inst_8534 = (state_8582[(12)]);
var inst_8533 = (state_8582[(13)]);
var inst_8536 = (state_8582[(14)]);
var inst_8544 = cljs.core._nth.call(null,inst_8534,inst_8536);
var inst_8545 = cljs.core.nth.call(null,inst_8544,(0),null);
var inst_8546 = cljs.core.nth.call(null,inst_8544,(1),null);
var inst_8547 = cljs.core.nth.call(null,inst_8544,(2),null);
var inst_8548 = streams_vs_channels.channels_example.tasks.write_counter_state_4.call(null,inst_8545,inst_8546,inst_8547);
var inst_8549 = (inst_8536 + (1));
var tmp8603 = inst_8535;
var tmp8604 = inst_8534;
var tmp8605 = inst_8533;
var inst_8533__$1 = tmp8605;
var inst_8534__$1 = tmp8604;
var inst_8535__$1 = tmp8603;
var inst_8536__$1 = inst_8549;
var state_8582__$1 = (function (){var statearr_8608 = state_8582;
(statearr_8608[(11)] = inst_8535__$1);

(statearr_8608[(12)] = inst_8534__$1);

(statearr_8608[(13)] = inst_8533__$1);

(statearr_8608[(18)] = inst_8548);

(statearr_8608[(14)] = inst_8536__$1);

return statearr_8608;
})();
var statearr_8609_8639 = state_8582__$1;
(statearr_8609_8639[(2)] = null);

(statearr_8609_8639[(1)] = (6));


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
});})(c__6516__auto__,ch1,ch2,ch3,ch4,vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
;
return ((function (switch__6425__auto__,c__6516__auto__,ch1,ch2,ch3,ch4,vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function() {
var streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6426__auto__ = null;
var streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6426__auto____0 = (function (){
var statearr_8610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8610[(0)] = streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6426__auto__);

(statearr_8610[(1)] = (1));

return statearr_8610;
});
var streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6426__auto____1 = (function (state_8582){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_8582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e8611){if((e8611 instanceof Object)){
var ex__6429__auto__ = e8611;
var statearr_8612_8640 = state_8582;
(statearr_8612_8640[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8641 = state_8582;
state_8582 = G__8641;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6426__auto__ = function(state_8582){
switch(arguments.length){
case 0:
return streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6426__auto____0.call(this);
case 1:
return streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6426__auto____1.call(this,state_8582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6426__auto____0;
streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6426__auto____1;
return streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto__,ch1,ch2,ch3,ch4,vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
})();
var state__6518__auto__ = (function (){var statearr_8613 = f__6517__auto__.call(null);
(statearr_8613[(6)] = c__6516__auto__);

return statearr_8613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto__,ch1,ch2,ch3,ch4,vec__8503,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__8506,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__8509,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);

return c__6516__auto__;
});

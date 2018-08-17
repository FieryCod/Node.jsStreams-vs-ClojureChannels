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
var vec__10500 = streams_vs_channels.tools.create_writeable_streams.call(null);
var fizz_stream = cljs.core.nth.call(null,vec__10500,(0),null);
var buzz_stream = cljs.core.nth.call(null,vec__10500,(1),null);
var fizzbuzz_stream = cljs.core.nth.call(null,vec__10500,(2),null);
var others_stream = cljs.core.nth.call(null,vec__10500,(3),null);
var streams = vec__10500;
var vec__10503 = streams_vs_channels.channels_example.channel.create_processing_chans.call(null);
var fizz_chan = cljs.core.nth.call(null,vec__10503,(0),null);
var buzz_chan = cljs.core.nth.call(null,vec__10503,(1),null);
var fizzbuzz_chan = cljs.core.nth.call(null,vec__10503,(2),null);
var others_chan = cljs.core.nth.call(null,vec__10503,(3),null);
var chans = vec__10503;
var vec__10506 = streams_vs_channels.channels_example.state.create_group_counters.call(null);
var fizz_group = cljs.core.nth.call(null,vec__10506,(0),null);
var buzz_group = cljs.core.nth.call(null,vec__10506,(1),null);
var fizzbuzz_group = cljs.core.nth.call(null,vec__10506,(2),null);
var start_time = cljs.core.system_time.call(null);
var counters = streams_vs_channels.channels_example.state.create_coll_counters.call(null);
streams_vs_channels.reader.read_file.call(null,streams_vs_channels.settings.seed_filename,((function (vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (num){
return cljs.core.apply.call(null,streams_vs_channels.channels_example.tasks.select_chan_1,parseInt(num),cljs.core.concat.call(null,chans,counters));
});})(vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
,((function (vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (){
var seq__10509 = cljs.core.seq.call(null,chans);
var chunk__10510 = null;
var count__10511 = (0);
var i__10512 = (0);
while(true){
if((i__10512 < count__10511)){
var c = cljs.core._nth.call(null,chunk__10510,i__10512);
cljs.core.async.close_BANG_.call(null,c);


var G__10611 = seq__10509;
var G__10612 = chunk__10510;
var G__10613 = count__10511;
var G__10614 = (i__10512 + (1));
seq__10509 = G__10611;
chunk__10510 = G__10612;
count__10511 = G__10613;
i__10512 = G__10614;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10509);
if(temp__5457__auto__){
var seq__10509__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10509__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10509__$1);
var G__10615 = cljs.core.chunk_rest.call(null,seq__10509__$1);
var G__10616 = c__4351__auto__;
var G__10617 = cljs.core.count.call(null,c__4351__auto__);
var G__10618 = (0);
seq__10509 = G__10615;
chunk__10510 = G__10616;
count__10511 = G__10617;
i__10512 = G__10618;
continue;
} else {
var c = cljs.core.first.call(null,seq__10509__$1);
cljs.core.async.close_BANG_.call(null,c);


var G__10619 = cljs.core.next.call(null,seq__10509__$1);
var G__10620 = null;
var G__10621 = (0);
var G__10622 = (0);
seq__10509 = G__10619;
chunk__10510 = G__10620;
count__10511 = G__10621;
i__10512 = G__10622;
continue;
}
} else {
return null;
}
}
break;
}
});})(vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);

var ch1 = streams_vs_channels.channels_example.tasks.process_channel_3.call(null,fizz_chan,fizz_stream,((function (vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (p1__10496_SHARP_){
return streams_vs_channels.channels_example.tasks.group_string_3.call(null,fizz_group,p1__10496_SHARP_);
});})(vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);
var ch2 = streams_vs_channels.channels_example.tasks.process_channel_3.call(null,buzz_chan,buzz_stream,((function (ch1,vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (p1__10497_SHARP_){
return streams_vs_channels.channels_example.tasks.group_string_3.call(null,buzz_group,p1__10497_SHARP_);
});})(ch1,vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);
var ch3 = streams_vs_channels.channels_example.tasks.process_channel_3.call(null,fizzbuzz_chan,fizzbuzz_stream,((function (ch1,ch2,vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (p1__10498_SHARP_){
return streams_vs_channels.channels_example.tasks.group_string_3.call(null,fizzbuzz_group,p1__10498_SHARP_);
});})(ch1,ch2,vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);
var ch4 = streams_vs_channels.channels_example.tasks.process_channel_3.call(null,others_chan,others_stream,((function (ch1,ch2,ch3,vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (p1__10499_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10499_SHARP_)," "].join('');
});})(ch1,ch2,ch3,vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);
var c__6646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto__,ch1,ch2,ch3,ch4,vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto__,ch1,ch2,ch3,ch4,vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function (state_10579){
var state_val_10580 = (state_10579[(1)]);
if((state_val_10580 === (7))){
var inst_10576 = (state_10579[(2)]);
var inst_10577 = streams_vs_channels.tools.print_exit_program_msg.call(null,start_time);
var state_10579__$1 = (function (){var statearr_10581 = state_10579;
(statearr_10581[(7)] = inst_10576);

return statearr_10581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10579__$1,inst_10577);
} else {
if((state_val_10580 === (1))){
var state_10579__$1 = state_10579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10579__$1,(2),ch1);
} else {
if((state_val_10580 === (4))){
var inst_10518 = (state_10579[(2)]);
var state_10579__$1 = (function (){var statearr_10582 = state_10579;
(statearr_10582[(8)] = inst_10518);

return statearr_10582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10579__$1,(5),ch4);
} else {
if((state_val_10580 === (15))){
var inst_10549 = (state_10579[(9)]);
var inst_10561 = cljs.core.first.call(null,inst_10549);
var inst_10562 = cljs.core.nth.call(null,inst_10561,(0),null);
var inst_10563 = cljs.core.nth.call(null,inst_10561,(1),null);
var inst_10564 = cljs.core.nth.call(null,inst_10561,(2),null);
var inst_10565 = streams_vs_channels.channels_example.tasks.write_counter_state_4.call(null,inst_10562,inst_10563,inst_10564);
var inst_10566 = cljs.core.next.call(null,inst_10549);
var inst_10530 = inst_10566;
var inst_10531 = null;
var inst_10532 = (0);
var inst_10533 = (0);
var state_10579__$1 = (function (){var statearr_10583 = state_10579;
(statearr_10583[(10)] = inst_10565);

(statearr_10583[(11)] = inst_10533);

(statearr_10583[(12)] = inst_10530);

(statearr_10583[(13)] = inst_10532);

(statearr_10583[(14)] = inst_10531);

return statearr_10583;
})();
var statearr_10584_10623 = state_10579__$1;
(statearr_10584_10623[(2)] = null);

(statearr_10584_10623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10580 === (13))){
var inst_10572 = (state_10579[(2)]);
var state_10579__$1 = state_10579;
var statearr_10585_10624 = state_10579__$1;
(statearr_10585_10624[(2)] = inst_10572);

(statearr_10585_10624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10580 === (6))){
var inst_10533 = (state_10579[(11)]);
var inst_10532 = (state_10579[(13)]);
var inst_10535 = (inst_10533 < inst_10532);
var inst_10536 = inst_10535;
var state_10579__$1 = state_10579;
if(cljs.core.truth_(inst_10536)){
var statearr_10586_10625 = state_10579__$1;
(statearr_10586_10625[(1)] = (8));

} else {
var statearr_10587_10626 = state_10579__$1;
(statearr_10587_10626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10580 === (3))){
var inst_10516 = (state_10579[(2)]);
var state_10579__$1 = (function (){var statearr_10588 = state_10579;
(statearr_10588[(15)] = inst_10516);

return statearr_10588;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10579__$1,(4),ch3);
} else {
if((state_val_10580 === (12))){
var state_10579__$1 = state_10579;
var statearr_10589_10627 = state_10579__$1;
(statearr_10589_10627[(2)] = null);

(statearr_10589_10627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10580 === (2))){
var inst_10514 = (state_10579[(2)]);
var state_10579__$1 = (function (){var statearr_10590 = state_10579;
(statearr_10590[(16)] = inst_10514);

return statearr_10590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10579__$1,(3),ch2);
} else {
if((state_val_10580 === (11))){
var inst_10549 = (state_10579[(9)]);
var inst_10551 = cljs.core.chunked_seq_QMARK_.call(null,inst_10549);
var state_10579__$1 = state_10579;
if(inst_10551){
var statearr_10591_10628 = state_10579__$1;
(statearr_10591_10628[(1)] = (14));

} else {
var statearr_10592_10629 = state_10579__$1;
(statearr_10592_10629[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10580 === (9))){
var inst_10530 = (state_10579[(12)]);
var inst_10549 = (state_10579[(9)]);
var inst_10549__$1 = cljs.core.seq.call(null,inst_10530);
var state_10579__$1 = (function (){var statearr_10593 = state_10579;
(statearr_10593[(9)] = inst_10549__$1);

return statearr_10593;
})();
if(inst_10549__$1){
var statearr_10594_10630 = state_10579__$1;
(statearr_10594_10630[(1)] = (11));

} else {
var statearr_10595_10631 = state_10579__$1;
(statearr_10595_10631[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10580 === (5))){
var inst_10520 = (state_10579[(2)]);
var inst_10525 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10526 = ["fizz","buzz","fizzbuzz","others"];
var inst_10527 = (new cljs.core.PersistentVector(null,4,(5),inst_10525,inst_10526,null));
var inst_10528 = cljs.core.map.call(null,cljs.core.vector,streams,inst_10527,counters);
var inst_10529 = cljs.core.seq.call(null,inst_10528);
var inst_10530 = inst_10529;
var inst_10531 = null;
var inst_10532 = (0);
var inst_10533 = (0);
var state_10579__$1 = (function (){var statearr_10596 = state_10579;
(statearr_10596[(17)] = inst_10520);

(statearr_10596[(11)] = inst_10533);

(statearr_10596[(12)] = inst_10530);

(statearr_10596[(13)] = inst_10532);

(statearr_10596[(14)] = inst_10531);

return statearr_10596;
})();
var statearr_10597_10632 = state_10579__$1;
(statearr_10597_10632[(2)] = null);

(statearr_10597_10632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10580 === (14))){
var inst_10549 = (state_10579[(9)]);
var inst_10553 = cljs.core.chunk_first.call(null,inst_10549);
var inst_10554 = cljs.core.chunk_rest.call(null,inst_10549);
var inst_10555 = cljs.core.count.call(null,inst_10553);
var inst_10530 = inst_10554;
var inst_10531 = inst_10553;
var inst_10532 = inst_10555;
var inst_10533 = (0);
var state_10579__$1 = (function (){var statearr_10598 = state_10579;
(statearr_10598[(11)] = inst_10533);

(statearr_10598[(12)] = inst_10530);

(statearr_10598[(13)] = inst_10532);

(statearr_10598[(14)] = inst_10531);

return statearr_10598;
})();
var statearr_10599_10633 = state_10579__$1;
(statearr_10599_10633[(2)] = null);

(statearr_10599_10633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10580 === (16))){
var inst_10569 = (state_10579[(2)]);
var state_10579__$1 = state_10579;
var statearr_10603_10634 = state_10579__$1;
(statearr_10603_10634[(2)] = inst_10569);

(statearr_10603_10634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10580 === (10))){
var inst_10574 = (state_10579[(2)]);
var state_10579__$1 = state_10579;
var statearr_10604_10635 = state_10579__$1;
(statearr_10604_10635[(2)] = inst_10574);

(statearr_10604_10635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10580 === (8))){
var inst_10533 = (state_10579[(11)]);
var inst_10530 = (state_10579[(12)]);
var inst_10532 = (state_10579[(13)]);
var inst_10531 = (state_10579[(14)]);
var inst_10541 = cljs.core._nth.call(null,inst_10531,inst_10533);
var inst_10542 = cljs.core.nth.call(null,inst_10541,(0),null);
var inst_10543 = cljs.core.nth.call(null,inst_10541,(1),null);
var inst_10544 = cljs.core.nth.call(null,inst_10541,(2),null);
var inst_10545 = streams_vs_channels.channels_example.tasks.write_counter_state_4.call(null,inst_10542,inst_10543,inst_10544);
var inst_10546 = (inst_10533 + (1));
var tmp10600 = inst_10530;
var tmp10601 = inst_10532;
var tmp10602 = inst_10531;
var inst_10530__$1 = tmp10600;
var inst_10531__$1 = tmp10602;
var inst_10532__$1 = tmp10601;
var inst_10533__$1 = inst_10546;
var state_10579__$1 = (function (){var statearr_10605 = state_10579;
(statearr_10605[(18)] = inst_10545);

(statearr_10605[(11)] = inst_10533__$1);

(statearr_10605[(12)] = inst_10530__$1);

(statearr_10605[(13)] = inst_10532__$1);

(statearr_10605[(14)] = inst_10531__$1);

return statearr_10605;
})();
var statearr_10606_10636 = state_10579__$1;
(statearr_10606_10636[(2)] = null);

(statearr_10606_10636[(1)] = (6));


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
});})(c__6646__auto__,ch1,ch2,ch3,ch4,vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
;
return ((function (switch__6487__auto__,c__6646__auto__,ch1,ch2,ch3,ch4,vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters){
return (function() {
var streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6488__auto__ = null;
var streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6488__auto____0 = (function (){
var statearr_10607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10607[(0)] = streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6488__auto__);

(statearr_10607[(1)] = (1));

return statearr_10607;
});
var streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6488__auto____1 = (function (state_10579){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_10579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e10608){if((e10608 instanceof Object)){
var ex__6491__auto__ = e10608;
var statearr_10609_10637 = state_10579;
(statearr_10609_10637[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10638 = state_10579;
state_10579 = G__10638;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6488__auto__ = function(state_10579){
switch(arguments.length){
case 0:
return streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6488__auto____0.call(this);
case 1:
return streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6488__auto____1.call(this,state_10579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6488__auto____0;
streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6488__auto____1;
return streams_vs_channels$channels_example$channel$process_with_channels_$_state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto__,ch1,ch2,ch3,ch4,vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
})();
var state__6648__auto__ = (function (){var statearr_10610 = f__6647__auto__.call(null);
(statearr_10610[(6)] = c__6646__auto__);

return statearr_10610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto__,ch1,ch2,ch3,ch4,vec__10500,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,vec__10503,fizz_chan,buzz_chan,fizzbuzz_chan,others_chan,chans,vec__10506,fizz_group,buzz_group,fizzbuzz_group,start_time,counters))
);

return c__6646__auto__;
});

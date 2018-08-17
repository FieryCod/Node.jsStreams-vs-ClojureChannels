// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.streams_example.stream');
goog.require('cljs.core');
goog.require('streams_vs_channels.streams_example.impl');
goog.require('streams_vs_channels.streams_example.impl_with_transform');
goog.require('streams_vs_channels.settings');
goog.require('streams_vs_channels.reader');
goog.require('streams_vs_channels.tools');
streams_vs_channels.streams_example.stream.process_with_streams = (function streams_vs_channels$streams_example$stream$process_with_streams(){
return (new Promise((function (resolve){
var start_time = cljs.core.system_time.call(null);
var stream_example = streams_vs_channels.streams_example.impl.newStreamExample();
var EndProcessingEventEmitter = stream_example.EndProcessingEventEmitter;
EndProcessingEventEmitter.on("EndProcessing",((function (start_time,stream_example,EndProcessingEventEmitter){
return (function (){
streams_vs_channels.tools.print_exit_program_msg.call(null,start_time);

return resolve.call(null,true);
});})(start_time,stream_example,EndProcessingEventEmitter))
);

return streams_vs_channels.reader.read_file.call(null,streams_vs_channels.settings.seed_filename,stream_example.onData,stream_example.onEnd);
})));
});
streams_vs_channels.streams_example.stream.process_with_transform_streams = (function streams_vs_channels$streams_example$stream$process_with_transform_streams(){
return (new Promise((function (resolve){
var start_time = cljs.core.system_time.call(null);
var vec__10441 = streams_vs_channels.tools.create_writeable_streams.call(null);
var fizz_stream = cljs.core.nth.call(null,vec__10441,(0),null);
var buzz_stream = cljs.core.nth.call(null,vec__10441,(1),null);
var fizzbuzz_stream = cljs.core.nth.call(null,vec__10441,(2),null);
var others_stream = cljs.core.nth.call(null,vec__10441,(3),null);
var streams = vec__10441;
var others_transformer = streams_vs_channels.streams_example.impl_with_transform.othersSplitTransformer(others_stream);
var fizz_transformer = streams_vs_channels.streams_example.impl_with_transform.splitTransformer(fizz_stream,(3));
var buzz_transformer = streams_vs_channels.streams_example.impl_with_transform.splitTransformer(buzz_stream,(5));
var fizzbuzz_transformer = streams_vs_channels.streams_example.impl_with_transform.splitTransformer(fizzbuzz_stream,(15));
var stream_example = streams_vs_channels.streams_example.impl_with_transform.newStreamExample(fizz_transformer,buzz_transformer,fizzbuzz_transformer,others_transformer);
var EndProcessingEventEmitter = stream_example.EndProcessingEventEmitter;
EndProcessingEventEmitter.on("EndProcessing",((function (start_time,vec__10441,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,others_transformer,fizz_transformer,buzz_transformer,fizzbuzz_transformer,stream_example,EndProcessingEventEmitter){
return (function (){
streams_vs_channels.tools.print_exit_program_msg.call(null,start_time);

return resolve.call(null,true);
});})(start_time,vec__10441,fizz_stream,buzz_stream,fizzbuzz_stream,others_stream,streams,others_transformer,fizz_transformer,buzz_transformer,fizzbuzz_transformer,stream_example,EndProcessingEventEmitter))
);

return streams_vs_channels.reader.read_file.call(null,streams_vs_channels.settings.seed_filename,stream_example.onData,stream_example.onEnd);
})));
});

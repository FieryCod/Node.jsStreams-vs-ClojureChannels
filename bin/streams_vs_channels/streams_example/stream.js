// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.streams_example.stream');
goog.require('cljs.core');
goog.require('streams_vs_channels.streams_example.impl');
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

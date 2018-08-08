// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('streams_vs_channels.settings');
goog.require('cljs.core');
/**
 * Max Node.js save integer (will be used during a test)
 */
streams_vs_channels.settings.max_save_integer = Number.MAX_SAFE_INTEGER;
/**
 * Number of iterations
 */
streams_vs_channels.settings.iterations = (1000000);
/**
 * Padding is equal the length of highest possible number during iteration
 */
streams_vs_channels.settings.padding_len = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(streams_vs_channels.settings.iterations)].join(''));
/**
 * Indicates how much bytes are used by a single write to file
 */
streams_vs_channels.settings.bytes_per_write = (streams_vs_channels.settings.padding_len + (1));
streams_vs_channels.settings.seed_filename = "seeds.file";
streams_vs_channels.settings.fizz_filename = "fizz.file";
streams_vs_channels.settings.buzz_filename = "buzz.file";
streams_vs_channels.settings.fizzbuzz_filename = "fizzbuzz.file";
streams_vs_channels.settings.others_filename = "others.file";
streams_vs_channels.settings.fizz_size = (3);
streams_vs_channels.settings.buzz_size = (5);
streams_vs_channels.settings.fizzbuzz_size = (15);
streams_vs_channels.settings.default_size = (5);

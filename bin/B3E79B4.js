goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__10736__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10737__i = 0, G__10737__a = new Array(arguments.length -  0);
while (G__10737__i < G__10737__a.length) {G__10737__a[G__10737__i] = arguments[G__10737__i + 0]; ++G__10737__i;}
  args = new cljs.core.IndexedSeq(G__10737__a,0,null);
} 
return G__10736__delegate.call(this,args);};
G__10736.cljs$lang$maxFixedArity = 0;
G__10736.cljs$lang$applyTo = (function (arglist__10738){
var args = cljs.core.seq(arglist__10738);
return G__10736__delegate(args);
});
G__10736.cljs$core$IFn$_invoke$arity$variadic = G__10736__delegate;
return G__10736;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__10739__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10740__i = 0, G__10740__a = new Array(arguments.length -  0);
while (G__10740__i < G__10740__a.length) {G__10740__a[G__10740__i] = arguments[G__10740__i + 0]; ++G__10740__i;}
  args = new cljs.core.IndexedSeq(G__10740__a,0,null);
} 
return G__10739__delegate.call(this,args);};
G__10739.cljs$lang$maxFixedArity = 0;
G__10739.cljs$lang$applyTo = (function (arglist__10741){
var args = cljs.core.seq(arglist__10741);
return G__10739__delegate(args);
});
G__10739.cljs$core$IFn$_invoke$arity$variadic = G__10739__delegate;
return G__10739;
})()
);

return null;
});

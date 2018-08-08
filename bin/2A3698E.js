goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__8761__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8762__i = 0, G__8762__a = new Array(arguments.length -  0);
while (G__8762__i < G__8762__a.length) {G__8762__a[G__8762__i] = arguments[G__8762__i + 0]; ++G__8762__i;}
  args = new cljs.core.IndexedSeq(G__8762__a,0,null);
} 
return G__8761__delegate.call(this,args);};
G__8761.cljs$lang$maxFixedArity = 0;
G__8761.cljs$lang$applyTo = (function (arglist__8763){
var args = cljs.core.seq(arglist__8763);
return G__8761__delegate(args);
});
G__8761.cljs$core$IFn$_invoke$arity$variadic = G__8761__delegate;
return G__8761;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__8764__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8764 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8765__i = 0, G__8765__a = new Array(arguments.length -  0);
while (G__8765__i < G__8765__a.length) {G__8765__a[G__8765__i] = arguments[G__8765__i + 0]; ++G__8765__i;}
  args = new cljs.core.IndexedSeq(G__8765__a,0,null);
} 
return G__8764__delegate.call(this,args);};
G__8764.cljs$lang$maxFixedArity = 0;
G__8764.cljs$lang$applyTo = (function (arglist__8766){
var args = cljs.core.seq(arglist__8766);
return G__8764__delegate(args);
});
G__8764.cljs$core$IFn$_invoke$arity$variadic = G__8764__delegate;
return G__8764;
})()
);

return null;
});

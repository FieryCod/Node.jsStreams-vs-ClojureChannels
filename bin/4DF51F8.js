goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__8755__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8756__i = 0, G__8756__a = new Array(arguments.length -  0);
while (G__8756__i < G__8756__a.length) {G__8756__a[G__8756__i] = arguments[G__8756__i + 0]; ++G__8756__i;}
  args = new cljs.core.IndexedSeq(G__8756__a,0,null);
} 
return G__8755__delegate.call(this,args);};
G__8755.cljs$lang$maxFixedArity = 0;
G__8755.cljs$lang$applyTo = (function (arglist__8757){
var args = cljs.core.seq(arglist__8757);
return G__8755__delegate(args);
});
G__8755.cljs$core$IFn$_invoke$arity$variadic = G__8755__delegate;
return G__8755;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__8758__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8759__i = 0, G__8759__a = new Array(arguments.length -  0);
while (G__8759__i < G__8759__a.length) {G__8759__a[G__8759__i] = arguments[G__8759__i + 0]; ++G__8759__i;}
  args = new cljs.core.IndexedSeq(G__8759__a,0,null);
} 
return G__8758__delegate.call(this,args);};
G__8758.cljs$lang$maxFixedArity = 0;
G__8758.cljs$lang$applyTo = (function (arglist__8760){
var args = cljs.core.seq(arglist__8760);
return G__8758__delegate(args);
});
G__8758.cljs$core$IFn$_invoke$arity$variadic = G__8758__delegate;
return G__8758;
})()
);

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__5282__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5283__i = 0, G__5283__a = new Array(arguments.length -  0);
while (G__5283__i < G__5283__a.length) {G__5283__a[G__5283__i] = arguments[G__5283__i + 0]; ++G__5283__i;}
  args = new cljs.core.IndexedSeq(G__5283__a,0,null);
} 
return G__5282__delegate.call(this,args);};
G__5282.cljs$lang$maxFixedArity = 0;
G__5282.cljs$lang$applyTo = (function (arglist__5284){
var args = cljs.core.seq(arglist__5284);
return G__5282__delegate(args);
});
G__5282.cljs$core$IFn$_invoke$arity$variadic = G__5282__delegate;
return G__5282;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__5285__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__5285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5286__i = 0, G__5286__a = new Array(arguments.length -  0);
while (G__5286__i < G__5286__a.length) {G__5286__a[G__5286__i] = arguments[G__5286__i + 0]; ++G__5286__i;}
  args = new cljs.core.IndexedSeq(G__5286__a,0,null);
} 
return G__5285__delegate.call(this,args);};
G__5285.cljs$lang$maxFixedArity = 0;
G__5285.cljs$lang$applyTo = (function (arglist__5287){
var args = cljs.core.seq(arglist__5287);
return G__5285__delegate(args);
});
G__5285.cljs$core$IFn$_invoke$arity$variadic = G__5285__delegate;
return G__5285;
})()
);

return null;
});

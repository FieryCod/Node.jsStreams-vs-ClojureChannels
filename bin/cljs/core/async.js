// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__6576 = arguments.length;
switch (G__6576) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6577 = (function (f,blockable,meta6578){
this.f = f;
this.blockable = blockable;
this.meta6578 = meta6578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6579,meta6578__$1){
var self__ = this;
var _6579__$1 = this;
return (new cljs.core.async.t_cljs$core$async6577(self__.f,self__.blockable,meta6578__$1));
});

cljs.core.async.t_cljs$core$async6577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6579){
var self__ = this;
var _6579__$1 = this;
return self__.meta6578;
});

cljs.core.async.t_cljs$core$async6577.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async6577.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async6577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async6577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta6578","meta6578",-2121073065,null)], null);
});

cljs.core.async.t_cljs$core$async6577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6577";

cljs.core.async.t_cljs$core$async6577.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async6577");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6577.
 */
cljs.core.async.__GT_t_cljs$core$async6577 = (function cljs$core$async$__GT_t_cljs$core$async6577(f__$1,blockable__$1,meta6578){
return (new cljs.core.async.t_cljs$core$async6577(f__$1,blockable__$1,meta6578));
});

}

return (new cljs.core.async.t_cljs$core$async6577(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__6583 = arguments.length;
switch (G__6583) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__6586 = arguments.length;
switch (G__6586) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__6589 = arguments.length;
switch (G__6589) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_6591 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_6591);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_6591,ret){
return (function (){
return fn1.call(null,val_6591);
});})(val_6591,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__6593 = arguments.length;
switch (G__6593) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___6595 = n;
var x_6596 = (0);
while(true){
if((x_6596 < n__4408__auto___6595)){
(a[x_6596] = (0));

var G__6597 = (x_6596 + (1));
x_6596 = G__6597;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__6598 = (i + (1));
i = G__6598;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6599 = (function (flag,meta6600){
this.flag = flag;
this.meta6600 = meta6600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_6601,meta6600__$1){
var self__ = this;
var _6601__$1 = this;
return (new cljs.core.async.t_cljs$core$async6599(self__.flag,meta6600__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async6599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_6601){
var self__ = this;
var _6601__$1 = this;
return self__.meta6600;
});})(flag))
;

cljs.core.async.t_cljs$core$async6599.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async6599.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async6599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async6599.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta6600","meta6600",1047162830,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async6599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6599";

cljs.core.async.t_cljs$core$async6599.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async6599");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6599.
 */
cljs.core.async.__GT_t_cljs$core$async6599 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async6599(flag__$1,meta6600){
return (new cljs.core.async.t_cljs$core$async6599(flag__$1,meta6600));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async6599(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6602 = (function (flag,cb,meta6603){
this.flag = flag;
this.cb = cb;
this.meta6603 = meta6603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6604,meta6603__$1){
var self__ = this;
var _6604__$1 = this;
return (new cljs.core.async.t_cljs$core$async6602(self__.flag,self__.cb,meta6603__$1));
});

cljs.core.async.t_cljs$core$async6602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6604){
var self__ = this;
var _6604__$1 = this;
return self__.meta6603;
});

cljs.core.async.t_cljs$core$async6602.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6602.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async6602.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async6602.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async6602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta6603","meta6603",-415316220,null)], null);
});

cljs.core.async.t_cljs$core$async6602.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6602";

cljs.core.async.t_cljs$core$async6602.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async6602");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6602.
 */
cljs.core.async.__GT_t_cljs$core$async6602 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async6602(flag__$1,cb__$1,meta6603){
return (new cljs.core.async.t_cljs$core$async6602(flag__$1,cb__$1,meta6603));
});

}

return (new cljs.core.async.t_cljs$core$async6602(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__6605_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6605_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__6606_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6606_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__6607 = (i + (1));
i = G__6607;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6613 = arguments.length;
var i__4532__auto___6614 = (0);
while(true){
if((i__4532__auto___6614 < len__4531__auto___6613)){
args__4534__auto__.push((arguments[i__4532__auto___6614]));

var G__6615 = (i__4532__auto___6614 + (1));
i__4532__auto___6614 = G__6615;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__6610){
var map__6611 = p__6610;
var map__6611__$1 = ((((!((map__6611 == null)))?(((((map__6611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6611):map__6611);
var opts = map__6611__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq6608){
var G__6609 = cljs.core.first.call(null,seq6608);
var seq6608__$1 = cljs.core.next.call(null,seq6608);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6609,seq6608__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__6617 = arguments.length;
switch (G__6617) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6516__auto___6663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto___6663){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto___6663){
return (function (state_6641){
var state_val_6642 = (state_6641[(1)]);
if((state_val_6642 === (7))){
var inst_6637 = (state_6641[(2)]);
var state_6641__$1 = state_6641;
var statearr_6643_6664 = state_6641__$1;
(statearr_6643_6664[(2)] = inst_6637);

(statearr_6643_6664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6642 === (1))){
var state_6641__$1 = state_6641;
var statearr_6644_6665 = state_6641__$1;
(statearr_6644_6665[(2)] = null);

(statearr_6644_6665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6642 === (4))){
var inst_6620 = (state_6641[(7)]);
var inst_6620__$1 = (state_6641[(2)]);
var inst_6621 = (inst_6620__$1 == null);
var state_6641__$1 = (function (){var statearr_6645 = state_6641;
(statearr_6645[(7)] = inst_6620__$1);

return statearr_6645;
})();
if(cljs.core.truth_(inst_6621)){
var statearr_6646_6666 = state_6641__$1;
(statearr_6646_6666[(1)] = (5));

} else {
var statearr_6647_6667 = state_6641__$1;
(statearr_6647_6667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6642 === (13))){
var state_6641__$1 = state_6641;
var statearr_6648_6668 = state_6641__$1;
(statearr_6648_6668[(2)] = null);

(statearr_6648_6668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6642 === (6))){
var inst_6620 = (state_6641[(7)]);
var state_6641__$1 = state_6641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6641__$1,(11),to,inst_6620);
} else {
if((state_val_6642 === (3))){
var inst_6639 = (state_6641[(2)]);
var state_6641__$1 = state_6641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6641__$1,inst_6639);
} else {
if((state_val_6642 === (12))){
var state_6641__$1 = state_6641;
var statearr_6649_6669 = state_6641__$1;
(statearr_6649_6669[(2)] = null);

(statearr_6649_6669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6642 === (2))){
var state_6641__$1 = state_6641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6641__$1,(4),from);
} else {
if((state_val_6642 === (11))){
var inst_6630 = (state_6641[(2)]);
var state_6641__$1 = state_6641;
if(cljs.core.truth_(inst_6630)){
var statearr_6650_6670 = state_6641__$1;
(statearr_6650_6670[(1)] = (12));

} else {
var statearr_6651_6671 = state_6641__$1;
(statearr_6651_6671[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6642 === (9))){
var state_6641__$1 = state_6641;
var statearr_6652_6672 = state_6641__$1;
(statearr_6652_6672[(2)] = null);

(statearr_6652_6672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6642 === (5))){
var state_6641__$1 = state_6641;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6653_6673 = state_6641__$1;
(statearr_6653_6673[(1)] = (8));

} else {
var statearr_6654_6674 = state_6641__$1;
(statearr_6654_6674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6642 === (14))){
var inst_6635 = (state_6641[(2)]);
var state_6641__$1 = state_6641;
var statearr_6655_6675 = state_6641__$1;
(statearr_6655_6675[(2)] = inst_6635);

(statearr_6655_6675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6642 === (10))){
var inst_6627 = (state_6641[(2)]);
var state_6641__$1 = state_6641;
var statearr_6656_6676 = state_6641__$1;
(statearr_6656_6676[(2)] = inst_6627);

(statearr_6656_6676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6642 === (8))){
var inst_6624 = cljs.core.async.close_BANG_.call(null,to);
var state_6641__$1 = state_6641;
var statearr_6657_6677 = state_6641__$1;
(statearr_6657_6677[(2)] = inst_6624);

(statearr_6657_6677[(1)] = (10));


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
});})(c__6516__auto___6663))
;
return ((function (switch__6425__auto__,c__6516__auto___6663){
return (function() {
var cljs$core$async$state_machine__6426__auto__ = null;
var cljs$core$async$state_machine__6426__auto____0 = (function (){
var statearr_6658 = [null,null,null,null,null,null,null,null];
(statearr_6658[(0)] = cljs$core$async$state_machine__6426__auto__);

(statearr_6658[(1)] = (1));

return statearr_6658;
});
var cljs$core$async$state_machine__6426__auto____1 = (function (state_6641){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_6641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e6659){if((e6659 instanceof Object)){
var ex__6429__auto__ = e6659;
var statearr_6660_6678 = state_6641;
(statearr_6660_6678[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6679 = state_6641;
state_6641 = G__6679;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$state_machine__6426__auto__ = function(state_6641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6426__auto____1.call(this,state_6641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6426__auto____0;
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6426__auto____1;
return cljs$core$async$state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto___6663))
})();
var state__6518__auto__ = (function (){var statearr_6661 = f__6517__auto__.call(null);
(statearr_6661[(6)] = c__6516__auto___6663);

return statearr_6661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto___6663))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__6680){
var vec__6681 = p__6680;
var v = cljs.core.nth.call(null,vec__6681,(0),null);
var p = cljs.core.nth.call(null,vec__6681,(1),null);
var job = vec__6681;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6516__auto___6852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto___6852,res,vec__6681,v,p,job,jobs,results){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto___6852,res,vec__6681,v,p,job,jobs,results){
return (function (state_6688){
var state_val_6689 = (state_6688[(1)]);
if((state_val_6689 === (1))){
var state_6688__$1 = state_6688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6688__$1,(2),res,v);
} else {
if((state_val_6689 === (2))){
var inst_6685 = (state_6688[(2)]);
var inst_6686 = cljs.core.async.close_BANG_.call(null,res);
var state_6688__$1 = (function (){var statearr_6690 = state_6688;
(statearr_6690[(7)] = inst_6685);

return statearr_6690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6688__$1,inst_6686);
} else {
return null;
}
}
});})(c__6516__auto___6852,res,vec__6681,v,p,job,jobs,results))
;
return ((function (switch__6425__auto__,c__6516__auto___6852,res,vec__6681,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____0 = (function (){
var statearr_6691 = [null,null,null,null,null,null,null,null];
(statearr_6691[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__);

(statearr_6691[(1)] = (1));

return statearr_6691;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____1 = (function (state_6688){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_6688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e6692){if((e6692 instanceof Object)){
var ex__6429__auto__ = e6692;
var statearr_6693_6853 = state_6688;
(statearr_6693_6853[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6854 = state_6688;
state_6688 = G__6854;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__ = function(state_6688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____1.call(this,state_6688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto___6852,res,vec__6681,v,p,job,jobs,results))
})();
var state__6518__auto__ = (function (){var statearr_6694 = f__6517__auto__.call(null);
(statearr_6694[(6)] = c__6516__auto___6852);

return statearr_6694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto___6852,res,vec__6681,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__6695){
var vec__6696 = p__6695;
var v = cljs.core.nth.call(null,vec__6696,(0),null);
var p = cljs.core.nth.call(null,vec__6696,(1),null);
var job = vec__6696;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___6855 = n;
var __6856 = (0);
while(true){
if((__6856 < n__4408__auto___6855)){
var G__6699_6857 = type;
var G__6699_6858__$1 = (((G__6699_6857 instanceof cljs.core.Keyword))?G__6699_6857.fqn:null);
switch (G__6699_6858__$1) {
case "compute":
var c__6516__auto___6860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__6856,c__6516__auto___6860,G__6699_6857,G__6699_6858__$1,n__4408__auto___6855,jobs,results,process,async){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (__6856,c__6516__auto___6860,G__6699_6857,G__6699_6858__$1,n__4408__auto___6855,jobs,results,process,async){
return (function (state_6712){
var state_val_6713 = (state_6712[(1)]);
if((state_val_6713 === (1))){
var state_6712__$1 = state_6712;
var statearr_6714_6861 = state_6712__$1;
(statearr_6714_6861[(2)] = null);

(statearr_6714_6861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6713 === (2))){
var state_6712__$1 = state_6712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6712__$1,(4),jobs);
} else {
if((state_val_6713 === (3))){
var inst_6710 = (state_6712[(2)]);
var state_6712__$1 = state_6712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6712__$1,inst_6710);
} else {
if((state_val_6713 === (4))){
var inst_6702 = (state_6712[(2)]);
var inst_6703 = process.call(null,inst_6702);
var state_6712__$1 = state_6712;
if(cljs.core.truth_(inst_6703)){
var statearr_6715_6862 = state_6712__$1;
(statearr_6715_6862[(1)] = (5));

} else {
var statearr_6716_6863 = state_6712__$1;
(statearr_6716_6863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6713 === (5))){
var state_6712__$1 = state_6712;
var statearr_6717_6864 = state_6712__$1;
(statearr_6717_6864[(2)] = null);

(statearr_6717_6864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6713 === (6))){
var state_6712__$1 = state_6712;
var statearr_6718_6865 = state_6712__$1;
(statearr_6718_6865[(2)] = null);

(statearr_6718_6865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6713 === (7))){
var inst_6708 = (state_6712[(2)]);
var state_6712__$1 = state_6712;
var statearr_6719_6866 = state_6712__$1;
(statearr_6719_6866[(2)] = inst_6708);

(statearr_6719_6866[(1)] = (3));


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
});})(__6856,c__6516__auto___6860,G__6699_6857,G__6699_6858__$1,n__4408__auto___6855,jobs,results,process,async))
;
return ((function (__6856,switch__6425__auto__,c__6516__auto___6860,G__6699_6857,G__6699_6858__$1,n__4408__auto___6855,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____0 = (function (){
var statearr_6720 = [null,null,null,null,null,null,null];
(statearr_6720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__);

(statearr_6720[(1)] = (1));

return statearr_6720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____1 = (function (state_6712){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_6712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e6721){if((e6721 instanceof Object)){
var ex__6429__auto__ = e6721;
var statearr_6722_6867 = state_6712;
(statearr_6722_6867[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6868 = state_6712;
state_6712 = G__6868;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__ = function(state_6712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____1.call(this,state_6712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__;
})()
;})(__6856,switch__6425__auto__,c__6516__auto___6860,G__6699_6857,G__6699_6858__$1,n__4408__auto___6855,jobs,results,process,async))
})();
var state__6518__auto__ = (function (){var statearr_6723 = f__6517__auto__.call(null);
(statearr_6723[(6)] = c__6516__auto___6860);

return statearr_6723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(__6856,c__6516__auto___6860,G__6699_6857,G__6699_6858__$1,n__4408__auto___6855,jobs,results,process,async))
);


break;
case "async":
var c__6516__auto___6869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__6856,c__6516__auto___6869,G__6699_6857,G__6699_6858__$1,n__4408__auto___6855,jobs,results,process,async){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (__6856,c__6516__auto___6869,G__6699_6857,G__6699_6858__$1,n__4408__auto___6855,jobs,results,process,async){
return (function (state_6736){
var state_val_6737 = (state_6736[(1)]);
if((state_val_6737 === (1))){
var state_6736__$1 = state_6736;
var statearr_6738_6870 = state_6736__$1;
(statearr_6738_6870[(2)] = null);

(statearr_6738_6870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (2))){
var state_6736__$1 = state_6736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6736__$1,(4),jobs);
} else {
if((state_val_6737 === (3))){
var inst_6734 = (state_6736[(2)]);
var state_6736__$1 = state_6736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6736__$1,inst_6734);
} else {
if((state_val_6737 === (4))){
var inst_6726 = (state_6736[(2)]);
var inst_6727 = async.call(null,inst_6726);
var state_6736__$1 = state_6736;
if(cljs.core.truth_(inst_6727)){
var statearr_6739_6871 = state_6736__$1;
(statearr_6739_6871[(1)] = (5));

} else {
var statearr_6740_6872 = state_6736__$1;
(statearr_6740_6872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (5))){
var state_6736__$1 = state_6736;
var statearr_6741_6873 = state_6736__$1;
(statearr_6741_6873[(2)] = null);

(statearr_6741_6873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (6))){
var state_6736__$1 = state_6736;
var statearr_6742_6874 = state_6736__$1;
(statearr_6742_6874[(2)] = null);

(statearr_6742_6874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6737 === (7))){
var inst_6732 = (state_6736[(2)]);
var state_6736__$1 = state_6736;
var statearr_6743_6875 = state_6736__$1;
(statearr_6743_6875[(2)] = inst_6732);

(statearr_6743_6875[(1)] = (3));


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
});})(__6856,c__6516__auto___6869,G__6699_6857,G__6699_6858__$1,n__4408__auto___6855,jobs,results,process,async))
;
return ((function (__6856,switch__6425__auto__,c__6516__auto___6869,G__6699_6857,G__6699_6858__$1,n__4408__auto___6855,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____0 = (function (){
var statearr_6744 = [null,null,null,null,null,null,null];
(statearr_6744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__);

(statearr_6744[(1)] = (1));

return statearr_6744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____1 = (function (state_6736){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_6736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e6745){if((e6745 instanceof Object)){
var ex__6429__auto__ = e6745;
var statearr_6746_6876 = state_6736;
(statearr_6746_6876[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6877 = state_6736;
state_6736 = G__6877;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__ = function(state_6736){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____1.call(this,state_6736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__;
})()
;})(__6856,switch__6425__auto__,c__6516__auto___6869,G__6699_6857,G__6699_6858__$1,n__4408__auto___6855,jobs,results,process,async))
})();
var state__6518__auto__ = (function (){var statearr_6747 = f__6517__auto__.call(null);
(statearr_6747[(6)] = c__6516__auto___6869);

return statearr_6747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(__6856,c__6516__auto___6869,G__6699_6857,G__6699_6858__$1,n__4408__auto___6855,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6699_6858__$1)].join('')));

}

var G__6878 = (__6856 + (1));
__6856 = G__6878;
continue;
} else {
}
break;
}

var c__6516__auto___6879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto___6879,jobs,results,process,async){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto___6879,jobs,results,process,async){
return (function (state_6769){
var state_val_6770 = (state_6769[(1)]);
if((state_val_6770 === (1))){
var state_6769__$1 = state_6769;
var statearr_6771_6880 = state_6769__$1;
(statearr_6771_6880[(2)] = null);

(statearr_6771_6880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6770 === (2))){
var state_6769__$1 = state_6769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6769__$1,(4),from);
} else {
if((state_val_6770 === (3))){
var inst_6767 = (state_6769[(2)]);
var state_6769__$1 = state_6769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6769__$1,inst_6767);
} else {
if((state_val_6770 === (4))){
var inst_6750 = (state_6769[(7)]);
var inst_6750__$1 = (state_6769[(2)]);
var inst_6751 = (inst_6750__$1 == null);
var state_6769__$1 = (function (){var statearr_6772 = state_6769;
(statearr_6772[(7)] = inst_6750__$1);

return statearr_6772;
})();
if(cljs.core.truth_(inst_6751)){
var statearr_6773_6881 = state_6769__$1;
(statearr_6773_6881[(1)] = (5));

} else {
var statearr_6774_6882 = state_6769__$1;
(statearr_6774_6882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6770 === (5))){
var inst_6753 = cljs.core.async.close_BANG_.call(null,jobs);
var state_6769__$1 = state_6769;
var statearr_6775_6883 = state_6769__$1;
(statearr_6775_6883[(2)] = inst_6753);

(statearr_6775_6883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6770 === (6))){
var inst_6750 = (state_6769[(7)]);
var inst_6755 = (state_6769[(8)]);
var inst_6755__$1 = cljs.core.async.chan.call(null,(1));
var inst_6756 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6757 = [inst_6750,inst_6755__$1];
var inst_6758 = (new cljs.core.PersistentVector(null,2,(5),inst_6756,inst_6757,null));
var state_6769__$1 = (function (){var statearr_6776 = state_6769;
(statearr_6776[(8)] = inst_6755__$1);

return statearr_6776;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6769__$1,(8),jobs,inst_6758);
} else {
if((state_val_6770 === (7))){
var inst_6765 = (state_6769[(2)]);
var state_6769__$1 = state_6769;
var statearr_6777_6884 = state_6769__$1;
(statearr_6777_6884[(2)] = inst_6765);

(statearr_6777_6884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6770 === (8))){
var inst_6755 = (state_6769[(8)]);
var inst_6760 = (state_6769[(2)]);
var state_6769__$1 = (function (){var statearr_6778 = state_6769;
(statearr_6778[(9)] = inst_6760);

return statearr_6778;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6769__$1,(9),results,inst_6755);
} else {
if((state_val_6770 === (9))){
var inst_6762 = (state_6769[(2)]);
var state_6769__$1 = (function (){var statearr_6779 = state_6769;
(statearr_6779[(10)] = inst_6762);

return statearr_6779;
})();
var statearr_6780_6885 = state_6769__$1;
(statearr_6780_6885[(2)] = null);

(statearr_6780_6885[(1)] = (2));


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
});})(c__6516__auto___6879,jobs,results,process,async))
;
return ((function (switch__6425__auto__,c__6516__auto___6879,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____0 = (function (){
var statearr_6781 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6781[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__);

(statearr_6781[(1)] = (1));

return statearr_6781;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____1 = (function (state_6769){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_6769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e6782){if((e6782 instanceof Object)){
var ex__6429__auto__ = e6782;
var statearr_6783_6886 = state_6769;
(statearr_6783_6886[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6887 = state_6769;
state_6769 = G__6887;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__ = function(state_6769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____1.call(this,state_6769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto___6879,jobs,results,process,async))
})();
var state__6518__auto__ = (function (){var statearr_6784 = f__6517__auto__.call(null);
(statearr_6784[(6)] = c__6516__auto___6879);

return statearr_6784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto___6879,jobs,results,process,async))
);


var c__6516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto__,jobs,results,process,async){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto__,jobs,results,process,async){
return (function (state_6822){
var state_val_6823 = (state_6822[(1)]);
if((state_val_6823 === (7))){
var inst_6818 = (state_6822[(2)]);
var state_6822__$1 = state_6822;
var statearr_6824_6888 = state_6822__$1;
(statearr_6824_6888[(2)] = inst_6818);

(statearr_6824_6888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (20))){
var state_6822__$1 = state_6822;
var statearr_6825_6889 = state_6822__$1;
(statearr_6825_6889[(2)] = null);

(statearr_6825_6889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (1))){
var state_6822__$1 = state_6822;
var statearr_6826_6890 = state_6822__$1;
(statearr_6826_6890[(2)] = null);

(statearr_6826_6890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (4))){
var inst_6787 = (state_6822[(7)]);
var inst_6787__$1 = (state_6822[(2)]);
var inst_6788 = (inst_6787__$1 == null);
var state_6822__$1 = (function (){var statearr_6827 = state_6822;
(statearr_6827[(7)] = inst_6787__$1);

return statearr_6827;
})();
if(cljs.core.truth_(inst_6788)){
var statearr_6828_6891 = state_6822__$1;
(statearr_6828_6891[(1)] = (5));

} else {
var statearr_6829_6892 = state_6822__$1;
(statearr_6829_6892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (15))){
var inst_6800 = (state_6822[(8)]);
var state_6822__$1 = state_6822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6822__$1,(18),to,inst_6800);
} else {
if((state_val_6823 === (21))){
var inst_6813 = (state_6822[(2)]);
var state_6822__$1 = state_6822;
var statearr_6830_6893 = state_6822__$1;
(statearr_6830_6893[(2)] = inst_6813);

(statearr_6830_6893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (13))){
var inst_6815 = (state_6822[(2)]);
var state_6822__$1 = (function (){var statearr_6831 = state_6822;
(statearr_6831[(9)] = inst_6815);

return statearr_6831;
})();
var statearr_6832_6894 = state_6822__$1;
(statearr_6832_6894[(2)] = null);

(statearr_6832_6894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (6))){
var inst_6787 = (state_6822[(7)]);
var state_6822__$1 = state_6822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6822__$1,(11),inst_6787);
} else {
if((state_val_6823 === (17))){
var inst_6808 = (state_6822[(2)]);
var state_6822__$1 = state_6822;
if(cljs.core.truth_(inst_6808)){
var statearr_6833_6895 = state_6822__$1;
(statearr_6833_6895[(1)] = (19));

} else {
var statearr_6834_6896 = state_6822__$1;
(statearr_6834_6896[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (3))){
var inst_6820 = (state_6822[(2)]);
var state_6822__$1 = state_6822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6822__$1,inst_6820);
} else {
if((state_val_6823 === (12))){
var inst_6797 = (state_6822[(10)]);
var state_6822__$1 = state_6822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6822__$1,(14),inst_6797);
} else {
if((state_val_6823 === (2))){
var state_6822__$1 = state_6822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6822__$1,(4),results);
} else {
if((state_val_6823 === (19))){
var state_6822__$1 = state_6822;
var statearr_6835_6897 = state_6822__$1;
(statearr_6835_6897[(2)] = null);

(statearr_6835_6897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (11))){
var inst_6797 = (state_6822[(2)]);
var state_6822__$1 = (function (){var statearr_6836 = state_6822;
(statearr_6836[(10)] = inst_6797);

return statearr_6836;
})();
var statearr_6837_6898 = state_6822__$1;
(statearr_6837_6898[(2)] = null);

(statearr_6837_6898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (9))){
var state_6822__$1 = state_6822;
var statearr_6838_6899 = state_6822__$1;
(statearr_6838_6899[(2)] = null);

(statearr_6838_6899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (5))){
var state_6822__$1 = state_6822;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6839_6900 = state_6822__$1;
(statearr_6839_6900[(1)] = (8));

} else {
var statearr_6840_6901 = state_6822__$1;
(statearr_6840_6901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (14))){
var inst_6802 = (state_6822[(11)]);
var inst_6800 = (state_6822[(8)]);
var inst_6800__$1 = (state_6822[(2)]);
var inst_6801 = (inst_6800__$1 == null);
var inst_6802__$1 = cljs.core.not.call(null,inst_6801);
var state_6822__$1 = (function (){var statearr_6841 = state_6822;
(statearr_6841[(11)] = inst_6802__$1);

(statearr_6841[(8)] = inst_6800__$1);

return statearr_6841;
})();
if(inst_6802__$1){
var statearr_6842_6902 = state_6822__$1;
(statearr_6842_6902[(1)] = (15));

} else {
var statearr_6843_6903 = state_6822__$1;
(statearr_6843_6903[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (16))){
var inst_6802 = (state_6822[(11)]);
var state_6822__$1 = state_6822;
var statearr_6844_6904 = state_6822__$1;
(statearr_6844_6904[(2)] = inst_6802);

(statearr_6844_6904[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (10))){
var inst_6794 = (state_6822[(2)]);
var state_6822__$1 = state_6822;
var statearr_6845_6905 = state_6822__$1;
(statearr_6845_6905[(2)] = inst_6794);

(statearr_6845_6905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (18))){
var inst_6805 = (state_6822[(2)]);
var state_6822__$1 = state_6822;
var statearr_6846_6906 = state_6822__$1;
(statearr_6846_6906[(2)] = inst_6805);

(statearr_6846_6906[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6823 === (8))){
var inst_6791 = cljs.core.async.close_BANG_.call(null,to);
var state_6822__$1 = state_6822;
var statearr_6847_6907 = state_6822__$1;
(statearr_6847_6907[(2)] = inst_6791);

(statearr_6847_6907[(1)] = (10));


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
}
}
}
}
}
});})(c__6516__auto__,jobs,results,process,async))
;
return ((function (switch__6425__auto__,c__6516__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____0 = (function (){
var statearr_6848 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__);

(statearr_6848[(1)] = (1));

return statearr_6848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____1 = (function (state_6822){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_6822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e6849){if((e6849 instanceof Object)){
var ex__6429__auto__ = e6849;
var statearr_6850_6908 = state_6822;
(statearr_6850_6908[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6909 = state_6822;
state_6822 = G__6909;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__ = function(state_6822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____1.call(this,state_6822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto__,jobs,results,process,async))
})();
var state__6518__auto__ = (function (){var statearr_6851 = f__6517__auto__.call(null);
(statearr_6851[(6)] = c__6516__auto__);

return statearr_6851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto__,jobs,results,process,async))
);

return c__6516__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__6911 = arguments.length;
switch (G__6911) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__6914 = arguments.length;
switch (G__6914) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__6917 = arguments.length;
switch (G__6917) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6516__auto___6966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto___6966,tc,fc){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto___6966,tc,fc){
return (function (state_6943){
var state_val_6944 = (state_6943[(1)]);
if((state_val_6944 === (7))){
var inst_6939 = (state_6943[(2)]);
var state_6943__$1 = state_6943;
var statearr_6945_6967 = state_6943__$1;
(statearr_6945_6967[(2)] = inst_6939);

(statearr_6945_6967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6944 === (1))){
var state_6943__$1 = state_6943;
var statearr_6946_6968 = state_6943__$1;
(statearr_6946_6968[(2)] = null);

(statearr_6946_6968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6944 === (4))){
var inst_6920 = (state_6943[(7)]);
var inst_6920__$1 = (state_6943[(2)]);
var inst_6921 = (inst_6920__$1 == null);
var state_6943__$1 = (function (){var statearr_6947 = state_6943;
(statearr_6947[(7)] = inst_6920__$1);

return statearr_6947;
})();
if(cljs.core.truth_(inst_6921)){
var statearr_6948_6969 = state_6943__$1;
(statearr_6948_6969[(1)] = (5));

} else {
var statearr_6949_6970 = state_6943__$1;
(statearr_6949_6970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6944 === (13))){
var state_6943__$1 = state_6943;
var statearr_6950_6971 = state_6943__$1;
(statearr_6950_6971[(2)] = null);

(statearr_6950_6971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6944 === (6))){
var inst_6920 = (state_6943[(7)]);
var inst_6926 = p.call(null,inst_6920);
var state_6943__$1 = state_6943;
if(cljs.core.truth_(inst_6926)){
var statearr_6951_6972 = state_6943__$1;
(statearr_6951_6972[(1)] = (9));

} else {
var statearr_6952_6973 = state_6943__$1;
(statearr_6952_6973[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6944 === (3))){
var inst_6941 = (state_6943[(2)]);
var state_6943__$1 = state_6943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6943__$1,inst_6941);
} else {
if((state_val_6944 === (12))){
var state_6943__$1 = state_6943;
var statearr_6953_6974 = state_6943__$1;
(statearr_6953_6974[(2)] = null);

(statearr_6953_6974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6944 === (2))){
var state_6943__$1 = state_6943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6943__$1,(4),ch);
} else {
if((state_val_6944 === (11))){
var inst_6920 = (state_6943[(7)]);
var inst_6930 = (state_6943[(2)]);
var state_6943__$1 = state_6943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6943__$1,(8),inst_6930,inst_6920);
} else {
if((state_val_6944 === (9))){
var state_6943__$1 = state_6943;
var statearr_6954_6975 = state_6943__$1;
(statearr_6954_6975[(2)] = tc);

(statearr_6954_6975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6944 === (5))){
var inst_6923 = cljs.core.async.close_BANG_.call(null,tc);
var inst_6924 = cljs.core.async.close_BANG_.call(null,fc);
var state_6943__$1 = (function (){var statearr_6955 = state_6943;
(statearr_6955[(8)] = inst_6923);

return statearr_6955;
})();
var statearr_6956_6976 = state_6943__$1;
(statearr_6956_6976[(2)] = inst_6924);

(statearr_6956_6976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6944 === (14))){
var inst_6937 = (state_6943[(2)]);
var state_6943__$1 = state_6943;
var statearr_6957_6977 = state_6943__$1;
(statearr_6957_6977[(2)] = inst_6937);

(statearr_6957_6977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6944 === (10))){
var state_6943__$1 = state_6943;
var statearr_6958_6978 = state_6943__$1;
(statearr_6958_6978[(2)] = fc);

(statearr_6958_6978[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6944 === (8))){
var inst_6932 = (state_6943[(2)]);
var state_6943__$1 = state_6943;
if(cljs.core.truth_(inst_6932)){
var statearr_6959_6979 = state_6943__$1;
(statearr_6959_6979[(1)] = (12));

} else {
var statearr_6960_6980 = state_6943__$1;
(statearr_6960_6980[(1)] = (13));

}

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
});})(c__6516__auto___6966,tc,fc))
;
return ((function (switch__6425__auto__,c__6516__auto___6966,tc,fc){
return (function() {
var cljs$core$async$state_machine__6426__auto__ = null;
var cljs$core$async$state_machine__6426__auto____0 = (function (){
var statearr_6961 = [null,null,null,null,null,null,null,null,null];
(statearr_6961[(0)] = cljs$core$async$state_machine__6426__auto__);

(statearr_6961[(1)] = (1));

return statearr_6961;
});
var cljs$core$async$state_machine__6426__auto____1 = (function (state_6943){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_6943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e6962){if((e6962 instanceof Object)){
var ex__6429__auto__ = e6962;
var statearr_6963_6981 = state_6943;
(statearr_6963_6981[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6982 = state_6943;
state_6943 = G__6982;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$state_machine__6426__auto__ = function(state_6943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6426__auto____1.call(this,state_6943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6426__auto____0;
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6426__auto____1;
return cljs$core$async$state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto___6966,tc,fc))
})();
var state__6518__auto__ = (function (){var statearr_6964 = f__6517__auto__.call(null);
(statearr_6964[(6)] = c__6516__auto___6966);

return statearr_6964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto___6966,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto__){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto__){
return (function (state_7003){
var state_val_7004 = (state_7003[(1)]);
if((state_val_7004 === (7))){
var inst_6999 = (state_7003[(2)]);
var state_7003__$1 = state_7003;
var statearr_7005_7023 = state_7003__$1;
(statearr_7005_7023[(2)] = inst_6999);

(statearr_7005_7023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7004 === (1))){
var inst_6983 = init;
var state_7003__$1 = (function (){var statearr_7006 = state_7003;
(statearr_7006[(7)] = inst_6983);

return statearr_7006;
})();
var statearr_7007_7024 = state_7003__$1;
(statearr_7007_7024[(2)] = null);

(statearr_7007_7024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7004 === (4))){
var inst_6986 = (state_7003[(8)]);
var inst_6986__$1 = (state_7003[(2)]);
var inst_6987 = (inst_6986__$1 == null);
var state_7003__$1 = (function (){var statearr_7008 = state_7003;
(statearr_7008[(8)] = inst_6986__$1);

return statearr_7008;
})();
if(cljs.core.truth_(inst_6987)){
var statearr_7009_7025 = state_7003__$1;
(statearr_7009_7025[(1)] = (5));

} else {
var statearr_7010_7026 = state_7003__$1;
(statearr_7010_7026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7004 === (6))){
var inst_6986 = (state_7003[(8)]);
var inst_6983 = (state_7003[(7)]);
var inst_6990 = (state_7003[(9)]);
var inst_6990__$1 = f.call(null,inst_6983,inst_6986);
var inst_6991 = cljs.core.reduced_QMARK_.call(null,inst_6990__$1);
var state_7003__$1 = (function (){var statearr_7011 = state_7003;
(statearr_7011[(9)] = inst_6990__$1);

return statearr_7011;
})();
if(inst_6991){
var statearr_7012_7027 = state_7003__$1;
(statearr_7012_7027[(1)] = (8));

} else {
var statearr_7013_7028 = state_7003__$1;
(statearr_7013_7028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7004 === (3))){
var inst_7001 = (state_7003[(2)]);
var state_7003__$1 = state_7003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7003__$1,inst_7001);
} else {
if((state_val_7004 === (2))){
var state_7003__$1 = state_7003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7003__$1,(4),ch);
} else {
if((state_val_7004 === (9))){
var inst_6990 = (state_7003[(9)]);
var inst_6983 = inst_6990;
var state_7003__$1 = (function (){var statearr_7014 = state_7003;
(statearr_7014[(7)] = inst_6983);

return statearr_7014;
})();
var statearr_7015_7029 = state_7003__$1;
(statearr_7015_7029[(2)] = null);

(statearr_7015_7029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7004 === (5))){
var inst_6983 = (state_7003[(7)]);
var state_7003__$1 = state_7003;
var statearr_7016_7030 = state_7003__$1;
(statearr_7016_7030[(2)] = inst_6983);

(statearr_7016_7030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7004 === (10))){
var inst_6997 = (state_7003[(2)]);
var state_7003__$1 = state_7003;
var statearr_7017_7031 = state_7003__$1;
(statearr_7017_7031[(2)] = inst_6997);

(statearr_7017_7031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7004 === (8))){
var inst_6990 = (state_7003[(9)]);
var inst_6993 = cljs.core.deref.call(null,inst_6990);
var state_7003__$1 = state_7003;
var statearr_7018_7032 = state_7003__$1;
(statearr_7018_7032[(2)] = inst_6993);

(statearr_7018_7032[(1)] = (10));


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
});})(c__6516__auto__))
;
return ((function (switch__6425__auto__,c__6516__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6426__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6426__auto____0 = (function (){
var statearr_7019 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7019[(0)] = cljs$core$async$reduce_$_state_machine__6426__auto__);

(statearr_7019[(1)] = (1));

return statearr_7019;
});
var cljs$core$async$reduce_$_state_machine__6426__auto____1 = (function (state_7003){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_7003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e7020){if((e7020 instanceof Object)){
var ex__6429__auto__ = e7020;
var statearr_7021_7033 = state_7003;
(statearr_7021_7033[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7034 = state_7003;
state_7003 = G__7034;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6426__auto__ = function(state_7003){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6426__auto____1.call(this,state_7003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6426__auto____0;
cljs$core$async$reduce_$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6426__auto____1;
return cljs$core$async$reduce_$_state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto__))
})();
var state__6518__auto__ = (function (){var statearr_7022 = f__6517__auto__.call(null);
(statearr_7022[(6)] = c__6516__auto__);

return statearr_7022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto__))
);

return c__6516__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__6516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto__,f__$1){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto__,f__$1){
return (function (state_7040){
var state_val_7041 = (state_7040[(1)]);
if((state_val_7041 === (1))){
var inst_7035 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_7040__$1 = state_7040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7040__$1,(2),inst_7035);
} else {
if((state_val_7041 === (2))){
var inst_7037 = (state_7040[(2)]);
var inst_7038 = f__$1.call(null,inst_7037);
var state_7040__$1 = state_7040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7040__$1,inst_7038);
} else {
return null;
}
}
});})(c__6516__auto__,f__$1))
;
return ((function (switch__6425__auto__,c__6516__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__6426__auto__ = null;
var cljs$core$async$transduce_$_state_machine__6426__auto____0 = (function (){
var statearr_7042 = [null,null,null,null,null,null,null];
(statearr_7042[(0)] = cljs$core$async$transduce_$_state_machine__6426__auto__);

(statearr_7042[(1)] = (1));

return statearr_7042;
});
var cljs$core$async$transduce_$_state_machine__6426__auto____1 = (function (state_7040){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_7040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e7043){if((e7043 instanceof Object)){
var ex__6429__auto__ = e7043;
var statearr_7044_7046 = state_7040;
(statearr_7044_7046[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7047 = state_7040;
state_7040 = G__7047;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__6426__auto__ = function(state_7040){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__6426__auto____1.call(this,state_7040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__6426__auto____0;
cljs$core$async$transduce_$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__6426__auto____1;
return cljs$core$async$transduce_$_state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto__,f__$1))
})();
var state__6518__auto__ = (function (){var statearr_7045 = f__6517__auto__.call(null);
(statearr_7045[(6)] = c__6516__auto__);

return statearr_7045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto__,f__$1))
);

return c__6516__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__7049 = arguments.length;
switch (G__7049) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto__){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto__){
return (function (state_7074){
var state_val_7075 = (state_7074[(1)]);
if((state_val_7075 === (7))){
var inst_7056 = (state_7074[(2)]);
var state_7074__$1 = state_7074;
var statearr_7076_7097 = state_7074__$1;
(statearr_7076_7097[(2)] = inst_7056);

(statearr_7076_7097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7075 === (1))){
var inst_7050 = cljs.core.seq.call(null,coll);
var inst_7051 = inst_7050;
var state_7074__$1 = (function (){var statearr_7077 = state_7074;
(statearr_7077[(7)] = inst_7051);

return statearr_7077;
})();
var statearr_7078_7098 = state_7074__$1;
(statearr_7078_7098[(2)] = null);

(statearr_7078_7098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7075 === (4))){
var inst_7051 = (state_7074[(7)]);
var inst_7054 = cljs.core.first.call(null,inst_7051);
var state_7074__$1 = state_7074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7074__$1,(7),ch,inst_7054);
} else {
if((state_val_7075 === (13))){
var inst_7068 = (state_7074[(2)]);
var state_7074__$1 = state_7074;
var statearr_7079_7099 = state_7074__$1;
(statearr_7079_7099[(2)] = inst_7068);

(statearr_7079_7099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7075 === (6))){
var inst_7059 = (state_7074[(2)]);
var state_7074__$1 = state_7074;
if(cljs.core.truth_(inst_7059)){
var statearr_7080_7100 = state_7074__$1;
(statearr_7080_7100[(1)] = (8));

} else {
var statearr_7081_7101 = state_7074__$1;
(statearr_7081_7101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7075 === (3))){
var inst_7072 = (state_7074[(2)]);
var state_7074__$1 = state_7074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7074__$1,inst_7072);
} else {
if((state_val_7075 === (12))){
var state_7074__$1 = state_7074;
var statearr_7082_7102 = state_7074__$1;
(statearr_7082_7102[(2)] = null);

(statearr_7082_7102[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7075 === (2))){
var inst_7051 = (state_7074[(7)]);
var state_7074__$1 = state_7074;
if(cljs.core.truth_(inst_7051)){
var statearr_7083_7103 = state_7074__$1;
(statearr_7083_7103[(1)] = (4));

} else {
var statearr_7084_7104 = state_7074__$1;
(statearr_7084_7104[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7075 === (11))){
var inst_7065 = cljs.core.async.close_BANG_.call(null,ch);
var state_7074__$1 = state_7074;
var statearr_7085_7105 = state_7074__$1;
(statearr_7085_7105[(2)] = inst_7065);

(statearr_7085_7105[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7075 === (9))){
var state_7074__$1 = state_7074;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7086_7106 = state_7074__$1;
(statearr_7086_7106[(1)] = (11));

} else {
var statearr_7087_7107 = state_7074__$1;
(statearr_7087_7107[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7075 === (5))){
var inst_7051 = (state_7074[(7)]);
var state_7074__$1 = state_7074;
var statearr_7088_7108 = state_7074__$1;
(statearr_7088_7108[(2)] = inst_7051);

(statearr_7088_7108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7075 === (10))){
var inst_7070 = (state_7074[(2)]);
var state_7074__$1 = state_7074;
var statearr_7089_7109 = state_7074__$1;
(statearr_7089_7109[(2)] = inst_7070);

(statearr_7089_7109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7075 === (8))){
var inst_7051 = (state_7074[(7)]);
var inst_7061 = cljs.core.next.call(null,inst_7051);
var inst_7051__$1 = inst_7061;
var state_7074__$1 = (function (){var statearr_7090 = state_7074;
(statearr_7090[(7)] = inst_7051__$1);

return statearr_7090;
})();
var statearr_7091_7110 = state_7074__$1;
(statearr_7091_7110[(2)] = null);

(statearr_7091_7110[(1)] = (2));


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
});})(c__6516__auto__))
;
return ((function (switch__6425__auto__,c__6516__auto__){
return (function() {
var cljs$core$async$state_machine__6426__auto__ = null;
var cljs$core$async$state_machine__6426__auto____0 = (function (){
var statearr_7092 = [null,null,null,null,null,null,null,null];
(statearr_7092[(0)] = cljs$core$async$state_machine__6426__auto__);

(statearr_7092[(1)] = (1));

return statearr_7092;
});
var cljs$core$async$state_machine__6426__auto____1 = (function (state_7074){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_7074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e7093){if((e7093 instanceof Object)){
var ex__6429__auto__ = e7093;
var statearr_7094_7111 = state_7074;
(statearr_7094_7111[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7112 = state_7074;
state_7074 = G__7112;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$state_machine__6426__auto__ = function(state_7074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6426__auto____1.call(this,state_7074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6426__auto____0;
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6426__auto____1;
return cljs$core$async$state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto__))
})();
var state__6518__auto__ = (function (){var statearr_7095 = f__6517__auto__.call(null);
(statearr_7095[(6)] = c__6516__auto__);

return statearr_7095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto__))
);

return c__6516__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7113 = (function (ch,cs,meta7114){
this.ch = ch;
this.cs = cs;
this.meta7114 = meta7114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_7115,meta7114__$1){
var self__ = this;
var _7115__$1 = this;
return (new cljs.core.async.t_cljs$core$async7113(self__.ch,self__.cs,meta7114__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async7113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_7115){
var self__ = this;
var _7115__$1 = this;
return self__.meta7114;
});})(cs))
;

cljs.core.async.t_cljs$core$async7113.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7113.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async7113.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7113.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7113.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7113.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7113.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta7114","meta7114",99328171,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async7113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7113";

cljs.core.async.t_cljs$core$async7113.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async7113");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7113.
 */
cljs.core.async.__GT_t_cljs$core$async7113 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async7113(ch__$1,cs__$1,meta7114){
return (new cljs.core.async.t_cljs$core$async7113(ch__$1,cs__$1,meta7114));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async7113(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6516__auto___7335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto___7335,cs,m,dchan,dctr,done){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto___7335,cs,m,dchan,dctr,done){
return (function (state_7250){
var state_val_7251 = (state_7250[(1)]);
if((state_val_7251 === (7))){
var inst_7246 = (state_7250[(2)]);
var state_7250__$1 = state_7250;
var statearr_7252_7336 = state_7250__$1;
(statearr_7252_7336[(2)] = inst_7246);

(statearr_7252_7336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (20))){
var inst_7149 = (state_7250[(7)]);
var inst_7161 = cljs.core.first.call(null,inst_7149);
var inst_7162 = cljs.core.nth.call(null,inst_7161,(0),null);
var inst_7163 = cljs.core.nth.call(null,inst_7161,(1),null);
var state_7250__$1 = (function (){var statearr_7253 = state_7250;
(statearr_7253[(8)] = inst_7162);

return statearr_7253;
})();
if(cljs.core.truth_(inst_7163)){
var statearr_7254_7337 = state_7250__$1;
(statearr_7254_7337[(1)] = (22));

} else {
var statearr_7255_7338 = state_7250__$1;
(statearr_7255_7338[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (27))){
var inst_7191 = (state_7250[(9)]);
var inst_7193 = (state_7250[(10)]);
var inst_7118 = (state_7250[(11)]);
var inst_7198 = (state_7250[(12)]);
var inst_7198__$1 = cljs.core._nth.call(null,inst_7191,inst_7193);
var inst_7199 = cljs.core.async.put_BANG_.call(null,inst_7198__$1,inst_7118,done);
var state_7250__$1 = (function (){var statearr_7256 = state_7250;
(statearr_7256[(12)] = inst_7198__$1);

return statearr_7256;
})();
if(cljs.core.truth_(inst_7199)){
var statearr_7257_7339 = state_7250__$1;
(statearr_7257_7339[(1)] = (30));

} else {
var statearr_7258_7340 = state_7250__$1;
(statearr_7258_7340[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (1))){
var state_7250__$1 = state_7250;
var statearr_7259_7341 = state_7250__$1;
(statearr_7259_7341[(2)] = null);

(statearr_7259_7341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (24))){
var inst_7149 = (state_7250[(7)]);
var inst_7168 = (state_7250[(2)]);
var inst_7169 = cljs.core.next.call(null,inst_7149);
var inst_7127 = inst_7169;
var inst_7128 = null;
var inst_7129 = (0);
var inst_7130 = (0);
var state_7250__$1 = (function (){var statearr_7260 = state_7250;
(statearr_7260[(13)] = inst_7168);

(statearr_7260[(14)] = inst_7128);

(statearr_7260[(15)] = inst_7129);

(statearr_7260[(16)] = inst_7127);

(statearr_7260[(17)] = inst_7130);

return statearr_7260;
})();
var statearr_7261_7342 = state_7250__$1;
(statearr_7261_7342[(2)] = null);

(statearr_7261_7342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (39))){
var state_7250__$1 = state_7250;
var statearr_7265_7343 = state_7250__$1;
(statearr_7265_7343[(2)] = null);

(statearr_7265_7343[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (4))){
var inst_7118 = (state_7250[(11)]);
var inst_7118__$1 = (state_7250[(2)]);
var inst_7119 = (inst_7118__$1 == null);
var state_7250__$1 = (function (){var statearr_7266 = state_7250;
(statearr_7266[(11)] = inst_7118__$1);

return statearr_7266;
})();
if(cljs.core.truth_(inst_7119)){
var statearr_7267_7344 = state_7250__$1;
(statearr_7267_7344[(1)] = (5));

} else {
var statearr_7268_7345 = state_7250__$1;
(statearr_7268_7345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (15))){
var inst_7128 = (state_7250[(14)]);
var inst_7129 = (state_7250[(15)]);
var inst_7127 = (state_7250[(16)]);
var inst_7130 = (state_7250[(17)]);
var inst_7145 = (state_7250[(2)]);
var inst_7146 = (inst_7130 + (1));
var tmp7262 = inst_7128;
var tmp7263 = inst_7129;
var tmp7264 = inst_7127;
var inst_7127__$1 = tmp7264;
var inst_7128__$1 = tmp7262;
var inst_7129__$1 = tmp7263;
var inst_7130__$1 = inst_7146;
var state_7250__$1 = (function (){var statearr_7269 = state_7250;
(statearr_7269[(14)] = inst_7128__$1);

(statearr_7269[(15)] = inst_7129__$1);

(statearr_7269[(16)] = inst_7127__$1);

(statearr_7269[(17)] = inst_7130__$1);

(statearr_7269[(18)] = inst_7145);

return statearr_7269;
})();
var statearr_7270_7346 = state_7250__$1;
(statearr_7270_7346[(2)] = null);

(statearr_7270_7346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (21))){
var inst_7172 = (state_7250[(2)]);
var state_7250__$1 = state_7250;
var statearr_7274_7347 = state_7250__$1;
(statearr_7274_7347[(2)] = inst_7172);

(statearr_7274_7347[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (31))){
var inst_7198 = (state_7250[(12)]);
var inst_7202 = done.call(null,null);
var inst_7203 = cljs.core.async.untap_STAR_.call(null,m,inst_7198);
var state_7250__$1 = (function (){var statearr_7275 = state_7250;
(statearr_7275[(19)] = inst_7202);

return statearr_7275;
})();
var statearr_7276_7348 = state_7250__$1;
(statearr_7276_7348[(2)] = inst_7203);

(statearr_7276_7348[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (32))){
var inst_7191 = (state_7250[(9)]);
var inst_7190 = (state_7250[(20)]);
var inst_7193 = (state_7250[(10)]);
var inst_7192 = (state_7250[(21)]);
var inst_7205 = (state_7250[(2)]);
var inst_7206 = (inst_7193 + (1));
var tmp7271 = inst_7191;
var tmp7272 = inst_7190;
var tmp7273 = inst_7192;
var inst_7190__$1 = tmp7272;
var inst_7191__$1 = tmp7271;
var inst_7192__$1 = tmp7273;
var inst_7193__$1 = inst_7206;
var state_7250__$1 = (function (){var statearr_7277 = state_7250;
(statearr_7277[(9)] = inst_7191__$1);

(statearr_7277[(20)] = inst_7190__$1);

(statearr_7277[(10)] = inst_7193__$1);

(statearr_7277[(21)] = inst_7192__$1);

(statearr_7277[(22)] = inst_7205);

return statearr_7277;
})();
var statearr_7278_7349 = state_7250__$1;
(statearr_7278_7349[(2)] = null);

(statearr_7278_7349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (40))){
var inst_7218 = (state_7250[(23)]);
var inst_7222 = done.call(null,null);
var inst_7223 = cljs.core.async.untap_STAR_.call(null,m,inst_7218);
var state_7250__$1 = (function (){var statearr_7279 = state_7250;
(statearr_7279[(24)] = inst_7222);

return statearr_7279;
})();
var statearr_7280_7350 = state_7250__$1;
(statearr_7280_7350[(2)] = inst_7223);

(statearr_7280_7350[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (33))){
var inst_7209 = (state_7250[(25)]);
var inst_7211 = cljs.core.chunked_seq_QMARK_.call(null,inst_7209);
var state_7250__$1 = state_7250;
if(inst_7211){
var statearr_7281_7351 = state_7250__$1;
(statearr_7281_7351[(1)] = (36));

} else {
var statearr_7282_7352 = state_7250__$1;
(statearr_7282_7352[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (13))){
var inst_7139 = (state_7250[(26)]);
var inst_7142 = cljs.core.async.close_BANG_.call(null,inst_7139);
var state_7250__$1 = state_7250;
var statearr_7283_7353 = state_7250__$1;
(statearr_7283_7353[(2)] = inst_7142);

(statearr_7283_7353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (22))){
var inst_7162 = (state_7250[(8)]);
var inst_7165 = cljs.core.async.close_BANG_.call(null,inst_7162);
var state_7250__$1 = state_7250;
var statearr_7284_7354 = state_7250__$1;
(statearr_7284_7354[(2)] = inst_7165);

(statearr_7284_7354[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (36))){
var inst_7209 = (state_7250[(25)]);
var inst_7213 = cljs.core.chunk_first.call(null,inst_7209);
var inst_7214 = cljs.core.chunk_rest.call(null,inst_7209);
var inst_7215 = cljs.core.count.call(null,inst_7213);
var inst_7190 = inst_7214;
var inst_7191 = inst_7213;
var inst_7192 = inst_7215;
var inst_7193 = (0);
var state_7250__$1 = (function (){var statearr_7285 = state_7250;
(statearr_7285[(9)] = inst_7191);

(statearr_7285[(20)] = inst_7190);

(statearr_7285[(10)] = inst_7193);

(statearr_7285[(21)] = inst_7192);

return statearr_7285;
})();
var statearr_7286_7355 = state_7250__$1;
(statearr_7286_7355[(2)] = null);

(statearr_7286_7355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (41))){
var inst_7209 = (state_7250[(25)]);
var inst_7225 = (state_7250[(2)]);
var inst_7226 = cljs.core.next.call(null,inst_7209);
var inst_7190 = inst_7226;
var inst_7191 = null;
var inst_7192 = (0);
var inst_7193 = (0);
var state_7250__$1 = (function (){var statearr_7287 = state_7250;
(statearr_7287[(9)] = inst_7191);

(statearr_7287[(20)] = inst_7190);

(statearr_7287[(10)] = inst_7193);

(statearr_7287[(21)] = inst_7192);

(statearr_7287[(27)] = inst_7225);

return statearr_7287;
})();
var statearr_7288_7356 = state_7250__$1;
(statearr_7288_7356[(2)] = null);

(statearr_7288_7356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (43))){
var state_7250__$1 = state_7250;
var statearr_7289_7357 = state_7250__$1;
(statearr_7289_7357[(2)] = null);

(statearr_7289_7357[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (29))){
var inst_7234 = (state_7250[(2)]);
var state_7250__$1 = state_7250;
var statearr_7290_7358 = state_7250__$1;
(statearr_7290_7358[(2)] = inst_7234);

(statearr_7290_7358[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (44))){
var inst_7243 = (state_7250[(2)]);
var state_7250__$1 = (function (){var statearr_7291 = state_7250;
(statearr_7291[(28)] = inst_7243);

return statearr_7291;
})();
var statearr_7292_7359 = state_7250__$1;
(statearr_7292_7359[(2)] = null);

(statearr_7292_7359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (6))){
var inst_7182 = (state_7250[(29)]);
var inst_7181 = cljs.core.deref.call(null,cs);
var inst_7182__$1 = cljs.core.keys.call(null,inst_7181);
var inst_7183 = cljs.core.count.call(null,inst_7182__$1);
var inst_7184 = cljs.core.reset_BANG_.call(null,dctr,inst_7183);
var inst_7189 = cljs.core.seq.call(null,inst_7182__$1);
var inst_7190 = inst_7189;
var inst_7191 = null;
var inst_7192 = (0);
var inst_7193 = (0);
var state_7250__$1 = (function (){var statearr_7293 = state_7250;
(statearr_7293[(9)] = inst_7191);

(statearr_7293[(20)] = inst_7190);

(statearr_7293[(10)] = inst_7193);

(statearr_7293[(30)] = inst_7184);

(statearr_7293[(21)] = inst_7192);

(statearr_7293[(29)] = inst_7182__$1);

return statearr_7293;
})();
var statearr_7294_7360 = state_7250__$1;
(statearr_7294_7360[(2)] = null);

(statearr_7294_7360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (28))){
var inst_7190 = (state_7250[(20)]);
var inst_7209 = (state_7250[(25)]);
var inst_7209__$1 = cljs.core.seq.call(null,inst_7190);
var state_7250__$1 = (function (){var statearr_7295 = state_7250;
(statearr_7295[(25)] = inst_7209__$1);

return statearr_7295;
})();
if(inst_7209__$1){
var statearr_7296_7361 = state_7250__$1;
(statearr_7296_7361[(1)] = (33));

} else {
var statearr_7297_7362 = state_7250__$1;
(statearr_7297_7362[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (25))){
var inst_7193 = (state_7250[(10)]);
var inst_7192 = (state_7250[(21)]);
var inst_7195 = (inst_7193 < inst_7192);
var inst_7196 = inst_7195;
var state_7250__$1 = state_7250;
if(cljs.core.truth_(inst_7196)){
var statearr_7298_7363 = state_7250__$1;
(statearr_7298_7363[(1)] = (27));

} else {
var statearr_7299_7364 = state_7250__$1;
(statearr_7299_7364[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (34))){
var state_7250__$1 = state_7250;
var statearr_7300_7365 = state_7250__$1;
(statearr_7300_7365[(2)] = null);

(statearr_7300_7365[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (17))){
var state_7250__$1 = state_7250;
var statearr_7301_7366 = state_7250__$1;
(statearr_7301_7366[(2)] = null);

(statearr_7301_7366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (3))){
var inst_7248 = (state_7250[(2)]);
var state_7250__$1 = state_7250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7250__$1,inst_7248);
} else {
if((state_val_7251 === (12))){
var inst_7177 = (state_7250[(2)]);
var state_7250__$1 = state_7250;
var statearr_7302_7367 = state_7250__$1;
(statearr_7302_7367[(2)] = inst_7177);

(statearr_7302_7367[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (2))){
var state_7250__$1 = state_7250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7250__$1,(4),ch);
} else {
if((state_val_7251 === (23))){
var state_7250__$1 = state_7250;
var statearr_7303_7368 = state_7250__$1;
(statearr_7303_7368[(2)] = null);

(statearr_7303_7368[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (35))){
var inst_7232 = (state_7250[(2)]);
var state_7250__$1 = state_7250;
var statearr_7304_7369 = state_7250__$1;
(statearr_7304_7369[(2)] = inst_7232);

(statearr_7304_7369[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (19))){
var inst_7149 = (state_7250[(7)]);
var inst_7153 = cljs.core.chunk_first.call(null,inst_7149);
var inst_7154 = cljs.core.chunk_rest.call(null,inst_7149);
var inst_7155 = cljs.core.count.call(null,inst_7153);
var inst_7127 = inst_7154;
var inst_7128 = inst_7153;
var inst_7129 = inst_7155;
var inst_7130 = (0);
var state_7250__$1 = (function (){var statearr_7305 = state_7250;
(statearr_7305[(14)] = inst_7128);

(statearr_7305[(15)] = inst_7129);

(statearr_7305[(16)] = inst_7127);

(statearr_7305[(17)] = inst_7130);

return statearr_7305;
})();
var statearr_7306_7370 = state_7250__$1;
(statearr_7306_7370[(2)] = null);

(statearr_7306_7370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (11))){
var inst_7149 = (state_7250[(7)]);
var inst_7127 = (state_7250[(16)]);
var inst_7149__$1 = cljs.core.seq.call(null,inst_7127);
var state_7250__$1 = (function (){var statearr_7307 = state_7250;
(statearr_7307[(7)] = inst_7149__$1);

return statearr_7307;
})();
if(inst_7149__$1){
var statearr_7308_7371 = state_7250__$1;
(statearr_7308_7371[(1)] = (16));

} else {
var statearr_7309_7372 = state_7250__$1;
(statearr_7309_7372[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (9))){
var inst_7179 = (state_7250[(2)]);
var state_7250__$1 = state_7250;
var statearr_7310_7373 = state_7250__$1;
(statearr_7310_7373[(2)] = inst_7179);

(statearr_7310_7373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (5))){
var inst_7125 = cljs.core.deref.call(null,cs);
var inst_7126 = cljs.core.seq.call(null,inst_7125);
var inst_7127 = inst_7126;
var inst_7128 = null;
var inst_7129 = (0);
var inst_7130 = (0);
var state_7250__$1 = (function (){var statearr_7311 = state_7250;
(statearr_7311[(14)] = inst_7128);

(statearr_7311[(15)] = inst_7129);

(statearr_7311[(16)] = inst_7127);

(statearr_7311[(17)] = inst_7130);

return statearr_7311;
})();
var statearr_7312_7374 = state_7250__$1;
(statearr_7312_7374[(2)] = null);

(statearr_7312_7374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (14))){
var state_7250__$1 = state_7250;
var statearr_7313_7375 = state_7250__$1;
(statearr_7313_7375[(2)] = null);

(statearr_7313_7375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (45))){
var inst_7240 = (state_7250[(2)]);
var state_7250__$1 = state_7250;
var statearr_7314_7376 = state_7250__$1;
(statearr_7314_7376[(2)] = inst_7240);

(statearr_7314_7376[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (26))){
var inst_7182 = (state_7250[(29)]);
var inst_7236 = (state_7250[(2)]);
var inst_7237 = cljs.core.seq.call(null,inst_7182);
var state_7250__$1 = (function (){var statearr_7315 = state_7250;
(statearr_7315[(31)] = inst_7236);

return statearr_7315;
})();
if(inst_7237){
var statearr_7316_7377 = state_7250__$1;
(statearr_7316_7377[(1)] = (42));

} else {
var statearr_7317_7378 = state_7250__$1;
(statearr_7317_7378[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (16))){
var inst_7149 = (state_7250[(7)]);
var inst_7151 = cljs.core.chunked_seq_QMARK_.call(null,inst_7149);
var state_7250__$1 = state_7250;
if(inst_7151){
var statearr_7318_7379 = state_7250__$1;
(statearr_7318_7379[(1)] = (19));

} else {
var statearr_7319_7380 = state_7250__$1;
(statearr_7319_7380[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (38))){
var inst_7229 = (state_7250[(2)]);
var state_7250__$1 = state_7250;
var statearr_7320_7381 = state_7250__$1;
(statearr_7320_7381[(2)] = inst_7229);

(statearr_7320_7381[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (30))){
var state_7250__$1 = state_7250;
var statearr_7321_7382 = state_7250__$1;
(statearr_7321_7382[(2)] = null);

(statearr_7321_7382[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (10))){
var inst_7128 = (state_7250[(14)]);
var inst_7130 = (state_7250[(17)]);
var inst_7138 = cljs.core._nth.call(null,inst_7128,inst_7130);
var inst_7139 = cljs.core.nth.call(null,inst_7138,(0),null);
var inst_7140 = cljs.core.nth.call(null,inst_7138,(1),null);
var state_7250__$1 = (function (){var statearr_7322 = state_7250;
(statearr_7322[(26)] = inst_7139);

return statearr_7322;
})();
if(cljs.core.truth_(inst_7140)){
var statearr_7323_7383 = state_7250__$1;
(statearr_7323_7383[(1)] = (13));

} else {
var statearr_7324_7384 = state_7250__$1;
(statearr_7324_7384[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (18))){
var inst_7175 = (state_7250[(2)]);
var state_7250__$1 = state_7250;
var statearr_7325_7385 = state_7250__$1;
(statearr_7325_7385[(2)] = inst_7175);

(statearr_7325_7385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (42))){
var state_7250__$1 = state_7250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7250__$1,(45),dchan);
} else {
if((state_val_7251 === (37))){
var inst_7118 = (state_7250[(11)]);
var inst_7209 = (state_7250[(25)]);
var inst_7218 = (state_7250[(23)]);
var inst_7218__$1 = cljs.core.first.call(null,inst_7209);
var inst_7219 = cljs.core.async.put_BANG_.call(null,inst_7218__$1,inst_7118,done);
var state_7250__$1 = (function (){var statearr_7326 = state_7250;
(statearr_7326[(23)] = inst_7218__$1);

return statearr_7326;
})();
if(cljs.core.truth_(inst_7219)){
var statearr_7327_7386 = state_7250__$1;
(statearr_7327_7386[(1)] = (39));

} else {
var statearr_7328_7387 = state_7250__$1;
(statearr_7328_7387[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7251 === (8))){
var inst_7129 = (state_7250[(15)]);
var inst_7130 = (state_7250[(17)]);
var inst_7132 = (inst_7130 < inst_7129);
var inst_7133 = inst_7132;
var state_7250__$1 = state_7250;
if(cljs.core.truth_(inst_7133)){
var statearr_7329_7388 = state_7250__$1;
(statearr_7329_7388[(1)] = (10));

} else {
var statearr_7330_7389 = state_7250__$1;
(statearr_7330_7389[(1)] = (11));

}

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
});})(c__6516__auto___7335,cs,m,dchan,dctr,done))
;
return ((function (switch__6425__auto__,c__6516__auto___7335,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6426__auto__ = null;
var cljs$core$async$mult_$_state_machine__6426__auto____0 = (function (){
var statearr_7331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7331[(0)] = cljs$core$async$mult_$_state_machine__6426__auto__);

(statearr_7331[(1)] = (1));

return statearr_7331;
});
var cljs$core$async$mult_$_state_machine__6426__auto____1 = (function (state_7250){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_7250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e7332){if((e7332 instanceof Object)){
var ex__6429__auto__ = e7332;
var statearr_7333_7390 = state_7250;
(statearr_7333_7390[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7391 = state_7250;
state_7250 = G__7391;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6426__auto__ = function(state_7250){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6426__auto____1.call(this,state_7250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6426__auto____0;
cljs$core$async$mult_$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6426__auto____1;
return cljs$core$async$mult_$_state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto___7335,cs,m,dchan,dctr,done))
})();
var state__6518__auto__ = (function (){var statearr_7334 = f__6517__auto__.call(null);
(statearr_7334[(6)] = c__6516__auto___7335);

return statearr_7334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto___7335,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__7393 = arguments.length;
switch (G__7393) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___7405 = arguments.length;
var i__4532__auto___7406 = (0);
while(true){
if((i__4532__auto___7406 < len__4531__auto___7405)){
args__4534__auto__.push((arguments[i__4532__auto___7406]));

var G__7407 = (i__4532__auto___7406 + (1));
i__4532__auto___7406 = G__7407;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__7399){
var map__7400 = p__7399;
var map__7400__$1 = ((((!((map__7400 == null)))?(((((map__7400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7400):map__7400);
var opts = map__7400__$1;
var statearr_7402_7408 = state;
(statearr_7402_7408[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__7400,map__7400__$1,opts){
return (function (val){
var statearr_7403_7409 = state;
(statearr_7403_7409[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__7400,map__7400__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_7404_7410 = state;
(statearr_7404_7410[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq7395){
var G__7396 = cljs.core.first.call(null,seq7395);
var seq7395__$1 = cljs.core.next.call(null,seq7395);
var G__7397 = cljs.core.first.call(null,seq7395__$1);
var seq7395__$2 = cljs.core.next.call(null,seq7395__$1);
var G__7398 = cljs.core.first.call(null,seq7395__$2);
var seq7395__$3 = cljs.core.next.call(null,seq7395__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7396,G__7397,G__7398,seq7395__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7411 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7411 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta7412){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta7412 = meta7412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7413,meta7412__$1){
var self__ = this;
var _7413__$1 = this;
return (new cljs.core.async.t_cljs$core$async7411(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta7412__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7411.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7413){
var self__ = this;
var _7413__$1 = this;
return self__.meta7412;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7411.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7411.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7411.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7411.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7411.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7411.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7411.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7411.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7411.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta7412","meta7412",631033486,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7411";

cljs.core.async.t_cljs$core$async7411.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async7411");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7411.
 */
cljs.core.async.__GT_t_cljs$core$async7411 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async7411(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta7412){
return (new cljs.core.async.t_cljs$core$async7411(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta7412));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async7411(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6516__auto___7575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto___7575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto___7575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_7515){
var state_val_7516 = (state_7515[(1)]);
if((state_val_7516 === (7))){
var inst_7430 = (state_7515[(2)]);
var state_7515__$1 = state_7515;
var statearr_7517_7576 = state_7515__$1;
(statearr_7517_7576[(2)] = inst_7430);

(statearr_7517_7576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (20))){
var inst_7442 = (state_7515[(7)]);
var state_7515__$1 = state_7515;
var statearr_7518_7577 = state_7515__$1;
(statearr_7518_7577[(2)] = inst_7442);

(statearr_7518_7577[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (27))){
var state_7515__$1 = state_7515;
var statearr_7519_7578 = state_7515__$1;
(statearr_7519_7578[(2)] = null);

(statearr_7519_7578[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (1))){
var inst_7417 = (state_7515[(8)]);
var inst_7417__$1 = calc_state.call(null);
var inst_7419 = (inst_7417__$1 == null);
var inst_7420 = cljs.core.not.call(null,inst_7419);
var state_7515__$1 = (function (){var statearr_7520 = state_7515;
(statearr_7520[(8)] = inst_7417__$1);

return statearr_7520;
})();
if(inst_7420){
var statearr_7521_7579 = state_7515__$1;
(statearr_7521_7579[(1)] = (2));

} else {
var statearr_7522_7580 = state_7515__$1;
(statearr_7522_7580[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (24))){
var inst_7489 = (state_7515[(9)]);
var inst_7466 = (state_7515[(10)]);
var inst_7475 = (state_7515[(11)]);
var inst_7489__$1 = inst_7466.call(null,inst_7475);
var state_7515__$1 = (function (){var statearr_7523 = state_7515;
(statearr_7523[(9)] = inst_7489__$1);

return statearr_7523;
})();
if(cljs.core.truth_(inst_7489__$1)){
var statearr_7524_7581 = state_7515__$1;
(statearr_7524_7581[(1)] = (29));

} else {
var statearr_7525_7582 = state_7515__$1;
(statearr_7525_7582[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (4))){
var inst_7433 = (state_7515[(2)]);
var state_7515__$1 = state_7515;
if(cljs.core.truth_(inst_7433)){
var statearr_7526_7583 = state_7515__$1;
(statearr_7526_7583[(1)] = (8));

} else {
var statearr_7527_7584 = state_7515__$1;
(statearr_7527_7584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (15))){
var inst_7460 = (state_7515[(2)]);
var state_7515__$1 = state_7515;
if(cljs.core.truth_(inst_7460)){
var statearr_7528_7585 = state_7515__$1;
(statearr_7528_7585[(1)] = (19));

} else {
var statearr_7529_7586 = state_7515__$1;
(statearr_7529_7586[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (21))){
var inst_7465 = (state_7515[(12)]);
var inst_7465__$1 = (state_7515[(2)]);
var inst_7466 = cljs.core.get.call(null,inst_7465__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7467 = cljs.core.get.call(null,inst_7465__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7468 = cljs.core.get.call(null,inst_7465__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_7515__$1 = (function (){var statearr_7530 = state_7515;
(statearr_7530[(12)] = inst_7465__$1);

(statearr_7530[(10)] = inst_7466);

(statearr_7530[(13)] = inst_7467);

return statearr_7530;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_7515__$1,(22),inst_7468);
} else {
if((state_val_7516 === (31))){
var inst_7497 = (state_7515[(2)]);
var state_7515__$1 = state_7515;
if(cljs.core.truth_(inst_7497)){
var statearr_7531_7587 = state_7515__$1;
(statearr_7531_7587[(1)] = (32));

} else {
var statearr_7532_7588 = state_7515__$1;
(statearr_7532_7588[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (32))){
var inst_7474 = (state_7515[(14)]);
var state_7515__$1 = state_7515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7515__$1,(35),out,inst_7474);
} else {
if((state_val_7516 === (33))){
var inst_7465 = (state_7515[(12)]);
var inst_7442 = inst_7465;
var state_7515__$1 = (function (){var statearr_7533 = state_7515;
(statearr_7533[(7)] = inst_7442);

return statearr_7533;
})();
var statearr_7534_7589 = state_7515__$1;
(statearr_7534_7589[(2)] = null);

(statearr_7534_7589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (13))){
var inst_7442 = (state_7515[(7)]);
var inst_7449 = inst_7442.cljs$lang$protocol_mask$partition0$;
var inst_7450 = (inst_7449 & (64));
var inst_7451 = inst_7442.cljs$core$ISeq$;
var inst_7452 = (cljs.core.PROTOCOL_SENTINEL === inst_7451);
var inst_7453 = ((inst_7450) || (inst_7452));
var state_7515__$1 = state_7515;
if(cljs.core.truth_(inst_7453)){
var statearr_7535_7590 = state_7515__$1;
(statearr_7535_7590[(1)] = (16));

} else {
var statearr_7536_7591 = state_7515__$1;
(statearr_7536_7591[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (22))){
var inst_7474 = (state_7515[(14)]);
var inst_7475 = (state_7515[(11)]);
var inst_7473 = (state_7515[(2)]);
var inst_7474__$1 = cljs.core.nth.call(null,inst_7473,(0),null);
var inst_7475__$1 = cljs.core.nth.call(null,inst_7473,(1),null);
var inst_7476 = (inst_7474__$1 == null);
var inst_7477 = cljs.core._EQ_.call(null,inst_7475__$1,change);
var inst_7478 = ((inst_7476) || (inst_7477));
var state_7515__$1 = (function (){var statearr_7537 = state_7515;
(statearr_7537[(14)] = inst_7474__$1);

(statearr_7537[(11)] = inst_7475__$1);

return statearr_7537;
})();
if(cljs.core.truth_(inst_7478)){
var statearr_7538_7592 = state_7515__$1;
(statearr_7538_7592[(1)] = (23));

} else {
var statearr_7539_7593 = state_7515__$1;
(statearr_7539_7593[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (36))){
var inst_7465 = (state_7515[(12)]);
var inst_7442 = inst_7465;
var state_7515__$1 = (function (){var statearr_7540 = state_7515;
(statearr_7540[(7)] = inst_7442);

return statearr_7540;
})();
var statearr_7541_7594 = state_7515__$1;
(statearr_7541_7594[(2)] = null);

(statearr_7541_7594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (29))){
var inst_7489 = (state_7515[(9)]);
var state_7515__$1 = state_7515;
var statearr_7542_7595 = state_7515__$1;
(statearr_7542_7595[(2)] = inst_7489);

(statearr_7542_7595[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (6))){
var state_7515__$1 = state_7515;
var statearr_7543_7596 = state_7515__$1;
(statearr_7543_7596[(2)] = false);

(statearr_7543_7596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (28))){
var inst_7485 = (state_7515[(2)]);
var inst_7486 = calc_state.call(null);
var inst_7442 = inst_7486;
var state_7515__$1 = (function (){var statearr_7544 = state_7515;
(statearr_7544[(7)] = inst_7442);

(statearr_7544[(15)] = inst_7485);

return statearr_7544;
})();
var statearr_7545_7597 = state_7515__$1;
(statearr_7545_7597[(2)] = null);

(statearr_7545_7597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (25))){
var inst_7511 = (state_7515[(2)]);
var state_7515__$1 = state_7515;
var statearr_7546_7598 = state_7515__$1;
(statearr_7546_7598[(2)] = inst_7511);

(statearr_7546_7598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (34))){
var inst_7509 = (state_7515[(2)]);
var state_7515__$1 = state_7515;
var statearr_7547_7599 = state_7515__$1;
(statearr_7547_7599[(2)] = inst_7509);

(statearr_7547_7599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (17))){
var state_7515__$1 = state_7515;
var statearr_7548_7600 = state_7515__$1;
(statearr_7548_7600[(2)] = false);

(statearr_7548_7600[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (3))){
var state_7515__$1 = state_7515;
var statearr_7549_7601 = state_7515__$1;
(statearr_7549_7601[(2)] = false);

(statearr_7549_7601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (12))){
var inst_7513 = (state_7515[(2)]);
var state_7515__$1 = state_7515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7515__$1,inst_7513);
} else {
if((state_val_7516 === (2))){
var inst_7417 = (state_7515[(8)]);
var inst_7422 = inst_7417.cljs$lang$protocol_mask$partition0$;
var inst_7423 = (inst_7422 & (64));
var inst_7424 = inst_7417.cljs$core$ISeq$;
var inst_7425 = (cljs.core.PROTOCOL_SENTINEL === inst_7424);
var inst_7426 = ((inst_7423) || (inst_7425));
var state_7515__$1 = state_7515;
if(cljs.core.truth_(inst_7426)){
var statearr_7550_7602 = state_7515__$1;
(statearr_7550_7602[(1)] = (5));

} else {
var statearr_7551_7603 = state_7515__$1;
(statearr_7551_7603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (23))){
var inst_7474 = (state_7515[(14)]);
var inst_7480 = (inst_7474 == null);
var state_7515__$1 = state_7515;
if(cljs.core.truth_(inst_7480)){
var statearr_7552_7604 = state_7515__$1;
(statearr_7552_7604[(1)] = (26));

} else {
var statearr_7553_7605 = state_7515__$1;
(statearr_7553_7605[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (35))){
var inst_7500 = (state_7515[(2)]);
var state_7515__$1 = state_7515;
if(cljs.core.truth_(inst_7500)){
var statearr_7554_7606 = state_7515__$1;
(statearr_7554_7606[(1)] = (36));

} else {
var statearr_7555_7607 = state_7515__$1;
(statearr_7555_7607[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (19))){
var inst_7442 = (state_7515[(7)]);
var inst_7462 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7442);
var state_7515__$1 = state_7515;
var statearr_7556_7608 = state_7515__$1;
(statearr_7556_7608[(2)] = inst_7462);

(statearr_7556_7608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (11))){
var inst_7442 = (state_7515[(7)]);
var inst_7446 = (inst_7442 == null);
var inst_7447 = cljs.core.not.call(null,inst_7446);
var state_7515__$1 = state_7515;
if(inst_7447){
var statearr_7557_7609 = state_7515__$1;
(statearr_7557_7609[(1)] = (13));

} else {
var statearr_7558_7610 = state_7515__$1;
(statearr_7558_7610[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (9))){
var inst_7417 = (state_7515[(8)]);
var state_7515__$1 = state_7515;
var statearr_7559_7611 = state_7515__$1;
(statearr_7559_7611[(2)] = inst_7417);

(statearr_7559_7611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (5))){
var state_7515__$1 = state_7515;
var statearr_7560_7612 = state_7515__$1;
(statearr_7560_7612[(2)] = true);

(statearr_7560_7612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (14))){
var state_7515__$1 = state_7515;
var statearr_7561_7613 = state_7515__$1;
(statearr_7561_7613[(2)] = false);

(statearr_7561_7613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (26))){
var inst_7475 = (state_7515[(11)]);
var inst_7482 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_7475);
var state_7515__$1 = state_7515;
var statearr_7562_7614 = state_7515__$1;
(statearr_7562_7614[(2)] = inst_7482);

(statearr_7562_7614[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (16))){
var state_7515__$1 = state_7515;
var statearr_7563_7615 = state_7515__$1;
(statearr_7563_7615[(2)] = true);

(statearr_7563_7615[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (38))){
var inst_7505 = (state_7515[(2)]);
var state_7515__$1 = state_7515;
var statearr_7564_7616 = state_7515__$1;
(statearr_7564_7616[(2)] = inst_7505);

(statearr_7564_7616[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (30))){
var inst_7466 = (state_7515[(10)]);
var inst_7467 = (state_7515[(13)]);
var inst_7475 = (state_7515[(11)]);
var inst_7492 = cljs.core.empty_QMARK_.call(null,inst_7466);
var inst_7493 = inst_7467.call(null,inst_7475);
var inst_7494 = cljs.core.not.call(null,inst_7493);
var inst_7495 = ((inst_7492) && (inst_7494));
var state_7515__$1 = state_7515;
var statearr_7565_7617 = state_7515__$1;
(statearr_7565_7617[(2)] = inst_7495);

(statearr_7565_7617[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (10))){
var inst_7417 = (state_7515[(8)]);
var inst_7438 = (state_7515[(2)]);
var inst_7439 = cljs.core.get.call(null,inst_7438,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7440 = cljs.core.get.call(null,inst_7438,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7441 = cljs.core.get.call(null,inst_7438,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_7442 = inst_7417;
var state_7515__$1 = (function (){var statearr_7566 = state_7515;
(statearr_7566[(16)] = inst_7439);

(statearr_7566[(7)] = inst_7442);

(statearr_7566[(17)] = inst_7441);

(statearr_7566[(18)] = inst_7440);

return statearr_7566;
})();
var statearr_7567_7618 = state_7515__$1;
(statearr_7567_7618[(2)] = null);

(statearr_7567_7618[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (18))){
var inst_7457 = (state_7515[(2)]);
var state_7515__$1 = state_7515;
var statearr_7568_7619 = state_7515__$1;
(statearr_7568_7619[(2)] = inst_7457);

(statearr_7568_7619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (37))){
var state_7515__$1 = state_7515;
var statearr_7569_7620 = state_7515__$1;
(statearr_7569_7620[(2)] = null);

(statearr_7569_7620[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7516 === (8))){
var inst_7417 = (state_7515[(8)]);
var inst_7435 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7417);
var state_7515__$1 = state_7515;
var statearr_7570_7621 = state_7515__$1;
(statearr_7570_7621[(2)] = inst_7435);

(statearr_7570_7621[(1)] = (10));


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
}
}
}
}
}
}
});})(c__6516__auto___7575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6425__auto__,c__6516__auto___7575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6426__auto__ = null;
var cljs$core$async$mix_$_state_machine__6426__auto____0 = (function (){
var statearr_7571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7571[(0)] = cljs$core$async$mix_$_state_machine__6426__auto__);

(statearr_7571[(1)] = (1));

return statearr_7571;
});
var cljs$core$async$mix_$_state_machine__6426__auto____1 = (function (state_7515){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_7515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e7572){if((e7572 instanceof Object)){
var ex__6429__auto__ = e7572;
var statearr_7573_7622 = state_7515;
(statearr_7573_7622[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7623 = state_7515;
state_7515 = G__7623;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6426__auto__ = function(state_7515){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6426__auto____1.call(this,state_7515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6426__auto____0;
cljs$core$async$mix_$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6426__auto____1;
return cljs$core$async$mix_$_state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto___7575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6518__auto__ = (function (){var statearr_7574 = f__6517__auto__.call(null);
(statearr_7574[(6)] = c__6516__auto___7575);

return statearr_7574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto___7575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__7625 = arguments.length;
switch (G__7625) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__7629 = arguments.length;
switch (G__7629) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__7627_SHARP_){
if(cljs.core.truth_(p1__7627_SHARP_.call(null,topic))){
return p1__7627_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__7627_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7630 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7630 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta7631){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta7631 = meta7631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_7632,meta7631__$1){
var self__ = this;
var _7632__$1 = this;
return (new cljs.core.async.t_cljs$core$async7630(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta7631__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_7632){
var self__ = this;
var _7632__$1 = this;
return self__.meta7631;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7630.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7630.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7630.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7630.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7630.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7630.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7630.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7630.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta7631","meta7631",2106020565,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7630";

cljs.core.async.t_cljs$core$async7630.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async7630");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7630.
 */
cljs.core.async.__GT_t_cljs$core$async7630 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async7630(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta7631){
return (new cljs.core.async.t_cljs$core$async7630(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta7631));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async7630(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6516__auto___7750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto___7750,mults,ensure_mult,p){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto___7750,mults,ensure_mult,p){
return (function (state_7704){
var state_val_7705 = (state_7704[(1)]);
if((state_val_7705 === (7))){
var inst_7700 = (state_7704[(2)]);
var state_7704__$1 = state_7704;
var statearr_7706_7751 = state_7704__$1;
(statearr_7706_7751[(2)] = inst_7700);

(statearr_7706_7751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (20))){
var state_7704__$1 = state_7704;
var statearr_7707_7752 = state_7704__$1;
(statearr_7707_7752[(2)] = null);

(statearr_7707_7752[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (1))){
var state_7704__$1 = state_7704;
var statearr_7708_7753 = state_7704__$1;
(statearr_7708_7753[(2)] = null);

(statearr_7708_7753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (24))){
var inst_7683 = (state_7704[(7)]);
var inst_7692 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_7683);
var state_7704__$1 = state_7704;
var statearr_7709_7754 = state_7704__$1;
(statearr_7709_7754[(2)] = inst_7692);

(statearr_7709_7754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (4))){
var inst_7635 = (state_7704[(8)]);
var inst_7635__$1 = (state_7704[(2)]);
var inst_7636 = (inst_7635__$1 == null);
var state_7704__$1 = (function (){var statearr_7710 = state_7704;
(statearr_7710[(8)] = inst_7635__$1);

return statearr_7710;
})();
if(cljs.core.truth_(inst_7636)){
var statearr_7711_7755 = state_7704__$1;
(statearr_7711_7755[(1)] = (5));

} else {
var statearr_7712_7756 = state_7704__$1;
(statearr_7712_7756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (15))){
var inst_7677 = (state_7704[(2)]);
var state_7704__$1 = state_7704;
var statearr_7713_7757 = state_7704__$1;
(statearr_7713_7757[(2)] = inst_7677);

(statearr_7713_7757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (21))){
var inst_7697 = (state_7704[(2)]);
var state_7704__$1 = (function (){var statearr_7714 = state_7704;
(statearr_7714[(9)] = inst_7697);

return statearr_7714;
})();
var statearr_7715_7758 = state_7704__$1;
(statearr_7715_7758[(2)] = null);

(statearr_7715_7758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (13))){
var inst_7659 = (state_7704[(10)]);
var inst_7661 = cljs.core.chunked_seq_QMARK_.call(null,inst_7659);
var state_7704__$1 = state_7704;
if(inst_7661){
var statearr_7716_7759 = state_7704__$1;
(statearr_7716_7759[(1)] = (16));

} else {
var statearr_7717_7760 = state_7704__$1;
(statearr_7717_7760[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (22))){
var inst_7689 = (state_7704[(2)]);
var state_7704__$1 = state_7704;
if(cljs.core.truth_(inst_7689)){
var statearr_7718_7761 = state_7704__$1;
(statearr_7718_7761[(1)] = (23));

} else {
var statearr_7719_7762 = state_7704__$1;
(statearr_7719_7762[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (6))){
var inst_7685 = (state_7704[(11)]);
var inst_7683 = (state_7704[(7)]);
var inst_7635 = (state_7704[(8)]);
var inst_7683__$1 = topic_fn.call(null,inst_7635);
var inst_7684 = cljs.core.deref.call(null,mults);
var inst_7685__$1 = cljs.core.get.call(null,inst_7684,inst_7683__$1);
var state_7704__$1 = (function (){var statearr_7720 = state_7704;
(statearr_7720[(11)] = inst_7685__$1);

(statearr_7720[(7)] = inst_7683__$1);

return statearr_7720;
})();
if(cljs.core.truth_(inst_7685__$1)){
var statearr_7721_7763 = state_7704__$1;
(statearr_7721_7763[(1)] = (19));

} else {
var statearr_7722_7764 = state_7704__$1;
(statearr_7722_7764[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (25))){
var inst_7694 = (state_7704[(2)]);
var state_7704__$1 = state_7704;
var statearr_7723_7765 = state_7704__$1;
(statearr_7723_7765[(2)] = inst_7694);

(statearr_7723_7765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (17))){
var inst_7659 = (state_7704[(10)]);
var inst_7668 = cljs.core.first.call(null,inst_7659);
var inst_7669 = cljs.core.async.muxch_STAR_.call(null,inst_7668);
var inst_7670 = cljs.core.async.close_BANG_.call(null,inst_7669);
var inst_7671 = cljs.core.next.call(null,inst_7659);
var inst_7645 = inst_7671;
var inst_7646 = null;
var inst_7647 = (0);
var inst_7648 = (0);
var state_7704__$1 = (function (){var statearr_7724 = state_7704;
(statearr_7724[(12)] = inst_7670);

(statearr_7724[(13)] = inst_7646);

(statearr_7724[(14)] = inst_7647);

(statearr_7724[(15)] = inst_7648);

(statearr_7724[(16)] = inst_7645);

return statearr_7724;
})();
var statearr_7725_7766 = state_7704__$1;
(statearr_7725_7766[(2)] = null);

(statearr_7725_7766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (3))){
var inst_7702 = (state_7704[(2)]);
var state_7704__$1 = state_7704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7704__$1,inst_7702);
} else {
if((state_val_7705 === (12))){
var inst_7679 = (state_7704[(2)]);
var state_7704__$1 = state_7704;
var statearr_7726_7767 = state_7704__$1;
(statearr_7726_7767[(2)] = inst_7679);

(statearr_7726_7767[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (2))){
var state_7704__$1 = state_7704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7704__$1,(4),ch);
} else {
if((state_val_7705 === (23))){
var state_7704__$1 = state_7704;
var statearr_7727_7768 = state_7704__$1;
(statearr_7727_7768[(2)] = null);

(statearr_7727_7768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (19))){
var inst_7685 = (state_7704[(11)]);
var inst_7635 = (state_7704[(8)]);
var inst_7687 = cljs.core.async.muxch_STAR_.call(null,inst_7685);
var state_7704__$1 = state_7704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7704__$1,(22),inst_7687,inst_7635);
} else {
if((state_val_7705 === (11))){
var inst_7659 = (state_7704[(10)]);
var inst_7645 = (state_7704[(16)]);
var inst_7659__$1 = cljs.core.seq.call(null,inst_7645);
var state_7704__$1 = (function (){var statearr_7728 = state_7704;
(statearr_7728[(10)] = inst_7659__$1);

return statearr_7728;
})();
if(inst_7659__$1){
var statearr_7729_7769 = state_7704__$1;
(statearr_7729_7769[(1)] = (13));

} else {
var statearr_7730_7770 = state_7704__$1;
(statearr_7730_7770[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (9))){
var inst_7681 = (state_7704[(2)]);
var state_7704__$1 = state_7704;
var statearr_7731_7771 = state_7704__$1;
(statearr_7731_7771[(2)] = inst_7681);

(statearr_7731_7771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (5))){
var inst_7642 = cljs.core.deref.call(null,mults);
var inst_7643 = cljs.core.vals.call(null,inst_7642);
var inst_7644 = cljs.core.seq.call(null,inst_7643);
var inst_7645 = inst_7644;
var inst_7646 = null;
var inst_7647 = (0);
var inst_7648 = (0);
var state_7704__$1 = (function (){var statearr_7732 = state_7704;
(statearr_7732[(13)] = inst_7646);

(statearr_7732[(14)] = inst_7647);

(statearr_7732[(15)] = inst_7648);

(statearr_7732[(16)] = inst_7645);

return statearr_7732;
})();
var statearr_7733_7772 = state_7704__$1;
(statearr_7733_7772[(2)] = null);

(statearr_7733_7772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (14))){
var state_7704__$1 = state_7704;
var statearr_7737_7773 = state_7704__$1;
(statearr_7737_7773[(2)] = null);

(statearr_7737_7773[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (16))){
var inst_7659 = (state_7704[(10)]);
var inst_7663 = cljs.core.chunk_first.call(null,inst_7659);
var inst_7664 = cljs.core.chunk_rest.call(null,inst_7659);
var inst_7665 = cljs.core.count.call(null,inst_7663);
var inst_7645 = inst_7664;
var inst_7646 = inst_7663;
var inst_7647 = inst_7665;
var inst_7648 = (0);
var state_7704__$1 = (function (){var statearr_7738 = state_7704;
(statearr_7738[(13)] = inst_7646);

(statearr_7738[(14)] = inst_7647);

(statearr_7738[(15)] = inst_7648);

(statearr_7738[(16)] = inst_7645);

return statearr_7738;
})();
var statearr_7739_7774 = state_7704__$1;
(statearr_7739_7774[(2)] = null);

(statearr_7739_7774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (10))){
var inst_7646 = (state_7704[(13)]);
var inst_7647 = (state_7704[(14)]);
var inst_7648 = (state_7704[(15)]);
var inst_7645 = (state_7704[(16)]);
var inst_7653 = cljs.core._nth.call(null,inst_7646,inst_7648);
var inst_7654 = cljs.core.async.muxch_STAR_.call(null,inst_7653);
var inst_7655 = cljs.core.async.close_BANG_.call(null,inst_7654);
var inst_7656 = (inst_7648 + (1));
var tmp7734 = inst_7646;
var tmp7735 = inst_7647;
var tmp7736 = inst_7645;
var inst_7645__$1 = tmp7736;
var inst_7646__$1 = tmp7734;
var inst_7647__$1 = tmp7735;
var inst_7648__$1 = inst_7656;
var state_7704__$1 = (function (){var statearr_7740 = state_7704;
(statearr_7740[(13)] = inst_7646__$1);

(statearr_7740[(14)] = inst_7647__$1);

(statearr_7740[(15)] = inst_7648__$1);

(statearr_7740[(16)] = inst_7645__$1);

(statearr_7740[(17)] = inst_7655);

return statearr_7740;
})();
var statearr_7741_7775 = state_7704__$1;
(statearr_7741_7775[(2)] = null);

(statearr_7741_7775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (18))){
var inst_7674 = (state_7704[(2)]);
var state_7704__$1 = state_7704;
var statearr_7742_7776 = state_7704__$1;
(statearr_7742_7776[(2)] = inst_7674);

(statearr_7742_7776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (8))){
var inst_7647 = (state_7704[(14)]);
var inst_7648 = (state_7704[(15)]);
var inst_7650 = (inst_7648 < inst_7647);
var inst_7651 = inst_7650;
var state_7704__$1 = state_7704;
if(cljs.core.truth_(inst_7651)){
var statearr_7743_7777 = state_7704__$1;
(statearr_7743_7777[(1)] = (10));

} else {
var statearr_7744_7778 = state_7704__$1;
(statearr_7744_7778[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
});})(c__6516__auto___7750,mults,ensure_mult,p))
;
return ((function (switch__6425__auto__,c__6516__auto___7750,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6426__auto__ = null;
var cljs$core$async$state_machine__6426__auto____0 = (function (){
var statearr_7745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7745[(0)] = cljs$core$async$state_machine__6426__auto__);

(statearr_7745[(1)] = (1));

return statearr_7745;
});
var cljs$core$async$state_machine__6426__auto____1 = (function (state_7704){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_7704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e7746){if((e7746 instanceof Object)){
var ex__6429__auto__ = e7746;
var statearr_7747_7779 = state_7704;
(statearr_7747_7779[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7780 = state_7704;
state_7704 = G__7780;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$state_machine__6426__auto__ = function(state_7704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6426__auto____1.call(this,state_7704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6426__auto____0;
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6426__auto____1;
return cljs$core$async$state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto___7750,mults,ensure_mult,p))
})();
var state__6518__auto__ = (function (){var statearr_7748 = f__6517__auto__.call(null);
(statearr_7748[(6)] = c__6516__auto___7750);

return statearr_7748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto___7750,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__7782 = arguments.length;
switch (G__7782) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__7785 = arguments.length;
switch (G__7785) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__7788 = arguments.length;
switch (G__7788) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6516__auto___7855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto___7855,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto___7855,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_7827){
var state_val_7828 = (state_7827[(1)]);
if((state_val_7828 === (7))){
var state_7827__$1 = state_7827;
var statearr_7829_7856 = state_7827__$1;
(statearr_7829_7856[(2)] = null);

(statearr_7829_7856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7828 === (1))){
var state_7827__$1 = state_7827;
var statearr_7830_7857 = state_7827__$1;
(statearr_7830_7857[(2)] = null);

(statearr_7830_7857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7828 === (4))){
var inst_7791 = (state_7827[(7)]);
var inst_7793 = (inst_7791 < cnt);
var state_7827__$1 = state_7827;
if(cljs.core.truth_(inst_7793)){
var statearr_7831_7858 = state_7827__$1;
(statearr_7831_7858[(1)] = (6));

} else {
var statearr_7832_7859 = state_7827__$1;
(statearr_7832_7859[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7828 === (15))){
var inst_7823 = (state_7827[(2)]);
var state_7827__$1 = state_7827;
var statearr_7833_7860 = state_7827__$1;
(statearr_7833_7860[(2)] = inst_7823);

(statearr_7833_7860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7828 === (13))){
var inst_7816 = cljs.core.async.close_BANG_.call(null,out);
var state_7827__$1 = state_7827;
var statearr_7834_7861 = state_7827__$1;
(statearr_7834_7861[(2)] = inst_7816);

(statearr_7834_7861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7828 === (6))){
var state_7827__$1 = state_7827;
var statearr_7835_7862 = state_7827__$1;
(statearr_7835_7862[(2)] = null);

(statearr_7835_7862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7828 === (3))){
var inst_7825 = (state_7827[(2)]);
var state_7827__$1 = state_7827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7827__$1,inst_7825);
} else {
if((state_val_7828 === (12))){
var inst_7813 = (state_7827[(8)]);
var inst_7813__$1 = (state_7827[(2)]);
var inst_7814 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_7813__$1);
var state_7827__$1 = (function (){var statearr_7836 = state_7827;
(statearr_7836[(8)] = inst_7813__$1);

return statearr_7836;
})();
if(cljs.core.truth_(inst_7814)){
var statearr_7837_7863 = state_7827__$1;
(statearr_7837_7863[(1)] = (13));

} else {
var statearr_7838_7864 = state_7827__$1;
(statearr_7838_7864[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7828 === (2))){
var inst_7790 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_7791 = (0);
var state_7827__$1 = (function (){var statearr_7839 = state_7827;
(statearr_7839[(9)] = inst_7790);

(statearr_7839[(7)] = inst_7791);

return statearr_7839;
})();
var statearr_7840_7865 = state_7827__$1;
(statearr_7840_7865[(2)] = null);

(statearr_7840_7865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7828 === (11))){
var inst_7791 = (state_7827[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_7827,(10),Object,null,(9));
var inst_7800 = chs__$1.call(null,inst_7791);
var inst_7801 = done.call(null,inst_7791);
var inst_7802 = cljs.core.async.take_BANG_.call(null,inst_7800,inst_7801);
var state_7827__$1 = state_7827;
var statearr_7841_7866 = state_7827__$1;
(statearr_7841_7866[(2)] = inst_7802);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7827__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7828 === (9))){
var inst_7791 = (state_7827[(7)]);
var inst_7804 = (state_7827[(2)]);
var inst_7805 = (inst_7791 + (1));
var inst_7791__$1 = inst_7805;
var state_7827__$1 = (function (){var statearr_7842 = state_7827;
(statearr_7842[(7)] = inst_7791__$1);

(statearr_7842[(10)] = inst_7804);

return statearr_7842;
})();
var statearr_7843_7867 = state_7827__$1;
(statearr_7843_7867[(2)] = null);

(statearr_7843_7867[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7828 === (5))){
var inst_7811 = (state_7827[(2)]);
var state_7827__$1 = (function (){var statearr_7844 = state_7827;
(statearr_7844[(11)] = inst_7811);

return statearr_7844;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7827__$1,(12),dchan);
} else {
if((state_val_7828 === (14))){
var inst_7813 = (state_7827[(8)]);
var inst_7818 = cljs.core.apply.call(null,f,inst_7813);
var state_7827__$1 = state_7827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7827__$1,(16),out,inst_7818);
} else {
if((state_val_7828 === (16))){
var inst_7820 = (state_7827[(2)]);
var state_7827__$1 = (function (){var statearr_7845 = state_7827;
(statearr_7845[(12)] = inst_7820);

return statearr_7845;
})();
var statearr_7846_7868 = state_7827__$1;
(statearr_7846_7868[(2)] = null);

(statearr_7846_7868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7828 === (10))){
var inst_7795 = (state_7827[(2)]);
var inst_7796 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_7827__$1 = (function (){var statearr_7847 = state_7827;
(statearr_7847[(13)] = inst_7795);

return statearr_7847;
})();
var statearr_7848_7869 = state_7827__$1;
(statearr_7848_7869[(2)] = inst_7796);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7827__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7828 === (8))){
var inst_7809 = (state_7827[(2)]);
var state_7827__$1 = state_7827;
var statearr_7849_7870 = state_7827__$1;
(statearr_7849_7870[(2)] = inst_7809);

(statearr_7849_7870[(1)] = (5));


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
});})(c__6516__auto___7855,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6425__auto__,c__6516__auto___7855,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6426__auto__ = null;
var cljs$core$async$state_machine__6426__auto____0 = (function (){
var statearr_7850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7850[(0)] = cljs$core$async$state_machine__6426__auto__);

(statearr_7850[(1)] = (1));

return statearr_7850;
});
var cljs$core$async$state_machine__6426__auto____1 = (function (state_7827){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_7827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e7851){if((e7851 instanceof Object)){
var ex__6429__auto__ = e7851;
var statearr_7852_7871 = state_7827;
(statearr_7852_7871[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7872 = state_7827;
state_7827 = G__7872;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$state_machine__6426__auto__ = function(state_7827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6426__auto____1.call(this,state_7827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6426__auto____0;
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6426__auto____1;
return cljs$core$async$state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto___7855,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6518__auto__ = (function (){var statearr_7853 = f__6517__auto__.call(null);
(statearr_7853[(6)] = c__6516__auto___7855);

return statearr_7853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto___7855,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__7875 = arguments.length;
switch (G__7875) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6516__auto___7929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto___7929,out){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto___7929,out){
return (function (state_7907){
var state_val_7908 = (state_7907[(1)]);
if((state_val_7908 === (7))){
var inst_7887 = (state_7907[(7)]);
var inst_7886 = (state_7907[(8)]);
var inst_7886__$1 = (state_7907[(2)]);
var inst_7887__$1 = cljs.core.nth.call(null,inst_7886__$1,(0),null);
var inst_7888 = cljs.core.nth.call(null,inst_7886__$1,(1),null);
var inst_7889 = (inst_7887__$1 == null);
var state_7907__$1 = (function (){var statearr_7909 = state_7907;
(statearr_7909[(9)] = inst_7888);

(statearr_7909[(7)] = inst_7887__$1);

(statearr_7909[(8)] = inst_7886__$1);

return statearr_7909;
})();
if(cljs.core.truth_(inst_7889)){
var statearr_7910_7930 = state_7907__$1;
(statearr_7910_7930[(1)] = (8));

} else {
var statearr_7911_7931 = state_7907__$1;
(statearr_7911_7931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7908 === (1))){
var inst_7876 = cljs.core.vec.call(null,chs);
var inst_7877 = inst_7876;
var state_7907__$1 = (function (){var statearr_7912 = state_7907;
(statearr_7912[(10)] = inst_7877);

return statearr_7912;
})();
var statearr_7913_7932 = state_7907__$1;
(statearr_7913_7932[(2)] = null);

(statearr_7913_7932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7908 === (4))){
var inst_7877 = (state_7907[(10)]);
var state_7907__$1 = state_7907;
return cljs.core.async.ioc_alts_BANG_.call(null,state_7907__$1,(7),inst_7877);
} else {
if((state_val_7908 === (6))){
var inst_7903 = (state_7907[(2)]);
var state_7907__$1 = state_7907;
var statearr_7914_7933 = state_7907__$1;
(statearr_7914_7933[(2)] = inst_7903);

(statearr_7914_7933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7908 === (3))){
var inst_7905 = (state_7907[(2)]);
var state_7907__$1 = state_7907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7907__$1,inst_7905);
} else {
if((state_val_7908 === (2))){
var inst_7877 = (state_7907[(10)]);
var inst_7879 = cljs.core.count.call(null,inst_7877);
var inst_7880 = (inst_7879 > (0));
var state_7907__$1 = state_7907;
if(cljs.core.truth_(inst_7880)){
var statearr_7916_7934 = state_7907__$1;
(statearr_7916_7934[(1)] = (4));

} else {
var statearr_7917_7935 = state_7907__$1;
(statearr_7917_7935[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7908 === (11))){
var inst_7877 = (state_7907[(10)]);
var inst_7896 = (state_7907[(2)]);
var tmp7915 = inst_7877;
var inst_7877__$1 = tmp7915;
var state_7907__$1 = (function (){var statearr_7918 = state_7907;
(statearr_7918[(11)] = inst_7896);

(statearr_7918[(10)] = inst_7877__$1);

return statearr_7918;
})();
var statearr_7919_7936 = state_7907__$1;
(statearr_7919_7936[(2)] = null);

(statearr_7919_7936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7908 === (9))){
var inst_7887 = (state_7907[(7)]);
var state_7907__$1 = state_7907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7907__$1,(11),out,inst_7887);
} else {
if((state_val_7908 === (5))){
var inst_7901 = cljs.core.async.close_BANG_.call(null,out);
var state_7907__$1 = state_7907;
var statearr_7920_7937 = state_7907__$1;
(statearr_7920_7937[(2)] = inst_7901);

(statearr_7920_7937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7908 === (10))){
var inst_7899 = (state_7907[(2)]);
var state_7907__$1 = state_7907;
var statearr_7921_7938 = state_7907__$1;
(statearr_7921_7938[(2)] = inst_7899);

(statearr_7921_7938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7908 === (8))){
var inst_7888 = (state_7907[(9)]);
var inst_7887 = (state_7907[(7)]);
var inst_7877 = (state_7907[(10)]);
var inst_7886 = (state_7907[(8)]);
var inst_7891 = (function (){var cs = inst_7877;
var vec__7882 = inst_7886;
var v = inst_7887;
var c = inst_7888;
return ((function (cs,vec__7882,v,c,inst_7888,inst_7887,inst_7877,inst_7886,state_val_7908,c__6516__auto___7929,out){
return (function (p1__7873_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__7873_SHARP_);
});
;})(cs,vec__7882,v,c,inst_7888,inst_7887,inst_7877,inst_7886,state_val_7908,c__6516__auto___7929,out))
})();
var inst_7892 = cljs.core.filterv.call(null,inst_7891,inst_7877);
var inst_7877__$1 = inst_7892;
var state_7907__$1 = (function (){var statearr_7922 = state_7907;
(statearr_7922[(10)] = inst_7877__$1);

return statearr_7922;
})();
var statearr_7923_7939 = state_7907__$1;
(statearr_7923_7939[(2)] = null);

(statearr_7923_7939[(1)] = (2));


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
});})(c__6516__auto___7929,out))
;
return ((function (switch__6425__auto__,c__6516__auto___7929,out){
return (function() {
var cljs$core$async$state_machine__6426__auto__ = null;
var cljs$core$async$state_machine__6426__auto____0 = (function (){
var statearr_7924 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7924[(0)] = cljs$core$async$state_machine__6426__auto__);

(statearr_7924[(1)] = (1));

return statearr_7924;
});
var cljs$core$async$state_machine__6426__auto____1 = (function (state_7907){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_7907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e7925){if((e7925 instanceof Object)){
var ex__6429__auto__ = e7925;
var statearr_7926_7940 = state_7907;
(statearr_7926_7940[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7941 = state_7907;
state_7907 = G__7941;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$state_machine__6426__auto__ = function(state_7907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6426__auto____1.call(this,state_7907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6426__auto____0;
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6426__auto____1;
return cljs$core$async$state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto___7929,out))
})();
var state__6518__auto__ = (function (){var statearr_7927 = f__6517__auto__.call(null);
(statearr_7927[(6)] = c__6516__auto___7929);

return statearr_7927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto___7929,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__7943 = arguments.length;
switch (G__7943) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6516__auto___7988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto___7988,out){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto___7988,out){
return (function (state_7967){
var state_val_7968 = (state_7967[(1)]);
if((state_val_7968 === (7))){
var inst_7949 = (state_7967[(7)]);
var inst_7949__$1 = (state_7967[(2)]);
var inst_7950 = (inst_7949__$1 == null);
var inst_7951 = cljs.core.not.call(null,inst_7950);
var state_7967__$1 = (function (){var statearr_7969 = state_7967;
(statearr_7969[(7)] = inst_7949__$1);

return statearr_7969;
})();
if(inst_7951){
var statearr_7970_7989 = state_7967__$1;
(statearr_7970_7989[(1)] = (8));

} else {
var statearr_7971_7990 = state_7967__$1;
(statearr_7971_7990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7968 === (1))){
var inst_7944 = (0);
var state_7967__$1 = (function (){var statearr_7972 = state_7967;
(statearr_7972[(8)] = inst_7944);

return statearr_7972;
})();
var statearr_7973_7991 = state_7967__$1;
(statearr_7973_7991[(2)] = null);

(statearr_7973_7991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7968 === (4))){
var state_7967__$1 = state_7967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7967__$1,(7),ch);
} else {
if((state_val_7968 === (6))){
var inst_7962 = (state_7967[(2)]);
var state_7967__$1 = state_7967;
var statearr_7974_7992 = state_7967__$1;
(statearr_7974_7992[(2)] = inst_7962);

(statearr_7974_7992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7968 === (3))){
var inst_7964 = (state_7967[(2)]);
var inst_7965 = cljs.core.async.close_BANG_.call(null,out);
var state_7967__$1 = (function (){var statearr_7975 = state_7967;
(statearr_7975[(9)] = inst_7964);

return statearr_7975;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7967__$1,inst_7965);
} else {
if((state_val_7968 === (2))){
var inst_7944 = (state_7967[(8)]);
var inst_7946 = (inst_7944 < n);
var state_7967__$1 = state_7967;
if(cljs.core.truth_(inst_7946)){
var statearr_7976_7993 = state_7967__$1;
(statearr_7976_7993[(1)] = (4));

} else {
var statearr_7977_7994 = state_7967__$1;
(statearr_7977_7994[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7968 === (11))){
var inst_7944 = (state_7967[(8)]);
var inst_7954 = (state_7967[(2)]);
var inst_7955 = (inst_7944 + (1));
var inst_7944__$1 = inst_7955;
var state_7967__$1 = (function (){var statearr_7978 = state_7967;
(statearr_7978[(10)] = inst_7954);

(statearr_7978[(8)] = inst_7944__$1);

return statearr_7978;
})();
var statearr_7979_7995 = state_7967__$1;
(statearr_7979_7995[(2)] = null);

(statearr_7979_7995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7968 === (9))){
var state_7967__$1 = state_7967;
var statearr_7980_7996 = state_7967__$1;
(statearr_7980_7996[(2)] = null);

(statearr_7980_7996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7968 === (5))){
var state_7967__$1 = state_7967;
var statearr_7981_7997 = state_7967__$1;
(statearr_7981_7997[(2)] = null);

(statearr_7981_7997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7968 === (10))){
var inst_7959 = (state_7967[(2)]);
var state_7967__$1 = state_7967;
var statearr_7982_7998 = state_7967__$1;
(statearr_7982_7998[(2)] = inst_7959);

(statearr_7982_7998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7968 === (8))){
var inst_7949 = (state_7967[(7)]);
var state_7967__$1 = state_7967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7967__$1,(11),out,inst_7949);
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
});})(c__6516__auto___7988,out))
;
return ((function (switch__6425__auto__,c__6516__auto___7988,out){
return (function() {
var cljs$core$async$state_machine__6426__auto__ = null;
var cljs$core$async$state_machine__6426__auto____0 = (function (){
var statearr_7983 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7983[(0)] = cljs$core$async$state_machine__6426__auto__);

(statearr_7983[(1)] = (1));

return statearr_7983;
});
var cljs$core$async$state_machine__6426__auto____1 = (function (state_7967){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_7967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e7984){if((e7984 instanceof Object)){
var ex__6429__auto__ = e7984;
var statearr_7985_7999 = state_7967;
(statearr_7985_7999[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8000 = state_7967;
state_7967 = G__8000;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$state_machine__6426__auto__ = function(state_7967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6426__auto____1.call(this,state_7967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6426__auto____0;
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6426__auto____1;
return cljs$core$async$state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto___7988,out))
})();
var state__6518__auto__ = (function (){var statearr_7986 = f__6517__auto__.call(null);
(statearr_7986[(6)] = c__6516__auto___7988);

return statearr_7986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto___7988,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8002 = (function (f,ch,meta8003){
this.f = f;
this.ch = ch;
this.meta8003 = meta8003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8004,meta8003__$1){
var self__ = this;
var _8004__$1 = this;
return (new cljs.core.async.t_cljs$core$async8002(self__.f,self__.ch,meta8003__$1));
});

cljs.core.async.t_cljs$core$async8002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8004){
var self__ = this;
var _8004__$1 = this;
return self__.meta8003;
});

cljs.core.async.t_cljs$core$async8002.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8002.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8002.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8002.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8002.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8005 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8005 = (function (f,ch,meta8003,_,fn1,meta8006){
this.f = f;
this.ch = ch;
this.meta8003 = meta8003;
this._ = _;
this.fn1 = fn1;
this.meta8006 = meta8006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_8007,meta8006__$1){
var self__ = this;
var _8007__$1 = this;
return (new cljs.core.async.t_cljs$core$async8005(self__.f,self__.ch,self__.meta8003,self__._,self__.fn1,meta8006__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async8005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_8007){
var self__ = this;
var _8007__$1 = this;
return self__.meta8006;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8005.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8005.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__8001_SHARP_){
return f1.call(null,(((p1__8001_SHARP_ == null))?null:self__.f.call(null,p1__8001_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async8005.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8003","meta8003",-2108861740,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async8002","cljs.core.async/t_cljs$core$async8002",-1147670405,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta8006","meta8006",1216003188,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8005";

cljs.core.async.t_cljs$core$async8005.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async8005");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8005.
 */
cljs.core.async.__GT_t_cljs$core$async8005 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8005(f__$1,ch__$1,meta8003__$1,___$2,fn1__$1,meta8006){
return (new cljs.core.async.t_cljs$core$async8005(f__$1,ch__$1,meta8003__$1,___$2,fn1__$1,meta8006));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async8005(self__.f,self__.ch,self__.meta8003,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async8002.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8002.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async8002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8003","meta8003",-2108861740,null)], null);
});

cljs.core.async.t_cljs$core$async8002.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8002";

cljs.core.async.t_cljs$core$async8002.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async8002");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8002.
 */
cljs.core.async.__GT_t_cljs$core$async8002 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8002(f__$1,ch__$1,meta8003){
return (new cljs.core.async.t_cljs$core$async8002(f__$1,ch__$1,meta8003));
});

}

return (new cljs.core.async.t_cljs$core$async8002(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8008 = (function (f,ch,meta8009){
this.f = f;
this.ch = ch;
this.meta8009 = meta8009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8010,meta8009__$1){
var self__ = this;
var _8010__$1 = this;
return (new cljs.core.async.t_cljs$core$async8008(self__.f,self__.ch,meta8009__$1));
});

cljs.core.async.t_cljs$core$async8008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8010){
var self__ = this;
var _8010__$1 = this;
return self__.meta8009;
});

cljs.core.async.t_cljs$core$async8008.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8008.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8008.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8008.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8008.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8008.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async8008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8009","meta8009",-769035635,null)], null);
});

cljs.core.async.t_cljs$core$async8008.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8008";

cljs.core.async.t_cljs$core$async8008.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async8008");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8008.
 */
cljs.core.async.__GT_t_cljs$core$async8008 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async8008(f__$1,ch__$1,meta8009){
return (new cljs.core.async.t_cljs$core$async8008(f__$1,ch__$1,meta8009));
});

}

return (new cljs.core.async.t_cljs$core$async8008(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8011 = (function (p,ch,meta8012){
this.p = p;
this.ch = ch;
this.meta8012 = meta8012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8013,meta8012__$1){
var self__ = this;
var _8013__$1 = this;
return (new cljs.core.async.t_cljs$core$async8011(self__.p,self__.ch,meta8012__$1));
});

cljs.core.async.t_cljs$core$async8011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8013){
var self__ = this;
var _8013__$1 = this;
return self__.meta8012;
});

cljs.core.async.t_cljs$core$async8011.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8011.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8011.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8011.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8011.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8011.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8011.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async8011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8012","meta8012",-1467858248,null)], null);
});

cljs.core.async.t_cljs$core$async8011.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8011";

cljs.core.async.t_cljs$core$async8011.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async8011");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8011.
 */
cljs.core.async.__GT_t_cljs$core$async8011 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async8011(p__$1,ch__$1,meta8012){
return (new cljs.core.async.t_cljs$core$async8011(p__$1,ch__$1,meta8012));
});

}

return (new cljs.core.async.t_cljs$core$async8011(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__8015 = arguments.length;
switch (G__8015) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6516__auto___8055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto___8055,out){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto___8055,out){
return (function (state_8036){
var state_val_8037 = (state_8036[(1)]);
if((state_val_8037 === (7))){
var inst_8032 = (state_8036[(2)]);
var state_8036__$1 = state_8036;
var statearr_8038_8056 = state_8036__$1;
(statearr_8038_8056[(2)] = inst_8032);

(statearr_8038_8056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (1))){
var state_8036__$1 = state_8036;
var statearr_8039_8057 = state_8036__$1;
(statearr_8039_8057[(2)] = null);

(statearr_8039_8057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (4))){
var inst_8018 = (state_8036[(7)]);
var inst_8018__$1 = (state_8036[(2)]);
var inst_8019 = (inst_8018__$1 == null);
var state_8036__$1 = (function (){var statearr_8040 = state_8036;
(statearr_8040[(7)] = inst_8018__$1);

return statearr_8040;
})();
if(cljs.core.truth_(inst_8019)){
var statearr_8041_8058 = state_8036__$1;
(statearr_8041_8058[(1)] = (5));

} else {
var statearr_8042_8059 = state_8036__$1;
(statearr_8042_8059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (6))){
var inst_8018 = (state_8036[(7)]);
var inst_8023 = p.call(null,inst_8018);
var state_8036__$1 = state_8036;
if(cljs.core.truth_(inst_8023)){
var statearr_8043_8060 = state_8036__$1;
(statearr_8043_8060[(1)] = (8));

} else {
var statearr_8044_8061 = state_8036__$1;
(statearr_8044_8061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (3))){
var inst_8034 = (state_8036[(2)]);
var state_8036__$1 = state_8036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8036__$1,inst_8034);
} else {
if((state_val_8037 === (2))){
var state_8036__$1 = state_8036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8036__$1,(4),ch);
} else {
if((state_val_8037 === (11))){
var inst_8026 = (state_8036[(2)]);
var state_8036__$1 = state_8036;
var statearr_8045_8062 = state_8036__$1;
(statearr_8045_8062[(2)] = inst_8026);

(statearr_8045_8062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (9))){
var state_8036__$1 = state_8036;
var statearr_8046_8063 = state_8036__$1;
(statearr_8046_8063[(2)] = null);

(statearr_8046_8063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (5))){
var inst_8021 = cljs.core.async.close_BANG_.call(null,out);
var state_8036__$1 = state_8036;
var statearr_8047_8064 = state_8036__$1;
(statearr_8047_8064[(2)] = inst_8021);

(statearr_8047_8064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (10))){
var inst_8029 = (state_8036[(2)]);
var state_8036__$1 = (function (){var statearr_8048 = state_8036;
(statearr_8048[(8)] = inst_8029);

return statearr_8048;
})();
var statearr_8049_8065 = state_8036__$1;
(statearr_8049_8065[(2)] = null);

(statearr_8049_8065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8037 === (8))){
var inst_8018 = (state_8036[(7)]);
var state_8036__$1 = state_8036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8036__$1,(11),out,inst_8018);
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
});})(c__6516__auto___8055,out))
;
return ((function (switch__6425__auto__,c__6516__auto___8055,out){
return (function() {
var cljs$core$async$state_machine__6426__auto__ = null;
var cljs$core$async$state_machine__6426__auto____0 = (function (){
var statearr_8050 = [null,null,null,null,null,null,null,null,null];
(statearr_8050[(0)] = cljs$core$async$state_machine__6426__auto__);

(statearr_8050[(1)] = (1));

return statearr_8050;
});
var cljs$core$async$state_machine__6426__auto____1 = (function (state_8036){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_8036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e8051){if((e8051 instanceof Object)){
var ex__6429__auto__ = e8051;
var statearr_8052_8066 = state_8036;
(statearr_8052_8066[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8067 = state_8036;
state_8036 = G__8067;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$state_machine__6426__auto__ = function(state_8036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6426__auto____1.call(this,state_8036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6426__auto____0;
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6426__auto____1;
return cljs$core$async$state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto___8055,out))
})();
var state__6518__auto__ = (function (){var statearr_8053 = f__6517__auto__.call(null);
(statearr_8053[(6)] = c__6516__auto___8055);

return statearr_8053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto___8055,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__8069 = arguments.length;
switch (G__8069) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto__){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto__){
return (function (state_8132){
var state_val_8133 = (state_8132[(1)]);
if((state_val_8133 === (7))){
var inst_8128 = (state_8132[(2)]);
var state_8132__$1 = state_8132;
var statearr_8134_8172 = state_8132__$1;
(statearr_8134_8172[(2)] = inst_8128);

(statearr_8134_8172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (20))){
var inst_8098 = (state_8132[(7)]);
var inst_8109 = (state_8132[(2)]);
var inst_8110 = cljs.core.next.call(null,inst_8098);
var inst_8084 = inst_8110;
var inst_8085 = null;
var inst_8086 = (0);
var inst_8087 = (0);
var state_8132__$1 = (function (){var statearr_8135 = state_8132;
(statearr_8135[(8)] = inst_8084);

(statearr_8135[(9)] = inst_8085);

(statearr_8135[(10)] = inst_8109);

(statearr_8135[(11)] = inst_8086);

(statearr_8135[(12)] = inst_8087);

return statearr_8135;
})();
var statearr_8136_8173 = state_8132__$1;
(statearr_8136_8173[(2)] = null);

(statearr_8136_8173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (1))){
var state_8132__$1 = state_8132;
var statearr_8137_8174 = state_8132__$1;
(statearr_8137_8174[(2)] = null);

(statearr_8137_8174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (4))){
var inst_8073 = (state_8132[(13)]);
var inst_8073__$1 = (state_8132[(2)]);
var inst_8074 = (inst_8073__$1 == null);
var state_8132__$1 = (function (){var statearr_8138 = state_8132;
(statearr_8138[(13)] = inst_8073__$1);

return statearr_8138;
})();
if(cljs.core.truth_(inst_8074)){
var statearr_8139_8175 = state_8132__$1;
(statearr_8139_8175[(1)] = (5));

} else {
var statearr_8140_8176 = state_8132__$1;
(statearr_8140_8176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (15))){
var state_8132__$1 = state_8132;
var statearr_8144_8177 = state_8132__$1;
(statearr_8144_8177[(2)] = null);

(statearr_8144_8177[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (21))){
var state_8132__$1 = state_8132;
var statearr_8145_8178 = state_8132__$1;
(statearr_8145_8178[(2)] = null);

(statearr_8145_8178[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (13))){
var inst_8084 = (state_8132[(8)]);
var inst_8085 = (state_8132[(9)]);
var inst_8086 = (state_8132[(11)]);
var inst_8087 = (state_8132[(12)]);
var inst_8094 = (state_8132[(2)]);
var inst_8095 = (inst_8087 + (1));
var tmp8141 = inst_8084;
var tmp8142 = inst_8085;
var tmp8143 = inst_8086;
var inst_8084__$1 = tmp8141;
var inst_8085__$1 = tmp8142;
var inst_8086__$1 = tmp8143;
var inst_8087__$1 = inst_8095;
var state_8132__$1 = (function (){var statearr_8146 = state_8132;
(statearr_8146[(8)] = inst_8084__$1);

(statearr_8146[(9)] = inst_8085__$1);

(statearr_8146[(11)] = inst_8086__$1);

(statearr_8146[(14)] = inst_8094);

(statearr_8146[(12)] = inst_8087__$1);

return statearr_8146;
})();
var statearr_8147_8179 = state_8132__$1;
(statearr_8147_8179[(2)] = null);

(statearr_8147_8179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (22))){
var state_8132__$1 = state_8132;
var statearr_8148_8180 = state_8132__$1;
(statearr_8148_8180[(2)] = null);

(statearr_8148_8180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (6))){
var inst_8073 = (state_8132[(13)]);
var inst_8082 = f.call(null,inst_8073);
var inst_8083 = cljs.core.seq.call(null,inst_8082);
var inst_8084 = inst_8083;
var inst_8085 = null;
var inst_8086 = (0);
var inst_8087 = (0);
var state_8132__$1 = (function (){var statearr_8149 = state_8132;
(statearr_8149[(8)] = inst_8084);

(statearr_8149[(9)] = inst_8085);

(statearr_8149[(11)] = inst_8086);

(statearr_8149[(12)] = inst_8087);

return statearr_8149;
})();
var statearr_8150_8181 = state_8132__$1;
(statearr_8150_8181[(2)] = null);

(statearr_8150_8181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (17))){
var inst_8098 = (state_8132[(7)]);
var inst_8102 = cljs.core.chunk_first.call(null,inst_8098);
var inst_8103 = cljs.core.chunk_rest.call(null,inst_8098);
var inst_8104 = cljs.core.count.call(null,inst_8102);
var inst_8084 = inst_8103;
var inst_8085 = inst_8102;
var inst_8086 = inst_8104;
var inst_8087 = (0);
var state_8132__$1 = (function (){var statearr_8151 = state_8132;
(statearr_8151[(8)] = inst_8084);

(statearr_8151[(9)] = inst_8085);

(statearr_8151[(11)] = inst_8086);

(statearr_8151[(12)] = inst_8087);

return statearr_8151;
})();
var statearr_8152_8182 = state_8132__$1;
(statearr_8152_8182[(2)] = null);

(statearr_8152_8182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (3))){
var inst_8130 = (state_8132[(2)]);
var state_8132__$1 = state_8132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8132__$1,inst_8130);
} else {
if((state_val_8133 === (12))){
var inst_8118 = (state_8132[(2)]);
var state_8132__$1 = state_8132;
var statearr_8153_8183 = state_8132__$1;
(statearr_8153_8183[(2)] = inst_8118);

(statearr_8153_8183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (2))){
var state_8132__$1 = state_8132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8132__$1,(4),in$);
} else {
if((state_val_8133 === (23))){
var inst_8126 = (state_8132[(2)]);
var state_8132__$1 = state_8132;
var statearr_8154_8184 = state_8132__$1;
(statearr_8154_8184[(2)] = inst_8126);

(statearr_8154_8184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (19))){
var inst_8113 = (state_8132[(2)]);
var state_8132__$1 = state_8132;
var statearr_8155_8185 = state_8132__$1;
(statearr_8155_8185[(2)] = inst_8113);

(statearr_8155_8185[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (11))){
var inst_8084 = (state_8132[(8)]);
var inst_8098 = (state_8132[(7)]);
var inst_8098__$1 = cljs.core.seq.call(null,inst_8084);
var state_8132__$1 = (function (){var statearr_8156 = state_8132;
(statearr_8156[(7)] = inst_8098__$1);

return statearr_8156;
})();
if(inst_8098__$1){
var statearr_8157_8186 = state_8132__$1;
(statearr_8157_8186[(1)] = (14));

} else {
var statearr_8158_8187 = state_8132__$1;
(statearr_8158_8187[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (9))){
var inst_8120 = (state_8132[(2)]);
var inst_8121 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_8132__$1 = (function (){var statearr_8159 = state_8132;
(statearr_8159[(15)] = inst_8120);

return statearr_8159;
})();
if(cljs.core.truth_(inst_8121)){
var statearr_8160_8188 = state_8132__$1;
(statearr_8160_8188[(1)] = (21));

} else {
var statearr_8161_8189 = state_8132__$1;
(statearr_8161_8189[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (5))){
var inst_8076 = cljs.core.async.close_BANG_.call(null,out);
var state_8132__$1 = state_8132;
var statearr_8162_8190 = state_8132__$1;
(statearr_8162_8190[(2)] = inst_8076);

(statearr_8162_8190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (14))){
var inst_8098 = (state_8132[(7)]);
var inst_8100 = cljs.core.chunked_seq_QMARK_.call(null,inst_8098);
var state_8132__$1 = state_8132;
if(inst_8100){
var statearr_8163_8191 = state_8132__$1;
(statearr_8163_8191[(1)] = (17));

} else {
var statearr_8164_8192 = state_8132__$1;
(statearr_8164_8192[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (16))){
var inst_8116 = (state_8132[(2)]);
var state_8132__$1 = state_8132;
var statearr_8165_8193 = state_8132__$1;
(statearr_8165_8193[(2)] = inst_8116);

(statearr_8165_8193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (10))){
var inst_8085 = (state_8132[(9)]);
var inst_8087 = (state_8132[(12)]);
var inst_8092 = cljs.core._nth.call(null,inst_8085,inst_8087);
var state_8132__$1 = state_8132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8132__$1,(13),out,inst_8092);
} else {
if((state_val_8133 === (18))){
var inst_8098 = (state_8132[(7)]);
var inst_8107 = cljs.core.first.call(null,inst_8098);
var state_8132__$1 = state_8132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8132__$1,(20),out,inst_8107);
} else {
if((state_val_8133 === (8))){
var inst_8086 = (state_8132[(11)]);
var inst_8087 = (state_8132[(12)]);
var inst_8089 = (inst_8087 < inst_8086);
var inst_8090 = inst_8089;
var state_8132__$1 = state_8132;
if(cljs.core.truth_(inst_8090)){
var statearr_8166_8194 = state_8132__$1;
(statearr_8166_8194[(1)] = (10));

} else {
var statearr_8167_8195 = state_8132__$1;
(statearr_8167_8195[(1)] = (11));

}

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
}
}
}
}
}
}
}
});})(c__6516__auto__))
;
return ((function (switch__6425__auto__,c__6516__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6426__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6426__auto____0 = (function (){
var statearr_8168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8168[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6426__auto__);

(statearr_8168[(1)] = (1));

return statearr_8168;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6426__auto____1 = (function (state_8132){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_8132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e8169){if((e8169 instanceof Object)){
var ex__6429__auto__ = e8169;
var statearr_8170_8196 = state_8132;
(statearr_8170_8196[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8197 = state_8132;
state_8132 = G__8197;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6426__auto__ = function(state_8132){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6426__auto____1.call(this,state_8132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6426__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6426__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto__))
})();
var state__6518__auto__ = (function (){var statearr_8171 = f__6517__auto__.call(null);
(statearr_8171[(6)] = c__6516__auto__);

return statearr_8171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto__))
);

return c__6516__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__8199 = arguments.length;
switch (G__8199) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__8202 = arguments.length;
switch (G__8202) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__8205 = arguments.length;
switch (G__8205) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6516__auto___8252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto___8252,out){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto___8252,out){
return (function (state_8229){
var state_val_8230 = (state_8229[(1)]);
if((state_val_8230 === (7))){
var inst_8224 = (state_8229[(2)]);
var state_8229__$1 = state_8229;
var statearr_8231_8253 = state_8229__$1;
(statearr_8231_8253[(2)] = inst_8224);

(statearr_8231_8253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8230 === (1))){
var inst_8206 = null;
var state_8229__$1 = (function (){var statearr_8232 = state_8229;
(statearr_8232[(7)] = inst_8206);

return statearr_8232;
})();
var statearr_8233_8254 = state_8229__$1;
(statearr_8233_8254[(2)] = null);

(statearr_8233_8254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8230 === (4))){
var inst_8209 = (state_8229[(8)]);
var inst_8209__$1 = (state_8229[(2)]);
var inst_8210 = (inst_8209__$1 == null);
var inst_8211 = cljs.core.not.call(null,inst_8210);
var state_8229__$1 = (function (){var statearr_8234 = state_8229;
(statearr_8234[(8)] = inst_8209__$1);

return statearr_8234;
})();
if(inst_8211){
var statearr_8235_8255 = state_8229__$1;
(statearr_8235_8255[(1)] = (5));

} else {
var statearr_8236_8256 = state_8229__$1;
(statearr_8236_8256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8230 === (6))){
var state_8229__$1 = state_8229;
var statearr_8237_8257 = state_8229__$1;
(statearr_8237_8257[(2)] = null);

(statearr_8237_8257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8230 === (3))){
var inst_8226 = (state_8229[(2)]);
var inst_8227 = cljs.core.async.close_BANG_.call(null,out);
var state_8229__$1 = (function (){var statearr_8238 = state_8229;
(statearr_8238[(9)] = inst_8226);

return statearr_8238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8229__$1,inst_8227);
} else {
if((state_val_8230 === (2))){
var state_8229__$1 = state_8229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8229__$1,(4),ch);
} else {
if((state_val_8230 === (11))){
var inst_8209 = (state_8229[(8)]);
var inst_8218 = (state_8229[(2)]);
var inst_8206 = inst_8209;
var state_8229__$1 = (function (){var statearr_8239 = state_8229;
(statearr_8239[(10)] = inst_8218);

(statearr_8239[(7)] = inst_8206);

return statearr_8239;
})();
var statearr_8240_8258 = state_8229__$1;
(statearr_8240_8258[(2)] = null);

(statearr_8240_8258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8230 === (9))){
var inst_8209 = (state_8229[(8)]);
var state_8229__$1 = state_8229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8229__$1,(11),out,inst_8209);
} else {
if((state_val_8230 === (5))){
var inst_8209 = (state_8229[(8)]);
var inst_8206 = (state_8229[(7)]);
var inst_8213 = cljs.core._EQ_.call(null,inst_8209,inst_8206);
var state_8229__$1 = state_8229;
if(inst_8213){
var statearr_8242_8259 = state_8229__$1;
(statearr_8242_8259[(1)] = (8));

} else {
var statearr_8243_8260 = state_8229__$1;
(statearr_8243_8260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8230 === (10))){
var inst_8221 = (state_8229[(2)]);
var state_8229__$1 = state_8229;
var statearr_8244_8261 = state_8229__$1;
(statearr_8244_8261[(2)] = inst_8221);

(statearr_8244_8261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8230 === (8))){
var inst_8206 = (state_8229[(7)]);
var tmp8241 = inst_8206;
var inst_8206__$1 = tmp8241;
var state_8229__$1 = (function (){var statearr_8245 = state_8229;
(statearr_8245[(7)] = inst_8206__$1);

return statearr_8245;
})();
var statearr_8246_8262 = state_8229__$1;
(statearr_8246_8262[(2)] = null);

(statearr_8246_8262[(1)] = (2));


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
});})(c__6516__auto___8252,out))
;
return ((function (switch__6425__auto__,c__6516__auto___8252,out){
return (function() {
var cljs$core$async$state_machine__6426__auto__ = null;
var cljs$core$async$state_machine__6426__auto____0 = (function (){
var statearr_8247 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8247[(0)] = cljs$core$async$state_machine__6426__auto__);

(statearr_8247[(1)] = (1));

return statearr_8247;
});
var cljs$core$async$state_machine__6426__auto____1 = (function (state_8229){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_8229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e8248){if((e8248 instanceof Object)){
var ex__6429__auto__ = e8248;
var statearr_8249_8263 = state_8229;
(statearr_8249_8263[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8264 = state_8229;
state_8229 = G__8264;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$state_machine__6426__auto__ = function(state_8229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6426__auto____1.call(this,state_8229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6426__auto____0;
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6426__auto____1;
return cljs$core$async$state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto___8252,out))
})();
var state__6518__auto__ = (function (){var statearr_8250 = f__6517__auto__.call(null);
(statearr_8250[(6)] = c__6516__auto___8252);

return statearr_8250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto___8252,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__8266 = arguments.length;
switch (G__8266) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6516__auto___8332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto___8332,out){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto___8332,out){
return (function (state_8304){
var state_val_8305 = (state_8304[(1)]);
if((state_val_8305 === (7))){
var inst_8300 = (state_8304[(2)]);
var state_8304__$1 = state_8304;
var statearr_8306_8333 = state_8304__$1;
(statearr_8306_8333[(2)] = inst_8300);

(statearr_8306_8333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (1))){
var inst_8267 = (new Array(n));
var inst_8268 = inst_8267;
var inst_8269 = (0);
var state_8304__$1 = (function (){var statearr_8307 = state_8304;
(statearr_8307[(7)] = inst_8269);

(statearr_8307[(8)] = inst_8268);

return statearr_8307;
})();
var statearr_8308_8334 = state_8304__$1;
(statearr_8308_8334[(2)] = null);

(statearr_8308_8334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (4))){
var inst_8272 = (state_8304[(9)]);
var inst_8272__$1 = (state_8304[(2)]);
var inst_8273 = (inst_8272__$1 == null);
var inst_8274 = cljs.core.not.call(null,inst_8273);
var state_8304__$1 = (function (){var statearr_8309 = state_8304;
(statearr_8309[(9)] = inst_8272__$1);

return statearr_8309;
})();
if(inst_8274){
var statearr_8310_8335 = state_8304__$1;
(statearr_8310_8335[(1)] = (5));

} else {
var statearr_8311_8336 = state_8304__$1;
(statearr_8311_8336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (15))){
var inst_8294 = (state_8304[(2)]);
var state_8304__$1 = state_8304;
var statearr_8312_8337 = state_8304__$1;
(statearr_8312_8337[(2)] = inst_8294);

(statearr_8312_8337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (13))){
var state_8304__$1 = state_8304;
var statearr_8313_8338 = state_8304__$1;
(statearr_8313_8338[(2)] = null);

(statearr_8313_8338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (6))){
var inst_8269 = (state_8304[(7)]);
var inst_8290 = (inst_8269 > (0));
var state_8304__$1 = state_8304;
if(cljs.core.truth_(inst_8290)){
var statearr_8314_8339 = state_8304__$1;
(statearr_8314_8339[(1)] = (12));

} else {
var statearr_8315_8340 = state_8304__$1;
(statearr_8315_8340[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (3))){
var inst_8302 = (state_8304[(2)]);
var state_8304__$1 = state_8304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8304__$1,inst_8302);
} else {
if((state_val_8305 === (12))){
var inst_8268 = (state_8304[(8)]);
var inst_8292 = cljs.core.vec.call(null,inst_8268);
var state_8304__$1 = state_8304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8304__$1,(15),out,inst_8292);
} else {
if((state_val_8305 === (2))){
var state_8304__$1 = state_8304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8304__$1,(4),ch);
} else {
if((state_val_8305 === (11))){
var inst_8284 = (state_8304[(2)]);
var inst_8285 = (new Array(n));
var inst_8268 = inst_8285;
var inst_8269 = (0);
var state_8304__$1 = (function (){var statearr_8316 = state_8304;
(statearr_8316[(7)] = inst_8269);

(statearr_8316[(8)] = inst_8268);

(statearr_8316[(10)] = inst_8284);

return statearr_8316;
})();
var statearr_8317_8341 = state_8304__$1;
(statearr_8317_8341[(2)] = null);

(statearr_8317_8341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (9))){
var inst_8268 = (state_8304[(8)]);
var inst_8282 = cljs.core.vec.call(null,inst_8268);
var state_8304__$1 = state_8304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8304__$1,(11),out,inst_8282);
} else {
if((state_val_8305 === (5))){
var inst_8269 = (state_8304[(7)]);
var inst_8268 = (state_8304[(8)]);
var inst_8277 = (state_8304[(11)]);
var inst_8272 = (state_8304[(9)]);
var inst_8276 = (inst_8268[inst_8269] = inst_8272);
var inst_8277__$1 = (inst_8269 + (1));
var inst_8278 = (inst_8277__$1 < n);
var state_8304__$1 = (function (){var statearr_8318 = state_8304;
(statearr_8318[(11)] = inst_8277__$1);

(statearr_8318[(12)] = inst_8276);

return statearr_8318;
})();
if(cljs.core.truth_(inst_8278)){
var statearr_8319_8342 = state_8304__$1;
(statearr_8319_8342[(1)] = (8));

} else {
var statearr_8320_8343 = state_8304__$1;
(statearr_8320_8343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (14))){
var inst_8297 = (state_8304[(2)]);
var inst_8298 = cljs.core.async.close_BANG_.call(null,out);
var state_8304__$1 = (function (){var statearr_8322 = state_8304;
(statearr_8322[(13)] = inst_8297);

return statearr_8322;
})();
var statearr_8323_8344 = state_8304__$1;
(statearr_8323_8344[(2)] = inst_8298);

(statearr_8323_8344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (10))){
var inst_8288 = (state_8304[(2)]);
var state_8304__$1 = state_8304;
var statearr_8324_8345 = state_8304__$1;
(statearr_8324_8345[(2)] = inst_8288);

(statearr_8324_8345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (8))){
var inst_8268 = (state_8304[(8)]);
var inst_8277 = (state_8304[(11)]);
var tmp8321 = inst_8268;
var inst_8268__$1 = tmp8321;
var inst_8269 = inst_8277;
var state_8304__$1 = (function (){var statearr_8325 = state_8304;
(statearr_8325[(7)] = inst_8269);

(statearr_8325[(8)] = inst_8268__$1);

return statearr_8325;
})();
var statearr_8326_8346 = state_8304__$1;
(statearr_8326_8346[(2)] = null);

(statearr_8326_8346[(1)] = (2));


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
});})(c__6516__auto___8332,out))
;
return ((function (switch__6425__auto__,c__6516__auto___8332,out){
return (function() {
var cljs$core$async$state_machine__6426__auto__ = null;
var cljs$core$async$state_machine__6426__auto____0 = (function (){
var statearr_8327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8327[(0)] = cljs$core$async$state_machine__6426__auto__);

(statearr_8327[(1)] = (1));

return statearr_8327;
});
var cljs$core$async$state_machine__6426__auto____1 = (function (state_8304){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_8304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e8328){if((e8328 instanceof Object)){
var ex__6429__auto__ = e8328;
var statearr_8329_8347 = state_8304;
(statearr_8329_8347[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8348 = state_8304;
state_8304 = G__8348;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$state_machine__6426__auto__ = function(state_8304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6426__auto____1.call(this,state_8304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6426__auto____0;
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6426__auto____1;
return cljs$core$async$state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto___8332,out))
})();
var state__6518__auto__ = (function (){var statearr_8330 = f__6517__auto__.call(null);
(statearr_8330[(6)] = c__6516__auto___8332);

return statearr_8330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto___8332,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__8350 = arguments.length;
switch (G__8350) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6516__auto___8420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6516__auto___8420,out){
return (function (){
var f__6517__auto__ = (function (){var switch__6425__auto__ = ((function (c__6516__auto___8420,out){
return (function (state_8392){
var state_val_8393 = (state_8392[(1)]);
if((state_val_8393 === (7))){
var inst_8388 = (state_8392[(2)]);
var state_8392__$1 = state_8392;
var statearr_8394_8421 = state_8392__$1;
(statearr_8394_8421[(2)] = inst_8388);

(statearr_8394_8421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8393 === (1))){
var inst_8351 = [];
var inst_8352 = inst_8351;
var inst_8353 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_8392__$1 = (function (){var statearr_8395 = state_8392;
(statearr_8395[(7)] = inst_8352);

(statearr_8395[(8)] = inst_8353);

return statearr_8395;
})();
var statearr_8396_8422 = state_8392__$1;
(statearr_8396_8422[(2)] = null);

(statearr_8396_8422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8393 === (4))){
var inst_8356 = (state_8392[(9)]);
var inst_8356__$1 = (state_8392[(2)]);
var inst_8357 = (inst_8356__$1 == null);
var inst_8358 = cljs.core.not.call(null,inst_8357);
var state_8392__$1 = (function (){var statearr_8397 = state_8392;
(statearr_8397[(9)] = inst_8356__$1);

return statearr_8397;
})();
if(inst_8358){
var statearr_8398_8423 = state_8392__$1;
(statearr_8398_8423[(1)] = (5));

} else {
var statearr_8399_8424 = state_8392__$1;
(statearr_8399_8424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8393 === (15))){
var inst_8382 = (state_8392[(2)]);
var state_8392__$1 = state_8392;
var statearr_8400_8425 = state_8392__$1;
(statearr_8400_8425[(2)] = inst_8382);

(statearr_8400_8425[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8393 === (13))){
var state_8392__$1 = state_8392;
var statearr_8401_8426 = state_8392__$1;
(statearr_8401_8426[(2)] = null);

(statearr_8401_8426[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8393 === (6))){
var inst_8352 = (state_8392[(7)]);
var inst_8377 = inst_8352.length;
var inst_8378 = (inst_8377 > (0));
var state_8392__$1 = state_8392;
if(cljs.core.truth_(inst_8378)){
var statearr_8402_8427 = state_8392__$1;
(statearr_8402_8427[(1)] = (12));

} else {
var statearr_8403_8428 = state_8392__$1;
(statearr_8403_8428[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8393 === (3))){
var inst_8390 = (state_8392[(2)]);
var state_8392__$1 = state_8392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8392__$1,inst_8390);
} else {
if((state_val_8393 === (12))){
var inst_8352 = (state_8392[(7)]);
var inst_8380 = cljs.core.vec.call(null,inst_8352);
var state_8392__$1 = state_8392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8392__$1,(15),out,inst_8380);
} else {
if((state_val_8393 === (2))){
var state_8392__$1 = state_8392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8392__$1,(4),ch);
} else {
if((state_val_8393 === (11))){
var inst_8356 = (state_8392[(9)]);
var inst_8360 = (state_8392[(10)]);
var inst_8370 = (state_8392[(2)]);
var inst_8371 = [];
var inst_8372 = inst_8371.push(inst_8356);
var inst_8352 = inst_8371;
var inst_8353 = inst_8360;
var state_8392__$1 = (function (){var statearr_8404 = state_8392;
(statearr_8404[(7)] = inst_8352);

(statearr_8404[(11)] = inst_8370);

(statearr_8404[(12)] = inst_8372);

(statearr_8404[(8)] = inst_8353);

return statearr_8404;
})();
var statearr_8405_8429 = state_8392__$1;
(statearr_8405_8429[(2)] = null);

(statearr_8405_8429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8393 === (9))){
var inst_8352 = (state_8392[(7)]);
var inst_8368 = cljs.core.vec.call(null,inst_8352);
var state_8392__$1 = state_8392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8392__$1,(11),out,inst_8368);
} else {
if((state_val_8393 === (5))){
var inst_8356 = (state_8392[(9)]);
var inst_8360 = (state_8392[(10)]);
var inst_8353 = (state_8392[(8)]);
var inst_8360__$1 = f.call(null,inst_8356);
var inst_8361 = cljs.core._EQ_.call(null,inst_8360__$1,inst_8353);
var inst_8362 = cljs.core.keyword_identical_QMARK_.call(null,inst_8353,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_8363 = ((inst_8361) || (inst_8362));
var state_8392__$1 = (function (){var statearr_8406 = state_8392;
(statearr_8406[(10)] = inst_8360__$1);

return statearr_8406;
})();
if(cljs.core.truth_(inst_8363)){
var statearr_8407_8430 = state_8392__$1;
(statearr_8407_8430[(1)] = (8));

} else {
var statearr_8408_8431 = state_8392__$1;
(statearr_8408_8431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8393 === (14))){
var inst_8385 = (state_8392[(2)]);
var inst_8386 = cljs.core.async.close_BANG_.call(null,out);
var state_8392__$1 = (function (){var statearr_8410 = state_8392;
(statearr_8410[(13)] = inst_8385);

return statearr_8410;
})();
var statearr_8411_8432 = state_8392__$1;
(statearr_8411_8432[(2)] = inst_8386);

(statearr_8411_8432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8393 === (10))){
var inst_8375 = (state_8392[(2)]);
var state_8392__$1 = state_8392;
var statearr_8412_8433 = state_8392__$1;
(statearr_8412_8433[(2)] = inst_8375);

(statearr_8412_8433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8393 === (8))){
var inst_8352 = (state_8392[(7)]);
var inst_8356 = (state_8392[(9)]);
var inst_8360 = (state_8392[(10)]);
var inst_8365 = inst_8352.push(inst_8356);
var tmp8409 = inst_8352;
var inst_8352__$1 = tmp8409;
var inst_8353 = inst_8360;
var state_8392__$1 = (function (){var statearr_8413 = state_8392;
(statearr_8413[(7)] = inst_8352__$1);

(statearr_8413[(8)] = inst_8353);

(statearr_8413[(14)] = inst_8365);

return statearr_8413;
})();
var statearr_8414_8434 = state_8392__$1;
(statearr_8414_8434[(2)] = null);

(statearr_8414_8434[(1)] = (2));


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
});})(c__6516__auto___8420,out))
;
return ((function (switch__6425__auto__,c__6516__auto___8420,out){
return (function() {
var cljs$core$async$state_machine__6426__auto__ = null;
var cljs$core$async$state_machine__6426__auto____0 = (function (){
var statearr_8415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8415[(0)] = cljs$core$async$state_machine__6426__auto__);

(statearr_8415[(1)] = (1));

return statearr_8415;
});
var cljs$core$async$state_machine__6426__auto____1 = (function (state_8392){
while(true){
var ret_value__6427__auto__ = (function (){try{while(true){
var result__6428__auto__ = switch__6425__auto__.call(null,state_8392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6428__auto__;
}
break;
}
}catch (e8416){if((e8416 instanceof Object)){
var ex__6429__auto__ = e8416;
var statearr_8417_8435 = state_8392;
(statearr_8417_8435[(5)] = ex__6429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8436 = state_8392;
state_8392 = G__8436;
continue;
} else {
return ret_value__6427__auto__;
}
break;
}
});
cljs$core$async$state_machine__6426__auto__ = function(state_8392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6426__auto____1.call(this,state_8392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6426__auto____0;
cljs$core$async$state_machine__6426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6426__auto____1;
return cljs$core$async$state_machine__6426__auto__;
})()
;})(switch__6425__auto__,c__6516__auto___8420,out))
})();
var state__6518__auto__ = (function (){var statearr_8418 = f__6517__auto__.call(null);
(statearr_8418[(6)] = c__6516__auto___8420);

return statearr_8418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6518__auto__);
});})(c__6516__auto___8420,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


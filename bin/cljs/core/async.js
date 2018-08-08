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
var G__6562 = arguments.length;
switch (G__6562) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6563 = (function (f,blockable,meta6564){
this.f = f;
this.blockable = blockable;
this.meta6564 = meta6564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6565,meta6564__$1){
var self__ = this;
var _6565__$1 = this;
return (new cljs.core.async.t_cljs$core$async6563(self__.f,self__.blockable,meta6564__$1));
});

cljs.core.async.t_cljs$core$async6563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6565){
var self__ = this;
var _6565__$1 = this;
return self__.meta6564;
});

cljs.core.async.t_cljs$core$async6563.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6563.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async6563.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async6563.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async6563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta6564","meta6564",-1629600382,null)], null);
});

cljs.core.async.t_cljs$core$async6563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6563";

cljs.core.async.t_cljs$core$async6563.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async6563");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6563.
 */
cljs.core.async.__GT_t_cljs$core$async6563 = (function cljs$core$async$__GT_t_cljs$core$async6563(f__$1,blockable__$1,meta6564){
return (new cljs.core.async.t_cljs$core$async6563(f__$1,blockable__$1,meta6564));
});

}

return (new cljs.core.async.t_cljs$core$async6563(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__6569 = arguments.length;
switch (G__6569) {
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
var G__6572 = arguments.length;
switch (G__6572) {
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
var G__6575 = arguments.length;
switch (G__6575) {
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
var val_6577 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_6577);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_6577,ret){
return (function (){
return fn1.call(null,val_6577);
});})(val_6577,ret))
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
var G__6579 = arguments.length;
switch (G__6579) {
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
var n__4408__auto___6581 = n;
var x_6582 = (0);
while(true){
if((x_6582 < n__4408__auto___6581)){
(a[x_6582] = (0));

var G__6583 = (x_6582 + (1));
x_6582 = G__6583;
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

var G__6584 = (i + (1));
i = G__6584;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6585 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6585 = (function (flag,meta6586){
this.flag = flag;
this.meta6586 = meta6586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_6587,meta6586__$1){
var self__ = this;
var _6587__$1 = this;
return (new cljs.core.async.t_cljs$core$async6585(self__.flag,meta6586__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async6585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_6587){
var self__ = this;
var _6587__$1 = this;
return self__.meta6586;
});})(flag))
;

cljs.core.async.t_cljs$core$async6585.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async6585.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async6585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async6585.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta6586","meta6586",-609087494,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async6585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6585";

cljs.core.async.t_cljs$core$async6585.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async6585");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6585.
 */
cljs.core.async.__GT_t_cljs$core$async6585 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async6585(flag__$1,meta6586){
return (new cljs.core.async.t_cljs$core$async6585(flag__$1,meta6586));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async6585(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6588 = (function (flag,cb,meta6589){
this.flag = flag;
this.cb = cb;
this.meta6589 = meta6589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6590,meta6589__$1){
var self__ = this;
var _6590__$1 = this;
return (new cljs.core.async.t_cljs$core$async6588(self__.flag,self__.cb,meta6589__$1));
});

cljs.core.async.t_cljs$core$async6588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6590){
var self__ = this;
var _6590__$1 = this;
return self__.meta6589;
});

cljs.core.async.t_cljs$core$async6588.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async6588.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async6588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async6588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta6589","meta6589",-116220138,null)], null);
});

cljs.core.async.t_cljs$core$async6588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6588";

cljs.core.async.t_cljs$core$async6588.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async6588");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6588.
 */
cljs.core.async.__GT_t_cljs$core$async6588 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async6588(flag__$1,cb__$1,meta6589){
return (new cljs.core.async.t_cljs$core$async6588(flag__$1,cb__$1,meta6589));
});

}

return (new cljs.core.async.t_cljs$core$async6588(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__6591_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6591_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__6592_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6592_SHARP_,port], null));
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
var G__6593 = (i + (1));
i = G__6593;
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
var len__4531__auto___6599 = arguments.length;
var i__4532__auto___6600 = (0);
while(true){
if((i__4532__auto___6600 < len__4531__auto___6599)){
args__4534__auto__.push((arguments[i__4532__auto___6600]));

var G__6601 = (i__4532__auto___6600 + (1));
i__4532__auto___6600 = G__6601;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__6596){
var map__6597 = p__6596;
var map__6597__$1 = ((((!((map__6597 == null)))?(((((map__6597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6597):map__6597);
var opts = map__6597__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq6594){
var G__6595 = cljs.core.first.call(null,seq6594);
var seq6594__$1 = cljs.core.next.call(null,seq6594);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6595,seq6594__$1);
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
var G__6603 = arguments.length;
switch (G__6603) {
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
var c__6502__auto___6649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto___6649){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto___6649){
return (function (state_6627){
var state_val_6628 = (state_6627[(1)]);
if((state_val_6628 === (7))){
var inst_6623 = (state_6627[(2)]);
var state_6627__$1 = state_6627;
var statearr_6629_6650 = state_6627__$1;
(statearr_6629_6650[(2)] = inst_6623);

(statearr_6629_6650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6628 === (1))){
var state_6627__$1 = state_6627;
var statearr_6630_6651 = state_6627__$1;
(statearr_6630_6651[(2)] = null);

(statearr_6630_6651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6628 === (4))){
var inst_6606 = (state_6627[(7)]);
var inst_6606__$1 = (state_6627[(2)]);
var inst_6607 = (inst_6606__$1 == null);
var state_6627__$1 = (function (){var statearr_6631 = state_6627;
(statearr_6631[(7)] = inst_6606__$1);

return statearr_6631;
})();
if(cljs.core.truth_(inst_6607)){
var statearr_6632_6652 = state_6627__$1;
(statearr_6632_6652[(1)] = (5));

} else {
var statearr_6633_6653 = state_6627__$1;
(statearr_6633_6653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6628 === (13))){
var state_6627__$1 = state_6627;
var statearr_6634_6654 = state_6627__$1;
(statearr_6634_6654[(2)] = null);

(statearr_6634_6654[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6628 === (6))){
var inst_6606 = (state_6627[(7)]);
var state_6627__$1 = state_6627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6627__$1,(11),to,inst_6606);
} else {
if((state_val_6628 === (3))){
var inst_6625 = (state_6627[(2)]);
var state_6627__$1 = state_6627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6627__$1,inst_6625);
} else {
if((state_val_6628 === (12))){
var state_6627__$1 = state_6627;
var statearr_6635_6655 = state_6627__$1;
(statearr_6635_6655[(2)] = null);

(statearr_6635_6655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6628 === (2))){
var state_6627__$1 = state_6627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6627__$1,(4),from);
} else {
if((state_val_6628 === (11))){
var inst_6616 = (state_6627[(2)]);
var state_6627__$1 = state_6627;
if(cljs.core.truth_(inst_6616)){
var statearr_6636_6656 = state_6627__$1;
(statearr_6636_6656[(1)] = (12));

} else {
var statearr_6637_6657 = state_6627__$1;
(statearr_6637_6657[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6628 === (9))){
var state_6627__$1 = state_6627;
var statearr_6638_6658 = state_6627__$1;
(statearr_6638_6658[(2)] = null);

(statearr_6638_6658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6628 === (5))){
var state_6627__$1 = state_6627;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6639_6659 = state_6627__$1;
(statearr_6639_6659[(1)] = (8));

} else {
var statearr_6640_6660 = state_6627__$1;
(statearr_6640_6660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6628 === (14))){
var inst_6621 = (state_6627[(2)]);
var state_6627__$1 = state_6627;
var statearr_6641_6661 = state_6627__$1;
(statearr_6641_6661[(2)] = inst_6621);

(statearr_6641_6661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6628 === (10))){
var inst_6613 = (state_6627[(2)]);
var state_6627__$1 = state_6627;
var statearr_6642_6662 = state_6627__$1;
(statearr_6642_6662[(2)] = inst_6613);

(statearr_6642_6662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6628 === (8))){
var inst_6610 = cljs.core.async.close_BANG_.call(null,to);
var state_6627__$1 = state_6627;
var statearr_6643_6663 = state_6627__$1;
(statearr_6643_6663[(2)] = inst_6610);

(statearr_6643_6663[(1)] = (10));


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
});})(c__6502__auto___6649))
;
return ((function (switch__6411__auto__,c__6502__auto___6649){
return (function() {
var cljs$core$async$state_machine__6412__auto__ = null;
var cljs$core$async$state_machine__6412__auto____0 = (function (){
var statearr_6644 = [null,null,null,null,null,null,null,null];
(statearr_6644[(0)] = cljs$core$async$state_machine__6412__auto__);

(statearr_6644[(1)] = (1));

return statearr_6644;
});
var cljs$core$async$state_machine__6412__auto____1 = (function (state_6627){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_6627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e6645){if((e6645 instanceof Object)){
var ex__6415__auto__ = e6645;
var statearr_6646_6664 = state_6627;
(statearr_6646_6664[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6665 = state_6627;
state_6627 = G__6665;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$state_machine__6412__auto__ = function(state_6627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6412__auto____1.call(this,state_6627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6412__auto____0;
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6412__auto____1;
return cljs$core$async$state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto___6649))
})();
var state__6504__auto__ = (function (){var statearr_6647 = f__6503__auto__.call(null);
(statearr_6647[(6)] = c__6502__auto___6649);

return statearr_6647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto___6649))
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
return (function (p__6666){
var vec__6667 = p__6666;
var v = cljs.core.nth.call(null,vec__6667,(0),null);
var p = cljs.core.nth.call(null,vec__6667,(1),null);
var job = vec__6667;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6502__auto___6838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto___6838,res,vec__6667,v,p,job,jobs,results){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto___6838,res,vec__6667,v,p,job,jobs,results){
return (function (state_6674){
var state_val_6675 = (state_6674[(1)]);
if((state_val_6675 === (1))){
var state_6674__$1 = state_6674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6674__$1,(2),res,v);
} else {
if((state_val_6675 === (2))){
var inst_6671 = (state_6674[(2)]);
var inst_6672 = cljs.core.async.close_BANG_.call(null,res);
var state_6674__$1 = (function (){var statearr_6676 = state_6674;
(statearr_6676[(7)] = inst_6671);

return statearr_6676;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6674__$1,inst_6672);
} else {
return null;
}
}
});})(c__6502__auto___6838,res,vec__6667,v,p,job,jobs,results))
;
return ((function (switch__6411__auto__,c__6502__auto___6838,res,vec__6667,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____0 = (function (){
var statearr_6677 = [null,null,null,null,null,null,null,null];
(statearr_6677[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__);

(statearr_6677[(1)] = (1));

return statearr_6677;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____1 = (function (state_6674){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_6674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e6678){if((e6678 instanceof Object)){
var ex__6415__auto__ = e6678;
var statearr_6679_6839 = state_6674;
(statearr_6679_6839[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6840 = state_6674;
state_6674 = G__6840;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__ = function(state_6674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____1.call(this,state_6674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto___6838,res,vec__6667,v,p,job,jobs,results))
})();
var state__6504__auto__ = (function (){var statearr_6680 = f__6503__auto__.call(null);
(statearr_6680[(6)] = c__6502__auto___6838);

return statearr_6680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto___6838,res,vec__6667,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__6681){
var vec__6682 = p__6681;
var v = cljs.core.nth.call(null,vec__6682,(0),null);
var p = cljs.core.nth.call(null,vec__6682,(1),null);
var job = vec__6682;
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
var n__4408__auto___6841 = n;
var __6842 = (0);
while(true){
if((__6842 < n__4408__auto___6841)){
var G__6685_6843 = type;
var G__6685_6844__$1 = (((G__6685_6843 instanceof cljs.core.Keyword))?G__6685_6843.fqn:null);
switch (G__6685_6844__$1) {
case "compute":
var c__6502__auto___6846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__6842,c__6502__auto___6846,G__6685_6843,G__6685_6844__$1,n__4408__auto___6841,jobs,results,process,async){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (__6842,c__6502__auto___6846,G__6685_6843,G__6685_6844__$1,n__4408__auto___6841,jobs,results,process,async){
return (function (state_6698){
var state_val_6699 = (state_6698[(1)]);
if((state_val_6699 === (1))){
var state_6698__$1 = state_6698;
var statearr_6700_6847 = state_6698__$1;
(statearr_6700_6847[(2)] = null);

(statearr_6700_6847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6699 === (2))){
var state_6698__$1 = state_6698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6698__$1,(4),jobs);
} else {
if((state_val_6699 === (3))){
var inst_6696 = (state_6698[(2)]);
var state_6698__$1 = state_6698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6698__$1,inst_6696);
} else {
if((state_val_6699 === (4))){
var inst_6688 = (state_6698[(2)]);
var inst_6689 = process.call(null,inst_6688);
var state_6698__$1 = state_6698;
if(cljs.core.truth_(inst_6689)){
var statearr_6701_6848 = state_6698__$1;
(statearr_6701_6848[(1)] = (5));

} else {
var statearr_6702_6849 = state_6698__$1;
(statearr_6702_6849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6699 === (5))){
var state_6698__$1 = state_6698;
var statearr_6703_6850 = state_6698__$1;
(statearr_6703_6850[(2)] = null);

(statearr_6703_6850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6699 === (6))){
var state_6698__$1 = state_6698;
var statearr_6704_6851 = state_6698__$1;
(statearr_6704_6851[(2)] = null);

(statearr_6704_6851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6699 === (7))){
var inst_6694 = (state_6698[(2)]);
var state_6698__$1 = state_6698;
var statearr_6705_6852 = state_6698__$1;
(statearr_6705_6852[(2)] = inst_6694);

(statearr_6705_6852[(1)] = (3));


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
});})(__6842,c__6502__auto___6846,G__6685_6843,G__6685_6844__$1,n__4408__auto___6841,jobs,results,process,async))
;
return ((function (__6842,switch__6411__auto__,c__6502__auto___6846,G__6685_6843,G__6685_6844__$1,n__4408__auto___6841,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____0 = (function (){
var statearr_6706 = [null,null,null,null,null,null,null];
(statearr_6706[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__);

(statearr_6706[(1)] = (1));

return statearr_6706;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____1 = (function (state_6698){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_6698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e6707){if((e6707 instanceof Object)){
var ex__6415__auto__ = e6707;
var statearr_6708_6853 = state_6698;
(statearr_6708_6853[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6854 = state_6698;
state_6698 = G__6854;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__ = function(state_6698){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____1.call(this,state_6698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__;
})()
;})(__6842,switch__6411__auto__,c__6502__auto___6846,G__6685_6843,G__6685_6844__$1,n__4408__auto___6841,jobs,results,process,async))
})();
var state__6504__auto__ = (function (){var statearr_6709 = f__6503__auto__.call(null);
(statearr_6709[(6)] = c__6502__auto___6846);

return statearr_6709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(__6842,c__6502__auto___6846,G__6685_6843,G__6685_6844__$1,n__4408__auto___6841,jobs,results,process,async))
);


break;
case "async":
var c__6502__auto___6855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__6842,c__6502__auto___6855,G__6685_6843,G__6685_6844__$1,n__4408__auto___6841,jobs,results,process,async){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (__6842,c__6502__auto___6855,G__6685_6843,G__6685_6844__$1,n__4408__auto___6841,jobs,results,process,async){
return (function (state_6722){
var state_val_6723 = (state_6722[(1)]);
if((state_val_6723 === (1))){
var state_6722__$1 = state_6722;
var statearr_6724_6856 = state_6722__$1;
(statearr_6724_6856[(2)] = null);

(statearr_6724_6856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6723 === (2))){
var state_6722__$1 = state_6722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6722__$1,(4),jobs);
} else {
if((state_val_6723 === (3))){
var inst_6720 = (state_6722[(2)]);
var state_6722__$1 = state_6722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6722__$1,inst_6720);
} else {
if((state_val_6723 === (4))){
var inst_6712 = (state_6722[(2)]);
var inst_6713 = async.call(null,inst_6712);
var state_6722__$1 = state_6722;
if(cljs.core.truth_(inst_6713)){
var statearr_6725_6857 = state_6722__$1;
(statearr_6725_6857[(1)] = (5));

} else {
var statearr_6726_6858 = state_6722__$1;
(statearr_6726_6858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6723 === (5))){
var state_6722__$1 = state_6722;
var statearr_6727_6859 = state_6722__$1;
(statearr_6727_6859[(2)] = null);

(statearr_6727_6859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6723 === (6))){
var state_6722__$1 = state_6722;
var statearr_6728_6860 = state_6722__$1;
(statearr_6728_6860[(2)] = null);

(statearr_6728_6860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6723 === (7))){
var inst_6718 = (state_6722[(2)]);
var state_6722__$1 = state_6722;
var statearr_6729_6861 = state_6722__$1;
(statearr_6729_6861[(2)] = inst_6718);

(statearr_6729_6861[(1)] = (3));


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
});})(__6842,c__6502__auto___6855,G__6685_6843,G__6685_6844__$1,n__4408__auto___6841,jobs,results,process,async))
;
return ((function (__6842,switch__6411__auto__,c__6502__auto___6855,G__6685_6843,G__6685_6844__$1,n__4408__auto___6841,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____0 = (function (){
var statearr_6730 = [null,null,null,null,null,null,null];
(statearr_6730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__);

(statearr_6730[(1)] = (1));

return statearr_6730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____1 = (function (state_6722){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_6722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e6731){if((e6731 instanceof Object)){
var ex__6415__auto__ = e6731;
var statearr_6732_6862 = state_6722;
(statearr_6732_6862[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6863 = state_6722;
state_6722 = G__6863;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__ = function(state_6722){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____1.call(this,state_6722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__;
})()
;})(__6842,switch__6411__auto__,c__6502__auto___6855,G__6685_6843,G__6685_6844__$1,n__4408__auto___6841,jobs,results,process,async))
})();
var state__6504__auto__ = (function (){var statearr_6733 = f__6503__auto__.call(null);
(statearr_6733[(6)] = c__6502__auto___6855);

return statearr_6733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(__6842,c__6502__auto___6855,G__6685_6843,G__6685_6844__$1,n__4408__auto___6841,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6685_6844__$1)].join('')));

}

var G__6864 = (__6842 + (1));
__6842 = G__6864;
continue;
} else {
}
break;
}

var c__6502__auto___6865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto___6865,jobs,results,process,async){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto___6865,jobs,results,process,async){
return (function (state_6755){
var state_val_6756 = (state_6755[(1)]);
if((state_val_6756 === (1))){
var state_6755__$1 = state_6755;
var statearr_6757_6866 = state_6755__$1;
(statearr_6757_6866[(2)] = null);

(statearr_6757_6866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6756 === (2))){
var state_6755__$1 = state_6755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6755__$1,(4),from);
} else {
if((state_val_6756 === (3))){
var inst_6753 = (state_6755[(2)]);
var state_6755__$1 = state_6755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6755__$1,inst_6753);
} else {
if((state_val_6756 === (4))){
var inst_6736 = (state_6755[(7)]);
var inst_6736__$1 = (state_6755[(2)]);
var inst_6737 = (inst_6736__$1 == null);
var state_6755__$1 = (function (){var statearr_6758 = state_6755;
(statearr_6758[(7)] = inst_6736__$1);

return statearr_6758;
})();
if(cljs.core.truth_(inst_6737)){
var statearr_6759_6867 = state_6755__$1;
(statearr_6759_6867[(1)] = (5));

} else {
var statearr_6760_6868 = state_6755__$1;
(statearr_6760_6868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6756 === (5))){
var inst_6739 = cljs.core.async.close_BANG_.call(null,jobs);
var state_6755__$1 = state_6755;
var statearr_6761_6869 = state_6755__$1;
(statearr_6761_6869[(2)] = inst_6739);

(statearr_6761_6869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6756 === (6))){
var inst_6736 = (state_6755[(7)]);
var inst_6741 = (state_6755[(8)]);
var inst_6741__$1 = cljs.core.async.chan.call(null,(1));
var inst_6742 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6743 = [inst_6736,inst_6741__$1];
var inst_6744 = (new cljs.core.PersistentVector(null,2,(5),inst_6742,inst_6743,null));
var state_6755__$1 = (function (){var statearr_6762 = state_6755;
(statearr_6762[(8)] = inst_6741__$1);

return statearr_6762;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6755__$1,(8),jobs,inst_6744);
} else {
if((state_val_6756 === (7))){
var inst_6751 = (state_6755[(2)]);
var state_6755__$1 = state_6755;
var statearr_6763_6870 = state_6755__$1;
(statearr_6763_6870[(2)] = inst_6751);

(statearr_6763_6870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6756 === (8))){
var inst_6741 = (state_6755[(8)]);
var inst_6746 = (state_6755[(2)]);
var state_6755__$1 = (function (){var statearr_6764 = state_6755;
(statearr_6764[(9)] = inst_6746);

return statearr_6764;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6755__$1,(9),results,inst_6741);
} else {
if((state_val_6756 === (9))){
var inst_6748 = (state_6755[(2)]);
var state_6755__$1 = (function (){var statearr_6765 = state_6755;
(statearr_6765[(10)] = inst_6748);

return statearr_6765;
})();
var statearr_6766_6871 = state_6755__$1;
(statearr_6766_6871[(2)] = null);

(statearr_6766_6871[(1)] = (2));


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
});})(c__6502__auto___6865,jobs,results,process,async))
;
return ((function (switch__6411__auto__,c__6502__auto___6865,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____0 = (function (){
var statearr_6767 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6767[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__);

(statearr_6767[(1)] = (1));

return statearr_6767;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____1 = (function (state_6755){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_6755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e6768){if((e6768 instanceof Object)){
var ex__6415__auto__ = e6768;
var statearr_6769_6872 = state_6755;
(statearr_6769_6872[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6873 = state_6755;
state_6755 = G__6873;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__ = function(state_6755){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____1.call(this,state_6755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto___6865,jobs,results,process,async))
})();
var state__6504__auto__ = (function (){var statearr_6770 = f__6503__auto__.call(null);
(statearr_6770[(6)] = c__6502__auto___6865);

return statearr_6770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto___6865,jobs,results,process,async))
);


var c__6502__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto__,jobs,results,process,async){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto__,jobs,results,process,async){
return (function (state_6808){
var state_val_6809 = (state_6808[(1)]);
if((state_val_6809 === (7))){
var inst_6804 = (state_6808[(2)]);
var state_6808__$1 = state_6808;
var statearr_6810_6874 = state_6808__$1;
(statearr_6810_6874[(2)] = inst_6804);

(statearr_6810_6874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6809 === (20))){
var state_6808__$1 = state_6808;
var statearr_6811_6875 = state_6808__$1;
(statearr_6811_6875[(2)] = null);

(statearr_6811_6875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6809 === (1))){
var state_6808__$1 = state_6808;
var statearr_6812_6876 = state_6808__$1;
(statearr_6812_6876[(2)] = null);

(statearr_6812_6876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6809 === (4))){
var inst_6773 = (state_6808[(7)]);
var inst_6773__$1 = (state_6808[(2)]);
var inst_6774 = (inst_6773__$1 == null);
var state_6808__$1 = (function (){var statearr_6813 = state_6808;
(statearr_6813[(7)] = inst_6773__$1);

return statearr_6813;
})();
if(cljs.core.truth_(inst_6774)){
var statearr_6814_6877 = state_6808__$1;
(statearr_6814_6877[(1)] = (5));

} else {
var statearr_6815_6878 = state_6808__$1;
(statearr_6815_6878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6809 === (15))){
var inst_6786 = (state_6808[(8)]);
var state_6808__$1 = state_6808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6808__$1,(18),to,inst_6786);
} else {
if((state_val_6809 === (21))){
var inst_6799 = (state_6808[(2)]);
var state_6808__$1 = state_6808;
var statearr_6816_6879 = state_6808__$1;
(statearr_6816_6879[(2)] = inst_6799);

(statearr_6816_6879[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6809 === (13))){
var inst_6801 = (state_6808[(2)]);
var state_6808__$1 = (function (){var statearr_6817 = state_6808;
(statearr_6817[(9)] = inst_6801);

return statearr_6817;
})();
var statearr_6818_6880 = state_6808__$1;
(statearr_6818_6880[(2)] = null);

(statearr_6818_6880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6809 === (6))){
var inst_6773 = (state_6808[(7)]);
var state_6808__$1 = state_6808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6808__$1,(11),inst_6773);
} else {
if((state_val_6809 === (17))){
var inst_6794 = (state_6808[(2)]);
var state_6808__$1 = state_6808;
if(cljs.core.truth_(inst_6794)){
var statearr_6819_6881 = state_6808__$1;
(statearr_6819_6881[(1)] = (19));

} else {
var statearr_6820_6882 = state_6808__$1;
(statearr_6820_6882[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6809 === (3))){
var inst_6806 = (state_6808[(2)]);
var state_6808__$1 = state_6808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6808__$1,inst_6806);
} else {
if((state_val_6809 === (12))){
var inst_6783 = (state_6808[(10)]);
var state_6808__$1 = state_6808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6808__$1,(14),inst_6783);
} else {
if((state_val_6809 === (2))){
var state_6808__$1 = state_6808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6808__$1,(4),results);
} else {
if((state_val_6809 === (19))){
var state_6808__$1 = state_6808;
var statearr_6821_6883 = state_6808__$1;
(statearr_6821_6883[(2)] = null);

(statearr_6821_6883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6809 === (11))){
var inst_6783 = (state_6808[(2)]);
var state_6808__$1 = (function (){var statearr_6822 = state_6808;
(statearr_6822[(10)] = inst_6783);

return statearr_6822;
})();
var statearr_6823_6884 = state_6808__$1;
(statearr_6823_6884[(2)] = null);

(statearr_6823_6884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6809 === (9))){
var state_6808__$1 = state_6808;
var statearr_6824_6885 = state_6808__$1;
(statearr_6824_6885[(2)] = null);

(statearr_6824_6885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6809 === (5))){
var state_6808__$1 = state_6808;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6825_6886 = state_6808__$1;
(statearr_6825_6886[(1)] = (8));

} else {
var statearr_6826_6887 = state_6808__$1;
(statearr_6826_6887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6809 === (14))){
var inst_6788 = (state_6808[(11)]);
var inst_6786 = (state_6808[(8)]);
var inst_6786__$1 = (state_6808[(2)]);
var inst_6787 = (inst_6786__$1 == null);
var inst_6788__$1 = cljs.core.not.call(null,inst_6787);
var state_6808__$1 = (function (){var statearr_6827 = state_6808;
(statearr_6827[(11)] = inst_6788__$1);

(statearr_6827[(8)] = inst_6786__$1);

return statearr_6827;
})();
if(inst_6788__$1){
var statearr_6828_6888 = state_6808__$1;
(statearr_6828_6888[(1)] = (15));

} else {
var statearr_6829_6889 = state_6808__$1;
(statearr_6829_6889[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6809 === (16))){
var inst_6788 = (state_6808[(11)]);
var state_6808__$1 = state_6808;
var statearr_6830_6890 = state_6808__$1;
(statearr_6830_6890[(2)] = inst_6788);

(statearr_6830_6890[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6809 === (10))){
var inst_6780 = (state_6808[(2)]);
var state_6808__$1 = state_6808;
var statearr_6831_6891 = state_6808__$1;
(statearr_6831_6891[(2)] = inst_6780);

(statearr_6831_6891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6809 === (18))){
var inst_6791 = (state_6808[(2)]);
var state_6808__$1 = state_6808;
var statearr_6832_6892 = state_6808__$1;
(statearr_6832_6892[(2)] = inst_6791);

(statearr_6832_6892[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6809 === (8))){
var inst_6777 = cljs.core.async.close_BANG_.call(null,to);
var state_6808__$1 = state_6808;
var statearr_6833_6893 = state_6808__$1;
(statearr_6833_6893[(2)] = inst_6777);

(statearr_6833_6893[(1)] = (10));


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
});})(c__6502__auto__,jobs,results,process,async))
;
return ((function (switch__6411__auto__,c__6502__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____0 = (function (){
var statearr_6834 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__);

(statearr_6834[(1)] = (1));

return statearr_6834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____1 = (function (state_6808){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_6808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e6835){if((e6835 instanceof Object)){
var ex__6415__auto__ = e6835;
var statearr_6836_6894 = state_6808;
(statearr_6836_6894[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6895 = state_6808;
state_6808 = G__6895;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__ = function(state_6808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____1.call(this,state_6808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto__,jobs,results,process,async))
})();
var state__6504__auto__ = (function (){var statearr_6837 = f__6503__auto__.call(null);
(statearr_6837[(6)] = c__6502__auto__);

return statearr_6837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto__,jobs,results,process,async))
);

return c__6502__auto__;
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
var G__6897 = arguments.length;
switch (G__6897) {
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
var G__6900 = arguments.length;
switch (G__6900) {
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
var G__6903 = arguments.length;
switch (G__6903) {
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
var c__6502__auto___6952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto___6952,tc,fc){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto___6952,tc,fc){
return (function (state_6929){
var state_val_6930 = (state_6929[(1)]);
if((state_val_6930 === (7))){
var inst_6925 = (state_6929[(2)]);
var state_6929__$1 = state_6929;
var statearr_6931_6953 = state_6929__$1;
(statearr_6931_6953[(2)] = inst_6925);

(statearr_6931_6953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6930 === (1))){
var state_6929__$1 = state_6929;
var statearr_6932_6954 = state_6929__$1;
(statearr_6932_6954[(2)] = null);

(statearr_6932_6954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6930 === (4))){
var inst_6906 = (state_6929[(7)]);
var inst_6906__$1 = (state_6929[(2)]);
var inst_6907 = (inst_6906__$1 == null);
var state_6929__$1 = (function (){var statearr_6933 = state_6929;
(statearr_6933[(7)] = inst_6906__$1);

return statearr_6933;
})();
if(cljs.core.truth_(inst_6907)){
var statearr_6934_6955 = state_6929__$1;
(statearr_6934_6955[(1)] = (5));

} else {
var statearr_6935_6956 = state_6929__$1;
(statearr_6935_6956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6930 === (13))){
var state_6929__$1 = state_6929;
var statearr_6936_6957 = state_6929__$1;
(statearr_6936_6957[(2)] = null);

(statearr_6936_6957[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6930 === (6))){
var inst_6906 = (state_6929[(7)]);
var inst_6912 = p.call(null,inst_6906);
var state_6929__$1 = state_6929;
if(cljs.core.truth_(inst_6912)){
var statearr_6937_6958 = state_6929__$1;
(statearr_6937_6958[(1)] = (9));

} else {
var statearr_6938_6959 = state_6929__$1;
(statearr_6938_6959[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6930 === (3))){
var inst_6927 = (state_6929[(2)]);
var state_6929__$1 = state_6929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6929__$1,inst_6927);
} else {
if((state_val_6930 === (12))){
var state_6929__$1 = state_6929;
var statearr_6939_6960 = state_6929__$1;
(statearr_6939_6960[(2)] = null);

(statearr_6939_6960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6930 === (2))){
var state_6929__$1 = state_6929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6929__$1,(4),ch);
} else {
if((state_val_6930 === (11))){
var inst_6906 = (state_6929[(7)]);
var inst_6916 = (state_6929[(2)]);
var state_6929__$1 = state_6929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6929__$1,(8),inst_6916,inst_6906);
} else {
if((state_val_6930 === (9))){
var state_6929__$1 = state_6929;
var statearr_6940_6961 = state_6929__$1;
(statearr_6940_6961[(2)] = tc);

(statearr_6940_6961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6930 === (5))){
var inst_6909 = cljs.core.async.close_BANG_.call(null,tc);
var inst_6910 = cljs.core.async.close_BANG_.call(null,fc);
var state_6929__$1 = (function (){var statearr_6941 = state_6929;
(statearr_6941[(8)] = inst_6909);

return statearr_6941;
})();
var statearr_6942_6962 = state_6929__$1;
(statearr_6942_6962[(2)] = inst_6910);

(statearr_6942_6962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6930 === (14))){
var inst_6923 = (state_6929[(2)]);
var state_6929__$1 = state_6929;
var statearr_6943_6963 = state_6929__$1;
(statearr_6943_6963[(2)] = inst_6923);

(statearr_6943_6963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6930 === (10))){
var state_6929__$1 = state_6929;
var statearr_6944_6964 = state_6929__$1;
(statearr_6944_6964[(2)] = fc);

(statearr_6944_6964[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6930 === (8))){
var inst_6918 = (state_6929[(2)]);
var state_6929__$1 = state_6929;
if(cljs.core.truth_(inst_6918)){
var statearr_6945_6965 = state_6929__$1;
(statearr_6945_6965[(1)] = (12));

} else {
var statearr_6946_6966 = state_6929__$1;
(statearr_6946_6966[(1)] = (13));

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
});})(c__6502__auto___6952,tc,fc))
;
return ((function (switch__6411__auto__,c__6502__auto___6952,tc,fc){
return (function() {
var cljs$core$async$state_machine__6412__auto__ = null;
var cljs$core$async$state_machine__6412__auto____0 = (function (){
var statearr_6947 = [null,null,null,null,null,null,null,null,null];
(statearr_6947[(0)] = cljs$core$async$state_machine__6412__auto__);

(statearr_6947[(1)] = (1));

return statearr_6947;
});
var cljs$core$async$state_machine__6412__auto____1 = (function (state_6929){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_6929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e6948){if((e6948 instanceof Object)){
var ex__6415__auto__ = e6948;
var statearr_6949_6967 = state_6929;
(statearr_6949_6967[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6968 = state_6929;
state_6929 = G__6968;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$state_machine__6412__auto__ = function(state_6929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6412__auto____1.call(this,state_6929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6412__auto____0;
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6412__auto____1;
return cljs$core$async$state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto___6952,tc,fc))
})();
var state__6504__auto__ = (function (){var statearr_6950 = f__6503__auto__.call(null);
(statearr_6950[(6)] = c__6502__auto___6952);

return statearr_6950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto___6952,tc,fc))
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
var c__6502__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto__){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto__){
return (function (state_6989){
var state_val_6990 = (state_6989[(1)]);
if((state_val_6990 === (7))){
var inst_6985 = (state_6989[(2)]);
var state_6989__$1 = state_6989;
var statearr_6991_7009 = state_6989__$1;
(statearr_6991_7009[(2)] = inst_6985);

(statearr_6991_7009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6990 === (1))){
var inst_6969 = init;
var state_6989__$1 = (function (){var statearr_6992 = state_6989;
(statearr_6992[(7)] = inst_6969);

return statearr_6992;
})();
var statearr_6993_7010 = state_6989__$1;
(statearr_6993_7010[(2)] = null);

(statearr_6993_7010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6990 === (4))){
var inst_6972 = (state_6989[(8)]);
var inst_6972__$1 = (state_6989[(2)]);
var inst_6973 = (inst_6972__$1 == null);
var state_6989__$1 = (function (){var statearr_6994 = state_6989;
(statearr_6994[(8)] = inst_6972__$1);

return statearr_6994;
})();
if(cljs.core.truth_(inst_6973)){
var statearr_6995_7011 = state_6989__$1;
(statearr_6995_7011[(1)] = (5));

} else {
var statearr_6996_7012 = state_6989__$1;
(statearr_6996_7012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6990 === (6))){
var inst_6976 = (state_6989[(9)]);
var inst_6972 = (state_6989[(8)]);
var inst_6969 = (state_6989[(7)]);
var inst_6976__$1 = f.call(null,inst_6969,inst_6972);
var inst_6977 = cljs.core.reduced_QMARK_.call(null,inst_6976__$1);
var state_6989__$1 = (function (){var statearr_6997 = state_6989;
(statearr_6997[(9)] = inst_6976__$1);

return statearr_6997;
})();
if(inst_6977){
var statearr_6998_7013 = state_6989__$1;
(statearr_6998_7013[(1)] = (8));

} else {
var statearr_6999_7014 = state_6989__$1;
(statearr_6999_7014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6990 === (3))){
var inst_6987 = (state_6989[(2)]);
var state_6989__$1 = state_6989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6989__$1,inst_6987);
} else {
if((state_val_6990 === (2))){
var state_6989__$1 = state_6989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6989__$1,(4),ch);
} else {
if((state_val_6990 === (9))){
var inst_6976 = (state_6989[(9)]);
var inst_6969 = inst_6976;
var state_6989__$1 = (function (){var statearr_7000 = state_6989;
(statearr_7000[(7)] = inst_6969);

return statearr_7000;
})();
var statearr_7001_7015 = state_6989__$1;
(statearr_7001_7015[(2)] = null);

(statearr_7001_7015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6990 === (5))){
var inst_6969 = (state_6989[(7)]);
var state_6989__$1 = state_6989;
var statearr_7002_7016 = state_6989__$1;
(statearr_7002_7016[(2)] = inst_6969);

(statearr_7002_7016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6990 === (10))){
var inst_6983 = (state_6989[(2)]);
var state_6989__$1 = state_6989;
var statearr_7003_7017 = state_6989__$1;
(statearr_7003_7017[(2)] = inst_6983);

(statearr_7003_7017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6990 === (8))){
var inst_6976 = (state_6989[(9)]);
var inst_6979 = cljs.core.deref.call(null,inst_6976);
var state_6989__$1 = state_6989;
var statearr_7004_7018 = state_6989__$1;
(statearr_7004_7018[(2)] = inst_6979);

(statearr_7004_7018[(1)] = (10));


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
});})(c__6502__auto__))
;
return ((function (switch__6411__auto__,c__6502__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6412__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6412__auto____0 = (function (){
var statearr_7005 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7005[(0)] = cljs$core$async$reduce_$_state_machine__6412__auto__);

(statearr_7005[(1)] = (1));

return statearr_7005;
});
var cljs$core$async$reduce_$_state_machine__6412__auto____1 = (function (state_6989){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_6989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e7006){if((e7006 instanceof Object)){
var ex__6415__auto__ = e7006;
var statearr_7007_7019 = state_6989;
(statearr_7007_7019[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7020 = state_6989;
state_6989 = G__7020;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6412__auto__ = function(state_6989){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6412__auto____1.call(this,state_6989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6412__auto____0;
cljs$core$async$reduce_$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6412__auto____1;
return cljs$core$async$reduce_$_state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto__))
})();
var state__6504__auto__ = (function (){var statearr_7008 = f__6503__auto__.call(null);
(statearr_7008[(6)] = c__6502__auto__);

return statearr_7008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto__))
);

return c__6502__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__6502__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto__,f__$1){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto__,f__$1){
return (function (state_7026){
var state_val_7027 = (state_7026[(1)]);
if((state_val_7027 === (1))){
var inst_7021 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_7026__$1 = state_7026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7026__$1,(2),inst_7021);
} else {
if((state_val_7027 === (2))){
var inst_7023 = (state_7026[(2)]);
var inst_7024 = f__$1.call(null,inst_7023);
var state_7026__$1 = state_7026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7026__$1,inst_7024);
} else {
return null;
}
}
});})(c__6502__auto__,f__$1))
;
return ((function (switch__6411__auto__,c__6502__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__6412__auto__ = null;
var cljs$core$async$transduce_$_state_machine__6412__auto____0 = (function (){
var statearr_7028 = [null,null,null,null,null,null,null];
(statearr_7028[(0)] = cljs$core$async$transduce_$_state_machine__6412__auto__);

(statearr_7028[(1)] = (1));

return statearr_7028;
});
var cljs$core$async$transduce_$_state_machine__6412__auto____1 = (function (state_7026){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_7026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e7029){if((e7029 instanceof Object)){
var ex__6415__auto__ = e7029;
var statearr_7030_7032 = state_7026;
(statearr_7030_7032[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7033 = state_7026;
state_7026 = G__7033;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__6412__auto__ = function(state_7026){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__6412__auto____1.call(this,state_7026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__6412__auto____0;
cljs$core$async$transduce_$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__6412__auto____1;
return cljs$core$async$transduce_$_state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto__,f__$1))
})();
var state__6504__auto__ = (function (){var statearr_7031 = f__6503__auto__.call(null);
(statearr_7031[(6)] = c__6502__auto__);

return statearr_7031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto__,f__$1))
);

return c__6502__auto__;
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
var G__7035 = arguments.length;
switch (G__7035) {
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
var c__6502__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto__){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto__){
return (function (state_7060){
var state_val_7061 = (state_7060[(1)]);
if((state_val_7061 === (7))){
var inst_7042 = (state_7060[(2)]);
var state_7060__$1 = state_7060;
var statearr_7062_7083 = state_7060__$1;
(statearr_7062_7083[(2)] = inst_7042);

(statearr_7062_7083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7061 === (1))){
var inst_7036 = cljs.core.seq.call(null,coll);
var inst_7037 = inst_7036;
var state_7060__$1 = (function (){var statearr_7063 = state_7060;
(statearr_7063[(7)] = inst_7037);

return statearr_7063;
})();
var statearr_7064_7084 = state_7060__$1;
(statearr_7064_7084[(2)] = null);

(statearr_7064_7084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7061 === (4))){
var inst_7037 = (state_7060[(7)]);
var inst_7040 = cljs.core.first.call(null,inst_7037);
var state_7060__$1 = state_7060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7060__$1,(7),ch,inst_7040);
} else {
if((state_val_7061 === (13))){
var inst_7054 = (state_7060[(2)]);
var state_7060__$1 = state_7060;
var statearr_7065_7085 = state_7060__$1;
(statearr_7065_7085[(2)] = inst_7054);

(statearr_7065_7085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7061 === (6))){
var inst_7045 = (state_7060[(2)]);
var state_7060__$1 = state_7060;
if(cljs.core.truth_(inst_7045)){
var statearr_7066_7086 = state_7060__$1;
(statearr_7066_7086[(1)] = (8));

} else {
var statearr_7067_7087 = state_7060__$1;
(statearr_7067_7087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7061 === (3))){
var inst_7058 = (state_7060[(2)]);
var state_7060__$1 = state_7060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7060__$1,inst_7058);
} else {
if((state_val_7061 === (12))){
var state_7060__$1 = state_7060;
var statearr_7068_7088 = state_7060__$1;
(statearr_7068_7088[(2)] = null);

(statearr_7068_7088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7061 === (2))){
var inst_7037 = (state_7060[(7)]);
var state_7060__$1 = state_7060;
if(cljs.core.truth_(inst_7037)){
var statearr_7069_7089 = state_7060__$1;
(statearr_7069_7089[(1)] = (4));

} else {
var statearr_7070_7090 = state_7060__$1;
(statearr_7070_7090[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7061 === (11))){
var inst_7051 = cljs.core.async.close_BANG_.call(null,ch);
var state_7060__$1 = state_7060;
var statearr_7071_7091 = state_7060__$1;
(statearr_7071_7091[(2)] = inst_7051);

(statearr_7071_7091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7061 === (9))){
var state_7060__$1 = state_7060;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7072_7092 = state_7060__$1;
(statearr_7072_7092[(1)] = (11));

} else {
var statearr_7073_7093 = state_7060__$1;
(statearr_7073_7093[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7061 === (5))){
var inst_7037 = (state_7060[(7)]);
var state_7060__$1 = state_7060;
var statearr_7074_7094 = state_7060__$1;
(statearr_7074_7094[(2)] = inst_7037);

(statearr_7074_7094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7061 === (10))){
var inst_7056 = (state_7060[(2)]);
var state_7060__$1 = state_7060;
var statearr_7075_7095 = state_7060__$1;
(statearr_7075_7095[(2)] = inst_7056);

(statearr_7075_7095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7061 === (8))){
var inst_7037 = (state_7060[(7)]);
var inst_7047 = cljs.core.next.call(null,inst_7037);
var inst_7037__$1 = inst_7047;
var state_7060__$1 = (function (){var statearr_7076 = state_7060;
(statearr_7076[(7)] = inst_7037__$1);

return statearr_7076;
})();
var statearr_7077_7096 = state_7060__$1;
(statearr_7077_7096[(2)] = null);

(statearr_7077_7096[(1)] = (2));


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
});})(c__6502__auto__))
;
return ((function (switch__6411__auto__,c__6502__auto__){
return (function() {
var cljs$core$async$state_machine__6412__auto__ = null;
var cljs$core$async$state_machine__6412__auto____0 = (function (){
var statearr_7078 = [null,null,null,null,null,null,null,null];
(statearr_7078[(0)] = cljs$core$async$state_machine__6412__auto__);

(statearr_7078[(1)] = (1));

return statearr_7078;
});
var cljs$core$async$state_machine__6412__auto____1 = (function (state_7060){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_7060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e7079){if((e7079 instanceof Object)){
var ex__6415__auto__ = e7079;
var statearr_7080_7097 = state_7060;
(statearr_7080_7097[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7098 = state_7060;
state_7060 = G__7098;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$state_machine__6412__auto__ = function(state_7060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6412__auto____1.call(this,state_7060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6412__auto____0;
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6412__auto____1;
return cljs$core$async$state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto__))
})();
var state__6504__auto__ = (function (){var statearr_7081 = f__6503__auto__.call(null);
(statearr_7081[(6)] = c__6502__auto__);

return statearr_7081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto__))
);

return c__6502__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7099 = (function (ch,cs,meta7100){
this.ch = ch;
this.cs = cs;
this.meta7100 = meta7100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_7101,meta7100__$1){
var self__ = this;
var _7101__$1 = this;
return (new cljs.core.async.t_cljs$core$async7099(self__.ch,self__.cs,meta7100__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async7099.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_7101){
var self__ = this;
var _7101__$1 = this;
return self__.meta7100;
});})(cs))
;

cljs.core.async.t_cljs$core$async7099.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7099.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async7099.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7099.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7099.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7099.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7099.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta7100","meta7100",-1228622921,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async7099.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7099";

cljs.core.async.t_cljs$core$async7099.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async7099");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7099.
 */
cljs.core.async.__GT_t_cljs$core$async7099 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async7099(ch__$1,cs__$1,meta7100){
return (new cljs.core.async.t_cljs$core$async7099(ch__$1,cs__$1,meta7100));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async7099(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6502__auto___7321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto___7321,cs,m,dchan,dctr,done){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto___7321,cs,m,dchan,dctr,done){
return (function (state_7236){
var state_val_7237 = (state_7236[(1)]);
if((state_val_7237 === (7))){
var inst_7232 = (state_7236[(2)]);
var state_7236__$1 = state_7236;
var statearr_7238_7322 = state_7236__$1;
(statearr_7238_7322[(2)] = inst_7232);

(statearr_7238_7322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (20))){
var inst_7135 = (state_7236[(7)]);
var inst_7147 = cljs.core.first.call(null,inst_7135);
var inst_7148 = cljs.core.nth.call(null,inst_7147,(0),null);
var inst_7149 = cljs.core.nth.call(null,inst_7147,(1),null);
var state_7236__$1 = (function (){var statearr_7239 = state_7236;
(statearr_7239[(8)] = inst_7148);

return statearr_7239;
})();
if(cljs.core.truth_(inst_7149)){
var statearr_7240_7323 = state_7236__$1;
(statearr_7240_7323[(1)] = (22));

} else {
var statearr_7241_7324 = state_7236__$1;
(statearr_7241_7324[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (27))){
var inst_7184 = (state_7236[(9)]);
var inst_7179 = (state_7236[(10)]);
var inst_7177 = (state_7236[(11)]);
var inst_7104 = (state_7236[(12)]);
var inst_7184__$1 = cljs.core._nth.call(null,inst_7177,inst_7179);
var inst_7185 = cljs.core.async.put_BANG_.call(null,inst_7184__$1,inst_7104,done);
var state_7236__$1 = (function (){var statearr_7242 = state_7236;
(statearr_7242[(9)] = inst_7184__$1);

return statearr_7242;
})();
if(cljs.core.truth_(inst_7185)){
var statearr_7243_7325 = state_7236__$1;
(statearr_7243_7325[(1)] = (30));

} else {
var statearr_7244_7326 = state_7236__$1;
(statearr_7244_7326[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (1))){
var state_7236__$1 = state_7236;
var statearr_7245_7327 = state_7236__$1;
(statearr_7245_7327[(2)] = null);

(statearr_7245_7327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (24))){
var inst_7135 = (state_7236[(7)]);
var inst_7154 = (state_7236[(2)]);
var inst_7155 = cljs.core.next.call(null,inst_7135);
var inst_7113 = inst_7155;
var inst_7114 = null;
var inst_7115 = (0);
var inst_7116 = (0);
var state_7236__$1 = (function (){var statearr_7246 = state_7236;
(statearr_7246[(13)] = inst_7114);

(statearr_7246[(14)] = inst_7113);

(statearr_7246[(15)] = inst_7116);

(statearr_7246[(16)] = inst_7154);

(statearr_7246[(17)] = inst_7115);

return statearr_7246;
})();
var statearr_7247_7328 = state_7236__$1;
(statearr_7247_7328[(2)] = null);

(statearr_7247_7328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (39))){
var state_7236__$1 = state_7236;
var statearr_7251_7329 = state_7236__$1;
(statearr_7251_7329[(2)] = null);

(statearr_7251_7329[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (4))){
var inst_7104 = (state_7236[(12)]);
var inst_7104__$1 = (state_7236[(2)]);
var inst_7105 = (inst_7104__$1 == null);
var state_7236__$1 = (function (){var statearr_7252 = state_7236;
(statearr_7252[(12)] = inst_7104__$1);

return statearr_7252;
})();
if(cljs.core.truth_(inst_7105)){
var statearr_7253_7330 = state_7236__$1;
(statearr_7253_7330[(1)] = (5));

} else {
var statearr_7254_7331 = state_7236__$1;
(statearr_7254_7331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (15))){
var inst_7114 = (state_7236[(13)]);
var inst_7113 = (state_7236[(14)]);
var inst_7116 = (state_7236[(15)]);
var inst_7115 = (state_7236[(17)]);
var inst_7131 = (state_7236[(2)]);
var inst_7132 = (inst_7116 + (1));
var tmp7248 = inst_7114;
var tmp7249 = inst_7113;
var tmp7250 = inst_7115;
var inst_7113__$1 = tmp7249;
var inst_7114__$1 = tmp7248;
var inst_7115__$1 = tmp7250;
var inst_7116__$1 = inst_7132;
var state_7236__$1 = (function (){var statearr_7255 = state_7236;
(statearr_7255[(13)] = inst_7114__$1);

(statearr_7255[(14)] = inst_7113__$1);

(statearr_7255[(15)] = inst_7116__$1);

(statearr_7255[(18)] = inst_7131);

(statearr_7255[(17)] = inst_7115__$1);

return statearr_7255;
})();
var statearr_7256_7332 = state_7236__$1;
(statearr_7256_7332[(2)] = null);

(statearr_7256_7332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (21))){
var inst_7158 = (state_7236[(2)]);
var state_7236__$1 = state_7236;
var statearr_7260_7333 = state_7236__$1;
(statearr_7260_7333[(2)] = inst_7158);

(statearr_7260_7333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (31))){
var inst_7184 = (state_7236[(9)]);
var inst_7188 = done.call(null,null);
var inst_7189 = cljs.core.async.untap_STAR_.call(null,m,inst_7184);
var state_7236__$1 = (function (){var statearr_7261 = state_7236;
(statearr_7261[(19)] = inst_7188);

return statearr_7261;
})();
var statearr_7262_7334 = state_7236__$1;
(statearr_7262_7334[(2)] = inst_7189);

(statearr_7262_7334[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (32))){
var inst_7178 = (state_7236[(20)]);
var inst_7176 = (state_7236[(21)]);
var inst_7179 = (state_7236[(10)]);
var inst_7177 = (state_7236[(11)]);
var inst_7191 = (state_7236[(2)]);
var inst_7192 = (inst_7179 + (1));
var tmp7257 = inst_7178;
var tmp7258 = inst_7176;
var tmp7259 = inst_7177;
var inst_7176__$1 = tmp7258;
var inst_7177__$1 = tmp7259;
var inst_7178__$1 = tmp7257;
var inst_7179__$1 = inst_7192;
var state_7236__$1 = (function (){var statearr_7263 = state_7236;
(statearr_7263[(20)] = inst_7178__$1);

(statearr_7263[(22)] = inst_7191);

(statearr_7263[(21)] = inst_7176__$1);

(statearr_7263[(10)] = inst_7179__$1);

(statearr_7263[(11)] = inst_7177__$1);

return statearr_7263;
})();
var statearr_7264_7335 = state_7236__$1;
(statearr_7264_7335[(2)] = null);

(statearr_7264_7335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (40))){
var inst_7204 = (state_7236[(23)]);
var inst_7208 = done.call(null,null);
var inst_7209 = cljs.core.async.untap_STAR_.call(null,m,inst_7204);
var state_7236__$1 = (function (){var statearr_7265 = state_7236;
(statearr_7265[(24)] = inst_7208);

return statearr_7265;
})();
var statearr_7266_7336 = state_7236__$1;
(statearr_7266_7336[(2)] = inst_7209);

(statearr_7266_7336[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (33))){
var inst_7195 = (state_7236[(25)]);
var inst_7197 = cljs.core.chunked_seq_QMARK_.call(null,inst_7195);
var state_7236__$1 = state_7236;
if(inst_7197){
var statearr_7267_7337 = state_7236__$1;
(statearr_7267_7337[(1)] = (36));

} else {
var statearr_7268_7338 = state_7236__$1;
(statearr_7268_7338[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (13))){
var inst_7125 = (state_7236[(26)]);
var inst_7128 = cljs.core.async.close_BANG_.call(null,inst_7125);
var state_7236__$1 = state_7236;
var statearr_7269_7339 = state_7236__$1;
(statearr_7269_7339[(2)] = inst_7128);

(statearr_7269_7339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (22))){
var inst_7148 = (state_7236[(8)]);
var inst_7151 = cljs.core.async.close_BANG_.call(null,inst_7148);
var state_7236__$1 = state_7236;
var statearr_7270_7340 = state_7236__$1;
(statearr_7270_7340[(2)] = inst_7151);

(statearr_7270_7340[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (36))){
var inst_7195 = (state_7236[(25)]);
var inst_7199 = cljs.core.chunk_first.call(null,inst_7195);
var inst_7200 = cljs.core.chunk_rest.call(null,inst_7195);
var inst_7201 = cljs.core.count.call(null,inst_7199);
var inst_7176 = inst_7200;
var inst_7177 = inst_7199;
var inst_7178 = inst_7201;
var inst_7179 = (0);
var state_7236__$1 = (function (){var statearr_7271 = state_7236;
(statearr_7271[(20)] = inst_7178);

(statearr_7271[(21)] = inst_7176);

(statearr_7271[(10)] = inst_7179);

(statearr_7271[(11)] = inst_7177);

return statearr_7271;
})();
var statearr_7272_7341 = state_7236__$1;
(statearr_7272_7341[(2)] = null);

(statearr_7272_7341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (41))){
var inst_7195 = (state_7236[(25)]);
var inst_7211 = (state_7236[(2)]);
var inst_7212 = cljs.core.next.call(null,inst_7195);
var inst_7176 = inst_7212;
var inst_7177 = null;
var inst_7178 = (0);
var inst_7179 = (0);
var state_7236__$1 = (function (){var statearr_7273 = state_7236;
(statearr_7273[(20)] = inst_7178);

(statearr_7273[(27)] = inst_7211);

(statearr_7273[(21)] = inst_7176);

(statearr_7273[(10)] = inst_7179);

(statearr_7273[(11)] = inst_7177);

return statearr_7273;
})();
var statearr_7274_7342 = state_7236__$1;
(statearr_7274_7342[(2)] = null);

(statearr_7274_7342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (43))){
var state_7236__$1 = state_7236;
var statearr_7275_7343 = state_7236__$1;
(statearr_7275_7343[(2)] = null);

(statearr_7275_7343[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (29))){
var inst_7220 = (state_7236[(2)]);
var state_7236__$1 = state_7236;
var statearr_7276_7344 = state_7236__$1;
(statearr_7276_7344[(2)] = inst_7220);

(statearr_7276_7344[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (44))){
var inst_7229 = (state_7236[(2)]);
var state_7236__$1 = (function (){var statearr_7277 = state_7236;
(statearr_7277[(28)] = inst_7229);

return statearr_7277;
})();
var statearr_7278_7345 = state_7236__$1;
(statearr_7278_7345[(2)] = null);

(statearr_7278_7345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (6))){
var inst_7168 = (state_7236[(29)]);
var inst_7167 = cljs.core.deref.call(null,cs);
var inst_7168__$1 = cljs.core.keys.call(null,inst_7167);
var inst_7169 = cljs.core.count.call(null,inst_7168__$1);
var inst_7170 = cljs.core.reset_BANG_.call(null,dctr,inst_7169);
var inst_7175 = cljs.core.seq.call(null,inst_7168__$1);
var inst_7176 = inst_7175;
var inst_7177 = null;
var inst_7178 = (0);
var inst_7179 = (0);
var state_7236__$1 = (function (){var statearr_7279 = state_7236;
(statearr_7279[(20)] = inst_7178);

(statearr_7279[(29)] = inst_7168__$1);

(statearr_7279[(30)] = inst_7170);

(statearr_7279[(21)] = inst_7176);

(statearr_7279[(10)] = inst_7179);

(statearr_7279[(11)] = inst_7177);

return statearr_7279;
})();
var statearr_7280_7346 = state_7236__$1;
(statearr_7280_7346[(2)] = null);

(statearr_7280_7346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (28))){
var inst_7176 = (state_7236[(21)]);
var inst_7195 = (state_7236[(25)]);
var inst_7195__$1 = cljs.core.seq.call(null,inst_7176);
var state_7236__$1 = (function (){var statearr_7281 = state_7236;
(statearr_7281[(25)] = inst_7195__$1);

return statearr_7281;
})();
if(inst_7195__$1){
var statearr_7282_7347 = state_7236__$1;
(statearr_7282_7347[(1)] = (33));

} else {
var statearr_7283_7348 = state_7236__$1;
(statearr_7283_7348[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (25))){
var inst_7178 = (state_7236[(20)]);
var inst_7179 = (state_7236[(10)]);
var inst_7181 = (inst_7179 < inst_7178);
var inst_7182 = inst_7181;
var state_7236__$1 = state_7236;
if(cljs.core.truth_(inst_7182)){
var statearr_7284_7349 = state_7236__$1;
(statearr_7284_7349[(1)] = (27));

} else {
var statearr_7285_7350 = state_7236__$1;
(statearr_7285_7350[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (34))){
var state_7236__$1 = state_7236;
var statearr_7286_7351 = state_7236__$1;
(statearr_7286_7351[(2)] = null);

(statearr_7286_7351[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (17))){
var state_7236__$1 = state_7236;
var statearr_7287_7352 = state_7236__$1;
(statearr_7287_7352[(2)] = null);

(statearr_7287_7352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (3))){
var inst_7234 = (state_7236[(2)]);
var state_7236__$1 = state_7236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7236__$1,inst_7234);
} else {
if((state_val_7237 === (12))){
var inst_7163 = (state_7236[(2)]);
var state_7236__$1 = state_7236;
var statearr_7288_7353 = state_7236__$1;
(statearr_7288_7353[(2)] = inst_7163);

(statearr_7288_7353[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (2))){
var state_7236__$1 = state_7236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7236__$1,(4),ch);
} else {
if((state_val_7237 === (23))){
var state_7236__$1 = state_7236;
var statearr_7289_7354 = state_7236__$1;
(statearr_7289_7354[(2)] = null);

(statearr_7289_7354[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (35))){
var inst_7218 = (state_7236[(2)]);
var state_7236__$1 = state_7236;
var statearr_7290_7355 = state_7236__$1;
(statearr_7290_7355[(2)] = inst_7218);

(statearr_7290_7355[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (19))){
var inst_7135 = (state_7236[(7)]);
var inst_7139 = cljs.core.chunk_first.call(null,inst_7135);
var inst_7140 = cljs.core.chunk_rest.call(null,inst_7135);
var inst_7141 = cljs.core.count.call(null,inst_7139);
var inst_7113 = inst_7140;
var inst_7114 = inst_7139;
var inst_7115 = inst_7141;
var inst_7116 = (0);
var state_7236__$1 = (function (){var statearr_7291 = state_7236;
(statearr_7291[(13)] = inst_7114);

(statearr_7291[(14)] = inst_7113);

(statearr_7291[(15)] = inst_7116);

(statearr_7291[(17)] = inst_7115);

return statearr_7291;
})();
var statearr_7292_7356 = state_7236__$1;
(statearr_7292_7356[(2)] = null);

(statearr_7292_7356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (11))){
var inst_7135 = (state_7236[(7)]);
var inst_7113 = (state_7236[(14)]);
var inst_7135__$1 = cljs.core.seq.call(null,inst_7113);
var state_7236__$1 = (function (){var statearr_7293 = state_7236;
(statearr_7293[(7)] = inst_7135__$1);

return statearr_7293;
})();
if(inst_7135__$1){
var statearr_7294_7357 = state_7236__$1;
(statearr_7294_7357[(1)] = (16));

} else {
var statearr_7295_7358 = state_7236__$1;
(statearr_7295_7358[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (9))){
var inst_7165 = (state_7236[(2)]);
var state_7236__$1 = state_7236;
var statearr_7296_7359 = state_7236__$1;
(statearr_7296_7359[(2)] = inst_7165);

(statearr_7296_7359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (5))){
var inst_7111 = cljs.core.deref.call(null,cs);
var inst_7112 = cljs.core.seq.call(null,inst_7111);
var inst_7113 = inst_7112;
var inst_7114 = null;
var inst_7115 = (0);
var inst_7116 = (0);
var state_7236__$1 = (function (){var statearr_7297 = state_7236;
(statearr_7297[(13)] = inst_7114);

(statearr_7297[(14)] = inst_7113);

(statearr_7297[(15)] = inst_7116);

(statearr_7297[(17)] = inst_7115);

return statearr_7297;
})();
var statearr_7298_7360 = state_7236__$1;
(statearr_7298_7360[(2)] = null);

(statearr_7298_7360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (14))){
var state_7236__$1 = state_7236;
var statearr_7299_7361 = state_7236__$1;
(statearr_7299_7361[(2)] = null);

(statearr_7299_7361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (45))){
var inst_7226 = (state_7236[(2)]);
var state_7236__$1 = state_7236;
var statearr_7300_7362 = state_7236__$1;
(statearr_7300_7362[(2)] = inst_7226);

(statearr_7300_7362[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (26))){
var inst_7168 = (state_7236[(29)]);
var inst_7222 = (state_7236[(2)]);
var inst_7223 = cljs.core.seq.call(null,inst_7168);
var state_7236__$1 = (function (){var statearr_7301 = state_7236;
(statearr_7301[(31)] = inst_7222);

return statearr_7301;
})();
if(inst_7223){
var statearr_7302_7363 = state_7236__$1;
(statearr_7302_7363[(1)] = (42));

} else {
var statearr_7303_7364 = state_7236__$1;
(statearr_7303_7364[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (16))){
var inst_7135 = (state_7236[(7)]);
var inst_7137 = cljs.core.chunked_seq_QMARK_.call(null,inst_7135);
var state_7236__$1 = state_7236;
if(inst_7137){
var statearr_7304_7365 = state_7236__$1;
(statearr_7304_7365[(1)] = (19));

} else {
var statearr_7305_7366 = state_7236__$1;
(statearr_7305_7366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (38))){
var inst_7215 = (state_7236[(2)]);
var state_7236__$1 = state_7236;
var statearr_7306_7367 = state_7236__$1;
(statearr_7306_7367[(2)] = inst_7215);

(statearr_7306_7367[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (30))){
var state_7236__$1 = state_7236;
var statearr_7307_7368 = state_7236__$1;
(statearr_7307_7368[(2)] = null);

(statearr_7307_7368[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (10))){
var inst_7114 = (state_7236[(13)]);
var inst_7116 = (state_7236[(15)]);
var inst_7124 = cljs.core._nth.call(null,inst_7114,inst_7116);
var inst_7125 = cljs.core.nth.call(null,inst_7124,(0),null);
var inst_7126 = cljs.core.nth.call(null,inst_7124,(1),null);
var state_7236__$1 = (function (){var statearr_7308 = state_7236;
(statearr_7308[(26)] = inst_7125);

return statearr_7308;
})();
if(cljs.core.truth_(inst_7126)){
var statearr_7309_7369 = state_7236__$1;
(statearr_7309_7369[(1)] = (13));

} else {
var statearr_7310_7370 = state_7236__$1;
(statearr_7310_7370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (18))){
var inst_7161 = (state_7236[(2)]);
var state_7236__$1 = state_7236;
var statearr_7311_7371 = state_7236__$1;
(statearr_7311_7371[(2)] = inst_7161);

(statearr_7311_7371[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (42))){
var state_7236__$1 = state_7236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7236__$1,(45),dchan);
} else {
if((state_val_7237 === (37))){
var inst_7204 = (state_7236[(23)]);
var inst_7104 = (state_7236[(12)]);
var inst_7195 = (state_7236[(25)]);
var inst_7204__$1 = cljs.core.first.call(null,inst_7195);
var inst_7205 = cljs.core.async.put_BANG_.call(null,inst_7204__$1,inst_7104,done);
var state_7236__$1 = (function (){var statearr_7312 = state_7236;
(statearr_7312[(23)] = inst_7204__$1);

return statearr_7312;
})();
if(cljs.core.truth_(inst_7205)){
var statearr_7313_7372 = state_7236__$1;
(statearr_7313_7372[(1)] = (39));

} else {
var statearr_7314_7373 = state_7236__$1;
(statearr_7314_7373[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7237 === (8))){
var inst_7116 = (state_7236[(15)]);
var inst_7115 = (state_7236[(17)]);
var inst_7118 = (inst_7116 < inst_7115);
var inst_7119 = inst_7118;
var state_7236__$1 = state_7236;
if(cljs.core.truth_(inst_7119)){
var statearr_7315_7374 = state_7236__$1;
(statearr_7315_7374[(1)] = (10));

} else {
var statearr_7316_7375 = state_7236__$1;
(statearr_7316_7375[(1)] = (11));

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
});})(c__6502__auto___7321,cs,m,dchan,dctr,done))
;
return ((function (switch__6411__auto__,c__6502__auto___7321,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6412__auto__ = null;
var cljs$core$async$mult_$_state_machine__6412__auto____0 = (function (){
var statearr_7317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7317[(0)] = cljs$core$async$mult_$_state_machine__6412__auto__);

(statearr_7317[(1)] = (1));

return statearr_7317;
});
var cljs$core$async$mult_$_state_machine__6412__auto____1 = (function (state_7236){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_7236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e7318){if((e7318 instanceof Object)){
var ex__6415__auto__ = e7318;
var statearr_7319_7376 = state_7236;
(statearr_7319_7376[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7377 = state_7236;
state_7236 = G__7377;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6412__auto__ = function(state_7236){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6412__auto____1.call(this,state_7236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6412__auto____0;
cljs$core$async$mult_$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6412__auto____1;
return cljs$core$async$mult_$_state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto___7321,cs,m,dchan,dctr,done))
})();
var state__6504__auto__ = (function (){var statearr_7320 = f__6503__auto__.call(null);
(statearr_7320[(6)] = c__6502__auto___7321);

return statearr_7320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto___7321,cs,m,dchan,dctr,done))
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
var G__7379 = arguments.length;
switch (G__7379) {
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
var len__4531__auto___7391 = arguments.length;
var i__4532__auto___7392 = (0);
while(true){
if((i__4532__auto___7392 < len__4531__auto___7391)){
args__4534__auto__.push((arguments[i__4532__auto___7392]));

var G__7393 = (i__4532__auto___7392 + (1));
i__4532__auto___7392 = G__7393;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__7385){
var map__7386 = p__7385;
var map__7386__$1 = ((((!((map__7386 == null)))?(((((map__7386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7386):map__7386);
var opts = map__7386__$1;
var statearr_7388_7394 = state;
(statearr_7388_7394[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__7386,map__7386__$1,opts){
return (function (val){
var statearr_7389_7395 = state;
(statearr_7389_7395[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__7386,map__7386__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_7390_7396 = state;
(statearr_7390_7396[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq7381){
var G__7382 = cljs.core.first.call(null,seq7381);
var seq7381__$1 = cljs.core.next.call(null,seq7381);
var G__7383 = cljs.core.first.call(null,seq7381__$1);
var seq7381__$2 = cljs.core.next.call(null,seq7381__$1);
var G__7384 = cljs.core.first.call(null,seq7381__$2);
var seq7381__$3 = cljs.core.next.call(null,seq7381__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7382,G__7383,G__7384,seq7381__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7397 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7397 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta7398){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta7398 = meta7398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7399,meta7398__$1){
var self__ = this;
var _7399__$1 = this;
return (new cljs.core.async.t_cljs$core$async7397(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta7398__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7397.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7399){
var self__ = this;
var _7399__$1 = this;
return self__.meta7398;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7397.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7397.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7397.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7397.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7397.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7397.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7397.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7397.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async7397.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta7398","meta7398",-729519037,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7397.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7397";

cljs.core.async.t_cljs$core$async7397.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async7397");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7397.
 */
cljs.core.async.__GT_t_cljs$core$async7397 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async7397(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta7398){
return (new cljs.core.async.t_cljs$core$async7397(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta7398));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async7397(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6502__auto___7561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto___7561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto___7561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_7501){
var state_val_7502 = (state_7501[(1)]);
if((state_val_7502 === (7))){
var inst_7416 = (state_7501[(2)]);
var state_7501__$1 = state_7501;
var statearr_7503_7562 = state_7501__$1;
(statearr_7503_7562[(2)] = inst_7416);

(statearr_7503_7562[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (20))){
var inst_7428 = (state_7501[(7)]);
var state_7501__$1 = state_7501;
var statearr_7504_7563 = state_7501__$1;
(statearr_7504_7563[(2)] = inst_7428);

(statearr_7504_7563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (27))){
var state_7501__$1 = state_7501;
var statearr_7505_7564 = state_7501__$1;
(statearr_7505_7564[(2)] = null);

(statearr_7505_7564[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (1))){
var inst_7403 = (state_7501[(8)]);
var inst_7403__$1 = calc_state.call(null);
var inst_7405 = (inst_7403__$1 == null);
var inst_7406 = cljs.core.not.call(null,inst_7405);
var state_7501__$1 = (function (){var statearr_7506 = state_7501;
(statearr_7506[(8)] = inst_7403__$1);

return statearr_7506;
})();
if(inst_7406){
var statearr_7507_7565 = state_7501__$1;
(statearr_7507_7565[(1)] = (2));

} else {
var statearr_7508_7566 = state_7501__$1;
(statearr_7508_7566[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (24))){
var inst_7461 = (state_7501[(9)]);
var inst_7452 = (state_7501[(10)]);
var inst_7475 = (state_7501[(11)]);
var inst_7475__$1 = inst_7452.call(null,inst_7461);
var state_7501__$1 = (function (){var statearr_7509 = state_7501;
(statearr_7509[(11)] = inst_7475__$1);

return statearr_7509;
})();
if(cljs.core.truth_(inst_7475__$1)){
var statearr_7510_7567 = state_7501__$1;
(statearr_7510_7567[(1)] = (29));

} else {
var statearr_7511_7568 = state_7501__$1;
(statearr_7511_7568[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (4))){
var inst_7419 = (state_7501[(2)]);
var state_7501__$1 = state_7501;
if(cljs.core.truth_(inst_7419)){
var statearr_7512_7569 = state_7501__$1;
(statearr_7512_7569[(1)] = (8));

} else {
var statearr_7513_7570 = state_7501__$1;
(statearr_7513_7570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (15))){
var inst_7446 = (state_7501[(2)]);
var state_7501__$1 = state_7501;
if(cljs.core.truth_(inst_7446)){
var statearr_7514_7571 = state_7501__$1;
(statearr_7514_7571[(1)] = (19));

} else {
var statearr_7515_7572 = state_7501__$1;
(statearr_7515_7572[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (21))){
var inst_7451 = (state_7501[(12)]);
var inst_7451__$1 = (state_7501[(2)]);
var inst_7452 = cljs.core.get.call(null,inst_7451__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7453 = cljs.core.get.call(null,inst_7451__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7454 = cljs.core.get.call(null,inst_7451__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_7501__$1 = (function (){var statearr_7516 = state_7501;
(statearr_7516[(10)] = inst_7452);

(statearr_7516[(12)] = inst_7451__$1);

(statearr_7516[(13)] = inst_7453);

return statearr_7516;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_7501__$1,(22),inst_7454);
} else {
if((state_val_7502 === (31))){
var inst_7483 = (state_7501[(2)]);
var state_7501__$1 = state_7501;
if(cljs.core.truth_(inst_7483)){
var statearr_7517_7573 = state_7501__$1;
(statearr_7517_7573[(1)] = (32));

} else {
var statearr_7518_7574 = state_7501__$1;
(statearr_7518_7574[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (32))){
var inst_7460 = (state_7501[(14)]);
var state_7501__$1 = state_7501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7501__$1,(35),out,inst_7460);
} else {
if((state_val_7502 === (33))){
var inst_7451 = (state_7501[(12)]);
var inst_7428 = inst_7451;
var state_7501__$1 = (function (){var statearr_7519 = state_7501;
(statearr_7519[(7)] = inst_7428);

return statearr_7519;
})();
var statearr_7520_7575 = state_7501__$1;
(statearr_7520_7575[(2)] = null);

(statearr_7520_7575[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (13))){
var inst_7428 = (state_7501[(7)]);
var inst_7435 = inst_7428.cljs$lang$protocol_mask$partition0$;
var inst_7436 = (inst_7435 & (64));
var inst_7437 = inst_7428.cljs$core$ISeq$;
var inst_7438 = (cljs.core.PROTOCOL_SENTINEL === inst_7437);
var inst_7439 = ((inst_7436) || (inst_7438));
var state_7501__$1 = state_7501;
if(cljs.core.truth_(inst_7439)){
var statearr_7521_7576 = state_7501__$1;
(statearr_7521_7576[(1)] = (16));

} else {
var statearr_7522_7577 = state_7501__$1;
(statearr_7522_7577[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (22))){
var inst_7461 = (state_7501[(9)]);
var inst_7460 = (state_7501[(14)]);
var inst_7459 = (state_7501[(2)]);
var inst_7460__$1 = cljs.core.nth.call(null,inst_7459,(0),null);
var inst_7461__$1 = cljs.core.nth.call(null,inst_7459,(1),null);
var inst_7462 = (inst_7460__$1 == null);
var inst_7463 = cljs.core._EQ_.call(null,inst_7461__$1,change);
var inst_7464 = ((inst_7462) || (inst_7463));
var state_7501__$1 = (function (){var statearr_7523 = state_7501;
(statearr_7523[(9)] = inst_7461__$1);

(statearr_7523[(14)] = inst_7460__$1);

return statearr_7523;
})();
if(cljs.core.truth_(inst_7464)){
var statearr_7524_7578 = state_7501__$1;
(statearr_7524_7578[(1)] = (23));

} else {
var statearr_7525_7579 = state_7501__$1;
(statearr_7525_7579[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (36))){
var inst_7451 = (state_7501[(12)]);
var inst_7428 = inst_7451;
var state_7501__$1 = (function (){var statearr_7526 = state_7501;
(statearr_7526[(7)] = inst_7428);

return statearr_7526;
})();
var statearr_7527_7580 = state_7501__$1;
(statearr_7527_7580[(2)] = null);

(statearr_7527_7580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (29))){
var inst_7475 = (state_7501[(11)]);
var state_7501__$1 = state_7501;
var statearr_7528_7581 = state_7501__$1;
(statearr_7528_7581[(2)] = inst_7475);

(statearr_7528_7581[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (6))){
var state_7501__$1 = state_7501;
var statearr_7529_7582 = state_7501__$1;
(statearr_7529_7582[(2)] = false);

(statearr_7529_7582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (28))){
var inst_7471 = (state_7501[(2)]);
var inst_7472 = calc_state.call(null);
var inst_7428 = inst_7472;
var state_7501__$1 = (function (){var statearr_7530 = state_7501;
(statearr_7530[(7)] = inst_7428);

(statearr_7530[(15)] = inst_7471);

return statearr_7530;
})();
var statearr_7531_7583 = state_7501__$1;
(statearr_7531_7583[(2)] = null);

(statearr_7531_7583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (25))){
var inst_7497 = (state_7501[(2)]);
var state_7501__$1 = state_7501;
var statearr_7532_7584 = state_7501__$1;
(statearr_7532_7584[(2)] = inst_7497);

(statearr_7532_7584[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (34))){
var inst_7495 = (state_7501[(2)]);
var state_7501__$1 = state_7501;
var statearr_7533_7585 = state_7501__$1;
(statearr_7533_7585[(2)] = inst_7495);

(statearr_7533_7585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (17))){
var state_7501__$1 = state_7501;
var statearr_7534_7586 = state_7501__$1;
(statearr_7534_7586[(2)] = false);

(statearr_7534_7586[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (3))){
var state_7501__$1 = state_7501;
var statearr_7535_7587 = state_7501__$1;
(statearr_7535_7587[(2)] = false);

(statearr_7535_7587[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (12))){
var inst_7499 = (state_7501[(2)]);
var state_7501__$1 = state_7501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7501__$1,inst_7499);
} else {
if((state_val_7502 === (2))){
var inst_7403 = (state_7501[(8)]);
var inst_7408 = inst_7403.cljs$lang$protocol_mask$partition0$;
var inst_7409 = (inst_7408 & (64));
var inst_7410 = inst_7403.cljs$core$ISeq$;
var inst_7411 = (cljs.core.PROTOCOL_SENTINEL === inst_7410);
var inst_7412 = ((inst_7409) || (inst_7411));
var state_7501__$1 = state_7501;
if(cljs.core.truth_(inst_7412)){
var statearr_7536_7588 = state_7501__$1;
(statearr_7536_7588[(1)] = (5));

} else {
var statearr_7537_7589 = state_7501__$1;
(statearr_7537_7589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (23))){
var inst_7460 = (state_7501[(14)]);
var inst_7466 = (inst_7460 == null);
var state_7501__$1 = state_7501;
if(cljs.core.truth_(inst_7466)){
var statearr_7538_7590 = state_7501__$1;
(statearr_7538_7590[(1)] = (26));

} else {
var statearr_7539_7591 = state_7501__$1;
(statearr_7539_7591[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (35))){
var inst_7486 = (state_7501[(2)]);
var state_7501__$1 = state_7501;
if(cljs.core.truth_(inst_7486)){
var statearr_7540_7592 = state_7501__$1;
(statearr_7540_7592[(1)] = (36));

} else {
var statearr_7541_7593 = state_7501__$1;
(statearr_7541_7593[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (19))){
var inst_7428 = (state_7501[(7)]);
var inst_7448 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7428);
var state_7501__$1 = state_7501;
var statearr_7542_7594 = state_7501__$1;
(statearr_7542_7594[(2)] = inst_7448);

(statearr_7542_7594[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (11))){
var inst_7428 = (state_7501[(7)]);
var inst_7432 = (inst_7428 == null);
var inst_7433 = cljs.core.not.call(null,inst_7432);
var state_7501__$1 = state_7501;
if(inst_7433){
var statearr_7543_7595 = state_7501__$1;
(statearr_7543_7595[(1)] = (13));

} else {
var statearr_7544_7596 = state_7501__$1;
(statearr_7544_7596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (9))){
var inst_7403 = (state_7501[(8)]);
var state_7501__$1 = state_7501;
var statearr_7545_7597 = state_7501__$1;
(statearr_7545_7597[(2)] = inst_7403);

(statearr_7545_7597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (5))){
var state_7501__$1 = state_7501;
var statearr_7546_7598 = state_7501__$1;
(statearr_7546_7598[(2)] = true);

(statearr_7546_7598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (14))){
var state_7501__$1 = state_7501;
var statearr_7547_7599 = state_7501__$1;
(statearr_7547_7599[(2)] = false);

(statearr_7547_7599[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (26))){
var inst_7461 = (state_7501[(9)]);
var inst_7468 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_7461);
var state_7501__$1 = state_7501;
var statearr_7548_7600 = state_7501__$1;
(statearr_7548_7600[(2)] = inst_7468);

(statearr_7548_7600[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (16))){
var state_7501__$1 = state_7501;
var statearr_7549_7601 = state_7501__$1;
(statearr_7549_7601[(2)] = true);

(statearr_7549_7601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (38))){
var inst_7491 = (state_7501[(2)]);
var state_7501__$1 = state_7501;
var statearr_7550_7602 = state_7501__$1;
(statearr_7550_7602[(2)] = inst_7491);

(statearr_7550_7602[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (30))){
var inst_7461 = (state_7501[(9)]);
var inst_7452 = (state_7501[(10)]);
var inst_7453 = (state_7501[(13)]);
var inst_7478 = cljs.core.empty_QMARK_.call(null,inst_7452);
var inst_7479 = inst_7453.call(null,inst_7461);
var inst_7480 = cljs.core.not.call(null,inst_7479);
var inst_7481 = ((inst_7478) && (inst_7480));
var state_7501__$1 = state_7501;
var statearr_7551_7603 = state_7501__$1;
(statearr_7551_7603[(2)] = inst_7481);

(statearr_7551_7603[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (10))){
var inst_7403 = (state_7501[(8)]);
var inst_7424 = (state_7501[(2)]);
var inst_7425 = cljs.core.get.call(null,inst_7424,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7426 = cljs.core.get.call(null,inst_7424,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7427 = cljs.core.get.call(null,inst_7424,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_7428 = inst_7403;
var state_7501__$1 = (function (){var statearr_7552 = state_7501;
(statearr_7552[(16)] = inst_7426);

(statearr_7552[(17)] = inst_7425);

(statearr_7552[(18)] = inst_7427);

(statearr_7552[(7)] = inst_7428);

return statearr_7552;
})();
var statearr_7553_7604 = state_7501__$1;
(statearr_7553_7604[(2)] = null);

(statearr_7553_7604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (18))){
var inst_7443 = (state_7501[(2)]);
var state_7501__$1 = state_7501;
var statearr_7554_7605 = state_7501__$1;
(statearr_7554_7605[(2)] = inst_7443);

(statearr_7554_7605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (37))){
var state_7501__$1 = state_7501;
var statearr_7555_7606 = state_7501__$1;
(statearr_7555_7606[(2)] = null);

(statearr_7555_7606[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7502 === (8))){
var inst_7403 = (state_7501[(8)]);
var inst_7421 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7403);
var state_7501__$1 = state_7501;
var statearr_7556_7607 = state_7501__$1;
(statearr_7556_7607[(2)] = inst_7421);

(statearr_7556_7607[(1)] = (10));


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
});})(c__6502__auto___7561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6411__auto__,c__6502__auto___7561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6412__auto__ = null;
var cljs$core$async$mix_$_state_machine__6412__auto____0 = (function (){
var statearr_7557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7557[(0)] = cljs$core$async$mix_$_state_machine__6412__auto__);

(statearr_7557[(1)] = (1));

return statearr_7557;
});
var cljs$core$async$mix_$_state_machine__6412__auto____1 = (function (state_7501){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_7501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e7558){if((e7558 instanceof Object)){
var ex__6415__auto__ = e7558;
var statearr_7559_7608 = state_7501;
(statearr_7559_7608[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7609 = state_7501;
state_7501 = G__7609;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6412__auto__ = function(state_7501){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6412__auto____1.call(this,state_7501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6412__auto____0;
cljs$core$async$mix_$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6412__auto____1;
return cljs$core$async$mix_$_state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto___7561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6504__auto__ = (function (){var statearr_7560 = f__6503__auto__.call(null);
(statearr_7560[(6)] = c__6502__auto___7561);

return statearr_7560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto___7561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__7611 = arguments.length;
switch (G__7611) {
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
var G__7615 = arguments.length;
switch (G__7615) {
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
return (function (p1__7613_SHARP_){
if(cljs.core.truth_(p1__7613_SHARP_.call(null,topic))){
return p1__7613_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__7613_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7616 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7616 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta7617){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta7617 = meta7617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_7618,meta7617__$1){
var self__ = this;
var _7618__$1 = this;
return (new cljs.core.async.t_cljs$core$async7616(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta7617__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7616.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_7618){
var self__ = this;
var _7618__$1 = this;
return self__.meta7617;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7616.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7616.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7616.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7616.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7616.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async7616.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7616.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7616.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta7617","meta7617",-1308260033,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7616.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7616";

cljs.core.async.t_cljs$core$async7616.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async7616");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7616.
 */
cljs.core.async.__GT_t_cljs$core$async7616 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async7616(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta7617){
return (new cljs.core.async.t_cljs$core$async7616(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta7617));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async7616(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6502__auto___7736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto___7736,mults,ensure_mult,p){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto___7736,mults,ensure_mult,p){
return (function (state_7690){
var state_val_7691 = (state_7690[(1)]);
if((state_val_7691 === (7))){
var inst_7686 = (state_7690[(2)]);
var state_7690__$1 = state_7690;
var statearr_7692_7737 = state_7690__$1;
(statearr_7692_7737[(2)] = inst_7686);

(statearr_7692_7737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (20))){
var state_7690__$1 = state_7690;
var statearr_7693_7738 = state_7690__$1;
(statearr_7693_7738[(2)] = null);

(statearr_7693_7738[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (1))){
var state_7690__$1 = state_7690;
var statearr_7694_7739 = state_7690__$1;
(statearr_7694_7739[(2)] = null);

(statearr_7694_7739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (24))){
var inst_7669 = (state_7690[(7)]);
var inst_7678 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_7669);
var state_7690__$1 = state_7690;
var statearr_7695_7740 = state_7690__$1;
(statearr_7695_7740[(2)] = inst_7678);

(statearr_7695_7740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (4))){
var inst_7621 = (state_7690[(8)]);
var inst_7621__$1 = (state_7690[(2)]);
var inst_7622 = (inst_7621__$1 == null);
var state_7690__$1 = (function (){var statearr_7696 = state_7690;
(statearr_7696[(8)] = inst_7621__$1);

return statearr_7696;
})();
if(cljs.core.truth_(inst_7622)){
var statearr_7697_7741 = state_7690__$1;
(statearr_7697_7741[(1)] = (5));

} else {
var statearr_7698_7742 = state_7690__$1;
(statearr_7698_7742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (15))){
var inst_7663 = (state_7690[(2)]);
var state_7690__$1 = state_7690;
var statearr_7699_7743 = state_7690__$1;
(statearr_7699_7743[(2)] = inst_7663);

(statearr_7699_7743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (21))){
var inst_7683 = (state_7690[(2)]);
var state_7690__$1 = (function (){var statearr_7700 = state_7690;
(statearr_7700[(9)] = inst_7683);

return statearr_7700;
})();
var statearr_7701_7744 = state_7690__$1;
(statearr_7701_7744[(2)] = null);

(statearr_7701_7744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (13))){
var inst_7645 = (state_7690[(10)]);
var inst_7647 = cljs.core.chunked_seq_QMARK_.call(null,inst_7645);
var state_7690__$1 = state_7690;
if(inst_7647){
var statearr_7702_7745 = state_7690__$1;
(statearr_7702_7745[(1)] = (16));

} else {
var statearr_7703_7746 = state_7690__$1;
(statearr_7703_7746[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (22))){
var inst_7675 = (state_7690[(2)]);
var state_7690__$1 = state_7690;
if(cljs.core.truth_(inst_7675)){
var statearr_7704_7747 = state_7690__$1;
(statearr_7704_7747[(1)] = (23));

} else {
var statearr_7705_7748 = state_7690__$1;
(statearr_7705_7748[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (6))){
var inst_7671 = (state_7690[(11)]);
var inst_7669 = (state_7690[(7)]);
var inst_7621 = (state_7690[(8)]);
var inst_7669__$1 = topic_fn.call(null,inst_7621);
var inst_7670 = cljs.core.deref.call(null,mults);
var inst_7671__$1 = cljs.core.get.call(null,inst_7670,inst_7669__$1);
var state_7690__$1 = (function (){var statearr_7706 = state_7690;
(statearr_7706[(11)] = inst_7671__$1);

(statearr_7706[(7)] = inst_7669__$1);

return statearr_7706;
})();
if(cljs.core.truth_(inst_7671__$1)){
var statearr_7707_7749 = state_7690__$1;
(statearr_7707_7749[(1)] = (19));

} else {
var statearr_7708_7750 = state_7690__$1;
(statearr_7708_7750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (25))){
var inst_7680 = (state_7690[(2)]);
var state_7690__$1 = state_7690;
var statearr_7709_7751 = state_7690__$1;
(statearr_7709_7751[(2)] = inst_7680);

(statearr_7709_7751[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (17))){
var inst_7645 = (state_7690[(10)]);
var inst_7654 = cljs.core.first.call(null,inst_7645);
var inst_7655 = cljs.core.async.muxch_STAR_.call(null,inst_7654);
var inst_7656 = cljs.core.async.close_BANG_.call(null,inst_7655);
var inst_7657 = cljs.core.next.call(null,inst_7645);
var inst_7631 = inst_7657;
var inst_7632 = null;
var inst_7633 = (0);
var inst_7634 = (0);
var state_7690__$1 = (function (){var statearr_7710 = state_7690;
(statearr_7710[(12)] = inst_7634);

(statearr_7710[(13)] = inst_7632);

(statearr_7710[(14)] = inst_7656);

(statearr_7710[(15)] = inst_7633);

(statearr_7710[(16)] = inst_7631);

return statearr_7710;
})();
var statearr_7711_7752 = state_7690__$1;
(statearr_7711_7752[(2)] = null);

(statearr_7711_7752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (3))){
var inst_7688 = (state_7690[(2)]);
var state_7690__$1 = state_7690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7690__$1,inst_7688);
} else {
if((state_val_7691 === (12))){
var inst_7665 = (state_7690[(2)]);
var state_7690__$1 = state_7690;
var statearr_7712_7753 = state_7690__$1;
(statearr_7712_7753[(2)] = inst_7665);

(statearr_7712_7753[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (2))){
var state_7690__$1 = state_7690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7690__$1,(4),ch);
} else {
if((state_val_7691 === (23))){
var state_7690__$1 = state_7690;
var statearr_7713_7754 = state_7690__$1;
(statearr_7713_7754[(2)] = null);

(statearr_7713_7754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (19))){
var inst_7671 = (state_7690[(11)]);
var inst_7621 = (state_7690[(8)]);
var inst_7673 = cljs.core.async.muxch_STAR_.call(null,inst_7671);
var state_7690__$1 = state_7690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7690__$1,(22),inst_7673,inst_7621);
} else {
if((state_val_7691 === (11))){
var inst_7645 = (state_7690[(10)]);
var inst_7631 = (state_7690[(16)]);
var inst_7645__$1 = cljs.core.seq.call(null,inst_7631);
var state_7690__$1 = (function (){var statearr_7714 = state_7690;
(statearr_7714[(10)] = inst_7645__$1);

return statearr_7714;
})();
if(inst_7645__$1){
var statearr_7715_7755 = state_7690__$1;
(statearr_7715_7755[(1)] = (13));

} else {
var statearr_7716_7756 = state_7690__$1;
(statearr_7716_7756[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (9))){
var inst_7667 = (state_7690[(2)]);
var state_7690__$1 = state_7690;
var statearr_7717_7757 = state_7690__$1;
(statearr_7717_7757[(2)] = inst_7667);

(statearr_7717_7757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (5))){
var inst_7628 = cljs.core.deref.call(null,mults);
var inst_7629 = cljs.core.vals.call(null,inst_7628);
var inst_7630 = cljs.core.seq.call(null,inst_7629);
var inst_7631 = inst_7630;
var inst_7632 = null;
var inst_7633 = (0);
var inst_7634 = (0);
var state_7690__$1 = (function (){var statearr_7718 = state_7690;
(statearr_7718[(12)] = inst_7634);

(statearr_7718[(13)] = inst_7632);

(statearr_7718[(15)] = inst_7633);

(statearr_7718[(16)] = inst_7631);

return statearr_7718;
})();
var statearr_7719_7758 = state_7690__$1;
(statearr_7719_7758[(2)] = null);

(statearr_7719_7758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (14))){
var state_7690__$1 = state_7690;
var statearr_7723_7759 = state_7690__$1;
(statearr_7723_7759[(2)] = null);

(statearr_7723_7759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (16))){
var inst_7645 = (state_7690[(10)]);
var inst_7649 = cljs.core.chunk_first.call(null,inst_7645);
var inst_7650 = cljs.core.chunk_rest.call(null,inst_7645);
var inst_7651 = cljs.core.count.call(null,inst_7649);
var inst_7631 = inst_7650;
var inst_7632 = inst_7649;
var inst_7633 = inst_7651;
var inst_7634 = (0);
var state_7690__$1 = (function (){var statearr_7724 = state_7690;
(statearr_7724[(12)] = inst_7634);

(statearr_7724[(13)] = inst_7632);

(statearr_7724[(15)] = inst_7633);

(statearr_7724[(16)] = inst_7631);

return statearr_7724;
})();
var statearr_7725_7760 = state_7690__$1;
(statearr_7725_7760[(2)] = null);

(statearr_7725_7760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (10))){
var inst_7634 = (state_7690[(12)]);
var inst_7632 = (state_7690[(13)]);
var inst_7633 = (state_7690[(15)]);
var inst_7631 = (state_7690[(16)]);
var inst_7639 = cljs.core._nth.call(null,inst_7632,inst_7634);
var inst_7640 = cljs.core.async.muxch_STAR_.call(null,inst_7639);
var inst_7641 = cljs.core.async.close_BANG_.call(null,inst_7640);
var inst_7642 = (inst_7634 + (1));
var tmp7720 = inst_7632;
var tmp7721 = inst_7633;
var tmp7722 = inst_7631;
var inst_7631__$1 = tmp7722;
var inst_7632__$1 = tmp7720;
var inst_7633__$1 = tmp7721;
var inst_7634__$1 = inst_7642;
var state_7690__$1 = (function (){var statearr_7726 = state_7690;
(statearr_7726[(12)] = inst_7634__$1);

(statearr_7726[(13)] = inst_7632__$1);

(statearr_7726[(17)] = inst_7641);

(statearr_7726[(15)] = inst_7633__$1);

(statearr_7726[(16)] = inst_7631__$1);

return statearr_7726;
})();
var statearr_7727_7761 = state_7690__$1;
(statearr_7727_7761[(2)] = null);

(statearr_7727_7761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (18))){
var inst_7660 = (state_7690[(2)]);
var state_7690__$1 = state_7690;
var statearr_7728_7762 = state_7690__$1;
(statearr_7728_7762[(2)] = inst_7660);

(statearr_7728_7762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7691 === (8))){
var inst_7634 = (state_7690[(12)]);
var inst_7633 = (state_7690[(15)]);
var inst_7636 = (inst_7634 < inst_7633);
var inst_7637 = inst_7636;
var state_7690__$1 = state_7690;
if(cljs.core.truth_(inst_7637)){
var statearr_7729_7763 = state_7690__$1;
(statearr_7729_7763[(1)] = (10));

} else {
var statearr_7730_7764 = state_7690__$1;
(statearr_7730_7764[(1)] = (11));

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
});})(c__6502__auto___7736,mults,ensure_mult,p))
;
return ((function (switch__6411__auto__,c__6502__auto___7736,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6412__auto__ = null;
var cljs$core$async$state_machine__6412__auto____0 = (function (){
var statearr_7731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7731[(0)] = cljs$core$async$state_machine__6412__auto__);

(statearr_7731[(1)] = (1));

return statearr_7731;
});
var cljs$core$async$state_machine__6412__auto____1 = (function (state_7690){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_7690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e7732){if((e7732 instanceof Object)){
var ex__6415__auto__ = e7732;
var statearr_7733_7765 = state_7690;
(statearr_7733_7765[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7766 = state_7690;
state_7690 = G__7766;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$state_machine__6412__auto__ = function(state_7690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6412__auto____1.call(this,state_7690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6412__auto____0;
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6412__auto____1;
return cljs$core$async$state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto___7736,mults,ensure_mult,p))
})();
var state__6504__auto__ = (function (){var statearr_7734 = f__6503__auto__.call(null);
(statearr_7734[(6)] = c__6502__auto___7736);

return statearr_7734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto___7736,mults,ensure_mult,p))
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
var G__7768 = arguments.length;
switch (G__7768) {
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
var G__7771 = arguments.length;
switch (G__7771) {
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
var G__7774 = arguments.length;
switch (G__7774) {
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
var c__6502__auto___7841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto___7841,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto___7841,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_7813){
var state_val_7814 = (state_7813[(1)]);
if((state_val_7814 === (7))){
var state_7813__$1 = state_7813;
var statearr_7815_7842 = state_7813__$1;
(statearr_7815_7842[(2)] = null);

(statearr_7815_7842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7814 === (1))){
var state_7813__$1 = state_7813;
var statearr_7816_7843 = state_7813__$1;
(statearr_7816_7843[(2)] = null);

(statearr_7816_7843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7814 === (4))){
var inst_7777 = (state_7813[(7)]);
var inst_7779 = (inst_7777 < cnt);
var state_7813__$1 = state_7813;
if(cljs.core.truth_(inst_7779)){
var statearr_7817_7844 = state_7813__$1;
(statearr_7817_7844[(1)] = (6));

} else {
var statearr_7818_7845 = state_7813__$1;
(statearr_7818_7845[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7814 === (15))){
var inst_7809 = (state_7813[(2)]);
var state_7813__$1 = state_7813;
var statearr_7819_7846 = state_7813__$1;
(statearr_7819_7846[(2)] = inst_7809);

(statearr_7819_7846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7814 === (13))){
var inst_7802 = cljs.core.async.close_BANG_.call(null,out);
var state_7813__$1 = state_7813;
var statearr_7820_7847 = state_7813__$1;
(statearr_7820_7847[(2)] = inst_7802);

(statearr_7820_7847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7814 === (6))){
var state_7813__$1 = state_7813;
var statearr_7821_7848 = state_7813__$1;
(statearr_7821_7848[(2)] = null);

(statearr_7821_7848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7814 === (3))){
var inst_7811 = (state_7813[(2)]);
var state_7813__$1 = state_7813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7813__$1,inst_7811);
} else {
if((state_val_7814 === (12))){
var inst_7799 = (state_7813[(8)]);
var inst_7799__$1 = (state_7813[(2)]);
var inst_7800 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_7799__$1);
var state_7813__$1 = (function (){var statearr_7822 = state_7813;
(statearr_7822[(8)] = inst_7799__$1);

return statearr_7822;
})();
if(cljs.core.truth_(inst_7800)){
var statearr_7823_7849 = state_7813__$1;
(statearr_7823_7849[(1)] = (13));

} else {
var statearr_7824_7850 = state_7813__$1;
(statearr_7824_7850[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7814 === (2))){
var inst_7776 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_7777 = (0);
var state_7813__$1 = (function (){var statearr_7825 = state_7813;
(statearr_7825[(9)] = inst_7776);

(statearr_7825[(7)] = inst_7777);

return statearr_7825;
})();
var statearr_7826_7851 = state_7813__$1;
(statearr_7826_7851[(2)] = null);

(statearr_7826_7851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7814 === (11))){
var inst_7777 = (state_7813[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_7813,(10),Object,null,(9));
var inst_7786 = chs__$1.call(null,inst_7777);
var inst_7787 = done.call(null,inst_7777);
var inst_7788 = cljs.core.async.take_BANG_.call(null,inst_7786,inst_7787);
var state_7813__$1 = state_7813;
var statearr_7827_7852 = state_7813__$1;
(statearr_7827_7852[(2)] = inst_7788);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7813__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7814 === (9))){
var inst_7777 = (state_7813[(7)]);
var inst_7790 = (state_7813[(2)]);
var inst_7791 = (inst_7777 + (1));
var inst_7777__$1 = inst_7791;
var state_7813__$1 = (function (){var statearr_7828 = state_7813;
(statearr_7828[(10)] = inst_7790);

(statearr_7828[(7)] = inst_7777__$1);

return statearr_7828;
})();
var statearr_7829_7853 = state_7813__$1;
(statearr_7829_7853[(2)] = null);

(statearr_7829_7853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7814 === (5))){
var inst_7797 = (state_7813[(2)]);
var state_7813__$1 = (function (){var statearr_7830 = state_7813;
(statearr_7830[(11)] = inst_7797);

return statearr_7830;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7813__$1,(12),dchan);
} else {
if((state_val_7814 === (14))){
var inst_7799 = (state_7813[(8)]);
var inst_7804 = cljs.core.apply.call(null,f,inst_7799);
var state_7813__$1 = state_7813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7813__$1,(16),out,inst_7804);
} else {
if((state_val_7814 === (16))){
var inst_7806 = (state_7813[(2)]);
var state_7813__$1 = (function (){var statearr_7831 = state_7813;
(statearr_7831[(12)] = inst_7806);

return statearr_7831;
})();
var statearr_7832_7854 = state_7813__$1;
(statearr_7832_7854[(2)] = null);

(statearr_7832_7854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7814 === (10))){
var inst_7781 = (state_7813[(2)]);
var inst_7782 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_7813__$1 = (function (){var statearr_7833 = state_7813;
(statearr_7833[(13)] = inst_7781);

return statearr_7833;
})();
var statearr_7834_7855 = state_7813__$1;
(statearr_7834_7855[(2)] = inst_7782);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7813__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7814 === (8))){
var inst_7795 = (state_7813[(2)]);
var state_7813__$1 = state_7813;
var statearr_7835_7856 = state_7813__$1;
(statearr_7835_7856[(2)] = inst_7795);

(statearr_7835_7856[(1)] = (5));


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
});})(c__6502__auto___7841,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6411__auto__,c__6502__auto___7841,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6412__auto__ = null;
var cljs$core$async$state_machine__6412__auto____0 = (function (){
var statearr_7836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7836[(0)] = cljs$core$async$state_machine__6412__auto__);

(statearr_7836[(1)] = (1));

return statearr_7836;
});
var cljs$core$async$state_machine__6412__auto____1 = (function (state_7813){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_7813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e7837){if((e7837 instanceof Object)){
var ex__6415__auto__ = e7837;
var statearr_7838_7857 = state_7813;
(statearr_7838_7857[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7858 = state_7813;
state_7813 = G__7858;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$state_machine__6412__auto__ = function(state_7813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6412__auto____1.call(this,state_7813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6412__auto____0;
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6412__auto____1;
return cljs$core$async$state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto___7841,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6504__auto__ = (function (){var statearr_7839 = f__6503__auto__.call(null);
(statearr_7839[(6)] = c__6502__auto___7841);

return statearr_7839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto___7841,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__7861 = arguments.length;
switch (G__7861) {
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
var c__6502__auto___7915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto___7915,out){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto___7915,out){
return (function (state_7893){
var state_val_7894 = (state_7893[(1)]);
if((state_val_7894 === (7))){
var inst_7873 = (state_7893[(7)]);
var inst_7872 = (state_7893[(8)]);
var inst_7872__$1 = (state_7893[(2)]);
var inst_7873__$1 = cljs.core.nth.call(null,inst_7872__$1,(0),null);
var inst_7874 = cljs.core.nth.call(null,inst_7872__$1,(1),null);
var inst_7875 = (inst_7873__$1 == null);
var state_7893__$1 = (function (){var statearr_7895 = state_7893;
(statearr_7895[(9)] = inst_7874);

(statearr_7895[(7)] = inst_7873__$1);

(statearr_7895[(8)] = inst_7872__$1);

return statearr_7895;
})();
if(cljs.core.truth_(inst_7875)){
var statearr_7896_7916 = state_7893__$1;
(statearr_7896_7916[(1)] = (8));

} else {
var statearr_7897_7917 = state_7893__$1;
(statearr_7897_7917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7894 === (1))){
var inst_7862 = cljs.core.vec.call(null,chs);
var inst_7863 = inst_7862;
var state_7893__$1 = (function (){var statearr_7898 = state_7893;
(statearr_7898[(10)] = inst_7863);

return statearr_7898;
})();
var statearr_7899_7918 = state_7893__$1;
(statearr_7899_7918[(2)] = null);

(statearr_7899_7918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7894 === (4))){
var inst_7863 = (state_7893[(10)]);
var state_7893__$1 = state_7893;
return cljs.core.async.ioc_alts_BANG_.call(null,state_7893__$1,(7),inst_7863);
} else {
if((state_val_7894 === (6))){
var inst_7889 = (state_7893[(2)]);
var state_7893__$1 = state_7893;
var statearr_7900_7919 = state_7893__$1;
(statearr_7900_7919[(2)] = inst_7889);

(statearr_7900_7919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7894 === (3))){
var inst_7891 = (state_7893[(2)]);
var state_7893__$1 = state_7893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7893__$1,inst_7891);
} else {
if((state_val_7894 === (2))){
var inst_7863 = (state_7893[(10)]);
var inst_7865 = cljs.core.count.call(null,inst_7863);
var inst_7866 = (inst_7865 > (0));
var state_7893__$1 = state_7893;
if(cljs.core.truth_(inst_7866)){
var statearr_7902_7920 = state_7893__$1;
(statearr_7902_7920[(1)] = (4));

} else {
var statearr_7903_7921 = state_7893__$1;
(statearr_7903_7921[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7894 === (11))){
var inst_7863 = (state_7893[(10)]);
var inst_7882 = (state_7893[(2)]);
var tmp7901 = inst_7863;
var inst_7863__$1 = tmp7901;
var state_7893__$1 = (function (){var statearr_7904 = state_7893;
(statearr_7904[(11)] = inst_7882);

(statearr_7904[(10)] = inst_7863__$1);

return statearr_7904;
})();
var statearr_7905_7922 = state_7893__$1;
(statearr_7905_7922[(2)] = null);

(statearr_7905_7922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7894 === (9))){
var inst_7873 = (state_7893[(7)]);
var state_7893__$1 = state_7893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7893__$1,(11),out,inst_7873);
} else {
if((state_val_7894 === (5))){
var inst_7887 = cljs.core.async.close_BANG_.call(null,out);
var state_7893__$1 = state_7893;
var statearr_7906_7923 = state_7893__$1;
(statearr_7906_7923[(2)] = inst_7887);

(statearr_7906_7923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7894 === (10))){
var inst_7885 = (state_7893[(2)]);
var state_7893__$1 = state_7893;
var statearr_7907_7924 = state_7893__$1;
(statearr_7907_7924[(2)] = inst_7885);

(statearr_7907_7924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7894 === (8))){
var inst_7874 = (state_7893[(9)]);
var inst_7863 = (state_7893[(10)]);
var inst_7873 = (state_7893[(7)]);
var inst_7872 = (state_7893[(8)]);
var inst_7877 = (function (){var cs = inst_7863;
var vec__7868 = inst_7872;
var v = inst_7873;
var c = inst_7874;
return ((function (cs,vec__7868,v,c,inst_7874,inst_7863,inst_7873,inst_7872,state_val_7894,c__6502__auto___7915,out){
return (function (p1__7859_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__7859_SHARP_);
});
;})(cs,vec__7868,v,c,inst_7874,inst_7863,inst_7873,inst_7872,state_val_7894,c__6502__auto___7915,out))
})();
var inst_7878 = cljs.core.filterv.call(null,inst_7877,inst_7863);
var inst_7863__$1 = inst_7878;
var state_7893__$1 = (function (){var statearr_7908 = state_7893;
(statearr_7908[(10)] = inst_7863__$1);

return statearr_7908;
})();
var statearr_7909_7925 = state_7893__$1;
(statearr_7909_7925[(2)] = null);

(statearr_7909_7925[(1)] = (2));


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
});})(c__6502__auto___7915,out))
;
return ((function (switch__6411__auto__,c__6502__auto___7915,out){
return (function() {
var cljs$core$async$state_machine__6412__auto__ = null;
var cljs$core$async$state_machine__6412__auto____0 = (function (){
var statearr_7910 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7910[(0)] = cljs$core$async$state_machine__6412__auto__);

(statearr_7910[(1)] = (1));

return statearr_7910;
});
var cljs$core$async$state_machine__6412__auto____1 = (function (state_7893){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_7893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e7911){if((e7911 instanceof Object)){
var ex__6415__auto__ = e7911;
var statearr_7912_7926 = state_7893;
(statearr_7912_7926[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7927 = state_7893;
state_7893 = G__7927;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$state_machine__6412__auto__ = function(state_7893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6412__auto____1.call(this,state_7893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6412__auto____0;
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6412__auto____1;
return cljs$core$async$state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto___7915,out))
})();
var state__6504__auto__ = (function (){var statearr_7913 = f__6503__auto__.call(null);
(statearr_7913[(6)] = c__6502__auto___7915);

return statearr_7913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto___7915,out))
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
var G__7929 = arguments.length;
switch (G__7929) {
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
var c__6502__auto___7974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto___7974,out){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto___7974,out){
return (function (state_7953){
var state_val_7954 = (state_7953[(1)]);
if((state_val_7954 === (7))){
var inst_7935 = (state_7953[(7)]);
var inst_7935__$1 = (state_7953[(2)]);
var inst_7936 = (inst_7935__$1 == null);
var inst_7937 = cljs.core.not.call(null,inst_7936);
var state_7953__$1 = (function (){var statearr_7955 = state_7953;
(statearr_7955[(7)] = inst_7935__$1);

return statearr_7955;
})();
if(inst_7937){
var statearr_7956_7975 = state_7953__$1;
(statearr_7956_7975[(1)] = (8));

} else {
var statearr_7957_7976 = state_7953__$1;
(statearr_7957_7976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7954 === (1))){
var inst_7930 = (0);
var state_7953__$1 = (function (){var statearr_7958 = state_7953;
(statearr_7958[(8)] = inst_7930);

return statearr_7958;
})();
var statearr_7959_7977 = state_7953__$1;
(statearr_7959_7977[(2)] = null);

(statearr_7959_7977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7954 === (4))){
var state_7953__$1 = state_7953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7953__$1,(7),ch);
} else {
if((state_val_7954 === (6))){
var inst_7948 = (state_7953[(2)]);
var state_7953__$1 = state_7953;
var statearr_7960_7978 = state_7953__$1;
(statearr_7960_7978[(2)] = inst_7948);

(statearr_7960_7978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7954 === (3))){
var inst_7950 = (state_7953[(2)]);
var inst_7951 = cljs.core.async.close_BANG_.call(null,out);
var state_7953__$1 = (function (){var statearr_7961 = state_7953;
(statearr_7961[(9)] = inst_7950);

return statearr_7961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7953__$1,inst_7951);
} else {
if((state_val_7954 === (2))){
var inst_7930 = (state_7953[(8)]);
var inst_7932 = (inst_7930 < n);
var state_7953__$1 = state_7953;
if(cljs.core.truth_(inst_7932)){
var statearr_7962_7979 = state_7953__$1;
(statearr_7962_7979[(1)] = (4));

} else {
var statearr_7963_7980 = state_7953__$1;
(statearr_7963_7980[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7954 === (11))){
var inst_7930 = (state_7953[(8)]);
var inst_7940 = (state_7953[(2)]);
var inst_7941 = (inst_7930 + (1));
var inst_7930__$1 = inst_7941;
var state_7953__$1 = (function (){var statearr_7964 = state_7953;
(statearr_7964[(8)] = inst_7930__$1);

(statearr_7964[(10)] = inst_7940);

return statearr_7964;
})();
var statearr_7965_7981 = state_7953__$1;
(statearr_7965_7981[(2)] = null);

(statearr_7965_7981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7954 === (9))){
var state_7953__$1 = state_7953;
var statearr_7966_7982 = state_7953__$1;
(statearr_7966_7982[(2)] = null);

(statearr_7966_7982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7954 === (5))){
var state_7953__$1 = state_7953;
var statearr_7967_7983 = state_7953__$1;
(statearr_7967_7983[(2)] = null);

(statearr_7967_7983[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7954 === (10))){
var inst_7945 = (state_7953[(2)]);
var state_7953__$1 = state_7953;
var statearr_7968_7984 = state_7953__$1;
(statearr_7968_7984[(2)] = inst_7945);

(statearr_7968_7984[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7954 === (8))){
var inst_7935 = (state_7953[(7)]);
var state_7953__$1 = state_7953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7953__$1,(11),out,inst_7935);
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
});})(c__6502__auto___7974,out))
;
return ((function (switch__6411__auto__,c__6502__auto___7974,out){
return (function() {
var cljs$core$async$state_machine__6412__auto__ = null;
var cljs$core$async$state_machine__6412__auto____0 = (function (){
var statearr_7969 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7969[(0)] = cljs$core$async$state_machine__6412__auto__);

(statearr_7969[(1)] = (1));

return statearr_7969;
});
var cljs$core$async$state_machine__6412__auto____1 = (function (state_7953){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_7953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e7970){if((e7970 instanceof Object)){
var ex__6415__auto__ = e7970;
var statearr_7971_7985 = state_7953;
(statearr_7971_7985[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7986 = state_7953;
state_7953 = G__7986;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$state_machine__6412__auto__ = function(state_7953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6412__auto____1.call(this,state_7953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6412__auto____0;
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6412__auto____1;
return cljs$core$async$state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto___7974,out))
})();
var state__6504__auto__ = (function (){var statearr_7972 = f__6503__auto__.call(null);
(statearr_7972[(6)] = c__6502__auto___7974);

return statearr_7972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto___7974,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7988 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7988 = (function (f,ch,meta7989){
this.f = f;
this.ch = ch;
this.meta7989 = meta7989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7990,meta7989__$1){
var self__ = this;
var _7990__$1 = this;
return (new cljs.core.async.t_cljs$core$async7988(self__.f,self__.ch,meta7989__$1));
});

cljs.core.async.t_cljs$core$async7988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7990){
var self__ = this;
var _7990__$1 = this;
return self__.meta7989;
});

cljs.core.async.t_cljs$core$async7988.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7988.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7988.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7988.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7988.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7991 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7991 = (function (f,ch,meta7989,_,fn1,meta7992){
this.f = f;
this.ch = ch;
this.meta7989 = meta7989;
this._ = _;
this.fn1 = fn1;
this.meta7992 = meta7992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_7993,meta7992__$1){
var self__ = this;
var _7993__$1 = this;
return (new cljs.core.async.t_cljs$core$async7991(self__.f,self__.ch,self__.meta7989,self__._,self__.fn1,meta7992__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async7991.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_7993){
var self__ = this;
var _7993__$1 = this;
return self__.meta7992;
});})(___$1))
;

cljs.core.async.t_cljs$core$async7991.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7991.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async7991.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async7991.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__7987_SHARP_){
return f1.call(null,(((p1__7987_SHARP_ == null))?null:self__.f.call(null,p1__7987_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async7991.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7989","meta7989",1409712588,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async7988","cljs.core.async/t_cljs$core$async7988",-2019911658,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta7992","meta7992",-191299330,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async7991.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7991";

cljs.core.async.t_cljs$core$async7991.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async7991");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7991.
 */
cljs.core.async.__GT_t_cljs$core$async7991 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async7991(f__$1,ch__$1,meta7989__$1,___$2,fn1__$1,meta7992){
return (new cljs.core.async.t_cljs$core$async7991(f__$1,ch__$1,meta7989__$1,___$2,fn1__$1,meta7992));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async7991(self__.f,self__.ch,self__.meta7989,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async7988.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7988.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async7988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7989","meta7989",1409712588,null)], null);
});

cljs.core.async.t_cljs$core$async7988.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7988";

cljs.core.async.t_cljs$core$async7988.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async7988");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7988.
 */
cljs.core.async.__GT_t_cljs$core$async7988 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async7988(f__$1,ch__$1,meta7989){
return (new cljs.core.async.t_cljs$core$async7988(f__$1,ch__$1,meta7989));
});

}

return (new cljs.core.async.t_cljs$core$async7988(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7994 = (function (f,ch,meta7995){
this.f = f;
this.ch = ch;
this.meta7995 = meta7995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7996,meta7995__$1){
var self__ = this;
var _7996__$1 = this;
return (new cljs.core.async.t_cljs$core$async7994(self__.f,self__.ch,meta7995__$1));
});

cljs.core.async.t_cljs$core$async7994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7996){
var self__ = this;
var _7996__$1 = this;
return self__.meta7995;
});

cljs.core.async.t_cljs$core$async7994.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7994.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async7994.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async7994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7995","meta7995",-69416600,null)], null);
});

cljs.core.async.t_cljs$core$async7994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7994";

cljs.core.async.t_cljs$core$async7994.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async7994");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7994.
 */
cljs.core.async.__GT_t_cljs$core$async7994 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async7994(f__$1,ch__$1,meta7995){
return (new cljs.core.async.t_cljs$core$async7994(f__$1,ch__$1,meta7995));
});

}

return (new cljs.core.async.t_cljs$core$async7994(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7997 = (function (p,ch,meta7998){
this.p = p;
this.ch = ch;
this.meta7998 = meta7998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7999,meta7998__$1){
var self__ = this;
var _7999__$1 = this;
return (new cljs.core.async.t_cljs$core$async7997(self__.p,self__.ch,meta7998__$1));
});

cljs.core.async.t_cljs$core$async7997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7999){
var self__ = this;
var _7999__$1 = this;
return self__.meta7998;
});

cljs.core.async.t_cljs$core$async7997.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7997.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7997.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7997.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7997.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async7997.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7997.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async7997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7998","meta7998",1010449458,null)], null);
});

cljs.core.async.t_cljs$core$async7997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7997";

cljs.core.async.t_cljs$core$async7997.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async7997");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7997.
 */
cljs.core.async.__GT_t_cljs$core$async7997 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async7997(p__$1,ch__$1,meta7998){
return (new cljs.core.async.t_cljs$core$async7997(p__$1,ch__$1,meta7998));
});

}

return (new cljs.core.async.t_cljs$core$async7997(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__8001 = arguments.length;
switch (G__8001) {
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
var c__6502__auto___8041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto___8041,out){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto___8041,out){
return (function (state_8022){
var state_val_8023 = (state_8022[(1)]);
if((state_val_8023 === (7))){
var inst_8018 = (state_8022[(2)]);
var state_8022__$1 = state_8022;
var statearr_8024_8042 = state_8022__$1;
(statearr_8024_8042[(2)] = inst_8018);

(statearr_8024_8042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8023 === (1))){
var state_8022__$1 = state_8022;
var statearr_8025_8043 = state_8022__$1;
(statearr_8025_8043[(2)] = null);

(statearr_8025_8043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8023 === (4))){
var inst_8004 = (state_8022[(7)]);
var inst_8004__$1 = (state_8022[(2)]);
var inst_8005 = (inst_8004__$1 == null);
var state_8022__$1 = (function (){var statearr_8026 = state_8022;
(statearr_8026[(7)] = inst_8004__$1);

return statearr_8026;
})();
if(cljs.core.truth_(inst_8005)){
var statearr_8027_8044 = state_8022__$1;
(statearr_8027_8044[(1)] = (5));

} else {
var statearr_8028_8045 = state_8022__$1;
(statearr_8028_8045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8023 === (6))){
var inst_8004 = (state_8022[(7)]);
var inst_8009 = p.call(null,inst_8004);
var state_8022__$1 = state_8022;
if(cljs.core.truth_(inst_8009)){
var statearr_8029_8046 = state_8022__$1;
(statearr_8029_8046[(1)] = (8));

} else {
var statearr_8030_8047 = state_8022__$1;
(statearr_8030_8047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8023 === (3))){
var inst_8020 = (state_8022[(2)]);
var state_8022__$1 = state_8022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8022__$1,inst_8020);
} else {
if((state_val_8023 === (2))){
var state_8022__$1 = state_8022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8022__$1,(4),ch);
} else {
if((state_val_8023 === (11))){
var inst_8012 = (state_8022[(2)]);
var state_8022__$1 = state_8022;
var statearr_8031_8048 = state_8022__$1;
(statearr_8031_8048[(2)] = inst_8012);

(statearr_8031_8048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8023 === (9))){
var state_8022__$1 = state_8022;
var statearr_8032_8049 = state_8022__$1;
(statearr_8032_8049[(2)] = null);

(statearr_8032_8049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8023 === (5))){
var inst_8007 = cljs.core.async.close_BANG_.call(null,out);
var state_8022__$1 = state_8022;
var statearr_8033_8050 = state_8022__$1;
(statearr_8033_8050[(2)] = inst_8007);

(statearr_8033_8050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8023 === (10))){
var inst_8015 = (state_8022[(2)]);
var state_8022__$1 = (function (){var statearr_8034 = state_8022;
(statearr_8034[(8)] = inst_8015);

return statearr_8034;
})();
var statearr_8035_8051 = state_8022__$1;
(statearr_8035_8051[(2)] = null);

(statearr_8035_8051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8023 === (8))){
var inst_8004 = (state_8022[(7)]);
var state_8022__$1 = state_8022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8022__$1,(11),out,inst_8004);
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
});})(c__6502__auto___8041,out))
;
return ((function (switch__6411__auto__,c__6502__auto___8041,out){
return (function() {
var cljs$core$async$state_machine__6412__auto__ = null;
var cljs$core$async$state_machine__6412__auto____0 = (function (){
var statearr_8036 = [null,null,null,null,null,null,null,null,null];
(statearr_8036[(0)] = cljs$core$async$state_machine__6412__auto__);

(statearr_8036[(1)] = (1));

return statearr_8036;
});
var cljs$core$async$state_machine__6412__auto____1 = (function (state_8022){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_8022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e8037){if((e8037 instanceof Object)){
var ex__6415__auto__ = e8037;
var statearr_8038_8052 = state_8022;
(statearr_8038_8052[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8053 = state_8022;
state_8022 = G__8053;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$state_machine__6412__auto__ = function(state_8022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6412__auto____1.call(this,state_8022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6412__auto____0;
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6412__auto____1;
return cljs$core$async$state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto___8041,out))
})();
var state__6504__auto__ = (function (){var statearr_8039 = f__6503__auto__.call(null);
(statearr_8039[(6)] = c__6502__auto___8041);

return statearr_8039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto___8041,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__8055 = arguments.length;
switch (G__8055) {
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
var c__6502__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto__){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto__){
return (function (state_8118){
var state_val_8119 = (state_8118[(1)]);
if((state_val_8119 === (7))){
var inst_8114 = (state_8118[(2)]);
var state_8118__$1 = state_8118;
var statearr_8120_8158 = state_8118__$1;
(statearr_8120_8158[(2)] = inst_8114);

(statearr_8120_8158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (20))){
var inst_8084 = (state_8118[(7)]);
var inst_8095 = (state_8118[(2)]);
var inst_8096 = cljs.core.next.call(null,inst_8084);
var inst_8070 = inst_8096;
var inst_8071 = null;
var inst_8072 = (0);
var inst_8073 = (0);
var state_8118__$1 = (function (){var statearr_8121 = state_8118;
(statearr_8121[(8)] = inst_8070);

(statearr_8121[(9)] = inst_8071);

(statearr_8121[(10)] = inst_8073);

(statearr_8121[(11)] = inst_8095);

(statearr_8121[(12)] = inst_8072);

return statearr_8121;
})();
var statearr_8122_8159 = state_8118__$1;
(statearr_8122_8159[(2)] = null);

(statearr_8122_8159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (1))){
var state_8118__$1 = state_8118;
var statearr_8123_8160 = state_8118__$1;
(statearr_8123_8160[(2)] = null);

(statearr_8123_8160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (4))){
var inst_8059 = (state_8118[(13)]);
var inst_8059__$1 = (state_8118[(2)]);
var inst_8060 = (inst_8059__$1 == null);
var state_8118__$1 = (function (){var statearr_8124 = state_8118;
(statearr_8124[(13)] = inst_8059__$1);

return statearr_8124;
})();
if(cljs.core.truth_(inst_8060)){
var statearr_8125_8161 = state_8118__$1;
(statearr_8125_8161[(1)] = (5));

} else {
var statearr_8126_8162 = state_8118__$1;
(statearr_8126_8162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (15))){
var state_8118__$1 = state_8118;
var statearr_8130_8163 = state_8118__$1;
(statearr_8130_8163[(2)] = null);

(statearr_8130_8163[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (21))){
var state_8118__$1 = state_8118;
var statearr_8131_8164 = state_8118__$1;
(statearr_8131_8164[(2)] = null);

(statearr_8131_8164[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (13))){
var inst_8070 = (state_8118[(8)]);
var inst_8071 = (state_8118[(9)]);
var inst_8073 = (state_8118[(10)]);
var inst_8072 = (state_8118[(12)]);
var inst_8080 = (state_8118[(2)]);
var inst_8081 = (inst_8073 + (1));
var tmp8127 = inst_8070;
var tmp8128 = inst_8071;
var tmp8129 = inst_8072;
var inst_8070__$1 = tmp8127;
var inst_8071__$1 = tmp8128;
var inst_8072__$1 = tmp8129;
var inst_8073__$1 = inst_8081;
var state_8118__$1 = (function (){var statearr_8132 = state_8118;
(statearr_8132[(8)] = inst_8070__$1);

(statearr_8132[(9)] = inst_8071__$1);

(statearr_8132[(10)] = inst_8073__$1);

(statearr_8132[(12)] = inst_8072__$1);

(statearr_8132[(14)] = inst_8080);

return statearr_8132;
})();
var statearr_8133_8165 = state_8118__$1;
(statearr_8133_8165[(2)] = null);

(statearr_8133_8165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (22))){
var state_8118__$1 = state_8118;
var statearr_8134_8166 = state_8118__$1;
(statearr_8134_8166[(2)] = null);

(statearr_8134_8166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (6))){
var inst_8059 = (state_8118[(13)]);
var inst_8068 = f.call(null,inst_8059);
var inst_8069 = cljs.core.seq.call(null,inst_8068);
var inst_8070 = inst_8069;
var inst_8071 = null;
var inst_8072 = (0);
var inst_8073 = (0);
var state_8118__$1 = (function (){var statearr_8135 = state_8118;
(statearr_8135[(8)] = inst_8070);

(statearr_8135[(9)] = inst_8071);

(statearr_8135[(10)] = inst_8073);

(statearr_8135[(12)] = inst_8072);

return statearr_8135;
})();
var statearr_8136_8167 = state_8118__$1;
(statearr_8136_8167[(2)] = null);

(statearr_8136_8167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (17))){
var inst_8084 = (state_8118[(7)]);
var inst_8088 = cljs.core.chunk_first.call(null,inst_8084);
var inst_8089 = cljs.core.chunk_rest.call(null,inst_8084);
var inst_8090 = cljs.core.count.call(null,inst_8088);
var inst_8070 = inst_8089;
var inst_8071 = inst_8088;
var inst_8072 = inst_8090;
var inst_8073 = (0);
var state_8118__$1 = (function (){var statearr_8137 = state_8118;
(statearr_8137[(8)] = inst_8070);

(statearr_8137[(9)] = inst_8071);

(statearr_8137[(10)] = inst_8073);

(statearr_8137[(12)] = inst_8072);

return statearr_8137;
})();
var statearr_8138_8168 = state_8118__$1;
(statearr_8138_8168[(2)] = null);

(statearr_8138_8168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (3))){
var inst_8116 = (state_8118[(2)]);
var state_8118__$1 = state_8118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8118__$1,inst_8116);
} else {
if((state_val_8119 === (12))){
var inst_8104 = (state_8118[(2)]);
var state_8118__$1 = state_8118;
var statearr_8139_8169 = state_8118__$1;
(statearr_8139_8169[(2)] = inst_8104);

(statearr_8139_8169[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (2))){
var state_8118__$1 = state_8118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8118__$1,(4),in$);
} else {
if((state_val_8119 === (23))){
var inst_8112 = (state_8118[(2)]);
var state_8118__$1 = state_8118;
var statearr_8140_8170 = state_8118__$1;
(statearr_8140_8170[(2)] = inst_8112);

(statearr_8140_8170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (19))){
var inst_8099 = (state_8118[(2)]);
var state_8118__$1 = state_8118;
var statearr_8141_8171 = state_8118__$1;
(statearr_8141_8171[(2)] = inst_8099);

(statearr_8141_8171[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (11))){
var inst_8070 = (state_8118[(8)]);
var inst_8084 = (state_8118[(7)]);
var inst_8084__$1 = cljs.core.seq.call(null,inst_8070);
var state_8118__$1 = (function (){var statearr_8142 = state_8118;
(statearr_8142[(7)] = inst_8084__$1);

return statearr_8142;
})();
if(inst_8084__$1){
var statearr_8143_8172 = state_8118__$1;
(statearr_8143_8172[(1)] = (14));

} else {
var statearr_8144_8173 = state_8118__$1;
(statearr_8144_8173[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (9))){
var inst_8106 = (state_8118[(2)]);
var inst_8107 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_8118__$1 = (function (){var statearr_8145 = state_8118;
(statearr_8145[(15)] = inst_8106);

return statearr_8145;
})();
if(cljs.core.truth_(inst_8107)){
var statearr_8146_8174 = state_8118__$1;
(statearr_8146_8174[(1)] = (21));

} else {
var statearr_8147_8175 = state_8118__$1;
(statearr_8147_8175[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (5))){
var inst_8062 = cljs.core.async.close_BANG_.call(null,out);
var state_8118__$1 = state_8118;
var statearr_8148_8176 = state_8118__$1;
(statearr_8148_8176[(2)] = inst_8062);

(statearr_8148_8176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (14))){
var inst_8084 = (state_8118[(7)]);
var inst_8086 = cljs.core.chunked_seq_QMARK_.call(null,inst_8084);
var state_8118__$1 = state_8118;
if(inst_8086){
var statearr_8149_8177 = state_8118__$1;
(statearr_8149_8177[(1)] = (17));

} else {
var statearr_8150_8178 = state_8118__$1;
(statearr_8150_8178[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (16))){
var inst_8102 = (state_8118[(2)]);
var state_8118__$1 = state_8118;
var statearr_8151_8179 = state_8118__$1;
(statearr_8151_8179[(2)] = inst_8102);

(statearr_8151_8179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (10))){
var inst_8071 = (state_8118[(9)]);
var inst_8073 = (state_8118[(10)]);
var inst_8078 = cljs.core._nth.call(null,inst_8071,inst_8073);
var state_8118__$1 = state_8118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8118__$1,(13),out,inst_8078);
} else {
if((state_val_8119 === (18))){
var inst_8084 = (state_8118[(7)]);
var inst_8093 = cljs.core.first.call(null,inst_8084);
var state_8118__$1 = state_8118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8118__$1,(20),out,inst_8093);
} else {
if((state_val_8119 === (8))){
var inst_8073 = (state_8118[(10)]);
var inst_8072 = (state_8118[(12)]);
var inst_8075 = (inst_8073 < inst_8072);
var inst_8076 = inst_8075;
var state_8118__$1 = state_8118;
if(cljs.core.truth_(inst_8076)){
var statearr_8152_8180 = state_8118__$1;
(statearr_8152_8180[(1)] = (10));

} else {
var statearr_8153_8181 = state_8118__$1;
(statearr_8153_8181[(1)] = (11));

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
});})(c__6502__auto__))
;
return ((function (switch__6411__auto__,c__6502__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6412__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6412__auto____0 = (function (){
var statearr_8154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8154[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6412__auto__);

(statearr_8154[(1)] = (1));

return statearr_8154;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6412__auto____1 = (function (state_8118){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_8118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e8155){if((e8155 instanceof Object)){
var ex__6415__auto__ = e8155;
var statearr_8156_8182 = state_8118;
(statearr_8156_8182[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8183 = state_8118;
state_8118 = G__8183;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6412__auto__ = function(state_8118){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6412__auto____1.call(this,state_8118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6412__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6412__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto__))
})();
var state__6504__auto__ = (function (){var statearr_8157 = f__6503__auto__.call(null);
(statearr_8157[(6)] = c__6502__auto__);

return statearr_8157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto__))
);

return c__6502__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__8185 = arguments.length;
switch (G__8185) {
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
var G__8188 = arguments.length;
switch (G__8188) {
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
var G__8191 = arguments.length;
switch (G__8191) {
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
var c__6502__auto___8238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto___8238,out){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto___8238,out){
return (function (state_8215){
var state_val_8216 = (state_8215[(1)]);
if((state_val_8216 === (7))){
var inst_8210 = (state_8215[(2)]);
var state_8215__$1 = state_8215;
var statearr_8217_8239 = state_8215__$1;
(statearr_8217_8239[(2)] = inst_8210);

(statearr_8217_8239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8216 === (1))){
var inst_8192 = null;
var state_8215__$1 = (function (){var statearr_8218 = state_8215;
(statearr_8218[(7)] = inst_8192);

return statearr_8218;
})();
var statearr_8219_8240 = state_8215__$1;
(statearr_8219_8240[(2)] = null);

(statearr_8219_8240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8216 === (4))){
var inst_8195 = (state_8215[(8)]);
var inst_8195__$1 = (state_8215[(2)]);
var inst_8196 = (inst_8195__$1 == null);
var inst_8197 = cljs.core.not.call(null,inst_8196);
var state_8215__$1 = (function (){var statearr_8220 = state_8215;
(statearr_8220[(8)] = inst_8195__$1);

return statearr_8220;
})();
if(inst_8197){
var statearr_8221_8241 = state_8215__$1;
(statearr_8221_8241[(1)] = (5));

} else {
var statearr_8222_8242 = state_8215__$1;
(statearr_8222_8242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8216 === (6))){
var state_8215__$1 = state_8215;
var statearr_8223_8243 = state_8215__$1;
(statearr_8223_8243[(2)] = null);

(statearr_8223_8243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8216 === (3))){
var inst_8212 = (state_8215[(2)]);
var inst_8213 = cljs.core.async.close_BANG_.call(null,out);
var state_8215__$1 = (function (){var statearr_8224 = state_8215;
(statearr_8224[(9)] = inst_8212);

return statearr_8224;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8215__$1,inst_8213);
} else {
if((state_val_8216 === (2))){
var state_8215__$1 = state_8215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8215__$1,(4),ch);
} else {
if((state_val_8216 === (11))){
var inst_8195 = (state_8215[(8)]);
var inst_8204 = (state_8215[(2)]);
var inst_8192 = inst_8195;
var state_8215__$1 = (function (){var statearr_8225 = state_8215;
(statearr_8225[(7)] = inst_8192);

(statearr_8225[(10)] = inst_8204);

return statearr_8225;
})();
var statearr_8226_8244 = state_8215__$1;
(statearr_8226_8244[(2)] = null);

(statearr_8226_8244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8216 === (9))){
var inst_8195 = (state_8215[(8)]);
var state_8215__$1 = state_8215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8215__$1,(11),out,inst_8195);
} else {
if((state_val_8216 === (5))){
var inst_8192 = (state_8215[(7)]);
var inst_8195 = (state_8215[(8)]);
var inst_8199 = cljs.core._EQ_.call(null,inst_8195,inst_8192);
var state_8215__$1 = state_8215;
if(inst_8199){
var statearr_8228_8245 = state_8215__$1;
(statearr_8228_8245[(1)] = (8));

} else {
var statearr_8229_8246 = state_8215__$1;
(statearr_8229_8246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8216 === (10))){
var inst_8207 = (state_8215[(2)]);
var state_8215__$1 = state_8215;
var statearr_8230_8247 = state_8215__$1;
(statearr_8230_8247[(2)] = inst_8207);

(statearr_8230_8247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8216 === (8))){
var inst_8192 = (state_8215[(7)]);
var tmp8227 = inst_8192;
var inst_8192__$1 = tmp8227;
var state_8215__$1 = (function (){var statearr_8231 = state_8215;
(statearr_8231[(7)] = inst_8192__$1);

return statearr_8231;
})();
var statearr_8232_8248 = state_8215__$1;
(statearr_8232_8248[(2)] = null);

(statearr_8232_8248[(1)] = (2));


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
});})(c__6502__auto___8238,out))
;
return ((function (switch__6411__auto__,c__6502__auto___8238,out){
return (function() {
var cljs$core$async$state_machine__6412__auto__ = null;
var cljs$core$async$state_machine__6412__auto____0 = (function (){
var statearr_8233 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8233[(0)] = cljs$core$async$state_machine__6412__auto__);

(statearr_8233[(1)] = (1));

return statearr_8233;
});
var cljs$core$async$state_machine__6412__auto____1 = (function (state_8215){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_8215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e8234){if((e8234 instanceof Object)){
var ex__6415__auto__ = e8234;
var statearr_8235_8249 = state_8215;
(statearr_8235_8249[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8250 = state_8215;
state_8215 = G__8250;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$state_machine__6412__auto__ = function(state_8215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6412__auto____1.call(this,state_8215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6412__auto____0;
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6412__auto____1;
return cljs$core$async$state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto___8238,out))
})();
var state__6504__auto__ = (function (){var statearr_8236 = f__6503__auto__.call(null);
(statearr_8236[(6)] = c__6502__auto___8238);

return statearr_8236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto___8238,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__8252 = arguments.length;
switch (G__8252) {
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
var c__6502__auto___8318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto___8318,out){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto___8318,out){
return (function (state_8290){
var state_val_8291 = (state_8290[(1)]);
if((state_val_8291 === (7))){
var inst_8286 = (state_8290[(2)]);
var state_8290__$1 = state_8290;
var statearr_8292_8319 = state_8290__$1;
(statearr_8292_8319[(2)] = inst_8286);

(statearr_8292_8319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8291 === (1))){
var inst_8253 = (new Array(n));
var inst_8254 = inst_8253;
var inst_8255 = (0);
var state_8290__$1 = (function (){var statearr_8293 = state_8290;
(statearr_8293[(7)] = inst_8255);

(statearr_8293[(8)] = inst_8254);

return statearr_8293;
})();
var statearr_8294_8320 = state_8290__$1;
(statearr_8294_8320[(2)] = null);

(statearr_8294_8320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8291 === (4))){
var inst_8258 = (state_8290[(9)]);
var inst_8258__$1 = (state_8290[(2)]);
var inst_8259 = (inst_8258__$1 == null);
var inst_8260 = cljs.core.not.call(null,inst_8259);
var state_8290__$1 = (function (){var statearr_8295 = state_8290;
(statearr_8295[(9)] = inst_8258__$1);

return statearr_8295;
})();
if(inst_8260){
var statearr_8296_8321 = state_8290__$1;
(statearr_8296_8321[(1)] = (5));

} else {
var statearr_8297_8322 = state_8290__$1;
(statearr_8297_8322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8291 === (15))){
var inst_8280 = (state_8290[(2)]);
var state_8290__$1 = state_8290;
var statearr_8298_8323 = state_8290__$1;
(statearr_8298_8323[(2)] = inst_8280);

(statearr_8298_8323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8291 === (13))){
var state_8290__$1 = state_8290;
var statearr_8299_8324 = state_8290__$1;
(statearr_8299_8324[(2)] = null);

(statearr_8299_8324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8291 === (6))){
var inst_8255 = (state_8290[(7)]);
var inst_8276 = (inst_8255 > (0));
var state_8290__$1 = state_8290;
if(cljs.core.truth_(inst_8276)){
var statearr_8300_8325 = state_8290__$1;
(statearr_8300_8325[(1)] = (12));

} else {
var statearr_8301_8326 = state_8290__$1;
(statearr_8301_8326[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8291 === (3))){
var inst_8288 = (state_8290[(2)]);
var state_8290__$1 = state_8290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8290__$1,inst_8288);
} else {
if((state_val_8291 === (12))){
var inst_8254 = (state_8290[(8)]);
var inst_8278 = cljs.core.vec.call(null,inst_8254);
var state_8290__$1 = state_8290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8290__$1,(15),out,inst_8278);
} else {
if((state_val_8291 === (2))){
var state_8290__$1 = state_8290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8290__$1,(4),ch);
} else {
if((state_val_8291 === (11))){
var inst_8270 = (state_8290[(2)]);
var inst_8271 = (new Array(n));
var inst_8254 = inst_8271;
var inst_8255 = (0);
var state_8290__$1 = (function (){var statearr_8302 = state_8290;
(statearr_8302[(7)] = inst_8255);

(statearr_8302[(10)] = inst_8270);

(statearr_8302[(8)] = inst_8254);

return statearr_8302;
})();
var statearr_8303_8327 = state_8290__$1;
(statearr_8303_8327[(2)] = null);

(statearr_8303_8327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8291 === (9))){
var inst_8254 = (state_8290[(8)]);
var inst_8268 = cljs.core.vec.call(null,inst_8254);
var state_8290__$1 = state_8290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8290__$1,(11),out,inst_8268);
} else {
if((state_val_8291 === (5))){
var inst_8255 = (state_8290[(7)]);
var inst_8258 = (state_8290[(9)]);
var inst_8254 = (state_8290[(8)]);
var inst_8263 = (state_8290[(11)]);
var inst_8262 = (inst_8254[inst_8255] = inst_8258);
var inst_8263__$1 = (inst_8255 + (1));
var inst_8264 = (inst_8263__$1 < n);
var state_8290__$1 = (function (){var statearr_8304 = state_8290;
(statearr_8304[(12)] = inst_8262);

(statearr_8304[(11)] = inst_8263__$1);

return statearr_8304;
})();
if(cljs.core.truth_(inst_8264)){
var statearr_8305_8328 = state_8290__$1;
(statearr_8305_8328[(1)] = (8));

} else {
var statearr_8306_8329 = state_8290__$1;
(statearr_8306_8329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8291 === (14))){
var inst_8283 = (state_8290[(2)]);
var inst_8284 = cljs.core.async.close_BANG_.call(null,out);
var state_8290__$1 = (function (){var statearr_8308 = state_8290;
(statearr_8308[(13)] = inst_8283);

return statearr_8308;
})();
var statearr_8309_8330 = state_8290__$1;
(statearr_8309_8330[(2)] = inst_8284);

(statearr_8309_8330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8291 === (10))){
var inst_8274 = (state_8290[(2)]);
var state_8290__$1 = state_8290;
var statearr_8310_8331 = state_8290__$1;
(statearr_8310_8331[(2)] = inst_8274);

(statearr_8310_8331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8291 === (8))){
var inst_8254 = (state_8290[(8)]);
var inst_8263 = (state_8290[(11)]);
var tmp8307 = inst_8254;
var inst_8254__$1 = tmp8307;
var inst_8255 = inst_8263;
var state_8290__$1 = (function (){var statearr_8311 = state_8290;
(statearr_8311[(7)] = inst_8255);

(statearr_8311[(8)] = inst_8254__$1);

return statearr_8311;
})();
var statearr_8312_8332 = state_8290__$1;
(statearr_8312_8332[(2)] = null);

(statearr_8312_8332[(1)] = (2));


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
});})(c__6502__auto___8318,out))
;
return ((function (switch__6411__auto__,c__6502__auto___8318,out){
return (function() {
var cljs$core$async$state_machine__6412__auto__ = null;
var cljs$core$async$state_machine__6412__auto____0 = (function (){
var statearr_8313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8313[(0)] = cljs$core$async$state_machine__6412__auto__);

(statearr_8313[(1)] = (1));

return statearr_8313;
});
var cljs$core$async$state_machine__6412__auto____1 = (function (state_8290){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_8290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e8314){if((e8314 instanceof Object)){
var ex__6415__auto__ = e8314;
var statearr_8315_8333 = state_8290;
(statearr_8315_8333[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8334 = state_8290;
state_8290 = G__8334;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$state_machine__6412__auto__ = function(state_8290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6412__auto____1.call(this,state_8290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6412__auto____0;
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6412__auto____1;
return cljs$core$async$state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto___8318,out))
})();
var state__6504__auto__ = (function (){var statearr_8316 = f__6503__auto__.call(null);
(statearr_8316[(6)] = c__6502__auto___8318);

return statearr_8316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto___8318,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__8336 = arguments.length;
switch (G__8336) {
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
var c__6502__auto___8406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6502__auto___8406,out){
return (function (){
var f__6503__auto__ = (function (){var switch__6411__auto__ = ((function (c__6502__auto___8406,out){
return (function (state_8378){
var state_val_8379 = (state_8378[(1)]);
if((state_val_8379 === (7))){
var inst_8374 = (state_8378[(2)]);
var state_8378__$1 = state_8378;
var statearr_8380_8407 = state_8378__$1;
(statearr_8380_8407[(2)] = inst_8374);

(statearr_8380_8407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8379 === (1))){
var inst_8337 = [];
var inst_8338 = inst_8337;
var inst_8339 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_8378__$1 = (function (){var statearr_8381 = state_8378;
(statearr_8381[(7)] = inst_8339);

(statearr_8381[(8)] = inst_8338);

return statearr_8381;
})();
var statearr_8382_8408 = state_8378__$1;
(statearr_8382_8408[(2)] = null);

(statearr_8382_8408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8379 === (4))){
var inst_8342 = (state_8378[(9)]);
var inst_8342__$1 = (state_8378[(2)]);
var inst_8343 = (inst_8342__$1 == null);
var inst_8344 = cljs.core.not.call(null,inst_8343);
var state_8378__$1 = (function (){var statearr_8383 = state_8378;
(statearr_8383[(9)] = inst_8342__$1);

return statearr_8383;
})();
if(inst_8344){
var statearr_8384_8409 = state_8378__$1;
(statearr_8384_8409[(1)] = (5));

} else {
var statearr_8385_8410 = state_8378__$1;
(statearr_8385_8410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8379 === (15))){
var inst_8368 = (state_8378[(2)]);
var state_8378__$1 = state_8378;
var statearr_8386_8411 = state_8378__$1;
(statearr_8386_8411[(2)] = inst_8368);

(statearr_8386_8411[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8379 === (13))){
var state_8378__$1 = state_8378;
var statearr_8387_8412 = state_8378__$1;
(statearr_8387_8412[(2)] = null);

(statearr_8387_8412[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8379 === (6))){
var inst_8338 = (state_8378[(8)]);
var inst_8363 = inst_8338.length;
var inst_8364 = (inst_8363 > (0));
var state_8378__$1 = state_8378;
if(cljs.core.truth_(inst_8364)){
var statearr_8388_8413 = state_8378__$1;
(statearr_8388_8413[(1)] = (12));

} else {
var statearr_8389_8414 = state_8378__$1;
(statearr_8389_8414[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8379 === (3))){
var inst_8376 = (state_8378[(2)]);
var state_8378__$1 = state_8378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8378__$1,inst_8376);
} else {
if((state_val_8379 === (12))){
var inst_8338 = (state_8378[(8)]);
var inst_8366 = cljs.core.vec.call(null,inst_8338);
var state_8378__$1 = state_8378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8378__$1,(15),out,inst_8366);
} else {
if((state_val_8379 === (2))){
var state_8378__$1 = state_8378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8378__$1,(4),ch);
} else {
if((state_val_8379 === (11))){
var inst_8342 = (state_8378[(9)]);
var inst_8346 = (state_8378[(10)]);
var inst_8356 = (state_8378[(2)]);
var inst_8357 = [];
var inst_8358 = inst_8357.push(inst_8342);
var inst_8338 = inst_8357;
var inst_8339 = inst_8346;
var state_8378__$1 = (function (){var statearr_8390 = state_8378;
(statearr_8390[(7)] = inst_8339);

(statearr_8390[(11)] = inst_8356);

(statearr_8390[(8)] = inst_8338);

(statearr_8390[(12)] = inst_8358);

return statearr_8390;
})();
var statearr_8391_8415 = state_8378__$1;
(statearr_8391_8415[(2)] = null);

(statearr_8391_8415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8379 === (9))){
var inst_8338 = (state_8378[(8)]);
var inst_8354 = cljs.core.vec.call(null,inst_8338);
var state_8378__$1 = state_8378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8378__$1,(11),out,inst_8354);
} else {
if((state_val_8379 === (5))){
var inst_8339 = (state_8378[(7)]);
var inst_8342 = (state_8378[(9)]);
var inst_8346 = (state_8378[(10)]);
var inst_8346__$1 = f.call(null,inst_8342);
var inst_8347 = cljs.core._EQ_.call(null,inst_8346__$1,inst_8339);
var inst_8348 = cljs.core.keyword_identical_QMARK_.call(null,inst_8339,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_8349 = ((inst_8347) || (inst_8348));
var state_8378__$1 = (function (){var statearr_8392 = state_8378;
(statearr_8392[(10)] = inst_8346__$1);

return statearr_8392;
})();
if(cljs.core.truth_(inst_8349)){
var statearr_8393_8416 = state_8378__$1;
(statearr_8393_8416[(1)] = (8));

} else {
var statearr_8394_8417 = state_8378__$1;
(statearr_8394_8417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8379 === (14))){
var inst_8371 = (state_8378[(2)]);
var inst_8372 = cljs.core.async.close_BANG_.call(null,out);
var state_8378__$1 = (function (){var statearr_8396 = state_8378;
(statearr_8396[(13)] = inst_8371);

return statearr_8396;
})();
var statearr_8397_8418 = state_8378__$1;
(statearr_8397_8418[(2)] = inst_8372);

(statearr_8397_8418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8379 === (10))){
var inst_8361 = (state_8378[(2)]);
var state_8378__$1 = state_8378;
var statearr_8398_8419 = state_8378__$1;
(statearr_8398_8419[(2)] = inst_8361);

(statearr_8398_8419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8379 === (8))){
var inst_8342 = (state_8378[(9)]);
var inst_8346 = (state_8378[(10)]);
var inst_8338 = (state_8378[(8)]);
var inst_8351 = inst_8338.push(inst_8342);
var tmp8395 = inst_8338;
var inst_8338__$1 = tmp8395;
var inst_8339 = inst_8346;
var state_8378__$1 = (function (){var statearr_8399 = state_8378;
(statearr_8399[(7)] = inst_8339);

(statearr_8399[(8)] = inst_8338__$1);

(statearr_8399[(14)] = inst_8351);

return statearr_8399;
})();
var statearr_8400_8420 = state_8378__$1;
(statearr_8400_8420[(2)] = null);

(statearr_8400_8420[(1)] = (2));


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
});})(c__6502__auto___8406,out))
;
return ((function (switch__6411__auto__,c__6502__auto___8406,out){
return (function() {
var cljs$core$async$state_machine__6412__auto__ = null;
var cljs$core$async$state_machine__6412__auto____0 = (function (){
var statearr_8401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8401[(0)] = cljs$core$async$state_machine__6412__auto__);

(statearr_8401[(1)] = (1));

return statearr_8401;
});
var cljs$core$async$state_machine__6412__auto____1 = (function (state_8378){
while(true){
var ret_value__6413__auto__ = (function (){try{while(true){
var result__6414__auto__ = switch__6411__auto__.call(null,state_8378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6414__auto__;
}
break;
}
}catch (e8402){if((e8402 instanceof Object)){
var ex__6415__auto__ = e8402;
var statearr_8403_8421 = state_8378;
(statearr_8403_8421[(5)] = ex__6415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8422 = state_8378;
state_8378 = G__8422;
continue;
} else {
return ret_value__6413__auto__;
}
break;
}
});
cljs$core$async$state_machine__6412__auto__ = function(state_8378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6412__auto____1.call(this,state_8378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6412__auto____0;
cljs$core$async$state_machine__6412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6412__auto____1;
return cljs$core$async$state_machine__6412__auto__;
})()
;})(switch__6411__auto__,c__6502__auto___8406,out))
})();
var state__6504__auto__ = (function (){var statearr_8404 = f__6503__auto__.call(null);
(statearr_8404[(6)] = c__6502__auto___8406);

return statearr_8404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6504__auto__);
});})(c__6502__auto___8406,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


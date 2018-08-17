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
var G__8570 = arguments.length;
switch (G__8570) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8571 = (function (f,blockable,meta8572){
this.f = f;
this.blockable = blockable;
this.meta8572 = meta8572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8573,meta8572__$1){
var self__ = this;
var _8573__$1 = this;
return (new cljs.core.async.t_cljs$core$async8571(self__.f,self__.blockable,meta8572__$1));
});

cljs.core.async.t_cljs$core$async8571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8573){
var self__ = this;
var _8573__$1 = this;
return self__.meta8572;
});

cljs.core.async.t_cljs$core$async8571.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8571.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async8571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async8571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta8572","meta8572",-398132541,null)], null);
});

cljs.core.async.t_cljs$core$async8571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8571";

cljs.core.async.t_cljs$core$async8571.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async8571");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8571.
 */
cljs.core.async.__GT_t_cljs$core$async8571 = (function cljs$core$async$__GT_t_cljs$core$async8571(f__$1,blockable__$1,meta8572){
return (new cljs.core.async.t_cljs$core$async8571(f__$1,blockable__$1,meta8572));
});

}

return (new cljs.core.async.t_cljs$core$async8571(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__8577 = arguments.length;
switch (G__8577) {
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
var G__8580 = arguments.length;
switch (G__8580) {
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
var G__8583 = arguments.length;
switch (G__8583) {
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
var val_8585 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_8585);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_8585,ret){
return (function (){
return fn1.call(null,val_8585);
});})(val_8585,ret))
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
var G__8587 = arguments.length;
switch (G__8587) {
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
var n__4408__auto___8589 = n;
var x_8590 = (0);
while(true){
if((x_8590 < n__4408__auto___8589)){
(a[x_8590] = (0));

var G__8591 = (x_8590 + (1));
x_8590 = G__8591;
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

var G__8592 = (i + (1));
i = G__8592;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8593 = (function (flag,meta8594){
this.flag = flag;
this.meta8594 = meta8594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8595,meta8594__$1){
var self__ = this;
var _8595__$1 = this;
return (new cljs.core.async.t_cljs$core$async8593(self__.flag,meta8594__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async8593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8595){
var self__ = this;
var _8595__$1 = this;
return self__.meta8594;
});})(flag))
;

cljs.core.async.t_cljs$core$async8593.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8593.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async8593.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8593.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8593.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta8594","meta8594",-1831960828,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async8593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8593";

cljs.core.async.t_cljs$core$async8593.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async8593");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8593.
 */
cljs.core.async.__GT_t_cljs$core$async8593 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async8593(flag__$1,meta8594){
return (new cljs.core.async.t_cljs$core$async8593(flag__$1,meta8594));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async8593(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8596 = (function (flag,cb,meta8597){
this.flag = flag;
this.cb = cb;
this.meta8597 = meta8597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8598,meta8597__$1){
var self__ = this;
var _8598__$1 = this;
return (new cljs.core.async.t_cljs$core$async8596(self__.flag,self__.cb,meta8597__$1));
});

cljs.core.async.t_cljs$core$async8596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8598){
var self__ = this;
var _8598__$1 = this;
return self__.meta8597;
});

cljs.core.async.t_cljs$core$async8596.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8596.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async8596.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8596.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async8596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta8597","meta8597",-875837965,null)], null);
});

cljs.core.async.t_cljs$core$async8596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8596";

cljs.core.async.t_cljs$core$async8596.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async8596");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8596.
 */
cljs.core.async.__GT_t_cljs$core$async8596 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async8596(flag__$1,cb__$1,meta8597){
return (new cljs.core.async.t_cljs$core$async8596(flag__$1,cb__$1,meta8597));
});

}

return (new cljs.core.async.t_cljs$core$async8596(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__8599_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8599_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8600_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8600_SHARP_,port], null));
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
var G__8601 = (i + (1));
i = G__8601;
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
var len__4531__auto___8607 = arguments.length;
var i__4532__auto___8608 = (0);
while(true){
if((i__4532__auto___8608 < len__4531__auto___8607)){
args__4534__auto__.push((arguments[i__4532__auto___8608]));

var G__8609 = (i__4532__auto___8608 + (1));
i__4532__auto___8608 = G__8609;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8604){
var map__8605 = p__8604;
var map__8605__$1 = ((((!((map__8605 == null)))?(((((map__8605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8605):map__8605);
var opts = map__8605__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8602){
var G__8603 = cljs.core.first.call(null,seq8602);
var seq8602__$1 = cljs.core.next.call(null,seq8602);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8603,seq8602__$1);
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
var G__8611 = arguments.length;
switch (G__8611) {
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
var c__6646__auto___8657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto___8657){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto___8657){
return (function (state_8635){
var state_val_8636 = (state_8635[(1)]);
if((state_val_8636 === (7))){
var inst_8631 = (state_8635[(2)]);
var state_8635__$1 = state_8635;
var statearr_8637_8658 = state_8635__$1;
(statearr_8637_8658[(2)] = inst_8631);

(statearr_8637_8658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8636 === (1))){
var state_8635__$1 = state_8635;
var statearr_8638_8659 = state_8635__$1;
(statearr_8638_8659[(2)] = null);

(statearr_8638_8659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8636 === (4))){
var inst_8614 = (state_8635[(7)]);
var inst_8614__$1 = (state_8635[(2)]);
var inst_8615 = (inst_8614__$1 == null);
var state_8635__$1 = (function (){var statearr_8639 = state_8635;
(statearr_8639[(7)] = inst_8614__$1);

return statearr_8639;
})();
if(cljs.core.truth_(inst_8615)){
var statearr_8640_8660 = state_8635__$1;
(statearr_8640_8660[(1)] = (5));

} else {
var statearr_8641_8661 = state_8635__$1;
(statearr_8641_8661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8636 === (13))){
var state_8635__$1 = state_8635;
var statearr_8642_8662 = state_8635__$1;
(statearr_8642_8662[(2)] = null);

(statearr_8642_8662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8636 === (6))){
var inst_8614 = (state_8635[(7)]);
var state_8635__$1 = state_8635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8635__$1,(11),to,inst_8614);
} else {
if((state_val_8636 === (3))){
var inst_8633 = (state_8635[(2)]);
var state_8635__$1 = state_8635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8635__$1,inst_8633);
} else {
if((state_val_8636 === (12))){
var state_8635__$1 = state_8635;
var statearr_8643_8663 = state_8635__$1;
(statearr_8643_8663[(2)] = null);

(statearr_8643_8663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8636 === (2))){
var state_8635__$1 = state_8635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8635__$1,(4),from);
} else {
if((state_val_8636 === (11))){
var inst_8624 = (state_8635[(2)]);
var state_8635__$1 = state_8635;
if(cljs.core.truth_(inst_8624)){
var statearr_8644_8664 = state_8635__$1;
(statearr_8644_8664[(1)] = (12));

} else {
var statearr_8645_8665 = state_8635__$1;
(statearr_8645_8665[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8636 === (9))){
var state_8635__$1 = state_8635;
var statearr_8646_8666 = state_8635__$1;
(statearr_8646_8666[(2)] = null);

(statearr_8646_8666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8636 === (5))){
var state_8635__$1 = state_8635;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8647_8667 = state_8635__$1;
(statearr_8647_8667[(1)] = (8));

} else {
var statearr_8648_8668 = state_8635__$1;
(statearr_8648_8668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8636 === (14))){
var inst_8629 = (state_8635[(2)]);
var state_8635__$1 = state_8635;
var statearr_8649_8669 = state_8635__$1;
(statearr_8649_8669[(2)] = inst_8629);

(statearr_8649_8669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8636 === (10))){
var inst_8621 = (state_8635[(2)]);
var state_8635__$1 = state_8635;
var statearr_8650_8670 = state_8635__$1;
(statearr_8650_8670[(2)] = inst_8621);

(statearr_8650_8670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8636 === (8))){
var inst_8618 = cljs.core.async.close_BANG_.call(null,to);
var state_8635__$1 = state_8635;
var statearr_8651_8671 = state_8635__$1;
(statearr_8651_8671[(2)] = inst_8618);

(statearr_8651_8671[(1)] = (10));


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
});})(c__6646__auto___8657))
;
return ((function (switch__6487__auto__,c__6646__auto___8657){
return (function() {
var cljs$core$async$state_machine__6488__auto__ = null;
var cljs$core$async$state_machine__6488__auto____0 = (function (){
var statearr_8652 = [null,null,null,null,null,null,null,null];
(statearr_8652[(0)] = cljs$core$async$state_machine__6488__auto__);

(statearr_8652[(1)] = (1));

return statearr_8652;
});
var cljs$core$async$state_machine__6488__auto____1 = (function (state_8635){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_8635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e8653){if((e8653 instanceof Object)){
var ex__6491__auto__ = e8653;
var statearr_8654_8672 = state_8635;
(statearr_8654_8672[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8673 = state_8635;
state_8635 = G__8673;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$state_machine__6488__auto__ = function(state_8635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6488__auto____1.call(this,state_8635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6488__auto____0;
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6488__auto____1;
return cljs$core$async$state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto___8657))
})();
var state__6648__auto__ = (function (){var statearr_8655 = f__6647__auto__.call(null);
(statearr_8655[(6)] = c__6646__auto___8657);

return statearr_8655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto___8657))
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
return (function (p__8674){
var vec__8675 = p__8674;
var v = cljs.core.nth.call(null,vec__8675,(0),null);
var p = cljs.core.nth.call(null,vec__8675,(1),null);
var job = vec__8675;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6646__auto___8846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto___8846,res,vec__8675,v,p,job,jobs,results){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto___8846,res,vec__8675,v,p,job,jobs,results){
return (function (state_8682){
var state_val_8683 = (state_8682[(1)]);
if((state_val_8683 === (1))){
var state_8682__$1 = state_8682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8682__$1,(2),res,v);
} else {
if((state_val_8683 === (2))){
var inst_8679 = (state_8682[(2)]);
var inst_8680 = cljs.core.async.close_BANG_.call(null,res);
var state_8682__$1 = (function (){var statearr_8684 = state_8682;
(statearr_8684[(7)] = inst_8679);

return statearr_8684;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8682__$1,inst_8680);
} else {
return null;
}
}
});})(c__6646__auto___8846,res,vec__8675,v,p,job,jobs,results))
;
return ((function (switch__6487__auto__,c__6646__auto___8846,res,vec__8675,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____0 = (function (){
var statearr_8685 = [null,null,null,null,null,null,null,null];
(statearr_8685[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__);

(statearr_8685[(1)] = (1));

return statearr_8685;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____1 = (function (state_8682){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_8682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e8686){if((e8686 instanceof Object)){
var ex__6491__auto__ = e8686;
var statearr_8687_8847 = state_8682;
(statearr_8687_8847[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8848 = state_8682;
state_8682 = G__8848;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__ = function(state_8682){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____1.call(this,state_8682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto___8846,res,vec__8675,v,p,job,jobs,results))
})();
var state__6648__auto__ = (function (){var statearr_8688 = f__6647__auto__.call(null);
(statearr_8688[(6)] = c__6646__auto___8846);

return statearr_8688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto___8846,res,vec__8675,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__8689){
var vec__8690 = p__8689;
var v = cljs.core.nth.call(null,vec__8690,(0),null);
var p = cljs.core.nth.call(null,vec__8690,(1),null);
var job = vec__8690;
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
var n__4408__auto___8849 = n;
var __8850 = (0);
while(true){
if((__8850 < n__4408__auto___8849)){
var G__8693_8851 = type;
var G__8693_8852__$1 = (((G__8693_8851 instanceof cljs.core.Keyword))?G__8693_8851.fqn:null);
switch (G__8693_8852__$1) {
case "compute":
var c__6646__auto___8854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8850,c__6646__auto___8854,G__8693_8851,G__8693_8852__$1,n__4408__auto___8849,jobs,results,process,async){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (__8850,c__6646__auto___8854,G__8693_8851,G__8693_8852__$1,n__4408__auto___8849,jobs,results,process,async){
return (function (state_8706){
var state_val_8707 = (state_8706[(1)]);
if((state_val_8707 === (1))){
var state_8706__$1 = state_8706;
var statearr_8708_8855 = state_8706__$1;
(statearr_8708_8855[(2)] = null);

(statearr_8708_8855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8707 === (2))){
var state_8706__$1 = state_8706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8706__$1,(4),jobs);
} else {
if((state_val_8707 === (3))){
var inst_8704 = (state_8706[(2)]);
var state_8706__$1 = state_8706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8706__$1,inst_8704);
} else {
if((state_val_8707 === (4))){
var inst_8696 = (state_8706[(2)]);
var inst_8697 = process.call(null,inst_8696);
var state_8706__$1 = state_8706;
if(cljs.core.truth_(inst_8697)){
var statearr_8709_8856 = state_8706__$1;
(statearr_8709_8856[(1)] = (5));

} else {
var statearr_8710_8857 = state_8706__$1;
(statearr_8710_8857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8707 === (5))){
var state_8706__$1 = state_8706;
var statearr_8711_8858 = state_8706__$1;
(statearr_8711_8858[(2)] = null);

(statearr_8711_8858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8707 === (6))){
var state_8706__$1 = state_8706;
var statearr_8712_8859 = state_8706__$1;
(statearr_8712_8859[(2)] = null);

(statearr_8712_8859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8707 === (7))){
var inst_8702 = (state_8706[(2)]);
var state_8706__$1 = state_8706;
var statearr_8713_8860 = state_8706__$1;
(statearr_8713_8860[(2)] = inst_8702);

(statearr_8713_8860[(1)] = (3));


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
});})(__8850,c__6646__auto___8854,G__8693_8851,G__8693_8852__$1,n__4408__auto___8849,jobs,results,process,async))
;
return ((function (__8850,switch__6487__auto__,c__6646__auto___8854,G__8693_8851,G__8693_8852__$1,n__4408__auto___8849,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____0 = (function (){
var statearr_8714 = [null,null,null,null,null,null,null];
(statearr_8714[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__);

(statearr_8714[(1)] = (1));

return statearr_8714;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____1 = (function (state_8706){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_8706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e8715){if((e8715 instanceof Object)){
var ex__6491__auto__ = e8715;
var statearr_8716_8861 = state_8706;
(statearr_8716_8861[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8862 = state_8706;
state_8706 = G__8862;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__ = function(state_8706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____1.call(this,state_8706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__;
})()
;})(__8850,switch__6487__auto__,c__6646__auto___8854,G__8693_8851,G__8693_8852__$1,n__4408__auto___8849,jobs,results,process,async))
})();
var state__6648__auto__ = (function (){var statearr_8717 = f__6647__auto__.call(null);
(statearr_8717[(6)] = c__6646__auto___8854);

return statearr_8717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(__8850,c__6646__auto___8854,G__8693_8851,G__8693_8852__$1,n__4408__auto___8849,jobs,results,process,async))
);


break;
case "async":
var c__6646__auto___8863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8850,c__6646__auto___8863,G__8693_8851,G__8693_8852__$1,n__4408__auto___8849,jobs,results,process,async){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (__8850,c__6646__auto___8863,G__8693_8851,G__8693_8852__$1,n__4408__auto___8849,jobs,results,process,async){
return (function (state_8730){
var state_val_8731 = (state_8730[(1)]);
if((state_val_8731 === (1))){
var state_8730__$1 = state_8730;
var statearr_8732_8864 = state_8730__$1;
(statearr_8732_8864[(2)] = null);

(statearr_8732_8864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8731 === (2))){
var state_8730__$1 = state_8730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8730__$1,(4),jobs);
} else {
if((state_val_8731 === (3))){
var inst_8728 = (state_8730[(2)]);
var state_8730__$1 = state_8730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8730__$1,inst_8728);
} else {
if((state_val_8731 === (4))){
var inst_8720 = (state_8730[(2)]);
var inst_8721 = async.call(null,inst_8720);
var state_8730__$1 = state_8730;
if(cljs.core.truth_(inst_8721)){
var statearr_8733_8865 = state_8730__$1;
(statearr_8733_8865[(1)] = (5));

} else {
var statearr_8734_8866 = state_8730__$1;
(statearr_8734_8866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8731 === (5))){
var state_8730__$1 = state_8730;
var statearr_8735_8867 = state_8730__$1;
(statearr_8735_8867[(2)] = null);

(statearr_8735_8867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8731 === (6))){
var state_8730__$1 = state_8730;
var statearr_8736_8868 = state_8730__$1;
(statearr_8736_8868[(2)] = null);

(statearr_8736_8868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8731 === (7))){
var inst_8726 = (state_8730[(2)]);
var state_8730__$1 = state_8730;
var statearr_8737_8869 = state_8730__$1;
(statearr_8737_8869[(2)] = inst_8726);

(statearr_8737_8869[(1)] = (3));


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
});})(__8850,c__6646__auto___8863,G__8693_8851,G__8693_8852__$1,n__4408__auto___8849,jobs,results,process,async))
;
return ((function (__8850,switch__6487__auto__,c__6646__auto___8863,G__8693_8851,G__8693_8852__$1,n__4408__auto___8849,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____0 = (function (){
var statearr_8738 = [null,null,null,null,null,null,null];
(statearr_8738[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__);

(statearr_8738[(1)] = (1));

return statearr_8738;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____1 = (function (state_8730){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_8730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e8739){if((e8739 instanceof Object)){
var ex__6491__auto__ = e8739;
var statearr_8740_8870 = state_8730;
(statearr_8740_8870[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8871 = state_8730;
state_8730 = G__8871;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__ = function(state_8730){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____1.call(this,state_8730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__;
})()
;})(__8850,switch__6487__auto__,c__6646__auto___8863,G__8693_8851,G__8693_8852__$1,n__4408__auto___8849,jobs,results,process,async))
})();
var state__6648__auto__ = (function (){var statearr_8741 = f__6647__auto__.call(null);
(statearr_8741[(6)] = c__6646__auto___8863);

return statearr_8741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(__8850,c__6646__auto___8863,G__8693_8851,G__8693_8852__$1,n__4408__auto___8849,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8693_8852__$1)].join('')));

}

var G__8872 = (__8850 + (1));
__8850 = G__8872;
continue;
} else {
}
break;
}

var c__6646__auto___8873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto___8873,jobs,results,process,async){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto___8873,jobs,results,process,async){
return (function (state_8763){
var state_val_8764 = (state_8763[(1)]);
if((state_val_8764 === (1))){
var state_8763__$1 = state_8763;
var statearr_8765_8874 = state_8763__$1;
(statearr_8765_8874[(2)] = null);

(statearr_8765_8874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8764 === (2))){
var state_8763__$1 = state_8763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8763__$1,(4),from);
} else {
if((state_val_8764 === (3))){
var inst_8761 = (state_8763[(2)]);
var state_8763__$1 = state_8763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8763__$1,inst_8761);
} else {
if((state_val_8764 === (4))){
var inst_8744 = (state_8763[(7)]);
var inst_8744__$1 = (state_8763[(2)]);
var inst_8745 = (inst_8744__$1 == null);
var state_8763__$1 = (function (){var statearr_8766 = state_8763;
(statearr_8766[(7)] = inst_8744__$1);

return statearr_8766;
})();
if(cljs.core.truth_(inst_8745)){
var statearr_8767_8875 = state_8763__$1;
(statearr_8767_8875[(1)] = (5));

} else {
var statearr_8768_8876 = state_8763__$1;
(statearr_8768_8876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8764 === (5))){
var inst_8747 = cljs.core.async.close_BANG_.call(null,jobs);
var state_8763__$1 = state_8763;
var statearr_8769_8877 = state_8763__$1;
(statearr_8769_8877[(2)] = inst_8747);

(statearr_8769_8877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8764 === (6))){
var inst_8744 = (state_8763[(7)]);
var inst_8749 = (state_8763[(8)]);
var inst_8749__$1 = cljs.core.async.chan.call(null,(1));
var inst_8750 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8751 = [inst_8744,inst_8749__$1];
var inst_8752 = (new cljs.core.PersistentVector(null,2,(5),inst_8750,inst_8751,null));
var state_8763__$1 = (function (){var statearr_8770 = state_8763;
(statearr_8770[(8)] = inst_8749__$1);

return statearr_8770;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8763__$1,(8),jobs,inst_8752);
} else {
if((state_val_8764 === (7))){
var inst_8759 = (state_8763[(2)]);
var state_8763__$1 = state_8763;
var statearr_8771_8878 = state_8763__$1;
(statearr_8771_8878[(2)] = inst_8759);

(statearr_8771_8878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8764 === (8))){
var inst_8749 = (state_8763[(8)]);
var inst_8754 = (state_8763[(2)]);
var state_8763__$1 = (function (){var statearr_8772 = state_8763;
(statearr_8772[(9)] = inst_8754);

return statearr_8772;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8763__$1,(9),results,inst_8749);
} else {
if((state_val_8764 === (9))){
var inst_8756 = (state_8763[(2)]);
var state_8763__$1 = (function (){var statearr_8773 = state_8763;
(statearr_8773[(10)] = inst_8756);

return statearr_8773;
})();
var statearr_8774_8879 = state_8763__$1;
(statearr_8774_8879[(2)] = null);

(statearr_8774_8879[(1)] = (2));


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
});})(c__6646__auto___8873,jobs,results,process,async))
;
return ((function (switch__6487__auto__,c__6646__auto___8873,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____0 = (function (){
var statearr_8775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8775[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__);

(statearr_8775[(1)] = (1));

return statearr_8775;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____1 = (function (state_8763){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_8763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e8776){if((e8776 instanceof Object)){
var ex__6491__auto__ = e8776;
var statearr_8777_8880 = state_8763;
(statearr_8777_8880[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8881 = state_8763;
state_8763 = G__8881;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__ = function(state_8763){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____1.call(this,state_8763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto___8873,jobs,results,process,async))
})();
var state__6648__auto__ = (function (){var statearr_8778 = f__6647__auto__.call(null);
(statearr_8778[(6)] = c__6646__auto___8873);

return statearr_8778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto___8873,jobs,results,process,async))
);


var c__6646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto__,jobs,results,process,async){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto__,jobs,results,process,async){
return (function (state_8816){
var state_val_8817 = (state_8816[(1)]);
if((state_val_8817 === (7))){
var inst_8812 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
var statearr_8818_8882 = state_8816__$1;
(statearr_8818_8882[(2)] = inst_8812);

(statearr_8818_8882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (20))){
var state_8816__$1 = state_8816;
var statearr_8819_8883 = state_8816__$1;
(statearr_8819_8883[(2)] = null);

(statearr_8819_8883[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (1))){
var state_8816__$1 = state_8816;
var statearr_8820_8884 = state_8816__$1;
(statearr_8820_8884[(2)] = null);

(statearr_8820_8884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (4))){
var inst_8781 = (state_8816[(7)]);
var inst_8781__$1 = (state_8816[(2)]);
var inst_8782 = (inst_8781__$1 == null);
var state_8816__$1 = (function (){var statearr_8821 = state_8816;
(statearr_8821[(7)] = inst_8781__$1);

return statearr_8821;
})();
if(cljs.core.truth_(inst_8782)){
var statearr_8822_8885 = state_8816__$1;
(statearr_8822_8885[(1)] = (5));

} else {
var statearr_8823_8886 = state_8816__$1;
(statearr_8823_8886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (15))){
var inst_8794 = (state_8816[(8)]);
var state_8816__$1 = state_8816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8816__$1,(18),to,inst_8794);
} else {
if((state_val_8817 === (21))){
var inst_8807 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
var statearr_8824_8887 = state_8816__$1;
(statearr_8824_8887[(2)] = inst_8807);

(statearr_8824_8887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (13))){
var inst_8809 = (state_8816[(2)]);
var state_8816__$1 = (function (){var statearr_8825 = state_8816;
(statearr_8825[(9)] = inst_8809);

return statearr_8825;
})();
var statearr_8826_8888 = state_8816__$1;
(statearr_8826_8888[(2)] = null);

(statearr_8826_8888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (6))){
var inst_8781 = (state_8816[(7)]);
var state_8816__$1 = state_8816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8816__$1,(11),inst_8781);
} else {
if((state_val_8817 === (17))){
var inst_8802 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
if(cljs.core.truth_(inst_8802)){
var statearr_8827_8889 = state_8816__$1;
(statearr_8827_8889[(1)] = (19));

} else {
var statearr_8828_8890 = state_8816__$1;
(statearr_8828_8890[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (3))){
var inst_8814 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8816__$1,inst_8814);
} else {
if((state_val_8817 === (12))){
var inst_8791 = (state_8816[(10)]);
var state_8816__$1 = state_8816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8816__$1,(14),inst_8791);
} else {
if((state_val_8817 === (2))){
var state_8816__$1 = state_8816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8816__$1,(4),results);
} else {
if((state_val_8817 === (19))){
var state_8816__$1 = state_8816;
var statearr_8829_8891 = state_8816__$1;
(statearr_8829_8891[(2)] = null);

(statearr_8829_8891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (11))){
var inst_8791 = (state_8816[(2)]);
var state_8816__$1 = (function (){var statearr_8830 = state_8816;
(statearr_8830[(10)] = inst_8791);

return statearr_8830;
})();
var statearr_8831_8892 = state_8816__$1;
(statearr_8831_8892[(2)] = null);

(statearr_8831_8892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (9))){
var state_8816__$1 = state_8816;
var statearr_8832_8893 = state_8816__$1;
(statearr_8832_8893[(2)] = null);

(statearr_8832_8893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (5))){
var state_8816__$1 = state_8816;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8833_8894 = state_8816__$1;
(statearr_8833_8894[(1)] = (8));

} else {
var statearr_8834_8895 = state_8816__$1;
(statearr_8834_8895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (14))){
var inst_8796 = (state_8816[(11)]);
var inst_8794 = (state_8816[(8)]);
var inst_8794__$1 = (state_8816[(2)]);
var inst_8795 = (inst_8794__$1 == null);
var inst_8796__$1 = cljs.core.not.call(null,inst_8795);
var state_8816__$1 = (function (){var statearr_8835 = state_8816;
(statearr_8835[(11)] = inst_8796__$1);

(statearr_8835[(8)] = inst_8794__$1);

return statearr_8835;
})();
if(inst_8796__$1){
var statearr_8836_8896 = state_8816__$1;
(statearr_8836_8896[(1)] = (15));

} else {
var statearr_8837_8897 = state_8816__$1;
(statearr_8837_8897[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (16))){
var inst_8796 = (state_8816[(11)]);
var state_8816__$1 = state_8816;
var statearr_8838_8898 = state_8816__$1;
(statearr_8838_8898[(2)] = inst_8796);

(statearr_8838_8898[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (10))){
var inst_8788 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
var statearr_8839_8899 = state_8816__$1;
(statearr_8839_8899[(2)] = inst_8788);

(statearr_8839_8899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (18))){
var inst_8799 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
var statearr_8840_8900 = state_8816__$1;
(statearr_8840_8900[(2)] = inst_8799);

(statearr_8840_8900[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (8))){
var inst_8785 = cljs.core.async.close_BANG_.call(null,to);
var state_8816__$1 = state_8816;
var statearr_8841_8901 = state_8816__$1;
(statearr_8841_8901[(2)] = inst_8785);

(statearr_8841_8901[(1)] = (10));


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
});})(c__6646__auto__,jobs,results,process,async))
;
return ((function (switch__6487__auto__,c__6646__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____0 = (function (){
var statearr_8842 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8842[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__);

(statearr_8842[(1)] = (1));

return statearr_8842;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____1 = (function (state_8816){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_8816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e8843){if((e8843 instanceof Object)){
var ex__6491__auto__ = e8843;
var statearr_8844_8902 = state_8816;
(statearr_8844_8902[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8903 = state_8816;
state_8816 = G__8903;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__ = function(state_8816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____1.call(this,state_8816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6488__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto__,jobs,results,process,async))
})();
var state__6648__auto__ = (function (){var statearr_8845 = f__6647__auto__.call(null);
(statearr_8845[(6)] = c__6646__auto__);

return statearr_8845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto__,jobs,results,process,async))
);

return c__6646__auto__;
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
var G__8905 = arguments.length;
switch (G__8905) {
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
var G__8908 = arguments.length;
switch (G__8908) {
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
var G__8911 = arguments.length;
switch (G__8911) {
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
var c__6646__auto___8960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto___8960,tc,fc){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto___8960,tc,fc){
return (function (state_8937){
var state_val_8938 = (state_8937[(1)]);
if((state_val_8938 === (7))){
var inst_8933 = (state_8937[(2)]);
var state_8937__$1 = state_8937;
var statearr_8939_8961 = state_8937__$1;
(statearr_8939_8961[(2)] = inst_8933);

(statearr_8939_8961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8938 === (1))){
var state_8937__$1 = state_8937;
var statearr_8940_8962 = state_8937__$1;
(statearr_8940_8962[(2)] = null);

(statearr_8940_8962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8938 === (4))){
var inst_8914 = (state_8937[(7)]);
var inst_8914__$1 = (state_8937[(2)]);
var inst_8915 = (inst_8914__$1 == null);
var state_8937__$1 = (function (){var statearr_8941 = state_8937;
(statearr_8941[(7)] = inst_8914__$1);

return statearr_8941;
})();
if(cljs.core.truth_(inst_8915)){
var statearr_8942_8963 = state_8937__$1;
(statearr_8942_8963[(1)] = (5));

} else {
var statearr_8943_8964 = state_8937__$1;
(statearr_8943_8964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8938 === (13))){
var state_8937__$1 = state_8937;
var statearr_8944_8965 = state_8937__$1;
(statearr_8944_8965[(2)] = null);

(statearr_8944_8965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8938 === (6))){
var inst_8914 = (state_8937[(7)]);
var inst_8920 = p.call(null,inst_8914);
var state_8937__$1 = state_8937;
if(cljs.core.truth_(inst_8920)){
var statearr_8945_8966 = state_8937__$1;
(statearr_8945_8966[(1)] = (9));

} else {
var statearr_8946_8967 = state_8937__$1;
(statearr_8946_8967[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8938 === (3))){
var inst_8935 = (state_8937[(2)]);
var state_8937__$1 = state_8937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8937__$1,inst_8935);
} else {
if((state_val_8938 === (12))){
var state_8937__$1 = state_8937;
var statearr_8947_8968 = state_8937__$1;
(statearr_8947_8968[(2)] = null);

(statearr_8947_8968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8938 === (2))){
var state_8937__$1 = state_8937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8937__$1,(4),ch);
} else {
if((state_val_8938 === (11))){
var inst_8914 = (state_8937[(7)]);
var inst_8924 = (state_8937[(2)]);
var state_8937__$1 = state_8937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8937__$1,(8),inst_8924,inst_8914);
} else {
if((state_val_8938 === (9))){
var state_8937__$1 = state_8937;
var statearr_8948_8969 = state_8937__$1;
(statearr_8948_8969[(2)] = tc);

(statearr_8948_8969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8938 === (5))){
var inst_8917 = cljs.core.async.close_BANG_.call(null,tc);
var inst_8918 = cljs.core.async.close_BANG_.call(null,fc);
var state_8937__$1 = (function (){var statearr_8949 = state_8937;
(statearr_8949[(8)] = inst_8917);

return statearr_8949;
})();
var statearr_8950_8970 = state_8937__$1;
(statearr_8950_8970[(2)] = inst_8918);

(statearr_8950_8970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8938 === (14))){
var inst_8931 = (state_8937[(2)]);
var state_8937__$1 = state_8937;
var statearr_8951_8971 = state_8937__$1;
(statearr_8951_8971[(2)] = inst_8931);

(statearr_8951_8971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8938 === (10))){
var state_8937__$1 = state_8937;
var statearr_8952_8972 = state_8937__$1;
(statearr_8952_8972[(2)] = fc);

(statearr_8952_8972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8938 === (8))){
var inst_8926 = (state_8937[(2)]);
var state_8937__$1 = state_8937;
if(cljs.core.truth_(inst_8926)){
var statearr_8953_8973 = state_8937__$1;
(statearr_8953_8973[(1)] = (12));

} else {
var statearr_8954_8974 = state_8937__$1;
(statearr_8954_8974[(1)] = (13));

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
});})(c__6646__auto___8960,tc,fc))
;
return ((function (switch__6487__auto__,c__6646__auto___8960,tc,fc){
return (function() {
var cljs$core$async$state_machine__6488__auto__ = null;
var cljs$core$async$state_machine__6488__auto____0 = (function (){
var statearr_8955 = [null,null,null,null,null,null,null,null,null];
(statearr_8955[(0)] = cljs$core$async$state_machine__6488__auto__);

(statearr_8955[(1)] = (1));

return statearr_8955;
});
var cljs$core$async$state_machine__6488__auto____1 = (function (state_8937){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_8937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e8956){if((e8956 instanceof Object)){
var ex__6491__auto__ = e8956;
var statearr_8957_8975 = state_8937;
(statearr_8957_8975[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8976 = state_8937;
state_8937 = G__8976;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$state_machine__6488__auto__ = function(state_8937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6488__auto____1.call(this,state_8937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6488__auto____0;
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6488__auto____1;
return cljs$core$async$state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto___8960,tc,fc))
})();
var state__6648__auto__ = (function (){var statearr_8958 = f__6647__auto__.call(null);
(statearr_8958[(6)] = c__6646__auto___8960);

return statearr_8958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto___8960,tc,fc))
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
var c__6646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto__){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto__){
return (function (state_8997){
var state_val_8998 = (state_8997[(1)]);
if((state_val_8998 === (7))){
var inst_8993 = (state_8997[(2)]);
var state_8997__$1 = state_8997;
var statearr_8999_9017 = state_8997__$1;
(statearr_8999_9017[(2)] = inst_8993);

(statearr_8999_9017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8998 === (1))){
var inst_8977 = init;
var state_8997__$1 = (function (){var statearr_9000 = state_8997;
(statearr_9000[(7)] = inst_8977);

return statearr_9000;
})();
var statearr_9001_9018 = state_8997__$1;
(statearr_9001_9018[(2)] = null);

(statearr_9001_9018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8998 === (4))){
var inst_8980 = (state_8997[(8)]);
var inst_8980__$1 = (state_8997[(2)]);
var inst_8981 = (inst_8980__$1 == null);
var state_8997__$1 = (function (){var statearr_9002 = state_8997;
(statearr_9002[(8)] = inst_8980__$1);

return statearr_9002;
})();
if(cljs.core.truth_(inst_8981)){
var statearr_9003_9019 = state_8997__$1;
(statearr_9003_9019[(1)] = (5));

} else {
var statearr_9004_9020 = state_8997__$1;
(statearr_9004_9020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8998 === (6))){
var inst_8984 = (state_8997[(9)]);
var inst_8977 = (state_8997[(7)]);
var inst_8980 = (state_8997[(8)]);
var inst_8984__$1 = f.call(null,inst_8977,inst_8980);
var inst_8985 = cljs.core.reduced_QMARK_.call(null,inst_8984__$1);
var state_8997__$1 = (function (){var statearr_9005 = state_8997;
(statearr_9005[(9)] = inst_8984__$1);

return statearr_9005;
})();
if(inst_8985){
var statearr_9006_9021 = state_8997__$1;
(statearr_9006_9021[(1)] = (8));

} else {
var statearr_9007_9022 = state_8997__$1;
(statearr_9007_9022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8998 === (3))){
var inst_8995 = (state_8997[(2)]);
var state_8997__$1 = state_8997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8997__$1,inst_8995);
} else {
if((state_val_8998 === (2))){
var state_8997__$1 = state_8997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8997__$1,(4),ch);
} else {
if((state_val_8998 === (9))){
var inst_8984 = (state_8997[(9)]);
var inst_8977 = inst_8984;
var state_8997__$1 = (function (){var statearr_9008 = state_8997;
(statearr_9008[(7)] = inst_8977);

return statearr_9008;
})();
var statearr_9009_9023 = state_8997__$1;
(statearr_9009_9023[(2)] = null);

(statearr_9009_9023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8998 === (5))){
var inst_8977 = (state_8997[(7)]);
var state_8997__$1 = state_8997;
var statearr_9010_9024 = state_8997__$1;
(statearr_9010_9024[(2)] = inst_8977);

(statearr_9010_9024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8998 === (10))){
var inst_8991 = (state_8997[(2)]);
var state_8997__$1 = state_8997;
var statearr_9011_9025 = state_8997__$1;
(statearr_9011_9025[(2)] = inst_8991);

(statearr_9011_9025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8998 === (8))){
var inst_8984 = (state_8997[(9)]);
var inst_8987 = cljs.core.deref.call(null,inst_8984);
var state_8997__$1 = state_8997;
var statearr_9012_9026 = state_8997__$1;
(statearr_9012_9026[(2)] = inst_8987);

(statearr_9012_9026[(1)] = (10));


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
});})(c__6646__auto__))
;
return ((function (switch__6487__auto__,c__6646__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6488__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6488__auto____0 = (function (){
var statearr_9013 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9013[(0)] = cljs$core$async$reduce_$_state_machine__6488__auto__);

(statearr_9013[(1)] = (1));

return statearr_9013;
});
var cljs$core$async$reduce_$_state_machine__6488__auto____1 = (function (state_8997){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_8997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e9014){if((e9014 instanceof Object)){
var ex__6491__auto__ = e9014;
var statearr_9015_9027 = state_8997;
(statearr_9015_9027[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9028 = state_8997;
state_8997 = G__9028;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6488__auto__ = function(state_8997){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6488__auto____1.call(this,state_8997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6488__auto____0;
cljs$core$async$reduce_$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6488__auto____1;
return cljs$core$async$reduce_$_state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto__))
})();
var state__6648__auto__ = (function (){var statearr_9016 = f__6647__auto__.call(null);
(statearr_9016[(6)] = c__6646__auto__);

return statearr_9016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto__))
);

return c__6646__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__6646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto__,f__$1){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto__,f__$1){
return (function (state_9034){
var state_val_9035 = (state_9034[(1)]);
if((state_val_9035 === (1))){
var inst_9029 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_9034__$1 = state_9034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9034__$1,(2),inst_9029);
} else {
if((state_val_9035 === (2))){
var inst_9031 = (state_9034[(2)]);
var inst_9032 = f__$1.call(null,inst_9031);
var state_9034__$1 = state_9034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9034__$1,inst_9032);
} else {
return null;
}
}
});})(c__6646__auto__,f__$1))
;
return ((function (switch__6487__auto__,c__6646__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__6488__auto__ = null;
var cljs$core$async$transduce_$_state_machine__6488__auto____0 = (function (){
var statearr_9036 = [null,null,null,null,null,null,null];
(statearr_9036[(0)] = cljs$core$async$transduce_$_state_machine__6488__auto__);

(statearr_9036[(1)] = (1));

return statearr_9036;
});
var cljs$core$async$transduce_$_state_machine__6488__auto____1 = (function (state_9034){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_9034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e9037){if((e9037 instanceof Object)){
var ex__6491__auto__ = e9037;
var statearr_9038_9040 = state_9034;
(statearr_9038_9040[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9041 = state_9034;
state_9034 = G__9041;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__6488__auto__ = function(state_9034){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__6488__auto____1.call(this,state_9034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__6488__auto____0;
cljs$core$async$transduce_$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__6488__auto____1;
return cljs$core$async$transduce_$_state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto__,f__$1))
})();
var state__6648__auto__ = (function (){var statearr_9039 = f__6647__auto__.call(null);
(statearr_9039[(6)] = c__6646__auto__);

return statearr_9039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto__,f__$1))
);

return c__6646__auto__;
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
var G__9043 = arguments.length;
switch (G__9043) {
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
var c__6646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto__){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto__){
return (function (state_9068){
var state_val_9069 = (state_9068[(1)]);
if((state_val_9069 === (7))){
var inst_9050 = (state_9068[(2)]);
var state_9068__$1 = state_9068;
var statearr_9070_9091 = state_9068__$1;
(statearr_9070_9091[(2)] = inst_9050);

(statearr_9070_9091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9069 === (1))){
var inst_9044 = cljs.core.seq.call(null,coll);
var inst_9045 = inst_9044;
var state_9068__$1 = (function (){var statearr_9071 = state_9068;
(statearr_9071[(7)] = inst_9045);

return statearr_9071;
})();
var statearr_9072_9092 = state_9068__$1;
(statearr_9072_9092[(2)] = null);

(statearr_9072_9092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9069 === (4))){
var inst_9045 = (state_9068[(7)]);
var inst_9048 = cljs.core.first.call(null,inst_9045);
var state_9068__$1 = state_9068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9068__$1,(7),ch,inst_9048);
} else {
if((state_val_9069 === (13))){
var inst_9062 = (state_9068[(2)]);
var state_9068__$1 = state_9068;
var statearr_9073_9093 = state_9068__$1;
(statearr_9073_9093[(2)] = inst_9062);

(statearr_9073_9093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9069 === (6))){
var inst_9053 = (state_9068[(2)]);
var state_9068__$1 = state_9068;
if(cljs.core.truth_(inst_9053)){
var statearr_9074_9094 = state_9068__$1;
(statearr_9074_9094[(1)] = (8));

} else {
var statearr_9075_9095 = state_9068__$1;
(statearr_9075_9095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9069 === (3))){
var inst_9066 = (state_9068[(2)]);
var state_9068__$1 = state_9068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9068__$1,inst_9066);
} else {
if((state_val_9069 === (12))){
var state_9068__$1 = state_9068;
var statearr_9076_9096 = state_9068__$1;
(statearr_9076_9096[(2)] = null);

(statearr_9076_9096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9069 === (2))){
var inst_9045 = (state_9068[(7)]);
var state_9068__$1 = state_9068;
if(cljs.core.truth_(inst_9045)){
var statearr_9077_9097 = state_9068__$1;
(statearr_9077_9097[(1)] = (4));

} else {
var statearr_9078_9098 = state_9068__$1;
(statearr_9078_9098[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9069 === (11))){
var inst_9059 = cljs.core.async.close_BANG_.call(null,ch);
var state_9068__$1 = state_9068;
var statearr_9079_9099 = state_9068__$1;
(statearr_9079_9099[(2)] = inst_9059);

(statearr_9079_9099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9069 === (9))){
var state_9068__$1 = state_9068;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9080_9100 = state_9068__$1;
(statearr_9080_9100[(1)] = (11));

} else {
var statearr_9081_9101 = state_9068__$1;
(statearr_9081_9101[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9069 === (5))){
var inst_9045 = (state_9068[(7)]);
var state_9068__$1 = state_9068;
var statearr_9082_9102 = state_9068__$1;
(statearr_9082_9102[(2)] = inst_9045);

(statearr_9082_9102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9069 === (10))){
var inst_9064 = (state_9068[(2)]);
var state_9068__$1 = state_9068;
var statearr_9083_9103 = state_9068__$1;
(statearr_9083_9103[(2)] = inst_9064);

(statearr_9083_9103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9069 === (8))){
var inst_9045 = (state_9068[(7)]);
var inst_9055 = cljs.core.next.call(null,inst_9045);
var inst_9045__$1 = inst_9055;
var state_9068__$1 = (function (){var statearr_9084 = state_9068;
(statearr_9084[(7)] = inst_9045__$1);

return statearr_9084;
})();
var statearr_9085_9104 = state_9068__$1;
(statearr_9085_9104[(2)] = null);

(statearr_9085_9104[(1)] = (2));


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
});})(c__6646__auto__))
;
return ((function (switch__6487__auto__,c__6646__auto__){
return (function() {
var cljs$core$async$state_machine__6488__auto__ = null;
var cljs$core$async$state_machine__6488__auto____0 = (function (){
var statearr_9086 = [null,null,null,null,null,null,null,null];
(statearr_9086[(0)] = cljs$core$async$state_machine__6488__auto__);

(statearr_9086[(1)] = (1));

return statearr_9086;
});
var cljs$core$async$state_machine__6488__auto____1 = (function (state_9068){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_9068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e9087){if((e9087 instanceof Object)){
var ex__6491__auto__ = e9087;
var statearr_9088_9105 = state_9068;
(statearr_9088_9105[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9106 = state_9068;
state_9068 = G__9106;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$state_machine__6488__auto__ = function(state_9068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6488__auto____1.call(this,state_9068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6488__auto____0;
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6488__auto____1;
return cljs$core$async$state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto__))
})();
var state__6648__auto__ = (function (){var statearr_9089 = f__6647__auto__.call(null);
(statearr_9089[(6)] = c__6646__auto__);

return statearr_9089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto__))
);

return c__6646__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9107 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9107 = (function (ch,cs,meta9108){
this.ch = ch;
this.cs = cs;
this.meta9108 = meta9108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9109,meta9108__$1){
var self__ = this;
var _9109__$1 = this;
return (new cljs.core.async.t_cljs$core$async9107(self__.ch,self__.cs,meta9108__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async9107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9109){
var self__ = this;
var _9109__$1 = this;
return self__.meta9108;
});})(cs))
;

cljs.core.async.t_cljs$core$async9107.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9107.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async9107.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9107.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9107.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9107.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9107.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta9108","meta9108",-2132299992,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async9107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9107";

cljs.core.async.t_cljs$core$async9107.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async9107");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9107.
 */
cljs.core.async.__GT_t_cljs$core$async9107 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async9107(ch__$1,cs__$1,meta9108){
return (new cljs.core.async.t_cljs$core$async9107(ch__$1,cs__$1,meta9108));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async9107(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6646__auto___9329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto___9329,cs,m,dchan,dctr,done){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto___9329,cs,m,dchan,dctr,done){
return (function (state_9244){
var state_val_9245 = (state_9244[(1)]);
if((state_val_9245 === (7))){
var inst_9240 = (state_9244[(2)]);
var state_9244__$1 = state_9244;
var statearr_9246_9330 = state_9244__$1;
(statearr_9246_9330[(2)] = inst_9240);

(statearr_9246_9330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (20))){
var inst_9143 = (state_9244[(7)]);
var inst_9155 = cljs.core.first.call(null,inst_9143);
var inst_9156 = cljs.core.nth.call(null,inst_9155,(0),null);
var inst_9157 = cljs.core.nth.call(null,inst_9155,(1),null);
var state_9244__$1 = (function (){var statearr_9247 = state_9244;
(statearr_9247[(8)] = inst_9156);

return statearr_9247;
})();
if(cljs.core.truth_(inst_9157)){
var statearr_9248_9331 = state_9244__$1;
(statearr_9248_9331[(1)] = (22));

} else {
var statearr_9249_9332 = state_9244__$1;
(statearr_9249_9332[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (27))){
var inst_9192 = (state_9244[(9)]);
var inst_9112 = (state_9244[(10)]);
var inst_9185 = (state_9244[(11)]);
var inst_9187 = (state_9244[(12)]);
var inst_9192__$1 = cljs.core._nth.call(null,inst_9185,inst_9187);
var inst_9193 = cljs.core.async.put_BANG_.call(null,inst_9192__$1,inst_9112,done);
var state_9244__$1 = (function (){var statearr_9250 = state_9244;
(statearr_9250[(9)] = inst_9192__$1);

return statearr_9250;
})();
if(cljs.core.truth_(inst_9193)){
var statearr_9251_9333 = state_9244__$1;
(statearr_9251_9333[(1)] = (30));

} else {
var statearr_9252_9334 = state_9244__$1;
(statearr_9252_9334[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (1))){
var state_9244__$1 = state_9244;
var statearr_9253_9335 = state_9244__$1;
(statearr_9253_9335[(2)] = null);

(statearr_9253_9335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (24))){
var inst_9143 = (state_9244[(7)]);
var inst_9162 = (state_9244[(2)]);
var inst_9163 = cljs.core.next.call(null,inst_9143);
var inst_9121 = inst_9163;
var inst_9122 = null;
var inst_9123 = (0);
var inst_9124 = (0);
var state_9244__$1 = (function (){var statearr_9254 = state_9244;
(statearr_9254[(13)] = inst_9121);

(statearr_9254[(14)] = inst_9123);

(statearr_9254[(15)] = inst_9124);

(statearr_9254[(16)] = inst_9162);

(statearr_9254[(17)] = inst_9122);

return statearr_9254;
})();
var statearr_9255_9336 = state_9244__$1;
(statearr_9255_9336[(2)] = null);

(statearr_9255_9336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (39))){
var state_9244__$1 = state_9244;
var statearr_9259_9337 = state_9244__$1;
(statearr_9259_9337[(2)] = null);

(statearr_9259_9337[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (4))){
var inst_9112 = (state_9244[(10)]);
var inst_9112__$1 = (state_9244[(2)]);
var inst_9113 = (inst_9112__$1 == null);
var state_9244__$1 = (function (){var statearr_9260 = state_9244;
(statearr_9260[(10)] = inst_9112__$1);

return statearr_9260;
})();
if(cljs.core.truth_(inst_9113)){
var statearr_9261_9338 = state_9244__$1;
(statearr_9261_9338[(1)] = (5));

} else {
var statearr_9262_9339 = state_9244__$1;
(statearr_9262_9339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (15))){
var inst_9121 = (state_9244[(13)]);
var inst_9123 = (state_9244[(14)]);
var inst_9124 = (state_9244[(15)]);
var inst_9122 = (state_9244[(17)]);
var inst_9139 = (state_9244[(2)]);
var inst_9140 = (inst_9124 + (1));
var tmp9256 = inst_9121;
var tmp9257 = inst_9123;
var tmp9258 = inst_9122;
var inst_9121__$1 = tmp9256;
var inst_9122__$1 = tmp9258;
var inst_9123__$1 = tmp9257;
var inst_9124__$1 = inst_9140;
var state_9244__$1 = (function (){var statearr_9263 = state_9244;
(statearr_9263[(18)] = inst_9139);

(statearr_9263[(13)] = inst_9121__$1);

(statearr_9263[(14)] = inst_9123__$1);

(statearr_9263[(15)] = inst_9124__$1);

(statearr_9263[(17)] = inst_9122__$1);

return statearr_9263;
})();
var statearr_9264_9340 = state_9244__$1;
(statearr_9264_9340[(2)] = null);

(statearr_9264_9340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (21))){
var inst_9166 = (state_9244[(2)]);
var state_9244__$1 = state_9244;
var statearr_9268_9341 = state_9244__$1;
(statearr_9268_9341[(2)] = inst_9166);

(statearr_9268_9341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (31))){
var inst_9192 = (state_9244[(9)]);
var inst_9196 = done.call(null,null);
var inst_9197 = cljs.core.async.untap_STAR_.call(null,m,inst_9192);
var state_9244__$1 = (function (){var statearr_9269 = state_9244;
(statearr_9269[(19)] = inst_9196);

return statearr_9269;
})();
var statearr_9270_9342 = state_9244__$1;
(statearr_9270_9342[(2)] = inst_9197);

(statearr_9270_9342[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (32))){
var inst_9186 = (state_9244[(20)]);
var inst_9184 = (state_9244[(21)]);
var inst_9185 = (state_9244[(11)]);
var inst_9187 = (state_9244[(12)]);
var inst_9199 = (state_9244[(2)]);
var inst_9200 = (inst_9187 + (1));
var tmp9265 = inst_9186;
var tmp9266 = inst_9184;
var tmp9267 = inst_9185;
var inst_9184__$1 = tmp9266;
var inst_9185__$1 = tmp9267;
var inst_9186__$1 = tmp9265;
var inst_9187__$1 = inst_9200;
var state_9244__$1 = (function (){var statearr_9271 = state_9244;
(statearr_9271[(22)] = inst_9199);

(statearr_9271[(20)] = inst_9186__$1);

(statearr_9271[(21)] = inst_9184__$1);

(statearr_9271[(11)] = inst_9185__$1);

(statearr_9271[(12)] = inst_9187__$1);

return statearr_9271;
})();
var statearr_9272_9343 = state_9244__$1;
(statearr_9272_9343[(2)] = null);

(statearr_9272_9343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (40))){
var inst_9212 = (state_9244[(23)]);
var inst_9216 = done.call(null,null);
var inst_9217 = cljs.core.async.untap_STAR_.call(null,m,inst_9212);
var state_9244__$1 = (function (){var statearr_9273 = state_9244;
(statearr_9273[(24)] = inst_9216);

return statearr_9273;
})();
var statearr_9274_9344 = state_9244__$1;
(statearr_9274_9344[(2)] = inst_9217);

(statearr_9274_9344[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (33))){
var inst_9203 = (state_9244[(25)]);
var inst_9205 = cljs.core.chunked_seq_QMARK_.call(null,inst_9203);
var state_9244__$1 = state_9244;
if(inst_9205){
var statearr_9275_9345 = state_9244__$1;
(statearr_9275_9345[(1)] = (36));

} else {
var statearr_9276_9346 = state_9244__$1;
(statearr_9276_9346[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (13))){
var inst_9133 = (state_9244[(26)]);
var inst_9136 = cljs.core.async.close_BANG_.call(null,inst_9133);
var state_9244__$1 = state_9244;
var statearr_9277_9347 = state_9244__$1;
(statearr_9277_9347[(2)] = inst_9136);

(statearr_9277_9347[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (22))){
var inst_9156 = (state_9244[(8)]);
var inst_9159 = cljs.core.async.close_BANG_.call(null,inst_9156);
var state_9244__$1 = state_9244;
var statearr_9278_9348 = state_9244__$1;
(statearr_9278_9348[(2)] = inst_9159);

(statearr_9278_9348[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (36))){
var inst_9203 = (state_9244[(25)]);
var inst_9207 = cljs.core.chunk_first.call(null,inst_9203);
var inst_9208 = cljs.core.chunk_rest.call(null,inst_9203);
var inst_9209 = cljs.core.count.call(null,inst_9207);
var inst_9184 = inst_9208;
var inst_9185 = inst_9207;
var inst_9186 = inst_9209;
var inst_9187 = (0);
var state_9244__$1 = (function (){var statearr_9279 = state_9244;
(statearr_9279[(20)] = inst_9186);

(statearr_9279[(21)] = inst_9184);

(statearr_9279[(11)] = inst_9185);

(statearr_9279[(12)] = inst_9187);

return statearr_9279;
})();
var statearr_9280_9349 = state_9244__$1;
(statearr_9280_9349[(2)] = null);

(statearr_9280_9349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (41))){
var inst_9203 = (state_9244[(25)]);
var inst_9219 = (state_9244[(2)]);
var inst_9220 = cljs.core.next.call(null,inst_9203);
var inst_9184 = inst_9220;
var inst_9185 = null;
var inst_9186 = (0);
var inst_9187 = (0);
var state_9244__$1 = (function (){var statearr_9281 = state_9244;
(statearr_9281[(20)] = inst_9186);

(statearr_9281[(21)] = inst_9184);

(statearr_9281[(11)] = inst_9185);

(statearr_9281[(12)] = inst_9187);

(statearr_9281[(27)] = inst_9219);

return statearr_9281;
})();
var statearr_9282_9350 = state_9244__$1;
(statearr_9282_9350[(2)] = null);

(statearr_9282_9350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (43))){
var state_9244__$1 = state_9244;
var statearr_9283_9351 = state_9244__$1;
(statearr_9283_9351[(2)] = null);

(statearr_9283_9351[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (29))){
var inst_9228 = (state_9244[(2)]);
var state_9244__$1 = state_9244;
var statearr_9284_9352 = state_9244__$1;
(statearr_9284_9352[(2)] = inst_9228);

(statearr_9284_9352[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (44))){
var inst_9237 = (state_9244[(2)]);
var state_9244__$1 = (function (){var statearr_9285 = state_9244;
(statearr_9285[(28)] = inst_9237);

return statearr_9285;
})();
var statearr_9286_9353 = state_9244__$1;
(statearr_9286_9353[(2)] = null);

(statearr_9286_9353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (6))){
var inst_9176 = (state_9244[(29)]);
var inst_9175 = cljs.core.deref.call(null,cs);
var inst_9176__$1 = cljs.core.keys.call(null,inst_9175);
var inst_9177 = cljs.core.count.call(null,inst_9176__$1);
var inst_9178 = cljs.core.reset_BANG_.call(null,dctr,inst_9177);
var inst_9183 = cljs.core.seq.call(null,inst_9176__$1);
var inst_9184 = inst_9183;
var inst_9185 = null;
var inst_9186 = (0);
var inst_9187 = (0);
var state_9244__$1 = (function (){var statearr_9287 = state_9244;
(statearr_9287[(29)] = inst_9176__$1);

(statearr_9287[(20)] = inst_9186);

(statearr_9287[(21)] = inst_9184);

(statearr_9287[(11)] = inst_9185);

(statearr_9287[(12)] = inst_9187);

(statearr_9287[(30)] = inst_9178);

return statearr_9287;
})();
var statearr_9288_9354 = state_9244__$1;
(statearr_9288_9354[(2)] = null);

(statearr_9288_9354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (28))){
var inst_9184 = (state_9244[(21)]);
var inst_9203 = (state_9244[(25)]);
var inst_9203__$1 = cljs.core.seq.call(null,inst_9184);
var state_9244__$1 = (function (){var statearr_9289 = state_9244;
(statearr_9289[(25)] = inst_9203__$1);

return statearr_9289;
})();
if(inst_9203__$1){
var statearr_9290_9355 = state_9244__$1;
(statearr_9290_9355[(1)] = (33));

} else {
var statearr_9291_9356 = state_9244__$1;
(statearr_9291_9356[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (25))){
var inst_9186 = (state_9244[(20)]);
var inst_9187 = (state_9244[(12)]);
var inst_9189 = (inst_9187 < inst_9186);
var inst_9190 = inst_9189;
var state_9244__$1 = state_9244;
if(cljs.core.truth_(inst_9190)){
var statearr_9292_9357 = state_9244__$1;
(statearr_9292_9357[(1)] = (27));

} else {
var statearr_9293_9358 = state_9244__$1;
(statearr_9293_9358[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (34))){
var state_9244__$1 = state_9244;
var statearr_9294_9359 = state_9244__$1;
(statearr_9294_9359[(2)] = null);

(statearr_9294_9359[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (17))){
var state_9244__$1 = state_9244;
var statearr_9295_9360 = state_9244__$1;
(statearr_9295_9360[(2)] = null);

(statearr_9295_9360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (3))){
var inst_9242 = (state_9244[(2)]);
var state_9244__$1 = state_9244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9244__$1,inst_9242);
} else {
if((state_val_9245 === (12))){
var inst_9171 = (state_9244[(2)]);
var state_9244__$1 = state_9244;
var statearr_9296_9361 = state_9244__$1;
(statearr_9296_9361[(2)] = inst_9171);

(statearr_9296_9361[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (2))){
var state_9244__$1 = state_9244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9244__$1,(4),ch);
} else {
if((state_val_9245 === (23))){
var state_9244__$1 = state_9244;
var statearr_9297_9362 = state_9244__$1;
(statearr_9297_9362[(2)] = null);

(statearr_9297_9362[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (35))){
var inst_9226 = (state_9244[(2)]);
var state_9244__$1 = state_9244;
var statearr_9298_9363 = state_9244__$1;
(statearr_9298_9363[(2)] = inst_9226);

(statearr_9298_9363[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (19))){
var inst_9143 = (state_9244[(7)]);
var inst_9147 = cljs.core.chunk_first.call(null,inst_9143);
var inst_9148 = cljs.core.chunk_rest.call(null,inst_9143);
var inst_9149 = cljs.core.count.call(null,inst_9147);
var inst_9121 = inst_9148;
var inst_9122 = inst_9147;
var inst_9123 = inst_9149;
var inst_9124 = (0);
var state_9244__$1 = (function (){var statearr_9299 = state_9244;
(statearr_9299[(13)] = inst_9121);

(statearr_9299[(14)] = inst_9123);

(statearr_9299[(15)] = inst_9124);

(statearr_9299[(17)] = inst_9122);

return statearr_9299;
})();
var statearr_9300_9364 = state_9244__$1;
(statearr_9300_9364[(2)] = null);

(statearr_9300_9364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (11))){
var inst_9143 = (state_9244[(7)]);
var inst_9121 = (state_9244[(13)]);
var inst_9143__$1 = cljs.core.seq.call(null,inst_9121);
var state_9244__$1 = (function (){var statearr_9301 = state_9244;
(statearr_9301[(7)] = inst_9143__$1);

return statearr_9301;
})();
if(inst_9143__$1){
var statearr_9302_9365 = state_9244__$1;
(statearr_9302_9365[(1)] = (16));

} else {
var statearr_9303_9366 = state_9244__$1;
(statearr_9303_9366[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (9))){
var inst_9173 = (state_9244[(2)]);
var state_9244__$1 = state_9244;
var statearr_9304_9367 = state_9244__$1;
(statearr_9304_9367[(2)] = inst_9173);

(statearr_9304_9367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (5))){
var inst_9119 = cljs.core.deref.call(null,cs);
var inst_9120 = cljs.core.seq.call(null,inst_9119);
var inst_9121 = inst_9120;
var inst_9122 = null;
var inst_9123 = (0);
var inst_9124 = (0);
var state_9244__$1 = (function (){var statearr_9305 = state_9244;
(statearr_9305[(13)] = inst_9121);

(statearr_9305[(14)] = inst_9123);

(statearr_9305[(15)] = inst_9124);

(statearr_9305[(17)] = inst_9122);

return statearr_9305;
})();
var statearr_9306_9368 = state_9244__$1;
(statearr_9306_9368[(2)] = null);

(statearr_9306_9368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (14))){
var state_9244__$1 = state_9244;
var statearr_9307_9369 = state_9244__$1;
(statearr_9307_9369[(2)] = null);

(statearr_9307_9369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (45))){
var inst_9234 = (state_9244[(2)]);
var state_9244__$1 = state_9244;
var statearr_9308_9370 = state_9244__$1;
(statearr_9308_9370[(2)] = inst_9234);

(statearr_9308_9370[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (26))){
var inst_9176 = (state_9244[(29)]);
var inst_9230 = (state_9244[(2)]);
var inst_9231 = cljs.core.seq.call(null,inst_9176);
var state_9244__$1 = (function (){var statearr_9309 = state_9244;
(statearr_9309[(31)] = inst_9230);

return statearr_9309;
})();
if(inst_9231){
var statearr_9310_9371 = state_9244__$1;
(statearr_9310_9371[(1)] = (42));

} else {
var statearr_9311_9372 = state_9244__$1;
(statearr_9311_9372[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (16))){
var inst_9143 = (state_9244[(7)]);
var inst_9145 = cljs.core.chunked_seq_QMARK_.call(null,inst_9143);
var state_9244__$1 = state_9244;
if(inst_9145){
var statearr_9312_9373 = state_9244__$1;
(statearr_9312_9373[(1)] = (19));

} else {
var statearr_9313_9374 = state_9244__$1;
(statearr_9313_9374[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (38))){
var inst_9223 = (state_9244[(2)]);
var state_9244__$1 = state_9244;
var statearr_9314_9375 = state_9244__$1;
(statearr_9314_9375[(2)] = inst_9223);

(statearr_9314_9375[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (30))){
var state_9244__$1 = state_9244;
var statearr_9315_9376 = state_9244__$1;
(statearr_9315_9376[(2)] = null);

(statearr_9315_9376[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (10))){
var inst_9124 = (state_9244[(15)]);
var inst_9122 = (state_9244[(17)]);
var inst_9132 = cljs.core._nth.call(null,inst_9122,inst_9124);
var inst_9133 = cljs.core.nth.call(null,inst_9132,(0),null);
var inst_9134 = cljs.core.nth.call(null,inst_9132,(1),null);
var state_9244__$1 = (function (){var statearr_9316 = state_9244;
(statearr_9316[(26)] = inst_9133);

return statearr_9316;
})();
if(cljs.core.truth_(inst_9134)){
var statearr_9317_9377 = state_9244__$1;
(statearr_9317_9377[(1)] = (13));

} else {
var statearr_9318_9378 = state_9244__$1;
(statearr_9318_9378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (18))){
var inst_9169 = (state_9244[(2)]);
var state_9244__$1 = state_9244;
var statearr_9319_9379 = state_9244__$1;
(statearr_9319_9379[(2)] = inst_9169);

(statearr_9319_9379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (42))){
var state_9244__$1 = state_9244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9244__$1,(45),dchan);
} else {
if((state_val_9245 === (37))){
var inst_9112 = (state_9244[(10)]);
var inst_9203 = (state_9244[(25)]);
var inst_9212 = (state_9244[(23)]);
var inst_9212__$1 = cljs.core.first.call(null,inst_9203);
var inst_9213 = cljs.core.async.put_BANG_.call(null,inst_9212__$1,inst_9112,done);
var state_9244__$1 = (function (){var statearr_9320 = state_9244;
(statearr_9320[(23)] = inst_9212__$1);

return statearr_9320;
})();
if(cljs.core.truth_(inst_9213)){
var statearr_9321_9380 = state_9244__$1;
(statearr_9321_9380[(1)] = (39));

} else {
var statearr_9322_9381 = state_9244__$1;
(statearr_9322_9381[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9245 === (8))){
var inst_9123 = (state_9244[(14)]);
var inst_9124 = (state_9244[(15)]);
var inst_9126 = (inst_9124 < inst_9123);
var inst_9127 = inst_9126;
var state_9244__$1 = state_9244;
if(cljs.core.truth_(inst_9127)){
var statearr_9323_9382 = state_9244__$1;
(statearr_9323_9382[(1)] = (10));

} else {
var statearr_9324_9383 = state_9244__$1;
(statearr_9324_9383[(1)] = (11));

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
});})(c__6646__auto___9329,cs,m,dchan,dctr,done))
;
return ((function (switch__6487__auto__,c__6646__auto___9329,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6488__auto__ = null;
var cljs$core$async$mult_$_state_machine__6488__auto____0 = (function (){
var statearr_9325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9325[(0)] = cljs$core$async$mult_$_state_machine__6488__auto__);

(statearr_9325[(1)] = (1));

return statearr_9325;
});
var cljs$core$async$mult_$_state_machine__6488__auto____1 = (function (state_9244){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_9244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e9326){if((e9326 instanceof Object)){
var ex__6491__auto__ = e9326;
var statearr_9327_9384 = state_9244;
(statearr_9327_9384[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9385 = state_9244;
state_9244 = G__9385;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6488__auto__ = function(state_9244){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6488__auto____1.call(this,state_9244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6488__auto____0;
cljs$core$async$mult_$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6488__auto____1;
return cljs$core$async$mult_$_state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto___9329,cs,m,dchan,dctr,done))
})();
var state__6648__auto__ = (function (){var statearr_9328 = f__6647__auto__.call(null);
(statearr_9328[(6)] = c__6646__auto___9329);

return statearr_9328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto___9329,cs,m,dchan,dctr,done))
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
var G__9387 = arguments.length;
switch (G__9387) {
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
var len__4531__auto___9399 = arguments.length;
var i__4532__auto___9400 = (0);
while(true){
if((i__4532__auto___9400 < len__4531__auto___9399)){
args__4534__auto__.push((arguments[i__4532__auto___9400]));

var G__9401 = (i__4532__auto___9400 + (1));
i__4532__auto___9400 = G__9401;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__9393){
var map__9394 = p__9393;
var map__9394__$1 = ((((!((map__9394 == null)))?(((((map__9394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9394):map__9394);
var opts = map__9394__$1;
var statearr_9396_9402 = state;
(statearr_9396_9402[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__9394,map__9394__$1,opts){
return (function (val){
var statearr_9397_9403 = state;
(statearr_9397_9403[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__9394,map__9394__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_9398_9404 = state;
(statearr_9398_9404[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq9389){
var G__9390 = cljs.core.first.call(null,seq9389);
var seq9389__$1 = cljs.core.next.call(null,seq9389);
var G__9391 = cljs.core.first.call(null,seq9389__$1);
var seq9389__$2 = cljs.core.next.call(null,seq9389__$1);
var G__9392 = cljs.core.first.call(null,seq9389__$2);
var seq9389__$3 = cljs.core.next.call(null,seq9389__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9390,G__9391,G__9392,seq9389__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9405 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta9406){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta9406 = meta9406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9407,meta9406__$1){
var self__ = this;
var _9407__$1 = this;
return (new cljs.core.async.t_cljs$core$async9405(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta9406__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9405.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9407){
var self__ = this;
var _9407__$1 = this;
return self__.meta9406;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9405.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9405.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9405.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9405.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9405.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9405.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9405.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9405.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async9405.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta9406","meta9406",1859878910,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9405.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9405";

cljs.core.async.t_cljs$core$async9405.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async9405");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9405.
 */
cljs.core.async.__GT_t_cljs$core$async9405 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async9405(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta9406){
return (new cljs.core.async.t_cljs$core$async9405(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta9406));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async9405(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6646__auto___9569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto___9569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto___9569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_9509){
var state_val_9510 = (state_9509[(1)]);
if((state_val_9510 === (7))){
var inst_9424 = (state_9509[(2)]);
var state_9509__$1 = state_9509;
var statearr_9511_9570 = state_9509__$1;
(statearr_9511_9570[(2)] = inst_9424);

(statearr_9511_9570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (20))){
var inst_9436 = (state_9509[(7)]);
var state_9509__$1 = state_9509;
var statearr_9512_9571 = state_9509__$1;
(statearr_9512_9571[(2)] = inst_9436);

(statearr_9512_9571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (27))){
var state_9509__$1 = state_9509;
var statearr_9513_9572 = state_9509__$1;
(statearr_9513_9572[(2)] = null);

(statearr_9513_9572[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (1))){
var inst_9411 = (state_9509[(8)]);
var inst_9411__$1 = calc_state.call(null);
var inst_9413 = (inst_9411__$1 == null);
var inst_9414 = cljs.core.not.call(null,inst_9413);
var state_9509__$1 = (function (){var statearr_9514 = state_9509;
(statearr_9514[(8)] = inst_9411__$1);

return statearr_9514;
})();
if(inst_9414){
var statearr_9515_9573 = state_9509__$1;
(statearr_9515_9573[(1)] = (2));

} else {
var statearr_9516_9574 = state_9509__$1;
(statearr_9516_9574[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (24))){
var inst_9483 = (state_9509[(9)]);
var inst_9469 = (state_9509[(10)]);
var inst_9460 = (state_9509[(11)]);
var inst_9483__$1 = inst_9460.call(null,inst_9469);
var state_9509__$1 = (function (){var statearr_9517 = state_9509;
(statearr_9517[(9)] = inst_9483__$1);

return statearr_9517;
})();
if(cljs.core.truth_(inst_9483__$1)){
var statearr_9518_9575 = state_9509__$1;
(statearr_9518_9575[(1)] = (29));

} else {
var statearr_9519_9576 = state_9509__$1;
(statearr_9519_9576[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (4))){
var inst_9427 = (state_9509[(2)]);
var state_9509__$1 = state_9509;
if(cljs.core.truth_(inst_9427)){
var statearr_9520_9577 = state_9509__$1;
(statearr_9520_9577[(1)] = (8));

} else {
var statearr_9521_9578 = state_9509__$1;
(statearr_9521_9578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (15))){
var inst_9454 = (state_9509[(2)]);
var state_9509__$1 = state_9509;
if(cljs.core.truth_(inst_9454)){
var statearr_9522_9579 = state_9509__$1;
(statearr_9522_9579[(1)] = (19));

} else {
var statearr_9523_9580 = state_9509__$1;
(statearr_9523_9580[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (21))){
var inst_9459 = (state_9509[(12)]);
var inst_9459__$1 = (state_9509[(2)]);
var inst_9460 = cljs.core.get.call(null,inst_9459__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9461 = cljs.core.get.call(null,inst_9459__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9462 = cljs.core.get.call(null,inst_9459__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_9509__$1 = (function (){var statearr_9524 = state_9509;
(statearr_9524[(12)] = inst_9459__$1);

(statearr_9524[(11)] = inst_9460);

(statearr_9524[(13)] = inst_9461);

return statearr_9524;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_9509__$1,(22),inst_9462);
} else {
if((state_val_9510 === (31))){
var inst_9491 = (state_9509[(2)]);
var state_9509__$1 = state_9509;
if(cljs.core.truth_(inst_9491)){
var statearr_9525_9581 = state_9509__$1;
(statearr_9525_9581[(1)] = (32));

} else {
var statearr_9526_9582 = state_9509__$1;
(statearr_9526_9582[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (32))){
var inst_9468 = (state_9509[(14)]);
var state_9509__$1 = state_9509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9509__$1,(35),out,inst_9468);
} else {
if((state_val_9510 === (33))){
var inst_9459 = (state_9509[(12)]);
var inst_9436 = inst_9459;
var state_9509__$1 = (function (){var statearr_9527 = state_9509;
(statearr_9527[(7)] = inst_9436);

return statearr_9527;
})();
var statearr_9528_9583 = state_9509__$1;
(statearr_9528_9583[(2)] = null);

(statearr_9528_9583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (13))){
var inst_9436 = (state_9509[(7)]);
var inst_9443 = inst_9436.cljs$lang$protocol_mask$partition0$;
var inst_9444 = (inst_9443 & (64));
var inst_9445 = inst_9436.cljs$core$ISeq$;
var inst_9446 = (cljs.core.PROTOCOL_SENTINEL === inst_9445);
var inst_9447 = ((inst_9444) || (inst_9446));
var state_9509__$1 = state_9509;
if(cljs.core.truth_(inst_9447)){
var statearr_9529_9584 = state_9509__$1;
(statearr_9529_9584[(1)] = (16));

} else {
var statearr_9530_9585 = state_9509__$1;
(statearr_9530_9585[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (22))){
var inst_9469 = (state_9509[(10)]);
var inst_9468 = (state_9509[(14)]);
var inst_9467 = (state_9509[(2)]);
var inst_9468__$1 = cljs.core.nth.call(null,inst_9467,(0),null);
var inst_9469__$1 = cljs.core.nth.call(null,inst_9467,(1),null);
var inst_9470 = (inst_9468__$1 == null);
var inst_9471 = cljs.core._EQ_.call(null,inst_9469__$1,change);
var inst_9472 = ((inst_9470) || (inst_9471));
var state_9509__$1 = (function (){var statearr_9531 = state_9509;
(statearr_9531[(10)] = inst_9469__$1);

(statearr_9531[(14)] = inst_9468__$1);

return statearr_9531;
})();
if(cljs.core.truth_(inst_9472)){
var statearr_9532_9586 = state_9509__$1;
(statearr_9532_9586[(1)] = (23));

} else {
var statearr_9533_9587 = state_9509__$1;
(statearr_9533_9587[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (36))){
var inst_9459 = (state_9509[(12)]);
var inst_9436 = inst_9459;
var state_9509__$1 = (function (){var statearr_9534 = state_9509;
(statearr_9534[(7)] = inst_9436);

return statearr_9534;
})();
var statearr_9535_9588 = state_9509__$1;
(statearr_9535_9588[(2)] = null);

(statearr_9535_9588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (29))){
var inst_9483 = (state_9509[(9)]);
var state_9509__$1 = state_9509;
var statearr_9536_9589 = state_9509__$1;
(statearr_9536_9589[(2)] = inst_9483);

(statearr_9536_9589[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (6))){
var state_9509__$1 = state_9509;
var statearr_9537_9590 = state_9509__$1;
(statearr_9537_9590[(2)] = false);

(statearr_9537_9590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (28))){
var inst_9479 = (state_9509[(2)]);
var inst_9480 = calc_state.call(null);
var inst_9436 = inst_9480;
var state_9509__$1 = (function (){var statearr_9538 = state_9509;
(statearr_9538[(7)] = inst_9436);

(statearr_9538[(15)] = inst_9479);

return statearr_9538;
})();
var statearr_9539_9591 = state_9509__$1;
(statearr_9539_9591[(2)] = null);

(statearr_9539_9591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (25))){
var inst_9505 = (state_9509[(2)]);
var state_9509__$1 = state_9509;
var statearr_9540_9592 = state_9509__$1;
(statearr_9540_9592[(2)] = inst_9505);

(statearr_9540_9592[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (34))){
var inst_9503 = (state_9509[(2)]);
var state_9509__$1 = state_9509;
var statearr_9541_9593 = state_9509__$1;
(statearr_9541_9593[(2)] = inst_9503);

(statearr_9541_9593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (17))){
var state_9509__$1 = state_9509;
var statearr_9542_9594 = state_9509__$1;
(statearr_9542_9594[(2)] = false);

(statearr_9542_9594[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (3))){
var state_9509__$1 = state_9509;
var statearr_9543_9595 = state_9509__$1;
(statearr_9543_9595[(2)] = false);

(statearr_9543_9595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (12))){
var inst_9507 = (state_9509[(2)]);
var state_9509__$1 = state_9509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9509__$1,inst_9507);
} else {
if((state_val_9510 === (2))){
var inst_9411 = (state_9509[(8)]);
var inst_9416 = inst_9411.cljs$lang$protocol_mask$partition0$;
var inst_9417 = (inst_9416 & (64));
var inst_9418 = inst_9411.cljs$core$ISeq$;
var inst_9419 = (cljs.core.PROTOCOL_SENTINEL === inst_9418);
var inst_9420 = ((inst_9417) || (inst_9419));
var state_9509__$1 = state_9509;
if(cljs.core.truth_(inst_9420)){
var statearr_9544_9596 = state_9509__$1;
(statearr_9544_9596[(1)] = (5));

} else {
var statearr_9545_9597 = state_9509__$1;
(statearr_9545_9597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (23))){
var inst_9468 = (state_9509[(14)]);
var inst_9474 = (inst_9468 == null);
var state_9509__$1 = state_9509;
if(cljs.core.truth_(inst_9474)){
var statearr_9546_9598 = state_9509__$1;
(statearr_9546_9598[(1)] = (26));

} else {
var statearr_9547_9599 = state_9509__$1;
(statearr_9547_9599[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (35))){
var inst_9494 = (state_9509[(2)]);
var state_9509__$1 = state_9509;
if(cljs.core.truth_(inst_9494)){
var statearr_9548_9600 = state_9509__$1;
(statearr_9548_9600[(1)] = (36));

} else {
var statearr_9549_9601 = state_9509__$1;
(statearr_9549_9601[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (19))){
var inst_9436 = (state_9509[(7)]);
var inst_9456 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9436);
var state_9509__$1 = state_9509;
var statearr_9550_9602 = state_9509__$1;
(statearr_9550_9602[(2)] = inst_9456);

(statearr_9550_9602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (11))){
var inst_9436 = (state_9509[(7)]);
var inst_9440 = (inst_9436 == null);
var inst_9441 = cljs.core.not.call(null,inst_9440);
var state_9509__$1 = state_9509;
if(inst_9441){
var statearr_9551_9603 = state_9509__$1;
(statearr_9551_9603[(1)] = (13));

} else {
var statearr_9552_9604 = state_9509__$1;
(statearr_9552_9604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (9))){
var inst_9411 = (state_9509[(8)]);
var state_9509__$1 = state_9509;
var statearr_9553_9605 = state_9509__$1;
(statearr_9553_9605[(2)] = inst_9411);

(statearr_9553_9605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (5))){
var state_9509__$1 = state_9509;
var statearr_9554_9606 = state_9509__$1;
(statearr_9554_9606[(2)] = true);

(statearr_9554_9606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (14))){
var state_9509__$1 = state_9509;
var statearr_9555_9607 = state_9509__$1;
(statearr_9555_9607[(2)] = false);

(statearr_9555_9607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (26))){
var inst_9469 = (state_9509[(10)]);
var inst_9476 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9469);
var state_9509__$1 = state_9509;
var statearr_9556_9608 = state_9509__$1;
(statearr_9556_9608[(2)] = inst_9476);

(statearr_9556_9608[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (16))){
var state_9509__$1 = state_9509;
var statearr_9557_9609 = state_9509__$1;
(statearr_9557_9609[(2)] = true);

(statearr_9557_9609[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (38))){
var inst_9499 = (state_9509[(2)]);
var state_9509__$1 = state_9509;
var statearr_9558_9610 = state_9509__$1;
(statearr_9558_9610[(2)] = inst_9499);

(statearr_9558_9610[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (30))){
var inst_9469 = (state_9509[(10)]);
var inst_9460 = (state_9509[(11)]);
var inst_9461 = (state_9509[(13)]);
var inst_9486 = cljs.core.empty_QMARK_.call(null,inst_9460);
var inst_9487 = inst_9461.call(null,inst_9469);
var inst_9488 = cljs.core.not.call(null,inst_9487);
var inst_9489 = ((inst_9486) && (inst_9488));
var state_9509__$1 = state_9509;
var statearr_9559_9611 = state_9509__$1;
(statearr_9559_9611[(2)] = inst_9489);

(statearr_9559_9611[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (10))){
var inst_9411 = (state_9509[(8)]);
var inst_9432 = (state_9509[(2)]);
var inst_9433 = cljs.core.get.call(null,inst_9432,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9434 = cljs.core.get.call(null,inst_9432,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9435 = cljs.core.get.call(null,inst_9432,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_9436 = inst_9411;
var state_9509__$1 = (function (){var statearr_9560 = state_9509;
(statearr_9560[(16)] = inst_9433);

(statearr_9560[(17)] = inst_9434);

(statearr_9560[(7)] = inst_9436);

(statearr_9560[(18)] = inst_9435);

return statearr_9560;
})();
var statearr_9561_9612 = state_9509__$1;
(statearr_9561_9612[(2)] = null);

(statearr_9561_9612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (18))){
var inst_9451 = (state_9509[(2)]);
var state_9509__$1 = state_9509;
var statearr_9562_9613 = state_9509__$1;
(statearr_9562_9613[(2)] = inst_9451);

(statearr_9562_9613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (37))){
var state_9509__$1 = state_9509;
var statearr_9563_9614 = state_9509__$1;
(statearr_9563_9614[(2)] = null);

(statearr_9563_9614[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9510 === (8))){
var inst_9411 = (state_9509[(8)]);
var inst_9429 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9411);
var state_9509__$1 = state_9509;
var statearr_9564_9615 = state_9509__$1;
(statearr_9564_9615[(2)] = inst_9429);

(statearr_9564_9615[(1)] = (10));


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
});})(c__6646__auto___9569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6487__auto__,c__6646__auto___9569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6488__auto__ = null;
var cljs$core$async$mix_$_state_machine__6488__auto____0 = (function (){
var statearr_9565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9565[(0)] = cljs$core$async$mix_$_state_machine__6488__auto__);

(statearr_9565[(1)] = (1));

return statearr_9565;
});
var cljs$core$async$mix_$_state_machine__6488__auto____1 = (function (state_9509){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_9509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e9566){if((e9566 instanceof Object)){
var ex__6491__auto__ = e9566;
var statearr_9567_9616 = state_9509;
(statearr_9567_9616[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9617 = state_9509;
state_9509 = G__9617;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6488__auto__ = function(state_9509){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6488__auto____1.call(this,state_9509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6488__auto____0;
cljs$core$async$mix_$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6488__auto____1;
return cljs$core$async$mix_$_state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto___9569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6648__auto__ = (function (){var statearr_9568 = f__6647__auto__.call(null);
(statearr_9568[(6)] = c__6646__auto___9569);

return statearr_9568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto___9569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__9619 = arguments.length;
switch (G__9619) {
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
var G__9623 = arguments.length;
switch (G__9623) {
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
return (function (p1__9621_SHARP_){
if(cljs.core.truth_(p1__9621_SHARP_.call(null,topic))){
return p1__9621_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__9621_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9624 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta9625){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta9625 = meta9625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9626,meta9625__$1){
var self__ = this;
var _9626__$1 = this;
return (new cljs.core.async.t_cljs$core$async9624(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta9625__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9624.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9626){
var self__ = this;
var _9626__$1 = this;
return self__.meta9625;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9624.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9624.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9624.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9624.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9624.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async9624.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9624.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9624.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta9625","meta9625",-621685632,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9624.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9624";

cljs.core.async.t_cljs$core$async9624.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async9624");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9624.
 */
cljs.core.async.__GT_t_cljs$core$async9624 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async9624(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9625){
return (new cljs.core.async.t_cljs$core$async9624(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9625));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async9624(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6646__auto___9744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto___9744,mults,ensure_mult,p){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto___9744,mults,ensure_mult,p){
return (function (state_9698){
var state_val_9699 = (state_9698[(1)]);
if((state_val_9699 === (7))){
var inst_9694 = (state_9698[(2)]);
var state_9698__$1 = state_9698;
var statearr_9700_9745 = state_9698__$1;
(statearr_9700_9745[(2)] = inst_9694);

(statearr_9700_9745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (20))){
var state_9698__$1 = state_9698;
var statearr_9701_9746 = state_9698__$1;
(statearr_9701_9746[(2)] = null);

(statearr_9701_9746[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (1))){
var state_9698__$1 = state_9698;
var statearr_9702_9747 = state_9698__$1;
(statearr_9702_9747[(2)] = null);

(statearr_9702_9747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (24))){
var inst_9677 = (state_9698[(7)]);
var inst_9686 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_9677);
var state_9698__$1 = state_9698;
var statearr_9703_9748 = state_9698__$1;
(statearr_9703_9748[(2)] = inst_9686);

(statearr_9703_9748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (4))){
var inst_9629 = (state_9698[(8)]);
var inst_9629__$1 = (state_9698[(2)]);
var inst_9630 = (inst_9629__$1 == null);
var state_9698__$1 = (function (){var statearr_9704 = state_9698;
(statearr_9704[(8)] = inst_9629__$1);

return statearr_9704;
})();
if(cljs.core.truth_(inst_9630)){
var statearr_9705_9749 = state_9698__$1;
(statearr_9705_9749[(1)] = (5));

} else {
var statearr_9706_9750 = state_9698__$1;
(statearr_9706_9750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (15))){
var inst_9671 = (state_9698[(2)]);
var state_9698__$1 = state_9698;
var statearr_9707_9751 = state_9698__$1;
(statearr_9707_9751[(2)] = inst_9671);

(statearr_9707_9751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (21))){
var inst_9691 = (state_9698[(2)]);
var state_9698__$1 = (function (){var statearr_9708 = state_9698;
(statearr_9708[(9)] = inst_9691);

return statearr_9708;
})();
var statearr_9709_9752 = state_9698__$1;
(statearr_9709_9752[(2)] = null);

(statearr_9709_9752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (13))){
var inst_9653 = (state_9698[(10)]);
var inst_9655 = cljs.core.chunked_seq_QMARK_.call(null,inst_9653);
var state_9698__$1 = state_9698;
if(inst_9655){
var statearr_9710_9753 = state_9698__$1;
(statearr_9710_9753[(1)] = (16));

} else {
var statearr_9711_9754 = state_9698__$1;
(statearr_9711_9754[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (22))){
var inst_9683 = (state_9698[(2)]);
var state_9698__$1 = state_9698;
if(cljs.core.truth_(inst_9683)){
var statearr_9712_9755 = state_9698__$1;
(statearr_9712_9755[(1)] = (23));

} else {
var statearr_9713_9756 = state_9698__$1;
(statearr_9713_9756[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (6))){
var inst_9679 = (state_9698[(11)]);
var inst_9629 = (state_9698[(8)]);
var inst_9677 = (state_9698[(7)]);
var inst_9677__$1 = topic_fn.call(null,inst_9629);
var inst_9678 = cljs.core.deref.call(null,mults);
var inst_9679__$1 = cljs.core.get.call(null,inst_9678,inst_9677__$1);
var state_9698__$1 = (function (){var statearr_9714 = state_9698;
(statearr_9714[(11)] = inst_9679__$1);

(statearr_9714[(7)] = inst_9677__$1);

return statearr_9714;
})();
if(cljs.core.truth_(inst_9679__$1)){
var statearr_9715_9757 = state_9698__$1;
(statearr_9715_9757[(1)] = (19));

} else {
var statearr_9716_9758 = state_9698__$1;
(statearr_9716_9758[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (25))){
var inst_9688 = (state_9698[(2)]);
var state_9698__$1 = state_9698;
var statearr_9717_9759 = state_9698__$1;
(statearr_9717_9759[(2)] = inst_9688);

(statearr_9717_9759[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (17))){
var inst_9653 = (state_9698[(10)]);
var inst_9662 = cljs.core.first.call(null,inst_9653);
var inst_9663 = cljs.core.async.muxch_STAR_.call(null,inst_9662);
var inst_9664 = cljs.core.async.close_BANG_.call(null,inst_9663);
var inst_9665 = cljs.core.next.call(null,inst_9653);
var inst_9639 = inst_9665;
var inst_9640 = null;
var inst_9641 = (0);
var inst_9642 = (0);
var state_9698__$1 = (function (){var statearr_9718 = state_9698;
(statearr_9718[(12)] = inst_9640);

(statearr_9718[(13)] = inst_9641);

(statearr_9718[(14)] = inst_9642);

(statearr_9718[(15)] = inst_9639);

(statearr_9718[(16)] = inst_9664);

return statearr_9718;
})();
var statearr_9719_9760 = state_9698__$1;
(statearr_9719_9760[(2)] = null);

(statearr_9719_9760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (3))){
var inst_9696 = (state_9698[(2)]);
var state_9698__$1 = state_9698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9698__$1,inst_9696);
} else {
if((state_val_9699 === (12))){
var inst_9673 = (state_9698[(2)]);
var state_9698__$1 = state_9698;
var statearr_9720_9761 = state_9698__$1;
(statearr_9720_9761[(2)] = inst_9673);

(statearr_9720_9761[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (2))){
var state_9698__$1 = state_9698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9698__$1,(4),ch);
} else {
if((state_val_9699 === (23))){
var state_9698__$1 = state_9698;
var statearr_9721_9762 = state_9698__$1;
(statearr_9721_9762[(2)] = null);

(statearr_9721_9762[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (19))){
var inst_9679 = (state_9698[(11)]);
var inst_9629 = (state_9698[(8)]);
var inst_9681 = cljs.core.async.muxch_STAR_.call(null,inst_9679);
var state_9698__$1 = state_9698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9698__$1,(22),inst_9681,inst_9629);
} else {
if((state_val_9699 === (11))){
var inst_9653 = (state_9698[(10)]);
var inst_9639 = (state_9698[(15)]);
var inst_9653__$1 = cljs.core.seq.call(null,inst_9639);
var state_9698__$1 = (function (){var statearr_9722 = state_9698;
(statearr_9722[(10)] = inst_9653__$1);

return statearr_9722;
})();
if(inst_9653__$1){
var statearr_9723_9763 = state_9698__$1;
(statearr_9723_9763[(1)] = (13));

} else {
var statearr_9724_9764 = state_9698__$1;
(statearr_9724_9764[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (9))){
var inst_9675 = (state_9698[(2)]);
var state_9698__$1 = state_9698;
var statearr_9725_9765 = state_9698__$1;
(statearr_9725_9765[(2)] = inst_9675);

(statearr_9725_9765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (5))){
var inst_9636 = cljs.core.deref.call(null,mults);
var inst_9637 = cljs.core.vals.call(null,inst_9636);
var inst_9638 = cljs.core.seq.call(null,inst_9637);
var inst_9639 = inst_9638;
var inst_9640 = null;
var inst_9641 = (0);
var inst_9642 = (0);
var state_9698__$1 = (function (){var statearr_9726 = state_9698;
(statearr_9726[(12)] = inst_9640);

(statearr_9726[(13)] = inst_9641);

(statearr_9726[(14)] = inst_9642);

(statearr_9726[(15)] = inst_9639);

return statearr_9726;
})();
var statearr_9727_9766 = state_9698__$1;
(statearr_9727_9766[(2)] = null);

(statearr_9727_9766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (14))){
var state_9698__$1 = state_9698;
var statearr_9731_9767 = state_9698__$1;
(statearr_9731_9767[(2)] = null);

(statearr_9731_9767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (16))){
var inst_9653 = (state_9698[(10)]);
var inst_9657 = cljs.core.chunk_first.call(null,inst_9653);
var inst_9658 = cljs.core.chunk_rest.call(null,inst_9653);
var inst_9659 = cljs.core.count.call(null,inst_9657);
var inst_9639 = inst_9658;
var inst_9640 = inst_9657;
var inst_9641 = inst_9659;
var inst_9642 = (0);
var state_9698__$1 = (function (){var statearr_9732 = state_9698;
(statearr_9732[(12)] = inst_9640);

(statearr_9732[(13)] = inst_9641);

(statearr_9732[(14)] = inst_9642);

(statearr_9732[(15)] = inst_9639);

return statearr_9732;
})();
var statearr_9733_9768 = state_9698__$1;
(statearr_9733_9768[(2)] = null);

(statearr_9733_9768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (10))){
var inst_9640 = (state_9698[(12)]);
var inst_9641 = (state_9698[(13)]);
var inst_9642 = (state_9698[(14)]);
var inst_9639 = (state_9698[(15)]);
var inst_9647 = cljs.core._nth.call(null,inst_9640,inst_9642);
var inst_9648 = cljs.core.async.muxch_STAR_.call(null,inst_9647);
var inst_9649 = cljs.core.async.close_BANG_.call(null,inst_9648);
var inst_9650 = (inst_9642 + (1));
var tmp9728 = inst_9640;
var tmp9729 = inst_9641;
var tmp9730 = inst_9639;
var inst_9639__$1 = tmp9730;
var inst_9640__$1 = tmp9728;
var inst_9641__$1 = tmp9729;
var inst_9642__$1 = inst_9650;
var state_9698__$1 = (function (){var statearr_9734 = state_9698;
(statearr_9734[(12)] = inst_9640__$1);

(statearr_9734[(13)] = inst_9641__$1);

(statearr_9734[(14)] = inst_9642__$1);

(statearr_9734[(17)] = inst_9649);

(statearr_9734[(15)] = inst_9639__$1);

return statearr_9734;
})();
var statearr_9735_9769 = state_9698__$1;
(statearr_9735_9769[(2)] = null);

(statearr_9735_9769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (18))){
var inst_9668 = (state_9698[(2)]);
var state_9698__$1 = state_9698;
var statearr_9736_9770 = state_9698__$1;
(statearr_9736_9770[(2)] = inst_9668);

(statearr_9736_9770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9699 === (8))){
var inst_9641 = (state_9698[(13)]);
var inst_9642 = (state_9698[(14)]);
var inst_9644 = (inst_9642 < inst_9641);
var inst_9645 = inst_9644;
var state_9698__$1 = state_9698;
if(cljs.core.truth_(inst_9645)){
var statearr_9737_9771 = state_9698__$1;
(statearr_9737_9771[(1)] = (10));

} else {
var statearr_9738_9772 = state_9698__$1;
(statearr_9738_9772[(1)] = (11));

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
});})(c__6646__auto___9744,mults,ensure_mult,p))
;
return ((function (switch__6487__auto__,c__6646__auto___9744,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6488__auto__ = null;
var cljs$core$async$state_machine__6488__auto____0 = (function (){
var statearr_9739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9739[(0)] = cljs$core$async$state_machine__6488__auto__);

(statearr_9739[(1)] = (1));

return statearr_9739;
});
var cljs$core$async$state_machine__6488__auto____1 = (function (state_9698){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_9698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e9740){if((e9740 instanceof Object)){
var ex__6491__auto__ = e9740;
var statearr_9741_9773 = state_9698;
(statearr_9741_9773[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9774 = state_9698;
state_9698 = G__9774;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$state_machine__6488__auto__ = function(state_9698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6488__auto____1.call(this,state_9698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6488__auto____0;
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6488__auto____1;
return cljs$core$async$state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto___9744,mults,ensure_mult,p))
})();
var state__6648__auto__ = (function (){var statearr_9742 = f__6647__auto__.call(null);
(statearr_9742[(6)] = c__6646__auto___9744);

return statearr_9742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto___9744,mults,ensure_mult,p))
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
var G__9776 = arguments.length;
switch (G__9776) {
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
var G__9779 = arguments.length;
switch (G__9779) {
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
var G__9782 = arguments.length;
switch (G__9782) {
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
var c__6646__auto___9849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto___9849,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto___9849,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9821){
var state_val_9822 = (state_9821[(1)]);
if((state_val_9822 === (7))){
var state_9821__$1 = state_9821;
var statearr_9823_9850 = state_9821__$1;
(statearr_9823_9850[(2)] = null);

(statearr_9823_9850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9822 === (1))){
var state_9821__$1 = state_9821;
var statearr_9824_9851 = state_9821__$1;
(statearr_9824_9851[(2)] = null);

(statearr_9824_9851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9822 === (4))){
var inst_9785 = (state_9821[(7)]);
var inst_9787 = (inst_9785 < cnt);
var state_9821__$1 = state_9821;
if(cljs.core.truth_(inst_9787)){
var statearr_9825_9852 = state_9821__$1;
(statearr_9825_9852[(1)] = (6));

} else {
var statearr_9826_9853 = state_9821__$1;
(statearr_9826_9853[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9822 === (15))){
var inst_9817 = (state_9821[(2)]);
var state_9821__$1 = state_9821;
var statearr_9827_9854 = state_9821__$1;
(statearr_9827_9854[(2)] = inst_9817);

(statearr_9827_9854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9822 === (13))){
var inst_9810 = cljs.core.async.close_BANG_.call(null,out);
var state_9821__$1 = state_9821;
var statearr_9828_9855 = state_9821__$1;
(statearr_9828_9855[(2)] = inst_9810);

(statearr_9828_9855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9822 === (6))){
var state_9821__$1 = state_9821;
var statearr_9829_9856 = state_9821__$1;
(statearr_9829_9856[(2)] = null);

(statearr_9829_9856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9822 === (3))){
var inst_9819 = (state_9821[(2)]);
var state_9821__$1 = state_9821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9821__$1,inst_9819);
} else {
if((state_val_9822 === (12))){
var inst_9807 = (state_9821[(8)]);
var inst_9807__$1 = (state_9821[(2)]);
var inst_9808 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9807__$1);
var state_9821__$1 = (function (){var statearr_9830 = state_9821;
(statearr_9830[(8)] = inst_9807__$1);

return statearr_9830;
})();
if(cljs.core.truth_(inst_9808)){
var statearr_9831_9857 = state_9821__$1;
(statearr_9831_9857[(1)] = (13));

} else {
var statearr_9832_9858 = state_9821__$1;
(statearr_9832_9858[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9822 === (2))){
var inst_9784 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_9785 = (0);
var state_9821__$1 = (function (){var statearr_9833 = state_9821;
(statearr_9833[(9)] = inst_9784);

(statearr_9833[(7)] = inst_9785);

return statearr_9833;
})();
var statearr_9834_9859 = state_9821__$1;
(statearr_9834_9859[(2)] = null);

(statearr_9834_9859[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9822 === (11))){
var inst_9785 = (state_9821[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9821,(10),Object,null,(9));
var inst_9794 = chs__$1.call(null,inst_9785);
var inst_9795 = done.call(null,inst_9785);
var inst_9796 = cljs.core.async.take_BANG_.call(null,inst_9794,inst_9795);
var state_9821__$1 = state_9821;
var statearr_9835_9860 = state_9821__$1;
(statearr_9835_9860[(2)] = inst_9796);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9821__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9822 === (9))){
var inst_9785 = (state_9821[(7)]);
var inst_9798 = (state_9821[(2)]);
var inst_9799 = (inst_9785 + (1));
var inst_9785__$1 = inst_9799;
var state_9821__$1 = (function (){var statearr_9836 = state_9821;
(statearr_9836[(10)] = inst_9798);

(statearr_9836[(7)] = inst_9785__$1);

return statearr_9836;
})();
var statearr_9837_9861 = state_9821__$1;
(statearr_9837_9861[(2)] = null);

(statearr_9837_9861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9822 === (5))){
var inst_9805 = (state_9821[(2)]);
var state_9821__$1 = (function (){var statearr_9838 = state_9821;
(statearr_9838[(11)] = inst_9805);

return statearr_9838;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9821__$1,(12),dchan);
} else {
if((state_val_9822 === (14))){
var inst_9807 = (state_9821[(8)]);
var inst_9812 = cljs.core.apply.call(null,f,inst_9807);
var state_9821__$1 = state_9821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9821__$1,(16),out,inst_9812);
} else {
if((state_val_9822 === (16))){
var inst_9814 = (state_9821[(2)]);
var state_9821__$1 = (function (){var statearr_9839 = state_9821;
(statearr_9839[(12)] = inst_9814);

return statearr_9839;
})();
var statearr_9840_9862 = state_9821__$1;
(statearr_9840_9862[(2)] = null);

(statearr_9840_9862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9822 === (10))){
var inst_9789 = (state_9821[(2)]);
var inst_9790 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_9821__$1 = (function (){var statearr_9841 = state_9821;
(statearr_9841[(13)] = inst_9789);

return statearr_9841;
})();
var statearr_9842_9863 = state_9821__$1;
(statearr_9842_9863[(2)] = inst_9790);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9821__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9822 === (8))){
var inst_9803 = (state_9821[(2)]);
var state_9821__$1 = state_9821;
var statearr_9843_9864 = state_9821__$1;
(statearr_9843_9864[(2)] = inst_9803);

(statearr_9843_9864[(1)] = (5));


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
});})(c__6646__auto___9849,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6487__auto__,c__6646__auto___9849,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6488__auto__ = null;
var cljs$core$async$state_machine__6488__auto____0 = (function (){
var statearr_9844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9844[(0)] = cljs$core$async$state_machine__6488__auto__);

(statearr_9844[(1)] = (1));

return statearr_9844;
});
var cljs$core$async$state_machine__6488__auto____1 = (function (state_9821){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_9821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e9845){if((e9845 instanceof Object)){
var ex__6491__auto__ = e9845;
var statearr_9846_9865 = state_9821;
(statearr_9846_9865[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9866 = state_9821;
state_9821 = G__9866;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$state_machine__6488__auto__ = function(state_9821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6488__auto____1.call(this,state_9821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6488__auto____0;
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6488__auto____1;
return cljs$core$async$state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto___9849,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6648__auto__ = (function (){var statearr_9847 = f__6647__auto__.call(null);
(statearr_9847[(6)] = c__6646__auto___9849);

return statearr_9847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto___9849,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__9869 = arguments.length;
switch (G__9869) {
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
var c__6646__auto___9923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto___9923,out){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto___9923,out){
return (function (state_9901){
var state_val_9902 = (state_9901[(1)]);
if((state_val_9902 === (7))){
var inst_9881 = (state_9901[(7)]);
var inst_9880 = (state_9901[(8)]);
var inst_9880__$1 = (state_9901[(2)]);
var inst_9881__$1 = cljs.core.nth.call(null,inst_9880__$1,(0),null);
var inst_9882 = cljs.core.nth.call(null,inst_9880__$1,(1),null);
var inst_9883 = (inst_9881__$1 == null);
var state_9901__$1 = (function (){var statearr_9903 = state_9901;
(statearr_9903[(7)] = inst_9881__$1);

(statearr_9903[(8)] = inst_9880__$1);

(statearr_9903[(9)] = inst_9882);

return statearr_9903;
})();
if(cljs.core.truth_(inst_9883)){
var statearr_9904_9924 = state_9901__$1;
(statearr_9904_9924[(1)] = (8));

} else {
var statearr_9905_9925 = state_9901__$1;
(statearr_9905_9925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9902 === (1))){
var inst_9870 = cljs.core.vec.call(null,chs);
var inst_9871 = inst_9870;
var state_9901__$1 = (function (){var statearr_9906 = state_9901;
(statearr_9906[(10)] = inst_9871);

return statearr_9906;
})();
var statearr_9907_9926 = state_9901__$1;
(statearr_9907_9926[(2)] = null);

(statearr_9907_9926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9902 === (4))){
var inst_9871 = (state_9901[(10)]);
var state_9901__$1 = state_9901;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9901__$1,(7),inst_9871);
} else {
if((state_val_9902 === (6))){
var inst_9897 = (state_9901[(2)]);
var state_9901__$1 = state_9901;
var statearr_9908_9927 = state_9901__$1;
(statearr_9908_9927[(2)] = inst_9897);

(statearr_9908_9927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9902 === (3))){
var inst_9899 = (state_9901[(2)]);
var state_9901__$1 = state_9901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9901__$1,inst_9899);
} else {
if((state_val_9902 === (2))){
var inst_9871 = (state_9901[(10)]);
var inst_9873 = cljs.core.count.call(null,inst_9871);
var inst_9874 = (inst_9873 > (0));
var state_9901__$1 = state_9901;
if(cljs.core.truth_(inst_9874)){
var statearr_9910_9928 = state_9901__$1;
(statearr_9910_9928[(1)] = (4));

} else {
var statearr_9911_9929 = state_9901__$1;
(statearr_9911_9929[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9902 === (11))){
var inst_9871 = (state_9901[(10)]);
var inst_9890 = (state_9901[(2)]);
var tmp9909 = inst_9871;
var inst_9871__$1 = tmp9909;
var state_9901__$1 = (function (){var statearr_9912 = state_9901;
(statearr_9912[(11)] = inst_9890);

(statearr_9912[(10)] = inst_9871__$1);

return statearr_9912;
})();
var statearr_9913_9930 = state_9901__$1;
(statearr_9913_9930[(2)] = null);

(statearr_9913_9930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9902 === (9))){
var inst_9881 = (state_9901[(7)]);
var state_9901__$1 = state_9901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9901__$1,(11),out,inst_9881);
} else {
if((state_val_9902 === (5))){
var inst_9895 = cljs.core.async.close_BANG_.call(null,out);
var state_9901__$1 = state_9901;
var statearr_9914_9931 = state_9901__$1;
(statearr_9914_9931[(2)] = inst_9895);

(statearr_9914_9931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9902 === (10))){
var inst_9893 = (state_9901[(2)]);
var state_9901__$1 = state_9901;
var statearr_9915_9932 = state_9901__$1;
(statearr_9915_9932[(2)] = inst_9893);

(statearr_9915_9932[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9902 === (8))){
var inst_9881 = (state_9901[(7)]);
var inst_9880 = (state_9901[(8)]);
var inst_9871 = (state_9901[(10)]);
var inst_9882 = (state_9901[(9)]);
var inst_9885 = (function (){var cs = inst_9871;
var vec__9876 = inst_9880;
var v = inst_9881;
var c = inst_9882;
return ((function (cs,vec__9876,v,c,inst_9881,inst_9880,inst_9871,inst_9882,state_val_9902,c__6646__auto___9923,out){
return (function (p1__9867_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9867_SHARP_);
});
;})(cs,vec__9876,v,c,inst_9881,inst_9880,inst_9871,inst_9882,state_val_9902,c__6646__auto___9923,out))
})();
var inst_9886 = cljs.core.filterv.call(null,inst_9885,inst_9871);
var inst_9871__$1 = inst_9886;
var state_9901__$1 = (function (){var statearr_9916 = state_9901;
(statearr_9916[(10)] = inst_9871__$1);

return statearr_9916;
})();
var statearr_9917_9933 = state_9901__$1;
(statearr_9917_9933[(2)] = null);

(statearr_9917_9933[(1)] = (2));


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
});})(c__6646__auto___9923,out))
;
return ((function (switch__6487__auto__,c__6646__auto___9923,out){
return (function() {
var cljs$core$async$state_machine__6488__auto__ = null;
var cljs$core$async$state_machine__6488__auto____0 = (function (){
var statearr_9918 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9918[(0)] = cljs$core$async$state_machine__6488__auto__);

(statearr_9918[(1)] = (1));

return statearr_9918;
});
var cljs$core$async$state_machine__6488__auto____1 = (function (state_9901){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_9901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e9919){if((e9919 instanceof Object)){
var ex__6491__auto__ = e9919;
var statearr_9920_9934 = state_9901;
(statearr_9920_9934[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9935 = state_9901;
state_9901 = G__9935;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$state_machine__6488__auto__ = function(state_9901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6488__auto____1.call(this,state_9901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6488__auto____0;
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6488__auto____1;
return cljs$core$async$state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto___9923,out))
})();
var state__6648__auto__ = (function (){var statearr_9921 = f__6647__auto__.call(null);
(statearr_9921[(6)] = c__6646__auto___9923);

return statearr_9921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto___9923,out))
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
var G__9937 = arguments.length;
switch (G__9937) {
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
var c__6646__auto___9982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto___9982,out){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto___9982,out){
return (function (state_9961){
var state_val_9962 = (state_9961[(1)]);
if((state_val_9962 === (7))){
var inst_9943 = (state_9961[(7)]);
var inst_9943__$1 = (state_9961[(2)]);
var inst_9944 = (inst_9943__$1 == null);
var inst_9945 = cljs.core.not.call(null,inst_9944);
var state_9961__$1 = (function (){var statearr_9963 = state_9961;
(statearr_9963[(7)] = inst_9943__$1);

return statearr_9963;
})();
if(inst_9945){
var statearr_9964_9983 = state_9961__$1;
(statearr_9964_9983[(1)] = (8));

} else {
var statearr_9965_9984 = state_9961__$1;
(statearr_9965_9984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9962 === (1))){
var inst_9938 = (0);
var state_9961__$1 = (function (){var statearr_9966 = state_9961;
(statearr_9966[(8)] = inst_9938);

return statearr_9966;
})();
var statearr_9967_9985 = state_9961__$1;
(statearr_9967_9985[(2)] = null);

(statearr_9967_9985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9962 === (4))){
var state_9961__$1 = state_9961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9961__$1,(7),ch);
} else {
if((state_val_9962 === (6))){
var inst_9956 = (state_9961[(2)]);
var state_9961__$1 = state_9961;
var statearr_9968_9986 = state_9961__$1;
(statearr_9968_9986[(2)] = inst_9956);

(statearr_9968_9986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9962 === (3))){
var inst_9958 = (state_9961[(2)]);
var inst_9959 = cljs.core.async.close_BANG_.call(null,out);
var state_9961__$1 = (function (){var statearr_9969 = state_9961;
(statearr_9969[(9)] = inst_9958);

return statearr_9969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9961__$1,inst_9959);
} else {
if((state_val_9962 === (2))){
var inst_9938 = (state_9961[(8)]);
var inst_9940 = (inst_9938 < n);
var state_9961__$1 = state_9961;
if(cljs.core.truth_(inst_9940)){
var statearr_9970_9987 = state_9961__$1;
(statearr_9970_9987[(1)] = (4));

} else {
var statearr_9971_9988 = state_9961__$1;
(statearr_9971_9988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9962 === (11))){
var inst_9938 = (state_9961[(8)]);
var inst_9948 = (state_9961[(2)]);
var inst_9949 = (inst_9938 + (1));
var inst_9938__$1 = inst_9949;
var state_9961__$1 = (function (){var statearr_9972 = state_9961;
(statearr_9972[(8)] = inst_9938__$1);

(statearr_9972[(10)] = inst_9948);

return statearr_9972;
})();
var statearr_9973_9989 = state_9961__$1;
(statearr_9973_9989[(2)] = null);

(statearr_9973_9989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9962 === (9))){
var state_9961__$1 = state_9961;
var statearr_9974_9990 = state_9961__$1;
(statearr_9974_9990[(2)] = null);

(statearr_9974_9990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9962 === (5))){
var state_9961__$1 = state_9961;
var statearr_9975_9991 = state_9961__$1;
(statearr_9975_9991[(2)] = null);

(statearr_9975_9991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9962 === (10))){
var inst_9953 = (state_9961[(2)]);
var state_9961__$1 = state_9961;
var statearr_9976_9992 = state_9961__$1;
(statearr_9976_9992[(2)] = inst_9953);

(statearr_9976_9992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9962 === (8))){
var inst_9943 = (state_9961[(7)]);
var state_9961__$1 = state_9961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9961__$1,(11),out,inst_9943);
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
});})(c__6646__auto___9982,out))
;
return ((function (switch__6487__auto__,c__6646__auto___9982,out){
return (function() {
var cljs$core$async$state_machine__6488__auto__ = null;
var cljs$core$async$state_machine__6488__auto____0 = (function (){
var statearr_9977 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9977[(0)] = cljs$core$async$state_machine__6488__auto__);

(statearr_9977[(1)] = (1));

return statearr_9977;
});
var cljs$core$async$state_machine__6488__auto____1 = (function (state_9961){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_9961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e9978){if((e9978 instanceof Object)){
var ex__6491__auto__ = e9978;
var statearr_9979_9993 = state_9961;
(statearr_9979_9993[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9994 = state_9961;
state_9961 = G__9994;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$state_machine__6488__auto__ = function(state_9961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6488__auto____1.call(this,state_9961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6488__auto____0;
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6488__auto____1;
return cljs$core$async$state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto___9982,out))
})();
var state__6648__auto__ = (function (){var statearr_9980 = f__6647__auto__.call(null);
(statearr_9980[(6)] = c__6646__auto___9982);

return statearr_9980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto___9982,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9996 = (function (f,ch,meta9997){
this.f = f;
this.ch = ch;
this.meta9997 = meta9997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9998,meta9997__$1){
var self__ = this;
var _9998__$1 = this;
return (new cljs.core.async.t_cljs$core$async9996(self__.f,self__.ch,meta9997__$1));
});

cljs.core.async.t_cljs$core$async9996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9998){
var self__ = this;
var _9998__$1 = this;
return self__.meta9997;
});

cljs.core.async.t_cljs$core$async9996.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9996.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9996.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9996.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9996.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9999 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9999 = (function (f,ch,meta9997,_,fn1,meta10000){
this.f = f;
this.ch = ch;
this.meta9997 = meta9997;
this._ = _;
this.fn1 = fn1;
this.meta10000 = meta10000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10001,meta10000__$1){
var self__ = this;
var _10001__$1 = this;
return (new cljs.core.async.t_cljs$core$async9999(self__.f,self__.ch,self__.meta9997,self__._,self__.fn1,meta10000__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10001){
var self__ = this;
var _10001__$1 = this;
return self__.meta10000;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9999.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9999.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9995_SHARP_){
return f1.call(null,(((p1__9995_SHARP_ == null))?null:self__.f.call(null,p1__9995_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9999.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9997","meta9997",1617270468,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async9996","cljs.core.async/t_cljs$core$async9996",85862093,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta10000","meta10000",-732636215,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9999.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9999";

cljs.core.async.t_cljs$core$async9999.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async9999");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9999.
 */
cljs.core.async.__GT_t_cljs$core$async9999 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9999(f__$1,ch__$1,meta9997__$1,___$2,fn1__$1,meta10000){
return (new cljs.core.async.t_cljs$core$async9999(f__$1,ch__$1,meta9997__$1,___$2,fn1__$1,meta10000));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9999(self__.f,self__.ch,self__.meta9997,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async9996.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9996.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9997","meta9997",1617270468,null)], null);
});

cljs.core.async.t_cljs$core$async9996.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9996";

cljs.core.async.t_cljs$core$async9996.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async9996");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9996.
 */
cljs.core.async.__GT_t_cljs$core$async9996 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9996(f__$1,ch__$1,meta9997){
return (new cljs.core.async.t_cljs$core$async9996(f__$1,ch__$1,meta9997));
});

}

return (new cljs.core.async.t_cljs$core$async9996(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10002 = (function (f,ch,meta10003){
this.f = f;
this.ch = ch;
this.meta10003 = meta10003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10004,meta10003__$1){
var self__ = this;
var _10004__$1 = this;
return (new cljs.core.async.t_cljs$core$async10002(self__.f,self__.ch,meta10003__$1));
});

cljs.core.async.t_cljs$core$async10002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10004){
var self__ = this;
var _10004__$1 = this;
return self__.meta10003;
});

cljs.core.async.t_cljs$core$async10002.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10002.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10002.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10002.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10002.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10002.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async10002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10003","meta10003",409627556,null)], null);
});

cljs.core.async.t_cljs$core$async10002.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10002";

cljs.core.async.t_cljs$core$async10002.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async10002");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10002.
 */
cljs.core.async.__GT_t_cljs$core$async10002 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async10002(f__$1,ch__$1,meta10003){
return (new cljs.core.async.t_cljs$core$async10002(f__$1,ch__$1,meta10003));
});

}

return (new cljs.core.async.t_cljs$core$async10002(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10005 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10005 = (function (p,ch,meta10006){
this.p = p;
this.ch = ch;
this.meta10006 = meta10006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10007,meta10006__$1){
var self__ = this;
var _10007__$1 = this;
return (new cljs.core.async.t_cljs$core$async10005(self__.p,self__.ch,meta10006__$1));
});

cljs.core.async.t_cljs$core$async10005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10007){
var self__ = this;
var _10007__$1 = this;
return self__.meta10006;
});

cljs.core.async.t_cljs$core$async10005.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10005.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10005.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10005.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10005.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10005.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10005.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async10005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10006","meta10006",-1406607656,null)], null);
});

cljs.core.async.t_cljs$core$async10005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10005";

cljs.core.async.t_cljs$core$async10005.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async10005");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10005.
 */
cljs.core.async.__GT_t_cljs$core$async10005 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async10005(p__$1,ch__$1,meta10006){
return (new cljs.core.async.t_cljs$core$async10005(p__$1,ch__$1,meta10006));
});

}

return (new cljs.core.async.t_cljs$core$async10005(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10009 = arguments.length;
switch (G__10009) {
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
var c__6646__auto___10049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto___10049,out){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto___10049,out){
return (function (state_10030){
var state_val_10031 = (state_10030[(1)]);
if((state_val_10031 === (7))){
var inst_10026 = (state_10030[(2)]);
var state_10030__$1 = state_10030;
var statearr_10032_10050 = state_10030__$1;
(statearr_10032_10050[(2)] = inst_10026);

(statearr_10032_10050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (1))){
var state_10030__$1 = state_10030;
var statearr_10033_10051 = state_10030__$1;
(statearr_10033_10051[(2)] = null);

(statearr_10033_10051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (4))){
var inst_10012 = (state_10030[(7)]);
var inst_10012__$1 = (state_10030[(2)]);
var inst_10013 = (inst_10012__$1 == null);
var state_10030__$1 = (function (){var statearr_10034 = state_10030;
(statearr_10034[(7)] = inst_10012__$1);

return statearr_10034;
})();
if(cljs.core.truth_(inst_10013)){
var statearr_10035_10052 = state_10030__$1;
(statearr_10035_10052[(1)] = (5));

} else {
var statearr_10036_10053 = state_10030__$1;
(statearr_10036_10053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (6))){
var inst_10012 = (state_10030[(7)]);
var inst_10017 = p.call(null,inst_10012);
var state_10030__$1 = state_10030;
if(cljs.core.truth_(inst_10017)){
var statearr_10037_10054 = state_10030__$1;
(statearr_10037_10054[(1)] = (8));

} else {
var statearr_10038_10055 = state_10030__$1;
(statearr_10038_10055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (3))){
var inst_10028 = (state_10030[(2)]);
var state_10030__$1 = state_10030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10030__$1,inst_10028);
} else {
if((state_val_10031 === (2))){
var state_10030__$1 = state_10030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10030__$1,(4),ch);
} else {
if((state_val_10031 === (11))){
var inst_10020 = (state_10030[(2)]);
var state_10030__$1 = state_10030;
var statearr_10039_10056 = state_10030__$1;
(statearr_10039_10056[(2)] = inst_10020);

(statearr_10039_10056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (9))){
var state_10030__$1 = state_10030;
var statearr_10040_10057 = state_10030__$1;
(statearr_10040_10057[(2)] = null);

(statearr_10040_10057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (5))){
var inst_10015 = cljs.core.async.close_BANG_.call(null,out);
var state_10030__$1 = state_10030;
var statearr_10041_10058 = state_10030__$1;
(statearr_10041_10058[(2)] = inst_10015);

(statearr_10041_10058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (10))){
var inst_10023 = (state_10030[(2)]);
var state_10030__$1 = (function (){var statearr_10042 = state_10030;
(statearr_10042[(8)] = inst_10023);

return statearr_10042;
})();
var statearr_10043_10059 = state_10030__$1;
(statearr_10043_10059[(2)] = null);

(statearr_10043_10059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (8))){
var inst_10012 = (state_10030[(7)]);
var state_10030__$1 = state_10030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10030__$1,(11),out,inst_10012);
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
});})(c__6646__auto___10049,out))
;
return ((function (switch__6487__auto__,c__6646__auto___10049,out){
return (function() {
var cljs$core$async$state_machine__6488__auto__ = null;
var cljs$core$async$state_machine__6488__auto____0 = (function (){
var statearr_10044 = [null,null,null,null,null,null,null,null,null];
(statearr_10044[(0)] = cljs$core$async$state_machine__6488__auto__);

(statearr_10044[(1)] = (1));

return statearr_10044;
});
var cljs$core$async$state_machine__6488__auto____1 = (function (state_10030){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_10030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e10045){if((e10045 instanceof Object)){
var ex__6491__auto__ = e10045;
var statearr_10046_10060 = state_10030;
(statearr_10046_10060[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10061 = state_10030;
state_10030 = G__10061;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$state_machine__6488__auto__ = function(state_10030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6488__auto____1.call(this,state_10030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6488__auto____0;
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6488__auto____1;
return cljs$core$async$state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto___10049,out))
})();
var state__6648__auto__ = (function (){var statearr_10047 = f__6647__auto__.call(null);
(statearr_10047[(6)] = c__6646__auto___10049);

return statearr_10047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto___10049,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__10063 = arguments.length;
switch (G__10063) {
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
var c__6646__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto__){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto__){
return (function (state_10126){
var state_val_10127 = (state_10126[(1)]);
if((state_val_10127 === (7))){
var inst_10122 = (state_10126[(2)]);
var state_10126__$1 = state_10126;
var statearr_10128_10166 = state_10126__$1;
(statearr_10128_10166[(2)] = inst_10122);

(statearr_10128_10166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (20))){
var inst_10092 = (state_10126[(7)]);
var inst_10103 = (state_10126[(2)]);
var inst_10104 = cljs.core.next.call(null,inst_10092);
var inst_10078 = inst_10104;
var inst_10079 = null;
var inst_10080 = (0);
var inst_10081 = (0);
var state_10126__$1 = (function (){var statearr_10129 = state_10126;
(statearr_10129[(8)] = inst_10103);

(statearr_10129[(9)] = inst_10078);

(statearr_10129[(10)] = inst_10080);

(statearr_10129[(11)] = inst_10081);

(statearr_10129[(12)] = inst_10079);

return statearr_10129;
})();
var statearr_10130_10167 = state_10126__$1;
(statearr_10130_10167[(2)] = null);

(statearr_10130_10167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (1))){
var state_10126__$1 = state_10126;
var statearr_10131_10168 = state_10126__$1;
(statearr_10131_10168[(2)] = null);

(statearr_10131_10168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (4))){
var inst_10067 = (state_10126[(13)]);
var inst_10067__$1 = (state_10126[(2)]);
var inst_10068 = (inst_10067__$1 == null);
var state_10126__$1 = (function (){var statearr_10132 = state_10126;
(statearr_10132[(13)] = inst_10067__$1);

return statearr_10132;
})();
if(cljs.core.truth_(inst_10068)){
var statearr_10133_10169 = state_10126__$1;
(statearr_10133_10169[(1)] = (5));

} else {
var statearr_10134_10170 = state_10126__$1;
(statearr_10134_10170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (15))){
var state_10126__$1 = state_10126;
var statearr_10138_10171 = state_10126__$1;
(statearr_10138_10171[(2)] = null);

(statearr_10138_10171[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (21))){
var state_10126__$1 = state_10126;
var statearr_10139_10172 = state_10126__$1;
(statearr_10139_10172[(2)] = null);

(statearr_10139_10172[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (13))){
var inst_10078 = (state_10126[(9)]);
var inst_10080 = (state_10126[(10)]);
var inst_10081 = (state_10126[(11)]);
var inst_10079 = (state_10126[(12)]);
var inst_10088 = (state_10126[(2)]);
var inst_10089 = (inst_10081 + (1));
var tmp10135 = inst_10078;
var tmp10136 = inst_10080;
var tmp10137 = inst_10079;
var inst_10078__$1 = tmp10135;
var inst_10079__$1 = tmp10137;
var inst_10080__$1 = tmp10136;
var inst_10081__$1 = inst_10089;
var state_10126__$1 = (function (){var statearr_10140 = state_10126;
(statearr_10140[(14)] = inst_10088);

(statearr_10140[(9)] = inst_10078__$1);

(statearr_10140[(10)] = inst_10080__$1);

(statearr_10140[(11)] = inst_10081__$1);

(statearr_10140[(12)] = inst_10079__$1);

return statearr_10140;
})();
var statearr_10141_10173 = state_10126__$1;
(statearr_10141_10173[(2)] = null);

(statearr_10141_10173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (22))){
var state_10126__$1 = state_10126;
var statearr_10142_10174 = state_10126__$1;
(statearr_10142_10174[(2)] = null);

(statearr_10142_10174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (6))){
var inst_10067 = (state_10126[(13)]);
var inst_10076 = f.call(null,inst_10067);
var inst_10077 = cljs.core.seq.call(null,inst_10076);
var inst_10078 = inst_10077;
var inst_10079 = null;
var inst_10080 = (0);
var inst_10081 = (0);
var state_10126__$1 = (function (){var statearr_10143 = state_10126;
(statearr_10143[(9)] = inst_10078);

(statearr_10143[(10)] = inst_10080);

(statearr_10143[(11)] = inst_10081);

(statearr_10143[(12)] = inst_10079);

return statearr_10143;
})();
var statearr_10144_10175 = state_10126__$1;
(statearr_10144_10175[(2)] = null);

(statearr_10144_10175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (17))){
var inst_10092 = (state_10126[(7)]);
var inst_10096 = cljs.core.chunk_first.call(null,inst_10092);
var inst_10097 = cljs.core.chunk_rest.call(null,inst_10092);
var inst_10098 = cljs.core.count.call(null,inst_10096);
var inst_10078 = inst_10097;
var inst_10079 = inst_10096;
var inst_10080 = inst_10098;
var inst_10081 = (0);
var state_10126__$1 = (function (){var statearr_10145 = state_10126;
(statearr_10145[(9)] = inst_10078);

(statearr_10145[(10)] = inst_10080);

(statearr_10145[(11)] = inst_10081);

(statearr_10145[(12)] = inst_10079);

return statearr_10145;
})();
var statearr_10146_10176 = state_10126__$1;
(statearr_10146_10176[(2)] = null);

(statearr_10146_10176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (3))){
var inst_10124 = (state_10126[(2)]);
var state_10126__$1 = state_10126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10126__$1,inst_10124);
} else {
if((state_val_10127 === (12))){
var inst_10112 = (state_10126[(2)]);
var state_10126__$1 = state_10126;
var statearr_10147_10177 = state_10126__$1;
(statearr_10147_10177[(2)] = inst_10112);

(statearr_10147_10177[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (2))){
var state_10126__$1 = state_10126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10126__$1,(4),in$);
} else {
if((state_val_10127 === (23))){
var inst_10120 = (state_10126[(2)]);
var state_10126__$1 = state_10126;
var statearr_10148_10178 = state_10126__$1;
(statearr_10148_10178[(2)] = inst_10120);

(statearr_10148_10178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (19))){
var inst_10107 = (state_10126[(2)]);
var state_10126__$1 = state_10126;
var statearr_10149_10179 = state_10126__$1;
(statearr_10149_10179[(2)] = inst_10107);

(statearr_10149_10179[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (11))){
var inst_10092 = (state_10126[(7)]);
var inst_10078 = (state_10126[(9)]);
var inst_10092__$1 = cljs.core.seq.call(null,inst_10078);
var state_10126__$1 = (function (){var statearr_10150 = state_10126;
(statearr_10150[(7)] = inst_10092__$1);

return statearr_10150;
})();
if(inst_10092__$1){
var statearr_10151_10180 = state_10126__$1;
(statearr_10151_10180[(1)] = (14));

} else {
var statearr_10152_10181 = state_10126__$1;
(statearr_10152_10181[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (9))){
var inst_10114 = (state_10126[(2)]);
var inst_10115 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_10126__$1 = (function (){var statearr_10153 = state_10126;
(statearr_10153[(15)] = inst_10114);

return statearr_10153;
})();
if(cljs.core.truth_(inst_10115)){
var statearr_10154_10182 = state_10126__$1;
(statearr_10154_10182[(1)] = (21));

} else {
var statearr_10155_10183 = state_10126__$1;
(statearr_10155_10183[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (5))){
var inst_10070 = cljs.core.async.close_BANG_.call(null,out);
var state_10126__$1 = state_10126;
var statearr_10156_10184 = state_10126__$1;
(statearr_10156_10184[(2)] = inst_10070);

(statearr_10156_10184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (14))){
var inst_10092 = (state_10126[(7)]);
var inst_10094 = cljs.core.chunked_seq_QMARK_.call(null,inst_10092);
var state_10126__$1 = state_10126;
if(inst_10094){
var statearr_10157_10185 = state_10126__$1;
(statearr_10157_10185[(1)] = (17));

} else {
var statearr_10158_10186 = state_10126__$1;
(statearr_10158_10186[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (16))){
var inst_10110 = (state_10126[(2)]);
var state_10126__$1 = state_10126;
var statearr_10159_10187 = state_10126__$1;
(statearr_10159_10187[(2)] = inst_10110);

(statearr_10159_10187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (10))){
var inst_10081 = (state_10126[(11)]);
var inst_10079 = (state_10126[(12)]);
var inst_10086 = cljs.core._nth.call(null,inst_10079,inst_10081);
var state_10126__$1 = state_10126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10126__$1,(13),out,inst_10086);
} else {
if((state_val_10127 === (18))){
var inst_10092 = (state_10126[(7)]);
var inst_10101 = cljs.core.first.call(null,inst_10092);
var state_10126__$1 = state_10126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10126__$1,(20),out,inst_10101);
} else {
if((state_val_10127 === (8))){
var inst_10080 = (state_10126[(10)]);
var inst_10081 = (state_10126[(11)]);
var inst_10083 = (inst_10081 < inst_10080);
var inst_10084 = inst_10083;
var state_10126__$1 = state_10126;
if(cljs.core.truth_(inst_10084)){
var statearr_10160_10188 = state_10126__$1;
(statearr_10160_10188[(1)] = (10));

} else {
var statearr_10161_10189 = state_10126__$1;
(statearr_10161_10189[(1)] = (11));

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
});})(c__6646__auto__))
;
return ((function (switch__6487__auto__,c__6646__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6488__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6488__auto____0 = (function (){
var statearr_10162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10162[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6488__auto__);

(statearr_10162[(1)] = (1));

return statearr_10162;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6488__auto____1 = (function (state_10126){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_10126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e10163){if((e10163 instanceof Object)){
var ex__6491__auto__ = e10163;
var statearr_10164_10190 = state_10126;
(statearr_10164_10190[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10191 = state_10126;
state_10126 = G__10191;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6488__auto__ = function(state_10126){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6488__auto____1.call(this,state_10126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6488__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6488__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto__))
})();
var state__6648__auto__ = (function (){var statearr_10165 = f__6647__auto__.call(null);
(statearr_10165[(6)] = c__6646__auto__);

return statearr_10165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto__))
);

return c__6646__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__10193 = arguments.length;
switch (G__10193) {
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
var G__10196 = arguments.length;
switch (G__10196) {
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
var G__10199 = arguments.length;
switch (G__10199) {
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
var c__6646__auto___10246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto___10246,out){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto___10246,out){
return (function (state_10223){
var state_val_10224 = (state_10223[(1)]);
if((state_val_10224 === (7))){
var inst_10218 = (state_10223[(2)]);
var state_10223__$1 = state_10223;
var statearr_10225_10247 = state_10223__$1;
(statearr_10225_10247[(2)] = inst_10218);

(statearr_10225_10247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10224 === (1))){
var inst_10200 = null;
var state_10223__$1 = (function (){var statearr_10226 = state_10223;
(statearr_10226[(7)] = inst_10200);

return statearr_10226;
})();
var statearr_10227_10248 = state_10223__$1;
(statearr_10227_10248[(2)] = null);

(statearr_10227_10248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10224 === (4))){
var inst_10203 = (state_10223[(8)]);
var inst_10203__$1 = (state_10223[(2)]);
var inst_10204 = (inst_10203__$1 == null);
var inst_10205 = cljs.core.not.call(null,inst_10204);
var state_10223__$1 = (function (){var statearr_10228 = state_10223;
(statearr_10228[(8)] = inst_10203__$1);

return statearr_10228;
})();
if(inst_10205){
var statearr_10229_10249 = state_10223__$1;
(statearr_10229_10249[(1)] = (5));

} else {
var statearr_10230_10250 = state_10223__$1;
(statearr_10230_10250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10224 === (6))){
var state_10223__$1 = state_10223;
var statearr_10231_10251 = state_10223__$1;
(statearr_10231_10251[(2)] = null);

(statearr_10231_10251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10224 === (3))){
var inst_10220 = (state_10223[(2)]);
var inst_10221 = cljs.core.async.close_BANG_.call(null,out);
var state_10223__$1 = (function (){var statearr_10232 = state_10223;
(statearr_10232[(9)] = inst_10220);

return statearr_10232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10223__$1,inst_10221);
} else {
if((state_val_10224 === (2))){
var state_10223__$1 = state_10223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10223__$1,(4),ch);
} else {
if((state_val_10224 === (11))){
var inst_10203 = (state_10223[(8)]);
var inst_10212 = (state_10223[(2)]);
var inst_10200 = inst_10203;
var state_10223__$1 = (function (){var statearr_10233 = state_10223;
(statearr_10233[(10)] = inst_10212);

(statearr_10233[(7)] = inst_10200);

return statearr_10233;
})();
var statearr_10234_10252 = state_10223__$1;
(statearr_10234_10252[(2)] = null);

(statearr_10234_10252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10224 === (9))){
var inst_10203 = (state_10223[(8)]);
var state_10223__$1 = state_10223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10223__$1,(11),out,inst_10203);
} else {
if((state_val_10224 === (5))){
var inst_10200 = (state_10223[(7)]);
var inst_10203 = (state_10223[(8)]);
var inst_10207 = cljs.core._EQ_.call(null,inst_10203,inst_10200);
var state_10223__$1 = state_10223;
if(inst_10207){
var statearr_10236_10253 = state_10223__$1;
(statearr_10236_10253[(1)] = (8));

} else {
var statearr_10237_10254 = state_10223__$1;
(statearr_10237_10254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10224 === (10))){
var inst_10215 = (state_10223[(2)]);
var state_10223__$1 = state_10223;
var statearr_10238_10255 = state_10223__$1;
(statearr_10238_10255[(2)] = inst_10215);

(statearr_10238_10255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10224 === (8))){
var inst_10200 = (state_10223[(7)]);
var tmp10235 = inst_10200;
var inst_10200__$1 = tmp10235;
var state_10223__$1 = (function (){var statearr_10239 = state_10223;
(statearr_10239[(7)] = inst_10200__$1);

return statearr_10239;
})();
var statearr_10240_10256 = state_10223__$1;
(statearr_10240_10256[(2)] = null);

(statearr_10240_10256[(1)] = (2));


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
});})(c__6646__auto___10246,out))
;
return ((function (switch__6487__auto__,c__6646__auto___10246,out){
return (function() {
var cljs$core$async$state_machine__6488__auto__ = null;
var cljs$core$async$state_machine__6488__auto____0 = (function (){
var statearr_10241 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10241[(0)] = cljs$core$async$state_machine__6488__auto__);

(statearr_10241[(1)] = (1));

return statearr_10241;
});
var cljs$core$async$state_machine__6488__auto____1 = (function (state_10223){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_10223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e10242){if((e10242 instanceof Object)){
var ex__6491__auto__ = e10242;
var statearr_10243_10257 = state_10223;
(statearr_10243_10257[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10258 = state_10223;
state_10223 = G__10258;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$state_machine__6488__auto__ = function(state_10223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6488__auto____1.call(this,state_10223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6488__auto____0;
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6488__auto____1;
return cljs$core$async$state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto___10246,out))
})();
var state__6648__auto__ = (function (){var statearr_10244 = f__6647__auto__.call(null);
(statearr_10244[(6)] = c__6646__auto___10246);

return statearr_10244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto___10246,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__10260 = arguments.length;
switch (G__10260) {
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
var c__6646__auto___10326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto___10326,out){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto___10326,out){
return (function (state_10298){
var state_val_10299 = (state_10298[(1)]);
if((state_val_10299 === (7))){
var inst_10294 = (state_10298[(2)]);
var state_10298__$1 = state_10298;
var statearr_10300_10327 = state_10298__$1;
(statearr_10300_10327[(2)] = inst_10294);

(statearr_10300_10327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10299 === (1))){
var inst_10261 = (new Array(n));
var inst_10262 = inst_10261;
var inst_10263 = (0);
var state_10298__$1 = (function (){var statearr_10301 = state_10298;
(statearr_10301[(7)] = inst_10262);

(statearr_10301[(8)] = inst_10263);

return statearr_10301;
})();
var statearr_10302_10328 = state_10298__$1;
(statearr_10302_10328[(2)] = null);

(statearr_10302_10328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10299 === (4))){
var inst_10266 = (state_10298[(9)]);
var inst_10266__$1 = (state_10298[(2)]);
var inst_10267 = (inst_10266__$1 == null);
var inst_10268 = cljs.core.not.call(null,inst_10267);
var state_10298__$1 = (function (){var statearr_10303 = state_10298;
(statearr_10303[(9)] = inst_10266__$1);

return statearr_10303;
})();
if(inst_10268){
var statearr_10304_10329 = state_10298__$1;
(statearr_10304_10329[(1)] = (5));

} else {
var statearr_10305_10330 = state_10298__$1;
(statearr_10305_10330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10299 === (15))){
var inst_10288 = (state_10298[(2)]);
var state_10298__$1 = state_10298;
var statearr_10306_10331 = state_10298__$1;
(statearr_10306_10331[(2)] = inst_10288);

(statearr_10306_10331[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10299 === (13))){
var state_10298__$1 = state_10298;
var statearr_10307_10332 = state_10298__$1;
(statearr_10307_10332[(2)] = null);

(statearr_10307_10332[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10299 === (6))){
var inst_10263 = (state_10298[(8)]);
var inst_10284 = (inst_10263 > (0));
var state_10298__$1 = state_10298;
if(cljs.core.truth_(inst_10284)){
var statearr_10308_10333 = state_10298__$1;
(statearr_10308_10333[(1)] = (12));

} else {
var statearr_10309_10334 = state_10298__$1;
(statearr_10309_10334[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10299 === (3))){
var inst_10296 = (state_10298[(2)]);
var state_10298__$1 = state_10298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10298__$1,inst_10296);
} else {
if((state_val_10299 === (12))){
var inst_10262 = (state_10298[(7)]);
var inst_10286 = cljs.core.vec.call(null,inst_10262);
var state_10298__$1 = state_10298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10298__$1,(15),out,inst_10286);
} else {
if((state_val_10299 === (2))){
var state_10298__$1 = state_10298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10298__$1,(4),ch);
} else {
if((state_val_10299 === (11))){
var inst_10278 = (state_10298[(2)]);
var inst_10279 = (new Array(n));
var inst_10262 = inst_10279;
var inst_10263 = (0);
var state_10298__$1 = (function (){var statearr_10310 = state_10298;
(statearr_10310[(7)] = inst_10262);

(statearr_10310[(10)] = inst_10278);

(statearr_10310[(8)] = inst_10263);

return statearr_10310;
})();
var statearr_10311_10335 = state_10298__$1;
(statearr_10311_10335[(2)] = null);

(statearr_10311_10335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10299 === (9))){
var inst_10262 = (state_10298[(7)]);
var inst_10276 = cljs.core.vec.call(null,inst_10262);
var state_10298__$1 = state_10298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10298__$1,(11),out,inst_10276);
} else {
if((state_val_10299 === (5))){
var inst_10262 = (state_10298[(7)]);
var inst_10271 = (state_10298[(11)]);
var inst_10266 = (state_10298[(9)]);
var inst_10263 = (state_10298[(8)]);
var inst_10270 = (inst_10262[inst_10263] = inst_10266);
var inst_10271__$1 = (inst_10263 + (1));
var inst_10272 = (inst_10271__$1 < n);
var state_10298__$1 = (function (){var statearr_10312 = state_10298;
(statearr_10312[(11)] = inst_10271__$1);

(statearr_10312[(12)] = inst_10270);

return statearr_10312;
})();
if(cljs.core.truth_(inst_10272)){
var statearr_10313_10336 = state_10298__$1;
(statearr_10313_10336[(1)] = (8));

} else {
var statearr_10314_10337 = state_10298__$1;
(statearr_10314_10337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10299 === (14))){
var inst_10291 = (state_10298[(2)]);
var inst_10292 = cljs.core.async.close_BANG_.call(null,out);
var state_10298__$1 = (function (){var statearr_10316 = state_10298;
(statearr_10316[(13)] = inst_10291);

return statearr_10316;
})();
var statearr_10317_10338 = state_10298__$1;
(statearr_10317_10338[(2)] = inst_10292);

(statearr_10317_10338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10299 === (10))){
var inst_10282 = (state_10298[(2)]);
var state_10298__$1 = state_10298;
var statearr_10318_10339 = state_10298__$1;
(statearr_10318_10339[(2)] = inst_10282);

(statearr_10318_10339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10299 === (8))){
var inst_10262 = (state_10298[(7)]);
var inst_10271 = (state_10298[(11)]);
var tmp10315 = inst_10262;
var inst_10262__$1 = tmp10315;
var inst_10263 = inst_10271;
var state_10298__$1 = (function (){var statearr_10319 = state_10298;
(statearr_10319[(7)] = inst_10262__$1);

(statearr_10319[(8)] = inst_10263);

return statearr_10319;
})();
var statearr_10320_10340 = state_10298__$1;
(statearr_10320_10340[(2)] = null);

(statearr_10320_10340[(1)] = (2));


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
});})(c__6646__auto___10326,out))
;
return ((function (switch__6487__auto__,c__6646__auto___10326,out){
return (function() {
var cljs$core$async$state_machine__6488__auto__ = null;
var cljs$core$async$state_machine__6488__auto____0 = (function (){
var statearr_10321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10321[(0)] = cljs$core$async$state_machine__6488__auto__);

(statearr_10321[(1)] = (1));

return statearr_10321;
});
var cljs$core$async$state_machine__6488__auto____1 = (function (state_10298){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_10298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e10322){if((e10322 instanceof Object)){
var ex__6491__auto__ = e10322;
var statearr_10323_10341 = state_10298;
(statearr_10323_10341[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10342 = state_10298;
state_10298 = G__10342;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$state_machine__6488__auto__ = function(state_10298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6488__auto____1.call(this,state_10298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6488__auto____0;
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6488__auto____1;
return cljs$core$async$state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto___10326,out))
})();
var state__6648__auto__ = (function (){var statearr_10324 = f__6647__auto__.call(null);
(statearr_10324[(6)] = c__6646__auto___10326);

return statearr_10324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto___10326,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__10344 = arguments.length;
switch (G__10344) {
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
var c__6646__auto___10414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6646__auto___10414,out){
return (function (){
var f__6647__auto__ = (function (){var switch__6487__auto__ = ((function (c__6646__auto___10414,out){
return (function (state_10386){
var state_val_10387 = (state_10386[(1)]);
if((state_val_10387 === (7))){
var inst_10382 = (state_10386[(2)]);
var state_10386__$1 = state_10386;
var statearr_10388_10415 = state_10386__$1;
(statearr_10388_10415[(2)] = inst_10382);

(statearr_10388_10415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10387 === (1))){
var inst_10345 = [];
var inst_10346 = inst_10345;
var inst_10347 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_10386__$1 = (function (){var statearr_10389 = state_10386;
(statearr_10389[(7)] = inst_10347);

(statearr_10389[(8)] = inst_10346);

return statearr_10389;
})();
var statearr_10390_10416 = state_10386__$1;
(statearr_10390_10416[(2)] = null);

(statearr_10390_10416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10387 === (4))){
var inst_10350 = (state_10386[(9)]);
var inst_10350__$1 = (state_10386[(2)]);
var inst_10351 = (inst_10350__$1 == null);
var inst_10352 = cljs.core.not.call(null,inst_10351);
var state_10386__$1 = (function (){var statearr_10391 = state_10386;
(statearr_10391[(9)] = inst_10350__$1);

return statearr_10391;
})();
if(inst_10352){
var statearr_10392_10417 = state_10386__$1;
(statearr_10392_10417[(1)] = (5));

} else {
var statearr_10393_10418 = state_10386__$1;
(statearr_10393_10418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10387 === (15))){
var inst_10376 = (state_10386[(2)]);
var state_10386__$1 = state_10386;
var statearr_10394_10419 = state_10386__$1;
(statearr_10394_10419[(2)] = inst_10376);

(statearr_10394_10419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10387 === (13))){
var state_10386__$1 = state_10386;
var statearr_10395_10420 = state_10386__$1;
(statearr_10395_10420[(2)] = null);

(statearr_10395_10420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10387 === (6))){
var inst_10346 = (state_10386[(8)]);
var inst_10371 = inst_10346.length;
var inst_10372 = (inst_10371 > (0));
var state_10386__$1 = state_10386;
if(cljs.core.truth_(inst_10372)){
var statearr_10396_10421 = state_10386__$1;
(statearr_10396_10421[(1)] = (12));

} else {
var statearr_10397_10422 = state_10386__$1;
(statearr_10397_10422[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10387 === (3))){
var inst_10384 = (state_10386[(2)]);
var state_10386__$1 = state_10386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10386__$1,inst_10384);
} else {
if((state_val_10387 === (12))){
var inst_10346 = (state_10386[(8)]);
var inst_10374 = cljs.core.vec.call(null,inst_10346);
var state_10386__$1 = state_10386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10386__$1,(15),out,inst_10374);
} else {
if((state_val_10387 === (2))){
var state_10386__$1 = state_10386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10386__$1,(4),ch);
} else {
if((state_val_10387 === (11))){
var inst_10350 = (state_10386[(9)]);
var inst_10354 = (state_10386[(10)]);
var inst_10364 = (state_10386[(2)]);
var inst_10365 = [];
var inst_10366 = inst_10365.push(inst_10350);
var inst_10346 = inst_10365;
var inst_10347 = inst_10354;
var state_10386__$1 = (function (){var statearr_10398 = state_10386;
(statearr_10398[(7)] = inst_10347);

(statearr_10398[(11)] = inst_10364);

(statearr_10398[(8)] = inst_10346);

(statearr_10398[(12)] = inst_10366);

return statearr_10398;
})();
var statearr_10399_10423 = state_10386__$1;
(statearr_10399_10423[(2)] = null);

(statearr_10399_10423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10387 === (9))){
var inst_10346 = (state_10386[(8)]);
var inst_10362 = cljs.core.vec.call(null,inst_10346);
var state_10386__$1 = state_10386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10386__$1,(11),out,inst_10362);
} else {
if((state_val_10387 === (5))){
var inst_10350 = (state_10386[(9)]);
var inst_10354 = (state_10386[(10)]);
var inst_10347 = (state_10386[(7)]);
var inst_10354__$1 = f.call(null,inst_10350);
var inst_10355 = cljs.core._EQ_.call(null,inst_10354__$1,inst_10347);
var inst_10356 = cljs.core.keyword_identical_QMARK_.call(null,inst_10347,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_10357 = ((inst_10355) || (inst_10356));
var state_10386__$1 = (function (){var statearr_10400 = state_10386;
(statearr_10400[(10)] = inst_10354__$1);

return statearr_10400;
})();
if(cljs.core.truth_(inst_10357)){
var statearr_10401_10424 = state_10386__$1;
(statearr_10401_10424[(1)] = (8));

} else {
var statearr_10402_10425 = state_10386__$1;
(statearr_10402_10425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10387 === (14))){
var inst_10379 = (state_10386[(2)]);
var inst_10380 = cljs.core.async.close_BANG_.call(null,out);
var state_10386__$1 = (function (){var statearr_10404 = state_10386;
(statearr_10404[(13)] = inst_10379);

return statearr_10404;
})();
var statearr_10405_10426 = state_10386__$1;
(statearr_10405_10426[(2)] = inst_10380);

(statearr_10405_10426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10387 === (10))){
var inst_10369 = (state_10386[(2)]);
var state_10386__$1 = state_10386;
var statearr_10406_10427 = state_10386__$1;
(statearr_10406_10427[(2)] = inst_10369);

(statearr_10406_10427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10387 === (8))){
var inst_10350 = (state_10386[(9)]);
var inst_10354 = (state_10386[(10)]);
var inst_10346 = (state_10386[(8)]);
var inst_10359 = inst_10346.push(inst_10350);
var tmp10403 = inst_10346;
var inst_10346__$1 = tmp10403;
var inst_10347 = inst_10354;
var state_10386__$1 = (function (){var statearr_10407 = state_10386;
(statearr_10407[(14)] = inst_10359);

(statearr_10407[(7)] = inst_10347);

(statearr_10407[(8)] = inst_10346__$1);

return statearr_10407;
})();
var statearr_10408_10428 = state_10386__$1;
(statearr_10408_10428[(2)] = null);

(statearr_10408_10428[(1)] = (2));


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
});})(c__6646__auto___10414,out))
;
return ((function (switch__6487__auto__,c__6646__auto___10414,out){
return (function() {
var cljs$core$async$state_machine__6488__auto__ = null;
var cljs$core$async$state_machine__6488__auto____0 = (function (){
var statearr_10409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10409[(0)] = cljs$core$async$state_machine__6488__auto__);

(statearr_10409[(1)] = (1));

return statearr_10409;
});
var cljs$core$async$state_machine__6488__auto____1 = (function (state_10386){
while(true){
var ret_value__6489__auto__ = (function (){try{while(true){
var result__6490__auto__ = switch__6487__auto__.call(null,state_10386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6490__auto__;
}
break;
}
}catch (e10410){if((e10410 instanceof Object)){
var ex__6491__auto__ = e10410;
var statearr_10411_10429 = state_10386;
(statearr_10411_10429[(5)] = ex__6491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10430 = state_10386;
state_10386 = G__10430;
continue;
} else {
return ret_value__6489__auto__;
}
break;
}
});
cljs$core$async$state_machine__6488__auto__ = function(state_10386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6488__auto____1.call(this,state_10386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6488__auto____0;
cljs$core$async$state_machine__6488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6488__auto____1;
return cljs$core$async$state_machine__6488__auto__;
})()
;})(switch__6487__auto__,c__6646__auto___10414,out))
})();
var state__6648__auto__ = (function (){var statearr_10412 = f__6647__auto__.call(null);
(statearr_10412[(6)] = c__6646__auto___10414);

return statearr_10412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6648__auto__);
});})(c__6646__auto___10414,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26513 = arguments.length;
switch (G__26513) {
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
if(typeof cljs.core.async.t_cljs$core$async26514 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26514 = (function (f,blockable,meta26515){
this.f = f;
this.blockable = blockable;
this.meta26515 = meta26515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26516,meta26515__$1){
var self__ = this;
var _26516__$1 = this;
return (new cljs.core.async.t_cljs$core$async26514(self__.f,self__.blockable,meta26515__$1));
});

cljs.core.async.t_cljs$core$async26514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26516){
var self__ = this;
var _26516__$1 = this;
return self__.meta26515;
});

cljs.core.async.t_cljs$core$async26514.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26514.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26515","meta26515",90695182,null)], null);
});

cljs.core.async.t_cljs$core$async26514.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26514";

cljs.core.async.t_cljs$core$async26514.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26514");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26514.
 */
cljs.core.async.__GT_t_cljs$core$async26514 = (function cljs$core$async$__GT_t_cljs$core$async26514(f__$1,blockable__$1,meta26515){
return (new cljs.core.async.t_cljs$core$async26514(f__$1,blockable__$1,meta26515));
});

}

return (new cljs.core.async.t_cljs$core$async26514(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26520 = arguments.length;
switch (G__26520) {
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
var G__26523 = arguments.length;
switch (G__26523) {
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
var G__26526 = arguments.length;
switch (G__26526) {
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
var val_26528 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26528);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26528,ret){
return (function (){
return fn1.call(null,val_26528);
});})(val_26528,ret))
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
var G__26530 = arguments.length;
switch (G__26530) {
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
var n__4376__auto___26532 = n;
var x_26533 = (0);
while(true){
if((x_26533 < n__4376__auto___26532)){
(a[x_26533] = (0));

var G__26534 = (x_26533 + (1));
x_26533 = G__26534;
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

var G__26535 = (i + (1));
i = G__26535;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26536 = (function (flag,meta26537){
this.flag = flag;
this.meta26537 = meta26537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26538,meta26537__$1){
var self__ = this;
var _26538__$1 = this;
return (new cljs.core.async.t_cljs$core$async26536(self__.flag,meta26537__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26538){
var self__ = this;
var _26538__$1 = this;
return self__.meta26537;
});})(flag))
;

cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26536.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26537","meta26537",-951118399,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26536";

cljs.core.async.t_cljs$core$async26536.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26536");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26536.
 */
cljs.core.async.__GT_t_cljs$core$async26536 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26536(flag__$1,meta26537){
return (new cljs.core.async.t_cljs$core$async26536(flag__$1,meta26537));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26536(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26539 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26539 = (function (flag,cb,meta26540){
this.flag = flag;
this.cb = cb;
this.meta26540 = meta26540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26541,meta26540__$1){
var self__ = this;
var _26541__$1 = this;
return (new cljs.core.async.t_cljs$core$async26539(self__.flag,self__.cb,meta26540__$1));
});

cljs.core.async.t_cljs$core$async26539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26541){
var self__ = this;
var _26541__$1 = this;
return self__.meta26540;
});

cljs.core.async.t_cljs$core$async26539.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26539.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26540","meta26540",-2140756929,null)], null);
});

cljs.core.async.t_cljs$core$async26539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26539";

cljs.core.async.t_cljs$core$async26539.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26539");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26539.
 */
cljs.core.async.__GT_t_cljs$core$async26539 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26539(flag__$1,cb__$1,meta26540){
return (new cljs.core.async.t_cljs$core$async26539(flag__$1,cb__$1,meta26540));
});

}

return (new cljs.core.async.t_cljs$core$async26539(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26542_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26542_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26543_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26543_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26544 = (i + (1));
i = G__26544;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
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
var args__4502__auto__ = [];
var len__4499__auto___26550 = arguments.length;
var i__4500__auto___26551 = (0);
while(true){
if((i__4500__auto___26551 < len__4499__auto___26550)){
args__4502__auto__.push((arguments[i__4500__auto___26551]));

var G__26552 = (i__4500__auto___26551 + (1));
i__4500__auto___26551 = G__26552;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26547){
var map__26548 = p__26547;
var map__26548__$1 = ((((!((map__26548 == null)))?(((((map__26548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26548):map__26548);
var opts = map__26548__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26545){
var G__26546 = cljs.core.first.call(null,seq26545);
var seq26545__$1 = cljs.core.next.call(null,seq26545);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26546,seq26545__$1);
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
var G__26554 = arguments.length;
switch (G__26554) {
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
var c__26453__auto___26600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto___26600){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto___26600){
return (function (state_26578){
var state_val_26579 = (state_26578[(1)]);
if((state_val_26579 === (7))){
var inst_26574 = (state_26578[(2)]);
var state_26578__$1 = state_26578;
var statearr_26580_26601 = state_26578__$1;
(statearr_26580_26601[(2)] = inst_26574);

(statearr_26580_26601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (1))){
var state_26578__$1 = state_26578;
var statearr_26581_26602 = state_26578__$1;
(statearr_26581_26602[(2)] = null);

(statearr_26581_26602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (4))){
var inst_26557 = (state_26578[(7)]);
var inst_26557__$1 = (state_26578[(2)]);
var inst_26558 = (inst_26557__$1 == null);
var state_26578__$1 = (function (){var statearr_26582 = state_26578;
(statearr_26582[(7)] = inst_26557__$1);

return statearr_26582;
})();
if(cljs.core.truth_(inst_26558)){
var statearr_26583_26603 = state_26578__$1;
(statearr_26583_26603[(1)] = (5));

} else {
var statearr_26584_26604 = state_26578__$1;
(statearr_26584_26604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (13))){
var state_26578__$1 = state_26578;
var statearr_26585_26605 = state_26578__$1;
(statearr_26585_26605[(2)] = null);

(statearr_26585_26605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (6))){
var inst_26557 = (state_26578[(7)]);
var state_26578__$1 = state_26578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26578__$1,(11),to,inst_26557);
} else {
if((state_val_26579 === (3))){
var inst_26576 = (state_26578[(2)]);
var state_26578__$1 = state_26578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26578__$1,inst_26576);
} else {
if((state_val_26579 === (12))){
var state_26578__$1 = state_26578;
var statearr_26586_26606 = state_26578__$1;
(statearr_26586_26606[(2)] = null);

(statearr_26586_26606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (2))){
var state_26578__$1 = state_26578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26578__$1,(4),from);
} else {
if((state_val_26579 === (11))){
var inst_26567 = (state_26578[(2)]);
var state_26578__$1 = state_26578;
if(cljs.core.truth_(inst_26567)){
var statearr_26587_26607 = state_26578__$1;
(statearr_26587_26607[(1)] = (12));

} else {
var statearr_26588_26608 = state_26578__$1;
(statearr_26588_26608[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (9))){
var state_26578__$1 = state_26578;
var statearr_26589_26609 = state_26578__$1;
(statearr_26589_26609[(2)] = null);

(statearr_26589_26609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (5))){
var state_26578__$1 = state_26578;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26590_26610 = state_26578__$1;
(statearr_26590_26610[(1)] = (8));

} else {
var statearr_26591_26611 = state_26578__$1;
(statearr_26591_26611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (14))){
var inst_26572 = (state_26578[(2)]);
var state_26578__$1 = state_26578;
var statearr_26592_26612 = state_26578__$1;
(statearr_26592_26612[(2)] = inst_26572);

(statearr_26592_26612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (10))){
var inst_26564 = (state_26578[(2)]);
var state_26578__$1 = state_26578;
var statearr_26593_26613 = state_26578__$1;
(statearr_26593_26613[(2)] = inst_26564);

(statearr_26593_26613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (8))){
var inst_26561 = cljs.core.async.close_BANG_.call(null,to);
var state_26578__$1 = state_26578;
var statearr_26594_26614 = state_26578__$1;
(statearr_26594_26614[(2)] = inst_26561);

(statearr_26594_26614[(1)] = (10));


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
});})(c__26453__auto___26600))
;
return ((function (switch__26363__auto__,c__26453__auto___26600){
return (function() {
var cljs$core$async$state_machine__26364__auto__ = null;
var cljs$core$async$state_machine__26364__auto____0 = (function (){
var statearr_26595 = [null,null,null,null,null,null,null,null];
(statearr_26595[(0)] = cljs$core$async$state_machine__26364__auto__);

(statearr_26595[(1)] = (1));

return statearr_26595;
});
var cljs$core$async$state_machine__26364__auto____1 = (function (state_26578){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_26578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e26596){if((e26596 instanceof Object)){
var ex__26367__auto__ = e26596;
var statearr_26597_26615 = state_26578;
(statearr_26597_26615[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26616 = state_26578;
state_26578 = G__26616;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$state_machine__26364__auto__ = function(state_26578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26364__auto____1.call(this,state_26578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26364__auto____0;
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26364__auto____1;
return cljs$core$async$state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto___26600))
})();
var state__26455__auto__ = (function (){var statearr_26598 = f__26454__auto__.call(null);
(statearr_26598[(6)] = c__26453__auto___26600);

return statearr_26598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto___26600))
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
return (function (p__26617){
var vec__26618 = p__26617;
var v = cljs.core.nth.call(null,vec__26618,(0),null);
var p = cljs.core.nth.call(null,vec__26618,(1),null);
var job = vec__26618;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26453__auto___26789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto___26789,res,vec__26618,v,p,job,jobs,results){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto___26789,res,vec__26618,v,p,job,jobs,results){
return (function (state_26625){
var state_val_26626 = (state_26625[(1)]);
if((state_val_26626 === (1))){
var state_26625__$1 = state_26625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26625__$1,(2),res,v);
} else {
if((state_val_26626 === (2))){
var inst_26622 = (state_26625[(2)]);
var inst_26623 = cljs.core.async.close_BANG_.call(null,res);
var state_26625__$1 = (function (){var statearr_26627 = state_26625;
(statearr_26627[(7)] = inst_26622);

return statearr_26627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26625__$1,inst_26623);
} else {
return null;
}
}
});})(c__26453__auto___26789,res,vec__26618,v,p,job,jobs,results))
;
return ((function (switch__26363__auto__,c__26453__auto___26789,res,vec__26618,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____0 = (function (){
var statearr_26628 = [null,null,null,null,null,null,null,null];
(statearr_26628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__);

(statearr_26628[(1)] = (1));

return statearr_26628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____1 = (function (state_26625){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_26625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e26629){if((e26629 instanceof Object)){
var ex__26367__auto__ = e26629;
var statearr_26630_26790 = state_26625;
(statearr_26630_26790[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26791 = state_26625;
state_26625 = G__26791;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__ = function(state_26625){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____1.call(this,state_26625);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto___26789,res,vec__26618,v,p,job,jobs,results))
})();
var state__26455__auto__ = (function (){var statearr_26631 = f__26454__auto__.call(null);
(statearr_26631[(6)] = c__26453__auto___26789);

return statearr_26631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto___26789,res,vec__26618,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26632){
var vec__26633 = p__26632;
var v = cljs.core.nth.call(null,vec__26633,(0),null);
var p = cljs.core.nth.call(null,vec__26633,(1),null);
var job = vec__26633;
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
var n__4376__auto___26792 = n;
var __26793 = (0);
while(true){
if((__26793 < n__4376__auto___26792)){
var G__26636_26794 = type;
var G__26636_26795__$1 = (((G__26636_26794 instanceof cljs.core.Keyword))?G__26636_26794.fqn:null);
switch (G__26636_26795__$1) {
case "compute":
var c__26453__auto___26797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26793,c__26453__auto___26797,G__26636_26794,G__26636_26795__$1,n__4376__auto___26792,jobs,results,process,async){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (__26793,c__26453__auto___26797,G__26636_26794,G__26636_26795__$1,n__4376__auto___26792,jobs,results,process,async){
return (function (state_26649){
var state_val_26650 = (state_26649[(1)]);
if((state_val_26650 === (1))){
var state_26649__$1 = state_26649;
var statearr_26651_26798 = state_26649__$1;
(statearr_26651_26798[(2)] = null);

(statearr_26651_26798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26650 === (2))){
var state_26649__$1 = state_26649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26649__$1,(4),jobs);
} else {
if((state_val_26650 === (3))){
var inst_26647 = (state_26649[(2)]);
var state_26649__$1 = state_26649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26649__$1,inst_26647);
} else {
if((state_val_26650 === (4))){
var inst_26639 = (state_26649[(2)]);
var inst_26640 = process.call(null,inst_26639);
var state_26649__$1 = state_26649;
if(cljs.core.truth_(inst_26640)){
var statearr_26652_26799 = state_26649__$1;
(statearr_26652_26799[(1)] = (5));

} else {
var statearr_26653_26800 = state_26649__$1;
(statearr_26653_26800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26650 === (5))){
var state_26649__$1 = state_26649;
var statearr_26654_26801 = state_26649__$1;
(statearr_26654_26801[(2)] = null);

(statearr_26654_26801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26650 === (6))){
var state_26649__$1 = state_26649;
var statearr_26655_26802 = state_26649__$1;
(statearr_26655_26802[(2)] = null);

(statearr_26655_26802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26650 === (7))){
var inst_26645 = (state_26649[(2)]);
var state_26649__$1 = state_26649;
var statearr_26656_26803 = state_26649__$1;
(statearr_26656_26803[(2)] = inst_26645);

(statearr_26656_26803[(1)] = (3));


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
});})(__26793,c__26453__auto___26797,G__26636_26794,G__26636_26795__$1,n__4376__auto___26792,jobs,results,process,async))
;
return ((function (__26793,switch__26363__auto__,c__26453__auto___26797,G__26636_26794,G__26636_26795__$1,n__4376__auto___26792,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____0 = (function (){
var statearr_26657 = [null,null,null,null,null,null,null];
(statearr_26657[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__);

(statearr_26657[(1)] = (1));

return statearr_26657;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____1 = (function (state_26649){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_26649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e26658){if((e26658 instanceof Object)){
var ex__26367__auto__ = e26658;
var statearr_26659_26804 = state_26649;
(statearr_26659_26804[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26805 = state_26649;
state_26649 = G__26805;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__ = function(state_26649){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____1.call(this,state_26649);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__;
})()
;})(__26793,switch__26363__auto__,c__26453__auto___26797,G__26636_26794,G__26636_26795__$1,n__4376__auto___26792,jobs,results,process,async))
})();
var state__26455__auto__ = (function (){var statearr_26660 = f__26454__auto__.call(null);
(statearr_26660[(6)] = c__26453__auto___26797);

return statearr_26660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(__26793,c__26453__auto___26797,G__26636_26794,G__26636_26795__$1,n__4376__auto___26792,jobs,results,process,async))
);


break;
case "async":
var c__26453__auto___26806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26793,c__26453__auto___26806,G__26636_26794,G__26636_26795__$1,n__4376__auto___26792,jobs,results,process,async){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (__26793,c__26453__auto___26806,G__26636_26794,G__26636_26795__$1,n__4376__auto___26792,jobs,results,process,async){
return (function (state_26673){
var state_val_26674 = (state_26673[(1)]);
if((state_val_26674 === (1))){
var state_26673__$1 = state_26673;
var statearr_26675_26807 = state_26673__$1;
(statearr_26675_26807[(2)] = null);

(statearr_26675_26807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (2))){
var state_26673__$1 = state_26673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26673__$1,(4),jobs);
} else {
if((state_val_26674 === (3))){
var inst_26671 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26673__$1,inst_26671);
} else {
if((state_val_26674 === (4))){
var inst_26663 = (state_26673[(2)]);
var inst_26664 = async.call(null,inst_26663);
var state_26673__$1 = state_26673;
if(cljs.core.truth_(inst_26664)){
var statearr_26676_26808 = state_26673__$1;
(statearr_26676_26808[(1)] = (5));

} else {
var statearr_26677_26809 = state_26673__$1;
(statearr_26677_26809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (5))){
var state_26673__$1 = state_26673;
var statearr_26678_26810 = state_26673__$1;
(statearr_26678_26810[(2)] = null);

(statearr_26678_26810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (6))){
var state_26673__$1 = state_26673;
var statearr_26679_26811 = state_26673__$1;
(statearr_26679_26811[(2)] = null);

(statearr_26679_26811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (7))){
var inst_26669 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
var statearr_26680_26812 = state_26673__$1;
(statearr_26680_26812[(2)] = inst_26669);

(statearr_26680_26812[(1)] = (3));


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
});})(__26793,c__26453__auto___26806,G__26636_26794,G__26636_26795__$1,n__4376__auto___26792,jobs,results,process,async))
;
return ((function (__26793,switch__26363__auto__,c__26453__auto___26806,G__26636_26794,G__26636_26795__$1,n__4376__auto___26792,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____0 = (function (){
var statearr_26681 = [null,null,null,null,null,null,null];
(statearr_26681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__);

(statearr_26681[(1)] = (1));

return statearr_26681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____1 = (function (state_26673){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_26673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e26682){if((e26682 instanceof Object)){
var ex__26367__auto__ = e26682;
var statearr_26683_26813 = state_26673;
(statearr_26683_26813[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26814 = state_26673;
state_26673 = G__26814;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__ = function(state_26673){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____1.call(this,state_26673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__;
})()
;})(__26793,switch__26363__auto__,c__26453__auto___26806,G__26636_26794,G__26636_26795__$1,n__4376__auto___26792,jobs,results,process,async))
})();
var state__26455__auto__ = (function (){var statearr_26684 = f__26454__auto__.call(null);
(statearr_26684[(6)] = c__26453__auto___26806);

return statearr_26684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(__26793,c__26453__auto___26806,G__26636_26794,G__26636_26795__$1,n__4376__auto___26792,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26636_26795__$1)].join('')));

}

var G__26815 = (__26793 + (1));
__26793 = G__26815;
continue;
} else {
}
break;
}

var c__26453__auto___26816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto___26816,jobs,results,process,async){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto___26816,jobs,results,process,async){
return (function (state_26706){
var state_val_26707 = (state_26706[(1)]);
if((state_val_26707 === (1))){
var state_26706__$1 = state_26706;
var statearr_26708_26817 = state_26706__$1;
(statearr_26708_26817[(2)] = null);

(statearr_26708_26817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26707 === (2))){
var state_26706__$1 = state_26706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26706__$1,(4),from);
} else {
if((state_val_26707 === (3))){
var inst_26704 = (state_26706[(2)]);
var state_26706__$1 = state_26706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26706__$1,inst_26704);
} else {
if((state_val_26707 === (4))){
var inst_26687 = (state_26706[(7)]);
var inst_26687__$1 = (state_26706[(2)]);
var inst_26688 = (inst_26687__$1 == null);
var state_26706__$1 = (function (){var statearr_26709 = state_26706;
(statearr_26709[(7)] = inst_26687__$1);

return statearr_26709;
})();
if(cljs.core.truth_(inst_26688)){
var statearr_26710_26818 = state_26706__$1;
(statearr_26710_26818[(1)] = (5));

} else {
var statearr_26711_26819 = state_26706__$1;
(statearr_26711_26819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26707 === (5))){
var inst_26690 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26706__$1 = state_26706;
var statearr_26712_26820 = state_26706__$1;
(statearr_26712_26820[(2)] = inst_26690);

(statearr_26712_26820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26707 === (6))){
var inst_26692 = (state_26706[(8)]);
var inst_26687 = (state_26706[(7)]);
var inst_26692__$1 = cljs.core.async.chan.call(null,(1));
var inst_26693 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26694 = [inst_26687,inst_26692__$1];
var inst_26695 = (new cljs.core.PersistentVector(null,2,(5),inst_26693,inst_26694,null));
var state_26706__$1 = (function (){var statearr_26713 = state_26706;
(statearr_26713[(8)] = inst_26692__$1);

return statearr_26713;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26706__$1,(8),jobs,inst_26695);
} else {
if((state_val_26707 === (7))){
var inst_26702 = (state_26706[(2)]);
var state_26706__$1 = state_26706;
var statearr_26714_26821 = state_26706__$1;
(statearr_26714_26821[(2)] = inst_26702);

(statearr_26714_26821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26707 === (8))){
var inst_26692 = (state_26706[(8)]);
var inst_26697 = (state_26706[(2)]);
var state_26706__$1 = (function (){var statearr_26715 = state_26706;
(statearr_26715[(9)] = inst_26697);

return statearr_26715;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26706__$1,(9),results,inst_26692);
} else {
if((state_val_26707 === (9))){
var inst_26699 = (state_26706[(2)]);
var state_26706__$1 = (function (){var statearr_26716 = state_26706;
(statearr_26716[(10)] = inst_26699);

return statearr_26716;
})();
var statearr_26717_26822 = state_26706__$1;
(statearr_26717_26822[(2)] = null);

(statearr_26717_26822[(1)] = (2));


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
});})(c__26453__auto___26816,jobs,results,process,async))
;
return ((function (switch__26363__auto__,c__26453__auto___26816,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____0 = (function (){
var statearr_26718 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26718[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__);

(statearr_26718[(1)] = (1));

return statearr_26718;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____1 = (function (state_26706){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_26706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e26719){if((e26719 instanceof Object)){
var ex__26367__auto__ = e26719;
var statearr_26720_26823 = state_26706;
(statearr_26720_26823[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26824 = state_26706;
state_26706 = G__26824;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__ = function(state_26706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____1.call(this,state_26706);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto___26816,jobs,results,process,async))
})();
var state__26455__auto__ = (function (){var statearr_26721 = f__26454__auto__.call(null);
(statearr_26721[(6)] = c__26453__auto___26816);

return statearr_26721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto___26816,jobs,results,process,async))
);


var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto__,jobs,results,process,async){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto__,jobs,results,process,async){
return (function (state_26759){
var state_val_26760 = (state_26759[(1)]);
if((state_val_26760 === (7))){
var inst_26755 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26761_26825 = state_26759__$1;
(statearr_26761_26825[(2)] = inst_26755);

(statearr_26761_26825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (20))){
var state_26759__$1 = state_26759;
var statearr_26762_26826 = state_26759__$1;
(statearr_26762_26826[(2)] = null);

(statearr_26762_26826[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (1))){
var state_26759__$1 = state_26759;
var statearr_26763_26827 = state_26759__$1;
(statearr_26763_26827[(2)] = null);

(statearr_26763_26827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (4))){
var inst_26724 = (state_26759[(7)]);
var inst_26724__$1 = (state_26759[(2)]);
var inst_26725 = (inst_26724__$1 == null);
var state_26759__$1 = (function (){var statearr_26764 = state_26759;
(statearr_26764[(7)] = inst_26724__$1);

return statearr_26764;
})();
if(cljs.core.truth_(inst_26725)){
var statearr_26765_26828 = state_26759__$1;
(statearr_26765_26828[(1)] = (5));

} else {
var statearr_26766_26829 = state_26759__$1;
(statearr_26766_26829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (15))){
var inst_26737 = (state_26759[(8)]);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26759__$1,(18),to,inst_26737);
} else {
if((state_val_26760 === (21))){
var inst_26750 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26767_26830 = state_26759__$1;
(statearr_26767_26830[(2)] = inst_26750);

(statearr_26767_26830[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (13))){
var inst_26752 = (state_26759[(2)]);
var state_26759__$1 = (function (){var statearr_26768 = state_26759;
(statearr_26768[(9)] = inst_26752);

return statearr_26768;
})();
var statearr_26769_26831 = state_26759__$1;
(statearr_26769_26831[(2)] = null);

(statearr_26769_26831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (6))){
var inst_26724 = (state_26759[(7)]);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(11),inst_26724);
} else {
if((state_val_26760 === (17))){
var inst_26745 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
if(cljs.core.truth_(inst_26745)){
var statearr_26770_26832 = state_26759__$1;
(statearr_26770_26832[(1)] = (19));

} else {
var statearr_26771_26833 = state_26759__$1;
(statearr_26771_26833[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (3))){
var inst_26757 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26759__$1,inst_26757);
} else {
if((state_val_26760 === (12))){
var inst_26734 = (state_26759[(10)]);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(14),inst_26734);
} else {
if((state_val_26760 === (2))){
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(4),results);
} else {
if((state_val_26760 === (19))){
var state_26759__$1 = state_26759;
var statearr_26772_26834 = state_26759__$1;
(statearr_26772_26834[(2)] = null);

(statearr_26772_26834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (11))){
var inst_26734 = (state_26759[(2)]);
var state_26759__$1 = (function (){var statearr_26773 = state_26759;
(statearr_26773[(10)] = inst_26734);

return statearr_26773;
})();
var statearr_26774_26835 = state_26759__$1;
(statearr_26774_26835[(2)] = null);

(statearr_26774_26835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (9))){
var state_26759__$1 = state_26759;
var statearr_26775_26836 = state_26759__$1;
(statearr_26775_26836[(2)] = null);

(statearr_26775_26836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (5))){
var state_26759__$1 = state_26759;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26776_26837 = state_26759__$1;
(statearr_26776_26837[(1)] = (8));

} else {
var statearr_26777_26838 = state_26759__$1;
(statearr_26777_26838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (14))){
var inst_26737 = (state_26759[(8)]);
var inst_26739 = (state_26759[(11)]);
var inst_26737__$1 = (state_26759[(2)]);
var inst_26738 = (inst_26737__$1 == null);
var inst_26739__$1 = cljs.core.not.call(null,inst_26738);
var state_26759__$1 = (function (){var statearr_26778 = state_26759;
(statearr_26778[(8)] = inst_26737__$1);

(statearr_26778[(11)] = inst_26739__$1);

return statearr_26778;
})();
if(inst_26739__$1){
var statearr_26779_26839 = state_26759__$1;
(statearr_26779_26839[(1)] = (15));

} else {
var statearr_26780_26840 = state_26759__$1;
(statearr_26780_26840[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (16))){
var inst_26739 = (state_26759[(11)]);
var state_26759__$1 = state_26759;
var statearr_26781_26841 = state_26759__$1;
(statearr_26781_26841[(2)] = inst_26739);

(statearr_26781_26841[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (10))){
var inst_26731 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26782_26842 = state_26759__$1;
(statearr_26782_26842[(2)] = inst_26731);

(statearr_26782_26842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (18))){
var inst_26742 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26783_26843 = state_26759__$1;
(statearr_26783_26843[(2)] = inst_26742);

(statearr_26783_26843[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (8))){
var inst_26728 = cljs.core.async.close_BANG_.call(null,to);
var state_26759__$1 = state_26759;
var statearr_26784_26844 = state_26759__$1;
(statearr_26784_26844[(2)] = inst_26728);

(statearr_26784_26844[(1)] = (10));


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
});})(c__26453__auto__,jobs,results,process,async))
;
return ((function (switch__26363__auto__,c__26453__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____0 = (function (){
var statearr_26785 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26785[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__);

(statearr_26785[(1)] = (1));

return statearr_26785;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____1 = (function (state_26759){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_26759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e26786){if((e26786 instanceof Object)){
var ex__26367__auto__ = e26786;
var statearr_26787_26845 = state_26759;
(statearr_26787_26845[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26846 = state_26759;
state_26759 = G__26846;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__ = function(state_26759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____1.call(this,state_26759);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto__,jobs,results,process,async))
})();
var state__26455__auto__ = (function (){var statearr_26788 = f__26454__auto__.call(null);
(statearr_26788[(6)] = c__26453__auto__);

return statearr_26788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto__,jobs,results,process,async))
);

return c__26453__auto__;
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
var G__26848 = arguments.length;
switch (G__26848) {
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
var G__26851 = arguments.length;
switch (G__26851) {
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
var G__26854 = arguments.length;
switch (G__26854) {
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
var c__26453__auto___26903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto___26903,tc,fc){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto___26903,tc,fc){
return (function (state_26880){
var state_val_26881 = (state_26880[(1)]);
if((state_val_26881 === (7))){
var inst_26876 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
var statearr_26882_26904 = state_26880__$1;
(statearr_26882_26904[(2)] = inst_26876);

(statearr_26882_26904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (1))){
var state_26880__$1 = state_26880;
var statearr_26883_26905 = state_26880__$1;
(statearr_26883_26905[(2)] = null);

(statearr_26883_26905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (4))){
var inst_26857 = (state_26880[(7)]);
var inst_26857__$1 = (state_26880[(2)]);
var inst_26858 = (inst_26857__$1 == null);
var state_26880__$1 = (function (){var statearr_26884 = state_26880;
(statearr_26884[(7)] = inst_26857__$1);

return statearr_26884;
})();
if(cljs.core.truth_(inst_26858)){
var statearr_26885_26906 = state_26880__$1;
(statearr_26885_26906[(1)] = (5));

} else {
var statearr_26886_26907 = state_26880__$1;
(statearr_26886_26907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (13))){
var state_26880__$1 = state_26880;
var statearr_26887_26908 = state_26880__$1;
(statearr_26887_26908[(2)] = null);

(statearr_26887_26908[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (6))){
var inst_26857 = (state_26880[(7)]);
var inst_26863 = p.call(null,inst_26857);
var state_26880__$1 = state_26880;
if(cljs.core.truth_(inst_26863)){
var statearr_26888_26909 = state_26880__$1;
(statearr_26888_26909[(1)] = (9));

} else {
var statearr_26889_26910 = state_26880__$1;
(statearr_26889_26910[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (3))){
var inst_26878 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26880__$1,inst_26878);
} else {
if((state_val_26881 === (12))){
var state_26880__$1 = state_26880;
var statearr_26890_26911 = state_26880__$1;
(statearr_26890_26911[(2)] = null);

(statearr_26890_26911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (2))){
var state_26880__$1 = state_26880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26880__$1,(4),ch);
} else {
if((state_val_26881 === (11))){
var inst_26857 = (state_26880[(7)]);
var inst_26867 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26880__$1,(8),inst_26867,inst_26857);
} else {
if((state_val_26881 === (9))){
var state_26880__$1 = state_26880;
var statearr_26891_26912 = state_26880__$1;
(statearr_26891_26912[(2)] = tc);

(statearr_26891_26912[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (5))){
var inst_26860 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26861 = cljs.core.async.close_BANG_.call(null,fc);
var state_26880__$1 = (function (){var statearr_26892 = state_26880;
(statearr_26892[(8)] = inst_26860);

return statearr_26892;
})();
var statearr_26893_26913 = state_26880__$1;
(statearr_26893_26913[(2)] = inst_26861);

(statearr_26893_26913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (14))){
var inst_26874 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
var statearr_26894_26914 = state_26880__$1;
(statearr_26894_26914[(2)] = inst_26874);

(statearr_26894_26914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (10))){
var state_26880__$1 = state_26880;
var statearr_26895_26915 = state_26880__$1;
(statearr_26895_26915[(2)] = fc);

(statearr_26895_26915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (8))){
var inst_26869 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
if(cljs.core.truth_(inst_26869)){
var statearr_26896_26916 = state_26880__$1;
(statearr_26896_26916[(1)] = (12));

} else {
var statearr_26897_26917 = state_26880__$1;
(statearr_26897_26917[(1)] = (13));

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
});})(c__26453__auto___26903,tc,fc))
;
return ((function (switch__26363__auto__,c__26453__auto___26903,tc,fc){
return (function() {
var cljs$core$async$state_machine__26364__auto__ = null;
var cljs$core$async$state_machine__26364__auto____0 = (function (){
var statearr_26898 = [null,null,null,null,null,null,null,null,null];
(statearr_26898[(0)] = cljs$core$async$state_machine__26364__auto__);

(statearr_26898[(1)] = (1));

return statearr_26898;
});
var cljs$core$async$state_machine__26364__auto____1 = (function (state_26880){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_26880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e26899){if((e26899 instanceof Object)){
var ex__26367__auto__ = e26899;
var statearr_26900_26918 = state_26880;
(statearr_26900_26918[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26919 = state_26880;
state_26880 = G__26919;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$state_machine__26364__auto__ = function(state_26880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26364__auto____1.call(this,state_26880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26364__auto____0;
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26364__auto____1;
return cljs$core$async$state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto___26903,tc,fc))
})();
var state__26455__auto__ = (function (){var statearr_26901 = f__26454__auto__.call(null);
(statearr_26901[(6)] = c__26453__auto___26903);

return statearr_26901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto___26903,tc,fc))
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
var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto__){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto__){
return (function (state_26940){
var state_val_26941 = (state_26940[(1)]);
if((state_val_26941 === (7))){
var inst_26936 = (state_26940[(2)]);
var state_26940__$1 = state_26940;
var statearr_26942_26960 = state_26940__$1;
(statearr_26942_26960[(2)] = inst_26936);

(statearr_26942_26960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (1))){
var inst_26920 = init;
var state_26940__$1 = (function (){var statearr_26943 = state_26940;
(statearr_26943[(7)] = inst_26920);

return statearr_26943;
})();
var statearr_26944_26961 = state_26940__$1;
(statearr_26944_26961[(2)] = null);

(statearr_26944_26961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (4))){
var inst_26923 = (state_26940[(8)]);
var inst_26923__$1 = (state_26940[(2)]);
var inst_26924 = (inst_26923__$1 == null);
var state_26940__$1 = (function (){var statearr_26945 = state_26940;
(statearr_26945[(8)] = inst_26923__$1);

return statearr_26945;
})();
if(cljs.core.truth_(inst_26924)){
var statearr_26946_26962 = state_26940__$1;
(statearr_26946_26962[(1)] = (5));

} else {
var statearr_26947_26963 = state_26940__$1;
(statearr_26947_26963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (6))){
var inst_26920 = (state_26940[(7)]);
var inst_26927 = (state_26940[(9)]);
var inst_26923 = (state_26940[(8)]);
var inst_26927__$1 = f.call(null,inst_26920,inst_26923);
var inst_26928 = cljs.core.reduced_QMARK_.call(null,inst_26927__$1);
var state_26940__$1 = (function (){var statearr_26948 = state_26940;
(statearr_26948[(9)] = inst_26927__$1);

return statearr_26948;
})();
if(inst_26928){
var statearr_26949_26964 = state_26940__$1;
(statearr_26949_26964[(1)] = (8));

} else {
var statearr_26950_26965 = state_26940__$1;
(statearr_26950_26965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (3))){
var inst_26938 = (state_26940[(2)]);
var state_26940__$1 = state_26940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26940__$1,inst_26938);
} else {
if((state_val_26941 === (2))){
var state_26940__$1 = state_26940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26940__$1,(4),ch);
} else {
if((state_val_26941 === (9))){
var inst_26927 = (state_26940[(9)]);
var inst_26920 = inst_26927;
var state_26940__$1 = (function (){var statearr_26951 = state_26940;
(statearr_26951[(7)] = inst_26920);

return statearr_26951;
})();
var statearr_26952_26966 = state_26940__$1;
(statearr_26952_26966[(2)] = null);

(statearr_26952_26966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (5))){
var inst_26920 = (state_26940[(7)]);
var state_26940__$1 = state_26940;
var statearr_26953_26967 = state_26940__$1;
(statearr_26953_26967[(2)] = inst_26920);

(statearr_26953_26967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (10))){
var inst_26934 = (state_26940[(2)]);
var state_26940__$1 = state_26940;
var statearr_26954_26968 = state_26940__$1;
(statearr_26954_26968[(2)] = inst_26934);

(statearr_26954_26968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (8))){
var inst_26927 = (state_26940[(9)]);
var inst_26930 = cljs.core.deref.call(null,inst_26927);
var state_26940__$1 = state_26940;
var statearr_26955_26969 = state_26940__$1;
(statearr_26955_26969[(2)] = inst_26930);

(statearr_26955_26969[(1)] = (10));


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
});})(c__26453__auto__))
;
return ((function (switch__26363__auto__,c__26453__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26364__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26364__auto____0 = (function (){
var statearr_26956 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26956[(0)] = cljs$core$async$reduce_$_state_machine__26364__auto__);

(statearr_26956[(1)] = (1));

return statearr_26956;
});
var cljs$core$async$reduce_$_state_machine__26364__auto____1 = (function (state_26940){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_26940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e26957){if((e26957 instanceof Object)){
var ex__26367__auto__ = e26957;
var statearr_26958_26970 = state_26940;
(statearr_26958_26970[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26971 = state_26940;
state_26940 = G__26971;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26364__auto__ = function(state_26940){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26364__auto____1.call(this,state_26940);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26364__auto____0;
cljs$core$async$reduce_$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26364__auto____1;
return cljs$core$async$reduce_$_state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto__))
})();
var state__26455__auto__ = (function (){var statearr_26959 = f__26454__auto__.call(null);
(statearr_26959[(6)] = c__26453__auto__);

return statearr_26959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto__))
);

return c__26453__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto__,f__$1){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto__,f__$1){
return (function (state_26977){
var state_val_26978 = (state_26977[(1)]);
if((state_val_26978 === (1))){
var inst_26972 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26977__$1 = state_26977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26977__$1,(2),inst_26972);
} else {
if((state_val_26978 === (2))){
var inst_26974 = (state_26977[(2)]);
var inst_26975 = f__$1.call(null,inst_26974);
var state_26977__$1 = state_26977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26977__$1,inst_26975);
} else {
return null;
}
}
});})(c__26453__auto__,f__$1))
;
return ((function (switch__26363__auto__,c__26453__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26364__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26364__auto____0 = (function (){
var statearr_26979 = [null,null,null,null,null,null,null];
(statearr_26979[(0)] = cljs$core$async$transduce_$_state_machine__26364__auto__);

(statearr_26979[(1)] = (1));

return statearr_26979;
});
var cljs$core$async$transduce_$_state_machine__26364__auto____1 = (function (state_26977){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_26977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e26980){if((e26980 instanceof Object)){
var ex__26367__auto__ = e26980;
var statearr_26981_26983 = state_26977;
(statearr_26981_26983[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26984 = state_26977;
state_26977 = G__26984;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26364__auto__ = function(state_26977){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26364__auto____1.call(this,state_26977);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26364__auto____0;
cljs$core$async$transduce_$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26364__auto____1;
return cljs$core$async$transduce_$_state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto__,f__$1))
})();
var state__26455__auto__ = (function (){var statearr_26982 = f__26454__auto__.call(null);
(statearr_26982[(6)] = c__26453__auto__);

return statearr_26982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto__,f__$1))
);

return c__26453__auto__;
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
var G__26986 = arguments.length;
switch (G__26986) {
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
var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto__){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto__){
return (function (state_27011){
var state_val_27012 = (state_27011[(1)]);
if((state_val_27012 === (7))){
var inst_26993 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
var statearr_27013_27034 = state_27011__$1;
(statearr_27013_27034[(2)] = inst_26993);

(statearr_27013_27034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (1))){
var inst_26987 = cljs.core.seq.call(null,coll);
var inst_26988 = inst_26987;
var state_27011__$1 = (function (){var statearr_27014 = state_27011;
(statearr_27014[(7)] = inst_26988);

return statearr_27014;
})();
var statearr_27015_27035 = state_27011__$1;
(statearr_27015_27035[(2)] = null);

(statearr_27015_27035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (4))){
var inst_26988 = (state_27011[(7)]);
var inst_26991 = cljs.core.first.call(null,inst_26988);
var state_27011__$1 = state_27011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27011__$1,(7),ch,inst_26991);
} else {
if((state_val_27012 === (13))){
var inst_27005 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
var statearr_27016_27036 = state_27011__$1;
(statearr_27016_27036[(2)] = inst_27005);

(statearr_27016_27036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (6))){
var inst_26996 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
if(cljs.core.truth_(inst_26996)){
var statearr_27017_27037 = state_27011__$1;
(statearr_27017_27037[(1)] = (8));

} else {
var statearr_27018_27038 = state_27011__$1;
(statearr_27018_27038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (3))){
var inst_27009 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27011__$1,inst_27009);
} else {
if((state_val_27012 === (12))){
var state_27011__$1 = state_27011;
var statearr_27019_27039 = state_27011__$1;
(statearr_27019_27039[(2)] = null);

(statearr_27019_27039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (2))){
var inst_26988 = (state_27011[(7)]);
var state_27011__$1 = state_27011;
if(cljs.core.truth_(inst_26988)){
var statearr_27020_27040 = state_27011__$1;
(statearr_27020_27040[(1)] = (4));

} else {
var statearr_27021_27041 = state_27011__$1;
(statearr_27021_27041[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (11))){
var inst_27002 = cljs.core.async.close_BANG_.call(null,ch);
var state_27011__$1 = state_27011;
var statearr_27022_27042 = state_27011__$1;
(statearr_27022_27042[(2)] = inst_27002);

(statearr_27022_27042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (9))){
var state_27011__$1 = state_27011;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27023_27043 = state_27011__$1;
(statearr_27023_27043[(1)] = (11));

} else {
var statearr_27024_27044 = state_27011__$1;
(statearr_27024_27044[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (5))){
var inst_26988 = (state_27011[(7)]);
var state_27011__$1 = state_27011;
var statearr_27025_27045 = state_27011__$1;
(statearr_27025_27045[(2)] = inst_26988);

(statearr_27025_27045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (10))){
var inst_27007 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
var statearr_27026_27046 = state_27011__$1;
(statearr_27026_27046[(2)] = inst_27007);

(statearr_27026_27046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (8))){
var inst_26988 = (state_27011[(7)]);
var inst_26998 = cljs.core.next.call(null,inst_26988);
var inst_26988__$1 = inst_26998;
var state_27011__$1 = (function (){var statearr_27027 = state_27011;
(statearr_27027[(7)] = inst_26988__$1);

return statearr_27027;
})();
var statearr_27028_27047 = state_27011__$1;
(statearr_27028_27047[(2)] = null);

(statearr_27028_27047[(1)] = (2));


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
});})(c__26453__auto__))
;
return ((function (switch__26363__auto__,c__26453__auto__){
return (function() {
var cljs$core$async$state_machine__26364__auto__ = null;
var cljs$core$async$state_machine__26364__auto____0 = (function (){
var statearr_27029 = [null,null,null,null,null,null,null,null];
(statearr_27029[(0)] = cljs$core$async$state_machine__26364__auto__);

(statearr_27029[(1)] = (1));

return statearr_27029;
});
var cljs$core$async$state_machine__26364__auto____1 = (function (state_27011){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_27011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e27030){if((e27030 instanceof Object)){
var ex__26367__auto__ = e27030;
var statearr_27031_27048 = state_27011;
(statearr_27031_27048[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27049 = state_27011;
state_27011 = G__27049;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$state_machine__26364__auto__ = function(state_27011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26364__auto____1.call(this,state_27011);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26364__auto____0;
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26364__auto____1;
return cljs$core$async$state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto__))
})();
var state__26455__auto__ = (function (){var statearr_27032 = f__26454__auto__.call(null);
(statearr_27032[(6)] = c__26453__auto__);

return statearr_27032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto__))
);

return c__26453__auto__;
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
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
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
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
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
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async27050 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27050 = (function (ch,cs,meta27051){
this.ch = ch;
this.cs = cs;
this.meta27051 = meta27051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27052,meta27051__$1){
var self__ = this;
var _27052__$1 = this;
return (new cljs.core.async.t_cljs$core$async27050(self__.ch,self__.cs,meta27051__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27052){
var self__ = this;
var _27052__$1 = this;
return self__.meta27051;
});})(cs))
;

cljs.core.async.t_cljs$core$async27050.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27050.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27050.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27050.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27050.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27050.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27050.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27051","meta27051",1984974580,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27050.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27050";

cljs.core.async.t_cljs$core$async27050.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27050");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27050.
 */
cljs.core.async.__GT_t_cljs$core$async27050 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27050(ch__$1,cs__$1,meta27051){
return (new cljs.core.async.t_cljs$core$async27050(ch__$1,cs__$1,meta27051));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27050(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26453__auto___27272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto___27272,cs,m,dchan,dctr,done){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto___27272,cs,m,dchan,dctr,done){
return (function (state_27187){
var state_val_27188 = (state_27187[(1)]);
if((state_val_27188 === (7))){
var inst_27183 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
var statearr_27189_27273 = state_27187__$1;
(statearr_27189_27273[(2)] = inst_27183);

(statearr_27189_27273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (20))){
var inst_27086 = (state_27187[(7)]);
var inst_27098 = cljs.core.first.call(null,inst_27086);
var inst_27099 = cljs.core.nth.call(null,inst_27098,(0),null);
var inst_27100 = cljs.core.nth.call(null,inst_27098,(1),null);
var state_27187__$1 = (function (){var statearr_27190 = state_27187;
(statearr_27190[(8)] = inst_27099);

return statearr_27190;
})();
if(cljs.core.truth_(inst_27100)){
var statearr_27191_27274 = state_27187__$1;
(statearr_27191_27274[(1)] = (22));

} else {
var statearr_27192_27275 = state_27187__$1;
(statearr_27192_27275[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (27))){
var inst_27055 = (state_27187[(9)]);
var inst_27130 = (state_27187[(10)]);
var inst_27128 = (state_27187[(11)]);
var inst_27135 = (state_27187[(12)]);
var inst_27135__$1 = cljs.core._nth.call(null,inst_27128,inst_27130);
var inst_27136 = cljs.core.async.put_BANG_.call(null,inst_27135__$1,inst_27055,done);
var state_27187__$1 = (function (){var statearr_27193 = state_27187;
(statearr_27193[(12)] = inst_27135__$1);

return statearr_27193;
})();
if(cljs.core.truth_(inst_27136)){
var statearr_27194_27276 = state_27187__$1;
(statearr_27194_27276[(1)] = (30));

} else {
var statearr_27195_27277 = state_27187__$1;
(statearr_27195_27277[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (1))){
var state_27187__$1 = state_27187;
var statearr_27196_27278 = state_27187__$1;
(statearr_27196_27278[(2)] = null);

(statearr_27196_27278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (24))){
var inst_27086 = (state_27187[(7)]);
var inst_27105 = (state_27187[(2)]);
var inst_27106 = cljs.core.next.call(null,inst_27086);
var inst_27064 = inst_27106;
var inst_27065 = null;
var inst_27066 = (0);
var inst_27067 = (0);
var state_27187__$1 = (function (){var statearr_27197 = state_27187;
(statearr_27197[(13)] = inst_27105);

(statearr_27197[(14)] = inst_27066);

(statearr_27197[(15)] = inst_27065);

(statearr_27197[(16)] = inst_27064);

(statearr_27197[(17)] = inst_27067);

return statearr_27197;
})();
var statearr_27198_27279 = state_27187__$1;
(statearr_27198_27279[(2)] = null);

(statearr_27198_27279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (39))){
var state_27187__$1 = state_27187;
var statearr_27202_27280 = state_27187__$1;
(statearr_27202_27280[(2)] = null);

(statearr_27202_27280[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (4))){
var inst_27055 = (state_27187[(9)]);
var inst_27055__$1 = (state_27187[(2)]);
var inst_27056 = (inst_27055__$1 == null);
var state_27187__$1 = (function (){var statearr_27203 = state_27187;
(statearr_27203[(9)] = inst_27055__$1);

return statearr_27203;
})();
if(cljs.core.truth_(inst_27056)){
var statearr_27204_27281 = state_27187__$1;
(statearr_27204_27281[(1)] = (5));

} else {
var statearr_27205_27282 = state_27187__$1;
(statearr_27205_27282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (15))){
var inst_27066 = (state_27187[(14)]);
var inst_27065 = (state_27187[(15)]);
var inst_27064 = (state_27187[(16)]);
var inst_27067 = (state_27187[(17)]);
var inst_27082 = (state_27187[(2)]);
var inst_27083 = (inst_27067 + (1));
var tmp27199 = inst_27066;
var tmp27200 = inst_27065;
var tmp27201 = inst_27064;
var inst_27064__$1 = tmp27201;
var inst_27065__$1 = tmp27200;
var inst_27066__$1 = tmp27199;
var inst_27067__$1 = inst_27083;
var state_27187__$1 = (function (){var statearr_27206 = state_27187;
(statearr_27206[(18)] = inst_27082);

(statearr_27206[(14)] = inst_27066__$1);

(statearr_27206[(15)] = inst_27065__$1);

(statearr_27206[(16)] = inst_27064__$1);

(statearr_27206[(17)] = inst_27067__$1);

return statearr_27206;
})();
var statearr_27207_27283 = state_27187__$1;
(statearr_27207_27283[(2)] = null);

(statearr_27207_27283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (21))){
var inst_27109 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
var statearr_27211_27284 = state_27187__$1;
(statearr_27211_27284[(2)] = inst_27109);

(statearr_27211_27284[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (31))){
var inst_27135 = (state_27187[(12)]);
var inst_27139 = done.call(null,null);
var inst_27140 = cljs.core.async.untap_STAR_.call(null,m,inst_27135);
var state_27187__$1 = (function (){var statearr_27212 = state_27187;
(statearr_27212[(19)] = inst_27139);

return statearr_27212;
})();
var statearr_27213_27285 = state_27187__$1;
(statearr_27213_27285[(2)] = inst_27140);

(statearr_27213_27285[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (32))){
var inst_27129 = (state_27187[(20)]);
var inst_27127 = (state_27187[(21)]);
var inst_27130 = (state_27187[(10)]);
var inst_27128 = (state_27187[(11)]);
var inst_27142 = (state_27187[(2)]);
var inst_27143 = (inst_27130 + (1));
var tmp27208 = inst_27129;
var tmp27209 = inst_27127;
var tmp27210 = inst_27128;
var inst_27127__$1 = tmp27209;
var inst_27128__$1 = tmp27210;
var inst_27129__$1 = tmp27208;
var inst_27130__$1 = inst_27143;
var state_27187__$1 = (function (){var statearr_27214 = state_27187;
(statearr_27214[(20)] = inst_27129__$1);

(statearr_27214[(22)] = inst_27142);

(statearr_27214[(21)] = inst_27127__$1);

(statearr_27214[(10)] = inst_27130__$1);

(statearr_27214[(11)] = inst_27128__$1);

return statearr_27214;
})();
var statearr_27215_27286 = state_27187__$1;
(statearr_27215_27286[(2)] = null);

(statearr_27215_27286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (40))){
var inst_27155 = (state_27187[(23)]);
var inst_27159 = done.call(null,null);
var inst_27160 = cljs.core.async.untap_STAR_.call(null,m,inst_27155);
var state_27187__$1 = (function (){var statearr_27216 = state_27187;
(statearr_27216[(24)] = inst_27159);

return statearr_27216;
})();
var statearr_27217_27287 = state_27187__$1;
(statearr_27217_27287[(2)] = inst_27160);

(statearr_27217_27287[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (33))){
var inst_27146 = (state_27187[(25)]);
var inst_27148 = cljs.core.chunked_seq_QMARK_.call(null,inst_27146);
var state_27187__$1 = state_27187;
if(inst_27148){
var statearr_27218_27288 = state_27187__$1;
(statearr_27218_27288[(1)] = (36));

} else {
var statearr_27219_27289 = state_27187__$1;
(statearr_27219_27289[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (13))){
var inst_27076 = (state_27187[(26)]);
var inst_27079 = cljs.core.async.close_BANG_.call(null,inst_27076);
var state_27187__$1 = state_27187;
var statearr_27220_27290 = state_27187__$1;
(statearr_27220_27290[(2)] = inst_27079);

(statearr_27220_27290[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (22))){
var inst_27099 = (state_27187[(8)]);
var inst_27102 = cljs.core.async.close_BANG_.call(null,inst_27099);
var state_27187__$1 = state_27187;
var statearr_27221_27291 = state_27187__$1;
(statearr_27221_27291[(2)] = inst_27102);

(statearr_27221_27291[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (36))){
var inst_27146 = (state_27187[(25)]);
var inst_27150 = cljs.core.chunk_first.call(null,inst_27146);
var inst_27151 = cljs.core.chunk_rest.call(null,inst_27146);
var inst_27152 = cljs.core.count.call(null,inst_27150);
var inst_27127 = inst_27151;
var inst_27128 = inst_27150;
var inst_27129 = inst_27152;
var inst_27130 = (0);
var state_27187__$1 = (function (){var statearr_27222 = state_27187;
(statearr_27222[(20)] = inst_27129);

(statearr_27222[(21)] = inst_27127);

(statearr_27222[(10)] = inst_27130);

(statearr_27222[(11)] = inst_27128);

return statearr_27222;
})();
var statearr_27223_27292 = state_27187__$1;
(statearr_27223_27292[(2)] = null);

(statearr_27223_27292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (41))){
var inst_27146 = (state_27187[(25)]);
var inst_27162 = (state_27187[(2)]);
var inst_27163 = cljs.core.next.call(null,inst_27146);
var inst_27127 = inst_27163;
var inst_27128 = null;
var inst_27129 = (0);
var inst_27130 = (0);
var state_27187__$1 = (function (){var statearr_27224 = state_27187;
(statearr_27224[(20)] = inst_27129);

(statearr_27224[(21)] = inst_27127);

(statearr_27224[(10)] = inst_27130);

(statearr_27224[(27)] = inst_27162);

(statearr_27224[(11)] = inst_27128);

return statearr_27224;
})();
var statearr_27225_27293 = state_27187__$1;
(statearr_27225_27293[(2)] = null);

(statearr_27225_27293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (43))){
var state_27187__$1 = state_27187;
var statearr_27226_27294 = state_27187__$1;
(statearr_27226_27294[(2)] = null);

(statearr_27226_27294[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (29))){
var inst_27171 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
var statearr_27227_27295 = state_27187__$1;
(statearr_27227_27295[(2)] = inst_27171);

(statearr_27227_27295[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (44))){
var inst_27180 = (state_27187[(2)]);
var state_27187__$1 = (function (){var statearr_27228 = state_27187;
(statearr_27228[(28)] = inst_27180);

return statearr_27228;
})();
var statearr_27229_27296 = state_27187__$1;
(statearr_27229_27296[(2)] = null);

(statearr_27229_27296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (6))){
var inst_27119 = (state_27187[(29)]);
var inst_27118 = cljs.core.deref.call(null,cs);
var inst_27119__$1 = cljs.core.keys.call(null,inst_27118);
var inst_27120 = cljs.core.count.call(null,inst_27119__$1);
var inst_27121 = cljs.core.reset_BANG_.call(null,dctr,inst_27120);
var inst_27126 = cljs.core.seq.call(null,inst_27119__$1);
var inst_27127 = inst_27126;
var inst_27128 = null;
var inst_27129 = (0);
var inst_27130 = (0);
var state_27187__$1 = (function (){var statearr_27230 = state_27187;
(statearr_27230[(29)] = inst_27119__$1);

(statearr_27230[(20)] = inst_27129);

(statearr_27230[(21)] = inst_27127);

(statearr_27230[(10)] = inst_27130);

(statearr_27230[(30)] = inst_27121);

(statearr_27230[(11)] = inst_27128);

return statearr_27230;
})();
var statearr_27231_27297 = state_27187__$1;
(statearr_27231_27297[(2)] = null);

(statearr_27231_27297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (28))){
var inst_27127 = (state_27187[(21)]);
var inst_27146 = (state_27187[(25)]);
var inst_27146__$1 = cljs.core.seq.call(null,inst_27127);
var state_27187__$1 = (function (){var statearr_27232 = state_27187;
(statearr_27232[(25)] = inst_27146__$1);

return statearr_27232;
})();
if(inst_27146__$1){
var statearr_27233_27298 = state_27187__$1;
(statearr_27233_27298[(1)] = (33));

} else {
var statearr_27234_27299 = state_27187__$1;
(statearr_27234_27299[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (25))){
var inst_27129 = (state_27187[(20)]);
var inst_27130 = (state_27187[(10)]);
var inst_27132 = (inst_27130 < inst_27129);
var inst_27133 = inst_27132;
var state_27187__$1 = state_27187;
if(cljs.core.truth_(inst_27133)){
var statearr_27235_27300 = state_27187__$1;
(statearr_27235_27300[(1)] = (27));

} else {
var statearr_27236_27301 = state_27187__$1;
(statearr_27236_27301[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (34))){
var state_27187__$1 = state_27187;
var statearr_27237_27302 = state_27187__$1;
(statearr_27237_27302[(2)] = null);

(statearr_27237_27302[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (17))){
var state_27187__$1 = state_27187;
var statearr_27238_27303 = state_27187__$1;
(statearr_27238_27303[(2)] = null);

(statearr_27238_27303[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (3))){
var inst_27185 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27187__$1,inst_27185);
} else {
if((state_val_27188 === (12))){
var inst_27114 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
var statearr_27239_27304 = state_27187__$1;
(statearr_27239_27304[(2)] = inst_27114);

(statearr_27239_27304[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (2))){
var state_27187__$1 = state_27187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27187__$1,(4),ch);
} else {
if((state_val_27188 === (23))){
var state_27187__$1 = state_27187;
var statearr_27240_27305 = state_27187__$1;
(statearr_27240_27305[(2)] = null);

(statearr_27240_27305[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (35))){
var inst_27169 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
var statearr_27241_27306 = state_27187__$1;
(statearr_27241_27306[(2)] = inst_27169);

(statearr_27241_27306[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (19))){
var inst_27086 = (state_27187[(7)]);
var inst_27090 = cljs.core.chunk_first.call(null,inst_27086);
var inst_27091 = cljs.core.chunk_rest.call(null,inst_27086);
var inst_27092 = cljs.core.count.call(null,inst_27090);
var inst_27064 = inst_27091;
var inst_27065 = inst_27090;
var inst_27066 = inst_27092;
var inst_27067 = (0);
var state_27187__$1 = (function (){var statearr_27242 = state_27187;
(statearr_27242[(14)] = inst_27066);

(statearr_27242[(15)] = inst_27065);

(statearr_27242[(16)] = inst_27064);

(statearr_27242[(17)] = inst_27067);

return statearr_27242;
})();
var statearr_27243_27307 = state_27187__$1;
(statearr_27243_27307[(2)] = null);

(statearr_27243_27307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (11))){
var inst_27086 = (state_27187[(7)]);
var inst_27064 = (state_27187[(16)]);
var inst_27086__$1 = cljs.core.seq.call(null,inst_27064);
var state_27187__$1 = (function (){var statearr_27244 = state_27187;
(statearr_27244[(7)] = inst_27086__$1);

return statearr_27244;
})();
if(inst_27086__$1){
var statearr_27245_27308 = state_27187__$1;
(statearr_27245_27308[(1)] = (16));

} else {
var statearr_27246_27309 = state_27187__$1;
(statearr_27246_27309[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (9))){
var inst_27116 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
var statearr_27247_27310 = state_27187__$1;
(statearr_27247_27310[(2)] = inst_27116);

(statearr_27247_27310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (5))){
var inst_27062 = cljs.core.deref.call(null,cs);
var inst_27063 = cljs.core.seq.call(null,inst_27062);
var inst_27064 = inst_27063;
var inst_27065 = null;
var inst_27066 = (0);
var inst_27067 = (0);
var state_27187__$1 = (function (){var statearr_27248 = state_27187;
(statearr_27248[(14)] = inst_27066);

(statearr_27248[(15)] = inst_27065);

(statearr_27248[(16)] = inst_27064);

(statearr_27248[(17)] = inst_27067);

return statearr_27248;
})();
var statearr_27249_27311 = state_27187__$1;
(statearr_27249_27311[(2)] = null);

(statearr_27249_27311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (14))){
var state_27187__$1 = state_27187;
var statearr_27250_27312 = state_27187__$1;
(statearr_27250_27312[(2)] = null);

(statearr_27250_27312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (45))){
var inst_27177 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
var statearr_27251_27313 = state_27187__$1;
(statearr_27251_27313[(2)] = inst_27177);

(statearr_27251_27313[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (26))){
var inst_27119 = (state_27187[(29)]);
var inst_27173 = (state_27187[(2)]);
var inst_27174 = cljs.core.seq.call(null,inst_27119);
var state_27187__$1 = (function (){var statearr_27252 = state_27187;
(statearr_27252[(31)] = inst_27173);

return statearr_27252;
})();
if(inst_27174){
var statearr_27253_27314 = state_27187__$1;
(statearr_27253_27314[(1)] = (42));

} else {
var statearr_27254_27315 = state_27187__$1;
(statearr_27254_27315[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (16))){
var inst_27086 = (state_27187[(7)]);
var inst_27088 = cljs.core.chunked_seq_QMARK_.call(null,inst_27086);
var state_27187__$1 = state_27187;
if(inst_27088){
var statearr_27255_27316 = state_27187__$1;
(statearr_27255_27316[(1)] = (19));

} else {
var statearr_27256_27317 = state_27187__$1;
(statearr_27256_27317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (38))){
var inst_27166 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
var statearr_27257_27318 = state_27187__$1;
(statearr_27257_27318[(2)] = inst_27166);

(statearr_27257_27318[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (30))){
var state_27187__$1 = state_27187;
var statearr_27258_27319 = state_27187__$1;
(statearr_27258_27319[(2)] = null);

(statearr_27258_27319[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (10))){
var inst_27065 = (state_27187[(15)]);
var inst_27067 = (state_27187[(17)]);
var inst_27075 = cljs.core._nth.call(null,inst_27065,inst_27067);
var inst_27076 = cljs.core.nth.call(null,inst_27075,(0),null);
var inst_27077 = cljs.core.nth.call(null,inst_27075,(1),null);
var state_27187__$1 = (function (){var statearr_27259 = state_27187;
(statearr_27259[(26)] = inst_27076);

return statearr_27259;
})();
if(cljs.core.truth_(inst_27077)){
var statearr_27260_27320 = state_27187__$1;
(statearr_27260_27320[(1)] = (13));

} else {
var statearr_27261_27321 = state_27187__$1;
(statearr_27261_27321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (18))){
var inst_27112 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
var statearr_27262_27322 = state_27187__$1;
(statearr_27262_27322[(2)] = inst_27112);

(statearr_27262_27322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (42))){
var state_27187__$1 = state_27187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27187__$1,(45),dchan);
} else {
if((state_val_27188 === (37))){
var inst_27155 = (state_27187[(23)]);
var inst_27146 = (state_27187[(25)]);
var inst_27055 = (state_27187[(9)]);
var inst_27155__$1 = cljs.core.first.call(null,inst_27146);
var inst_27156 = cljs.core.async.put_BANG_.call(null,inst_27155__$1,inst_27055,done);
var state_27187__$1 = (function (){var statearr_27263 = state_27187;
(statearr_27263[(23)] = inst_27155__$1);

return statearr_27263;
})();
if(cljs.core.truth_(inst_27156)){
var statearr_27264_27323 = state_27187__$1;
(statearr_27264_27323[(1)] = (39));

} else {
var statearr_27265_27324 = state_27187__$1;
(statearr_27265_27324[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (8))){
var inst_27066 = (state_27187[(14)]);
var inst_27067 = (state_27187[(17)]);
var inst_27069 = (inst_27067 < inst_27066);
var inst_27070 = inst_27069;
var state_27187__$1 = state_27187;
if(cljs.core.truth_(inst_27070)){
var statearr_27266_27325 = state_27187__$1;
(statearr_27266_27325[(1)] = (10));

} else {
var statearr_27267_27326 = state_27187__$1;
(statearr_27267_27326[(1)] = (11));

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
});})(c__26453__auto___27272,cs,m,dchan,dctr,done))
;
return ((function (switch__26363__auto__,c__26453__auto___27272,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26364__auto__ = null;
var cljs$core$async$mult_$_state_machine__26364__auto____0 = (function (){
var statearr_27268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27268[(0)] = cljs$core$async$mult_$_state_machine__26364__auto__);

(statearr_27268[(1)] = (1));

return statearr_27268;
});
var cljs$core$async$mult_$_state_machine__26364__auto____1 = (function (state_27187){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_27187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e27269){if((e27269 instanceof Object)){
var ex__26367__auto__ = e27269;
var statearr_27270_27327 = state_27187;
(statearr_27270_27327[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27328 = state_27187;
state_27187 = G__27328;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26364__auto__ = function(state_27187){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26364__auto____1.call(this,state_27187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26364__auto____0;
cljs$core$async$mult_$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26364__auto____1;
return cljs$core$async$mult_$_state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto___27272,cs,m,dchan,dctr,done))
})();
var state__26455__auto__ = (function (){var statearr_27271 = f__26454__auto__.call(null);
(statearr_27271[(6)] = c__26453__auto___27272);

return statearr_27271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto___27272,cs,m,dchan,dctr,done))
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
var G__27330 = arguments.length;
switch (G__27330) {
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
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
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
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
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
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
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
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
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
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27342 = arguments.length;
var i__4500__auto___27343 = (0);
while(true){
if((i__4500__auto___27343 < len__4499__auto___27342)){
args__4502__auto__.push((arguments[i__4500__auto___27343]));

var G__27344 = (i__4500__auto___27343 + (1));
i__4500__auto___27343 = G__27344;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27336){
var map__27337 = p__27336;
var map__27337__$1 = ((((!((map__27337 == null)))?(((((map__27337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27337):map__27337);
var opts = map__27337__$1;
var statearr_27339_27345 = state;
(statearr_27339_27345[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27337,map__27337__$1,opts){
return (function (val){
var statearr_27340_27346 = state;
(statearr_27340_27346[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27337,map__27337__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27341_27347 = state;
(statearr_27341_27347[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27332){
var G__27333 = cljs.core.first.call(null,seq27332);
var seq27332__$1 = cljs.core.next.call(null,seq27332);
var G__27334 = cljs.core.first.call(null,seq27332__$1);
var seq27332__$2 = cljs.core.next.call(null,seq27332__$1);
var G__27335 = cljs.core.first.call(null,seq27332__$2);
var seq27332__$3 = cljs.core.next.call(null,seq27332__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27333,G__27334,G__27335,seq27332__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27348 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27349){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27349 = meta27349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27350,meta27349__$1){
var self__ = this;
var _27350__$1 = this;
return (new cljs.core.async.t_cljs$core$async27348(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27349__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27350){
var self__ = this;
var _27350__$1 = this;
return self__.meta27349;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27348.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27348.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27348.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27348.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27348.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27348.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27348.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27348.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27348.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27349","meta27349",806107638,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27348.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27348";

cljs.core.async.t_cljs$core$async27348.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27348");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27348.
 */
cljs.core.async.__GT_t_cljs$core$async27348 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27348(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27349){
return (new cljs.core.async.t_cljs$core$async27348(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27349));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27348(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26453__auto___27512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto___27512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto___27512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27452){
var state_val_27453 = (state_27452[(1)]);
if((state_val_27453 === (7))){
var inst_27367 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27454_27513 = state_27452__$1;
(statearr_27454_27513[(2)] = inst_27367);

(statearr_27454_27513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (20))){
var inst_27379 = (state_27452[(7)]);
var state_27452__$1 = state_27452;
var statearr_27455_27514 = state_27452__$1;
(statearr_27455_27514[(2)] = inst_27379);

(statearr_27455_27514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (27))){
var state_27452__$1 = state_27452;
var statearr_27456_27515 = state_27452__$1;
(statearr_27456_27515[(2)] = null);

(statearr_27456_27515[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (1))){
var inst_27354 = (state_27452[(8)]);
var inst_27354__$1 = calc_state.call(null);
var inst_27356 = (inst_27354__$1 == null);
var inst_27357 = cljs.core.not.call(null,inst_27356);
var state_27452__$1 = (function (){var statearr_27457 = state_27452;
(statearr_27457[(8)] = inst_27354__$1);

return statearr_27457;
})();
if(inst_27357){
var statearr_27458_27516 = state_27452__$1;
(statearr_27458_27516[(1)] = (2));

} else {
var statearr_27459_27517 = state_27452__$1;
(statearr_27459_27517[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (24))){
var inst_27403 = (state_27452[(9)]);
var inst_27426 = (state_27452[(10)]);
var inst_27412 = (state_27452[(11)]);
var inst_27426__$1 = inst_27403.call(null,inst_27412);
var state_27452__$1 = (function (){var statearr_27460 = state_27452;
(statearr_27460[(10)] = inst_27426__$1);

return statearr_27460;
})();
if(cljs.core.truth_(inst_27426__$1)){
var statearr_27461_27518 = state_27452__$1;
(statearr_27461_27518[(1)] = (29));

} else {
var statearr_27462_27519 = state_27452__$1;
(statearr_27462_27519[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (4))){
var inst_27370 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
if(cljs.core.truth_(inst_27370)){
var statearr_27463_27520 = state_27452__$1;
(statearr_27463_27520[(1)] = (8));

} else {
var statearr_27464_27521 = state_27452__$1;
(statearr_27464_27521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (15))){
var inst_27397 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
if(cljs.core.truth_(inst_27397)){
var statearr_27465_27522 = state_27452__$1;
(statearr_27465_27522[(1)] = (19));

} else {
var statearr_27466_27523 = state_27452__$1;
(statearr_27466_27523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (21))){
var inst_27402 = (state_27452[(12)]);
var inst_27402__$1 = (state_27452[(2)]);
var inst_27403 = cljs.core.get.call(null,inst_27402__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27404 = cljs.core.get.call(null,inst_27402__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27405 = cljs.core.get.call(null,inst_27402__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27452__$1 = (function (){var statearr_27467 = state_27452;
(statearr_27467[(12)] = inst_27402__$1);

(statearr_27467[(9)] = inst_27403);

(statearr_27467[(13)] = inst_27404);

return statearr_27467;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27452__$1,(22),inst_27405);
} else {
if((state_val_27453 === (31))){
var inst_27434 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
if(cljs.core.truth_(inst_27434)){
var statearr_27468_27524 = state_27452__$1;
(statearr_27468_27524[(1)] = (32));

} else {
var statearr_27469_27525 = state_27452__$1;
(statearr_27469_27525[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (32))){
var inst_27411 = (state_27452[(14)]);
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27452__$1,(35),out,inst_27411);
} else {
if((state_val_27453 === (33))){
var inst_27402 = (state_27452[(12)]);
var inst_27379 = inst_27402;
var state_27452__$1 = (function (){var statearr_27470 = state_27452;
(statearr_27470[(7)] = inst_27379);

return statearr_27470;
})();
var statearr_27471_27526 = state_27452__$1;
(statearr_27471_27526[(2)] = null);

(statearr_27471_27526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (13))){
var inst_27379 = (state_27452[(7)]);
var inst_27386 = inst_27379.cljs$lang$protocol_mask$partition0$;
var inst_27387 = (inst_27386 & (64));
var inst_27388 = inst_27379.cljs$core$ISeq$;
var inst_27389 = (cljs.core.PROTOCOL_SENTINEL === inst_27388);
var inst_27390 = ((inst_27387) || (inst_27389));
var state_27452__$1 = state_27452;
if(cljs.core.truth_(inst_27390)){
var statearr_27472_27527 = state_27452__$1;
(statearr_27472_27527[(1)] = (16));

} else {
var statearr_27473_27528 = state_27452__$1;
(statearr_27473_27528[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (22))){
var inst_27411 = (state_27452[(14)]);
var inst_27412 = (state_27452[(11)]);
var inst_27410 = (state_27452[(2)]);
var inst_27411__$1 = cljs.core.nth.call(null,inst_27410,(0),null);
var inst_27412__$1 = cljs.core.nth.call(null,inst_27410,(1),null);
var inst_27413 = (inst_27411__$1 == null);
var inst_27414 = cljs.core._EQ_.call(null,inst_27412__$1,change);
var inst_27415 = ((inst_27413) || (inst_27414));
var state_27452__$1 = (function (){var statearr_27474 = state_27452;
(statearr_27474[(14)] = inst_27411__$1);

(statearr_27474[(11)] = inst_27412__$1);

return statearr_27474;
})();
if(cljs.core.truth_(inst_27415)){
var statearr_27475_27529 = state_27452__$1;
(statearr_27475_27529[(1)] = (23));

} else {
var statearr_27476_27530 = state_27452__$1;
(statearr_27476_27530[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (36))){
var inst_27402 = (state_27452[(12)]);
var inst_27379 = inst_27402;
var state_27452__$1 = (function (){var statearr_27477 = state_27452;
(statearr_27477[(7)] = inst_27379);

return statearr_27477;
})();
var statearr_27478_27531 = state_27452__$1;
(statearr_27478_27531[(2)] = null);

(statearr_27478_27531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (29))){
var inst_27426 = (state_27452[(10)]);
var state_27452__$1 = state_27452;
var statearr_27479_27532 = state_27452__$1;
(statearr_27479_27532[(2)] = inst_27426);

(statearr_27479_27532[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (6))){
var state_27452__$1 = state_27452;
var statearr_27480_27533 = state_27452__$1;
(statearr_27480_27533[(2)] = false);

(statearr_27480_27533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (28))){
var inst_27422 = (state_27452[(2)]);
var inst_27423 = calc_state.call(null);
var inst_27379 = inst_27423;
var state_27452__$1 = (function (){var statearr_27481 = state_27452;
(statearr_27481[(15)] = inst_27422);

(statearr_27481[(7)] = inst_27379);

return statearr_27481;
})();
var statearr_27482_27534 = state_27452__$1;
(statearr_27482_27534[(2)] = null);

(statearr_27482_27534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (25))){
var inst_27448 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27483_27535 = state_27452__$1;
(statearr_27483_27535[(2)] = inst_27448);

(statearr_27483_27535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (34))){
var inst_27446 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27484_27536 = state_27452__$1;
(statearr_27484_27536[(2)] = inst_27446);

(statearr_27484_27536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (17))){
var state_27452__$1 = state_27452;
var statearr_27485_27537 = state_27452__$1;
(statearr_27485_27537[(2)] = false);

(statearr_27485_27537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (3))){
var state_27452__$1 = state_27452;
var statearr_27486_27538 = state_27452__$1;
(statearr_27486_27538[(2)] = false);

(statearr_27486_27538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (12))){
var inst_27450 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27452__$1,inst_27450);
} else {
if((state_val_27453 === (2))){
var inst_27354 = (state_27452[(8)]);
var inst_27359 = inst_27354.cljs$lang$protocol_mask$partition0$;
var inst_27360 = (inst_27359 & (64));
var inst_27361 = inst_27354.cljs$core$ISeq$;
var inst_27362 = (cljs.core.PROTOCOL_SENTINEL === inst_27361);
var inst_27363 = ((inst_27360) || (inst_27362));
var state_27452__$1 = state_27452;
if(cljs.core.truth_(inst_27363)){
var statearr_27487_27539 = state_27452__$1;
(statearr_27487_27539[(1)] = (5));

} else {
var statearr_27488_27540 = state_27452__$1;
(statearr_27488_27540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (23))){
var inst_27411 = (state_27452[(14)]);
var inst_27417 = (inst_27411 == null);
var state_27452__$1 = state_27452;
if(cljs.core.truth_(inst_27417)){
var statearr_27489_27541 = state_27452__$1;
(statearr_27489_27541[(1)] = (26));

} else {
var statearr_27490_27542 = state_27452__$1;
(statearr_27490_27542[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (35))){
var inst_27437 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
if(cljs.core.truth_(inst_27437)){
var statearr_27491_27543 = state_27452__$1;
(statearr_27491_27543[(1)] = (36));

} else {
var statearr_27492_27544 = state_27452__$1;
(statearr_27492_27544[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (19))){
var inst_27379 = (state_27452[(7)]);
var inst_27399 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27379);
var state_27452__$1 = state_27452;
var statearr_27493_27545 = state_27452__$1;
(statearr_27493_27545[(2)] = inst_27399);

(statearr_27493_27545[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (11))){
var inst_27379 = (state_27452[(7)]);
var inst_27383 = (inst_27379 == null);
var inst_27384 = cljs.core.not.call(null,inst_27383);
var state_27452__$1 = state_27452;
if(inst_27384){
var statearr_27494_27546 = state_27452__$1;
(statearr_27494_27546[(1)] = (13));

} else {
var statearr_27495_27547 = state_27452__$1;
(statearr_27495_27547[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (9))){
var inst_27354 = (state_27452[(8)]);
var state_27452__$1 = state_27452;
var statearr_27496_27548 = state_27452__$1;
(statearr_27496_27548[(2)] = inst_27354);

(statearr_27496_27548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (5))){
var state_27452__$1 = state_27452;
var statearr_27497_27549 = state_27452__$1;
(statearr_27497_27549[(2)] = true);

(statearr_27497_27549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (14))){
var state_27452__$1 = state_27452;
var statearr_27498_27550 = state_27452__$1;
(statearr_27498_27550[(2)] = false);

(statearr_27498_27550[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (26))){
var inst_27412 = (state_27452[(11)]);
var inst_27419 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27412);
var state_27452__$1 = state_27452;
var statearr_27499_27551 = state_27452__$1;
(statearr_27499_27551[(2)] = inst_27419);

(statearr_27499_27551[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (16))){
var state_27452__$1 = state_27452;
var statearr_27500_27552 = state_27452__$1;
(statearr_27500_27552[(2)] = true);

(statearr_27500_27552[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (38))){
var inst_27442 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27501_27553 = state_27452__$1;
(statearr_27501_27553[(2)] = inst_27442);

(statearr_27501_27553[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (30))){
var inst_27403 = (state_27452[(9)]);
var inst_27404 = (state_27452[(13)]);
var inst_27412 = (state_27452[(11)]);
var inst_27429 = cljs.core.empty_QMARK_.call(null,inst_27403);
var inst_27430 = inst_27404.call(null,inst_27412);
var inst_27431 = cljs.core.not.call(null,inst_27430);
var inst_27432 = ((inst_27429) && (inst_27431));
var state_27452__$1 = state_27452;
var statearr_27502_27554 = state_27452__$1;
(statearr_27502_27554[(2)] = inst_27432);

(statearr_27502_27554[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (10))){
var inst_27354 = (state_27452[(8)]);
var inst_27375 = (state_27452[(2)]);
var inst_27376 = cljs.core.get.call(null,inst_27375,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27377 = cljs.core.get.call(null,inst_27375,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27378 = cljs.core.get.call(null,inst_27375,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27379 = inst_27354;
var state_27452__$1 = (function (){var statearr_27503 = state_27452;
(statearr_27503[(16)] = inst_27376);

(statearr_27503[(7)] = inst_27379);

(statearr_27503[(17)] = inst_27378);

(statearr_27503[(18)] = inst_27377);

return statearr_27503;
})();
var statearr_27504_27555 = state_27452__$1;
(statearr_27504_27555[(2)] = null);

(statearr_27504_27555[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (18))){
var inst_27394 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27505_27556 = state_27452__$1;
(statearr_27505_27556[(2)] = inst_27394);

(statearr_27505_27556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (37))){
var state_27452__$1 = state_27452;
var statearr_27506_27557 = state_27452__$1;
(statearr_27506_27557[(2)] = null);

(statearr_27506_27557[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (8))){
var inst_27354 = (state_27452[(8)]);
var inst_27372 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27354);
var state_27452__$1 = state_27452;
var statearr_27507_27558 = state_27452__$1;
(statearr_27507_27558[(2)] = inst_27372);

(statearr_27507_27558[(1)] = (10));


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
});})(c__26453__auto___27512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26363__auto__,c__26453__auto___27512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26364__auto__ = null;
var cljs$core$async$mix_$_state_machine__26364__auto____0 = (function (){
var statearr_27508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27508[(0)] = cljs$core$async$mix_$_state_machine__26364__auto__);

(statearr_27508[(1)] = (1));

return statearr_27508;
});
var cljs$core$async$mix_$_state_machine__26364__auto____1 = (function (state_27452){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_27452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e27509){if((e27509 instanceof Object)){
var ex__26367__auto__ = e27509;
var statearr_27510_27559 = state_27452;
(statearr_27510_27559[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27560 = state_27452;
state_27452 = G__27560;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26364__auto__ = function(state_27452){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26364__auto____1.call(this,state_27452);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26364__auto____0;
cljs$core$async$mix_$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26364__auto____1;
return cljs$core$async$mix_$_state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto___27512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26455__auto__ = (function (){var statearr_27511 = f__26454__auto__.call(null);
(statearr_27511[(6)] = c__26453__auto___27512);

return statearr_27511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto___27512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27562 = arguments.length;
switch (G__27562) {
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
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
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
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
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
var G__27566 = arguments.length;
switch (G__27566) {
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
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__27564_SHARP_){
if(cljs.core.truth_(p1__27564_SHARP_.call(null,topic))){
return p1__27564_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27564_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27567 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27567 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27568){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27568 = meta27568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27569,meta27568__$1){
var self__ = this;
var _27569__$1 = this;
return (new cljs.core.async.t_cljs$core$async27567(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27568__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27569){
var self__ = this;
var _27569__$1 = this;
return self__.meta27568;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27567.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27568","meta27568",-1725720409,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27567";

cljs.core.async.t_cljs$core$async27567.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27567");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27567.
 */
cljs.core.async.__GT_t_cljs$core$async27567 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27567(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27568){
return (new cljs.core.async.t_cljs$core$async27567(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27568));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27567(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26453__auto___27687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto___27687,mults,ensure_mult,p){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto___27687,mults,ensure_mult,p){
return (function (state_27641){
var state_val_27642 = (state_27641[(1)]);
if((state_val_27642 === (7))){
var inst_27637 = (state_27641[(2)]);
var state_27641__$1 = state_27641;
var statearr_27643_27688 = state_27641__$1;
(statearr_27643_27688[(2)] = inst_27637);

(statearr_27643_27688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (20))){
var state_27641__$1 = state_27641;
var statearr_27644_27689 = state_27641__$1;
(statearr_27644_27689[(2)] = null);

(statearr_27644_27689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (1))){
var state_27641__$1 = state_27641;
var statearr_27645_27690 = state_27641__$1;
(statearr_27645_27690[(2)] = null);

(statearr_27645_27690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (24))){
var inst_27620 = (state_27641[(7)]);
var inst_27629 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27620);
var state_27641__$1 = state_27641;
var statearr_27646_27691 = state_27641__$1;
(statearr_27646_27691[(2)] = inst_27629);

(statearr_27646_27691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (4))){
var inst_27572 = (state_27641[(8)]);
var inst_27572__$1 = (state_27641[(2)]);
var inst_27573 = (inst_27572__$1 == null);
var state_27641__$1 = (function (){var statearr_27647 = state_27641;
(statearr_27647[(8)] = inst_27572__$1);

return statearr_27647;
})();
if(cljs.core.truth_(inst_27573)){
var statearr_27648_27692 = state_27641__$1;
(statearr_27648_27692[(1)] = (5));

} else {
var statearr_27649_27693 = state_27641__$1;
(statearr_27649_27693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (15))){
var inst_27614 = (state_27641[(2)]);
var state_27641__$1 = state_27641;
var statearr_27650_27694 = state_27641__$1;
(statearr_27650_27694[(2)] = inst_27614);

(statearr_27650_27694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (21))){
var inst_27634 = (state_27641[(2)]);
var state_27641__$1 = (function (){var statearr_27651 = state_27641;
(statearr_27651[(9)] = inst_27634);

return statearr_27651;
})();
var statearr_27652_27695 = state_27641__$1;
(statearr_27652_27695[(2)] = null);

(statearr_27652_27695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (13))){
var inst_27596 = (state_27641[(10)]);
var inst_27598 = cljs.core.chunked_seq_QMARK_.call(null,inst_27596);
var state_27641__$1 = state_27641;
if(inst_27598){
var statearr_27653_27696 = state_27641__$1;
(statearr_27653_27696[(1)] = (16));

} else {
var statearr_27654_27697 = state_27641__$1;
(statearr_27654_27697[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (22))){
var inst_27626 = (state_27641[(2)]);
var state_27641__$1 = state_27641;
if(cljs.core.truth_(inst_27626)){
var statearr_27655_27698 = state_27641__$1;
(statearr_27655_27698[(1)] = (23));

} else {
var statearr_27656_27699 = state_27641__$1;
(statearr_27656_27699[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (6))){
var inst_27622 = (state_27641[(11)]);
var inst_27572 = (state_27641[(8)]);
var inst_27620 = (state_27641[(7)]);
var inst_27620__$1 = topic_fn.call(null,inst_27572);
var inst_27621 = cljs.core.deref.call(null,mults);
var inst_27622__$1 = cljs.core.get.call(null,inst_27621,inst_27620__$1);
var state_27641__$1 = (function (){var statearr_27657 = state_27641;
(statearr_27657[(11)] = inst_27622__$1);

(statearr_27657[(7)] = inst_27620__$1);

return statearr_27657;
})();
if(cljs.core.truth_(inst_27622__$1)){
var statearr_27658_27700 = state_27641__$1;
(statearr_27658_27700[(1)] = (19));

} else {
var statearr_27659_27701 = state_27641__$1;
(statearr_27659_27701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (25))){
var inst_27631 = (state_27641[(2)]);
var state_27641__$1 = state_27641;
var statearr_27660_27702 = state_27641__$1;
(statearr_27660_27702[(2)] = inst_27631);

(statearr_27660_27702[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (17))){
var inst_27596 = (state_27641[(10)]);
var inst_27605 = cljs.core.first.call(null,inst_27596);
var inst_27606 = cljs.core.async.muxch_STAR_.call(null,inst_27605);
var inst_27607 = cljs.core.async.close_BANG_.call(null,inst_27606);
var inst_27608 = cljs.core.next.call(null,inst_27596);
var inst_27582 = inst_27608;
var inst_27583 = null;
var inst_27584 = (0);
var inst_27585 = (0);
var state_27641__$1 = (function (){var statearr_27661 = state_27641;
(statearr_27661[(12)] = inst_27607);

(statearr_27661[(13)] = inst_27582);

(statearr_27661[(14)] = inst_27583);

(statearr_27661[(15)] = inst_27584);

(statearr_27661[(16)] = inst_27585);

return statearr_27661;
})();
var statearr_27662_27703 = state_27641__$1;
(statearr_27662_27703[(2)] = null);

(statearr_27662_27703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (3))){
var inst_27639 = (state_27641[(2)]);
var state_27641__$1 = state_27641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27641__$1,inst_27639);
} else {
if((state_val_27642 === (12))){
var inst_27616 = (state_27641[(2)]);
var state_27641__$1 = state_27641;
var statearr_27663_27704 = state_27641__$1;
(statearr_27663_27704[(2)] = inst_27616);

(statearr_27663_27704[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (2))){
var state_27641__$1 = state_27641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27641__$1,(4),ch);
} else {
if((state_val_27642 === (23))){
var state_27641__$1 = state_27641;
var statearr_27664_27705 = state_27641__$1;
(statearr_27664_27705[(2)] = null);

(statearr_27664_27705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (19))){
var inst_27622 = (state_27641[(11)]);
var inst_27572 = (state_27641[(8)]);
var inst_27624 = cljs.core.async.muxch_STAR_.call(null,inst_27622);
var state_27641__$1 = state_27641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27641__$1,(22),inst_27624,inst_27572);
} else {
if((state_val_27642 === (11))){
var inst_27582 = (state_27641[(13)]);
var inst_27596 = (state_27641[(10)]);
var inst_27596__$1 = cljs.core.seq.call(null,inst_27582);
var state_27641__$1 = (function (){var statearr_27665 = state_27641;
(statearr_27665[(10)] = inst_27596__$1);

return statearr_27665;
})();
if(inst_27596__$1){
var statearr_27666_27706 = state_27641__$1;
(statearr_27666_27706[(1)] = (13));

} else {
var statearr_27667_27707 = state_27641__$1;
(statearr_27667_27707[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (9))){
var inst_27618 = (state_27641[(2)]);
var state_27641__$1 = state_27641;
var statearr_27668_27708 = state_27641__$1;
(statearr_27668_27708[(2)] = inst_27618);

(statearr_27668_27708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (5))){
var inst_27579 = cljs.core.deref.call(null,mults);
var inst_27580 = cljs.core.vals.call(null,inst_27579);
var inst_27581 = cljs.core.seq.call(null,inst_27580);
var inst_27582 = inst_27581;
var inst_27583 = null;
var inst_27584 = (0);
var inst_27585 = (0);
var state_27641__$1 = (function (){var statearr_27669 = state_27641;
(statearr_27669[(13)] = inst_27582);

(statearr_27669[(14)] = inst_27583);

(statearr_27669[(15)] = inst_27584);

(statearr_27669[(16)] = inst_27585);

return statearr_27669;
})();
var statearr_27670_27709 = state_27641__$1;
(statearr_27670_27709[(2)] = null);

(statearr_27670_27709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (14))){
var state_27641__$1 = state_27641;
var statearr_27674_27710 = state_27641__$1;
(statearr_27674_27710[(2)] = null);

(statearr_27674_27710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (16))){
var inst_27596 = (state_27641[(10)]);
var inst_27600 = cljs.core.chunk_first.call(null,inst_27596);
var inst_27601 = cljs.core.chunk_rest.call(null,inst_27596);
var inst_27602 = cljs.core.count.call(null,inst_27600);
var inst_27582 = inst_27601;
var inst_27583 = inst_27600;
var inst_27584 = inst_27602;
var inst_27585 = (0);
var state_27641__$1 = (function (){var statearr_27675 = state_27641;
(statearr_27675[(13)] = inst_27582);

(statearr_27675[(14)] = inst_27583);

(statearr_27675[(15)] = inst_27584);

(statearr_27675[(16)] = inst_27585);

return statearr_27675;
})();
var statearr_27676_27711 = state_27641__$1;
(statearr_27676_27711[(2)] = null);

(statearr_27676_27711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (10))){
var inst_27582 = (state_27641[(13)]);
var inst_27583 = (state_27641[(14)]);
var inst_27584 = (state_27641[(15)]);
var inst_27585 = (state_27641[(16)]);
var inst_27590 = cljs.core._nth.call(null,inst_27583,inst_27585);
var inst_27591 = cljs.core.async.muxch_STAR_.call(null,inst_27590);
var inst_27592 = cljs.core.async.close_BANG_.call(null,inst_27591);
var inst_27593 = (inst_27585 + (1));
var tmp27671 = inst_27582;
var tmp27672 = inst_27583;
var tmp27673 = inst_27584;
var inst_27582__$1 = tmp27671;
var inst_27583__$1 = tmp27672;
var inst_27584__$1 = tmp27673;
var inst_27585__$1 = inst_27593;
var state_27641__$1 = (function (){var statearr_27677 = state_27641;
(statearr_27677[(13)] = inst_27582__$1);

(statearr_27677[(14)] = inst_27583__$1);

(statearr_27677[(15)] = inst_27584__$1);

(statearr_27677[(16)] = inst_27585__$1);

(statearr_27677[(17)] = inst_27592);

return statearr_27677;
})();
var statearr_27678_27712 = state_27641__$1;
(statearr_27678_27712[(2)] = null);

(statearr_27678_27712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (18))){
var inst_27611 = (state_27641[(2)]);
var state_27641__$1 = state_27641;
var statearr_27679_27713 = state_27641__$1;
(statearr_27679_27713[(2)] = inst_27611);

(statearr_27679_27713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (8))){
var inst_27584 = (state_27641[(15)]);
var inst_27585 = (state_27641[(16)]);
var inst_27587 = (inst_27585 < inst_27584);
var inst_27588 = inst_27587;
var state_27641__$1 = state_27641;
if(cljs.core.truth_(inst_27588)){
var statearr_27680_27714 = state_27641__$1;
(statearr_27680_27714[(1)] = (10));

} else {
var statearr_27681_27715 = state_27641__$1;
(statearr_27681_27715[(1)] = (11));

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
});})(c__26453__auto___27687,mults,ensure_mult,p))
;
return ((function (switch__26363__auto__,c__26453__auto___27687,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26364__auto__ = null;
var cljs$core$async$state_machine__26364__auto____0 = (function (){
var statearr_27682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27682[(0)] = cljs$core$async$state_machine__26364__auto__);

(statearr_27682[(1)] = (1));

return statearr_27682;
});
var cljs$core$async$state_machine__26364__auto____1 = (function (state_27641){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_27641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e27683){if((e27683 instanceof Object)){
var ex__26367__auto__ = e27683;
var statearr_27684_27716 = state_27641;
(statearr_27684_27716[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27717 = state_27641;
state_27641 = G__27717;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$state_machine__26364__auto__ = function(state_27641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26364__auto____1.call(this,state_27641);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26364__auto____0;
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26364__auto____1;
return cljs$core$async$state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto___27687,mults,ensure_mult,p))
})();
var state__26455__auto__ = (function (){var statearr_27685 = f__26454__auto__.call(null);
(statearr_27685[(6)] = c__26453__auto___27687);

return statearr_27685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto___27687,mults,ensure_mult,p))
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
var G__27719 = arguments.length;
switch (G__27719) {
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
var G__27722 = arguments.length;
switch (G__27722) {
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
var G__27725 = arguments.length;
switch (G__27725) {
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
var c__26453__auto___27792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto___27792,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto___27792,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27764){
var state_val_27765 = (state_27764[(1)]);
if((state_val_27765 === (7))){
var state_27764__$1 = state_27764;
var statearr_27766_27793 = state_27764__$1;
(statearr_27766_27793[(2)] = null);

(statearr_27766_27793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (1))){
var state_27764__$1 = state_27764;
var statearr_27767_27794 = state_27764__$1;
(statearr_27767_27794[(2)] = null);

(statearr_27767_27794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (4))){
var inst_27728 = (state_27764[(7)]);
var inst_27730 = (inst_27728 < cnt);
var state_27764__$1 = state_27764;
if(cljs.core.truth_(inst_27730)){
var statearr_27768_27795 = state_27764__$1;
(statearr_27768_27795[(1)] = (6));

} else {
var statearr_27769_27796 = state_27764__$1;
(statearr_27769_27796[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (15))){
var inst_27760 = (state_27764[(2)]);
var state_27764__$1 = state_27764;
var statearr_27770_27797 = state_27764__$1;
(statearr_27770_27797[(2)] = inst_27760);

(statearr_27770_27797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (13))){
var inst_27753 = cljs.core.async.close_BANG_.call(null,out);
var state_27764__$1 = state_27764;
var statearr_27771_27798 = state_27764__$1;
(statearr_27771_27798[(2)] = inst_27753);

(statearr_27771_27798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (6))){
var state_27764__$1 = state_27764;
var statearr_27772_27799 = state_27764__$1;
(statearr_27772_27799[(2)] = null);

(statearr_27772_27799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (3))){
var inst_27762 = (state_27764[(2)]);
var state_27764__$1 = state_27764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27764__$1,inst_27762);
} else {
if((state_val_27765 === (12))){
var inst_27750 = (state_27764[(8)]);
var inst_27750__$1 = (state_27764[(2)]);
var inst_27751 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27750__$1);
var state_27764__$1 = (function (){var statearr_27773 = state_27764;
(statearr_27773[(8)] = inst_27750__$1);

return statearr_27773;
})();
if(cljs.core.truth_(inst_27751)){
var statearr_27774_27800 = state_27764__$1;
(statearr_27774_27800[(1)] = (13));

} else {
var statearr_27775_27801 = state_27764__$1;
(statearr_27775_27801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (2))){
var inst_27727 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27728 = (0);
var state_27764__$1 = (function (){var statearr_27776 = state_27764;
(statearr_27776[(9)] = inst_27727);

(statearr_27776[(7)] = inst_27728);

return statearr_27776;
})();
var statearr_27777_27802 = state_27764__$1;
(statearr_27777_27802[(2)] = null);

(statearr_27777_27802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (11))){
var inst_27728 = (state_27764[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27764,(10),Object,null,(9));
var inst_27737 = chs__$1.call(null,inst_27728);
var inst_27738 = done.call(null,inst_27728);
var inst_27739 = cljs.core.async.take_BANG_.call(null,inst_27737,inst_27738);
var state_27764__$1 = state_27764;
var statearr_27778_27803 = state_27764__$1;
(statearr_27778_27803[(2)] = inst_27739);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27764__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (9))){
var inst_27728 = (state_27764[(7)]);
var inst_27741 = (state_27764[(2)]);
var inst_27742 = (inst_27728 + (1));
var inst_27728__$1 = inst_27742;
var state_27764__$1 = (function (){var statearr_27779 = state_27764;
(statearr_27779[(10)] = inst_27741);

(statearr_27779[(7)] = inst_27728__$1);

return statearr_27779;
})();
var statearr_27780_27804 = state_27764__$1;
(statearr_27780_27804[(2)] = null);

(statearr_27780_27804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (5))){
var inst_27748 = (state_27764[(2)]);
var state_27764__$1 = (function (){var statearr_27781 = state_27764;
(statearr_27781[(11)] = inst_27748);

return statearr_27781;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27764__$1,(12),dchan);
} else {
if((state_val_27765 === (14))){
var inst_27750 = (state_27764[(8)]);
var inst_27755 = cljs.core.apply.call(null,f,inst_27750);
var state_27764__$1 = state_27764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27764__$1,(16),out,inst_27755);
} else {
if((state_val_27765 === (16))){
var inst_27757 = (state_27764[(2)]);
var state_27764__$1 = (function (){var statearr_27782 = state_27764;
(statearr_27782[(12)] = inst_27757);

return statearr_27782;
})();
var statearr_27783_27805 = state_27764__$1;
(statearr_27783_27805[(2)] = null);

(statearr_27783_27805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (10))){
var inst_27732 = (state_27764[(2)]);
var inst_27733 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27764__$1 = (function (){var statearr_27784 = state_27764;
(statearr_27784[(13)] = inst_27732);

return statearr_27784;
})();
var statearr_27785_27806 = state_27764__$1;
(statearr_27785_27806[(2)] = inst_27733);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27764__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (8))){
var inst_27746 = (state_27764[(2)]);
var state_27764__$1 = state_27764;
var statearr_27786_27807 = state_27764__$1;
(statearr_27786_27807[(2)] = inst_27746);

(statearr_27786_27807[(1)] = (5));


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
});})(c__26453__auto___27792,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26363__auto__,c__26453__auto___27792,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26364__auto__ = null;
var cljs$core$async$state_machine__26364__auto____0 = (function (){
var statearr_27787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27787[(0)] = cljs$core$async$state_machine__26364__auto__);

(statearr_27787[(1)] = (1));

return statearr_27787;
});
var cljs$core$async$state_machine__26364__auto____1 = (function (state_27764){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_27764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e27788){if((e27788 instanceof Object)){
var ex__26367__auto__ = e27788;
var statearr_27789_27808 = state_27764;
(statearr_27789_27808[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27809 = state_27764;
state_27764 = G__27809;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$state_machine__26364__auto__ = function(state_27764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26364__auto____1.call(this,state_27764);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26364__auto____0;
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26364__auto____1;
return cljs$core$async$state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto___27792,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26455__auto__ = (function (){var statearr_27790 = f__26454__auto__.call(null);
(statearr_27790[(6)] = c__26453__auto___27792);

return statearr_27790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto___27792,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__27812 = arguments.length;
switch (G__27812) {
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
var c__26453__auto___27866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto___27866,out){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto___27866,out){
return (function (state_27844){
var state_val_27845 = (state_27844[(1)]);
if((state_val_27845 === (7))){
var inst_27823 = (state_27844[(7)]);
var inst_27824 = (state_27844[(8)]);
var inst_27823__$1 = (state_27844[(2)]);
var inst_27824__$1 = cljs.core.nth.call(null,inst_27823__$1,(0),null);
var inst_27825 = cljs.core.nth.call(null,inst_27823__$1,(1),null);
var inst_27826 = (inst_27824__$1 == null);
var state_27844__$1 = (function (){var statearr_27846 = state_27844;
(statearr_27846[(9)] = inst_27825);

(statearr_27846[(7)] = inst_27823__$1);

(statearr_27846[(8)] = inst_27824__$1);

return statearr_27846;
})();
if(cljs.core.truth_(inst_27826)){
var statearr_27847_27867 = state_27844__$1;
(statearr_27847_27867[(1)] = (8));

} else {
var statearr_27848_27868 = state_27844__$1;
(statearr_27848_27868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (1))){
var inst_27813 = cljs.core.vec.call(null,chs);
var inst_27814 = inst_27813;
var state_27844__$1 = (function (){var statearr_27849 = state_27844;
(statearr_27849[(10)] = inst_27814);

return statearr_27849;
})();
var statearr_27850_27869 = state_27844__$1;
(statearr_27850_27869[(2)] = null);

(statearr_27850_27869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (4))){
var inst_27814 = (state_27844[(10)]);
var state_27844__$1 = state_27844;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27844__$1,(7),inst_27814);
} else {
if((state_val_27845 === (6))){
var inst_27840 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
var statearr_27851_27870 = state_27844__$1;
(statearr_27851_27870[(2)] = inst_27840);

(statearr_27851_27870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (3))){
var inst_27842 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27844__$1,inst_27842);
} else {
if((state_val_27845 === (2))){
var inst_27814 = (state_27844[(10)]);
var inst_27816 = cljs.core.count.call(null,inst_27814);
var inst_27817 = (inst_27816 > (0));
var state_27844__$1 = state_27844;
if(cljs.core.truth_(inst_27817)){
var statearr_27853_27871 = state_27844__$1;
(statearr_27853_27871[(1)] = (4));

} else {
var statearr_27854_27872 = state_27844__$1;
(statearr_27854_27872[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (11))){
var inst_27814 = (state_27844[(10)]);
var inst_27833 = (state_27844[(2)]);
var tmp27852 = inst_27814;
var inst_27814__$1 = tmp27852;
var state_27844__$1 = (function (){var statearr_27855 = state_27844;
(statearr_27855[(11)] = inst_27833);

(statearr_27855[(10)] = inst_27814__$1);

return statearr_27855;
})();
var statearr_27856_27873 = state_27844__$1;
(statearr_27856_27873[(2)] = null);

(statearr_27856_27873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (9))){
var inst_27824 = (state_27844[(8)]);
var state_27844__$1 = state_27844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27844__$1,(11),out,inst_27824);
} else {
if((state_val_27845 === (5))){
var inst_27838 = cljs.core.async.close_BANG_.call(null,out);
var state_27844__$1 = state_27844;
var statearr_27857_27874 = state_27844__$1;
(statearr_27857_27874[(2)] = inst_27838);

(statearr_27857_27874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (10))){
var inst_27836 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
var statearr_27858_27875 = state_27844__$1;
(statearr_27858_27875[(2)] = inst_27836);

(statearr_27858_27875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (8))){
var inst_27825 = (state_27844[(9)]);
var inst_27823 = (state_27844[(7)]);
var inst_27824 = (state_27844[(8)]);
var inst_27814 = (state_27844[(10)]);
var inst_27828 = (function (){var cs = inst_27814;
var vec__27819 = inst_27823;
var v = inst_27824;
var c = inst_27825;
return ((function (cs,vec__27819,v,c,inst_27825,inst_27823,inst_27824,inst_27814,state_val_27845,c__26453__auto___27866,out){
return (function (p1__27810_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27810_SHARP_);
});
;})(cs,vec__27819,v,c,inst_27825,inst_27823,inst_27824,inst_27814,state_val_27845,c__26453__auto___27866,out))
})();
var inst_27829 = cljs.core.filterv.call(null,inst_27828,inst_27814);
var inst_27814__$1 = inst_27829;
var state_27844__$1 = (function (){var statearr_27859 = state_27844;
(statearr_27859[(10)] = inst_27814__$1);

return statearr_27859;
})();
var statearr_27860_27876 = state_27844__$1;
(statearr_27860_27876[(2)] = null);

(statearr_27860_27876[(1)] = (2));


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
});})(c__26453__auto___27866,out))
;
return ((function (switch__26363__auto__,c__26453__auto___27866,out){
return (function() {
var cljs$core$async$state_machine__26364__auto__ = null;
var cljs$core$async$state_machine__26364__auto____0 = (function (){
var statearr_27861 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27861[(0)] = cljs$core$async$state_machine__26364__auto__);

(statearr_27861[(1)] = (1));

return statearr_27861;
});
var cljs$core$async$state_machine__26364__auto____1 = (function (state_27844){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_27844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e27862){if((e27862 instanceof Object)){
var ex__26367__auto__ = e27862;
var statearr_27863_27877 = state_27844;
(statearr_27863_27877[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27878 = state_27844;
state_27844 = G__27878;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$state_machine__26364__auto__ = function(state_27844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26364__auto____1.call(this,state_27844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26364__auto____0;
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26364__auto____1;
return cljs$core$async$state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto___27866,out))
})();
var state__26455__auto__ = (function (){var statearr_27864 = f__26454__auto__.call(null);
(statearr_27864[(6)] = c__26453__auto___27866);

return statearr_27864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto___27866,out))
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
var G__27880 = arguments.length;
switch (G__27880) {
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
var c__26453__auto___27925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto___27925,out){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto___27925,out){
return (function (state_27904){
var state_val_27905 = (state_27904[(1)]);
if((state_val_27905 === (7))){
var inst_27886 = (state_27904[(7)]);
var inst_27886__$1 = (state_27904[(2)]);
var inst_27887 = (inst_27886__$1 == null);
var inst_27888 = cljs.core.not.call(null,inst_27887);
var state_27904__$1 = (function (){var statearr_27906 = state_27904;
(statearr_27906[(7)] = inst_27886__$1);

return statearr_27906;
})();
if(inst_27888){
var statearr_27907_27926 = state_27904__$1;
(statearr_27907_27926[(1)] = (8));

} else {
var statearr_27908_27927 = state_27904__$1;
(statearr_27908_27927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (1))){
var inst_27881 = (0);
var state_27904__$1 = (function (){var statearr_27909 = state_27904;
(statearr_27909[(8)] = inst_27881);

return statearr_27909;
})();
var statearr_27910_27928 = state_27904__$1;
(statearr_27910_27928[(2)] = null);

(statearr_27910_27928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (4))){
var state_27904__$1 = state_27904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27904__$1,(7),ch);
} else {
if((state_val_27905 === (6))){
var inst_27899 = (state_27904[(2)]);
var state_27904__$1 = state_27904;
var statearr_27911_27929 = state_27904__$1;
(statearr_27911_27929[(2)] = inst_27899);

(statearr_27911_27929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (3))){
var inst_27901 = (state_27904[(2)]);
var inst_27902 = cljs.core.async.close_BANG_.call(null,out);
var state_27904__$1 = (function (){var statearr_27912 = state_27904;
(statearr_27912[(9)] = inst_27901);

return statearr_27912;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27904__$1,inst_27902);
} else {
if((state_val_27905 === (2))){
var inst_27881 = (state_27904[(8)]);
var inst_27883 = (inst_27881 < n);
var state_27904__$1 = state_27904;
if(cljs.core.truth_(inst_27883)){
var statearr_27913_27930 = state_27904__$1;
(statearr_27913_27930[(1)] = (4));

} else {
var statearr_27914_27931 = state_27904__$1;
(statearr_27914_27931[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (11))){
var inst_27881 = (state_27904[(8)]);
var inst_27891 = (state_27904[(2)]);
var inst_27892 = (inst_27881 + (1));
var inst_27881__$1 = inst_27892;
var state_27904__$1 = (function (){var statearr_27915 = state_27904;
(statearr_27915[(8)] = inst_27881__$1);

(statearr_27915[(10)] = inst_27891);

return statearr_27915;
})();
var statearr_27916_27932 = state_27904__$1;
(statearr_27916_27932[(2)] = null);

(statearr_27916_27932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (9))){
var state_27904__$1 = state_27904;
var statearr_27917_27933 = state_27904__$1;
(statearr_27917_27933[(2)] = null);

(statearr_27917_27933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (5))){
var state_27904__$1 = state_27904;
var statearr_27918_27934 = state_27904__$1;
(statearr_27918_27934[(2)] = null);

(statearr_27918_27934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (10))){
var inst_27896 = (state_27904[(2)]);
var state_27904__$1 = state_27904;
var statearr_27919_27935 = state_27904__$1;
(statearr_27919_27935[(2)] = inst_27896);

(statearr_27919_27935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (8))){
var inst_27886 = (state_27904[(7)]);
var state_27904__$1 = state_27904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27904__$1,(11),out,inst_27886);
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
});})(c__26453__auto___27925,out))
;
return ((function (switch__26363__auto__,c__26453__auto___27925,out){
return (function() {
var cljs$core$async$state_machine__26364__auto__ = null;
var cljs$core$async$state_machine__26364__auto____0 = (function (){
var statearr_27920 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27920[(0)] = cljs$core$async$state_machine__26364__auto__);

(statearr_27920[(1)] = (1));

return statearr_27920;
});
var cljs$core$async$state_machine__26364__auto____1 = (function (state_27904){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_27904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e27921){if((e27921 instanceof Object)){
var ex__26367__auto__ = e27921;
var statearr_27922_27936 = state_27904;
(statearr_27922_27936[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27937 = state_27904;
state_27904 = G__27937;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$state_machine__26364__auto__ = function(state_27904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26364__auto____1.call(this,state_27904);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26364__auto____0;
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26364__auto____1;
return cljs$core$async$state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto___27925,out))
})();
var state__26455__auto__ = (function (){var statearr_27923 = f__26454__auto__.call(null);
(statearr_27923[(6)] = c__26453__auto___27925);

return statearr_27923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto___27925,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27939 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27939 = (function (f,ch,meta27940){
this.f = f;
this.ch = ch;
this.meta27940 = meta27940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27941,meta27940__$1){
var self__ = this;
var _27941__$1 = this;
return (new cljs.core.async.t_cljs$core$async27939(self__.f,self__.ch,meta27940__$1));
});

cljs.core.async.t_cljs$core$async27939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27941){
var self__ = this;
var _27941__$1 = this;
return self__.meta27940;
});

cljs.core.async.t_cljs$core$async27939.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27939.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27939.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27942 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27942 = (function (f,ch,meta27940,_,fn1,meta27943){
this.f = f;
this.ch = ch;
this.meta27940 = meta27940;
this._ = _;
this.fn1 = fn1;
this.meta27943 = meta27943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27944,meta27943__$1){
var self__ = this;
var _27944__$1 = this;
return (new cljs.core.async.t_cljs$core$async27942(self__.f,self__.ch,self__.meta27940,self__._,self__.fn1,meta27943__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27944){
var self__ = this;
var _27944__$1 = this;
return self__.meta27943;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27942.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27942.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27938_SHARP_){
return f1.call(null,(((p1__27938_SHARP_ == null))?null:self__.f.call(null,p1__27938_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27942.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27940","meta27940",294795052,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27939","cljs.core.async/t_cljs$core$async27939",-746477550,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27943","meta27943",1826409762,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27942.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27942";

cljs.core.async.t_cljs$core$async27942.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27942");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27942.
 */
cljs.core.async.__GT_t_cljs$core$async27942 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27942(f__$1,ch__$1,meta27940__$1,___$2,fn1__$1,meta27943){
return (new cljs.core.async.t_cljs$core$async27942(f__$1,ch__$1,meta27940__$1,___$2,fn1__$1,meta27943));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27942(self__.f,self__.ch,self__.meta27940,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27939.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27940","meta27940",294795052,null)], null);
});

cljs.core.async.t_cljs$core$async27939.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27939";

cljs.core.async.t_cljs$core$async27939.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27939");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27939.
 */
cljs.core.async.__GT_t_cljs$core$async27939 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27939(f__$1,ch__$1,meta27940){
return (new cljs.core.async.t_cljs$core$async27939(f__$1,ch__$1,meta27940));
});

}

return (new cljs.core.async.t_cljs$core$async27939(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27945 = (function (f,ch,meta27946){
this.f = f;
this.ch = ch;
this.meta27946 = meta27946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27947,meta27946__$1){
var self__ = this;
var _27947__$1 = this;
return (new cljs.core.async.t_cljs$core$async27945(self__.f,self__.ch,meta27946__$1));
});

cljs.core.async.t_cljs$core$async27945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27947){
var self__ = this;
var _27947__$1 = this;
return self__.meta27946;
});

cljs.core.async.t_cljs$core$async27945.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27945.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27945.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27945.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27945.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27945.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27946","meta27946",-1413066417,null)], null);
});

cljs.core.async.t_cljs$core$async27945.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27945";

cljs.core.async.t_cljs$core$async27945.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27945");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27945.
 */
cljs.core.async.__GT_t_cljs$core$async27945 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27945(f__$1,ch__$1,meta27946){
return (new cljs.core.async.t_cljs$core$async27945(f__$1,ch__$1,meta27946));
});

}

return (new cljs.core.async.t_cljs$core$async27945(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27948 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27948 = (function (p,ch,meta27949){
this.p = p;
this.ch = ch;
this.meta27949 = meta27949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27950,meta27949__$1){
var self__ = this;
var _27950__$1 = this;
return (new cljs.core.async.t_cljs$core$async27948(self__.p,self__.ch,meta27949__$1));
});

cljs.core.async.t_cljs$core$async27948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27950){
var self__ = this;
var _27950__$1 = this;
return self__.meta27949;
});

cljs.core.async.t_cljs$core$async27948.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27948.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27948.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27948.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27948.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27948.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27948.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27949","meta27949",-103753118,null)], null);
});

cljs.core.async.t_cljs$core$async27948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27948";

cljs.core.async.t_cljs$core$async27948.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27948");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27948.
 */
cljs.core.async.__GT_t_cljs$core$async27948 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27948(p__$1,ch__$1,meta27949){
return (new cljs.core.async.t_cljs$core$async27948(p__$1,ch__$1,meta27949));
});

}

return (new cljs.core.async.t_cljs$core$async27948(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27952 = arguments.length;
switch (G__27952) {
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
var c__26453__auto___27992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto___27992,out){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto___27992,out){
return (function (state_27973){
var state_val_27974 = (state_27973[(1)]);
if((state_val_27974 === (7))){
var inst_27969 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
var statearr_27975_27993 = state_27973__$1;
(statearr_27975_27993[(2)] = inst_27969);

(statearr_27975_27993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (1))){
var state_27973__$1 = state_27973;
var statearr_27976_27994 = state_27973__$1;
(statearr_27976_27994[(2)] = null);

(statearr_27976_27994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (4))){
var inst_27955 = (state_27973[(7)]);
var inst_27955__$1 = (state_27973[(2)]);
var inst_27956 = (inst_27955__$1 == null);
var state_27973__$1 = (function (){var statearr_27977 = state_27973;
(statearr_27977[(7)] = inst_27955__$1);

return statearr_27977;
})();
if(cljs.core.truth_(inst_27956)){
var statearr_27978_27995 = state_27973__$1;
(statearr_27978_27995[(1)] = (5));

} else {
var statearr_27979_27996 = state_27973__$1;
(statearr_27979_27996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (6))){
var inst_27955 = (state_27973[(7)]);
var inst_27960 = p.call(null,inst_27955);
var state_27973__$1 = state_27973;
if(cljs.core.truth_(inst_27960)){
var statearr_27980_27997 = state_27973__$1;
(statearr_27980_27997[(1)] = (8));

} else {
var statearr_27981_27998 = state_27973__$1;
(statearr_27981_27998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (3))){
var inst_27971 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27973__$1,inst_27971);
} else {
if((state_val_27974 === (2))){
var state_27973__$1 = state_27973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27973__$1,(4),ch);
} else {
if((state_val_27974 === (11))){
var inst_27963 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
var statearr_27982_27999 = state_27973__$1;
(statearr_27982_27999[(2)] = inst_27963);

(statearr_27982_27999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (9))){
var state_27973__$1 = state_27973;
var statearr_27983_28000 = state_27973__$1;
(statearr_27983_28000[(2)] = null);

(statearr_27983_28000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (5))){
var inst_27958 = cljs.core.async.close_BANG_.call(null,out);
var state_27973__$1 = state_27973;
var statearr_27984_28001 = state_27973__$1;
(statearr_27984_28001[(2)] = inst_27958);

(statearr_27984_28001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (10))){
var inst_27966 = (state_27973[(2)]);
var state_27973__$1 = (function (){var statearr_27985 = state_27973;
(statearr_27985[(8)] = inst_27966);

return statearr_27985;
})();
var statearr_27986_28002 = state_27973__$1;
(statearr_27986_28002[(2)] = null);

(statearr_27986_28002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (8))){
var inst_27955 = (state_27973[(7)]);
var state_27973__$1 = state_27973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27973__$1,(11),out,inst_27955);
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
});})(c__26453__auto___27992,out))
;
return ((function (switch__26363__auto__,c__26453__auto___27992,out){
return (function() {
var cljs$core$async$state_machine__26364__auto__ = null;
var cljs$core$async$state_machine__26364__auto____0 = (function (){
var statearr_27987 = [null,null,null,null,null,null,null,null,null];
(statearr_27987[(0)] = cljs$core$async$state_machine__26364__auto__);

(statearr_27987[(1)] = (1));

return statearr_27987;
});
var cljs$core$async$state_machine__26364__auto____1 = (function (state_27973){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_27973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e27988){if((e27988 instanceof Object)){
var ex__26367__auto__ = e27988;
var statearr_27989_28003 = state_27973;
(statearr_27989_28003[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28004 = state_27973;
state_27973 = G__28004;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$state_machine__26364__auto__ = function(state_27973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26364__auto____1.call(this,state_27973);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26364__auto____0;
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26364__auto____1;
return cljs$core$async$state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto___27992,out))
})();
var state__26455__auto__ = (function (){var statearr_27990 = f__26454__auto__.call(null);
(statearr_27990[(6)] = c__26453__auto___27992);

return statearr_27990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto___27992,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28006 = arguments.length;
switch (G__28006) {
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
var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto__){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto__){
return (function (state_28069){
var state_val_28070 = (state_28069[(1)]);
if((state_val_28070 === (7))){
var inst_28065 = (state_28069[(2)]);
var state_28069__$1 = state_28069;
var statearr_28071_28109 = state_28069__$1;
(statearr_28071_28109[(2)] = inst_28065);

(statearr_28071_28109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (20))){
var inst_28035 = (state_28069[(7)]);
var inst_28046 = (state_28069[(2)]);
var inst_28047 = cljs.core.next.call(null,inst_28035);
var inst_28021 = inst_28047;
var inst_28022 = null;
var inst_28023 = (0);
var inst_28024 = (0);
var state_28069__$1 = (function (){var statearr_28072 = state_28069;
(statearr_28072[(8)] = inst_28024);

(statearr_28072[(9)] = inst_28022);

(statearr_28072[(10)] = inst_28023);

(statearr_28072[(11)] = inst_28021);

(statearr_28072[(12)] = inst_28046);

return statearr_28072;
})();
var statearr_28073_28110 = state_28069__$1;
(statearr_28073_28110[(2)] = null);

(statearr_28073_28110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (1))){
var state_28069__$1 = state_28069;
var statearr_28074_28111 = state_28069__$1;
(statearr_28074_28111[(2)] = null);

(statearr_28074_28111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (4))){
var inst_28010 = (state_28069[(13)]);
var inst_28010__$1 = (state_28069[(2)]);
var inst_28011 = (inst_28010__$1 == null);
var state_28069__$1 = (function (){var statearr_28075 = state_28069;
(statearr_28075[(13)] = inst_28010__$1);

return statearr_28075;
})();
if(cljs.core.truth_(inst_28011)){
var statearr_28076_28112 = state_28069__$1;
(statearr_28076_28112[(1)] = (5));

} else {
var statearr_28077_28113 = state_28069__$1;
(statearr_28077_28113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (15))){
var state_28069__$1 = state_28069;
var statearr_28081_28114 = state_28069__$1;
(statearr_28081_28114[(2)] = null);

(statearr_28081_28114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (21))){
var state_28069__$1 = state_28069;
var statearr_28082_28115 = state_28069__$1;
(statearr_28082_28115[(2)] = null);

(statearr_28082_28115[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (13))){
var inst_28024 = (state_28069[(8)]);
var inst_28022 = (state_28069[(9)]);
var inst_28023 = (state_28069[(10)]);
var inst_28021 = (state_28069[(11)]);
var inst_28031 = (state_28069[(2)]);
var inst_28032 = (inst_28024 + (1));
var tmp28078 = inst_28022;
var tmp28079 = inst_28023;
var tmp28080 = inst_28021;
var inst_28021__$1 = tmp28080;
var inst_28022__$1 = tmp28078;
var inst_28023__$1 = tmp28079;
var inst_28024__$1 = inst_28032;
var state_28069__$1 = (function (){var statearr_28083 = state_28069;
(statearr_28083[(8)] = inst_28024__$1);

(statearr_28083[(9)] = inst_28022__$1);

(statearr_28083[(10)] = inst_28023__$1);

(statearr_28083[(11)] = inst_28021__$1);

(statearr_28083[(14)] = inst_28031);

return statearr_28083;
})();
var statearr_28084_28116 = state_28069__$1;
(statearr_28084_28116[(2)] = null);

(statearr_28084_28116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (22))){
var state_28069__$1 = state_28069;
var statearr_28085_28117 = state_28069__$1;
(statearr_28085_28117[(2)] = null);

(statearr_28085_28117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (6))){
var inst_28010 = (state_28069[(13)]);
var inst_28019 = f.call(null,inst_28010);
var inst_28020 = cljs.core.seq.call(null,inst_28019);
var inst_28021 = inst_28020;
var inst_28022 = null;
var inst_28023 = (0);
var inst_28024 = (0);
var state_28069__$1 = (function (){var statearr_28086 = state_28069;
(statearr_28086[(8)] = inst_28024);

(statearr_28086[(9)] = inst_28022);

(statearr_28086[(10)] = inst_28023);

(statearr_28086[(11)] = inst_28021);

return statearr_28086;
})();
var statearr_28087_28118 = state_28069__$1;
(statearr_28087_28118[(2)] = null);

(statearr_28087_28118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (17))){
var inst_28035 = (state_28069[(7)]);
var inst_28039 = cljs.core.chunk_first.call(null,inst_28035);
var inst_28040 = cljs.core.chunk_rest.call(null,inst_28035);
var inst_28041 = cljs.core.count.call(null,inst_28039);
var inst_28021 = inst_28040;
var inst_28022 = inst_28039;
var inst_28023 = inst_28041;
var inst_28024 = (0);
var state_28069__$1 = (function (){var statearr_28088 = state_28069;
(statearr_28088[(8)] = inst_28024);

(statearr_28088[(9)] = inst_28022);

(statearr_28088[(10)] = inst_28023);

(statearr_28088[(11)] = inst_28021);

return statearr_28088;
})();
var statearr_28089_28119 = state_28069__$1;
(statearr_28089_28119[(2)] = null);

(statearr_28089_28119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (3))){
var inst_28067 = (state_28069[(2)]);
var state_28069__$1 = state_28069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28069__$1,inst_28067);
} else {
if((state_val_28070 === (12))){
var inst_28055 = (state_28069[(2)]);
var state_28069__$1 = state_28069;
var statearr_28090_28120 = state_28069__$1;
(statearr_28090_28120[(2)] = inst_28055);

(statearr_28090_28120[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (2))){
var state_28069__$1 = state_28069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28069__$1,(4),in$);
} else {
if((state_val_28070 === (23))){
var inst_28063 = (state_28069[(2)]);
var state_28069__$1 = state_28069;
var statearr_28091_28121 = state_28069__$1;
(statearr_28091_28121[(2)] = inst_28063);

(statearr_28091_28121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (19))){
var inst_28050 = (state_28069[(2)]);
var state_28069__$1 = state_28069;
var statearr_28092_28122 = state_28069__$1;
(statearr_28092_28122[(2)] = inst_28050);

(statearr_28092_28122[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (11))){
var inst_28021 = (state_28069[(11)]);
var inst_28035 = (state_28069[(7)]);
var inst_28035__$1 = cljs.core.seq.call(null,inst_28021);
var state_28069__$1 = (function (){var statearr_28093 = state_28069;
(statearr_28093[(7)] = inst_28035__$1);

return statearr_28093;
})();
if(inst_28035__$1){
var statearr_28094_28123 = state_28069__$1;
(statearr_28094_28123[(1)] = (14));

} else {
var statearr_28095_28124 = state_28069__$1;
(statearr_28095_28124[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (9))){
var inst_28057 = (state_28069[(2)]);
var inst_28058 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28069__$1 = (function (){var statearr_28096 = state_28069;
(statearr_28096[(15)] = inst_28057);

return statearr_28096;
})();
if(cljs.core.truth_(inst_28058)){
var statearr_28097_28125 = state_28069__$1;
(statearr_28097_28125[(1)] = (21));

} else {
var statearr_28098_28126 = state_28069__$1;
(statearr_28098_28126[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (5))){
var inst_28013 = cljs.core.async.close_BANG_.call(null,out);
var state_28069__$1 = state_28069;
var statearr_28099_28127 = state_28069__$1;
(statearr_28099_28127[(2)] = inst_28013);

(statearr_28099_28127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (14))){
var inst_28035 = (state_28069[(7)]);
var inst_28037 = cljs.core.chunked_seq_QMARK_.call(null,inst_28035);
var state_28069__$1 = state_28069;
if(inst_28037){
var statearr_28100_28128 = state_28069__$1;
(statearr_28100_28128[(1)] = (17));

} else {
var statearr_28101_28129 = state_28069__$1;
(statearr_28101_28129[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (16))){
var inst_28053 = (state_28069[(2)]);
var state_28069__$1 = state_28069;
var statearr_28102_28130 = state_28069__$1;
(statearr_28102_28130[(2)] = inst_28053);

(statearr_28102_28130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (10))){
var inst_28024 = (state_28069[(8)]);
var inst_28022 = (state_28069[(9)]);
var inst_28029 = cljs.core._nth.call(null,inst_28022,inst_28024);
var state_28069__$1 = state_28069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28069__$1,(13),out,inst_28029);
} else {
if((state_val_28070 === (18))){
var inst_28035 = (state_28069[(7)]);
var inst_28044 = cljs.core.first.call(null,inst_28035);
var state_28069__$1 = state_28069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28069__$1,(20),out,inst_28044);
} else {
if((state_val_28070 === (8))){
var inst_28024 = (state_28069[(8)]);
var inst_28023 = (state_28069[(10)]);
var inst_28026 = (inst_28024 < inst_28023);
var inst_28027 = inst_28026;
var state_28069__$1 = state_28069;
if(cljs.core.truth_(inst_28027)){
var statearr_28103_28131 = state_28069__$1;
(statearr_28103_28131[(1)] = (10));

} else {
var statearr_28104_28132 = state_28069__$1;
(statearr_28104_28132[(1)] = (11));

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
});})(c__26453__auto__))
;
return ((function (switch__26363__auto__,c__26453__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26364__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26364__auto____0 = (function (){
var statearr_28105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28105[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26364__auto__);

(statearr_28105[(1)] = (1));

return statearr_28105;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26364__auto____1 = (function (state_28069){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_28069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e28106){if((e28106 instanceof Object)){
var ex__26367__auto__ = e28106;
var statearr_28107_28133 = state_28069;
(statearr_28107_28133[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28134 = state_28069;
state_28069 = G__28134;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26364__auto__ = function(state_28069){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26364__auto____1.call(this,state_28069);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26364__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26364__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto__))
})();
var state__26455__auto__ = (function (){var statearr_28108 = f__26454__auto__.call(null);
(statearr_28108[(6)] = c__26453__auto__);

return statearr_28108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto__))
);

return c__26453__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28136 = arguments.length;
switch (G__28136) {
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
var G__28139 = arguments.length;
switch (G__28139) {
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
var G__28142 = arguments.length;
switch (G__28142) {
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
var c__26453__auto___28189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto___28189,out){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto___28189,out){
return (function (state_28166){
var state_val_28167 = (state_28166[(1)]);
if((state_val_28167 === (7))){
var inst_28161 = (state_28166[(2)]);
var state_28166__$1 = state_28166;
var statearr_28168_28190 = state_28166__$1;
(statearr_28168_28190[(2)] = inst_28161);

(statearr_28168_28190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (1))){
var inst_28143 = null;
var state_28166__$1 = (function (){var statearr_28169 = state_28166;
(statearr_28169[(7)] = inst_28143);

return statearr_28169;
})();
var statearr_28170_28191 = state_28166__$1;
(statearr_28170_28191[(2)] = null);

(statearr_28170_28191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (4))){
var inst_28146 = (state_28166[(8)]);
var inst_28146__$1 = (state_28166[(2)]);
var inst_28147 = (inst_28146__$1 == null);
var inst_28148 = cljs.core.not.call(null,inst_28147);
var state_28166__$1 = (function (){var statearr_28171 = state_28166;
(statearr_28171[(8)] = inst_28146__$1);

return statearr_28171;
})();
if(inst_28148){
var statearr_28172_28192 = state_28166__$1;
(statearr_28172_28192[(1)] = (5));

} else {
var statearr_28173_28193 = state_28166__$1;
(statearr_28173_28193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (6))){
var state_28166__$1 = state_28166;
var statearr_28174_28194 = state_28166__$1;
(statearr_28174_28194[(2)] = null);

(statearr_28174_28194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (3))){
var inst_28163 = (state_28166[(2)]);
var inst_28164 = cljs.core.async.close_BANG_.call(null,out);
var state_28166__$1 = (function (){var statearr_28175 = state_28166;
(statearr_28175[(9)] = inst_28163);

return statearr_28175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28166__$1,inst_28164);
} else {
if((state_val_28167 === (2))){
var state_28166__$1 = state_28166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28166__$1,(4),ch);
} else {
if((state_val_28167 === (11))){
var inst_28146 = (state_28166[(8)]);
var inst_28155 = (state_28166[(2)]);
var inst_28143 = inst_28146;
var state_28166__$1 = (function (){var statearr_28176 = state_28166;
(statearr_28176[(7)] = inst_28143);

(statearr_28176[(10)] = inst_28155);

return statearr_28176;
})();
var statearr_28177_28195 = state_28166__$1;
(statearr_28177_28195[(2)] = null);

(statearr_28177_28195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (9))){
var inst_28146 = (state_28166[(8)]);
var state_28166__$1 = state_28166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28166__$1,(11),out,inst_28146);
} else {
if((state_val_28167 === (5))){
var inst_28143 = (state_28166[(7)]);
var inst_28146 = (state_28166[(8)]);
var inst_28150 = cljs.core._EQ_.call(null,inst_28146,inst_28143);
var state_28166__$1 = state_28166;
if(inst_28150){
var statearr_28179_28196 = state_28166__$1;
(statearr_28179_28196[(1)] = (8));

} else {
var statearr_28180_28197 = state_28166__$1;
(statearr_28180_28197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (10))){
var inst_28158 = (state_28166[(2)]);
var state_28166__$1 = state_28166;
var statearr_28181_28198 = state_28166__$1;
(statearr_28181_28198[(2)] = inst_28158);

(statearr_28181_28198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (8))){
var inst_28143 = (state_28166[(7)]);
var tmp28178 = inst_28143;
var inst_28143__$1 = tmp28178;
var state_28166__$1 = (function (){var statearr_28182 = state_28166;
(statearr_28182[(7)] = inst_28143__$1);

return statearr_28182;
})();
var statearr_28183_28199 = state_28166__$1;
(statearr_28183_28199[(2)] = null);

(statearr_28183_28199[(1)] = (2));


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
});})(c__26453__auto___28189,out))
;
return ((function (switch__26363__auto__,c__26453__auto___28189,out){
return (function() {
var cljs$core$async$state_machine__26364__auto__ = null;
var cljs$core$async$state_machine__26364__auto____0 = (function (){
var statearr_28184 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28184[(0)] = cljs$core$async$state_machine__26364__auto__);

(statearr_28184[(1)] = (1));

return statearr_28184;
});
var cljs$core$async$state_machine__26364__auto____1 = (function (state_28166){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_28166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e28185){if((e28185 instanceof Object)){
var ex__26367__auto__ = e28185;
var statearr_28186_28200 = state_28166;
(statearr_28186_28200[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28201 = state_28166;
state_28166 = G__28201;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$state_machine__26364__auto__ = function(state_28166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26364__auto____1.call(this,state_28166);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26364__auto____0;
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26364__auto____1;
return cljs$core$async$state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto___28189,out))
})();
var state__26455__auto__ = (function (){var statearr_28187 = f__26454__auto__.call(null);
(statearr_28187[(6)] = c__26453__auto___28189);

return statearr_28187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto___28189,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28203 = arguments.length;
switch (G__28203) {
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
var c__26453__auto___28269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto___28269,out){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto___28269,out){
return (function (state_28241){
var state_val_28242 = (state_28241[(1)]);
if((state_val_28242 === (7))){
var inst_28237 = (state_28241[(2)]);
var state_28241__$1 = state_28241;
var statearr_28243_28270 = state_28241__$1;
(statearr_28243_28270[(2)] = inst_28237);

(statearr_28243_28270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (1))){
var inst_28204 = (new Array(n));
var inst_28205 = inst_28204;
var inst_28206 = (0);
var state_28241__$1 = (function (){var statearr_28244 = state_28241;
(statearr_28244[(7)] = inst_28206);

(statearr_28244[(8)] = inst_28205);

return statearr_28244;
})();
var statearr_28245_28271 = state_28241__$1;
(statearr_28245_28271[(2)] = null);

(statearr_28245_28271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (4))){
var inst_28209 = (state_28241[(9)]);
var inst_28209__$1 = (state_28241[(2)]);
var inst_28210 = (inst_28209__$1 == null);
var inst_28211 = cljs.core.not.call(null,inst_28210);
var state_28241__$1 = (function (){var statearr_28246 = state_28241;
(statearr_28246[(9)] = inst_28209__$1);

return statearr_28246;
})();
if(inst_28211){
var statearr_28247_28272 = state_28241__$1;
(statearr_28247_28272[(1)] = (5));

} else {
var statearr_28248_28273 = state_28241__$1;
(statearr_28248_28273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (15))){
var inst_28231 = (state_28241[(2)]);
var state_28241__$1 = state_28241;
var statearr_28249_28274 = state_28241__$1;
(statearr_28249_28274[(2)] = inst_28231);

(statearr_28249_28274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (13))){
var state_28241__$1 = state_28241;
var statearr_28250_28275 = state_28241__$1;
(statearr_28250_28275[(2)] = null);

(statearr_28250_28275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (6))){
var inst_28206 = (state_28241[(7)]);
var inst_28227 = (inst_28206 > (0));
var state_28241__$1 = state_28241;
if(cljs.core.truth_(inst_28227)){
var statearr_28251_28276 = state_28241__$1;
(statearr_28251_28276[(1)] = (12));

} else {
var statearr_28252_28277 = state_28241__$1;
(statearr_28252_28277[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (3))){
var inst_28239 = (state_28241[(2)]);
var state_28241__$1 = state_28241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28241__$1,inst_28239);
} else {
if((state_val_28242 === (12))){
var inst_28205 = (state_28241[(8)]);
var inst_28229 = cljs.core.vec.call(null,inst_28205);
var state_28241__$1 = state_28241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28241__$1,(15),out,inst_28229);
} else {
if((state_val_28242 === (2))){
var state_28241__$1 = state_28241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28241__$1,(4),ch);
} else {
if((state_val_28242 === (11))){
var inst_28221 = (state_28241[(2)]);
var inst_28222 = (new Array(n));
var inst_28205 = inst_28222;
var inst_28206 = (0);
var state_28241__$1 = (function (){var statearr_28253 = state_28241;
(statearr_28253[(7)] = inst_28206);

(statearr_28253[(8)] = inst_28205);

(statearr_28253[(10)] = inst_28221);

return statearr_28253;
})();
var statearr_28254_28278 = state_28241__$1;
(statearr_28254_28278[(2)] = null);

(statearr_28254_28278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (9))){
var inst_28205 = (state_28241[(8)]);
var inst_28219 = cljs.core.vec.call(null,inst_28205);
var state_28241__$1 = state_28241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28241__$1,(11),out,inst_28219);
} else {
if((state_val_28242 === (5))){
var inst_28206 = (state_28241[(7)]);
var inst_28214 = (state_28241[(11)]);
var inst_28209 = (state_28241[(9)]);
var inst_28205 = (state_28241[(8)]);
var inst_28213 = (inst_28205[inst_28206] = inst_28209);
var inst_28214__$1 = (inst_28206 + (1));
var inst_28215 = (inst_28214__$1 < n);
var state_28241__$1 = (function (){var statearr_28255 = state_28241;
(statearr_28255[(12)] = inst_28213);

(statearr_28255[(11)] = inst_28214__$1);

return statearr_28255;
})();
if(cljs.core.truth_(inst_28215)){
var statearr_28256_28279 = state_28241__$1;
(statearr_28256_28279[(1)] = (8));

} else {
var statearr_28257_28280 = state_28241__$1;
(statearr_28257_28280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (14))){
var inst_28234 = (state_28241[(2)]);
var inst_28235 = cljs.core.async.close_BANG_.call(null,out);
var state_28241__$1 = (function (){var statearr_28259 = state_28241;
(statearr_28259[(13)] = inst_28234);

return statearr_28259;
})();
var statearr_28260_28281 = state_28241__$1;
(statearr_28260_28281[(2)] = inst_28235);

(statearr_28260_28281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (10))){
var inst_28225 = (state_28241[(2)]);
var state_28241__$1 = state_28241;
var statearr_28261_28282 = state_28241__$1;
(statearr_28261_28282[(2)] = inst_28225);

(statearr_28261_28282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28242 === (8))){
var inst_28214 = (state_28241[(11)]);
var inst_28205 = (state_28241[(8)]);
var tmp28258 = inst_28205;
var inst_28205__$1 = tmp28258;
var inst_28206 = inst_28214;
var state_28241__$1 = (function (){var statearr_28262 = state_28241;
(statearr_28262[(7)] = inst_28206);

(statearr_28262[(8)] = inst_28205__$1);

return statearr_28262;
})();
var statearr_28263_28283 = state_28241__$1;
(statearr_28263_28283[(2)] = null);

(statearr_28263_28283[(1)] = (2));


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
});})(c__26453__auto___28269,out))
;
return ((function (switch__26363__auto__,c__26453__auto___28269,out){
return (function() {
var cljs$core$async$state_machine__26364__auto__ = null;
var cljs$core$async$state_machine__26364__auto____0 = (function (){
var statearr_28264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28264[(0)] = cljs$core$async$state_machine__26364__auto__);

(statearr_28264[(1)] = (1));

return statearr_28264;
});
var cljs$core$async$state_machine__26364__auto____1 = (function (state_28241){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_28241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e28265){if((e28265 instanceof Object)){
var ex__26367__auto__ = e28265;
var statearr_28266_28284 = state_28241;
(statearr_28266_28284[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28285 = state_28241;
state_28241 = G__28285;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$state_machine__26364__auto__ = function(state_28241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26364__auto____1.call(this,state_28241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26364__auto____0;
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26364__auto____1;
return cljs$core$async$state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto___28269,out))
})();
var state__26455__auto__ = (function (){var statearr_28267 = f__26454__auto__.call(null);
(statearr_28267[(6)] = c__26453__auto___28269);

return statearr_28267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto___28269,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28287 = arguments.length;
switch (G__28287) {
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
var c__26453__auto___28357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto___28357,out){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto___28357,out){
return (function (state_28329){
var state_val_28330 = (state_28329[(1)]);
if((state_val_28330 === (7))){
var inst_28325 = (state_28329[(2)]);
var state_28329__$1 = state_28329;
var statearr_28331_28358 = state_28329__$1;
(statearr_28331_28358[(2)] = inst_28325);

(statearr_28331_28358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28330 === (1))){
var inst_28288 = [];
var inst_28289 = inst_28288;
var inst_28290 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28329__$1 = (function (){var statearr_28332 = state_28329;
(statearr_28332[(7)] = inst_28289);

(statearr_28332[(8)] = inst_28290);

return statearr_28332;
})();
var statearr_28333_28359 = state_28329__$1;
(statearr_28333_28359[(2)] = null);

(statearr_28333_28359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28330 === (4))){
var inst_28293 = (state_28329[(9)]);
var inst_28293__$1 = (state_28329[(2)]);
var inst_28294 = (inst_28293__$1 == null);
var inst_28295 = cljs.core.not.call(null,inst_28294);
var state_28329__$1 = (function (){var statearr_28334 = state_28329;
(statearr_28334[(9)] = inst_28293__$1);

return statearr_28334;
})();
if(inst_28295){
var statearr_28335_28360 = state_28329__$1;
(statearr_28335_28360[(1)] = (5));

} else {
var statearr_28336_28361 = state_28329__$1;
(statearr_28336_28361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28330 === (15))){
var inst_28319 = (state_28329[(2)]);
var state_28329__$1 = state_28329;
var statearr_28337_28362 = state_28329__$1;
(statearr_28337_28362[(2)] = inst_28319);

(statearr_28337_28362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28330 === (13))){
var state_28329__$1 = state_28329;
var statearr_28338_28363 = state_28329__$1;
(statearr_28338_28363[(2)] = null);

(statearr_28338_28363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28330 === (6))){
var inst_28289 = (state_28329[(7)]);
var inst_28314 = inst_28289.length;
var inst_28315 = (inst_28314 > (0));
var state_28329__$1 = state_28329;
if(cljs.core.truth_(inst_28315)){
var statearr_28339_28364 = state_28329__$1;
(statearr_28339_28364[(1)] = (12));

} else {
var statearr_28340_28365 = state_28329__$1;
(statearr_28340_28365[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28330 === (3))){
var inst_28327 = (state_28329[(2)]);
var state_28329__$1 = state_28329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28329__$1,inst_28327);
} else {
if((state_val_28330 === (12))){
var inst_28289 = (state_28329[(7)]);
var inst_28317 = cljs.core.vec.call(null,inst_28289);
var state_28329__$1 = state_28329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28329__$1,(15),out,inst_28317);
} else {
if((state_val_28330 === (2))){
var state_28329__$1 = state_28329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28329__$1,(4),ch);
} else {
if((state_val_28330 === (11))){
var inst_28297 = (state_28329[(10)]);
var inst_28293 = (state_28329[(9)]);
var inst_28307 = (state_28329[(2)]);
var inst_28308 = [];
var inst_28309 = inst_28308.push(inst_28293);
var inst_28289 = inst_28308;
var inst_28290 = inst_28297;
var state_28329__$1 = (function (){var statearr_28341 = state_28329;
(statearr_28341[(7)] = inst_28289);

(statearr_28341[(11)] = inst_28307);

(statearr_28341[(12)] = inst_28309);

(statearr_28341[(8)] = inst_28290);

return statearr_28341;
})();
var statearr_28342_28366 = state_28329__$1;
(statearr_28342_28366[(2)] = null);

(statearr_28342_28366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28330 === (9))){
var inst_28289 = (state_28329[(7)]);
var inst_28305 = cljs.core.vec.call(null,inst_28289);
var state_28329__$1 = state_28329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28329__$1,(11),out,inst_28305);
} else {
if((state_val_28330 === (5))){
var inst_28297 = (state_28329[(10)]);
var inst_28293 = (state_28329[(9)]);
var inst_28290 = (state_28329[(8)]);
var inst_28297__$1 = f.call(null,inst_28293);
var inst_28298 = cljs.core._EQ_.call(null,inst_28297__$1,inst_28290);
var inst_28299 = cljs.core.keyword_identical_QMARK_.call(null,inst_28290,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28300 = ((inst_28298) || (inst_28299));
var state_28329__$1 = (function (){var statearr_28343 = state_28329;
(statearr_28343[(10)] = inst_28297__$1);

return statearr_28343;
})();
if(cljs.core.truth_(inst_28300)){
var statearr_28344_28367 = state_28329__$1;
(statearr_28344_28367[(1)] = (8));

} else {
var statearr_28345_28368 = state_28329__$1;
(statearr_28345_28368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28330 === (14))){
var inst_28322 = (state_28329[(2)]);
var inst_28323 = cljs.core.async.close_BANG_.call(null,out);
var state_28329__$1 = (function (){var statearr_28347 = state_28329;
(statearr_28347[(13)] = inst_28322);

return statearr_28347;
})();
var statearr_28348_28369 = state_28329__$1;
(statearr_28348_28369[(2)] = inst_28323);

(statearr_28348_28369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28330 === (10))){
var inst_28312 = (state_28329[(2)]);
var state_28329__$1 = state_28329;
var statearr_28349_28370 = state_28329__$1;
(statearr_28349_28370[(2)] = inst_28312);

(statearr_28349_28370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28330 === (8))){
var inst_28297 = (state_28329[(10)]);
var inst_28293 = (state_28329[(9)]);
var inst_28289 = (state_28329[(7)]);
var inst_28302 = inst_28289.push(inst_28293);
var tmp28346 = inst_28289;
var inst_28289__$1 = tmp28346;
var inst_28290 = inst_28297;
var state_28329__$1 = (function (){var statearr_28350 = state_28329;
(statearr_28350[(7)] = inst_28289__$1);

(statearr_28350[(14)] = inst_28302);

(statearr_28350[(8)] = inst_28290);

return statearr_28350;
})();
var statearr_28351_28371 = state_28329__$1;
(statearr_28351_28371[(2)] = null);

(statearr_28351_28371[(1)] = (2));


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
});})(c__26453__auto___28357,out))
;
return ((function (switch__26363__auto__,c__26453__auto___28357,out){
return (function() {
var cljs$core$async$state_machine__26364__auto__ = null;
var cljs$core$async$state_machine__26364__auto____0 = (function (){
var statearr_28352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28352[(0)] = cljs$core$async$state_machine__26364__auto__);

(statearr_28352[(1)] = (1));

return statearr_28352;
});
var cljs$core$async$state_machine__26364__auto____1 = (function (state_28329){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_28329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e28353){if((e28353 instanceof Object)){
var ex__26367__auto__ = e28353;
var statearr_28354_28372 = state_28329;
(statearr_28354_28372[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28373 = state_28329;
state_28329 = G__28373;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
cljs$core$async$state_machine__26364__auto__ = function(state_28329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26364__auto____1.call(this,state_28329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26364__auto____0;
cljs$core$async$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26364__auto____1;
return cljs$core$async$state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto___28357,out))
})();
var state__26455__auto__ = (function (){var statearr_28355 = f__26454__auto__.call(null);
(statearr_28355[(6)] = c__26453__auto___28357);

return statearr_28355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto___28357,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1551032928887

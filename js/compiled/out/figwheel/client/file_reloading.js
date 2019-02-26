// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28562_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28562_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28563 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28564 = null;
var count__28565 = (0);
var i__28566 = (0);
while(true){
if((i__28566 < count__28565)){
var n = cljs.core._nth.call(null,chunk__28564,i__28566);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28567 = seq__28563;
var G__28568 = chunk__28564;
var G__28569 = count__28565;
var G__28570 = (i__28566 + (1));
seq__28563 = G__28567;
chunk__28564 = G__28568;
count__28565 = G__28569;
i__28566 = G__28570;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28563);
if(temp__5457__auto__){
var seq__28563__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28563__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28563__$1);
var G__28571 = cljs.core.chunk_rest.call(null,seq__28563__$1);
var G__28572 = c__4319__auto__;
var G__28573 = cljs.core.count.call(null,c__4319__auto__);
var G__28574 = (0);
seq__28563 = G__28571;
chunk__28564 = G__28572;
count__28565 = G__28573;
i__28566 = G__28574;
continue;
} else {
var n = cljs.core.first.call(null,seq__28563__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28575 = cljs.core.next.call(null,seq__28563__$1);
var G__28576 = null;
var G__28577 = (0);
var G__28578 = (0);
seq__28563 = G__28575;
chunk__28564 = G__28576;
count__28565 = G__28577;
i__28566 = G__28578;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28579){
var vec__28580 = p__28579;
var _ = cljs.core.nth.call(null,vec__28580,(0),null);
var v = cljs.core.nth.call(null,vec__28580,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__28583){
var vec__28584 = p__28583;
var k = cljs.core.nth.call(null,vec__28584,(0),null);
var v = cljs.core.nth.call(null,vec__28584,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28596_28604 = cljs.core.seq.call(null,deps);
var chunk__28597_28605 = null;
var count__28598_28606 = (0);
var i__28599_28607 = (0);
while(true){
if((i__28599_28607 < count__28598_28606)){
var dep_28608 = cljs.core._nth.call(null,chunk__28597_28605,i__28599_28607);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_28608;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28608));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28608,(depth + (1)),state);
} else {
}


var G__28609 = seq__28596_28604;
var G__28610 = chunk__28597_28605;
var G__28611 = count__28598_28606;
var G__28612 = (i__28599_28607 + (1));
seq__28596_28604 = G__28609;
chunk__28597_28605 = G__28610;
count__28598_28606 = G__28611;
i__28599_28607 = G__28612;
continue;
} else {
var temp__5457__auto___28613 = cljs.core.seq.call(null,seq__28596_28604);
if(temp__5457__auto___28613){
var seq__28596_28614__$1 = temp__5457__auto___28613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28596_28614__$1)){
var c__4319__auto___28615 = cljs.core.chunk_first.call(null,seq__28596_28614__$1);
var G__28616 = cljs.core.chunk_rest.call(null,seq__28596_28614__$1);
var G__28617 = c__4319__auto___28615;
var G__28618 = cljs.core.count.call(null,c__4319__auto___28615);
var G__28619 = (0);
seq__28596_28604 = G__28616;
chunk__28597_28605 = G__28617;
count__28598_28606 = G__28618;
i__28599_28607 = G__28619;
continue;
} else {
var dep_28620 = cljs.core.first.call(null,seq__28596_28614__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_28620;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28620));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28620,(depth + (1)),state);
} else {
}


var G__28621 = cljs.core.next.call(null,seq__28596_28614__$1);
var G__28622 = null;
var G__28623 = (0);
var G__28624 = (0);
seq__28596_28604 = G__28621;
chunk__28597_28605 = G__28622;
count__28598_28606 = G__28623;
i__28599_28607 = G__28624;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28600){
var vec__28601 = p__28600;
var seq__28602 = cljs.core.seq.call(null,vec__28601);
var first__28603 = cljs.core.first.call(null,seq__28602);
var seq__28602__$1 = cljs.core.next.call(null,seq__28602);
var x = first__28603;
var xs = seq__28602__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28601,seq__28602,first__28603,seq__28602__$1,x,xs,get_deps__$1){
return (function (p1__28587_SHARP_){
return clojure.set.difference.call(null,p1__28587_SHARP_,x);
});})(vec__28601,seq__28602,first__28603,seq__28602__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28625 = cljs.core.seq.call(null,provides);
var chunk__28626 = null;
var count__28627 = (0);
var i__28628 = (0);
while(true){
if((i__28628 < count__28627)){
var prov = cljs.core._nth.call(null,chunk__28626,i__28628);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28629_28637 = cljs.core.seq.call(null,requires);
var chunk__28630_28638 = null;
var count__28631_28639 = (0);
var i__28632_28640 = (0);
while(true){
if((i__28632_28640 < count__28631_28639)){
var req_28641 = cljs.core._nth.call(null,chunk__28630_28638,i__28632_28640);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28641,prov);


var G__28642 = seq__28629_28637;
var G__28643 = chunk__28630_28638;
var G__28644 = count__28631_28639;
var G__28645 = (i__28632_28640 + (1));
seq__28629_28637 = G__28642;
chunk__28630_28638 = G__28643;
count__28631_28639 = G__28644;
i__28632_28640 = G__28645;
continue;
} else {
var temp__5457__auto___28646 = cljs.core.seq.call(null,seq__28629_28637);
if(temp__5457__auto___28646){
var seq__28629_28647__$1 = temp__5457__auto___28646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28629_28647__$1)){
var c__4319__auto___28648 = cljs.core.chunk_first.call(null,seq__28629_28647__$1);
var G__28649 = cljs.core.chunk_rest.call(null,seq__28629_28647__$1);
var G__28650 = c__4319__auto___28648;
var G__28651 = cljs.core.count.call(null,c__4319__auto___28648);
var G__28652 = (0);
seq__28629_28637 = G__28649;
chunk__28630_28638 = G__28650;
count__28631_28639 = G__28651;
i__28632_28640 = G__28652;
continue;
} else {
var req_28653 = cljs.core.first.call(null,seq__28629_28647__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28653,prov);


var G__28654 = cljs.core.next.call(null,seq__28629_28647__$1);
var G__28655 = null;
var G__28656 = (0);
var G__28657 = (0);
seq__28629_28637 = G__28654;
chunk__28630_28638 = G__28655;
count__28631_28639 = G__28656;
i__28632_28640 = G__28657;
continue;
}
} else {
}
}
break;
}


var G__28658 = seq__28625;
var G__28659 = chunk__28626;
var G__28660 = count__28627;
var G__28661 = (i__28628 + (1));
seq__28625 = G__28658;
chunk__28626 = G__28659;
count__28627 = G__28660;
i__28628 = G__28661;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28625);
if(temp__5457__auto__){
var seq__28625__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28625__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28625__$1);
var G__28662 = cljs.core.chunk_rest.call(null,seq__28625__$1);
var G__28663 = c__4319__auto__;
var G__28664 = cljs.core.count.call(null,c__4319__auto__);
var G__28665 = (0);
seq__28625 = G__28662;
chunk__28626 = G__28663;
count__28627 = G__28664;
i__28628 = G__28665;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28625__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28633_28666 = cljs.core.seq.call(null,requires);
var chunk__28634_28667 = null;
var count__28635_28668 = (0);
var i__28636_28669 = (0);
while(true){
if((i__28636_28669 < count__28635_28668)){
var req_28670 = cljs.core._nth.call(null,chunk__28634_28667,i__28636_28669);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28670,prov);


var G__28671 = seq__28633_28666;
var G__28672 = chunk__28634_28667;
var G__28673 = count__28635_28668;
var G__28674 = (i__28636_28669 + (1));
seq__28633_28666 = G__28671;
chunk__28634_28667 = G__28672;
count__28635_28668 = G__28673;
i__28636_28669 = G__28674;
continue;
} else {
var temp__5457__auto___28675__$1 = cljs.core.seq.call(null,seq__28633_28666);
if(temp__5457__auto___28675__$1){
var seq__28633_28676__$1 = temp__5457__auto___28675__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28633_28676__$1)){
var c__4319__auto___28677 = cljs.core.chunk_first.call(null,seq__28633_28676__$1);
var G__28678 = cljs.core.chunk_rest.call(null,seq__28633_28676__$1);
var G__28679 = c__4319__auto___28677;
var G__28680 = cljs.core.count.call(null,c__4319__auto___28677);
var G__28681 = (0);
seq__28633_28666 = G__28678;
chunk__28634_28667 = G__28679;
count__28635_28668 = G__28680;
i__28636_28669 = G__28681;
continue;
} else {
var req_28682 = cljs.core.first.call(null,seq__28633_28676__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28682,prov);


var G__28683 = cljs.core.next.call(null,seq__28633_28676__$1);
var G__28684 = null;
var G__28685 = (0);
var G__28686 = (0);
seq__28633_28666 = G__28683;
chunk__28634_28667 = G__28684;
count__28635_28668 = G__28685;
i__28636_28669 = G__28686;
continue;
}
} else {
}
}
break;
}


var G__28687 = cljs.core.next.call(null,seq__28625__$1);
var G__28688 = null;
var G__28689 = (0);
var G__28690 = (0);
seq__28625 = G__28687;
chunk__28626 = G__28688;
count__28627 = G__28689;
i__28628 = G__28690;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28691_28695 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28692_28696 = null;
var count__28693_28697 = (0);
var i__28694_28698 = (0);
while(true){
if((i__28694_28698 < count__28693_28697)){
var ns_28699 = cljs.core._nth.call(null,chunk__28692_28696,i__28694_28698);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28699);


var G__28700 = seq__28691_28695;
var G__28701 = chunk__28692_28696;
var G__28702 = count__28693_28697;
var G__28703 = (i__28694_28698 + (1));
seq__28691_28695 = G__28700;
chunk__28692_28696 = G__28701;
count__28693_28697 = G__28702;
i__28694_28698 = G__28703;
continue;
} else {
var temp__5457__auto___28704 = cljs.core.seq.call(null,seq__28691_28695);
if(temp__5457__auto___28704){
var seq__28691_28705__$1 = temp__5457__auto___28704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28691_28705__$1)){
var c__4319__auto___28706 = cljs.core.chunk_first.call(null,seq__28691_28705__$1);
var G__28707 = cljs.core.chunk_rest.call(null,seq__28691_28705__$1);
var G__28708 = c__4319__auto___28706;
var G__28709 = cljs.core.count.call(null,c__4319__auto___28706);
var G__28710 = (0);
seq__28691_28695 = G__28707;
chunk__28692_28696 = G__28708;
count__28693_28697 = G__28709;
i__28694_28698 = G__28710;
continue;
} else {
var ns_28711 = cljs.core.first.call(null,seq__28691_28705__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28711);


var G__28712 = cljs.core.next.call(null,seq__28691_28705__$1);
var G__28713 = null;
var G__28714 = (0);
var G__28715 = (0);
seq__28691_28695 = G__28712;
chunk__28692_28696 = G__28713;
count__28693_28697 = G__28714;
i__28694_28698 = G__28715;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28716__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28717__i = 0, G__28717__a = new Array(arguments.length -  0);
while (G__28717__i < G__28717__a.length) {G__28717__a[G__28717__i] = arguments[G__28717__i + 0]; ++G__28717__i;}
  args = new cljs.core.IndexedSeq(G__28717__a,0,null);
} 
return G__28716__delegate.call(this,args);};
G__28716.cljs$lang$maxFixedArity = 0;
G__28716.cljs$lang$applyTo = (function (arglist__28718){
var args = cljs.core.seq(arglist__28718);
return G__28716__delegate(args);
});
G__28716.cljs$core$IFn$_invoke$arity$variadic = G__28716__delegate;
return G__28716;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__28719_SHARP_,p2__28720_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28719_SHARP_)].join('')),p2__28720_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__28721_SHARP_,p2__28722_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28721_SHARP_)].join(''),p2__28722_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28723 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28723.addCallback(((function (G__28723){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28723))
);

G__28723.addErrback(((function (G__28723){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28723))
);

return G__28723;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28724){if((e28724 instanceof Error)){
var e = e28724;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28724;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28725){if((e28725 instanceof Error)){
var e = e28725;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28725;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28726 = cljs.core._EQ_;
var expr__28727 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28726.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28727))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28726.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28727))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28726.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28727))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28726,expr__28727){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28726,expr__28727))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28729,callback){
var map__28730 = p__28729;
var map__28730__$1 = ((((!((map__28730 == null)))?(((((map__28730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28730):map__28730);
var file_msg = map__28730__$1;
var request_url = cljs.core.get.call(null,map__28730__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28730,map__28730__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28730,map__28730__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto__){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto__){
return (function (state_28768){
var state_val_28769 = (state_28768[(1)]);
if((state_val_28769 === (7))){
var inst_28764 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
var statearr_28770_28796 = state_28768__$1;
(statearr_28770_28796[(2)] = inst_28764);

(statearr_28770_28796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (1))){
var state_28768__$1 = state_28768;
var statearr_28771_28797 = state_28768__$1;
(statearr_28771_28797[(2)] = null);

(statearr_28771_28797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (4))){
var inst_28734 = (state_28768[(7)]);
var inst_28734__$1 = (state_28768[(2)]);
var state_28768__$1 = (function (){var statearr_28772 = state_28768;
(statearr_28772[(7)] = inst_28734__$1);

return statearr_28772;
})();
if(cljs.core.truth_(inst_28734__$1)){
var statearr_28773_28798 = state_28768__$1;
(statearr_28773_28798[(1)] = (5));

} else {
var statearr_28774_28799 = state_28768__$1;
(statearr_28774_28799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (15))){
var inst_28749 = (state_28768[(8)]);
var inst_28747 = (state_28768[(9)]);
var inst_28751 = inst_28749.call(null,inst_28747);
var state_28768__$1 = state_28768;
var statearr_28775_28800 = state_28768__$1;
(statearr_28775_28800[(2)] = inst_28751);

(statearr_28775_28800[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (13))){
var inst_28758 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
var statearr_28776_28801 = state_28768__$1;
(statearr_28776_28801[(2)] = inst_28758);

(statearr_28776_28801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (6))){
var state_28768__$1 = state_28768;
var statearr_28777_28802 = state_28768__$1;
(statearr_28777_28802[(2)] = null);

(statearr_28777_28802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (17))){
var inst_28755 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
var statearr_28778_28803 = state_28768__$1;
(statearr_28778_28803[(2)] = inst_28755);

(statearr_28778_28803[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (3))){
var inst_28766 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28768__$1,inst_28766);
} else {
if((state_val_28769 === (12))){
var state_28768__$1 = state_28768;
var statearr_28779_28804 = state_28768__$1;
(statearr_28779_28804[(2)] = null);

(statearr_28779_28804[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (2))){
var state_28768__$1 = state_28768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28768__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28769 === (11))){
var inst_28739 = (state_28768[(10)]);
var inst_28745 = figwheel.client.file_reloading.blocking_load.call(null,inst_28739);
var state_28768__$1 = state_28768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28768__$1,(14),inst_28745);
} else {
if((state_val_28769 === (9))){
var inst_28739 = (state_28768[(10)]);
var state_28768__$1 = state_28768;
if(cljs.core.truth_(inst_28739)){
var statearr_28780_28805 = state_28768__$1;
(statearr_28780_28805[(1)] = (11));

} else {
var statearr_28781_28806 = state_28768__$1;
(statearr_28781_28806[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (5))){
var inst_28740 = (state_28768[(11)]);
var inst_28734 = (state_28768[(7)]);
var inst_28739 = cljs.core.nth.call(null,inst_28734,(0),null);
var inst_28740__$1 = cljs.core.nth.call(null,inst_28734,(1),null);
var state_28768__$1 = (function (){var statearr_28782 = state_28768;
(statearr_28782[(10)] = inst_28739);

(statearr_28782[(11)] = inst_28740__$1);

return statearr_28782;
})();
if(cljs.core.truth_(inst_28740__$1)){
var statearr_28783_28807 = state_28768__$1;
(statearr_28783_28807[(1)] = (8));

} else {
var statearr_28784_28808 = state_28768__$1;
(statearr_28784_28808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (14))){
var inst_28739 = (state_28768[(10)]);
var inst_28749 = (state_28768[(8)]);
var inst_28747 = (state_28768[(2)]);
var inst_28748 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28749__$1 = cljs.core.get.call(null,inst_28748,inst_28739);
var state_28768__$1 = (function (){var statearr_28785 = state_28768;
(statearr_28785[(8)] = inst_28749__$1);

(statearr_28785[(9)] = inst_28747);

return statearr_28785;
})();
if(cljs.core.truth_(inst_28749__$1)){
var statearr_28786_28809 = state_28768__$1;
(statearr_28786_28809[(1)] = (15));

} else {
var statearr_28787_28810 = state_28768__$1;
(statearr_28787_28810[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (16))){
var inst_28747 = (state_28768[(9)]);
var inst_28753 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28747);
var state_28768__$1 = state_28768;
var statearr_28788_28811 = state_28768__$1;
(statearr_28788_28811[(2)] = inst_28753);

(statearr_28788_28811[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (10))){
var inst_28760 = (state_28768[(2)]);
var state_28768__$1 = (function (){var statearr_28789 = state_28768;
(statearr_28789[(12)] = inst_28760);

return statearr_28789;
})();
var statearr_28790_28812 = state_28768__$1;
(statearr_28790_28812[(2)] = null);

(statearr_28790_28812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (8))){
var inst_28740 = (state_28768[(11)]);
var inst_28742 = eval(inst_28740);
var state_28768__$1 = state_28768;
var statearr_28791_28813 = state_28768__$1;
(statearr_28791_28813[(2)] = inst_28742);

(statearr_28791_28813[(1)] = (10));


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
});})(c__26453__auto__))
;
return ((function (switch__26363__auto__,c__26453__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26364__auto__ = null;
var figwheel$client$file_reloading$state_machine__26364__auto____0 = (function (){
var statearr_28792 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28792[(0)] = figwheel$client$file_reloading$state_machine__26364__auto__);

(statearr_28792[(1)] = (1));

return statearr_28792;
});
var figwheel$client$file_reloading$state_machine__26364__auto____1 = (function (state_28768){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_28768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e28793){if((e28793 instanceof Object)){
var ex__26367__auto__ = e28793;
var statearr_28794_28814 = state_28768;
(statearr_28794_28814[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28815 = state_28768;
state_28768 = G__28815;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26364__auto__ = function(state_28768){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26364__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26364__auto____1.call(this,state_28768);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26364__auto____0;
figwheel$client$file_reloading$state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26364__auto____1;
return figwheel$client$file_reloading$state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto__))
})();
var state__26455__auto__ = (function (){var statearr_28795 = f__26454__auto__.call(null);
(statearr_28795[(6)] = c__26453__auto__);

return statearr_28795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto__))
);

return c__26453__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28817 = arguments.length;
switch (G__28817) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28819,callback){
var map__28820 = p__28819;
var map__28820__$1 = ((((!((map__28820 == null)))?(((((map__28820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28820):map__28820);
var file_msg = map__28820__$1;
var namespace = cljs.core.get.call(null,map__28820__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28820,map__28820__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28820,map__28820__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28822){
var map__28823 = p__28822;
var map__28823__$1 = ((((!((map__28823 == null)))?(((((map__28823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28823):map__28823);
var file_msg = map__28823__$1;
var namespace = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28825){
var map__28826 = p__28825;
var map__28826__$1 = ((((!((map__28826 == null)))?(((((map__28826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28826):map__28826);
var file_msg = map__28826__$1;
var namespace = cljs.core.get.call(null,map__28826__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28828,callback){
var map__28829 = p__28828;
var map__28829__$1 = ((((!((map__28829 == null)))?(((((map__28829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28829):map__28829);
var file_msg = map__28829__$1;
var request_url = cljs.core.get.call(null,map__28829__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28829__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26453__auto___28879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto___28879,out){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto___28879,out){
return (function (state_28864){
var state_val_28865 = (state_28864[(1)]);
if((state_val_28865 === (1))){
var inst_28838 = cljs.core.seq.call(null,files);
var inst_28839 = cljs.core.first.call(null,inst_28838);
var inst_28840 = cljs.core.next.call(null,inst_28838);
var inst_28841 = files;
var state_28864__$1 = (function (){var statearr_28866 = state_28864;
(statearr_28866[(7)] = inst_28839);

(statearr_28866[(8)] = inst_28840);

(statearr_28866[(9)] = inst_28841);

return statearr_28866;
})();
var statearr_28867_28880 = state_28864__$1;
(statearr_28867_28880[(2)] = null);

(statearr_28867_28880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (2))){
var inst_28841 = (state_28864[(9)]);
var inst_28847 = (state_28864[(10)]);
var inst_28846 = cljs.core.seq.call(null,inst_28841);
var inst_28847__$1 = cljs.core.first.call(null,inst_28846);
var inst_28848 = cljs.core.next.call(null,inst_28846);
var inst_28849 = (inst_28847__$1 == null);
var inst_28850 = cljs.core.not.call(null,inst_28849);
var state_28864__$1 = (function (){var statearr_28868 = state_28864;
(statearr_28868[(11)] = inst_28848);

(statearr_28868[(10)] = inst_28847__$1);

return statearr_28868;
})();
if(inst_28850){
var statearr_28869_28881 = state_28864__$1;
(statearr_28869_28881[(1)] = (4));

} else {
var statearr_28870_28882 = state_28864__$1;
(statearr_28870_28882[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (3))){
var inst_28862 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28864__$1,inst_28862);
} else {
if((state_val_28865 === (4))){
var inst_28847 = (state_28864[(10)]);
var inst_28852 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28847);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28864__$1,(7),inst_28852);
} else {
if((state_val_28865 === (5))){
var inst_28858 = cljs.core.async.close_BANG_.call(null,out);
var state_28864__$1 = state_28864;
var statearr_28871_28883 = state_28864__$1;
(statearr_28871_28883[(2)] = inst_28858);

(statearr_28871_28883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (6))){
var inst_28860 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28872_28884 = state_28864__$1;
(statearr_28872_28884[(2)] = inst_28860);

(statearr_28872_28884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (7))){
var inst_28848 = (state_28864[(11)]);
var inst_28854 = (state_28864[(2)]);
var inst_28855 = cljs.core.async.put_BANG_.call(null,out,inst_28854);
var inst_28841 = inst_28848;
var state_28864__$1 = (function (){var statearr_28873 = state_28864;
(statearr_28873[(9)] = inst_28841);

(statearr_28873[(12)] = inst_28855);

return statearr_28873;
})();
var statearr_28874_28885 = state_28864__$1;
(statearr_28874_28885[(2)] = null);

(statearr_28874_28885[(1)] = (2));


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
});})(c__26453__auto___28879,out))
;
return ((function (switch__26363__auto__,c__26453__auto___28879,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26364__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26364__auto____0 = (function (){
var statearr_28875 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28875[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26364__auto__);

(statearr_28875[(1)] = (1));

return statearr_28875;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26364__auto____1 = (function (state_28864){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_28864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e28876){if((e28876 instanceof Object)){
var ex__26367__auto__ = e28876;
var statearr_28877_28886 = state_28864;
(statearr_28877_28886[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28887 = state_28864;
state_28864 = G__28887;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26364__auto__ = function(state_28864){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26364__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26364__auto____1.call(this,state_28864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26364__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26364__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto___28879,out))
})();
var state__26455__auto__ = (function (){var statearr_28878 = f__26454__auto__.call(null);
(statearr_28878[(6)] = c__26453__auto___28879);

return statearr_28878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto___28879,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28888,opts){
var map__28889 = p__28888;
var map__28889__$1 = ((((!((map__28889 == null)))?(((((map__28889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28889):map__28889);
var eval_body = cljs.core.get.call(null,map__28889__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28889__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28891){var e = e28891;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28892_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28892_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28893){
var vec__28894 = p__28893;
var k = cljs.core.nth.call(null,vec__28894,(0),null);
var v = cljs.core.nth.call(null,vec__28894,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28897){
var vec__28898 = p__28897;
var k = cljs.core.nth.call(null,vec__28898,(0),null);
var v = cljs.core.nth.call(null,vec__28898,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28904,p__28905){
var map__28906 = p__28904;
var map__28906__$1 = ((((!((map__28906 == null)))?(((((map__28906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28906):map__28906);
var opts = map__28906__$1;
var before_jsload = cljs.core.get.call(null,map__28906__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28906__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28906__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28907 = p__28905;
var map__28907__$1 = ((((!((map__28907 == null)))?(((((map__28907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28907):map__28907);
var msg = map__28907__$1;
var files = cljs.core.get.call(null,map__28907__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28907__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28907__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26454__auto__ = (function (){var switch__26363__auto__ = ((function (c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29061){
var state_val_29062 = (state_29061[(1)]);
if((state_val_29062 === (7))){
var inst_28921 = (state_29061[(7)]);
var inst_28924 = (state_29061[(8)]);
var inst_28923 = (state_29061[(9)]);
var inst_28922 = (state_29061[(10)]);
var inst_28929 = cljs.core._nth.call(null,inst_28922,inst_28924);
var inst_28930 = figwheel.client.file_reloading.eval_body.call(null,inst_28929,opts);
var inst_28931 = (inst_28924 + (1));
var tmp29063 = inst_28921;
var tmp29064 = inst_28923;
var tmp29065 = inst_28922;
var inst_28921__$1 = tmp29063;
var inst_28922__$1 = tmp29065;
var inst_28923__$1 = tmp29064;
var inst_28924__$1 = inst_28931;
var state_29061__$1 = (function (){var statearr_29066 = state_29061;
(statearr_29066[(7)] = inst_28921__$1);

(statearr_29066[(8)] = inst_28924__$1);

(statearr_29066[(9)] = inst_28923__$1);

(statearr_29066[(10)] = inst_28922__$1);

(statearr_29066[(11)] = inst_28930);

return statearr_29066;
})();
var statearr_29067_29150 = state_29061__$1;
(statearr_29067_29150[(2)] = null);

(statearr_29067_29150[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (20))){
var inst_28964 = (state_29061[(12)]);
var inst_28972 = figwheel.client.file_reloading.sort_files.call(null,inst_28964);
var state_29061__$1 = state_29061;
var statearr_29068_29151 = state_29061__$1;
(statearr_29068_29151[(2)] = inst_28972);

(statearr_29068_29151[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (27))){
var state_29061__$1 = state_29061;
var statearr_29069_29152 = state_29061__$1;
(statearr_29069_29152[(2)] = null);

(statearr_29069_29152[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (1))){
var inst_28913 = (state_29061[(13)]);
var inst_28910 = before_jsload.call(null,files);
var inst_28911 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28912 = (function (){return ((function (inst_28913,inst_28910,inst_28911,state_val_29062,c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28901_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28901_SHARP_);
});
;})(inst_28913,inst_28910,inst_28911,state_val_29062,c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28913__$1 = cljs.core.filter.call(null,inst_28912,files);
var inst_28914 = cljs.core.not_empty.call(null,inst_28913__$1);
var state_29061__$1 = (function (){var statearr_29070 = state_29061;
(statearr_29070[(13)] = inst_28913__$1);

(statearr_29070[(14)] = inst_28911);

(statearr_29070[(15)] = inst_28910);

return statearr_29070;
})();
if(cljs.core.truth_(inst_28914)){
var statearr_29071_29153 = state_29061__$1;
(statearr_29071_29153[(1)] = (2));

} else {
var statearr_29072_29154 = state_29061__$1;
(statearr_29072_29154[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (24))){
var state_29061__$1 = state_29061;
var statearr_29073_29155 = state_29061__$1;
(statearr_29073_29155[(2)] = null);

(statearr_29073_29155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (39))){
var inst_29014 = (state_29061[(16)]);
var state_29061__$1 = state_29061;
var statearr_29074_29156 = state_29061__$1;
(statearr_29074_29156[(2)] = inst_29014);

(statearr_29074_29156[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (46))){
var inst_29056 = (state_29061[(2)]);
var state_29061__$1 = state_29061;
var statearr_29075_29157 = state_29061__$1;
(statearr_29075_29157[(2)] = inst_29056);

(statearr_29075_29157[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (4))){
var inst_28958 = (state_29061[(2)]);
var inst_28959 = cljs.core.List.EMPTY;
var inst_28960 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28959);
var inst_28961 = (function (){return ((function (inst_28958,inst_28959,inst_28960,state_val_29062,c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28902_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28902_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28902_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28902_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_28958,inst_28959,inst_28960,state_val_29062,c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28962 = cljs.core.filter.call(null,inst_28961,files);
var inst_28963 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28964 = cljs.core.concat.call(null,inst_28962,inst_28963);
var state_29061__$1 = (function (){var statearr_29076 = state_29061;
(statearr_29076[(17)] = inst_28960);

(statearr_29076[(12)] = inst_28964);

(statearr_29076[(18)] = inst_28958);

return statearr_29076;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29077_29158 = state_29061__$1;
(statearr_29077_29158[(1)] = (16));

} else {
var statearr_29078_29159 = state_29061__$1;
(statearr_29078_29159[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (15))){
var inst_28948 = (state_29061[(2)]);
var state_29061__$1 = state_29061;
var statearr_29079_29160 = state_29061__$1;
(statearr_29079_29160[(2)] = inst_28948);

(statearr_29079_29160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (21))){
var inst_28974 = (state_29061[(19)]);
var inst_28974__$1 = (state_29061[(2)]);
var inst_28975 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28974__$1);
var state_29061__$1 = (function (){var statearr_29080 = state_29061;
(statearr_29080[(19)] = inst_28974__$1);

return statearr_29080;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29061__$1,(22),inst_28975);
} else {
if((state_val_29062 === (31))){
var inst_29059 = (state_29061[(2)]);
var state_29061__$1 = state_29061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29061__$1,inst_29059);
} else {
if((state_val_29062 === (32))){
var inst_29014 = (state_29061[(16)]);
var inst_29019 = inst_29014.cljs$lang$protocol_mask$partition0$;
var inst_29020 = (inst_29019 & (64));
var inst_29021 = inst_29014.cljs$core$ISeq$;
var inst_29022 = (cljs.core.PROTOCOL_SENTINEL === inst_29021);
var inst_29023 = ((inst_29020) || (inst_29022));
var state_29061__$1 = state_29061;
if(cljs.core.truth_(inst_29023)){
var statearr_29081_29161 = state_29061__$1;
(statearr_29081_29161[(1)] = (35));

} else {
var statearr_29082_29162 = state_29061__$1;
(statearr_29082_29162[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (40))){
var inst_29036 = (state_29061[(20)]);
var inst_29035 = (state_29061[(2)]);
var inst_29036__$1 = cljs.core.get.call(null,inst_29035,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29037 = cljs.core.get.call(null,inst_29035,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29038 = cljs.core.not_empty.call(null,inst_29036__$1);
var state_29061__$1 = (function (){var statearr_29083 = state_29061;
(statearr_29083[(21)] = inst_29037);

(statearr_29083[(20)] = inst_29036__$1);

return statearr_29083;
})();
if(cljs.core.truth_(inst_29038)){
var statearr_29084_29163 = state_29061__$1;
(statearr_29084_29163[(1)] = (41));

} else {
var statearr_29085_29164 = state_29061__$1;
(statearr_29085_29164[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (33))){
var state_29061__$1 = state_29061;
var statearr_29086_29165 = state_29061__$1;
(statearr_29086_29165[(2)] = false);

(statearr_29086_29165[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (13))){
var inst_28934 = (state_29061[(22)]);
var inst_28938 = cljs.core.chunk_first.call(null,inst_28934);
var inst_28939 = cljs.core.chunk_rest.call(null,inst_28934);
var inst_28940 = cljs.core.count.call(null,inst_28938);
var inst_28921 = inst_28939;
var inst_28922 = inst_28938;
var inst_28923 = inst_28940;
var inst_28924 = (0);
var state_29061__$1 = (function (){var statearr_29087 = state_29061;
(statearr_29087[(7)] = inst_28921);

(statearr_29087[(8)] = inst_28924);

(statearr_29087[(9)] = inst_28923);

(statearr_29087[(10)] = inst_28922);

return statearr_29087;
})();
var statearr_29088_29166 = state_29061__$1;
(statearr_29088_29166[(2)] = null);

(statearr_29088_29166[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (22))){
var inst_28977 = (state_29061[(23)]);
var inst_28978 = (state_29061[(24)]);
var inst_28982 = (state_29061[(25)]);
var inst_28974 = (state_29061[(19)]);
var inst_28977__$1 = (state_29061[(2)]);
var inst_28978__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28977__$1);
var inst_28979 = (function (){var all_files = inst_28974;
var res_SINGLEQUOTE_ = inst_28977__$1;
var res = inst_28978__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28977,inst_28978,inst_28982,inst_28974,inst_28977__$1,inst_28978__$1,state_val_29062,c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28903_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28903_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28977,inst_28978,inst_28982,inst_28974,inst_28977__$1,inst_28978__$1,state_val_29062,c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28980 = cljs.core.filter.call(null,inst_28979,inst_28977__$1);
var inst_28981 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28982__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28981);
var inst_28983 = cljs.core.not_empty.call(null,inst_28982__$1);
var state_29061__$1 = (function (){var statearr_29089 = state_29061;
(statearr_29089[(23)] = inst_28977__$1);

(statearr_29089[(24)] = inst_28978__$1);

(statearr_29089[(25)] = inst_28982__$1);

(statearr_29089[(26)] = inst_28980);

return statearr_29089;
})();
if(cljs.core.truth_(inst_28983)){
var statearr_29090_29167 = state_29061__$1;
(statearr_29090_29167[(1)] = (23));

} else {
var statearr_29091_29168 = state_29061__$1;
(statearr_29091_29168[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (36))){
var state_29061__$1 = state_29061;
var statearr_29092_29169 = state_29061__$1;
(statearr_29092_29169[(2)] = false);

(statearr_29092_29169[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (41))){
var inst_29036 = (state_29061[(20)]);
var inst_29040 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29041 = cljs.core.map.call(null,inst_29040,inst_29036);
var inst_29042 = cljs.core.pr_str.call(null,inst_29041);
var inst_29043 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29042)].join('');
var inst_29044 = figwheel.client.utils.log.call(null,inst_29043);
var state_29061__$1 = state_29061;
var statearr_29093_29170 = state_29061__$1;
(statearr_29093_29170[(2)] = inst_29044);

(statearr_29093_29170[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (43))){
var inst_29037 = (state_29061[(21)]);
var inst_29047 = (state_29061[(2)]);
var inst_29048 = cljs.core.not_empty.call(null,inst_29037);
var state_29061__$1 = (function (){var statearr_29094 = state_29061;
(statearr_29094[(27)] = inst_29047);

return statearr_29094;
})();
if(cljs.core.truth_(inst_29048)){
var statearr_29095_29171 = state_29061__$1;
(statearr_29095_29171[(1)] = (44));

} else {
var statearr_29096_29172 = state_29061__$1;
(statearr_29096_29172[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (29))){
var inst_28977 = (state_29061[(23)]);
var inst_28978 = (state_29061[(24)]);
var inst_28982 = (state_29061[(25)]);
var inst_29014 = (state_29061[(16)]);
var inst_28974 = (state_29061[(19)]);
var inst_28980 = (state_29061[(26)]);
var inst_29010 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29013 = (function (){var all_files = inst_28974;
var res_SINGLEQUOTE_ = inst_28977;
var res = inst_28978;
var files_not_loaded = inst_28980;
var dependencies_that_loaded = inst_28982;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28977,inst_28978,inst_28982,inst_29014,inst_28974,inst_28980,inst_29010,state_val_29062,c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29012){
var map__29097 = p__29012;
var map__29097__$1 = ((((!((map__29097 == null)))?(((((map__29097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29097):map__29097);
var namespace = cljs.core.get.call(null,map__29097__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28977,inst_28978,inst_28982,inst_29014,inst_28974,inst_28980,inst_29010,state_val_29062,c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29014__$1 = cljs.core.group_by.call(null,inst_29013,inst_28980);
var inst_29016 = (inst_29014__$1 == null);
var inst_29017 = cljs.core.not.call(null,inst_29016);
var state_29061__$1 = (function (){var statearr_29099 = state_29061;
(statearr_29099[(16)] = inst_29014__$1);

(statearr_29099[(28)] = inst_29010);

return statearr_29099;
})();
if(inst_29017){
var statearr_29100_29173 = state_29061__$1;
(statearr_29100_29173[(1)] = (32));

} else {
var statearr_29101_29174 = state_29061__$1;
(statearr_29101_29174[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (44))){
var inst_29037 = (state_29061[(21)]);
var inst_29050 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29037);
var inst_29051 = cljs.core.pr_str.call(null,inst_29050);
var inst_29052 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29051)].join('');
var inst_29053 = figwheel.client.utils.log.call(null,inst_29052);
var state_29061__$1 = state_29061;
var statearr_29102_29175 = state_29061__$1;
(statearr_29102_29175[(2)] = inst_29053);

(statearr_29102_29175[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (6))){
var inst_28955 = (state_29061[(2)]);
var state_29061__$1 = state_29061;
var statearr_29103_29176 = state_29061__$1;
(statearr_29103_29176[(2)] = inst_28955);

(statearr_29103_29176[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (28))){
var inst_28980 = (state_29061[(26)]);
var inst_29007 = (state_29061[(2)]);
var inst_29008 = cljs.core.not_empty.call(null,inst_28980);
var state_29061__$1 = (function (){var statearr_29104 = state_29061;
(statearr_29104[(29)] = inst_29007);

return statearr_29104;
})();
if(cljs.core.truth_(inst_29008)){
var statearr_29105_29177 = state_29061__$1;
(statearr_29105_29177[(1)] = (29));

} else {
var statearr_29106_29178 = state_29061__$1;
(statearr_29106_29178[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (25))){
var inst_28978 = (state_29061[(24)]);
var inst_28994 = (state_29061[(2)]);
var inst_28995 = cljs.core.not_empty.call(null,inst_28978);
var state_29061__$1 = (function (){var statearr_29107 = state_29061;
(statearr_29107[(30)] = inst_28994);

return statearr_29107;
})();
if(cljs.core.truth_(inst_28995)){
var statearr_29108_29179 = state_29061__$1;
(statearr_29108_29179[(1)] = (26));

} else {
var statearr_29109_29180 = state_29061__$1;
(statearr_29109_29180[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (34))){
var inst_29030 = (state_29061[(2)]);
var state_29061__$1 = state_29061;
if(cljs.core.truth_(inst_29030)){
var statearr_29110_29181 = state_29061__$1;
(statearr_29110_29181[(1)] = (38));

} else {
var statearr_29111_29182 = state_29061__$1;
(statearr_29111_29182[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (17))){
var state_29061__$1 = state_29061;
var statearr_29112_29183 = state_29061__$1;
(statearr_29112_29183[(2)] = recompile_dependents);

(statearr_29112_29183[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (3))){
var state_29061__$1 = state_29061;
var statearr_29113_29184 = state_29061__$1;
(statearr_29113_29184[(2)] = null);

(statearr_29113_29184[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (12))){
var inst_28951 = (state_29061[(2)]);
var state_29061__$1 = state_29061;
var statearr_29114_29185 = state_29061__$1;
(statearr_29114_29185[(2)] = inst_28951);

(statearr_29114_29185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (2))){
var inst_28913 = (state_29061[(13)]);
var inst_28920 = cljs.core.seq.call(null,inst_28913);
var inst_28921 = inst_28920;
var inst_28922 = null;
var inst_28923 = (0);
var inst_28924 = (0);
var state_29061__$1 = (function (){var statearr_29115 = state_29061;
(statearr_29115[(7)] = inst_28921);

(statearr_29115[(8)] = inst_28924);

(statearr_29115[(9)] = inst_28923);

(statearr_29115[(10)] = inst_28922);

return statearr_29115;
})();
var statearr_29116_29186 = state_29061__$1;
(statearr_29116_29186[(2)] = null);

(statearr_29116_29186[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (23))){
var inst_28977 = (state_29061[(23)]);
var inst_28978 = (state_29061[(24)]);
var inst_28982 = (state_29061[(25)]);
var inst_28974 = (state_29061[(19)]);
var inst_28980 = (state_29061[(26)]);
var inst_28985 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28987 = (function (){var all_files = inst_28974;
var res_SINGLEQUOTE_ = inst_28977;
var res = inst_28978;
var files_not_loaded = inst_28980;
var dependencies_that_loaded = inst_28982;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28977,inst_28978,inst_28982,inst_28974,inst_28980,inst_28985,state_val_29062,c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28986){
var map__29117 = p__28986;
var map__29117__$1 = ((((!((map__29117 == null)))?(((((map__29117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29117):map__29117);
var request_url = cljs.core.get.call(null,map__29117__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28977,inst_28978,inst_28982,inst_28974,inst_28980,inst_28985,state_val_29062,c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28988 = cljs.core.reverse.call(null,inst_28982);
var inst_28989 = cljs.core.map.call(null,inst_28987,inst_28988);
var inst_28990 = cljs.core.pr_str.call(null,inst_28989);
var inst_28991 = figwheel.client.utils.log.call(null,inst_28990);
var state_29061__$1 = (function (){var statearr_29119 = state_29061;
(statearr_29119[(31)] = inst_28985);

return statearr_29119;
})();
var statearr_29120_29187 = state_29061__$1;
(statearr_29120_29187[(2)] = inst_28991);

(statearr_29120_29187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (35))){
var state_29061__$1 = state_29061;
var statearr_29121_29188 = state_29061__$1;
(statearr_29121_29188[(2)] = true);

(statearr_29121_29188[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (19))){
var inst_28964 = (state_29061[(12)]);
var inst_28970 = figwheel.client.file_reloading.expand_files.call(null,inst_28964);
var state_29061__$1 = state_29061;
var statearr_29122_29189 = state_29061__$1;
(statearr_29122_29189[(2)] = inst_28970);

(statearr_29122_29189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (11))){
var state_29061__$1 = state_29061;
var statearr_29123_29190 = state_29061__$1;
(statearr_29123_29190[(2)] = null);

(statearr_29123_29190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (9))){
var inst_28953 = (state_29061[(2)]);
var state_29061__$1 = state_29061;
var statearr_29124_29191 = state_29061__$1;
(statearr_29124_29191[(2)] = inst_28953);

(statearr_29124_29191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (5))){
var inst_28924 = (state_29061[(8)]);
var inst_28923 = (state_29061[(9)]);
var inst_28926 = (inst_28924 < inst_28923);
var inst_28927 = inst_28926;
var state_29061__$1 = state_29061;
if(cljs.core.truth_(inst_28927)){
var statearr_29125_29192 = state_29061__$1;
(statearr_29125_29192[(1)] = (7));

} else {
var statearr_29126_29193 = state_29061__$1;
(statearr_29126_29193[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (14))){
var inst_28934 = (state_29061[(22)]);
var inst_28943 = cljs.core.first.call(null,inst_28934);
var inst_28944 = figwheel.client.file_reloading.eval_body.call(null,inst_28943,opts);
var inst_28945 = cljs.core.next.call(null,inst_28934);
var inst_28921 = inst_28945;
var inst_28922 = null;
var inst_28923 = (0);
var inst_28924 = (0);
var state_29061__$1 = (function (){var statearr_29127 = state_29061;
(statearr_29127[(7)] = inst_28921);

(statearr_29127[(8)] = inst_28924);

(statearr_29127[(9)] = inst_28923);

(statearr_29127[(10)] = inst_28922);

(statearr_29127[(32)] = inst_28944);

return statearr_29127;
})();
var statearr_29128_29194 = state_29061__$1;
(statearr_29128_29194[(2)] = null);

(statearr_29128_29194[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (45))){
var state_29061__$1 = state_29061;
var statearr_29129_29195 = state_29061__$1;
(statearr_29129_29195[(2)] = null);

(statearr_29129_29195[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (26))){
var inst_28977 = (state_29061[(23)]);
var inst_28978 = (state_29061[(24)]);
var inst_28982 = (state_29061[(25)]);
var inst_28974 = (state_29061[(19)]);
var inst_28980 = (state_29061[(26)]);
var inst_28997 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28999 = (function (){var all_files = inst_28974;
var res_SINGLEQUOTE_ = inst_28977;
var res = inst_28978;
var files_not_loaded = inst_28980;
var dependencies_that_loaded = inst_28982;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28977,inst_28978,inst_28982,inst_28974,inst_28980,inst_28997,state_val_29062,c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28998){
var map__29130 = p__28998;
var map__29130__$1 = ((((!((map__29130 == null)))?(((((map__29130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29130):map__29130);
var namespace = cljs.core.get.call(null,map__29130__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29130__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28977,inst_28978,inst_28982,inst_28974,inst_28980,inst_28997,state_val_29062,c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29000 = cljs.core.map.call(null,inst_28999,inst_28978);
var inst_29001 = cljs.core.pr_str.call(null,inst_29000);
var inst_29002 = figwheel.client.utils.log.call(null,inst_29001);
var inst_29003 = (function (){var all_files = inst_28974;
var res_SINGLEQUOTE_ = inst_28977;
var res = inst_28978;
var files_not_loaded = inst_28980;
var dependencies_that_loaded = inst_28982;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28977,inst_28978,inst_28982,inst_28974,inst_28980,inst_28997,inst_28999,inst_29000,inst_29001,inst_29002,state_val_29062,c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28977,inst_28978,inst_28982,inst_28974,inst_28980,inst_28997,inst_28999,inst_29000,inst_29001,inst_29002,state_val_29062,c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29004 = setTimeout(inst_29003,(10));
var state_29061__$1 = (function (){var statearr_29132 = state_29061;
(statearr_29132[(33)] = inst_28997);

(statearr_29132[(34)] = inst_29002);

return statearr_29132;
})();
var statearr_29133_29196 = state_29061__$1;
(statearr_29133_29196[(2)] = inst_29004);

(statearr_29133_29196[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (16))){
var state_29061__$1 = state_29061;
var statearr_29134_29197 = state_29061__$1;
(statearr_29134_29197[(2)] = reload_dependents);

(statearr_29134_29197[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (38))){
var inst_29014 = (state_29061[(16)]);
var inst_29032 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29014);
var state_29061__$1 = state_29061;
var statearr_29135_29198 = state_29061__$1;
(statearr_29135_29198[(2)] = inst_29032);

(statearr_29135_29198[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (30))){
var state_29061__$1 = state_29061;
var statearr_29136_29199 = state_29061__$1;
(statearr_29136_29199[(2)] = null);

(statearr_29136_29199[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (10))){
var inst_28934 = (state_29061[(22)]);
var inst_28936 = cljs.core.chunked_seq_QMARK_.call(null,inst_28934);
var state_29061__$1 = state_29061;
if(inst_28936){
var statearr_29137_29200 = state_29061__$1;
(statearr_29137_29200[(1)] = (13));

} else {
var statearr_29138_29201 = state_29061__$1;
(statearr_29138_29201[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (18))){
var inst_28968 = (state_29061[(2)]);
var state_29061__$1 = state_29061;
if(cljs.core.truth_(inst_28968)){
var statearr_29139_29202 = state_29061__$1;
(statearr_29139_29202[(1)] = (19));

} else {
var statearr_29140_29203 = state_29061__$1;
(statearr_29140_29203[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (42))){
var state_29061__$1 = state_29061;
var statearr_29141_29204 = state_29061__$1;
(statearr_29141_29204[(2)] = null);

(statearr_29141_29204[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (37))){
var inst_29027 = (state_29061[(2)]);
var state_29061__$1 = state_29061;
var statearr_29142_29205 = state_29061__$1;
(statearr_29142_29205[(2)] = inst_29027);

(statearr_29142_29205[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29062 === (8))){
var inst_28921 = (state_29061[(7)]);
var inst_28934 = (state_29061[(22)]);
var inst_28934__$1 = cljs.core.seq.call(null,inst_28921);
var state_29061__$1 = (function (){var statearr_29143 = state_29061;
(statearr_29143[(22)] = inst_28934__$1);

return statearr_29143;
})();
if(inst_28934__$1){
var statearr_29144_29206 = state_29061__$1;
(statearr_29144_29206[(1)] = (10));

} else {
var statearr_29145_29207 = state_29061__$1;
(statearr_29145_29207[(1)] = (11));

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
}
});})(c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26363__auto__,c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26364__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26364__auto____0 = (function (){
var statearr_29146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29146[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26364__auto__);

(statearr_29146[(1)] = (1));

return statearr_29146;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26364__auto____1 = (function (state_29061){
while(true){
var ret_value__26365__auto__ = (function (){try{while(true){
var result__26366__auto__ = switch__26363__auto__.call(null,state_29061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26366__auto__;
}
break;
}
}catch (e29147){if((e29147 instanceof Object)){
var ex__26367__auto__ = e29147;
var statearr_29148_29208 = state_29061;
(statearr_29148_29208[(5)] = ex__26367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29209 = state_29061;
state_29061 = G__29209;
continue;
} else {
return ret_value__26365__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26364__auto__ = function(state_29061){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26364__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26364__auto____1.call(this,state_29061);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26364__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26364__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26364__auto__;
})()
;})(switch__26363__auto__,c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26455__auto__ = (function (){var statearr_29149 = f__26454__auto__.call(null);
(statearr_29149[(6)] = c__26453__auto__);

return statearr_29149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26455__auto__);
});})(c__26453__auto__,map__28906,map__28906__$1,opts,before_jsload,on_jsload,reload_dependents,map__28907,map__28907__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26453__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29212,link){
var map__29213 = p__29212;
var map__29213__$1 = ((((!((map__29213 == null)))?(((((map__29213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29213):map__29213);
var file = cljs.core.get.call(null,map__29213__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29213,map__29213__$1,file){
return (function (p1__29210_SHARP_,p2__29211_SHARP_){
if(cljs.core._EQ_.call(null,p1__29210_SHARP_,p2__29211_SHARP_)){
return p1__29210_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29213,map__29213__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29216){
var map__29217 = p__29216;
var map__29217__$1 = ((((!((map__29217 == null)))?(((((map__29217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29217):map__29217);
var match_length = cljs.core.get.call(null,map__29217__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29217__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29215_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29215_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29219_SHARP_,p2__29220_SHARP_){
return cljs.core.assoc.call(null,p1__29219_SHARP_,cljs.core.get.call(null,p2__29220_SHARP_,key),p2__29220_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29221 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29221);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29221);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29222,p__29223){
var map__29224 = p__29222;
var map__29224__$1 = ((((!((map__29224 == null)))?(((((map__29224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29224):map__29224);
var on_cssload = cljs.core.get.call(null,map__29224__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29225 = p__29223;
var map__29225__$1 = ((((!((map__29225 == null)))?(((((map__29225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29225):map__29225);
var files_msg = map__29225__$1;
var files = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1551032929692

// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30025){
var map__30026 = p__30025;
var map__30026__$1 = ((((!((map__30026 == null)))?(((((map__30026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30026):map__30026);
var m = map__30026__$1;
var n = cljs.core.get.call(null,map__30026__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30026__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30028_30050 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30029_30051 = null;
var count__30030_30052 = (0);
var i__30031_30053 = (0);
while(true){
if((i__30031_30053 < count__30030_30052)){
var f_30054 = cljs.core._nth.call(null,chunk__30029_30051,i__30031_30053);
cljs.core.println.call(null,"  ",f_30054);


var G__30055 = seq__30028_30050;
var G__30056 = chunk__30029_30051;
var G__30057 = count__30030_30052;
var G__30058 = (i__30031_30053 + (1));
seq__30028_30050 = G__30055;
chunk__30029_30051 = G__30056;
count__30030_30052 = G__30057;
i__30031_30053 = G__30058;
continue;
} else {
var temp__5457__auto___30059 = cljs.core.seq.call(null,seq__30028_30050);
if(temp__5457__auto___30059){
var seq__30028_30060__$1 = temp__5457__auto___30059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30028_30060__$1)){
var c__4319__auto___30061 = cljs.core.chunk_first.call(null,seq__30028_30060__$1);
var G__30062 = cljs.core.chunk_rest.call(null,seq__30028_30060__$1);
var G__30063 = c__4319__auto___30061;
var G__30064 = cljs.core.count.call(null,c__4319__auto___30061);
var G__30065 = (0);
seq__30028_30050 = G__30062;
chunk__30029_30051 = G__30063;
count__30030_30052 = G__30064;
i__30031_30053 = G__30065;
continue;
} else {
var f_30066 = cljs.core.first.call(null,seq__30028_30060__$1);
cljs.core.println.call(null,"  ",f_30066);


var G__30067 = cljs.core.next.call(null,seq__30028_30060__$1);
var G__30068 = null;
var G__30069 = (0);
var G__30070 = (0);
seq__30028_30050 = G__30067;
chunk__30029_30051 = G__30068;
count__30030_30052 = G__30069;
i__30031_30053 = G__30070;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30071 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30071);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30071)))?cljs.core.second.call(null,arglists_30071):arglists_30071));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30032_30072 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30033_30073 = null;
var count__30034_30074 = (0);
var i__30035_30075 = (0);
while(true){
if((i__30035_30075 < count__30034_30074)){
var vec__30036_30076 = cljs.core._nth.call(null,chunk__30033_30073,i__30035_30075);
var name_30077 = cljs.core.nth.call(null,vec__30036_30076,(0),null);
var map__30039_30078 = cljs.core.nth.call(null,vec__30036_30076,(1),null);
var map__30039_30079__$1 = ((((!((map__30039_30078 == null)))?(((((map__30039_30078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30039_30078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30039_30078):map__30039_30078);
var doc_30080 = cljs.core.get.call(null,map__30039_30079__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30081 = cljs.core.get.call(null,map__30039_30079__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30077);

cljs.core.println.call(null," ",arglists_30081);

if(cljs.core.truth_(doc_30080)){
cljs.core.println.call(null," ",doc_30080);
} else {
}


var G__30082 = seq__30032_30072;
var G__30083 = chunk__30033_30073;
var G__30084 = count__30034_30074;
var G__30085 = (i__30035_30075 + (1));
seq__30032_30072 = G__30082;
chunk__30033_30073 = G__30083;
count__30034_30074 = G__30084;
i__30035_30075 = G__30085;
continue;
} else {
var temp__5457__auto___30086 = cljs.core.seq.call(null,seq__30032_30072);
if(temp__5457__auto___30086){
var seq__30032_30087__$1 = temp__5457__auto___30086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30032_30087__$1)){
var c__4319__auto___30088 = cljs.core.chunk_first.call(null,seq__30032_30087__$1);
var G__30089 = cljs.core.chunk_rest.call(null,seq__30032_30087__$1);
var G__30090 = c__4319__auto___30088;
var G__30091 = cljs.core.count.call(null,c__4319__auto___30088);
var G__30092 = (0);
seq__30032_30072 = G__30089;
chunk__30033_30073 = G__30090;
count__30034_30074 = G__30091;
i__30035_30075 = G__30092;
continue;
} else {
var vec__30041_30093 = cljs.core.first.call(null,seq__30032_30087__$1);
var name_30094 = cljs.core.nth.call(null,vec__30041_30093,(0),null);
var map__30044_30095 = cljs.core.nth.call(null,vec__30041_30093,(1),null);
var map__30044_30096__$1 = ((((!((map__30044_30095 == null)))?(((((map__30044_30095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30044_30095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30044_30095):map__30044_30095);
var doc_30097 = cljs.core.get.call(null,map__30044_30096__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30098 = cljs.core.get.call(null,map__30044_30096__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30094);

cljs.core.println.call(null," ",arglists_30098);

if(cljs.core.truth_(doc_30097)){
cljs.core.println.call(null," ",doc_30097);
} else {
}


var G__30099 = cljs.core.next.call(null,seq__30032_30087__$1);
var G__30100 = null;
var G__30101 = (0);
var G__30102 = (0);
seq__30032_30072 = G__30099;
chunk__30033_30073 = G__30100;
count__30034_30074 = G__30101;
i__30035_30075 = G__30102;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30046 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30047 = null;
var count__30048 = (0);
var i__30049 = (0);
while(true){
if((i__30049 < count__30048)){
var role = cljs.core._nth.call(null,chunk__30047,i__30049);
var temp__5457__auto___30103__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30103__$1)){
var spec_30104 = temp__5457__auto___30103__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30104));
} else {
}


var G__30105 = seq__30046;
var G__30106 = chunk__30047;
var G__30107 = count__30048;
var G__30108 = (i__30049 + (1));
seq__30046 = G__30105;
chunk__30047 = G__30106;
count__30048 = G__30107;
i__30049 = G__30108;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30046);
if(temp__5457__auto____$1){
var seq__30046__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30046__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30046__$1);
var G__30109 = cljs.core.chunk_rest.call(null,seq__30046__$1);
var G__30110 = c__4319__auto__;
var G__30111 = cljs.core.count.call(null,c__4319__auto__);
var G__30112 = (0);
seq__30046 = G__30109;
chunk__30047 = G__30110;
count__30048 = G__30111;
i__30049 = G__30112;
continue;
} else {
var role = cljs.core.first.call(null,seq__30046__$1);
var temp__5457__auto___30113__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30113__$2)){
var spec_30114 = temp__5457__auto___30113__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30114));
} else {
}


var G__30115 = cljs.core.next.call(null,seq__30046__$1);
var G__30116 = null;
var G__30117 = (0);
var G__30118 = (0);
seq__30046 = G__30115;
chunk__30047 = G__30116;
count__30048 = G__30117;
i__30049 = G__30118;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1551032930916

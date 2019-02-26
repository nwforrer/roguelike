// Compiled by ClojureScript 1.10.238 {}
goog.provide('roguelike.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
roguelike.core._STAR_keyboard_state = cljs.core.atom.call(null,null);
roguelike.core.init_render_context = (function roguelike$core$init_render_context(state){
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
canvas.width = (document.body.clientWidth - (20));

canvas.height = (document.body.clientHeight - (20));

var state__$1 = state;
var state__$2 = cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx);
return cljs.core.assoc.call(null,state__$2,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas);
});
roguelike.core.init_player = (function roguelike$core$init_player(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(50)], null));
});
roguelike.core.render_text = (function roguelike$core$render_text(state){
var ctx_21868 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(state);
var canvas_21869 = new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(state);
ctx_21868.fillStyle = "#000";

ctx_21868.fillRect((0),(0),canvas_21869.width,canvas_21869.height);

ctx_21868.fillStyle = "#F7CE28";

ctx_21868.font = "30px Sans-Serif";

ctx_21868.textBaseline = "Top";

ctx_21868.fillText("@",cljs.core.first.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.second.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state)));

return state;
});
roguelike.core.key_down = (function roguelike$core$key_down(event){
return cljs.core.swap_BANG_.call(null,roguelike.core._STAR_keyboard_state,cljs.core.assoc,event.keyCode,true);
});
roguelike.core.key_up = (function roguelike$core$key_up(event){
return cljs.core.swap_BANG_.call(null,roguelike.core._STAR_keyboard_state,cljs.core.dissoc,event.keyCode);
});
roguelike.core.update_game = (function roguelike$core$update_game(state){
var state__$1 = state;
var state__$2 = (cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,roguelike.core._STAR_keyboard_state),(37)))?cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state__$1)) - (1)),cljs.core.second.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state__$1))], null)):(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,roguelike.core._STAR_keyboard_state),(39)))?cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state__$1)) + (1)),cljs.core.second.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state__$1))], null)):(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,roguelike.core._STAR_keyboard_state),(40)))?cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state__$1)),(cljs.core.second.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state__$1)) + (1))], null)):(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,roguelike.core._STAR_keyboard_state),(38)))?cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state__$1)),(cljs.core.second.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state__$1)) - (1))], null)):state__$1
))));
return roguelike.core.render_text.call(null,state__$2);
});
roguelike.core.game_loop = (function roguelike$core$game_loop(state){
var state__$1 = state;
var state__$2 = roguelike.core.update_game.call(null,state__$1);
return window.requestAnimationFrame(((function (state__$1,state__$2){
return (function (){
return roguelike.core.game_loop.call(null,state__$2);
});})(state__$1,state__$2))
);
});
roguelike.core.startup = (function roguelike$core$startup(){
var state_21870 = cljs.core.PersistentArrayMap.EMPTY;
var state_21871__$1 = roguelike.core.init_render_context.call(null,state_21870);
var state_21872__$2 = roguelike.core.init_player.call(null,state_21871__$1);
roguelike.core.game_loop.call(null,state_21872__$2);

document.onkeydown = roguelike.core.key_down;

return document.onkeyup = roguelike.core.key_up;
});
window.onload = roguelike.core.startup;
roguelike.core.on_js_reload = (function roguelike$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1551152918078

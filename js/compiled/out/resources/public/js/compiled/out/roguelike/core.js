// Compiled by ClojureScript 1.10.238 {}
goog.provide('roguelike.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof roguelike.core.s !== 'undefined'){
} else {
roguelike.core.s = cljs.core.PersistentArrayMap.EMPTY;
}
roguelike.core.keyboard_state = cljs.core.PersistentArrayMap.EMPTY;
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
var ctx_21856 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(state);
var canvas_21857 = new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(state);
ctx_21856.fillStyle = "#FFF";

ctx_21856.fillRect((0),(0),canvas_21857.width,canvas_21857.height);

ctx_21856.fillStyle = "#F7CE28";

ctx_21856.font = "30px Sans-Serif";

ctx_21856.textBaseline = "Top";

ctx_21856.fillText("@",cljs.core.first.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.second.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state)));

return state;
});
roguelike.core.key_down = (function roguelike$core$key_down(event){
return roguelike.core.keyboard_state = cljs.core.assoc.call(null,roguelike.core.keyboard_state,event.keyCode,true);
});
roguelike.core.key_up = (function roguelike$core$key_up(event){
return roguelike.core.keyboard_state = cljs.core.assoc.call(null,roguelike.core.keyboard_state,event.keyCode,null);
});
roguelike.core.update_game = (function roguelike$core$update_game(state){
var state__$1 = state;
var state__$2 = (cljs.core.truth_(cljs.core.get.call(null,roguelike.core.keyboard_state,(37)))?cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state__$1)) - (1)),cljs.core.second.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state__$1))], null)):(cljs.core.truth_(cljs.core.get.call(null,roguelike.core.keyboard_state,(39)))?cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state__$1)) + (1)),cljs.core.second.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state__$1))], null)):(cljs.core.truth_(cljs.core.get.call(null,roguelike.core.keyboard_state,(40)))?cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state__$1)),(cljs.core.second.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state__$1)) + (1))], null)):(cljs.core.truth_(cljs.core.get.call(null,roguelike.core.keyboard_state,(38)))?cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state__$1)),(cljs.core.second.call(null,new cljs.core.Keyword(null,"player-pos","player-pos",-407969794).cljs$core$IFn$_invoke$arity$1(state__$1)) - (1))], null)):state__$1
))));
return roguelike.core.render_text.call(null,state__$2);
});
roguelike.core.game_loop = (function roguelike$core$game_loop(){
return roguelike.core.s = roguelike.core.update_game.call(null,roguelike.core.s);
});
roguelike.core.startup = (function roguelike$core$startup(){
var state_21858 = cljs.core.PersistentArrayMap.EMPTY;
var state_21859__$1 = roguelike.core.init_render_context.call(null,state_21858);
var state_21860__$2 = roguelike.core.init_player.call(null,state_21859__$1);
var state_21861__$3 = roguelike.core.s = state_21860__$2;
window.setInterval(roguelike.core.game_loop,((1000) / (30)));

document.onkeydown = roguelike.core.key_down;

return document.onkeyup = roguelike.core.key_up;
});
window.onload = roguelike.core.startup;
roguelike.core.on_js_reload = (function roguelike$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1551150524022

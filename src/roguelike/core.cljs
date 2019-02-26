(ns roguelike.core
  (:require ))

(enable-console-print!)

(def *keyboard-state (atom nil))

(defn init-render-context [state]
  (let* [canvas (.getElementById js/document "game-canvas")
         ctx (.getContext canvas "2d")]
        (set! (.-width canvas) (- (.-clientWidth (.-body js/document)) 20))
        (set! (.-height canvas) (- (.-clientHeight (.-body js/document)) 20))
        (as-> state state
              (assoc state :ctx ctx)
              (assoc state :canvas canvas))))

(defn init-player [state]
  (assoc state :player-pos [50 50]))

(defn render-text [state]
  (let [ctx (:ctx state)
        canvas (:canvas state)]
    (set! (.-fillStyle ctx) "#000")
    (.fillRect ctx 0 0 (.-width canvas) (.-height canvas))
    (set! (.-fillStyle ctx) "#F7CE28")
    (set! (.-font ctx) "30px Sans-Serif")
    (set! (.-textBaseline ctx) "Top")
    (.fillText ctx "@" (first (:player-pos state)) (second (:player-pos state))))
  state)

(defn key-down [event]
  (swap! *keyboard-state assoc (.-keyCode event) true))

(defn key-up [event]
  (swap! *keyboard-state dissoc (.-keyCode event)))

(defn update-game [state]
  (as-> state state
        (cond
          (get @*keyboard-state 37)
          (assoc state :player-pos [(- (first (:player-pos state)) 1) (second (:player-pos state))])

          (get @*keyboard-state 39)
          (assoc state :player-pos [(+ (first (:player-pos state)) 1) (second (:player-pos state))])

          (get @*keyboard-state 40)
          (assoc state :player-pos [(first (:player-pos state)) (+ (second (:player-pos state)) 1)])

          (get @*keyboard-state 38)
          (assoc state :player-pos [(first (:player-pos state)) (- (second (:player-pos state)) 1)])

          :else state)
        (render-text state)))

(defn game-loop [state]
  (as-> state state
    (update-game state)
    (.requestAnimationFrame js/window #(game-loop state))))

(defn startup []
  (as-> {} state
        (init-render-context state)
        (init-player state)
        (game-loop state))
  (set! (.-onkeydown js/document) key-down)
  (set! (.-onkeyup js/document) key-up))

(set! (.-onload js/window) startup)

;; define your app data so that it doesn't get over-written on reload

;;(defonce app-state (atom {:text "Hello world!"}))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

(comment
  (startup)
  s
  (println s)
  )

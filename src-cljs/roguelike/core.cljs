(ns roguelike.core)

(def state {:player-pos [50 50]})
(def keyboard-state {})

(defn render-text []
  (let* [canvas (.getElementById js/document "game-canvas")
         ctx (.getContext canvas "2d")]
    (set! (.-width canvas) (- (.-clientWidth (.-body js/document)) 20))
    (set! (.-height canvas) (- (.-clientHeight (.-body js/document)) 20))
    (set! (.-fillStyle ctx) "#000")
    (.fillRect ctx 0 0 (.-width canvas) (.-height canvas))
    (set! (.-fillStyle ctx) "#F7CE28")
    (set! (.-font ctx) "30px Sans-Serif")
    (set! (.-textBaseline ctx) "Top")
    (.fillText ctx "@" (first (:player-pos state)) (second (:player-pos state)))))

(defn key-down [event]
  (set! keyboard-state (assoc keyboard-state (.-keyCode event) true)))

(defn key-up [event]
  (set! keyboard-state (assoc keyboard-state (.-keyCode event) nil)))

(defn update []
  (when (get keyboard-state 37)
    (set! state {:player-pos [(- (first (:player-pos state)) 1) (second (:player-pos state))]}))
  (when (get keyboard-state 39)
    (set! state {:player-pos [(+ (first (:player-pos state)) 1) (second (:player-pos state))]}))
  (when (get keyboard-state 40)
    (set! state {:player-pos [(first (:player-pos state)) (+ (second (:player-pos state)) 1)]}))
  (when (get keyboard-state 38)
    (set! state {:player-pos [(first (:player-pos state)) (- (second (:player-pos state)) 1)]}))
  (render-text))

(defn startup []
  (set! (.-onkeydown js/document) key-down)
  (set! (.-onkeyup js/document) key-up)
  (.setInterval js/window update (/ 1000 30)))

(startup)

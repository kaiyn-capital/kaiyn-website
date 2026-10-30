# 供給與需求 / Supply and Demand

>   我們知道，機構在市場中的一舉一動會大幅影響市場走向。因此我們可以嘗試在圖表上尋找機構的足跡，跟隨機構的進場點位獲取利潤。



## 訂單塊 / Order Block （OB）

Order Block (OB) 是指市場中機構資金或大資金玩家大規模下單的區域。這些區域通常標誌著市場價格的關鍵轉折點或延續點，因為機構投資者的資金量龐大，價格往往會在這些區域附近形成支撐或阻力。在圖表中尋找 OB 的方式如下：
-   當價格創造出一個明顯的 Swing Point 後，價格往往會進行反轉並出現大幅度的 Displacement。
-   此時我們可以標註出與價格傳遞方向相反的最後一根K線。
-   此時這根 K 線所形成的區間就是我們想找的 Order Block。

![Order Block](/tutorial/ict-smc/img/04.%20Supply%20and%20Demand/Order%20Block.png)

>   圖中標記了每一根 OB 和它們所對應的價格傳遞方向。簡單來說 OB 就是在價格移動後找出它的最後一根反向K線，那根K線就是我們要的 OB。
-   看跌的 OB 可以被視作供給（Supply）區間，看漲的 OB 可以被視作需求（Demand）區間。
-   OB 的畫法有很多種，有些人只會將 OB 的實體部分（不包含引線） 視作 OB，有些人則是將反向的連續 K 線都視作一整塊 OB。其實沒有絕對的對錯，重點還是看價格回到 OB 時的價格行為。
-   OB 的中線稱為 Mean Thershold（MT）。

>   就我個人而言，多數時候我只會將實體部分視作訂單塊的有效區間，除非實體過小或者價格回到訂單塊引線區域時出現強力的反彈。 



訂單塊的形成原理如下：由於價格大幅移動時，我們可以視作聰明錢在此處介入市場。因此我們可以將價格大幅移動前的反向K線視作聰明錢進場前的操縱行為，目的是將價格移動到反向，取得一個相對便宜的籌碼，再將主要部位介入市場。因此我們可以將 OB 視為聰明錢進場時留下的足跡，當價格回到 OB 時，聰明錢會試圖在此處將未成交的訂單補齊，再次促使價格移動。

>   價格尊重 OB 且再次往反方向移動的行為稱為緩解（Mitigation）。



雖然 OB 很好找，看起來也很好用，但一個真正高效力的 OB 形成時應該滿足以下三個條件：
-   完成 Liquidity Sweep：聰明錢進場前操縱價格的表現。
-   OB 形成後，出現大幅度的 Displacement，並且最好帶有 FVG：聰明錢確實介入市場的表現。
-   OB 形成後的 Displacement 最好同時完成 MSS：聰明錢確實介入市場的表現。

![The Real Order Block](/tutorial/ict-smc/img/04.%20Supply%20and%20Demand/The%20Real%20Order%20Block.png)

>   高效力 OB 範例。



## 破壞塊 / Breaker Block（BB）

當我們看到一個 OB 形成且成功出現 MSS，但之後這個 OB 卻不被尊重，且價格直接擊穿 OB 時，此處的訂單流向會發生反轉（類似 FVG 和 IFVG的關係）。看漲的 OB 將在之後轉為看跌 OB，看跌 OB 將在之後轉為看漲 OB。



![Breaker Block](/tutorial/ict-smc/img/04.%20Supply%20and%20Demand/Breaker%20Block.png)



破壞塊的形成原理如下：
-   當一個訂單塊出現，價格也隨即完成 MSS 時，如果這個 OB 沒有被尊重，意味著此時這段價格傳遞實際上是一段**「假的價格傳遞」**，目的在於誘騙投機資金跟隨趨勢的延續進場以便聰明錢進行 Order Paring。
-   當價格破壞掉這個 OB 時，實際上此時出現的才是真正的價格傳遞方向。而當聰明錢引導價格走出真正的傳遞方向後，聰明錢需要**將前期誘騙投機資金所花費的成本收回**。
-   因此價格會在走出真正的方向後回到破壞塊進行成本回收。
-   此時對投機資金而言是唯一的解套機會，我們也可以在聰明錢回收成本時進場。



## 緩解塊 / Mitigation Block（MB）

緩解塊的結構及原理和破壞塊極為類似，其區別在於破壞塊是由一個基礎的訂單塊經由 MSS 後再被反向吞噬，而緩解塊則是訂單塊形成後沒有 MSS，而是在走出 Failure Swing 後直接被反向吞噬。

>   Failure Swing 指的是在順勢的波段中，未能成功走出 BOS 創造新高/低的行為，可以視作推動價格的力道正在衰減的一種表現。



![Breaker Block vs. Mitigation Block](/tutorial/ict-smc/img/04.%20Supply%20and%20Demand/Breaker%20Block%20vs.%20Mitigation%20Block.png)
-   Mitigation Block 與 Breaker Block 的形成原理相同，其差異只在於 Mitigation Block 被破壞前沒有做出 MSS。
-   破壞塊能使用的地方，同樣都可以用緩解塊作替代（後面講解進場模型時會提到）。但效力方面 Breaker Block 會優於 Mitigation Block。



## 推進塊 / Propulsion Block（PB）

當價格回到訂單塊並且出現反轉，隨即生成一個新的訂單塊時，我們稱之為推進塊（Propulsion Block, PB）。推進塊也被稱為訂單塊中的訂單塊，當一個推進塊出現時，可以理解成聰明錢在此處推動價格繼續前進。



![Propulsion Block](/tutorial/ict-smc/img/04.%20Supply%20and%20Demand/Propulsion%20Block.png)
-   當價格接觸到推進塊時，價格不應該突破推進塊的 MT。
-   當價格接觸到推進塊時，價格應該迅速離開推進塊。



## 拒絕塊 / Rejection Block（RB）

當價格在接觸到關鍵水平（Key Level）時，如果價格此時收出長針，則我們會稱這個動作為拒絕（Rejection），表明此時價格離開此處的意圖極為強烈。這根針的引線部位則被稱為拒絕塊（Rejection Block）。



![Rejection Block](/tutorial/ict-smc/img/04.%20Supply%20and%20Demand/Rejection%20Block.png)



## 重奪塊 / Reclaimed Block

在前面我們提到過，訂單塊是聰明錢介入市場進行買入 / 賣出的痕跡。當市場結構出現反轉時，曾經用來買入的訂單塊可能會被拿來賣出，曾經用來賣出的訂單塊可能會被拿來買入。此時，我們將這種訂單塊稱為重奪塊（Reclaimed Block）。



![Reclaimed Block](/tutorial/ict-smc/img/04.%20Supply%20and%20Demand/Reclaimed%20Block.png)

>   如果要更深入解釋 Reclaimed Block 的原理，則必須提及 MMXM（造市商模型）的概念。因此這邊如果有疑惑是正常的，關於 MMXM 的概念會在後續的篇幅中深入解釋。

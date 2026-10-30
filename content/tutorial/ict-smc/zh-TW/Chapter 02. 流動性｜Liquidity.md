# 流動性 / Liquidity

>   在介紹 ICT / SMC 時，我們提到過流動性。價格只會以流動性和失衡區作為目標進行位移，這一章節我們要來深入探討流動性。



機構資金在進場時需要進行大量的訂單匹配（Order Pairing），所以並不是圖表上的所有價格都可以作為機構進場的成本價。機構在進場時需要依靠大量的流動性（Liquidity），以下幾個位置是 Liquidity 可能存在的地方。
-   波段高點（Swing High） / 波段低點（Swing Low）
-   等高點（Equal High, EQH）/ 等低點（Equal Low, EQL）



## 辨識流動性

### 買方流動性 / Buyside Liquidity (BSL)

-   當一個明確的高點被突破時，激進的投機資金會認為此時價格即將離開區間，並展開大幅上漲。
-   所以當價格發生突破時，會出現大量的買入訂單，且前期的空單停損會被觸發（買入平倉），提供 Smart Money 進行 Order Paring 所需的 Liquidity。
-   Smart Money 會在此處和投機資金交換籌碼，利用投機資金的買入訂單進行賣出，完成空單資金進場。
-   此時，我們將投機資金的追多買入訂單稱為***買方流動性（Buyside Liquidity, BSL）***。



### 賣方流動性 / Sellside Liquidity (SSL)

-   當一個明確的低點被跌破時，激進的投機資金會認為此時價格即將離開區間，並展開大幅下跌。
-   所以當價格發生跌破時，會出現大量的買入訂單，且前期的多單停損會被觸發（賣出平倉），提供 Smart Money 進行 Order Paring 所需的 Liquidity。
-   Smart Money 會在此處和投機資金交換籌碼，利用投機資金的賣出訂單進行買入，完成多單資金進場。
-   此時，我們將投機資金的追空買入訂單稱為***賣方流動性（Sellside Liquidity, SSL）***。



### 波段高 / 低點（Swing High / Swing Low）

-   Swing High 指的是圖表中明確的高點。
-   此處通常是投機資金放置停損的位置，會存在 Liquidity。
-   當一個明確的 Swing High 被突破時，我們可以關注此時價格是否尊重這個高點的 BSL。
-   當一個明確的 Swing Low 被跌破時，我們可以關注此時價格是否尊重這個低點的 SSL。
-   _**請勿在價格發生突破 / 跌破時直接追，因為你不能確定他是否會被尊重。**_



### 等高點 / 等低點（Equal High, EQH / Equal Low, EQL）

-   當兩個以上 Swing High / Swing Low 重合時，我們可以稱他為 EQH / EQL。
-   和 Swing High / Swing Low 一樣，會存在 BSL / SSL。
-   和 Swing High / Swing Low 的區別在於這部分的流動性是**被驗證過的**，效力會更強一點。
-   _**請勿在價格發生突破 / 跌破時直接追，因為你不能確定他是否會被尊重。**_



![Equal High and Equal Low](/tutorial/ict-smc/img/02.%20Liquidity/Equal%20High%20and%20Equal%20Low.png)



## 流動性清掃 / Liquidity Sweep

>   別名：
>
> -   Stop Loss Hunt (SH / SLH)：停損獵殺。
> -   Liquidity Grab (Grab)：流動性搶奪。
> -   Liquidity Raid (Raid)：流動性襲擊。
> -   Swing Failure Pattern (SFP)：失敗擺動型態。
> -   Fu：我也不知道這是啥，反正意思都一樣。
-   Liquidity Sweep 指的是價格對 Liquidity 進行突破後快速收回的行為。
-   當價格進行突破後，聰明錢會和投機資金完成 Order Pairing，雙方籌碼進行交換，隨即反轉行情。
-   Liquidity Sweep 是每一段多頭 or 空頭結構的**起點**。



![Liquidity Sweep](/tutorial/ict-smc/img/02.%20Liquidity/Liquidity%20Sweep.png)



## 流動性運行與價格傳遞 / Liquidity Run and Price Delivery

當價格掠奪反向流動性後，會開始進行價格傳遞。這個行為我們稱之為**流動性運行（Liquidity Run）**。
-   **低阻力流動性運行 / Low Resistance Liquidity Run (LRLR)**

當價格在傳遞的過程中十分順暢，遇到反向流動性時沒有過多的停留時（阻力低），我們稱這種現象為**低阻力流動性運行 / Low Resistance Liquidity Run (LRLR)**。
-    **高阻力流動性運行 / High Resistance Liquidity Run (HRLR)**

當價格在傳遞的過程中不太順暢，多數時間處在震盪狀態（阻力強），我們稱這種現象為**高阻力流動性運行 / High Resistance Liquidity Run (HRLR)**，這表明此時的價格傳遞並不是很強勢。

>   當我們看見 HRLR 時，我們可以預期價格在反轉後出現強勢的單方向價格傳遞，將價格在 HRLR 產生的阻力輕鬆突破並走出LRLR。



![HRLR and LRLR](/tutorial/ict-smc/img/02.%20Liquidity/HRLR%20and%20LRLR.png)



### 傳遞狀態改變 / Change in State of Delivery（CISD）

當價格完成 Liquidity Sweep 之後，如果消化流動性的連續K線之收盤價被吞噬，則此時我們可以認為 Price Delivery 的方向即將發生了改變，這個行為我們稱為 Change in State of Delivery（CISD）。與 MSS 類似，CISD 也是可以用來判斷反轉的價格行為。



![Change in State of Delivery](/tutorial/ict-smc/img/02.%20Liquidity/Change%20in%20State%20of%20Delivery.png)

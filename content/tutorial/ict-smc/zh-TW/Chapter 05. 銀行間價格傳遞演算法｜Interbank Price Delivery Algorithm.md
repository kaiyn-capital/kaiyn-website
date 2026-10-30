# 銀行間價格傳遞演算法 / IPDA

## 前言

>   前面的章節所講解的都是 ICT/SMC 中最基礎的元素。從這個章節開始，我們將進入更核心、更著重於觀念上的理論。這些理論描述的部分內容可能很難在圖表上有一個標準化的形式，但對你的讀圖思維框架會起到非常重要的影響。如果你還沒將前面的內容搞懂，請務必先好好複習，循序漸進地學習。



價格的移動不依賴於支撐與阻力，所謂支撐與阻力只是市場的假象。市場中價格的所有行為都由一隻看不見的手在背後進行操縱，而這隻「手」被稱為 **_銀行間價格傳遞演算法（Interbank Price Delivery Algorithm, IPDA）_**。



價格在傳遞時存在四種狀態，分別為：
-   **Expansion（擴張）**
-   **Retracement（回撤）**
-   **Consolidation（整理）**
-   **Reversal（反轉）**

價格在傳遞時有且僅有這四種狀態，且會在這四種狀態間轉移，每種狀態有其各自的特徵，且狀態轉移時通常伴隨著對關鍵價位或區間的接觸。



![IPDA State](/tutorial/ict-smc/img/05.%20Interbank%20Price%20Delivery%20Algorithm/IPDA%20State.png)

>   附圖為四種狀態的轉換關係。



## Consolidation / 整理

-   **Consolidation 是指價格在明確的交易區間（通道、箱體、三角等）內波動。**
-   **表明價格沒有大幅上漲或下跌的意願。**
-   **所有的行情都從震盪開啟。**
-   **關注震盪區間的 EQ。**
-   **在價格抵達 Discount 或者 SSL 被掠奪時尋找多單機會，並在價格抵達 Premium 或者 BSL 被掠奪時尋找空單機會。**



![Consolidation](/tutorial/ict-smc/img/05.%20Interbank%20Price%20Delivery%20Algorithm/Consolidation.png)

>   附圖為標準的 Consolidation。
-   我們可以在 Premium（EQ上方）或 BSL 被掠奪時尋找空單機會，在 Discount（EQ下方）或 SSL 被掠奪時尋找多單機會，跟隨造市商 Accumulation 的行為進行獲利。

-   同時也可以發現 Consolidation range 被跌破時價格出現了大幅度的 Displacement，可以視為一個典型的 Expansion。



## Expansion / 擴張

-   **Expansion 指的是價格快速移動。**
-   **當價格出現擴張時，代表造市商期望將該標的重新進行定價。**
-   **Expansion 是 Price Delivery 最主要的部分。**
-   **我們會期望 MSS 和 FVG 伴隨 Expansion 一同出現。**
-   **留意 EQ 或 EQ 附近的 OB 做進場。**



![Consolidation](/tutorial/ict-smc/img/05.%20Interbank%20Price%20Delivery%20Algorithm/Expansion.png)

>   附圖和前一張圖是同一張，為標準的 Consolidation 接續 Expansion。
-   當價格接觸到 EQ ，或者尊重 EQ 附近的 OB 時，我們可以利用 EQ 附近的 OB 進場
-   參與 Expansion 實際上是跟隨造市商進行 Price Delivery 的行為進行獲利。



## Retracement / 回撤

-   **Retracement 指是價格回到最近創建的價格區間內。**
-   **當價格回到近期價格區間時，表明造市商期望將價格重新定價至無法有效交易的公允價值缺口（FVG）。**
-   **關注 FVG 進行進場。**
-   **當價格回填 FVG 時，我們可以利用行情對 FVG 的填補程度判斷當前行情的強勢程度。**



![Retracement](/tutorial/ict-smc/img/05.%20Interbank%20Price%20Delivery%20Algorithm/Retracement.png)

>   附圖和前兩張圖是同一張，是一個典型的 Retracement。這裡可以看到價格在經歷擴張後展開低位震盪，隨即回撤至 FVG。
-   我們可以在尊重 FVG 時，利用 FVG 進場。
-   在 Retracement 結束時參與市場實際上是跟隨造市商延續 Price Delivery 的行為進行獲利。



## Reversal / 反轉

-   **反轉是指當前趨勢結束並且開始往反方向移動。**
-   **當價格出現反轉時，表明造市商已經取得足夠的流動性，期望將價格往反方向移動尋求新的套利空間。**
-   **關注 HTF POI 和 MSS/CISD。**



![image-20240803055020917](/tutorial/ict-smc/img/05.%20Interbank%20Price%20Delivery%20Algorithm/Reversal.png)

>   附圖和前三張圖是同一張，為標準的 Reversal 結構。價格在掠奪低點的 BSL （同時觸及日線圖上的 Rejection）後向上進行拉升出現 MSS，後續完全否定前方的下跌趨勢，展開新一輪的上漲。
-   我們可以利用結構的變化判斷 Reversal 是否發生。
-   在確認 Reversal 出現時參與市場實際上是在跟隨期望 Price Delivery 的價格反轉。
-   不要在價格未抵達 HTF POI 時賭行情的反轉。



## 回顧

![image-20240803055020917](/tutorial/ict-smc/img/05.%20Interbank%20Price%20Delivery%20Algorithm/IPDA-example.png)

這裡我們回顧一下整張圖，觀察 IPDA 在進行 Price Delivery 時的細節。
1.   首先價格在區間開啟 Consolidation，在區間內來回進行波動進行吸籌。
2.   價格在最後一次觸及 EQ 處的 OB 後開始 Expansion。
3.   隨即再一次開始 Consolidation。
4.   觸及 EQ 後開始 Retracement。
5.   Retracement 至 Expansion 時產生的 FVG，隨即再次下跌並進入再一次的 Consolidation。
6.   最後將掠奪 H4 流動性並將價格傳遞至日線 POI。
7.   進行 Reversal並產生 MSS。
8.   開啟新一輪傳遞。

# 失衡 / Imbalance

>   我們提到過價格只會以流動性和失衡區作為目標進行位移，上一個章節我們詳細解釋了流動性，這裡我們要解釋失衡的概念。
-   當價格出現大幅度的位移（Displacement）時，我們可以認為此時聰明錢挾帶大量資金介入市場。
-   大量資金進場時，由於價格出現大幅度的位移，會導致一部分限價掛單無法有效成交（Inefficiency），導致特定區域出現流動性流動性失衡（Inbalance）。
-   當流動性出現失衡時，聰明錢會引導價格回到失衡區域將遺留的訂單成交（Rebalance）。
-   當失衡區的流動性被 Rebalance 後，價格將延續原有的傳遞方向繼續運行。



這段敘述充分解釋了 ICT/SMC 中「價格只以流動性和失衡區作為目標進行位移」的觀念。

如果聰明錢想要獲得利潤，那麼只有兩個動作要做：
1.  掠奪投機資金的停損訂單。
2.  成交自己未能成交的訂單。



## 公允價值缺口 / Fair Value Gap（FVG）

當三根連續的K線出現時，如果第一根K線和第三根K線的引線沒有完全重合，此時我們稱中間區域為**公允價值缺口（Fair Value Gap, FVG）**，這表明了價格在這個區間內存在失衡，演算法會在未來的某一個時刻引導價格回到此處進行 Rebalance。



>   補充：我們在圖表上會以（＋）代表看漲，（－）代表看跌。
>
>   別名：
>
> -   Imbalance (IMB)：失衡
> -   Inefficiency：低效
> -   Buyside Imbalance Sellside Inefficiency (BISI)：買方失衡賣方低效，即 +FVG。
> -   Sellside Imbalance Buyside inefficiency (SIBI)：賣方失衡買方低效，即 -FVG。
> -   Liquidity Void (LV)：流動性缺失。
> -   Liquidity Gap (LG)：流動性缺口。



![Fair Value Gap](/tutorial/ict-smc/img/03.%20Imbalance/Fair%20Value%20Gap.png)

>   FVG 的中線稱為 Consequent Encroachment（CE）。

## 反向公允價值缺口 / Inversion Fair Value Gap（IFVG）

當價格經過 FVG 時直接進行吞噬，不對這個 FVG 進行 Rebalance。則此處的訂單流向會發生反轉，此時我們稱這個被吞噬的 FVG 為

**反向公允價值缺口（Inversion Fair Value Gap）**。一般來說 IFVG 的效力會比 FVG 更強。



![Inversion Fair Value Gap](/tutorial/ict-smc/img/03.%20Imbalance/Inversion%20Fair%20Value%20Gap.png)

## 平衡價格區間 / Balance Price Range（BPR）

當兩個反向的 FVG 重疊時，我們將重疊區域稱作平衡價格區間（Balance Price Range, BPR）。價格在進入 BPR 時應該快速做出反應並且出現強烈的 Displacement。

![Balance Price Range](/tutorial/ict-smc/img/03.%20Imbalance/Balance%20Price%20Range.png)



## Institutional Order Flow Entry Drill (IOFED)

當行情極度強勢時，可能會存在 FVG 不被有效填補的情況，我們稱為 IOFED。IOFED 的出現必須滿足以下兩個條件：
-   行情出現大幅度 Displacement 並形成 FVG。
-   價格快速回填 FVG，且**回填幅度不超過 FVG 的 50%**。



當這種價格行為出現時，我們稱其為 IOFED，意味著此時的價格傳遞**極度強勢**。

>   在某些比較嚴格的定義中，會認為必須在 FVG 形成後的下一根K線立即 Rebalance 並收針才能被稱為 IOFED。



![Institutional Order Flow Entry Drill](/tutorial/ict-smc/img/03.%20Imbalance/Institutional%20Order%20Flow%20Entry%20Drill.png)



## 新週開盤缺口 / New Week Open Gap（NWOG）

在股市、期貨交易市場中，週末一般是處於休市狀態的，因此週末的圖表會是靜止的。所以一但週末出現價格波動，圖表會無法及時顯示，造成週一的開盤價和前一週週五的收盤價出現落差。此時這個落差（也稱跳空）我們稱之為新週開盤缺口（New Week Open Gap）。

當 NWOG 出現時，此處的掛單同樣處於未成交狀態，因此也會存在失衡的情況。未來價格會傾向對 NWOG 進行 Rebalance。

由於加密貨幣市場是 24/7 處於開盤狀態的，這個現象在加密貨幣市場比較不常出現。但我們仍然可以透過觀察 CME 期貨缺口得到類似的效果。

> -   CME 期貨圖表可以透過在 TradingView 搜尋 BTC1!（比特幣期貨）、ETH1!（以太幣期貨）的方式查詢。
> -   類似的概念還有新日開盤缺口（New Day Open Gap, NDOG），但在加密貨幣市場中基本上用不到。

![New Week Open Gap](/tutorial/ict-smc/img/03.%20Imbalance/New%20Week%20Open%20Gap.png)

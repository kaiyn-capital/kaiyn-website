# 交易區間 / Dealing Range

只要你能找到一個 Swing High 和 Swing Low，那這兩個點之間的價格就能被稱為一個「區間」。這對 Swing High 和 Swing Low 可以是任意兩個點，當然，它們最好是「有意義的」，特別是出現 MSS 後的 Swing Point。以下是幾個我們在交易中時常用到的 Swing Point：
-   上週高點 (Previous Week High, PWH)、上週低點（Previous Week Low）
-   昨日高點 (Previous Day High, PDH)、昨日低點 (Previous Day Low, PDL)
-   週一高點 (Monday High)、週一低點 (Monday Low)
-   亞洲時段高點 (Asia High)、亞洲時段低點 (Asia Low)

>   其實開盤價也可以作為交易 Setup 的一部分，這點會在之後 PO3 和 Time and Price 兩個章節詳細說明。



除了以上提到的幾個 Swing Point，任何你找得到的波段高低點都可以作為你的區間 Setup。還是那句話，只要你知道自己在幹嘛，你想怎麼做都可以。



![Range](/tutorial/ict-smc/img/06.%20Range/Range.png)



## 溢價折價區陣列矩陣 / Premium and Discount Array Matrix（PDA Matrix）

>   這個名字看上去挺唬人，但其實就是整合一下前面的東西，看完你就能理解了。



### 溢價折價區 / Premium and Discount (P/D)

當我們定義好 Range 後，我們可以使用斐波那契測量出區間中線（0.5），如果你有認真觀看我們前面的教學，你會知道區間的 0.5 那條線我們稱作 Equilibrium (EQ)。在 ICT/SMC 中，我們會將區間 EQ 以上的部分視作溢價區（Premium），區間 EQ 以下稱作折價區（Discount）。

當價格運行至 Premium 時，我們可以認定價格當前處於超買狀態，此時我們會傾向於尋找做空（short）機會；而當價格運行至 Discount 時，可以認定價格當前處於超買狀態，此時我們會傾向於尋找做多（long）機會。

![Premium and Discount](/tutorial/ict-smc/img/06.%20Range/Premium%20and%20Discount.png)

此時，我們可以搭配前面學到的所有 FVG、OB、Liquidity，將它們和 Premium/Discount 整合在一起，會得到如下矩陣/陣列：

![Premium and Discount](/tutorial/ict-smc/img/06.%20Range/PDA%20Matrix.png)

>   我們會把 OB、FVG、Liquidity 這些可能提供反向力道的元素統稱為 PDA。

這張圖不需要記，你只需要知道當你拉出一個區間時，區間內會存在大量 PDA 由上到下排列，擁有這個概念就足夠了。PDA的概念十分重要，在接下來的章節中會被反覆提起。



## 內部流動性 & 外部流動性 / Internal Range Liquidity (IRL) & External Range Liquidity (ERL)

-   **外部流動性 / External Range Liquidity (ERL)**：指舊的高點或低點（old high、old low），可以簡單理解成 Liquidity。
-   **內部流動性 / Internal Range Liquidity (IRL)**：指價格傳遞時所創造的各種指 OB、FVG。

-   **價格只會在 ERL 和 IRL 之間移動**，當價格在執行單方向傳遞時，會在拿到 ERL 後執行 Retracement，直到 IRL 被 rebalance/mitigate，這個行為稱為 **ERL to IRL**；隨後價格會立即反轉並繼續向原方向傳遞，嘗試拿掉 ERL，這個行為稱為 **IRL to ERL**。

-   **Draw on Liquidity (DOL)**：
    -   因此，當價格在拿掉 ERL 之後，你會期望價格往回拿掉 IRL，這時你會關注圖表上的某個 IRL，你會認為該 IRL 存在對價格的吸引力，你期望價格回到那個 IRL；同理，當價格填補完 IRL 之後，你會期望某個 ERL 存在對價格的吸引力，你期望價格傳遞過去拿掉那個 ERL 延續價格傳遞。

    -   此時，那個對價格存在吸引力的 PDA 就會是你認為的 DOL，DOL 應該是你在交易時最關注的元素，因為理論上價格對你的 DOL 的反應會直接影響你的所有決策。

    > -   如果你經常看我畫圖，你幾乎不會在我的圖表上看到我標記出 DOL。但 DOL 的概念非常重要，你可以不把它畫出來，但這個概念你必須有。因為它在很多時候 DOL 會直接決定你的 Bias，這在後面會不斷地提及。
        > - 有一個類似的概念叫**感興趣的點位（Point of Interest, POI）**，基本上也是指你所關注的 PDA，在此不過多贅述。

-   **機構訂單流（Institutional Order Flow, IOF）**：當價格在進行單方向傳遞時，同向的 PDA 會不斷地被尊重，反向的 PDA 會不斷地被突破。

![ERL & IRL](/tutorial/ict-smc/img/06.%20Range/ERL%20%26%20IRL.png)

>   標準的機構訂單流和 ERL / IRL 的實例。



## 最佳進場區間 / Optimal Trade Entry（OTE）

-   最佳進場區間（Optimal Trade Entry, OTE）是 ICT 中一種常見的輔助進場工具。它不能單獨使用，必須搭配前面提及的概念和元素。
-   OTE 指的是斐波那契 0.62 - 0.79 區間，其 EQ 為 0.705。當你在這個區間做進場時，通常可以拿到一個極為優秀的盈虧比。
-   OTE 也可以幫助你尋找你的出場目標位，當然，這一切都必須搭配 DOL、PDA 和前面提及的各種概念。
-   **最後，切記不要在脫離其他概念的場景下使用 OTE，它只是一個輔助工具。**



![OTE](/tutorial/ict-smc/img/06.%20Range/OTE.png)
-   **1**：波段起點。
-   **0**：波段終點（Retracement 開始的 Swing Point）。
-   **0.5**：波段區間的 EQ。
-   **0.62 - 0.79**：**最佳進場區間，你可以關注此處的 PDA 做進場**。
-   **0.705**：**最佳進場區間的 EQ，你可以關注此處的 PDA 作進場**。
-   -0.27：你可以尋找此處的 PDA 作為你的第一目標位（TP1）。
-   -0.62：你可以尋找此處的 PDA 作為你的第二目標位（TP2）。
-   -1：你可以尋找此處的 PDA 作為你的第三目標位（TP3）。

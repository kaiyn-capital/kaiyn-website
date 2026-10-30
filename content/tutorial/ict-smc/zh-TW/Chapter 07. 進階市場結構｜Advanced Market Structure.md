# 進階市場結構 / Advanced Market Structure

這個章節的內容可能比較硬核，當中提到的所有概念都沒有一個圖表上的定式，但請務必努力嘗試理解，這個章節的內容是我認為的 ICT/SMC 精髓所在。當你完全理解這個章節的內容，你會對市場結構和價格傳遞有非常深刻的理解。



## 由上至下的分析 / Top-Down Analysis

當我們專注於日內交易時，我們很常會將精力專注在十五分鐘級別圖表（M15）上，但如果我們此時想要獲得更宏觀的價格行為，僅僅關注於 M15 圖表上肯定是不夠的，我們會往更大級別的圖表（例如四小時級別圖表）上去做分析；而如果我們此時想解讀更細節的價格行為，顯然 M15 圖表也無法滿足我們，我們會去查看更小級別的圖表（例如一分鐘級別圖表）。 ICT/SMC 對各種時間級別的圖表關係做了定義，規範化了每一個時間級別所對應的高時框圖表及低時框圖表，以及在不同時框下你應該專注於做什麼。

>   名詞解釋：
>
> -   M15：這裡的 "M" 指的是 "Minute"，加上"15"所指代的就是十五分鐘級別圖表。我們在簡寫時間級別時會以 "字母＋數字"來指代該時間級別。例如"H4"指的就是四小時（Hour-4），"W1"指的就是週線圖（Week-1）。
> -   LTF/MTF/HTF：低時框（Low Time Frame）／中時框（Middle Time Frame）／高時框（High Time Frame）



**Time Frame Alignment**

|                              |   HTF   | MTF | LTF |
| :--------------------------: | :-----: | :-: | :-: |
|  現貨交易（Position Trade）  | Monthly | W1  | D1  |
|   波段交易（Swing Trade）    |   W1    | D1  | H4  |
|  日內交易（Intraday Trade）  |   D1    | H4  | M15 |
| 剝頭皮交易（Scalping Trade） |   H4    | M15 | M1  |
-   **HTF**：你應該在此檢視市場結構，透過 ERL/IRL 尋找你的 DOL，建立你的 Bias。
-   **MTF**：你應該在此尋找交易機會。
-   **LTF**：你應該在此細化你的進場。



>   其實所謂的高中低時框關係並沒有定義的如此嚴格，只要你喜歡，你也可以在 H1 找交易機會並且在 M3 進場，但這必須建立在你對不同時框間的關係足夠了解的前提下。如果你對時空級別沒有一個清晰的認知，那就乖乖按上面的表格來，不要幹出在月線圖找Bias然後直接跳到一分線進場這種傻事。



## Power of Three (PO3)

### 結構

PO3 是 ICT/SMC 中十分核心的理念，本質上你依靠 ICT/SMC 作出的所有交易都是 PO3。如果你問我 ICT/SMC 中最重要的概念是什麼，那我想我的答案就是 PO3。PO3 指的是價格的特定波動模式，主要分為以下三個階段：
1.   **積累階段（Accumulation Phase）**：市場進入一個偏向 Consolidation 的階段，聰明錢開始在特定的價格（不一定是區間）附近積累籌碼。此時的價格行為會偏向穩定，有時可能會創造出清晰的 Swing Point / Liquidity。
2.   **操縱階段（Manipulation Phase）**：當Accumulation Phase 結束後，聰明錢會將市場往反方向操縱（假動作），掠奪掉Accumulation Phase 時建立的Swing Point / Liquidity，其概念與第一章提到的**流動性掠奪**相同。這個階段的價格傳遞目的是為了誘騙投機資金追隨行情從而完成 Order Paring。
3.   **派發階段（Distribution Phase）**：當市場完成掠奪後，價格會迅速往真實的傳遞方向進行價格傳遞，此時通常會出現明確的 Liquidity Run / Expansion，最終將價格傳遞到 DOL。



![PO3](/tutorial/ict-smc/img/07.%20Advanced%20Market%20Structure/PO3.png)
-   任何存在流動性掠奪的地方本質上都算是 PO3，只要你的交易和流動性掠奪有關，那你就是在對一個 PO3 做交易（或者說你的交易就是在期望市場形成一個完整的PO3 ）。
-   你會期望在市場完成 Manipulation 後進場，並在 Distribution 完成時出場。
-   對一個level 做出流動性掠奪（假突破）後收回該level 之上的行為也稱為**海龜湯（Turtle Soup）**，在流動性掠奪並收回後直接進場交易的行為稱為**海龜湯進場（Turtle Soup Entry）**。
-   負責消化流動性的波段稱為**操縱腳（Manipulation Leg）**。
-   **在交易 PO3 時，你會希望當前時框上的 Manipulation 進入了 HTF DOL；或者換個角度也可以理解成當前時框 Liquidity Sweep 進入 DOL 的行為在 LTF 是個 PO3（這是你在進場前最重要的 checkpoint，任何進場都需要搭配 DOL）。**



### 標準差 / Standard Deviation (STDV)

-   標準差（Standard Deviation, STDV）是 ICT 中一種常見的輔助進場工具。它不能單獨使用，必須搭配前面提及的概念和元素。
-   STDV 也可以幫助你尋找你的出場目標位，當然，這一切都必須搭配 PO3、 DOL、PDA 和前面提及的各種概念。
-   **最後，切記不要在脫離其他概念的場景下使用 STDV，它只是一個輔助工具。**



在 Manipulation Leg 上使用 STDV 可以幫助我們找出 PO3 的目標價位。以下是使用 STDV 輔助交易 PO3 的示意圖。

![STDV](/tutorial/ict-smc/img/07.%20Advanced%20Market%20Structure/STDV.png)

_**Manipulation Leg**_
-   **0**：Manipulation Leg 的起點。

-   **0.5**：Manipulation Leg 的 EQ 。

-   **1**：Manipulation Leg 的終點。

    一段合格的 Manipulation Leg 應該要消化你在 HTF 的 DOL。當你判斷 Manipulation 結束且演算法正要開始執行 Distribution 時，你要在此時去尋找 Manipulation Phase 創造的 PDA 嘗試進行 Turtle Soup。

    正如我們在講解 IPDA 時所提到的，當價格從 Consolidation 轉向 Expansion 時，你會希望在 Consolidation 的 EQ 作進場。因此在做 PO3 進場時最完美的情況會是在 Manipulation Leg 的 EQ 處尋找 PDA 進場。不過當 PO3 完成 Manipulation 時，通常價格會擴張的非常迅速，因此也不一定要強求自己在 0.5 進場。

_**Distribution Phase**_
-   **-1**：Manipulation Leg 的 1:1 。
-   **-2 ~ -2.5（Retracement Range）**：價格傳遞的**回撤區間**。當價格傳遞到這個區間時，有很大的機率會發生回撤，當價格傳遞不夠強勢時也有可能在此處直接反轉。因此當你在交易 PO3 時，你應該考慮在此處尋找 PDA 進行部分停利（或至少設定保護停損/避險）。如果價格沒有在這個區間反轉，那說明此時價格傳遞非常強勢。

-   **-3.5 ~ -4（Reversal Range）**：價格傳遞的**反轉區間**。當價格傳遞到這個區間時，有很大的機率會發生反轉，你應該考慮在此處尋找 PDA 出場所有部位。如果價格突破此處區間，那後面的漲/跌幅也跟你找到的 PO3 沒關係了（有可能是更高時框上的 Distribution 導致價格傳遞方向沒有在此處反轉）。

_**STDV 進場步驟**_
1.   找出 Manipulation Leg，收回時做進場（turtle soup）或者找 Manipulation 創造的 PDA 進場，最好是進在 EQ，但沒有的話也不用強求。
2.   拉出 STDV，去 **-2 ~ -2.5** 的找 PDA 部分停利 or 全出。
3.   如果價格有到 **-3.5 ~ -4** 的 PDA 那最好全出。

_**交易實例**_

![PO3 + STDV](/tutorial/ict-smc/img/07.%20Advanced%20Market%20Structure/PO3%20%2B%20STDV.png)



### OHLC & OLHC

實際上每一根 K 線在 LTF 都是一個完整的 PO3 結構（但不一定會提供你良好的交易機會），這也是所謂分型（Fractal）的概念。
-   當一根 K 線先向開盤價（Open）上方進行掠奪並創造高點（High），隨後向下派發創造低點（Low），我們就可以稱這個結構為 OHLC（Open/High/Low/Close）。
-   當一根 K 線先向開盤價（Open）下方進行掠奪並創造低點（Low），隨後向上派發創造高點（High），我們就可以稱這個結構為 OLHC (Open/Low/High/Close)。



![OHLC & OLHC](/tutorial/ict-smc/img/07.%20Advanced%20Market%20Structure/OHLC%20%26%20OLHC.png)
-   因此，你在交易 PO3 時實際上在 HTF 上看來你是在引線（Wick）處進場，如果你成功在 Distribution 完成時出場，那麼你的出場位置會在另一端的引線處。
-   結合這個概念，你會發現所謂的 "Bias"，不只是單純地認為接下來的波段要漲還是跌。**你的 Bias 實際上意味著你認為 HTF 上的下一根 K 線應該收成陰線（Bearish Candlestick）還是陽線（Bullish Candlestick）**；你的 DOL 實際上意味著你認為 HTF 上的下一根 K 線的引線應該會插到哪裡。
-   這也是我們在本章節開頭會先提及 Top-Down Analysis 的原因，正確的應用 HTF、LTF、分型等概念會讓你的交易系統更全面。如果你在交易時不去思考 HTF 正在發生什麼事，那你的視角很容易受限於當前級別結構，有可能在 HTF 上正在發生回撤，但你在 LTF 上卻認為這是一段反轉，從而錯失 HTF 上後續的趨勢延續。

### 日內PO3 / Daily PO3

從一開始我們就知道，ICT/SMC 本質上是在根據流動性進行交易（Liquidity Trade）。而一天當中，不同的交易時段實際上存在流動性差異。這也是 ICT/SMC 的應用場景普遍在日內交易以下的原因，因為我們可以透過一天當中的流動性變動進行獲利。在日內交易中，我們會經歷三個交易時段，這三個交易時段構成了一整天的 PO3 。



_**亞洲交易時段（Asia Session）**_
-   **對應著一天當中的 Accumulaton。**
-   由香港、東京等地的機構主導。
-   時段：08:00 ~ 14:00 (UTC+8)
-   亞洲殺戮區（Asia Killzone）: 08:00 ~ 10:00(UTC+8)
-   通常我們不會想在 Asia Session 進行交易，但我們會關注這段時間建立的 Accumulation 區間（Asia Range），並關注區間後續被掠奪的情況。

_**倫敦交易時段（London Session）**_
-   **對應著一天當中的 Manipulation**。
-   由以倫敦為首的歐洲機構主導。
-   時段：
    -   夏令時：15:00 ~ 23:00 (UTC+8)。
    -   冬令時：16:00 ~ 24:00 (UTC+8)。
-   **倫敦開盤殺戮區（London Open Killzone）**：
    -   夏令時：15:00 ~ 18:00 (UTC+8)。
    -   冬令時：16:00 ~ 19:00 (UTC+8)。
-   **倫敦收盤殺戮區（London Close Killzone）**：
    -   夏令時：21:00 ~ 23:00 (UTC+8)。
    -   冬令時：21:00 ~ 23:00 (UTC+8)。
-   我們會在 London Session 關注 Asia Range 的掠奪情況。通常當時間從 Asia Session 進入 London Session 時，交易波動會開始變大，London Killzone 指的是開盤後的兩個小時和收盤前的兩個小時，此時交易量會達到頂峰，流動性充足，容易創造一天當中的最高點和最低點。
-   London Session 的市場會充斥著各種假動作（Judas Swing），根據我的經驗，在倫敦盤進行的交易最好傾向保守。

_**紐約交易時段（New York Killzone）**_
-   **對應著一天當中的 Distribution**。
-   由以華爾街為首的美國機構主導。
-   時段：
    -   夏令時：21:30 ~ 04:00 (UTC+8)。
    -   冬令時：22:30 ~ 05:00 (UTC+8)。
-   **紐約殺戮區（New York Killzone）**：
    -   夏令時：21:30 ~ 23:30 (UTC+8)。
    -   冬令時：22:30 ~ 00:30 (UTC+8)。
-   華爾街掌握著世界上最龐大的資金，因此 New York Session 是一天當中交易量/流動性的頂峰。通常 New York Session 在經歷完 London Manipulation 後，會推動價格進行單方面的傳遞，Distribution 完成當天價格的目標位，創造出當日的最高點或最低點。
-   New York Session 的任務是完成當日的 Distribution ，根據我的經驗，如果你在 London Session 或 New York Killzone拿到了一個絕佳的進場位置，可以嘗試在此時完成你的最終停利位。



關於日內 PO3 的內容有個概念就行了。London Session / New York Session 確實是一天當中最適合交易的時段，但在我看來加密貨幣的時區特性是非常混亂的，有時你也會看到 Asia Range 直接走 Expansion 然後接下來震盪一整天。這段內容最多就是讓你在進場時可以取得更多時區方面的共振，借此增強你交易時的信心和完善交易思路。不要簡單的認為你可以單憑這裡的內容，每天都在倫敦盤找到最優進場點一路拿到紐約盤派發頂點。



## 造市商模型 / Market Maker Model（MMXM）

造市商模型（Market Maker Model）指的是造市商執行價格傳遞的基本運作結構，根據買入和賣出分為「造市商買入模型（Market Maker Buy Model, MMBM）」和「造市商賣出模型（Market Maker Sell Model, MMSM）」兩種，MMBM 和 MMSM 我們又會將他們統稱為 MMXM。



MMXM 基本圍繞著以下兩個重點描述價格傳遞：
-   ERL & IRL：價格只會在 ERL (Liquidity) 和 IRL (OB / FVG) 之間傳遞。
-   PO3：價格傳遞會經歷 Accumulation / Manipulation / Distribution 三個階段。

確保你完全理解這兩點，如果還沒理解那就回去複習，還是理解不了就直接來問我。



![MMXM](/tutorial/ict-smc/img/07.%20Advanced%20Market%20Structure/MMXM.jpg)
-   **Original Consolidation**：正如我們在 IPDA 所提到的，所有的價格傳遞都會從 Consolidation 狀態開始。
-   **Low Risk Buy (LRB)、Low Risk Sell (LRS)**：在價格傳遞反轉的初始階段（取得高時框流動性後）提供的交易機會，在此處參與價格傳遞可以獲得優秀的盈虧比。
-   **Accumulation**：PO3 中的積累吸籌階段。
-   **Smart Money Reversal（聰明錢反轉）**：低時框價格傳遞到高時框，取得高時框流動性後發生反轉的行為。
-   **Distribution**：價格在做完 SMR 後向高時框的 ERL 傳遞時經歷的第一次派發，此處主要會派發掉 SMR 後 LRS/LRB 的獲利籌碼。
-   **Re-Distribution（再派發）**：派發掉第一次 Distribution 的剩餘籌碼，並且將價格傳送到 STDV 2~2.5 區間，形成完整的 PO3。



MMXM 沒有固定的形式，附圖的 MMXM 只是示意圖。MMXM 描述的是 HTF IRL to ERL 在 LTF 上的表現形式，所有的 HTF IRL to ERL 都是 LTF MMXM。其核心概念在於**所有低時框的價格行為都服務於高時框，當低時框上的價格運行到高時框上的 PDA 時，所有低時框上的價格傳遞都將反轉成為高時框的流動性**。

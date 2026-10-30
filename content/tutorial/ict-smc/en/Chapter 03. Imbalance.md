# Imbalance

>   We previously mentioned that price only displaces toward liquidity and imbalance areas. In the previous chapter, we explained liquidity in detail. Here, we will explain the concept of imbalance.
-   When price produces a large displacement, we can assume that Smart Money has entered the market with significant capital.
-   When large capital enters the market, the sharp displacement can cause some limit orders to go unfilled, creating inefficiency and liquidity imbalance in a specific price area.
-   When liquidity becomes imbalanced, Smart Money guides price back into the imbalance area to fill the remaining orders. This is called Rebalance.
-   After liquidity in the imbalance area has been rebalanced, price will continue in its original direction of delivery.



This fully explains the ICT/SMC idea that "price only displaces toward liquidity and imbalances."

If Smart Money wants to make a profit, there are only two things it needs to do:
1.  Raid the stop-loss orders of speculative traders.
2.  Fill the orders it failed to fill earlier.



## Fair Value Gap (FVG)

When three consecutive candles appear, and the wick of the first candle does not fully overlap with the wick of the third candle, we call the area between them a **Fair Value Gap (FVG)**. This means there is an imbalance in that price range, and the algorithm may guide price back to that area in the future to rebalance it.



>   Note: On the chart, we use (+) to represent bullish and (-) to represent bearish.
>
>   Also known as:
>
> -   Imbalance (IMB)
> -   Inefficiency
> -   Buyside Imbalance Sellside Inefficiency (BISI): bullish imbalance and sellside inefficiency, meaning +FVG.
> -   Sellside Imbalance Buyside Inefficiency (SIBI): bearish imbalance and buyside inefficiency, meaning -FVG.
> -   Liquidity Void (LV)
> -   Liquidity Gap (LG)



![Fair Value Gap](/tutorial/ict-smc/img/03.%20Imbalance/Fair%20Value%20Gap.png)

>   The midpoint of an FVG is called Consequent Encroachment (CE).

## Inversion Fair Value Gap (IFVG)

When price passes through an FVG and directly engulfs it without rebalancing it, the order flow at that area reverses. We call the engulfed FVG an

**Inversion Fair Value Gap (IFVG)**. Generally speaking, IFVG tends to be stronger than a regular FVG.



![Inversion Fair Value Gap](/tutorial/ict-smc/img/03.%20Imbalance/Inversion%20Fair%20Value%20Gap.png)

## Balance Price Range (BPR)

When two opposing FVGs overlap, the overlapping area is called a Balance Price Range (BPR). When price enters a BPR, it should react quickly and produce strong Displacement.

![Balance Price Range](/tutorial/ict-smc/img/03.%20Imbalance/Balance%20Price%20Range.png)



## Institutional Order Flow Entry Drill (IOFED)

When market conditions are extremely strong, an FVG may not be filled effectively. We call this IOFED. IOFED must satisfy the following two conditions:
-   The market produces a large Displacement and forms an FVG.
-   Price quickly retraces into the FVG, but **the retracement does not exceed 50% of the FVG**.



When this type of price action appears, we call it IOFED. It means that price delivery is **extremely strong**.

>   In some stricter definitions, price must rebalance and reject immediately on the next candle after the FVG forms in order to be considered IOFED.



![Institutional Order Flow Entry Drill](/tutorial/ict-smc/img/03.%20Imbalance/Institutional%20Order%20Flow%20Entry%20Drill.png)



## New Week Open Gap (NWOG)

In stock and futures markets, weekends are generally closed, so charts remain static over the weekend. If price moves during the weekend, the chart cannot display that movement in real time, which creates a gap between Monday's open and the previous Friday's close. We call this gap the New Week Open Gap (NWOG).

When an NWOG appears, the orders in that area are also unfilled, so imbalance exists there as well. Future price will tend to rebalance the NWOG.

Because the crypto market trades 24/7, this phenomenon is relatively uncommon in crypto. However, we can still observe CME futures gaps to get a similar effect.

> -   CME futures charts can be found on TradingView by searching BTC1! for Bitcoin futures or ETH1! for Ether futures.
> -   A similar concept is the New Day Open Gap (NDOG), but it is basically not useful in crypto markets.

![New Week Open Gap](/tutorial/ict-smc/img/03.%20Imbalance/New%20Week%20Open%20Gap.png)

# Dealing Range

As long as you can identify a Swing High and a Swing Low, the price between those two points can be called a "range." This pair of Swing High and Swing Low can be any two points, although ideally they should be meaningful points, especially Swing Points that appear after MSS. The following are several Swing Points we commonly use in trading:
-   Previous Week High (PWH), Previous Week Low (PWL)
-   Previous Day High (PDH), Previous Day Low (PDL)
-   Monday High, Monday Low
-   Asia High, Asia Low

>   The open price can also be used as part of a trading setup. This will be explained in more detail later in the PO3 and Time and Price chapters.



Aside from the Swing Points listed above, any swing high or low you can identify can be used as your range setup. As always, as long as you know what you are doing, you can do whatever you want.



![Range](/tutorial/ict-smc/img/06.%20Range/Range.png)



## Premium and Discount Array Matrix (PDA Matrix)

>   The name sounds intimidating, but it is really just a way to combine the things we have already covered. Once you finish this section, it should make sense.



### Premium and Discount (P/D)

After defining a Range, we can use Fibonacci to measure the midpoint of the range, which is 0.5. If you have followed the previous lessons carefully, you already know that the 0.5 level of a range is called Equilibrium (EQ). In ICT/SMC, the area above EQ is considered Premium, while the area below EQ is considered Discount.

When price trades into Premium, we can treat price as relatively expensive and tend to look for short opportunities. When price trades into Discount, we can treat price as relatively cheap and tend to look for long opportunities.

![Premium and Discount](/tutorial/ict-smc/img/06.%20Range/Premium%20and%20Discount.png)

At this point, we can combine all the FVGs, OBs, and Liquidity concepts we learned earlier with Premium/Discount. This gives us the following matrix or array:

![Premium and Discount](/tutorial/ict-smc/img/06.%20Range/PDA%20Matrix.png)

>   We collectively refer to OBs, FVGs, Liquidity, and other elements that may provide opposing force as PDA.

You do not need to memorize this image. You only need to understand that when you draw out a range, a large number of PDAs will be arranged from top to bottom inside that range. Having this concept is enough. The idea of PDA is very important and will appear repeatedly in the following chapters.



## Internal Range Liquidity (IRL) & External Range Liquidity (ERL)

-   **External Range Liquidity (ERL)**: old highs or old lows. You can simply understand this as Liquidity.
-   **Internal Range Liquidity (IRL)**: the various OBs and FVGs created during price delivery.

-   **Price only moves between ERL and IRL**. When price is executing one-directional delivery, it will take ERL and then perform Retracement until IRL is rebalanced or mitigated. This behavior is called **ERL to IRL**. Afterward, price will immediately reverse and continue delivering in the original direction, attempting to take ERL. This behavior is called **IRL to ERL**.

-   **Draw on Liquidity (DOL)**:
    -   Therefore, after price takes ERL, you would expect price to go back and take IRL. At that point, you would focus on a specific IRL on the chart and believe it has a draw on price. You would expect price to return to that IRL. Likewise, after price fills IRL, you would expect a certain ERL to have a draw on price, and you would expect price to deliver toward that ERL to continue price delivery.

    -   The PDA that has this draw on price is what you consider your DOL. DOL should be the element you care about most when trading, because in theory, price's reaction to your DOL directly affects all of your decisions.

    > -   If you often watch my charts, you will almost never see me explicitly label DOL. But the concept of DOL is extremely important. You do not have to draw it, but you must have the concept in your mind. In many cases, DOL directly determines your Bias, and this will be mentioned repeatedly later.
        > - There is a similar concept called **Point of Interest (POI)**, which basically refers to the PDA you are paying attention to. I will not explain too much on it here.

-   **Institutional Order Flow (IOF)**: when price is delivering in one direction, same-direction PDAs will keep being respected, while opposing PDAs will keep being broken.

![ERL & IRL](/tutorial/ict-smc/img/06.%20Range/ERL%20%26%20IRL.png)

>   Example of standard Institutional Order Flow and ERL / IRL.



## Optimal Trade Entry (OTE)

-   Optimal Trade Entry (OTE) is a common ICT tool used to assist entries. It cannot be used on its own and must be combined with the concepts and elements discussed earlier.
-   OTE refers to the Fibonacci 0.62 - 0.79 range, with 0.705 as its EQ. When you enter inside this range, you can often obtain an excellent risk-to-reward ratio.
-   OTE can also help you locate take-profit targets, but again, all of this must be combined with DOL, PDA, and the other concepts discussed earlier.
-   **Finally, remember not to use OTE outside the context of the other concepts. It is only an auxiliary tool.**



![OTE](/tutorial/ict-smc/img/06.%20Range/OTE.png)
-   **1**: swing origin.
-   **0**: swing endpoint, meaning the Swing Point where Retracement begins.
-   **0.5**: EQ of the swing range.
-   **0.62 - 0.79**: **the Optimal Trade Entry area. You can watch PDAs here for entries**.
-   **0.705**: **the EQ of the OTE area. You can watch PDAs here for entries**.
-   -0.27: you can look for a PDA here as your first take-profit target (TP1).
-   -0.62: you can look for a PDA here as your second take-profit target (TP2).
-   -1: you can look for a PDA here as your third take-profit target (TP3).

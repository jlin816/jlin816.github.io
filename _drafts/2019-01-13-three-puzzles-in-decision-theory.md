---
layout: base
title: Three puzzles in decision theory&#58; Newcomb's Problem
---
# Three puzzles in decision theory: Newcomb's Problem

**An intro to "Three puzzles in Decision Theory"**

I used to think puzzles in philosophy were "just" brainteasers at best. Fun, challenging, but not really substantial or grounded enough to really change how I think about anything. Yes, the trolley problem forces us to consider how quantity factors into our ethical judgments, but the arguments reduce so directly down to people disagreeing about core values. The interesting discussion stops short (or keeps going in circles).

Then I took a decision theory & practical rationality class (24.260 at MIT). My first reaction to puzzles was still -- "well, obviously, just do X!" Then I felt the pull of the other side's arguments. I struggled to reconcile their considerations with mine. I grappled with my intuitions about certain cases that led me to unacceptable conclusions in similar cases. 

There is often an immediate intuition that people have in response to puzzles, one that you can formulate terms of logical arguments that sound reasonable. But the joy of good puzzles is that there's enough depth to realize that, in an odd way, you also believe in the validity of the other side's argument. Questions become hard questions.

The goal of these posts is to convey some of that depth, and how I realized that the things I believed in abstract philosophical puzzles nudged me towards real changes in how I think elsewhere.

Also, they're still just fun :)

----

## Newcomb's Paradox
A predictor (say, a simulator of your brain, or a fancy _machine learning model_) who can predict your behavior with 99% accuracy* offers you two boxes, a transparent and an opaque box. It has set up some money in each box yesterday (i.e., crucially, what you do right now doesn't _cause_ it to do what it did yesterday), and it now offers you a choice. You can take only the opaque box (Option 1), or take both the opaque and transparent box (Option 2).
<TODO: footnote for 99%>

The transparent box contains $1000, which you can clearly see. As for the opaque box...if the predictor predicted yesterday that would choose to take only the opaque box, it's put $1,000,000 in the box. If the predicted predicted that you would choose to take both boxes, it's put $0 in the opaque box. 

[image here]

**Now, given this knowledge, what is it rational for you to do?**

** 

One response is to say: _"Just take the money!"_ The predictor made his prediction yesterday, and the money is already in the boxes. It's not simply going to vanish out of thin air when you make your decision. Given that the amount of money in each box is fixed now, you make _at least_ as much money taking both boxes as you do taking just one. After all, in addition to the $1,000 guaranteed winnings from the transparent box, you'll either get $0 (no harm done) or get lucky and win that $1,000,000.

If this line of thinking resonates with you, you're a **causal decision theorist** (CDT), or a **two-boxer**. The reasoning goes: change your behavior if your actions causally affect the outcome. Sure, the predictor may have predicted that I would be the kind of person to take both boxes. But my choice _in this moment_ does not affect his prediction from yesterday; it's simply correlated.

On the other hand, you might play out the situation and realize that two-boxing will most likely get you only $1000. Maybe you've watched as 99% of your two-boxing friends have walked away sadly with their measly $1000 windfalls, and you say: "...I'd rather be rich." If I one-box, I'll almost certainly end up with $1,000,000. If I two-box, I'll almost certainly end up with $1,000. The choice seems simple!

If you gravitate towards this kind of thinking, you're an **evidential decision theorist** (EDT) or a **one-boxer**. The reasoning goes: considering rational expecations and likely outcomes, take the action that brings you the desired outcome in expectation. <TODO finish>

** 

When I first heard this puzzle, EDT seemed almost immediately obvious to me. How could anyone _not_ want to one-box, given that you always walk away with a million dollars? My CDT friends promptly shot me down; EDT is voodoo, 

The interesting phenomenon surrounding the puzzle is that people always seem to have strong intuitions about what is rational to do. Even academic philosophers are [split on the issue](https://philpapers.org/surveys/results.pl). The challenge is not coming up with good reasons for your argument; the pull of both sides is evident once the problem sinks in (a pretty unusual property!). Rather, the hard part is explaining why the other side's strong intuitions and sensible reasons are misguided.

For philosophers and economists, Newcomb's paradox poses a constructive problem. Whether you argue that CDT, EDT, or another recommendation is rational here, you have to build a self-consistent and comprehensive theory of rationality around it. Newcomb-like problems appear everywhere in [everyday life](https://www.lesswrong.com/posts/TejMdvF9XTNP5pGDR/real-world-newcomb-like-problems). If you're a two-boxer in Newcomb's, you should be the equivalent of a two-boxer in these cases too—and in some cases, the results of your original intuitions are harder to accept!
<TODO: Sidenote. Much of the back-and-forth between philosophy papers in general seems to take this form, showing that believing something in one sort of problem commits you unacceptable beliefs in another problem. A longer post to come on this!>

Clearly, the best outcome is if you were the kind of person to one-box, but you are somehow able to take both boxes. But there's a better-than-chance probability that the predictor would have predicted you'd change your mind at the last moment. Any way you reason about this problem, there is the mind-bending thought that the predictor is always one step ahead of you.

Maybe the best we can do is to leave it up to randomness—just flip a coin.
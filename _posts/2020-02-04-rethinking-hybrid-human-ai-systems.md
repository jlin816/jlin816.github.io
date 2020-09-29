---
layout: post
title: Rethinking hybrid human-AI systems
subtitle: Beyond data labeling and error correction
date: 2020-02-04
ack: This was originally written and published as part of <a href="https://www.perell.com/write-of-passage-fellowship">David Perell's Write of Passage Fellowship</a>. Thank you to David, Packy, Adrienne, and Sahaj for comments on earlier versions of this draft!
---

_This is a condensed draft of [Rethinking human-AI interaction](/2020/06/08/rethinking-human-ai-interaction/). Go read the full post!_

<img class="fit-width" src="/assets/posts/whirlwind-computer.jpg"/>

Before the 2016 election, the Russian government manipulated Facebook users with thousands of posts from fake social media accounts and political ads, ultimately reshaping the course of history.

The story of the following years, which has echoed from every media outlet to the halls of Congress, does not warrant a retelling. Since then, we’ve collectively turned the events in our hands over and over. We’ve extracted lessons about the new landscape of interstate politics, the effects of information bubbles that distort our reality, and the failures of runaway optimization loops that emphasize metrics like clicks at the cost of social outcomes. And while Facebook takes the public blame, it’s not clear that we collectively even know that there’s a solution.

In 2020, there are no robot overlords or Black Mirror-esque dystopias (yet), but there is this vague sense of speeding through a techno-determinist future in which we have little control. 

In the face of an overwhelming abundance of information and increasingly complex emergent systems, the promise of AI is comforting: a powerful engine that takes in data and spits out insights. We’ve already built systems to [analyze large volumes of documents](https://primer.ai/) and [detect fake news](https://venturebeat.com/2019/06/03/twitter-acquires-fabula-ai-a-machine-learning-startup-that-helps-spot-fake-news/). But the cracks have already begun to show: automated solutions not only [fail to solve problems](https://www.theverge.com/2018/4/5/17202886/facebook-fake-news-moderation-ai-challenges), but they lead to runaway optimization loops and unintended side effects of their own.

There’s undoubtedly potential for hybrid human-AI systems to address problems that are both too complex for humans to grapple with and not quite within the reach of modern machine learning. The problem is that we’ve done very little thinking about how to design the interface between them. 

While most people in AI research and industry tackle problems by designing better models or collecting more comprehensive datasets, **novel _interaction paradigms_ are sorely missing from the picture**. How do we communicate our goals and intents more effectively? How can we revise the objective over time? How can we communicate domain knowledge and constraints on the problem? 

Beyond interface design, how do we design effective systems of humans and machines?

## The anatomy of human-AI systems

Right now, the answer to all of these questions is to “feed it in the data.”

Today, a hybrid human-AI system often means a particular “human-in-the-loop” workflow that powers most modern "intelligent" applications. When Amazon Alexa responds with her calm "Sorry, I'm not understanding you right now," your soundbite is sent to a [human worker who transcribes it](https://www.theverge.com/2019/4/10/18305378/amazon-alexa-ai-voice-assistant-annotation-listen-private-recordings), with the goal of creating more training data to improve the automatic speech recognition system.

![Human-in-the-loop workflow](/assets/posts/human-in-the-loop.png)
*From [https://akilian.com/2019/12/30/worker-in-the-loop-retrospective](https://akilian.com/2019/12/30/worker-in-the-loop-retrospective)*

Make a first pass through an automatic system, and if it fails, have a human take over. Use the "right answer" from the human as training data for the system.

Across the board, companies in industries from [scheduling assistance](https://medium.com/amplify-partners/how-clara-labs-is-on-the-cutting-edge-of-ai-by-keeping-humans-in-the-loop-cb478661e7e4) to autonomous vehicles operate similarly. Lots of AI startups adopt this model out of the gate, often to bootstrap the initial data collection process.

For most human-in-the-loop systems, human involvement is seen as a stopgap to fully automated systems, rather than an essential component of the system itself. Their role is to label the [long tail of “hard examples”](https://cdixon.org/2009/08/20/machine-learning-is-really-good-at-partially-solving-just-about-any-problem) that machine learning models cannot yet master. As the “machine prediction” box gets better, we need humans less and less.

The human-in-the-loop paradigm embodies human-machine interaction in the same way that early computers did. In the 1970s, programmers wrote up their programs on coding sheets and brought them down to the lab to get punched in to a deck of cards. They’d take the punch cards down to the office of the computer operator, whose job was to feed the cards into the giant mainframe a batch at a time. They could come back for a printout of their results the next day, which often told them, sorry, _Compile error on line 21_, better luck next time.

Interacting with computers by punching holes into a cards now seems hilariously archaic and blunt. We’d hardly call the system an excellent example of human-machine collaboration simply because the human computer operator mans the card input.

Similarly, the current paradigm — where the human’s role is to oversee or correct a machine output and produce correct data points as input — is just the tip of the iceberg for potential hybrid human-AI systems.

How did we get here?

We’re here partially because of the language of machine learning is the language of “solving _tasks_” and “making predictions.” The standard beginner’s introduction to machine learning is Kaggle, which presents cleanly-defined problems with a training dataset and objective. Never mind whether the objective actually aligns with the desired business outcome, or how the system will be inserted into a production workflow — both of which involve expanding the modeling boundary of concern to human elements of the system. In academic research, too, it’s easier to evaluate on standard tasks like predicting an outcome or maximizing the score on a game, most of which don’t involve humans.

When research becomes commercialized as product, entire organizations orient themselves around the task-based paradigm, which naturally leads to a human-in-the-loop workflow.

The other reason is that the ultimate goal in industry has always been high-margin, high-efficiency businesses, and human workers “ideally” don’t fit into that picture. In contrast with machines, human workers are slower, less reliable, and more costly. The humans are just a temporary component of the human-in-the-loop; although we’re not quite replacing human jobs yet, the economic incentives are aligned to do so as soon as possible.

As a result, the flywheel is designed to collect more data, with the goal of improving the performance of the machine learning system, instead of building systems to improve human capabilities.

Both of these assumptions have driven the rise of the human-in-the-loop workflow as we know it today, but they don’t necessarily have to be the case.

Sometimes, solving a task is exactly what we want to achieve, and eliminating rote tasks from the job description of human workers is indeed good. But in most other cases, framing in terms of tasks misses the larger context it’s embedded in. The goal is not literally to have labels for whether a given article is true or false; it’s to help people better understand when a piece of information might be misleading or manipulating their beliefs. Straightforwardly solving fake news by training models misses an opportunity to help humans get better at solving the problem, too.

In scientific applications, machine learning systems can provide a [new view of connections between related research](https://www.nature.com/articles/s41586-019-1335-8) or provide tools for [understanding complex biological systems](https://slideslive.com/38921722/machine-learning-meets-singlecell-biology-insights-and-challenges). Beyond directly labeling data, we can devise new ways to “interact” with machine learning systems by [communicating preferences](https://openai.com/blog/deep-reinforcement-learning-from-human-preferences/), [intuitive heuristic rules](https://hazyresearch.github.io/snorkel/blog/ws_blog_post.html), or [explanations](https://www.snorkel.org/blog/babble). Some of these are cutting-edge research advancements, but others simply require a rethinking of the typical task-centered paradigm with the tools we already have.

**Beyond prediction, we should strive to build AI systems that support human decision-making, understanding, and model-building.**

If we build systems that are designed around how humans work, hybrid human-AI systems might actually be more effective than fully automated systems. If the task is too hard for current machine learning systems to handle, maybe the answer isn’t collecting more data to make the machine more productive, but flipping the paradigm to make the human more productive. Instead of translating a document and having the human translation correct it, maybe we can provide [interactive aid that mirrors the translator’s normal workflow](https://qz.com/1484254/lilt-combines-human-and-machine-language-translation/).

By studying failure cases like runaway optimization loops or the ways people misuse technology, we can start to understand where interactivity and feedback might help.

<hr>

Perhaps this is what the early pioneers of computing felt, on the cusp of the 1980s. We had oriented entire research labs and organizations around bringing those punch cards down to the computer lab every day. We had achieved a lot with the powerful mainframes that crunched numbers and cracked codes. But people could not yet fathom the fundamental shifts to be brought on personal computing as we know it today — with a mouse, keyboard, graphical user interfaces, and much more, allowing us to use computers as everyday tools for almost everything we do.

With the rise of intelligent agents, designing the right interactive paradigms will be even harder, but the upside of success is much greater.

What are the equivalents of “interactive GUIs” for AI systems?

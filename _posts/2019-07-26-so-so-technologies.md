---
layout: post
title: So-so artificial intelligence 
subtitle: Could mediocre AI threaten labor more than brilliant AI, under the right conditions?
date: 2019-07-26
ack: Thanks to Sahaj, Max, and Nikhil for feedback! :) This is one of my first deep dives into econ, so I'd especially love to learn more from others on this topic.
---

<span style="color: #adadad">_**2/4/20: An updated version of this post is up on [Skynet Today](https://www.skynettoday.com/editorials/so-so-ai)!**_</span>


A lot of the conversation about the future of AI and automation focuses on the utopian/dystopian endgame (“will humans still work when artificial general intelligence can do everything?”), but it seems like there’s a lot more interesting, tractable, and concrete questions to answer about the effects of “narrow,” task-specific AI that looks more or less like what it does today. Industrial robotics, autonomous cars, customer service chatbots, facial recognition, and other applications are beginning to displace humans on small subsets of tasks. Should we be optimistic about labor in the next 10-50 years, when parts of industries will be automated by narrow AI? What early signs of those trends should we be concerned about now?

There’s no controversy that AI adoption will cause short-term job losses. The question is whether automation will have a _lasting_ negative impact on labor. The commonly held view is no: as we reap the benefits of tech-enabled productivity gains, new sectors and jobs will recoup the losses. Just imagine a more efficient future of autonomous vehicles, with new jobs around redesigning cities / infrastructure and more time for otherwise frustrated commuters to work and play. In Mary Meeker's “[2018 Internet Trends Report](https://www.kleinerperkins.com/perspectives/internet-trends-report-2018/)," (a staple of the startup media diet), she echoes this thought:

> "Will technology impact jobs this time? Perhaps...but it would be inconsistent with history as...new jobs/services + efficiencies + growth typically created around new technologies."

It’s important to dig into whether the drivers of our current situation do indeed match historical precedents. “[Automation and New Tasks](https://www.nber.org/papers/w25684)" (Acemoglu & Restrepo, 2019) clarifies some of these dynamics. In particular they highlight some interesting critical nuances that often seem to be glossed over:

**1) It’s important to distinguish between the effects of automation and the effects of new (work) tasks.**

New industries have historically followed new technology and automation, often as a direct consequence. The mechanization of agriculture in the 20th century automated agricultural jobs but replaced them with manufacturing ones. The invention of the aircraft ate away at the railroad traffic but recovered them in the aviation industry. Still, it’s wrong to assume that automation _necessitates_ the creation of new tasks. In many of these cases, additional organizational and technological innovation were what made it possible for new industries to flourish and counterbalance the effects of automation.

The analysis in the paper separates the effect of _automation_ from the effect of _new tasks_ on labor demand, making it explicit that automation itself doesn’t necessarily signal the creation of new sectors and tasks for labor. Automation might typically be accompanied by distinct innovations that introduce new tasks, but the cause-and-effect here is less direct than we might usually assume.

Do automation and new tasks actually separate in practice? Recent labor data (see graph below) shows that automation and productivity is increasing, but new tasks aren’t being created at nearly the same rate. It’s not clear to me whether this is simply because we’re still in the early phases of the tech adoption cycle (not enough time for new infrastructure and industries to be built around new tech yet?), but it’s still a deviation from historical trends, which suggests we might be on a different path.

![Change in task content of production comparison](/assets/posts/task_content_of_production.png)
*1947-1987 saw very little change in task content - despite labor being displaced by technology, it was counterbalanced by tasks by reinstatement of new tasks for labor elsewhere. In contrast, since 1987, we haven’t seen as many new tasks reinstated, resulting a net effect against labor. (From Figure 3 and 5 in "Automation + New Tasks").*

**2) Automation increases productivity, but not always by enough to increase labor demand.**

Automation itself replaces humans with cheap capital (machines), what Acemoglu and Restrepo call the _displacement effect_ of automation. This force towards decreased labor demand is offset by the fact that efficient tech-enabled firms can produce more, and scaling up increases demand for both automated and non-automated tasks (the _productivity effect_). 

The ultimate effect of automation itself (ignoring second-order effects of new tasks, following (1)), then, is a balancing act between these two forces. The problem is that automation does not necessarily increase productivity by _enough_ to offset the displacement effect. If automation is only slightly better than humans, and not that much cheaper, labor demand will decline.

～

These two points combined, then, means that we should be especially concerned about the future of labor if new automation is not that much more productive, and new tasks aren’t being created at a rate that offsets the tasks that are being displaced. These two dynamics result in a particularly strong shift against labor.

It’s an unintuitive point: we should be more concerned that mediocre technology will depress labor than brilliant technology that is significantly better than humans, because the counterbalances to job displacement may not be big enough. 

![Grid of displacement and productivity](/assets/posts/productivity-displacement_grid.png)
*One way to visualize the different regimes that different kinds of tech might lie in when it comes to their impact on labor.*

Automation in certain industries has been highly productive — but many hot applications like facial recognition and customer service chatbots are known to be merely “so-so.” The paper posits several reasons for why we’re seeing these trends recently, but the _culture around ML academia / industry_ as a driver struck me as particularly accurate / reflective of what I see.

**AGI is an attractive problem, both in research and industry.**

Researching [human-inspired AI](https://arxiv.org/pdf/1604.00289.pdf) is a really fun problem, in addition to there being scientific motivations for understanding our own minds. The research group I worked with at MIT was focused on understanding and replicating human behavior on common-sense reasoning and other tasks that come naturally to us from a young age.

Unfortunately, it turns out that many of these “easy” tasks are the hardest to reverse-engineer in machines. It’ll take the longest for machines to even be competitive with humans, and reliably so given failure in adversarial, [biased](https://www.nytimes.com/2018/02/09/technology/facial-recognition-race-artificial-intelligence.html), or [edge-case](https://rodneybrooks.com/edge-cases-for-self-driving-cars/) conditions. When we use chatbots to replace customer service agents who are (by nature of being humans) extraordinarily good at learning language and inferring other people’s mental states, we might effectively replacing highly effective, reliable, cheap labor with so-so capital. These are the kinds of cases where the net productivity effect is most likely to be too small to spur the creation of new tasks.

It’s natural for progress on these tasks to be incremental — setting ambitious long-term research goals aimed at cognitive tasks isn’t the problem. But a focus on fully automating cognitive tasks in _industry_ is what threatens labor, because it actualizes so-so technologies that are at best only marginally better than humans for the foreseeable future.

When the holy grail is a self-sufficient artificial general intelligence, we also naturally formulate tasks with the human out of the picture. We incentivize the development of fully automated systems over those that create new tasks for humans to play a role.

**Hype about AI and automation drives early deployment.**

Every startup wants to be the first to market with new research. It might be easy to get to an 80% accuracy MVP, but the last 20% — edge cases of the real world — is many times harder.  Companies bet that collecting more data will be a panacea, but it looks like many of them end up as [pseudo-AIs](https://www.theguardian.com/technology/2018/jul/06/artificial-intelligence-ai-humans-bots-tech-companies) that are indefinitely human-powered behind the scenes. We constantly think we’re almost there, but the reality right now is a so-so solution.

Even if none of these pseudo-AIs ever make it to massive success, each one fuels a competitive landscape where tech and non-tech companies alike are racing to ship AI products, regardless of whether it’s needed or beneficial. It’s a race with a blind faith in future productivity gains, but we may just be substituting machines for humans everywhere.

～

These concerns might dissipate as so-so technologies improve, but potentially at a great social cost that we can prevent now. While a so-so period is inevitable in the development of any new technology, we do have a choice in when to pull research results into industry. Ideally we might have [stronger community norms](https://openai.com/blog/cooperation-on-safety/) around using AI in practice to offset competitive pressures. We also need to educate people outside of the technical community on the benefits and risks, so they can evaluate the tradeoffs independently.

There’s been more of a push in the academic community towards [human](https://hai.stanford.edu/)-[centered](https://humancompatible.ai/) AI. So-so applications would be ideally be candidates for hybrid human-AI work (and I’d hope in ways more substantial than humans labeling data for AI!). Innovations that make way for humans might drive the introduction of new tasks following automation (as Acemoglu & Restrepo explore in a companion paper, "[The Wrong Kind of AI](https://economics.mit.edu/files/16819)"), and we could probably do with more of this work in both academia and industry.

There's definitely a lot more work in this area that I've barely touched, but I left this paper with an interesting alternative story for the dynamics at play to complement my understanding of the popular discourse. New jobs don’t just materialize as technology reshapes our infrastructure. They require conscious design, reorganization, and further innovation in both tech and society.

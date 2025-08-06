---
title: Jessy Lin
layout: default
class: sidebar
---

## Hi!

I’m a fifth-year PhD student at [Berkeley AI Research](https://bair.berkeley.edu/), advised by [Anca Dragan](http://people.eecs.berkeley.edu/~anca/) and [Dan Klein](https://people.eecs.berkeley.edu/~klein/). My research is supported by the [Apple Scholars in AI Fellowship](https://machinelearning.apple.com/updates/apple-scholars-aiml-2023). I'm also a visiting researcher at Meta AI.

My goal is to build _AI that can augment humans_: making people smarter and able to accomplish things they couldn't do before. People often don't know exactly what they want or how they want it done, so we'll need _collaboration_ — working together to synthesize human context with model intelligence.

My research focuses on foundational advancements to enable collaborative agents:
- training objectives that make models fundamentally more interactive [[1](https://dynalang.github.io/), [2](https://arxiv.org/abs/2204.05999), [3](https://arxiv.org/abs/2211.10869)]
- environments for collaboration [[4](https://arxiv.org/abs/2305.20076), [5](https://arxiv.org/abs/2204.02515)]
- approaches for continual learning & memory (my work at Meta, Google Research, and Lilt)

Previously, I worked on research and product at [Lilt](https://lilt.com/research), where I worked on continual adaptation and human-in-the-loop machine translation (Copilot for expert translators). I graduated with a double-major in computer science and philosophy from MIT, where I did research on human-inspired AI with the [Computational Cognitive Science Group](http://cocosci.mit.edu/), advised by Kelsey Allen and Josh Tenenbaum, and machine learning security as a founding member of [labsix](http://labsix.org/). I also spent a great summer with the [Natural Language Understanding](https://research.google/teams/language/) group at Google Research NY working on long-context memory architectures.

<p class="mobile-socials layoutRow">
  <a class="email" href="mailto:jessy_lin@berkeley.edu" target="_blank">
    Email
  </a>
  / <a class="github" href="https://github.com/jlin816">
    Github
  </a>
  / <a class="x" href="https://x.com/realJessyLin">
    Twitter/X
  </a>
  / <a class="scholar" href="https://scholar.google.com/citations?user=jTMUPNkAAAAJ&hl=en">
    Scholar
  </a>
</p>

## Research

<div markdown="0" class="pubs">
{% for project in site.data.pubs %}
<div class="pub layoutRow">
  <img src="{{ project.thumbnail }}"/>
  <div>
      <h3>{{ project.title }}</h3>
      <p class="authors">{% include authors.html authors=project.authors %}</p>
      <p class="info">{{ project.conference }} <span class="special">{{ project.special }}</span></p>
      <p class="description">{{ project.description }}</p>
      <div class="links">
      {% for link in project.links %}
        <a href="{{ link[1] }}">{{ link[0] }}</a>
      {% endfor %}
  </div>
</div>

</div>
{% endfor %}
</div>

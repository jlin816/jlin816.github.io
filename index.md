---
layout: default
show_pic: true
---

# Hi!

I’m a fourth-year PhD student at [Berkeley AI Research](https://bair.berkeley.edu/), advised by [Anca Dragan](http://people.eecs.berkeley.edu/~anca/) and [Dan Klein](https://people.eecs.berkeley.edu/~klein/). My research is supported by the [Apple Scholars in AI Fellowship](https://machinelearning.apple.com/updates/apple-scholars-aiml-2023).

I'm interested in **building agents that can collaborate and interact with humans, and use language as a medium to do so.** Currently, I'm excited about dialogue and language + RL.

Previously, I worked on research and product at [Lilt](https://lilt.com/research), working on human-in-the-loop machine translation / Copilot for expert translators. I graduated with a double-major in computer science and philosophy from MIT, where I did research on human-inspired AI with the [Computational Cognitive Science Group](http://cocosci.mit.edu/), advised by Kelsey Allen and Josh Tenenbaum, and machine learning security as a founding member of [labsix](http://labsix.org/). I also spent a great summer with the [Natural Language Understanding](https://research.google/teams/language/) group at Google Research NY, advised by David Weiss.

## Publications

<div markdown="0" class="pubs">
{% for project in site.data.pubs %}
<div class="pub">
  <h3>{{ project.title }}</h3>
  <p class="authors">{{ project.authors | markdownify }}</p>
  <p class="info">{{ project.conference }} <span class="special">{{ project.special }}</span></p>
  <p class="description">{{ project.description }}</p>
  <div class="links">
  {% for link in project.links %}
    <a href="{{ link[1] }}">{{ link[0] }}</a>
  {% endfor %}
</div>

</div>
{% endfor %}
</div>

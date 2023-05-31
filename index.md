---
layout: base
show_pic: true
---
# Hi!

I’m currently a third-year PhD student at [Berkeley AI Research](https://bair.berkeley.edu/), advised by [Anca Dragan](http://people.eecs.berkeley.edu/~anca/) and [Dan Klein](https://people.eecs.berkeley.edu/~klein/).

I'm interested in **building agents that can collaborate and interact with humans, and use language as a medium to do so.** Currently, I'm excited about dialogue and language + RL.

Previously, I worked on research and product at [Lilt](https://lilt.com/research), exploring these questions in the context of human-in-the-loop machine translation (based on my experiences there, I wrote [an essay](/2020/06/08/rethinking-human-ai-interaction/) about interesting directions for human-in-the-loop ML in industry). I graduated with a double-major in computer science and philosophy from MIT, where I did research on human-inspired AI with the [Computational Cognitive Science Group](http://cocosci.mit.edu/), advised by Kelsey Allen and Josh Tenenbaum, and adversarial examples / machine learning security as a founding member of [labsix](http://labsix.org/). I also spent a great summer with the [Natural Language Understanding](https://research.google/teams/language/) group at Google Research NY, advised by David Weiss.

## Publications

<div  markdown="0">
{% for project in site.data.pubs %}
<div class="pub">
  <div class="pub-title"><b>{{ project.title }}</b></div>
  <div class="pub-description">{{ project.authors | markdownify }}</div>
  <div class="pub-description">{{ project.description }}</div>
  <span class="pub-description">{{ project.conference | markdownify }}
  {% for link in project.links %}
    [<a href="{{ link[1] }}">{{ link[0] }}</a>]
  {% endfor %}
  </span>
</div>
{% endfor %}
</div>

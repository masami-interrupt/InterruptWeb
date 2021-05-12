---
layout: post
title: その他の実績
subtitle: 
image:  /assets/images/project.jpg
nav-menu: false
show_tile: false
---

<!-- Content -->
{% assign row = 1 %}
{% for comp in site.data.other.appli %}
    {% if row == 1 %}
<div class="row">
    {% endif %}
    <div class="6u 12u$(small)">
    <a href="{{ comp.item.url }}" target="_blank">
    <h3 style="color:#000;">{{ comp.item.title }}</h3>
    </a>
    <h5 style="color:#777;">{{ comp.item.subtitle }}</h5>
    <p><span class="image left"><img src="{{ comp.item.image }}" alt="" /></span>{{ comp.item.desc }}</p>
    </div>
    {% if row == 0 %}
    <!-- Break -->
</div>
<br>
    {% endif %}
    {% if row == 1 %}
    {% assign row = 0 %}
    {% else %}
    {% assign row = 1 %}
    {% endif %}
{% endfor %} 

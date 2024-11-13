---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi! I am a 3rd year PhD student at Texas A&M University, advised by Prof. <a href='https://aimerykong.github.io/index.html'>Shu Kong</a> and Prof. <a href='https://sites.google.com/tamu.edu/gpandey/'>Gaurav Pandey</a>. I earned my undergraduate degree in Mechanical Engineering from Politecnico di Torino. My current research is primarily centered on computer vision, with a secondary focus on language models for self-driving car applications.


# 🔥 News

- *2024.10* &nbsp;🎉🎉 Successfully demonstrated our first remote perception capabilities for the <a href='https://mcity.umich.edu/'> Mcity</a> Demo Project.
- *2024.08* &nbsp;🎉🎉 Joined Prof. Shu Kong's <a href='https://aimerykong.github.io/group.html'> Computer Vision Lab</a>.
- *2024.07* &nbsp;🎉🎉 Completed approximately 20 miles in autonomous mode under rainy weather conditions during the first AVA project demo on a public road.
- *2024.06* &nbsp;🎉🎉  <a href='https://arxiv.org/abs/2403.10662'> SwinMTL</a> paper was accepted to IROS'24. <a href="https://github.com/PardisTaghavi/SwinMTL">[code]</a>

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IROS 2024</div><img src='images/irosPaper.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SwinMTL: A Shared Architecture for Simultaneous Depth Estimation and Semantic Segmentation from Monocular Camera Images](https://arxiv.org/pdf/2403.10662)

**Pardis Taghavi**, Reza Langari, Gaurav Pandey

<a href='https://github.com/PardisTaghavi/SwinMTL'> code</a>  |  <a href='https://arxiv.org/abs/2403.10662'> arxiv</a> 
- A simple but effective multi-task learning framework that allows concurrent depth estimation and semantic segmentation using a single camera and without compromising computational efficiency.
</div>
</div>

# Projects 


<div class='paper-box'><div class='paper-box-image'><div><img src='images/ava_.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**AVA: Autonomous Vehicles for All**

<a href='https://avadataportal.web.illinois.edu/index.html'> website</a> 
- Lead of the Perception Team : Developed a perception system tailored for diverse route scenarios, including both urban and rural environments.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><img src='images/mcity.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**MCITY 2.0 USE CASE AV PERCEPTION**

<a href='https://github.com/PardisTaghavi/Mcity2.0_demo'> code</a> 

- 3D point cloud generation and clustering techniques for improved object detection and scene understanding from a single RGB image.
- Validated algorithm outputs through simulation and remote operation on a real autonomous test vehicle at MCity 2.0.

</div>
</div>




# 🎖 Honors and Awards
- *2024.06* NSF Subaward for Autonomous Vehicle Perception Testing at MCity.
- *2021.09* Graduated Summa Cum Laude from Politecnico di Torino University.
- *2018.09* Won TOPolito Scholarship: Awarded to the top 10 students of the engineering school. 
# 📖 Education
- *2022.01 - present*, PhD Student, Texas A&M University
- *2018.09 - 2021.09*, Bachelor's Degree, Politecnico di Torino University

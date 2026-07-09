---
permalink: /
title: ""
description: "Final-year Ph.D. student at Texas A&M researching efficient and controllable video world models for autonomous driving."
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
<meta name="msvalidate.01" content="8149475937CBBE15CEA9FF9F5690C937" />

<span class='anchor' id='about-me'></span>

Hi! I am a final-year Ph.D. student at Texas A&M University, advised by Prof. Reza Langari and Prof. Zhengzhong Tu. My research centers on efficient and controllable video world models for autonomous driving. Previously, I worked with Dr. Shu Kong and Gaurav Pandey, and I received my B.S. in Mechanical Engineering from Politecnico di Torino.

<div class="research-tags">
  <span class="topic-tag">World Models</span>
  <span class="topic-tag">Generative AI</span>
  <span class="topic-tag">Autonomous Driving</span>
</div>


# 🔥 News

- *2025.06* &nbsp;🎉🎉 Started as AI Engineer intern at Rivian and Volkswagen Company.
- *2025.05* &nbsp;🎉🎉 Joined the <a href="https://taco-group.github.io/group.html">TACO</a> Group under the supervision of Dr. Zhengzhong Tu.
- *2024.10* &nbsp;🎉🎉 Successfully demonstrated our first remote perception capabilities for the <a href='https://mcity.umich.edu/'> Mcity</a> Demo Project <a href="https://www.youtube.com/watch?v=jPO9OaSdtlA">[Link]</a>.
- *2024.07* &nbsp;🎉🎉 Completed approximately 20 miles in autonomous mode under rainy weather conditions during the first AVA project demo on a public road.
- *2024.06* &nbsp;🎉🎉  <a href='https://arxiv.org/abs/2403.10662'> SwinMTL</a> paper was accepted to IROS'24 <a href="https://github.com/PardisTaghavi/SwinMTL">[code]</a>.


# 📝 Selected Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPRW 2026</div><img src='images/castPaper.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[CAST: Training a Student Expert via Semi-Supervised Foundation Model Distillation](https://pardistaghavi.github.io/cast-website/)
**Pardis Taghavi**, Tian Liu, Renjie Li, Reza Langari, Zhengzhong Tu 
<a href='https://openaccess.thecvf.com/content/CVPR2026W/ECV/papers/Taghavi_Training_a_Student_Expert_via_Semi-Supervised_Foundation_Model_Distillation_CVPRW_2026_paper.pdf'> paper</a>  |  <a href='https://arxiv.org/abs/2604.03841'> arXiv</a>  |  <a href='https://pardistaghavi.github.io/cast-website/'> project page</a>
- CAST is a semi‐supervised knowledge distillation (SSKD) framework that compresses pretrained vision‐foundation models (VFMs) into compact expert networks by leveraging limited labeled data and abundant unlabeled data via stage‐wise fine‐tuning coupled with a contrastive self‐supervised loss.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IROS 2024</div><img src='images/irosPaper.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[SwinMTL: A Shared Architecture for Simultaneous Depth Estimation and Semantic Segmentation from Monocular Camera Images](https://arxiv.org/pdf/2403.10662)
**Pardis Taghavi**, Reza Langari, Gaurav Pandey
<a href='https://github.com/PardisTaghavi/SwinMTL'> code</a>  |  <a href='https://arxiv.org/abs/2403.10662'> arXiv</a> 
- A simple and effective multi-task learning framework that allows concurrent depth estimation and semantic segmentation using a single camera and without compromising computational efficiency.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2026</div><img src='images/pulsePaper.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[The Pulse of Motion: Measuring Physical Frame Rate from Visual Dynamics](https://arxiv.org/pdf/2603.14375)
Xiangbo Gao, Mingyang Wu, Siyuan Yang, Jiongze Yu, **Pardis Taghavi**, Fangzhou Lin, Zhengzhong Tu
<a href='https://arxiv.org/abs/2603.14375'> arXiv</a>  |  <a href='https://xiangbogaobarry.github.io/Visual_Chronometer/'> project page</a>
- Proposes Visual Chronometer, a predictor that recovers Physical Frames Per Second (PhyFPS) from visual dynamics to address chronometric hallucination in generative video models and improve perceived motion naturalness.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2026</div><img src='images/naviDrivePaper.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[NaviDriveVLM: Decoupling High-Level Reasoning and Motion Planning for Autonomous Driving](https://arxiv.org/pdf/2603.07901)
Ximeng Tao, **Pardis Taghavi**, Dimitar Filev, Reza Langari, Gaurav Pandey
<a href='https://arxiv.org/abs/2603.07901'> arXiv</a>
- A decoupled Navigator-Driver framework that separates semantic reasoning from waypoint prediction, preserving strong VLM reasoning while enabling efficient adaptation for end-to-end motion planning on nuScenes.
</div>
</div>

<!--
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2026</div><img src='images/specKitPaper.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Spec Kit Agents: Context-Grounded Agentic Workflows](https://sbhavani.github.io/speckit-agents/)
**Pardis Taghavi**, Santosh Bhavani
<a href='https://arxiv.org/abs/2604.05278'> arXiv</a>  |  <a href='https://github.com/PardisTaghavi/speckit-agents'> code</a>  |  <a href='https://sbhavani.github.io/speckit-agents/'> project page</a>
- A multi-agent spec-driven development pipeline with context-grounding hooks that grounds each SDD stage in repository evidence, reducing hallucinated APIs and improving judged implementation quality.
</div>
</div>
-->


# 💼 Experience

- **Rivian and Volkswagen Group Technologies** — *Artificial Intelligence Engineer Intern*  
  *Jun 2025 – Sep 2025 · United States*  
  Developed reinforcement learning systems for autonomous driving decision-making and learning-based AI pipelines for vehicle intelligence applications.


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

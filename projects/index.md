---
layout: default
title: 创作项目 Creative Projects
---

<section class="projects-page">

    <header class="projects-header">

        <h1>创作项目 Creative Projects</h1>

        <p>
            记录我的创意作品，
            探索想法如何变成现实。
        </p>

    </header>


    <section class="project-list">


        {% for project in site.projects %}


        <article class="project-card">


            <div class="project-main">


                <h2>

                    <a href="{{ project.url | relative_url }}">

                        {{ project.title }}

                    </a>

                </h2>



                {% if project.category %}

                <p class="project-category">

                    {{ project.category }}

                </p>

                {% endif %}



                {% if project.tags %}

                <div class="project-tags">

                    {% for tag in project.tags %}

                    <span>
                        {{ tag }}
                    </span>

                    {% endfor %}

                </div>

                {% endif %}



                <p class="project-description">

                    项目介绍

                </p>


            </div>



            <div class="project-side">


                <span class="project-arrow">

                    →

                </span>



                {% if project.status %}

                <span class="project-status">

                    {{ project.status }}

                </span>

                {% endif %}


            </div>



        </article>


        {% endfor %}


    </section>


</section>

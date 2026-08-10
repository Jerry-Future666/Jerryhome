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

            <header class="project-card-header">


                <h2>

                    <a class="content-link" href="{{ project.url | relative_url }}">

                        {{ project.title }}

                    </a>

                </h2>


                {% if project.status %}

                <span class="project-tag">

                    {{ project.status }}

                </span>

                {% endif %}


            </header>



            <p class="project-description">

                {{ project.excerpt | strip_html | strip_newlines }}

            </p>



            



        </article>


        {% endfor %}


    </section>


</section>

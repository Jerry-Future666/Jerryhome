---
layout: default
title: 博客 Blog
---

<section class="blog-page">

    <header class="blog-header">

        <h1>博客 Blog</h1>

        <p>
            记录探索过程中的文字，
            想法与阶段性总结。
        </p>

    </header>


    <section class="blog-list">

        {% for post in site.posts %}

        <article class="blog-item">

            <div class="blog-meta">
                {{ post.date | date: "%Y.%m.%d" }}
            </div>


            <h2 class="blog-title">

                <a href="{{ post.url | relative_url }}">
                    {{ post.title }}
                </a>

            </h2>


            <p class="blog-excerpt">
                {{ post.excerpt | strip_html | truncate: 120 }}
            </p>


            <a class="blog-read" href="{{ post.url | relative_url }}">
                阅读文章
                <span>→</span>
            </a>


        </article>

        {% endfor %}

    </section>

</section>

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

            <h2>
                <a href="{{ post.url | relative_url }}">
                    {{ post.title }}
                </a>
            </h2>

            <p>
                {{ post.excerpt }}
            </p>

        </article>

        {% endfor %}

    </section>

</section>

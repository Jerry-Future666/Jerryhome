---
layout: default
title: 标签 Tags
---

<section class="tag-page">

    <header class="tag-header">

        <h1>标签 Tags</h1>

        <p>
            用关键词整理 Jerryhome 的探索记录。
        </p>

    </header>


    <section class="tag-list">

        {% for tag in site.tags %}

        <article class="tag-item">

            <h2>
                {{ tag[0] }}
            </h2>

            <p>
                {{ tag[1].size }} 篇文章
            </p>


            <div>

            {% for post in tag[1] %}

                <a class="content-link" href="{{ post.url | relative_url }}">
                    {{ post.title }}
                </a>

                <br>

            {% endfor %}

            </div>


        </article>

        {% endfor %}

    </section>

</section>

---
layout: default
title: 分类 Categories
---

<section class="category-page">

    <header class="category-header">

        <h1>分类 Categories</h1>

        <p>
            按主题整理 Jerryhome 的探索记录。
        </p>

    </header>


    <section class="category-list">

        {% for category in site.categories %}

        <article class="category-item">

            <h2>
                {{ category[0] }}
            </h2>

            <p>
                {{ category[1].size }} 篇文章
            </p>


            <div>

            {% for post in category[1] %}

                <a href="{{ post.url | relative_url }}">
                    {{ post.title }}
                </a>

                <br>

            {% endfor %}

            </div>


        </article>

        {% endfor %}

    </section>

</section>

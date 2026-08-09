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
                <a href="{{ '/categories/' | append: category[0] | relative_url }}">
                    {{ category[0] }}
                </a>
            </h2>

            <p>
                {{ category[1].size }} 篇文章
            </p>

        </article>

        {% endfor %}

    </section>

</section>

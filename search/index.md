---
layout: default
title: 搜索 Search
---

<section class="search-page">

    <header class="search-header">

        <h1>搜索 Search</h1>

        <p>
            查找 Jerryhome 的探索记录。
        </p>

    </header>


    <div class="search-box">

        <span class="search-icon" aria-hidden="true">
            🔍
        </span>

        <input
            id="searchInput"
            class="search-input"
            type="search"
            placeholder="搜索文章..."
            autocomplete="off"
            enterkeyhint="search"
        >

    </div>


    <section id="searchResults" class="search-results">

    </section>


</section>


<script>

const posts = [

{% for post in site.posts %}

    {
        title: {{ post.title | jsonify }},
        excerpt: {{ post.excerpt | strip_html | strip_newlines | jsonify }},
        url: {{ post.url | relative_url | jsonify }}
    }

    {% unless forloop.last %},{% endunless %}

{% endfor %}

];


const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");


function performSearch() {

    const keyword = input.value.trim().toLowerCase();

    results.innerHTML = "";


    if (!keyword) {
        return;
    }


    const matchedPosts = posts.filter(post => {

        const title =
            String(post.title || "").toLowerCase();

        const excerpt =
            String(post.excerpt || "").toLowerCase();

        return (
            title.includes(keyword) ||
            excerpt.includes(keyword)
        );

    });


    if (matchedPosts.length === 0) {

        const empty = document.createElement("p");

        empty.textContent = "没有找到相关文章。";

        empty.className = "search-empty";

        results.appendChild(empty);

        return;

    }


    matchedPosts.forEach(post => {

        const item = document.createElement("article");

        item.className = "search-result-item";


        const title = document.createElement("h2");

        const link = document.createElement("a");

        link.className = "content-link";

        link.href = post.url;

        link.textContent = post.title;

        title.appendChild(link);


        const excerpt = document.createElement("p");

        excerpt.textContent = post.excerpt;


        item.appendChild(title);

        item.appendChild(excerpt);

        results.appendChild(item);

    });

}


input.addEventListener("input", performSearch);

input.addEventListener("search", performSearch);

</script>

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

        <span class="search-icon">
            🔍
        </span>


        <input 
            id="searchInput"
            class="search-input"
            type="text"
            placeholder="搜索文章..."
        >

    </div>


    <section id="searchResults" class="search-results">

    </section>


</section>


<script>

let posts = [];


fetch("{{ '/search.json' | relative_url }}")
.then(response => response.json())
.then(data => {

    posts = data;

});



const input = document.getElementById("searchInput");

const results = document.getElementById("searchResults");



input.addEventListener("input", function(){


    const keyword = this.value.toLowerCase();


    results.innerHTML = "";



    if(!keyword){

        return;

    }



    const matched = posts.filter(post => {


        return (

            post.title.toLowerCase().includes(keyword)

            ||

            post.excerpt.toLowerCase().includes(keyword)

        );


    });



    matched.forEach(post => {



        const item = document.createElement("article");



        item.innerHTML = `


            <h2>

                <a class="content-link" href="${post.url}">

                    ${post.title}

                </a>

            </h2>


            <p>

                ${post.excerpt}

            </p>


        `;



        results.appendChild(item);



    });



});


</script>

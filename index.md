---
layout: default
title: 首页
---

<div class="centered-content">
    <header>
        <h1>{{ site.title }}</h1>
        <p class="site-description">{{ site.description }}</p>
    </header>

    <hr>

    <section class="posts-section">
        <h2>博文列表</h2>
        <ul class="post-list">
            {% for post in site.posts reversed %} {# reversed 让最新文章显示在最上面 #}
            <li>
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                <span class="post-date">{{ post.date | date: "%Y年%m月%d日" }}</span>
            </li>
            {% endfor %}
        </ul>
    </section>

    <hr>

    <section class="categories-section">
        <h2>博文分类</h2>
        <ul class="category-list">
            {% for category in site.categories %}
            <li>
                <a href="#">{{ category[0] }} ({{ category[1].size }})</a>
                <!-- 注意：这里的分类链接暂无实际跳转功能，需要更复杂的 Jekyll 插件或手动创建页面来实现分类归档。 -->
                <!-- 但它会显示所有分类及其文章数量。 -->
            </li>
            {% endfor %}
        </ul>
    </section>

    <hr>

    <section class="about-section">
        <h2>关于我</h2>
        <p>你好，我是风清扬。这里是我的个人博客，主要记录我的生活感悟、技术学习和心得分享。我热爱阅读、电影和探索未知。希望在这里与大家分享我的所思所想，并结识更多志同道合的朋友。</p>
        <p>如果您对我的内容感兴趣，欢迎与我交流！</p>
    </section>

    <hr>

    <section class="contact-section">
        <h2>联系方式</h2>
        <p>你可以通过以下方式联系到我：</p>
        <ul class="contact-list">
            <li><strong>邮箱:</strong> <a href="mailto:your-email@example.com">your-email@example.com</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/your-github-username">你的GitHub用户名</a></li>
            <!-- 你可以根据需要添加更多联系方式，例如： -->
            <!-- <li><strong>微信:</strong> your-wechat-id</li> -->
            <!-- <li><strong>知乎:</strong> <a href="https://www.zhihu.com/people/your-zhihu-id">你的知乎主页</a></li> -->
        </ul>
    </section>
</div>

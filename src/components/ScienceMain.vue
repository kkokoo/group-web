<script setup>
import { ref, onMounted, computed } from 'vue';
let journalPapers = ref([]);
let conferencePapers = ref([]);
let others = ref([]);
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return {};
    }
}

// 组件挂载后加载数据  
onMounted(async () => {
    const userData = await fetchData('userinfo.json');
    journalPapers.value = userData.Journalpapers || [];
    conferencePapers.value = userData.Conferencepapers || [];

    const othersData = await fetchData('others.json');
    others.value = othersData;
});
const processedPapers1 = computed(() => {
    return journalPapers.value.map(paper => ({
        ...paper,
        author: paper.Cauthor || paper.author,
        title: paper.Ctitle || paper.title,
        source: paper.Csource || paper.source,
        url: paper.url,
        description: paper.Cdescription || paper.description
    }));
});

const processedPapers2 = computed(() => {
    return conferencePapers.value.map(paper => ({
        ...paper,
        author: paper.Cauthor || paper.author,
        title: paper.Ctitle || paper.title,
        source: paper.Csource || paper.source,
        url: paper.url,
        description: paper.Cdescription || paper.description
    }));
});

const anchor = (anchorName) => {
    let anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
        anchorElement.scrollIntoView();
    }
}
</script>
<template>
    <div class="container">
        <ul class="nav">
            <li class="nav-li-header">
                <a>
                    研究成果
                </a>
            </li>
            <li class="nav-li">
                <a @click.prevent="anchor('SciResearch')">科研项目情况<div style="float: right; opacity: 0.4;">></div></a>
            </li>
            <li class="nav-li">
                <a @click.prevent="anchor('honor')">获奖情况<div style="float: right; opacity: 0.4;">></div></a>
            </li>
            <li class="nav-li">
                <a @click.prevent="anchor('Journal papers')">期刊论文<div style="float: right; opacity: 0.4;">></div></a>
            </li>
            <li class="nav-li">
                <a style="border-radius: 0 0  15px 15px;" @click.prevent="anchor('Conference papers')">会议论文<div
                        style="float: right; opacity: 0.4;">></div></a>
            </li>
        </ul>

        <div class="span9">
            <div class="wrapper">
                <div class="header">
                    <span id="SciResearch">科研项目情况</span>
                    <hr class="hr-title">
                </div>
                <div class="item">
                    <ul>
                        <li v-for="SciResProjct in others.SciResProjcts">{{ SciResProjct.content }}</li>
                    </ul>
                </div>
            </div>
            <div class="wrapper">
                <div class="header">
                    <span id="honor">获奖情况</span>
                    <hr class="hr-title">
                </div>
                <div class="item">
                    <ul>
                        <li v-for="award in others.Awards">{{ award.content }}</li>
                    </ul>
                </div>
            </div>
            <div class="wrapper">
                <div class="header">
                    <span id="Journal papers">期刊论文</span>
                    <hr class="hr-title">
                </div>
                <div class="item">
                    <ul>
                        <div class="Journalpapers">
                            <li v-for="paper in processedPapers1">
                                <span v-html="paper.author"></span>&nbsp;<a :href="paper.url" target="_blank">{{
                                    paper.title }}</a>
                                {{ paper.source }}
                                {{ paper.description }}
                                <br>
                                <br>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <div class="wrapper">
                <div class="header">
                    <span id="Conference papers">会议论文</span>
                    <hr class="hr-title">
                </div>
                <div class="item">
                    <ul>
                        <div class="Conferencepapers">
                            <li v-for="paper in processedPapers2">
                                <span v-html="paper.author"></span>&nbsp;<a :href="paper.url" target="_blank">{{
                                    paper.title }}</a>
                                {{ paper.source }}
                                {{ paper.description }}
                                <br>
                                <br>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
a {
    text-decoration: none;
}

/* 主内容部分 */
.container {
    display: flex;
    justify-content: space-around;
    /* 这样就不会倒置sticky失效了 */
    align-items: flex-start;
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    height: 100%;
}

.span9 {
    width: 900px;
}

.wrapper {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    /* padding: 5px; */
    border-radius: 15px;
    background-color: #fff;
    width: 100%;
    margin: 10px;
    padding-bottom: 20px;
    text-align: center;
}

.header:before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 35px;
    vertical-align: bottom;
    background-color: #1564be;
    margin-right: 15px;
}

.header {
    padding-top: 10px;
    padding-left: 40px;
    text-align: left;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 10px;
    color: #1564be;

}

.hr-title {
    width: 90%;
    border: 0 solid;
    padding: 1px 1px 1px;
    background-color: #1564be;
}

.hr-grade {
    width: 7%;
    /* margin-top: 10px; */
    margin-bottom: 20px;
    margin-left: 0px;
    padding: 1px 1px 1px;
    background-color: #1564be;
}

.item {
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 15px;
    text-align: left;
    width: 90%;
    display: inline-block;

    li {
        margin: 4px;
    }
}

.grade {
    font-size: 20px;
    margin-left: -25px;
    margin-top: 10px;
}

li::marker {
    color: #1564be;
    font-size: 20px;
}


img {
    width: 120px;
    height: 150px;
    object-fit: cover;
}

.studentname {
    margin-bottom: 20px;
}

/* 导航栏 */
.nav {
    border-radius: 15px 15px 15px 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    /* padding: 5px; */
    width: 25%;
    position: -webkit-sticky;
    position: sticky;
    margin: 30px 0 0;
    width: 228px;
    top: 20px;
    list-style: none;
}



.nav>li>a {
    display: block;
    margin: 0 0 -1px;
    padding: 8px 14px;
    border: 1px solid #e5e5e5;
    /* border-radius: 15px; */
}

.nav-li-header a {
    background-color: #f3f3f3;
    border-radius: 15px 15px 0 0;
    color: #1564be;
    font-size: 25px;
    font-weight: 700;
}

.nav-li a {
    color: black;
}

.nav-li a:hover {
    color: #1564be;
    background-color: #f3f3f3;
}

.Journalpapers {
    font-size: 18px;
}

.Journalpapers>li>a {
    color: #2180BC;
}

.Journalpapers>li>a:hover {
    color: #21bc40;
}

.Conferencepapers {
    font-size: 18px;
}


.Conferencepapers>li>a {
    color: #2180BC;
}

.Conferencepaper>li>a:hover {
    color: #21bc40;
}
</style>
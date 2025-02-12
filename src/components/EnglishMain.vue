<script setup>
import { ref, onMounted, computed } from 'vue';
const journalPapers = ref([]);
const conferencePapers = ref([]);
// const news = ref([]);

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

onMounted(async () => {
    const userData = await fetchData('userinfo.json');
    journalPapers.value = userData.Journalpapers || [];
    conferencePapers.value = userData.Conferencepapers || [];
});

const processedJournalPapers = computed(() => {
    return journalPapers.value.map(paper => ({
        ...paper,
    }));
});

const processedConferencePapers = computed(() => {
    return conferencePapers.value.map(paper => ({
        ...paper,
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
                    English
                </a>
            </li>
            <li class="nav-li">
                <a @click.prevent="anchor('about')">About me<div style="float: right; opacity: 0.4;">></div></a>
            </li>
            <li class="nav-li">
                <a @click.prevent="anchor('news')">News<div style="float: right; opacity: 0.4;">></div></a>
            </li>
            <li class="nav-li">
                <a @click.prevent="anchor('Journal papers')">Journal papers<div style="float: right; opacity: 0.4;">>
                    </div></a>
            </li>
            <li class="nav-li">
                <a style="border-radius: 0 0  15px 15px;" @click.prevent="anchor('Conference papers')">Conference papers
                    <div style="float: right; opacity: 0.4;">></div></a>
            </li>
        </ul>

        <div class="span9">
            <div class="wrapper">
                <div class="header">
                    <span id="about">About me</span>
                    <hr class="hr-title">
                </div>
                <div class="item">
                    <img src="../assets/images/user.jpg"
                        style="float: left; width: 130px;height: 180px;object-fit: cover;margin-top: 20px;" alt="">
                    <p>
                        I am an associated professor with <a href="https://jsjxy.jxnu.edu.cn/">the School of
                            Computer and Information Engineering</a>,
                        <a href="http://www.jxnu.edu.cn/74/list.htm">Jiangxi Normal University</a>, Nanchang, China.
                        I received my Ph.D. degree in Computer Software
                        and Theory from Wuhan University, Wuhan, China, in 2014. My current research interests
                        include evolutionary computation, swarm intelligence-based optimization algorithms,
                        GPU-based parallel computing, and their applications to practical engineering projects. As
                        the first or corresponding author, I have published more than 30 papers in international
                        well-known journals or conferences in the fields of evolutionary optimization, such as
                        <i> Information Sciences</i>,<i> Applied Soft Computing</i>,<i> GECCO</i> and <i>CEC</i>.
                    </p>
                </div>
            </div>
            <div class="wrapper">
                <div class="header">
                    <span id="news">News</span>
                    <hr class="hr-title">
                </div>
                <div class="item">
                    <ul>
                        <li>
                            <span class="pubtime">30/Aug./2024:</span>
                            Our paper entitled: "
                            <a href="https://www.sciencedirect.com/journal/expert-systems-with-applications">
                                Hybrid Niching Differential Evolution with Restart Strategy for Multimodal Optimization
                            </a>
                            " was accepted by Expert Systems With Applications.
                            <br>
                        </li>
                        <li>
                            <span class="pubtime">21/Aug./2024:</span>
                            Our paper entitled: "
                            <a href="https://iconip2024.org/">
                                Hybrid Niching Differential Evolution with Restart Strategy for Multimodal Optimization
                            </a>
                            " was accepted by the 31st International Conference on Neural Information Processing (ICONIP
                            2024).
                            <br>
                        </li>
                        <li>
                            <span class="pubtime">5/July/2024:</span>
                            Our paper entitled: "
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S1568494624007269">
                                Adaptive multi-population artificial bee colony algorithm based on fitness landscape
                                analysis
                            </a>
                            "was accepted by Applied Soft Computing.
                            <br>
                        </li>
                        <li>
                            <span class="pubtime">27/May/2024:</span>
                            Our paper entitled: "
                            <a href="https://ieeexplore.ieee.org/document/10606286">
                                Evolutionary Multi-Task Optimization with Adaptive Intensity
                            </a>
                            "was accepted by IEEE Transactions on Emerging Topics in Computational Intelligence.
                            <br>
                        </li>
                        <li>
                            <span class="pubtime">21/May/2024:</span>
                            Our paper entitled: "
                            <a href="https://link.cnki.net/urlid/11.1826.tp.20240520.1547.002">
                                Differential Evolution Algorithm Based on Adaptive Bi-coordinate Systems for
                                Mixed-variable Optimization Problem
                            </a>
                            " was accepted by Chinese Journal of Computers.
                            <br>
                        </li>
                        <li>
                            <span class="pubtime">3/May/2024:</span>
                            We are organizing an invited session, titled "
                            <a href="http://iconip2024.org/">
                                New Trends of Swarm Intelligence Optimization Assisted by Machine Learning Techniques
                            </a>
                            ", on the 31th International Conference on Neural Information Processing (ICONIP2024),
                            related submissions are welcomed.
                            <br>
                        </li>
                        <li>
                            <span class="pubtime">19/April/2024:</span>
                            Our paper entitled: "
                            <a href="https://link.cnki.net/urlid/11.1826.TP.20240419.1123.002">
                                Artificial Bee Colony Algorithm Based on Multi-neighbor Guidance
                            </a>
                            " was accepted by Expert Systems With Applications.
                            <br>
                        </li>
                        <li>
                            <span class="pubtime">3/Aug./2023:</span>
                            Our paper entitled: "
                            <a href="http://iconip2023.org/">
                                Neighborhood Learning for Artificial Bee Colony Algorithm: A Mini-survey
                            </a>
                            " was accepted by ICONIP 2023.
                            <br>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="wrapper">
                <div class="header">
                    <span id="Journal papers">Journal papers</span>
                    <hr class="hr-title">
                </div>
                <div class="item">
                    <ul>
                        <div class="Journalpapers">
                            <li v-for="paper in processedJournalPapers">
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
                    <span id="Conference papers">Conference papers</span>
                    <hr class="hr-title">
                </div>
                <div class="item">
                    <ul>
                        <div class="Conferencepapers">
                            <li v-for="paper in processedConferencePapers">
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
    font-size: 18px;
    text-align: left;
    width: 90%;
    display: inline-block;
}

.item>p {
    text-align: justify;
    margin-left: 150px;
}

.item>p>a {
    color: #148AE0;
}

.item>p>a:hover {
    color: #21bc40;
}

.item>ul>li {
    margin-bottom: 20px;
}

.item>ul>li>a {
    color: #148AE0;
}

.item>ul>li>a:hover {
    color: #21bc40;
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

.pubtime {
    color: #80A4F3;
}

.new {
    margin-bottom: 10px;
}

.new>a {
    letter-spacing: 1px;
    color: black;
}

.new>a:hover {
    letter-spacing: 1px;
    text-decoration: underline dotted black;
    color: #2152bc;
}
</style>
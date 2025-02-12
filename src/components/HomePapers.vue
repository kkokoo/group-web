<script setup>
import router from '@/router';
</script>

<template>
    <div class="content">
        <span class="area">
            <div class="wrapper">
                <div class="header">
                    <span>课题组介绍</span>
                    <hr>
                </div>

                <div class="item">
                    江西理工大学 计算智能实验室（JXUST-CI Lab） 由信息工程学院李伟副教授（硕士生导师）创建。
                    自2014年起，实验室开展了智能计算、进化算法、机器学习及智能优化等理论与应用研究。
                    计算智能实验室一直跟踪智能仿真优化与调度、进化计算和进化建模的国内外研究前沿，
                    在差分进化算法、粒子群优化算法、蚁群优化算法和协同进化搜索策略等智能优化技术进行了较为深入的科研，已经具备将各种智能优化算法运用求解复杂系统模型下优化问题的能力；
                    现已承担国家重点研发计划、国家自然科学基金等项目，并在国内外高水平期刊发表论文40余篇。曾组织多次智能计算及其应用国际会议，与国内外及港澳台多个进化计算顶尖实验室有项目合作。
                </div>
            </div>
            <div class="wrapper">
                <div class="header">
                    <span>课题组动态</span> <span class="more"><a @click="router.push('/InfoPublic')">更多新闻&gt;&gt;</a></span>
                    <hr>
                </div>
                <!-- 主页面的新闻增删 -->
                <div class="news-item"><a @click="router.push('/InfoPublic')" class="news-link">
                        <span class="news-title">研究成果在《Expert Systems With Applications》上发表</span> <span
                            class="pubtime">2024-8-30</span></a>
                </div>
                <div class="news-item"><a @click="router.push('/InfoPublic')" class="news-link">
                        <span class="news-title">研究成果在《ICONIP 2024》上发表</span> <span class="pubtime">2024-8-21</span></a>
                </div>
                <div class="news-item"><a @click="router.push('/InfoPublic')" class="news-link">
                        <span class="news-title">研究成果在《Applied Soft Computing》上发表</span> <span
                            class="pubtime">2024-7-5</span></a>
                </div>
                <div class="news-item"><a @click="router.push('/InfoPublic')" class="news-link">
                        <span class="news-title">研究成果在《IEEE Transactions on Emerging Topics in Computational
                            Intelligence》上发表</span> <span class="pubtime">2024-5-27</span></a>
                </div>
                <div class="news-item"><a @click="router.push('/InfoPublic')" class="news-link">
                        <span class="news-title">研究成果在《计算机学报》上发表</span> <span class="pubtime">2024-5-21</span></a>
                </div>
                <div class="news-item"><a @click="router.push('/InfoPublic')" class="news-link">
                        <span class="news-title">《ICONIP2024》会议特邀</span> <span class="pubtime">2024-4-3</span></a>
                </div>
            </div>
        </span>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

a:hover {
    color: #1564be;
    -webkit-transition-duration: 600ms;
    transition-duration: 600ms;
    cursor: pointer;
}

.item {
    line-height: 1.5;
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 15px;
    text-align: justify;
    width: 85%;
    display: inline-block;
}

.area {
    width: 1200px;
    display: flex;
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
    color: #3b7cee;
}

.pubtime {
    float: right;
    color: #80A4F3;
    font-weight: 200px;
}

.more {
    margin-right: 50px;
    float: right;
}

.wrapper {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    /* padding: 5px; */
    border-radius: 15px;
    background-color: #fff;
    width: 580px;
    height: 300px;
    margin: 10px;
    padding-bottom: 20px;
    text-align: center;
}

a {
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    text-decoration: none;
    color: #606266;
}

.news-link {
    display: flex;
    font-size: 15px;
}

.news-item {
    margin-top: 15px;
    margin-right: 15px;
    text-align: left;
    width: 80%;
    /* 超出的文字部分隐藏 */
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
}

.news-title {
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 400px;
}

hr {
    width: 90%;
    border: 0 solid;
    padding: 1px 1px 1px;
    background-color: #1564be;
}

@media screen and (max-width:1240px) {
    .content {
        width: 1240px;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }
}
</style>
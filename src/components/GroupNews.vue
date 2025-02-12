<script setup></script>

<template>
    <div class="container">
        <ul class="nav">
            <li class="nav-li-header">
                <a>
                    课题组动态
                </a>
            </li>
        </ul>

        <div class="span9">
            <div class="wrapper">
                <div class="header">
                    <span>课题组动态</span>
                    <hr class="hr-title">
                </div>
                <div class="item">
                    <ul>
                        <li>
                            <div class="date">2024年8月30日</div>
                            <div>
                                我们的论文题为：“
                                <a href="https://www.sciencedirect.com/journal/expert-systems-with-applications">
                                    Artificial Bee Colony Algorithm Based on Multi-neighbor Guidance
                                </a>
                                ”，被Expert Systems With Applications收录。
                            </div>
                            <br>
                        </li>
                        <li>
                            <div class="date">2024年8月21日</div>
                            <div>
                                我们的论文题为：“
                                <a href="https://iconip2024.org/">
                                    Hybrid Niching Differential Evolution with Restart Strategy for Multimodal
                                    Optimization
                                </a>
                                ”，被第31届国际神经信息处理大会（ICONIP 2024） 收录。
                                <br>
                            </div>
                        </li>
                        <li>
                            <div class="date">2024年7月5日</div>
                            <div>
                                我们的论文题为：“
                                <a class="https://www.sciencedirect.com/science/article/abs/pii/S1568494624007269">
                                    Adaptive multi-population artificial bee colony algorithm based on fitness landscape
                                    analysis
                                </a>
                                ”，被Applied Soft Computing收录。
                                <br>
                            </div>
                            <br>
                        </li>
                        <li>
                            <div class="date">2024年5月27日</div>
                            <div>
                                我们的论文题为：“
                                <a href="https://ieeexplore.ieee.org/document/10606286">
                                    Evolutionary Multi-Task Optimization with Adaptive Intensity
                                </a>
                                ”，被Expert Systems With Applications收录。
                                <br>
                            </div>
                            <br>
                        </li>
                        <li>
                            <div class="date">2024年5月3日</div>
                            <div>
                                我们正在组织一场题为：“
                                <a href="https://ieeexplore.ieee.org/document/10606286">
                                    机器学习技术辅助的群智能优化新趋势
                                </a>
                                ”，的特邀会议，该会议将在第31届国际神经信息处理大会（ICONIP2024）上举行，欢迎提交相关稿件。
                                <br>
                            </div>
                        </li>
                        <li>
                            <div class="date">2024年4月3日</div>
                            <div>
                                我们的论文题为：“
                                <a href="https://link.cnki.net/urlid/11.1826.TP.20240419.1123.002">
                                    Adaptive multi-neighborhood artificial bee colony algorithm based on reinforcement
                                    learning
                                </a>
                                ”，被Chinese Journal of Computers收录。
                                <br>
                            </div>
                            <br>
                        </li>
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
    width: 94%;
    border: 0 solid;
    padding: 1px 1px 1px;
    background-color: #1564be;
}


.item {
    font-size: 18px;
    margin-top: 15px;
    text-align: left;
    width: 90%;
    display: inline-block;
}

.item>ul>li {
    margin-top: 25px;
    margin-bottom: 25px;
    text-align: justify;
    /* list-style-type: none; */
}

.date {
    font-size: 20px;
    font-weight: 600;
    color: #1564be;
    margin-bottom: 10px;
}

.item>ul>li>div>a {
    text-decoration: underline;
    text-underline-position: under;
    color: rgb(8, 162, 233);
}

.item>ul>li>div>a:hover {
    text-decoration: underline;
    text-underline-position: under;
    color: #21bc40;
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
    border-radius: 15px 15px 15px 15px;
    color: rgb(8, 162, 233);
    font-size: 25px;
    font-weight: 700;
}
</style>
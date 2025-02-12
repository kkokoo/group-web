<script setup>
import { ref, onMounted } from 'vue';

const studentinfo = ref({});
const others = ref([]);
const grades = ref([])

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
    const studentData = await fetchData('studentinfo.json');
    studentinfo.value = studentData;
    grades.value = Object.keys(studentData)
        .sort((a, b) => b - a)
        .map(year => ({
            year,
            students: studentinfo.value[year]
        }));
    // console.log(grades.value)
    const othersData = await fetchData('others.json');
    others.value = othersData;
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
                <a>课题组成员</a>
            </li>
            <li class="nav-li">
                <a @click.prevent="anchor('Mentor')">导师介绍<div style="float: right; opacity: 0.4;">>
                    </div></a>
            </li>
            <li class="nav-li">
                <a @click.prevent="anchor('now')"> 在校组员<div style="float: right; opacity: 0.4;">></div></a>
            </li>
            <li class="nav-li">
                <a style="border-radius: 0 0  15px 15px;" @click.prevent="anchor('pass')">已毕业组员<div
                        style="float: right; opacity: 0.4;">>
                    </div>
                </a>
            </li>
        </ul>

        <div class="span9">
            <div class="wrapper">
                <div class="header">
                    <span id="Mentor">导师介绍</span>
                    <hr class="hr-title">
                </div>
                <!-- 添加老师的复制处 -->
                <div class="item-Mentor">
                    <img class="userimg" src="../assets/images/user.jpg" alt="">
                    <!-- <div style="width: 120px; text-align-last:justify; margin-bottom: 10px;">周新宇教授</div> -->
                    <p class="item-Mentor1">周新宇，男，1987年生，博士，江西师范大学副教授（自2021年1月起为校聘教授），博士生导师，江西修水人，现任计算机信息工程学院人工智能系主任。
                        2014年毕业于武汉大学计算机软件与理论专业获工学博士学位，2008年和2011年毕业于江西理工大学计算机科学与技术专业分别获工学学士和硕士学位。
                        目前主要从事智能优化算法设计及应用方面的研究，主持了国家自然科学基金项目3项、江西省自然科学基金项目3项、国家重点实验室开放基金项目1项、江西省教育厅科技计划项目1项；
                        以第一作者和通讯作者发表了论文近40篇，含中国计算机学会CCF推荐的期刊和会议论文20余篇，1篇中文期刊论文被评为“领跑者5000——中国精品科技期刊顶尖学术论文”，2篇中文期刊论文被评为“三高论文”、2篇英文会议论文获“最佳论文奖”；
                        担任了多个权威期刊和会议的审稿人，如：Information
                        Sciences、计算机学报、自动化学报、IEEE CEC等。指导研究生多次获批江西省研究生创新基金项目、荣获研究生国家奖学金，发表了相关的高水平学术论文等。
                    </p>
                    <br>
                    <div class="email">邮箱：<span style="color: #80A4F3;">xyzhou@jxnu.edu.cn</span> 或 <span
                            style="color: #80A4F3;">xyzhou@whu.edu.cn</span>
                    </div>
                    <div class="Mentor-header">
                        <div>教育和工作经历</div>
                        <!-- <hr class="hr-induction1"> -->
                    </div>
                    <div class="item-Mentor">
                        <ul>
                            <li>2021.01-至今，江西师范大学，校聘教授</li>
                            <li>2019.12-2020.12， <a class="Mentor-a" href="https://www.surrey.ac.uk/">University of
                                    Surrey</a>，国家公派访问学者，导师：<a class="Mentor-a"
                                    href="https://www.surrey.ac.uk/people/yaochu-jin">Yaochu
                                    Jin</a> 教授</li>
                            <li>2017.12-至今，江西师范大学，副教授</li>
                            <li>2014.07-2017.11，江西师范大学，讲师</li>
                            <li>2011.09-2014.06，武汉大学，博士</li>
                            <li>2008.09-2011.06，江西理工大学，硕士</li>
                            <li>2004.09-2008.06，江西理工大学，学士</li>
                        </ul>
                    </div>
                    <div class="Mentor-header">
                        <div>学术服务</div>
                        <!-- <hr class="hr-induction2"> -->
                    </div>
                    <div class="item-Mentor">
                        <ul>
                            <li v-for="AcademicService in others.AcademicServices">{{ AcademicService.content }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <div class="header">
                    <span id="now">在校组员</span>
                    <hr class="hr-title">
                </div>
                <div class="item">
                    <div v-for="grade in grades.slice(0, 3)">
                        <li class="grade" :id="grade.year">{{ grade.year }}</li>
                        <div class="content">
                            <div v-for="student in grade.students" class="student">
                                <img :src="student.photo" alt="Student Photo">
                                <div class="studentname">{{ student.name }}</div>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <div class="header">
                    <span id="pass">已毕业组员</span>
                    <hr class="hr-title">
                </div>
                <div class="item">
                    <div v-for="grade in grades.slice(3)">
                        <li class="grade" :id="grade.year">{{ grade.year }}</li>
                        <div class="content">
                            <div v-for="student in grade.students" class="student">
                                <img :src="student.photo" alt="Student Photo">
                                <div class="studentname">{{ student.name }}</div>
                                <div class="studentplace">{{ student.workplace }}</div>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
a {
    text-decoration: none;
}

.content1 {
    width: 96%;
    margin: 40px auto;
    border-top: 1px solid #1564be;
    position: relative;
}

.content1 .title {
    width: 130px;
    height: 50px;
    background: #FFFFFF;
    text-align: center;
    line-height: 50px;
    font-size: 25px;
    color: #1564be;
    position: absolute;
    font-weight: 100;
    top: -28px;
    left: 300px;
}

.Mentor-a {
    font-size: 16px;
    font-family: times new roman, serif;
    color: #2f64cf;
}

a:hover {
    color: #23be15;
}


.Mentor-header {
    font-size: 20px;
    margin-top: 20px;
    color: #1564be;
    text-decoration: underline;
    text-underline-position: under;
    margin-bottom: 20px
}


.hr-induction1 {
    width: 19%;
    border: 0 solid;
    padding: 1px 1px 1px;
    background-color: #1564be;
    margin-left: 20px;
    margin-bottom: 10px;
}

.hr-induction2 {
    width: 10%;
    border: 0 solid;
    padding: 1px 1px 1px;
    background-color: #1564be;
    margin-left: 28px;
    margin-bottom: 10px;
}

/* 导师介绍部分 */
.item-Mentor {
    width: 800px;
    margin-left: 40px;
    text-align: left;

}

.item-Mentor1 {
    line-height: 1.5;
    text-align: justify;
    /* text-align-last: justify; */
}

.userimg {
    margin-top: 20px;
}

.more-Mentor {
    float: right;

    a {
        color: #606266;
    }
}

.more-Mentor>a:hover {
    color: #1564be;
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

.content {
    display: grid;
    grid-template-columns: auto auto auto auto;
}

.hr-title {
    width: 92%;
    border: 0 solid;
    padding: 1px 1px 1px;
    background-color: #1564be;
}

.hr-grade {
    width: 7%;
    margin-bottom: 20px;
    margin-left: 0px;
    padding: 1px 1px 1px;
    background-color: #1564be;
}

.item {
    margin-top: 15px;
    width: 800px;
    justify-content: center;
    display: inline-block;
}

.content2 {
    width: 94%;
    margin: 40px auto;
    border-top: 1px solid #1564be;
    position: relative;
}



.grade {
    text-decoration: underline;
    text-underline-position: under;
    font-size: 20px;
    /* margin-left: -25px; */
    margin-top: 10px;
    color: #1564be;
    text-align: left;
    margin-bottom: 10px;
}

/* .content2>.grade {
    width: 65px;
    height: 50px;
    background: #FFFFFF;
    text-align: left;
    line-height: 35px;
    font-size: 25px;
    color: #1564be;
    position: absolute;
    font-weight: 100;
    top: -28px;
    left: 355px;
} */

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
    width: 120px;
    text-align: justify;
    text-align-last: justify;
    margin: 0 auto;
}

.studentplace {
    width: 120px;
    text-align: justify;
    text-align-last: justify;
    margin: 0 auto;
}

/* 导航栏 */
.nav {
    border-radius: 15px 15px 15px 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
</style>
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="header">
        <nav>
            <div class="row" style="display: flex; justify-content: center;">
                <div class="span2" align="center">
                    <img src="../assets/images/logo.png">
                </div>
                <div class="span5">
                    <div>智能计算课题组</div>
                    <br />
                </div>
                <div style="margin-top: 35px;">
                    <RouterLink to="/"><strong>首页</strong></RouterLink>
                    <RouterLink to="/GroupMembers"><strong>课题组成员</strong></RouterLink>
                    <RouterLink to="/InfoPublic"><strong>课题组动态</strong></RouterLink>
                    <RouterLink to="/SciResearch"><strong>研究成果</strong></RouterLink>
                    <RouterLink to="/GroupPhotos"><strong>课题组相册</strong></RouterLink>
                    <RouterLink to="/English"><strong>English</strong></RouterLink>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
strong {
    font-size: 20px;
}

.header {
    display: flex;
    justify-content: center;
    width: 100%;
}

nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: flex-start;
    color: #ffffff;
    background-color: #1564be;
    width: 100%;
    height: 440px;
}

nav a.router-link-exact-active {
    color: #ffffff;
}

nav a.router-link-exact-active:hover {
    color: #ffffff;
}

nav a {
    display: inline-block;
    color: #999999;
    font-size: 1rem;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    text-decoration: none;
}

nav a:hover {
    color: #ffffff;
}

nav a:first-of-type {
    border: 0;
}


img {
    width: 120px;
}

.span2 {
    width: 140px;
}

.row {
    margin-top: 25px;
}


.span5 {
    width: 380px;
    height: 50px;
    margin-top: 20px;
    font-size: 45px;

    div {
        width: 320px;
    }
}

@media screen and (max-width:1240px) {
    .header {
        display: flex;
        justify-content: center;
        width: 1240px;
    }
}
</style>

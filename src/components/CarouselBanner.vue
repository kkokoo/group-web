<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

import router from '@/router';

const items = ref([]);
const currentIndex = ref(0);
const interval = ref(null);

async function fetchData() {
    try {
        const response = await fetch('photos.json');
        const data = await response.json();
        items.value = data.slice(0, 5);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function move() {
    currentIndex.value = (currentIndex.value + 1) % items.value.length;
}

function moveLeft() {
    currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length;
}

function moveRight() {
    currentIndex.value = (currentIndex.value + 1) % items.value.length;
}

function moveToIndex(index) {
    currentIndex.value = index;
}

onMounted(async () => {
    await fetchData();
    move()
    interval.value = setInterval(moveRight, 1500);

    const content = document.querySelector('.content');
    content.addEventListener('mouseover', () => {
        clearInterval(interval.value);
        interval.value = setInterval(moveRight, 5000);
    });

    content.addEventListener('mouseleave', () => {
        clearInterval(interval.value);
        interval.value = setInterval(moveRight, 3000);
    });
});

onUnmounted(() => {
    clearInterval(interval.value);
});
</script>


<template>
    <div class="row">
        <span class="lunbo">
            <div class="content">
                <ul>
                    <li v-for="(item, index) in items" :key="index"
                        :class="['item', { active: currentIndex === index }]">
                        <a @click="router.push('/InfoPublic')"><img :src="item.src" alt=""></a>
                    </li>
                </ul>
                <button id="btn-left" @click="moveLeft">&lt;</button>
                <button id="btn-right" @click="moveRight">&gt;</button>
                <ul id="circle">
                    <li v-for="(circle, index) in items" :key="index"
                        :class="['circle', { white: currentIndex === index }]" @click="moveToIndex(index)"></li>
                </ul>
            </div>
        </span>

    </div>
</template>


<style scoped>
.row {
    display: flex;
    justify-content: center;
}

a {
    list-style: none;
}

li {
    list-style: none;
    margin: 10px;
    height: 450px;
}

.lunbo {
    width: 1200px;
    margin-top: -270px;
    margin-bottom: 40px;

}

.content {
    width: 1200px;
    height: 500px;
    margin: 0 auto;
    background-color: #F3F3F3;
    border-radius: 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    position: relative;
    overflow: hidden;
}

#item {
    width: 100%;
}

.item {
    position: absolute;
    width: 1200px;
    height: 500px;
    opacity: 0;
    transition: all 1s;
    font: 1em sans-serif;
}

.item.active {
    opacity: 1;
}

img {
    width: 1180px;
    height: 480px;
    object-fit: cover;
}

#btn-left {
    width: 30px;
    height: 69px;
    font-size: 30px;
    color: white;
    border-style: none;
    background-color: rgba(0, 0, 0, 0.4);
    line-height: 69px;
    padding-left: 5px;
    z-index: 10;
    /*始终显示在图片的上层*/
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-60%);
    /*使按钮向上偏移居中对齐*/
    cursor: pointer;
    opacity: 0;
    /*平时隐藏*/
}

.lunbo #btn-left {
    /*鼠标滑入，显示图标*/
    opacity: 1;
}

#btn-right {
    width: 30px;
    height: 69px;
    font-size: 30px;
    color: white;
    border-style: none;
    background-color: rgba(0, 0, 0, 0.4);
    line-height: 69px;
    padding-left: 5px;
    z-index: 10;
    position: absolute;
    right: 0;
    top: 50%;
    cursor: pointer;
    opacity: 0;
    transform: translateY(-60%);
}

.lunbo #btn-right {
    opacity: 1;
}

#circle {
    height: 20px;
    display: flex;
    position: absolute;
    bottom: 35px;
    right: 25px;
}

.circle {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    margin: 5px;
}

.white {
    background-color: #ffffff;
}

@media screen and (max-width:1240px) {
    .row {
        width: 1240px;
        display: flex;
        justify-content: center;
    }
}
</style>

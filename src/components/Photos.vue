<script setup>
import { ref, onMounted } from 'vue';

const photosData = ref([]);

async function fetchData() {
    try {
        const response = await fetch('photos.json')
        const data = await response.json()
        photosData.value = data
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

onMounted(async () => {
    await fetchData();
});

</script>

<template>
    <div class="content">
        <span class="area">
            <div class="wrapper">
                <div class="header">
                    <span>照片墙</span>
                    <hr>
                </div>
                <div v-viewer class="item">
                    <span v-for="photo in photosData" :key="photo.title">
                        <img :src="photo.src" :alt="photo.title">
                        <p>{{ photo.title }}</p>
                    </span>
                </div>
            </div>
        </span>
    </div>
    <div>

    </div>
</template>

<style scoped>
img {
    width: 200px;
    height: 150px;
    object-fit: cover;
}

.content {
    display: flex;
    justify-content: center;
}

.area {
    width: 1200px;
    display: flex;
}


.item {
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 15px;
    text-align: left;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;

    span {
        p {
            margin-top: 10px;
            margin-bottom: 30px;
            width: 200px;
        }
    }
}


.wrapper {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    /* padding: 5px; */
    border-radius: 15px;
    background-color: #fff;
    width: 1200px;
    /* height: 200px; */
    /* margin: 0 auto; */
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
    }
}
</style>
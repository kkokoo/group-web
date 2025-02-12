<template>
    <!-- 回到顶部 -->
    <div id="GoTop" @click="goToTop">
        <div style="width: 100px; color: rgb(8, 162, 233); font-weight: 700;">回到顶部</div>
        <span class="go-top">></span>
    </div>

</template>

<script>

export default {
    name: "GoTop",
    setup() {
        const goToTop = () => {
            (function smoothScroll() {
                const currentScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
                if (currentScroll > 0) {
                    window.requestAnimationFrame(smoothScroll);
                    window.scrollTo(0, currentScroll - currentScroll / 10);
                }
            })();
        };

        // 返回给模板的方法  
        return {
            goToTop
        };
    }
};
</script>

<style scoped>
.go-top {
    transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    /* Internet Explorer 9*/
    -moz-transform: rotate(-90deg);
    /* Firefox */
    -webkit-transform: rotate(-90deg);
    /* Safari 和 Chrome */
    -o-transform: rotate(-90deg);
    /* Opera */
}

#GoTop {
    width: 30px;
    height: 30px;
    position: fixed;
    right: 120px;
    bottom: 80px;
    /* border-radius: 100%; */
    z-index: 99999999;
    cursor: pointer;
}

#GoTop>span {
    display: block;
    width: 100%;
    height: 100%;
    color: rgb(8, 162, 233);
    font-size: 50px;
}
</style>
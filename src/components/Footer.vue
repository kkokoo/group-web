<script setup>
</script>
<template>
    <div id="footer">
        <!-- <div class="logo">
                <img src="../assets/images/logo_xueyuan.png" alt="logo图">
            </div>
            <p class="title"><strong>智能计算课题组</strong></p> -->
        <p class="address_tel_fax">
            <span>地址： 江西省南昌市紫阳大道99号计算机信息工程学院 </span>
            <span> 邮政编码：330022</span>
        <div>邮箱： xyzhou@jxnu.edu.cn OR xyzhou@whu.edu.cn</div>
        </p>
        <p class="copy">Copyright &copy; 2018 - {{ new Date().getFullYear() }} 智能计算课题组</p>
    </div>

</template>

<style scoped>
hr {
    margin-top: 20px;
    color: #d7d7d7;
    padding: 2px;
    border-style: none;
}

#footer {
    width: 100%;
    height: 100%;
    color: #fff;
    background: #1564be;
    overflow: hidden;
    text-align: center;
}

.logo {
    width: 40px;
    height: 40px;
    margin: 10px auto;
}

.logo img {
    width: 100%;
    height: 100%;

}

.title {
    font-size: 14px;
    margin-bottom: 20px;
}

.address_tel_fax {
    color: #d3d3d3;
    font-size: 14px;
    margin: 10px 0;
}

.email_wx {
    color: #d3d3d3;
    font-size: 14px;
}

.copy {
    color: #d3d3d3;
    font-size: 14px;
    margin: 15px 0 10px;
}

@media screen and (max-width:1240px) {
    #footer {
        width: 100%;
        height: 100%;
        color: #fff;
        background: #1564be;
        overflow: hidden;
        text-align: center;
        width: 1240px;
    }
}
</style>
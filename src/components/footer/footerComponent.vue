<template>
    <div>
        <div class="el-blue_this g-color-white-opacity-0_8">
            <div class="container g-mb-60">
                <div class="row">
                    <div class="col-lg-3 col-md-6 g-mb-40 g-mb-0--lg">
                        <div class="u-heading-v2-3--bottom g-brd-white-opacity-0_8 g-mb-20"><h2
                                class="u-heading-v2__title h6 text-uppercase mb-0">
                            关于我
                        </h2></div>
                        <div class="g-mb-30"><p>
                            详细请加qq：1150118968</p>
                          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1150118968&amp;site=qq&amp;menu=yes"><img title="点击这里给我发消息" border="0" alt="点击这里给我发消息" width="73" height="24" src="http://wpa.qq.com/pa?p=1:1150118968:1" /></a>
                        </div>
                        <address class="mb-0">
                            <div class="g-mb-30"><h4 class="h6 g-font-weight-600">Email Address</h4>
                                <p class="g-mb-10"><a href="mailto:1150118968@qq.com" class="g-color-white-opacity-0_8">1150118968@qq.com</a>
                                </p></div>
                            <div class="g-mb-30"><h4 class="h6 g-font-weight-600">编程了解</h4>
                                <p class="g-mb-10"><a href="#" class="g-color-white-opacity-0_8"><i
                                        class="fa fa-qq"> 1150118968</i></a></p>
                            </div>
                        </address>
                    </div>

                    <div class="col-lg-3 col-md-6 g-mb-40 g-mb-0--lg">
                        <div class="u-heading-v2-3--bottom g-brd-white-opacity-0_8 g-mb-20"><h2
                                class="u-heading-v2__title h6 text-uppercase mb-0">
                            相关链接
                        </h2></div>
                        <ul class="list-unstyled">
                            <li class="g-mb-5">
                                <i class="fa fa-angle-right g-mr-5"></i>
                                <a href="https://baidu.com" class="g-color-white-opacity-0_8">版权说明</a>
                            </li>
                            <li class="g-mb-5">
                                <i class="fa fa-angle-right g-mr-5"></i>
                                <a href="https://baidu.com" class="g-color-white-opacity-0_8">用户隐私以及服务条款</a>
                            </li>
                            <li class="g-mb-5">
                                <i class="fa fa-angle-right g-mr-5"></i>
                                <a href="http://www.beian.miit.gov.cn/state/outPortal/loginPortal.action" class="g-color-white-opacity-0_8">备案号</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 g-mb-40 g-mb-0--lg">
                        <div class="u-heading-v2-3--bottom g-brd-white-opacity-0_8 g-mb-20"><h2
                                class="u-heading-v2__title h6 text-uppercase mb-0">
                            关注我
                        </h2></div>
                        <p>
                            在任何你常用的社交平台上关注我们，并告诉我们你的任何想法和建议！
                        </p>
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item g-mr-10">
                                <a class="u-icon-v3 u-icon-size--xs g-bg-white-opacity-0_1 g-bg-white-opacity-0_2--hover g-color-white-opacity-0_6 rounded" href="https://weibo.com/wuruofeng"><i class="fa fa-weibo"></i></a>
                            </li>
                            <li class="list-inline-item g-mr-10">
                                <a class="u-icon-v3 u-icon-size--xs g-bg-white-opacity-0_1 g-bg-white-opacity-0_2--hover g-color-white-opacity-0_6 rounded" href="https://baidu.com/"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li class="list-inline-item g-mr-10">
                                <a class="u-icon-v3 u-icon-size--xs g-bg-white-opacity-0_1 g-bg-white-opacity-0_2--hover g-color-white-opacity-0_6 rounded" href="https://wuruofeng.vip"><i class="fa fa-google"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 ">
                        <div class="u-heading-v2-3--bottom g-brd-white-opacity-0_8 g-mb-20"><h2
                                class="u-heading-v2__title h6 text-uppercase mb-0">
                            邮件列表
                        </h2></div>
                        <div id="SubscribeMailNoty" class="g-mb-30">
                            <p>
                                perfect
                            </p>
                            <div class="input-group border-0 g-rounded-30">
                                <input type="email" placeholder="E-Mail Address" class="form-control border-0 g-rounded-left-30 g-px-12 g-py-8" style="height: 39px;font-weight: 300;"><div class="input-group-addon border-0 p-0"><button type="submit" class="btn u-btn-primary g-rounded-right-30 g-px-12 g-py-8" style="font-weight: 300">立即订阅</button></div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div class="g-bg-black-opacity-0_1 g-color-white-opacity-0_8 text-center g-py-20">
                <div class="container">
                    <small class="g-font-size-default g-mr-10 g-mb-10 g-mb-0--md" style="font-weight: 300">
                        2020 © All Rights Reserved by me  <i class="color-red fa fa-heart"></i>    Redesinged by czq
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footerComponent"
    }
</script>

<style scoped>


    .el-blue_this{
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding-top: 4.28571rem!important;
        background-image: radial-gradient(circle farthest-side at 50% 50%,#2294d7,#275296);
        /*margin-top: 200px;*/
    }
    .row{
        display: flex;
        flex-wrap: wrap;
        margin-left: -15px;
        margin-right: -15px;
        -ms-flex-wrap:wrap;
        display: -ms-flexbox;
    }
    .mb-0{
        margin-bottom: 0!important;
    }
    .h6{
        font-size: 1rem;
        line-height: 1.4;
        font-weight: 500;
    }
    .u-heading-v2-3--bottom::after{
        margin-top: 1.07143rem;
    }
    .u-heading-v2-3--bottom::after,.u-heading-v2-3--top::before{
        width: 5rem;
        border-top-width: 1px;
    }
    .u-heading-v2-3--bottom::after{
        content: "";
        display: inline-block;
        border-top-style: solid;
        border-color: inherit;
    }
    *,::after,::before{
        box-sizing: border-box;
    }
    .container{
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        margin-left: auto;
        margin-right: auto;
    }
    p{
        margin-top: 0;
        margin-bottom: 1rem;
        font-weight: 300;
    }
    .list-unstyled{
        font-weight: 300;
    }
    .mb-0{
        margin-bottom: 0!important;
    }
    .list-inline{
        padding-left: 0;
        list-style: none;
    }
    .input-group-addon{
        min-width: 38px;
        background-color: transparent;
        border-color: #ccc;
        transition: border-color .15s ease-in-out 0s;
    }
    .input-group-addon:last-child{
        border-top-left-radius:0;
        border-top-right-radius:inherit;
        border-bottom-right-radius:inherit;
        border-bottom-left-radius:0;
    }
    .color-red{
        color: red!important;
    }



</style>

<template>
    <div>
    <div class="blur"></div>
    <div class="modal">

        <i class="fas fa-times" ></i>
        <p class="w3-xxlarge">Great choise!</p>
        <p class="w3-medium">You have added 1 product to your cart.</p>
        <div>
            <button class="w3-button w3-red w3-padding-large w3-large">back to store</button>
            <button class="w3-button w3-black w3-padding-large w3-large" >see your shopping cart <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        methods:{
        }
    }
</script>

<style scoped lang="scss">
@import "./../../assets/css/base.scss";
@import "./../../assets/css/positions";
@import "./../../assets/css/space";
@import "./../../assets/css/text";

.blur{
    position: absolute;
    z-index: 4;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.6);
    top:0;
    left: 0;
}

    .modal{
        width: 900px;
        height: 240px;
        background: #fff;
        text-align: center;
        padding-top: 50px;
        position: absolute;
        z-index: 5;
        top:25%;
        left: 25%;


        i.fa-times{
            position: absolute;
            right: 50px;
            top:40px;
            font-size: 30px;
            cursor:pointer;

        }

        p{
            font-family: "Montserrat", sans-serif;

            margin: 0 0 15px;
        }
        div{
            button{
                margin-left: 15px;
            }
        }
    }


</style>
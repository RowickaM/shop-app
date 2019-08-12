<template>
    <div class="product">
        <div class="pc">{{product.count}}<span></span></div>
        <div  class="info-product">
            <div class="pic">img</div>
            <div class="info">
                <div class="name"><h3>{{product.name}}</h3></div>
                <div class="price-pc"><h3>${{product.price}}/pc.</h3></div>
                <div class="price"><h3>${{product.price * product.count}}</h3></div>
            </div>
        </div>
        <div class="remove">
            <button class="w3-button w3-black">REMOVE</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cartItem",
        props: ['product']
    }
</script>

<style scoped lang="scss">
    @import "./../../assets/css/base.scss";
    @import "./../../assets/css/positions.scss";
    @import "./../../assets/css/text.scss";
    @import "./../../assets/css/space.scss";

    .product{
        width: 920px;
        margin: 15px auto;
        display: flex;
        justify-content: space-between;
        font-family: "Montserrat", sans-serif;
        position: relative;

        .pc{
            font-size: 35px;
            :before{
                content: 'x';
                font-size: 35px;
                vertical-align: text-bottom;
            }
        }
        .info-product {
            display: flex;
            .pic{
                width:120px;
                height: 150px;
                background: #844d48 ;
            }
            .info {
                width: 550px;
            }
        }
    }

    .w3-button{
        padding: 5px 8px;
    }
    .remove{
        position: absolute;
        right: 0;
        top: 43%;
    }
    .info{
        margin: auto 0 auto 30px;
        display: flex;
        flex-direction: column;
        height: 100px;
        justify-content: space-between;
        h3 {
            margin: 0;
            font-weight: bold;
        }
        .price-pc h3{
            font-weight: normal;
         }

        .name,.price{
            font-weight: bold;
        }
    }
</style>
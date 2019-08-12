<template>
    <div>
        <Header/>
        <div class="short-info">
            <div id="img"></div>
            <div class="w3-margin-left-large">
                <h1>Sage Derby</h1>
                <h5>product id</h5>
                <h3 class="bold">Gabcube</h3>
                <p>Suspendisse potenti. Nullam porttitor lacus at turpis.</p>
                <h2 class="bold">$192.90</h2>
            </div>
        </div>
        <div class="description">
            In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie
            lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue
            quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent
            blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer
            pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse
            ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.
            Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor
            pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.
            Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat
            ante.
        </div>
        <div class="buttons">
            <button class="w3-button w3-black w3-padding-large w3-large">BACK TO STORE</button>
            <button class="w3-button w3-green w3-padding-large w3-large" >ADD TO CART <i class="fa fa-shopping-cart w3-margin-right"></i></button>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/misc/Header";

    export default {
        name: "ProductsDetails",
        components: {Header}
    }
</script>

<style scoped lang="scss">

    @import "./../../assets/css/base.scss";
    @import "./../../assets/css/positions.scss";
    @import "./../../assets/css/space.scss";
    @import "./../../assets/css/text.scss";

    #img {
        min-width: 386px;
        min-height: 482px;
        background: #550000;
    }

    .short-info {
        display: flex;
        width: 98%;
        margin: 0 auto;
        justify-content: space-between;
        .w3-margin-left-large{
            margin-left: 70px;
            h1{
                margin-bottom: 0;
            }
            h5,h3,h2,p{
                margin-top:10px;
                margin-bottom: 0;
            }
            p{
                font-size: 14px;
            }
        }
    }

    .description{
        padding: 30px 10px;
        font-size: 15px;
    }

    .bold{
        font-weight: bold;
    }

    /*386482*/

</style>
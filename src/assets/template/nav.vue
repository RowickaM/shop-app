<template>
    <div id="nav">
        <div>
            <h4>LOGO</h4>
        </div>
        <nav class="padding-64 text-large">
            <ul>
                <li class="nav-item">Shirts</li>
                <li class="nav-item">Dresses</li>
                <li class="nav-item">Jeans
                    <ul>
                        <li class="nav-item">Skinny</li>
                        <li class="nav-item">Relaxed</li>
                        <li class="nav-item">Bootcut</li>
                        <li class="nav-item">Straight</li>
                    </ul>
                </li>
                <li class="nav-item">Jacket</li>
                <li class="nav-item">Gymwear</li>
                <li class="nav-item">Blazers</li>
                <li class="nav-item">Shoes</li>
            </ul>

            <ul>
                <li>Contact</li>
                <li>Newsletter</li>
                <li>Subscribe</li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "nav"
    }
</script>

<style scoped lang="scss">
    @import "./../css/base";

    #nav {
        width: 250px;
        z-index: 3;
        overflow: auto;
        height: 100%;

        nav ul{
            padding-left: 0;
        }
    }
</style>
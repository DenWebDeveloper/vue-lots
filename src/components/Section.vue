<template>
    <section class="main">
        <div class="container">
            <div class="row products__list">
                <div v-for="lot in lots" class="col-xs-6 col-md-3 product__wrapper">
                    <div class="product">
                        <div class="product__image">
                            <img v-bind:src="'http://anticvarium.ru/public/images/thumbnails/' + lot.image[0].image"
                                 alt="">
                        </div>
                        <div class="product__content">
                            <p class="product__title">{{lot.title}}</p>
                        </div>
                        <div class="product__price-wrapper">
                            <a href="#" class="product__compare-text first">К сравнению</a>
                            <div class="product__subprice">
                                <p class="product__price">{{lot.start_price}}</p>
                            </div>
                            <div class="product__submit">
                                <button v-on:click="addLot(lot)" class="btn product__btn">в корзину</button>
                                <a href="#" class="product__compare-text second">К сравнению</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "Section",
        props: ['lots', 'selectedLots'],
        methods: {
            addLot(item) {
                const {selectedLots} = this;
                if (selectedLots[item.id]) {
                    item.count++;
                    Vue.set(selectedLots, item.id, Object.assign({},item))
                } else {
                    item.count = 1;
                    Vue.set(selectedLots, item.id, item)
                }
            }
        }
    }
</script>

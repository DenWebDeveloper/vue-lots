<template>
    <header>
        <section>
            <div class="item-top">
                <div class="container">
                    <div class="row middle-xs item-top__panel-row">
                        <div class="col-xs">
                            <div class="logo">
                                <img src="/src/assets/images/logo.png" alt="#">
                            </div>
                        </div>
                        <div class="col-xs head-panel">
                            <div class="flex end-xs text-center">
                                <div v-on:click="toggleModal" class="col dropdown cart open">
                                    <div class="cart__link">
                                        <button class="btn cart__click">
                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </button>
                                        <p class="cart__text hidden-xs">{{ generalPrice }}</p>
                                        <div class="cart__count">{{countAllLots}}</div>
                                    </div>
                                    <ul v-show="modalOpen" class="dropdown-menu right">
                                        <li v-if="countAllLots === 0" class="cart__empty-text">
                                            Корзина пуста
                                        </li>
                                        <li v-else v-for="lot of selectedLots" class="with-remove" :key="lot.id">
                                            <a href="" class="cart-product">
                                                <div class="cart-product__img">
                                                    <img :src="'http://anticvarium.ru/public/images/thumbnails/' + lot.image[0].image"
                                                         alt="">
                                                </div>
                                                <div class="cart-product__content">
                                                    <div class="cart-product__title">
                                                        {{lot.title}}
                                                    </div>
                                                    <span class="cart-product__count">
                                                    <span class="cart-product__counter">{{lot.count}}</span> х <span
                                                            class="cart-product__price">{{lot.start_price}}</span>
                                                </span>
                                                </div>
                                            </a>
                                            <a @click.prevent="deleteLot(lot.id)" href="" class="remove-ico">
                                                <i class="fa fa-times"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col dropdown cart visible-xs">
                                    <div class="cart__link">
                                        <button class="btn cart__click">
                                            <i class="fa fa-bars" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </header>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "HeaderVue",
        data() {
            return {
                countAllLots: 0,
                modalOpen: false
            }
        },
        computed: {
            generalPrice() {
                let total = 0;
                let count = 0;
                Object.values(this.selectedLots).forEach((item) => {
                    count += item.count;
                    total = +(item.start_price * item.count)
                });
                this.countAllLots = count;
                return total
            }
        },
        props: ['selectedLots'],

        methods: {
            toggleModal: function () {
                console.log('modal');
                this.modalOpen = !this.modalOpen;
            },
            deleteLot(id) {
                Vue.delete(this.selectedLots,id)
            }
        }
    }
</script>

<style scoped>

</style>
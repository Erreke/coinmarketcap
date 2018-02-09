<template>
    <nav class="navbar is-fixed-top is-light" role="navigation" aria-label="main navigation">
        <div class="container">

            <div class="navbar-brand">
                <router-link class="navbar-item" :to="{ name: 'MainPage' }">
                    <span class="icon is-large">
                        <i class="fab fa-btc fa-lg"></i>
                    </span>
                </router-link>

                <button class="button navbar-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div class="navbar-menu">
                <router-link class="navbar-item" :to="{ name: 'MainPage' }">Convertor</router-link>
                <router-link class="navbar-item" :to="{ name: 'MainPage' }">FAQ</router-link>
                <router-link class="navbar-item" :to="{ name: 'TodoPage' }">TODO</router-link>

                <!--<div class="navbar-start">
                    <div class="navbar-item has-dropdown">
                        <a class="navbar-link">Docs</a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item">Overview</a>
                        </div>
                    </div>
                </div>-->

                <div class="navbar-end">


                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" href="#">
                            EN
                        </a>
                        <div class="navbar-dropdown is-boxed">
                            <a class="navbar-item" href="#">RU</a>
                            <a class="navbar-item" href="#">ES</a>
                        </div>
                    </div>


                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <div class="control">
                                <div class="field">
                                    <input id="switchNightMode" type="checkbox" class="switch is-rounded is-large is-info">
                                    <label for="switchNightMode"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </nav>
</template>

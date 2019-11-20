<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from '../layouts/partials/home/header';
    import AppFooter from '../layouts/partials/home/footer';

    export default {
        name: "app.home",
        components: {
            AppHeader, AppFooter
        }
    }
</script>
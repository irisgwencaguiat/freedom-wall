<template>
    <v-app>
        <Navbar></Navbar>
        <AppInput></AppInput>
        <AppContent></AppContent>
    </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import AppInput from './components/AppInput';
import AppContent from './components/AppContent';

export default {
    components: {
        Navbar,
        AppInput,
        AppContent,
    },
    created() {
        this.$store.dispatch('getMessages');
    },
};
</script>

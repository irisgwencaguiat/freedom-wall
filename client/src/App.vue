<template>
    <v-app>
        <Navbar></Navbar>
        <AppInput></AppInput>
        <AppContent :messages="messages"></AppContent>
    </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import AppInput from './components/AppInput';
import AppContent from './components/AppContent';
import axios from 'axios';

export default {
    components: {
        Navbar,
        AppInput,
        AppContent,
    },
    data() {
        return {
            messages: [],
        };
    },
    created() {
        this.$store.dispatch('getMessages');
    },
};
</script>

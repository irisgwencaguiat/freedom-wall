<template>
    <v-container>
        <v-main>
            <v-row>
                <v-col sm="4" v-for="message in allMessages">
                    <v-card>
                        <v-card-title>{{ message.alias }}</v-card-title>
                        <v-card-text>{{ message.text }}</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-main>
    </v-container>
</template>

<script>
export default {
    computed: {
        allMessages() {
            return this.$store.getters.getMessages;
        },
    },
};
</script>

<template>
    <v-container>
        <v-row>
            <v-col md="10" offset-md="1">
                <v-card>
                    <v-card-text>
                        <v-row no-gutters>
                            <v-col md="8" offset-md="2">
                                <v-text-field
                                    outlined
                                    label="Alias"
                                    v-model="alias"
                                >
                                </v-text-field>
                            </v-col>
                            <v-col md="8" offset-md="2">
                                <v-textarea
                                    name="input-7-1"
                                    outlined
                                    l
                                    label="What's on your mind?"
                                    hint="Hint text"
                                    rows="4"
                                    no-resize
                                    v-model="text"
                                ></v-textarea>
                            </v-col>
                            <v-col md="2" offset-md="9">
                                <v-btn
                                    class="mb-5 primary"
                                    dark
                                    @click="submitMessage"
                                    >Post</v-btn
                                >
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            alias: '',
            text: '',
        };
    },
    methods: {
        submitMessage() {
            if (this.alias === '') return;
            if (this.text === '') return;
            this.$store.dispatch('postMessage', {
                alias: this.alias,
                text: this.text,
            });
            this.alias = '';
            this.text = '';
        },
    },
};
</script>

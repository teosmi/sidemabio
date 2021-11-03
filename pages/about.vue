<script>
import { mapState, mapMutations} from "vuex";
export default {
    methods: {
        sayGoodbye() {
            this.message = 'good bye';
            this.putGreeting('goodbye')
        },
        ...mapMutations({
            putGreeting: 'putGreeting'
        })
    },
    computed: {
        ...mapState({
            message: store => store.message
        })
    }    
}
</script>

<template>
    <div>
        {{message}}
        <button @click="sayGoodbye">button</button>
        <nuxt-link to='/'>home</nuxt-link>
    </div>
</template>

<style>

</style>


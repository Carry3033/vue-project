<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    }
})

import { ref, computed, onMounted } from 'vue'
// 真值和空字符串会被视为 true
const buttonDisabled = ref('')

let numberData = ref(1)
const computedData = computed(() => numberData.value + 1)

function addCount() {
    return numberData.value++
}

// $ref 实例 比 ref 变量 优先级更高
const input = ref(0)

onMounted(() => {
    input.value.value = '1'
})

defineExpose({
    addCount
})
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h3>
            官方文档
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
        </h3>
        <button :disabled="buttonDisabled">点不到</button><br/>
        <button @click="addCount">功德+{{ computedData }}</button><br/>
        <input ref="input"/>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>

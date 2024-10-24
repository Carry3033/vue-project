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

let meritCount = ref(1)
const computedData = computed(() => meritCount.value + 1)

function addMeritCount() {
    meritCount.value++
}

// $ref 实例 比 ref 变量 优先级更高
const input = ref(0)

function addCount() {
    input.value.value = (+input.value.value || 0) + computedData.value
}

onMounted(() => {
    input.value.value = 1
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
        <button :disabled="buttonDisabled">点不到</button>
        <button @click="addMeritCount">功德+{{ computedData }}</button>
        <button @click="addCount">累加</button>
        <br />
        <input ref="input" />
    </div>
</template>

<style scoped lang="scss">
.greetings {
    h1 {
        text-align: center;
        font-weight: 500;
        font-size: 2.6rem;
        position: relative;
        top: -10px;
    }

    h3 {
        text-align: center;
        font-size: 1.2rem;
    }

    button {
        margin: 8px 0;

        + button {
            margin-left: 8px;
        }
    }
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>

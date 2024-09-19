<template>
    <div>
        <div>子字符串为：{{ substring }}</div>
        <div>长度为：{{ stringLength }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
let substring = ref('')
let stringLength = ref(0)

/**
 * 有错误的
 * @param {string} s
 * @return {string}
 */
const longestContinuousSubstring2 = function (s) {
    let left,
        right,
        result = s[0] || ''
    const sLength = s.length - 1
    for (left = 0, right = 0; right < sLength; right++) {
        if (s[right].charCodeAt() + 1 !== s[right + 1].charCodeAt()) {
            if (result.length < right - left + 1) {
                result = s.substring(left, right + 1)
            }
            left = right + 1
        }
    }
    return result
}

const longestContinuousSubstring3 = function (s) {
    let left,
        right,
        result = s[0] || ''
    const sLength = s.length
    for (left = 0, right = 1; right < sLength; right++) {
        if (s[right] !== String.fromCharCode(s.charCodeAt(right - 1) + 1)) {
            if (result.length < right - left) {
                result = s.substring(left, right)
            }
            left = right
        }
    }
    if (result.length < s.substring(left, right).length) {
        result = s.substring(left, right)
    }
    return result
}

/**
 * 官网解题思路
 * @param {string} s
 * @return {number}
 */
const longestContinuousSubstring = function (s) {
    let res = 1
    let cur = 1
    for (let i = 1; i < s.length; i++) {
        if (s[i] == String.fromCharCode(s.charCodeAt(i - 1) + 1)) {
            cur++
        } else {
            cur = 1
        }
        res = Math.max(res, cur)
    }
    return res
}

substring.value = longestContinuousSubstring3('aaaaabcd')
stringLength.value = substring.value.length
</script>

<script setup>
import WelcomeItem from '@/components/WelcomeItem.vue'
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'
import ToolingIcon from '@/components/icons/IconTooling.vue'
import EcosystemIcon from '@/components/icons/IconEcosystem.vue'
import CommunityIcon from '@/components/icons/IconCommunity.vue'
import SupportIcon from '@/components/icons/IconSupport.vue'
import LeetCode2414 from '@leetCode/2414.vue'
import { shallowRef } from 'vue'

/**
 *  当使用 ref 时会有以下警告，因为响应式耗性能
 *  [Vue warn]: Vue received a Component that was made a reactive object.
 *  This can lead to unnecessary performance overhead and should be avoided by
 *  marking the component with `markRaw` or using `shallowRef` instead of `ref`.
 */
const welcomeItemList = shallowRef([
    {
        heading: 'LeetCode',
        iconComponent: DocumentationIcon, // 直接绑定到组件本身，而不是字符串的组件名
        defaultComponent: LeetCode2414
    },
    {
        heading: 'Style',
        iconComponent: ToolingIcon
    },
    {
        heading: 'Components',
        iconComponent: EcosystemIcon
    },
    {
        heading: 'Utils',
        iconComponent: CommunityIcon
    },
    {
        heading: 'Business',
        iconComponent: SupportIcon
    }
])
</script>

<template>
    <WelcomeItem v-for="item in welcomeItemList" :key="item.heading">
        <template #icon>
            <component :is="item.iconComponent"></component>
        </template>
        <template #heading>{{ item.heading }}</template>
        <component :is="item.defaultComponent"></component>
    </WelcomeItem>
</template>

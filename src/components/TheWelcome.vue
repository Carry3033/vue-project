<script setup>
import WelcomeItem from '@/components/WelcomeItem.vue'
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'
import ToolingIcon from '@/components/icons/IconTooling.vue'
import EcosystemIcon from '@/components/icons/IconEcosystem.vue'
import CommunityIcon from '@/components/icons/IconCommunity.vue'
import SupportIcon from '@/components/icons/IconSupport.vue'
import LeetCode2414 from '@leetCode/2414.vue'
</script>

<template>
    <WelcomeItem>
        <template #icon><DocumentationIcon /></template>
        <template #heading>LeetCode</template>
        <LeetCode2414 />
    </WelcomeItem>

    <WelcomeItem>
        <template #icon><ToolingIcon /></template>
        <template #heading>Style</template>
    </WelcomeItem>

    <WelcomeItem>
        <template #icon><EcosystemIcon /></template>
        <template #heading>Components</template>
    </WelcomeItem>

    <WelcomeItem>
        <template #icon><CommunityIcon /></template>
        <template #heading>Utils</template>
    </WelcomeItem>

    <WelcomeItem>
        <template #icon><SupportIcon /></template>
        <template #heading>Business</template>
    </WelcomeItem>
</template>

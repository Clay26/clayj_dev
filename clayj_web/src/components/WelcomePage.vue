<script setup lang="ts">
import ContentItem from './ContentItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div class="items">
  <ContentItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Brand Design</template>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper viverra nam libero justo laoreet sit.
  </ContentItem>

  <ContentItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Seo & Marketing</template>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper viverra nam libero justo laoreet sit.
  </ContentItem>

  <ContentItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Creative Design</template>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper viverra nam libero justo laoreet sit.
  </ContentItem>
  </div>
</template>

<style scoped>
.items {
  display: flex;
  justify-content: space-evenly;
}
</style>
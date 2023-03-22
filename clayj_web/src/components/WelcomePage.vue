<script setup lang="ts">
import ContentItem from './ContentItem.vue'
import WelcomeBanner from './WelcomeBanner.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import backgroundImage from "../assets/BannerPhoto.png"
</script>

<template>
  <div class="container">
    <WelcomeBanner :imageUrl=backgroundImage>
      <template #content>
        <h1>Welcome to the ClayJ Web</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper viverra nam libero justo laoreet sit.
        </p>
      </template>
    </WelcomeBanner>
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
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.items {
  display: flex;
  justify-content: space-evenly;
}
</style>
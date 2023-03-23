<script setup lang="ts">
import ContentItem from './ContentItem.vue'
import NavBar from './NavBar.vue'
import WelcomeBanner from './WelcomeBanner.vue'
import FooterArea from './FooterArea.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import backgroundImage from "../assets/BannerPhoto.png"
</script>

<template>
  <div class="container">
    <NavBar class="navBar" />
    <WelcomeBanner class="banner" :imageUrl=backgroundImage>
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
    <FooterArea />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.items {
  display: flex;
  justify-content: space-evenly;
  padding-top: 30px;
}

.navBar {
  min-height: 50px;
}
</style>
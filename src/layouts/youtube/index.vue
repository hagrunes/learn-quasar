<template>
  <q-layout view="hHh Lpr lFf">
    <YoutubeHeader />
    <YoutubeDrawer />
    <YoutubeContent />
  </q-layout>
</template>

<script setup>
import YoutubeHeader from 'layouts/youtube/YoutubeHeader.vue';
import YoutubeDrawer from 'layouts/youtube/YoutubeDrawer.vue';
import YoutubeContent from 'layouts/youtube/YoutubeContent.vue';
</script>

<style lang="scss" scoped></style>

<template>
  <div class="row q-col-gutter-md">
    <div v-for="i in 18" :key="i" class="col-12 col-sm-6 col-md-4 con-lg-2">
      <q-card class="my-card">
        <q-img ratio="1" src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div
            class="absolute-bottom text-subtitle2 flex flex-center full-height"
          >
            Title
          </div>
        </q-img>
      </q-card>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

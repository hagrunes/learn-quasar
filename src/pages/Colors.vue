<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Colors</div>
      <q-separator class="q-my-md"></q-separator>
      <div class="bg-primary">primary</div>
      <div class="bg-secondary">secondary</div>
      <div class="bg-accent">accent</div>
      <div class="bg-dark">dark</div>
      <p>variable</p>
    </section>
  </q-page>
</template>
<script setup></script>

<style lang="scss" scoped>
P {
  color: $red;
  background-color: $grey;
}
</style>

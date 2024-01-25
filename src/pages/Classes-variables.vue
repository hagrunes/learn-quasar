<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Colors</div>
      <q-separator class="q-my-md"></q-separator>
      <div class="q-gutter-y-sm">
        <div class="shadow-1 q-pa-sm">shadow-1</div>
        <div class="shadow-7 q-pa-sm">shadow-7</div>
        <div class="shadow-24 q-pa-sm">shadow-24</div>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Visibility</div>
      <q-separator class="q-my-md"></q-separator>
      <div class="ellipsis">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        architecto asperiores at deserunt exercitationem ipsa libero obcaecati
        reprehenderit veniam voluptate! Dolor ea eos explicabo, labore molestias
        necessitatibus perferendis quis sint!
      </div>
      <br />
      <div class="ellipsis-2-lines cursor-pointer">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        architecto asperiores at deserunt exercitationem ipsa libero obcaecati
        reprehenderit veniam voluptate! Dolor ea eos explicabo, labore molestias
        necessitatibus perferendis quis sint!
      </div>
      <br />
      <div class="ellipsis-3-lines">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        architecto asperiores at deserunt exercitationem ipsa libero obcaecati
        reprehenderit veniam voluptate! Dolor ea eos explicabo, labore molestias
        necessitatibus perferendis quis sint!
      </div>
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>

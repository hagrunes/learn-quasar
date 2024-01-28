<template>
  <q-header class="bg-white text-grey-8" height-hint="56">
    <q-toolbar>
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-avatar>
        <q-img src="/icons/favicon-32x32.png" />
      </q-avatar>

      <q-toolbar-title shrink class="text-subtitle1 text-weight-bolder">
        퀘이사 코딩
      </q-toolbar-title>
      <q-space></q-space>
      <div class="search row items-center">
        <q-input
          class="col-grow"
          outlined
          square
          dense
          placeholder="검색"
          @focus="isSearchFocused = true"
          @blur="isSearchFocused = false"
        >
          <template v-if="isSearchFocused" #prepend>
            <q-icon name="search" />
          </template>
          <template #append>
            <q-icon name="keyboard" />
          </template>
        </q-input>
        <q-btn
          class="search_btn"
          icon="search"
          unelevated
          color="grey-3"
          text-color="black"
          square
        ></q-btn>
        <q-btn
          class="q-ml-sm"
          icon="mic"
          round
          color="grey-2"
          text-color="black"
          unelevated
        ></q-btn>
      </div>
      <q-space></q-space>
      <q-btn flat round icon="more_vert" class="q-mr-sm" />

      <q-btn
        icon="account_circle"
        class="q-mr-sm"
        label="로그인"
        outline
        rounded
      />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from 'vue';

const isSearchFocused = ref(false);
</script>

<style lang="scss" scoped>
.q-toolbar {
  min-height: 56px;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: #c9c9c9;
}
.search {
  min-width: 100px;
  max-width: 600px;
  width: 56%;
  &_btn {
    border-style: solid;
    border-width: 1px 1px 1px 0;
    border-color: #c9c9c9;
    max-width: 60px;
    width: 100%;
    height: 40px;
  }
}
</style>

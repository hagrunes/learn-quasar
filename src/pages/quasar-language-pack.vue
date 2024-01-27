<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Change Quasar Language Pack at Runtime</div>
      <q-separator class="q-my-md"></q-separator>
      <q-select
        v-model="lang"
        :options="appLanguages"
        label="퀘이사 언어"
        outlined
        emit-value
        map-options
      />
      {{ $q.lang }}
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">i18n - locale</div>
      <q-separator class="q-my-md"></q-separator>
      <div>locale - {{ locale }}</div>
      <div>hello - {{ t('hello') }}</div>
      <div>productName - {{ t('productName') }}</div>
    </section>
  </q-page>
</template>
<script>
import languages from 'quasar/lang/index.json';

const appLanguages = languages
  .filter(lang => ['ko-KR', 'en-US'].includes(lang.isoName))
  .map(lang => ({ label: lang.nativeName, value: lang.isoName }));
</script>
<script setup>
import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
const $q = useQuasar();
const lang = ref($q.lang.isoName);

watch(lang, val => {
  console.log(val);
  // import('/node_modules/quasar/lang/' + val);
  $q.localStorage.set('lang', val);
  locale.value = val;
});

const { t, locale } = useI18n();
console.log('hello: ' + t('hello'));
console.log('productName: ' + t('productName'));
</script>

<style lang="scss" scoped></style>

<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Date Utils</div>
      <q-separator class="q-my-md"></q-separator>
      <div class="text-h6">
        formatDate - {{ date.formatDate(new Date(), FORMAT) }}
      </div>
      <div class="text-h6">
        addToDate -
        {{ formatDate(date.addToDate(new Date(), { days: 7 }), FORMAT) }}
      </div>
      <div class="text-h6">
        subtractFromDate -
        {{ formatDate(date.subtractFromDate(new Date(), { days: 7 }), FORMAT) }}
      </div>
      <div class="text-h6">
        Type Checking utils - - {{ pad('hello', 10, '#') }}
      </div>
      <div class="text-h6">objA === objB {{ objA === objB }}</div>
      <div class="text-h6">objA === objB {{ is.deepEqual(objA, objB) }}</div>
    </section>
  </q-page>
</template>
<script setup>
import { date, format, is } from 'quasar';
const { formatDate, addToDate } = date;
const { pad } = format;
const FORMAT = 'YYYY-MM-DD';

const objA = { name: 'abc' };
const objB = { name: 'abc' };
</script>

<style lang="scss" scoped></style>

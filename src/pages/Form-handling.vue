<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">QFom Component</div>
      <q-separator class="q-my-md"></q-separator>
      <q-form
        ref="myForm"
        class="q-gutter-y-md q-mt-lg"
        autofocus
        agreedy
        @submit="onSubmit"
        @reset="onReset"
      >
        <q-input
          outlined
          v-model="form.title"
          label="제목"
          :rules="[val => !!val || '필수항목입니다']"
        />
        <q-input
          outlined
          counter
          v-model="form.content"
          label="내용"
          type="textarea"
          hint="50자 이내로 입력"
          :rules="[
            val => !!val || '필수항목입니다',
            val => val.length <= 50 || '50자 이내로 입력',
          ]"
          lazy-rules
        />
        <q-select
          outlined
          emit-value
          multiple
          v-model="form.tags"
          :options="options"
          label="태그"
          hint="최대 2개 삽가능"
          :rules="[
            val => val.length <= 2 || '2개 이하로 선택',
            val => val.length > 0 || '필수값',
          ]"
        />
        <q-input
          outlined
          filled
          v-model="form.date"
          mask="date"
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="form.date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-toggle label="동의합니까" v-model="form.accept" />
        <div class="q-gutter-x-sm">
          <q-btn label="validate" color="secondary" @click="validate" />
          <q-btn label="resetValidation" color="warning" @click="reset" />
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </section>
  </q-page>
</template>
<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();
const myForm = ref(null);
const form = ref({
  title: '',
  content: '',
  tags: [],
  date: '2022/01/01',
  accept: false,
});

// const options = ref(['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']);
const options = ref([
  { label: '구글', value: 'Google' },
  { label: '페이스북', value: 'Facebook' },
  { label: '트위터', value: 'Twitter' },
  { label: '애플', value: 'Apple' },
  { label: '오라클', value: 'Oracle' },
]);

const validate = () => {
  myForm.value.validate().then(success => {
    if (success) {
      alert('success');
    } else {
      alert('failed');
    }
  });
};

const reset = () => {
  myForm.value.resetValidation();
};

const onSubmit = () => {
  if (form.value.accept !== true) {
    alert('동의해줘라');
    return;
  }
  $q.loading.show({});
  setTimeout(() => {
    $q.loading.hide();
    alert('성공');
  }, 3000);
};
const onReset = () => {
  form.value.title = '';
  form.value.content = '';
  form.value.tags = [];
  form.value.date = '2022/01/01';
  form.value.accept = false;
};
</script>

<style lang="scss" scoped></style>

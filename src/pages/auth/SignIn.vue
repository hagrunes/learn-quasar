<template>
  <!--  class="flex flex-center"-->
  <q-page>
    <div class="row window-height">
      <div class="col" :class="{ leftColStyle }">
        <q-img height="100vh" src="/sign-up-bg.jpg" />
      </div>
      <div class="col flex flex-center">
        <q-card flat :style="{ minWidth: '400px' }">
          <q-card-section>
            <div class="text-h6 text-weight-bold">로그인 하기</div>
            <div class="text-subtitle2 text-grey">또 왔다</div>
          </q-card-section>
          <q-card-section>
            <q-form>
              <div class="q-gutter-lg">
                <q-input filled label="이메일" hint="이메일을 입력해주세요" />
                <q-input
                  filled
                  type="password"
                  label="비밀번호"
                  hint="영문 대/소문자 포함 8자 이상"
                />
              </div>
              <q-btn
                unelevated
                color="primary"
                class="full-width q-mt-lg"
                label="로그인 하기"
                size="lg"
              ></q-btn>
              <q-btn
                flat
                class="full-width q-mt-md"
                label="회원가입"
                to="/auth/sign-up"
              ></q-btn>
              <q-btn
                flat
                class="full-width q-mt-xs"
                label="대시보드로 이동"
                to="/"
              ></q-btn>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();

const leftColStyle = computed(() => ({
  hidden: $q.screen.lt.md,
}));
</script>

<template>
  <q-page class="flex flex-center">
    <q-card flat :style="{ minWidth: '400px' }">
      <q-card-section>
        <div class="text-h6 text-weight-bold">회원가입</div>
        <div class="text-subtitle2 text-grey">감사합니다.</div>
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
            <q-input
              filled
              type="password"
              label="비밀번호 확인"
              hint="영문 대/소문자 포함 8자 이상"
            />
            <q-input
              filled
              label="나이"
              prefix="만 나이"
              suffix="세"
              input-class="text-right"
            />
          </div>
          <q-btn
            unelevated
            color="primary"
            class="full-width q-mt-lg"
            label="가입하기"
            size="lg"
          ></q-btn>

          <q-btn
            flat
            class="full-width q-mt-xs"
            label="로그인하기"
            to="/auth/sign-in"
          ></q-btn>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup></script>

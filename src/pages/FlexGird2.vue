<template>
  <div>
    <q-page padding>
      <section class="row q-col-gutter-x-xl q-py-lg">
        <div class="col-12 col-sm-auto q-py-md flex flex-center">
          <q-avatar size="150px">
            <img src="/icons/favicon-128x128.png" />
          </q-avatar>
        </div>
        <div class="col-12 col-sm-grow column justify-between">
          <div class="row items-center">
            <span class="text-h6 text-weight-bold">인스타 이름</span>
            <q-space></q-space>
            <div class="q-gutter-x-sm">
              <q-btn outline color="secondary" label="프로필 편집1"></q-btn>
              <q-btn outline color="secondary" label="프로필 편집2"></q-btn>
              <q-btn outline color="secondary" label="프로필 편집3"></q-btn>
              <q-btn flat color="secondary" icon="more_horiz"></q-btn>
            </div>
          </div>
          <div>
            <div class="q-gutter-x-lg">
              <span>게시물 234</span>
              <span>팔로우 234</span>
              <span>팔로워 234</span>
            </div>
          </div>
          <div>
            <div>111</div>
            <div>222</div>
            <div>333</div>
          </div>
        </div>
      </section>
      <section>
        <div class="row no-wrap scroll q-col-gutter-x-xl">
          <div class="col-auto" v-for="i in 15" :key="i">
            <article>
              <q-avatar size="70px">
                <img src="/icons/favicon-128x128.png" />
              </q-avatar>
              <div class="text-center q-mt-sm">제목</div>
            </article>
          </div>
        </div>
      </section>
      <section>
        <div class="row q-col-gutter-md">
          <div
            v-for="i in 18"
            :key="i"
            class="col-12 col-sm-6 col-md-4 con-lg-2"
          >
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
      </section>
    </q-page>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.q-page {
  background-color: #fafafa;
}
</style>

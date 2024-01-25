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
        <q-tabs
          class="q-mb-lg"
          v-model="tab"
          inline-label
          switch-indicator
          indicator-color="primary"
        >
          <!--          <q-tab name="mails" icon="mail" label="게시글" />
          <q-tab name="alarms" icon="alarm" label="저장됨" />
          <q-tab name="movies" icon="movie" label="테크됨" />-->
          <q-route-tab
            :ripple="false"
            icon="edit"
            to="/profile"
            label="게시글"
            exact
          />
          <q-route-tab
            :ripple="false"
            icon="bookmark_border"
            to="/profile/saved"
            label="저장됨"
            exact
          />
          <q-route-tab
            :ripple="false"
            icon="local_offer"
            to="/profile/tagged"
            label="태그됨"
            exact
          />
        </q-tabs>
        <router-view></router-view>
        <!--        -->
      </section>
    </q-page>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('mails');
</script>

<style lang="scss" scoped>
.q-page {
  background-color: #fafafa;
}
</style>

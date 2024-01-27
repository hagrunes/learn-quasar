import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { LocalStorage } from 'quasar';
import messages from 'src/i18n';
export default boot(async ({ app }) => {
  const locale = LocalStorage.getItem('lang') || 'ko-KR';

  // const messages = {
  //   'en-US': {
  //     productName: 'Quasar Lecture',
  //     hello: 'hello',
  //   },
  //   'ko-KR': {
  //     productName: '퀘이사 강의',
  //     hello: '안녕', //
  //   },
  // };
  const i18n = createI18n({
    locale,
    messages,
    legacy: false,
  });
  app.use(i18n);
});

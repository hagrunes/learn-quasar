import { boot } from 'quasar/wrappers';
import { LocalStorage } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
  const lang = LocalStorage.getItem('lang');
});

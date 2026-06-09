import { defineBackground } from '#imports';

export default defineBackground(() => {
  console.log('[Template] Background script loaded', { id: browser.runtime.id });
});

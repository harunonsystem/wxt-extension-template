import { defineContentScript } from '#imports';
import { greet } from '@/lib/greet';
import './style.css';

export default defineContentScript({
  matches: ['https://example.com/*'],
  main() {
    console.log('[Template] Content script loaded:', greet('world'));
  },
});

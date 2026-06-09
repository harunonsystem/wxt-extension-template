import { defineConfig } from 'wxt'

export default defineConfig({
  srcDir: 'src',
  manifest: {
    name: 'WXT Extension Template',
    // Add permissions / host_permissions as needed:
    // permissions: ['storage'],
    // host_permissions: ['https://example.com/*'],
  },
})

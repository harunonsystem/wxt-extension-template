import { defineConfig } from 'wxt'

export default defineConfig({
  srcDir: 'src',
  manifest: {
    name: 'WXT Extension Template',
    browser_specific_settings: {
      gecko: {
        id: 'wxt-extension-template@example.com',
        data_collection_permissions: { required: ['none'] },
      },
    },
    // Add permissions / host_permissions as needed:
    // permissions: ['storage'],
    // host_permissions: ['https://example.com/*'],
  },
})

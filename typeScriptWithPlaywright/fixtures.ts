import type { BrowserContext } from '@playwright/test'
import { test as base, chromium } from '@playwright/test'
import path from 'path'

export const test = base.extend<{
  context: BrowserContext
  extensionId: string
}>({
  // eslint-disable-next-line no-empty-pattern
  context: async ({}, use) => {
    const pathToExtension = path.join(__dirname, 'build')
    const context = await chromium.launchPersistentContext('', {
      headless: true,
      args: [
        '--headless=new',
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`
      ]
    })
    await use(context)
    await context.close()
  },

  extensionId: async ({ context }, use) => {
    // for manifest v3:
    let [background] = context.serviceWorkers()
    if (!background) background = await context.waitForEvent('serviceworker')

    const extensionId = background.url().split('/')[2]
    await use(extensionId)
  }
  // page: ({context}) => context.pages[0]
})
export const expect = test.expect

export const extension = {
  extensionId: 'bfnaelmomeimhlpmgjnjophhpkkoljpa' // extensionId for current build
}

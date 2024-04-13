import {test, expect} from '@playwright/test'

test('review', async ({page}) => {
await page.goto('https://demoqa.com/automation-practice-form')
// await page.locator('.card:nth-child(2)').click()

await page.locator('#firstName').fill('Andriy')
await expect(page.locator('#firstName')).toHaveValue('Andriy')




})
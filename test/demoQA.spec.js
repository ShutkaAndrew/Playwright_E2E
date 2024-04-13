import {test, expect} from '@playwright/test'

test('review', async ({page}) => {
await page.goto('https://demoqa.com/automation-practice-form')
// await page.locator('.card:nth-child(2)').click()

const nameFirst = await page.getByPlaceholder('First Name')
await nameFirst.fill('Andriy')
await expect(nameFirst).toHaveValue('Andriy')




})
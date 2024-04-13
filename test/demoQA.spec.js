import {test, expect} from '@playwright/test'

test.describe('sign up form', () =>{ 

test('review', async ({page}) => {
await page.goto('https://demoqa.com/automation-practice-form')
// await page.locator('.card:nth-child(2)').click()

const firstNameValue = await page.getByPlaceholder('First Name')
await firstNameValue.fill('Andriy')
expect(firstNameValue).toHaveValue('Andriy')
// await expect(firstNameValue).toHaveValue('Andriy')
})
test('email field', async({page}) => {
    await page.goto('https://demoqa.com/automation-practice-form')
    const lastNameField = page.getByRole('textbox', {name: 'Last Name'})
    await lastNameField.fill('shutkaintel98@gmail.com')
    await page.pause(3000)
    expect(lastNameField).toHaveValue('shutkaintel98@gmail.com')
})


})

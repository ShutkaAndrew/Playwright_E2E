import {test, expect} from '@playwright/test'

test.describe('sign up form', () =>{ 
    // test.beforeEach(async({page}) => {
    //     await page.goto('https://demoqa.com/automation-practice-form')

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

test('validation submit button', async({page}) => {
    await page.goto('https://demoqa.com/automation-practice-form')
    const submitButton = page.getByRole('button', {name:'submit'})
    await submitButton.click()
    await page.waitForTimeout(1000);
const firstNameValue = page.getByPlaceholder('First Name')
expect(firstNameValue).toHaveCSS('border-color', "rgb(220, 53, 69)")

    
})
test('checking checkbox', async({page}) => {
await page.goto('https://demoqa.com/automation-practice-form')
await page.check('#gender-radio-1')
await page.pause(1000)



})








    })

// })
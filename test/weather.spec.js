import {test, expect} from '@playwright/test'
test.describe('Enter openweathermap', () => {
test('enter the site', async({page}) => {
    await page.goto('https://openweathermap.org/')
    const marketPlace =  page.getByText('Marketplace').first().click()
    const pageMarketPlacePromise = page.waitForEvent('popup')
    const pageMarket = await pageMarketPlacePromise
    await expect(pageMarket.getByRole('heading', {name:'Custom Weather Products'})).toBeVisible()
})




})
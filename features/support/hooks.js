import { BeforeAll, AfterAll } from '@cucumber/cucumber'
import { chromium } from 'playwright'

// Linha de Tempo
// BeforeAll - Before - BeforeStep - Seu Teste - AfterStep - After - AfterAll

let browser, context, page  // variaveis do Playwright

BeforeAll(async () => {
    browser = await chromium.launch()
    context = await browser.newContext()
    page = await context.newPage()
    global.page = page
})

AfterAll(async () => {
    await browser.close()
})
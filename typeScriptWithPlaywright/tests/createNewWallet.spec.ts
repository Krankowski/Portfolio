import { test } from '../fixtures';
import CreateWalletPage from '../pages/createWalletpage';

test.describe("ID: 1: Creating new wallet", () =>{
    
    test('TC_001: Creating new account with correct password', async ({ page }) => {
        const createWallet = new CreateWalletPage(page)
        await createWallet.goToCreateWalletPage()
        await createWallet.clickCreateNewWalletButton()
        await createWallet.assertCreateAPasswordPage()
        await createWallet.inputCorrectPassword()
        await createWallet.inputCorrectConfirmPassword()
        await createWallet.clickTermOfServiceCheckbox()
        await createWallet.clickContinueButton()
        await createWallet.assertSecretRecoveryPhrasePage()
        await createWallet.clickSecretRecoveryPhraseCheckbox()
        await createWallet.clickContinueButton()
        await createWallet.assertYouAllDonePage()
    })

    test('TC_002: Creating new account with inputting correct password and not inputting confirm password', async ({ page }) => {
        const createWallet = new CreateWalletPage(page)
        await createWallet.goToCreateWalletPage()
        await createWallet.clickCreateNewWalletButton()
        await createWallet.assertCreateAPasswordPage()
        await createWallet.inputCorrectPassword()
        await createWallet.clickTermOfServiceCheckbox()
        await createWallet.assertContinueButtonToBeDisabled()

    })

    test('TC_003: Creating new account without inputting password and confirm password', async ({ page }) => {
        const createWallet = new CreateWalletPage(page)
        await createWallet.goToCreateWalletPage()
        await createWallet.clickCreateNewWalletButton()
        await createWallet.assertCreateAPasswordPage()
        await createWallet.clickTermOfServiceCheckbox()
        await createWallet.assertContinueButtonToBeDisabled()
    })

    test('TC_004: Creating new account with inputting correct password and incorrect confirm password', async ({ page }) => {
        const createWallet = new CreateWalletPage(page)
        await createWallet.goToCreateWalletPage()
        await createWallet.clickCreateNewWalletButton()
        await createWallet.assertCreateAPasswordPage()
        await createWallet.inputCorrectPassword()
        await createWallet.inputIncorrectConfirmPassword()
        await createWallet.clickTermOfServiceCheckbox()
        await createWallet.clickContinueButton()
        await createWallet.assertPasswordDontMatch()
    })

    test('TC_005: Creating a new account with password and confirm password less than 8 characters', async ({ page }) => {
        const createWallet = new CreateWalletPage(page)
        await createWallet.goToCreateWalletPage()
        await createWallet.clickCreateNewWalletButton()
        await createWallet.assertCreateAPasswordPage()
        await createWallet.inputLessThenPassword()
        await createWallet.inputLessThenConfirmPassword()
        await createWallet.clickTermOfServiceCheckbox()
        await createWallet.clickContinueButton()
        await createWallet.assertPasswordMustBe8Char()
    })
})

import type { Page } from '@playwright/test'
import { expect, extension } from '../fixtures'

export default class CreateWalletPage {
  constructor(public page: Page) {}

  // GOTO METHODS

  async goToCreateWalletPage() {
    await this.page.goto(
      `chrome-extension://${extension.extensionId}/onboarding.html`
    )
    await this.page.waitForLoadState('load')
  }

  // CLICK METHODS

  async clickCreateNewWalletButton() {
    await this.page.getByRole('button', { name: 'Create a new wallet' }).click()
  }

  async clickTermOfServiceCheckbox() {
    await this.page.getByTestId('onboarding-form-terms-of-service-checkbox').click()
  }

  async clickContinueButton() {
    await this.page.getByRole("button", {name: 'Continue'}).click()
  }

  async clickSecretRecoveryPhraseCheckbox() {
    await this.page.getByTestId('onboarding-form-saved-secret-recovery-phrase-checkbox').click()
  }

  //INPUT METHODS

  async inputCorrectPassword() {
    await this.page.getByTestId('onboarding-form-password-input').fill('Test1234')
  }

  async inputCorrectConfirmPassword() {
    await this.page.getByTestId('onboarding-form-confirm-password-input').fill('Test1234')
  }
  
  async inputIncorrectConfirmPassword() {
    await this.page.getByTestId('onboarding-form-confirm-password-input').fill('Test4321')
  }

  async inputLessThenPassword() {
    await this.page.getByTestId('onboarding-form-password-input').fill('Test123')
  }

  async inputLessThenConfirmPassword() {
    await this.page.getByTestId('onboarding-form-confirm-password-input').fill('Test123')
  }

  // ASSERTION METHODS

  async assertCreateAPasswordPage() {
    await expect (this.page.getByText('Create a password')).toBeVisible()
    await expect (this.page.getByText('You will use this to unlock')).toBeVisible()
    await expect (this.page.getByTestId('onboarding-form-password-input')).toBeVisible()
    await expect (this.page.getByTestId('onboarding-form-confirm-password-input')).toBeVisible()
    await expect (this.page.getByTestId('onboarding-form').locator('div').filter({ hasText: 'I agree to the Terms of' })).toBeVisible()
    await expect (this.page.getByRole("button", {name: 'Continue'})).toBeDisabled()
  }

  async assertSecretRecoveryPhrasePage() {
    await expect (this.page.getByText('Secret Recovery Phrase', { exact: true })).toBeVisible()
    await expect (this.page.getByText('This phrase is the ONLY way')).toBeVisible()
    await expect (this.page.getByTestId('onboarding-form').locator('div').filter({ hasText: 'I saved my Secret Recovery' })).toBeVisible()
    await expect (this.page.getByRole("button", {name: 'Continue'})).toBeDisabled()
  }

  async assertYouAllDonePage() {
    await expect (this.page.getByTestId('onboarding-form').getByRole('img')).toBeVisible()
    await expect (this.page.getByText('You can now fully enjoy your')).toBeVisible()
    await expect (this.page.getByTestId('onboarding-form-submit-button')).toBeEnabled()
    await expect (this.page.locator('div').filter({ hasText: 'Pin the Phantom' }).nth(3)).toBeVisible()
  }

  async assertContinueButtonToBeDisabled() {
    await expect (this.page.getByRole("button", {name: 'Continue'})).toBeDisabled()
  }

  async assertPasswordDontMatch() {
    await expect (this.page.getByText('Passwords don\'t match')).toBeVisible()
    await expect (this.page.getByText('Passwords don\'t match')).toHaveCSS('color', 'rgb(235, 55, 66)')
  }

  async assertPasswordMustBe8Char() {
    await expect (this.page.getByText('Password must be 8 characters')).toBeVisible()
    await expect (this.page.getByText('Password must be 8 characters')).toHaveCSS('color', 'rgb(235, 55, 66)')
  }
}

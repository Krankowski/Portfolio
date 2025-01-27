package pl.seleniumdemo.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import pl.seleniumdemo.utils.LoggerHelper;
import pl.seleniumdemo.utils.SeleniumHelper;

import java.util.List;

public class HomePage extends BasePage {

    @FindBy(xpath = "//span[@class='select2-chosen' and text()='Search by Hotel or City Name']")
    protected WebElement cityNameSpan;

    @FindBy(xpath = "//div[@id='select2-drop']//input")
    protected WebElement cityNameInput;

    @FindBy(xpath = "//input[@name='checkin']")
    protected WebElement checkInInput;

    @FindBy(xpath = "//input[@name='checkout']")
    protected WebElement checkOutInput;

    @FindBy(xpath = "//input[@name='travellers']")
    protected WebElement travellersInput;

    @FindBy(xpath = "//input[@id='adultInput']")
    protected WebElement adultTravellersInput;

    @FindBy(xpath = "//input[@id='childInput']")
    protected WebElement childTravellersInput;

    @FindBy(xpath = "(//button[@type='submit'])[1]")
    protected WebElement searchButton;

    @FindBy(xpath = "//li[@id='li_myaccount']/a")
    protected List<WebElement> myAccountLink;

    @FindBy(xpath = "//a[@class='go-text-right' and text()='  Sign Up']")
    protected List<WebElement> signUpLink;

    public HomePage(WebDriver driver) {
        BasePage.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void setCityName(String cityName) {
        LoggerHelper.logInfo("Setting city: " + cityName);
        cityNameSpan.click();
        cityNameInput.sendKeys(cityName);

        String cityNameSearch = String.format("//span[@class='select2-match' and text()='%s']", cityName);
        SeleniumHelper.waitForElementToBeClickable(driver, By.xpath(cityNameSearch));
        driver.findElement(By.xpath(cityNameSearch)).click();
        LoggerHelper.logInfo("Setting city: done");
    }

    public void setCheckIn(String checkInDate) {
        LoggerHelper.logInfo("Setting check-in date: " + checkInDate);
        checkInInput.sendKeys(checkInDate);
        LoggerHelper.logInfo("Setting check-in date: done");
    }

    public void setCheckOut(String checkOutDate) {
        LoggerHelper.logInfo("Setting check-out date: " + checkOutDate);
        checkOutInput.sendKeys(checkOutDate);
        LoggerHelper.logInfo("Setting check-out date: done");

    }

    private void updateInputField(WebElement inputField, String value) {
        inputField.sendKeys(Keys.BACK_SPACE);
        inputField.sendKeys(value);
    }

    public void setTravellers(String addAdult, String addChild) {
        LoggerHelper.logInfo("Adding adults: " + addAdult + " and kids: " + addChild);
        travellersInput.click();
        SeleniumHelper.waitForElementToBeVisible(driver, adultTravellersInput);
        SeleniumHelper.waitForElementToBeVisible(driver, childTravellersInput);
        updateInputField(adultTravellersInput, addAdult);
        updateInputField(childTravellersInput, addChild);
        LoggerHelper.logInfo("Adding travellers: done");
    }

    public void performSearch() {
        LoggerHelper.logInfo("Performing search");
        searchButton.click();
        LoggerHelper.logInfo("Performing search: done");
    }

    public void goToSignUpForm() {
        LoggerHelper.logInfo("Going to Sign Up form");
        myAccountLink
                .stream()
                .filter(WebElement::isDisplayed)
                .findFirst().ifPresent(WebElement::click);

        signUpLink
                .stream()
                .filter(WebElement::isDisplayed)
                .findFirst()
                .ifPresent(WebElement::click);
        LoggerHelper.logInfo("Going to Sign Up form: done");
    }
}

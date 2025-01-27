package pl.seleniumdemo.pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import pl.seleniumdemo.utils.LoggerHelper;
import pl.seleniumdemo.utils.SeleniumHelper;

import java.util.List;
import java.util.stream.Collectors;

public class SignUpPage extends BasePage {

    @FindBy(xpath = "//input[@name='firstname']")
    protected WebElement firstNameInput;

    @FindBy(xpath = "//input[@name='lastname']")
    protected WebElement lastNameInput;

    @FindBy(xpath = "//input[@name='phone']")
    protected WebElement phoneNumberInput;

    @FindBy(xpath = "//input[@name='email']")
    protected WebElement emailInput;

    @FindBy(xpath = "//input[@name='password']")
    protected WebElement passwordInput;

    @FindBy(xpath = "//input[@name='confirmpassword']")
    protected WebElement confirmPasswordInput;

    @FindBy(xpath = "//button[@class='signupbtn btn_full btn btn-action btn-block btn-lg']")
    protected WebElement signUpButton;

    @FindBy(xpath = "//div[@class='alert alert-danger']/p[contains(text(), 'Email field')]")
    protected WebElement wrongEmailMessage;

    @FindBy(xpath = "//div[@class='alert alert-danger']/p")
    protected List<WebElement> wrongInputMessages;

    public SignUpPage(WebDriver driver) {
        BasePage.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void setFirstName(String firstName) {
        LoggerHelper.logInfo("Setting First Name");
        firstNameInput.sendKeys(firstName);
        LoggerHelper.logInfo("Setting First name: done");
    }

    public void setLastName(String lastName) {
        LoggerHelper.logInfo("Setting Last Name");
        lastNameInput.sendKeys(lastName);
        LoggerHelper.logInfo("Setting Last name: done");
    }

    public void setPhoneNumber(String phoneNumber) {
        LoggerHelper.logInfo("Setting Phone Number");
        phoneNumberInput.sendKeys(phoneNumber);
        LoggerHelper.logInfo("Setting Phone Number: done");
    }

    public void setEmail(String prefix, String suffix) {
        LoggerHelper.logInfo("Setting Email");
        double random = Math.random();
        emailInput.sendKeys(prefix + random + suffix);
        LoggerHelper.logInfo("Setting Email: done");
    }

    public void setPassword(String password) {
        LoggerHelper.logInfo("Setting Password");
        passwordInput.sendKeys(password);
        LoggerHelper.logInfo("Setting Password: done");
    }

    public void setConfirmPassword(String confirmPassword) {
        LoggerHelper.logInfo("Setting Confirm Password");
        confirmPasswordInput.sendKeys(confirmPassword);
        LoggerHelper.logInfo("Setting Confirm Password: done");
    }

    public void performSignUp() {
        LoggerHelper.logInfo("Performing Sign Up");
        signUpButton.click();
        LoggerHelper.logInfo("Performing Sign Up: done");
    }

    public void assertWrongEmailMessage() {
        LoggerHelper.logInfo("Asserting Wrong Email Message");
        SeleniumHelper.waitForElementToBeVisible(driver, wrongEmailMessage);
        Assert.assertEquals("The Email field must contain a valid email address.", wrongEmailMessage.getText());
        LoggerHelper.logInfo("Asserting Wrong Email Message: done");
    }

    public void assertWrongInputMessages() {
        LoggerHelper.logInfo("Asserting Wrong Input Messages");
        SeleniumHelper.waitForElementsToBeVisible(driver, wrongInputMessages);
        List<String> wrongInputMessagesList = wrongInputMessages
                .stream()
                .map(message -> message.getAttribute("textContent"))
                .collect(Collectors.toList());

        Assert.assertEquals("The Email field is required.", wrongInputMessagesList.get(0));
        Assert.assertEquals("The Password field is required.", wrongInputMessagesList.get(1));
        Assert.assertEquals("The Password field is required.", wrongInputMessagesList.get(2));
        Assert.assertEquals("The First name field is required.", wrongInputMessagesList.get(3));
        Assert.assertEquals("The Last Name field is required.", wrongInputMessagesList.get(4));
        LoggerHelper.logInfo("Asserting Wrong Input Messages: done");
    }


}

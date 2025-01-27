package pl.seleniumdemo.pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import pl.seleniumdemo.utils.LoggerHelper;
import pl.seleniumdemo.utils.SeleniumHelper;

public class MyAccountPage extends BasePage {

    @FindBy(xpath = "//h3[contains(text(), 'Hi, ')]")
    protected WebElement accountName;

    public MyAccountPage(WebDriver driver) {
        BasePage.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void assertAccountCreation(String firstName, String lastName) {
        LoggerHelper.logInfo("Asserting Account Creation");
        SeleniumHelper.waitForElementToBeVisible(driver, accountName);
        Assert.assertEquals(String.format("Hi, %s %s", firstName, lastName), accountName.getText());
        LoggerHelper.logInfo("Asserting Account Creation: done");
    }
}

package pl.seleniumdemo.utils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

public class SeleniumHelper {

    protected static WebDriverWait wait;

    public static void setWebDriverWait(WebDriver driver) {
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.pollingEvery(Duration.ofSeconds(1));
    }

    public static void waitForElementToBeVisible(WebDriver driver, WebElement webElement) {
        setWebDriverWait(driver);
        wait.until(ExpectedConditions.visibilityOf(webElement));
    }

    public static void waitForElementsToBeVisible(WebDriver driver, List<WebElement> webElement) {
        setWebDriverWait(driver);
        wait.until(ExpectedConditions.visibilityOfAllElements(webElement));
    }

    public static void waitForElementToBeClickable(WebDriver driver, By locator) {
        setWebDriverWait(driver);
        wait.until(ExpectedConditions.elementToBeClickable(locator));
    }


}

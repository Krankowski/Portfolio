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

public class HotelsSearchResultsPage extends BasePage {

    @FindBy(xpath = "//h4[contains(@class, 'list_title')]//b")
    protected List<WebElement> hotelSearchResults;

    @FindBy(xpath = "//h2[@class='text-center']")
    protected WebElement noResultsText;

    public HotelsSearchResultsPage(WebDriver driver) {
        BasePage.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void assertHotelSearchResults() {
        LoggerHelper.logInfo("Asserting Hotel Search Results");
        SeleniumHelper.waitForElementsToBeVisible(driver, hotelSearchResults);
        List<String> hotelNames = hotelSearchResults
                .stream()
                .map(el -> el.getAttribute("textContent"))
                .collect(Collectors.toList());

        Assert.assertEquals("Jumeirah Beach Hotel", hotelNames.get(0));
        Assert.assertEquals("Oasis Beach Tower", hotelNames.get(1));
        Assert.assertEquals("Rose Rayhaan Rotana", hotelNames.get(2));
        Assert.assertEquals("Hyatt Regency Perth", hotelNames.get(3));
        LoggerHelper.logInfo("Asserting Hotel Search Results: done");
    }

    public void assertNoResultMessage() {
        LoggerHelper.logInfo("Asserting No Result Message");
        Assert.assertEquals("No Results Found", noResultsText.getText());
        LoggerHelper.logInfo("Asserting No Result Message: done");
    }
}

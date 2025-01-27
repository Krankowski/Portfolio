package pl.seleniumdemo.tests;

import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import pl.seleniumdemo.pages.HomePage;
import pl.seleniumdemo.pages.HotelsSearchResultsPage;

public class HotelSearchTests extends BaseTest {

    private HomePage homePage;
    private HotelsSearchResultsPage hotelsSearchResultsPage;

    @BeforeMethod
    public void setupPages() {
        homePage = new HomePage(driver);
        hotelsSearchResultsPage = new HotelsSearchResultsPage(driver);
    }

    @Test(description = "TC_001: Searching for available hotels with the correct city")
    public void correctHotelNameSearch() {

        homePage.setCityName("Dubai");
        homePage.setCheckIn("15/01/2025");
        homePage.setCheckOut("22/01/2025");
        homePage.setTravellers("2", "3");
        homePage.performSearch();
        hotelsSearchResultsPage.assertHotelSearchResults();
    }

    @Test(description = "TC_002: Searching for hotels without specifying a city - error message verification")
    public void hotelNameNotSet() {

        homePage.setCheckIn("15/01/2025");
        homePage.setCheckOut("22/01/2025");
        homePage.setTravellers("1", "1");
        homePage.performSearch();
        hotelsSearchResultsPage.assertNoResultMessage();
    }
}

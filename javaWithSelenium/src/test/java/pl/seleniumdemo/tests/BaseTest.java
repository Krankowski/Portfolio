package pl.seleniumdemo.tests;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import pl.seleniumdemo.utils.DriverFactory;
import pl.seleniumdemo.utils.LoggerHelper;

import java.lang.reflect.Method;

public abstract class BaseTest {

    protected static String FIREFOX = "firefox";
    protected static String CHROME = "chrome";
    protected static String TESTED_URL = "http://www.kurs-selenium.pl/demo/";
    protected static WebDriver driver;

    @BeforeMethod
    public void setup() {
        WebDriverManager.chromedriver().setup();
        driver = DriverFactory.getDriver(CHROME);
        driver.get(TESTED_URL);
        driver.manage().window().maximize();
    }

    @BeforeMethod
    public void getTestName(Method method) {
        LoggerHelper.testNameInfo(method);
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}

package pl.seleniumdemo.tests;

import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import pl.seleniumdemo.pages.HomePage;
import pl.seleniumdemo.pages.MyAccountPage;
import pl.seleniumdemo.pages.SignUpPage;

public class SignUpTests extends BaseTest {

    private HomePage homePage;
    private SignUpPage signUpPage;
    private MyAccountPage myAccountPage;

    @BeforeMethod
    public void setupPages() {
        homePage = new HomePage(driver);
        signUpPage = new SignUpPage(driver);
        myAccountPage = new MyAccountPage(driver);
    }

    @Test(description = "TC_003: Correct user registration with complete and correct data")
    public void correctSignUp() {

        homePage.goToSignUpForm();
        signUpPage.setFirstName("Jan");
        signUpPage.setLastName("Kowalski");
        signUpPage.setPhoneNumber("123 456 789");
        signUpPage.setEmail("jan.kowalski", "@gmail.com");
        signUpPage.setPassword("Test123");
        signUpPage.setConfirmPassword("Test123");
        signUpPage.performSignUp();
        myAccountPage.assertAccountCreation("Jan", "Kowalski");
    }

    @Test(description = "TC_004: User registration with invalid email address")
    public void invalidEmailSignUpTest() {

        homePage.goToSignUpForm();
        signUpPage.setFirstName("Jan");
        signUpPage.setLastName("Kowalski");
        signUpPage.setPhoneNumber("123 456 789");
        signUpPage.setEmail("jan.kowalski", "@test");
        signUpPage.setPassword("Test123");
        signUpPage.setConfirmPassword("Test123");
        signUpPage.performSignUp();
        signUpPage.assertWrongEmailMessage();
    }

    @Test(description = "TC_005: Registration of a user with form not filled")
    public void formNotFilled() {

        homePage.goToSignUpForm();
        signUpPage.performSignUp();
        signUpPage.assertWrongInputMessages();
    }
}

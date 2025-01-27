package pl.seleniumdemo.utils;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.annotations.Test;

import java.lang.reflect.Method;

public class LoggerHelper {

    protected static final Logger logger = LogManager.getLogger();

    public static void logInfo(String message) {
        logger.info(message);
    }

    public static void testNameInfo(Method method) {
        logger.info(method.getAnnotation(Test.class).description());
    }
}

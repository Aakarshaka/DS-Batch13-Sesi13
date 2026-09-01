export const config = {
    runner: 'local',

    hostname: '127.0.0.1',
    port: 4723,
    path: '/',

    framework: 'mocha',

    specs: ['./tests/**/*.test.js'],

    capabilities: [{
        platformName: 'Android',

        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Android',
        'appium:udid': '7e850205',
        'appium:appPackage': 'com.example.belajar_bareng',
        'appium:appActivity': 'com.example.belajar_bareng.MainActivity',

        'appium:autoGrantPermissions': true,
        'appium:ignoreHiddenApiPolicyError': true
    }]
};
import { setHeadlessWhen, setCommonPlugins } from "@codeceptjs/configure";
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

const directoryName = __dirname;

export const config: CodeceptJS.MainConfig = {
  tests: "./*_test.ts",
  output: "./output",
  helpers: {
    Appium: {
      platform: "Android",
      desiredCapabilities: {
        app: directoryName + "\\amazon.apk",
        device: 'emulator',
        platformVersion: "13.0",
        appWaitDuration: 60000
      },
    },
  },
  include: {},
  name: "codeceptjs",
};

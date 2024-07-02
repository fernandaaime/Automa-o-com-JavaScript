import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
export config = {
  tests: './test.ts',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://swapi.dev/api'
    },
    JSONResponse: {}
  },
  include: 'backend',
  plugins:{
    allure:{
      "enabled": true
    }
}
}
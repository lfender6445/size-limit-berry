# size-limit-berry

```
npm install -g yarn
yarn set version berry
yarn
yarn run size-limit
```

results in

```
› yarn run size-limit
⠴ Running JS in headless ChromeTypeError: p.match is not a function
    at Function.resolveVirtual (/Users/lfender/source/size-limit-berry/.pnp.js:4206:21)
    at VirtualFS.mapToBase (/Users/lfender/source/size-limit-berry/.pnp.js:4243:22)
    at VirtualFS.fsMapToBase (/Users/lfender/source/size-limit-berry/.pnp.js:4163:19)
    at VirtualFS.writeFilePromise (/Users/lfender/source/size-limit-berry/.pnp.js:4040:46)
    at PosixFS.writeFilePromise (/Users/lfender/source/size-limit-berry/.pnp.js:4040:24)
    at Object.readProtocolStream (/Users/lfender/source/size-limit-berry/.yarn/cache/puppeteer-core-npm-5.5.0-f1c3bc7843-2ac92cb41a.zip/node_modules/puppeteer-core/lib/cjs/puppeteer/common/helper.js:254:31)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async createChromeTrace (/Users/lfender/source/size-limit-berry/.yarn/unplugged/estimo-npm-2.2.2-d967483a84/node_modules/estimo/src/create-chrome-trace.js:97:7)
    at async processor (/Users/lfender/source/size-limit-berry/.yarn/unplugged/estimo-npm-2.2.2-d967483a84/node_modules/estimo/src/processor.js:78:19)
    at async estimo (/Users/lfender/source/size-limit-berry/.yarn/unplugged/estimo-npm-2.2.2-d967483a84/node_modules/estimo/src/lib.js:12:32)
✖ Running JS in headless Chrome
 ERROR  TypeError: Cannot read property 'javaScript' of undefined
    at getTime (/Users/lfender/source/size-limit-berry/.yarn/unplugged/@size-limit-time-virtual-b875eea979/node_modules/@size-limit/time/get-running-time.js:29:22)
    at async getThrottling (/Users/lfender/source/size-limit-berry/.yarn/unplugged/@size-limit-time-virtual-b875eea979/node_modules/@size-limit/time/get-running-time.js:39:16)
    at async getRunningTime (/Users/lfender/source/size-limit-berry/.yarn/unplugged/@size-limit-time-virtual-b875eea979/node_modules/@size-limit/time/get-running-time.js:56:5)
    at async Promise.all (index 0)
    at async sum (/Users/lfender/source/size-limit-berry/.yarn/unplugged/@size-limit-time-virtual-b875eea979/node_modules/@size-limit/time/index.js:8:11)
    at async Object.step80 (/Users/lfender/source/size-limit-berry/.yarn/unplugged/@size-limit-time-virtual-b875eea979/node_modules/@size-limit/time/index.js:28:23)
    at async Promise.all (index 0)
    at async step (/Users/lfender/source/size-limit-berry/.yarn/cache/size-limit-npm-4.9.1-21b9cf9b01-f6b194fd15.zip/node_modules/size-limit/calc.js:15:13)
    at async calc (/Users/lfender/source/size-limit-berry/.yarn/cache/size-limit-npm-4.9.1-21b9cf9b01-f6b194fd15.zip/node_modules/size-limit/calc.js:44:36)
    at async calcAndShow (/Users/lfender/source/size-limit-berry/.yarn/cache/size-limit-npm-4.9.1-21b9cf9b01-f6b194fd15.zip/node_modules/size-limit/run.js:62:7)

```

Yarn Berry changes the way the underlying node module fs works

> When using PnP, packages are stored and accessed directly inside the Zip archives from the cache. The PnP runtime (.pnp.cjs) automatically patches Node's fs module to add support for accessing files inside Zip archives. This way, you don't have to do anything special:

> https://yarnpkg.com/features/pnp#frequently-asked-questions

Some quick research suggests there might be type issues around JS files loaded thru puppeteer
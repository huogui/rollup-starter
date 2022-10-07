const rollup = require('rollup')

// 常用 inputOptions 配置
const inputOptions = {
  input: './src/index.js',
  external: ['lodash'],
  plugins: [],
}
const outputOptionsList = [
  // 常用 outputOptions 配置
  {
    dir: 'dist/es',
    entryFileNames: '[name].[hash].js',
    chunkFileNames: 'chunk-[hash].js',
    assetFileNames: 'assets/[name]-[hash][extname]',
    format: 'es',
    sourcemap: true,
    globals: {
      lodash: '_',
    },
  },
  // 省略其它的输出配置
]

async function build() {
  let bundle
  let buildFailed = false
  try {
    bundle = await rollup.rollup(inputOptions)
    for (const outputOption of outputOptionsList) {
      const { output } = await bundle.generate(outputOption)
      await bundle.write(outputOption)
    }
  }
  catch (error) {
    buildFailed = true
  }
  if (bundle) {
    // 最后调用 bundle.close 方法结束打包
    await bundle.close()
  }
  process.exit(buildFailed ? 1 : 0)
}

build()

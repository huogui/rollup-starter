// rollup.config.js
/**
 * @type { import('rollup').RollupOptions }
 */

const buildIndexOptions = {
  input: ['src/index.js'],
  output: [
    {
      dir: 'dist/es',
      format: 'esm',
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
    },
  ],
}

/**
   * @type { import('rollup').RollupOptions }
   */
const buildUtilOptions = {
  input: ['src/util.js'],
  output: [
    {
      dir: 'dist/es',
      format: 'esm',
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
    },
  ],
}

export default [buildIndexOptions, buildUtilOptions]

// rollup.config.js
/**
 * @type { import('rollup').RollupOptions }
 */
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const buildIndexOptions = {
  input: ['src/index.js'],
  output: [
    {
      dir: 'dist/es',
      format: 'esm',
      plugins: [terser],
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
    },
  ],
  plugins: [nodeResolve(), commonjs()],
}

export default buildIndexOptions

import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from "rollup-plugin-terser"

import pkg from './package.json'
// import pkg from './package.json'

// Use peerDependencies as rollup external
// https://rollupjs.org/guide/en/#peer-dependencies
const { peerDependencies } = pkg
const external = Object.keys(peerDependencies)

// Explicitly specify unresolvable named exports.
// https://github.com/rollup/plugins/tree/master/packages/commonjs#namedexports
const namedExports = {
  'node_modules/glamor/server.js': ['renderStatic'],
  'node_modules/react-is/index.js': ['isForwardRef'],
}

// Ignore SSR imports in UMD, replace with empty functions
const ignoreSSR = {
  ssr: './ssr/index.umd.js'
}
export default {
  input: 'src/index.ts',
  external,
  output: {
    file: 'umd/uikit.js',
    format: 'umd',
    name: 'UIKit',
    indent: false,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes'
    }
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      ...ignoreSSR
    }),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports
    }),
    terser()
  ]
}

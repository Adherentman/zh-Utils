import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';

const pkg = require('./package.json');

export default {
  input: 'packages/is/index.ts',
  output: {
    file: 'bundle.js',
    format: 'es'
  },
  plugins: [
    typescript(),
    commonjs()
  ]
}
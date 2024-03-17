import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import filesize from 'rollup-plugin-filesize';
import packageJson from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.js',
  output: {
    name: 'ReactIconsLibrary',
    file: packageJson.main,
    format: 'cjs',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
    replace({
      preventAssignment: false,
      'process.env.NODE_ENV': '"development"',
    }),
    filesize(),
  ],
  external: [/@babel\runtinme/, 'react', 'react-dom'],
};

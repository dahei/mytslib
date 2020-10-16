const postcss = require('rollup-plugin-postcss');
const staticFiles = require('rollup-plugin-static-files');
const copy = require('rollup-plugin-copy');
const path = require('path');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({
        use: ['sass'],
        plugins: [],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        //extract: !!options.writeMeta,
        sourceMap: true,
        extract: !!options.writeMeta && path.resolve('dist/styles.css'),
      }),
      staticFiles({
        include: ['./static'],
      }),
      copy({
        targets: [
          {
            src: 'src/assets/iconfont/*.{ttf,woff,woff2,eot,svg}',
            dest: 'dist/assets/iconfont',
          },
        ],
      }),
      ...config.plugins,
    ];

    return config;
  },
};

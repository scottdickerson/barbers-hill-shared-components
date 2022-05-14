const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const image = require('@rollup/plugin-image');
const url = require('@rollup/plugin-url');

module.exports = {
  rollup(config, options) {
    if (config.output.format === 'umd') {
      delete config.external;
    }

    config.plugins = [
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      }),
      image({ include: ['**/*.png', '**/*.jpg'] }),
      // Force the `url` plugin to emit files.
      url({ include: ['**/*.ttf', '**/*.otf', '**/*.woff2'] }),
      ...config.plugins,
    ];
    return config;
  },
};

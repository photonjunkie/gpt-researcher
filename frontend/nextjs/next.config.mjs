/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/gptresearcher',
  assetPrefix: '/gptresearcher',
  output: 'standalone',
  trailingSlash: true,
  images: {
    remotePatterns: [
      { hostname: 'www.google.com' },
      { hostname: 'www.google-analytics.com' }
    ],
    unoptimized: true,
  },
  webpack: (config) => {
    // Ensure CSS files with Tailwind directives are properly processed
    const rules = config.module.rules;
    const cssRuleIndex = rules.findIndex(
      (rule) => rule.oneOf && Array.isArray(rule.oneOf)
    );

    if (cssRuleIndex !== -1) {
      const cssRule = rules[cssRuleIndex];
      const cssLoaders = cssRule.oneOf.filter(
        (rule) => Array.isArray(rule.use) && rule.test && rule.test.test('.css')
      );

      cssLoaders.forEach((loader) => {
        const postcssLoaderIndex = loader.use.findIndex(
          (use) => use.loader && use.loader.includes('postcss-loader')
        );

        if (postcssLoaderIndex !== -1) {
          const postcssLoader = loader.use[postcssLoaderIndex];
          if (!postcssLoader.options) {
            postcssLoader.options = {};
          }
          if (!postcssLoader.options.postcssOptions) {
            postcssLoader.options.postcssOptions = {};
          }
          if (!postcssLoader.options.postcssOptions.plugins) {
            postcssLoader.options.postcssOptions.plugins = [];
          }

          // Ensure tailwindcss and autoprefixer are included
          if (!postcssLoader.options.postcssOptions.plugins.includes('tailwindcss')) {
            postcssLoader.options.postcssOptions.plugins.push('tailwindcss');
          }
          if (!postcssLoader.options.postcssOptions.plugins.includes('autoprefixer')) {
            postcssLoader.options.postcssOptions.plugins.push('autoprefixer');
          }
        }
      });
    }

    return config;
  },
};

export default nextConfig;
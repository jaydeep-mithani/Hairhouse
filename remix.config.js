/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: 'app',
  future: {
    unstable_cssModules: true,
    unstable_postcss: true,
  },
  ignoredRouteFiles: ['**/.*'],
  watchPaths: ['./public'],
  server: './server.ts',

  /**
   * The following settings are required to deploy Hydrogen apps to Oxygen:
   */
  // eslint-disable-next-line prefer-template
  publicPath: (process.env.HYDROGEN_ASSET_BASE_URL ?? '/') + 'build/',
  assetsBuildDirectory: 'dist/client/build',
  serverBuildPath: 'dist/worker/index.js',
  serverMainFields: ['browser', 'module', 'main'],
  serverConditions: ['worker', process.env.NODE_ENV],
  serverDependenciesToBundle: 'all',
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  serverMinify: process.env.NODE_ENV === 'production',
}

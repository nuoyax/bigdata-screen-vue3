// postcss.config.d.ts
declare module "postcss.config" {
  interface PostCSSConfig {
    plugins: any[];
  }

  const config: PostCSSConfig;
  export = config;
}

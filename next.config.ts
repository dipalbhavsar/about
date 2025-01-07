import type { NextConfig } from "next";

// import { withContentlayer } from "next-contentlayer"

import { withContentlayer } from "next-contentlayer2";

import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src 'self';
  frame-src giscus.app
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

// const output = process.env.EXPORT ? "export" : undefined;
// const basePath = process.env.BASE_PATH || undefined;
// const unoptimized = process.env.UNOPTIMIZED ? true : undefined;

const plugins = [withContentlayer, withBundleAnalyzer];

const nextConfig: NextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",
  /**
   * Set base path. This is usually the slug of your repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/about",
  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

export default withContentlayer(nextConfig);

// /**
//  * @type {import('next/dist/next-server/server/config').NextConfig}
//  **/
// module.exports = () => {
//   const plugins = [withContentlayer, withBundleAnalyzer];
//   return plugins.reduce((acc: NextConfig, next) => next(acc), {
//     output,
//     basePath,
//     reactStrictMode: true,
//     pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
//     eslint: {
//       dirs: ["app", "components", "layouts", "scripts"],
//     },
//     images: {
//       remotePatterns: [
//         {
//           protocol: "https",
//           hostname: "picsum.photos",
//         },
//       ],
//       unoptimized,
//     },
//     async headers() {
//       return [
//         {
//           source: "/(.*)",
//           headers: securityHeaders,
//         },
//       ];
//     },
//     webpack: (config, options) => {
//       config.module.rules.push({
//         test: /\.svg$/,
//         use: ["@svgr/webpack"],
//       });

//       return config;
//     },
//   });
// };

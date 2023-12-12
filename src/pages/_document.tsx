import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=5, shrink-to-fit=no, viewport-fit=cover"
      />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="robots" content="index, follow" />
      <meta name="msapplication-TileColor" content="#4788f4"></meta>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/public/assets/images/icon-192x192.png" />
      <link rel="apple-touch-startup-image" href="/public/assets/images/icon-192x192.png" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link
        href="/public/assets/images/splashscreens/iphone5_splash.png"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/assets/images/splashscreens/iphone6_splash.png"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/assets/images/splashscreens/iphoneplus_splash.png"
        media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/assets/images/splashscreens/iphonex_splash.png"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/assets/images/splashscreens/iphonexr_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/assets/images/splashscreens/iphonexsmax_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/assets/images/splashscreens/ipad_splash.png"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/assets/images/splashscreens/ipadpro1_splash.png"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/assets/images/splashscreens/ipadpro3_splash.png"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/assets/images/splashscreens/ipadpro2_splash.png"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

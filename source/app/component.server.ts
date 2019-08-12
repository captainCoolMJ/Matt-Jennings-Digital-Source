import { ComponentDataInterface } from '../component-data.interface';

export const appComponent = (
  data: ComponentDataInterface,
  slots: { head: string; body: string; foot: string },
): string => `
  <!DOCTYPE html>
  <html lang="en" class="app">
    <head>
      <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${data.config.keys.gtm}');</script>
      <!-- End Google Tag Manager -->
      <meta charset="utf-8">
      <title>${data.site.title}</title>
      <meta name="description" content="${data.site.description}">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

      <link rel="icon" href="${data.config.assets['favicon.ico']}">

      ${slots.head}
    </head>
    <body class="app__inner">
      <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${data.config.keys.gtm}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->

      ${slots.body}

      ${slots.foot}
    </body>
  </html>
`;

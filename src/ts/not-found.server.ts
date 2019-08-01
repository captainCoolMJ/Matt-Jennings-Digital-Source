import { AppConfigurationUnsafeInterface } from './app/configuration-unsafe.interface';

export const NotFound = (config: AppConfigurationUnsafeInterface) => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <!-- Google Tag Manager -->
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${config.keys.gtm}');</script>
            <!-- End Google Tag Manager -->
            <meta charset="utf-8">
            <title>${config.title}</title>
            <meta name="description" content="${config.description}">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

            <link rel="icon" href="${config.assets.favicon}">
            <link rel="stylesheet" href="${config.assets.css}">
        </head>
        <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${config.keys.gtm}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->

        <nav id="nav" class="main_nav" role="navigation">
            <a href="#" id="toggleMenu" title="menu">&equiv; Menu</a>
            <ul>
                <li><a href="/#work" title="My Work">work</a></li>
                <li><a href="/#experience" title="My Work Experience">experience</a></li>
                <li><a href="/#talk" title="Contact Me">contact</a></li>
            </ul>
        </nav>

        <header>
            <div class="inner_wrap">

                <a class="hide_text" href="#nav">Jump to Navigation</a>

                <a href="/" class="logo" title="Matt Jennings Digital">
                    <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" width="36px" height="35px" viewBox="0 0 36 35" xml:space="preserve">
                    <path class="path" fill="none" stroke="#F8983E" stroke-width="5" stroke-miterlimit="10" d="M2.5,20.657c0,0,0-8.857,0-12.174
                        C2.5,6.735,2.833,2.5,7.496,2.5c4.895,0,5.402,3.927,5.402,5.687c0,1.141,0,1.999,0,3.139c0,3.081,1.439,5.213,5.033,5.213
                        c3.743,0,5.134-1.984,5.134-5.153c0-1.629,0-1.733,0-2.785c0-4.443,2.275-6.102,5.345-6.102c4.229,0,5.056,4.058,5.056,5.45
                        c0,5.183,0,12.025,0,18.542c0,2.259,0,5.985-5.488,5.985c-2.511,0-4.575-1.477-4.575-5.748c0-1.246,0.028-2.311,0.028-2.311"/>
                    </svg>

                </a>

                <h1 class="title"><a href="/" title="Matt Jennings Digital">Matt Jennings Digital</a></h1>
                
            </div>
        </header>

        <a name="section-top" class="jump_link" id="top"></a>
        <section class="sct sct-top sct-vertical-align">
            <div class="inner_wrap">

                <h1>D'oh!</h1>
                <p>Sorry, it seems like you've tried to access a page that doesn't exist. <a href="/" title="Go Home">Go back home</a>?</p>

            </div>
            <p class="nav-next"><a href="#work">Next &raquo;</a></p>
        </section>

        <footer>
            <div class="inner_wrap">
                
                <p><a href="#top" title="Back to top">Back to top &raquo;</a></p>
                <p>&copy;<span id="date">YYYY</span> Matt Jennings Digital</p>

            </div>
        </footer>

        <script src="${config.scripts.notFound}"></script>
        </body>
    </html>
`;

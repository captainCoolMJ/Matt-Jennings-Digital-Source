import { AppConfigurationUnsafeInterface } from './app/configuration-unsafe.interface';
import { AppConfigurationInterface } from './app/configuration.interface';
import { PortfolioItemInterface } from './portfolio/item.interface';

export const Index = (data: {
  config: AppConfigurationUnsafeInterface;
  site: AppConfigurationInterface;
  skills: Array<string>;
  portfolio: Array<PortfolioItemInterface>;
}) => `
    <!DOCTYPE html>
    <html lang="en">
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
            <link rel="stylesheet" href="${data.config.assets['index.css']}">
        </head>
        <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${data.config.keys.gtm}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->

        <nav id="nav" class="main_nav" role="navigation">
            <button type="button" id="toggleMenu">&equiv; Menu</button>
            <ul>
                <li><a href="#work" title="My Work">work</a></li>
                <li><a href="#experience" title="My Work Experience">experience</a></li>
                <li><a href="#talk" title="Contact Me">contact</a></li>
            </ul>
        </nav>

        <header>
            <div class="inner_wrap">

                <a class="hide_text" href="#nav">Jump to Navigation</a>

                <a href="#top" class="logo" title="${data.site.title}">
                    <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" width="36px" height="35px" viewBox="0 0 36 35" xml:space="preserve">
                    <path class="path" fill="none" stroke="#F8983E" stroke-width="5" stroke-miterlimit="10" d="M2.5,20.657c0,0,0-8.857,0-12.174
                        C2.5,6.735,2.833,2.5,7.496,2.5c4.895,0,5.402,3.927,5.402,5.687c0,1.141,0,1.999,0,3.139c0,3.081,1.439,5.213,5.033,5.213
                        c3.743,0,5.134-1.984,5.134-5.153c0-1.629,0-1.733,0-2.785c0-4.443,2.275-6.102,5.345-6.102c4.229,0,5.056,4.058,5.056,5.45
                        c0,5.183,0,12.025,0,18.542c0,2.259,0,5.985-5.488,5.985c-2.511,0-4.575-1.477-4.575-5.748c0-1.246,0.028-2.311,0.028-2.311"/>
                    </svg>

                </a>

                <h1 class="title"><a href="#top" title="${data.site.title}">${data.site.title}</a></h1>
                
            </div>
        </header>

        <a name="section-top" class="jump_link" id="top"></a>
        <section class="sct sct-top sct-vertical-align">
            <div class="inner_wrap">

                <h1>Delivering quality web apps.</h1>
                <p>I am an extremely passionate developer with a hardworking attitude and a desire to learn. <br />Check me out on 
                    <a 
                        rel="noopener"
                        href="${data.site.links.github}" 
                        target="_blank" 
                        title="Github"
                    >
                        Github
                    </a> and 
                    <a 
                        rel="noopener"
                        href="${data.site.links.linked_in}" 
                        target="_blank" 
                        title="Linked In"
                    >
                        Linked In
                    </a>.
                </p>

            </div>
            <p class="nav-next"><a href="#work">Next &raquo;</a></p>
        </section>

        <a name="section-work" class="jump_link" id="work"></a>
        <section class="sct sct-work">
            <div class="inner_wrap">

                <h1>My recent projects.</h1>
                <p class="small">*live links may be inconsistent with screenshots</p>
                
                <ul id="og-grid" class="og-grid clearfix">
                    ${data.portfolio
                      .map(
                        (item) => `
                        <li>
                            <a 
                                rel="noopener"
                                href="${item.links.external}" 
                                data-largesrc="${item.image}" 
                                data-title="${item.title}" 
                                data-description="
                                    ${item.description}
                                    Built at <a rel='noopener' href='${item.links.external}' target='_blank' title='${
                          item.title
                        }'>
                                    ${item.title}</a>.
                                    <strong>${item.tags.join(', ')}</strong>."
                            >
                                <img src="${item.thumbnail}" alt="${item.title}" />
                            </a>
                        </li>
                    `,
                      )
                      .join('')}
                </ul> 

            </div>
        </section>

        <a name="section-experience" class="jump_link" id="experience"></a>
        <section class="sct sct-exp">
            <div class="inner_wrap">
                
                <h1>How I spend my time.</h1>

                <p>
                    <a rel="noopener" href="${data.site.assets.cv}" title="View my resume" target="_blank">
                        Download as PDF &raquo;
                    </a>
                </p>
                <h2>Skills I've acquired</h2>
                <ul>
                    ${data.skills.map((skill) => `<li>${skill}</li>`).join('')}
                </ul>

                <h2>An overview of my past</h2>
                <div class="timelines cf">
                    <div id="timeline-work">
                        <h3>Work</h3>

                    </div>

                    <div id="timeline-life">
                        <h3>Life</h3>
                    </div>
                </div>

            </div>
        </section>

        <a name="section-talk" class="jump_link" id="talk"></a>
        <section class="sct sct-talk sct-vertical-align">
            <div class="inner_wrap">

                <h1>Let's talk business.</h1>
                <p>If you want to talk with me about work opportunities, questions, or if you're just saying hi send me a message! I will respond as soon as I possibly can (which will probably be nearly instantly).</p>

                <ul class="social">
                    <li><a rel="noopener" href="${data.site.links.email}" title="Send me an email">Email</a>
                    <li><a rel="noopener" href="${
                      data.site.links.github
                    }" target="_blank" title="Github">Github</a></li>
                    <li><a rel="noopener" href="${
                      data.site.links.linked_in
                    }" target="_blank" title="Linked In">Linked In</a></li>
                </ul>

            </div>
        </section>
        <footer>
            <div class="inner_wrap">
                
                <p><a href="#top" title="Back to top">Back to top &raquo;</a></p>
                <p>&copy;<span id="date">YYYY</span> ${data.site.title}</p>

            </div>
        </footer>
        <script>
        window.__mjd = {
            api: {
                timeline: '${data.config.api.timeline}',
            },
        };
        </script>
        <script src="${data.config.assets['index.js']}"></script>
        </body>
    </html>
`;

import { AppConfigurationUnsafeInterface } from './app/configuration-unsafe.interface';

export const Index = (config: AppConfigurationUnsafeInterface) => `
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
                <li><a href="#work" title="My Work">work</a></li>
                <li><a href="#experience" title="My Work Experience">experience</a></li>
                <li><a href="#talk" title="Contact Me">contact</a></li>
            </ul>
        </nav>

        <header>
            <div class="inner_wrap">

                <a class="hide_text" href="#nav">Jump to Navigation</a>

                <a href="#top" class="logo" title="Matt Jennings Digital">
                    <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" width="36px" height="35px" viewBox="0 0 36 35" xml:space="preserve">
                    <path class="path" fill="none" stroke="#F8983E" stroke-width="5" stroke-miterlimit="10" d="M2.5,20.657c0,0,0-8.857,0-12.174
                        C2.5,6.735,2.833,2.5,7.496,2.5c4.895,0,5.402,3.927,5.402,5.687c0,1.141,0,1.999,0,3.139c0,3.081,1.439,5.213,5.033,5.213
                        c3.743,0,5.134-1.984,5.134-5.153c0-1.629,0-1.733,0-2.785c0-4.443,2.275-6.102,5.345-6.102c4.229,0,5.056,4.058,5.056,5.45
                        c0,5.183,0,12.025,0,18.542c0,2.259,0,5.985-5.488,5.985c-2.511,0-4.575-1.477-4.575-5.748c0-1.246,0.028-2.311,0.028-2.311"/>
                    </svg>

                </a>

                <h1 class="title"><a href="#top" title="Matt Jennings Digital">Matt Jennings Digital</a></h1>
                
            </div>
        </header>

        <a name="section-top" class="jump_link" id="top"></a>
        <section class="sct sct-top sct-vertical-align">
            <div class="inner_wrap">

                <h1>Delivering quality web apps.</h1>
                <p>I am an extremely passionate developer with a hardworking attitude and a desire to learn. <br />Check me out on <a href="${config.links.github}" target="_blank" title="Github">Github</a> and <a href="${config.links.linkedIn}" target="_blank" title="Linked In">Linked In</a>.</p>

            </div>
            <p class="nav-next"><a href="#work">Next &raquo;</a></p>
        </section>

        <a name="section-work" class="jump_link" id="work"></a>
        <section class="sct sct-work">
            <div class="inner_wrap">

                <h1>My recent projects.</h1>
                <p class="small">*live links may be inconsistent with screenshots</p>
                
                <ul id="og-grid" class="og-grid clearfix">
                    <li>
                        <a href="https://app.qordoba.com" data-largesrc="images/portfolio/q.png" data-title="Qordoba SaaS Application" data-description="Angular based application developed to streamline localizing content from websites, mobile applications and documents. Built at <a href='http://qordoba.com/' target='_blank' title='Qordoba'>Qordoba</a>. <strong>AngularJS, JavaScript, WebSockets, RESTful Web Services, HTML, CSS (SASS), Grunt</strong>.">
                        <img src="images/thumbs/thumb_q.jpg" alt="Qordoba SaaS Application" />
                        </a>
                    </li>
                    <li>
                        <a href="http://bacchettacpa.com" data-largesrc="images/portfolio/bcpa.png" data-title="Bacchetta &amp; Company" data-description="Designed and developed as independent project. Responsive to typical desktop, mobile and tablet dimensions. <strong>Grunt, HTML, CSS (SCSS), Javascript</strong>.">
                        <img src="images/thumbs/thumb_bcpa.jpg" alt="Bachetta &amp; Company" />
                        </a>
                    </li>
                    <li>
                        <a href="http://redmeded.com" data-largesrc="images/portfolio/rme.png" data-title="RedMedEd" data-description="Developed as an independent project, then continued development with <a href='http://red-nucleus.com/' target='_blank' title='Red Nucleus'>Red Nucleus</a>. <strong>Grunt, HTML, CSS (SCSS), Javascript</strong>.">
                        <img src="images/thumbs/thumb_rme.jpg" alt="Red Med Ed" />
                        </a>
                    </li>
                    <li>
                        <a href="http://phillywaldorf.com" data-largesrc="images/portfolio/wsp.png" data-title="The Waldorf School of Philadelphia" data-description="Part of award winning campaign (Addy Gold - Integrated Campaigns, consumer, local [single market]). Developed at <a href='http://agency-m.com' target='_blank'>M</a>. Responsive to typical desktop and mobile dimensions. <strong>Modded Wordpress theme, PHP, CSS, Javascript</strong>.">
                        <img src="images/thumbs/thumb_wsp.jpg" alt="the Waldorf School of Philadelphia" />
                        </a>
                    </li>
                    <li>
                        <a href="http://novadynamix.com" data-largesrc="images/portfolio/nd+.png" data-title="Novadynamix+" data-description="Designed and developed as independent project. Responsive to typical desktop and mobile dimensions. <strong>Wordpress, PHP, CSS, JavaScript</strong>.">
                        <img src="images/thumbs/thumb_nd+.jpg" alt="Novadynamix+" />
                        </a>
                    </li>
                    <li>
                        <a href="http://educatorcareers.iss.edu" data-largesrc="images/portfolio/iss.png" data-title="ISS Educator Careers" data-description="Led client site training seminar. Developed at <a href='http://agency-m.com' target='_blank'>M</a>. Responsive to typical mobile dimensions. <strong>Drupal 7, PHP, CSS, Javascript</strong>.">
                        <img src="images/thumbs/thumb_iss.jpg" alt="ISS Educator Careers" />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.revspringinc.com" data-largesrc="images/portfolio/rs.png" data-title="RevSpring" data-description="Developed at <a href='http://agency-m.com' target='_blank'>M</a>. Responsive to typical mobile dimensions. <strong>Drupal 7, PHP, CSS, Javascript</strong>.">
                        <img src="images/thumbs/thumb_rs.jpg" alt="RevSpring" />
                        </a>
                    </li>
                    <li>
                        <a href="http://xfinity.comcast.net/parents/" data-largesrc="images/portfolio/xfparents.png" data-title="XFINITY&reg; Parental Controls" data-description="Developed at <a href='http://agency-m.com' target='_blank'>M</a>. <strong>HTML, CSS, Javascript</strong>.">
                        <img src="images/thumbs/thumb_xf.jpg" alt="XFINITY&reg; Parental Controls"/>
                        </a>
                    </li>
                    <li>
                        <a href="http://arabic.isswli.org/" data-largesrc="images/portfolio/isswli.png" data-title="ISS World Language Initiative" data-description="Helped in the building and translation of the ISS World Language Initiative website. Developed at <a href='http://agency-m.com' target='_blank'>M</a>. <strong>Drupal 6, CSS, Javascript</strong>.">
                        <img src="images/thumbs/thumb_isswli.jpg" alt="ISS World Language Initiative" />
                        </a>
                    </li>
                    <!-- <li>
                        <a href="http://mattjenningsdigital.com/canterburyTakeaways/" data-largesrc="images/portfolio/ct.png" data-title="Canterbury Takeaways" data-description="Final year project for university. Researched, designed and developed independently. Fully custom content management system built in PHP and MySQL.">
                        <img src="images/thumbs/thumb_ct.jpg" alt="Canterbury Takeaways" />
                        </a>
                    </li> -->
                </ul> 

            </div>
        </section>

        <a name="section-experience" class="jump_link" id="experience"></a>
        <section class="sct sct-exp">
            <div class="inner_wrap">
                
                <h1>How I spend my time.</h1>

                <p><a href="${config.assets.cv}" title="View my resume" target="_blank">Download as PDF &raquo;</a></p>
                <h2>Skills I've acquired</h2>
                <ul>
                    <li>Client Side Development [HTML5, CSS3, Javascript]</li>
                    <li>SCSS/LESS (CSS preprocessing)</li>
                    <li>Content Management Frameworks [Drupal 7, Wordpress]</li>
                    <li>Grunt &amp; Other Modern Workflow Utilities</li>
                    <li>MEAN Stack [MongoDB, Express.js, Angular.js, Node.js]</li>
                    <li>Responsive Web Design</li>
                    <li>Adobe Photoshop, Illustrator, Fireworks</li>
                </ul>

                <h2>An overview of my past</h2>
                <div class="timelines">
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
                    <li><a href="${config.links.email}" title="Send me an email">Email</a>
                    <li><a href="${config.links.github}" target="_blank" title="Github">Github</a></li>
                    <li><a href="${config.links.linkedIn}" target="_blank" title="Linked In">Linked In</a></li>
                </ul>

            </div>
        </section>
        <footer>
            <div class="inner_wrap">
                
                <p><a href="#top" title="Back to top">Back to top &raquo;</a></p>
                <p>&copy;<span id="date">YYYY</span> Matt Jennings Digital</p>

            </div>
        </footer>

        <script src="${config.scripts.index}"></script>
        </body>
    </html>
`;

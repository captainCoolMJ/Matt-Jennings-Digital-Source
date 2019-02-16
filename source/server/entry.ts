import express from 'express';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { storeCreate } from '../helper/store/create';
import messages from '../../translations/en.json';
import { appStart } from '../app/start';
import { appConfigurationSanitize } from './app/configuration-sanitize';
import { appConfigurationCreate } from './app/configuration-create';
import { appRootStoreGetInitialState } from '../app/root-store/get-initial-state';
import { TimelineItemCategoryEnum } from '../timeline/item/category.enum';
import { skillsCreateSuspender } from '../skills/create-suspender';
import { portfolioCreateSuspender } from '../portfolio/create-suspender';
import { timelineCreateSuspender } from '../timeline/create-suspender';

const manifest = JSON.parse(fs.readFileSync('./build/manifest.json').toString());
const configuration = appConfigurationCreate();

const app = express();
const port = configuration.port;

app.use(express.static(path.resolve('./build/public/')));

app.get('/api/skills', (req, res) => {

    res.status(200).send({
        data: [
            'Client Side Development [HTML5, CSS3, JavaScript]',
            'SCSS/LESS (CSS preprocessing)',
            'Content Management Frameworks [Drupal 7, Wordpress]',
            'Grunt & Other Modern Workflow Utilities',
            'MEAN Stack [MongoDB, Express.js, Angular.js, Node.js]',
            'Responsive Web Design',
            'Adobe Photoshop, Illustrator, Fireworks'
        ],
    });
});

app.get('/api/timeline', (req, res) => {

    res.status(200).send({
        data: [
            {
                from: "2003",
                to: "present",
                action: "Play Guitar",
                category: TimelineItemCategoryEnum.life,
                details: "I've been actively playing the guitar since 2003 and continue to jam."
            },
            {
                from: "sept 1 2008",
                to: "july 20 2012",
                action: "Move to Canterbury, UK",
                category: TimelineItemCategoryEnum.life,
                details: "I left America to pursue a higher education in the United Kingdom."
            },
            {
                from: "May 29 1990",
                to: "present",
                action: "Travel the World",
                category: TimelineItemCategoryEnum.life,
                details: "One of my passions in life is to explore as much of the world as I can. I have had the opportunity to visit many countries already and continue to do so."
            },
            {
                from: "sept 1 2008",
                to: "july 1 2012",
                action: "University of Kent - BSc (Hons) Multimedia Technology & Design",
                category: TimelineItemCategoryEnum.life,
                details: "Began and completed a university education."
            },
            {
                from: "august 1 2012",
                to: "present",
                action: "Live in Philadelphia, PA",
                category: TimelineItemCategoryEnum.life,
                details: "Graduated, moved back to America, and got an apartment in Philadelphia."
            },
            {
                from: "oct 20 2013",
                to: "oct 24 2013",
                action: "CSS Dev Conf 2013",
                category: TimelineItemCategoryEnum.life,
                details: "I attended the CSS Dev Conf in Estes Park, Colorado to refine my CSS and front-end development skills."
            },
            {
                from: "june 1 2007",
                to: "june 1 2008",
                action: "Student Video Technician, HCTV",
                category: TimelineItemCategoryEnum.work,
                details: "Worked for a local cable access channel in my town filming local events such as sports, music and theatre."
            },
            {
                from: "july 1 2010",
                to: "sept 1 2010",
                action: "Interactive Design Intern, Blue Diesel",
                category: TimelineItemCategoryEnum.work,
                details: "Assisted in designing websites and print publications for pharmaceutical clients."
            },
            {
                from: "july 1 2011",
                to: "sept 1 2011",
                action: "Interactive Design Freelancer, Blue Diesel",
                category: TimelineItemCategoryEnum.work,
                details: "Transitioned from an intern to freelance position at Blue Diesel. Projects included website design, banner ad design, icon design, and email template design. This gave me a perfect jump start into creating effective UI/UX and my skill set became a powerful combination of art and code."
            },
            {
                from: "oct 1 2012",
                to: "dec 1 2013",
                action: "Junior Web Developer, Agency M",
                category: TimelineItemCategoryEnum.work,
                details: "Developed numerous websites at a fast paced ad agency. Sites varied from static HTML to ‘built-from-scratch’ Drupal and Wordpress installs. Development team consisted of myself and another so teamwork and successful time management was vital in this role. Client interaction was also a regular task which made effective communication essential."
            },
            {
                from: "jan 1 2014",
                to: "july 31 2014",
                action: "Multimedia Developer, Red Nucleus",
                category: TimelineItemCategoryEnum.work,
                details: "Develop interactive e-learning solutions for major pharmaceutical clients in the form of iPad focused HTML5 games, visual perceptorships and interactive eBooks. Also assist in the migration of developers to modern techniques by leading multiple courses and seminars on responsive design, HTML5, CSS3, and modern Javascript frameworks."
            },
            {
                from: "aug 16 2014",
                to: "present",
                action: "Front End Engineer, Qordoba",
                category: TimelineItemCategoryEnum.work,
                details: "My work focuses on building a modern language localization platform with an AngularJS based front-end. Working at Qordoba requires an extensive knowledge of Javascript, HTML, CSS (SASS), Grunt, and Git, however, I have also found myself developing with Node.js and unit testing frameworks too."
            }
        ]
    })
});

app.get('/api/portfolio', (req, res) => {

    res.status(200).send({
        data: [
            {
                id: '1',
                type: 'portfolio_item',
                title: 'Qordoba SaaS Application',
                description: 'Angular based application developed to streamline localizing content from websites, mobile applications and documents.',
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/thumbs%2Fthumb_q.jpg?alt=media&token=b4e1dc4c-4572-459b-8b3d-745819bf14b7',
                tags: ['AngularJS', 'JavaScript', 'WebSockets', 'RESTful Web Services', 'HTML', 'CSS (SASS)', 'Grunt'],
                image: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/q.png?alt=media&token=0ac52cd6-4bff-44f9-8562-816345a3a811',
                links: {
                    external: 'https://app.qordoba.com'
                }
            },
            {
                id: '2',
                type: 'portfolio_item',
                title: 'Bacchetta & Company',
                description: 'Designed and developed as independent project. Responsive to typical desktop, mobile and tablet dimensions.',
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/thumbs%2Fthumb_bcpa.jpg?alt=media&token=7e98d289-f007-40ff-99ac-ecb965208bca',
                tags: ['Grunt', 'HTML', 'CSS (SCSS)', 'JavaScript'],
                image: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/bcpa.png?alt=media&token=d310e286-4533-4b83-8023-30de33ecea66',
                links: {
                    external: 'http://bacchettacpa.com'
                }
            },
            {
                id: '3',
                type: 'portfolio_item',
                title: 'RedMedEd',
                description: 'Developed as an independent project',
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/thumbs%2Fthumb_rme.jpg?alt=media&token=ff3dc189-b0c5-437d-aba7-f51ac7b1ff1f',
                tags: ['Grunt', 'HTML', 'CSS (SCSS)', 'JavaScript'],
                image: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/rme.png?alt=media&token=88dab79b-5242-47e5-a7eb-66ce90437de5',
                links: {
                    external: 'http://redmeded.com'
                }
            },
            {
                id: '4',
                type: 'portfolio_item',
                title: 'The Waldorf School of Philadelphia',
                description: 'Part of award winning campaign (Addy Gold - Integrated Campaigns, consumer, local [single market]). Responsive to typical desktop and mobile dimensions.',
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/thumbs%2Fthumb_wsp.jpg?alt=media&token=0368326b-e6f5-4484-8368-1f11ef8121c4',
                tags: ['Modded Wordpress Theme', 'PHP', 'CSS', 'JavaScript'],
                image: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/wsp.png?alt=media&token=da1c665a-c59d-45a7-8cb8-7042d2502698',
                links: {
                    external: 'http://phillywaldorf.com'
                }
            },
            {
                id: '5',
                type: 'portfolio_item',
                title: 'Novadynamix+',
                description: `Designed and developed as independent project. Responsive to typical desktop and mobile dimensions.`,
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/thumbs%2Fthumb_nd%2B.jpg?alt=media&token=66fcbe71-03f7-401b-83c6-5541dbfc5c15',
                tags: ['Wordpress', 'PHP', 'CSS', 'JavaScript'],
                image: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/nd%2B.png?alt=media&token=396441c1-2864-4208-b2e5-5adb6a88e497',
                links: {
                    external: 'http://novadynamix.com'
                }
            },
            {
                id: '6',
                type: 'portfolio_item',
                title: 'ISS Educator Careers',
                description: 'Led client site training seminar. Responsive to typical mobile dimensions.',
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/thumbs%2Fthumb_iss.jpg?alt=media&token=6c6ceb58-c4e1-4c8c-8ba4-556eb8dfb14e',
                tags: ['Drupal 7', 'PHP', 'CSS', 'JavaScript'],
                image: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/iss.png?alt=media&token=3889cac8-2077-40e5-9940-f287b089eaba',
                links: {
                    external: 'http://educatorcareers.iss.edu'
                }
            },
            {
                id: '7',
                type: 'portfolio_item',
                title: 'RevSpring',
                description: 'Responsive to typical mobile dimensions.',
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/thumbs%2Fthumb_rs.jpg?alt=media&token=b3578c3d-db74-44bb-9031-b95d6ea3bfc9',
                tags: ['Drupal 7', 'PHP', 'CSS', 'JavaScript'],
                image: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/rs.png?alt=media&token=17530455-d949-40c6-933a-05741a25a35a',
                links: {
                    external: 'http://www.revspringinc.com'
                }
            },
            {
                id: '8',
                type: 'portfolio_item',
                title: 'XFINITY&reg; Parental Controls',
                description: '',
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/thumbs%2Fthumb_xf.jpg?alt=media&token=d9cb1577-94b8-41b2-b7f4-0300e1686a84',
                tags: ['HTML', 'CSS', 'JavaScript'],
                image: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/xfparents.png?alt=media&token=e403f9d9-9003-47e2-8262-c304672ec591',
                links: {
                    external: 'http://xfinity.comcast.net/parents/'
                }
            },
            {
                id: '9',
                type: 'portfolio_item',
                title: 'ISS World Language Initiative',
                description: 'Helped in the building and translation of the ISS World Language Initiative website.',
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/thumbs%2Fthumb_isswli.jpg?alt=media&token=186147ce-3f2c-457e-aee7-e67534320ef8',
                tags: ['Drupal 6', 'CSS', 'JavaScript'],
                image: 'https://firebasestorage.googleapis.com/v0/b/matt-jennings-digital.appspot.com/o/isswli.png?alt=media&token=56038117-162d-46c7-9b7a-bae2d2313d78',
                links: {
                    external: 'http://arabic.isswli.org/'
                }
            }
        ]
    });
});

app.use('*', async (req, res) => {

    let file = fs.readFileSync(path.resolve('./build/index.html')).toString();

    const store = storeCreate(appRootStoreGetInitialState());

    const promiseQueue = [];

    const app = appStart(store, messages, configuration);

    store.subscribe(skillsCreateSuspender(store, promiseQueue));
    store.subscribe(portfolioCreateSuspender(store, promiseQueue));
    store.subscribe(timelineCreateSuspender(store, promiseQueue));

    renderToString(app);

    await Promise.all(promiseQueue);

    const variables = {
        title: configuration.sitename,
        content: renderToString(app),
        css: manifest['main.css'],
        base: configuration.window_keys.base,
        store: `${configuration.window_keys.state}: ${JSON.stringify(store.getState())}`,
        messages: `${configuration.window_keys.translations}: ${JSON.stringify(messages)}`,
        configuration: `${configuration.window_keys.configuration}: ${JSON.stringify(appConfigurationSanitize(configuration))}`,
    };

    Object.keys(variables).forEach((variable) => {
        file = file.replace(`{{${variable}}}`, variables[variable]);
    });

    res.send(file);
    // });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
import { PortfolioStoreStateInterface } from './state.interface';

export const portfolioStoreGetInitialState = (): PortfolioStoreStateInterface => ({
    items: [
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
            title: 'Bacchetta &amp; Company',
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
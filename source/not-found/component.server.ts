import { appComponent } from '../app/component.server';
import { ComponentDataInterface } from '../component-data.interface';
import { headerComponent } from '../header/component.server';
import { titleComponent } from '../title/component.server';
import { footerComponent } from '../footer/component.server';
import { sectionComponent } from '../section/component.server';
import { navigationComponent } from '../navigation/component.server';

export const notFoundComponent = (data: ComponentDataInterface) =>
  appComponent(data, {
    head: `<link rel="stylesheet" href="${data.config.assets['notFound.css']}">`,
    body: `
      ${navigationComponent({
        links: [
          { href: '/#work', title: 'My Work', content: 'work' },
          { href: '/#experience', title: 'My Work Experience', content: 'experience' },
          { href: '/#talk', title: 'Contact Me', content: 'contact' },
        ],
      })}

      ${headerComponent({ title: data.site.title })}

      ${sectionComponent({
        id: 'top',
        variants: ['noBorder'],
        content: `
          ${titleComponent({
            priority: 1,
            content: `D'oh!`,
            variants: ['large'],
          })}
          <p>Sorry, it seems like you've tried to access a page that doesn't exist. <a href="/" title="Go Home">Go back home</a>?</p>
        `,
      })}

      ${footerComponent({ title: data.site.title })}
    `,
    foot: `<script src="${data.config.assets['notFound.js']}"></script>`,
  });

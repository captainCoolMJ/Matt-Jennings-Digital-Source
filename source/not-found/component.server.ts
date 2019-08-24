import { appComponent } from '../app/component.server';
import { ComponentDataInterface } from '../component-data.interface';
import { headerComponent } from '../header/component.server';
import { titleComponent } from '../title/component.server';
import { footerComponent } from '../footer/component.server';
import { sectionComponent } from '../section/component.server';
import { navigationComponent } from '../navigation/component.server';
import { AppInternationalizationType } from '../app/types';

export const notFoundComponent = (intl: AppInternationalizationType) => (data: ComponentDataInterface) =>
  appComponent(data, {
    head: `<link rel="stylesheet" href="${data.config.assets['notFound.css']}">`,
    body: `
      ${navigationComponent({
        links: [
          {
            href: '/#work',
            title: intl.translate('navigation.link.work.title'),
            content: intl.translate('navigation.link.work.message'),
          },
          {
            href: '/#experience',
            title: intl.translate('navigation.link.experience.title'),
            content: intl.translate('navigation.link.experience.message'),
          },
          {
            href: '/#talk',
            title: intl.translate('navigation.link.contact.title'),
            content: intl.translate('navigation.link.contact.message'),
          },
        ],
      })}

      ${headerComponent(intl)({ title: data.site.title })}

      ${sectionComponent({
        id: 'top',
        variants: ['noBorder'],
        content: `
          ${titleComponent({
            priority: 1,
            content: intl.translate('notFound.section.title'),
            variants: ['large'],
          })}
          <p>${intl.translate('notFound.section.message', {
            link: `
              <a href="/" title="${intl.translate('notFound.section.link.title')}">
                ${intl.translate('notFound.section.link.message')}
              </a>
            `,
          })}</p>
        `,
      })}

      ${footerComponent(intl)({ title: data.site.title })}
    `,
    foot: `
      <script>
        window.__mjd = {
          messages: ${JSON.stringify(intl.getMessages())}
        };
      </script>
      <script src="${data.config.assets['notFound.js']}"></script>
    `,
  });

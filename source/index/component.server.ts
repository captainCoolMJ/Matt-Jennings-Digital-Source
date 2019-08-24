import { ComponentDataInterface } from '../component-data.interface';
import { appComponent } from '../app/component.server';
import { PortfolioItemInterface } from '../portfolio/item.interface';
import { headerComponent } from '../header/component.server';
import { footerComponent } from '../footer/component.server';
import { titleComponent } from '../title/component.server';
import { sectionComponent } from '../section/component.server';
import { navigationComponent } from '../navigation/component.server';
import { AppInternationalizationType } from '../app/types';
import { timelineComponent } from '../timeline/component.server';
import { TimelineRawEventInterface } from '../timeline/raw-event.interface';

export const indexComponent = (intl: AppInternationalizationType) => (
  data: ComponentDataInterface & {
    skills: Array<string>;
    portfolio: Array<PortfolioItemInterface>;
    timeline: Array<TimelineRawEventInterface>;
  },
) =>
  appComponent(data, {
    head: `<link rel="stylesheet" href="${data.config.assets['index.css']}">`,
    body: `
        ${navigationComponent(intl)({
          links: [
            {
              href: '#work',
              title: intl.translate('navigation.link.work.title'),
              content: intl.translate('navigation.link.work.message'),
            },
            {
              href: '#experience',
              title: intl.translate('navigation.link.experience.title'),
              content: intl.translate('navigation.link.experience.message'),
            },
            {
              href: '#talk',
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
              content: intl.translate('main.section.title'),
              variants: ['large'],
            })}
            <p>${intl.translate('main.section.message', {
              github: `<a 
                  class="link"
                  rel="noopener"
                  href="${data.site.links.github}" 
                  target="_blank" 
                  title="${intl.translate('common.github')}"
                >${intl.translate('common.github')}</a>`,
              linkedIn: `<a 
                  class="link"
                  rel="noopener"
                  href="${data.site.links.linked_in}" 
                  target="_blank" 
                  title="${intl.translate('common.linkedIn')}"
                >${intl.translate('common.linkedIn')}</a>`,
            })}<p>
          `,
        })}

        ${sectionComponent({
          id: 'work',
          content: `
            ${titleComponent({
              priority: 1,
              content: intl.translate('work.section.title'),
              variants: ['large'],
            })}
            <p class="text--small">${intl.translate('work.section.disclaimer')}</p>
            
            <ul id="og-grid" class="og-grid clearfix">
              ${data.portfolio
                .map(
                  (item) => `
                  <li>
                    <a 
                      data-id="grid-item"
                      rel="noopener"
                      href="${item.links.external}" 
                      data-largesrc="${item.image}" 
                      data-title="${item.title}" 
                      data-description="
                        ${item.description} <strong class='text--bold'>${item.tags.join(', ')}</strong>."
                    >
                      <img src="${item.thumbnail}" alt="${item.title}" />
                    </a>
                  </li>
              `,
                )
                .join('')}
            </ul> 
          `,
        })}

        ${sectionComponent({
          id: 'experience',
          content: `
            ${titleComponent({
              priority: 1,
              content: intl.translate('experience.section.title'),
              variants: ['large'],
            })}

            <p>
              <a 
                class="link"
                rel="noopener" 
                href="${data.site.assets.cv}" 
                title="${intl.translate('experience.link.resume.title')}" 
                target="_blank"
              >
                ${intl.translate('experience.link.resume.message')}
              </a>
            </p>

            ${titleComponent({
              priority: 2,
              content: intl.translate('skills.section.title'),
              variants: ['paddingBottomHalf'],
            })}
            <ul>
              ${data.skills.map((skill) => `<li>${skill}</li>`).join('')}
            </ul>

            ${titleComponent({
              priority: 2,
              content: intl.translate('past.section.title'),
              variants: ['paddingBottomHalf'],
            })}

            ${timelineComponent(intl)(data.timeline, {
              yearsToShow: 8,
            })}
          `,
        })}

        ${sectionComponent({
          id: 'talk',
          content: `
            ${titleComponent({
              priority: 1,
              content: intl.translate('contact.section.title'),
              variants: ['large'],
            })}
            <p>${intl.translate('contact.section.message')}</p>

            <ul class="social-links__list">
              <li class="social-links__list-item">
                <a 
                  class="link social-links__link"
                  rel="noopener" 
                  href="${data.site.links.email}" 
                  title="${intl.translate('common.link.email.title')}"
                >
                  ${intl.translate('common.link.email.message')}
                </a>
              <li class="social-links__list-item">
                <a 
                  class="link social-links__link"
                  rel="noopener" 
                  href="${data.site.links.github}" 
                  target="_blank" 
                  title="${intl.translate('common.github')}"
                >
                  ${intl.translate('common.github')}
                </a>
              </li>
              <li class="social-links__list-item">
                <a 
                  class="link social-links__link"
                  rel="noopener" 
                  href="${data.site.links.linked_in}" 
                  target="_blank" 
                  title="${intl.translate('common.linkedIn')}"
                >
                  ${intl.translate('common.linkedIn')}
                </a>
              </li>
            </ul>
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
        <script src="${data.config.assets['index.js']}"></script>
      `,
  });

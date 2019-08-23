import { ComponentDataInterface } from '../component-data.interface';
import { appComponent } from '../app/component.server';
import { PortfolioItemInterface } from '../portfolio/item.interface';
import { headerComponent } from '../header/component.server';
import { footerComponent } from '../footer/component.server';
import { titleComponent } from '../title/component.server';
import { sectionComponent } from '../section/component.server';
import { navigationComponent } from '../navigation/component.server';

export const indexComponent = (
  data: ComponentDataInterface & {
    skills: Array<string>;
    portfolio: Array<PortfolioItemInterface>;
  },
) =>
  appComponent(data, {
    head: `<link rel="stylesheet" href="${data.config.assets['index.css']}">`,
    body: `
        ${navigationComponent({
          links: [
            { href: '#work', title: 'My Work', content: 'work' },
            { href: '#experience', title: 'My Work Experience', content: 'experience' },
            { href: '#talk', title: 'Contact Me', content: 'contact' },
          ],
        })}

        ${headerComponent({ title: data.site.title })}

        ${sectionComponent({
          id: 'top',
          variants: ['noBorder'],
          content: `
            ${titleComponent({
              priority: 1,
              content: 'Delivering quality web apps.',
              variants: ['large'],
            })}
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
            <p data-nav-next="true" class="nav-next"><a href="#work">Next &raquo;</a></p>
          `,
        })}

        ${sectionComponent({
          id: 'work',
          content: `
            ${titleComponent({
              priority: 1,
              content: 'My recent projects.',
              variants: ['large'],
            })}
            <p class="small">*live links may be inconsistent with screenshots</p>
            
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
                        ${item.description}
                        Built at <a rel='noopener' href='${item.links.external}' target='_blank' title='${item.title}'>
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
          `,
        })}

        ${sectionComponent({
          id: 'experience',
          content: `
            ${titleComponent({
              priority: 1,
              content: 'How I spend my time.',
              variants: ['large'],
            })}

            <p>
              <a rel="noopener" href="${data.site.assets.cv}" title="View my resume" target="_blank">
                Download as PDF &raquo;
              </a>
            </p>

            ${titleComponent({
              priority: 2,
              content: `Skills I've acquired`,
              variants: ['paddingBottomHalf'],
            })}
            <ul>
              ${data.skills.map((skill) => `<li>${skill}</li>`).join('')}
            </ul>

            ${titleComponent({
              priority: 2,
              content: `An overview of my past`,
              variants: ['paddingBottomHalf'],
            })}
            <div class="timelines cf">
              <div id="timeline-work">
                ${titleComponent({
                  priority: 3,
                  content: 'Work',
                })}
              </div>

              <div id="timeline-life">
                ${titleComponent({
                  priority: 3,
                  content: 'Life',
                })}
              </div>
            </div>
          `,
        })}

        ${sectionComponent({
          id: 'talk',
          content: `
            ${titleComponent({
              priority: 1,
              content: `Let's talk business.`,
              variants: ['large'],
            })}
            <p>If you want to talk with me about work opportunities, questions, or if you're just saying hi send me a message! I will respond as soon as I possibly can (which will probably be nearly instantly).</p>

            <ul class="social">
              <li><a rel="noopener" href="${data.site.links.email}" title="Send me an email">Email</a>
              <li><a rel="noopener" href="${data.site.links.github}" target="_blank" title="Github">Github</a></li>
              <li><a rel="noopener" href="${
                data.site.links.linked_in
              }" target="_blank" title="Linked In">Linked In</a></li>
            </ul>
          `,
        })}

        ${footerComponent({ title: data.site.title })}
    `,
    foot: `
        <script>
          window.__mjd = {
            api: ${JSON.stringify(data.config.api)},
          };
        </script>
        <script src="${data.config.assets['index.js']}"></script>
      `,
  });

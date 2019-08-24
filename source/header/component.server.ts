import { titleComponent } from '../title/component.server';
import { AppInternationalizationType } from '../app/types';

export const headerComponent = (intl: AppInternationalizationType) => (data: { title: string }) => `
  <header class="header" data-id="header">
    <div class="content__inner">
      <a class="text text--hidden" href="#nav">${intl.translate('navigation.link.jump')}</a>

      <div class="header__logo">
        <a href="#top" class="logo" title="${data.title}">
          <svg 
            class="logo"
            version="1.2" 
            baseProfile="tiny" 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            x="0px" 
            y="0px" 
            width="36px" 
            height="35px" 
            viewBox="0 0 36 35" 
            xml:space="preserve"
          >
            <path 
              class="logo__path" 
              fill="none" 
              stroke="#F8983E" 
              stroke-width="5" 
              stroke-miterlimit="10" 
              d="M2.5,20.657c0,0,0-8.857,0-12.174
              C2.5,6.735,2.833,2.5,7.496,2.5c4.895,0,5.402,3.927,5.402,5.687c0,1.141,0,1.999,0,3.139c0,3.081,1.439,5.213,5.033,5.213
              c3.743,0,5.134-1.984,5.134-5.153c0-1.629,0-1.733,0-2.785c0-4.443,2.275-6.102,5.345-6.102c4.229,0,5.056,4.058,5.056,5.45
              c0,5.183,0,12.025,0,18.542c0,2.259,0,5.985-5.488,5.985c-2.511,0-4.575-1.477-4.575-5.748c0-1.246,0.028-2.311,0.028-2.311"
            />
          </svg>
        </a>
      </div>

      <div class="header__title">
        ${titleComponent({
          priority: 1,
          content: `<a href="#top" class="link link--alt header__link" title="${data.title}">${data.title}</a>`,
          variants: ['appTitle'],
        })}
      </div>
    </div>
  </header>
`;

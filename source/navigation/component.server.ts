import { AppInternationalizationType } from '../app/types';

export const navigationComponent = (intl: AppInternationalizationType) => (data: {
  links: Array<{
    href: string;
    title: string;
    content: string;
  }>;
}) => `
  <nav id="nav" class="navigation" role="navigation">
    <button 
      data-toggle-menu="true" 
      type="button" 
      class="navigation__button"
    >
      ${intl.translate('navigation.button.menu')}
    </button>
    <ul class="navigation__items">
      ${data.links
        .map(
          (link) => `
        <li class="navigation__item">
          <a 
            href="${link.href}" 
            title="${link.title}"
            class="navigation__link"
          >${link.content}</a>
        </li>
      `,
        )
        .join('')}
    </ul>
  </nav>
`;

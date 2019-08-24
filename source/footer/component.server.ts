import { AppInternationalizationType } from '../app/types';

export const footerComponent = (intl: AppInternationalizationType) => (data: { title: string }) => `
  <footer class="footer" data-id="footer">
    <div class="content__inner">
      <p>
        <a 
          class="link"
          href="#top" 
          title="${intl.translate('common.link.backToTop.title')}"
        >
          ${intl.translate('common.link.backToTop.message')}
        </a>
      </p>
      <p>&copy;<span id="date">YYYY</span> ${data.title}</p>
    </div>
  </footer>
`;

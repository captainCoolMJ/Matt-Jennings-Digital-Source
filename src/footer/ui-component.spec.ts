import { FooterUIComponent } from './ui-component';

describe('FooterUIComponent', () => {
  it('should set the date to the current year', () => {
    const container = document.createElement('div');

    container.innerHTML = `
      <span id="date"></span>
    `;

    const footer = new FooterUIComponent(container);
    footer.initialize();

    expect(container.textContent).toContain(new Date().getFullYear());
  });
});

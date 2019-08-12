import { UISmoothScroller } from './smooth-scroller';

describe('UISmoothScroller', () => {
  it('should add click listeners to all internal hash links', () => {
    const container = document.createElement('div');

    container.innerHTML = `
      <a href="#internal" id="qa">Internal</a>
      <div id="internal">Should go here</div>
    `;

    const link = container.querySelector('#qa');

    const scroller = new UISmoothScroller();

    jest.spyOn(scroller as any, 'onClickLink');

    scroller.initialize(container);

    $(link).trigger('click', { currentTarget: link });

    expect(scroller['onClickLink']).toHaveBeenCalled();
  });
});

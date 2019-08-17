import { UISmoothScroller } from './smooth-scroller';

describe('UISmoothScroller', () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <a href="#internal" id="qa-good">Internal</a>
    <a href="#bad-link" id="qa-bad">Internal Bad Link</a>
    <div id="internal">Should go here</div>
  `;

  let scroller: UISmoothScroller;
  let mockEvent: MouseEvent;

  beforeEach(() => {
    scroller = new UISmoothScroller();
    mockEvent = new MouseEvent('click');

    jest.spyOn(scroller as any, 'scrollTo');
  });

  it('should scroll the target into view when it is in the container', () => {
    const link = container.querySelector('#qa-good');

    scroller.initialize(container);
    link.dispatchEvent(mockEvent);
    expect(scroller['scrollTo']).toHaveBeenCalled();
  });

  it('should not scroll the target into view when it is not in the container', () => {
    const link = container.querySelector('#qa-bad');

    scroller.initialize(container);
    link.dispatchEvent(mockEvent);
    expect(scroller['scrollTo']).not.toHaveBeenCalled();
  });
});

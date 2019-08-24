import { PortfolioGridItem } from './item';

describe('PortfolioGridItem', () => {
  let instance: PortfolioGridItem;
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');

    instance = new PortfolioGridItem(element, {
      easing: 'ease',
      speed: 350,
      minHeight: 500,
    });
  });

  it('should create a grid item referencing the inputted item', () => {
    expect(instance.itemElement).toEqual(element);
  });

  it('should set item data and append it to the element', () => {
    instance.setData({
      href: '#test',
      largesrc: 'mock.jpg',
      title: 'test',
      description: 'this is a test',
    });

    instance.open();

    expect(element.querySelector('[data-id="grid-item-title"]').textContent).toEqual('test');
    expect(element.querySelector('[data-id="grid-item-description"]').textContent).toEqual('this is a test');
    expect(element.querySelector('[data-id="grid-item-link"]').getAttribute('href')).toEqual('#test');
    expect(element.querySelector('[data-id="grid-item-largesrc"]').getAttribute('src')).toEqual('mock.jpg');
  });

  it('should open the element', () => {
    expect(element.classList.contains('og-expanded')).toBe(false);

    instance.setData({});
    instance.open();
    element.dispatchEvent(new Event('transitionend'));

    expect(element.classList.contains('og-expanded')).toBe(true);
    expect(element.querySelector('.og-expander')).not.toBeNull();
  });

  it('should close the element', () => {
    instance.setData({});
    instance.open();
    element.dispatchEvent(new Event('transitionend'));

    expect(element.classList.contains('og-expanded')).toBe(true);
    expect(element.querySelector('.og-expander')).not.toBeNull();

    instance.close();
    element.dispatchEvent(new Event('transitionend'));

    expect(element.classList.contains('og-expanded')).toBe(false);
    expect(element.querySelector('.og-expander')).toBeNull();
  });
});

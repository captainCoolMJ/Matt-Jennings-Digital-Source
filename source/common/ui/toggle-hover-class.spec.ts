import { uiToggleHoverClass } from './toggle-hover-class';

describe('uiToggleHoverClass', () => {
  let container: Element = null;
  let selectedElements: NodeListOf<Element> = null;
  let target: Element = null;

  beforeEach(() => {
    container = document.createElement('div');
    container.innerHTML = `
      <div data-id="selector">Selector</div>
      <div data-id="target">Target</div>
    `;

    selectedElements = container.querySelectorAll('[data-id="selector"]');
    target = container.querySelector('[data-id="target"]');
  });

  it('should add a class to a target when the selectors have been hovered', () => {
    var event = new MouseEvent('mouseover', {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    uiToggleHoverClass(selectedElements, target, 'test');

    expect(target.classList.contains('test')).toBe(false);
    selectedElements[0].dispatchEvent(event);
    expect(target.classList.contains('test')).toBe(true);
  });

  it('should remove a class from a target when the selectors have been hovered', () => {
    var event = new MouseEvent('mouseout', {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    uiToggleHoverClass(selectedElements, target, 'test');

    target.classList.add('test');
    selectedElements[0].dispatchEvent(event);
    expect(target.classList.contains('test')).toBe(false);
  });
});

/**
 * Adds a hover class so multiple elements can activate a hover
 */

export const uiToggleHoverClass = (selector: NodeListOf<Element>, target: Element, className: string) => {
  selector.forEach((elem) => {
    elem.addEventListener('mouseover', () => {
      target.classList.add(className);
    });
    elem.addEventListener('mouseout', () => {
      target.classList.remove(className);
    });
  });
};

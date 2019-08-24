import { PortfolioGrid } from './grid';

describe('PortfolioGrid', () => {
  let instance: PortfolioGrid;
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');

    instance = new PortfolioGrid();
  });

  it('should initialize the grid', async () => {
    const liElement = document.createElement('li');

    element.appendChild(liElement);

    jest.spyOn(liElement, 'addEventListener');
    jest.spyOn(window, 'addEventListener');

    expect.assertions(2);

    await instance.initialize(element);

    expect(liElement.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
    expect(window.addEventListener).toHaveBeenCalledWith('resize', expect.any(Function));
  });
});

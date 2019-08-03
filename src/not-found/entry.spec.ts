import { notFoundEntry } from './entry';

jest.mock('../header/ui-component');
jest.mock('../footer/ui-component');
jest.mock('../navigation/ui-component');

describe('notFoundEntry', () => {
  it('should initialize the ui components', () => {
    expect(notFoundEntry()).toBe(undefined);
  });
});

// Mock Express
jest.mock('express', () => {
  const mock = jest.fn().mockImplementation(() => ({
    disable: jest.fn(),
    use: jest.fn(),
    get: jest.fn(),
    listen: jest.fn(),
  }));

  mock.Router = jest.fn().mockImplementation(() => ({
    post: jest.fn(),
  }));
  mock.static = jest.fn();

  return mock;
});

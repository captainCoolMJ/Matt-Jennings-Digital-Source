import { Api } from './api';

describe('Api', () => {
  it('should use fetch and parse a result as json', async () => {
    const api = new Api();

    const jsonSpy = jest.fn();

    const spy = jest.fn().mockResolvedValue({
      json: jsonSpy,
    });

    (global as any).fetch = spy;

    await api.fetch('http://test.com');

    expect(fetch).toHaveBeenCalledWith('http://test.com');
    expect(jsonSpy).toHaveBeenCalled();
  });
});

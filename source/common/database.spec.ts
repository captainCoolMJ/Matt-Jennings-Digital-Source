import { Database } from './database';
import { DatabaseProviderInterface } from './database/provider.interface';

describe('Database', () => {
  let MockDbProvider = jest.fn().mockImplementation(() => ({
    connect: jest.fn(),
    query: jest.fn(),
  }));

  let mock: DatabaseProviderInterface;

  beforeEach(() => {
    mock = new MockDbProvider();
  });

  it('should connect to a database using the inputted provider', () => {
    const db = new Database(mock);

    db.connect({
      databaseSecret: 'asdf',
      databaseUrl: '123',
    });

    expect(mock.connect).toHaveBeenCalled();
  });

  it('should query a database using the inputted provider', () => {
    const db = new Database(mock);

    db.query('/skills');

    expect(mock.query).toHaveBeenCalled();
  });
});

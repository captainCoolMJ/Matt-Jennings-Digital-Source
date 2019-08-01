import { DatabaseProviderInterface } from './database/provider.interface';
import { DatabaseConnectOptionsInterface } from './database/connect-options.interface';

export class Database {
  constructor(private provider: DatabaseProviderInterface) {}

  public connect(options: DatabaseConnectOptionsInterface): Promise<void> {
    return this.provider.connect(options);
  }
  public query<T>(ref: string): Promise<T> {
    return this.provider.query(ref);
  }
}

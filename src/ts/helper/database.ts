import { DatabaseProviderInterface } from './database/provider.interface';

export class Database {
  constructor(private provider: DatabaseProviderInterface) {}

  public connect(options: any): Promise<void> {
    return this.provider.connect(options);
  }
  public query<T>(ref: string): Promise<T> {
    return this.provider.query(ref);
  }
  //   public write(): Promise<void> {
  //     return this.provider.write();
  //   }
}

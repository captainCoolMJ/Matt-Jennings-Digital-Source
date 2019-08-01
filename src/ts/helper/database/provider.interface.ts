export interface DatabaseProviderInterface {
  connect(options: object): Promise<void>;
  query<T>(ref: string): Promise<T>;
}

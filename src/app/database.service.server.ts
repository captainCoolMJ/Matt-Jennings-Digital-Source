import { Database } from '../common/database';
import { DatabaseProviderFirebase } from '../common/database/provider-firebase.server';

const db = new Database(new DatabaseProviderFirebase());

export function AppDatabaseService(): Database {
  return db;
}

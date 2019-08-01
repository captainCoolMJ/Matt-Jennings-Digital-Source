import { Database } from '../helper/database';
import { DatabaseProviderFirebase } from '../helper/database/provider-firebase.server';

const db = new Database(new DatabaseProviderFirebase());

export function AppDatabaseService(): Database {
  return db;
}

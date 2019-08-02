import { DatabaseProviderInterface } from './provider.interface';
import firebase from 'firebase';
import { DatabaseConnectOptionsInterface } from './connect-options.interface';

export class DatabaseProviderFirebase implements DatabaseProviderInterface {
  private db: firebase.database.Database;

  public connect(options: DatabaseConnectOptionsInterface): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db = firebase
        .initializeApp({
          databaseURL: options.databaseUrl,
          apiKey: options.databaseSecret,
        })
        .database();
      resolve();
    });
  }

  public async query<T>(ref: string): Promise<T> {
    return this.db
      .ref(ref)
      .once('value')
      .then((snapshot) => snapshot.val());
  }
}

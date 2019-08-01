import { DatabaseProviderInterface } from './provider.interface';
import firebase from 'firebase';

export class DatabaseProviderFirebase implements DatabaseProviderInterface {
  private fb: firebase.app.App;

  connect(options: { databaseUrl: string; databaseSecret: string }): Promise<void> {
    return new Promise((resolve, reject) => {
      this.fb = firebase.initializeApp({
        databaseUrl: options.databaseUrl,
        apiKey: options.databaseSecret,
      });
      resolve();
    });
  }
  query<T>(ref: string): Promise<T> {
    return this.fb
      .database()
      .ref(ref)
      .once('value')
      .then((snapshot) => snapshot.val());
  }
  // write(): Promise<void> {
  //   return new Promise((resolve, reject) => {});
  // }
}

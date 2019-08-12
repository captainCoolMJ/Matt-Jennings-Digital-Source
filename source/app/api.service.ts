import { Api } from '../common/api';

const api = new Api();

export function AppApiService(): Api {
  return api;
}

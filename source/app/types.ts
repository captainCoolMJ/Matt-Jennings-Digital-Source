import { Internationalization } from '../common/internationalization';
import messages from '../../translations/en-US.json';

export type AppInternationalizationMessages = typeof messages;
export type AppInternationalizationType = Internationalization<AppInternationalizationMessages>;

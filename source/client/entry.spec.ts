import { clientEntry } from "./entry";
import { appRootStoreGetInitialState } from "../app/root-store/get-initial-state";
import messages from '../../translations/en.json';
import { appConfigurationMock } from "../app/configuration/mock";

describe('clientEntry', () => {

    it('should load the app', () => {

        expect(clientEntry(
            document.createElement('div'),
            appRootStoreGetInitialState(),
            messages,
            appConfigurationMock()
        )).toBeDefined();
    });
});
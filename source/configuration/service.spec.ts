import { ConfigurationService } from "./service";

describe('ConfigurationService', () => {

    it('should return an object', () => {

        expect(ConfigurationService()).toEqual({
            gtmId: undefined,
            port: NaN,
        });
    });
});
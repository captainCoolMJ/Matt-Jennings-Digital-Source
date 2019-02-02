import { i18nTranslate } from "./translate";

describe('i18nTranslate', () => {

    it('should translate an item', () => {

        expect(i18nTranslate({
            hello: 'hola'
        }, 'hello')).toEqual('hola');
    });

    it('should interpolate variables', () => {

        expect(i18nTranslate({
            hello: 'hola {name}!'
        }, 'hello', {
            name: 'Son'
        })).toEqual('hola Son!');
    })
});
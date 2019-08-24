import { Internationalization } from './internationalization';

describe('Internationalization', () => {
  const messages = {
    hello: 'Hello!',
    goodbye: 'Goodbye {firstName} {lastName}!',
  };

  let intl: Internationalization<typeof messages>;

  beforeEach(() => {
    intl = new Internationalization();
    intl.initialize('en-US', messages);
  });

  it('should create and set translation messages', () => {
    intl.initialize('en-US', messages);

    expect(intl.getMessages()).toEqual(messages);
  });

  it('should translate a message', () => {
    expect(intl.translate('hello')).toEqual('Hello!');
  });

  it('should translate a message with variables', () => {
    expect(
      intl.translate('goodbye', {
        firstName: 'John',
        lastName: 'Smith',
      }),
    ).toEqual('Goodbye John Smith!');
  });

  it('should return the key when a translation is not available', () => {
    expect(intl.translate('invalid' as any)).toEqual('invalid');
  });

  it('should format a date', () => {});
});

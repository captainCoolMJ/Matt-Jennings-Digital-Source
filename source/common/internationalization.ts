export class Internationalization<T extends Record<string, string>> {
  private locale: string;

  private messages: T;

  public initialize(locale: string, messages: T): void {
    this.locale = locale;
    this.messages = messages;
  }

  public getMessages(): T {
    return this.messages;
  }

  public translate(key: keyof T, variables?: Record<string, string | number>): string {
    let translation: string = this.messages[key];

    if (!translation) {
      return key as string;
    }

    if (variables) {
      Object.keys(variables).forEach((variable) => {
        translation = translation.replace(`{${variable}}`, variables[variable] as string);
      });
    }

    return translation;
  }

  public formatDate(date: Date, options: Intl.DateTimeFormatOptions): string {
    return new Intl.DateTimeFormat(this.locale, options).format(date);
  }
}

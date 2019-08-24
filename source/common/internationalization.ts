export class Internationalization<T extends Record<string, string>> {
  private messages: T;

  public initialize(messages: T): void {
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
}

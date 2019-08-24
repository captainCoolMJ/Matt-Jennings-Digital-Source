import { imageLoad } from './load';

describe('imageLoad', () => {
  it('should load an image from an inputted src and resolve upon completion', async () => {
    Object.defineProperty(Image.prototype, 'src', {
      // Define the property setter
      set(src) {
        setTimeout(() => this.onload());
      },
    });

    const image = await imageLoad('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
    expect(image).toBe(undefined);
  });

  it('should load an image from an inputted src and reject if it fails', async () => {
    Object.defineProperty(Image.prototype, 'src', {
      // Define the property setter
      set(src) {
        setTimeout(() => this.onerror());
      },
    });

    expect.assertions(1);
    try {
      await imageLoad('some-bad-url.jpg');
    } catch (e) {
      expect(e).toBe(undefined);
    }
  });
});

export const portfolioItemMock = ({
  title = 'Title',
  description = 'Description',
  id = 'mock',
  image = 'image.png',
  thumbnail = 'thumbnail.png',
  tags = ['tag'],
  links = {
    external: '',
  },
}) => ({
  title,
  description,
  id,
  image,
  thumbnail,
  tags,
  links,
});

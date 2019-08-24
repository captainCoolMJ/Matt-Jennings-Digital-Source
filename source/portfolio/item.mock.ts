export const portfolioItemMock = ({
  isPublished = true,
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
  isPublished,
  title,
  description,
  id,
  image,
  thumbnail,
  tags,
  links,
});

export interface PortfolioItemInterface {
  isPublished: boolean;
  title: string;
  description: string;
  id: string;
  image: string;
  thumbnail: string;
  tags: Array<string>;
  links: {
    external: string;
  };
}

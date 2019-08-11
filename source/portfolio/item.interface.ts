export interface PortfolioItemInterface {
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

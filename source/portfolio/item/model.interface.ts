export interface PortfolioItemModelInterface {
    id: string;
    type: string;
    title: string;
    description: string;
    image: string;
    thumbnail: string;
    tags: Array<string>;
    links: {
        external: string;
    };
}
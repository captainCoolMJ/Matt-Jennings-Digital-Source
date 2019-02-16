import { PortfolioItemModelInterface } from './model.interface';

export const portfolioItemModelMock = (): PortfolioItemModelInterface => ({
    id: '',
    type: '',
    title: '',
    description: '',
    image: '',
    thumbnail: '',
    tags: [],
    links: {
        external: ''
    }
});
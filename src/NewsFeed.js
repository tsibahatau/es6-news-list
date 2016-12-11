import ArticleVisitor from './ArticleVisitor';

export default class NewsFeed {

    constructor(newsContainer) {
        this.newsContainer = newsContainer;
    }

    render(newsData) {
        const visitor = new ArticleVisitor(this.newsContainer);
        for (const article of newsData) {
            visitor.visit(article);
        }
    }

}

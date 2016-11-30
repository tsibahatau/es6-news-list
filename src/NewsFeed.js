import Article from './Article';

export default class NewsFeed {

    constructor(newsContainer, newsData) {
        this.newsContainer = newsContainer;
        this.newsData = newsData;
    }

    render() {
        for (const article of this.newsData.articles) {
            this.newsContainer.appendChild(new Article(article).getArticleView());
        }
    }

}

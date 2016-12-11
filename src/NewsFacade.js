import Map from 'core-js/library/fn/map';

export default class NewsFacade {
    constructor(data) {
        this.articleUniques = new Map();
        for (const article of data.articles) {
            this.articleUniques.set(article.description, article);
        }
    }
    getArticles() {
        return this.articleUniques.values();
    }
}

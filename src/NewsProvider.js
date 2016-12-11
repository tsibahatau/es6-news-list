import NewsFeed from './NewsFeed';
import NewsFacade from './NewsFacade';

export default class NewsProvider {

    constructor(newsEndpoint, newsContainer) {
        this.newsEndpoint = newsEndpoint;
        this.newsContainer = newsContainer;
    }

    processData() {
        fetch(this.newsEndpoint).then((response) => {
            if (response.status !== 200) {
                console.log(`Error while loading data! Status Code: ${response.status}`);
                return;
            }

            response.json().then((data) => {
                const newsPresenter = new NewsFeed(document
                    .getElementById(this.newsContainer));
                newsPresenter.render(new NewsFacade(data).getArticles());
            });
        });
    }
}

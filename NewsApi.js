/**
 * Created by Tsimur on 14.11.2016.
 */
class Article {

    constructor(articleData) {
        this.articleData = articleData;
    }
    getArticleView(){
        const div = document.createElement('div');
        div.className = "article";
        div.innerHTML =`<div class="articleColumn"> 
                            <img src='${this.articleData.urlToImage}' class="articleImg" width='256' height='128'/>
                        </div>
                        <div class="articleColumn">
                            <a href="${this.articleData.url}">
                                <span class="articleTitle">${this.articleData.title}</span>
                            </a>  
                            <div class="articleTitle">${this.articleData.description}</div> 
                         </div>`;
        return div;
    }

}
class NewsFeed{

    constructor(newsContainer,newsData){
        this.newsContainer = newsContainer;
        this.newsData = newsData;
    }

    render(){
        for (const article of this.newsData.articles) {
            this.newsContainer.appendChild( new Article(article).getArticleView());
        }
    }

}


class NewsProvider {

    constructor(newsEndpoint, newsContainer) {
        this.newsEndpoint = newsEndpoint;
        this.newsContainer = newsContainer;
    }

    processData(){

        fetch(this.newsEndpoint).then((response) => {
            if (response.status !== 200) {
                console.log(`Error while loading data! Status Code: ${ response.status }`);
                return;
            }

            response.json().then((data) => {
                const newsPresenter = new NewsFeed(document.getElementById(this.newsContainer),data);
                newsPresenter.render();
            });

        });
    };
}


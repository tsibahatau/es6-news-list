export class Article {

    constructor(articleData) {
        this.articleData = articleData;
    }
    getArticleView() {
        const div = document.createElement('div');
        div.className = 'article';
        div.innerHTML = `<div class="articleColumn articleImageColumn"> 
                            <img src='${this.articleData.urlToImage}' class="articleImg" />
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
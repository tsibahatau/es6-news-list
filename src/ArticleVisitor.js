import Article from './Article'
export default class ArticleVisitor {
    constructor(container){
        this.container = container;
    }
    visit(articleData){
        this.container.appendChild(new Article(articleData).getArticleView());
    }
}
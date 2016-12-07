import Set from 'core-js/library/fn/set';
export default class NewsFacade {
    constructor(data){
        
        this.articleUniques = new Set(data.articles);
    }
    getArticles(){
        return this.articleUniques;
    }
}
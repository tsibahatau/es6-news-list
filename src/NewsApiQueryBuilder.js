export default class QueryBuilder {
    constructor(){
        this.url = `https://newsapi.org/v1/articles?source=$XXX_source&apiKey=$XXX_apikey`
    }
    newsSource(source){
        this.url = this.url.replace('$XXX_source',source);
        return this;
    }
    apiKey(key){
        this.url = this.url.replace('$XXX_apikey',key);
        return this;
    }
    build(){
        return this.url;
    }
    
}
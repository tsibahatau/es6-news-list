import NewsProvider from './NewsProvider';
import './style.scss';
import QueryBuilder from './NewsApiQueryBuilder'
export default function () {
    const endpoint = new QueryBuilder().newsSource('bbc-news').apiKey('80be8dc88ae142598d903f6989d92c25').build();
    const provider = new NewsProvider(endpoint, 'container');
    provider.processData();
};


import NewsProvider from './NewsProvider';
import '../style.scss';

module.exports = function () {
    const provider = new NewsProvider('https://newsapi.org/v1/articles?source=bbc-news&apiKey=80be8dc88ae142598d903f6989d92c25', 'container');
    provider.processData();
};


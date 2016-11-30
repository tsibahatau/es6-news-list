'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Tsimur on 14.11.2016.
 */

var Article = function () {
    function Article(articleData) {
        _classCallCheck(this, Article);

        this.articleData = articleData;
    }

    _createClass(Article, [{
        key: 'getArticleView',
        value: function getArticleView() {
            var div = document.createElement('div');
            div.className = 'article';
            div.innerHTML = '<div class="articleColumn articleImageColumn"> \n                            <img src=\'' + this.articleData.urlToImage + '\' class="articleImg" />\n                        </div>\n                        <div class="articleColumn">\n                            <a href="' + this.articleData.url + '">\n                                <span class="articleTitle">' + this.articleData.title + '</span>\n                            </a>  \n                            <div class="articleTitle">' + this.articleData.description + '</div> \n                         </div>';
            return div;
        }
    }]);

    return Article;
}();

var NewsFeed = function () {
    function NewsFeed(newsContainer, newsData) {
        _classCallCheck(this, NewsFeed);

        this.newsContainer = newsContainer;
        this.newsData = newsData;
    }

    _createClass(NewsFeed, [{
        key: 'render',
        value: function render() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.newsData.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var article = _step.value;

                    this.newsContainer.appendChild(new Article(article).getArticleView());
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return NewsFeed;
}();

var NewsProvider = function () {
    function NewsProvider(newsEndpoint, newsContainer) {
        _classCallCheck(this, NewsProvider);

        this.newsEndpoint = newsEndpoint;
        this.newsContainer = newsContainer;
    }

    _createClass(NewsProvider, [{
        key: 'processData',
        value: function processData() {
            var _this = this;

            fetch(this.newsEndpoint).then(function (response) {
                if (response.status !== 200) {
                    console.log('Error while loading data! Status Code: ' + response.status);
                    return;
                }

                response.json().then(function (data) {
                    var newsPresenter = new NewsFeed(document.getElementById(_this.newsContainer), data);
                    newsPresenter.render();
                });
            });
        }
    }]);

    return NewsProvider;
}();

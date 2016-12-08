import './initialStyle.css';

document.getElementById('loadAll').onclick = function () {
    require(['./index'], (loadData) => {
        loadData.default();
    });
};

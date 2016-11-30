document.getElementById('loadAll').onclick = function () {
  require(['./index'], function (loadData) {
    loadData();
  });
};

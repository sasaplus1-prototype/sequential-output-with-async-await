(function(){

  'use strict';

  const list = document.getElementById('js-list');

  function load(path) {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', path);
      xhr.onerror = function(err) {
        reject(err);
      };
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(xhr.responseText);
        }
      };
      xhr.send();
    });
  }

  (async function(){
    const files = [
      await load('./1.txt'),
      await load('./2.txt'),
      await load('./3.txt'),
    ];

    files.forEach(text => console.log(text));

    files.forEach(function(text) {
      const li = document.createElement('li');

      li.appendChild(
        document.createTextNode(text)
      );

      list.appendChild(li);
    });
  }());

}());

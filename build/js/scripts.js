'use strict';

var str1 = 'Hello, ';
var str2 = 'world!';
var result = document.querySelector('#result');

var res = function res(param1, param2) {
  return result.textContent = param1 + param2;
};
res(str1, str2);
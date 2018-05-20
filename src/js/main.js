const str1 = 'Hello, ';
const str2 = 'world!';
const result = document.querySelector('#result');

const res = (param1, param2) => {
  return result.textContent = param1 + param2;
}
res(str1, str2);

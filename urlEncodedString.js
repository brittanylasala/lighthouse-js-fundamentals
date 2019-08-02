const urlDecode = function(text) {
  let uncoded = {};
  let object = '';
  let detail = ''; 
  let light = true;
  for (i = 0; i < text.length; i++) {
    if (text[i] === '&') {
      uncoded[object] = detail;
      object = '';
      detail = '';
      light = true;
    } else if (text[i] === '=') {
      light = false;
    } else if (text[i] === '%' && text[i + 1] === '2' && text[i + 2] === '0') {
      detail += ' ';
    } else if (text[i] === '2' && text[i - 1] === '%' && text[i + 1] === '0') {
    } else if (text[i] === '0' && text[i - 1] === '2' && text [i - 2] === '%') {
    } else if (light === true) {
      object += text[i];
    } else if (light === false) {
      detail += text[i];
    }
  }
  uncoded[object] = detail;
  return uncoded;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
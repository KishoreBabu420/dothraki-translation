'use strict';
const input = document.getElementById('input');

const btnTranslate = document.getElementById('btn-translate');

const output = document.getElementById('output');

let url = 'https://api.funtranslations.com/translate/dothraki.json';

async function translate(text) {
  const data = await fetch(`${url}?text=${text}`);
  const result = await data.json();
  output.innerHTML = result.contents.translated;
}

btnTranslate.addEventListener('click', () => {
  const translatedText = translate(input.value.trim());
});

const input_text = document.querySelector('[data-textanalyzer="input"]');
const submit_btn = document.querySelector('[data-textanalyzer="submit"]');
const reset_btn = document.querySelector('[data-textanalyzer="reset"]');
const characters = document.querySelector('[data-textanalyzer="characters"]');
const paragraphs = document.querySelector('[data-textanalyzer="paragraphs"]');
const symbol = document.querySelector('[data-textanalyzer="symbol"]');
const words = document.querySelector('[data-textanalyzer="words"]');
const form = document.querySelector('[data-textanalyzer="form"]');
function get_character() {
  return input_text.value.trim().length;
}
function countWords(text) {
  const words = text.match(/\b\w+\b/g);

  return words ? words.length : 0;
}
function countParagraphs(text) {
  // از regex ساده برای تطبیق با پاراگراف‌ها استفاده می‌کنیم
  const paragraphRegex = /\n\s*\n/g;

  // با استفاده از `match` و regex، پاراگراف‌ها را تطبیق می‌دهیم
  const paragraphs = text.match(paragraphRegex);

  // اگر `paragraphs` غیر null باشد، تعداد پاراگراف‌ها را برمی‌گردانیم
  return paragraphs ? paragraphs.length : 0;
}

function countsymbol(text) {
  const symbol = text.match(/[\p{P}\p{S}\p{N}\p{Sm}\p{Sc}\p{Sk}\p{So}]/gu);
  return symbol ? symbol.length : 0;
}
submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  characters.textContent = get_character();
  const text = input_text.value;
  const wordCount = countWords(text);
  words.textContent = wordCount;
  paragraphs.textContent = countParagraphs(text) + 1;
  symbol.textContent = countsymbol(text);
});

reset_btn.addEventListener("click", () => {
  input_text.value = "";
});

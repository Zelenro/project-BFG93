export function renderTitleWithLastWord(text) {
  const words = text.trim().split(' ');
  const lastWord = words.pop();
  return `${words.join(' ')} <span class="title-accent">${lastWord}</span>`;
}

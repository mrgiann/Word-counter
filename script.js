const textArea = document.getElementById('textArea');
const wordCountSpan = document.getElementById('wordCount');
const charCountWithSpacesSpan = document.getElementById('charCountWithSpaces');
const charCountWithoutSpacesSpan = document.getElementById('charCountWithoutSpaces');
const paragraphCountSpan = document.getElementById('paragraphCount');
const sentenceCountSpan = document.getElementById('sentenceCount');

textArea.addEventListener('input', () => {
    const text = textArea.value;

    const words = text.trim().split(/\s+/).filter(word => word !== '');
    const charCountWithSpaces = text.length;
    const charCountWithoutSpaces = text.replace(/\s/g, '').length;

    const paragraphs = text.split('\n').filter(para => para.trim() !== '');
    const paragraphCount = paragraphs.length;

    const sentences = text.split(/[.!?]/).filter(sentence => sentence.trim() !== '');
    const sentenceCount = sentences.length;

    wordCountSpan.textContent = words.length.toString();
    charCountWithSpacesSpan.textContent = charCountWithSpaces.toString();
    charCountWithoutSpacesSpan.textContent = charCountWithoutSpaces.toString();
    paragraphCountSpan.textContent = paragraphCount.toString();
    sentenceCountSpan.textContent = sentenceCount.toString();
});

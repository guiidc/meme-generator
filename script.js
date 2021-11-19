const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const file = document.querySelector('#meme-insert');
const memeContainer = document.querySelector('#meme-image-container');
const img = document.querySelector('#meme-image');

textInput.addEventListener('keyup', () => {
  memeText.innerHTML = textInput.value;
});

file.addEventListener('change', (e) => {
  const fileToUpload = e.target.files.item(0);
  const reader = new FileReader();
  reader.onload = (ev) => {
    img.src = ev.target.result;
  };
  reader.readAsDataURL(fileToUpload);
});

function fireBorder() {
  memeContainer.style.border = '3px dashed red';
}
function waterBorder() {
  memeContainer.style.border = '5px double blue';
}
function earthBorder() {
  memeContainer.style.border = '6px groove green';
}

function setPreMeme(e) {
  img.src = e.src;
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'fire') fireBorder();
  if (e.target.id === 'water') waterBorder();
  if (e.target.id === 'earth') earthBorder();
  if (e.target.className === 'pre-meme-img') setPreMeme(e.target);
});

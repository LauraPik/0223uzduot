const inputEl = document.querySelector('input');
const divEl = document.querySelector('div');

const textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', (event)=>{
    const text = event.target.value;
    const divEl = document.getElementById('myDiv');
    divEl.textContent = text;
})

inputEl.addEventListener('keydown', (event) => {
    const filterText = event.target.value.toLowerCase(); 
    const originalText = divEl.textContent; 
    let filteredText = originalText;
  
    filteredText = filteredText.replace(new RegExp(`(${filterText})`, 'gi'), '<b>$1</b>'); 
  });
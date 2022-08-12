
// declaring variables
const ratingState = document.getElementById('choice');
const thankYouState = document.getElementById('thanks');
const submitBtn = document.querySelector('.submit-btn');
const rates = document.querySelectorAll('.btn');
const rating = document.getElementById('selection');

//changing on click function
let submit= ()=>{
  ratingState.classList.add('hidden');
  thankYouState.classList.remove('hidden');
};

//event listener for submit

submitBtn.onclick = submit;

rates.forEach( (rate) =>{
  rate.addEventListener('click', () => {
    rating.innerHTML = `You selected ${rate.innerHTML} out of 5`;
  })
});
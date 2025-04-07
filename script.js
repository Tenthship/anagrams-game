const letters = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'z'];
const vowels = ['A', 'E', 'I', 'O', 'U'];
const num_of_letters = 6;
const answer_box_1 = document.querySelector('#answer_box_1');
const answer_box_2 = document.querySelector('#answer_box_2');
const answer_box_3 = document.querySelector('#answer_box_3');
const answer_box_4 = document.querySelector('#answer_box_4');
const answer_box_5 = document.querySelector('#answer_box_5');
const answer_box_6 = document.querySelector('#answer_box_6');

const letter_button_1 = document.querySelector('#letter_1');
const letter_button_2 = document.querySelector('#letter_2');
const letter_button_3 = document.querySelector('#letter_3');
const letter_button_4 = document.querySelector('#letter_4');
const letter_button_5 = document.querySelector('#letter_5');
const letter_button_6 = document.querySelector('#letter_6');

const answer_array = [letter_button_1, letter_button_2, letter_button_3, letter_button_4, letter_button_5, letter_button_6];

let vowelCount = Math.floor(Math.random() * 3) + 1;
let letterCount = 6 - vowelCount;
let vowel_or_consonant;

for(let i = 0; i < num_of_letters; i++){
    vowel_or_consonant = Math.floor(Math.random() * 2) + 1;
    if((vowelCount > 0 && vowel_or_consonant === 2) || letterCount === 0){
        answer_array[i].textContent = vowels[Math.floor(Math.random() * vowels.length)];
        vowelCount--;
    }
    else if((letterCount > 0 && vowel_or_consonant === 1) || vowelCount === 0){
        answer_array[i].textContent = letters[Math.floor(Math.random() * letters.length)];
        letterCount--;
    }
}

letter_button_1.onclick = function(){
    let letter_button_1_text = letter_button_1.textContent;
    letter_button_1.textContent = '';
    answer_box_1.textContent = letter_button_1_text;
};
letter_button_2.onclick = function(){
    let letter_button_2_text = letter_button_2.textContent;
    letter_button_2.textContent = '';
    answer_box_2.textContent = letter_button_2_text;
};
letter_button_3.onclick = function(){
    let letter_button_3_text = letter_button_3.textContent;
    letter_button_3.textContent = '';
    answer_box_3.textContent = letter_button_3_text;
};
letter_button_4.onclick = function(){
    let letter_button_4_text = letter_button_4.textContent;
    letter_button_4.textContent = '';
    answer_box_4.textContent = letter_button_4_text;
};
letter_button_5.onclick = function(){
    let letter_button_5_text = letter_button_5.textContent;
    letter_button_5.textContent = '';
    answer_box_5.textContent = letter_button_5_text;
};
letter_button_5.onclick = function(){
    let letter_button_5_text = letter_button_5.textContent;
    letter_button_5.textContent = '';
    answer_box_5.textContent = letter_button_5_text;
};
letter_button_6.onclick = function(){
    let letter_button_6_text = letter_button_6.textContent;
    letter_button_5.textContent = '';
    answer_box_5.textContent = letter_button_5_text;
};

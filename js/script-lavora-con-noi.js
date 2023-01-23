
let rowCollegamento = document.querySelectorAll('.candidatura');

for(let i = 0; i < rowCollegamento.length; i++ ) {
    rowCollegamento[i].addEventListener('click', function() {
        window.location.href = '../candidatura-form.html';
    })
}
const arrJokes = ['Почему шутить можно над всеми, кроме безногих? Шутки про них обычно не заходят.',
'Почему безногий боится гопников? Не может постоять за себя.', 'Почему толстых женщин не берут в стриптиз?Они перегибают палку.',
' Что сказал слепой, войдя в бар?Всем привет, кого не видел.', 'Почему среди немых не популярен БДСМ?У них нет стоп слова.',
'Чего общего у наших шуток и почты России?Не до всех доходит.', 'Почему евреи не делают репосты?У них нет кнопки поделиться.', 
'Почему цыган не отправляют на олимпиаду? Они заберут все золото.', 'Как предотвратить инцест у грибов? Фразой "Не спорь с матерью!"', 
'-Алло, это Чешская Республика? Почешите мне спинку.']


let btn = document.querySelector('.btn');
let text = document.querySelector('.joke__text');
let btnLike = document.querySelector('.like-toggle');
text.textContent = 'В новый день - с новой шуткой!'

function getRandomJoke (arrJokes) {
    let randomJoke = arrJokes[Math.floor(Math.random() * arrJokes.length)];
    return randomJoke;
    console.log(randomJoke);
}

btn.addEventListener('click', () => {
    text.textContent = getRandomJoke(arrJokes);
    btnLike.classList.remove('active');
})

btnLike.addEventListener('click', () => {
    btnLike.classList.toggle('active');
})
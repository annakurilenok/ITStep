import '../scss/index.scss'

type State = {
    topicIndex: number | null,
    wordIndex: number | null
};

let state: State = JSON.parse(window.localStorage.getItem('state'));
if(!state) {
    state = {
        topicIndex: null,
        wordIndex: null
    }
    
}


let currentWord: string | null = null; //выбранное слово
let wordLetters: Array<any> = [];
let errorScore: number = 0;
let succesScore: number = 0;

const alphabet: string = 'абвгдеёжзиклмнопрстуфхцчшщьъэюя'
const topics: Array<string> = ['Города', 'Транспорт', 'Спорт'];

const words: any = {
    'Города': ['минск', 'москва', 'париж', 'рим'],
    'Транспорт': ['автомобиль', 'самолет', 'телега', 'трамвай'],
    'Спорт': ['футбол', 'шахматы', 'керлинг', 'теннис']
}

type GameElements = {
    topic: HTMLSpanElement,
    word: HTMLDivElement,
    letters: HTMLDivElement,
    hangman: Array<any>
}

const gameElements = {
    topic: document.getElementById('game-topic'),
    word: document.querySelector('.word'),
    letters: document.querySelector('.letters'),
    hungman: [
        document.getElementById('kran'),
        document.getElementById('head'),
        document.getElementById('body'),
        document.getElementById('left-hand'),
        document.getElementById('right-hand'),
        document.getElementById('left-leg'),
        document.getElementById('right-leg'),
    ]
}

function init(): void {
    let topicIndex: number = state.topicIndex !== null? state.topicIndex : rand(0, topics.length - 1);
    let wordsSet: Array<string> = state.wordIndex !== null ? state.wordIndex : words[topics[topicIndex]];
    let wordIndex: number  = rand(0, wordsSet.length - 1);

    currentWord = wordsSet[wordIndex];

    gameElements.topic.innerText = topics[topicIndex];

    for(let i: number = 0; i < currentWord.length; i++) {
        let span: HTMLSpanElement = document.createElement('span');
        span.classList.add('word-letter');

        gameElements.word.append(span);

        let wordLetter: any = {
            letter: currentWord[i],
            element: span
        }

        wordLetters.push(wordLetter);
    }

    for(let i: number = 0; i < alphabet.length; i++) {
        let button: HTMLButtonElement = document.createElement('button');
        button.classList.add('letter');
        button.innerText = alphabet[i];

        button.onclick = () => {
            checkletter(alphabet[i]);
            // button.disabled = true;
            button.onclick = null;
        }

        gameElements.letters.append(button);
    }

}

function* showHungPartGenerator(): any {
        for(let i = 0; i< gameElements.hungman.length; i++) {
            gameElements.hungman[i].style.display = 'block';
            yield;
        }
    }

    let showHungPart = showHungPartGenerator();

function checkletter (letter: string) {
    let indexes: Array<number> = [];
    while(true) {
        let pos = 0;
        let indexes = []
        let foundPos = currentWord.indexOf(letter, pos);

        if(foundPos == -1) {
            break;
        }

        indexes.push(foundPos);
        pos = foundPos + 1;
    }

    if(indexes.length > 0) {
        //отображаем буквы 
       for(let index of indexes) {
        wordLetters[index].element.innerText = wordLetters[index].letter;
        succesScore++;
       }
       
       if(succesScore == currentWord.length) {
        gameOver('Вы выиграли!');
       }
       

    } else {
        // изменить картинку
       showHungPart.next();
       errorScore++;

       if(errorScore >= gameElements.hungman.length) {
        gameOver('Вы проиграли');
       }
    }

}

function gameOver(message: string | null): void {
    let gameOver: HTMLDivElement = document.querySelector('.game-over');
    gameOver.innerText = message;
    gameOver.classList.add('active');

    // setTimeoutA(() => {
    //    location.reload();
    // },3000)
}

function rand(min: number, max: number) {
    min = Math.ceil(min); // Округляет min в большую сторону
    max = Math.floor(max); // Округляет max в меньшую сторону
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

init();


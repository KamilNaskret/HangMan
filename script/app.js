import { Alphabet } from './alphabet.mjs';
import { RandomWord } from './randomWord.mjs';


class Hangman{
    constructor(){
        this.alphabet=null;
        this.missed=null;
        this.word=null;
        this.letters=null;
        this.wordStatus=[];
        this.hangman=null;
        this.initialize();
        
    }
    initialize(){
        this.alphabet=new Alphabet();
        this.word=new RandomWord();
        this.letters=[...document.querySelectorAll('.game__alphabet-btn')];
        this.missed=document.querySelector('[data-missed]');
        this.missed.innerHTML="";
        this.hangman=[...document.querySelectorAll('[data-hangman]')];
        this.resetHangman();
        this.addEventListener();
    }
    resetHangman(){
        this.hangman.forEach((item) => {
            item.style.display="none";
        })
    }
    addEventListener(){
        this.letters.forEach((letter) => {
            letter.addEventListener('click',(e) => {
                this.checkValid(e.target.dataset.item)
            })
        })
    }
    checkValid(e){
        let {randomWord:random,items} = this.word;
        this.wordStatus=[];
        random = random.toUpperCase();
        for(let i=0;i<items.length;i++){
            this.wordStatus.push(items[i].innerHTML);
        }
        if(this.wordStatus.join("") === `${random}`){
            alert("Koniec gry! Wygrałeś");
            this.initialize();
        }
        if(random.includes(e)){
            items[random.indexOf(e)].innerHTML=random[random.indexOf(e)];
            items[random.lastIndexOf(e)].innerHTML=random[random.lastIndexOf(e)];

        }else{
            this.missed.innerHTML+=e;
            if(this.hangman.length){
                this.hangman[0].style.display="block";
                this.hangman.shift();
            }else{
                alert(`Koniec gry! Przegrałeś, hasło : ${random}`);
                this.initialize();
            }
        }
    }
}

const hangman = new Hangman();
console.log(hangman)
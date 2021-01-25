
class Alphabet{
    constructor(){
        this.alphabetBoard = null;
        this.initBoard();
    }
    initBoard(){
        this.alphabetBoard=document.querySelector('[data-alphabet]');
        this.alphabetBoard.innerHTML='';
        this.makeBoard();
    }
    alphabetElement(index){
        const button = document.createElement('button');
        button.classList.add('game__alphabet-btn');
        button.innerHTML=String.fromCharCode(index);
        button.dataset.item=String.fromCharCode(index);

        this.alphabetBoard.appendChild(button);
    }
    makeBoard(){
        for(let i=65;i<=90;i++){
            this.alphabetElement(i);
        }
    }
}

export{Alphabet};
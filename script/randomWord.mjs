class RandomWord{
    constructor(){
        this.randomWord=null;
        this.wordBoard=null;
        this.items=null;
        this.initialize();
    }
    initialize(){
        this.wordBoard=document.querySelector('[data-letters]');
        this.wordBoard.innerHTML='';
        this.random();
    }
    random(){
        fetch(`http://api.wordnik.com/v4/words.json/randomWord?api_key=${"ywhpmolo386bbhvsfha643fiond2nd3p2zct6dolqwb3dvccv"}`,{
            contentType:'application/text',
        })
            .then(response => response.json())
            .then(data => {
                const {word}=data;
                this.randomWord=word;
                this.makeBoard();
            })
    }
    makeBoard(){
        for(let i=0;i<this.randomWord.length;i++){
            const div = document.createElement('div');
            div.classList.add('game__letters-item');
            div.dataset.word=this.randomWord[i];
            this.wordBoard.appendChild(div);
        }
        this.items=[...document.querySelectorAll('.game__letters-item')];
    }
}
export{RandomWord};
const p = console.log;
const ctrlBtns = document.querySelectorAll('.controls button');
const cntnr = document.querySelector('.container');
let btnsArray = [
    ctrlBtns[0],
    ctrlBtns[1],
    ctrlBtns[2]
];

let pages = [
    {
        heading: "Focusing on productivity",
        bodyText: "content 1",
        thumb: "http://via.placeholder.com/300/ff00ff/fff?text=1"
    },
    {
        heading: "Planting more trees",
        bodyText: "content 2",
        thumb: "http://via.placeholder.com/300/ff00ff/fff?text=2"
    },
    {
        heading: "Turning green energy into the main source of energy",
        bodyText: "content 3",
        thumb: "http://via.placeholder.com/300/ff00ff/fff?text=3"
    }
];

function  clickBtn(ev) {
    
    
    let clickedButton = ev.target;

    let index = btnsArray.indexOf(clickedButton);
    
    p(index);
    
    p(clickedButton.id);
   
        for (let i = 0; i<ctrlBtns.length; i++){
            if(ctrlBtns[i].id){
                ctrlBtns[i].removeAttribute('id');
            }  
        }

        clickedButton.id='active';    

    cntnr.innerHTML = `
        <h2>${pages[index].heading}</h2>
    `;
}

for(let i = 0; i<ctrlBtns.length; i++){ 
    ctrlBtns[i].addEventListener('click', clickBtn);  
}

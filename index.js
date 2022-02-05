// const search = document.querySelectorAll('.search')[0],
//       modal1 = document.querySelectorAll('.modal1')[0],
//       modal2 = document.querySelectorAll('.modal2')[0],
//       run = document.querySelectorAll('.run')[0]
//       ward = document.querySelectorAll('.ward')[0],
//       shut = document.querySelectorAll('.shut')[0];
//       body = document.getElementsByTagName('body')

// search.addEventListener('click', function(){
//     modal1.style.display = 'block'
//     body.style.bgcolor = 'rgba(100, 75, 50, 0.7)'
    
// })

// ward.addEventListener('click', function(){
//     modal1.style.display = 'none'
// })

// run.addEventListener('click', function(){
//     modal2.style.display = 'block'
// })

// shut.addEventListener('click', function(){
//     modal2.style.display = 'none'
// })

const buttons = document.querySelectorAll('.btn'),
      showClass = document.querySelectorAll('.hide'),
      title = document.querySelector('.menu-text');

buttons.forEach(btn => btn.addEventListener('click', () =>{
    let attr = btn.getAttribute('data-btn-type')
    switch (attr){
        case "search":
            title.innerHTML = "Whoa! You found me!"
            buttons[3].innerHTML = "Hide back"
            showClass.forEach( elem => elem.classList.add('show'));
            break;
        case "run": 
            title.innerHTML = "Please don't run!"
            buttons[3].innerHTML = "Shut"
            showClass.forEach( elem => elem.classList.add('show'));
            break;
        case "hide":
            showClass.forEach( elem => elem.classList.remove('show'));
            break

    }
}))
const search = document.querySelectorAll('.search')[0],
      modal1 = document.querySelectorAll('.modal1')[0],
      modal2 = document.querySelectorAll('.modal2')[0],
      run = document.querySelectorAll('.run')[0]
      ward = document.querySelectorAll('.ward')[0],
      shut = document.querySelectorAll('.shut')[0];
      body = document.getElementsByTagName('body')

search.addEventListener('click', function(){
    modal1.style.display = 'block'
    body.style.bgcolor = 'rgba(100, 75, 50, 0.7)'
    
})

ward.addEventListener('click', function(){
    modal1.style.display = 'none'
})

run.addEventListener('click', function(){
    modal2.style.display = 'block'
})

shut.addEventListener('click', function(){
    modal2.style.display = 'none'
})
var btn = document.querySelector('button')
var h = document.querySelector('h1')
var inner = document.querySelector('.onechild')
var main = document.querySelector('main')
var count =0
var arr =["https://images.unsplash.com/photo-1761577679931-fcc7b143b801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",""]

btn.addEventListener('click',function(){
    btn.style.pointerEvents='none'
    var num = 50+ Math.floor(Math.random()*50)
    var a = Math.floor(Math.random()*arr.length)
     var interval1 = setInterval(() => {
        count++
        h.innerHTML=count + '%'
        inner.style.width =count + '%'
        

    }, num);

    setTimeout(() => {
        clearInterval(interval1)
        btn.innerHTML='Downloaded'
        btn.style.opacity='0.5'
         main.style.backgroundImage = `url(${arr[a]})`
        main.style.backgroundSize = "cover"
        main.style.backgroundPosition = "center"
    },num*100);

})

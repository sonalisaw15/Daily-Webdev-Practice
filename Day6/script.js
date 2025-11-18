var main = document.querySelector('main')
var btn = document.querySelector('.one')
var res = document.querySelector('.two')
var arr =["FollowYourPassion","Learn&Code","DoWorkHard","BuildConfidence","DoIt","TakeRiskHigh","ShowSomething"]


btn.addEventListener('click',function(){
   btn.style.transform = "scale(0.9)";
    setTimeout(() => {
    btn.style.transform = "scale(1)";
     }, 150);

    var n = Math.floor(Math.random()*arr.length)
    var x =  Math.random()*80
    var y =  Math.random()*80
    var r= Math.random()*360
    var a= Math.floor(Math.random()*256)
    var b= Math.floor(Math.random()*256)
    var c= Math.floor(Math.random()*256)
    var h =document.createElement('h1')
    h.innerHTML=arr[n]
    h.style.color='white'
    h.style.backgroundColor=`rgb(${a},${b},${c})`
    h.style.position='absolute'
    h.style.top=y+'%'
    h.style.left=x+'%'
    h.style.rotate=r+'deg'
    main.appendChild(h);
})

res.addEventListener('click',function(){
    document.querySelectorAll('main h1').forEach(h=>h.remove())
})
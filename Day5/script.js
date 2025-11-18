var arr =[
    {
        team:`MI`,
        primary:`silver`,
        seconday:`blue`,
        fullname:`MUMBAI INDIANS`,
        trofies:`5`

    },
     {
        team:`CSK`,
        primary:`blue`,
        seconday:`yellow`,
        fullname:`CHENNAI SUPER KINGS`,
        trofies:`5`

    },
     {
        team:`RCB`,
        primary:`blue`,
        seconday:`red`,
        fullname:`ROYAL CHALLENGERS BENGALURU`,
        trofies:`1`

    },
     {
        team:`GT`,
        primary:`silver`,
        seconday:`blue`,
        fullname:`GUJRAT TITANS`,
        trofies:`1`

    },
     {
        team:`KKR`,
        primary:`golden`,
        seconday:`purple`,
        fullname:`KOLKATA KNIGHT RIDERS`,
        trofies:`3`

    },
     {
        team:`SRH`,
        primary:`orange`,
        seconday:`red`,
        fullname:`SUNRISE HYDRABAD`,
        trofies:`1`

    },
     {
        team:`RR`,
        primary:`pink`,
        seconday:`blue`,
        fullname:`RAJASTHAN ROYALS`,
        trofies:`1`

    },
];

var btn = document.querySelector(`button`)
var h = document.querySelector(`h1`)
var main = document.querySelector(`main`)
var box = document.querySelector(`.box`)
var h3 = document.querySelector(`h3`)
var h6= document.querySelector('h6')

btn.addEventListener('click',()=>{
    var num = Math.floor(Math.random()*arr.length);
    h.innerHTML= arr[num].team;
    box.style.backgroundColor=arr[num].primary;
    main.style.backgroundColor=arr[num].seconday;
    h3.innerHTML=arr[num].fullname;
    h6.innerHTML=arr[num].trofies
    

})
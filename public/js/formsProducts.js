const aleta = document.querySelectorAll('.aleta')

const cajaform = document.querySelectorAll('.cajaform')

aleta.forEach ( (cadaAleta, i) => {
    aleta[i].addEventListener('click', ()=>{

        aleta.forEach( ( cadaAleta , i)=>{
            aleta[i].classList.remove('activo')
            cajaform[i].classList.remove('activo')
        })

        aleta[i].classList.add('activo')
        cajaform[i].classList.add('activo')
    })
})
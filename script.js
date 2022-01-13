//const itemLista = document.getElementById(`main-content__box_lista-id`);


// const expandList = (event)=>{

    
// }

// const expand ={
//     'tem01': ()=> itemLista.style.display='relative'
// }

//itemLista.addEventListener(`click`, expandList);







const faqOptions = document.querySelectorAll('.main-content__box_lista_itens_box')

//const arrowRotate = document.querySelectorAll('.main-content__box_lista_itens_box_seta')


faqOptions.forEach((element) => {
    element.addEventListener('click', () => {
        element.firstElementChild.classList.toggle('bold')
        element.lastElementChild.classList.toggle('rotate')
    })
})

// arrowRotate.forEach((element)=>{
//     element.addEventListener(`click`,()=>{
//         element.firstElementChild.classList.toggle('rotate')
//         console.log(element)
//     })
// })


const expand = document.querySelectorAll('.main-content__box_lista_itens')

expand.forEach((element)=>{
    element.addEventListener('click',()=>{
        element.lastElementChild.classList.toggle('hidden')
    })
    
})


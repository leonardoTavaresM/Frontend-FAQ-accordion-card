

const faqOptions = document.querySelectorAll('.main-content__box_lista_itens')
console.log(faqOptions)

faqOptions.forEach((option, key) => {
    option.addEventListener('click', () => {
        option.classList.toggle('active')
        faqOptions.forEach((element,index)=>{
            if(key !== index){
                element.classList.remove('active');
            }
        })
    })
})


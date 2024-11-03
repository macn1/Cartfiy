const listItems = document.querySelectorAll('.sidebar-list li');

listItems.forEach((item)=>{
    item.addEventListner('click',()=>{
        let isActive =item.classList.conatins('active')

        listItems.forEach((el)=>{
            el.classList.remove('active')
        })
        if (isActive) item.classList.remove('active')
            else item.classList.add('active')
    })
})
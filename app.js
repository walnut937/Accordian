const para1 = document.getElementById('para1')
const para2 = document.getElementById('para2')
const para3 = document.getElementById('para3')


const arrow1 = document.getElementById('arrow1')
const arrow2 = document.getElementById('arrow2')
const arrow3 = document.getElementById('arrow3')


const arrow1_btn = document.getElementById('arrow1-btn')
const arrow2_btn = document.getElementById('arrow2-btn')
const arrow3_btn = document.getElementById('arrow3-btn')

arrow1_btn.addEventListener('click', function(){
    if(para1.classList.contains('hidden')){
        if(!para2.classList.contains('hidden')){
            para2.classList.add('hidden')
            arrow2.classList.remove('rotate-180')
        }
        else if(!para3.classList.contains('hidden')){
            para3.classList.add('hidden')
            arrow3.classList.remove('rotate-180')
        }
        para1.classList.remove('hidden')
        arrow1.classList.add('rotate-180')
    }else{
        para1.classList.add('hidden')
        arrow1.classList.remove('rotate-180')
    }
})
arrow2_btn.addEventListener('click', function(){
    if(para2.classList.contains('hidden')){
        if(!para1.classList.contains('hidden')){
            para1.classList.add('hidden')
            arrow1.classList.remove('rotate-180')
        }
        else if(!para3.classList.contains('hidden')){
            para3.classList.add('hidden')
            arrow3.classList.remove('rotate-180')
        }
        para2.classList.remove('hidden')
        arrow2.classList.add('rotate-180')
    }else{
        para2.classList.add('hidden')
        arrow2.classList.remove('rotate-180')
    }
})
arrow3_btn.addEventListener('click', function(){
    if(para3.classList.contains('hidden')){
        if(!para2.classList.contains('hidden')){
            para2.classList.add('hidden')
            arrow2.classList.remove('rotate-180')
        }
        else if(!para1.classList.contains('hidden')){
            para1.classList.add('hidden')
            arrow1.classList.remove('rotate-180')
        }
        para3.classList.remove('hidden')
        arrow3.classList.add('rotate-180')
    }else{
        para3.classList.add('hidden')
        arrow3.classList.remove('rotate-180')
    }
})
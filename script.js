const arrows=document.querySelectorAll('.bi-chevron-right');
const movieList=document.querySelectorAll('.movie-list');

arrows.forEach((arrow,index)=>{
    arrow.addEventListener('click',(event)=>{
        console.log(movieList[index].computedStyleMap().get('transform'));
    })
})
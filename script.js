const arrows=document.querySelectorAll('.bi-chevron-right');
const movieList=document.querySelectorAll('.movie-list');
const screenWidt=document.documentElement.clientWidth;

arrows.forEach((arrow,index)=>{
    let clickCounter=0;
    const movieNumber=movieList[index].querySelectorAll('.movie-item').length;

    arrow.addEventListener('click',function(){
        clickCounter++;

        if(movieNumber-(screenWidt/300+clickCounter)>=0)
        {
            movieList[index].style.transform=`translateX(${movieList[index].computedStyleMap().get('transform')[0].x.value-300}px)`;
        }else{
            movieList[index].style.transform='translateX(0)';
            clickCounter=0;
        }
    });
});

const ball=document.querySelector('.toggle-ball');
const items=document.querySelectorAll('.container,.profile-text,.sidebar,.sidebar i,.navbar,.menu-list li a,.movie-list-title,.toggle,.toggle-ball');

ball.addEventListener('click',function(){
    items.forEach(item=>{
        item.classList.toggle('active');
    })
})
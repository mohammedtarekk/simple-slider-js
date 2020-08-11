let images = document.querySelectorAll('.slider-content img'),
    slidesSequence = document.getElementById('slide-number'),
    nextBT = document.getElementById('next'),
    prevBT = document.getElementById('prev'),
    currentIndex = 0;

// PAGINATION
let paginationElement = document.createElement('ul');
paginationElement.setAttribute('id','pagination-ul');
for(let i=0;i<images.length;i++)
{
    let paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index',i+1);
    paginationItem.appendChild(document.createTextNode(i+1));
    paginationElement.appendChild(paginationItem);
}

document.getElementById('indicators').appendChild(paginationElement);

for (elem of paginationElement.children) {
    elem.onclick = function(){
        currentIndex = parseInt(this.getAttribute('data-index')) - 1;
        runSlider();
    }
}

// SLIDING
function runSlider(){
    slidesSequence.textContent = `Slide #${currentIndex + 1}`;

    reset(images);
    images[currentIndex].classList.add('active');

    reset(paginationElement.children);
    paginationElement.children[currentIndex].classList.add('active');

    if(currentIndex == 0)
        prevBT.classList.add('disabled');
    else
        prevBT.classList.remove('disabled');

    if(currentIndex == images.length - 1)
        nextBT.classList.add('disabled');
    else
        nextBT.classList.remove('disabled');
}
runSlider();

function reset(list){
    for (elem of list)
        elem.classList.remove('active');
}

// CONTROLS
nextBT.onclick = function(){
    if(this.classList.contains('disabled'))
        return;
    
    currentIndex++;
    runSlider();
};

prevBT.onclick = function(){
    if(this.classList.contains('disabled'))
        return;
    
    currentIndex--;
    runSlider();
};
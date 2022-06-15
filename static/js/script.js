let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

// for hero text

var typed = new Typed(".heading-2", {
    strings: ['Usama', 'a Developer', 'pleased to see You'],
    typeSpeed: 100,
    backSpeed: 150,
    backDelay: 1000,
    loop: true
})

// const textTyper = document.querySelector('.heading-2'),
//       blinkCursor = document.querySelector('.cursor');

// const textList = ['Usama', 'a Developer', 'pleased to see You'],
//     typing = 150,
//     erasing = 50,
//     switchDelay = 2500;
// let listIndex = 0;
// let charIndex = 0;

// function erase() {
//     if (charIndex > 0) {
//         if (!blinkCursor.classList.contains('typing')) blinkCursor.classList.add('typing');
//         textTyper.textContent += textList[listIndex].substring(0, charIndex-1);
//         charIndex--;
//         setTimeout(erase, erasing);
//     } else {
//         blinkCursor.classList.remove('typing');
//         listIndex++;
//         if(listIndex>=textList.length) listIndex=0;
//         setTimeout(type, typing + 1000);
//     }
// }

// function type() {
//     if (charIndex < textList[listIndex].length) {
//         if (!blinkCursor.classList.contains('typing')) blinkCursor.classList.add('typing');
//         textTyper.textContent += textList[listIndex].charAt(charIndex);
//         charIndex++;
//         setTimeout(type, typing);
//     } else {
//         blinkCursor.classList.remove('typing');
//         setTimeout(erase, switchDelay);
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//     if(textList.length) setTimeout(type, switchDelay + 250)
// })
//accordian

const accordions = document.getElementsByClassName('container');

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function() {
        // Remove 'active' class from all accordion items
        for (let j = 0; j < accordions.length; j++) {
            if (i !== j) {
                accordions[j].classList.remove('active');
            }
        }

        // Toggle 'active' class for the clicked accordion item
        this.classList.toggle('active');
    });
}

//popup window

var popup = document.getElementById('popup');
var isPopupVisible = false;

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 300 && !isPopupVisible) { // Change 200 to the scroll position where you want the popup to appear
        popup.style.display = 'block';
        popup.classList.remove('fadeOut');
        popup.classList.add('fadeIn');
        isPopupVisible = true;
    } else if (scrollPosition <= 300 && isPopupVisible) {
        popup.classList.remove('fadeIn');
        popup.classList.add('fadeOut');
        isPopupVisible = false;
    }
});

popup.addEventListener('animationend', function() {
    if (!isPopupVisible) {
        popup.style.display = 'none';
    }
});
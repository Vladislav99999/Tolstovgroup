// плавное появление загаловка, описание, кнопки
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.header_imet');

    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 500);
    });
});
// Для затемнение при скролле
document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.querySelector('.video-container');
    const content = document.querySelector('.content');

    window.addEventListener('scroll', function () {
        const scrolled = window.scrollY;

        // Затемнение фона в зависимости от скролла
        const opacity = 1 - (scrolled / videoContainer.offsetHeight);
        videoContainer.style.opacity = opacity;

        // Смещение содержимого при скролле
        const translateY = Math.max(0, scrolled - videoContainer.offsetHeight + 100);
        content.style.transform = `translate(-50%, -50%) translateY(${translateY}px)`;

    });
});
// Для аккардионов
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(function (item) {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', function () {
            item.classList.toggle('active');
            const content = item.querySelector('.accordion-content');
            if (item.classList.contains('active')) {
                content.style.display = 'none';
            } else {
                content.style.display = 'flex';
            }
        });
    });
});
// Для Попапа 
function togglePopup() {
    var popup = document.getElementById('tooltipPopup');
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
}
// Для Ползунков
function updateRange() {
    var rangeMin = document.getElementById('rangeMin').value;
    var rangeMax = document.getElementById('rangeMax').value;

    document.getElementById('minLabel').textContent = 'Min: ' + rangeMin + ' GHz';
    document.getElementById('maxLabel').textContent = 'Max: ' + rangeMax + ' GHz';
}

function adjustRangeValue(step) {
    var rangeInput = document.getElementById('rangeInput');
    var currentValue = parseInt(rangeInput.value);
    var newValue = currentValue + step;

    // Ensure the new value is within the specified range
    if (newValue >= parseInt(rangeInput.min) && newValue <= parseInt(rangeInput.max)) {
        rangeInput.value = newValue;
        updateSelectValue(); // Update the select element value
    } else {
        // If the new value is outside the range, set it to the closest limit
        rangeInput.value = (newValue < parseInt(rangeInput.min)) ? parseInt(rangeInput.min) : parseInt(rangeInput.max);
    }
}

function updateSelectValue() {
    var rangeInput = document.getElementById('rangeInput');
    var selectValue = document.getElementById('selectValue');
    selectValue.value = rangeInput.value;
}

function updateRangeValue() {
    var rangeInput = document.getElementById('rangeInput');
    var selectValue = document.getElementById('selectValue');
    rangeInput.value = selectValue.value;
}


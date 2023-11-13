// Получаем все элементы с классом toggle-link
const toggleLinks = document.querySelectorAll('.toggle-link');
const hiddenTexts = document.querySelectorAll('.hidden-text');

// Функция для обновления видимости текста в зависимости от ширины экрана
function updateTextVisibility(index) {
    // Проверяем ширину экрана
    if (window.innerWidth <= 768) {
        // На узких экранах текст скрывается при загрузке страницы
        hiddenTexts[index].style.display = 'none';
    } else {
        // На широких экранах текст всегда видим
        hiddenTexts[index].style.display = 'block';
    }
}

// Обновляем видимость текста для каждой пары ссылка-текст при загрузке страницы
toggleLinks.forEach((link, index) => {
    updateTextVisibility(index);
});

// Добавляем обработчик события при изменении размера окна
window.addEventListener('resize', () => {
    toggleLinks.forEach((link, index) => {
        updateTextVisibility(index);
    });
});

// Добавляем обработчик события при клике по ссылке
toggleLinks.forEach((link, index) => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке

        // Проверяем ширину экрана
        if (window.innerWidth <= 768) {
            // Переключаем состояние видимости текста
            hiddenTexts[index].style.display = hiddenTexts[index].style.display === 'none' ? 'block' : 'none';
        }
    });
});

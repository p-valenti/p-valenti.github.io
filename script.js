// Получаем элементы
const toggleLink = document.getElementById('toggle-link');
const hiddenText = document.getElementById('hidden-text');

// Функция для обновления видимости текста в зависимости от ширины экрана
function updateTextVisibility() {
    // Проверяем ширину экрана
    if (window.innerWidth <= 768) {
        // На узких экранах текст скрывается при загрузке страницы
        hiddenText.style.display = 'none';
    } else {
        // На широких экранах текст всегда видим
        hiddenText.style.display = 'block';
    }
}

// Обновляем видимость текста при загрузке страницы
updateTextVisibility();

// Добавляем обработчик события при изменении размера окна
window.addEventListener('resize', updateTextVisibility);

// Переменная для отслеживания состояния видимости текста
let isTextVisible = window.innerWidth > 768;

// Добавляем обработчик события при клике по ссылке
toggleLink.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке

    // Проверяем ширину экрана
    if (window.innerWidth <= 768) {
        // Переключаем состояние видимости текста
        isTextVisible = !isTextVisible;

        // Применяем состояние видимости текста
        hiddenText.style.display = isTextVisible ? 'block' : 'none';
    }
});

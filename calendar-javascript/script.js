const calendar = document.getElementById('calendar');
const monthYear = document.getElementById('month-year');
const daysContainer = document.getElementById('days');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let currentDate = new Date();

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = new Date();

    monthYear.textContent = `${date.toLocaleString('pt-BR', { month: 'long' })} ${year}`;

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

    daysContainer.innerHTML = '';

    for (let i = 0; i < firstDayOfMonth; i++) {
        daysContainer.innerHTML += '<div></div>';
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = i;
   
        if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
            dayElement.classList.add('active');
        }

        const dayOfWeek = new Date(year, month, i).getDay();
        if (dayOfWeek === today.getDay()) {
            dayElement.classList.add('highlight');
        }

        daysContainer.appendChild(dayElement);
    }
}

prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

renderCalendar(currentDate);

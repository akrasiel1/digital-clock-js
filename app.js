// selecting div element with class 'clock'
const clock = document.querySelector('.clock');

const tickTock = () => {
    // creating new date
    const now = new Date();
    // formatting dates, hours, minutes and seconds using date-fns library
    const formattedDate = dateFns.format(now, 'dddd, DD MMMM YYYY');
    const formattedClock = dateFns.format(now, 'HH : mm : ss');
    //injecting span elements with formatted dates to HTML
    clock.innerHTML = `
        <span>${formattedDate}</span>
        <span>${formattedClock}</span>
    `;
};

// refreshing clock every second
setInterval(tickTock, 1000);
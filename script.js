let newYear = '1 Jan 2024'
let daysEl = document.getElementById('days')
let hoursEl = document.getElementById('hours')
let minsEl = document.getElementById('mins')
let secondsEl = document.getElementById('seconds')

function countdown() {
    let newYearsDate = new Date(newYear)
    const currentDate = new Date()

    const balanceTimeInSeconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(balanceTimeInSeconds / 3600 / 24)
    daysEl.textContent = formatTime(days)

    const hours = Math.floor((balanceTimeInSeconds / 60 / 60) % 24)
    hoursEl.textContent = formatTime(hours)

    const mins = Math.floor((balanceTimeInSeconds / 60) % (60))
    minsEl.textContent = formatTime(mins)

    const seconds = Math.floor(balanceTimeInSeconds % 60)
    secondsEl.textContent = formatTime(seconds)



    // console.log(currentDate);
    // console.log('Remaining Time to new year', days, hours, mins, seconds);
    // console.log('Remaining Hours', hours);
    // console.log('Remaining Minutes', mins);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown()

setInterval(countdown, 1000)

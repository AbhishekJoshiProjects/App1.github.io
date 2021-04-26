const newYear = '1 Jan 2022' ;

    var get_days = document.getElementById('days-id')
    var get_hrs = document.getElementById('hours-id')
    var get_min = document.getElementById('mins-id')
    var get_sec = document.getElementById('seconds-id')

function timer()
{
    const newYearDate = new Date(newYear) ;
    const currentDate = new Date() ;
    // console.log(newYearDate - currentDate)
    const total_seconds = (newYearDate - currentDate) / 1000 ;
    const days = Math.floor(total_seconds /3600 / 24) ;
    const hours = Math.floor(total_seconds/ 3600) % 24 ;
    const minutes = Math.floor(total_seconds / 60)%60 ;
    const seconds =  Math.floor(total_seconds) % 60 ;
    // console.log(days,hours,minutes,seconds) 

    get_days.innerHTML = days ;
    get_hrs.innerHTML = formatTime(hours) ;
    get_min.innerHTML =  formatTime(minutes)
    get_sec.innerHTML = formatTime(seconds) ;

}
function formatTime(time)
{
    return time < 10 ? `0${time}` : time ;
}
timer() ;
setInterval(timer,1000)

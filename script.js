const menuBtn = document.getElementById('menu-btn');
const turnBtn = document.getElementById('turn-btn');
const arrivalBtn = document.getElementById('arrival-btn');
const departureBtn = document.getElementById('departure-btn');
const clear = document.getElementById('clear-btn');

const menu = document.getElementById('menu');
const turn = document.getElementById('turn');
const arrival = document.getElementById('arrival');
const departure = document.getElementById('departure');

const menuHandler = () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        turn.classList.add('hidden');
        arrival.classList.add('hidden');
        departure.classList.add('hidden');
        return;
    }
    menu.classList.add('hidden');
}

const turnHandler = () => {
    if (turn.classList.contains('hidden')) {
        turn.classList.remove('hidden');
        menu.classList.add('hidden');
        return;
    }
    turn.classList.add('hidden');
}

const arrivalHandler = () => {
    if (arrival.classList.contains('hidden')) {
        arrival.classList.remove('hidden');
        menu.classList.add('hidden');
        return;
    }
    arrival.classList.add('hidden');
}

const departureHandler = () => {
    if (departure.classList.contains('hidden')) {
        departure.classList.remove('hidden');
        menu.classList.add('hidden');
        return;
    }
    departure.classList.add('hidden');
}

const getCurrentTime = () => {
    const current = new Date();
    return current.toLocaleTimeString();
}

const saveTime = (event) => {
    event.target.textContent = getCurrentTime();
    event.target.classList.add('bg-green-400');
    event.target.classList.add('hover:bg-green-200');
}

const timeBtn = document.querySelectorAll(".time")
timeBtn.forEach((currentBtn) => {
    currentBtn.addEventListener('click', saveTime);
});

const clearHandler = () => {
    location.reload();
}

clear.addEventListener('click', clearHandler)
menuBtn.addEventListener('click', menuHandler);
turnBtn.addEventListener('click', turnHandler);
arrivalBtn.addEventListener('click', arrivalHandler);
departureBtn.addEventListener('click', departureHandler);
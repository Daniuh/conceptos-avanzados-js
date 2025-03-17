/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRace = (element) => {

    element.innerHTML = 'Cargando...'

    const renderValue = (value) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromice(),
        mediumPromise(),
        fastPromise(),
    ]).then(renderValue);
}

const slowPromice = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 1500);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000);
});
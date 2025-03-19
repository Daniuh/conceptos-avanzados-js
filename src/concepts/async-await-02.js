/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2 = async (element) => {

    /* const value1 = await slowPromice();
    const value2 = await mediumPromise();
    const value3 = await fastPromise();
 */

    const [value1, value2, value3] = await Promise.all([
        slowPromice(),
        mediumPromise(),
        fastPromise(),
    ]);
 
    element.innerHTML = `
        Value1: ${value1} </br>
        Value2: ${value2} </br>
        Value3: ${value3} </br>
    `;
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
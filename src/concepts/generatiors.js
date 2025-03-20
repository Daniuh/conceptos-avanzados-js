/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatiorsFunctions = (element) => {

    /* const myGen = myFirstGenerationFunction();

    console.log(myGen.next());
    console.log(myGen.next());
    console.log(myGen.next());
    console.log(myGen.next());
    console.log(myGen.next()); */

    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () => {
        const {value} = genId.next();
        button.innerText = `Click ${value}`
    }

    button.addEventListener('click', renderButton);
}

/* function* myFirstGenerationFunction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'Ya no hay valores';
} */

function* idGenerator() {
    let currentId = 0;

    while (true) {
        yield ++currentId;
    }
}
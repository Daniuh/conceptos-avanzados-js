/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatiorsFunctions = (element) => {

    const myGen = myFirstGenerationFunction();

    console.log(myGen.next());
    console.log(myGen.next());
    console.log(myGen.next());
    console.log(myGen.next());
    console.log(myGen.next());
}

function* myFirstGenerationFunction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'Ya no hay valores';
}
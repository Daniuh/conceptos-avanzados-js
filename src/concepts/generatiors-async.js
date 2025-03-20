import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatiorsAsync =  async (element) => {

    const heroGenerator = getHeroGenerator();

    let isDone = false;

    do {
        const {value, done} = await heroGenerator.next();
        isDone = done;

        console.log({value, done});
        
        element.innerHTML = value;
    } while (!isDone);

}

async function* getHeroGenerator() {
    for (const hero of heroes) {
        await sleep();
        yield hero.name;
    }

    return 'No hay más héroes';
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve();  
        }, 1000);
    });
}
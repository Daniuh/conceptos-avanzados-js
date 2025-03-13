import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    
    const id = '5d86371f2343e37870b91ef1';
    findHero(id, (error, hero) => {
        //element.innerHTML = hero?.name || 'No hay heroe'; Forma de medio validar o retornar correctamente un error

        if (error) {
            element.innerHTML = error;
        }

        element.innerHTML = hero.name;
    });
}

/**
 * 
 * @param {string} id 
 * @param {(error: string|null, hero: Object) => void} callback 
 */

const findHero = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id);

    if (!hero) {
        callback(`Heroe con id: ${id}, no existe`);
        return; //Undefined
    }

    callback(null, hero);
}
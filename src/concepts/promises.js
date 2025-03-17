import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promises = (element) => {
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
        <h3>${hero1.name}</h3>
        <h3>${hero2.name}</h3>
        `;
    }

    const renderErro = (erro) => {
        element.innerHTML = `
        <h1>Error:</h1>
        <h3>${erro}</h3>
        `
    }

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371fd55e2e2a30fe1ccb';

    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
        .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
            .catch(renderErro);

//! Forma 2

   /*  let hero1;

    findHero(id1)
        .then((hero) => {
            hero1 = hero;
            return findHero(id2);
        }).then(hero2 => {
            renderTwoHeroes(hero1, hero2);
        }).catch(renderErro);
 */

//! Forma 1

    /* let hero1, hero2;

    // findHero(id1).then(superHero => renderHero(superHero)); es lo mismo qué
    findHero(id1).then((hero1) => {
        findHero(id2)
            .then((hero2) =>{
                renderTwoHeroes(hero1, hero2);
            }).catch(renderErro);
    }).catch(renderErro); //.catch(erro => renderErro(erro)); */
}

/**
 * 
 * @param {string} id 
 * @returns {promise}
 */
const findHero = (id) => {

    return new Promise((resolve, reject) => {
        
        const hero = heroes.find(hero => hero.id === id);

        if(hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with id: ${id}, not found.`);
    });
}
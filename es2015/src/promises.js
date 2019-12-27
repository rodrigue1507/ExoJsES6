
/**
 * Exécute de manière séquentielle de promises
 * 
 * @param funcs tableau de fonctions retournant une promise
 * @return Une promise contenant tous les resultats de promises exécutées
 */
export function chain(promises) {
  let resultTab = [];
  new Promise((resolve,reject)=>{
      resolve(value => {
        for(let i = 0; i < promises.length; i++){
          promises[i].then(value => resultTab.push(value))
        }
      }

      )
  })
  return resultTab;
}

/**
 * renvoie une promise qui sera resolue au bout d'un nombre définit de millisecondes
 * @param millisecond le nombre de millisecondes avant de résoudre la Promise
 */
export function delay(millisecond) {
    return new Promise(function(resolve) {
        setTimeout(function() {
          resolve();
        }, millisecond);
      });
}

/**
 * Chaine l'exécution de deux promise et retourne les résultats dans un tableau
 * @return une promise retournant le tableau des resultats des deux promise passées en paramètre
 */
export function combine(promiseA, promiseB) {
    let promisesTab = [];
    promisesTab.push(promiseA);
    promisesTab.push(promiseB);
    const promiseResult = Promise.all(promisesTab).then(((values)=> {return values}));
    return promiseResult 
}

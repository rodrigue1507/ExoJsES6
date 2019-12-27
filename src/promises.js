"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chain = chain;
exports.delay = delay;
exports.combine = combine;

/**
 * Exécute de manière séquentielle de promises
 * 
 * @param funcs tableau de fonctions retournant une promise
 * @return Une promise contenant tous les resultats de promises exécutées
 */
function chain(promises) {
  var resultTab = [];
  new Promise(function (resolve, reject) {
    resolve(function (value) {
      for (var i = 0; i < promises.length; i++) {
        promises[i].then(function (value) {
          return resultTab.push(value);
        });
      }
    });
  });
  return resultTab;
}

/**
 * renvoie une promise qui sera resolue au bout d'un nombre définit de millisecondes
 * @param millisecond le nombre de millisecondes avant de résoudre la Promise
 */
function delay(millisecond) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, millisecond);
  });
}

/**
 * Chaine l'exécution de deux promise et retourne les résultats dans un tableau
 * @return une promise retournant le tableau des resultats des deux promise passées en paramètre
 */
function combine(promiseA, promiseB) {
  var promisesTab = [];
  promisesTab.push(promiseA);
  promisesTab.push(promiseB);
  var promiseResult = Promise.all(promisesTab).then(function (values) {
    return values;
  });
  return promiseResult;
}
//# sourceMappingURL=promises.js.map
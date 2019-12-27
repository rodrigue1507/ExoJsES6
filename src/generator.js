'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Emitter = undefined;
exports.toIterable = toIterable;
exports.sequence = sequence;

require('babel-polyfill');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(sequence);

/**
 * Même exercice que pour iterator
 * Mais en utilisant un generator
 */
function toIterable(obj) {}

/**
 * exécuter toutes les fonctions et retourner les resultats 
 * sous forme d'iterator grâce au mot clé yield
 */
function sequence() {
  return regeneratorRuntime.wrap(function sequence$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/**
 * Emet des valeur à lors de l'appel de la methode emit à l'aide d'un generator
 */

var Emitter =
/**
 * le receiver est une fonction sera appellé à chaque fois qu'une nouvelle est émise
 */
exports.Emitter = function Emitter(receiver) {
  _classCallCheck(this, Emitter);
};
//# sourceMappingURL=generator.js.map
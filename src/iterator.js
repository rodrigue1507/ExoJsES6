"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IteratorResult = exports.Iterator = exports.Iterable = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.toIterable = toIterable;

var _map = require("rxjs/operator/map");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Iterable = exports.Iterable = function Iterable(iteratorFactory) {
    _classCallCheck(this, Iterable);

    var _iteratorFactory = _slicedToArray(iteratorFactory, 1);

    Symbol.iterator = _iteratorFactory[0];
};

var Iterator = exports.Iterator = function Iterator(onNext) {
    _classCallCheck(this, Iterator);

    this.next = onNext;
};

var IteratorResult = exports.IteratorResult = function IteratorResult(value, done) {
    _classCallCheck(this, IteratorResult);

    this.value = value;
    this.done = done;
};

/**
 * Rendre les propriétés d'un objet iterables
 * S'aider de la fonction Object.keys
 */


function toIterable(obj) {
    obj[Symbol.iterator] = function () {
        var keysProperties = Object.keys(obj);
        var valuesProperties = Object.values(obj);
        var Done = false;
        var index = 0;
        return {
            next: function next() {
                Done = index >= keysProperties.length;
                var obj = {
                    done: Done,
                    value: new Map().set(keysProperties[index], valuesProperties[index])
                };
                index++;
                return obj;
            }
        };
    };
}
//# sourceMappingURL=iterator.js.map
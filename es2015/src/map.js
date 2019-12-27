
/**
 * La classe TextIndexer permet d'indexer du text via la méthode indexText
 * 
 */
export class TextIndexer {
    constructor() {
        this.map = new Map();
    }

    /**
     * Permet d'indexer du texte. Chaque mot doit être rangé dans un Map.
     * Le map doit contenir tous les mots rencontrés associé au nombre de fois que le mot à été rencontré dans le texte.
     * Les fonctions String.split() et String.replace vous serons utiles !
     * @param text Le texte source à indexer
     */
    indexText(text) {
      const reg = /[^a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ_-\s]+/gi;     
      const textTab = text.replace(reg," ").split(" ");
      textTab.forEach(element => {
        let lowElement = element.toLowerCase();
        if(!this.map.has(lowElement)){
            this.map.set(lowElement,1);
        }
        else{
           let valIncrement = this.map.get(lowElement) + 1;
           this.map.set(lowElement,valIncrement);
        }
      });
        
    }

    /**
     * Le poids d'un mot correspond au nombre de fois qu'il à été rencontré dans le texte.
     */
    getWeight(word) {
        let lowWord = word.toLowerCase();
        return this.map.get(lowWord);
    }

    /**
     * retourne le nombre de mots indexés
     */
    get count(){
        return this.map.size;
    }
}


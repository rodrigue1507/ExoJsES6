'use strict';

var _chai = require('chai');

var _map = require('./map');

describe("Map Tests", function () {
    it("TextIndexer class test", function (done) {
        var indexer = new _map.TextIndexer();
        indexer.indexText(words);
        var est = indexer.getWeight('est');
        var trump = indexer.getWeight('trump');
        var termine = indexer.getWeight('terminé');
        console.log(est);
        (0, _chai.assert)(est === 12, 'The word \'est\' occurs 12 times. Not ' + est);
        (0, _chai.assert)(trump === 1, 'The word \'trump\' occurs 1 times. Not ' + trump); // undefined
        (0, _chai.assert)(termine === 3, 'The word \'termin\xE9\' occurs 3 times. Not ' + termine); //1
        done();
    });
});

var words = '\nA Doubs, riche commune d\'un peu plus de 2 000 habitants proche de Pontarlier (Doubs) et de la fronti\xE8re suisse, un b\xE2timent tout neuf, au bord de la route principale, vient d\'\xEAtre termin\xE9. Un \xE9norme projet priv\xE9 de pr\xE8s de 2 M\u20AC initi\xE9 par des pharmaciens de la r\xE9gion. Cette grande maison m\xE9dicale de 320 m 2 sur deux niveaux est destin\xE9e \xE0 abriter cinq cabinets m\xE9dicaux pour des m\xE9decins. Mais alors que tout est termin\xE9, aucun g\xE9n\xE9raliste n\'a seulement pos\xE9 sa candidature pour s\'installer dans ces locaux parfaitement adapt\xE9s.\nFace \xE0 ce constat, la demande a \xE9t\xE9 r\xE9duite \xE0 deux m\xE9decins. Sans plus de succ\xE8s. Ce cas extr\xEAme illustre la d\xE9sertification m\xE9dicale dans cette zone proche de la Suisse. On estime qu\'un g\xE9n\xE9raliste fran\xE7ais qui passe la fronti\xE8re pour travailler voit ses revenus doubler. \xAB C\'est tr\xE8s inqui\xE9tant, confirme le maire de Doubs, R\xE9gis Marceau. On voit les gens venir prendre leur rendez-vous \xE0 la mairie en attendant qu\'un g\xE9n\xE9raliste s\'installe. \xBB Si les m\xE9decins locaux passent la fronti\xE8re suisse, les promoteurs du projet envisagent d\'attirer des m\xE9decins roumains ou d\'autres nationalit\xE9s pour utiliser cette maison m\xE9dicale.\n';

words += '\ne P\xE8re No\xEBl est une ordure. Un Santa Claus slovaque a termin\xE9 sa tourn\xE9e au poste de police, ainsi que le Diable et l\'Ange, ses soeurs pour l\'\xE9tat civil, pour avoir vol\xE9 de l\'argent et des bijoux \xE0 une nonag\xE9naire.\nL\'homme en manteau rouge, accompagn\xE9 de ses assistantes costum\xE9es et de son fils de trois ans, avait frapp\xE9 \xE0 la porte de la vieille dame de 91 ans dans la ville de Skalica pour lui pr\xE9senter ses voeux, a racont\xE9 une porte-parole de la police.\nDes bijoux sous l\'aile de l\'Ange\nL\'h\xF4tesse leur a donn\xE9 cinq euros, puis le P\xE8re No\xEBl lui a demand\xE9 une tasse de th\xE9 pour l\'enfant. Quand elle avait le dos tourn\xE9, l\'Ange a mis sous son aile des bijoux et 45 euros. Ils seraient partis tranquillement si un voisin n\'avait pas pass\xE9 la t\xEAte dans la porte et appel\xE9 la police.\nDeux membres du groupe avaient d\xE9j\xE0 \xE9t\xE9 condamn\xE9s dans le pass\xE9, mais le Diable avait un casier vierge.\n';

words += '\nC\'est ce qui s\'appelle \xEAtre populaire... Une invitation vid\xE9o \xE0 la f\xEAte anniversaire des 15 ans d\'une jeune Mexicaine post\xE9e sur les r\xE9seaux sociaux est devenue virale et plus d\'un million de personnes ont indiqu\xE9 vouloir y assister.\n\n\xAB Bonjour, comment \xE7a va ? Nous vous invitons le 26 d\xE9cembre aux 15 ans de notre fille, Rubi Ibarra Garcia, dans la localit\xE9 de La Joya \xBB, indique dans une vid\xE9o post\xE9e sur Facebook. Le p\xE8re de la jeune fille, Crescencio Ibarra, coiff\xE9 d\'un chapeau de cow-boy, au c\xF4t\xE9 de son \xE9pouse et de la d\xE9sormais fameuse Rubi, y \xE9num\xE8re les noms des groupes de musiciens qui joueront ce soir-l\xE0. Il annonce aussi qu\'une course de chevaux aura lieu permettant de d\xE9crocher un prix d\'environ 500 dollars.\nVIDEO. Les 15 ans de Rubi\nL\'adolescente angoisse\nMercredi, plus d\'1,2 million de personnes indiquaient sur le r\xE9seau social vouloir assister \xE0 l\'\xE9v\xE9nement qui se tiendra dans un village de 200 habitants, pr\xE8s de San Luis Potosi (nord), tandis que plus de 300 000 se disaient int\xE9ress\xE9es. Notre intention \xE9tait \xAB d\'inviter nos amis, les gens de la r\xE9gion \xE0 travers un m\xE9dia local mais c\'est devenu incontr\xF4lable \xBB, a regrett\xE9 sur la cha\xEEne TV Azteca, Anaelda Garcia, la m\xE8re de Rubi.\nLe ph\xE9nom\xE8ne a aussi d\xE9clench\xE9 de nombreux commentaires et messages humoristiques d\'internautes, tandis que des fausses publications parodiaient les r\xE9ponses d\'hommes politiques et artistes confirmant leur pr\xE9sence \xE0 l\'\xAB \xE9v\xE9nement \xBB.\n Suivre\n Lolz @fabianarcinie\nJust got to rubis xv\n02:41 - 5 D\xE9c 2016\nLa jeune fille a v\xE9cu avec angoisse ce d\xE9ferlement de messages, craignant que la f\xEAte soit menac\xE9e, selon ses parents. \xAB Pendant deux jours, elle a \xE9t\xE9 triste, c\'est une enfant, elle est jeune, mais \xE7a va mieux maintenant \xBB, a indiqu\xE9 son p\xE8re \xE0 TV Azteca.\n30% de r\xE9duction sur des billets d\'avion\nLa m\xE8re a racont\xE9 que le d\xE9tournement qui l\'avait le plus amus\xE9e sugg\xE9rait que Donald Trump et le pr\xE9sident mexicain Enrique Pe\xF1a Nieto \xE9taient tomb\xE9s d\'accord \xAB pour que les immigr\xE9s clandestins (vivant aux Etats-Unis) puissent assister aux 15 ans de Rubi \xBB et retourner ensuite sans encombre de l\'autre c\xF4t\xE9 de la fronti\xE8re.\nSurfant sur le ph\xE9nom\xE8ne, la compagnie a\xE9rienne mexicaine Interjet a m\xEAme lanc\xE9 une promotion sur Twitter pour assister \xE0 l\'\xE9v\xE9nement avec le slogan suivant: \xAB Tu vas aux 15 ans de Rubi ? Nous t\'offrons jusqu\'\xE0 30% de r\xE9duction sur ton vol vers San Luis Potosi \xBB.\nVoir l\'image sur Twitter\nVoir l\'image sur Twitter\n Suivre\n Interjet \u2714 @interjet\n\xA1Asiste al evento del a\xF1o y regresa con el premio a casa! \uD83D\uDC10 http://bit.ly/2gVKqmG \n22:27 - 5 D\xE9c 2016\n568 568 Retweets   761 761 j\'aime\nPartout en Am\xE9rique latine, l\'anniversaire des 15 ans appel\xE9 \xAB quincea\xF1era \xBB (quinzi\xE8me ann\xE9e) donne lieu pour les jeunes filles \xE0 des f\xEAtes souvent somptueuses dans lesquelles des familles m\xEAme modestes d\xE9pensent des sommes consid\xE9rables.\n';

words += '\nDans un message laconique, l\'Audois qui s\'\xE9tait fait conna\xEEtre pour ses interviews surr\xE9alistes \xE0 Bugarach en 2012, a annonc\xE9 sa candidature.\nLe \xABmessie\xBB est \xE0 la rescousse ! Sylvain Durif, alias \xABMerlin l\'enchanteur\xBB ou le \xAB Christ cosmique \xBB, s\'est d\xE9clar\xE9 mardi \xABcandidat aux \xE9lections pr\xE9sidentielles\xBB (sic) de 2017 dans une vid\xE9o largement relay\xE9e sur les r\xE9seaux sociaux. Il faut dire que l\'huluberlu, r\xE9v\xE9l\xE9 au grand public il y a quatre ans du c\xF4t\xE9 de Bugarach (Aude), o\xF9 il expliquait au premier micro venu comment il comptait \xE9chapper \xE0 l\'apocalypse, est devenu une v\xE9ritable star de la Toile .\nSa vid\xE9o de candidature, courte et plus sobre qu\'\xE0 l\'accoutum\xE9e, a \xE9t\xE9 post\xE9e mardi sur son compte Facebook et sa page Youtube. En l\'absence de programme, il faut pour l\'heure s\'en remettre \xE0 une interview donn\xE9e l\'hiver dernier \xE0 l\'Ind\xE9pendant de Narbonne, dans laquelle il se disait soucieux d\'apporter \xABla paix sur terre et dans le cosmos\xBB. Impossible de savoir comment celui qui se pr\xE9tend \xABdernier roi de France\xBB et \xABdernier pape\xBB compte y arriver, ni comment il r\xE9unira les 500 signatures.\n';
//# sourceMappingURL=map.spec.js.map
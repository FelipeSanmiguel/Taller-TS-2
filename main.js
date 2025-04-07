var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, description, link, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
    return Serie;
}());
var series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
];
function mostrarTablaSeries(series) {
    var tableContainer = document.getElementById('table-container');
    var table = document.createElement('table');
    table.classList.add('table', 'table-striped');
    table.innerHTML = "\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Name</th>\n        <th>Channel</th>\n        <th>Seasons</th>\n      </tr>\n    </thead>\n    <tbody>\n      ".concat(series.map(function (serie) { return "\n        <tr data-id=\"".concat(serie.id, "\" class=\"serie-row\" style=\"cursor:pointer\">\n          <td>").concat(serie.id, "</td>\n          <td>").concat(serie.name, "</td>\n          <td>").concat(serie.channel, "</td>\n          <td>").concat(serie.seasons, "</td>\n        </tr>\n      "); }).join(''), "\n    </tbody>\n  ");
    tableContainer.appendChild(table);
    agregarEventosFila(series);
}
function agregarEventosFila(series) {
    var filas = document.querySelectorAll('.serie-row');
    filas.forEach(function (fila) {
        fila.addEventListener('click', function () {
            var id = Number(fila.dataset.id);
            var serieEncontrada = undefined;
            for (var i = 0; i < series.length; i++) {
                if (series[i].id === id) {
                    serieEncontrada = series[i];
                    break;
                }
            }
            if (serieEncontrada) {
                mostrarCardSerie(serieEncontrada);
            }
        });
    });
}
function mostrarCardSerie(serie) {
    var cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "\n    <div class=\"card\">\n      <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.link, "n</a>\n      </div>\n    </div>\n  ");
}
mostrarTablaSeries(series);

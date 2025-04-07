var series = [
    { id: 1, name: "Breaking Bad", channel: "AMC", seasons: 5 },
    { id: 2, name: "Orange Is the New Black", channel: "Netflix", seasons: 6 },
    { id: 3, name: "Game of Thrones", channel: "HBO", seasons: 7 },
    { id: 4, name: "The Big Bang Theory", channel: "CBS", seasons: 12 },
    { id: 5, name: "Sherlock", channel: "BBC", seasons: 4 },
    { id: 6, name: "A Very English Scandal", channel: "BBC", seasons: 2 }
];
function renderTable(series) {
    var container = document.getElementById("table-container");
    if (!container)
        return;
    var tableHTML = "\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Channel</th>\n          <th>Seasons</th>\n        </tr>\n      </thead>\n      <tbody>\n  ";
    var totalSeasons = 0;
    series.forEach(function (serie) {
        tableHTML += "\n      <tr>\n        <th>".concat(serie.id, "</th>\n        <td><a href=\"#\">").concat(serie.name, "</a></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>\n      </tr>\n    ");
        totalSeasons += serie.seasons;
    });
    tableHTML += "\n      </tbody>\n    </table>\n    <div class=\"average\">\n      Seasons average: ".concat((totalSeasons / series.length).toFixed(2), "\n    </div>\n  ");
    container.innerHTML = tableHTML;
}
renderTable(series);

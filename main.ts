import { series } from "./data";
import { Serie } from "./Serie";


function renderTable(series: Serie[]): void {
  const container = document.getElementById("table-container");
  if (!container) return;

  let tableHTML = `
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Channel</th>
          <th>Seasons</th>
        </tr>
      </thead>
      <tbody>
  `;

  let totalSeasons = 0;

  series.forEach(serie => {
    tableHTML += `
      <tr>
        <th>${serie.id}</th>
        <td><a href="#">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      </tr>
    `;
    totalSeasons += serie.seasons;
  });

  tableHTML += `
      </tbody>
    </table>
    <div class="average">
      Seasons average: ${(totalSeasons / series.length).toFixed(2)}
    </div>
  `;

  container.innerHTML = tableHTML;
}

renderTable(series);

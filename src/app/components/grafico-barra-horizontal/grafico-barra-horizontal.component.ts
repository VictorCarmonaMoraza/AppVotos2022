import { Component, OnDestroy } from '@angular/core';
//import { single } from './data';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  results: any[] = [
    {
      "name": "Juego 1",
      "value": 20
    },
    {
      "name": "Juego 2",
      "value": 25
    },
    {
      "name": "Juego 3",
      "value": 30
    },
    {
      "name": "Juego 4",
      "value": 12
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  // colorScheme = {
  //   //domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  colorScheme = 'nightLights';

  intervalo:any;

  constructor() {

    console.log(Math.round(Math.random() * 500))

    this.intervalo =setInterval(() => {
      console.log('tick');

      const newResult = [...this.results];

      for (let i in newResult) {
        newResult[i].value = Math.round(Math.random() * 500)
      }
      this.results = [...newResult];
    }, 1500);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  onSelect(event: any) {
    console.log(event);
  }

}

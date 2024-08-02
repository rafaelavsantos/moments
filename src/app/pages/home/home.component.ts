import { Component, OnInit } from '@angular/core';
import { Moment } from '../../Moment';
import { MomentService } from '../../services/moment.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // pegar todos os dados do banco 
  allMoments: Moment[] = [];

  // filtro que será exibido depois da busca
  moments: Moment[] = [];

  // rota para api
  baseApi = 'http://localhost:3333/';

  constructor(private momentService: MomentService) { }


  ngOnInit(): void {
    // Inicializar a função de busca
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = item.created_at.slice(0, 10).split("-").reverse().join("/");
        console.log(item.created_at)
        // item.created_at = new Date(item.created_at).toLocaleDateString('pt-BR');
      });


      this.allMoments = data;
      this.moments = data;

      console.log(this.moments)
    })
  }


}

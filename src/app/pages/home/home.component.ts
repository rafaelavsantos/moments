import { Component, OnInit } from '@angular/core';
import { Moment } from '../../Moment';
import { MomentService } from '../../services/moment.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, FaIconComponent],
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

  faSearch = faSearch;
  searchTerm: string = '';

  ngOnInit(): void {
    // Inicializar a função de busca
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = item.created_at.slice(0, 10).split("-").reverse().join("/");
      });

      this.allMoments = data;
      this.moments = data;
    })
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.allMoments.filter((moment) => {
      return moment.title.toLowerCase().includes(value);
    });
  }
}

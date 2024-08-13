import { Component, OnInit } from '@angular/core';
import { Moment } from '../../Moment';
import { MomentService } from '../../services/moment.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [NgIf, FaIconComponent, RouterLink],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApi = 'http://localhost:3333/';
  faTimes = faTimes;
  faEdit = faEdit;

  constructor(private momentService: MomentService, private route: ActivatedRoute, private messagesService: MessageService, private router: Router) { }

  ngOnInit(): void {
    // Pegar o id da URL
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.momentService.getMoment(id).subscribe((item) => this.moment = item.data);
  }

  async removeHandler(id: number) {
    await this.momentService.removeMoment(id).subscribe();

    this.messagesService.addMessage("Momento excluído com sucesso!");
    this.router.navigate(["/"]);
  }
}

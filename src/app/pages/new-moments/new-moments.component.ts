import { Component } from '@angular/core';
import { MomentFormComponent } from "../../components/moment-form/moment-form.component";
import { Moment } from '../../Moment';
import { MomentService } from '../../services/moment.service';
import { MessageService } from '../../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moments',
  standalone: true,
  imports: [MomentFormComponent],
  templateUrl: './new-moments.component.html',
  styleUrl: './new-moments.component.css'
})
export class NewMomentsComponent {
  btnText = 'Compartilhar'

  constructor(private momentService: MomentService, private messageService: MessageService, private router: Router) { }

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append("title", moment.title);
    formData.append("description", moment.description);

    if (moment.image) {
      formData.append("image", moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    this.messageService.addMessage("Momento adicionado com sucesso!");

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 4000);
  }
}

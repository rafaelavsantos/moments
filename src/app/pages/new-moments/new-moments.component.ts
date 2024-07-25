import { Component } from '@angular/core';
import { MomentFormComponent } from "../../components/moment-form/moment-form.component";
import { Moment } from '../../Moment';
import { MomentService } from '../../services/moment.service';

@Component({
  selector: 'app-new-moments',
  standalone: true,
  imports: [MomentFormComponent],
  templateUrl: './new-moments.component.html',
  styleUrl: './new-moments.component.css'
})
export class NewMomentsComponent {
  btnText = 'Compartilhar'

  constructor(private momentService: MomentService) { }

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append("title", moment.title);
    formData.append("description", moment.description);

    if (moment.image) {
      formData.append("image", moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();
  }
}

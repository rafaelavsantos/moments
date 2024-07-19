import { Component } from '@angular/core';
import { MomentFormComponent } from "../../components/moment-form/moment-form.component";

@Component({
  selector: 'app-new-moments',
  standalone: true,
  imports: [MomentFormComponent],
  templateUrl: './new-moments.component.html',
  styleUrl: './new-moments.component.css'
})
export class NewMomentsComponent {
  btnText = 'Compartilhar'
}

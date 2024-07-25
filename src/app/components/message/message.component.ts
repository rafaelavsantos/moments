import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from '../../services/message.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [FaIconComponent, NgIf],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  faTimes = faTimes;

  constructor(public messageService: MessageService) { }
}

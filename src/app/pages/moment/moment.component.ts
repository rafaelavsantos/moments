import { Component, OnInit } from '@angular/core';
import { Moment } from '../../Moment';
import { MomentService } from '../../services/moment.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MessageService } from '../../services/message.service';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../Comment';

@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [NgIf, FaIconComponent, RouterLink, NgFor, ReactiveFormsModule],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApi = 'http://localhost:3333/';
  faTimes = faTimes;
  faEdit = faEdit;

  commentForm!: FormGroup;

  constructor(private momentService: MomentService, private route: ActivatedRoute, private messagesService: MessageService, private router: Router, private commentService: CommentService) { }

  ngOnInit(): void {
    // Pegar o id da URL
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.momentService.getMoment(id).subscribe((item) => this.moment = item.data);

    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required])
    })
  }

  get text() {
    return this.commentForm.get('text')!;
  }

  get username() {
    return this.commentForm.get('username')!;
  }

  async removeHandler(id: number) {
    await this.momentService.removeMoment(id).subscribe();

    this.messagesService.addMessage("Momento excluído com sucesso!");
    this.router.navigate(["/"]);
  }

  async onSubmit(formDirective: FormGroupDirective) {
    if (this.commentForm.invalid) {
      return;
    }

    const data: Comment = this.commentForm.value;
    data.momentId = Number(this.moment?.id);

    await this.commentService.createComment(data).subscribe((comment) => this.moment!.comments!.push(comment.data));

    this.messagesService.addMessage("Comentário adicionado com sucesso!");
    this.commentForm.reset();
    formDirective.resetForm();
  }
}

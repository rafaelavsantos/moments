import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent implements OnInit {
  @Input() btnText!: string;

  momentForm!: FormGroup;

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      image: new FormControl('')
    });
  }

  get titulo() {
    return this.momentForm.get('titulo')!;
  }

  get descricao() {
    return this.momentForm.get('descricao')!;
  }

  submit() {
    if (this.momentForm.invalid) {
      return;
    }
    console.log("Enviou de formulário!")
  }
}

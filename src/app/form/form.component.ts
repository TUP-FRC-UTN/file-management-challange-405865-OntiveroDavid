import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  fileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fileForm = this.fb.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      tipo: ['archivo', Validators.required],
      carpeta: [''],
      duenos: [''],
    });
  }

  onSubmit() {
    if (this.fileForm.valid) {
      console.log(this.fileForm.value);
      // FALTA TERMINAR
    }
  }

  addOwner() {
    // FALTA TERMINAR
  }

  cancel() {
    // FALTA TERMINAR
  }
}
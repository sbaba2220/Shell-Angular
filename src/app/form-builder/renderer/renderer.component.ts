import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormField } from '../../shared/models/form-field.model';

@Component({
  selector: 'app-renderer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent {
  @Input() fields: FormField[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnChanges() {
    if (this.fields) {
      this.form = this.fb.group({});
      this.fields.forEach(field => {
        this.form.addControl(
          field.name,
          field.required ? this.fb.control('', Validators.required) : this.fb.control('')
        );
      });
    }
  }

  submit() {
    alert('Form submitted: ' + JSON.stringify(this.form.value, null, 2));
  }
}

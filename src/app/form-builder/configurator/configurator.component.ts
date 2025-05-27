import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, CdkDragStart, CdkDropList, CdkDragEnter, DragDropModule, transferArrayItem } from '@angular/cdk/drag-drop';
import { RendererComponent } from '../renderer/renderer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormField } from '../../shared/models/form-field.model';

@Component({
  selector: 'app-configurator',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DragDropModule, RendererComponent],
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent {
  availableFields: FormField[] = [
    { type: 'text', label: 'Text', name: 'text_' + Date.now() },
    { type: 'number', label: 'Number', name: 'number_' + Date.now() },
    { type: 'select', label: 'Select', name: 'select_' + Date.now(), options: ['Option 1', 'Option 2'] },
    { type: 'checkbox', label: 'Checkbox', name: 'checkbox_' + Date.now() }
  ];

  formFields: FormField[] = [];
  saved = false;

  drop(event: CdkDragDrop<FormField[]>) {
    if (event.previousContainer === event.container) {
      return;
    }
    const dragged = structuredClone(event.previousContainer.data[event.previousIndex]);
    dragged.name = `${dragged.type}_${Date.now()}`;
    dragged.label = `New ${dragged.type}`;
    if (dragged.type === 'select') {
      dragged.options = ['Option 1', 'Option 2'];
      dragged.optionsStr = dragged.options.join(', ');
    }
    this.formFields.splice(event.currentIndex, 0, dragged);
  }

  saveForm() {
    this.saved = true;
  }

  updateOptions(field: FormField) {
    if (field.optionsStr) {
      field.options = field.optionsStr.split(',').map(opt => opt.trim()).filter(opt => opt);
    } else {
      field.options = [];
    }
  }

}

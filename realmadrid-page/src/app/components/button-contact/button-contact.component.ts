import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariants = 'primary' | 'secondary';

@Component({
  selector: 'app-button-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-contact.component.html',
  styleUrl: './button-contact.component.scss',
})
export class ButtonContactComponent {
  @Input('btn-text') btnText: string = '';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = 'primary';
  @Output('submit') onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
}

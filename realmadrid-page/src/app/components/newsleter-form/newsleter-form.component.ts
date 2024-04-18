import { Component } from '@angular/core';
import { ButtonContactComponent } from '../button-contact/button-contact.component';

@Component({
  selector: 'app-newsleter-form',
  standalone: true,
  imports: [ButtonContactComponent],
  templateUrl: './newsleter-form.component.html',
  styleUrl: './newsleter-form.component.scss',
})
export class NewsleterFormComponent {}

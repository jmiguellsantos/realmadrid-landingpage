import { Component } from '@angular/core';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { NgOptimizedImage } from '@angular/common';
import { ButtonContactComponent } from '../button-contact/button-contact.component';
import { NewsleterFormComponent } from '../newsleter-form/newsleter-form.component';

@Component({
  selector: 'app-app-home',
  standalone: true,
  imports: [
    AppHeaderComponent,
    ButtonContactComponent,
    NgOptimizedImage,
    NewsleterFormComponent,
  ],
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.scss',
})
export class AppHomeComponent {}

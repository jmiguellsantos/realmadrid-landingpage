import { Component } from '@angular/core';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-app-home',
  standalone: true, 
  imports: [AppHeaderComponent, NgOptimizedImage],
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.scss'
})
export class AppHomeComponent {

}

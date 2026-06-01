import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumePipe } from './resume.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,  // ← important
  imports: [         // ← importer tous les pipes ici
    CommonModule,    // contient uppercase, lowercase, currency, percent, etc.
    ResumePipe       // votre pipe personnalisé
  ]
})
export class App {
  name = 'bilel amdouni';
  price = 1234.5;
  today = new Date();
  percentage = 0.75;
  message = 'angular est puissant';
  users = ['Ali', 'Sarra', 'Mohamed'];
}
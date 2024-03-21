import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  // Received Data from App Component
  @Input()
  cardData: {
    "id": number,
    "company": string,
    "logo": string,
    "New": boolean,
    "featured": boolean,
    "position": string,
    "role": string,
    "level": string,
    "postedAt": string,
    "contract": string,
    "location": string,
    "languages": string[],
    "tools": string[]
  }

  @Output()
  selectedLanguageData: EventEmitter<string> = new EventEmitter<string>();

  selectedLanguage: string = '';

  getLanguage(language: string) {
    this.selectedLanguage = language;
    this.selectedLanguageData.emit(this.selectedLanguage);
  }

}

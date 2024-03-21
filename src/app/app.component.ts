import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FilterComponent } from './filter/filter.component';

// import JSON Data
import data from '../assets/database/data.json';
import { CardStructure } from '../models/cardStructure';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CommonModule, CardComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'static-job-listings-master-in-angular';
  cardsData: CardStructure[] = data;
  languageData: string = '';
  langagesFilterList: string[] = [];

  filterCardsList: CardStructure[] = this.cardsData;

  // Event occurs when user clicked on card Comp language
  passLanguageData(value: string) {
    this.languageData = value;

    if (!this.langagesFilterList.includes(this.languageData)) {
      this.langagesFilterList.push(this.languageData);
      // console.log("data get from card Component into App Comp: " + this.langagesFilterList);

      this.filterCards();
    }

  }

  getDeletedIndexFromFilter(index: number) {
    //  NOTE: if 'null' get it means clear whole languages[]

    if (index === -1) {
      this.langagesFilterList = [];
      this.filterCards();
    } else {
      this.langagesFilterList.splice(index, 1);
      this.filterCards();
    }

    // console.log(this.langagesFilterList);
  }


  filterCards() {
    if (this.langagesFilterList.length === 0) {
      this.filterCardsList = this.cardsData;
    } else {
      this.filterCardsList = this.cardsData.filter(card => {
        return this.langagesFilterList.some(language => card.languages.includes(language));
      });
    }
    // console.log('Default call filtercard function');

    console.log(this.filterCardsList);

  }

}

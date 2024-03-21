import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnChanges {

  @Input()
  filterItem: string = '';
  filterList: string[] = [];


  // send index data to App component for card filter
  @Output()
  getFilterDeletedIndex: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterItem'] && changes['filterItem'].currentValue) {

      if (!this.filterList.includes(changes['filterItem'].currentValue)) {
        this.filterList.push(changes['filterItem'].currentValue);
      }
    }
  }

  clearFilterOption(index: number) {
    // custom event to send the specific index for delete the item

    this.getFilterDeletedIndex.emit(index);
    // console.log(index);
    this.filterList.splice(index, 1);  // (index)array index (1)remove one element

  }

  clearWholeFilter() {
    // custom event to send the -1 for clear whole array
    this.getFilterDeletedIndex.emit(-1);
    this.filterList = [];
  }

}

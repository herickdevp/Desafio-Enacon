import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css'],
})
export class ExtraComponent {
  @Output() showElements: EventEmitter<any> = new EventEmitter();
  handleClick() {
    this.showElements.emit();
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardTemplate, CardType } from '../../services/dashboard.service';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.scss'],
})
export class CardTemplateComponent implements OnInit {
  cardType = CardType;
  @Input() template: CardTemplate;
  @Output() templateChange: EventEmitter<CardTemplate> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onContentChange(value: string) {
    this.template.content = value;
    this.templateChange.emit(this.template);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { CardTemplate, CardType } from '../services/dashboard.service';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.scss'],
})
export class CardTemplateComponent implements OnInit {
  cardType = CardType;
  @Input() template: CardTemplate;
  constructor() {}

  ngOnInit() {}
}

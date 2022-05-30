import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSelectionListChange } from '@angular/material/list';
import { enumToSelectItemArray } from 'src/app/shared/utils/enum.util';
import { CardType, cardTypeDescriptions } from '../../services/card-types';

@Component({
  selector: 'app-card-type-selection',
  templateUrl: './card-type-selection.component.html',
  styleUrls: ['./card-type-selection.component.scss'],
})
export class CardTypeSelectionComponent {
  cardTypes = enumToSelectItemArray(CardType, cardTypeDescriptions);

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<CardTypeSelectionComponent>
  ) {}

  onSelectionChange(event: MatSelectionListChange) {
    this._bottomSheetRef.dismiss(event.options[0].value);
  }
}

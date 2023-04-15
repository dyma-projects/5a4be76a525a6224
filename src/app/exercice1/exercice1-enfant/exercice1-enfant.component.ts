import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;
  @Output() misAJourCompteur: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  addCompteur() {
    this.compteur++;
    this.misAJourCompteur.emit(this.compteur);
  }

  decreaseCompteur() {
    this.compteur--;
    this.misAJourCompteur.emit(this.compteur);
  }
}

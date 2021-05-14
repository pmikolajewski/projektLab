import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wyszukiwarka',
  templateUrl: './wyszukiwarka.component.html',
  styleUrls: ['./wyszukiwarka.component.css']
})
export class WyszukiwarkaComponent implements OnInit {

  marka: string;
  model: string;
  rocznik: number;
  cena: string;
  pojemnosc: string;
  przebieg: string;
  typNadwozia: string;
  rodzPaliwa: string;
  daneOsoby: Address;
  tasks: string[];
  editMode = false;

  constructor() {
  }

  ngOnInit(): void {
    this.marka = 'Mercedes-Benz';
    this.model = 'C-Klassa W203';
    this.rocznik = 2002;
    this.rodzPaliwa = 'Benzyna',
    this.pojemnosc = '2.0',
      this.typNadwozia = 'Sedan',
    this.cena = '10 000';
    this.przebieg = '200 000 ',
    this.daneOsoby = {
      imie: 'Jan',
      nazwisko: 'Kowalik',
      ulica: 'Konstantnów',
      nrBudynku: '1 H',
      miasto: 'Lublin',
      email: 'poczta@wp.pl',
      telefon: '500-500-500'
    };
    this.tasks = ['Przykład: "Podgrzewana przednia szyba"'];
  }

  addTask(task): void {
    this.tasks.push(task);
  }

  deleteTask(task): void {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === task) {
        this.tasks.splice(i, 1);
      }
    }
  }

  changeEditMode(): void {
    this.editMode = !this.editMode;

  }
}

interface Address {
  imie: string;
  nazwisko: string;
  ulica: string;
  nrBudynku: string;
  miasto: string;
  email: string;
  telefon: string;
}

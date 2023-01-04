import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  term: string = '';
  heroes: Heroe[] = [];
  selectedHero: Heroe | undefined;

  constructor(
    private heroesServive: HeroesService
  ) { }

  ngOnInit(): void {
    this.heroesServive.getHeroes()
      .subscribe( heroes => this.heroes = heroes )
  }


  searchTerm() {
    this.heroesServive
      .getSuggestions( this.term.trim() )
      .subscribe( heroes => this.heroes = heroes )
  }

  selectedHeroe( event: MatAutocompleteSelectedEvent ) {
    const heroe: Heroe = event.option.value;
    
    if(!heroe) { 
      this.selectedHero = undefined;
      return;
    };

    this.term = heroe.superhero;
    this.heroesServive
      .getHeroeById( heroe.id! )
      .subscribe( heroe => this.selectedHero = heroe );

  }

}

import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public heroe: Heroe = {
    alt_img: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.MarvelComics,
    superhero: '',
  };

  public publishers = [
    {
      id: 'DC Comics',
      desc: 'DC Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel Comics',
    }
  ]

  constructor(
    private heroesService: HeroesService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRouter.params
        .pipe( switchMap( ({ id }) => { 
          if( !id ) return of()
          return this.heroesService.getHeroeById(id)
        }) )
        .subscribe({
          next: (heroe) => {
            this.heroe = heroe
          },
        })
  }

  saveHero(){
    const inputValues = Object.values(this.heroe)
    if( inputValues.includes('') ) return

    this.isEditHero() 
      ? this.saveEditedHero()
      : this.saveNewHero()
  }
  
  saveNewHero() {
    this.heroesService
        .saveHero(this.heroe)
        .subscribe({
          next: ( heroe ) => {
            this.router.navigate(['/heroes/edit', heroe.id])
          },
        })
  }

  saveEditedHero(){
    this.heroesService
        .editHero(this.heroe)
        .subscribe({
          next: ( heroe ) => {
            this.router.navigate(['/heroes/edit', heroe.id])
          },
        })
  }

  isEditHero() {
    return this.heroe.id ? true : false;
  }

  onDeleteHero(){
    this.heroesService
        .deleteHero( this.heroe.id! )
        .subscribe( resp => {
          this.router.navigate(['/heroes/list'])
        })
  }

}

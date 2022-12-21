import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private route: ActivatedRoute,
    private heroeService: HeroesService,
  ) { }

  ngOnInit(): void {
    this.route.params
        .pipe( 
          switchMap( ({id}) => this.heroeService.getHeroeById( id ) ) 
        )
        .subscribe({
          next: (heroe) => {
            this.heroe = heroe
          },
        })
  }


}

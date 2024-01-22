import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  private _id$: Observable<string | undefined> = this._route.params.pipe(
		map(params => params['id'])
	);

  constructor(
    private readonly _pokemonService: PokemonService,
    private readonly _route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    // this._route.params.subscribe(params => {
    //   this.pokemonService.getPokemonById(params['id']).subscribe(data => {
    //     this.pokemon = data;
    //   });
    // });
  }
}

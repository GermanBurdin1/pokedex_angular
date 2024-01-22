import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent implements OnInit {
  public pokemons$: Observable<Pokemon[]> = this._pokemonService.pokemons$;

  constructor(
    private readonly _pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    
  }

}

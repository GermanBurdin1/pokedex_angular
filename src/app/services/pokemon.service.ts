import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin, map, shareReplay, switchMap, tap } from 'rxjs';
import { AllPokemons, Pokemon, StatePokemons } from '../models';
import { HttpPokemonService } from './http-pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly _statePokemons: BehaviorSubject<StatePokemons> = new BehaviorSubject<StatePokemons>({
    nextUrl: null,
    previousUrl: null,
    pokemons: []
  });
  public pokemons$: Observable<Pokemon[]> = this._statePokemons.pipe(
    map((statePokemons) => {
      return statePokemons.pokemons;
    }),
    shareReplay(1)
  );

  constructor(
    private readonly _httpPokemonService: HttpPokemonService
  ) {
    const subs = this._getAll().subscribe(() => {
      subs.unsubscribe();
    });

    (window as any).pokemonService = this;
  }

  private _getAll(): Observable<AllPokemons> {
    return this._httpPokemonService.getAll()
      .pipe(
        switchMap(allPokemons => {
          // Создаем массив HTTP запросов для каждого URL покемона
          const requests = allPokemons.results.map(pokemon => this._httpPokemonService.getOne(pokemon.url));
          // Используем forkJoin для выполнения всех запросов параллельно
          return forkJoin(requests).pipe(
            tap(pokemonDetails => {
              this._statePokemons.next({
                nextUrl: allPokemons.next,
                previousUrl: allPokemons.previous,
                pokemons: [
                  ...this._statePokemons.value.pokemons,
                  ...pokemonDetails
                ]
              });
            }),
            map(() => {
              return allPokemons;
            })
          );
        })
      )
  }

}

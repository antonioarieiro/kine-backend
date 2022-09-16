import { Injectable, OnModuleInit } from '@nestjs/common';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { AnyJson } from '@polkadot/types-codec/types';
import jsonrpc from '@polkadot/types/interfaces/jsonrpc';
import { metadata } from '../utils/FestivalModule';

const movies = [];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let curentData:
  | string
  | number
  | boolean
  | AnyJson[]
  | { [index: string]: AnyJson } = 0;

@Injectable()
export class MovieService implements OnModuleInit {
  onModuleInit() {
    console.log(`Initialization MovieModule...`);
    this.getMoviesInit();
  }
  async getMoviesInit(): Promise<any> {
    const wsProvider = new WsProvider('wss://node0.kine.network');
    const types = metadata;
    const api = await ApiPromise.create({
      provider: wsProvider,
      types,
      rpc: jsonrpc,
    });
    await api.query.movieModule.movies.entries().then((response) => {
      response.map((value) => {
        movies.push({
            id: value[0].toHuman(),
            values: value[1].toHuman(),
        })
        
      });
    });

    await api.query.festivalModule.nextFestivalId().then((response) => {
      curentData = response.toHuman();
    });

    return movies;
  }

  getMovies() {
    return movies;
  }
}

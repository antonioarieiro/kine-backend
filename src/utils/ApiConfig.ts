import { ApiPromise, WsProvider } from '@polkadot/api';

import jsonrpc from '@polkadot/types/interfaces/jsonrpc';
import { metadata } from '../utils/FestivalModule';

export async function api() {
  const wsProvider = new WsProvider('wss://node0.kine.network');
  const types = metadata;
  const api = await ApiPromise.create({
    provider: wsProvider,
    types,
    rpc: jsonrpc,
  });
  return api;
}

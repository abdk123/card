import { createReducer, on } from '@ngrx/store';
import { clear, update } from '../link/link.action';
import { LinkState } from './link.state';

export const initialState: LinkState = {
  links: [],
};

export const linkReducer = createReducer(
  initialState,
  on(update, (state, { links }) => ({
    ...state,
    links: links,
  })),
  on(clear, (state) => initialState)
);



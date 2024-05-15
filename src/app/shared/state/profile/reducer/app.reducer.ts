import { createReducer, on } from '@ngrx/store';
import { clear, update } from '../action/app.action';
import { AppState } from '../app.state';
import { BackgroundShadow } from 'src/app/shared/models/background-shadow.model';

export const initialState: AppState = {
  shadow: new BackgroundShadow(),
};

export const shadowReducer = createReducer(
  initialState,
  on(update, (state, { shadow }) => ({
    ...state,
    shadow: shadow,
  })),
  on(clear, state => initialState)
);

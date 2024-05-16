import { createReducer, on } from '@ngrx/store';
import { clear, update } from '../action/app.action';
import { AppState } from '../app.state';
import { ProfileModel } from 'src/app/shared/models/profile.model';
import { BackgroundModel } from 'src/app/shared/models/background.model';
import { ShadowModel } from 'src/app/shared/models/common/shadow.model';

export const initialState: AppState = {
  profile: new ProfileModel(),
};

export const profileReducer = createReducer(
  initialState,
  on(update, (state, { profile }) => ({
    ...state,
    profile: profile,
  })),
  on(clear, (state) => initialState)
);


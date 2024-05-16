import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectAppState = createFeatureSelector<AppState>('profile');

export const selectProfile = createSelector(
  selectAppState,
  (state: AppState) => state.profile
);

// get One favorite product by ID
// export const selectProfileById = createSelector(
//     selectProfile,
//   (profile: BackgroundProfile, props: { productId: number }) =>
//     profile.find(product => product.id === props.productId)
// );
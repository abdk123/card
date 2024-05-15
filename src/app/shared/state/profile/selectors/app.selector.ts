import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { BackgroundShadow } from 'src/app/shared/models/background-shadow.model';


export const selectAppState = createFeatureSelector<AppState>('shadow');

export const selectShadow = createSelector(
  selectAppState,
  (state: AppState) => state.shadow
);

// get One favorite product by ID
// export const selectShadowById = createSelector(
//     selectShadow,
//   (shadow: BackgroundShadow, props: { productId: number }) =>
//     shadow.find(product => product.id === props.productId)
// );
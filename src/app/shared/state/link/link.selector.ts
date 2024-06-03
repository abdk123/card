import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LinkState } from './link.state';

export const selectLinkState = createFeatureSelector<LinkState>('links');

export const selectLinks = createSelector(
    selectLinkState,
  (state: LinkState) => state.links
);
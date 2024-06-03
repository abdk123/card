import { createAction, props } from '@ngrx/store';
import { LinkModel } from 'src/app/shared/models/link.model';


export const update = createAction('[Link] Update', props<{ links: LinkModel[] }>());
export const clear = createAction('[Link] Clear');
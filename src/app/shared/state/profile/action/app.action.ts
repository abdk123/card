import { createAction, props } from '@ngrx/store';
import{Profile} from '../../../models/profile.model';

//export const initial = createAction('[BackgroungShadow] Add',  props<{ profile: Profile }>());
export const update = createAction('[BackgroungShadow] Update', props<{ profile: Profile }>());
export const clear = createAction('[BackgroungShadow] Clear');
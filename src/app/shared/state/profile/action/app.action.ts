import { createAction, props } from '@ngrx/store';
import{ProfileModel} from '../../../models/profile.model';
import { BackgroundModel } from 'src/app/shared/models/background.model';

//export const initial = createAction('[Profile] Add',  props<{ profile: ProfileModel }>());
export const update = createAction('[Profile] Update', props<{ profile: ProfileModel }>());
//export const updateBackground = createAction('[BackgroundModel] updateBackground', props<{ background: BackgroundModel }>());
export const clear = createAction('[Profile] Clear');
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppearanceComponent } from './pages/appearance/appearance.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OurProductComponent } from './pages/widgets/our-product/our-product.component';
import { SocialMediaComponent } from './pages/widgets/social-media/social-media.component';

const routes: Routes = [
  {
    path: "appearance",
    component: AppearanceComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'product', component: OurProductComponent },
  { path: 'social/:name', component: SocialMediaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

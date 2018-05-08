import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsssideNavComponent } from './cssside-nav/cssside-nav.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { MatSidenavModule, MatCardModule } from '@angular/material';
import { IntroductionComponent } from './introduction/introduction.component';

const cssRoutes: Routes = [
  {
    path: 'css', component: CsssideNavComponent,
    children: [
      {
        path: 'home', component: HomeComponent,
      },
      {
        path: 'introduction', component: IntroductionComponent
      },
      {
        path: '**', redirectTo: 'home'
      },
    ]
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    RouterModule.forChild(cssRoutes)
  ],
  declarations: [HomeComponent, CsssideNavComponent, IntroductionComponent]
})
export class CssModule { }

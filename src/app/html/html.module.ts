import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { BasicComponent } from './basic/basic.component';
import { ElementsComponent } from './elements/elements.component';
import { AttributesComponent } from './attributes/attributes.component';
import { HtmlSideNavComponent } from './html-side-nav/html-side-nav.component';
import { MatCardModule, MatSidenavModule } from '@angular/material';
import { Routes } from '@angular/router/src/config';
import { RouterModule } from '@angular/router';

const htmlRouter: Routes = [
  {
    path: 'html', component: HtmlSideNavComponent,
    children: [
      {
        path: 'home', component: HomeComponent,
      },
      {
        path: 'basic', component: BasicComponent,
      },
      {
        path: 'elements', component: ElementsComponent,
      },
      {
        path: 'attributes', component: AttributesComponent,
      },
      {
        path: '**', redirectTo: 'home',
      },
    ]
  }
];

@NgModule({
  exports: [
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    RouterModule.forChild(htmlRouter)
  ],
  declarations: [HomeComponent, IntroductionComponent, BasicComponent, ElementsComponent, AttributesComponent, HtmlSideNavComponent]
})
export class HtmlModule { }

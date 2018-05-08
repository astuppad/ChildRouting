import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainSideNavComponent } from './main-side-nav/main-side-nav.component';
import { HtmlModule } from './html/html.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './html/home/home.component';
import { HtmlSideNavComponent } from './html/html-side-nav/html-side-nav.component';
import { CsssideNavComponent } from './css/cssside-nav/cssside-nav.component';
import { CssModule } from './css/css.module';
import { IntroductionComponent } from './html/introduction/introduction.component';
import { AttributesComponent } from './html/attributes/attributes.component';

const mainRouter: Routes = [
  {
    path: 'html',
    loadChildren: './html#HtmlModule.module'
  },
  {
    path: 'css',
    loadChildren: './css#CSSModule.module'
  },
  {
    path: '**',
    redirectTo: 'html'
  }
];

@NgModule({
  exports: [
    BrowserModule,
    MatSidenavModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    MainSideNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    HtmlModule,
    CssModule,
    RouterModule.forRoot(mainRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

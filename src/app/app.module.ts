import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ToolsModule } from './tools/tools.module';
import { SharedModule } from './shared/shared.module';
import { CardsModule } from './cards/cards.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideMenuComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ToolsModule,
    CardsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

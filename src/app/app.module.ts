import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ThemeService } from './services/theme.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { FormsModule } from '@angular/forms';
import { RegionFilterComponent } from './components/region-filter/region-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetailComponent,
    CountryCardComponent,
    RegionFilterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}

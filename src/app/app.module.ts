import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./shared/layout/header/header.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import {MenuComponent} from "./shared/layout/menu/menu.component";
import {LayoutComponent} from "./shared/layout/layout.component";
import {UserIdleModule} from "angular-user-idle";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppCommonModule} from "./app.common.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpLoaderFactory} from "./features/login/login.module";
import {MessageService} from "primeng/api";
import {AuthGuard} from "./core/gaurds/auth.gaurd";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserIdleModule.forRoot({idle: 300, timeout: 1, ping: undefined}),
    HttpClientModule,
    AppCommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ], exports: [TranslateModule],
  providers: [
    MessageService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

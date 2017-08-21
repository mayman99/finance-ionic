import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { CommonModule } from "@angular/common";
import { NewsdetailsComponent } from "./../pages/newsdetails/newsdetails.component";
import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/WatchList/WatchList";
import { LoginComponent } from "./../pages/login/login.component";
import { ChartPage } from "../pages/chart/chart";
import { MarketPage } from "../pages/market/market";
import { CompanydetailsComponent } from "../pages/companydetails/companydetails.component";
import { TabsPage } from "../pages/tabs/tabs";
import { MarketService } from "./market.service";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { CompanyService } from "./company.service";
import { HttpModule, Http } from "@angular/http";
import { StockService } from "./stock.service";
import { AskBidService } from "./asksbids.service";
import { GetService } from "./else.service";
import { ChartModule } from "angular2-highcharts";
import { LoginService } from "./login.service";
import { IonicStorageModule } from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginComponent,
    TabsPage,
    NewsdetailsComponent,
    CompanydetailsComponent,
    ChartPage,
    MarketPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    ChartModule.forRoot(require("highcharts")),
    IonicStorageModule
      .forRoot
      // {
      // name: "__mydb",
      // driverOrder: ["sqlite", "websql", "indexeddb"]
      // }
      ()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginComponent,
    TabsPage,
    NewsdetailsComponent,
    CompanydetailsComponent,
    ChartPage,
    MarketPage
  ],
  providers: [
    StatusBar,
    StockService,
    AskBidService,
    CompanyService,
    LoginService,
    MarketService,
    GetService,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}

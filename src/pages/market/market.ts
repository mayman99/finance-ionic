import { Component, OnInit } from "@angular/core";
import { MarketResponse } from "./../../app/Marketresponse.interface";
import { MarketService } from "./../../app/market.service";
import { NavController, IonicPage, NavParams } from "ionic-angular";
import { SerResponse } from "./../../app/response.interface";

/**
 * Generated class for the MarketPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-market",
  templateUrl: "market.html"
})
export class MarketPage {
  IndicesTable: MarketResponse;
  PerformersTable: MarketResponse;
  EGX30: SerResponse;
  EGX70: SerResponse;
  stockchosen: boolean = false;
  anotherbool: boolean = true;
  reuter: string;
  EGX100: SerResponse;
  Indices: SerResponse[] = new Array();
  BP: SerResponse;
  BV: SerResponse;
  WP: SerResponse;
  constructor(
    public navCtrl: NavController,
    private MarketService: MarketService
  ) {}
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.MarketService.getindicestable().subscribe(data => {
      this.IndicesTable = data;
      console.log(this.IndicesTable);
    });
    this.MarketService.getperformerstable().subscribe(data => {
      this.PerformersTable = data;
      console.log(this.PerformersTable);
    });
    this.MarketService.getindices("EGX30").subscribe(data => {
      this.EGX30 = data;
      console.log(this.EGX30);
      this.Indices.push(this.EGX30);
    });
    this.MarketService.getindices("EGX70").subscribe(data => {
      this.EGX70 = data;
      console.log(this.EGX70);
      this.Indices.push(this.EGX70);
    });
    this.MarketService.getindices("EGX100").subscribe(data => {
      this.EGX100 = data;
      console.log(this.EGX100);
      this.Indices.push(this.EGX100);
    });
    this.MarketService.getperformers("BP", true).subscribe(data => {
      this.BP = data;
      console.log(this.BP);
    });
    this.MarketService.getperformers("BV", true).subscribe(data => {
      this.BV = data;
      console.log(this.BV);
    });
    this.MarketService.getperformers("WP", true).subscribe(data => {
      this.WP = data;
      console.log(this.WP);
    });
    console.log(this.Indices);
  }
  setstockchosen(reuter: string) {
    this.stockchosen = true;
    this.reuter = reuter;
    this.anotherbool = false;
  }
  // resetstockchosen() {
  //   this.stockchosen = false;
  //   this.anotherbool = true;
  // }
  getstockchosen(stockchosen) {
    this.stockchosen = stockchosen;
    console.log(this.stockchosen);
  }
}
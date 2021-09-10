import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Wallet } from 'src/app/wallet';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {
wallets:any;
wallet = new Wallet();

constructor(private dataService:DataService) { }


  ngOnInit(): void {
    this.getWalletsData();
  }

  getWalletsData() {
    this.dataService.getData().subscribe(res => {
      this.wallets = res;
    });
  }

  insertData() {
    this.dataService.insertData(this.wallet).subscribe( res => {
      this.getWalletsData();
    });
  }

  deleteData(id: any) {
    this.dataService.deleteData(id).subscribe(res => {
      this.getWalletsData();
    });
  }

}

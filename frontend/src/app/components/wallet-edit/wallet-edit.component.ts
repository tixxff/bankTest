import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wallet } from 'src/app/wallet';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-wallet-edit',
  templateUrl: './wallet-edit.component.html',
  styleUrls: ['./wallet-edit.component.css']
})
export class WalletEditComponent implements OnInit {
  id: any
  data: any
  wallet = new Wallet();

  constructor(private route:ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData() {
    // console.log('dd');
        this.dataService.getWalletById(this.id).subscribe(res => {
      this.data = res;
      this.wallet = this.data;
    })
  }

  updateWallet() {
    this.dataService.updatetData(this.id, this.wallet).subscribe(res => {
    })
  }

}

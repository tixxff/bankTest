import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WalletsComponent } from './components/wallets/wallets.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WalletEditComponent } from './components/wallet-edit/wallet-edit.component';
import { TopUpComponent } from './components/top-up/top-up.component';
import { TranferComponent } from './components/tranfer/tranfer.component';
import { StatementComponent } from './components/statement/statement.component';

const appRoutes: Routes = [
  
  { path: '', component:WalletsComponent },
  { path: 'edit/:id', component:WalletEditComponent},
  { path: 'top-up', component:TopUpComponent },
  { path: 'tranfer', component:TranferComponent },
  { path: 'statement', component:StatementComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WalletsComponent,
    NavbarComponent,
    WalletEditComponent,
    TopUpComponent,
    TranferComponent,
    StatementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

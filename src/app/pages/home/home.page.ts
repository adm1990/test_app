import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Picsum } from 'src/app/interfaces/picsum';
import { PicsumService } from 'src/app/services/picsum.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  data: Observable<Picsum[]>;
  textoBuscarFiltro: string;
  columnaBuscarFiltro: string;
  constructor(private picService: PicsumService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.textoBuscarFiltro =null;
    this.columnaBuscarFiltro = "id";
  
    this.data = this.picService.getPicksum();

  }

  onSearchChange(event){
    this.textoBuscarFiltro = event.detail.value;
    this.textoBuscarFiltro = this.textoBuscarFiltro.toUpperCase();
  }

}

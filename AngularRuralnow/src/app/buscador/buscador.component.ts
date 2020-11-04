import { Component, OnInit } from '@angular/core';
import { Casa } from '../clases/casa/casa';
import { ActivatedRoute, Router } from '@angular/router';
import { CasaServiceService } from '../services/FindCasa-service.service';


@Component({
  selector: 'oevents-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  value = 'localizacion';
  casa: Casa;
  constructor(private route: ActivatedRoute, private router: Router, 
    private casafindservice: CasaServiceService) {
      this.casa = new Casa();
    
   }


  onSubmit() {
    this.casafindservice.save(this.casa).subscribe(result => this.irListaCasas());
  }
 
  irListaCasas() {
    this.router.navigate(['/casas']);
  }
  ngOnInit(): void {
  }

}

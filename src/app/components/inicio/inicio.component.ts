import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  edad=25;
  peso=60;
  altura = 170;
  sexo='Masculino';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any){
    this.altura = event.target.value;
  }

  masculino(){
    this.sexo = 'Masculino';
  }

  femenino(){
    this.sexo = 'Femenino';
  }

  calcularBMI(){
    //CALCULOS DEL BMI
    const BMI = this.peso / Math.pow(this.altura/100,2);
    /* console.log(BMI.toFixed(1)); */
    this.router.navigate(['/resultado', BMI.toFixed(1)])
  }

}

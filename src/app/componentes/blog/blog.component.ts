import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  arrNoticias: any[] = [];

  newNoticia: any = {
    titular: '',
    imagen: '',
    cuerpo: '',
    fecha: '',
  };

  enviar() {
    if (
      this.newNoticia.titular === '' ||
      this.newNoticia.imagen === '' ||
      this.newNoticia.cuerpo === '' ||
      this.newNoticia.fecha === ''
    ) {
      alert('Debes rellenar todos los campos');
    } else {
      this.arrNoticias.push(this.newNoticia);
      this.newNoticia = {
        titular: '',
        imagen: '',
        cuerpo: '',
        fecha: '',
      };
    }
    console.log(this.arrNoticias);
  }

  cargarDatos(): string {
    let html: string = '';
    this.arrNoticias.forEach((element: any) => {
      html += `<h1 class="titular">${element.titular}</h1>`;
      html += `<img src="${element.imagen}" class="imagen"></img>`;
      html += `<p class="cuerpo_texto">${element.cuerpo}</p>`;
      html += `<p class="fecha">${element.fecha}</p>`;
    });
    return html;
  }
}

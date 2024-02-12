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
  arrNoticias: any[] = [
    {
      titular: 'Noticia del presente',
      imagen: 'https://placehold.co/600x400',
      cuerpo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      fecha: '12/02/2024',
    },
    {
      titular: 'Noticia del futuro',
      imagen: 'https://placehold.co/400x600',
      cuerpo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      fecha: '12/02/2025',
    },
  ];

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

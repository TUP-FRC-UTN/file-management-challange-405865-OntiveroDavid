import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  items = [
    { nombre: 'abcd', fecha: new Date(), tipo: 'carpeta', owners: [{ avatar: 'owner1.png' }, { avatar: 'owner2.png' }] },
    { nombre: 'empty folder', fecha: new Date(), tipo: 'carpeta', owners: [{ avatar: 'owner3.png' }] },
    { nombre: 'new folder', fecha: new Date(), tipo: 'carpeta', owners: [] },
    { nombre: 'new folder 2', fecha: new Date(), tipo: 'archivo', owners: [{ avatar: 'owner4.png' }] }
  ];

  shortenName(name: string): string {
    const maxLength = 10;
    return name.length > maxLength ? name.substring(0, maxLength) + '...' : name;
  }

  getTooltip(name: string): string {
    return name.length > 10 ? name : '';
  }

  openNewItemForm() {
    // FALTA HACER
  }

  editItem(item: any) {
    // FALTA HACER
  }
}
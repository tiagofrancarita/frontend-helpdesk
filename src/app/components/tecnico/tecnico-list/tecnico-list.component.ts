import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'Tiago França',
      cpf: '118.075.667-30',
      email: 'tiagofranca.rita@gmail.com',
      senha: '123456',
      perfis:['0'],
      dataCriacao: '18/07/2023'
    },
    {
      id: 2,
      nome: 'Joao França',
      cpf: '118.115.667-30',
      email: 'joaorita@gmail.com',
      senha: '1234156',
      perfis:['1'],
      dataCriacao: '18/07/2023'
    }
  ]

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  constructor() {}

  ngOnInit(): void {
   
  }

 

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }
}
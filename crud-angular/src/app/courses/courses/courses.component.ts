import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Course } from '../model/course';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  // $ no fim do nome, indica que é Observable
  courses$: Observable<Course[]>;

  displayedColumns = ['name', 'category'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
    ) {
    this.courses$ = this.coursesService.list()
    .pipe(catchError(error => {
      this.onError('Erro ao carregar cursos');
      return of([]) // Of retornar um observable de algo, nesse caso retornamos vazio, para parar de carregar a animação do Spinner
    }));
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {}
}

import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  // Injeção de Dependencias no Angular, via Contrutor
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(), // Vai buscar o primeiro resultado e depois fecha o observable, pegara a lista e fecha
      delay(1000),
      tap(courses => console.log(courses))
    );
  }

}

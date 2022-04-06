import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostagemModel } from './../model/PostagemModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  postagem: PostagemModel = new PostagemModel()

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<PostagemModel[]> {
    return this.http.get<PostagemModel[]>('http://localhost:8080/postagem', this.token)
  }

  getByIdPostagem(id: number): Observable<PostagemModel> {
    return this.http.get<PostagemModel>(`http://localhost:8080/postagem/${id}`, this.token)
  }

  getByTituloPostagem(titulo: string): Observable<PostagemModel[]> {
    return this.http.get<PostagemModel[]>(`http://localhost:8080/titulo/${titulo}`, this.token)
  }

  postPostagem(postagem: PostagemModel): Observable<PostagemModel> {
    return this.http.post<PostagemModel>('http://localhost:8080/postagem', postagem, this.token)
  }

}
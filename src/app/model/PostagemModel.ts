import { UsuarioModel } from './UsuarioModel';

import { Tema } from "./TemaModel";

export class Postagem{
    public id: number;
    public titulo: string;
    public texto: string;
    public imagem: string;
    public tema: Tema;
    public usuario: UsuarioModel;
}
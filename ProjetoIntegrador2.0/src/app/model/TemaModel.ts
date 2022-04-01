import { Postagem } from "./PostagemModel";

export class Tema{
    public id: number;
    public descricao: string;
    public tipo: string;
    public tag: string;
    public postagem: Postagem[];
}
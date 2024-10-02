export class ClienteModel {
    constructor(
        public id: string,
        public nombre: string,
        public direccion: string,
        public telefono?: string,
        public email?: string,
        
    ) {}
}

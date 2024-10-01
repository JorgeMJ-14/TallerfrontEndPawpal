export class MascotaModel {
    
    constructor(
        public id: string,
        public nombre: string,
        public especie: string,
        public raza?: string,
        public fecha_ingreso?: string,
        public edad?: string,
        public sexo?: string,
        public color?: string,
        public descripcion?: string,
        public estado?: string,
        public foto?: string,
        
    ) {}
}

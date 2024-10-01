export class SolicitudModel {
    constructor(
        public id: number,
        public fecha_solicitud: string,
        public estado: string,
        public clienteId: string,
        public mascotaId: string,
        public clienteNombre?: string, // Propiedad opcional
        public mascotaNombre?: string   // Propiedad opcional
    ) {}
}

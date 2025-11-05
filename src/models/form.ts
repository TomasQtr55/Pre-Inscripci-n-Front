export interface DatosPersonales {
  nombreCompleto: string;
  dni: string;
  cuit: string;
  email: string;
  provincia: string;
  ciudad: string;
}

export interface Estudios {
  secundarioCompleto: boolean;
  institucion: string;
  anioEgreso: number | null;
  ciudadInstitucion: string;
  provinciaInstitucion: string;
  tituloArchivoUrl: string;
  adeudaMaterias: boolean;
}

export interface Archivos {
  dniFrente: string;
  dniDorso: string;
  tituloSecundario: string;
}

export interface FormData {
  estado: "pendiente" | "aceptado" | "rechazado";
  progreso: number;
  datosPersonales: DatosPersonales;
  estudios: Estudios;
  archivos: Archivos;
}


export interface DatosPersonales {
  nombreCompleto: string;
  apellidoCompleto: string;
  dni: string; 
  cuit?: string | null;
  email: string;
  numeroTelefono?: string | null;
  provincia?: string | null;
  ciudad?: string | null;
  direccion?: string | null;
  fechaNacimiento?: string | null; 
}

export interface PreinscripcionCrearBody {
  carrera: string;
  datosPersonales: DatosPersonales;
}

export interface EstudiosSecundariosBody {
  secundarioCompleto: boolean;
  institucion?: string | null;
  anioEgreso?: number | null;
  ciudadInstitucion?: string | null;
  provinciaInstitucion?: string | null;
  analiticoConstanciaUrl?: string | null;
}

export interface ApiResponse<T = any> {
  success?: boolean;
  data?: T;
  message?: string;
}
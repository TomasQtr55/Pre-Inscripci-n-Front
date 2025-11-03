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

export interface Convivencia {
  nombre: string;
  parentesco: string;
}

export interface Domicilio {
  direccion: string;
  convivencia: Convivencia[];
}

export interface ContactoEmergencia {
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  parentesco: string;
}

export interface SituacionLaboral {
  trabaja: boolean;
  lugar: string;
}

export interface Cobertura {
  obraSocial: string;
  beca: string;
}

export interface Tecnologia {
  tieneComputadora: boolean;
  tipoConexion: string;
}

export interface Transporte {
  tipo: string;
}

export interface Redes {
  email: string;
  instagram: string;
  linkedin: string;
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
  domicilio: Domicilio;
  contactoEmergencia: ContactoEmergencia;
  situacionLaboral: SituacionLaboral;
  cobertura: Cobertura;
  tecnologia: Tecnologia;
  transporte: Transporte;
  redes: Redes;
  archivos: Archivos;
  pdfUrl?: string;
  qrCode?: string;
}

export type FormSection = 
  | 'datosPersonales'
  | 'estudios'
  | 'domicilio'
  | 'contactoEmergencia'
  | 'situacionLaboral'
  | 'cobertura'
  | 'tecnologia'
  | 'transporte'
  | 'redes';
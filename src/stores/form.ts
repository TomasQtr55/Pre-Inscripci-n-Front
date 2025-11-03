import { defineStore } from 'pinia';
import type { FormData, FormSection } from '@/models/form';

export const useFormStore = defineStore('form', {
  state: (): {
    currentStep: number;
    totalSteps: number;
    formData: FormData;
  } => ({
    currentStep: 1,
    totalSteps: 7,
    formData: {
      estado: "pendiente",
      progreso: 0,
      datosPersonales: {
        nombreCompleto: "",
        dni: "",
        cuit: "",
        email: "",
        provincia: "",
        ciudad: ""
      },
      estudios: {
        secundarioCompleto: false,
        institucion: "",
        anioEgreso: null,
        ciudadInstitucion: "",
        provinciaInstitucion: "",
        tituloArchivoUrl: "",
        adeudaMaterias: false
      },
      domicilio: {
        direccion: "",
        convivencia: []
      },
      contactoEmergencia: {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        parentesco: ""
      },
      situacionLaboral: {
        trabaja: false,
        lugar: ""
      },
      cobertura: {
        obraSocial: "",
        beca: ""
      },
      tecnologia: {
        tieneComputadora: false,
        tipoConexion: ""
      },
      transporte: {
        tipo: ""
      },
      redes: {
        email: "",
        instagram: "",
        linkedin: ""
      },
      archivos: {
        dniFrente: "",
        dniDorso: "",
        tituloSecundario: ""
      }
    }
  }),

  actions: {
    nextStep(): void {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
        this.updateProgress();
      }
    },

    prevStep(): void {
      if (this.currentStep > 1) {
        this.currentStep--;
        this.updateProgress();
      }
    },

    updateProgress(): void {
      this.formData.progreso = Math.round((this.currentStep / this.totalSteps) * 100);
    },

    updateFormData<T extends FormSection>(section: T, data: Partial<FormData[T]>): void {
      this.formData[section] = { ...this.formData[section], ...data };
    },

    setCurrentStep(step: number): void {
      if (step >= 1 && step <= this.totalSteps) {
        this.currentStep = step;
        this.updateProgress();
      }
    }
  }
});
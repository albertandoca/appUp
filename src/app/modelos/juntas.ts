export interface Junta {
    id: number;
    idLugar: number;
    sexo: string;
    numero: number;
    idPersona: number;
    electores: number;
    control: boolean;
    takeImg: boolean;
    auditoria?: boolean;
    sendData?: boolean;
    sendImg?: boolean;
  }


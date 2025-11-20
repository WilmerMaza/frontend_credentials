import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ArrowLeft, Printer, FileCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import militaryEmblem from "@/assets/military-emblem.png";
import officerPhoto from "@/assets/officer-photo.jpg";

const PDFPreview = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-8 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/id-card")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>

          <div className="flex gap-3">
            <Button variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Imprimir
            </Button>
            <Button className="bg-primary hover:bg-primary/90 shadow-military">
              <Download className="mr-2 h-4 w-4" />
              Descargar PDF
            </Button>
          </div>
        </div>

        {/* PDF Document Preview */}
        <Card className="shadow-2xl bg-white">
          <div className="p-12 space-y-8">
            {/* Header */}
            <div className="flex items-start justify-between border-b-4 border-primary pb-6">
              <div className="flex items-center gap-4">
                <img src={militaryEmblem} alt="Escudo" className="h-24 w-24" />
                <div>
                  <h1 className="text-3xl font-bold text-foreground">FUERZAS ARMADAS</h1>
                  <p className="text-lg text-primary font-semibold">República de [País]</p>
                  <p className="text-sm text-muted-foreground mt-1">Comando General - Departamento de Recursos Humanos</p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-accent/10 px-4 py-2 rounded-lg border border-accent">
                  <p className="text-xs text-muted-foreground">Documento Oficial N°</p>
                  <p className="text-lg font-bold text-accent font-mono">MIL-2025-001234</p>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="text-center py-4">
              <div className="inline-block bg-primary/10 px-8 py-3 rounded-full mb-2">
                <FileCheck className="inline-block h-6 w-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-primary">CREDENCIAL DE IDENTIFICACIÓN MILITAR</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Documento Oficial Certificado</p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-[250px_1fr] gap-8">
              {/* Photo and QR */}
              <div className="space-y-6">
                <div>
                  <img 
                    src={officerPhoto} 
                    alt="Oficial" 
                    className="w-full aspect-[3/4] object-cover rounded-lg border-4 border-primary/30"
                  />
                  <div className="mt-2 bg-accent/10 p-2 rounded text-center">
                    <p className="text-xs font-bold text-accent">FOTOGRAFÍA OFICIAL</p>
                  </div>
                </div>

                <div className="bg-white border-4 border-foreground p-4 rounded-lg">
                  <div className="aspect-square bg-gradient-to-br from-foreground to-muted flex items-center justify-center">
                    <p className="text-background text-sm font-mono text-center">
                      QR CODE
                      <br />
                      VERIFICACIÓN
                    </p>
                  </div>
                  <p className="text-xs text-center mt-2 font-semibold">Código de Verificación Digital</p>
                </div>
              </div>

              {/* Information */}
              <div className="space-y-6">
                <div className="bg-gradient-card p-6 rounded-lg border border-border">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4 border-b pb-2">
                    Datos Personales
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Nombre Completo</p>
                      <p className="font-bold text-lg">Juan Carlos Pérez Gómez</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">N° de Identificación</p>
                      <p className="font-bold text-lg font-mono">MIL-2025-001234</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Fecha de Nacimiento</p>
                      <p className="font-semibold">15 de Marzo de 1990</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Tipo de Sangre</p>
                      <p className="font-semibold">O+</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-card p-6 rounded-lg border border-border">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4 border-b pb-2">
                    Información Militar
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Rango</p>
                      <p className="font-bold text-lg text-primary">Capitán</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Unidad Asignada</p>
                      <p className="font-semibold">Batallón de Infantería 7</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Fecha de Ingreso</p>
                      <p className="font-semibold">10 de Enero de 2012</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Años de Servicio</p>
                      <p className="font-semibold text-primary">13 años</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Especialidad</p>
                      <p className="font-semibold">Infantería</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Estado</p>
                      <p className="font-semibold text-accent">ACTIVO</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-card p-6 rounded-lg border border-border">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4 border-b pb-2">
                    Contacto Institucional
                  </h3>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Correo Electrónico</p>
                    <p className="font-semibold">juan.perez@fuerzasarmadas.mil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Signature Section */}
            <div className="border-t-2 border-primary pt-6 mt-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Fecha de Emisión</p>
                  <p className="font-bold">20 de Noviembre de 2025</p>
                  <p className="text-xs text-muted-foreground mt-4 mb-2">Válido Hasta</p>
                  <p className="font-bold">20 de Noviembre de 2030</p>
                </div>
                <div className="text-right">
                  <div className="border-2 border-accent bg-accent/5 p-4 rounded-lg inline-block">
                    <p className="text-xs text-muted-foreground mb-1">Firma Digital Certificada</p>
                    <p className="font-mono text-xs text-foreground">SHA256: A3F7C92E...4D8B92E1</p>
                    <p className="text-xs text-accent font-bold mt-2">✓ DOCUMENTO VERIFICADO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center text-xs text-muted-foreground pt-6 border-t">
              <p>Este documento es de carácter oficial y cuenta con firma electrónica certificada.</p>
              <p className="mt-1">Cualquier alteración invalida su autenticidad.</p>
              <p className="mt-2 font-semibold">Fuerzas Armadas - República de [País] | www.fuerzasarmadas.mil</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PDFPreview;

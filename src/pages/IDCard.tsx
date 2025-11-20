import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ArrowLeft, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import militaryEmblem from "@/assets/military-emblem.png";
import officerPhoto from "@/assets/officer-photo.jpg";
import militaryPattern from "@/assets/military-pattern.jpg";

const IDCard = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen py-8 px-4"
      style={{
        backgroundImage: `url(${militaryPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/95" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/registro")}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Identificación Digital Generada</h1>
          <p className="text-muted-foreground">
            Su credencial militar digital ha sido creada exitosamente
          </p>
        </div>

        {/* Digital ID Card */}
        <div className="mb-8 perspective-1000">
          <Card 
            className="relative overflow-hidden shadow-military border-2 border-accent/30"
            style={{
              background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
            }}
          >
            {/* Background Pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url(${militaryPattern})`,
                backgroundSize: 'cover',
              }}
            />

            <div className="relative p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 border-b border-accent/30 pb-4">
                <div className="flex items-center gap-3">
                  <img src={militaryEmblem} alt="Escudo" className="h-14 w-14" />
                  <div>
                    <h2 className="text-xl font-bold text-primary-foreground">FUERZAS ARMADAS</h2>
                    <p className="text-sm text-accent">Identificación Oficial</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-primary-foreground/80">ID: MIL-2025-001234</p>
                  <p className="text-xs text-accent font-mono">VERIFICADO</p>
                </div>
              </div>

              {/* Main Content */}
              <div className="grid md:grid-cols-[200px_1fr_200px] gap-6">
                {/* Photo */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative">
                    <img 
                      src={officerPhoto} 
                      alt="Oficial" 
                      className="w-40 h-48 object-cover rounded-lg border-4 border-accent/50 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-glow">
                      ACTIVO
                    </div>
                  </div>
                </div>

                {/* Information */}
                <div className="space-y-4 text-primary-foreground">
                  <div>
                    <p className="text-xs text-primary-foreground/70 uppercase tracking-wide mb-1">Nombre Completo</p>
                    <p className="text-lg font-bold">Juan Carlos Pérez Gómez</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-primary-foreground/70 uppercase tracking-wide mb-1">Rango</p>
                      <p className="font-semibold">Capitán</p>
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/70 uppercase tracking-wide mb-1">Unidad</p>
                      <p className="font-semibold">Batallón de Infantería 7</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-primary-foreground/70 uppercase tracking-wide mb-1">Fecha de Nacimiento</p>
                      <p className="font-semibold">15/03/1990</p>
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/70 uppercase tracking-wide mb-1">Fecha de Ingreso</p>
                      <p className="font-semibold">10/01/2012</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-primary-foreground/70 uppercase tracking-wide mb-1">Correo Institucional</p>
                    <p className="font-semibold text-sm">juan.perez@fuerzasarmadas.mil</p>
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-glow">
                    <div className="w-36 h-36 bg-gradient-to-br from-foreground to-muted flex items-center justify-center">
                      <p className="text-background text-xs font-mono text-center px-2">
                        QR CODE
                        <br />
                        <span className="text-[8px]">SCAN TO VERIFY</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-accent mt-2 font-semibold">CÓDIGO DE VERIFICACIÓN</p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-accent/30 flex justify-between items-center text-xs text-primary-foreground/70">
                <p>Emisión: 20/11/2025</p>
                <p>Válido hasta: 20/11/2030</p>
                <p className="font-mono">SHA256: A3F7...92E1</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-military"
            onClick={() => navigate("/pdf-preview")}
          >
            <Download className="mr-2 h-5 w-5" />
            Descargar PDF
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            <Share2 className="mr-2 h-5 w-5" />
            Compartir Credencial
          </Button>

          <Button 
            size="lg"
            variant="outline"
            onClick={() => navigate("/mobile-view")}
          >
            Ver en Móvil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IDCard;

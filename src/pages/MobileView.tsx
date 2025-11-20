import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, QrCode, Shield, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import militaryEmblem from "@/assets/military-emblem.png";
import officerPhoto from "@/assets/officer-photo.jpg";

const MobileView = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/id-card")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Vista Móvil</h1>
          <p className="text-muted-foreground">
            Previsualización de la aplicación móvil
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mobile Device Frame - Home Screen */}
          <div className="mx-auto">
            <div className="relative w-[320px] h-[640px] bg-foreground rounded-[3rem] p-4 shadow-2xl">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-2xl z-20" />
              
              {/* Screen */}
              <div className="h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="bg-primary text-primary-foreground px-6 py-3 flex items-center justify-between text-xs">
                  <span>9:41</span>
                  <span className="font-semibold">ID Militar</span>
                  <span>100%</span>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3 pb-3 border-b">
                    <img src={militaryEmblem} alt="Escudo" className="h-10 w-10" />
                    <div>
                      <h3 className="font-bold text-sm">Juan Carlos Pérez</h3>
                      <p className="text-xs text-muted-foreground">Capitán - MIL-2025-001234</p>
                    </div>
                  </div>

                  {/* QR Code Card */}
                  <Card className="bg-gradient-military p-6">
                    <div className="text-center space-y-4">
                      <div className="bg-white p-4 rounded-lg mx-auto inline-block shadow-glow">
                        <div className="w-40 h-40 bg-gradient-to-br from-foreground to-muted flex items-center justify-center">
                          <QrCode className="h-16 w-16 text-background" />
                        </div>
                      </div>
                      <div className="text-primary-foreground">
                        <p className="text-xs font-semibold mb-1">TOQUE PARA AMPLIAR</p>
                        <p className="text-xs opacity-80">Código de verificación activo</p>
                      </div>
                    </div>
                  </Card>

                  {/* Quick Actions */}
                  <div className="space-y-2">
                    <button className="w-full flex items-center justify-between p-3 bg-card hover:bg-accent/10 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold">Ver Credencial Completa</p>
                          <p className="text-xs text-muted-foreground">Información detallada</p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </button>

                    <button className="w-full flex items-center justify-between p-3 bg-card hover:bg-accent/10 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <QrCode className="h-5 w-5 text-accent" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold">Escanear QR</p>
                          <p className="text-xs text-muted-foreground">Verificar otra credencial</p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </button>
                  </div>

                  {/* Status Badge */}
                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Estado del Servicio</p>
                    <p className="text-sm font-bold text-accent">✓ ACTIVO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Device Frame - ID Card Detail */}
          <div className="mx-auto">
            <div className="relative w-[320px] h-[640px] bg-foreground rounded-[3rem] p-4 shadow-2xl">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-2xl z-20" />
              
              {/* Screen */}
              <div className="h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                {/* Header with back button */}
                <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary-foreground">
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <span className="font-semibold text-sm">Credencial Digital</span>
                  <div className="w-8" />
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto h-[calc(100%-48px)] p-4 space-y-4">
                  {/* Photo Section */}
                  <div className="text-center">
                    <div className="relative inline-block">
                      <img 
                        src={officerPhoto} 
                        alt="Oficial" 
                        className="w-32 h-40 object-cover rounded-lg border-4 border-primary/30 shadow-lg"
                      />
                      <div className="absolute -bottom-2 right-0 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold shadow-glow">
                        ACTIVO
                      </div>
                    </div>
                  </div>

                  {/* Name and Rank */}
                  <div className="text-center pb-4 border-b">
                    <h2 className="text-lg font-bold mb-1">Juan Carlos Pérez Gómez</h2>
                    <p className="text-sm text-primary font-semibold">Capitán</p>
                    <p className="text-xs text-muted-foreground font-mono mt-1">MIL-2025-001234</p>
                  </div>

                  {/* Info Cards */}
                  <Card className="p-3 bg-gradient-card">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="text-muted-foreground mb-1">Unidad</p>
                        <p className="font-semibold">Batallón Infantería 7</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Ingreso</p>
                        <p className="font-semibold">10/01/2012</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Nacimiento</p>
                        <p className="font-semibold">15/03/1990</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Servicio</p>
                        <p className="font-semibold text-primary">13 años</p>
                      </div>
                    </div>
                  </Card>

                  {/* Contact */}
                  <Card className="p-3 bg-gradient-card">
                    <p className="text-xs text-muted-foreground mb-1">Email Institucional</p>
                    <p className="text-xs font-semibold">juan.perez@fuerzasarmadas.mil</p>
                  </Card>

                  {/* Compact QR */}
                  <div className="bg-card p-3 rounded-lg border">
                    <p className="text-xs text-center text-muted-foreground mb-2">Código de Verificación</p>
                    <div className="bg-white p-2 rounded mx-auto w-24 h-24 flex items-center justify-center">
                      <QrCode className="h-12 w-12" />
                    </div>
                  </div>

                  {/* Validity */}
                  <div className="text-center text-xs text-muted-foreground pb-4">
                    <p>Válido hasta: 20/11/2030</p>
                    <p className="mt-1 text-accent font-semibold">✓ Documento Verificado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileView;

import { Button } from "@/components/ui/button";
import { Shield, QrCode, FileCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import militaryPattern from "@/assets/military-pattern.jpg";
import militaryEmblem from "@/assets/military-emblem.png";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with military pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${militaryPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-accent/20 backdrop-blur-sm bg-background/5">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={militaryEmblem} alt="Escudo Militar" className="h-12 w-12" />
              <div>
                <h1 className="text-xl font-bold text-primary-foreground">FUERZAS ARMADAS</h1>
                <p className="text-xs text-accent">Sistema de Identificación Digital</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Shield className="mr-2 h-4 w-4" />
              Iniciar Sesión
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-block p-4 rounded-full bg-accent/20 backdrop-blur-sm mb-4">
              <Shield className="h-16 w-16 text-accent" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground leading-tight">
              Sistema de Identificación<br />
              <span className="text-accent">Militar Digital</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Plataforma segura para el registro, gestión y verificación de credenciales 
              militares mediante tecnología blockchain y códigos QR encriptados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-military text-lg px-8"
                onClick={() => navigate('/registro')}
              >
                <FileCheck className="mr-2 h-5 w-5" />
                Registrar Militar
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8"
                onClick={() => navigate('/verificar')}
              >
                <QrCode className="mr-2 h-5 w-5" />
                Verificar Identificación
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="backdrop-blur-md bg-card/90 rounded-lg p-8 shadow-card-elevated border border-accent/20">
              <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-foreground">Seguridad Máxima</h3>
              <p className="text-muted-foreground">
                Encriptación de grado militar y verificación biométrica para garantizar autenticidad.
              </p>
            </div>

            <div className="backdrop-blur-md bg-card/90 rounded-lg p-8 shadow-card-elevated border border-accent/20">
              <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <QrCode className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-foreground">Verificación Instantánea</h3>
              <p className="text-muted-foreground">
                Escaneo de código QR para validación en tiempo real desde cualquier dispositivo.
              </p>
            </div>

            <div className="backdrop-blur-md bg-card/90 rounded-lg p-8 shadow-card-elevated border border-accent/20">
              <div className="h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <FileCheck className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-foreground">Documentación Digital</h3>
              <p className="text-muted-foreground">
                Generación automática de credenciales en PDF con firma electrónica certificada.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-accent/20 backdrop-blur-sm bg-background/5 mt-16">
          <div className="container mx-auto px-6 py-8 text-center text-primary-foreground/70 text-sm">
            <p>© 2025 Fuerzas Armadas - Sistema de Identificación Digital</p>
            <p className="mt-2">Plataforma Segura | Tecnología Blockchain | Certificación ISO 27001</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { Shield, QrCode, FileCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="h-7 w-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Armada de Colombia</h1>
              <p className="text-xs text-muted-foreground">Identificación Digital</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-foreground hover:text-primary"
          >
            <Shield className="mr-2 h-4 w-4" />
            Iniciar Sesión
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-flex p-4 rounded-2xl bg-primary/5 mb-2">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Sistema de Identificación<br />
            <span className="text-primary">Naval Digital</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plataforma oficial para el registro y verificación de credenciales 
            de la Armada Nacional de Colombia con tecnología QR.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12"
              onClick={() => navigate('/registro')}
            >
              <FileCheck className="mr-2 h-5 w-5" />
              Registrar Personal
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-8 h-12"
              onClick={() => navigate('/verificar')}
            >
              <QrCode className="mr-2 h-5 w-5" />
              Verificar Identidad
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16 bg-muted/30">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card-elevated border border-border hover:shadow-elegant transition-all">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">Seguridad Garantizada</h3>
            <p className="text-sm text-muted-foreground">
              Encriptación avanzada y verificación institucional para máxima protección de datos.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card-elevated border border-border hover:shadow-elegant transition-all">
            <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <QrCode className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">Verificación Rápida</h3>
            <p className="text-sm text-muted-foreground">
              Escaneo de código QR para validación instantánea desde cualquier dispositivo móvil.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card-elevated border border-border hover:shadow-elegant transition-all">
            <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
              <FileCheck className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">Credencial Digital</h3>
            <p className="text-sm text-muted-foreground">
              Generación automática de documentos oficiales en formato PDF con firma digital.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-6 py-8 text-center text-muted-foreground text-sm">
          <p>© 2025 Armada de Colombia - Sistema de Identificación Digital</p>
          <p className="mt-2">Plataforma Oficial | Seguridad Nacional</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

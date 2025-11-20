import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Camera, CheckCircle2, XCircle, Shield, Scan } from "lucide-react";
import { useNavigate } from "react-router-dom";
import militaryPattern from "@/assets/military-pattern.jpg";
import officerPhoto from "@/assets/officer-photo.jpg";
import militaryEmblem from "@/assets/military-emblem.png";

const Verification = () => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [verificationResult, setVerificationResult] = useState<"valid" | "invalid" | null>(null);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning
    setTimeout(() => {
      setIsScanning(false);
      setVerificationResult("valid");
    }, 2000);
  };

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
          onClick={() => navigate("/")}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Inicio
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Scanner Section */}
          <Card className="shadow-military border-accent/20">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Scan className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-2xl">Verificar Identificación</CardTitle>
              <CardDescription>
                Escanee el código QR de la credencial militar
              </CardDescription>
            </CardHeader>

            <CardContent>
              {/* QR Scanner */}
              <div className="aspect-square bg-muted rounded-lg mb-6 flex items-center justify-center border-4 border-dashed border-border relative overflow-hidden">
                {isScanning ? (
                  <div className="absolute inset-0 bg-primary/10 animate-pulse flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="h-16 w-16 text-primary mx-auto mb-3 animate-bounce" />
                      <p className="font-semibold">Escaneando...</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <Camera className="h-20 w-20 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">
                      Coloque el código QR frente a la cámara
                    </p>
                    <p className="text-xs text-muted-foreground">
                      La verificación es instantánea
                    </p>
                  </div>
                )}

                {/* Scanning Frame */}
                {isScanning && (
                  <div className="absolute inset-8 border-2 border-accent rounded-lg">
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-accent rounded-tl-lg" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-accent rounded-tr-lg" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-accent rounded-bl-lg" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-accent rounded-br-lg" />
                  </div>
                )}
              </div>

              <Button 
                onClick={handleScan}
                disabled={isScanning}
                className="w-full bg-primary hover:bg-primary/90 shadow-military"
                size="lg"
              >
                {isScanning ? (
                  <>Escaneando...</>
                ) : (
                  <>
                    <Camera className="mr-2 h-5 w-5" />
                    Iniciar Escaneo
                  </>
                )}
              </Button>

              {/* Alternative Methods */}
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground text-center mb-3">
                  También puede verificar mediante:
                </p>
                <Button variant="outline" className="w-full" size="sm">
                  Subir imagen del QR
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="shadow-military border-accent/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Resultado de Verificación</CardTitle>
              <CardDescription>
                Estado de la credencial verificada
              </CardDescription>
            </CardHeader>

            <CardContent>
              {verificationResult === null && (
                <div className="text-center py-12">
                  <Shield className="h-20 w-20 text-muted-foreground mx-auto mb-4 opacity-30" />
                  <p className="text-muted-foreground">
                    Esperando escaneo del código QR
                  </p>
                </div>
              )}

              {verificationResult === "valid" && (
                <div className="space-y-6">
                  {/* Status Badge */}
                  <div className="text-center py-6 bg-accent/10 rounded-lg border-2 border-accent">
                    <CheckCircle2 className="h-16 w-16 text-accent mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-accent mb-2">IDENTIDAD VÁLIDA</h3>
                    <p className="text-sm text-muted-foreground">Credencial verificada exitosamente</p>
                  </div>

                  {/* Personnel Info */}
                  <Card className="border-accent/30">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4 mb-4">
                        <img 
                          src={officerPhoto} 
                          alt="Oficial" 
                          className="w-24 h-28 object-cover rounded-lg border-2 border-accent/50"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <img src={militaryEmblem} alt="Escudo" className="h-8 w-8" />
                            <h4 className="font-bold text-lg">Juan Carlos Pérez Gómez</h4>
                          </div>
                          <div className="space-y-1 text-sm">
                            <p className="flex items-center gap-2">
                              <span className="text-muted-foreground">Rango:</span>
                              <span className="font-semibold text-primary">Capitán</span>
                            </p>
                            <p className="flex items-center gap-2">
                              <span className="text-muted-foreground">ID:</span>
                              <span className="font-mono">MIL-2025-001234</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm pt-4 border-t">
                        <div>
                          <p className="text-muted-foreground text-xs mb-1">Unidad</p>
                          <p className="font-semibold">Batallón de Infantería 7</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs mb-1">Estado</p>
                          <p className="font-semibold text-accent">ACTIVO</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs mb-1">Emisión</p>
                          <p className="font-semibold">20/11/2025</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs mb-1">Vencimiento</p>
                          <p className="font-semibold">20/11/2030</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Verification Details */}
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Hash SHA256:</span>
                      <span className="font-mono">A3F7C92E...4D8B92E1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Verificado:</span>
                      <span className="font-semibold">{new Date().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Firma Digital:</span>
                      <span className="text-accent font-semibold">✓ VÁLIDA</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setVerificationResult(null)}
                  >
                    Nueva Verificación
                  </Button>
                </div>
              )}

              {verificationResult === "invalid" && (
                <div className="space-y-6">
                  <div className="text-center py-6 bg-destructive/10 rounded-lg border-2 border-destructive">
                    <XCircle className="h-16 w-16 text-destructive mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-destructive mb-2">IDENTIDAD NO VÁLIDA</h3>
                    <p className="text-sm text-muted-foreground">La credencial no pudo ser verificada</p>
                  </div>

                  <Card className="border-destructive/30 bg-destructive/5">
                    <CardContent className="pt-6 space-y-3 text-sm">
                      <p className="font-semibold">Posibles causas:</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Código QR dañado o ilegible</li>
                        <li>Credencial expirada o revocada</li>
                        <li>Documento falsificado</li>
                        <li>Error en la base de datos</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setVerificationResult(null)}
                  >
                    Intentar Nuevamente
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Verification;

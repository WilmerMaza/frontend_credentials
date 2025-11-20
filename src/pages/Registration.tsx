import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Upload, UserCircle, Shield, Calendar, Mail, Hash, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import militaryPattern from "@/assets/military-pattern.jpg";

const Registration = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    rank: "",
    idNumber: "",
    unit: "",
    birthDate: "",
    admissionDate: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registro Exitoso",
      description: "La identificación digital ha sido generada correctamente.",
    });
    navigate("/id-card");
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
      
      <div className="container max-w-3xl mx-auto relative z-10">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Inicio
        </Button>

        <Card className="shadow-military border-accent/20">
          <CardHeader className="text-center pb-8">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-3xl">Registro de Personal Militar</CardTitle>
            <CardDescription className="text-base">
              Complete todos los campos para generar su identificación digital oficial
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Photo Upload */}
              <div className="space-y-2">
                <Label htmlFor="photo" className="flex items-center gap-2">
                  <UserCircle className="h-4 w-4" />
                  Fotografía Oficial
                </Label>
                <div className="border-2 border-dashed border-input rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Haga clic o arrastre una fotografía tipo carnet
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Formato: JPG, PNG (máx. 5MB)
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2">
                    <UserCircle className="h-4 w-4" />
                    Nombre Completo
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Ej: Juan Carlos Pérez Gómez"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rank" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Rango Militar
                  </Label>
                  <Select value={formData.rank} onValueChange={(value) => setFormData({ ...formData, rank: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione rango" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="soldado">Soldado</SelectItem>
                      <SelectItem value="cabo">Cabo</SelectItem>
                      <SelectItem value="sargento">Sargento</SelectItem>
                      <SelectItem value="teniente">Teniente</SelectItem>
                      <SelectItem value="capitan">Capitán</SelectItem>
                      <SelectItem value="mayor">Mayor</SelectItem>
                      <SelectItem value="coronel">Coronel</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idNumber" className="flex items-center gap-2">
                    <Hash className="h-4 w-4" />
                    Número de Identificación
                  </Label>
                  <Input
                    id="idNumber"
                    placeholder="Ej: MIL-2025-001234"
                    value={formData.idNumber}
                    onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="unit" className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Unidad Asignada
                  </Label>
                  <Input
                    id="unit"
                    placeholder="Ej: Batallón de Infantería 7"
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthDate" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Fecha de Nacimiento
                  </Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="admissionDate" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Fecha de Ingreso
                  </Label>
                  <Input
                    id="admissionDate"
                    type="date"
                    value={formData.admissionDate}
                    onChange={(e) => setFormData({ ...formData, admissionDate: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Correo Institucional
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nombre.apellido@fuerzasarmadas.mil"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="pt-6 flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => navigate("/")}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary/90 shadow-military"
                >
                  Generar Identificación
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from '../../services/navigation.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  militaryPattern = 'assets/military-pattern.jpg';
  registrationForm!: FormGroup;

  ranks = [
    { value: 'soldado', label: 'Soldado' },
    { value: 'cabo', label: 'Cabo' },
    { value: 'sargento', label: 'Sargento' },
    { value: 'teniente', label: 'Teniente' },
    { value: 'capitan', label: 'Capitán' },
    { value: 'mayor', label: 'Mayor' },
    { value: 'coronel', label: 'Coronel' },
    { value: 'general', label: 'General' }
  ];

  constructor(
    private fb: FormBuilder,
    private navigationService: NavigationService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      rank: ['', Validators.required],
      idNumber: ['', Validators.required],
      unit: ['', Validators.required],
      birthDate: [null, Validators.required],
      admissionDate: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    // Marcar todos los campos como touched para mostrar errores
    Object.keys(this.registrationForm.controls).forEach(key => {
      this.registrationForm.get(key)?.markAsTouched();
    });

    console.log('Form submitted. Valid:', this.registrationForm.valid);
    console.log('Form values:', this.registrationForm.value);

    if (this.registrationForm.valid) {
      this.toastService.show({
        title: 'Registro Exitoso',
        description: 'La identificación digital ha sido generada correctamente.'
      });
      
      // Pequeño delay para que se vea el toast antes de navegar
      setTimeout(() => {
        this.navigationService.navigate('/id-card');
      }, 1000);
    } else {
      // Mostrar mensajes de error específicos
      const invalidFields: string[] = [];
      Object.keys(this.registrationForm.controls).forEach(key => {
        const control = this.registrationForm.get(key);
        if (control?.invalid) {
          const fieldNames: { [key: string]: string } = {
            'fullName': 'Nombre Completo',
            'rank': 'Rango Militar',
            'idNumber': 'Número de Identificación',
            'unit': 'Unidad Asignada',
            'birthDate': 'Fecha de Nacimiento',
            'admissionDate': 'Fecha de Ingreso',
            'email': 'Correo Electrónico'
          };
          invalidFields.push(fieldNames[key] || key);
        }
      });
      
      this.toastService.error(`Por favor complete: ${invalidFields.join(', ')}`);
    }
  }

  navigateTo(path: string): void {
    this.navigationService.navigate(path);
  }
}


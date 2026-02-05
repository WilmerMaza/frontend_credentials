import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { IDCardComponent } from './pages/id-card/id-card.component';
import { PDFPreviewComponent } from './pages/pdf-preview/pdf-preview.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { MobileViewComponent } from './pages/mobile-view/mobile-view.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'registro', component: RegistrationComponent },
  { path: 'id-card', component: IDCardComponent },
  { path: 'pdf-preview', component: PDFPreviewComponent },
  { path: 'verificar', component: VerificationComponent },
  { path: 'mobile-view', component: MobileViewComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


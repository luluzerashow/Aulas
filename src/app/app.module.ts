import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterpageComponent } from './components/shared/masterpage/masterpage.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { DialogExampleComponent } from './components/shared/dialog-example/dialog-example.component';
import { CookieService } from 'ngx-cookie-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioscreateComponent } from './components/pages/usuarios/usuarioscreate/usuarioscreate.component';
import { UsuariosindexComponent } from './components/pages/usuarios/usuariosindex/usuariosindex.component';
import { UsuarioseditComponent } from './components/pages/usuarios/usuariosedit/usuariosedit.component';
import { PerfisindexComponent } from './components/pages/perfis/perfisindex/perfisindex.component';
import { PerfiscreateComponent } from './components/pages/perfis/perfiscreate/perfiscreate.component';
import { PerfiseditComponent } from './components/pages/perfis/perfisedit/perfisedit.component';
import { PerfisdeleteComponent } from './components/pages/perfis/perfisdelete/perfisdelete.component';
import { FaixasindexComponent } from './components/pages/faixas/faixasindex/faixasindex.component';
import { FaixascreateComponent } from './components/pages/faixas/faixascreate/faixascreate.component';
import { FaixaseditComponent } from './components/pages/faixas/faixasedit/faixasedit.component';
import { FaixasdeleteComponent } from './components/pages/faixas/faixasdelete/faixasdelete.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterpageComponent,
    DashboardComponent,
    FooterComponent,
    ContatoComponent,
    LoginComponent,
    UsuariosindexComponent,
    DialogExampleComponent,
    UsuarioscreateComponent,
    UsuarioseditComponent,
    PerfisindexComponent,
    PerfiscreateComponent,
    PerfiseditComponent,
    PerfisdeleteComponent,
    FaixasindexComponent,
    FaixascreateComponent,
    FaixaseditComponent,
    FaixasdeleteComponent

  ],
  entryComponents: [
    DialogExampleComponent,
    UsuarioscreateComponent,
    UsuarioseditComponent,
    FaixascreateComponent,
    FaixaseditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatBadgeModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatExpansionModule
  ],
  providers: [MatDatepickerModule, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

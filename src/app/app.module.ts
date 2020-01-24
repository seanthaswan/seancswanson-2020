import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { BioComponent } from './main-content/bio/bio.component';
import { ProjectsComponent } from './main-content/projects/projects.component';
import { EducationComponent } from './main-content/education/education.component';
import { WorkComponent } from './main-content/work/work.component';
import { CurriculumVitaeComponent } from './main-content/curriculum-vitae/curriculum-vitae.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    BioComponent,
    ProjectsComponent,
    EducationComponent,
    WorkComponent,
    CurriculumVitaeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { LabelsComponent } from './labels/labels.component';
import { ModalsComponent } from './modals/modals.component';
import { SearchComponent } from './search/search.component';
import { TablesComponent } from './tables/tables.component';
import { ColorsComponent } from './colors/colors.component';
import { LoadersComponent } from './loaders/loaders.component';
import { FormsComponent } from './forms/forms.component';
import { ToastersComponent } from './toasters/toasters.component';
import { TabsComponent } from './tabs/tabs.component';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  { path: '', component: TypographyComponent},
  { path: 'typography', component: TypographyComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'labels', component: LabelsComponent },
  { path: 'modals', component: ModalsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'loaders', component: LoadersComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'toasters', component: ToastersComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'select', component: SelectComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

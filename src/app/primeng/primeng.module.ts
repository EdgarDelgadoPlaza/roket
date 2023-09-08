import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';


import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';

import {ConfirmationService, MessageService} from 'primeng/api';
//import { FilterService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {CheckboxModule} from 'primeng/checkbox';
import { ImageModule } from 'primeng/image';
import {MultiSelectModule} from 'primeng/multiselect';
import {RadioButtonModule} from 'primeng/radiobutton';
import {BlockUIModule} from 'primeng/blockui';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {FileUploadModule} from 'primeng/fileupload';
import {InputNumberModule} from 'primeng/inputnumber';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';

import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';

import { AccordionModule } from 'primeng/accordion';


import { AutoCompleteModule } from 'primeng/autocomplete';

/**
   * Módulo usado para centralizar todas las referencias de primeNg por usar.
   */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   
  ],
  exports: [
    ToolbarModule,
    SidebarModule,
    ButtonModule,
    MenuModule,
    //PanelMenuModule,
    CardModule,
    //ConfirmDialogModule,
    //DialogModule,
    //ToastModule,
    //CheckboxModule,
    //MultiSelectModule,
    //RadioButtonModule,
    ImageModule,
    FileUploadModule,
    //InputNumberModule,
    //TabViewModule,
    //InputTextareaModule,
    PanelModule,
    DropdownModule,
    AccordionModule,
    //AutoCompleteModule
  ],
  providers: [
	
    //MessageService, //se agrega por el error acerca de error de injectables in promise
    
  ]
})
export class PrimengModule { }

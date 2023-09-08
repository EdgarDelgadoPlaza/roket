import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import { ImageModule } from 'primeng/image';
import {FileUploadModule} from 'primeng/fileupload';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion';

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
    CardModule,
    ImageModule,
    FileUploadModule,
    PanelModule,
    DropdownModule,
    AccordionModule,
  ],
  providers: [
  ]
})
export class PrimengModule { }

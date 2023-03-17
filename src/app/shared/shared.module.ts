import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [TabViewModule, PaginatorModule, InputTextModule],
})
export class SharedModule {}

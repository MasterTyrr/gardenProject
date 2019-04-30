import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { 
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule 
      } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { ProductsService } from './services/products.service';
import { ProductIndexComponent } from './components/product/product-index/product-index.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', children: [
  { path: '', component: ProductIndexComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'delete/:id', component: ProductDeleteComponent }
  ]
}
];
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ProductIndexComponent,
    ProductDetailComponent,
    ProductDeleteComponent
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

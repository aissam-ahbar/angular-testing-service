import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloService } from './service/hello.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  // Inject the Service Under Test
  providers: [HelloService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponent } from './sign-up/block.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { MyFormComponent } from './my-form/my-form.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserComponent,
    MenuComponent,
    MyFormComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

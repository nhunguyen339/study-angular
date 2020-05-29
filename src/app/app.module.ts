import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AttributeDirectivesComponent } from './template-component/attribute-directives/attribute-directives.component';
import { UserInputComponent } from './template-component/user-input/user-input.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StructuralDirectivesComponent } from './template-component/structural-directives/structural-directives.component';
import { CustumePipeComponent } from './template-component/custume-pipe/custume-pipe.component';
import { HeroPipe } from './pipes/hero.pipe';
import { FlyingHeroPipe } from './pipes/flying-hero.pipe';
import { TemplateInteractionComponent } from './template-component/template-interaction/template-interaction.component';
import { HeroParentComponent } from './template-component/template-interaction/data-parent-to-child/hero-parent/hero-parent.component';
import { HeroChildComponent } from './template-component/template-interaction/data-parent-to-child/hero-parent/hero-child/hero-child.component';
import { VersionParentComponent } from './template-component/template-interaction/detect-input/version-parent/version-parent.component';
import { VersionChildComponent } from './template-component/template-interaction/detect-input/version-parent/version-child/version-child.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectivesComponent,
    UserInputComponent,
    HighlightDirective,
    StructuralDirectivesComponent,
    CustumePipeComponent,
    HeroPipe,
    FlyingHeroPipe,
    TemplateInteractionComponent,
    HeroParentComponent,
    HeroChildComponent,
    VersionParentComponent,
    VersionChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire/compat";
import { CoreModule } from "./core/core.module";
import { PagesModule } from "./pages/pages.module";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "src/environments/environment";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        PagesModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

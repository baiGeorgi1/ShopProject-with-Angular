import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductPageComponent } from "./product-page/product-page.component";

@NgModule({
    declarations: [
        HomePageComponent,
        AboutComponent,
        ContactComponent,
        DashboardComponent,
        ProductPageComponent,
    ],
    imports: [CommonModule],
    exports: [
        HomePageComponent,
        AboutComponent,
        ContactComponent,
        DashboardComponent,
        ProductPageComponent,
    ],
})
export class PagesModule {}

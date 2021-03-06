import {
  BrowserModule,
} from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  BsDropdownModule,
  TabsModule,
  BsDatepickerModule,
  PaginationModule,
  ButtonsModule,
  ModalModule,
} from "ngx-bootstrap";
import { PopoverModule } from "ngx-popover";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { JwtModule } from "@auth0/angular-jwt";
import { NgxGalleryModule } from "@kolkov/ngx-gallery";
import { FileUploadModule } from "ng2-file-upload";
import { TimeAgoPipe } from "time-ago-pipe";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import {
  MatButtonModule,
  MatInputModule,
  MatDividerModule,
} from "@angular/material";
import { MaterialModule } from "./material.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { TextInputAutocompleteModule } from "angular-text-input-autocomplete";
import { SelectModule } from "ng2-select";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { MatCardModule } from "@angular/material/card";
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { NavComponent } from "./nav/nav.component";
import { AuthService } from "./_services/auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ErrorInterceptorProvider } from "./_services/error.interceptor";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { ListsComponent } from "./lists/lists.component";
import { MessagesComponent } from "./messages/messages.component";
import { appRoutes } from "./route";
import { MemberCardComponent } from "./members/member-list/member-card/member-card.component";
import { MemberDetailComponent } from "./members/member-list/member-detail/member-detail.component";
import { AlertifyService } from "./_services/alertify.service";
import { AuthGuard } from "./_guards/auth.guard";
import { UserService } from "./_services/user.service";
import { MemberDetailResolver } from "./_resolver/member-detail.resolver";
import { MemberListResolver } from "./_resolver/member-list.resolver";
import { MemberEditComponent } from "./members/member-list/member-edit/member-edit.component";
import { MemberEditResolver } from "./_resolver/member-edit.resolver";
import { PreventUnsavedChanges } from "./_guards/prevent-unsaved-changes.guard";
import { PhotoEditorComponent } from "./members/member-list/photo-editor/photo-editor.component";
import { ListResolver } from "./_resolver/lists.resolver";
import { MessagesResolver } from "./_resolver/messages.resolver";
import { MemberMessagesComponent } from "./members/member-list/member-messages/member-messages.component";
import { AdminPanelComponent } from "./admin/admin-panel/admin-panel.component";
import { HasRoleDirective } from "./_directives/hasRole.directive";
import { UserManagementComponent } from "./admin/user-management/user-management.component";
import { PhotoManagementComponent } from "./admin/photo-management/photo-management.component";
import { AdminService } from "./_services/admin.service";
import { RolesModalComponent } from "./admin/roles-modal/roles-modal.component";
import { FiltersComponent } from "./filters/filters.component";
import { FiltersService } from "./_services/filters.service";
import { BrandsResolver } from "./_resolver/brands.resolver";
import { ModelsResolver } from "./_resolver/models.resolver";
import { AnnouncesComponent } from "./announce/announces/announces.component";
import { AddAnnounceModalComponent } from "./announce/add-announce-modal/add-announce-modal.component";
import { ManufacturingDateResolver } from "./_resolver/manufacturingDates.resolver";
import { AnnounceService } from "./_services/announce.service";
import { BodiesResolver } from "./_resolver/bodies.resolver";
import { FuelsResolver } from "./_resolver/fuels.resolver";
import { ModelVersionsResolver } from './_resolver/modelVersions.resolver';
import { CountriesResolver } from './_resolver/countries.resolver';
import { ContactComponent } from './contact/contact.component';
import { AnnouncesResolver } from './_resolver/announces.resolver';
import { AnnouncePhotoEditorComponent } from './announce/announce-photo-editor/announce-photo-editor.component';
import { AnnounceDetailsPageComponent } from './announce/announce-details-page/announce-details-page.component';
import { AnnounceCardComponent } from './announce/announce-card/announce-card.component';
import { CarsComponent } from './cars/cars.component';
import { CarService } from './_services/car.service';
import { CarsResolver } from './_resolver/cars.resolver';
import { AnnounceDetailResolver } from './_resolver/announce-detail.resolver';
import { CarDetailResolver } from './_resolver/car-detail.resolver';
import { AgmCoreModule, AgmMap, MouseEvent, MapsAPILoader } from '@agm/core'; 
import { PollutionRulesResolver } from './_resolver/pollutionRules.resolver';
import { TransmissionsResolver } from './_resolver/transmissions.resolver';
import { GearboxesResolver } from './_resolver/gearboxes.resolver';
import { AnnounceManagementComponent } from './admin/announce-management/announce-management.component';
import { ContactService } from './_services/contact.service';
import { AddAnnouncePhotoModalComponent } from './announce/add-announce-photo-modal/add-announce-photo-modal.component';
import { SavedAnnouncesResolver } from './_resolver/saved-announces.resolver';
import { UserAnnouncesResolver } from './_resolver/user-announces.resolver';
import { PopularAnnouncesResolver } from './_resolver/popular-announces';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    TimeAgoPipe,
    MemberMessagesComponent,
    AdminPanelComponent,
    HasRoleDirective,
    UserManagementComponent,
    PhotoManagementComponent,
    AnnounceManagementComponent,
    RolesModalComponent,
    FiltersComponent,
    AnnouncesComponent,
    AddAnnounceModalComponent,
    ContactComponent,
    AnnouncePhotoEditorComponent,
    AnnounceDetailsPageComponent,
    AnnounceCardComponent,
    CarsComponent,
    AddAnnouncePhotoModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    NgxGalleryModule,
    FileUploadModule,
    MatFormFieldModule,
    MatButtonModule,
    MaterialModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatInputModule,
    TextInputAutocompleteModule,
    SelectModule,
    MatCardModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:44329"],
        blacklistedRoutes: ["localhost:44329//auth"],
      },
    }),
    AccordionModule.forRoot(),
    PopoverModule,
    AgmCoreModule.forRoot({  
      apiKey: 'AIzaSyA7Td4S5jVyDORMujJM65rshiSWHpRGNKo'  
    }), 
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    BrandsResolver,
    ModelsResolver,
    ModelVersionsResolver,
    ManufacturingDateResolver,
    BodiesResolver,
    FuelsResolver,
    CountriesResolver,
    AnnouncesResolver,
    PreventUnsavedChanges,
    SavedAnnouncesResolver,
    ListResolver,
    MessagesResolver,
    PopularAnnouncesResolver,
    AdminService,
    FiltersService,
    AnnounceService,
    AnnounceDetailResolver,
    CarService,
    CarsResolver,
    CarDetailResolver,
    GearboxesResolver,
    PollutionRulesResolver,
    TransmissionsResolver,
    ContactService,
    UserAnnouncesResolver
  ],
  entryComponents: [RolesModalComponent, AddAnnounceModalComponent, AddAnnouncePhotoModalComponent, AnnouncePhotoEditorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

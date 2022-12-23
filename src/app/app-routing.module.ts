import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FightingComponent } from './fighting/fighting.component';
import { FlipkartchaildComponent } from './flipkartchaild/flipkartchaild.component';
import { FlipkartlistComponent } from './flipkartlist/flipkartlist.component';
import { KothaComponent } from './kotha/kotha.component';
import { ObservablesComponent } from './observables/observables.component';
import { TimetableComponent } from './timetable/timetable.component';
import { WifeHusbendComponent } from './wife-husbend/wife-husbend.component';


const routes: Routes = [
  {
    path:"",redirectTo:"stutent-table",pathMatch:'full'
  },
{
  path:"flipkartlist",component:FlipkartlistComponent,pathMatch:'full'
  
},
{
  path:"flipkartDetails/:id",component:FlipkartchaildComponent,pathMatch:"full"
},
{
  path:"observables",component:ObservablesComponent,pathMatch:"full"
},

  {
    path:"Timetable",component:TimetableComponent,pathMatch:"full"
  },
  {
    path:"kotha",component:KothaComponent,pathMatch:"full"
  },
{
  path:"wife-husbend",component:WifeHusbendComponent ,pathMatch:'full'
},
{
  path:"marrigeDetails/:id",component:FightingComponent,pathMatch:"full"
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


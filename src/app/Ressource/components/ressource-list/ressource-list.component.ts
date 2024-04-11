import { Component, OnInit } from '@angular/core';
import { Ressource } from '../../models/ressource';
import { Options } from '../../models/options';
import { ResourceService } from '../../services/resource.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../../models/categorie';

@Component({
  selector: 'app-ressource-list',
  templateUrl: './ressource-list.component.html',
  styleUrls: ['./ressource-list.component.css']
})



export class RessourceListComponent implements OnInit {
  ressources: any[] = [];
  option: Options | undefined; 
  categorie: Categorie | undefined; 


  constructor(private route: ActivatedRoute, private resourceService: ResourceService,private router:Router) { }
  
 
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const optionString = params.get('option'); 
      if (optionString) {
        const option: Options = Options[optionString as keyof typeof Options]; 
        if (option !== undefined) {
          this.option = option;
          this.loadRessourcesByOption(this.option);
        } else {
          console.error('Option invalide:', optionString);
        }
      }
    });
  
  }

  loadRessourcesByOption(option: Options): void {
    this.resourceService.getResourcesByOption(option)
      .subscribe(
        (data: any) => {
          console.log('Ressources loaded successfully for option:', option, data);
          this.ressources = data;
        },
        (error: any) => {
          console.error('Error occurred while loading ressources for option:', option, error);
        }
      );
  }




    
  
  }
  
  
  
  

  
  
 


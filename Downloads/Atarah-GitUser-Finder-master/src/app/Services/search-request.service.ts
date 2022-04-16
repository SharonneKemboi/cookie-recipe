import { Injectable } from '@angular/core';
import { Users } from '../classes/users';
import { Repos } from '../classes/repos';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {

  user:Users;
  repos:Repos;

  constructor(private http:HttpClient) {

    this.user = new Users("",0,0,0,"","","");
    this.repos = new Repos("","","","",new Date());
   }

   getUserProfile(username:string){
    interface ApiResponse{
        name:string;
        login: string;
        url:string
        avatar_url:string;
        followers:number;
        following:number;
        public_repos:number;
    }

    let userUrl = 'https://api.github.com/users/'+username+'?client_id='+environment.clientId + "&client_secret="+environment.clientSecret;

    let promise = new Promise<void>((resolve,reject) =>{
      this.http.get<ApiResponse>(userUrl).toPromise().then
      (response => {
        this.user!= response;

        resolve()
      },
      error=>{
        this.user.name = "No Profile Match! Please Try Again"

        reject(error)
        })
      })
      return promise;
    }
    getUserRepo(username:string){
      interface ApiResponse{
        name:string;
        html_url:string;
        description:string;
        language:string;
        created_at:Date
        
      }
      let repoUrl = 'https://api.github.com/users/'+username+'/repos?order=created&sort=asc?client_id='+environment.clientId + '&client_secret='+environment.clientSecret;
      let promise = new Promise<void>((resolve,reject) =>{
        this.http.get<ApiResponse>(repoUrl).toPromise().then
        (response => {
            this.repos!= response;
            console.log(this.repos);
          resolve()
        },
        error=>{
          this.repos.name = "We couldn’t find any matching repositories"
  
          reject(error)
          })
        })
        return promise;

      }
}


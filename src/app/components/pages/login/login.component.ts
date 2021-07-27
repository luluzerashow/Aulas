import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../../shared/dialog-example/dialog-example.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginInterface } from './loginInterface';
import { Observable } from 'rxjs';
import users from '../../../../../db.json';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
// ta reclamando mas taa funcionando nao entendi sempre Cookie Service
export class LoginComponent implements OnInit {
  hide = true;
  cookieExists: boolean;
  userresult: boolean;
  gg = false;

  teste: string;

  listausuarios:{Nome:String,User:String}[] = users;

  loginusuarios$: Observable<LoginInterface[]>;

  constructor(
    private loginservice: LoginService,
    private cookie:CookieService,
    public dialog: MatDialog
    ) { }


  ngOnInit(): void {
    this.cookieExists = this.cookie.check('UsuarioCookie');
    if(this.cookieExists){
      this.cookie.delete('UsuarioCookie')
    }

  }

  Logar(user: string) {
    console.log("inicia loop");
    // trazendo apenas a parte de usuarios
    var lista = this.listausuarios["usuarios"];
    // console.log(lista[0].User);

    var fim = (lista.length);
    var i;
    for (i = 0; i < fim; i++) {
      var userdbjson = lista[i].User;
      if(user == userdbjson){
            this.gg = true;
            i = fim;     
      }
    }

    if(this.gg){
      var cookie = 'User-' + user;
      //Criando cookie
      this.cookie.set('UsuarioCookie',cookie,10)
      console.log("Usuario correto");
      //Navegando para outra pagina
        var url = location.href;
        // window.location.href = url +  "dashboard";
    }else{
      console.log("Usuario não encontrado");
      var title = 'Usuário não Cadastrado';
        var description = 'Talvez você não esteja cadastrado no sistema, verifique com o administrador!';
        var buttonclose = true;
        this.dialog.open(DialogExampleComponent, {data:{Title:title, Description: description,ButtonClose: buttonclose }});       
    }
  }
}





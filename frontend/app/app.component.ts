    import { Component } from '@angular/core';
    import { HttpClient ,HttpErrorResponse,HttpParams} from '@angular/common/http';
    import { environment } from 'src/environments/environment';
    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
      title = 'firstproject';     
        results:any;
        constructor(private httpClient:HttpClient){}
        extaxt="";
        taxtr="";

      public entrebox(val:string){

        console.log(val);

        this.taxtr+=val;

                }
        a="";
        b="";
        opr="";
        strln=this.taxtr.length;

        public solveEquation(){

      let i=0;
      let f=0;
      if(this.ISoperator(this.taxtr[0])&&this.taxtr[0]!="-"){this.taxtr="SyntaxError";return}

       if(this.taxtr==""){return;}
      while (i<this.taxtr.length){
          if(this.ISoperator(this.taxtr[i])){
            if(this.taxtr[0]=="-"&&i==0){f=i;}else{
            f=i; break;}
          }
          i++;
          
        }
        this.opr=this.taxtr[f];
        this.a+=this.taxtr.substring(0,f);
        this.b+=this.taxtr.substring(f+1,this.taxtr.length);

        
          
      this.extaxt=this.taxtr;
if(this.b=="0"&&this.opr=="/"){this.taxtr="Infinity";return}


    if(this.opr=='+'){this.opr='plus';}
      
      
      const serverUrl = environment.serverUrl;

        
        
      this.httpClient.get(serverUrl,{
      params:{
        x:this.a,op:this.opr, y:this.b

      },
      observe:'response'
    }
      ).subscribe(
    (response)=>{this.results=response.body;console.log(this.results,this.results.toString().length)   ;this.clenop() ; this.taxtr=this.results.toString();
    },
    (error:HttpErrorResponse)=>{alert(error.message)}

        );
        console.log(this.taxtr.length);

        
      }
      clean(){
        this.taxtr='';
        this.a ='';
        this.extaxt='';
        this.opr ='';
        this.b ='';
      }
      cleanterm(){
        let i=0;let f=0;
        while (i<this.taxtr.length){
          if(this.ISoperator(this.taxtr[i])){
            f=i; 
          }
          i++;
          
        }
        if(f!=0){
        this.taxtr=this.taxtr.substring(0,f+1);}else{        this.taxtr='';      }
        
      }
      delete(){
        if(this.taxtr.length==1){this.extaxt=""}
        this.taxtr= this.taxtr.substring(0,this.taxtr.length-1);
        this.a ='';
        this.opr ='';
        this.b ='';
      }
      clenop(){
        this.a ='';
        this.opr ='';
        this.b ='';
      }

    singlesolve(val:string){
      if((val=="%"||val=="/-"||val=="1/x"||val=="x^2"||val=="\u221A")&&(this.taxtr=="")){this.taxtr="Error";return}

        let i=0;

        while(i<this.taxtr.length){
        if(!this.ISoperator(this.taxtr[i])||this.taxtr[i]=='-'){
          
          this.a+=this.taxtr[i];i++;

        }}
        this.extaxt=this.a;
        if(((val=="&#8730")&&(parseFloat(this.a))<0)){this.taxtr="Error";return}
        if((val=="1/x")&&(this.a=="0")){this.taxtr="Infinity";return}

        this.opr=val;
    console.log(this.a);
          const serverUrlsingle = environment.serverUrlsingle;

      this.httpClient.get(serverUrlsingle,{
        params:{
        x:this.a,op:this.opr
    
        },
      observe:'response'
    }
      ).subscribe(
    (response)=>{this.results=response.body;console.log("done") ;this.clenop()  ;this.taxtr=this.results.toString();
    },
    (error:HttpErrorResponse)=>{alert(error.message)}
    
        );
      this.taxtr=this.taxtr;
    }
    ISoperator(c:string){
      let fl=false;
      switch(c)
      {
        case "+":fl= true;break;
        case "*":fl= true;break;
        case "-":fl= true;break;
        case "/":fl= true;break;
        default:fl=false;
      }
    return fl;
    }
    }



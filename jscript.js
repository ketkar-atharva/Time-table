let mon=document.getElementById("monday");
let tue=document.getElementById('tuesday');
let wed=document.getElementById('wednesday');
let thur=document.getElementById('thursday');
let fri=document.getElementById('friday');
let sat=document.getElementById('saturday');
let tt=document.getElementById('tt');
let display=1;
let day;
let b=document.querySelector('button');
b.addEventListener('click',showtt);


function showtt(){
    day=document.getElementById('text').value;
        if(day=="monday"){
        if(display==1){
        mon.style.display='block';
        tt.style.height='200px';
        display=0;
      }else{
          mon.style.display='none';
          tt.style.height='100px';
          display=1;
      }
    }
    if(day=="tuesday"){
        if(display==1){
        tue.style.display='block';
        tt.style.height='200px';
        display=0;
      }else{
          tue.style.display='none';
          tt.style.height='100px';
          display=1;
      }
    }
    if(day=="wednesday"){
        if(display==1){
        wed.style.display='block';
        tt.style.height='250px';
        display=0;
      }else{
          wed.style.display='none';
          tt.style.height='100px';
          display=1;
      }
    }
    if(day=="thursday"){
        if(display==1){
        thur.style.display='block';
        tt.style.height='250px';
        display=0;
      }else{
          thur.style.display='none';
          tt.style.height='100px';
          display=1;
      }
    }
    if(day=="friday"){
        if(display==1){
        fri.style.display='block';
        tt.style.height='200px';
        display=0;
      }else{
         fri.style.display='none';
          tt.style.height='100px';
          display=1;
      }
    }
    if(day=="saturday"){
      if(display==1){
      sat.style.display='block';
      tt.style.height='200px';
      display=0;
    }else{
      sat.style.display='none';
        tt.style.height='100px';
        display=1;
    }
  }
}


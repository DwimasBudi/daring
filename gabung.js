function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}
 flag=1
      function m()
      {
          if(flag==1)
              {
                  Ya.style.top=50
                  Ya.style.left=500
                  flag=2
              }
          else if(flag==2)
              {
                  Ya.style.top=455
                  Ya.style.left=450
                  flag=3
              }
          else if(flag==3)
              {
                  Ya.style.top=370
                  Ya.style.left=300
                  flag=4
              }
          else if(flag==4)
              {
                  Ya.style.top=70
                  Ya.style.left=300
                  flag=5
              }
          else if(flag==5)
              {
                  Ya.style.top=419
                  Ya.style.left=400
                  flag=6
              }
          else if(flag==6)
              {
                  Ya.style.top=100
                  Ya.style.left=430
                  flag=1
              }
      }
flag=1
      function f()
      {
          if(flag==1)
              {
                  No.style.top=45
                  No.style.left=450
                  flag=2
              }
          else if(flag==2)
              {
                  No.style.top=419
                  No.style.left=700
                  flag=3
              }
          else if(flag==3)
              {
                  No.style.top=370
                  No.style.left=300
                  flag=4
              }
          else if(flag==4)
              {
                  No.style.top=70
                  No.style.left=300
                  flag=5
              }
          else if(flag==5)
              {
                  No.style.top=419
                  No.style.left=700
                  flag=6
              }
          else if(flag==6)
              {
                  No.style.top=100
                  No.style.left=430
                  flag=1
              }
      }
var source = "hati.mp3"
var audio = document.createElement("audio");
 //
 audio.autoplay = true;
 //
 audio.load()
 audio.addEventListener("load", function() { 
     audio.play(); 
 }, true);
 audio.src = source;

if (window.matchMedia('(max-width: 600px)').matches)
{
    flag=1
      function f()
      {
          if(flag==1)
              {
                  Ya.style.top=200
                 Ya.style.left=300
                  flag=2
              }
          else if(flag==2)
              {
                  Ya.style.top=440
                  Ya.style.left=100
                  flag=3
              }
          else if(flag==3)
              {
                  Ya.style.top=370
                  Ya.style.left=250
                  flag=4
              }
          else if(flag==4)
              {
                  Ya.style.top=70
                  Ya.style.left=30
                  flag=5
              }
          else if(flag==5)
              {
                  Ya.style.top=440
                  Ya.style.left=100
                  flag=6
              }
          else if(flag==6)
              {
                  Ya.style.top=100
                  Ya.style.left=43
                  flag=1
              }
      }
}


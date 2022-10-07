class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder","Introduce tu nombre");
    this.titleImg = createImg("assets/title.png","Título del juego");
    this.playButton = createButton("Jugar");
    this.greeting = createElement("h2"); //h2= tamaño de la letra (lenguaje html)
  }
  setElementsposition(){
    this.input.position(width/2-110,height/2-80);
    this.titleImg.position(120,10);
    this.playButton.position(width/2-90,height/2-20);
    this.greeting.position(width/2-300,height/2-100);
  }

  hide(){
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handmousepressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide();
      this.playButton.hide();
      var message = ` Hola ${this.input.value()} </br>Espera a que se una otro jugador...`;
      this.greeting.html(message);
      player.name = this.input.value();
      player.index = 1; //El jugador va a tener un nombre y será el jugador 1
    })
  }
  display(){
    this.setElementsposition();
    this.handmousepressed();
  }

}

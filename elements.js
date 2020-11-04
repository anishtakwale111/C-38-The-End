class Elements{
    constructor(){

this.instruction1 = createElement("Press UP_ARROW to make your monkey jump");

this.instruction2 = createElement("Wait to feed your monkey when food approaches");

this.instruction3 = createElement("You can also press G or H to move your monkey ");

this.instruction4 = createElement("forward and backward respectively");

}

display(){
this.instruction1.position(100, 10)
this.instruction2.position(100, 30)
this.instruction3.position(100, 50)
this.instruction4.position(100, 70)
}
}

class Spaceship {
  constructor(name,crew,phasers,shields){
    this.name = name ;
    this.crew = crew ;
    this.phasers = phasers ;
    this.shields = shields ;
    this.cloaked = false ;
    this.warpDrive = "disengaged" ;
    if(crew.length === 0){
      this.docked = true ;
    }else {
      this.docked = false ;
    }
    this.phasersCharge = 'uncharged' ;
    this.notifyCrew();
  }

  // to have these two object types be
  // aware of one another we need to have
  // the ship become aware of it's crew
  // members when it's created. This will also require you to make sure a crew member becomes aware of
  // their ship when they are added to it.
  notifyCrew(){
    this.crew.forEach(crewMember => {
      crewMember.currentShip = this;
    });
  }
}

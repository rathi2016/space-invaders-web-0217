class CrewMember {
  constructor (position){
    this.position= position;
    this.currentShip = 'Looking for a Rig';
  }
// Crew members will also be unable
// to use their special abilities if
// they're not assigned to a ship.
// For example, a pilot cannot engageWarpDrive
// if he is not in a ship and, therefore, can't
// make the Kessel
//  Run in less than twelve parsecs
  engageWarpDrive(){
    if (this.position === "Pilot" && this.currentShip !== 'Looking for a Rig') {
          this.currentShip.warpDrive = "engaged!";
        }else{
          return "had no effect";
        }
  }

  setsInvisibility(){
    if (this.position === 'Defender' && this.currentShip !== 'Looking for a Rig') {
          this.currentShip.cloaked = true;
        }else{
          return "had no effect";
        }
  }

  chargePhasers(){
    if (this.position === 'Gunner' && this.currentShip !== 'Looking for a Rig') {
          this.currentShip.phasersCharge = 'charged!';
        }else{
          return "had no effect";
        }
  }
}

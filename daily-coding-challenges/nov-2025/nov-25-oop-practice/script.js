class Soldier {
  constructor(name, faction, currentWeapon, dbnoStatus) {
    this.name = name;
    this.faction = faction;
    this.currentWeapon = currentWeapon;
    this.dbnoStatus = dbnoStatus;
    this.weaponLoadout = []
  }
  activeReloadSuccess() {
    return (
      `For the ${this.faction}!` 
    )
  }
  pickUpAmmo() {
    return (
      `${this.name} picked up ammo`
    )
  }
  pickUpWeapon(weaponName) {
  this.weaponLoadout.push(weaponName)
  return (
    `${this.name} picked up ${weaponName}`
  )
  }
}

class Weapon {
  constructor(name, faction, ammoCapacity, ammoLeft, ammoType, execution) {
    this.name = name;
    this.faction = faction;
    this.ammoCapacity = ammoCapacity;
    this.ammoLeft = ammoLeft;
    this.ammoType = ammoType;
    this.execution = execution;
  }
}

let carmine = new Soldier('Carmine', 'COG', 'snub', true)
console.log(carmine.currentWeapon)
console.log(carmine.pickUpWeapon('Lancer'))
console.log(carmine.pickUpWeapon('Gnasher'))
console.log(carmine.pickUpWeapon('Snub'))
console.log(carmine.pickUpWeapon('Boomshot'))
console.log(carmine.weaponLoadout)

let drone = new Soldier('Drone', 'Locust', 'Hammerburst', false);

let torqueBow = new Weapon('Torque Bow', 'Locust', 6, 6, 'explosive', 'decapitation');
console.log(torqueBow.execution)

const weaponLoadout = [];
weaponLoadout[0] = new Weapon('Lancer', 'COG', 550, 350, 'ballistic', 'dismemberment');
weaponLoadout[1] = new Weapon('Gnasher', 'COG', 32, 24, 'ballistic', 'golf club');
weaponLoadout[2] = new Weapon('Snub', 'COG', 2, 1, 'ballistic', null);
weaponLoadout[3] = new Weapon('Smoke Grenade', 'COG', 2, 1, null, null)

//console.log(weaponLoadout[0].name)

for(let i = 0; i < weaponLoadout.length; i++) {
  console.log(weaponLoadout[i].name)
}

class Leader extends Soldier {
  constructor(name, faction, currentWeapon, dbnoStatus, isAssassinated) {
    super(name, faction, currentWeapon, dbnoStatus);
    this.isAssassinated = isAssassinated;
  }
}

let Hoffman = new Leader (
  'Hoffman',
  'COG',
  null,
  false,
  true,
)
console.log(Hoffman)

/*
class Weapon {
  constructor(name, faction, ammoCapacity, ammoLeft, ammoType, execution) {
    this.name = name;
    this.faction = faction;
    this.ammoCapacity = ammoCapacity;
    this.ammoLeft = ammoLeft;
    this.ammoType = ammoType;
    this.execution = execution;
  }
}
*/

let hammerOfDawn = new Weapon (
  'Hammer of Dawn',
  'COG',
  null,
  null,
  `uses an orbital beam`,
  'knee to the face'
)
hammerOfDawn.ammoType = `${hammerOfDawn.name} uses an orbital beam.`
console.log(hammerOfDawn.ammoType)
console.log(hammerOfDawn)

console.log(Hoffman instanceof Leader)
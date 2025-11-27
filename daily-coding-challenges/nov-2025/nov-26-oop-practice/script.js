class Soldier {
  constructor(name, faction, currentWeapon, weaponLoadout, health) {
  this.name = name;
  this.faction = faction;
  this.currentWeapon = currentWeapon;
  this.health = health;
  this.weaponLoadout = []
  }
  pickUpAmmo() {
    return `${this.name} picked up ammo.`
  }
  activeReloadSuccess() {
    return `${this.name} performed a perfect active reload.`
  }
  getDowned() {
    return `${this.character} got downed.`
  }
  getRevived() {
    return `${this.character} got revived.`
  }
  executeDownedPlayer() {
    return `${this.character} executed a player.`
  }
}

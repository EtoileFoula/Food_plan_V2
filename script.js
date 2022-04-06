let mass = 0;
let fat_rate = 0;
let activity_rate = 0;
let obj_fat = 0;
let obj_lean = 0;
let maintain_cal = 0;
let obj_fat_cal = 0;
let obj_lean_cal = 0;

mass = prompt("entrez votre poids");
fat_rate = prompt("entrez votre tx de graisse");
activity_rate = prompt("entrez votre coef activité");

function maintain() {
  maintain_cal = (370 + 21.6 * (1 - fat_rate) * mass) * activity_rate;
  return maintain_cal;
}

let a_mass = 0;
let a_fat_rate = 0;
let a_activity_rate = 0;
let obj_fat = 0;
let obj_lean = 0;
let maintain_cal = 0;
let obj_fat_cal = 0;
let obj_lean_cal = 0;

a_mass = prompt("entrez votre poids");
a_fat_rate = prompt("entrez votre tx de graisse");
a_activity_rate = prompt("entrez votre coef activité");

b_mass = parseInt(a_mass);
b_fat_rate = parseInt(a_fat_rate);
b_activity_rate = parseInt(a_activity_rate);

function maintain() {
  maintain_cal =
    (370 + 21.6 * (1 - b_fat_rate / 100) * b_mass) * b_activity_rate;
  return maintain_cal;
}

maintain();

console.log(maintain_cal);

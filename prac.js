let info = 'my no. is 677-4563 and frnd no. is 345-5678';
let reg = /\b(\d{3})-(?<as>\d{4})\b/g;
info = info.replace(reg, (match, grp1, grp2) => {
	return Number(grp1) * Number(grp2);
}); // doing some stuff
console.log(info);

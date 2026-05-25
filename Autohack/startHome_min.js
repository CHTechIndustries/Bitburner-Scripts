/** @param {NS} ns */
export async function main(ns) {
	ns.exec("autoHack.js", "home");
	// ns.exec("shareHome.js", "home", 1, 32);
	ns.exec("autoBackdoor.js", "home", 1);
}
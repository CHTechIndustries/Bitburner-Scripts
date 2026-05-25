/** @param {NS} ns **/
export async function main(ns) {
    const target = ns.args[0];

    if (!target) {
        ns.tprint("Usage: run hack.js SERVER");
        return;
    }

    while (true) {
        await ns.hack(target);
    }
}
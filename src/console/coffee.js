const grindBeans = () => {
    console.group();
    console.log("Grind Grind Grind");
    console.groupEnd();
};
const brew = () => {
    console.group();
    console.log("Brew Brew Brew");
    console.groupEnd();
};

export const makeCoffee = () => {
    console.group();
    console.log("Sleepy...");
    grindBeans();
    brew();
    console.groupEnd();
    console.log("Yay");
};

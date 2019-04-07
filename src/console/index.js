export * from "./coffee";
export * from "./various";

export const normal = () => {
    console.log("Hey World");
};

export const color = () => {
    console.log(
        "%cHey World",
        "color: green; font-size: large; font-weight: bold"
    );
};

export const timing = () => {
    console.time("demo");
    console.time("demo2");

    console.timeLog("demo");
    setTimeout(() => {
        console.timeEnd("demo");
        console.timeLog("demo2");
        setTimeout(() => {
            console.timeEnd("demo2");
        }, 1000);
    }, 1000);
};

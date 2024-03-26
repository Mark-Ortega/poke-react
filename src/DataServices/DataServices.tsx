import IPoke from "../Interfaces/IPoke";

export const GetData = async (pokemon: string | number) => {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    const data: IPoke = await promise.json();
    return data;
};
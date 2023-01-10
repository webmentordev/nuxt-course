export default defineEventHandler(async (event) => {

    // const { name } = getQuery(event);

    // const { age } = await readBody(event);

    
    // return { 
        //     message: `Hello there! ${name} and you are ${age}`,
        //     data: data
        // }
    
    //Create .env file and paste your Currencyapi.com Key.
    const { data } = await $fetch("https://api.currencyapi.com/v3/latest?apikey=" + process.env.CURRENCY_APIKEY)

    return data;
});
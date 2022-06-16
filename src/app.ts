import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import axios from "axios";
import fetch from 'node-fetch';

// export const handle = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//     const queries = JSON.stringify(event.queryStringParameters);

//     const getBreeds = async () => {
//         try {
//             return await axios.get('https://dog.ceo/api/breeds/list/all')
//         } catch (error) {
//             console.error(error)
//         }
//     }
//    let res= await getBreeds();
//     return {
//         statusCode: 200,
//         body: `Queries: ${res}`
//     }
// }
exports.handle =  async function(event: any, context: { logStreamName: any; }) {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))


    // axios({
    //   method: 'get',
    //   url: 'https://reqbin.com/echo/get/json',
    //   headers: { },
    //   proxy:false
    //   }).then(function (response) {
    //     console.log("Heade With Authentication :" + response);
    //     return response;
    //   })
    //   .catch(function (error) {
    //     console.log("Post Error : " +error);
    //     return error;
    //   }); 
 

    const url: string = 'https://reqbin.com/echo/get/json';

try {
    const response = await axios.get(url);
} catch (exception) {
    process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
}
  

    return context.logStreamName
  }
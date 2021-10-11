import axios from 'axios';

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjJlM2U1MzVkODdiZmYxMzBiOTJlZiIsIm5hbWUiOiJUYWxUIiwiaWF0IjoxNjMzODcwODI5LCJleHAiOjE2MzUwODA0Mjl9.VaTiwyqup-dO5YcnnYlSwCyfCGSvxxcxF70W0HQ0TFo';
const apiUrl = 'http://todo.etodo.xyz/api/v1';


// export const getData = () => {
//     const authAxios = axios.create({
//         baseURL: apiUrl,
//         headers: {
//             Authorization: `Bearer ${accessToken}`
//         }
//     })
//     authAxios.get('/tasks')
//     .then(response => {
//         console.log("wwwwwwwww",response);
        
//     })
//     return response
//     .catch(error => {
//         console.log(error)
//     })
// }
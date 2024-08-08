// const isLogin = () => 
// {
//     return localStorage.getItem('authToken') !== null;
// }
// export default isLogin;

export const isLogin = () => {
    const token = localStorage.getItem('authToken');
    return token !== null && token !== '';
}

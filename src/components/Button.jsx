// export const Button = () => {
//     return <button className="bg-blue-500 text-white rounded-full py-2 px-5">Add to cart</button>
// };

// export const Button1 = () => {
//     return <button className="bg-green-200 m-1">Login</button>
// };

// export const Button2 = () => {
//     return <button>Register</button>
// };

function Button({lable}){
    return <button className="border-2 border-orange-500 py-2 px-5 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white">{lable}</button>
}

export default Button;
// function Btn(){
 
//     const clickHandler=
//         () => {
//         alert("Button has been clicked")

//     }
//     return (
//         <div>
//             <button onClick={clickHandler}>
//                 Click me</button>
//         </div>);

// }
// export default Btn

function Btn(){
 
    const clickHandler=
        () => {
        alert("Mouse has hovered")

    }
    return (
        <div>
            <button onMouseOver={clickHandler}>
                Click me</button>
        </div>);

}
export default Btn
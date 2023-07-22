function ModeToggler(){

    let darkModeOn=true
    const darkMode=<h1>Dark mode is on</h1>
    const lightMode= <h1>Light Mode is on</h1>

    function changeMode(){
        darkModeOn=!darkModeOn
        if(darkModeOn===true){
            console.log("Dark mode on")
        } else{
            console.log("Light mode is on")
        }
       
    }
    return (
        <div>
            {darkModeOn ? darkMode : lightMode}

            <button onClick={changeMode}>Click</button>
        </div>

    )

}
export default ModeToggler
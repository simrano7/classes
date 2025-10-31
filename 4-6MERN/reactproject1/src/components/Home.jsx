function Home(){
    // JS
    var name = "Simran";
    let cssobj = {color:"blue",backgroundColor:"red"}
        return(
            // jsx
            <div>
            <h1  style={{color:"red",backgroundColor:"blue"}}>Inline Css</h1>
            <h1  style={cssobj}>Internal Css</h1>
            <h1 id="extra">External  Css</h1>
            </div>
        )
}
export default Home;




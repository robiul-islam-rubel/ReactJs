import "./App.css";
import "./style.scss";
import data from "./data.js";
import Product from "./product.js";
function App() {  
    return (
          <div className="main-container">
            <h1>This is a simple cart</h1>
            <div className="products max-width">
             {
                data.map((product)=>{
                    return (
                        <Product data = {product}/>
                    )
                })
             }
            </div>
        </div>
      );
      
}

export default App;

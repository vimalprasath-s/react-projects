import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";

// https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurants

// We need to wrap all the components into a main app component, let's name it as AppLayout
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
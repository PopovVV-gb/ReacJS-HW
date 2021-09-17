import { Link } from "react-router-dom";

function Main(props) {
    return (
        <div>
            <h1>It's the main page</h1>
            <div>
                <Link to="/login">вход</Link>
            </div>
            <div>
                <Link to="/signup">регистрация</Link>
            </div>
        </div>

    )
}

export default Main;
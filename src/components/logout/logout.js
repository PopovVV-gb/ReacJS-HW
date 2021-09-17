import firebase from "firebase"
import { useState } from "react";

export const LogOut = () => {
    const [error, setError] = useState("");
    const handlelogout = async () => {
        try {
            await firebase.auth().signOut();
        }
        catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <h3>Вы действительно хотите выйти?</h3>
            {error && <p>{error}</p>}
            <button onClick={handlelogout}>Выйти</button>
        </div>
    )
}
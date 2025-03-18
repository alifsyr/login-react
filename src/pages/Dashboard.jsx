import Child from "../components/Child";
import TableWorldBank from "../components/TableWorldBank";
import ThemeContext from "../context/ThemeContext";

function Dashboard({ email }) {
    const userName = email.split('@')[0];
    return (
        <div>
            <ThemeContext.Provider value="light">
                <Child/>
            <h1>Dashboard Page</h1>
            <TableWorldBank />
            </ThemeContext.Provider>

        </div>
    )
}

export default Dashboard;
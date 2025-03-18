import useFetch from "../hooks/useFetch";

function TableWorldBank() {
    const {data: bankdata, loading, error} = useFetch("https://api.worldbank.org/v2/country?format=json");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center" }}>World Bank</h1>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "white", color: "black" }}>Code</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "white", color: "black" }}>iso2code</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "white", color: "black" }}>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {bankdata.map((bankdata) => (
                        <tr key={bankdata.id}>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{bankdata.id}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{bankdata.iso2Code}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{bankdata.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableWorldBank;
function Dashboard({ email }) {
    const userName = email.split('@')[0];
    return (
        <div>
            <h1>Dashboard Page</h1>
            <h1>Welcome, {userName}!</h1>
        </div>
    )
}

export default Dashboard;
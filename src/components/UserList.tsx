import React, {useEffect, useState} from 'react'

// Define Typescript type for a user
type User = {
    id: number,
    name: string,
    email: string,
    username: string,
}
export const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [refresh, setRefresh] = useState<number>(0); // State to trigger re-fetch
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc'); // Sorting state

    const fetchUsers = async () => {
        setLoading(true); // to show loading word
        setError(null); // to clean all error before working fetch
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) throw new Error("Failed to fetch users");
            // if(response.status !== 404) throw new Error("Failed to fetch users");
            const data: User[] = await response.json();
            setUsers(data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false)
        }
    };
    // useEffect with `refresh` dependency -> Runs when `refresh` changes
    useEffect(() => {
        fetchUsers();
    }, [refresh]); // Runs when `refresh` changes

    // useEffect for auto-refresh every 10 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setRefresh((prev: number) => prev + 1)
        }, 10000);
        return () => clearInterval(intervalId) // Cleanup
    }, []);

    // Sort users based on sortOrder
    const sortedUsers = [...users].sort((a, b) =>
        sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

    return (
        <div style={{padding: '10px', textAlign: "center"}}>
            <h1> 👥User List (Auto-refresh every 10s)</h1>
            <button onClick={() => setRefresh(prev => prev + 1)} disabled={loading}>
                🔃 Refresh now
            </button>
            <button onClick={() => setSortOrder(sortOrder === 'asc' ? "desc" : 'asc')} style={{marginLeft: "10px"}}>
                🔃 Sort: {sortOrder === 'asc' ? "A-Z" : "Z-A"}
            </button>
            {loading && <p>Loading...</p>}
            {error && <p style={{color: "red"}}>Error : {error}</p>}
            <ul>
                {sortedUsers.map((user: User) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> ({user.username} - {user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default UserList

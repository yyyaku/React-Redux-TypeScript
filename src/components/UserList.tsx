import React, { useEffect } from "react";
import { useTypesSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";

const UserList: React.FC = () => {
    const { users, error, loading } = useTypesSelector((state) => state.user);
    const { fetchUsers } = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <h1>Идет загрузка...</h1>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default UserList;

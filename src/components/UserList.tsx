import React from "react";
import { useTypesSelector } from "./hooks/useTypeSelector";

const UserList: React.FC = () => {
    const { users, error, loading } = useTypesSelector((state) => state.user);
    return <div></div>;
};

export default UserList;

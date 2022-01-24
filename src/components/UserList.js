import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

export default function UserList(props) {
  return (
    <div>
      <table style={{ width: "100%", border: "1px solid black" }}>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Avatar</th>
        </tr>
        {props.users.map((user) => (
          <tr key={user.id}>
            <td className={styles.td}>{user.id}</td>
            <td className={styles.td}>{user.first_name}</td>
            <td className={styles.td}>{user.last_name}</td>
            <td className={styles.td}>{user.email}</td>
            <td>
              <Image
                src={user.avatar}
                alt={`${user.email}`}
                width={100}
                height={100}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

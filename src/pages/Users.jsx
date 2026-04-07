import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LEVELS = [
  { id: 1, name: "Basic" },
  { id: 2, name: "Pro" },
  { id: 3, name: "Expert" },
];

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();

      // 조회한 데이터를 가공하여 새로운 속성(level) 추가
      data.forEach((user) => {
        user.level = LEVELS[Math.floor(Math.random() * LEVELS.length)].name;
      });
      setUsers(data);
    };
    getUsers();
  }, []);

  const goDetail = (user) => {
    // 사용자가 goDetail 버튼을 눌렀을 때 동작해야할 추가적인 로직 구현
    // 예 : GA 이벤트 트래킹 로직, 유효성 검증 등
    if (user.level === "Basic") {
      alert("Basic 레벨은 보기 불가능합니다.");
      return;
    }
    navigate(`/users/${user.id}?level=${user.level}`);
  };

  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.map((user) => (
          <section key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.level}</p>

            {/* navigate를 이용하여 로직적으로 처리한 이후에 이동하는 방법 */}
            <button onClick={() => goDetail(user)}>View Details</button>

            {/* Link 태그를 사용해서 바로 화면이동하는 방법 */}
            {/* <Link to={`/users/${user.id}`}>View Details</Link> */}

            <hr />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Users;

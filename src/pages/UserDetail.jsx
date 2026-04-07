import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const level = searchParams.get("level");

  useEffect(() => {
    if (level === "Basic") {
      alert("Basic 레벨은 보기 불가능합니다.");
      navigate("/users");
      return;
    }
    const getUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
      );
      const data = await response.json();
      setUser(data);
    };
    getUser();
  }, [userId, level, navigate]);

  const goBack = () => {
    // navigate("/users");
    navigate(-1);
  };

  return (
    <div>
      <button onClick={goBack}>Back</button>
      <UserInfo user={user} />
      <LevelView level={level} />
    </div>
  );
};

const UserInfo = ({ user }) => {
  return (
    <>
      <h1>UserDetail : {user?.id}</h1>
      <div>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
        <p>{user?.website}</p>
      </div>
      <hr />
    </>
  );
};

const LevelView = ({ level }) => {
  switch (level) {
    case "Expert":
      return <ExpertView />;
    case "Pro":
      return <ProView />;
    case "Basic":
      return <BasicView />;
  }
};

const ExpertView = () => {
  return (
    <div>
      <h1>ExpertView</h1>
      <p>ExpertView is a view for expert users</p>
    </div>
  );
};

const ProView = () => {
  return (
    <div>
      <h1>ProView</h1>
      <p>ProView is a view for pro users</p>
    </div>
  );
};

const BasicView = () => {
  return (
    <div>
      <h1>BasicView</h1>
      <p>BasicView is a view for basic users</p>
    </div>
  );
};

export default UserDetail;

import { useAccountContext } from "../../logic/Account.Provider";

const Account = () => {
  const user = useAccountContext();

  console.log(user);

  return (
    <div className="py-5">
      <div className="my-4 container-fluid">
        <h1>Account</h1>
        <p>
          Signed in as <span className="text-primary">{user.email}</span>
        </p>
      </div>
    </div>
  );
};

export default Account;

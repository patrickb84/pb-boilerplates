import { createContext, useContext, useEffect, useState } from 'react';
import AccountController from './Account.Controller';

const AccountContext = createContext(null);

const AccountProvider = props => {
  let user = AccountController().activeUser;
  
  return (
    <AccountContext.Provider value={user}>
      {props.children}
    </AccountContext.Provider>
  );
};

export const useAccountContext = () => {
  return useContext(AccountContext);
};

export default AccountProvider;

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import getErrorMessage from '../../helpers/errorMessages';
import { Link, useHistory } from 'react-router-dom';
import UsersInterface from '../../models/users';

// import { getInfoByType } from 'services/info';
// import Info from 'services/info/models/info-interface';
import IUsers from '../../models/users';

import { getAllUsers } from '../../services/users';
import {
  Container,
  Features,
  LoginButton,
  ButtonWrapper,
  MenuItemWrapper,
  ButtonContainer,
} from './style';

const landingPage: React.FC = () => {
  const [users, setusers] = useState<IUsers[]>();
  const [showUsers, setShowUsers] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UsersInterface>();

  const history = useHistory();

  const DropdownUsers = () => setShowUsers(!showUsers);

  const setUser = (user: any): void => {
    setSelectedUser(user);
  };

  // if (loading) return <LoadingBg />;
  // if (error) return <Error type="LoadFail" />;

  const getLadingpageContent = async () => {
    try {
      const data = await getAllUsers();
      console.log(data);
      setusers(data);
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      toast.error(errorMessage);
    }
  };

  const submitUser = () => {
    if (selectedUser) {
      const userLocalStorage = {
        id: selectedUser.id,
        name: selectedUser.name,
      };
      localStorage.setItem('all-in-one-user', JSON.stringify(userLocalStorage));
      history.push(`/todos`);
    }
  };

  useEffect(() => {
    getLadingpageContent();
  }, []);

  return (
    <Container>
      <Features>
        <div>
          <div className="title">
            <h2>
              <strong>All In One - Project</strong> para aprofundar o
              conhecimento!
            </h2>
          </div>
          {users && (
            <>
              <ButtonContainer>
                <ButtonWrapper onClick={DropdownUsers}>
                  {!selectedUser
                    ? 'Selecione o seu usuário:'
                    : selectedUser.name}
                </ButtonWrapper>
              </ButtonContainer>
              {showUsers &&
                users.map((user) => {
                  return (
                    <label key={user.id}>
                      <MenuItemWrapper>
                        <input
                          type="radio"
                          onClick={() => {
                            setUser(user), setShowUsers(!showUsers);
                          }}
                          value={user.name}
                        />
                        {user.name}
                      </MenuItemWrapper>
                    </label>
                  );
                })}
            </>
          )}
          <div className="container-btn">
            {selectedUser && (
              <LoginButton onClick={() => submitUser()}>Entrar</LoginButton>
            )}
          </div>
        </div>
      </Features>
    </Container>
  );
};

export default landingPage;

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import getErrorMessage from '../../helpers/errorMessages';
import { useHistory } from 'react-router-dom';
import UsersInterface from '../../models/users';
import LoadingBg from '../../components/Loading';

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
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const DropdownUsers = () => setShowUsers(!showUsers);

  const setUser = (user: IUsers): void => {
    setSelectedUser(user);
  };

  const getLadingpageContent = async () => {
    try {
      const data = await getAllUsers();
      setusers(data);
      setLoading(true);
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
      {loading ? (
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
      ) : (
        <LoadingBg />
      )}
    </Container>
  );
};

export default landingPage;

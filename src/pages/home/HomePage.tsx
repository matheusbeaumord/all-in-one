import React, { useState } from 'react';
import { Section, Title, MenuBox } from './style';
import LoadingBg from '../../components/Loading';
import { TabList, TabContext, TabPanel } from '@material-ui/lab';
import { Tab, Box } from '@material-ui/core';
import TodosPage from '../todosPage/TodosPage';
import PostsPage from '../postsPage/PostsPage';
import AlbumsPage from '../albumsPage/AlbumsPage';

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('1');

  const handleChange = (event: any, newValue: React.SetStateAction<string>) => {
    setValue(newValue);
  };

  return (
    <Section>
      {loading ? (
        <>
          <Title>
            <strong>Home</strong>
          </Title>
          <MenuBox>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="TO-DOs" value="1" />
                    <Tab label="POSTAGENS" value="2" />
                    <Tab label="ALBUNS" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">{<TodosPage />}</TabPanel>
                <TabPanel value="2">{<PostsPage />}</TabPanel>
                <TabPanel value="3">{<AlbumsPage />}</TabPanel>
              </TabContext>
          </MenuBox>
        </>
      ) : (
        <LoadingBg />
      )}
    </Section>
  );
};

export default HomePage;

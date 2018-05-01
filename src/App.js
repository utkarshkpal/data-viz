import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Seasons from './container/season';
import TeamWise from './container/teamWise';
import BatsmenWise from './container/batsmenWise';

import teamData from './assets/data/json/match_team.json';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo">
              <h1>IPL Dashboard</h1>
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            />
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item key="1">
                  <Link to="/">Season wise Analysis</Link>
                </Menu.Item>

                <Menu.Item key="2">
                  <Link to="/batsmen">Top Batsmen</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/wins">Team Wins</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280
                }}
              >
                <Route exact path="/" component={Seasons} />
                <Route path="/batsmen" component={BatsmenWise} />
                <Route
                  path="/wins"
                  render={() => <TeamWise data={teamData} />}
                />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;

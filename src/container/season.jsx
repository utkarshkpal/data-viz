import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Table, Icon, Divider } from 'antd';
import { Select } from 'antd';

import seasonList from '../assets/data/json/season_list.json';
import teamData from '../assets/data/json/match_team.json';
import { Menu, Dropdown } from 'antd';
import PieChart from '../component/Piechart';

import '../assets/styles/season.css';

const Option = Select.Option;

class Seasons extends Component {
  state = {
    teamData: teamData,
    selectedSeason: '2008',
    filteredData: []
  };

  componentDidMount() {
    this.filterDataBySeason();
  }

  filterDataBySeason = () => {
    let filteredData = this.state.teamData.filter(elem => {
      return elem.season == this.state.selectedSeason;
    });
    this.setState({ filteredData });
  };
  // static getDerivedStateFromProps(nextProps) {
  //   console.log(nextProps);
  //   console.log('getDerivedStateFromProps');
  // }

  // filterData = () => {
  //   const toremove = [
  //     'toss_wins',
  //     'toss_win_bat_first',
  //     'toss_win_field_first',
  //     'bat_first_win_match',
  //     'field_first_win_match'
  //   ];
  //   teamData.map(elem => {
  //     return toremove.forEach(remove => {
  //       delete elem[remove];
  //     });
  //   });
  //   return teamData;
  // };

  render() {
    return (
      <div>
        <Row style={{ MarginBottom: '25px' }}>
          <Col span={24}>
            <div className="head">
              <span className="select">Select Season </span>
              <Select
                defaultValue="2008"
                style={{ width: 120 }}
                onChange={value => {
                  this.setState({ selectedSeason: value }, () => {
                    this.filterDataBySeason();
                  });
                }}
              >
                <Option value="2008">Season 1</Option>
                <Option value="2009">Season 2</Option>
                <Option value="2010">Season 3</Option>
                <Option value="2011">Season 4</Option>
                <Option value="2012">Season 5</Option>
                <Option value="2013">Season 6</Option>
                <Option value="2014">Season 7</Option>
                <Option value="2015">Season 8</Option>
                <Option value="2016">Season 9</Option>
              </Select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Table columns={columns} dataSource={this.state.filteredData} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <PieChart
              filteredData={this.alterDataForPieChart(this.state.filteredData)}
            />
          </Col>
        </Row>
      </div>
    );
  }

  alterDataForPieChart = data => {
    return data.map(elem => {
      return { name: elem.team, value: elem.wins };
    });
  };
}

const columns = [
  {
    title: 'Team',
    dataIndex: 'team',
    key: 'team'
  },
  {
    title: 'Matches',
    dataIndex: 'matches',
    key: 'matches'
  },
  {
    title: 'Wins',
    dataIndex: 'wins',
    key: 'wins'
  },
  {
    title: 'Losses',
    dataIndex: 'losses',
    key: 'losses'
  },
  {
    title: 'Pts',
    dataIndex: 'pts',
    key: 'pts'
  }
];

export default Seasons;

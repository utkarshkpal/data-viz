import React, { Component } from 'react';
import { Row, Col, Select } from 'antd';

import Linechart from '../components/Linechart';

const Option = Select.Option;

class TeamWise extends Component {
  state = {
    rawData: this.props.data,
    teams: [],
    selectedTeam: 'Rajasthan Royals',
    filteredData: []
  };

  componentDidMount() {
    this.setTeamNames();
    this.filterDataByTeamName();
  }

  setTeamNames = () => {
    const teams = Array.from(
      new Set(
        this.state.rawData.map(elem => {
          return elem.team;
        })
      )
    );

    this.setState({
      teams
    });
  };

  filterDataByTeamName = () => {
    let filteredData = this.state.rawData.filter(elem => {
      return elem.team == this.state.selectedTeam;
    });
    this.setState({ filteredData });
  };

  handleSelectChange = value => {
    this.setState({ selectedTeam: value }, () => {
      this.filterDataByTeamName();
    });
  };

  alterDataForLineChart = data => {
    return data.map(elem => {
      return { name: elem.season, wins: elem.wins };
    });
  };

  render() {
    let { teams, filteredData } = this.state;

    return (
      <div className="team-wise">
        <Row>
          <Col span={24}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
              }}
            >
              <span>
                <h2>Team Wins </h2>
              </span>
              <span>
                <span style={{ marginRight: '10px' }}>Select Team </span>
                {teams && (
                  <Select
                    defaultValue={'Rajasthan Royals'}
                    style={{ width: 180 }}
                    onChange={this.handleSelectChange}
                  >
                    {teams.map(team => {
                      return (
                        <Option key={team} value={team}>
                          {team}
                        </Option>
                      );
                    })}
                  </Select>
                )}
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={6} />
          <Col span={24}>
            <Linechart data={this.alterDataForLineChart(filteredData)} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default TeamWise;

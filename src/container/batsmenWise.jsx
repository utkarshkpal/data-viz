import React, { Component } from 'react';
import { Row, Col, Select, Table } from 'antd';
import batsmenData from '../assets/data/json/batsmen';
import SimpleBarChart from '../components/SimpleBarChart';
const Option = Select.Option;

class batsmen extends Component {
  state = {
    rawBatsmenData: batsmenData,
    seasons: [],
    selectedSeason: '2008',
    filteredData: []
  };

  componentDidMount() {
    this.setSeason();
    this.filterDataBySeasonName();
  }

  filterDataBySeasonName = () => {
    let filteredData = this.state.rawBatsmenData.filter(elem => {
      return elem.season == this.state.selectedSeason;
    });
    this.setState({ filteredData });
  };

  alterDataForBarChart = data => {
    return data.map(elem => {
      return { batsman: elem.batsman, Average: elem.Avg, StrikeRate: elem.SR };
    });
  };

  setSeason = () => {
    const seasons = Array.from(
      new Set(
        this.state.rawBatsmenData.map(elem => {
          return elem.season;
        })
      )
    );

    this.setState({
      seasons
    });
  };

  handleSelectChange = value => {
    this.setState({ selectedSeason: value }, () => {
      this.filterDataBySeasonName();
    });
  };

  render() {
    const { seasons, filteredData } = this.state;
    return (
      <div className="batsmen-wise">
        <Row>
          <Col span={24}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
              }}
            >
              <h2>Top Batsmen</h2>
              <span>
                <span style={{ marginRight: '10px' }}>Select Season </span>
                {seasons && (
                  <Select
                    defaultValue={'Season 1'}
                    style={{ width: 180 }}
                    onChange={this.handleSelectChange}
                  >
                    {seasons.map((season, index) => {
                      return (
                        <Option key={season} value={season}>
                          {`Season ${index + 1}`}
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
          <SimpleBarChart data={this.alterDataForBarChart(filteredData)} />
        </Row>
        <Row>
          <Col span={24}>
            <Table columns={columns} dataSource={this.state.filteredData} />
          </Col>
        </Row>
      </div>
    );
  }
}

const columns = [
  {
    title: 'Batsman',
    dataIndex: 'batsman',
    key: 'batsman'
  },
  {
    title: 'Matches',
    dataIndex: 'matches',
    key: 'matches'
  },
  {
    title: 'Balls Faced',
    dataIndex: 'balls_faced',
    key: 'balls_faced'
  },
  {
    title: 'Runs',
    dataIndex: 'batsman_runs',
    key: 'batsman_runs'
  },
  {
    title: '4s',
    dataIndex: '4s',
    key: '4s'
  },
  {
    title: '6s',
    dataIndex: '6s',
    key: '6s'
  },
  {
    title: 'Avg',
    dataIndex: 'Avg',
    key: 'Avg'
  },
  {
    title: 'SR',
    dataIndex: 'SR',
    key: 'SR'
  }
];

export default batsmen;

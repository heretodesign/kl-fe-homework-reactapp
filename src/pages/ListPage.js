import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Columns, Column } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
const paginate = require("paginate-array")


class ListPage extends React.Component {
    state = {
        campaigns: [],
        isLoading: true
    }

    // componentDidMount() {
    //   axios.get('./campaigns.json')
    //     .then(response => {
    //         let data = [...response.data];
    //         this.setState({
    //           campaigns: data
    //           isLoading: false
    //         });
    //         console.log(this.state.campaigns)
    //     })
    //     .catch(error => {
    //         console.log('ERROR: ', error)
    //     })
    // }
    componentDidMount = async (e) => {
      let response = await axios.get('./campaigns.json')
        .then(response => {
          this.setState({
            campaigns: response.data,
            isLoading: false
          })
        })
      .catch(error => {
        console.log('ERROR: ', error)
      })
    }


    render() {
       const { campaigns, isLoading } = this.state;
       console.log(this.state.campaigns);
        return (
          <div>
            <section className="section is-paddingless-horizontal">
                <div className="container grid is-large notification">
                    <div className="firstsection">
                        <div className="columns">
                          <div className="column is-">
                            <div className="columns">
                              <div className="column is-half">
                                <input className="input is-black" type="text" placeholder="Start Date" />
                              </div>
                              <div className="column is-half">
                                <input className="input is-black" type="text" placeholder="End Date" />
                              </div>
                            </div>
                          </div>
                          <div className="column">
                            <div className="columns">
                              <div className="column is-half is-offset-4 is-8">
                                <input className="input is-black" type="text" placeholder="Search by name" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="columns">
                            <div className="column" id="tablelisttask">
                              <table className="table is-mobile">
                                <thead>
                                  <tr>
                                    <th  className="has-background-link"><abbr title="name" className="is-3 has-text-white">Name</abbr></th>
                                    <th  className="has-background-link"><abbr title="startDate" className="is-3 has-text-white">Start Date</abbr></th>
                                    <th  className="has-background-link"><abbr title="endDate" className="is-3 has-text-white">End Date</abbr></th>
                                    <th  className="has-background-link"><abbr title="active" className="is-3 has-text-white">Active</abbr></th>
                                    <th  className="has-background-link"><abbr title="budget" className="is-3 has-text-white">Budget</abbr></th>
                                  </tr>
                                </thead>
                                { isLoading &&
                                  <tbody>
                                    {
                                      campaigns.map(campaign => (
                                        <tr className="is-5" key={campaign.id}>
                                          <td className="is-6">{ campaign.name }</td>
                                          <td className="is-6">{ campaign.startDate }</td>
                                          <td className="is-5">{ campaign.endDate }</td>
                                          <td className="is-5">{ campaign.active }</td>
                                          <td className="is-5">{ campaign.budget }</td>
                                        </tr>
                                      ))
                                    }
                                  </tbody>
                                }
                              </table>
                             </div>
                          </div>
                        </div>
                     </div>
                </div>
            </section>
        </div>
    );
  }
}


export default ListPage

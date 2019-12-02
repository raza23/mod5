import React, {Component,Fragment} from 'react'
import Sidebar from './sidebar'
import Search from './search'
import Content from './content'


const orgs = 'http://localhost:3000/api/v1/organizations'

class OrganizationContainer extends Component {

    state = {
      organizations: [],
      term: '',
      selectedOrganization: {},
      
      
    }

    componentDidMount() {
        fetch(orgs)
        .then(res => res.json())
        .then(orgs_fetch => 
            this.setState({organizations: orgs_fetch}))
    }

    handleSearch = (e) => {
        this.setState({term: e.target.value})
        // console.log(this.state.term)
      }

      detail = (id) => {
        this.setState({
          selectedOrganization: this.state.organizations.find(org => org.id === id),
          // selectedNote: note,
          edit: false
        })
      }

      render() {
        const filteredOrgs = this.state.organizations.filter(org => org.name.includes(this.state.term))
        return (
          <Fragment>

            <Search searchby={this.state.search} handleSearch={this.handleSearch} />
            <div className='container'>
              
              <Sidebar orgs={filteredOrgs} 
              detail={this.detail}
              
              />
              <Content org={this.state.selectedOrganization} 
              
            //   SaveEdit = {this.SaveEditNote}
            //   edit={this.state.edit}
            //   handleEdit={this.handleEdit}
            //   deleteNote = {this.DeleteNote}
            //   newNote={this.newNote}
              />
            </div>
          </Fragment>
        );
      }
    }


export default OrganizationContainer
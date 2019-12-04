import React from 'react'; 

import { Grid, Form, Header, Segment } from 'semantic-ui-react'; 
import { withRouter } from 'react-router-dom'; 

const USERS_URL = 'http://localhost:3000/api/v1/users'

class SignUpForm extends React.Component {
    state = {
        name: '', 
        username: '', 
        password: '', 
        
    }

    

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        const reqObj = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                user: {
                    name: this.state.name,
                    username: this.state.username, 
                    password: this.state.password,
                    
                }
            })
        }

        fetch(USERS_URL, reqObj)
        .then(response => response.json())
        .then(user => {
            localStorage.setItem('user_id', user.id)
            this.props.history.push('/home')
        })
    }

    render() {
        return (
            <Grid  textAlign='center' style={{ height: '85vh' }} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 600 }}>
                    <Segment>
                        <Segment>
                            <Header as='h2' color='black'>Sign Up</Header>
                        </Segment>
                        <br></br>
                        
                        <br></br>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group widths='equal'>

                                <Form.Input label='Name' name='name' value={this.state.name} placeholder='Type Name' onChange={this.handleChange}/> 
                                <Form.Input label='Username' name='username' value={this.state.username} placeholder='Type Username' onChange={this.handleChange}/>
                                <Form.Input label='Password' name='password' value={this.state.password} placeholder='Type Password' onChange={this.handleChange}/> 
                            </Form.Group>
                            <br></br>
    
                            <br></br>
                            <Form.Button color='blue'>Submit</Form.Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

export default withRouter(SignUpForm)
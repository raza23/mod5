import React from 'react'; 
// import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'; 
import { Grid, Header, Segment, Message, Icon } from 'semantic-ui-react'; 
import { Form, Button, InputGroup } from 'react-bootstrap'; 

import { Link, withRouter } from 'react-router-dom'; 
const LOGIN_URL = 'http://localhost:3000/api/v1/orglogin'

class AuthForm extends React.Component {

    state = {
        username: '', 
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const reqObj = {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify({ organization: this.state })
        }
    
        fetch(LOGIN_URL, reqObj)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            debugger
            localStorage.setItem('organization_id', data.organization_id)
            localStorage.setItem("jwt", data.token)
            
            this.props.onChangeUser(data.organization)
            this.props.history.push('/profile')
            // /home
        })
      }
    
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    render() {
        return (
            <Grid centered container style={{ height: '85vh' }} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' textAlign='center'>Organization:Log-in to your account</Header>

                    <Form onSubmit={this.handleSubmit}>
                        <Segment stacked>

                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend> 
                                        <InputGroup.Text>
                                            <Icon name='user' size='large' fitted/>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control size='lg' name='username' type='text' placeholder='username' value={this.state.username} onChange={this.handleChange} />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <Icon name='lock' size='large' fitted />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control size='lg' name='password' type='password' placeholder='password' value={this.state.password} onChange={this.handleChange} />
                                </InputGroup>
                            </Form.Group>

                            <Button variant='primary' type='submit' size='lg' block>Login</Button>
                        </Segment>
                    </Form>

                    <Message>
                        New to us? <Link to='/signup' exact='true'>Sign Up</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default withRouter(AuthForm)
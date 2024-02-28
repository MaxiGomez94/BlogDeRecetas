
import { Container,Form,FormControl,FormGroup} from 'react-bootstrap';

const Login = () => {
    return (
        <Container className='p-3 my-5 d-flex flex-column w-25'>

        <Form>
            <FormGroup >
                <FormControl type='email' placeholder='ingrese su email'  className='mb-4'/>
                <FormControl type='text' placeholder='ingrese su contraseña' className='mb-4' />
            </FormGroup>
            <div>
                
                </div>    
        </Form>
        </Container>
    );
};

export default Login;
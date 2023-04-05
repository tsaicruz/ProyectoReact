import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Contacto.scss"



const Contacto = () => {


    return (
        <div className="container my-5">
            <h2>Contactanos para un mejor asesoramiento para tu mascota</h2>
            <div className='contacto'>
            <Form>
                <Form.Group className="mb-3 my-5">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar Nombre" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 my-2" >
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="number" placeholder="Ingresar numero de telefono" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 my-2 " >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 my-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Consulta </Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Motivo de consulta' />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
                </Form>
                </div>
            <hr/>
        </div>
    )
}

export default Contacto;
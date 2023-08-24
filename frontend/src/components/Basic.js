import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {FloatingLabel} from "react-bootstrap";
export default function Basic() {
    return (
        <Container fluid="sm">
            <FloatingLabel label="姓名" controlId="formNAME" className="my-3">
                <Form.Control placeholder="請輸入姓名" />
            </FloatingLabel>
            <FloatingLabel label="身分證字號" controlId="formIDNO" className="my-3">
                <Form.Control placeholder="請輸入身分證字號" />
            </FloatingLabel>
            <div className="mb-3">
                <Form.Check inline type="radio" id="formSEX1" name="formSEX" label="男" />
                <Form.Check inline type="radio" id="formSEX2" name="formSEX" label="女" />
            </div>
            <div className="mb-3">
                <Form.Check type="checkbox" id="formISPATRIAL" label="本國人" defaultChecked />
            </div>
            <FloatingLabel label="英文姓" controlId="formELAST_NAME" className="my-3">
                <Form.Control placeholder="請輸入英文姓" />
            </FloatingLabel>
            <FloatingLabel label="英文名" controlId="formEFIRST_NAME" className="my-3">
                <Form.Control placeholder="請輸入英文名" />
            </FloatingLabel>
            <FloatingLabel label="國籍一" controlId="formNATCOD" className="my-3">
                <Form.Control placeholder="請輸入國籍一" />
            </FloatingLabel>
            <FloatingLabel label="國籍二" controlId="formDNATCOD" className="my-3">
                <Form.Control placeholder="請輸入國籍二" />
            </FloatingLabel>
        </Container>
    );
}
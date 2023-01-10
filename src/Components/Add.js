import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
function Add() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");


    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = name,
            b = age;

        Employees.push({ id: uniqueId, Name: a, Age: b });

        history("/");
    }

    return <div>
        <Form className="d-grid cap-2" style={{ margin: "15rem" }}>
            <Form.Group className="mb-3" controlId="FormName">
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>


            <Form.Group className="mb-3" controlId="FormAge">
                <Form.Control type="text" placeholder="Enter Age" required onChange={(e) => setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <button onClick={(e) => handleSubmit(e)} type="submit">Submit</button>
        </Form>
    </div>;
}

export default Add;

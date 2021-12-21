import React,{useState} from 'react'
import SignCSS from './SignInUp.module.css'
import logo from '../Images/ecom-sign.jpg'
import avtar from '../Images/avtar.gif'
import { Form } from 'react-bootstrap'
import {FcGoogle} from 'react-icons/fc'
import { Link } from "react-router-dom";

export default function SignIn() {
    const [hide, setHide] = useState(false)
    return (
        <div className={SignCSS.sign}>
            <div className={SignCSS.imageholder}><img src={logo} /></div>
            <div className={SignCSS.formlayout}>
                <h1 className={SignCSS.title}>Log In</h1>
                <div className={SignCSS.avtar}>
                    <img src={avtar}/>
                    {hide && <div className={SignCSS.covereyes}></div>}
                </div>
                <Form>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                        required
                    />
                    <label htmlFor="floatingInputCustom">Email address</label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="password"
                        placeholder="Password"
                        required
                        onFocus={()=>setHide(true)}
                        onBlur={()=>setHide(false)}
                    />
                    <label htmlFor="floatingPasswordCustom">Password</label>
                </Form.Floating>
                    <button className={SignCSS.submit} type="submit"><span>Log In</span></button>
                </Form>
                <div className={SignCSS.orstyle}>
                    <div></div>
                    <span>Or</span>
                    <div></div>
                </div>
                <button className={SignCSS.googlesign}><FcGoogle size={30}/> <span>Continue with Google</span></button>
                <p>New User? <Link to="/signup">Create Account</Link></p>
                
            </div>

        </div>
    )
}

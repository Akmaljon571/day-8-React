import { Typography, Button, Form, Input, Alert  } from 'antd';
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import useAuth from './hooks/useAuth'
import 'antd/dist/antd.css'

function Public() {
    const { Auth, setAuth } = useAuth()
    const [token, setToken] = useState(Auth.token || '');
    const { Title } = Typography;
    const onFinish = (values) => {
      console.log('Success:', values);
    };
      
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    let save = (evt) =>{
       evt.preventDefault()
       if (token !== '') {
           setAuth({
               readu: true,
               user: true,
               token: token,
            })
           localStorage.setItem('token', JSON.stringify(token))
       }
    }
      
    useEffect(() => {
        fetch('https://reqres.in/api/register', {
            method: 'POST',
            body: JSON.stringify({
              email: 'eve.holt@reqres.in',
              password: 'pistol'
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => setToken(json.token));
            
    }, [Auth]);


    return ( 
        <div className='bgcImage'>
             <Alert
             className='Alert_pr'
            message="Informational Notes"
            description="Hozircha email ham password ham ixtiyoriy"
            type="info"
            showIcon
           />
        <div className='bgcRow' >
           <Title className='singIn'>Sing In</Title>
            <div className='bgcCol'>
             <Form onSubmitCapture={save}
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
        
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
        
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button className='button_public' type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            </div>
          </div>
        </div>
     );
    
}

export default Public;
 "use client"
 import React from 'react';
 import { Button, Checkbox, Form, Input } from 'antd';
 import Image from 'next/image';
 import loginImage from "@/assets/images/Remote meeting-amicoColor.png";
 import logo from '@/assets/images/intellicaWhite.png'
 
 const onFinish = (values: any) => {
   console.log('Success:', values);
 };
 
 const onFinishFailed = (errorInfo: any) => {
   console.log('Failed:', errorInfo);
 };
 
 type FieldType = {
   username?: string;
   password?: string;
   remember?: string;
 };
 
 const LoginPage: React.FC = () => {
    
   return(
    <div style={{ display: 'flex', minHeight: '100vh' }}>
    {/* Lado Esquerdo (Imagem) */}
    <div style={{ flex: 1 }}>
      <div style={{ maxWidth: '50vw', position: 'relative', height: '100vh' }}>
        <Image src={loginImage} alt='Login Image' layout="fill" objectFit="cover" />
      </div>
    </div>
    
    {/* Lado Direito (Formulário) */}
   <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#3E4E5B' }}>
     <div style={{ maxWidth: 400, width: '100%', padding: '20px', borderRadius: '10px', backgroundColor: 'red', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>

       {/* Logo */}
       <div style={{ marginBottom: '20px', textAlign: 'center' }}>
         <Image src={logo} alt='Logo'/>
       </div>

       {/* Formulário */}
       <Form
         name="basic"
         initialValues={{ remember: true }}
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
         autoComplete="off"
       >
         <Form.Item
           label="Username"
           name="username"
           rules={[{ required: true, message: 'Please input your username!' }]}
         >
           <Input />
         </Form.Item>

         <Form.Item
           label="Password"
           name="password"
           rules={[{ required: true, message: 'Please input your password!' }]}
         >
           <Input.Password />
         </Form.Item>

         <Form.Item name="remember" valuePropName="checked" style={{ marginBottom: '10px' }}>
           <Checkbox>Remember me</Checkbox>
         </Form.Item>

         {/* Esqueceu a senha */}
         <div style={{ marginBottom: '20px', textAlign: 'right', color:'white' }}>
           <a href="#" style={{color:'white'}}>Esqueceu a password? Recupere aqui!</a>
         </div>

         <Form.Item>
           <Button  color='#3E4E5B' htmlType="submit" style={{ width: '100%' }}>
             Login
           </Button>
         </Form.Item>
       </Form>
     </div>
   </div>
  </div>
   );
 }
 
 export default LoginPage;

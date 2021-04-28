// import './App.css';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'\
// import { Form, Input, InputNumber, Button, Card,Table,notification} from 'antd';


// const layout = {
//   labelCol: {
//     span: 4,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

// // const dataSource = [
// //   {
// //     key: '1',
// //     name: 'Mike',
// //     email:'mike@gmail.com',
// //     age: 32,
// //     website:'www.mikeshop.com',
// //     address: '10 Downing Street',
// //   },
// //   {
// //     key: '2',
// //     name: 'John',
// //     email:'jhon@gmail.com',
// //     age: 42,
// //     website:'www.jonsemarket.com',
// //     address: '15 Downing Street',
// //   },
// //   {
// //     key: '1',
// //     name: 'Mike',
// //     email:'mike@gmail.com',
// //     age: 32,
// //     website:'www.mikeshop.com',
// //     address: '10 Downing Street',
// //   },
// //   {
// //     key: '2',
// //     name: 'John',
// //     email:'jhon@gmail.com',
// //     age: 42,
// //     website:'www.jonsemarket.com',
// //     address: '15 Downing Street',
// //   },
// //   {
// //     key: '1',
// //     name: 'Mike',
// //     email:'mike@gmail.com',
// //     age: 32,
// //     website:'www.mikeshop.com',
// //     address: '10 Downing Street',
// //   },
// //   {
// //     key: '2',
// //     name: 'John',
// //     email:'jhon@gmail.com',
// //     age: 42,
// //     website:'www.jonsemarket.com',
// //     address: '15 Downing Street',
// //   },
// // ];
// // const columns = [
// //   {
// //     title: 'Name',
// //     dataIndex: 'name',
// //     key: 'name',
// //   },
// //   {
// //     title: 'Email',
// //     dataIndex: 'email',
// //     key: 'email',
// //   },
// //   {
// //     title: 'Age',
// //     dataIndex: 'age',
// //     key: 'age',
// //   },
// //   {
// //     title: 'Website',
// //     dataIndex: 'website',
// //     key: 'website',
// //   },
// //   {
// //     title: 'Address',
// //     dataIndex: 'address',
// //     key: 'address',
// //   },
// // ];
// // const data = [];
// // for (let i = 0; i < 46; i++) {
// //   data.push({
// //     key: i,
// //     name: `John${i}`,
// //     email:`jhon@gmail.com${i}`,
// //     age: 42,
// //     website:`www.jonsemarket.com${i}`,
// //     address: `15 Downing Street${i}`,
// //     // name: `Edward King ${i}`,
// //     // age: 32,
// //     // address: `London, Park Lane no. ${i}`,
// //   });
// // }

// const columns = [
//   {
//     title: 'ID',
//     dataIndex: 'id',
//     key: 'id',
    
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
    
//   },
//   {
//     title: 'Column 1',
//     dataIndex: 'address',
//     key: 'col1',
    
//   },
//   {
//     title: 'Column 2',
//     dataIndex: 'address',
//     key: 'col2',
    
//   },
 
  
//   { 
//     title: 'Column 3', 
//     dataIndex: 'address', 
//     key: 'col3' ,
    
//   },
  
// ];



// const openNotificationWithIcon = type => {
//   notification[type]({
//     message: 'Notification Title',
//     description:
//       'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
//   });
// };

// const data = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   });
// }



// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//     number: '${label} is not a valid number!',
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };


// const App = () => {
//   const onFinish = (values) => {
//     console.log(values);
    
    
//   };

//   return (
    
//     <Card>

//     <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
//     <Form.Item
//       name={['user', 'name']}
//       label="Name"
//       rules={[
//         {
//           required: true,
//         },
//       ]}
//       >
//       <Input />
//     </Form.Item>
//     <Form.Item
//       name={['user', 'email']}
//       label="Email"
      
//       rules={[
//         {
//           required: true,
//           type: 'email',
//         },
//       ]}
//       >
//       <Input />
//     </Form.Item>
//     <Form.Item
//       name={['user', 'age']}
//       label="Age"
//       rules={[
//         {
//           required: true,
//           type: 'number',
//           min: 0,
//           max: 99,
//         },
//       ]}
//       >
//       <InputNumber />
//     </Form.Item>
//     <Form.Item 
//     name={['user', 'website']} 
//     label="Website"
//     rules={[{
//       required: true,
//     }]}
//     >
//       <Input />
//     </Form.Item>
//     <Form.Item name={['user', 'address']}
//      label="Address"
//       rules={[{
//         required: true,
//       }]}
//       >
//       <Input.TextArea />
//     </Form.Item>
//     <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//     <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
//       <Button type="primary" htmlType="submit">
//         Submi
//       </Button>
//     </Form.Item>
//   <Table dataSource={data} columns={columns} scroll={{ x: 150, y: 300 }} />;
//   </Form>
//       </Card>
//   );
// }


// export default App;
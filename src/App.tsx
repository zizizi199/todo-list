// import Form from "./components/Form";
// import List from "./components/List";
import "antd/dist/antd.min.css";
import { Button, Checkbox, Form, Input, Space } from "antd";
import "./App.css";
import { auth, facebook, github, google } from "./config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
// export interface TodoListItems {
//   work: string;
//   isComplete: boolean;
// }

export default function App() {
  // const [list, setList] = useState<TodoListItems[]>([]);

  const login = async (provider: any) => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

  return (
    // <div className="app">
    //   <Row align="middle" justify="center">
    //     <Col lg={8} md={12} xs={24}>
    //       <Form list={list} setList={setList} />
    //     </Col>
    //   </Row>
    //   <Row align="middle" justify="center">
    //     <Col lg={8} md={12} xs={24}>
    //       <List list={list} setList={setList} />
    //     </Col>
    //   </Row>
    // </div>
    <div className="App">
      <div className="App-header">
        <Form
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={(values) => {
            console.log(values);
            alert("Success");
          }}
        >
          {" "}
          <h1> Login</h1>
          <Form.Item
            name="username"
            label="Username"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input placeholder="Type your Username" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
              {
                type: "email",
                message: "Please input a valid Email",
              },
            ]}
          >
            <Input placeholder="Type your Email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
              {
                min: 6,
                message: "Password requires more than 6 letter",
              },
            ]}
          >
            <Input.Password type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ span: 8 }}
              noStyle
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Space
              direction="vertical"
              size="small"
              style={{ display: "flex" }}
            >
              <Button
                type="default"
                htmlType="submit"
                className="login-form-button"
                block
              >
                Log in
              </Button>
              <Button
                className="google"
                block
                style={{
                  background: "red",
                  borderColor: "red",
                  color: "white",
                }}
                onClick={() => login(google)}
              >
                <GoogleOutlined />
                Log In With Google
              </Button>
              <Button
                className="facebook"
                block
                type="primary"
                onClick={() => login(facebook)}
              >
                <FacebookOutlined />
                Log In With Facebook
              </Button>
              <Button
                className="github"
                block
                style={{
                  background: "black",
                  borderColor: "black",
                  color: "white",
                }}
                onClick={() => login(github)}
              >
                <GithubOutlined />
                Log In With Github
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

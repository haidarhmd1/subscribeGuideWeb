import { Avatar, Button, Col, Divider, Form, Input, Row, Upload } from "antd";

import { UserOutlined, UploadOutlined } from "@ant-design/icons";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

type FieldType = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

export const UserDetails = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Form
            layout="vertical"
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Col className="mt-4" span={24}>
              <Avatar
                size={{ xs: 24, sm: 32, md: 64, lg: 96 }}
                icon={<UserOutlined />}
              />
            </Col>
            <div className="mt-2">
              <Form.Item
                name="upload"
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="Change your picture"
              >
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>
            </div>
            <Divider />
            <Row gutter={[16, 0]}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <Form.Item<FieldType>
                  label="First Name"
                  name="firstName"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <Form.Item<FieldType>
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <Form.Item<FieldType>
                  label="E-Mail"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

// import React, { useState } from "react";
// import { TodoListItems as Prop } from "../App";
// import { Button, Input, Space } from "antd";
// import { PlusOutlined } from "@ant-design/icons";

// interface IProp {
//   list: Prop[];
//   setList: React.Dispatch<React.SetStateAction<Prop[]>>;
// }

// export default function Form({ list, setList }: IProp) {
//   const [inputData, setInputData] = useState({ work: "", isComplete: false });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     setInputData({ work: e.target.value, isComplete: false });
//   };

//   const handleClick = (
//     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
//   ): void => {
//     setList([
//       ...list,
//       {
//         work: inputData.work,
//         isComplete: inputData.isComplete,
//       },
//     ]);
//     setInputData({ work: "", isComplete: false });
//   };

//   return (
//     <div className="form-container">
//       <Space
//         direction="horizontal"
//         style={{ width: "100%", justifyContent: "center" }}
//       >
//         <h1>Todo list</h1>
//       </Space>
//       <Space
//         direction="horizontal"
//         style={{ width: "100%", justifyContent: "center" }}
//       >
//         <Input
//           type="text"
//           style={{ maxWidth: "max-content" }}
//           placeholder="Work to do"
//           value={inputData.work}
//           onChange={handleChange}
//         />
//         <Button
//           style={{
//             backgroundColor: "#87e8de",
//           }}
//           icon={<PlusOutlined />}
//           onClick={handleClick}
//         >
//           Add
//         </Button>
//       </Space>
//     </div>
//   );
// }
export {};

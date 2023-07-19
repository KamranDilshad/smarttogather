import React from "react";
import ChatBot from "react-simple-chatbot";



const ChatsPage = () => {
 
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our website Smarttogather",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your name!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Are you a Teacher or a Student?",
      trigger: "check",
    },
    {
      id: "check",
      options: [
        {
          value: "Teacher",
          label: "Teacher",
          trigger: "Teacher",
        },
        { value: "Student", label: "Student", trigger: "Student" },
      ],
    },
    {
      id: "Teacher",
      message:
        "If you're a Teacher and want to post courses, please visit the Course Page. Thank you for connecting.",
      end: true,
    },
    {
      id: "Student",
      message:
        "If you're a Student and want to check courses, please visit our Instructor page. Thank you for connecting.",
      end: true,
    },
  ];
  

  return (
    <div className="bg-primary text-center p-5" >
 
      <div className="row">
      <div className="col-5">
      </div>
      <div className="col-6">  <ChatBot steps={steps}  />
      </div>
      </div>
    </div>
  );
};

export default ChatsPage;



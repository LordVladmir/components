import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <div>
      <h4>Warning!</h4>
      Are you sure you want to do this?
      </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice Post!"
          avatar={faker.image.people()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="John"
          timeAgo="Today at 2:00AM"
          content="Hello there!"
          avatar={faker.image.cats()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Yesterday at 5:00PM"
          content="Byeee"
          avatar={faker.image.food()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

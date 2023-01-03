import { connect } from "react-redux";
import Poll from "./Poll";
const Dashboard = (props) => {
  console.log(props, "props");
  return (
    <>
    <div>
{}
    </div>
      <div>
       
        <h4 className="center">New Questions</h4>
        <ul>
          {props.questionIds.map((id) => (
            <li key={id}>
              <Poll id={id} />
            </li>
          ))}
        </ul> 
      </div>
    </>
  );
};

export const mapStateToProps = ({ questions,users }) => ({
  // zoshikanlu: {
  //   id: "zoshikanlu",
  //   password: "pass246",
  //   name: "Zenobia Oshikanlu",
  //   avatarURL: null,
  //   answers: {
  //     xj352vofupe1dqz9emx13r: "optionOne",
  //   },
  //   questions: [],
  // },

  //  "8xf0y6ziyjabvozdd253nd": {
  //   id: "8xf0y6ziyjabvozdd253nd",
  //   author: "sarahedo",
  //   timestamp: 1467166872634,
  //   optionOne: {
  //     votes: ["sarahedo"],
  //     text: "Build our new application with Javascript",
  //   },
  //   optionTwo: {
  //     votes: [],
  //     text: "Build our new application with Typescript",
  //   },
  // },

  questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
  
});
export default connect(mapStateToProps)(Dashboard);

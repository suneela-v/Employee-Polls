import { connect } from "react-redux";
import Nav from "./Nav";
const Leaderboard = (props) => {
  const { questions, authedUser, users, userkeys, userkeysHere } = props;
  // console.log(
  //   props,
  //   // Object.keys(users[userkeys[0]]).answers,
  //   "length",
  //   Object.keys(userkeysHere.answers),
  //   Object.keys(userkeysHere.answers).length,
  //   Object.keys(userkeysHere.questions).length,
  //   "some",
  //   "leaderboard"
  // );
  return (
    <>
      <table className="tablewidth">
        <thead>
          <tr>
            <th data-testid="name-header">Name</th>
            <th data-testid="answered-header">Answered</th>
            <th data-testid="created-header">created</th>
          </tr>
        </thead>
        <tbody>
          {/* {Object.entries(users).map(([key, value]) => (
            <tr key={key}>
              <td>{users[key].name}</td>
              <td>{Object.keys(users[key].answers).length}</td>
              <td>{users[key].questions.length}</td>
            </tr>
          ))} */}
          {userkeys.map((key) => (
            <tr key={key}>
              <td>{users[key].name}</td>
              <td>{Object.keys(users[key].answers).length}</td>
              <td>{users[key].questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
const mapStateToProps = ({ questions, authedUser, users }) => {
  const userkeysHere = users[authedUser];
  return {
    questions,
    authedUser,
    users,
    userkeysHere,
    //   let users = {
    // sarahedo: {
    //   id: "sarahedo",
    //   password: "password123",
    //   name: "Sarah Edo",
    //   avatarURL: null,
    //   answers: {
    //     "8xf0y6ziyjabvozdd253nd": "optionOne",
    //     "6ni6ok3ym7mf1p33lnez": "optionOne",
    //     am8ehyc8byjqgar0jgpub9: "optionTwo",
    //     loxhs1bqm25b708cmbf3g: "optionTwo",
    //   },
    //   questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
    // },
    userkeys: Object.keys(users).sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        Object.keys(users[b].questions).length -
        (Object.keys(users[a].answers).length +
          Object.keys(users[a].questions).length)
    ),
  };
};
export default connect(mapStateToProps)(Leaderboard);

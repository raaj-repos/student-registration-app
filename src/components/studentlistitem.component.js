
import AgeComponent from "./age.component";
import MobileNumberComponent from "./mobile.component";

function StudentRow(props) {
    return (
        <tr>
            <td>{props.ix+1}</td>
            <td>{props.student.lastName}, {props.student.firstName}</td>
            <td><AgeComponent dob={props.student.dob}></AgeComponent></td>
            <td><MobileNumberComponent mobile={props.student.mobile}></MobileNumberComponent></td>
        </tr>
    );
}

export default StudentRow;
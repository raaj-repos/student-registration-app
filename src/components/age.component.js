
function AgeComponent(props) {
    let dateofBirth = new Date(Date.parse(props.dob));
    let ageDifMs = Date.now() - dateofBirth.getTime();
    let ageDate = new Date(ageDifMs);
    let age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return (
        <>
            {age} years{age < 21 ? " (Minor)" : ""}
        </>
    );
}

export default AgeComponent;
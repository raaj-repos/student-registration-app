
function MobileNumberComponent(props) {
    let mobileNumber = props.mobile;
    return (
        <>
            {mobileNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}
        </>
    );
}

export default MobileNumberComponent;
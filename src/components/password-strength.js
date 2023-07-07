import React from "react";

const PasswordStrength = ({password = ""}) => {

    const getPasswordStrength = () => {
        const length = password.length;

        if (length < 1)
            return "";
        else if (length < 4)
            return "Very Weak";
        else if (length < 8)
            return "Poor";
        else if (length < 12)
            return "Medium";
        else if (length < 16)
            return "Strong";
        else
            return "Very Strong";
    }

    const passwordStrength = getPasswordStrength();
    if (!passwordStrength) return <React.Fragment />
    
    return (
        <div className="passwordStrength">
            Strength: <span style={{fontWeight: "bold"}}>{passwordStrength}</span>
        </div>
    )
}

export default PasswordStrength;
import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as User } from "../../icons/User.svg";
import { ReactComponent as Email } from "../../icons/Mail.svg";
import { ReactComponent as File } from "../../icons/File.svg";
import { ReactComponent as Phone } from "../../icons/Phone.svg";
import { ReactComponent as Password } from "../../icons/edit-3.svg";
import { ReactComponent as Item } from "../../icons/archive.svg";
import { ReactComponent as From } from "../../icons/From.svg";
import { ReactComponent as To } from "../../icons/To.svg";

import { InputStyle } from "../../styles";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  info,
  type,
  onChange
}) => {
  let icon;
  switch (name) {
    case "name":
      icon = <User />;
      break;
    case "email":
      icon = <Email />;
      break;
    case "avatar":
      icon = <File />;
      break;
    case "password":
      icon = <Password />;
      break;
    case "description":
      icon = <File />;
      break;
    case "items":
      icon = <Item />;
      break;
    case "from":
      icon = <From />;
      break;
    case "to":
      icon = <To />;
      break;
    case "number":
      icon = <Phone />;
      break;
    default:
    // icon = <User />;
  }
  return (
    <InputStyle>
      <div className="info">{info}</div>
      <div className="input">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {icon}
      </div>
      <div className="error" />
    </InputStyle>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  // value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import Preloader from "../../Common/Preloader/preloader";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateMode = () => {
    setEditMode(true);
  };
  const deactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <b>Status: </b>
          <span onDoubleClick={activateMode}>{status || "-------"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            onBlur={deactivateMode}
            autoFocus={true}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;

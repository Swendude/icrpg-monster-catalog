import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";

type EditState = {
  editing: boolean;
  value: string;
};

type Props = {
  placeholder: string;
};

const NormalText = styled.p`
  margin: 0px;
  padding: 0px;
`;

const EditText = styled.input`
  border: none;
  margin: 0px;
  padding: 0px;
  font-family: inherit;
  font-size: inherit;
`;

const ToggleButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const RowDiv = styled.div`
  display: flex;
  gap: 2px;
`;

const EditableText = ({ placeholder }: Props) => {
  const [edit, setEdit] = useState<EditState>({
    editing: false,
    value: placeholder
  });
  return (
    <RowDiv>
      {edit.editing ? (
        <EditText
          value={edit.value}
          onChange={(e) => setEdit({ ...edit, value: e.target.value })}
          type="text"
          size={edit.value.length || 1}
        ></EditText>
      ) : (
        <NormalText>{edit.value}</NormalText>
      )}
      <ToggleButton
        onClick={() => setEdit({ ...edit, editing: !edit.editing })}
      >
        <FontAwesomeIcon icon={edit.editing ? faXmark : faPenToSquare} />
      </ToggleButton>
    </RowDiv>
  );
};

export default EditableText;

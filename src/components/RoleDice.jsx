import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceConatiner>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceConatiner>
  );
};

export default RoleDice;

const DiceConatiner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;

  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;

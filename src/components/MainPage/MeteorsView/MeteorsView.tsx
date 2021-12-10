import React, { useContext } from "react";
import { MeteorListContext } from "../../../context/MeteorListContext";
import { IMeteorObject } from "../../../interfaces/interfaces";

const MeteorsView: React.FC = () => {
  const { meteorList } = useContext(MeteorListContext);

  const meteorTextConfig = () => {
    let meteorText = "";
    const meteorCounter = meteorList.basedOnMass.length;
    switch (meteorCounter) {
      case 1:
        meteorText = `There is 1 meteor `;
        break;
      default:
        meteorText = `There are ${meteorCounter} meteors `;
    }
    meteorText += `based on your filter:`;
    return meteorText;
  };

  return (
    <div>
      {meteorList.currentYear !== "" && meteorTextConfig()}
      {meteorList.currentYear !== "" && (
        <div>
          {meteorList.basedOnMass.map((meteorObject: IMeteorObject) => {
            return (
              <p key={meteorObject.id}>
                {meteorObject.name && <>name: {meteorObject.name}</>}
                <br />
                {meteorObject.mass && <>mass: {meteorObject.mass}</>}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MeteorsView;

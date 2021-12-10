import React, { useState } from "react";
import { IMeteorList } from "../interfaces/interfaces";

interface IProps {
  children: React.ReactNode;
}

const initialMeteorList = {
  currentYear: "",
  yearChangedFromMass: false,
  basedOnYear: [{}],
  basedOnMass: [{}],
};

const MeteorListContext = React.createContext({
  meteorList: initialMeteorList,
  setMeteorList: (newMeteorList: IMeteorList) => {},
});

const MeteorListProvider: React.FC<IProps> = (props: IProps) => {
  const { children } = props;
  const [meteorList, setMeteorList] = useState<IMeteorList>(initialMeteorList);

  const changeMeteorList = (newMeteorList: IMeteorList) => {
    setMeteorList(newMeteorList);
  };

  const values = {
    meteorList: meteorList,
    setMeteorList: changeMeteorList,
  };

  return (
    <MeteorListContext.Provider value={values}>
      {children}
    </MeteorListContext.Provider>
  );
};

export { MeteorListProvider, MeteorListContext };

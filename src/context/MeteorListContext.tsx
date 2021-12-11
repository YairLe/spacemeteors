import React, { useCallback, useState } from "react";
import { IMeteorList } from "../interfaces/interfaces";

interface IProps {
  children: React.ReactNode;
}

const initialMeteorList = {
  currentYear: "",
  basedOnYear: [{}],
  basedOnMass: [{}],
  currentMass: "",
};

const MeteorListContext = React.createContext({
  meteorList: initialMeteorList,
  setMeteorList: (newMeteorList: IMeteorList) => {},
});

const MeteorListProvider: React.FC<IProps> = (props: IProps) => {
  const { children } = props;
  const [meteorList, setMeteorList] = useState<IMeteorList>(initialMeteorList);

  const changeMeteorList = useCallback(
    (newMeteorList: IMeteorList) => {
      setMeteorList(newMeteorList);
    },
    [setMeteorList]
  );

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

import React, { useCallback, useEffect, useState } from "react";
import { IMeteorList, IMeteorsListWithoutAllMeteors } from "../interfaces/interfaces";
interface IProps {
  children: React.ReactNode;
}

const initialMeteorList = {
  allMeteors: [{}],
  currentYear: "",
  basedOnYear: [{}],
  basedOnMass: [{}],
  currentMass: "",
};

const MeteorListContext = React.createContext({
  meteorList: initialMeteorList,
  setMeteorList: (newMeteorList: IMeteorsListWithoutAllMeteors) => { },
});

const MeteorListProvider: React.FC<IProps> = (props: IProps) => {
  const { children } = props;
  const [meteorList, setMeteorList] = useState<IMeteorList>(initialMeteorList);

  const changeMeteorList = useCallback(
    (newMeteorList: IMeteorsListWithoutAllMeteors) => {
      setMeteorList((prevState: IMeteorList) => {
        return { ...newMeteorList, allMeteors: prevState.allMeteors }
      }
      );
    },
    [setMeteorList]
  );

  useEffect(() => {
    const fetchMeteorsData = async () => {
      try {
        const response = await fetch('meteorsdata.json')
        const fetchedMeteorData = await response.json()
        setMeteorList((prevState: IMeteorList) => {
          return { ...prevState, allMeteors: fetchedMeteorData }
        })
      }
      catch (err) {
        console.log('an error occured while fetching meteors data', err);
      }
    }
    fetchMeteorsData()
  }, [])

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


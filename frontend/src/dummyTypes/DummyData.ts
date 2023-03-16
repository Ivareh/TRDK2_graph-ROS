import { MunicipalityEntity } from "./OntologyTypes";

/**
 export type MunicipalityEntity = {
    instancesOf: string;
    label: string;
    icon: string;
  };
 */

function DummyData() {
    const DD = Array<MunicipalityEntity>();

    DD.push({
        instancesOf: "",
        label: "Byutvikling",
        icon: "https://cdn-icons-png.flaticon.com/512/209/209474.png",
    })

    DD.push({
        instancesOf: "",
        label: "Helse og velferd",
        icon: "https://cdn-icons-png.flaticon.com/512/687/687529.png",
    })

    return DD;
}

export default DummyData;
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

    DD.push({
        instancesOf:"",
        label: "Organisasjon",
        icon: "https://cdn-icons-png.flaticon.com/512/2674/2674995.png",
    })

    DD.push({
        instancesOf:"",
        label: "Oppvekst og utdanning",
        icon: "https://cdn-icons-png.flaticon.com/512/3819/3819378.png",
    })

    DD.push({
        instancesOf:"",
        label: "Kultur og idrett",
        icon: "https://cdn-icons-png.flaticon.com/512/1198/1198416.png",
    })

    DD.push({
        instancesOf:"",
        label: "Næring, Samferdsel, Klima og Miljø",
        icon: "https://cdn-icons-png.flaticon.com/512/2961/2961643.png",
    })

    return DD;
}

export default DummyData;
import { InsecureRelation } from "./OntologyTypes";

/**
 export type InsecureRelation = {
    instance1: string | null;
    instance2: string | null;
    label: string;
    severity: number;
  }
 */

function DummyInsecurities() {
    const DI = Array<InsecureRelation>();

    DI.push({
        instance1: "Underkategori1",
        instance2: "Underkategori2",
        label: "Usikkerhet ved navn",
        severity: 0.2,
    })

    DI.push({
        instance1: "Underkategori1",
        instance2: "Underkategori3",
        label: "Usikkerhet i relasjoner mellom instanser",
        severity: 0.5,
    })

    DI.push({
        instance1: null,
        instance2: null,
        label: "Usikkerhet i relasjon",
        severity: 0.8,
    })

    DI.push({
        instance1: null,
        instance2: null,
        label: "Usikkerhet i relasjon",
        severity: 0.3,
    })

    return DI;
}

export default DummyInsecurities;
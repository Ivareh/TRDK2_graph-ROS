## TRDK2_graph-ROS Ontology

The TRDK2_graph-ROS.owl file represents the ontology. It is possible to alter the content of the ontology through GraphDB, though these functionalities are not implemented yet. Therefore, all the content that exist in the ontology now is added locally without automation.

### Ontology from documents

The goal of developing this ontology was to capture the content from provided documents. The ontology was built upon the "Business areas" within Trondheim Municipality, which are represented in the ROS documents. The ontology aimed to gain a better understanding of these documents containing information about internal IT systems. These are the documents provided:


"Applikasjonsliste - 2018.xlsx" (Not ROS)

"Dataset overview - 2018.xlsx" (Not ROS)

"Programoversikt.xlsx" (Not ROS)

"Vedlegg A - Organisasjon.docx" (ROS)

"Vedlegg B - Helse og velferd.docx" (ROS)

"Vedlegg C - Oppvekst og utdanning.docx" (ROS)

"Vedlegg D - Byutvikling.docx" (ROS)

"Vedlegg F - Kultur og idrett.docx" (ROS)

"Vedlegg G - Næring.docx" (ROS)

### Core concept ontology expanded from

Our core to build concepts and expand the ontology from was "Business areas" within Trondheim Municipality. The ROS documents above represents each of these business areas. The goal of the ontology was to gain a better overview of these documents containing information about internal IT systems. Business areas are logical to be the core and expand from in this ontology.

### What is not present in the ontology

Most of the concepts that exists in the documents has been defined. However, there is missing data within these concepts, e.g. instances and individuals. As one of this projects objectives was to parse and add this data automatically, the developers had the vision that this was not needed to do manually. Therefore, the developers didn't prioritise time to map every individual to the concepts and define necessary properties for them. For the ontology to be practiced in the real-world, this data has to be present.

### Defining concept of *Uncertainty* in the ontology

The data came with problems which made it chaotic. There was issues regarding names and terms, data format, values of attributes and if some entities are equal or not.

These problems were defined as the concept *Uncertainty* in the ontology. We defined uncertainty as "something unknown that needs to be checked to create certainty". However, if we know there is an uncertainty, is it truly uncertain? By this logic, we came up with two types of uncertainty: *known* and *unknown* uncertainties. 

*Known* uncertainties is data directly labeled as uncertain. Since it is labeled as uncertain, it is known to be uncertain. This type of uncertainty is easy to inference, since they are labeled with a data property. Exists in the developed ontology as the data property "hasUncertainty" for individual entities. For relational uncertainty, there is an object property "hasUncertaintyTo" which could be used if there are relational uncertainties. 

*Unknown* uncertainties is data which isn't labeled, but possible to derive the uncertainty by analyzing the properties of the data. If there isn't enough information about the data, there could exist unknown uncertainties which isn't mapped yet. This type of uncertainty is more difficult to inference. We are not sure if it is possible to make a solution to inference for unknown uncertainties. To capture unknown uncertainties as of now, it needs to be analysed from manual checks.

Building the ontology with these two concepts at hand, we think we can capture many problems regarding the issues with the data.


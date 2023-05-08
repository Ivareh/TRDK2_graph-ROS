export const u4sscKpiMap = new Map([
  ["EC: ICT: ICT: 1C", "household_internet_access"],
  ["EC: P: EM: 1C", "unemployment_rate"],
  ["EC: P: IN: 2C", "patents"],
  ["EN: EN: EQ: 1C", "EMF_exposure"],
  ["EN: EN: AQ: 2C", "GHG_emissions"],
  ["EC: I: ES: 3C", "access_electricity"],
  ["SC: EH: ED: 4C", "adult_literacy"],
  ["EN: EN: AQ: 1C", "air_pollution"],
  ["EC: I: T: 3C", "bicycle_network"],
  ["SC: SH: SI: 5A", "child_care_availability"],
  ["SC: EH: C: 1C", "cultural_expenditure"],
  ["SC: EH: C: 2A", "cultural_infrastructure"],
  ["EC: ICT: ES: 3A", "demand_response_penetration"],
  ["SC: SH: SA: 2C", "disaster_related_economic_loss"],
  ["EN: EN: WS: 1C", "drinking_water_quality"],
  ["EC: ICT: T: 1C", "dynamic_public_trans_inf"],
  ["EC: ICT: PS: 2A", "e_government"],
  ["EN: E: E: 2C", "electricity_consumption"],
  ["EC: I: ES: 2C", "electricity_outage_time"],
  ["EC: ICT: ES: 2A", "electricity_supply_ict_mon"],
  ["EC: I: ES: 1C", "electricity_system_outage_freq"],
  ["SC: EH: ED: 5A", "electronic_health_records"],
  ["SC: SH: SA: 5A", "emergency_response_time"],
  ["SC: SH: HO: 2A", "expenditure_housing"],
  ["SC: SH: SA: 7C", "fire_service"],
  ["EC: ICT: ICT: 2C", "fixed_broadband"],
  ["SC: SH: FS: 1A", "food_production"],
  ["EN: EN: WS: 4C", "wastewater_treatment"],
  ["SC: SH: SI: 1C", "gender_income_equality"],
  ["SC: SH: SI: 2C", "gini_coefficient"],
  ["EN: EN: PSN: 2A", "green_area_accessibility"],
  ["EN: EN: PSN: 1C", "green_areas"],
  ["SC: EH: ED: 3C", "higher_education_degrees"],
  ["EC: I: WS: 5C", "household_sanitation"],
  ["EC: P: EM: 4A", "ict_sector_employment"],
  ["SC: EH: H: 4A", "in_patient_hospital_beds"],
  ["SC: SH: HO: 1C", "informal_settlements"],
  ["EC: I: B: 2A", "integrated_building_management_systems"],
  ["EC: ICT: T: 3A", "intersection_control"],
  ["SC: EH: H: 1C", "life_expectancy"],
  ["EC: I: T: 8A", "low_carbon_passenger_vehicles"],
  ["SC: EH: H: 2C", "maternal_mortality_rate"],
  ["SC: SH: SA: 1C", "natural_disaster_related_deaths"],
  ["EN: EN: EQ: 2A", "noise_exposure"],
  ["EC: ICT: PS: 1A", "open_data"],
  ["EC: I: UP: 1A", "pedestrian_infrastructure"],
  ["SC: EH: H: 3C", "physicians"],
  ["SC: SH: SA: 6C", "police_service"],
  ["SC: SH: SA: 4A", "population_disaster_prone_areas"],
  ["EC: I: WS: 2C", "potable_water_supply"],
  ["SC: SH: SI: 3C", "poverty_share"],
  ["EN: EN: PSN: 3A", "protected_natural_areas"],
  ["EN: E: E: 4A", "public_building_energy_consumption"],
  ["EC: I: B: 1A", "public_building_sustainability"],
  ["SC: EH: H: 5A", "public_health_coverage"],
  ["EC: ICT: PS: 3A", "public_sector_e_procurement"],
  ["EC: I: T: 2A", "public_transport_convenience"],
  ["EC: I: T: 1C", "public_transport_network"],
  ["EC: P: IN: 1C", "r_d_expenditure"],
  ["EN: EN: PSN: 4A", "recreational_facilities"],
  ["EN: E: E: 1C", "renewable_energy_consumption"],
  ["EN: E: E: 3C", "residential_thermal_energy_consumption"],
  ["SC: SH: SA: 3A", "resilience_plans"],
  ["SC: EH: ED: 2C", "school_enrolment"],
  ["EC: I: T: 6A", "shared_bicycles"],
  ["EC: I: T: 7A", "shared_vehicles"],
  ["EC: P: IN: 3A", "small_medium_enterprises"],
  ["EC: ICT: ES: 1C", "smart_electricity_meters"],
  ["EC: ICT: WS: 1C", "smart_water_meters"],
  ["EC: I: WA: 1C", "solid_waste_collection"],
  ["EN: EN: WA: 1C", "solid_waste_treatment"],
  ["SC: EH: ED: 1C", "student_ICT_access"],
  ["EC: P: EM: 3A", "tourism_industry_employment"],
  ["SC: SH: SA: 9C", "traffic_fatalities"],
  ["EC: ICT: T: 2C", "traffic_mon"],
  ["EC: I: T: 4A", "transportation_mode_share"],
  ["EC: I: T: 5A", "travel_time_index"],
  ["EC: I: UP: 2A", "urban_development"],
  ["SC: SH: SA: 8C", "violent_crime_rate"],
  ["SC: SH: SI: 4C", "voter_participation"],
  ["EC: I: WS: 4C", "wastewater_collection"],
  ["EN: EN: WS: 2C", "water_consumption"],
  ["EC: I: WS: 1C", "water_supply"],
  ["EC: ICT: WS: 2A", "water_supply_ict_mon"],
  ["EC: I: WS: 3C", "water_supply_loss"],
  ["EC: ICT: D: 1A", "water_system_ict_mon"],
  ["EC: ICT: ICT: 5C", "wifi_public_areas"],
  ["EC: ICT: ICT: 3C", "wireless_broadband"],
  ["EC: ICT: ICT: 4C", "wireless_broadband_coverage"],
  ["EC: P: EM: 2C", "youth_unemployment_rate"],
  ["EN: EN: WS: 3C", "freshwater_consumption"],
]);

export const u4sscKpiDataseries = new Map([
  ["EC: ICT: ICT: 4C", new Set(["3g", "4g"])],
  ["EC: ICT: PS: 1A", new Set(["number", "percent"])],
  [
    "EC: I: T: 4A",
    new Set(["cycling", "public", "private", "walking", "para"]),
  ],
  [
    "EC: I: UP: 2A",
    new Set(["compact", "connected", "integrated", "inclusive", "resilient"]),
  ],
  ["EN: EN: AQ: 1C", new Set(["pm_10", "pm_2.5", "no2", "so2", "o3"])],
  ["EN: EN: WS: 4C", new Set(["primary", "secondary", "tertiary"])],
  [
    "EN: EN: WA: 1C",
    new Set([
      "landfill",
      "burnt",
      "incinerated",
      "open_dump",
      "recycled",
      "other",
    ]),
  ],
]);

export const u4sscKpiToCategory = new Map([
  ["EC: ICT: ICT: 1C", "EC: ICT: ICT"],
  ["EC: ICT: ICT: 2C", "EC: ICT: ICT"],
  ["EC: ICT: ICT: 3C", "EC: ICT: ICT"],
  ["EC: ICT: ICT: 4C", "EC: ICT: ICT"],
  ["EC: ICT: ICT: 5C", "EC: ICT: ICT"],
  ["EC: ICT: WS: 1C", "EC: ICT: WS"],
  ["EC: ICT: WS: 2A", "EC: ICT: WS"],
  ["EC: ICT: D: 1A", "EC: ICT: D"],
  ["EC: ICT: ES: 1C", "EC: ICT: ES"],
  ["EC: ICT: ES: 2A", "EC: ICT: ES"],
  ["EC: ICT: ES: 3A", "EC: ICT: ES"],
  ["EC: ICT: T: 1C", "EC: ICT: T"],
  ["EC: ICT: T: 2C", "EC: ICT: T"],
  ["EC: ICT: T: 3A", "EC: ICT: T"],
  ["EC: ICT: PS: 1A", "EC: ICT: PS"],
  ["EC: ICT: PS: 2A", "EC: ICT: PS"],
  ["EC: ICT: PS: 3A", "EC: ICT: PS"],
  ["EC: P: IN: 1C", "EC: P: IN"],
  ["EC: P: IN: 2C", "EC: P: IN"],
  ["EC: P: IN: 3A", "EC: P: IN"],
  ["EC: P: EM: 1C", "EC: P: EM"],
  ["EC: P: EM: 2C", "EC: P: EM"],
  ["EC: P: EM: 3A", "EC: P: EM"],
  ["EC: P: EM: 4A", "EC: P: EM"],
  ["EC: I: WS: 1C", "EC: I: WS"],
  ["EC: I: WS: 2C", "EC: I: WS"],
  ["EC: I: WS: 3C", "EC: I: WS"],
  ["EC: I: WS: 4C", "EC: I: WS"],
  ["EC: I: WS: 5C", "EC: I: WS"],
  ["EC: I: WA: 1C", "EC: I: WA"],
  ["EC: I: ES: 1C", "EC: I: ES"],
  ["EC: I: ES: 2C", "EC: I: ES"],
  ["EC: I: ES: 3C", "EC: I: ES"],
  ["EC: I: T: 1C", "EC: I: T"],
  ["EC: I: T: 2A", "EC: I: T"],
  ["EC: I: T: 3C", "EC: I: T"],
  ["EC: I: T: 4A", "EC: I: T"],
  ["EC: I: T: 5A", "EC: I: T"],
  ["EC: I: T: 6A", "EC: I: T"],
  ["EC: I: T: 7A", "EC: I: T"],
  ["EC: I: T: 8A", "EC: I: T"],
  ["EC: I: B: 1A", "EC: I: B"],
  ["EC: I: B: 2A", "EC: I: B"],
  ["EC: I: UP: 1A", "EC: I: UP"],
  ["EC: I: UP: 2A", "EC: I: UP"],
  ["EN: EN: AQ: 1C", "EN: EN: AQ"],
  ["EN: EN: AQ: 2C", "EN: EN: AQ"],
  ["EN: EN: WS: 1C", "EN: EN: WS"],
  ["EN: EN: WS: 2C", "EN: EN: WS"],
  ["EN: EN: WS: 3C", "EN: EN: WS"],
  ["EN: EN: WS: 4C", "EN: EN: WS"],
  ["EN: EN: WA: 1C", "EN: EN: WA"],
  ["EN: EN: EQ: 1C", "EN: EN: EQ"],
  ["EN: EN: EQ: 2A", "EN: EN: EQ"],
  ["EN: EN: PSN: 1C", "EN: EN: PSN"],
  ["EN: EN: PSN: 2A", "EN: EN: PSN"],
  ["EN: EN: PSN: 3A", "EN: EN: PSN"],
  ["EN: EN: PSN: 4A", "EN: EN: PSN"],
  ["EN: E: E: 1C", "EN: E: E"],
  ["EN: E: E: 2C", "EN: E: E"],
  ["EN: E: E: 3C", "EN: E: E"],
  ["EN: E: E: 4A", "EN: E: E"],
  ["SC: EH: ED: 1C", "SC: EH: ED"],
  ["SC: EH: ED: 2C", "SC: EH: ED"],
  ["SC: EH: ED: 3C", "SC: EH: ED"],
  ["SC: EH: ED: 4C", "SC: EH: ED"],
  ["SC: EH: ED: 5A", "SC: EH: H"],
  ["SC: EH: H: 1C", "SC: EH: H"],
  ["SC: EH: H: 2C", "SC: EH: H"],
  ["SC: EH: H: 3C", "SC: EH: H"],
  ["SC: EH: H: 4A", "SC: EH: H"],
  ["SC: EH: H: 5A", "SC: EH: H"],
  ["SC: EH: C: 1C", "SC: EH: C"],
  ["SC: EH: C: 2A", "SC: EH: C"],
  ["SC: SH: HO: 1C", "SC: SH: HO"],
  ["SC: SH: HO: 2A", "SC: SH: HO"],
  ["SC: SH: SI: 1C", "SC: SH: SI"],
  ["SC: SH: SI: 2C", "SC: SH: SI"],
  ["SC: SH: SI: 3C", "SC: SH: SI"],
  ["SC: SH: SI: 4C", "SC: SH: SI"],
  ["SC: SH: SI: 5A", "SC: SH: SI"],
  ["SC: SH: SA: 1C", "SC: SH: SA"],
  ["SC: SH: SA: 2C", "SC: SH: SA"],
  ["SC: SH: SA: 3A", "SC: SH: SA"],
  ["SC: SH: SA: 4A", "SC: SH: SA"],
  ["SC: SH: SA: 5A", "SC: SH: SA"],
  ["SC: SH: SA: 6C", "SC: SH: SA"],
  ["SC: SH: SA: 7C", "SC: SH: SA"],
  ["SC: SH: SA: 8C", "SC: SH: SA"],
  ["SC: SH: SA: 9C", "SC: SH: SA"],
  ["SC: SH: FS: 1A", "SC: SH: FS"],
]);

export const u4sscCategoryToSubdomain = new Map([
  ["EC: ICT: T", "EC: ICT"],
  ["EC: ICT: ES", "EC: ICT"],
  ["EC: ICT: PS", "EC: ICT"],
  ["EC: ICT: D", "EC: ICT"],
  ["EC: ICT: ICT", "EC: ICT"],
  ["EC: ICT: WS", "EC: ICT"],
  ["EC: P: EM", "EC: P"],
  ["EC: P: IN", "EC: P"],
  ["EC: I: WS", "EC: I"],
  ["EC: I: B", "EC: I"],
  ["EC: I: WA", "EC: I"],
  ["EC: I: ES", "EC: I"],
  ["EC: I: T", "EC: I"],
  ["EC: I: UP", "EC: I"],
  ["EN: EN: AQ", "EN: EN"],
  ["EN: EN: EQ", "EN: EN"],
  ["EN: EN: PSN", "EN: EN"],
  ["EN: EN: WS", "EN: EN"],
  ["EN: EN: WA", "EN: EN"],
  ["EN: E: E", "EN: E"],
  ["SC: EH: ED", "SC: EH"],
  ["SC: EH: H", "SC: EH"],
  ["SC: EH: C", "SC: EH"],
  ["SC: SH: FS", "SC: SH"],
  ["SC: SH: HO", "SC: SH"],
  ["SC: SH: SI", "SC: SH"],
  ["SC: SH: SA", "SC: SH"],
]);

export const u4sscSubdomainToDomain = new Map([
  ["EC: P", "EC"],
  ["EC: ICT", "EC"],
  ["EC: I", "EC"],
  ["EN: E", "EN"],
  ["EN: EN", "EN"],
  ["SC: SH", "SC"],
  ["SC: EH", "SC"],
]);

export const u4sscKpis = [
  "EC: ICT: ICT: 1C",
  "EC: ICT: ICT: 2C",
  "EC: ICT: ICT: 3C",
  "EC: ICT: ICT: 4C",
  "EC: ICT: ICT: 5C",
  "EC: ICT: WS: 1C",
  "EC: ICT: WS: 2A",
  "EC: ICT: D: 1A",
  "EC: ICT: ES: 1C",
  "EC: ICT: ES: 2A",
  "EC: ICT: ES: 3A",
  "EC: ICT: T: 1C",
  "EC: ICT: T: 2C",
  "EC: ICT: T: 3A",
  "EC: ICT: PS: 1A",
  "EC: ICT: PS: 2A",
  "EC: ICT: PS: 3A",
  "EC: P: IN: 1C",
  "EC: P: IN: 2C",
  "EC: P: IN: 3A",
  "EC: P: EM: 1C",
  "EC: P: EM: 2C",
  "EC: P: EM: 3A",
  "EC: P: EM: 4A",
  "EC: I: WS: 1C",
  "EC: I: WS: 2C",
  "EC: I: WS: 3C",
  "EC: I: WS: 4C",
  "EC: I: WS: 5C",
  "EC: I: WA: 1C",
  "EC: I: ES: 1C",
  "EC: I: ES: 2C",
  "EC: I: ES: 3C",
  "EC: I: T: 1C",
  "EC: I: T: 2A",
  "EC: I: T: 3C",
  "EC: I: T: 4A",
  "EC: I: T: 5A",
  "EC: I: T: 6A",
  "EC: I: T: 7A",
  "EC: I: T: 8A",
  "EC: I: B: 1A",
  "EC: I: B: 2A",
  "EC: I: UP: 1A",
  "EC: I: UP: 2A",

  // Environmental
  "EN: EN: AQ: 1C",
  "EN: EN: AQ: 2C",
  "EN: EN: WS: 1C",
  "EN: EN: WS: 2C",
  "EN: EN: WS: 3C",
  "EN: EN: WS: 4C",
  "EN: EN: WA: 1C",
  "EN: EN: EQ: 1C",
  "EN: EN: EQ: 2A",
  "EN: EN: PSN: 1C",
  "EN: EN: PSN: 2A",
  "EN: EN: PSN: 3A",
  "EN: EN: PSN: 4A",
  "EN: E: E: 1C",
  "EN: E: E: 2C",
  "EN: E: E: 3C",
  "EN: E: E: 4A",

  // Society and Culture
  "SC: EH: ED: 1C",
  "SC: EH: ED: 2C",
  "SC: EH: ED: 3C",
  "SC: EH: ED: 4C",
  "SC: EH: ED: 5A",
  "SC: EH: H: 1C",
  "SC: EH: H: 2C",
  "SC: EH: H: 3C",
  "SC: EH: H: 4A",
  "SC: EH: H: 5A",
  "SC: EH: C: 1C",
  "SC: EH: C: 2A",
  "SC: SH: HO: 1C",
  "SC: SH: HO: 2A",
  "SC: SH: SI: 1C",
  "SC: SH: SI: 2C",
  "SC: SH: SI: 3C",
  "SC: SH: SI: 4C",
  "SC: SH: SI: 5A",
  "SC: SH: SA: 1C",
  "SC: SH: SA: 2C",
  "SC: SH: SA: 3A",
  "SC: SH: SA: 4A",
  "SC: SH: SA: 5A",
  "SC: SH: SA: 6C",
  "SC: SH: SA: 7C",
  "SC: SH: SA: 8C",
  "SC: SH: SA: 9C",
  "SC: SH: FS: 1A",
];

export const TKTransform = new Map([
  // Errors in spec
  ["SC: EH: ED:1C", "SC: EH: ED: 1C"],
  ["SC: EH: ED:2C", "SC: EH: ED: 2C"],
  ["SC: EH: H:1C", "SC: EH: H: 1C"],
  ["SC: EH: H:3C", "SC: EH: H: 3C"],

  // Errors by TK
  ["SC: EH: H: 6A", "SC: EH: ED: 5A"],
]);

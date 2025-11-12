var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
    border_hover_color: ""
  },
  state_specific: {
    GT01: {
      name: "Guatemala"
    },
    GT02: {
      name: "El Progreso"
    },
    GT03: {
      name: "Sacatepéquez"
    },
    GT04: {
      name: "Chimaltenango"
    },
    GT05: {
      name: "Escuintla"
    },
    GT06: {
      name: "Santa Rosa"
    },
    GT07: {
      name: "Sololá"
    },
    GT08: {
      name: "Totonicapán"
    },
    GT09: {
      name: "Quezaltenango"
    },
    GT10: {
      name: "Suchitepéquez"
    },
    GT11: {
      name: "Retalhuleu"
    },
    GT12: {
      name: "San Marcos"
    },
    GT13: {
      name: "Huehuetenango"
    },
    GT14: {
      name: "Quiché"
    },
    GT15: {
      name: "Baja Verapaz"
    },
    GT16: {
      name: "Alta Verapaz"
    },
    GT17: {
      name: "Petén"
    },
    GT18: {
      name: "Izabal"
    },
    GT19: {
      name: "Zacapa"
    },
    GT20: {
      name: "Chiquimula"
    },
    GT21: {
      name: "Jalapa"
    },
    GT22: {
      name: "Jutiapa"
    }
  },
  locations: {},
  labels: {
    GT01: {
      name: "Guatemala",
      parent_id: "GT01"
    },
    GT02: {
      name: "El Progreso",
      parent_id: "GT02"
    },
    GT03: {
      name: "Sacatepéquez",
      parent_id: "GT03"
    },
    GT04: {
      name: "Chimaltenango",
      parent_id: "GT04"
    },
    GT05: {
      name: "Escuintla",
      parent_id: "GT05"
    },
    GT06: {
      name: "Santa Rosa",
      parent_id: "GT06"
    },
    GT07: {
      name: "Sololá",
      parent_id: "GT07"
    },
    GT08: {
      name: "Totonicapán",
      parent_id: "GT08"
    },
    GT09: {
      name: "Quezaltenango",
      parent_id: "GT09"
    },
    GT10: {
      name: "Suchitepéquez",
      parent_id: "GT10"
    },
    GT11: {
      name: "Retalhuleu",
      parent_id: "GT11"
    },
    GT12: {
      name: "San Marcos",
      parent_id: "GT12"
    },
    GT13: {
      name: "Huehuetenango",
      parent_id: "GT13"
    },
    GT14: {
      name: "Quiché",
      parent_id: "GT14"
    },
    GT15: {
      name: "Baja Verapaz",
      parent_id: "GT15"
    },
    GT16: {
      name: "Alta Verapaz",
      parent_id: "GT16"
    },
    GT17: {
      name: "Petén",
      parent_id: "GT17"
    },
    GT18: {
      name: "Izabal",
      parent_id: "GT18"
    },
    GT19: {
      name: "Zacapa",
      parent_id: "GT19"
    },
    GT20: {
      name: "Chiquimula",
      parent_id: "GT20"
    },
    GT21: {
      name: "Jalapa",
      parent_id: "GT21"
    },
    GT22: {
      name: "Jutiapa",
      parent_id: "GT22"
    }
  },
  legend: {
    entries: []
  },
  regions: {
    "0": {
      states: [
        "GT01"
      ],
      name: "Región Metropolitana",
      description: "La Información que desas colocar",
      hover_color: "#c7e2d2"
    },
    "1": {
      states: [
        "GT15",
        "GT16"
      ],
      name: "Región Norte",
      description: "La Información que desas colocar",
      hover_color: "#cbe686"
    },
    "2": {
      states: [
        "GT02",
        "GT18",
        "GT19",
        "GT20"
      ],
      name: "Región Nororiente",
      description: "La Información que desas colocar",
      hover_color: "#387d54"
    },
    "3": {
      states: [
        "GT06",
        "GT21",
        "GT22"
      ],
      name: "Región Suroriente",
      description: "La Información que desas colocar",
      hover_color: "#d2d99c"
    },
    "4": {
      states: [
        "GT03",
        "GT04",
        "GT05"
      ],
      name: "Región Central",
      description: "La Información que desas colocar",
      hover_color: "#2f5840"
    },
    "5": {
      states: [
        "GT12",
        "GT11",
        "GT09",
        "GT08",
        "GT07",
        "GT10"
      ],
      name: "Región Suroccidente",
      description: "La Información que desas colocar",
      hover_color: "#7ae2a3"
    },
    "6": {
      states: [
        "GT17"
      ],
      name: "Región Petén",
      description: "La Información que desas colocar",
      hover_color: "#4caf50"
    },
    "7": {
      states: [
        "GT13",
        "GT14"
      ],
      name: "Región Noroccidente",
      description: "La Información que desas colocar",
      hover_color: "#a8d5ba"
    }
  }
};
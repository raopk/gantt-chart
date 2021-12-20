AmCharts.useUTC = true;
var chart = AmCharts.makeChart( "chartdiv", {
    "type": "gantt",
    "theme": "light",
    "marginRight": 70,
    "period": "DD",
    "dataDateFormat":"MM-DD-YYYY",
    "balloonDateFormat": "JJ:NN",
    "columnWidth": 0.5,
    "valueAxis": {
        "type": "date",
        "minimum": 1,
        "maximum": 31
    },
    "brightnessStep": 10,
    "graph": {
        "fillAlphas": 1,
        "balloonText": "<b>[[task]]</b>:[[open]] - [[value]]"
    },
    "rotate": true,
    "categoryField": "category",
    "segmentsField": "segments",
    "colorField": "color",
    "startDate": "01-08-2018",
    "startField": "start",
    "endField": "end",
    "durationField": "duration",
    "dataProvider": [ {
        "category": "PREMISE",
        "segments": [ {
            "start": "01-08-2018",
            "duration": 5,
            "color": "#fff",
            "task": ""
        }, {
            "duration": 2,
            "color": "#fff",
            "task": ""
        }]
    }, {
        "category": "Dev App",
        "segments": [ {
            "start": 1,
            "duration": 3,
            "color": "#003399",
            "task": "Preparation"
        }, {
            "duration": 2,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 2,
            "color": "#6E92B6",
            "task": "Lodgement"
        }, {
            "duration": 12,
            "color": "#336699",
            "task": "Assess"
        }]
    }, {
        "category": "Pre-Construct",
        "segments": [ {
            "start": 3,
            "duration": 4,
            "color": "#003399",
            "task": "Preparation"
        }, {
            "duration": 2,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 1,
            "color": "#6E92B6",
            "task": "Lodgement"
        }, {
            "duration": 10,
            "color": "#336699",
            "task": "Assess"
        } ]
    },
      {
        "category": "WasteWater",
        "segments": [ {
            "start": 4,
            "duration": 4,
            "color": "#003399",
            "task": "Preparation"
        }, {
            "duration": 2,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 2,
            "color": "#6E92B6",
            "task": "Lodgement"
        }, {
            "duration": 15,
            "color": "#336699",
            "task": "Assess"
        } ]
    },{
        "category": "Post Construct",
        "segments": [ {
            "start": 2,
            "duration": 5,
            "color": "#003399",
            "task": "Preparation"
        }, {
            "duration": 2,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 2,
            "color": "#6E92B6",
            "task": "Lodgement"
        }, {
            "duration": 10,
            "color": "#336699",
            "task": "Assess"
        } ]
    }, {
        "category": "FOOD",
        "segments": [ {
            "start": 15,
            "duration": 3,
            "color": "#FFF",
            "task": ""
        } ]
    }, {
        "category": "FS Training",
        "segments": [ {
            "start": 8,
            "duration": 5,
            "color": "#003399",
            "task": "Prepare"
        }, {
            "duration": 2,
            "color": "#497DB2",
            "task": "Assess"
        }, {
            "duration": 2,
            "color": "#6E92B6",
            "task": "Lodge"
        },{
            "duration": 10,
            "color": "#336699",
            "task": "Assess"
        }  ]
    }, {
        "category": "FS Inspect",
        "segments": [ {
            "start": 11,
            "duration": 5,
            "color": "#003399",
            "task": "Preparation"
        },{
            "duration": 2,
            "color": "#497DB2",
            "task": "Assess"
        }, {
            "duration": 2,
            "color": "#6E92B6",
            "task": "Lodge"
        },{
            "duration": 15,
            "color": "#336699",
            "task": "Assess"
        }  ]
    }, {
        "category": "ALCOHOL",
        "segments": [ {
            "start": 17,
            "duration": 4,
            "color": "#fff",
            "task": ""
        }, ]
    }, {
        "category": "RSA & Police",
        "segments": [ {
            "start": 14,
            "duration": 4,
            "color": "#003399",
            "task": "Preparation"
        }, {
            "duration": 1,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 2,
            "color": "#6E92B6",
            "task": "Lodge"
        },{
            "duration": 10,
            "color": "#336699",
            "task": "Assess"
        } ]
    }, {
        "category": "On-prem liquor",
        "segments": [ {
            "start": 13,
            "duration": 3,
            "color": "#003399",
            "task": "Preparation"
        }, {
            "duration": 2,
            "color": "#497DB2",
            "task": "Assess"
        }, {
            "duration": 1,
            "color": "#6E92B6",
            "task": "Lodge"
        },{
            "duration": 4,
            "color": "#336699",
            "task": "Assess"
        } ]
    }, {
        "category": "Small Bar",
        "segments": [ {
            "start": 12,
            "duration": 2,
            "color": "#003399",
            "task": "Preparation"
        }, {
            "start": 14,
            "duration": 2,
            "color": "#497DB2",
            "task": "Assessment"
        },{
            "duration": 1,
            "color": "#6E92B6",
            "task": "Lodge"
        },{
            "duration": 4,
            "color": "#336699",
            "task": "Assess"
        } ]
    }, {
        "category": "OPERATIONS",
        "segments": [ {
            "start": 11,
            "duration": 8,
            "color": "#fff",
            "task": ""
        } ]
    }, {
        "category": "Play Music",
        "segments": [ {
            "start": 12,
            "duration": 2,
            "color": "#003399",
            "task": "Preparation"
        }, {
            "duration": 2,
            "color": "#497DB2",
            "task": "Assess"
        }, {
            "duration": 1,
            "color": "#6E92B6",
            "task": "Lodge"
        },{
            "duration": 2,
            "color": "#336699",
            "task": "Assess"
        } ]
    }, {
        "category": "Setup Staff",
        "segments": [ {
            "start": 18,
            "duration": 2,
            "color": "#003399",
            "task": "Preparation"
        },{
            "duration": 1,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 4,
            "color": "#6E92B6",
            "task": "Lodge"
        },{
            "duration": 6,
            "color": "#336699",
            "task": "Assess"
        }  ]
    }, {
        "category": "Brand",
        "segments": [ {
            "start": 17,
            "duration": 5,
            "color": "#003399",
            "task": "Prepare"
        }, {
            "duration": 2,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 2,
            "color": "#6E92B6",
            "task": "Lodge"
        },{
            "duration": 10,
            "color": "#336699",
            "task": "Assess"
        } ]
    
    } ],
    "valueScrollbar": {
        "autoGridCount":true
    },
    "chartCursor": {
        "cursorColor":"#003399",
        "valueBalloonsEnabled": false,
        "cursorAlpha": 0,
        "valueLineAlpha":0.5,
        "valueLineBalloonEnabled": true,
        "valueLineEnabled": true,
        "zoomable":true,
        "valueZoomable":false
    },
    "export": {
        "enabled": true
     }
} );
AmCharts.useUTC = true;
var chart = AmCharts.makeChart( "chartdiv", {
    "type": "gantt",
    "theme": "light",
    "marginRight": 70,
    "period": "DD",
    "dataDateFormat":"MM-DD-YYYY",
    "balloonDateFormat": "JJ:NN",
    "columnWidth": 0.7,
    "valueAxis": {
        "type": "date",
        "minimum": 1,
        "maximum": 365
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
    "startDate": "01-01-2022",
    "startField": "start",
    "endField": "end",
    "durationField": "duration",
    "dataProvider": [ {
        "category": "JANUARY",
        "segments": [ {
            "start": "01-01-2022",
            "duration": 1,
            "color": "#fff",
            "task": ""
        }, {
            "duration": 2,
            "color": "#fff",
            "task": ""
        }]
    }, {
        "category": "DEW Report",
        "segments": [ {
            "start": 1,
            "duration": 1,
            "color": "#003399",
            "task": "Complete"
        }, {
            "duration": 1,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 2,
            "color": "#6E92B6",
            "task": "Deploy"
        }]
    }, {
        "category": "Spring demographics report",
        "segments": [ {
            "start": 5,
            "duration": 1,
            "color": "#003399",
            "task": "Preparation"
        }, {
            "duration": 3,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 1,
            "color": "#6E92B6",
            "task": "Deploy"
        } ]
    },
      {
        "category": "Enrollment reports for each major",
        "segments": [ {
            "start": 7,
            "duration": 1,
            "color": "#003399",
            "task": "Preparation"
        }, {
            "duration": 3,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 1,
            "color": "#6E92B6",
            "task": "Deploy"
        } ]
    },{
        "category": "Forecasting for next Fall and Spring terms",
        "segments": [ {
            "start": 8,
            "duration": 8,
            "color": "#003399",
            "task": "Preparation"
        }, {
            "duration": 2,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 2,
            "color": "#6E92B6",
            "task": "Deploy"
        }, {
            "duration": 7,
            "color": "#336699",
            "task": "Assess"
        } ]
            },{
        "category": "All Courses Offered in UF Online for COIP",
        "segments": [ {
            "start": 8,
            "duration": 8,
            "color": "#003399",
            "task": "Preparation"
        }, {
            "duration": 2,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 2,
            "color": "#6E92B6",
            "task": "Deploy"
        }, {
            "duration": 7,
            "color": "#336699",
            "task": "Assess"
        } ]
    }, {
        "category": "",
        "segments": [ {
            "start": 8,
            "duration": 31,
            "color": "#fff",
            "task": ""
        } ]
         //FEBRUARY
    }, {
        "category": "College Payments - Instruction and Advising",
        "segments": [ {
            "start": 31,
            "duration": 10,
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
        "category": "UF Online Annual Report",
        "segments": [ {
            "start": 31,
            "duration": 10,
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
        "category": "Forecasting for Next Spring",
        "segments": [ {
            "start": 31,
            "duration": 10,
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
        "category": "",
        "segments": [ {
            "start": 17,
            "duration": 4,
            "color": "#fff",
            "task": ""
        }, ]
         //MARCH
    }, {
        "category": "Summer Registration Preparation",
        "segments": [ {
            "start": 61,
            "duration": 10,
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
        "category": "Project I",
        "segments": [ {
            "start": 61,
            "duration": 10,
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
        "category": "Project II",
        "segments": [ {
            "start": 61,
            "duration": 10,
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
        "category": "",
        "segments": [ {
            "start": 81,
            "duration": 8,
            "color": "#fff",
            "task": ""
        } ]
         //APRIL
        }, {
        "category": "Spring Graduation files",
        "segments": [ {
            "start": 91,
            "duration": 2,
            "color": "#003399",
            "task": "Preparation"
        }, {
            "duration": 10,
            "color": "#497DB2",
            "task": "Assess"
        }, {
            "duration": 8,
            "color": "#6E92B6",
            "task": "Lodge"
        },{
            "duration": 20,
            "color": "#336699",
            "task": "Assess"
        } ]
    }, {
        "category": "Project III",
        "segments": [ {
            "start": 91,
            "duration": 2,
            "color": "#003399",
            "task": "Preparation"
        }, {
            "duration": 10,
            "color": "#497DB2",
            "task": "Assess"
        }, {
            "duration": 8,
            "color": "#6E92B6",
            "task": "Lodge"
        },{
            "duration": 20,
            "color": "#336699",
            "task": "Assess"
        } ]
         //JUNE
    }, {
        "category": "College payment reports for Summer A/C ",
        "segments": [ {
            "start": 151,
            "duration": 2,
            "color": "#003399",
            "task": "Preparation"
        },{
            "duration": 9,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 5,
            "color": "#6E92B6",
            "task": "Lodge"
        },{
            "duration": 10,
            "color": "#336699",
            "task": "Assess"
        }  ]
         //JULY
    }, {
        "category": "College payment reports for Summer B term ",
        "segments": [ {
            "start": 182,
            "duration": 5,
            "color": "#003399",
            "task": "Prepare"
        }, {
            "duration": 10,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 5,
            "color": "#6E92B6",
            "task": "Lodge"
        },{
            "duration": 10,
            "color": "#336699",
            "task": "Assess"
        } ]
         //AUGUST
                }, {
        "category": "US News survey data questions",
            "segments": [ {
            "start": 212,
            "duration": 5,
            "color": "#003399",
            "task": "Prepare"
        }, {
            "duration": 10,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 5,
            "color": "#6E92B6",
            "task": "Lodge"
        },{
            "duration": 10,
            "color": "#336699",
            "task": "Assess"
        } ]
                }, {
        "category": "Summer Graduation Report",
            "segments": [ {
            "start": 212,
            "duration": 5,
            "color": "#003399",
            "task": "Prepare"
        }, {
            "duration": 10,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 5,
            "color": "#6E92B6",
            "task": "Lodge"
        },{
            "duration": 10,
            "color": "#336699",
            "task": "Assess"
        } ]
        //SEPTEMBER
        }, {
        "category": "Fall demographics report ",
            "segments": [ {
            "start": 243,
            "duration": 35,
            "color": "#003399",
            "task": "Prepare"
        }, {
            "duration": 10,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 5,
            "color": "#6E92B6",
            "task": "Lodge"
        },{
            "duration": 10,
            "color": "#336699",
            "task": "Assess"
        } ]
                //NOVEMBER
        }, {
        "category": "Student Experience Survey Analysis ",
            "segments": [ {
            "start": 243,
            "duration": 35,
            "color": "#003399",
            "task": "Prepare"
        }, {
            "duration": 10,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 5,
            "color": "#6E92B6",
            "task": "Lodge"
        },{
            "duration": 10,
            "color": "#336699",
            "task": "Assess"
        } ]
                //DECEMBER
        }, {
        "category": "Fall Graduation files",
            "segments": [ {
            "start": 300,
            "duration": 35,
            "color": "#003399",
            "task": "Prepare"
        }, {
            "duration": 10,
            "color": "#497DB2",
            "task": "Review"
        }, {
            "duration": 5,
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
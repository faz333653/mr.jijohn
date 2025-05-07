var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-area",
      "name": "living area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4775388484416023,
          "pitch": 0.06614396084275675,
          "rotation": 1.5707963267948966,
          "target": "1-dining-room"
        },
        {
          "yaw": -0.9062311929473701,
          "pitch": 0.1159977409948354,
          "rotation": 10.995574287564278,
          "target": "5-bedroom--02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining-room",
      "name": "dining room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3930201301844995,
          "pitch": 0.30642032131819263,
          "rotation": 3.141592653589793,
          "target": "2-cwash"
        },
        {
          "yaw": -1.023374064827042,
          "pitch": 0.1356848508942754,
          "rotation": 1.5707963267948966,
          "target": "4-bedroom--01"
        },
        {
          "yaw": 0.12617046017595612,
          "pitch": 0.0267301363485295,
          "rotation": 3.141592653589793,
          "target": "3-kitchen"
        },
        {
          "yaw": -2.68510552464741,
          "pitch": 0.17373803110974606,
          "rotation": 7.853981633974483,
          "target": "5-bedroom--02"
        },
        {
          "yaw": -2.991229770074902,
          "pitch": 0.01762583521387029,
          "rotation": 10.210176124166829,
          "target": "0-living-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cwash",
      "name": "c.wash",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1947730855470216,
          "pitch": 0.13669433476512438,
          "rotation": 3.9269908169872414,
          "target": "1-dining-room"
        },
        {
          "yaw": 2.878186661281072,
          "pitch": 0.11707707156585734,
          "rotation": 3.141592653589793,
          "target": "4-bedroom--01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.623472941925625,
          "pitch": 0.12795393563604662,
          "rotation": 3.141592653589793,
          "target": "1-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom--01",
      "name": "bedroom -01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.659796182289794,
          "pitch": 0.3099490463103258,
          "rotation": 2.356194490192345,
          "target": "2-cwash"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom--02",
      "name": "bedroom -02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.786644002876499,
          "pitch": 0.22813357275097879,
          "rotation": 2.356194490192345,
          "target": "0-living-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};

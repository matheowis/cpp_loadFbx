const piramidDataRaw = [
  {
    "name": "Vertices",
    "properties": [
      { "type": "d", "value": [-50.000000, -50.000000, 0.000000, 50.000000, -50.000000, 0.000000, -50.000000, 50.000000, 0.000000, 50.000000, 50.000000, 0.000000, 0.000000, 0.000000, 100.000000] }
    ]
  },
  {
    "name": "PolygonVertexIndex",
    "properties": [
      { "type": "i", "value": [0, 2, 3, -2, 0, 1, -5, 1, 3, -5, 3, 2, -5, 2, 0, -5] }
    ]
  },
  {
    "name": "Normals",
    "properties": [
      { "type": "d", "value": [0.000000, 0.000000, -1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000, -1.000000, 0.000000, -0.894427, 0.447214, 0.000000, -0.894427, 0.447214, 0.000000, -0.894427, 0.447214, 0.894427, 0.000000, 0.447214, 0.894427, 0.000000, 0.447214, 0.894427, 0.000000, 0.447214, 0.000000, 0.894427, 0.447214, 0.000000, 0.894427, 0.447214, 0.000000, 0.894427, 0.447214, -0.894427, 0.000000, 0.447214, -0.894427, 0.000000, 0.447214, -0.894427, 0.000000, 0.447214] }
    ]
  },
  {
    "name": "UV",
    "properties": [
      { "type": "d", "value": [1.000000, 0.000000, -99.000000, 0.000000, 1.000000, 100.000000, -99.000000, 100.000000, 0.000000, 0.000000, 100.000000, 0.000000, 50.000000, 100.000000, 0.000000, 0.000000, 100.000000, 0.000000, 50.000000, 100.000000, 0.000000, 0.000000, 100.000000, 0.000000, 50.000000, 100.000000, 0.000000, 0.000000, 100.000000, 0.000000, 50.000000, 100.000000] }
    ]
  },
  {
    "name": "UVIndex",
    "properties": [
      { "type": "i", "value": [0, 2, 3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] }
    ]
  },

]

const piramidDataSimple = {
  Vertices: [-50.000000, -50.000000, 0.000000, 50.000000, -50.000000, 0.000000, -50.000000, 50.000000, 0.000000, 50.000000, 50.000000, 0.000000, 0.000000, 0.000000, 100.000000],
  PolygonVertexIndex: [0, 2, 3, -2, 0, 1, -5, 1, 3, -5, 3, 2, -5, 2, 0, -5],
  Normals: [0.000000, 0.000000, -1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000, -1.000000, 0.000000, -0.894427, 0.447214, 0.000000, -0.894427, 0.447214, 0.000000, -0.894427, 0.447214, 0.894427, 0.000000, 0.447214, 0.894427, 0.000000, 0.447214, 0.894427, 0.000000, 0.447214, 0.000000, 0.894427, 0.447214, 0.000000, 0.894427, 0.447214, 0.000000, 0.894427, 0.447214, -0.894427, 0.000000, 0.447214, -0.894427, 0.000000, 0.447214, -0.894427, 0.000000, 0.447214],
  UV: [1.000000, 0.000000, -99.000000, 0.000000, 1.000000, 100.000000, -99.000000, 100.000000, 0.000000, 0.000000, 100.000000, 0.000000, 50.000000, 100.000000, 0.000000, 0.000000, 100.000000, 0.000000, 50.000000, 100.000000, 0.000000, 0.000000, 100.000000, 0.000000, 50.000000, 100.000000, 0.000000, 0.000000, 100.000000, 0.000000, 50.000000, 100.000000],
  UVIndex: [0, 2, 3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
}

const piramidDataLengths = {
  Vertices: 15,//5 vector3
  PolygonVertexIndex: 16,
  Normals: 48,//16 vector3
  UV: 32,//16 vector2
  UVIndex: 16,
}

const pirmidRawGeometry = {
  "version": 7400,
  "objects": {
        "Geometry": "\u0000\u0001Geometry",
        "Vertices": [-50.000000, -50.000000, 0.000000, 50.000000, -50.000000, 0.000000, -50.000000, 50.000000, 0.000000, 50.000000, 50.000000, 0.000000, 0.000000, 0.000000, 100.000000],
        "PolygonVertexIndex": [0, 2, 3, -2, 0, 1, -5, 1, 3, -5, 3, 2, -5, 2, 0, -5],
        "Normals": [0.000000, 0.000000, -1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000, -1.000000, 0.000000, -0.894427, 0.447214, 0.000000, -0.894427, 0.447214, 0.000000, -0.894427, 0.447214, 0.894427, 0.000000, 0.447214, 0.894427, 0.000000, 0.447214, 0.894427, 0.000000, 0.447214, 0.000000, 0.894427, 0.447214, 0.000000, 0.894427, 0.447214, 0.000000, 0.894427, 0.447214, -0.894427, 0.000000, 0.447214, -0.894427, 0.000000, 0.447214, -0.894427, 0.000000, 0.447214],
        "UV": [1.000000, 0.000000, -99.000000, 0.000000, 1.000000, 100.000000, -99.000000, 100.000000, 0.000000, 0.000000, 100.000000, 0.000000, 50.000000, 100.000000, 0.000000, 0.000000, 100.000000, 0.000000, 50.000000, 100.000000, 0.000000, 0.000000, 100.000000, 0.000000, 50.000000, 100.000000, 0.000000, 0.000000, 100.000000, 0.000000, 50.000000, 100.000000],
        "UVIndex": [0, 2, 3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        "Model": "Box001\u0000\u0001Model",
  }
}
// 0 - file info date and stuff
// 8 - objects

const Raw = {
  "version": 7400,
  "children": [
    { "name": "FBXHeaderExtension",
      "children": [
        { "name": "FBXHeaderVersion",
          "properties": [
            { "type": "I", "value": 1003 }
          ]
        },
        { "name": "FBXVersion",
          "properties": [
            { "type": "I", "value": 7400 }
          ]
        },
        { "name": "EncryptionType",
          "properties": [
            { "type": "I", "value": 0 }
          ]
        },
        { "name": "CreationTimeStamp",
          "children": [
            { "name": "Version",
              "properties": [
                { "type": "I", "value": 1000 }
              ]
            },
            { "name": "Year",
              "properties": [
                { "type": "I", "value": 2019 }
              ]
            },
            { "name": "Month",
              "properties": [
                { "type": "I", "value": 5 }
              ]
            },
            { "name": "Day",
              "properties": [
                { "type": "I", "value": 23 }
              ]
            },
            { "name": "Hour",
              "properties": [
                { "type": "I", "value": 13 }
              ]
            },
            { "name": "Minute",
              "properties": [
                { "type": "I", "value": 10 }
              ]
            },
            { "name": "Second",
              "properties": [
                { "type": "I", "value": 45 }
              ]
            },
            { "name": "Millisecond",
              "properties": [
                { "type": "I", "value": 794 }
              ]
            },
            { "name": ""
            }
          ]
        },
        { "name": "Creator",
          "properties": [
            { "type": "S", "value": "FBX SDK/FBX Plugins version 2015.0" }
          ]
        },
        { "name": "SceneInfo",
          "properties": [
            { "type": "S", "value": "GlobalInfo\u0000\u0001SceneInfo" },
            { "type": "S", "value": "UserData" }
          ],
          "children": [
            { "name": "Type",
              "properties": [
                { "type": "S", "value": "UserData" }
              ]
            },
            { "name": "Version",
              "properties": [
                { "type": "I", "value": 100 }
              ]
            },
            { "name": "MetaData",
              "children": [
                { "name": "Version",
                  "properties": [
                    { "type": "I", "value": 100 }
                  ]
                },
                { "name": "Title",
                  "properties": [
                    { "type": "S", "value": "" }
                  ]
                },
                { "name": "Subject",
                  "properties": [
                    { "type": "S", "value": "" }
                  ]
                },
                { "name": "Author",
                  "properties": [
                    { "type": "S", "value": "" }
                  ]
                },
                { "name": "Keywords",
                  "properties": [
                    { "type": "S", "value": "" }
                  ]
                },
                { "name": "Revision",
                  "properties": [
                    { "type": "S", "value": "" }
                  ]
                },
                { "name": "Comment",
                  "properties": [
                    { "type": "S", "value": "" }
                  ]
                },
                { "name": ""
                }
              ]
            },
            { "name": "Properties70",
              "children": [
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "DocumentUrl" },
                    { "type": "S", "value": "KString" },
                    { "type": "S", "value": "Url" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "E:\\VisualStudioProjects\\private\\repos-cpp\\zLibTest\\zLibTest\\models\\piramid.FBX" }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "SrcDocumentUrl" },
                    { "type": "S", "value": "KString" },
                    { "type": "S", "value": "Url" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "E:\\VisualStudioProjects\\private\\repos-cpp\\zLibTest\\zLibTest\\models\\piramid.FBX" }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "Original" },
                    { "type": "S", "value": "Compound" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "" }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "Original|ApplicationVendor" },
                    { "type": "S", "value": "KString" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "Autodesk" }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "Original|ApplicationName" },
                    { "type": "S", "value": "KString" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "3ds Design" }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "Original|ApplicationVersion" },
                    { "type": "S", "value": "KString" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "2014" }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "Original|DateTime_GMT" },
                    { "type": "S", "value": "DateTime" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "23/05/2019 11:10:45.791" }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "Original|FileName" },
                    { "type": "S", "value": "KString" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "E:\\VisualStudioProjects\\private\\repos-cpp\\zLibTest\\zLibTest\\models\\piramid.FBX" }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "LastSaved" },
                    { "type": "S", "value": "Compound" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "" }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "LastSaved|ApplicationVendor" },
                    { "type": "S", "value": "KString" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "Autodesk" }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "LastSaved|ApplicationName" },
                    { "type": "S", "value": "KString" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "3ds Design" }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "LastSaved|ApplicationVersion" },
                    { "type": "S", "value": "KString" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "2014" }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "LastSaved|DateTime_GMT" },
                    { "type": "S", "value": "DateTime" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "23/05/2019 11:10:45.791" }
                  ]
                },
                { "name": ""
                }
              ]
            },
            { "name": ""
            }
          ]
        },
        { "name": ""
        }
      ]
    },
    { "name": "FileId",
      "properties": [
        { "type": "R", "value": "44 -78 43 -18 -77 34 -56 -60 -66 -64 -69 40 -83 38 -16 -3 " }
      ]
    },
    { "name": "CreationTime",
      "properties": [
        { "type": "S", "value": "2019-05-23 13:10:45:794" }
      ]
    },
    { "name": "Creator",
      "properties": [
        { "type": "S", "value": "FBX SDK/FBX Plugins version 2015.0 build=20140108" }
      ]
    },
    { "name": "GlobalSettings",
      "children": [
        { "name": "Version",
          "properties": [
            { "type": "I", "value": 1000 }
          ]
        },
        { "name": "Properties70",
          "children": [
            { "name": "P",
              "properties": [
                { "type": "S", "value": "UpAxis" },
                { "type": "S", "value": "int" },
                { "type": "S", "value": "Integer" },
                { "type": "S", "value": "" },
                { "type": "I", "value": 1 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "UpAxisSign" },
                { "type": "S", "value": "int" },
                { "type": "S", "value": "Integer" },
                { "type": "S", "value": "" },
                { "type": "I", "value": 1 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "FrontAxis" },
                { "type": "S", "value": "int" },
                { "type": "S", "value": "Integer" },
                { "type": "S", "value": "" },
                { "type": "I", "value": 2 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "FrontAxisSign" },
                { "type": "S", "value": "int" },
                { "type": "S", "value": "Integer" },
                { "type": "S", "value": "" },
                { "type": "I", "value": 1 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "CoordAxis" },
                { "type": "S", "value": "int" },
                { "type": "S", "value": "Integer" },
                { "type": "S", "value": "" },
                { "type": "I", "value": 0 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "CoordAxisSign" },
                { "type": "S", "value": "int" },
                { "type": "S", "value": "Integer" },
                { "type": "S", "value": "" },
                { "type": "I", "value": 1 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "OriginalUpAxis" },
                { "type": "S", "value": "int" },
                { "type": "S", "value": "Integer" },
                { "type": "S", "value": "" },
                { "type": "I", "value": 2 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "OriginalUpAxisSign" },
                { "type": "S", "value": "int" },
                { "type": "S", "value": "Integer" },
                { "type": "S", "value": "" },
                { "type": "I", "value": 1 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "UnitScaleFactor" },
                { "type": "S", "value": "double" },
                { "type": "S", "value": "Number" },
                { "type": "S", "value": "" },
                { "type": "D", "value": 2.540000 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "OriginalUnitScaleFactor" },
                { "type": "S", "value": "double" },
                { "type": "S", "value": "Number" },
                { "type": "S", "value": "" },
                { "type": "D", "value": 2.540000 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "AmbientColor" },
                { "type": "S", "value": "ColorRGB" },
                { "type": "S", "value": "Color" },
                { "type": "S", "value": "" },
                { "type": "D", "value": 0.000000 },
                { "type": "D", "value": 0.000000 },
                { "type": "D", "value": 0.000000 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "DefaultCamera" },
                { "type": "S", "value": "KString" },
                { "type": "S", "value": "" },
                { "type": "S", "value": "" },
                { "type": "S", "value": "Producer Perspective" }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "TimeMode" },
                { "type": "S", "value": "enum" },
                { "type": "S", "value": "" },
                { "type": "S", "value": "" },
                { "type": "I", "value": 6 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "TimeProtocol" },
                { "type": "S", "value": "enum" },
                { "type": "S", "value": "" },
                { "type": "S", "value": "" },
                { "type": "I", "value": 2 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "SnapOnFrameMode" },
                { "type": "S", "value": "enum" },
                { "type": "S", "value": "" },
                { "type": "S", "value": "" },
                { "type": "I", "value": 0 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "TimeSpanStart" },
                { "type": "S", "value": "KTime" },
                { "type": "S", "value": "Time" },
                { "type": "S", "value": "" },
                { "type": "L", "value": 0 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "TimeSpanStop" },
                { "type": "S", "value": "KTime" },
                { "type": "S", "value": "Time" },
                { "type": "S", "value": "" },
                { "type": "L", "value": 153953860000 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "CustomFrameRate" },
                { "type": "S", "value": "double" },
                { "type": "S", "value": "Number" },
                { "type": "S", "value": "" },
                { "type": "D", "value": -1.000000 }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "TimeMarker" },
                { "type": "S", "value": "Compound" },
                { "type": "S", "value": "" },
                { "type": "S", "value": "" }
              ]
            },
            { "name": "P",
              "properties": [
                { "type": "S", "value": "CurrentTimeMarker" },
                { "type": "S", "value": "int" },
                { "type": "S", "value": "Integer" },
                { "type": "S", "value": "" },
                { "type": "I", "value": -1 }
              ]
            },
            { "name": ""
            }
          ]
        },
        { "name": ""
        }
      ]
    },
    { "name": "Documents",
      "children": [
        { "name": "Count",
          "properties": [
            { "type": "I", "value": 1 }
          ]
        },
        { "name": "Document",
          "properties": [
            { "type": "L", "value": 2099913680 },
            { "type": "S", "value": "" },
            { "type": "S", "value": "Scene" }
          ],
          "children": [
            { "name": "Properties70",
              "children": [
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "SourceObject" },
                    { "type": "S", "value": "object" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "" }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "ActiveAnimStackName" },
                    { "type": "S", "value": "KString" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "" }
                  ]
                },
                { "name": ""
                }
              ]
            },
            { "name": "RootNode",
              "properties": [
                { "type": "L", "value": 0 }
              ]
            },
            { "name": ""
            }
          ]
        },
        { "name": ""
        }
      ]
    },
    { "name": "References",
      "children": [
        { "name": ""
        }
      ]
    },
    { "name": "Definitions",
      "children": [
        { "name": "Version",
          "properties": [
            { "type": "I", "value": 100 }
          ]
        },
        { "name": "Count",
          "properties": [
            { "type": "I", "value": 5 }
          ]
        },
        { "name": "ObjectType",
          "properties": [
            { "type": "S", "value": "GlobalSettings" }
          ],
          "children": [
            { "name": "Count",
              "properties": [
                { "type": "I", "value": 1 }
              ]
            },
            { "name": ""
            }
          ]
        },
        { "name": "ObjectType",
          "properties": [
            { "type": "S", "value": "AnimationStack" }
          ],
          "children": [
            { "name": "Count",
              "properties": [
                { "type": "I", "value": 1 }
              ]
            },
            { "name": "PropertyTemplate",
              "properties": [
                { "type": "S", "value": "FbxAnimStack" }
              ],
              "children": [
                { "name": "Properties70",
                  "children": [
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Description" },
                        { "type": "S", "value": "KString" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "LocalStart" },
                        { "type": "S", "value": "KTime" },
                        { "type": "S", "value": "Time" },
                        { "type": "S", "value": "" },
                        { "type": "L", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "LocalStop" },
                        { "type": "S", "value": "KTime" },
                        { "type": "S", "value": "Time" },
                        { "type": "S", "value": "" },
                        { "type": "L", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "ReferenceStart" },
                        { "type": "S", "value": "KTime" },
                        { "type": "S", "value": "Time" },
                        { "type": "S", "value": "" },
                        { "type": "L", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "ReferenceStop" },
                        { "type": "S", "value": "KTime" },
                        { "type": "S", "value": "Time" },
                        { "type": "S", "value": "" },
                        { "type": "L", "value": 0 }
                      ]
                    },
                    { "name": ""
                    }
                  ]
                },
                { "name": ""
                }
              ]
            },
            { "name": ""
            }
          ]
        },
        { "name": "ObjectType",
          "properties": [
            { "type": "S", "value": "AnimationLayer" }
          ],
          "children": [
            { "name": "Count",
              "properties": [
                { "type": "I", "value": 1 }
              ]
            },
            { "name": "PropertyTemplate",
              "properties": [
                { "type": "S", "value": "FbxAnimLayer" }
              ],
              "children": [
                { "name": "Properties70",
                  "children": [
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Weight" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "A" },
                        { "type": "D", "value": 100.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Mute" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Solo" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Lock" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Color" },
                        { "type": "S", "value": "ColorRGB" },
                        { "type": "S", "value": "Color" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.800000 },
                        { "type": "D", "value": 0.800000 },
                        { "type": "D", "value": 0.800000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "BlendMode" },
                        { "type": "S", "value": "enum" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationAccumulationMode" },
                        { "type": "S", "value": "enum" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "ScaleAccumulationMode" },
                        { "type": "S", "value": "enum" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "BlendModeBypass" },
                        { "type": "S", "value": "ULongLong" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "L", "value": 0 }
                      ]
                    },
                    { "name": ""
                    }
                  ]
                },
                { "name": ""
                }
              ]
            },
            { "name": ""
            }
          ]
        },
        { "name": "ObjectType",
          "properties": [
            { "type": "S", "value": "Model" }
          ],
          "children": [
            { "name": "Count",
              "properties": [
                { "type": "I", "value": 1 }
              ]
            },
            { "name": "PropertyTemplate",
              "properties": [
                { "type": "S", "value": "FbxNode" }
              ],
              "children": [
                { "name": "Properties70",
                  "children": [
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "QuaternionInterpolate" },
                        { "type": "S", "value": "enum" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationOffset" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationPivot" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "ScalingOffset" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "ScalingPivot" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "TranslationActive" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "TranslationMin" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "TranslationMax" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "TranslationMinX" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "TranslationMinY" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "TranslationMinZ" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "TranslationMaxX" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "TranslationMaxY" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "TranslationMaxZ" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationOrder" },
                        { "type": "S", "value": "enum" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationSpaceForLimitOnly" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationStiffnessX" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationStiffnessY" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationStiffnessZ" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "AxisLen" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 10.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "PreRotation" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "PostRotation" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationActive" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationMin" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationMax" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationMinX" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationMinY" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationMinZ" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationMaxX" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationMaxY" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "RotationMaxZ" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "InheritType" },
                        { "type": "S", "value": "enum" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "ScalingActive" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "ScalingMin" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "ScalingMax" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 1.000000 },
                        { "type": "D", "value": 1.000000 },
                        { "type": "D", "value": 1.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "ScalingMinX" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "ScalingMinY" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "ScalingMinZ" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "ScalingMaxX" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "ScalingMaxY" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "ScalingMaxZ" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "GeometricTranslation" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "GeometricRotation" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "GeometricScaling" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 1.000000 },
                        { "type": "D", "value": 1.000000 },
                        { "type": "D", "value": 1.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "MinDampRangeX" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "MinDampRangeY" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "MinDampRangeZ" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "MaxDampRangeX" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "MaxDampRangeY" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "MaxDampRangeZ" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "MinDampStrengthX" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "MinDampStrengthY" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "MinDampStrengthZ" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "MaxDampStrengthX" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "MaxDampStrengthY" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "MaxDampStrengthZ" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "PreferedAngleX" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "PreferedAngleY" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "PreferedAngleZ" },
                        { "type": "S", "value": "double" },
                        { "type": "S", "value": "Number" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "LookAtProperty" },
                        { "type": "S", "value": "object" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "UpVectorProperty" },
                        { "type": "S", "value": "object" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Show" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 1 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "NegativePercentShapeSupport" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 1 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "DefaultAttributeIndex" },
                        { "type": "S", "value": "int" },
                        { "type": "S", "value": "Integer" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": -1 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Freeze" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "LODBox" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Lcl Translation" },
                        { "type": "S", "value": "Lcl Translation" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "A" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Lcl Rotation" },
                        { "type": "S", "value": "Lcl Rotation" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "A" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Lcl Scaling" },
                        { "type": "S", "value": "Lcl Scaling" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "A" },
                        { "type": "D", "value": 1.000000 },
                        { "type": "D", "value": 1.000000 },
                        { "type": "D", "value": 1.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Visibility" },
                        { "type": "S", "value": "Visibility" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "A" },
                        { "type": "D", "value": 1.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Visibility Inheritance" },
                        { "type": "S", "value": "Visibility Inheritance" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 1 }
                      ]
                    },
                    { "name": ""
                    }
                  ]
                },
                { "name": ""
                }
              ]
            },
            { "name": ""
            }
          ]
        },
        { "name": "ObjectType",
          "properties": [
            { "type": "S", "value": "Geometry" }
          ],
          "children": [
            { "name": "Count",
              "properties": [
                { "type": "I", "value": 1 }
              ]
            },
            { "name": "PropertyTemplate",
              "properties": [
                { "type": "S", "value": "FbxMesh" }
              ],
              "children": [
                { "name": "Properties70",
                  "children": [
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Color" },
                        { "type": "S", "value": "ColorRGB" },
                        { "type": "S", "value": "Color" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.800000 },
                        { "type": "D", "value": 0.800000 },
                        { "type": "D", "value": 0.800000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "BBoxMin" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "BBoxMax" },
                        { "type": "S", "value": "Vector3D" },
                        { "type": "S", "value": "Vector" },
                        { "type": "S", "value": "" },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 },
                        { "type": "D", "value": 0.000000 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Primary Visibility" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 1 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Casts Shadows" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 1 }
                      ]
                    },
                    { "name": "P",
                      "properties": [
                        { "type": "S", "value": "Receive Shadows" },
                        { "type": "S", "value": "bool" },
                        { "type": "S", "value": "" },
                        { "type": "S", "value": "" },
                        { "type": "I", "value": 1 }
                      ]
                    },
                    { "name": ""
                    }
                  ]
                },
                { "name": ""
                }
              ]
            },
            { "name": ""
            }
          ]
        },
        { "name": ""
        }
      ]
    },
    { "name": "Objects",
      "children": [
        { "name": "Geometry",
          "properties": [
            { "type": "L", "value": 2100305984 },
            { "type": "S", "value": "\u0000\u0001Geometry" },
            { "type": "S", "value": "Mesh" }
          ],
          "children": [
            { "name": "Properties70",
              "children": [
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "Color" },
                    { "type": "S", "value": "ColorRGB" },
                    { "type": "S", "value": "Color" },
                    { "type": "S", "value": "" },
                    { "type": "D", "value": 0.721569 },
                    { "type": "D", "value": 0.607843 },
                    { "type": "D", "value": 0.898039 }
                  ]
                },
                { "name": ""
                }
              ]
            },
            { "name": "Vertices",
              "properties": [
                { "type": "d", "value": [-50.000000, -50.000000, 0.000000, 50.000000, -50.000000, 0.000000, -50.000000, 50.000000, 0.000000, 50.000000, 50.000000, 0.000000, 0.000000, 0.000000, 100.000000] }
              ]
            },
            { "name": "PolygonVertexIndex",
              "properties": [
                { "type": "i", "value": [0, 2, 3, -2, 0, 1, -5, 1, 3, -5, 3, 2, -5, 2, 0, -5] }
              ]
            },
            { "name": "Edges",
              "properties": [
                { "type": "i", "value": [0, 1, 2, 3, 5, 6, 8, 11] }
              ]
            },
            { "name": "GeometryVersion",
              "properties": [
                { "type": "I", "value": 124 }
              ]
            },
            { "name": "LayerElementNormal",
              "properties": [
                { "type": "I", "value": 0 }
              ],
              "children": [
                { "name": "Version",
                  "properties": [
                    { "type": "I", "value": 102 }
                  ]
                },
                { "name": "Name",
                  "properties": [
                    { "type": "S", "value": "" }
                  ]
                },
                { "name": "MappingInformationType",
                  "properties": [
                    { "type": "S", "value": "ByPolygonVertex" }
                  ]
                },
                { "name": "ReferenceInformationType",
                  "properties": [
                    { "type": "S", "value": "Direct" }
                  ]
                },
                { "name": "Normals",
                  "properties": [
                    { "type": "d", "value": [0.000000, 0.000000, -1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000, -1.000000, 0.000000, 0.000000, -1.000000, 0.000000, -0.894427, 0.447214, 0.000000, -0.894427, 0.447214, 0.000000, -0.894427, 0.447214, 0.894427, 0.000000, 0.447214, 0.894427, 0.000000, 0.447214, 0.894427, 0.000000, 0.447214, 0.000000, 0.894427, 0.447214, 0.000000, 0.894427, 0.447214, 0.000000, 0.894427, 0.447214, -0.894427, 0.000000, 0.447214, -0.894427, 0.000000, 0.447214, -0.894427, 0.000000, 0.447214] }
                  ]
                },
                { "name": "NormalsW",
                  "properties": [
                    { "type": "d", "value": [0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000] }
                  ]
                },
                { "name": ""
                }
              ]
            },
            { "name": "LayerElementUV",
              "properties": [
                { "type": "I", "value": 0 }
              ],
              "children": [
                { "name": "Version",
                  "properties": [
                    { "type": "I", "value": 101 }
                  ]
                },
                { "name": "Name",
                  "properties": [
                    { "type": "S", "value": "UVChannel_1" }
                  ]
                },
                { "name": "MappingInformationType",
                  "properties": [
                    { "type": "S", "value": "ByPolygonVertex" }
                  ]
                },
                { "name": "ReferenceInformationType",
                  "properties": [
                    { "type": "S", "value": "IndexToDirect" }
                  ]
                },
                { "name": "UV",
                  "properties": [
                    { "type": "d", "value": [1.000000, 0.000000, -99.000000, 0.000000, 1.000000, 100.000000, -99.000000, 100.000000, 0.000000, 0.000000, 100.000000, 0.000000, 50.000000, 100.000000, 0.000000, 0.000000, 100.000000, 0.000000, 50.000000, 100.000000, 0.000000, 0.000000, 100.000000, 0.000000, 50.000000, 100.000000, 0.000000, 0.000000, 100.000000, 0.000000, 50.000000, 100.000000] }
                  ]
                },
                { "name": "UVIndex",
                  "properties": [
                    { "type": "i", "value": [0, 2, 3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] }
                  ]
                },
                { "name": ""
                }
              ]
            },
            { "name": "Layer",
              "properties": [
                { "type": "I", "value": 0 }
              ],
              "children": [
                { "name": "Version",
                  "properties": [
                    { "type": "I", "value": 100 }
                  ]
                },
                { "name": "LayerElement",
                  "children": [
                    { "name": "Type",
                      "properties": [
                        { "type": "S", "value": "LayerElementNormal" }
                      ]
                    },
                    { "name": "TypedIndex",
                      "properties": [
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": ""
                    }
                  ]
                },
                { "name": "LayerElement",
                  "children": [
                    { "name": "Type",
                      "properties": [
                        { "type": "S", "value": "LayerElementUV" }
                      ]
                    },
                    { "name": "TypedIndex",
                      "properties": [
                        { "type": "I", "value": 0 }
                      ]
                    },
                    { "name": ""
                    }
                  ]
                },
                { "name": ""
                }
              ]
            },
            { "name": ""
            }
          ]
        },
        { "name": "Model",
          "properties": [
            { "type": "L", "value": 1320369760 },
            { "type": "S", "value": "Box001\u0000\u0001Model" },
            { "type": "S", "value": "Mesh" }
          ],
          "children": [
            { "name": "Version",
              "properties": [
                { "type": "I", "value": 232 }
              ]
            },
            { "name": "Properties70",
              "children": [
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "PreRotation" },
                    { "type": "S", "value": "Vector3D" },
                    { "type": "S", "value": "Vector" },
                    { "type": "S", "value": "" },
                    { "type": "D", "value": -90.000000 },
                    { "type": "D", "value": -0.000000 },
                    { "type": "D", "value": 0.000000 }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "RotationActive" },
                    { "type": "S", "value": "bool" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "" },
                    { "type": "I", "value": 1 }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "InheritType" },
                    { "type": "S", "value": "enum" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "" },
                    { "type": "I", "value": 1 }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "ScalingMax" },
                    { "type": "S", "value": "Vector3D" },
                    { "type": "S", "value": "Vector" },
                    { "type": "S", "value": "" },
                    { "type": "D", "value": 0.000000 },
                    { "type": "D", "value": 0.000000 },
                    { "type": "D", "value": 0.000000 }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "DefaultAttributeIndex" },
                    { "type": "S", "value": "int" },
                    { "type": "S", "value": "Integer" },
                    { "type": "S", "value": "" },
                    { "type": "I", "value": 0 }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "Lcl Translation" },
                    { "type": "S", "value": "Lcl Translation" },
                    { "type": "S", "value": "" },
                    { "type": "S", "value": "A" },
                    { "type": "D", "value": 0.033470 },
                    { "type": "D", "value": 0.000000 },
                    { "type": "D", "value": -4.720192 }
                  ]
                },
                { "name": "P",
                  "properties": [
                    { "type": "S", "value": "MaxHandle" },
                    { "type": "S", "value": "int" },
                    { "type": "S", "value": "Integer" },
                    { "type": "S", "value": "UH" },
                    { "type": "I", "value": 2 }
                  ]
                },
                { "name": ""
                }
              ]
            },
            { "name": "Shading",
              "properties": [
                { "type": "C", "value": true }
              ]
            },
            { "name": "Culling",
              "properties": [
                { "type": "S", "value": "CullingOff" }
              ]
            },
            { "name": ""
            }
          ]
        },
        { "name": ""
        }
      ]
    },
    { "name": "Connections",
      "children": [
        { "name": "C",
          "properties": [
            { "type": "S", "value": "OO" },
            { "type": "L", "value": 1320369760 },
            { "type": "L", "value": 0 }
          ]
        },
        { "name": "C",
          "properties": [
            { "type": "S", "value": "OO" },
            { "type": "L", "value": 1298000416 },
            { "type": "L", "value": 1325721744 }
          ]
        },
        { "name": "C",
          "properties": [
            { "type": "S", "value": "OO" },
            { "type": "L", "value": 2100305984 },
            { "type": "L", "value": 1320369760 }
          ]
        },
        { "name": ""
        }
      ]
    }
  ]
}
// PolygonVertexIndex negative value is thew end of the smoothing group, also if value is for example -2 then index is 1
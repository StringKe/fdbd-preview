import {RawDatabase} from '@dbml/core/types/model_structure/database';

export const testDBMLStr = {
    "schemas": [],
    "tables": [{
        "name": "users",
        "alias": "U",
        "fields": [{
            "name": "id",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 174, "line": 10, "column": 3},
                "end": {"offset": 215, "line": 11, "column": 1}
            },
            "inline_refs": [],
            "pk": true,
            "increment": true
        }, {
            "name": "full_name",
            "type": {"type_name": "varchar", "args": null},
            "token": {
                "start": {"offset": 215, "line": 11, "column": 1},
                "end": {"offset": 235, "line": 12, "column": 1}
            },
            "inline_refs": []
        }, {
            "name": "created_at",
            "type": {"type_name": "timestamp", "args": null},
            "token": {
                "start": {"offset": 235, "line": 12, "column": 1},
                "end": {"offset": 258, "line": 13, "column": 1}
            },
            "inline_refs": []
        }, {
            "name": "country_code",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 258, "line": 13, "column": 1},
                "end": {"offset": 277, "line": 14, "column": 1}
            },
            "inline_refs": []
        }],
        "token": {"start": {"offset": 153, "line": 9, "column": 1}, "end": {"offset": 278, "line": 14, "column": 2}},
        "indexes": []
    }, {
        "name": "countries",
        "alias": null,
        "fields": [{
            "name": "code",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 300, "line": 17, "column": 3},
                "end": {"offset": 314, "line": 18, "column": 1}
            },
            "inline_refs": [],
            "pk": true
        }, {
            "name": "name",
            "type": {"type_name": "varchar", "args": null},
            "token": {
                "start": {"offset": 314, "line": 18, "column": 1},
                "end": {"offset": 329, "line": 19, "column": 1}
            },
            "inline_refs": []
        }, {
            "name": "continent_name",
            "type": {"type_name": "varchar", "args": null},
            "token": {
                "start": {"offset": 329, "line": 19, "column": 1},
                "end": {"offset": 354, "line": 20, "column": 1}
            },
            "inline_refs": []
        }],
        "token": {"start": {"offset": 280, "line": 16, "column": 1}, "end": {"offset": 356, "line": 20, "column": 3}},
        "indexes": []
    }, {
        "name": "order_items",
        "alias": null,
        "fields": [{
            "name": "order_id",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 678, "line": 34, "column": 3},
                "end": {"offset": 747, "line": 35, "column": 1}
            },
            "inline_refs": [{
                "tableName": "orders",
                "fieldNames": ["id"],
                "relation": ">",
                "token": {
                    "start": {"offset": 692, "line": 34, "column": 17},
                    "end": {"offset": 708, "line": 34, "column": 33}
                }
            }]
        }, {
            "name": "product_id",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 747, "line": 35, "column": 1},
                "end": {"offset": 764, "line": 36, "column": 1}
            },
            "inline_refs": []
        }, {
            "name": "quantity",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 764, "line": 36, "column": 1},
                "end": {"offset": 809, "line": 37, "column": 1}
            },
            "inline_refs": [],
            "dbdefault": {"type": "number", "value": 1}
        }],
        "token": {"start": {"offset": 656, "line": 33, "column": 1}, "end": {"offset": 810, "line": 37, "column": 2}},
        "indexes": []
    }, {
        "name": "orders",
        "alias": null,
        "fields": [{
            "name": "id",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 872, "line": 42, "column": 3},
                "end": {"offset": 899, "line": 43, "column": 1}
            },
            "inline_refs": [],
            "pk": true
        }, {
            "name": "user_id",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 899, "line": 43, "column": 1},
                "end": {"offset": 932, "line": 44, "column": 1}
            },
            "inline_refs": [],
            "not_null": true,
            "unique": true
        }, {
            "name": "status",
            "type": {"type_name": "varchar", "args": null},
            "token": {
                "start": {"offset": 932, "line": 44, "column": 1},
                "end": {"offset": 949, "line": 45, "column": 1}
            },
            "inline_refs": []
        }, {
            "name": "created_at",
            "type": {"type_name": "varchar", "args": null},
            "token": {
                "start": {"offset": 949, "line": 45, "column": 1},
                "end": {"offset": 1028, "line": 46, "column": 1}
            },
            "inline_refs": [],
            "note": "When order created",
            "not_null": true
        }],
        "token": {"start": {"offset": 855, "line": 41, "column": 1}, "end": {"offset": 1029, "line": 46, "column": 2}},
        "indexes": []
    }, {
        "name": "products",
        "alias": null,
        "fields": [{
            "name": "id",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 1342, "line": 62, "column": 3},
                "end": {"offset": 1354, "line": 63, "column": 1}
            },
            "inline_refs": [],
            "pk": true
        }, {
            "name": "name",
            "type": {"type_name": "varchar", "args": null},
            "token": {
                "start": {"offset": 1354, "line": 63, "column": 1},
                "end": {"offset": 1369, "line": 64, "column": 1}
            },
            "inline_refs": []
        }, {
            "name": "merchant_id",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 1369, "line": 64, "column": 1},
                "end": {"offset": 1398, "line": 65, "column": 1}
            },
            "inline_refs": [],
            "not_null": true
        }, {
            "name": "price",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 1398, "line": 65, "column": 1},
                "end": {"offset": 1410, "line": 66, "column": 1}
            },
            "inline_refs": []
        }, {
            "name": "status",
            "type": {"type_name": "products_status", "args": null},
            "token": {
                "start": {"offset": 1410, "line": 66, "column": 1},
                "end": {"offset": 1435, "line": 67, "column": 1}
            },
            "inline_refs": []
        }, {
            "name": "created_at",
            "type": {"type_name": "datetime", "args": null},
            "token": {
                "start": {"offset": 1435, "line": 67, "column": 1},
                "end": {"offset": 1476, "line": 68, "column": 1}
            },
            "inline_refs": [],
            "dbdefault": {"value": "now()", "type": "expression"}
        }],
        "token": {"start": {"offset": 1323, "line": 61, "column": 1}, "end": {"offset": 1560, "line": 73, "column": 2}},
        "indexes": [{
            "columns": [{"value": "merchant_id", "type": "column"}, {"value": "status", "type": "column"}],
            "token": {
                "start": {"offset": 1493, "line": 70, "column": 5},
                "end": {"offset": 1538, "line": 70, "column": 50}
            },
            "name": "product_status"
        }, {
            "columns": [{"value": "id", "type": "column"}],
            "token": {
                "start": {"offset": 1543, "line": 71, "column": 5},
                "end": {"offset": 1554, "line": 71, "column": 16}
            },
            "unique": true
        }]
    }, {
        "name": "merchants",
        "alias": null,
        "fields": [{
            "name": "id",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 1582, "line": 76, "column": 3},
                "end": {"offset": 1589, "line": 77, "column": 1}
            },
            "inline_refs": []
        }, {
            "name": "country_code",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 1589, "line": 77, "column": 1},
                "end": {"offset": 1608, "line": 78, "column": 1}
            },
            "inline_refs": []
        }, {
            "name": "merchant_name",
            "type": {"type_name": "varchar", "args": null},
            "token": {
                "start": {"offset": 1608, "line": 78, "column": 1},
                "end": {"offset": 1632, "line": 79, "column": 1}
            },
            "inline_refs": []
        }, {
            "name": "created at",
            "type": {"type_name": "varchar", "args": null},
            "token": {
                "start": {"offset": 1632, "line": 79, "column": 1},
                "end": {"offset": 1656, "line": 81, "column": 1}
            },
            "inline_refs": []
        }, {
            "name": "admin_id",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 1656, "line": 81, "column": 1},
                "end": {"offset": 1685, "line": 82, "column": 1}
            },
            "inline_refs": [{
                "tableName": "U",
                "fieldNames": ["id"],
                "relation": ">",
                "token": {
                    "start": {"offset": 1672, "line": 81, "column": 17},
                    "end": {"offset": 1683, "line": 81, "column": 28}
                }
            }]
        }],
        "token": {"start": {"offset": 1562, "line": 75, "column": 1}, "end": {"offset": 1730, "line": 85, "column": 2}},
        "indexes": [{
            "columns": [{"value": "id", "type": "column"}, {"value": "country_code", "type": "column"}],
            "token": {
                "start": {"offset": 1701, "line": 83, "column": 5},
                "end": {"offset": 1724, "line": 83, "column": 28}
            },
            "pk": true
        }]
    }, {
        "name": "merchant_periods",
        "alias": null,
        "fields": [{
            "name": "id",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 1759, "line": 88, "column": 3},
                "end": {"offset": 1771, "line": 89, "column": 1}
            },
            "inline_refs": [],
            "pk": true
        }, {
            "name": "merchant_id",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 1771, "line": 89, "column": 1},
                "end": {"offset": 1789, "line": 90, "column": 1}
            },
            "inline_refs": []
        }, {
            "name": "country_code",
            "type": {"type_name": "int", "args": null},
            "token": {
                "start": {"offset": 1789, "line": 90, "column": 1},
                "end": {"offset": 1808, "line": 91, "column": 1}
            },
            "inline_refs": []
        }, {
            "name": "start_date",
            "type": {"type_name": "datetime", "args": null},
            "token": {
                "start": {"offset": 1808, "line": 91, "column": 1},
                "end": {"offset": 1830, "line": 92, "column": 1}
            },
            "inline_refs": []
        }, {
            "name": "end_date",
            "type": {"type_name": "datetime", "args": null},
            "token": {
                "start": {"offset": 1830, "line": 92, "column": 1},
                "end": {"offset": 1850, "line": 93, "column": 1}
            },
            "inline_refs": []
        }],
        "token": {"start": {"offset": 1732, "line": 87, "column": 1}, "end": {"offset": 1851, "line": 93, "column": 2}},
        "indexes": []
    }],
    "refs": [{
        "name": null,
        "endpoints": [{
            "tableName": "U",
            "fieldNames": ["country_code"],
            "relation": "*",
            "token": {
                "start": {"offset": 478, "line": 25, "column": 6},
                "end": {"offset": 509, "line": 25, "column": 37}
            }
        }, {
            "tableName": "countries",
            "fieldNames": ["code"],
            "relation": "1",
            "token": {
                "start": {"offset": 478, "line": 25, "column": 6},
                "end": {"offset": 509, "line": 25, "column": 37}
            }
        }],
        "token": {"start": {"offset": 473, "line": 25, "column": 1}, "end": {"offset": 509, "line": 25, "column": 37}}
    }, {
        "name": null,
        "endpoints": [{
            "tableName": "merchants",
            "fieldNames": ["country_code"],
            "relation": "*",
            "token": {
                "start": {"offset": 515, "line": 26, "column": 6},
                "end": {"offset": 554, "line": 26, "column": 45}
            }
        }, {
            "tableName": "countries",
            "fieldNames": ["code"],
            "relation": "1",
            "token": {
                "start": {"offset": 515, "line": 26, "column": 6},
                "end": {"offset": 554, "line": 26, "column": 45}
            }
        }],
        "token": {"start": {"offset": 510, "line": 26, "column": 1}, "end": {"offset": 554, "line": 26, "column": 45}}
    }, {
        "name": null,
        "endpoints": [{
            "tableName": "orders",
            "fieldNames": ["id"],
            "relation": "1",
            "token": {
                "start": {"offset": 692, "line": 34, "column": 17},
                "end": {"offset": 708, "line": 34, "column": 33}
            }
        }, {
            "tableName": "order_items",
            "fieldNames": ["order_id"],
            "relation": "*",
            "token": {
                "start": {"offset": 692, "line": 34, "column": 17},
                "end": {"offset": 708, "line": 34, "column": 33}
            }
        }],
        "token": {"start": {"offset": 692, "line": 34, "column": 17}, "end": {"offset": 708, "line": 34, "column": 33}}
    }, {
        "name": null,
        "endpoints": [{
            "tableName": "order_items",
            "fieldNames": ["product_id"],
            "relation": "*",
            "token": {
                "start": {"offset": 817, "line": 39, "column": 6},
                "end": {"offset": 853, "line": 39, "column": 42}
            }
        }, {
            "tableName": "products",
            "fieldNames": ["id"],
            "relation": "1",
            "token": {
                "start": {"offset": 817, "line": 39, "column": 6},
                "end": {"offset": 853, "line": 39, "column": 42}
            }
        }],
        "token": {"start": {"offset": 812, "line": 39, "column": 1}, "end": {"offset": 853, "line": 39, "column": 42}}
    }, {
        "name": null,
        "endpoints": [{
            "tableName": "U",
            "fieldNames": ["id"],
            "relation": "1",
            "token": {
                "start": {"offset": 1672, "line": 81, "column": 17},
                "end": {"offset": 1683, "line": 81, "column": 28}
            }
        }, {
            "tableName": "merchants",
            "fieldNames": ["admin_id"],
            "relation": "*",
            "token": {
                "start": {"offset": 1672, "line": 81, "column": 17},
                "end": {"offset": 1683, "line": 81, "column": 28}
            }
        }],
        "token": {
            "start": {"offset": 1672, "line": 81, "column": 17},
            "end": {"offset": 1683, "line": 81, "column": 28}
        }
    }, {
        "name": null,
        "endpoints": [{
            "tableName": "products",
            "fieldNames": ["merchant_id"],
            "relation": "*",
            "token": {
                "start": {"offset": 1858, "line": 95, "column": 6},
                "end": {"offset": 1894, "line": 95, "column": 42}
            }
        }, {
            "tableName": "merchants",
            "fieldNames": ["id"],
            "relation": "1",
            "token": {
                "start": {"offset": 1858, "line": 95, "column": 6},
                "end": {"offset": 1894, "line": 95, "column": 42}
            }
        }],
        "token": {"start": {"offset": 1853, "line": 95, "column": 1}, "end": {"offset": 1894, "line": 95, "column": 42}}
    }, {
        "name": null,
        "endpoints": [{
            "tableName": "merchant_periods",
            "fieldNames": ["merchant_id", "country_code"],
            "relation": "*",
            "token": {
                "start": {"offset": 1938, "line": 97, "column": 6},
                "end": {"offset": 2013, "line": 97, "column": 81}
            }
        }, {
            "tableName": "merchants",
            "fieldNames": ["id", "country_code"],
            "relation": "1",
            "token": {
                "start": {"offset": 1938, "line": 97, "column": 6},
                "end": {"offset": 2013, "line": 97, "column": 81}
            }
        }],
        "token": {"start": {"offset": 1933, "line": 97, "column": 1}, "end": {"offset": 2013, "line": 97, "column": 81}}
    }],
    "enums": [{
        "name": "products_status",
        "token": {"start": {"offset": 1157, "line": 54, "column": 1}, "end": {"offset": 1263, "line": 58, "column": 2}},
        "values": [{
            "name": "out_of_stock",
            "token": {
                "start": {"offset": 1182, "line": 55, "column": 3},
                "end": {"offset": 1195, "line": 56, "column": 1}
            }
        }, {
            "name": "in_stock",
            "token": {
                "start": {"offset": 1195, "line": 56, "column": 1},
                "end": {"offset": 1206, "line": 57, "column": 1}
            }
        }, {
            "name": "running_low",
            "token": {
                "start": {"offset": 1206, "line": 57, "column": 1},
                "end": {"offset": 1262, "line": 58, "column": 1}
            },
            "note": "less than 20"
        }]
    }],
    "tableGroups": [],
    "project": {
        "name": "TestProject",
        "tables": [],
        "refs": [],
        "enums": [],
        "tableGroups": [],
        "note": "Description of the project",
        "database_type": "mysql"
    }
};

export const testDBML = testDBMLStr as unknown as RawDatabase;

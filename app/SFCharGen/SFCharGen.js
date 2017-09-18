'use strict';

angular.module('StarfinderApp.SFCharGen', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/SFCharGen', {
            templateUrl: 'SFCharGen/SFCharGen.html',
            controller: 'SFCharGenCtrl'
        });
    }])

    .controller('SFCharGenCtrl', function ($scope) {
        $scope.races = {
            "selectedRace": null,
            "availableRaces": {
                "Android": {
                    "name": "Android",
                    "raceIndex": 0,
                    "attributeModifiers": {
                        "str": 0,
                        "dex": 2,
                        "con": 0,
                        "int": 2,
                        "wis": 0,
                        "cha": -2,
                        "any": 0
                    },
                    "hp": 4,
                    "size": "Medium",
                    "types": [
                        {
                            "main": "Humanoid",
                            "sub": "Android",
                            "typeAttributeModifiers": {
                                "str": 0,
                                "dex": 0,
                                "con": 0,
                                "int": 0,
                                "wis": 0,
                                "cha": 0,
                                "any": 0
                            }
                        }
                    ],
                    "heightRange": [
                        5,
                        7
                    ],
                    "weightRange": [
                        100,
                        200
                    ],
                    "matureAge": 0,
                    "maxAge": 200,
                    "savingThrowModifiers": {
                        "fortitude": 0,
                        "reflex": 0,
                        "will": 0,
                        "special": "+2 to saving throws against disease, mind-affecting effects, poison and sleep unless the effects specifically target constructs"
                    },
                    "abilities": [
                        "doesn't breathe",
                        "not affected by vacuum",
                        "low-light vision (dim as if day)",
                        "dark vision (60ft black&white)",
                        "+2 to DC for sense motive against an Android",
                        "single light armor upgrade slot (internal, does not require wearing armor)"
                    ],
                    "skillModifiers": {
                        "acrobatics": 0,
                        "athletics": 0,
                        "bluff": 0,
                        "computers": 0,
                        "culture": 0,
                        "diplomacy": 0,
                        "disguise": 0,
                        "engineering": 0,
                        "intimidate": 0,
                        "lifescience": 0,
                        "medicine": 0,
                        "mysticism": 0,
                        "perception": 0,
                        "physicalscience": 0,
                        "piloting": 0,
                        "sensemotive": -2,
                        "sleightofhand": 0,
                        "stealth": 0,
                        "survival": 0
                    }
                },
                "Human": {
                    "name": "Human",
                    "raceIndex": 1,
                    "attributeModifiers": {
                        "str": 0,
                        "dex": 0,
                        "con": 0,
                        "int": 0,
                        "wis": 0,
                        "cha": 0,
                        "any": 2
                    },
                    "hp": 4,
                    "size": "Medium",
                    "types": [
                        {
                            "main": "Humanoid",
                            "sub": "Human",
                            "typeAttributeModifiers": {
                                "str": 0,
                                "dex": 0,
                                "con": 0,
                                "int": 0,
                                "wis": 0,
                                "cha": 0,
                                "any": 0
                            }
                        }
                    ],
                    "heightRange": [
                        5,
                        7
                    ],
                    "weightRange": [
                        100,
                        200
                    ],
                    "matureAge": 0,
                    "maxAge": 200,
                    "savingThrowModifiers": {
                        "fortitude": 0,
                        "reflex": 0,
                        "will": 0,
                        "special": "+2 to saving throws against disease, mind-affecting effects, poison and sleep unless the effects specifically target constructs"
                    },
                    "abilities": [
                        "doesn't breathe",
                        "not affected by vacuum",
                        "low-light vision (dim as if day)",
                        "dark vision (60ft black&white)",
                        "+2 to DC for sense motive against an Android",
                        "single light armor upgrade slot (internal, does not require wearing armor)"
                    ],
                    "skillModifiers": {
                        "acrobatics": 0,
                        "athletics": 0,
                        "bluff": 0,
                        "computers": 0,
                        "culture": 0,
                        "diplomacy": 0,
                        "disguise": 0,
                        "engineering": 0,
                        "intimidate": 0,
                        "lifescience": 0,
                        "medicine": 0,
                        "mysticism": 0,
                        "perception": 0,
                        "physicalscience": 0,
                        "piloting": 0,
                        "sensemotive": -2,
                        "sleightofhand": 0,
                        "stealth": 0,
                        "survival": 0
                    }
                },
                "Kasatha": {
                    "name": "Kasatha",
                    "raceIndex": 2,
                    "attributeModifiers": {
                        "str": 2,
                        "dex": 0,
                        "con": 0,
                        "int": -2,
                        "wis": 2,
                        "cha": 0,
                        "any": 0
                    },
                    "hp": 4,
                    "size": "Medium",
                    "types": [
                        {
                            "main": "Humanoid",
                            "sub": "Kasatha",
                            "typeAttributeModifiers": {
                                "str": 0,
                                "dex": 0,
                                "con": 0,
                                "int": 0,
                                "wis": 0,
                                "cha": 0,
                                "any": 0
                            }
                        }
                    ],
                    "heightRange": [
                        5,
                        7
                    ],
                    "weightRange": [
                        100,
                        200
                    ],
                    "matureAge": 0,
                    "maxAge": 200,
                    "savingThrowModifiers": {
                        "fortitude": 0,
                        "reflex": 0,
                        "will": 0,
                        "special": "+2 to saving throws against disease, mind-affecting effects, poison and sleep unless the effects specifically target constructs"
                    },
                    "abilities": [
                        "doesn't breathe",
                        "not affected by vacuum",
                        "low-light vision (dim as if day)",
                        "dark vision (60ft black&white)",
                        "+2 to DC for sense motive against an Android",
                        "single light armor upgrade slot (internal, does not require wearing armor)"
                    ],
                    "skillModifiers": {
                        "acrobatics": 0,
                        "athletics": 0,
                        "bluff": 0,
                        "computers": 0,
                        "culture": 0,
                        "diplomacy": 0,
                        "disguise": 0,
                        "engineering": 0,
                        "intimidate": 0,
                        "lifescience": 0,
                        "medicine": 0,
                        "mysticism": 0,
                        "perception": 0,
                        "physicalscience": 0,
                        "piloting": 0,
                        "sensemotive": -2,
                        "sleightofhand": 0,
                        "stealth": 0,
                        "survival": 0
                    }
                },
                "Lashunta (Korasha)": {
                    "name": "Lashunta (Korasha)",
                    "raceIndex": 3,
                    "attributeModifiers": {
                        "str": 2,
                        "dex": 0,
                        "con": 0,
                        "int": 0,
                        "wis": -2,
                        "cha": 2,
                        "any": 0
                    },
                    "hp": 4,
                    "size": "Medium",
                    "types": [
                        {
                            "main": "Humanoid",
                            "sub": "Lashunta",
                            "typeAttributeModifiers": {
                                "str": 0,
                                "dex": 0,
                                "con": 0,
                                "int": 0,
                                "wis": 0,
                                "cha": 0,
                                "any": 0
                            }
                        }
                    ],
                    "heightRange": [
                        5,
                        7
                    ],
                    "weightRange": [
                        100,
                        200
                    ],
                    "matureAge": 0,
                    "maxAge": 200,
                    "savingThrowModifiers": {
                        "fortitude": 0,
                        "reflex": 0,
                        "will": 0,
                        "special": "+2 to saving throws against disease, mind-affecting effects, poison and sleep unless the effects specifically target constructs"
                    },
                    "abilities": [
                        "doesn't breathe",
                        "not affected by vacuum",
                        "low-light vision (dim as if day)",
                        "dark vision (60ft black&white)",
                        "+2 to DC for sense motive against an Android",
                        "single light armor upgrade slot (internal, does not require wearing armor)"
                    ],
                    "skillModifiers": {
                        "acrobatics": 0,
                        "athletics": 0,
                        "bluff": 0,
                        "computers": 0,
                        "culture": 0,
                        "diplomacy": 0,
                        "disguise": 0,
                        "engineering": 0,
                        "intimidate": 0,
                        "lifescience": 0,
                        "medicine": 0,
                        "mysticism": 0,
                        "perception": 0,
                        "physicalscience": 0,
                        "piloting": 0,
                        "sensemotive": -2,
                        "sleightofhand": 0,
                        "stealth": 0,
                        "survival": 0
                    }
                },
                "Lashunta (Damaya)": {
                    "name": "Lashunta (Damaya)",
                    "raceIndex": 3,
                    "attributeModifiers": {
                        "str": 0,
                        "dex": 0,
                        "con": -2,
                        "int": 2,
                        "wis": 0,
                        "cha": 2,
                        "any": 0
                    },
                    "hp": 4,
                    "size": "Medium",
                    "types": [
                        {
                            "main": "Humanoid",
                            "sub": "Lashunta",
                            "typeAttributeModifiers": {
                                "str": 0,
                                "dex": 0,
                                "con": 0,
                                "int": 0,
                                "wis": 0,
                                "cha": 0,
                                "any": 0
                            }
                        }
                    ],
                    "heightRange": [
                        5,
                        7
                    ],
                    "weightRange": [
                        100,
                        200
                    ],
                    "matureAge": 0,
                    "maxAge": 200,
                    "savingThrowModifiers": {
                        "fortitude": 0,
                        "reflex": 0,
                        "will": 0,
                        "special": "+2 to saving throws against disease, mind-affecting effects, poison and sleep unless the effects specifically target constructs"
                    },
                    "abilities": [
                        "doesn't breathe",
                        "not affected by vacuum",
                        "low-light vision (dim as if day)",
                        "dark vision (60ft black&white)",
                        "+2 to DC for sense motive against an Android",
                        "single light armor upgrade slot (internal, does not require wearing armor)"
                    ],
                    "skillModifiers": {
                        "acrobatics": 0,
                        "athletics": 0,
                        "bluff": 0,
                        "computers": 0,
                        "culture": 0,
                        "diplomacy": 0,
                        "disguise": 0,
                        "engineering": 0,
                        "intimidate": 0,
                        "lifescience": 0,
                        "medicine": 0,
                        "mysticism": 0,
                        "perception": 0,
                        "physicalscience": 0,
                        "piloting": 0,
                        "sensemotive": -2,
                        "sleightofhand": 0,
                        "stealth": 0,
                        "survival": 0
                    }
                },
                "Shirren": {
                    "name": "Shirren",
                    "raceIndex": 4,
                    "attributeModifiers": {
                        "str": 0,
                        "dex": 0,
                        "con": 2,
                        "int": 0,
                        "wis": 2,
                        "cha": -2,
                        "any": 0
                    },
                    "hp": 6,
                    "size": "Medium",
                    "types": [
                        {
                            "main": "Humanoid",
                            "sub": "Shirren",
                            "typeAttributeModifiers": {
                                "str": 0,
                                "dex": 0,
                                "con": 0,
                                "int": 0,
                                "wis": 0,
                                "cha": 0,
                                "any": 0
                            }
                        }
                    ],
                    "heightRange": [
                        5,
                        7
                    ],
                    "weightRange": [
                        100,
                        200
                    ],
                    "matureAge": 0,
                    "maxAge": 200,
                    "savingThrowModifiers": {
                        "fortitude": 0,
                        "reflex": 0,
                        "will": 0,
                        "special": "+2 to saving throws against disease, mind-affecting effects, poison and sleep unless the effects specifically target constructs"
                    },
                    "abilities": [
                        "doesn't breathe",
                        "not affected by vacuum",
                        "low-light vision (dim as if day)",
                        "dark vision (60ft black&white)",
                        "+2 to DC for sense motive against an Android",
                        "single light armor upgrade slot (internal, does not require wearing armor)"
                    ],
                    "skillModifiers": {
                        "acrobatics": 0,
                        "athletics": 0,
                        "bluff": 0,
                        "computers": 0,
                        "culture": 0,
                        "diplomacy": 0,
                        "disguise": 0,
                        "engineering": 0,
                        "intimidate": 0,
                        "lifescience": 0,
                        "medicine": 0,
                        "mysticism": 0,
                        "perception": 0,
                        "physicalscience": 0,
                        "piloting": 0,
                        "sensemotive": -2,
                        "sleightofhand": 0,
                        "stealth": 0,
                        "survival": 0
                    }
                },
                "Vesk": {
                    "name": "Vesk",
                    "raceIndex": 5,
                    "attributeModifiers": {
                        "str": 2,
                        "dex": 0,
                        "con": 2,
                        "int": -2,
                        "wis": 0,
                        "cha": 0,
                        "any": 0
                    },
                    "hp": 6,
                    "size": "Medium",
                    "types": [
                        {
                            "main": "Humanoid",
                            "sub": "Vesk",
                            "typeAttributeModifiers": {
                                "str": 0,
                                "dex": 0,
                                "con": 0,
                                "int": 0,
                                "wis": 0,
                                "cha": 0,
                                "any": 0
                            }
                        }
                    ],
                    "heightRange": [
                        5,
                        7
                    ],
                    "weightRange": [
                        100,
                        200
                    ],
                    "matureAge": 0,
                    "maxAge": 200,
                    "savingThrowModifiers": {
                        "fortitude": 0,
                        "reflex": 0,
                        "will": 0,
                        "special": "+2 to saving throws against disease, mind-affecting effects, poison and sleep unless the effects specifically target constructs"
                    },
                    "abilities": [
                        "doesn't breathe",
                        "not affected by vacuum",
                        "low-light vision (dim as if day)",
                        "dark vision (60ft black&white)",
                        "+2 to DC for sense motive against an Android",
                        "single light armor upgrade slot (internal, does not require wearing armor)"
                    ],
                    "skillModifiers": {
                        "acrobatics": 0,
                        "athletics": 0,
                        "bluff": 0,
                        "computers": 0,
                        "culture": 0,
                        "diplomacy": 0,
                        "disguise": 0,
                        "engineering": 0,
                        "intimidate": 0,
                        "lifescience": 0,
                        "medicine": 0,
                        "mysticism": 0,
                        "perception": 0,
                        "physicalscience": 0,
                        "piloting": 0,
                        "sensemotive": -2,
                        "sleightofhand": 0,
                        "stealth": 0,
                        "survival": 0
                    }
                },
                "Ysoki": {
                    "name": "Ysoki",
                    "raceIndex": 6,
                    "attributeModifiers": {
                        "str": -2,
                        "dex": 2,
                        "con": 0,
                        "int": 2,
                        "wis": 0,
                        "cha": 0,
                        "any": 0
                    },
                    "hp": 2,
                    "size": "small",
                    "types": [
                        {
                            "main": "Humanoid",
                            "sub": "Ysoki",
                            "typeAttributeModifiers": {
                                "str": 0,
                                "dex": 0,
                                "con": 0,
                                "int": 0,
                                "wis": 0,
                                "cha": 0,
                                "any": 0
                            }
                        }
                    ],
                    "heightRange": [
                        5,
                        7
                    ],
                    "weightRange": [
                        100,
                        200
                    ],
                    "matureAge": 0,
                    "maxAge": 200,
                    "savingThrowModifiers": {
                        "fortitude": 0,
                        "reflex": 0,
                        "will": 0,
                        "special": "+2 to saving throws against disease, mind-affecting effects, poison and sleep unless the effects specifically target constructs"
                    },
                    "abilities": [
                        "doesn't breathe",
                        "not affected by vacuum",
                        "low-light vision (dim as if day)",
                        "dark vision (60ft black&white)",
                        "+2 to DC for sense motive against an Android",
                        "single light armor upgrade slot (internal, does not require wearing armor)"
                    ],
                    "skillModifiers": {
                        "acrobatics": 0,
                        "athletics": 0,
                        "bluff": 0,
                        "computers": 0,
                        "culture": 0,
                        "diplomacy": 0,
                        "disguise": 0,
                        "engineering": 2,
                        "intimidate": 0,
                        "lifescience": 0,
                        "medicine": 0,
                        "mysticism": 0,
                        "perception": 0,
                        "physicalscience": 0,
                        "piloting": 0,
                        "sensemotive": 0,
                        "sleightofhand": 0,
                        "stealth": 2,
                        "survival": 2
                    }
                }
            }
        };
        $scope.themes = {
            "selectedTheme": null,
            "availableThemes": {
                "Ace Pilot": {
                    "name": "Ace Pilot",
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": false
                        }
                    },
                    "attributeMods":{"str":0,"dex":0,"con":0,"int":0,"wis":0,"cha":0}
                },
                "Bounty Hunter": {
                    "name": "Bounty Hunter",
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": false
                        }
                    },
                    "attributeMods":{"str":0,"dex":0,"con":0,"int":0,"wis":0,"cha":0}
                },
                "Icon": {
                    "name": "Icon",
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": false
                        }
                    },
                    "attributeMods":{"str":0,"dex":0,"con":0,"int":0,"wis":0,"cha":0}
                },
                "Mercenary": {
                    "name": "Mercenary",
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": false
                        }
                    },
                    "attributeMods":{"str":0,"dex":0,"con":0,"int":0,"wis":0,"cha":0}
                },
                "Outlaw": {
                    "name": "Outlaw",
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": false
                        }
                    },
                    "attributeMods":{"str":0,"dex":0,"con":0,"int":0,"wis":0,"cha":0}
                },
                "Priest": {
                    "name": "Priest",
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": false
                        }
                    },
                    "attributeMods":{"str":0,"dex":0,"con":0,"int":0,"wis":0,"cha":0}
                },
                "Scholar": {
                    "name": "Scholar",
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": false
                        }
                    },
                    "attributeMods":{"str":0,"dex":0,"con":0,"int":0,"wis":0,"cha":0}
                },
                "Spacefarer": {
                    "name": "Spacefarer",
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": false
                        }
                    },
                    "attributeMods":{"str":0,"dex":0,"con":1,"int":0,"wis":0,"cha":0}
                },
                "Xenoseeker": {
                    "name": "Xenoseeker",
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": false
                        }
                    },
                    "attributeMods":{"str":0,"dex":0,"con":0,"int":0,"wis":0,"cha":0}
                },
                "Themeless": {
                    "name": "Themeless",
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "any": {
                            "mod": 0,
                            "classSkill": false
                        }
                    },
                    "attributeMods":{"str":0,"dex":0,"con":0,"int":0,"wis":0,"cha":0}
                }
            }
        };
        $scope.classes = {
            "selectedClass": null,
            "availableClasses": {
                "Envoy": {
                    "name": "Envoy",
                    "hp": 6,
                    "sp": 6,
                    "spModSkill": "con",
                    "keyAbility": ["cha"],
                    "skillRanksPerLvl": 8,
                    "levelGains": {
                        1: {
                            "baseAttackBonus": 0,
                            "fortitudeSaveBonus": 0,
                            "reflexSaveBonus": 2,
                            "willSaveBonus": 2,
                            "features": {}

                        }
                    },
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "any": {
                            "mod": 0,
                            "classSkill": false
                        }
                    }
                },
                "Mechanic": {
                    "name": "Mechanic",
                    "hp": 6,
                    "sp": 6,
                    "spModSkill": "con",
                    "keyAbility": ["int"],
                    "skillRanksPerLvl": 4,
                    "levelGains": {
                        1: {
                            "baseAttackBonus": 0,
                            "fortitudeSaveBonus": 2,
                            "reflexSaveBonus": 2,
                            "willSaveBonus": 0,
                            "features": {}

                        }
                    },
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "any": {
                            "mod": 0,
                            "classSkill": false
                        }
                    }
                },
                "Mystic": {
                    "name": "Mystic",
                    "hp": 6,
                    "sp": 6,
                    "spModSkill": "con",
                    "keyAbility": ["wis"],
                    "skillRanksPerLvl": 6,
                    "levelGains": {
                        1: {
                            "baseAttackBonus": 0,
                            "fortitudeSaveBonus": 0,
                            "reflexSaveBonus": 0,
                            "willSaveBonus": 2,
                            "features": {}

                        }
                    },
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "any": {
                            "mod": 0,
                            "classSkill": false
                        }
                    }
                },
                "Operative": {
                    "name": "Operative",
                    "hp": 6,
                    "sp": 6,
                    "spModSkill": "con",
                    "keyAbility": ["dex"],
                    "skillRanksPerLvl": 8,
                    "levelGains": {
                        1: {
                            "baseAttackBonus": 0,
                            "fortitudeSaveBonus": 0,
                            "reflexSaveBonus": 2,
                            "willSaveBonus": 2,
                            "features": {}

                        }
                    },
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "any": {
                            "mod": 0,
                            "classSkill": false
                        }
                    }
                },
                "Solarian": {
                    "name": "Solarian",
                    "hp": 7,
                    "sp": 7,
                    "spModSkill": "con",
                    "keyAbility": ["cha"],
                    "skillRanksPerLvl": 4,
                    "levelGains": {
                        1: {
                            "baseAttackBonus": 1,
                            "fortitudeSaveBonus": 2,
                            "reflexSaveBonus": 0,
                            "willSaveBonus": 2,
                            "features": {}

                        }
                    },
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "any": {
                            "mod": 0,
                            "classSkill": false
                        }
                    }
                },
                "Soldier": {
                    "name": "Soldier",
                    "hp": 7,
                    "sp": 7,
                    "spModSkill": "con",
                    "keyAbility": ["str", "dex"],
                    "skillRanksPerLvl": 4,
                    "levelGains": {
                        1: {
                            "baseAttackBonus": 1,
                            "fortitudeSaveBonus": 2,
                            "reflexSaveBonus": 0,
                            "willSaveBonus": 2,
                            "features": {}

                        }
                    },
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "any": {
                            "mod": 0,
                            "classSkill": false
                        }
                    }
                },
                "Technomancer": {
                    "name": "Technomancer",
                    "hp": 5,
                    "sp": 5,
                    "spModSkill": "con",
                    "keyAbility": ["int"],
                    "skillRanksPerLvl": 4,
                    "levelGains": {
                        1: {
                            "baseAttackBonus": 0,
                            "fortitudeSaveBonus": 0,
                            "reflexSaveBonus": 0,
                            "willSaveBonus": 2,
                            "features": {}

                        }
                    },
                    "skillModifiers": {
                        "acrobatics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "athletics": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "bluff": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "computers": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "culture": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "diplomacy": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "disguise": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "engineering": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "intimidate": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "lifescience": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "medicine": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "mysticism": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "perception": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "physicalscience": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "piloting": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "sensemotive": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "sleightofhand": {
                            "mod": 0,
                            "classSkill": true
                        },
                        "stealth": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "survival": {
                            "mod": 0,
                            "classSkill": false
                        },
                        "any": {
                            "mod": 0,
                            "classSkill": false
                        }
                    }
                }
            }
        };
        $scope.alignments = [
            "Lawful Good",
            "Lawful Neutral",
            "Lawful Evil",
            "Neutral Good",
            "Neutral",
            "Neutral Evil",
            "Chaotic Good",
            "Chaotic Neutral",
            "Chaotic Evil"
        ];
        $scope.character = {//character.levels[0].selectedClass
            "name": null,
            "gender": null,
            "race":null,
            "theme":null,
            "alignment":null,
            "deity":null,
            "levels":
                [
                    {0:{"selectedClass": null, "classLevel": 1, "attributeModifiers": {}, "skillPoints": null}}
                ],
            "attributes":
                {
                    "allowedMod": 10,
                    "str": {"baseScore": 10, mod: 0, value: null},
                    "dex": {"baseScore": 10, mod: 0, value: null},
                    "con": {"baseScore": 10, mod: 0, value: null},
                    "int": {"baseScore": 10, mod: 0, value: null},
                    "wis": {"baseScore": 10, mod: 0, value: null},
                    "cha": {"baseScore": 10, mod: 0, value: null}
                },
            "skillRanks": {
                "acrobatics":
                    {
                        "ranks": 0
                    }
                , "athletics":
                    {
                        "ranks": 0
                    }
                , "bluff":
                    {
                        "ranks": 0
                    }
                , "computers":
                    {
                        "ranks": 0
                    }
                , "culture":
                    {
                        "ranks": 0
                    }
                , "diplomacy":
                    {
                        "ranks": 0
                    }
                , "disguise":
                    {
                        "ranks": 0
                    }
                , "engineering":
                    {
                        "ranks": 0
                    }
                , "intimidate":
                    {
                        "ranks": 0
                    }
                , "lifescience":
                    {
                        "ranks": 0
                    }
                , "medicine":
                    {
                        "ranks": 0
                    }
                , "mysticism":
                    {
                        "ranks": 0
                    }
                , "perception":
                    {
                        "ranks": 0
                    }
                , "physicalscience":
                    {
                        "ranks": 0
                    }
                , "piloting":
                    {
                        "ranks": 0
                    }
                , "sensemotive":
                    {
                        "ranks": 0
                    }
                , "sleightofhand":
                    {
                        "ranks": 0
                    }
                , "stealth":
                    {
                        "ranks": 0
                    }
                , "survival":
                    {
                        "ranks": 0
                    }
            }
        };
        $scope.setBaseAttribVals = function () {
            $scope.character.attributes.str.value += $scope.strScore();
            $scope.character.attributes.dex.value += $scope.dexScore();
            $scope.character.attributes.con.value += $scope.conScore();
            $scope.character.attributes.int.value += $scope.intScore();
            $scope.character.attributes.wis.value += $scope.wisScore();
            $scope.character.attributes.cha.value += $scope.chaScore();
        };

        $scope.strScore = function () {
            var score = $scope.character.attributes.str.baseScore;
            if ($scope.races.selectedRace != null) {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.str;
            }
            if ($scope.variableRaceBonusAttrib == "str") {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }
            score += $scope.character.attributes.str.mod;
            return score;
        }
        $scope.dexScore = function () {
            var score = $scope.character.attributes.dex.baseScore;
            if ($scope.races.selectedRace != null) {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.dex;
            }
            if ($scope.variableRaceBonusAttrib == "dex") {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }
            score += $scope.character.attributes.dex.mod;
            return score;
        }
        $scope.conScore = function () {
            var score = $scope.character.attributes.con.baseScore;
            if ($scope.races.selectedRace != null) {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.con
            }
            if ($scope.variableRaceBonusAttrib == "con") {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }
            score += $scope.character.attributes.con.mod;
            return score;
        }
        $scope.intScore = function () {
            var score = $scope.character.attributes.int.baseScore;
            if ($scope.races.selectedRace != null) {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.int;
            }
            if ($scope.variableRaceBonusAttrib == "int") {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }
            score += $scope.character.attributes.int.mod;
            return score;
        }
        $scope.wisScore = function () {
            var score = $scope.character.attributes.wis.baseScore;
            if ($scope.races.selectedRace != null) {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.wis;
            }
            if ($scope.variableRaceBonusAttrib == "wis") {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }
            score += $scope.character.attributes.wis.mod;
            return score;
        }
        $scope.chaScore = function () {
            var score = $scope.character.attributes.cha.baseScore;
            if ($scope.races.selectedRace != null) {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.cha;
            }
            if ($scope.variableRaceBonusAttrib == "cha") {
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }

            score += $scope.character.attributes.cha.mod;

            return score;
        }
//	$scope.dexScore = 	$scope.character.attributes.dex.mod += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.dex;
//	$scope.conScore = 	$scope.character.attributes.con.mod += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.con;
//	$scope.intScore = 	$scope.character.attributes.int.mod += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.int;
//	$scope.wisScore = 	$scope.character.attributes.wis.mod += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.wis;
//	$scope.chaScore = 	$scope.character.attributes.cha.mod += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.cha;
        $scope.variableRaceBonusAttrib = null;
        $scope.variableThemeBonus = null;
        $scope.variableClassBonus = null;

        $scope.getAttribMod = function (attrib) {
            switch (attrib) {
                case 'str':
                    return $scope.calcAttribModifier($scope.strScore());
                    break;
                case 'dex':
                    return $scope.calcAttribModifier($scope.dexScore());
                    break;
                case 'con':
                    return $scope.calcAttribModifier($scope.conScore());
                    break;
                case 'int':
                    return $scope.calcAttribModifier($scope.intScore());
                    break;
                case 'wis':
                    return $scope.calcAttribModifier($scope.wisScore());
                    break;
                case 'cha':
                    return $scope.calcAttribModifier($scope.chaScore());
                    break;
                default:
            }
        }
        $scope.calcAttribModifier = function (attribValue) {
            var score = attribValue;
            var mod = Math.floor((score - 10) / 2);
            return mod// (mod>=0)?mod:0;
        };
        $scope.attribIncrease = function (attrib) {
            console.log("click to increase " + attrib);

            var allowed = $scope.character.attributes.allowedMod;
            console.log("allowed:" + $scope.character.attributes.allowedMod);
            var total = $scope.character.attributes.cha.mod +
                $scope.character.attributes.wis.mod +
                $scope.character.attributes.int.mod +
                $scope.character.attributes.con.mod +
                $scope.character.attributes.dex.mod +
                $scope.character.attributes.str.mod;
            console.log("total:" + total);
            if (total >= allowed) return false;
            switch (attrib) {
                case 'str':
                    if ($scope.strScore() >= 18) return false;
                    $scope.character.attributes.str.mod++;
                    console.log("str:" + $scope.character.attributes.str.mod + "Score:" + $scope.strScore());
                    break;
                case 'dex':
                    if ($scope.dexScore() >= 18) return false;
                    $scope.character.attributes.dex.mod++;
                    break;
                case 'con':
                    if ($scope.conScore() >= 18) return false;
                    $scope.character.attributes.con.mod++;
                    break;
                case 'int':
                    if ($scope.intScore() >= 18) return false;
                    $scope.character.attributes.int.mod++;
                    break;
                case 'wis':
                    if ($scope.wisScore() >= 18) return false;
                    $scope.character.attributes.wis.mod++;
                    break;
                case 'cha':
                    if ($scope.chaScore() >= 18) return false;
                    $scope.character.attributes.cha.mod++;
                    break;
                default:
            }
        }
        $scope.attribDecrease = function (attrib) {
            var attribs = $scope.character.attributes;
            var allowed = $scope.character.attributes.allowedMod;
            var total = $scope.character.attributes.cha.mod +
                $scope.character.attributes.wis.mod +
                $scope.character.attributes.int.mod +
                $scope.character.attributes.con.mod +
                $scope.character.attributes.dex.mod +
                $scope.character.attributes.str.mod;
            if (total <= 0) return false;
            switch (attrib) {
                case 'str':
                    if ($scope.strScore() <= $scope.character.attributes.str.value) return false;
                    $scope.character.attributes.str.mod--;
                    break;
                case 'dex':
                    if ($scope.dexScore() <= $scope.character.attributes.dex.value) return false;
                    $scope.character.attributes.dex.mod--;
                    break;
                case 'con':
                    if ($scope.conScore() <= $scope.character.attributes.con.value) return false;
                    $scope.character.attributes.con.mod--;
                    break;
                case 'int':
                    if ($scope.intScore() <= $scope.character.attributes.int.value) return false;
                    $scope.character.attributes.int.mod--;
                    break;
                case 'wis':
                    if ($scope.wisScore() <= $scope.character.attributes.wis.value) return false;
                    $scope.character.attributes.wis.mod--;
                    break;
                case 'cha':
                    if ($scope.chaScore() <= $scope.character.attributes.cha.value) return false;
                    $scope.character.attributes.cha.mod--;
                    break;
                default:
            }
        }
        $scope.calcSkillTotal = function (skill, attrib) {
            if ($scope.skillList[skill].useUntrained === false
                && $scope.character.skillRanks[skill].ranks == 0) return "-";
            var total = 0;
            //Ranks
            total += $scope.character.skillRanks[skill].ranks;
            //ClassBonus
            total += $scope.calcClassSkillMod(skill);
            //Is ClassSkill and theme Based Class Skill
            if ($scope.character.levels[0].selectedClass != null && $scope.themes.selectedTheme != null) {
                total += ($scope.classes.availableClasses[$scope.character.levels[$scope.currentLevel()].selectedClass].skillModifiers[skill].classSkill
                    && $scope.themes.availableThemes[$scope.themes.selectedTheme].skillModifiers[skill].classSkill) ? 1 : 0;
            }
            //AttribValue
            total += $scope.getAttribMod(attrib)
            //RaceBonus
            total += $scope.calcRacialSkillMod(skill);

            return total;
        }
        $scope.calcRacialSkillMod = function (skill) {
            return ($scope.races.selectedRace != null)
                ? $scope.races.availableRaces[$scope.races.selectedRace].skillModifiers[skill] :
                0;


        }
        $scope.calcClassSkillMod = function (skill) {
            return ($scope.character.levels[$scope.currentLevel()].selectedClass != null
                && $scope.classes.availableClasses[$scope.character.levels[$scope.currentLevel()].selectedClass].skillModifiers[skill].classSkill
                && $scope.character.skillRanks[skill].ranks > 0) ? 3 : 0;
        }
        $scope.currentLevel = function(){
            return $scope.character.levels.length -1;
        }
        $scope.skillIncrease = function (skill) {
            var allowed = $scope.totalSkillPoints();
            var total = $scope.totalRanks();
            console.log("total:" + total + " Allowed:" + allowed);
            if (total >= allowed) return false;
            if ($scope.character.skillRanks[skill].ranks >= $scope.character.level) return false;
            $scope.character.skillRanks[skill].ranks++;
            $scope.totalSkillPoints();
        }
        $scope.skillDecrease = function (skill) {
            // var allowed =  ( + $scope.getAttribMod("int"))*$scope.character.level;
            var total = 0;
            for (var x in $scope.character.skillRanks) {
                total += x.ranks;
            }
            if (total <= 0) return false;
            $scope.character.skillRanks[skill].ranks--;
            $scope.totalSkillPoints();
        }
        $scope.getSkillRank = function(skill){
            console.log(skill);
            return ($scope.character.skillRanks[skill].ranks)?$scope.character.skillRanks[skill].ranks:0;
        }
        $scope.getSkillRanksPerLevel = function(level){
            if(!level) {
                var level = $scope.currentLevel();
            }
           return $scope.classes[level].skillRanksPerLvl;
        }

        $scope.totalSkillPoints = function () {
            var total = 0;
            var levelCount = $scope.currentLevel();
            for(var i=0;i<=levelCount;i++) {
                if ($scope.character.levels[$scope.currentLevel()].selectedClass != null) {
                    total += $scope.classes.availableClasses[$scope.character.levels[$scope.currentLevel()].selectedClass].skillRanksPerLvl
                        + $scope.getAttribMod("int");
                }
            }
            return total ;
        }
        $scope.totalRanks = function () {
            var total = 0;
            for (var x in $scope.skillList) {
                total += $scope.character.skillRanks[x].ranks;
            }
            return total;
        }
        $scope.availSkillPoints = function () {
            var pts = $scope.totalSkillPoints() - $scope.totalRanks();
            return (pts > 0) ? pts : 0;
        }
        //INITIATIVE
        $scope.getMiscInitMods = function(){
            var total = 0;

            return total;
        }
        $scope.calcInitiativeTotal = function(){
            var total = 0;
            total += $scope.getAttribMod("dex");
            total += $scope.getMiscInitMods();
            return total;
        }
        $scope.attribList = ["str", "dex", "con", "int", "wis", "cha"];
        $scope.skillList = {
            "acrobatics":
                {
                    "name": "acrobatics",
                    "DisplayName": "Acrobatics",
                    "useUntrained": true,
                    "armorCheck": true,
                    "baseAttrib": "dex"
                }
            , "athletics":
                {
                    "name": "athletics",
                    "DisplayName": "Athletics",
                    "useUntrained": true,
                    "armorCheck": true,
                    "baseAttrib": "str"
                }
            , "bluff":
                {
                    "name": "bluff",
                    "DisplayName": "Bluff",
                    "useUntrained": true,
                    "armorCheck": false,
                    "baseAttrib": "cha"
                }
            , "computers":
                {
                    "name": "computers",
                    "DisplayName": "Computers",
                    "useUntrained": false,
                    "armorCheck": false,
                    "baseAttrib": "int"
                }
            , "culture": {
                "name": "culture",
                "DisplayName": "Culture",
                "useUntrained": false,
                "armorCheck": false,
                "baseAttrib": "int"
            }
            , "diplomacy": {
                "name": "diplomacy",
                "DisplayName": "Diplomacy",
                "useUntrained": true,
                "armorCheck": false,
                "baseAttrib": "cha"
            }
            , "disguise": {
                "name": "disguise",
                "DisplayName": "Disguise",
                "useUntrained": true,
                "armorCheck": false,
                "baseAttrib": "cha"
            }
            , "engineering": {
                "name": "engineering",
                "DisplayName": "Engineering",
                "useUntrained": false,
                "armorCheck": false,
                "baseAttrib": "int"
            }
            , "intimidate": {
                "name": "intimidate",
                "DisplayName": "Intimidate",
                "useUntrained": true,
                "armorCheck": false,
                "baseAttrib": "cha"
            }
            , "lifescience": {
                "name": "lifescience",
                "DisplayName": "Life Science",
                "useUntrained": false,
                "armorCheck": false,
                "baseAttrib": "int"
            }
            , "medicine": {
                "name": "medicine",
                "DisplayName": "Medicine",
                "useUntrained": false,
                "armorCheck": false,
                "baseAttrib": "int"
            }
            , "mysticism": {
                "name": "mysticism",
                "DisplayName": "Mysticism",
                "useUntrained": false,
                "armorCheck": false,
                "baseAttrib": "wis"
            }
            , "perception": {
                "name": "perception",
                "DisplayName": "Perception",
                "useUntrained": true,
                "armorCheck": false,
                "baseAttrib": "wis"
            }
            , "physicalscience":
                {
                    "name": "physicalscience",
                    "DisplayName": "Physical Science",
                    "useUntrained": false,
                    "armorCheck": false,
                    "baseAttrib": "int"
                }
            , "piloting": {
                "name": "piloting",
                "DisplayName": "Piloting",
                "useUntrained": true,
                "armorCheck": false,
                "baseAttrib": "dex"
            }
            , "sensemotive":
                {
                    "name": "sensemotive",
                    "DisplayName": "Sensemotive",
                    "useUntrained": true,
                    "armorCheck": false,
                    "baseAttrib": "wis"
                }
            , "sleightofhand":
                {
                    "name": "sleightofhand",
                    "DisplayName": "Sleight of Hand",
                    "useUntrained": false,
                    "armorCheck": true,
                    "baseAttrib": "dex"
                }
            , "stealth": {
                "name": "stealth",
                "DisplayName": "Stealth",
                "useUntrained": true,
                "armorCheck": true,
                "baseAttrib": "dex"
            }
            , "survival":
            {
                "name": "survival",
                "DisplayName": "Survival",
                "useUntrained": true,
                "armorCheck": false,
                "baseAttrib": "wis"
            }
        };


    });
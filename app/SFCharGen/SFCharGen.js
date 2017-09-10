'use strict';

angular.module('StarfinderApp.SFCharGen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SFCharGen', {
    templateUrl: 'SFCharGen/SFCharGen.html',
    controller: 'SFCharGenCtrl'
  });
}])

.controller('SFCharGenCtrl', function($scope) {
        $scope.races= {
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
        $scope.themes={
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
                }
            }
        };
        $scope.classes={
            "selectedClass": null,
            "availableClasses": {
                "Envoy": {
                    "name": "Envoy",
                    "hp":6,
                    "sp":6,
                    "spModSkill":"con",
                    "keyAbility":["cha"],
                    "skillRanksPerLvl":8,
                    "levelGains":{
                        1: {
                            "baseAttackBonus": 0,
                            "fortitudeSaveBonus": 0,
                            "reflexSaveBonus": 2,
                            "willSaveBonus": 2,
                            "features":{}

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
                    "hp":6,
                    "sp":6,
                    "spModSkill":"con",
                    "keyAbility":["int"],
                    "skillRanksPerLvl":4,
                    "levelGains":{
                        1: {
                            "baseAttackBonus": 0,
                            "fortitudeSaveBonus": 2,
                            "reflexSaveBonus": 2,
                            "willSaveBonus": 0,
                            "features":{}

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
                    "hp":6,
                    "sp":6,
                    "spModSkill":"con",
                    "keyAbility":["wis"],
                    "skillRanksPerLvl":6,
                    "levelGains":{
                        1: {
                            "baseAttackBonus": 0,
                            "fortitudeSaveBonus": 0,
                            "reflexSaveBonus": 0,
                            "willSaveBonus": 2,
                            "features":{}

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
                    "hp":6,
                    "sp":6,
                    "spModSkill":"con",
                    "keyAbility":["dex"],
                    "skillRanksPerLvl":8,
                    "levelGains":{
                        1: {
                            "baseAttackBonus": 0,
                            "fortitudeSaveBonus": 0,
                            "reflexSaveBonus": 2,
                            "willSaveBonus": 2,
                            "features":{}

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
                    "hp":7,
                    "sp":7,
                    "spModSkill":"con",
                    "keyAbility":["cha"],
                    "skillRanksPerLvl":4,
                    "levelGains":{
                        1: {
                            "baseAttackBonus": 1,
                            "fortitudeSaveBonus": 2,
                            "reflexSaveBonus": 0,
                            "willSaveBonus": 2,
                            "features":{}

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
                    "hp":7,
                    "sp":7,
                    "spModSkill":"con",
                    "keyAbility":["str", "dex"],
                    "skillRanksPerLvl":4,
                    "levelGains":{
                        1: {
                            "baseAttackBonus": 1,
                            "fortitudeSaveBonus": 2,
                            "reflexSaveBonus": 0,
                            "willSaveBonus": 2,
                            "features":{}

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
                    "hp":5,
                    "sp":5,
                    "spModSkill":"con",
                    "keyAbility":["int"],
                    "skillRanksPerLvl":4,
                    "levelGains":{
                        1: {
                            "baseAttackBonus": 0,
                            "fortitudeSaveBonus": 0,
                            "reflexSaveBonus": 0,
                            "willSaveBonus": 2,
                            "features":{}

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
        $scope.alignments={
            selectedAlignment:null,
            availableAlignments:["Lawful Good","Lawful Neutral","Lawful Evil","Neutral Good","Neutral","Neutral Evil","Chaotic Good","Chaotic Neutral","Chaotic Evil"]
        };
        $scope.character={
            name:null,
            gender:null,
            level:1,
            attributes:
                {
                    "allowedMod":10,
                    str:{score:10,mod:0,value:null},
                    dex:{score:10,mod:0,value:null},
                    con:{score:10,mod:0,value:null},
                    int:{score:10,mod:0,value:null},
                    wis:{score:10,mod:0,value:null},
                    cha:{score:10,mod:0,value:null}
                }
        };
        	$scope.setBaseAttribVals = function(){
                        $scope.character.attributes.str.value += $scope.strScore();
                        $scope.character.attributes.dex.value += $scope.dexScore();
                        $scope.character.attributes.con.value += $scope.conScore();
                        $scope.character.attributes.int.value += $scope.intScore();
                        $scope.character.attributes.wis.value += $scope.wisScore();
                        $scope.character.attributes.cha.value += $scope.chaScore();
            };

        $scope.strScore = function(){
            var score = $scope.character.attributes.str.score;
            if($scope.races.selectedRace != null){
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.str;
            }
            if($scope.variableRaceBonusAttrib == "str"){
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }
            score += $scope.character.attributes.str.mod;
            return score;
        }
        $scope.dexScore = function(){
            var score = $scope.character.attributes.dex.score;
            if($scope.races.selectedRace != null){
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.dex;
            }
            if($scope.variableRaceBonusAttrib == "dex"){
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }
            score += $scope.character.attributes.dex.mod;
            return score;
        }
        $scope.conScore = function(){
            var score = $scope.character.attributes.con.score;
            if($scope.races.selectedRace != null){
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.con
             }
            if($scope.variableRaceBonusAttrib == "con"){
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }
            score += $scope.character.attributes.con.mod;
            return score;
        }
        $scope.intScore = function(){
            var score = $scope.character.attributes.int.score;
            if($scope.races.selectedRace != null){
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.int;
            }
            if($scope.variableRaceBonusAttrib == "int"){
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }
            score += $scope.character.attributes.int.mod;
            return score;
        }
        $scope.wisScore = function(){
            var score = $scope.character.attributes.wis.score;
            if($scope.races.selectedRace != null){
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.wis;
            }
            if($scope.variableRaceBonusAttrib == "wis"){
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.any;
            }
            score += $scope.character.attributes.wis.mod;
            return score;
        }
        $scope.chaScore = function(){
            var score = $scope.character.attributes.cha.score;
            if($scope.races.selectedRace != null){
                score += $scope.races.availableRaces[$scope.races.selectedRace].attributeModifiers.cha;
            }
            if($scope.variableRaceBonusAttrib == "cha"){
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

        $scope.getAttribMod = function(attrib){
            switch(attrib){
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
        $scope.calcAttribModifier = function(attribValue){
            var score = attribValue;
            var mod = Math.floor((score-10)/2);
            return mod// (mod>=0)?mod:0;
        };
        $scope.attribIncrease = function(attrib){
            console.log("click to increase " + attrib);

            var allowed =  $scope.character.attributes.allowedMod;
            console.log("allowed:" + $scope.character.attributes.allowedMod );
            var total =  $scope.character.attributes.cha.mod+
                $scope.character.attributes.wis.mod+
                $scope.character.attributes.int.mod+
                $scope.character.attributes.con.mod+
                $scope.character.attributes.dex.mod+
                $scope.character.attributes.str.mod;
            console.log("total:" + total );
            if(total >= allowed)return false;
            switch (attrib) {
                case 'str':
                    if($scope.strScore() >= 18)return false;
                    $scope.character.attributes.str.mod++;
                    console.log("str:" + $scope.character.attributes.str.mod +"Score:" +  $scope.strScore());
                    break;
                case 'dex':
                    if($scope.dexScore() >= 18)return false;
                    $scope.character.attributes.dex.mod++;
                    break;
                case 'con':
                    if($scope.conScore() >= 18)return false;
                    $scope.character.attributes.con.mod++;
                    break;
                case 'int':
                    if($scope.intScore() >= 18)return false;
                    $scope.character.attributes.int.mod++;
                    break;
                case 'wis':
                    if($scope.wisScore() >= 18)return false;
                    $scope.character.attributes.wis.mod++;
                    break;
                case 'cha':
                    if($scope.chaScore() >= 18)return false;
                    $scope.character.attributes.cha.mod++;
                    break;
                default:
            }
        }
            $scope.attribDecrease = function(attrib){
                var attribs = $scope.character.attributes;
                var allowed =  $scope.character.attributes.allowedMod;
                var total =  $scope.character.attributes.cha.mod +
                    $scope.character.attributes.wis.mod +
                    $scope.character.attributes.int.mod +
                    $scope.character.attributes.con.mod +
                    $scope.character.attributes.dex.mod +
                    $scope.character.attributes.str.mod;
                if (total <= 0) return false;
                switch (attrib) {
                    case 'str':
                        if($scope.strScore() <= $scope.character.attributes.str.value)return false;
                        $scope.character.attributes.str.mod--;
                        break;
                    case 'dex':
                        if($scope.dexScore() <= $scope.character.attributes.dex.value)return false;
                        $scope.character.attributes.dex.mod--;
                        break;
                    case 'con':
                        if($scope.conScore() <= $scope.character.attributes.con.value)return false;
                        $scope.character.attributes.con.mod--;
                        break;
                    case 'int':
                        if($scope.intScore() <= $scope.character.attributes.int.value)return false;
                        $scope.character.attributes.int.mod--;
                        break;
                    case 'wis':
                        if($scope.wisScore() <= $scope.character.attributes.wis.value)return false;
                        $scope.character.attributes.wis.mod--;
                        break;
                    case 'cha':
                        if($scope.chaScore() <= $scope.character.attributes.cha.value)return false;
                        $scope.character.attributes.cha.mod--;
                        break;
                    default:
                }
            }
        $scope.calcSkillTotal = function(skill, attrib) {
            if ($scope.skillList[skill].useUntrained === false
                && $scope.skillList[skill].ranks == 0) return "-";
            var total = 0;
            //Ranks
            total += $scope.skillList[skill].ranks;
            //ClassBonus
            total += $scope.calcClassSkillMod(skill);
            //Is ClassSkill and theme Based Class Skill
            if ($scope.classes.selectedClass != null && $scope.themes.selectedTheme != null) {
            total += ($scope.classes.availableClasses[$scope.classes.selectedClass].skillModifiers[skill].classSkill
                && $scope.themes.availableThemes[$scope.themes.selectedTheme].skillModifiers[skill].classSkill) ? 1 : 0;
            }
            //AttribValue
            total += $scope.getAttribMod(attrib)
            //RaceBonus
            total += $scope.calcRacialSkillMod(skill);

            return total;
        }
        $scope.calcRacialSkillMod = function(skill){
                return ($scope.races.selectedRace != null)
                    ? $scope.races.availableRaces[$scope.races.selectedRace].skillModifiers[skill]:
                    0;


        }
        $scope.calcClassSkillMod = function(skill){
            return ($scope.classes.selectedClass != null && $scope.classes.availableClasses[$scope.classes.selectedClass].skillModifiers[skill].classSkill && $scope.skillList[skill].ranks > 0)?3:0;
        }

    $scope.skillIncrease = function(skill){
        var allowed =  ($scope.classes.availableClasses[$scope.classes.selectedClass].skillRanksPerLvl + $scope.getAttribMod("int"))*$scope.character.level;
        var total = 0;
        for (var x in $scope.skillList) {
            total += x.ranks;
        }
        console.log("total:" + total );
        if(total >= allowed)return false;
        $scope.skillList[skill].ranks++;
    }
    $scope.skillDecrease = function(skill){
       // var allowed =  ($scope.classes.availableClasses[$scope.classes.selectedClass].skillRanksPerLvl + $scope.getAttribMod("int"))*$scope.character.level;
        var total = 0;
        for (var x in $scope.skillList) {
            total += x.ranks;
        }
        if (total <= 0) return false;
        $scope.skillList[skill].ranks--;
    }
        $scope.attribList = ["str","dex","con","int","wis","cha"];
        $scope.skillList = {
            "acrobatics":
                {
                "name": "acrobatics",
                "DisplayName": "Acrobatics",
                "useUntrained": true,
                "armorCheck": true,
                "baseAttrib": "dex",
                "ranks":0
                }
            , "athletics": {
                "name": "athletics",
                "DisplayName": "Athletics",
                "useUntrained": true,
                "armorCheck": true,
                "baseAttrib": "str",
                "ranks":0
            }
            , "bluff": {
                "name": "bluff",
                "DisplayName": "Bluff",
                "useUntrained": true,
                "armorCheck": false,
                "baseAttrib": "cha",
                "ranks":0
            }
            , "computers": {
                "name": "computers",
                "DisplayName": "Computers",
                "useUntrained": false,
                "armorCheck": false,
                "baseAttrib": "int",
                "ranks":0
            }
            , "culture": {
                "name": "culture",
                "DisplayName": "Culture",
                "useUntrained": false,
                "armorCheck": false,
                "baseAttrib": "int",
                "ranks":0
            }
            , "diplomacy": {
                "name": "diplomacy",
                "DisplayName": "Diplomacy",
                "useUntrained": true,
                "armorCheck": false,
                "baseAttrib": "cha",
                "ranks":0
            }
            , "disguise": {
                "name": "disguise",
                "DisplayName": "Disguise",
                "useUntrained": true,
                "armorCheck": false,
                "baseAttrib": "cha",
                "ranks":0
            }
            , "engineering": {
                "name": "engineering",
                "DisplayName": "Engineering",
                "useUntrained": false,
                "armorCheck": false,
                "baseAttrib": "int",
                "ranks":0
            }
            , "intimidate": {
                "name": "intimidate",
                "DisplayName": "Intimidate",
                "useUntrained": true,
                "armorCheck": false,
                "baseAttrib": "cha",
                "ranks":0
            }
            , "lifescience": {
                "name": "lifescience",
                "DisplayName": "Life Science",
                "useUntrained": false,
                "armorCheck": false,
                "baseAttrib": "int",
                "ranks":0
            }
            , "medicine":{
                "name": "medicine",
                "DisplayName": "Medicine",
                "useUntrained": false,
                "armorCheck": false,
                "baseAttrib": "int",
                "ranks":0
            }
            , "mysticism": {
                "name": "mysticism",
                "DisplayName": "Mysticism",
                "useUntrained": false,
                "armorCheck": false,
                "baseAttrib": "wis",
                "ranks":0
            }
            , "perception": {
                "name": "perception",
                "DisplayName": "Perception",
                "useUntrained": true,
                "armorCheck": false,
                "baseAttrib": "wis",
                "ranks":0
            }
            , "physicalscience":
                {
                "name": "physicalscience",
                "DisplayName": "Physical Science",
                "useUntrained": false,
                "armorCheck": false,
                "baseAttrib": "int",
                    "ranks":0
                }
            , "piloting": {
                "name": "piloting",
                "DisplayName": "Piloting",
                "useUntrained": true,
                "armorCheck": false,
                "baseAttrib": "dex",
                "ranks":0
            }
            , "sensemotive":
                {
                "name": "sensemotive",
                "DisplayName": "Sensemotive",
                "useUntrained": true,
                "armorCheck": false,
                "baseAttrib": "wis",
                    "ranks":0
                }
            , "sleightofhand":
                {
                    "name": "sleightofhand",
                    "DisplayName": "Sleight of Hand",
                    "useUntrained": false,
                    "armorCheck": true,
                    "baseAttrib": "dex",
                    "ranks":0
                }
            , "stealth": {
                "name": "stealth",
                "DisplayName": "Stealth",
                "useUntrained": true,
                "armorCheck": true,
                "baseAttrib": "dex",
                "ranks":0
            }
            , "survival":
                {
                "name": "survival",
                "DisplayName": "Survival",
                "useUntrained": true,
                "armorCheck": false,
                "baseAttrib": "wis",
                    "ranks":0
                }
        };


});
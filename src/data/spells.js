const spells = [
    {
        id: 1,
        level: 1,
        name: "Absorb Elements",
        type_name: "Abjuration",
        castingTime: "1 reaction, which you take when you take acid, cold, fire, lightning, or thunder damage",
        range: "Self",
        components: "S",
        duration: "1 round",
        effect: "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.",
        description: "Absorbs and harnesses elemental energy from an attack, granting resistance.",
        upCasting: "The extra damage increases by 1d6 for each spell level above 1st.",
        available: "Artificer, Druid, Ranger, Sorcerer, Wizard"
    },
    {
        id: 2,
        level: 1,
        name: "Alarm",
        type_name: "Abjuration (ritual)",
        castingTime: "1 minute",
        range: "30 feet",
        components: "V, S, M (a tiny bell and a piece of fine silver wire)",
        duration: "8 hours",
        effect: "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.\n A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.",
        description: "Sets a magical alarm to alert you when creatures enter a designated area.",
        upCasting: "The duration doubles for each spell level above 1st.",
        available: "Artificer, Ranger, Wizard"
    },
    {
        id: 3,
        level: 1,
        name: "Animal Friendship",
        type_name: "Enchantment",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a morsel of food)",
        duration: "24 hours",
        effect: "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spell ends.",
        description: "Befriends an animal, making it cooperative.",
        upCasting: "You can target one additional beast for each spell level above 1st.",
        available: "Bard, Druid, Ranger"
    },
    {
        id: 4,
        level: 1,
        name: "Armor of Agathys",
        type_name: "Abjuration",
        castingTime: "1 action",
        range: "Self",
        components: "V, S, M (a cup of water)",
        duration: "1 hour",
        effect: "A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage.",
        description: "Envelops the caster in icy armor, damaging attackers who strike them.",
        upCasting: "Both the temporary hit points and the cold damage increase by 5 for each spell level above 1st.",
        available: "Warlock"
    },
    {
        id: 5,
        level: 1,
        name: "Arms of Hadar",
        type_name: "Conjuration",
        castingTime: "1 action",
        range: "Self (10-foot radius)",
        components: "V, S",
        duration: "Instantaneous",
        effect: "You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can't take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect.",
        description: "Unleashes dark, spectral arms to damage and hinder nearby foes.",
        upCasting: "The damage increases by 1d6 for each spell level above 1st.",
        available: "Warlock"
    },
    {
        id: 6,
        level: 1,
        name: "Bane",
        type_name: "Enchantment",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a drop of blood)",
        duration: "Concentration, up to 1 minute",
        effect: "Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.",
        description: "Curses enemies, reducing their attack and saving throw rolls.",
        upCasting: "You can target one additional creature for each spell level above 1st.",
        available: "Bard, Cleric"
    },
    {
        id: 7,
        level: 1,
        name: "Bless",
        type_name: "Enchantment",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a sprinkling of holy water)",
        duration: "Concentration, up to 1 minute",
        effect: "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.",
        description: "Bestows divine blessing on allies, granting improved attack rolls and saving throws.",
        upCasting: "You can target one additional creature for each spell level above 1st.",
        available: "Cleric, Paladin"
    },
    {
        id: 8,
        level: 1,
        name: "Burning Hands",
        type_name: "Evocation",
        castingTime: "1 action",
        range: "Self (15-foot cone)",
        components: "V, S",
        duration: "Instantaneous",
        effect: "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.\n The fire ignites any flammable objects in the area that aren't being worn or carried.",
        description: "Unleashes a burst of flames in front of you.",
        upCasting: "The damage increases by 1d6 for each spell level above 1st.",
        available: "Sorcerer, Wizard"
    },
    {
        id: 9,
        level: 1,
        name: "Catapult",
        type_name: "Transmutation",
        castingTime: "1 action",
        range: "60 feet",
        components: "S",
        duration: "Instantaneous",
        effect: "Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take 3d8 bludgeoning damage.",
        description: "Hurls an object at a target, dealing damage on impact.",
        upCasting: "The maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by 1d8, for each spell level above 1st.",
        available: "Artificer, Sorcerer, Wizard"
    },
    {
        id: 10,
        level: 1,
        name: "Cause Fear",
        type_name: "Necromancy",
        castingTime: "1 action",
        range: "60 feet",
        components: "V",
        duration: "Concentration, up to 1 minute",
        effect: "You awaken the sense of mortality in one creature you can see within range. A construct or an undead is immune to this effect. The target must succeed on a Wisdom saving throw or become frightened of you until the spell ends. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        description: "Frightens a creature.",
        upCasting: "You can target one additional creature for each spell level above 1st. The creatures must be within 30 feet of each other when you target them.",
        available: "Warlock, Wizard"
    },
    {
        id: 11,
        level: 1,
        name: "Chaos Bolt",
        type_name: "Evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Instantaneous",
        effect: "You hurl an undulating, warbling mass of chaotic energy at one creature in range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 + 1d6 damage. Choose one of the d8s. The number rolled on that die determines the attack's damage type, as shown below.\n 1. Acid \n 2. Cold \n 3. Fire \n 4. Force \n 5. Lightning \n 6. Poison \n 7. Psychic \n 8. Thunder \n If you roll the same number on both d8s, the chaotic energy leaps from the target to a different creature of your choice within 30 feet of it. Make a new attack roll against the new target, and make a new damage roll, which could cause the chaotic energy to leap again.\n A creature can be targeted only once by each casting of this spell.",
        description: "Hurls a ball of chaotic energy at a target, which then leaps to a nearby target if it hits.",
        upCasting: "The damage increases by 1d6 for each spell level above 1st.",
        available: "Sorcerer"
    },
    {
        id: 12,
        level: 1,
        name: "Charm Person",
        type_name: "Enchantment",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S",
        duration: "1 hour",
        effect: "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.",
        description: "Makes a humanoid creature regard you as its trusted friend and ally.",
        upCasting: "You can target one additional humanoid for each spell level above 1st. The humanoids must be within 30 feet of each other when you target them.",
        available: "Bard, Druid, Sorcerer, Warlock, Wizard"
    },
    {
        id: 13,
        level: 1,
        name: "Cure Wounds",
        type_name: "Evocation",
        castingTime: "1 Action",
        range: "Touch",
        components: "V, S",
        duration: "Instantaneous",
        effect: "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
        description: "A healing touch that restores hit points.",
        upCasting: "The healing increases by 1d8 for each spell level above 1st.",
        available: "Artificer, Bard, Cleric, Druid, Paladin, Ranger"
    },
    {
        id: 14,
        level: 1,
        name: "Chromatic Orb",
        type_name: "Evocation",
        castingTime: "1 action",
        range: "90 feet",
        components: "V, S, M (a diamond worth at least 50 gp)",
        duration: "Instantaneous",
        effect: "You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose.",
        description: "Hurls a sphere of energy at a target.",
        upCasting: "The damage increases by 1d8 for each spell level above 1st.",
        available: "Sorcerer, Wizard"
    },
    {
        id: 15,
        level: 1,
        name: "Feather Fall",
        type_name: "Transmutation",
        castingTime: "1 reaction, which you take when you or a creature within 60 feet of you falls",
        range: "60 feet",
        components: "V, M (a small feather or piece of down)",
        duration: "1 minute",
        effect: "Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.",
        description: "Slows falling speed, ensuring a gentle descent and preventing fall-related injuries.",
        upCasting: "You can target one additional creature for each spell level abote 1st.",
        available: "Artificer, Bard, Sorcerer, Wizard"
    },
    {
        id: 16,
        level: 1,
        name: "Repair",
        type_name: "Transmutation",
        castingTime: "1 Action",
        range: "Touch",
        components: "V, S, M (a small toolkit or set of tools)",
        duration: "Instantaneous",
        effect: "You channel mending energy into a construct or object, restoring it to a functional state. This spell can repair simple mechanical devices, weapons, armor, or other non-magical items. However, it cannot restore missing parts or pieces of objects or constructs unless you have the required materials within 5 feet of you during casting. \n A construct regains hit points equal to 2d8 + your spellcasting ability modifier.",
        description: "Heals constructs and repairs non-magical objects.",
        upCasting: "The healing increases by 1d8 for each spell level above 1st.",
        available: "Artificer"
    },
    {
        id: 17,
        level: 1,
        name: "Shield",
        type_name: "Abjuration",
        castingTime: "1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell",
        range: "Self",
        components: "V, S",
        duration: "1 round",
        effect: "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.",
        description: "Creates a temporary force field that boosts your armor class.",
        upCasting: "The duration of the spell increases by 1 round for every two spell levels above 1st",
        available: "Sorcerer, Wizard"
    },
    {
        id: 18,
        level: 2,
        name: "Heat Metal",
        type_name: "Transmutation",
        castingTime: "1 Action",
        range: "60 feet",
        components: "V, S, M (a piece of iron and a flame)",
        duration: "Concentration, up to 1 minute",
        effect: "Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again.\n If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn’t drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn.",
        description: "Inflicts intense heat and damage to metal objects.",
        upCasting: "The damage increases by 1d8 for each spell level above 2nd.",
        available: "Druid, Ranger"
    },
    {
        id: 19,
        level: 2,
        name: "Hold Person",
        type_name: "Enchantment",
        castingTime: "1 Action",
        range: "60 feet",
        components: "V, S, M (a small, straight piece of iron)",
        duration: "Concentration, up to 1 minute",
        effect: "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
        description: "Immobilizes a humanoid creature, rendering them unable to move.",
        upCasting: "You can target one additional humanoid for each spell level above 2nd. The humanoids must be within 30 feet of each other when you target them.",
        available: "Bard, Cleric, Druid, Sorcerer, Warlock, Wizard"
    },
    {
        id: 20,
        level: 2,
        name: "Pass Without a Trace",
        type_name: "Abjuration",
        castingTime: "1 Action",
        range: "Self",
        components: "V, S, M (ashes from a burned leaf of mistletoe and a sprig of spruce)",
        duration: "Concentration, up to 1 hour",
        effect: "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can’t be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.",
        description: "Grants stealth bonuses and conceals tracks.",
        upCasting: "When you cast this spell as 5th-level spell or higher, there is no need for concentration.",
        available: "Druid, Ranger"
    },
    {
        id: 21,
        level: 3,
        name: "Aura of Vitality",
        type_name: "Evocation",
        castingTime: "1 action",
        range: "Self (30-foot radius)",
        components: "V",
        duration: "Concentration, up to 1 minute",
        effect: "Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points.",
        description: "Heals a creature of choice at the start of each turn.",
        upCasting: "The healing increases by 1d6 for each spell level above 3rd.",
        available: "Paladin"
    },
    {
        id: 22,
        level: 3,
        name: "Fireball",
        type_name: "Evocation",
        castingTime: "1 Action",
        range: "150 feet",
        components: "V, S, M (a tiny ball of bat guano and sulfur)",
        duration: "Instantaneous",
        effect: "A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot radius must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.",
        description: "Creates a fiery explosion dealing AoE fire damage.",
        upCasting: "The damage increases by 1d6 for each spell level above 3rd.",
        available: "Sorcerer, Wizard"
    },
    {
        id: 23,
        level: 3,
        name: "Fly",
        type_name: "Transmutation",
        castingTime: "1 Action",
        range: "Touch",
        components: "V, S, M (a wing feather from any bird)",
        duration: "Concentration, up to 10 minutes",
        effect: "You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall.",
        description: "Grants the ability to fly for a limited duration.",
        upCasting: "You can target one additional creature for each spell level above 3rd.",
        available: "Artificer, Sorcerer, Warlock, Wizard"
    }
];

module.exports = spells;
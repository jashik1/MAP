ServerEvents.recipes(event => {
event.remove([{ output: 'minecraft:stone_pickaxe' } , { output: 'minecraft:iron_pickaxe' } , { output: 'minecraft:wooden_pickaxe' } , { output: 'minecraft:golden_pickaxe' } , { output: 'minecraft:diamond_pickaxe' } , { output: 'ae2:nether_quartz_pickaxe' } , { output: 'ae2:fluix_pickaxe' } , { output: 'ae2:certus_quartz_pickaxe' } , { output: 'immersiveengineering:pickaxe_steel'} , { output: 'mekanismtools:bronze_pickaxe'} , { output: 'mekanismtools:lapis_lazuli_pickaxe'} , { output: 'mekanismtools:osmium_pickaxe'} , { output: 'mekanismtools:refined_glowstone_pickaxe'} , { output: 'mekanismtools:refined_obsidian_pickaxe'} , { output: 'mekanismtools:steel_pickaxe'}])
event.remove([{ output: 'minecraft:stone_shovel' } , { output: 'minecraft:iron_shovel' } , { output: 'minecraft:wooden_shovel' } , { output: 'minecraft:golden_shovel' } , { output: 'minecraft:diamond_shovel' } , { output: 'ae2:nether_quartz_shovel' } , { output: 'ae2:fluix_shovel' } , { output: 'ae2:certus_quartz_shovel' } , { output: 'immersiveengineering:shovel_steel'} , { output: 'mekanismtools:bronze_shovel'} , { output: 'mekanismtools:lapis_lazuli_shovel'} , { output: 'mekanismtools:osmium_shovel'} , { output: 'mekanismtools:refined_glowstone_shovel'} , { output: 'mekanismtools:refined_obsidian_shovel'} , { output: 'mekanismtools:steel_shovel'}])
event.remove([{ output: 'minecraft:stone_axe' } , { output: 'minecraft:iron_axe' } , { output: 'minecraft:wooden_axe' } , { output: 'minecraft:golden_axe' } , { output: 'minecraft:diamond_axe' } , { output: 'ae2:nether_quartz_axe' } , { output: 'ae2:fluix_axe' } , { output: 'ae2:certus_quartz_axe' } , { output: 'immersiveengineering:axe_steel'} , { output: 'mekanismtools:bronze_axe'} , { output: 'mekanismtools:lapis_lazuli_axe'} , { output: 'mekanismtools:osmium_axe'} , { output: 'mekanismtools:refined_glowstone_axe'} , { output: 'mekanismtools:refined_obsidian_axe'} , { output: 'mekanismtools:steel_axe'}])
event.remove([{ output: 'minecraft:stone_sword' } , { output: 'minecraft:iron_sword' } , { output: 'minecraft:wooden_sword' } , { output: 'minecraft:golden_sword' } , { output: 'minecraft:diamond_sword' } , { output: 'ae2:nether_quartz_sword' } , { output: 'ae2:fluix_sword' } , { output: 'ae2:certus_quartz_sword' } , { output: 'immersiveengineering:sword_steel'} , { output: 'mekanismtools:bronze_sword'} , { output: 'mekanismtools:lapis_lazuli_sword'} , { output: 'mekanismtools:osmium_sword'} , { output: 'mekanismtools:refined_glowstone_sword'} , { output: 'mekanismtools:refined_obsidian_sword'} , { output: 'mekanismtools:steel_sword'}])
event.remove([{ output: 'minecraft:stone_hoe' } , { output: 'minecraft:iron_hoe' } , { output: 'minecraft:wooden_hoe' } , { output: 'minecraft:golden_hoe' } , { output: 'minecraft:diamond_hoe' } , { output: 'ae2:nether_quartz_hoe' } , { output: 'ae2:fluix_hoe' } , { output: 'ae2:certus_quartz_hoe' } , { output: 'immersiveengineering:hoe_steel'} , { output: 'mekanismtools:bronze_hoe'} , { output: 'mekanismtools:lapis_lazuli_hoe'} , { output: 'mekanismtools:osmium_hoe'} , { output: 'mekanismtools:refined_glowstone_hoe'} , { output: 'mekanismtools:refined_obsidian_hoe'} , { output: 'mekanismtools:steel_hoe'}])
event.remove([{id:'minecraft:crafting_table'}, {id:'minecraft:stick'}, {id:'tconstruct:tables/pattern'}, {id:'minecraft:furnace'}])
})
// fluix tools
ServerEvents.recipes(event => {
    event.shaped(
  Item.of('minecraft:stick', 2),
  [
    ' A ',
    ' A ',
    '   '
  ],
  {
    A: '#minecraft:planks'
  }
)
    event.shaped(
  Item.of('tconstruct:pattern', 1),
  [
    '   ',
    ' AB',
    ' BA'
  ],
  {
    A: '#minecraft:planks',
    B: '#forge:rods/wooden'
  }
)
    event.shapeless(
  Item.of('minecraft:gravel', 1),
  [
    'kubejs:pebble',
    'kubejs:rock',
    '#kubejs:igneous_pebbles',
    '#kubejs:igneous_pebbles'
  ])
  const sands = ['white', 'blue', 'pink', 'purple', 'black']
	sands.forEach(sand => {
    event.campfireCooking(`minecraft:${sand}_stained_glass`, `biomeswevegone:${sand}_sand`, 0.35, 600)
	})
  event.campfireCooking('tconstruct:seared_brick', 'tconstruct:grout', 0.35, 600)
  event.campfireCooking('minecraft:glass', '#minecraft:smelts_to_glass', 0.35, 600)
  event.recipes.tconstruct.casting_basin('create:andesite_alloy').fluid('tconstruct:molten_copper', 20).cast('#forge:andesite').cast_consumed(true).cooling_time(30)
  const transitionalItem = 'kubejs:unprocessed_hardened_brass_sheet'
  event.recipes.create.sequenced_assembly(
      [
        'kubejs:hardened_brass_sheet'
      ],
        'create:brass_sheet', 
      [
        event.recipes.create.filling(transitionalItem, [transitionalItem, Fluid.of('tconstruct:molten_iron', 250)]),
        event.recipes.create.pressing(transitionalItem, transitionalItem),
        event.recipes.create.pressing(transitionalItem, transitionalItem)
      ]
    )
    .transitionalItem(transitionalItem)
    .loops(1)
    event.replaceInput({id: 'create:item_application/brass_casing_from_log'}, 'create:brass_ingot', 'kubejs:hardened_brass_sheet')
    event.replaceInput({id: 'create:item_application/brass_casing_from_log'}, '#forge:stripped_logs', 'create:andesite_casing')
    event.remove({id: 'create:item_application/brass_casing_from_wood'})
})
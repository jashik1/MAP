ServerEvents.recipes(event => {
    const wood_types = ['minecraft:oak', 'minecraft:spruce', 'minecraft:birch', 'minecraft:jungle', 'minecraft:acacia', 'minecraft:dark_oak', 'minecraft:mangrove', 'minecraft:cherry', 'minecraft:bamboo', 'minecraft:crimson', 'minecraft:warped', 'biomeswevegone:aspen', 'biomeswevegone:baobab', 'biomeswevegone:blue_enchanted', 'biomeswevegone:cika', 'biomeswevegone:cypress', 'biomeswevegone:ebony', 'biomeswevegone:fir', 'biomeswevegone:florus', 'biomeswevegone:green_enchanted', 'biomeswevegone:holly', 'biomeswevegone:ironwood', 'biomeswevegone:jacaranda', 'biomeswevegone:mahogany', 'biomeswevegone:maple', 'biomeswevegone:palm', 'biomeswevegone:pine', 'biomeswevegone:rainbow_eucalyptus', 'biomeswevegone:redwood', 'biomeswevegone:sakura', 'biomeswevegone:skyris', 'biomeswevegone:white_mangrove', 'biomeswevegone:willow', 'biomeswevegone:witch_hazel', 'biomeswevegone:zelkova', 'tconstruct:greenheart', 'tconstruct:skyroot', 'tconstruct:bloodshroom', 'tconstruct:enderbark', 'netherdescent:arisian', 'netherdescent:embur', 'netherdescent:sythian', 'netherdescent:wailing']
event.remove({id: 'tconstruct:world/wood/greenheart/fence'})
event.remove({id: 'tconstruct:world/wood/skyroot/fence'})
event.remove({id: 'tconstruct:world/wood/bloodshroom/fence'})
event.remove({id: 'tconstruct:world/wood/enderbark/fence'})
wood_types.forEach(fence => {
    event.shaped(Item.of(`${fence}_fence`), [
      'ABA',
      'ABA'
    ], {
      A: `${fence}_planks`,
      B: 'minecraft:stick'
    }).id(`${fence}_fence`)
  })
  event.shaped(Item.of('minecraft:nether_brick_fence', 2), [
    'ABA',
    'ABA'
  ], {
    A: 'minecraft:nether_bricks',
    B: 'minecraft:nether_brick'
  }).id('minecraft:nether_brick_fence')
    event.shaped(Item.of('immersiveengineering:steel_fence'), [
    'ABA',
    'ABA'
  ], {
    A: '#forge:ingots/steel',
    B: '#forge:rods/steel'
  }).id('immersiveengineering:crafting/steel_fence')
    event.shaped(Item.of('immersiveengineering:alu_fence'), [
    'ABA',
    'ABA'
  ], {
    A: '#forge:ingots/aluminum',
    B: '#forge:rods/aluminum'
  }).id('immersiveengineering:crafting/alu_fence')
    event.shaped(Item.of('immersiveengineering:treated_fence'), [
    'ABA',
    'ABA'
  ], {
    A: '#forge:treated_wood',
    B: 'immersiveengineering:stick_treated'
  }).id('immersiveengineering:crafting/treated_fence')
    event.shaped(Item.of('tconstruct:nahuatl_fence', 2), [
    'AAA',
    'AAA'
  ], {
    A: 'tconstruct:nahuatl'
  }).id('tconstruct:common/firewood/nahuatl_fence')
    event.shaped(Item.of('tconstruct:blazewood_fence', 2), [
    'AAA',
    'AAA'
  ], {
    A: 'tconstruct:blazewood'
  }).id('tconstruct:common/firewood/blazewood_fence')
    event.shaped(Item.of('tconstruct:scorched_bricks_fence', 2), [
    'ABA',
    'ABA'
  ], {
    A: 'tconstruct:scorched_bricks',
    B: 'tconstruct:scorched_brick'
  }).id('tconstruct:smeltery/scorched/scorched_bricks_fence')
    event.shaped(Item.of('netherdescent:blue_nether_brick_fence', 2), [
    'ABA',
    'ABA'
  ], {
    A: 'netherdescent:blue_nether_bricks',
    B: 'netherdescent:blue_nether_brick'
  }).id('netherdescent:blue_nether_brick_fence')
  event.recipes.tconstruct.casting_basin('tconstruct:nahuatl_fence')
    .fluid('tconstruct:molten_obsidian', 750)
    .cast('#minecraft:wooden_fences')
    .cast_consumed(true)
    .cooling_time(100)
    .id('tconstruct:smeltery/casting/obsidian/nahuatl_fence')
  event.recipes.tconstruct.casting_basin('tconstruct:blazewood_fence')
    .fluid('tconstruct:blazing_blood', 600)
    .cast('#minecraft:wooden_fences')
    .cast_consumed(true)
    .cooling_time(120)
    .id('tconstruct:smeltery/casting/blazewood_fence')
})
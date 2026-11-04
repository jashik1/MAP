ServerEvents.recipes(event => {
  const stones = (output, pebble) => {
    event.shaped(output, [
      'AA ',
      'AA '
    ], {
      A: pebble
    })
  }
  stones('minecraft:cobblestone', 'kubejs:pebble')
  stones('minecraft:mossy_cobblestone', 'kubejs:mossy_pebble')
  stones('minecraft:cobbled_deepslate', 'kubejs:deepslate_pebble')
  stones('minecraft:granite', 'kubejs:granite_pebble')
  stones('minecraft:diorite', 'kubejs:diorite_pebble')
  stones('minecraft:andesite', 'kubejs:andesite_pebble')
  stones('minecraft:calcite', 'kubejs:calcite_pebble')
  stones('minecraft:blackstone', 'kubejs:blackstone_pebble')
  stones('biomeswevegone:rocky_stone', 'kubejs:rock')
})
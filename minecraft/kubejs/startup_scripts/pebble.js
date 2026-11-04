StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/pebble.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/pebble.json
  event.create('pebble')
  event.create('mossy_pebble')
  event.create('deepslate_pebble')
  event.create('granite_pebble')
  event.create('diorite_pebble')
  event.create('andesite_pebble')
  event.create('calcite_pebble')
  event.create('blackstone_pebble')
  event.create('rock')
})
  ServerEvents.recipes(event => {
    event.remove({output: 'tconstruct:rod_cast'})
    event.remove({output: 'tconstruct:plate_cast'})
    event.remove({output: 'tconstruct:wire_cast'})
    event.remove({output: 'tconstruct:rod_sand_cast'})
    event.remove({output: 'tconstruct:plate_sand_cast'})
    event.remove({output: 'tconstruct:wire_sand_cast'})
    event.remove({output: 'tconstruct:rod_red_sand_cast'})
    event.remove({output: 'tconstruct:plate_red_sand_cast'})
    event.remove({output: 'tconstruct:wire_red_sand_cast'})

    event.remove({input: '#tconstruct:casts/multi_use/rod', type: 'tconstruct:casting_table'})
    event.remove({input: '#tconstruct:casts/multi_use/plate', type: 'tconstruct:casting_table'})
    event.remove({input: '#tconstruct:casts/multi_use/wire', type: 'tconstruct:casting_table'})
    event.remove({input: '#tconstruct:casts/single_use/rod', type: 'tconstruct:casting_table'})
    event.remove({input: '#tconstruct:casts/single_use/plate', type: 'tconstruct:casting_table'})
    event.remove({input: '#tconstruct:casts/single_use/wire', type: 'tconstruct:casting_table'})

  })
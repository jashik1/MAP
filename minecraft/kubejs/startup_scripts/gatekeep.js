StartupEvents.registry('item', event => {
    event.create('hardened_brass_sheet')
    event.create('unprocessed_hardened_brass_sheet', 'create:sequenced_assembly')
    event.create('nozzle')
    event.create('millstone_gear')
    event.create('simple_redstone_alloy_ingot')
})
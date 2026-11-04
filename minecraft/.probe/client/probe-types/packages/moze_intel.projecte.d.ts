declare module "packages/moze_intel/projecte/gameObjs/items/tools/$PEMorningStar" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ILangEntry, $ILangEntry$Type} from "packages/moze_intel/projecte/utils/text/$ILangEntry"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemMode, $IItemMode$Type} from "packages/moze_intel/projecte/gameObjs/items/$IItemMode"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$PETool, $PETool$Type} from "packages/moze_intel/projecte/gameObjs/items/tools/$PETool"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$EnumMatterType, $EnumMatterType$Type} from "packages/moze_intel/projecte/gameObjs/$EnumMatterType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PEMorningStar extends $PETool implements $IItemMode {
readonly "blocks": $TagKey<($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $EnumMatterType$Type, arg1: integer, arg2: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getModeLangEntries"(): ($ILangEntry)[]
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "getMode"(arg0: $ItemStack$Type): byte
public "getModeCount"(): byte
public "getModeLangEntry"(arg0: $ItemStack$Type): $ILangEntry
public "changeMode"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getModeSwitchEntry"(): $ILangEntry
public "getToolTip"(arg0: $ItemStack$Type): $Component
get "modeLangEntries"(): ($ILangEntry)[]
get "modeCount"(): byte
get "modeSwitchEntry"(): $ILangEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PEMorningStar$Type = ($PEMorningStar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PEMorningStar_ = $PEMorningStar$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$EvertideAmulet" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IProjectileShooter, $IProjectileShooter$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IProjectileShooter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemPE, $ItemPE$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemPE"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPedestalItem, $IPedestalItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IPedestalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EvertideAmulet extends $ItemPE implements $IProjectileShooter, $IPedestalItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getPedestalDescription"(): $List<($Component)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "updateInPedestal"<PEDESTAL extends ($BlockEntity) & ($IDMPedestal)>(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: PEDESTAL): boolean
public "shootProjectile"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
get "pedestalDescription"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EvertideAmulet$Type = ($EvertideAmulet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EvertideAmulet_ = $EvertideAmulet$Type;
}}
declare module "packages/moze_intel/projecte/utils/text/$ILangEntry" {
import {$IHasTranslationKey, $IHasTranslationKey$Type} from "packages/moze_intel/projecte/utils/text/$IHasTranslationKey"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export interface $ILangEntry extends $IHasTranslationKey {

 "translate"(...arg0: (any)[]): $MutableComponent
 "translateColored"(arg0: $ChatFormatting$Type, ...arg1: (any)[]): $MutableComponent
 "getTranslationKey"(): string

(...arg0: (any)[]): $MutableComponent
}

export namespace $ILangEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILangEntry$Type = ($ILangEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILangEntry_ = $ILangEntry$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/rings/$VoidRing" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IExtraFunction, $IExtraFunction$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IExtraFunction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GemEternalDensity, $GemEternalDensity$Type} from "packages/moze_intel/projecte/gameObjs/items/$GemEternalDensity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPedestalItem, $IPedestalItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IPedestalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $VoidRing extends $GemEternalDensity implements $IPedestalItem, $IExtraFunction {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getPedestalDescription"(): $List<($Component)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "updateInAlchChest"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
public "updateInPedestal"<PEDESTAL extends ($BlockEntity) & ($IDMPedestal)>(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: PEDESTAL): boolean
public "doExtraFunction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): boolean
public "updateInAlchBag"(arg0: $IItemHandler$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
get "pedestalDescription"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidRing$Type = ($VoidRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidRing_ = $VoidRing$Type;
}}
declare module "packages/moze_intel/projecte/api/nss/$NSSItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractNBTNSSTag, $AbstractNBTNSSTag$Type} from "packages/moze_intel/projecte/api/nss/$AbstractNBTNSSTag"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $NSSItem extends $AbstractNBTNSSTag<($Item)> {


public "getJsonPrefix"(): string
public "getType"(): string
public static "createTag"(arg0: $TagKey$Type<($Item$Type)>): $NSSItem
public static "createTag"(arg0: $ResourceLocation$Type): $NSSItem
public static "createItem"(arg0: $ItemLike$Type): $NSSItem
public static "createItem"(arg0: $ItemStack$Type): $NSSItem
public static "createItem"(arg0: $ResourceLocation$Type, arg1: $CompoundTag$Type): $NSSItem
public static "createItem"(arg0: $ItemLike$Type, arg1: $CompoundTag$Type): $NSSItem
public static "createItem"(arg0: $ResourceLocation$Type): $NSSItem
get "jsonPrefix"(): string
get "type"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NSSItem$Type = ($NSSItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NSSItem_ = $NSSItem$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$ProjectETNT" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TntBlock, $TntBlock$Type} from "packages/net/minecraft/world/level/block/$TntBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ProjectETNT$TNTEntityCreator, $ProjectETNT$TNTEntityCreator$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$ProjectETNT$TNTEntityCreator"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"

export class $ProjectETNT extends $TntBlock {
static readonly "UNSTABLE": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $ProjectETNT$TNTEntityCreator$Type)

public "createAndAddEntity"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $LivingEntity$Type): void
public "createDispenseItemBehavior"(): $DispenseItemBehavior
public "wasExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
public "onCaughtFire"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $LivingEntity$Type): void
public "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectETNT$Type = ($ProjectETNT);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectETNT_ = $ProjectETNT$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/registration/impl/$BlockEntityTypeRegistryObject" {
import {$WrappedRegistryObject, $WrappedRegistryObject$Type} from "packages/moze_intel/projecte/gameObjs/registration/$WrappedRegistryObject"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $BlockEntityTypeRegistryObject<BE extends $BlockEntity> extends $WrappedRegistryObject<($BlockEntityType<(BE)>)> {

constructor(arg0: $RegistryObject$Type<($BlockEntityType$Type<(BE)>)>)

public "getTicker"(arg0: boolean): $BlockEntityTicker<(BE)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTypeRegistryObject$Type<BE> = ($BlockEntityTypeRegistryObject<(BE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityTypeRegistryObject_<BE> = $BlockEntityTypeRegistryObject$Type<(BE)>;
}}
declare module "packages/moze_intel/projecte/api/block_entity/$IDMPedestal" {
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IDMPedestal {

 "getEffectBounds"(): $AABB
 "decrementActivityCooldown"(): void
 "setActivityCooldown"(arg0: integer): void
 "getActivityCooldown"(): integer
}

export namespace $IDMPedestal {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDMPedestal$Type = ($IDMPedestal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDMPedestal_ = $IDMPedestal$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$AlchemicalFuel" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemPE, $ItemPE$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemPE"
import {$EnumFuelType, $EnumFuelType$Type} from "packages/moze_intel/projecte/gameObjs/$EnumFuelType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AlchemicalFuel extends $ItemPE {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $EnumFuelType$Type)

public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemicalFuel$Type = ($AlchemicalFuel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemicalFuel_ = $AlchemicalFuel$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/block_entities/$EmcChestBlockEntity" {
import {$CapabilityEmcBlockEntity, $CapabilityEmcBlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$CapabilityEmcBlockEntity"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LidBlockEntity, $LidBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$LidBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $EmcChestBlockEntity extends $CapabilityEmcBlockEntity implements $LidBlockEntity, $MenuProvider {


public static "lidAnimateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $EmcChestBlockEntity$Type): void
public "recheckOpen"(): void
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public "getOpenNess"(arg0: float): float
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "getDisplayName"(): $Component
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmcChestBlockEntity$Type = ($EmcChestBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmcChestBlockEntity_ = $EmcChestBlockEntity$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$CondenserMK2" {
import {$BlockEntityTypeRegistryObject, $BlockEntityTypeRegistryObject$Type} from "packages/moze_intel/projecte/gameObjs/registration/impl/$BlockEntityTypeRegistryObject"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Condenser, $Condenser$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$Condenser"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$CondenserMK2BlockEntity, $CondenserMK2BlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$CondenserMK2BlockEntity"

export class $CondenserMK2 extends $Condenser {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getType"(): $BlockEntityTypeRegistryObject<($CondenserMK2BlockEntity)>
get "type"(): $BlockEntityTypeRegistryObject<($CondenserMK2BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CondenserMK2$Type = ($CondenserMK2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CondenserMK2_ = $CondenserMK2$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/tools/$PEShears" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IItemCharge, $IItemCharge$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IItemCharge"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumMatterType, $EnumMatterType$Type} from "packages/moze_intel/projecte/gameObjs/$EnumMatterType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBarHelper, $IBarHelper$Type} from "packages/moze_intel/projecte/gameObjs/items/$IBarHelper"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ShearsItem, $ShearsItem$Type} from "packages/net/minecraft/world/item/$ShearsItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PEShears extends $ShearsItem implements $IItemCharge, $IBarHelper {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $EnumMatterType$Type, arg1: integer, arg2: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getBarColor"(arg0: $ItemStack$Type): integer
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getNumCharges"(arg0: $ItemStack$Type): integer
public "getWidthForBar"(arg0: $ItemStack$Type): float
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getChargePercent"(arg0: $ItemStack$Type): float
public "changeCharge"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getCharge"(arg0: $ItemStack$Type): integer
public "getScaledBarWidth"(arg0: $ItemStack$Type): integer
public "getColorForBar"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PEShears$Type = ($PEShears);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PEShears_ = $PEShears$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/$EnumCollectorTier" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumCollectorTier extends $Enum<($EnumCollectorTier)> implements $StringRepresentable {
static readonly "MK1": $EnumCollectorTier
static readonly "MK2": $EnumCollectorTier
static readonly "MK3": $EnumCollectorTier


public "toString"(): string
public static "values"(): ($EnumCollectorTier)[]
public static "valueOf"(arg0: string): $EnumCollectorTier
public "getGenRate"(): long
public "getSerializedName"(): string
public "getStorage"(): long
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "genRate"(): long
get "serializedName"(): string
get "storage"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumCollectorTier$Type = (("mk1") | ("mk3") | ("mk2")) | ($EnumCollectorTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumCollectorTier_ = $EnumCollectorTier$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$KleinStar" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IEmcStorage$EmcAction, $IEmcStorage$EmcAction$Type} from "packages/moze_intel/projecte/api/capabilities/block_entity/$IEmcStorage$EmcAction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemPE, $ItemPE$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemPE"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBarHelper, $IBarHelper$Type} from "packages/moze_intel/projecte/gameObjs/items/$IBarHelper"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IItemEmcHolder, $IItemEmcHolder$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IItemEmcHolder"
import {$KleinStar$EnumKleinTier, $KleinStar$EnumKleinTier$Type} from "packages/moze_intel/projecte/gameObjs/items/$KleinStar$EnumKleinTier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $KleinStar extends $ItemPE implements $IItemEmcHolder, $IBarHelper {
readonly "tier": $KleinStar$EnumKleinTier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $KleinStar$EnumKleinTier$Type)

public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getWidthForBar"(arg0: $ItemStack$Type): float
public "getMaximumEmc"(arg0: $ItemStack$Type): long
public "getStoredEmc"(arg0: $ItemStack$Type): long
public "insertEmc"(arg0: $ItemStack$Type, arg1: long, arg2: $IEmcStorage$EmcAction$Type): long
public "extractEmc"(arg0: $ItemStack$Type, arg1: long, arg2: $IEmcStorage$EmcAction$Type): long
public "getNeededEmc"(arg0: $ItemStack$Type): long
public "getScaledBarWidth"(arg0: $ItemStack$Type): integer
public "getColorForBar"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KleinStar$Type = ($KleinStar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KleinStar_ = $KleinStar$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$RepairTalisman" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$IAlchChestItem, $IAlchChestItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IAlchChestItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemPE, $ItemPE$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemPE"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IAlchBagItem, $IAlchBagItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IAlchBagItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPedestalItem, $IPedestalItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IPedestalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RepairTalisman extends $ItemPE implements $IAlchBagItem, $IAlchChestItem, $IPedestalItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getPedestalDescription"(): $List<($Component)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "updateInAlchChest"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
public "updateInPedestal"<PEDESTAL extends ($BlockEntity) & ($IDMPedestal)>(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: PEDESTAL): boolean
public "updateInAlchBag"(arg0: $IItemHandler$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
get "pedestalDescription"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepairTalisman$Type = ($RepairTalisman);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepairTalisman_ = $RepairTalisman$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$MatterBlock" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumMatterType, $EnumMatterType$Type} from "packages/moze_intel/projecte/gameObjs/$EnumMatterType"
import {$IMatterBlock, $IMatterBlock$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$IMatterBlock"

export class $MatterBlock extends $Block implements $IMatterBlock {
readonly "matterType": $EnumMatterType
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $EnumMatterType$Type)

public "getMatterType"(): $EnumMatterType
get "matterType"(): $EnumMatterType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterBlock$Type = ($MatterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatterBlock_ = $MatterBlock$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/rings/$MindStone" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PEToggleItem, $PEToggleItem$Type} from "packages/moze_intel/projecte/gameObjs/items/rings/$PEToggleItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPedestalItem, $IPedestalItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IPedestalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MindStone extends $PEToggleItem implements $IPedestalItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getPedestalDescription"(): $List<($Component)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "updateInPedestal"<PEDESTAL extends ($BlockEntity) & ($IDMPedestal)>(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: PEDESTAL): boolean
get "pedestalDescription"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MindStone$Type = ($MindStone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MindStone_ = $MindStone$Type;
}}
declare module "packages/moze_intel/projecte/api/nss/$AbstractNSSTag" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$NormalizedSimpleStack, $NormalizedSimpleStack$Type} from "packages/moze_intel/projecte/api/nss/$NormalizedSimpleStack"
import {$NSSTag, $NSSTag$Type} from "packages/moze_intel/projecte/api/nss/$NSSTag"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AbstractNSSTag<TYPE> implements $NSSTag {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "json"(): string
public "forEachElement"(arg0: $Consumer$Type<($NormalizedSimpleStack$Type)>): void
public static "clearCreatedTags"(): void
public "representsTag"(): boolean
public "getResourceLocation"(): $ResourceLocation
public static "getAllCreatedTags"(): $Set<($NSSTag)>
get "resourceLocation"(): $ResourceLocation
get "allCreatedTags"(): $Set<($NSSTag)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractNSSTag$Type<TYPE> = ($AbstractNSSTag<(TYPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractNSSTag_<TYPE> = $AbstractNSSTag$Type<(TYPE)>;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$ProjectETNT$TNTEntityCreator" {
import {$PrimedTnt, $PrimedTnt$Type} from "packages/net/minecraft/world/entity/item/$PrimedTnt"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ProjectETNT$TNTEntityCreator {

 "create"(arg0: $Level$Type, arg1: double, arg2: double, arg3: double, arg4: $LivingEntity$Type): $PrimedTnt

(arg0: $Level$Type, arg1: double, arg2: double, arg3: double, arg4: $LivingEntity$Type): $PrimedTnt
}

export namespace $ProjectETNT$TNTEntityCreator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectETNT$TNTEntityCreator$Type = ($ProjectETNT$TNTEntityCreator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectETNT$TNTEntityCreator_ = $ProjectETNT$TNTEntityCreator$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$InterdictionTorchEntityBlock$InterdictionTorchWall" {
import {$InterdictionTorchBlockEntity, $InterdictionTorchBlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$InterdictionTorchBlockEntity"
import {$InterdictionTorchEntityBlock, $InterdictionTorchEntityBlock$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$InterdictionTorchEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$WallTorchBlock, $WallTorchBlock$Type} from "packages/net/minecraft/world/level/block/$WallTorchBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntityTypeRegistryObject, $BlockEntityTypeRegistryObject$Type} from "packages/moze_intel/projecte/gameObjs/registration/impl/$BlockEntityTypeRegistryObject"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $InterdictionTorchEntityBlock$InterdictionTorchWall extends $WallTorchBlock implements $InterdictionTorchEntityBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

/**
 * 
 * @deprecated
 */
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "getType"(): $BlockEntityTypeRegistryObject<($InterdictionTorchBlockEntity)>
public "triggerBlockEntityEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $InterdictionTorchBlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "type"(): $BlockEntityTypeRegistryObject<($InterdictionTorchBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterdictionTorchEntityBlock$InterdictionTorchWall$Type = ($InterdictionTorchEntityBlock$InterdictionTorchWall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterdictionTorchEntityBlock$InterdictionTorchWall_ = $InterdictionTorchEntityBlock$InterdictionTorchWall$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$AlchemicalChest" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockDirection, $BlockDirection$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$BlockDirection"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$PEEntityBlock, $PEEntityBlock$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$PEEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EmcChestBlockEntity, $EmcChestBlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$EmcChestBlockEntity"
import {$BlockEntityTypeRegistryObject, $BlockEntityTypeRegistryObject$Type} from "packages/moze_intel/projecte/gameObjs/registration/impl/$BlockEntityTypeRegistryObject"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $AlchemicalChest extends $BlockDirection implements $SimpleWaterloggedBlock, $PEEntityBlock<($EmcChestBlockEntity)> {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getType"(): $BlockEntityTypeRegistryObject<(any)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
/**
 * 
 * @deprecated
 */
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
/**
 * 
 * @deprecated
 */
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
/**
 * 
 * @deprecated
 */
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
/**
 * 
 * @deprecated
 */
public "getFluidState"(arg0: $BlockState$Type): $FluidState
/**
 * 
 * @deprecated
 */
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
/**
 * 
 * @deprecated
 */
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
/**
 * 
 * @deprecated
 */
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "triggerBlockEntityEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $EmcChestBlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "type"(): $BlockEntityTypeRegistryObject<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemicalChest$Type = ($AlchemicalChest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemicalChest_ = $AlchemicalChest$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/tools/$RedMatterSword" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ILangEntry, $ILangEntry$Type} from "packages/moze_intel/projecte/utils/text/$ILangEntry"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$PESword, $PESword$Type} from "packages/moze_intel/projecte/gameObjs/items/tools/$PESword"
import {$IItemMode, $IItemMode$Type} from "packages/moze_intel/projecte/gameObjs/items/$IItemMode"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RedMatterSword extends $PESword implements $IItemMode {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getModeLangEntries"(): ($ILangEntry)[]
public "getMode"(arg0: $ItemStack$Type): byte
public "getModeCount"(): byte
public "getModeLangEntry"(arg0: $ItemStack$Type): $ILangEntry
public "changeMode"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getModeSwitchEntry"(): $ILangEntry
public "getToolTip"(arg0: $ItemStack$Type): $Component
get "modeLangEntries"(): ($ILangEntry)[]
get "modeCount"(): byte
get "modeSwitchEntry"(): $ILangEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedMatterSword$Type = ($RedMatterSword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedMatterSword_ = $RedMatterSword$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/block_entities/$DMFurnaceBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CapabilityEmcBlockEntity, $CapabilityEmcBlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$CapabilityEmcBlockEntity"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $DMFurnaceBlockEntity extends $CapabilityEmcBlockEntity implements $MenuProvider {
 "furnaceBurnTime": integer
 "currentItemBurnTime": integer
 "furnaceCookTime": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getInput"(): $IItemHandler
public static "tickServer"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $DMFurnaceBlockEntity$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "getOutput"(): $IItemHandler
public "getFuel"(): $IItemHandler
public "getSmeltingResult"(arg0: $ItemStack$Type): $ItemStack
public "load"(arg0: $CompoundTag$Type): void
public "getDisplayName"(): $Component
public "isBurning"(): boolean
public "getBurnTimeRemainingScaled"(arg0: integer): integer
public "getCookProgressScaled"(arg0: integer): integer
get "input"(): $IItemHandler
get "output"(): $IItemHandler
get "fuel"(): $IItemHandler
get "displayName"(): $Component
get "burning"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DMFurnaceBlockEntity$Type = ($DMFurnaceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DMFurnaceBlockEntity_ = $DMFurnaceBlockEntity$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/rings/$Arcana" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IProjectileShooter, $IProjectileShooter$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IProjectileShooter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ILangEntry, $ILangEntry$Type} from "packages/moze_intel/projecte/utils/text/$ILangEntry"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFireProtector, $IFireProtector$Type} from "packages/moze_intel/projecte/gameObjs/items/$IFireProtector"
import {$IItemMode, $IItemMode$Type} from "packages/moze_intel/projecte/gameObjs/items/$IItemMode"
import {$IFlightProvider, $IFlightProvider$Type} from "packages/moze_intel/projecte/gameObjs/items/$IFlightProvider"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IExtraFunction, $IExtraFunction$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IExtraFunction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemPE, $ItemPE$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemPE"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Arcana extends $ItemPE implements $IItemMode, $IFlightProvider, $IFireProtector, $IExtraFunction, $IProjectileShooter {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canProtectAgainstFire"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): boolean
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "getModeLangEntries"(): ($ILangEntry)[]
public "shootProjectile"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "doExtraFunction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): boolean
public "canProvideFlight"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): boolean
public "getMode"(arg0: $ItemStack$Type): byte
public "getModeCount"(): byte
public "getModeLangEntry"(arg0: $ItemStack$Type): $ILangEntry
public "changeMode"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getModeSwitchEntry"(): $ILangEntry
public "getToolTip"(arg0: $ItemStack$Type): $Component
get "modeLangEntries"(): ($ILangEntry)[]
get "modeCount"(): byte
get "modeSwitchEntry"(): $ILangEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Arcana$Type = ($Arcana);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Arcana_ = $Arcana$Type;
}}
declare module "packages/moze_intel/projecte/api/capabilities/item/$IModeChanger" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IModeChanger {

 "getMode"(arg0: $ItemStack$Type): byte
 "changeMode"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
}

export namespace $IModeChanger {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModeChanger$Type = ($IModeChanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModeChanger_ = $IModeChanger$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/block_entities/$RelayMK1BlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CapabilityEmcBlockEntity, $CapabilityEmcBlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$CapabilityEmcBlockEntity"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $RelayMK1BlockEntity extends $CapabilityEmcBlockEntity implements $MenuProvider {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getInput"(): $IItemHandler
public static "tickServer"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $RelayMK1BlockEntity$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "getOutput"(): $IItemHandler
public "getItemChargeProportion"(): double
public "load"(arg0: $CompoundTag$Type): void
public "getDisplayName"(): $Component
public "getInputBurnProportion"(): double
public "isRelay"(): boolean
public "addBonus"(): void
get "input"(): $IItemHandler
get "output"(): $IItemHandler
get "itemChargeProportion"(): double
get "displayName"(): $Component
get "inputBurnProportion"(): double
get "relay"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelayMK1BlockEntity$Type = ($RelayMK1BlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelayMK1BlockEntity_ = $RelayMK1BlockEntity$Type;
}}
declare module "packages/moze_intel/projecte/utils/text/$IHasTranslationKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHasTranslationKey {

 "getTranslationKey"(): string

(): string
}

export namespace $IHasTranslationKey {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasTranslationKey$Type = ($IHasTranslationKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHasTranslationKey_ = $IHasTranslationKey$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$Condenser" {
import {$BlockEntityTypeRegistryObject, $BlockEntityTypeRegistryObject$Type} from "packages/moze_intel/projecte/gameObjs/registration/impl/$BlockEntityTypeRegistryObject"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AlchemicalChest, $AlchemicalChest$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$AlchemicalChest"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $Condenser extends $AlchemicalChest {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getType"(): $BlockEntityTypeRegistryObject<(any)>
get "type"(): $BlockEntityTypeRegistryObject<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Condenser$Type = ($Condenser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Condenser_ = $Condenser$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/armor/$GemFeet" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GemArmorBase, $GemArmorBase$Type} from "packages/moze_intel/projecte/gameObjs/items/armor/$GemArmorBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IStepAssister, $IStepAssister$Type} from "packages/moze_intel/projecte/gameObjs/items/$IStepAssister"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$IFlightProvider, $IFlightProvider$Type} from "packages/moze_intel/projecte/gameObjs/items/$IFlightProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GemFeet extends $GemArmorBase implements $IFlightProvider, $IStepAssister {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "toggleStepAssist"(arg0: $ItemStack$Type, arg1: $Player$Type): void
public "canAssistStep"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): boolean
public "canProvideFlight"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemFeet$Type = ($GemFeet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemFeet_ = $GemFeet$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/block_entities/$CondenserMK2BlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CondenserBlockEntity, $CondenserBlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$CondenserBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $CondenserMK2BlockEntity extends $CondenserBlockEntity {
 "displayEmc": long
 "requiredEmc": long

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "load"(arg0: $CompoundTag$Type): void
public "getDisplayName"(): $Component
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CondenserMK2BlockEntity$Type = ($CondenserMK2BlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CondenserMK2BlockEntity_ = $CondenserMK2BlockEntity$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/blocks/$CollectorItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Collector, $Collector$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$Collector"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CollectorItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Collector$Type, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CollectorItem$Type = ($CollectorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CollectorItem_ = $CollectorItem$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/armor/$GemHelmet" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GemArmorBase, $GemArmorBase$Type} from "packages/moze_intel/projecte/gameObjs/items/armor/$GemArmorBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GemHelmet extends $GemArmorBase {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public static "toggleNightVision"(arg0: $ItemStack$Type, arg1: $Player$Type): void
public "doZap"(arg0: $Player$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemHelmet$Type = ($GemHelmet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemHelmet_ = $GemHelmet$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$ItemMode" {
import {$IItemCharge, $IItemCharge$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IItemCharge"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemPE, $ItemPE$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemPE"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBarHelper, $IBarHelper$Type} from "packages/moze_intel/projecte/gameObjs/items/$IBarHelper"
import {$ILangEntry, $ILangEntry$Type} from "packages/moze_intel/projecte/utils/text/$ILangEntry"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IItemMode, $IItemMode$Type} from "packages/moze_intel/projecte/gameObjs/items/$IItemMode"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMode extends $ItemPE implements $IItemMode, $IItemCharge, $IBarHelper {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: integer, ...arg2: ($ILangEntry$Type)[])

public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getNumCharges"(arg0: $ItemStack$Type): integer
public "getModeLangEntries"(): ($ILangEntry)[]
public "getWidthForBar"(arg0: $ItemStack$Type): float
public "getMode"(arg0: $ItemStack$Type): byte
public "getModeCount"(): byte
public "getModeLangEntry"(arg0: $ItemStack$Type): $ILangEntry
public "changeMode"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getModeSwitchEntry"(): $ILangEntry
public "getToolTip"(arg0: $ItemStack$Type): $Component
public "getChargePercent"(arg0: $ItemStack$Type): float
public "changeCharge"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getCharge"(arg0: $ItemStack$Type): integer
public "getScaledBarWidth"(arg0: $ItemStack$Type): integer
public "getColorForBar"(arg0: $ItemStack$Type): integer
get "modeLangEntries"(): ($ILangEntry)[]
get "modeCount"(): byte
get "modeSwitchEntry"(): $ILangEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMode$Type = ($ItemMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMode_ = $ItemMode$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/tools/$PEAxe" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IItemCharge, $IItemCharge$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IItemCharge"
import {$AxeItem, $AxeItem$Type} from "packages/net/minecraft/world/item/$AxeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBarHelper, $IBarHelper$Type} from "packages/moze_intel/projecte/gameObjs/items/$IBarHelper"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$EnumMatterType, $EnumMatterType$Type} from "packages/moze_intel/projecte/gameObjs/$EnumMatterType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PEAxe extends $AxeItem implements $IItemCharge, $IBarHelper {
static "STRIPPABLES": $Map<($Block), ($Block)>
readonly "blocks": $TagKey<($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $EnumMatterType$Type, arg1: integer, arg2: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getBarColor"(arg0: $ItemStack$Type): integer
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getNumCharges"(arg0: $ItemStack$Type): integer
public "getWidthForBar"(arg0: $ItemStack$Type): float
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getChargePercent"(arg0: $ItemStack$Type): float
public "changeCharge"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getCharge"(arg0: $ItemStack$Type): integer
public "getScaledBarWidth"(arg0: $ItemStack$Type): integer
public "getColorForBar"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PEAxe$Type = ($PEAxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PEAxe_ = $PEAxe$Type;
}}
declare module "packages/moze_intel/projecte/api/nss/$AbstractNBTNSSTag" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NSSNBT, $NSSNBT$Type} from "packages/moze_intel/projecte/api/nss/$NSSNBT"
import {$AbstractNSSTag, $AbstractNSSTag$Type} from "packages/moze_intel/projecte/api/nss/$AbstractNSSTag"

export class $AbstractNBTNSSTag<TYPE> extends $AbstractNSSTag<(TYPE)> implements $NSSNBT {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "json"(): string
public "getNBT"(): $CompoundTag
public "hasNBT"(): boolean
get "nBT"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractNBTNSSTag$Type<TYPE> = ($AbstractNBTNSSTag<(TYPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractNBTNSSTag_<TYPE> = $AbstractNBTNSSTag$Type<(TYPE)>;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$IFireProtector" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFireProtector {

 "canProtectAgainstFire"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): boolean

(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): boolean
}

export namespace $IFireProtector {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFireProtector$Type = ($IFireProtector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFireProtector_ = $IFireProtector$Type;
}}
declare module "packages/moze_intel/projecte/api/capabilities/item/$IExtraFunction" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IExtraFunction {

 "doExtraFunction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): boolean

(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): boolean
}

export namespace $IExtraFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtraFunction$Type = ($IExtraFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtraFunction_ = $IExtraFunction$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/$EnumMatterType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"

export class $EnumMatterType extends $Enum<($EnumMatterType)> implements $StringRepresentable, $Tier {
static readonly "DARK_MATTER": $EnumMatterType
static readonly "RED_MATTER": $EnumMatterType


public "toString"(): string
public static "values"(): ($EnumMatterType)[]
public static "valueOf"(arg0: string): $EnumMatterType
public "getTag"(): $TagKey<($Block)>
public "getChargeModifier"(): float
public "getMatterTier"(): integer
public "getSerializedName"(): string
public "getMapColor"(): $MapColor
public "getUses"(): integer
public "getSpeed"(): float
public "getAttackDamageBonus"(): float
public "getLevel"(): integer
public "getEnchantmentValue"(): integer
public "getRepairIngredient"(): $Ingredient
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "tag"(): $TagKey<($Block)>
get "chargeModifier"(): float
get "matterTier"(): integer
get "serializedName"(): string
get "mapColor"(): $MapColor
get "uses"(): integer
get "speed"(): float
get "attackDamageBonus"(): float
get "level"(): integer
get "enchantmentValue"(): integer
get "repairIngredient"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumMatterType$Type = (("dark_matter") | ("red_matter")) | ($EnumMatterType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumMatterType_ = $EnumMatterType$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/block_entities/$CapabilityEmcBlockEntity" {
import {$BlockEntityTypeRegistryObject, $BlockEntityTypeRegistryObject$Type} from "packages/moze_intel/projecte/gameObjs/registration/impl/$BlockEntityTypeRegistryObject"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$EmcBlockEntity, $EmcBlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$EmcBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $CapabilityEmcBlockEntity extends $EmcBlockEntity {

constructor(arg0: $BlockEntityTypeRegistryObject$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockEntityTypeRegistryObject$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: long)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "invalidateCaps"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityEmcBlockEntity$Type = ($CapabilityEmcBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityEmcBlockEntity_ = $CapabilityEmcBlockEntity$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$ItemPE" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPE extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public static "consumeFuel"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: long, arg3: boolean): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public static "addEmcToStack"(arg0: $ItemStack$Type, arg1: long): void
public static "setEmc"(arg0: $CompoundTag$Type, arg1: long): void
public static "setEmc"(arg0: $ItemStack$Type, arg1: long): void
public static "removeEmc"(arg0: $ItemStack$Type, arg1: long): void
public static "getEmc"(arg0: $ItemStack$Type): long
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPE$Type = ($ItemPE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPE_ = $ItemPE$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$HyperkineticLens" {
import {$IItemCharge, $IItemCharge$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IItemCharge"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IProjectileShooter, $IProjectileShooter$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IProjectileShooter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemPE, $ItemPE$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemPE"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBarHelper, $IBarHelper$Type} from "packages/moze_intel/projecte/gameObjs/items/$IBarHelper"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HyperkineticLens extends $ItemPE implements $IProjectileShooter, $IItemCharge, $IBarHelper {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getNumCharges"(arg0: $ItemStack$Type): integer
public "getWidthForBar"(arg0: $ItemStack$Type): float
public "shootProjectile"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getChargePercent"(arg0: $ItemStack$Type): float
public "changeCharge"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getCharge"(arg0: $ItemStack$Type): integer
public "getScaledBarWidth"(arg0: $ItemStack$Type): integer
public "getColorForBar"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HyperkineticLens$Type = ($HyperkineticLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HyperkineticLens_ = $HyperkineticLens$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$IFlightProvider" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFlightProvider {

 "canProvideFlight"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): boolean

(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): boolean
}

export namespace $IFlightProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFlightProvider$Type = ($IFlightProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFlightProvider_ = $IFlightProvider$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/tools/$PEPickaxe" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IItemCharge, $IItemCharge$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IItemCharge"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBarHelper, $IBarHelper$Type} from "packages/moze_intel/projecte/gameObjs/items/$IBarHelper"
import {$ILangEntry, $ILangEntry$Type} from "packages/moze_intel/projecte/utils/text/$ILangEntry"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PickaxeItem, $PickaxeItem$Type} from "packages/net/minecraft/world/item/$PickaxeItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemMode, $IItemMode$Type} from "packages/moze_intel/projecte/gameObjs/items/$IItemMode"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$EnumMatterType, $EnumMatterType$Type} from "packages/moze_intel/projecte/gameObjs/$EnumMatterType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PEPickaxe extends $PickaxeItem implements $IItemCharge, $IItemMode, $IBarHelper {
readonly "blocks": $TagKey<($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $EnumMatterType$Type, arg1: integer, arg2: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "getBarColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getNumCharges"(arg0: $ItemStack$Type): integer
public "getModeLangEntries"(): ($ILangEntry)[]
public "getWidthForBar"(arg0: $ItemStack$Type): float
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getChargePercent"(arg0: $ItemStack$Type): float
public "changeCharge"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getCharge"(arg0: $ItemStack$Type): integer
public "getMode"(arg0: $ItemStack$Type): byte
public "getModeCount"(): byte
public "getModeLangEntry"(arg0: $ItemStack$Type): $ILangEntry
public "changeMode"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getModeSwitchEntry"(): $ILangEntry
public "getToolTip"(arg0: $ItemStack$Type): $Component
public "getScaledBarWidth"(arg0: $ItemStack$Type): integer
public "getColorForBar"(arg0: $ItemStack$Type): integer
get "modeLangEntries"(): ($ILangEntry)[]
get "modeCount"(): byte
get "modeSwitchEntry"(): $ILangEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PEPickaxe$Type = ($PEPickaxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PEPickaxe_ = $PEPickaxe$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/block_entities/$CondenserBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemInfo, $ItemInfo$Type} from "packages/moze_intel/projecte/api/$ItemInfo"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EmcChestBlockEntity, $EmcChestBlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$EmcChestBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $CondenserBlockEntity extends $EmcChestBlockEntity {
 "displayEmc": long
 "requiredEmc": long

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getInput"(): $ItemStackHandler
public static "tickServer"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $CondenserBlockEntity$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "getOutput"(): $ItemStackHandler
public "getLockInfo"(): $ItemInfo
public "setLockInfoFromPacket"(arg0: $ItemInfo$Type): void
public "attemptCondenserSet"(arg0: $Player$Type): boolean
public "load"(arg0: $CompoundTag$Type): void
public "getDisplayName"(): $Component
public "isStackEqualToLock"(arg0: $ItemStack$Type): boolean
get "input"(): $ItemStackHandler
get "output"(): $ItemStackHandler
get "lockInfo"(): $ItemInfo
set "lockInfoFromPacket"(value: $ItemInfo$Type)
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CondenserBlockEntity$Type = ($CondenserBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CondenserBlockEntity_ = $CondenserBlockEntity$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/rings/$SoulStone" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PEToggleItem, $PEToggleItem$Type} from "packages/moze_intel/projecte/gameObjs/items/rings/$PEToggleItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPedestalItem, $IPedestalItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IPedestalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SoulStone extends $PEToggleItem implements $IPedestalItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getPedestalDescription"(): $List<($Component)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "updateInPedestal"<PEDESTAL extends ($BlockEntity) & ($IDMPedestal)>(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: PEDESTAL): boolean
get "pedestalDescription"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulStone$Type = ($SoulStone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulStone_ = $SoulStone$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/armor/$GemLegs" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GemArmorBase, $GemArmorBase$Type} from "packages/moze_intel/projecte/gameObjs/items/armor/$GemArmorBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GemLegs extends $GemArmorBase {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemLegs$Type = ($GemLegs);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemLegs_ = $GemLegs$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$InterdictionTorchEntityBlock" {
import {$BlockEntityTypeRegistryObject, $BlockEntityTypeRegistryObject$Type} from "packages/moze_intel/projecte/gameObjs/registration/impl/$BlockEntityTypeRegistryObject"
import {$InterdictionTorchBlockEntity, $InterdictionTorchBlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$InterdictionTorchBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$PEEntityBlock, $PEEntityBlock$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$PEEntityBlock"

export interface $InterdictionTorchEntityBlock extends $PEEntityBlock<($InterdictionTorchBlockEntity)> {

 "getType"(): $BlockEntityTypeRegistryObject<($InterdictionTorchBlockEntity)>
 "triggerBlockEntityEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
 "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
 "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $InterdictionTorchBlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}

export namespace $InterdictionTorchEntityBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterdictionTorchEntityBlock$Type = ($InterdictionTorchEntityBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterdictionTorchEntityBlock_ = $InterdictionTorchEntityBlock$Type;
}}
declare module "packages/moze_intel/projecte/api/capabilities/item/$IItemCharge" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItemCharge {

 "getNumCharges"(arg0: $ItemStack$Type): integer
 "getChargePercent"(arg0: $ItemStack$Type): float
 "changeCharge"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
 "getCharge"(arg0: $ItemStack$Type): integer

(arg0: $ItemStack$Type): integer
}

export namespace $IItemCharge {
const KEY: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemCharge$Type = ($IItemCharge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemCharge_ = $IItemCharge$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/tools/$PEHammer" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$PETool, $PETool$Type} from "packages/moze_intel/projecte/gameObjs/items/tools/$PETool"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$EnumMatterType, $EnumMatterType$Type} from "packages/moze_intel/projecte/gameObjs/$EnumMatterType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PEHammer extends $PETool {
readonly "blocks": $TagKey<($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $EnumMatterType$Type, arg1: integer, arg2: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PEHammer$Type = ($PEHammer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PEHammer_ = $PEHammer$Type;
}}
declare module "packages/moze_intel/projecte/api/nss/$NSSNBT" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NormalizedSimpleStack, $NormalizedSimpleStack$Type} from "packages/moze_intel/projecte/api/nss/$NormalizedSimpleStack"

export interface $NSSNBT extends $NormalizedSimpleStack {

 "hasNBT"(): boolean
 "getNBT"(): $CompoundTag
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "json"(): string
}

export namespace $NSSNBT {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NSSNBT$Type = ($NSSNBT);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NSSNBT_ = $NSSNBT$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/registration/$INamedEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INamedEntry {

 "getInternalRegistryName"(): string

(): string
}

export namespace $INamedEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INamedEntry$Type = ($INamedEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INamedEntry_ = $INamedEntry$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/customRecipes/$RecipeShapelessKleinStar" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $RecipeShapelessKleinStar implements $CraftingRecipe {

constructor(arg0: $ShapelessRecipe$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getId"(): $ResourceLocation
public "category"(): $CraftingBookCategory
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "showNotification"(): boolean
public "getType"(): $ResourceLocation
public "getMod"(): string
public "getSchema"(): $RecipeSchema
public "getGroup"(): string
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
get "id"(): $ResourceLocation
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "type"(): $ResourceLocation
get "mod"(): string
get "schema"(): $RecipeSchema
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeShapelessKleinStar$Type = ($RecipeShapelessKleinStar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeShapelessKleinStar_ = $RecipeShapelessKleinStar$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$BlockDirection" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockDirection extends $Block {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDirection$Type = ($BlockDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDirection_ = $BlockDirection$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$IItemMode" {
import {$IModeChanger, $IModeChanger$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IModeChanger"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ILangEntry, $ILangEntry$Type} from "packages/moze_intel/projecte/utils/text/$ILangEntry"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItemMode extends $IModeChanger {

 "getMode"(arg0: $ItemStack$Type): byte
 "getModeLangEntries"(): ($ILangEntry)[]
 "getModeCount"(): byte
 "getModeLangEntry"(arg0: $ItemStack$Type): $ILangEntry
 "changeMode"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
 "getModeSwitchEntry"(): $ILangEntry
 "getToolTip"(arg0: $ItemStack$Type): $Component

(arg0: $ItemStack$Type): byte
}

export namespace $IItemMode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemMode$Type = ($IItemMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemMode_ = $IItemMode$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$MercurialEye" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IExtraFunction, $IExtraFunction$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IExtraFunction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemMode, $ItemMode$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemMode"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MercurialEye extends $ItemMode implements $IExtraFunction {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "doExtraFunction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MercurialEye$Type = ($MercurialEye);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MercurialEye_ = $MercurialEye$Type;
}}
declare module "packages/moze_intel/projecte/api/nss/$NSSTag" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$NormalizedSimpleStack, $NormalizedSimpleStack$Type} from "packages/moze_intel/projecte/api/nss/$NormalizedSimpleStack"

export interface $NSSTag extends $NormalizedSimpleStack {

 "forEachElement"(arg0: $Consumer$Type<($NormalizedSimpleStack$Type)>): void
 "representsTag"(): boolean
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "json"(): string
}

export namespace $NSSTag {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NSSTag$Type = ($NSSTag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NSSTag_ = $NSSTag$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$TransmutationTablet" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemPE, $ItemPE$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemPE"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TransmutationTablet extends $ItemPE {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransmutationTablet$Type = ($TransmutationTablet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransmutationTablet_ = $TransmutationTablet$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/tools/$PETool" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IItemCharge, $IItemCharge$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IItemCharge"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DiggerItem, $DiggerItem$Type} from "packages/net/minecraft/world/item/$DiggerItem"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$EnumMatterType, $EnumMatterType$Type} from "packages/moze_intel/projecte/gameObjs/$EnumMatterType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBarHelper, $IBarHelper$Type} from "packages/moze_intel/projecte/gameObjs/items/$IBarHelper"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PETool extends $DiggerItem implements $IItemCharge, $IBarHelper {
readonly "blocks": $TagKey<($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $EnumMatterType$Type, arg1: $TagKey$Type<($Block$Type)>, arg2: float, arg3: float, arg4: integer, arg5: $Item$Properties$Type)

public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getBarColor"(arg0: $ItemStack$Type): integer
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getNumCharges"(arg0: $ItemStack$Type): integer
public "getWidthForBar"(arg0: $ItemStack$Type): float
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getChargePercent"(arg0: $ItemStack$Type): float
public "changeCharge"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getCharge"(arg0: $ItemStack$Type): integer
public "getScaledBarWidth"(arg0: $ItemStack$Type): integer
public "getColorForBar"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PETool$Type = ($PETool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PETool_ = $PETool$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/tools/$PESword" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IItemCharge, $IItemCharge$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IItemCharge"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBarHelper, $IBarHelper$Type} from "packages/moze_intel/projecte/gameObjs/items/$IBarHelper"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IExtraFunction, $IExtraFunction$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IExtraFunction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$EnumMatterType, $EnumMatterType$Type} from "packages/moze_intel/projecte/gameObjs/$EnumMatterType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PESword extends $SwordItem implements $IExtraFunction, $IItemCharge, $IBarHelper {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $EnumMatterType$Type, arg1: integer, arg2: integer, arg3: $Item$Properties$Type)

public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "getBarColor"(arg0: $ItemStack$Type): integer
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getNumCharges"(arg0: $ItemStack$Type): integer
public "getWidthForBar"(arg0: $ItemStack$Type): float
public "doExtraFunction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): boolean
public "getSweepHitBox"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): $AABB
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getChargePercent"(arg0: $ItemStack$Type): float
public "changeCharge"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getCharge"(arg0: $ItemStack$Type): integer
public "getScaledBarWidth"(arg0: $ItemStack$Type): integer
public "getColorForBar"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PESword$Type = ($PESword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PESword_ = $PESword$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$IMatterBlock" {
import {$EnumMatterType, $EnumMatterType$Type} from "packages/moze_intel/projecte/gameObjs/$EnumMatterType"

export interface $IMatterBlock {

 "getMatterType"(): $EnumMatterType

(): $EnumMatterType
}

export namespace $IMatterBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMatterBlock$Type = ($IMatterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMatterBlock_ = $IMatterBlock$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/armor/$PEArmor" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $PEArmor extends $ArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer


public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getPieceEffectiveness"(arg0: $ArmorItem$Type$Type): float
public "getFullSetBaseReduction"(): float
public "getMaxDamageAbsorb"(arg0: $ArmorItem$Type$Type, arg1: $DamageSource$Type): float
public static "get"(arg0: $ItemStack$Type): $Equipable
get "fullSetBaseReduction"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PEArmor$Type = ($PEArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PEArmor_ = $PEArmor$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/rings/$Zero" {
import {$IItemCharge, $IItemCharge$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IItemCharge"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBarHelper, $IBarHelper$Type} from "packages/moze_intel/projecte/gameObjs/items/$IBarHelper"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PEToggleItem, $PEToggleItem$Type} from "packages/moze_intel/projecte/gameObjs/items/rings/$PEToggleItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPedestalItem, $IPedestalItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IPedestalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Zero extends $PEToggleItem implements $IPedestalItem, $IItemCharge, $IBarHelper {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getPedestalDescription"(): $List<($Component)>
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "updateInPedestal"<PEDESTAL extends ($BlockEntity) & ($IDMPedestal)>(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: PEDESTAL): boolean
public "getNumCharges"(arg0: $ItemStack$Type): integer
public "getWidthForBar"(arg0: $ItemStack$Type): float
public "getChargePercent"(arg0: $ItemStack$Type): float
public "changeCharge"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getCharge"(arg0: $ItemStack$Type): integer
public "getScaledBarWidth"(arg0: $ItemStack$Type): integer
public "getColorForBar"(arg0: $ItemStack$Type): integer
get "pedestalDescription"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Zero$Type = ($Zero);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Zero_ = $Zero$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/$EnumFuelType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumFuelType extends $Enum<($EnumFuelType)> implements $StringRepresentable {
static readonly "ALCHEMICAL_COAL": $EnumFuelType
static readonly "MOBIUS_FUEL": $EnumFuelType
static readonly "AETERNALIS_FUEL": $EnumFuelType


public "toString"(): string
public static "values"(): ($EnumFuelType)[]
public static "valueOf"(arg0: string): $EnumFuelType
public "getBurnTime"(): integer
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "burnTime"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumFuelType$Type = (("alchemical_coal") | ("mobius_fuel") | ("aeternalis_fuel")) | ($EnumFuelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumFuelType_ = $EnumFuelType$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$Relay" {
import {$EnumRelayTier, $EnumRelayTier$Type} from "packages/moze_intel/projecte/gameObjs/$EnumRelayTier"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntityTypeRegistryObject, $BlockEntityTypeRegistryObject$Type} from "packages/moze_intel/projecte/gameObjs/registration/impl/$BlockEntityTypeRegistryObject"
import {$BlockDirection, $BlockDirection$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$RelayMK1BlockEntity, $RelayMK1BlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$RelayMK1BlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$PEEntityBlock, $PEEntityBlock$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$PEEntityBlock"

export class $Relay extends $BlockDirection implements $PEEntityBlock<($RelayMK1BlockEntity)> {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $EnumRelayTier$Type, arg1: $BlockBehaviour$Properties$Type)

public "getType"(): $BlockEntityTypeRegistryObject<(any)>
public "getTier"(): $EnumRelayTier
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
/**
 * 
 * @deprecated
 */
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
/**
 * 
 * @deprecated
 */
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "triggerBlockEntityEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $RelayMK1BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "type"(): $BlockEntityTypeRegistryObject<(any)>
get "tier"(): $EnumRelayTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Relay$Type = ($Relay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Relay_ = $Relay$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/blocks/$RelayItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Relay, $Relay$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$Relay"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RelayItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Relay$Type, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelayItem$Type = ($RelayItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelayItem_ = $RelayItem$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/block_entities/$EmcBlockEntity" {
import {$BlockEntityTypeRegistryObject, $BlockEntityTypeRegistryObject$Type} from "packages/moze_intel/projecte/gameObjs/registration/impl/$BlockEntityTypeRegistryObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BaseEmcBlockEntity, $BaseEmcBlockEntity$Type} from "packages/moze_intel/projecte/api/block_entity/$BaseEmcBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EmcBlockEntity extends $BaseEmcBlockEntity {

constructor(arg0: $BlockEntityTypeRegistryObject$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockEntityTypeRegistryObject$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: long)

public "getUpdateTag"(): $CompoundTag
public "setChanged"(): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "markDirty"(arg0: boolean): void
get "updateTag"(): $CompoundTag
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmcBlockEntity$Type = ($EmcBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmcBlockEntity_ = $EmcBlockEntity$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$KleinStar$EnumKleinTier" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $KleinStar$EnumKleinTier extends $Enum<($KleinStar$EnumKleinTier)> {
static readonly "EIN": $KleinStar$EnumKleinTier
static readonly "ZWEI": $KleinStar$EnumKleinTier
static readonly "DREI": $KleinStar$EnumKleinTier
static readonly "VIER": $KleinStar$EnumKleinTier
static readonly "SPHERE": $KleinStar$EnumKleinTier
static readonly "OMEGA": $KleinStar$EnumKleinTier
readonly "name": string


public static "values"(): ($KleinStar$EnumKleinTier)[]
public static "valueOf"(arg0: string): $KleinStar$EnumKleinTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KleinStar$EnumKleinTier$Type = (("sphere") | ("vier") | ("zwei") | ("ein") | ("drei") | ("omega")) | ($KleinStar$EnumKleinTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KleinStar$EnumKleinTier_ = $KleinStar$EnumKleinTier$Type;
}}
declare module "packages/moze_intel/projecte/api/block_entity/$BaseEmcBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IEmcStorage, $IEmcStorage$Type} from "packages/moze_intel/projecte/api/capabilities/block_entity/$IEmcStorage"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IEmcStorage$EmcAction, $IEmcStorage$EmcAction$Type} from "packages/moze_intel/projecte/api/capabilities/block_entity/$IEmcStorage$EmcAction"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $BaseEmcBlockEntity extends $BlockEntity implements $IEmcStorage {


public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "invalidateCaps"(): void
public "getMaximumEmc"(): long
public "getStoredEmc"(): long
public "load"(arg0: $CompoundTag$Type): void
public "setMaximumEMC"(arg0: long): void
public "insertEmc"(arg0: long, arg1: $IEmcStorage$EmcAction$Type): long
public "extractEmc"(arg0: long, arg1: $IEmcStorage$EmcAction$Type): long
public "getNeededEmc"(): long
public "isRelay"(): boolean
public "hasMaxedEmc"(): boolean
get "maximumEmc"(): long
get "storedEmc"(): long
set "maximumEMC"(value: long)
get "neededEmc"(): long
get "relay"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseEmcBlockEntity$Type = ($BaseEmcBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseEmcBlockEntity_ = $BaseEmcBlockEntity$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/block_entities/$DMPedestalBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CapabilityEmcBlockEntity, $CapabilityEmcBlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$CapabilityEmcBlockEntity"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $DMPedestalBlockEntity extends $CapabilityEmcBlockEntity implements $IDMPedestal {
 "previousRedstoneState": boolean

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getInventory"(): $IItemHandlerModifiable
public static "tickServer"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $DMPedestalBlockEntity$Type): void
public "setActive"(arg0: boolean): void
public static "tickClient"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $DMPedestalBlockEntity$Type): void
public "getEffectBounds"(): $AABB
public "getActive"(): boolean
public "load"(arg0: $CompoundTag$Type): void
public "decrementActivityCooldown"(): void
public "setActivityCooldown"(arg0: integer): void
public "getActivityCooldown"(): integer
get "inventory"(): $IItemHandlerModifiable
set "active"(value: boolean)
get "effectBounds"(): $AABB
get "active"(): boolean
set "activityCooldown"(value: integer)
get "activityCooldown"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DMPedestalBlockEntity$Type = ($DMPedestalBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DMPedestalBlockEntity_ = $DMPedestalBlockEntity$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/block_entities/$CollectorMK1BlockEntity" {
import {$EnumCollectorTier, $EnumCollectorTier$Type} from "packages/moze_intel/projecte/gameObjs/$EnumCollectorTier"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CapabilityEmcBlockEntity, $CapabilityEmcBlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$CapabilityEmcBlockEntity"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BlockEntityTypeRegistryObject, $BlockEntityTypeRegistryObject$Type} from "packages/moze_intel/projecte/gameObjs/registration/impl/$BlockEntityTypeRegistryObject"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $CollectorMK1BlockEntity extends $CapabilityEmcBlockEntity implements $MenuProvider {
static readonly "UPGRADING_SLOT": integer
static readonly "UPGRADE_SLOT": integer
static readonly "LOCK_SLOT": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockEntityTypeRegistryObject$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $EnumCollectorTier$Type)

public "getInput"(): $IItemHandler
public static "tickServer"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $CollectorMK1BlockEntity$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "getItemChargeProportion"(): double
public "getEmcToNextGoal"(): long
public "clearLocked"(): void
public "load"(arg0: $CompoundTag$Type): void
public "getDisplayName"(): $Component
public "getSunLevel"(): integer
public "getItemCharge"(): long
public "getFuelProgress"(): double
public "getAux"(): $IItemHandler
get "input"(): $IItemHandler
get "itemChargeProportion"(): double
get "emcToNextGoal"(): long
get "displayName"(): $Component
get "sunLevel"(): integer
get "itemCharge"(): long
get "fuelProgress"(): double
get "aux"(): $IItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CollectorMK1BlockEntity$Type = ($CollectorMK1BlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CollectorMK1BlockEntity_ = $CollectorMK1BlockEntity$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$AlchemicalBag" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemPE, $ItemPE$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemPE"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AlchemicalBag extends $ItemPE {
readonly "color": $DyeColor
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $DyeColor$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "getFirstBagWithSuctionItem"(arg0: $Player$Type, arg1: $NonNullList$Type<($ItemStack$Type)>): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemicalBag$Type = ($AlchemicalBag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemicalBag_ = $AlchemicalBag$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$InterdictionTorchEntityBlock$InterdictionTorch" {
import {$InterdictionTorchBlockEntity, $InterdictionTorchBlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$InterdictionTorchBlockEntity"
import {$InterdictionTorchEntityBlock, $InterdictionTorchEntityBlock$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$InterdictionTorchEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntityTypeRegistryObject, $BlockEntityTypeRegistryObject$Type} from "packages/moze_intel/projecte/gameObjs/registration/impl/$BlockEntityTypeRegistryObject"
import {$TorchBlock, $TorchBlock$Type} from "packages/net/minecraft/world/level/block/$TorchBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $InterdictionTorchEntityBlock$InterdictionTorch extends $TorchBlock implements $InterdictionTorchEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

/**
 * 
 * @deprecated
 */
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "getType"(): $BlockEntityTypeRegistryObject<($InterdictionTorchBlockEntity)>
public "triggerBlockEntityEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $InterdictionTorchBlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "type"(): $BlockEntityTypeRegistryObject<($InterdictionTorchBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterdictionTorchEntityBlock$InterdictionTorch$Type = ($InterdictionTorchEntityBlock$InterdictionTorch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterdictionTorchEntityBlock$InterdictionTorch_ = $InterdictionTorchEntityBlock$InterdictionTorch$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/armor/$RMArmor" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$PEArmor, $PEArmor$Type} from "packages/moze_intel/projecte/gameObjs/items/armor/$PEArmor"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $RMArmor extends $PEArmor {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "getFullSetBaseReduction"(): float
public "getMaxDamageAbsorb"(arg0: $ArmorItem$Type$Type, arg1: $DamageSource$Type): float
public static "get"(arg0: $ItemStack$Type): $Equipable
get "fullSetBaseReduction"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RMArmor$Type = ($RMArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RMArmor_ = $RMArmor$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/rings/$Ignition" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IProjectileShooter, $IProjectileShooter$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IProjectileShooter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PEToggleItem, $PEToggleItem$Type} from "packages/moze_intel/projecte/gameObjs/items/rings/$PEToggleItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFireProtector, $IFireProtector$Type} from "packages/moze_intel/projecte/gameObjs/items/$IFireProtector"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPedestalItem, $IPedestalItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IPedestalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Ignition extends $PEToggleItem implements $IPedestalItem, $IFireProtector, $IProjectileShooter {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getPedestalDescription"(): $List<($Component)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "canProtectAgainstFire"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): boolean
public "updateInPedestal"<PEDESTAL extends ($BlockEntity) & ($IDMPedestal)>(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: PEDESTAL): boolean
public "shootProjectile"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
get "pedestalDescription"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ignition$Type = ($Ignition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ignition_ = $Ignition$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/tools/$PEHoe" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IItemCharge, $IItemCharge$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IItemCharge"
import {$HoeItem, $HoeItem$Type} from "packages/net/minecraft/world/item/$HoeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBarHelper, $IBarHelper$Type} from "packages/moze_intel/projecte/gameObjs/items/$IBarHelper"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$EnumMatterType, $EnumMatterType$Type} from "packages/moze_intel/projecte/gameObjs/$EnumMatterType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PEHoe extends $HoeItem implements $IItemCharge, $IBarHelper {
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
readonly "blocks": $TagKey<($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $EnumMatterType$Type, arg1: integer, arg2: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getBarColor"(arg0: $ItemStack$Type): integer
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getNumCharges"(arg0: $ItemStack$Type): integer
public "getWidthForBar"(arg0: $ItemStack$Type): float
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getChargePercent"(arg0: $ItemStack$Type): float
public "changeCharge"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getCharge"(arg0: $ItemStack$Type): integer
public "getScaledBarWidth"(arg0: $ItemStack$Type): integer
public "getColorForBar"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PEHoe$Type = ($PEHoe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PEHoe_ = $PEHoe$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/registration/$WrappedRegistryObject" {
import {$INamedEntry, $INamedEntry$Type} from "packages/moze_intel/projecte/gameObjs/registration/$INamedEntry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $WrappedRegistryObject<T> implements $Supplier<(T)>, $INamedEntry {


public "get"(): T
public "getInternalRegistryName"(): string
get "internalRegistryName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedRegistryObject$Type<T> = ($WrappedRegistryObject<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedRegistryObject_<T> = $WrappedRegistryObject$Type<(T)>;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$GemEternalDensity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IAlchChestItem, $IAlchChestItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IAlchChestItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemPE, $ItemPE$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemPE"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ILangEntry, $ILangEntry$Type} from "packages/moze_intel/projecte/utils/text/$ILangEntry"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IAlchBagItem, $IAlchBagItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IAlchBagItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemMode, $IItemMode$Type} from "packages/moze_intel/projecte/gameObjs/items/$IItemMode"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GemEternalDensity extends $ItemPE implements $IAlchBagItem, $IAlchChestItem, $IItemMode {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "updateInAlchChest"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
public "getModeLangEntries"(): ($ILangEntry)[]
public "getModeSwitchEntry"(): $ILangEntry
public "updateInAlchBag"(arg0: $IItemHandler$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
public "getMode"(arg0: $ItemStack$Type): byte
public "getModeCount"(): byte
public "getModeLangEntry"(arg0: $ItemStack$Type): $ILangEntry
public "changeMode"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getToolTip"(arg0: $ItemStack$Type): $Component
get "modeLangEntries"(): ($ILangEntry)[]
get "modeSwitchEntry"(): $ILangEntry
get "modeCount"(): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemEternalDensity$Type = ($GemEternalDensity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemEternalDensity_ = $GemEternalDensity$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$PhilosophersStone" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IProjectileShooter, $IProjectileShooter$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IProjectileShooter"
import {$IExtraFunction, $IExtraFunction$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IExtraFunction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ItemMode, $ItemMode$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemMode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PhilosophersStone extends $ItemMode implements $IProjectileShooter, $IExtraFunction {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public static "getChanges"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $Direction$Type, arg4: integer, arg5: integer): $Map<($BlockPos), ($BlockState)>
public "getHitBlock"(arg0: $Player$Type): $BlockHitResult
public "shootProjectile"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "doExtraFunction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhilosophersStone$Type = ($PhilosophersStone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhilosophersStone_ = $PhilosophersStone$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/tools/$PEShovel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IItemCharge, $IItemCharge$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IItemCharge"
import {$ShovelItem, $ShovelItem$Type} from "packages/net/minecraft/world/item/$ShovelItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBarHelper, $IBarHelper$Type} from "packages/moze_intel/projecte/gameObjs/items/$IBarHelper"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$EnumMatterType, $EnumMatterType$Type} from "packages/moze_intel/projecte/gameObjs/$EnumMatterType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PEShovel extends $ShovelItem implements $IItemCharge, $IBarHelper {
static "FLATTENABLES": $Map<($Block), ($BlockState)>
readonly "blocks": $TagKey<($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $EnumMatterType$Type, arg1: integer, arg2: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getBarColor"(arg0: $ItemStack$Type): integer
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getNumCharges"(arg0: $ItemStack$Type): integer
public "getWidthForBar"(arg0: $ItemStack$Type): float
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getChargePercent"(arg0: $ItemStack$Type): float
public "changeCharge"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getCharge"(arg0: $ItemStack$Type): integer
public "getScaledBarWidth"(arg0: $ItemStack$Type): integer
public "getColorForBar"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PEShovel$Type = ($PEShovel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PEShovel_ = $PEShovel$Type;
}}
declare module "packages/moze_intel/projecte/api/capabilities/item/$IAlchChestItem" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IAlchChestItem {

 "updateInAlchChest"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
}

export namespace $IAlchChestItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAlchChestItem$Type = ($IAlchChestItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAlchChestItem_ = $IAlchChestItem$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/$EnumRelayTier" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumRelayTier extends $Enum<($EnumRelayTier)> implements $StringRepresentable {
static readonly "MK1": $EnumRelayTier
static readonly "MK2": $EnumRelayTier
static readonly "MK3": $EnumRelayTier


public "toString"(): string
public static "values"(): ($EnumRelayTier)[]
public static "valueOf"(arg0: string): $EnumRelayTier
public "getChargeRate"(): long
public "getSerializedName"(): string
public "getStorage"(): long
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "chargeRate"(): long
get "serializedName"(): string
get "storage"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumRelayTier$Type = (("mk1") | ("mk3") | ("mk2")) | ($EnumRelayTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumRelayTier_ = $EnumRelayTier$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$MatterFurnace" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DMFurnaceBlockEntity, $DMFurnaceBlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$DMFurnaceBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumMatterType, $EnumMatterType$Type} from "packages/moze_intel/projecte/gameObjs/$EnumMatterType"
import {$IMatterBlock, $IMatterBlock$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$IMatterBlock"
import {$AbstractFurnaceBlock, $AbstractFurnaceBlock$Type} from "packages/net/minecraft/world/level/block/$AbstractFurnaceBlock"
import {$BlockEntityTypeRegistryObject, $BlockEntityTypeRegistryObject$Type} from "packages/moze_intel/projecte/gameObjs/registration/impl/$BlockEntityTypeRegistryObject"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$PEEntityBlock, $PEEntityBlock$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$PEEntityBlock"

export class $MatterFurnace extends $AbstractFurnaceBlock implements $IMatterBlock, $PEEntityBlock<($DMFurnaceBlockEntity)> {
static readonly "FACING": $DirectionProperty
static readonly "LIT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $EnumMatterType$Type)

public "getType"(): $BlockEntityTypeRegistryObject<(any)>
public "getMatterType"(): $EnumMatterType
/**
 * 
 * @deprecated
 */
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "triggerBlockEntityEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $DMFurnaceBlockEntity
get "type"(): $BlockEntityTypeRegistryObject<(any)>
get "matterType"(): $EnumMatterType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterFurnace$Type = ($MatterFurnace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatterFurnace_ = $MatterFurnace$Type;
}}
declare module "packages/moze_intel/projecte/api/$ItemInfo" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$NSSItem, $NSSItem$Type} from "packages/moze_intel/projecte/api/nss/$NSSItem"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $ItemInfo {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public static "read"(arg0: $CompoundTag$Type): $ItemInfo
public "is"(arg0: $TagKey$Type<($Item$Type)>): boolean
public "getItem"(): $Item
public static "fromNSS"(arg0: $NSSItem$Type): $ItemInfo
public "hasNBT"(): boolean
public "createStack"(): $ItemStack
public "getNBT"(): $CompoundTag
public static "fromStack"(arg0: $ItemStack$Type): $ItemInfo
public static "fromItem"(arg0: $ItemLike$Type, arg1: $CompoundTag$Type): $ItemInfo
public static "fromItem"(arg0: $ItemLike$Type): $ItemInfo
get "item"(): $Item
get "nBT"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfo$Type = ($ItemInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInfo_ = $ItemInfo$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$VolcaniteAmulet" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IProjectileShooter, $IProjectileShooter$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IProjectileShooter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemPE, $ItemPE$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemPE"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFireProtector, $IFireProtector$Type} from "packages/moze_intel/projecte/gameObjs/items/$IFireProtector"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPedestalItem, $IPedestalItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IPedestalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VolcaniteAmulet extends $ItemPE implements $IProjectileShooter, $IPedestalItem, $IFireProtector {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getPedestalDescription"(): $List<($Component)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canProtectAgainstFire"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): boolean
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "updateInPedestal"<PEDESTAL extends ($BlockEntity) & ($IDMPedestal)>(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: PEDESTAL): boolean
public "shootProjectile"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
get "pedestalDescription"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VolcaniteAmulet$Type = ($VolcaniteAmulet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VolcaniteAmulet_ = $VolcaniteAmulet$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$Collector" {
import {$EnumCollectorTier, $EnumCollectorTier$Type} from "packages/moze_intel/projecte/gameObjs/$EnumCollectorTier"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$CollectorMK1BlockEntity, $CollectorMK1BlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$CollectorMK1BlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntityTypeRegistryObject, $BlockEntityTypeRegistryObject$Type} from "packages/moze_intel/projecte/gameObjs/registration/impl/$BlockEntityTypeRegistryObject"
import {$BlockDirection, $BlockDirection$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$PEEntityBlock, $PEEntityBlock$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$PEEntityBlock"

export class $Collector extends $BlockDirection implements $PEEntityBlock<($CollectorMK1BlockEntity)> {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $EnumCollectorTier$Type, arg1: $BlockBehaviour$Properties$Type)

public "getType"(): $BlockEntityTypeRegistryObject<(any)>
public "getTier"(): $EnumCollectorTier
/**
 * 
 * @deprecated
 */
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
/**
 * 
 * @deprecated
 */
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
/**
 * 
 * @deprecated
 */
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "triggerBlockEntityEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $CollectorMK1BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "type"(): $BlockEntityTypeRegistryObject<(any)>
get "tier"(): $EnumCollectorTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Collector$Type = ($Collector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Collector_ = $Collector$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/block_entities/$InterdictionTorchBlockEntity" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $InterdictionTorchBlockEntity extends $BlockEntity {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public static "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $InterdictionTorchBlockEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterdictionTorchBlockEntity$Type = ($InterdictionTorchBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterdictionTorchBlockEntity_ = $InterdictionTorchBlockEntity$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/rings/$TimeWatch" {
import {$IItemCharge, $IItemCharge$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IItemCharge"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBarHelper, $IBarHelper$Type} from "packages/moze_intel/projecte/gameObjs/items/$IBarHelper"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PEToggleItem, $PEToggleItem$Type} from "packages/moze_intel/projecte/gameObjs/items/rings/$PEToggleItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPedestalItem, $IPedestalItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IPedestalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TimeWatch extends $PEToggleItem implements $IPedestalItem, $IItemCharge, $IBarHelper {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getPedestalDescription"(): $List<($Component)>
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "updateInPedestal"<PEDESTAL extends ($BlockEntity) & ($IDMPedestal)>(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: PEDESTAL): boolean
public "getNumCharges"(arg0: $ItemStack$Type): integer
public "getWidthForBar"(arg0: $ItemStack$Type): float
public "getEmcPerTick"(arg0: integer): double
public "getChargePercent"(arg0: $ItemStack$Type): float
public "changeCharge"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getCharge"(arg0: $ItemStack$Type): integer
public "getScaledBarWidth"(arg0: $ItemStack$Type): integer
public "getColorForBar"(arg0: $ItemStack$Type): integer
get "pedestalDescription"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeWatch$Type = ($TimeWatch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimeWatch_ = $TimeWatch$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/customRecipes/$RecipeShapelessKleinStar$Serializer" {
import {$RecipeShapelessKleinStar, $RecipeShapelessKleinStar$Type} from "packages/moze_intel/projecte/gameObjs/customRecipes/$RecipeShapelessKleinStar"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RecipeShapelessKleinStar$Serializer implements $RecipeSerializer<($RecipeShapelessKleinStar)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $RecipeShapelessKleinStar
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $RecipeShapelessKleinStar
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $RecipeShapelessKleinStar$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $RecipeShapelessKleinStar
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeShapelessKleinStar$Serializer$Type = ($RecipeShapelessKleinStar$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeShapelessKleinStar$Serializer_ = $RecipeShapelessKleinStar$Serializer$Type;
}}
declare module "packages/moze_intel/projecte/api/capabilities/item/$IPedestalItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPedestalItem {

 "getPedestalDescription"(): $List<($Component)>
 "updateInPedestal"<PEDESTAL extends ($BlockEntity) & ($IDMPedestal)>(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: PEDESTAL): boolean
}

export namespace $IPedestalItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPedestalItem$Type = ($IPedestalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPedestalItem_ = $IPedestalItem$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/armor/$DMArmor" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$PEArmor, $PEArmor$Type} from "packages/moze_intel/projecte/gameObjs/items/armor/$PEArmor"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $DMArmor extends $PEArmor {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "getFullSetBaseReduction"(): float
public "getMaxDamageAbsorb"(arg0: $ArmorItem$Type$Type, arg1: $DamageSource$Type): float
public static "get"(arg0: $ItemStack$Type): $Equipable
get "fullSetBaseReduction"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DMArmor$Type = ($DMArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DMArmor_ = $DMArmor$Type;
}}
declare module "packages/moze_intel/projecte/api/nss/$NormalizedSimpleStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NormalizedSimpleStack {

 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "json"(): string
}

export namespace $NormalizedSimpleStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NormalizedSimpleStack$Type = ($NormalizedSimpleStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NormalizedSimpleStack_ = $NormalizedSimpleStack$Type;
}}
declare module "packages/moze_intel/projecte/api/capabilities/block_entity/$IEmcStorage$EmcAction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IEmcStorage$EmcAction extends $Enum<($IEmcStorage$EmcAction)> {
static readonly "EXECUTE": $IEmcStorage$EmcAction
static readonly "SIMULATE": $IEmcStorage$EmcAction


public static "get"(arg0: boolean): $IEmcStorage$EmcAction
public static "values"(): ($IEmcStorage$EmcAction)[]
public static "valueOf"(arg0: string): $IEmcStorage$EmcAction
public "execute"(): boolean
public "combine"(arg0: boolean): $IEmcStorage$EmcAction
public "simulate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEmcStorage$EmcAction$Type = (("execute") | ("simulate")) | ($IEmcStorage$EmcAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEmcStorage$EmcAction_ = $IEmcStorage$EmcAction$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/rings/$PEToggleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IModeChanger, $IModeChanger$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IModeChanger"
import {$ItemPE, $ItemPE$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemPE"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PEToggleItem extends $ItemPE implements $IModeChanger {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getMode"(arg0: $ItemStack$Type): byte
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "changeMode"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PEToggleItem$Type = ($PEToggleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PEToggleItem_ = $PEToggleItem$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/rings/$ArchangelSmite" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PEToggleItem, $PEToggleItem$Type} from "packages/moze_intel/projecte/gameObjs/items/rings/$PEToggleItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPedestalItem, $IPedestalItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IPedestalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ArchangelSmite extends $PEToggleItem implements $IPedestalItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getPedestalDescription"(): $List<($Component)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "updateInPedestal"<PEDESTAL extends ($BlockEntity) & ($IDMPedestal)>(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: PEDESTAL): boolean
public "fireVolley"(arg0: $ItemStack$Type, arg1: $Player$Type): void
get "pedestalDescription"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchangelSmite$Type = ($ArchangelSmite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchangelSmite_ = $ArchangelSmite$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/armor/$GemChest" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GemArmorBase, $GemArmorBase$Type} from "packages/moze_intel/projecte/gameObjs/items/armor/$GemArmorBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IFireProtector, $IFireProtector$Type} from "packages/moze_intel/projecte/gameObjs/items/$IFireProtector"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GemChest extends $GemArmorBase implements $IFireProtector {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "canProtectAgainstFire"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): boolean
public "doExplode"(arg0: $Player$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemChest$Type = ($GemChest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemChest_ = $GemChest$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/rings/$BodyStone" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PEToggleItem, $PEToggleItem$Type} from "packages/moze_intel/projecte/gameObjs/items/rings/$PEToggleItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPedestalItem, $IPedestalItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IPedestalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BodyStone extends $PEToggleItem implements $IPedestalItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getPedestalDescription"(): $List<($Component)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "updateInPedestal"<PEDESTAL extends ($BlockEntity) & ($IDMPedestal)>(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: PEDESTAL): boolean
get "pedestalDescription"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BodyStone$Type = ($BodyStone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BodyStone_ = $BodyStone$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$IBarHelper" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IBarHelper {

 "getScaledBarWidth"(arg0: $ItemStack$Type): integer
 "getWidthForBar"(arg0: $ItemStack$Type): float
 "getColorForBar"(arg0: $ItemStack$Type): integer

(arg0: $ItemStack$Type): integer
}

export namespace $IBarHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBarHelper$Type = ($IBarHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBarHelper_ = $IBarHelper$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/tools/$PEKatar" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ILangEntry, $ILangEntry$Type} from "packages/moze_intel/projecte/utils/text/$ILangEntry"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$IItemMode, $IItemMode$Type} from "packages/moze_intel/projecte/gameObjs/items/$IItemMode"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$PETool, $PETool$Type} from "packages/moze_intel/projecte/gameObjs/items/tools/$PETool"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IExtraFunction, $IExtraFunction$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IExtraFunction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$EnumMatterType, $EnumMatterType$Type} from "packages/moze_intel/projecte/gameObjs/$EnumMatterType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PEKatar extends $PETool implements $IItemMode, $IExtraFunction {
readonly "blocks": $TagKey<($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $EnumMatterType$Type, arg1: integer, arg2: $Item$Properties$Type)

public "getUseDuration"(arg0: $ItemStack$Type): integer
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getModeLangEntries"(): ($ILangEntry)[]
public "doExtraFunction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): boolean
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "getSweepHitBox"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): $AABB
public "getMode"(arg0: $ItemStack$Type): byte
public "getModeCount"(): byte
public "getModeLangEntry"(arg0: $ItemStack$Type): $ILangEntry
public "changeMode"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getModeSwitchEntry"(): $ILangEntry
public "getToolTip"(arg0: $ItemStack$Type): $Component
get "modeLangEntries"(): ($ILangEntry)[]
get "modeCount"(): byte
get "modeSwitchEntry"(): $ILangEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PEKatar$Type = ($PEKatar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PEKatar_ = $PEKatar$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$TransmutationStone" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $TransmutationStone extends $DirectionalBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
/**
 * 
 * @deprecated
 */
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "getFluidState"(arg0: $BlockState$Type): $FluidState
/**
 * 
 * @deprecated
 */
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransmutationStone$Type = ($TransmutationStone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransmutationStone_ = $TransmutationStone$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/rings/$HarvestGoddess" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PEToggleItem, $PEToggleItem$Type} from "packages/moze_intel/projecte/gameObjs/items/rings/$PEToggleItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPedestalItem, $IPedestalItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IPedestalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HarvestGoddess extends $PEToggleItem implements $IPedestalItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getPedestalDescription"(): $List<($Component)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "updateInPedestal"<PEDESTAL extends ($BlockEntity) & ($IDMPedestal)>(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: PEDESTAL): boolean
get "pedestalDescription"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarvestGoddess$Type = ($HarvestGoddess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HarvestGoddess_ = $HarvestGoddess$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$DestructionCatalyst" {
import {$IItemCharge, $IItemCharge$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IItemCharge"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$ItemPE, $ItemPE$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemPE"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBarHelper, $IBarHelper$Type} from "packages/moze_intel/projecte/gameObjs/items/$IBarHelper"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DestructionCatalyst extends $ItemPE implements $IItemCharge, $IBarHelper {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getNumCharges"(arg0: $ItemStack$Type): integer
public "getWidthForBar"(arg0: $ItemStack$Type): float
public "getChargePercent"(arg0: $ItemStack$Type): float
public "changeCharge"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getCharge"(arg0: $ItemStack$Type): integer
public "getScaledBarWidth"(arg0: $ItemStack$Type): integer
public "getColorForBar"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DestructionCatalyst$Type = ($DestructionCatalyst);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DestructionCatalyst_ = $DestructionCatalyst$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/blocks/$ItemFuelBlock" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$EnumFuelType, $EnumFuelType$Type} from "packages/moze_intel/projecte/gameObjs/$EnumFuelType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemFuelBlock extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: $EnumFuelType$Type)

public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFuelBlock$Type = ($ItemFuelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFuelBlock_ = $ItemFuelBlock$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$Tome" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemPE, $ItemPE$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemPE"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Tome extends $ItemPE {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tome$Type = ($Tome);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tome_ = $Tome$Type;
}}
declare module "packages/moze_intel/projecte/api/capabilities/item/$IAlchBagItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IAlchBagItem {

 "updateInAlchBag"(arg0: $IItemHandler$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean

(arg0: $IItemHandler$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
}

export namespace $IAlchBagItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAlchBagItem$Type = ($IAlchBagItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAlchBagItem_ = $IAlchBagItem$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$Pedestal" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$PEEntityBlock, $PEEntityBlock$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$PEEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumMatterType, $EnumMatterType$Type} from "packages/moze_intel/projecte/gameObjs/$EnumMatterType"
import {$IMatterBlock, $IMatterBlock$Type} from "packages/moze_intel/projecte/gameObjs/blocks/$IMatterBlock"
import {$BlockEntityTypeRegistryObject, $BlockEntityTypeRegistryObject$Type} from "packages/moze_intel/projecte/gameObjs/registration/impl/$BlockEntityTypeRegistryObject"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$DMPedestalBlockEntity, $DMPedestalBlockEntity$Type} from "packages/moze_intel/projecte/gameObjs/block_entities/$DMPedestalBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $Pedestal extends $Block implements $SimpleWaterloggedBlock, $PEEntityBlock<($DMPedestalBlockEntity)>, $IMatterBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getType"(): $BlockEntityTypeRegistryObject<($DMPedestalBlockEntity)>
public "getMatterType"(): $EnumMatterType
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
/**
 * 
 * @deprecated
 */
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
/**
 * 
 * @deprecated
 */
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
/**
 * 
 * @deprecated
 */
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
/**
 * 
 * @deprecated
 */
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
/**
 * 
 * @deprecated
 */
public "getFluidState"(arg0: $BlockState$Type): $FluidState
/**
 * 
 * @deprecated
 */
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
/**
 * 
 * @deprecated
 */
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
/**
 * 
 * @deprecated
 */
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "triggerBlockEntityEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $DMPedestalBlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "type"(): $BlockEntityTypeRegistryObject<($DMPedestalBlockEntity)>
get "matterType"(): $EnumMatterType
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pedestal$Type = ($Pedestal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pedestal_ = $Pedestal$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$IStepAssister" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IStepAssister {

 "canAssistStep"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): boolean

(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): boolean
}

export namespace $IStepAssister {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStepAssister$Type = ($IStepAssister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStepAssister_ = $IStepAssister$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/rings/$SWRG" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IProjectileShooter, $IProjectileShooter$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IProjectileShooter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemPE, $ItemPE$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemPE"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPedestalItem, $IPedestalItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IPedestalItem"
import {$IFlightProvider, $IFlightProvider$Type} from "packages/moze_intel/projecte/gameObjs/items/$IFlightProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SWRG extends $ItemPE implements $IPedestalItem, $IFlightProvider, $IProjectileShooter {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getPedestalDescription"(): $List<($Component)>
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "updateInPedestal"<PEDESTAL extends ($BlockEntity) & ($IDMPedestal)>(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: PEDESTAL): boolean
public "changeMode"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: integer): void
public "shootProjectile"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "canProvideFlight"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): boolean
get "pedestalDescription"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SWRG$Type = ($SWRG);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SWRG_ = $SWRG$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/armor/$GemArmorBase" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$PEArmor, $PEArmor$Type} from "packages/moze_intel/projecte/gameObjs/items/armor/$PEArmor"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $GemArmorBase extends $PEArmor {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "getFullSetBaseReduction"(): float
public "getMaxDamageAbsorb"(arg0: $ArmorItem$Type$Type, arg1: $DamageSource$Type): float
public static "hasAnyPiece"(arg0: $Player$Type): boolean
public static "hasFullSet"(arg0: $Player$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
get "fullSetBaseReduction"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemArmorBase$Type = ($GemArmorBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemArmorBase_ = $GemArmorBase$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$DiviningRod" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemPE, $ItemPE$Type} from "packages/moze_intel/projecte/gameObjs/items/$ItemPE"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ILangEntry, $ILangEntry$Type} from "packages/moze_intel/projecte/utils/text/$ILangEntry"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IItemMode, $IItemMode$Type} from "packages/moze_intel/projecte/gameObjs/items/$IItemMode"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DiviningRod extends $ItemPE implements $IItemMode {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, ...arg1: ($ILangEntry$Type)[])

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getModeLangEntries"(): ($ILangEntry)[]
public "getMode"(arg0: $ItemStack$Type): byte
public "getModeCount"(): byte
public "getModeLangEntry"(arg0: $ItemStack$Type): $ILangEntry
public "changeMode"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
public "getModeSwitchEntry"(): $ILangEntry
public "getToolTip"(arg0: $ItemStack$Type): $Component
get "modeLangEntries"(): ($ILangEntry)[]
get "modeCount"(): byte
get "modeSwitchEntry"(): $ILangEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiviningRod$Type = ($DiviningRod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiviningRod_ = $DiviningRod$Type;
}}
declare module "packages/moze_intel/projecte/api/capabilities/block_entity/$IEmcStorage" {
import {$IEmcStorage$EmcAction, $IEmcStorage$EmcAction$Type} from "packages/moze_intel/projecte/api/capabilities/block_entity/$IEmcStorage$EmcAction"

export interface $IEmcStorage {

 "getMaximumEmc"(): long
 "getStoredEmc"(): long
 "getNeededEmc"(): long
 "insertEmc"(arg0: long, arg1: $IEmcStorage$EmcAction$Type): long
 "isRelay"(): boolean
 "hasMaxedEmc"(): boolean
 "extractEmc"(arg0: long, arg1: $IEmcStorage$EmcAction$Type): long
}

export namespace $IEmcStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEmcStorage$Type = ($IEmcStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEmcStorage_ = $IEmcStorage$Type;
}}
declare module "packages/moze_intel/projecte/api/capabilities/item/$IItemEmcHolder" {
import {$IEmcStorage$EmcAction, $IEmcStorage$EmcAction$Type} from "packages/moze_intel/projecte/api/capabilities/block_entity/$IEmcStorage$EmcAction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItemEmcHolder {

 "getMaximumEmc"(arg0: $ItemStack$Type): long
 "getStoredEmc"(arg0: $ItemStack$Type): long
 "getNeededEmc"(arg0: $ItemStack$Type): long
 "insertEmc"(arg0: $ItemStack$Type, arg1: long, arg2: $IEmcStorage$EmcAction$Type): long
 "extractEmc"(arg0: $ItemStack$Type, arg1: long, arg2: $IEmcStorage$EmcAction$Type): long
}

export namespace $IItemEmcHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemEmcHolder$Type = ($IItemEmcHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemEmcHolder_ = $IItemEmcHolder$Type;
}}
declare module "packages/moze_intel/projecte/api/capabilities/item/$IProjectileShooter" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IProjectileShooter {

 "shootProjectile"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean

(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
}

export namespace $IProjectileShooter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProjectileShooter$Type = ($IProjectileShooter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProjectileShooter_ = $IProjectileShooter$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/rings/$LifeStone" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PEToggleItem, $PEToggleItem$Type} from "packages/moze_intel/projecte/gameObjs/items/rings/$PEToggleItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPedestalItem, $IPedestalItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IPedestalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $LifeStone extends $PEToggleItem implements $IPedestalItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getPedestalDescription"(): $List<($Component)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "updateInPedestal"<PEDESTAL extends ($BlockEntity) & ($IDMPedestal)>(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: PEDESTAL): boolean
get "pedestalDescription"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LifeStone$Type = ($LifeStone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LifeStone_ = $LifeStone$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/$CataliticLens" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$DestructionCatalyst, $DestructionCatalyst$Type} from "packages/moze_intel/projecte/gameObjs/items/$DestructionCatalyst"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IProjectileShooter, $IProjectileShooter$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IProjectileShooter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CataliticLens extends $DestructionCatalyst implements $IProjectileShooter {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getNumCharges"(arg0: $ItemStack$Type): integer
public "shootProjectile"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CataliticLens$Type = ($CataliticLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CataliticLens_ = $CataliticLens$Type;
}}
declare module "packages/moze_intel/projecte/gameObjs/blocks/$PEEntityBlock" {
import {$BlockEntityTypeRegistryObject, $BlockEntityTypeRegistryObject$Type} from "packages/moze_intel/projecte/gameObjs/registration/impl/$BlockEntityTypeRegistryObject"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export interface $PEEntityBlock<BLOCK_ENTITY extends $BlockEntity> extends $EntityBlock {

 "getType"(): $BlockEntityTypeRegistryObject<(any)>
 "triggerBlockEntityEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
 "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
 "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): BLOCK_ENTITY
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener

(): $BlockEntityTypeRegistryObject<(any)>
}

export namespace $PEEntityBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PEEntityBlock$Type<BLOCK_ENTITY> = ($PEEntityBlock<(BLOCK_ENTITY)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PEEntityBlock_<BLOCK_ENTITY> = $PEEntityBlock$Type<(BLOCK_ENTITY)>;
}}
declare module "packages/moze_intel/projecte/gameObjs/items/rings/$BlackHoleBand" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDMPedestal, $IDMPedestal$Type} from "packages/moze_intel/projecte/api/block_entity/$IDMPedestal"
import {$IAlchChestItem, $IAlchChestItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IAlchChestItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PEToggleItem, $PEToggleItem$Type} from "packages/moze_intel/projecte/gameObjs/items/rings/$PEToggleItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IAlchBagItem, $IAlchBagItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IAlchBagItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPedestalItem, $IPedestalItem$Type} from "packages/moze_intel/projecte/api/capabilities/item/$IPedestalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlackHoleBand extends $PEToggleItem implements $IAlchBagItem, $IAlchChestItem, $IPedestalItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getPedestalDescription"(): $List<($Component)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "updateInAlchChest"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
public "updateInPedestal"<PEDESTAL extends ($BlockEntity) & ($IDMPedestal)>(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: PEDESTAL): boolean
public "updateInAlchBag"(arg0: $IItemHandler$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
get "pedestalDescription"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackHoleBand$Type = ($BlackHoleBand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackHoleBand_ = $BlackHoleBand$Type;
}}

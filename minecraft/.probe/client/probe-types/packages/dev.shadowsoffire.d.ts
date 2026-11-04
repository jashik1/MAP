declare module "packages/dev/shadowsoffire/placebo/tabs/$ITabFiller" {
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export interface $ITabFiller {

 "fillItemCategory"(arg0: $CreativeModeTab$Type, arg1: $CreativeModeTab$Output$Type): void

(arg0: $Supplier$Type<(any)>): $ITabFiller
}

export namespace $ITabFiller {
function delegating(arg0: $Supplier$Type<(any)>): $ITabFiller
function simple(arg0: $ItemLike$Type): $ITabFiller
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITabFiller$Type = ($ITabFiller);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITabFiller_ = $ITabFiller$Type;
}}
declare module "packages/dev/shadowsoffire/hostilenetworks/item/$DataModelItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DynamicHolder, $DynamicHolder$Type} from "packages/dev/shadowsoffire/placebo/reload/$DynamicHolder"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$ITabFiller, $ITabFiller$Type} from "packages/dev/shadowsoffire/placebo/tabs/$ITabFiller"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$DataModel, $DataModel$Type} from "packages/dev/shadowsoffire/hostilenetworks/data/$DataModel"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DataModelItem extends $Item implements $ITabFiller {
static readonly "DATA_MODEL": string
static readonly "ID": string
static readonly "DATA": string
static readonly "ITERATIONS": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public static "setData"(arg0: $ItemStack$Type, arg1: integer): void
public static "getData"(arg0: $ItemStack$Type): integer
public "fillItemCategory"(arg0: $CreativeModeTab$Type, arg1: $CreativeModeTab$Output$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "setStoredModel"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public static "setStoredModel"(arg0: $ItemStack$Type, arg1: $DataModel$Type): void
public static "getIters"(arg0: $ItemStack$Type): integer
public static "setIters"(arg0: $ItemStack$Type, arg1: integer): void
public static "matchesInput"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public static "getStoredModel"(arg0: $ItemStack$Type): $DynamicHolder<($DataModel)>
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "delegating"(arg0: $Supplier$Type<(any)>): $ITabFiller
public static "simple"(arg0: $ItemLike$Type): $ITabFiller
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataModelItem$Type = ($DataModelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataModelItem_ = $DataModelItem$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/mixin/$AbstractContainerMenuInvoker" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AbstractContainerMenuInvoker {

 "_moveItemStackTo"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: boolean): boolean

(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: boolean): boolean
}

export namespace $AbstractContainerMenuInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerMenuInvoker$Type = ($AbstractContainerMenuInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerMenuInvoker_ = $AbstractContainerMenuInvoker$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/block_entity/$TickingBlockEntity" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $TickingBlockEntity {

 "clientTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
 "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
}

export namespace $TickingBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingBlockEntity$Type = ($TickingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickingBlockEntity_ = $TickingBlockEntity$Type;
}}
declare module "packages/dev/shadowsoffire/hostilenetworks/data/$ModelTier" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModelTier$TierData, $ModelTier$TierData$Type} from "packages/dev/shadowsoffire/hostilenetworks/data/$ModelTier$TierData"
import {$DynamicHolder, $DynamicHolder$Type} from "packages/dev/shadowsoffire/placebo/reload/$DynamicHolder"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DataModel, $DataModel$Type} from "packages/dev/shadowsoffire/hostilenetworks/data/$DataModel"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ModelTier extends $Enum<($ModelTier)> implements $StringRepresentable {
static readonly "FAULTY": $ModelTier
static readonly "BASIC": $ModelTier
static readonly "ADVANCED": $ModelTier
static readonly "SUPERIOR": $ModelTier
static readonly "SELF_AWARE": $ModelTier
readonly "name": string
static readonly "CODEC": $Codec<($ModelTier)>


public static "values"(): ($ModelTier)[]
public static "valueOf"(arg0: string): $ModelTier
public "next"(): $ModelTier
public "data"(): $ModelTier$TierData
public "previous"(): $ModelTier
public "color"(): integer
public "getComponent"(): $Component
public static "defaultDataPerKill"(): (integer)[]
public static "defaultData"(): (integer)[]
public static "getByData"(arg0: $DataModel$Type, arg1: integer): $ModelTier
public static "getByData"(arg0: $DynamicHolder$Type<($DataModel$Type)>, arg1: integer): $ModelTier
public "getSerializedName"(): string
public "accuracy"(): float
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "component"(): $Component
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelTier$Type = (("superior") | ("advanced") | ("self_aware") | ("faulty") | ("basic")) | ($ModelTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelTier_ = $ModelTier$Type;
}}
declare module "packages/dev/shadowsoffire/hostilenetworks/item/$MobPredictionItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ITabFiller, $ITabFiller$Type} from "packages/dev/shadowsoffire/placebo/tabs/$ITabFiller"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MobPredictionItem extends $Item implements $ITabFiller {
static readonly "TIER": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "fillItemCategory"(arg0: $CreativeModeTab$Type, arg1: $CreativeModeTab$Output$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public static "delegating"(arg0: $Supplier$Type<(any)>): $ITabFiller
public static "simple"(arg0: $ItemLike$Type): $ITabFiller
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobPredictionItem$Type = ($MobPredictionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobPredictionItem_ = $MobPredictionItem$Type;
}}
declare module "packages/dev/shadowsoffire/hostilenetworks/data/$ModelTier$TierData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$CodecProvider, $CodecProvider$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecProvider"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"

export class $ModelTier$TierData extends $Record implements $CodecProvider<($ModelTier$TierData)> {
static readonly "CODEC": $Codec<($ModelTier$TierData)>

constructor(requiredData: integer, dataPerKill: integer, color: $TextColor$Type, accuracy: float)

public "requiredData"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "color"(): $TextColor
public "dataPerKill"(): integer
public "getCodec"(): $Codec<(any)>
public "accuracy"(): float
get "codec"(): $Codec<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelTier$TierData$Type = ($ModelTier$TierData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelTier$TierData_ = $ModelTier$TierData$Type;
}}
declare module "packages/dev/shadowsoffire/hostilenetworks/item/$DeepLearnerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DeepLearnerItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public static "getItemHandler"(arg0: $ItemStack$Type): $ItemStackHandler
public static "saveItems"(arg0: $ItemStack$Type, arg1: $ItemStackHandler$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeepLearnerItem$Type = ($DeepLearnerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeepLearnerItem_ = $DeepLearnerItem$Type;
}}
declare module "packages/dev/shadowsoffire/hostilenetworks/data/$DataModel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CodecProvider, $CodecProvider$Type} from "packages/dev/shadowsoffire/placebo/codec/$CodecProvider"
import {$ModelTier, $ModelTier$Type} from "packages/dev/shadowsoffire/hostilenetworks/data/$ModelTier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $DataModel extends $Record implements $CodecProvider<($DataModel)> {
static readonly "CODEC": $Codec<($DataModel)>

constructor(arg0: $DataModel$Type, arg1: $List$Type<($ItemStack$Type)>)
constructor(type: $EntityType$Type<(any)>, subtypes: $List$Type<($EntityType$Type<(any)>)>, name: $MutableComponent$Type, displayNbt: $CompoundTag$Type, guiScale: float, guiXOff: float, guiYOff: float, guiZOff: float, simCost: integer, input: $ItemStack$Type, baseDrop: $ItemStack$Type, triviaKey: string, fabDrops: $List$Type<($ItemStack$Type)>, tierData: (integer)[], dataPerKill: (integer)[])

public "name"(): $MutableComponent
public "type"(): $EntityType<(any)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "validate"(arg0: $ResourceLocation$Type): $DataModel
public "input"(): $ItemStack
public "simCost"(): integer
public "dataPerKill"(): (integer)[]
public "getDataPerKill"(arg0: $ModelTier$Type): integer
public "subtypes"(): $List<($EntityType<(any)>)>
public "getTierData"(arg0: $ModelTier$Type): integer
public "baseDrop"(): $ItemStack
public "triviaKey"(): string
public "tierData"(): (integer)[]
public "fabDrops"(): $List<($ItemStack)>
public "getNameColor"(): integer
public "getPredictionDrop"(): $ItemStack
public "getCodec"(): $Codec<(any)>
public "displayNbt"(): $CompoundTag
public "guiXOff"(): float
public "guiZOff"(): float
public "guiYOff"(): float
public "guiScale"(): float
get "nameColor"(): integer
get "predictionDrop"(): $ItemStack
get "codec"(): $Codec<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataModel$Type = ($DataModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataModel_ = $DataModel$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/block_entity/$TickingBlockEntityType" {
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$ShulkerBoxBlockEntity, $ShulkerBoxBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ShulkerBoxBlockEntity"
import {$BeehiveBlockEntity, $BeehiveBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BeehiveBlockEntity"
import {$ComparatorBlockEntity, $ComparatorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ComparatorBlockEntity"
import {$DropperBlockEntity, $DropperBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DropperBlockEntity"
import {$BrewingStandBlockEntity, $BrewingStandBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BrewingStandBlockEntity"
import {$DaylightDetectorBlockEntity, $DaylightDetectorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DaylightDetectorBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$HangingSignBlockEntity, $HangingSignBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$HangingSignBlockEntity"
import {$SignBlockEntity, $SignBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SignBlockEntity"
import {$JukeboxBlockEntity, $JukeboxBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$JukeboxBlockEntity"
import {$SculkShriekerBlockEntity, $SculkShriekerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkShriekerBlockEntity"
import {$EnchantmentTableBlockEntity, $EnchantmentTableBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$EnchantmentTableBlockEntity"
import {$CalibratedSculkSensorBlockEntity, $CalibratedSculkSensorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CalibratedSculkSensorBlockEntity"
import {$TickingBlockEntity, $TickingBlockEntity$Type} from "packages/dev/shadowsoffire/placebo/block_entity/$TickingBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ChiseledBookShelfBlockEntity, $ChiseledBookShelfBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ChiseledBookShelfBlockEntity"
import {$BrushableBlockEntity, $BrushableBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BrushableBlockEntity"
import {$FurnaceBlockEntity, $FurnaceBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$FurnaceBlockEntity"
import {$DispenserBlockEntity, $DispenserBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DispenserBlockEntity"
import {$EnderChestBlockEntity, $EnderChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$EnderChestBlockEntity"
import {$SculkSensorBlockEntity, $SculkSensorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkSensorBlockEntity"
import {$BarrelBlockEntity, $BarrelBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BarrelBlockEntity"
import {$ChestBlockEntity, $ChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ChestBlockEntity"
import {$BannerBlockEntity, $BannerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BannerBlockEntity"
import {$TheEndGatewayBlockEntity, $TheEndGatewayBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TheEndGatewayBlockEntity"
import {$CommandBlockEntity, $CommandBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CommandBlockEntity"
import {$BellBlockEntity, $BellBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BellBlockEntity"
import {$TrappedChestBlockEntity, $TrappedChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TrappedChestBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SmokerBlockEntity, $SmokerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SmokerBlockEntity"
import {$BlastFurnaceBlockEntity, $BlastFurnaceBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlastFurnaceBlockEntity"
import {$DecoratedPotBlockEntity, $DecoratedPotBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DecoratedPotBlockEntity"
import {$PistonMovingBlockEntity, $PistonMovingBlockEntity$Type} from "packages/net/minecraft/world/level/block/piston/$PistonMovingBlockEntity"
import {$HopperBlockEntity, $HopperBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$HopperBlockEntity"
import {$TheEndPortalBlockEntity, $TheEndPortalBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TheEndPortalBlockEntity"
import {$BeaconBlockEntity, $BeaconBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BeaconBlockEntity"
import {$StructureBlockEntity, $StructureBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$StructureBlockEntity"
import {$SpawnerBlockEntity, $SpawnerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SpawnerBlockEntity"
import {$JigsawBlockEntity, $JigsawBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$JigsawBlockEntity"
import {$ConduitBlockEntity, $ConduitBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ConduitBlockEntity"
import {$BedBlockEntity, $BedBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BedBlockEntity"
import {$SculkCatalystBlockEntity, $SculkCatalystBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkCatalystBlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SkullBlockEntity, $SkullBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SkullBlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$LecternBlockEntity, $LecternBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$LecternBlockEntity"
import {$CampfireBlockEntity, $CampfireBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CampfireBlockEntity"

export class $TickingBlockEntityType<T extends ($BlockEntity) & ($TickingBlockEntity)> extends $BlockEntityType<(T)> {
static readonly "FURNACE": $BlockEntityType<($FurnaceBlockEntity)>
static readonly "CHEST": $BlockEntityType<($ChestBlockEntity)>
static readonly "TRAPPED_CHEST": $BlockEntityType<($TrappedChestBlockEntity)>
static readonly "ENDER_CHEST": $BlockEntityType<($EnderChestBlockEntity)>
static readonly "JUKEBOX": $BlockEntityType<($JukeboxBlockEntity)>
static readonly "DISPENSER": $BlockEntityType<($DispenserBlockEntity)>
static readonly "DROPPER": $BlockEntityType<($DropperBlockEntity)>
static readonly "SIGN": $BlockEntityType<($SignBlockEntity)>
static readonly "HANGING_SIGN": $BlockEntityType<($HangingSignBlockEntity)>
static readonly "MOB_SPAWNER": $BlockEntityType<($SpawnerBlockEntity)>
static readonly "PISTON": $BlockEntityType<($PistonMovingBlockEntity)>
static readonly "BREWING_STAND": $BlockEntityType<($BrewingStandBlockEntity)>
static readonly "ENCHANTING_TABLE": $BlockEntityType<($EnchantmentTableBlockEntity)>
static readonly "END_PORTAL": $BlockEntityType<($TheEndPortalBlockEntity)>
static readonly "BEACON": $BlockEntityType<($BeaconBlockEntity)>
static readonly "SKULL": $BlockEntityType<($SkullBlockEntity)>
static readonly "DAYLIGHT_DETECTOR": $BlockEntityType<($DaylightDetectorBlockEntity)>
static readonly "HOPPER": $BlockEntityType<($HopperBlockEntity)>
static readonly "COMPARATOR": $BlockEntityType<($ComparatorBlockEntity)>
static readonly "BANNER": $BlockEntityType<($BannerBlockEntity)>
static readonly "STRUCTURE_BLOCK": $BlockEntityType<($StructureBlockEntity)>
static readonly "END_GATEWAY": $BlockEntityType<($TheEndGatewayBlockEntity)>
static readonly "COMMAND_BLOCK": $BlockEntityType<($CommandBlockEntity)>
static readonly "SHULKER_BOX": $BlockEntityType<($ShulkerBoxBlockEntity)>
static readonly "BED": $BlockEntityType<($BedBlockEntity)>
static readonly "CONDUIT": $BlockEntityType<($ConduitBlockEntity)>
static readonly "BARREL": $BlockEntityType<($BarrelBlockEntity)>
static readonly "SMOKER": $BlockEntityType<($SmokerBlockEntity)>
static readonly "BLAST_FURNACE": $BlockEntityType<($BlastFurnaceBlockEntity)>
static readonly "LECTERN": $BlockEntityType<($LecternBlockEntity)>
static readonly "BELL": $BlockEntityType<($BellBlockEntity)>
static readonly "JIGSAW": $BlockEntityType<($JigsawBlockEntity)>
static readonly "CAMPFIRE": $BlockEntityType<($CampfireBlockEntity)>
static readonly "BEEHIVE": $BlockEntityType<($BeehiveBlockEntity)>
static readonly "SCULK_SENSOR": $BlockEntityType<($SculkSensorBlockEntity)>
static readonly "CALIBRATED_SCULK_SENSOR": $BlockEntityType<($CalibratedSculkSensorBlockEntity)>
static readonly "SCULK_CATALYST": $BlockEntityType<($SculkCatalystBlockEntity)>
static readonly "SCULK_SHRIEKER": $BlockEntityType<($SculkShriekerBlockEntity)>
static readonly "CHISELED_BOOKSHELF": $BlockEntityType<($ChiseledBookShelfBlockEntity)>
static readonly "BRUSHABLE_BLOCK": $BlockEntityType<($BrushableBlockEntity)>
static readonly "DECORATED_POT": $BlockEntityType<($DecoratedPotBlockEntity)>
 "validBlocks": $Set<($Block)>

constructor(arg0: $BlockEntityType$BlockEntitySupplier$Type<(any)>, arg1: $Set$Type<($Block$Type)>, arg2: boolean, arg3: boolean)

public "getTicker"(arg0: boolean): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingBlockEntityType$Type<T> = ($TickingBlockEntityType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickingBlockEntityType_<T> = $TickingBlockEntityType$Type<(T)>;
}}
declare module "packages/dev/shadowsoffire/hostilenetworks/block/$LootFabBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TickingEntityBlock, $TickingEntityBlock$Type} from "packages/dev/shadowsoffire/placebo/block_entity/$TickingEntityBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $LootFabBlock extends $HorizontalDirectionalBlock implements $TickingEntityBlock {
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
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootFabBlock$Type = ($LootFabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootFabBlock_ = $LootFabBlock$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/util/$CachedObject$CachedObjectSource" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $CachedObject$CachedObjectSource {

 "getOrCreate"<T>(arg0: $ResourceLocation$Type, arg1: $Function$Type<($ItemStack$Type), (T)>): T
 "getOrCreate"<T>(arg0: $ResourceLocation$Type, arg1: $Function$Type<($ItemStack$Type), (T)>, arg2: $ToIntFunction$Type<($ItemStack$Type)>): T

(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type, arg2: $Function$Type<($ItemStack$Type), (T)>): T
}

export namespace $CachedObject$CachedObjectSource {
function getOrCreate<T>(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type, arg2: $Function$Type<($ItemStack$Type), (T)>): T
function getOrCreate<T>(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type, arg2: $Function$Type<($ItemStack$Type), (T)>, arg3: $ToIntFunction$Type<($ItemStack$Type)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedObject$CachedObjectSource$Type = ($CachedObject$CachedObjectSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachedObject$CachedObjectSource_ = $CachedObject$CachedObjectSource$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/block_entity/$TickingEntityBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export interface $TickingEntityBlock extends $EntityBlock {

 "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
 "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener

(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}

export namespace $TickingEntityBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingEntityBlock$Type = ($TickingEntityBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickingEntityBlock_ = $TickingEntityBlock$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/codec/$CodecProvider" {
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $CodecProvider<T> {

 "getCodec"(): $Codec<(any)>

(): $Codec<(any)>
}

export namespace $CodecProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecProvider$Type<T> = ($CodecProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodecProvider_<T> = $CodecProvider$Type<(T)>;
}}
declare module "packages/dev/shadowsoffire/hostilenetworks/block/$SimChamberBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TickingEntityBlock, $TickingEntityBlock$Type} from "packages/dev/shadowsoffire/placebo/block_entity/$TickingEntityBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SimChamberBlock extends $HorizontalDirectionalBlock implements $TickingEntityBlock {
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
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimChamberBlock$Type = ($SimChamberBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimChamberBlock_ = $SimChamberBlock$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/reload/$DynamicHolder" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $DynamicHolder<T> implements $Supplier<(T)> {
static readonly "EMPTY": $ResourceLocation


public "get"(): T
/**
 * 
 * @deprecated
 */
public "value"(): T
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getId"(): $ResourceLocation
public "is"(arg0: $ResourceLocation$Type): boolean
public "getOptional"(): $Optional<(T)>
public "isBound"(): boolean
get "id"(): $ResourceLocation
get "optional"(): $Optional<(T)>
get "bound"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicHolder$Type<T> = ($DynamicHolder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicHolder_<T> = $DynamicHolder$Type<(T)>;
}}
declare module "packages/dev/shadowsoffire/hostilenetworks/item/$BlankDataModelItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlankDataModelItem extends $Item {
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
export type $BlankDataModelItem$Type = ($BlankDataModelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlankDataModelItem_ = $BlankDataModelItem$Type;
}}

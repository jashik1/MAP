declare module "packages/com/enderio/base/common/item/tool/$PoweredToggledItem" {
import {$CreativeModeTabModifier, $CreativeModeTabModifier$Type} from "packages/com/tterrag/registrate/util/$CreativeModeTabModifier"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ITabVariants, $ITabVariants$Type} from "packages/com/enderio/core/common/item/$ITabVariants"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/enderio/api/capability/$MultiCapabilityProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IMultiCapabilityItem, $IMultiCapabilityItem$Type} from "packages/com/enderio/api/capability/$IMultiCapabilityItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IAdvancedTooltipProvider, $IAdvancedTooltipProvider$Type} from "packages/com/enderio/core/client/item/$IAdvancedTooltipProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PoweredToggledItem extends $Item implements $IMultiCapabilityItem, $IAdvancedTooltipProvider, $ITabVariants {
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
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "addAllVariants"(arg0: $CreativeModeTabModifier$Type): void
public "addCommonTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public static "getCharged"(arg0: $PoweredToggledItem$Type): $ItemStack
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $MultiCapabilityProvider$Type): $MultiCapabilityProvider
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "addDetailedTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredToggledItem$Type = ($PoweredToggledItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoweredToggledItem_ = $PoweredToggledItem$Type;
}}
declare module "packages/com/enderio/base/common/block/painted/$IPaintedBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$IForgeBlock, $IForgeBlock$Type} from "packages/net/minecraftforge/common/extensions/$IForgeBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IPaintedBlock extends $IForgeBlock {

 "getPaintState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
 "getPaint"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Block
 "getPaintedStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $ItemLike$Type): $ItemStack
 "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
 "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
 "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
 "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
 "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
 "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
 "isScaffolding"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
 "isBed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "setBedOccupied"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type, arg4: boolean): void
 "getBedDirection"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): $Direction
 "addRunningEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "getWeakChanges"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
 "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
 "onBlockStateChange"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type): void
 "hidesNeighborFace"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $Direction$Type): boolean
 "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "collisionExtendsVertically"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "getRespawnPosition"(arg0: $BlockState$Type, arg1: $EntityType$Type<(any)>, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: float, arg5: $LivingEntity$Type): $Optional<($Vec3)>
 "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
 "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
 "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
 "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
 "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
 "getToolModifiedState"(arg0: $BlockState$Type, arg1: $UseOnContext$Type, arg2: $ToolAction$Type, arg3: boolean): $BlockState
 "canDropFromExplosion"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): boolean
 "getStateAtViewpoint"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Vec3$Type): $BlockState
 "getAdjacentBlockPathType"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: $BlockPathTypes$Type): $BlockPathTypes
 "getEnchantPowerBonus"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
 "getBeaconColorMultiplier"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): (float)[]
 "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
 "isLadder"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
 "canHarvestBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
 "isBurning"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "isValidSpawn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SpawnPlacements$Type$Type, arg4: $EntityType$Type<(any)>): boolean
 "isPortalFrame"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "getExpDrop"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): integer
 "isConduitFrame"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): boolean
 "isFertile"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "onTreeGrow"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BiConsumer$Type<($BlockPos$Type), ($BlockState$Type)>, arg3: $RandomSource$Type, arg4: $BlockPos$Type, arg5: $TreeConfiguration$Type): boolean
 "isSlimeBlock"(arg0: $BlockState$Type): boolean
 "getBlockPathType"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type): $BlockPathTypes
 "isStickyBlock"(arg0: $BlockState$Type): boolean
 "onCaughtFire"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $LivingEntity$Type): void
 "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "isFlammable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "isFireSource"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
 "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
 "getFireSpreadSpeed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
 "canStickTo"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
 "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "canBeHydrated"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type, arg4: $BlockPos$Type): boolean
 "getMapColor"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $MapColor$Type): $MapColor
 "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState

(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
}

export namespace $IPaintedBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPaintedBlock$Type = ($IPaintedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPaintedBlock_ = $IPaintedBlock$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$EnchanterRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnchanterRecipe, $EnchanterRecipe$Type} from "packages/com/enderio/machines/common/recipe/$EnchanterRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $EnchanterRecipe$Serializer implements $RecipeSerializer<($EnchanterRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $EnchanterRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $EnchanterRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $EnchanterRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $EnchanterRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchanterRecipe$Serializer$Type = ($EnchanterRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchanterRecipe$Serializer_ = $EnchanterRecipe$Serializer$Type;
}}
declare module "packages/com/enderio/base/common/block/$EIOPressurePlateBlock$Detector" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $EIOPressurePlateBlock$Detector {

 "getSignalStrength"(arg0: $Level$Type, arg1: $BlockPos$Type): integer

(arg0: $Level$Type, arg1: $BlockPos$Type): integer
}

export namespace $EIOPressurePlateBlock$Detector {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EIOPressurePlateBlock$Detector$Type = ($EIOPressurePlateBlock$Detector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EIOPressurePlateBlock$Detector_ = $EIOPressurePlateBlock$Detector$Type;
}}
declare module "packages/com/enderio/machines/common/io/item/$MachineInventoryLayout$Builder" {
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$MachineInventoryLayout, $MachineInventoryLayout$Type} from "packages/com/enderio/machines/common/io/item/$MachineInventoryLayout"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$SingleSlotAccess, $SingleSlotAccess$Type} from "packages/com/enderio/machines/common/io/item/$SingleSlotAccess"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MachineInventoryLayout$Builder$SlotBuilder, $MachineInventoryLayout$Builder$SlotBuilder$Type} from "packages/com/enderio/machines/common/io/item/$MachineInventoryLayout$Builder$SlotBuilder"
import {$MultiSlotAccess, $MultiSlotAccess$Type} from "packages/com/enderio/machines/common/io/item/$MultiSlotAccess"

export class $MachineInventoryLayout$Builder {

constructor()

public "build"(): $MachineInventoryLayout
public "slot"(arg0: $UnaryOperator$Type<($MachineInventoryLayout$Builder$SlotBuilder$Type)>): $MachineInventoryLayout$Builder
public "setStackLimit"(arg0: integer): $MachineInventoryLayout$Builder
public "previewSlot"(): $MachineInventoryLayout$Builder
public "previewSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "storageSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "storageSlot"(arg0: $BiPredicate$Type<(integer), ($ItemStack$Type)>): $MachineInventoryLayout$Builder
public "storageSlot"(arg0: integer, arg1: $BiPredicate$Type<(integer), ($ItemStack$Type)>): $MachineInventoryLayout$Builder
public "storageSlot"(): $MachineInventoryLayout$Builder
public "outputSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "outputSlot"(arg0: $BiPredicate$Type<(integer), ($ItemStack$Type)>): $MachineInventoryLayout$Builder
public "outputSlot"(arg0: integer, arg1: $BiPredicate$Type<(integer), ($ItemStack$Type)>): $MachineInventoryLayout$Builder
public "outputSlot"(): $MachineInventoryLayout$Builder
public "inputSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "inputSlot"(): $MachineInventoryLayout$Builder
public "inputSlot"(arg0: integer, arg1: $BiPredicate$Type<(integer), ($ItemStack$Type)>): $MachineInventoryLayout$Builder
public "inputSlot"(arg0: $BiPredicate$Type<(integer), ($ItemStack$Type)>): $MachineInventoryLayout$Builder
public "capacitor"(): $MachineInventoryLayout$Builder
public "ghostSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "ghostSlot"(): $MachineInventoryLayout$Builder
public "ghostSlot"(arg0: $BiPredicate$Type<(integer), ($ItemStack$Type)>): $MachineInventoryLayout$Builder
public "ghostSlot"(arg0: integer, arg1: $BiPredicate$Type<(integer), ($ItemStack$Type)>): $MachineInventoryLayout$Builder
public "slotAccess"(arg0: $MultiSlotAccess$Type): $MachineInventoryLayout$Builder
public "slotAccess"(arg0: $SingleSlotAccess$Type): $MachineInventoryLayout$Builder
set "stackLimit"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInventoryLayout$Builder$Type = ($MachineInventoryLayout$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineInventoryLayout$Builder_ = $MachineInventoryLayout$Builder$Type;
}}
declare module "packages/com/enderio/base/common/enchantment/$SoulBoundEnchantment" {
import {$EIOBaseEnchantment, $EIOBaseEnchantment$Type} from "packages/com/enderio/base/common/enchantment/$EIOBaseEnchantment"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $SoulBoundEnchantment extends $EIOBaseEnchantment {
 "slots": ($EquipmentSlot)[]
readonly "category": $EnchantmentCategory

constructor()

public "getMaxCost"(arg0: integer): integer
public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulBoundEnchantment$Type = ($SoulBoundEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulBoundEnchantment_ = $SoulBoundEnchantment$Type;
}}
declare module "packages/com/enderio/api/conduit/$ConduitType" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConduitUpgrade, $ConduitUpgrade$Type} from "packages/com/enderio/api/conduit/upgrade/$ConduitUpgrade"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SlotType, $SlotType$Type} from "packages/com/enderio/api/conduit/$SlotType"
import {$ConduitTicker, $ConduitTicker$Type} from "packages/com/enderio/api/conduit/ticker/$ConduitTicker"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ConduitType$ConduitConnectionData, $ConduitType$ConduitConnectionData$Type} from "packages/com/enderio/api/conduit/$ConduitType$ConduitConnectionData"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ConduitMenuData, $ConduitMenuData$Type} from "packages/com/enderio/api/conduit/$ConduitMenuData"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ConduitNode$IOState, $ConduitNode$IOState$Type} from "packages/com/enderio/api/conduit/$ConduitNode$IOState"
import {$ConduitData, $ConduitData$Type} from "packages/com/enderio/api/conduit/$ConduitData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceFilter, $ResourceFilter$Type} from "packages/com/enderio/api/filter/$ResourceFilter"

export class $ConduitType<T extends $ConduitData<(T)>> {

constructor()

public static "getKey"(arg0: $ConduitType$Type<(any)>): $ResourceLocation
public "getDefaultConnection"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $ConduitType$ConduitConnectionData
public "createConduitData"(arg0: $Level$Type, arg1: $BlockPos$Type): T
public "canBeInSameBlock"(arg0: $ConduitType$Type<(any)>): boolean
public "getConduitItem"(): $Item
public "canBeReplacedBy"(arg0: $ConduitType$Type<(any)>): boolean
public "canApplyUpgrade"(arg0: $SlotType$Type, arg1: $ConduitUpgrade$Type): boolean
public "getMenuData"(): $ConduitMenuData
public "canApplyFilter"(arg0: $SlotType$Type, arg1: $ResourceFilter$Type): boolean
public "proxyCapability"<K>(arg0: $Capability$Type<(K)>, arg1: T, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: $ConduitNode$IOState$Type): $Optional<($LazyOptional<(K)>)>
public "addToTooltip"(arg0: $Level$Type, arg1: $Consumer$Type<($Component$Type)>, arg2: $TooltipFlag$Type): void
public "getTicker"(): $ConduitTicker<(T)>
get "conduitItem"(): $Item
get "menuData"(): $ConduitMenuData
get "ticker"(): $ConduitTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitType$Type<T> = ($ConduitType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitType_<T> = $ConduitType$Type<(T)>;
}}
declare module "packages/com/enderio/machines/common/block/$CapacitorBankBlock" {
import {$ICapacityTier, $ICapacityTier$Type} from "packages/com/enderio/machines/common/blockentity/multienergy/$ICapacityTier"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$RightClickBlock$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickBlock"
import {$AdvancementEvent$AdvancementEarnEvent, $AdvancementEvent$AdvancementEarnEvent$Type} from "packages/net/minecraftforge/event/entity/player/$AdvancementEvent$AdvancementEarnEvent"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntityEntry, $BlockEntityEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntityEntry"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IAdvancedTooltipProvider, $IAdvancedTooltipProvider$Type} from "packages/com/enderio/core/client/item/$IAdvancedTooltipProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MachineBlock, $MachineBlock$Type} from "packages/com/enderio/machines/common/block/$MachineBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CapacitorBankBlock extends $MachineBlock implements $IAdvancedTooltipProvider {
static readonly "PLACE_ADVANCEMENT_ID": $ResourceLocation
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BlockEntityEntry$Type<(any)>, arg2: $ICapacityTier$Type)

public "getTier"(): $ICapacityTier
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "addCommonTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public static "rightClickBlock"(arg0: $PlayerInteractEvent$RightClickBlock$Type): void
public static "onAdvancement"(arg0: $AdvancementEvent$AdvancementEarnEvent$Type): void
public "addDetailedTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
get "tier"(): $ICapacityTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacitorBankBlock$Type = ($CapacitorBankBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapacitorBankBlock_ = $CapacitorBankBlock$Type;
}}
declare module "packages/com/enderio/armory/common/item/darksteel/upgrades/$DarkSteelUpgradeRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$DarkSteelUpgradeRecipe, $DarkSteelUpgradeRecipe$Type} from "packages/com/enderio/armory/common/item/darksteel/upgrades/$DarkSteelUpgradeRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $DarkSteelUpgradeRecipe$Serializer implements $RecipeSerializer<($DarkSteelUpgradeRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $DarkSteelUpgradeRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $DarkSteelUpgradeRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $DarkSteelUpgradeRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $DarkSteelUpgradeRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelUpgradeRecipe$Serializer$Type = ($DarkSteelUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkSteelUpgradeRecipe$Serializer_ = $DarkSteelUpgradeRecipe$Serializer$Type;
}}
declare module "packages/com/enderio/api/capability/$CoordinateSelection" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CoordinateSelection extends $Record {

constructor(level: $ResourceLocation$Type, pos: $BlockPos$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $Level$Type, arg1: $BlockPos$Type): $CoordinateSelection
public "pos"(): $BlockPos
public "level"(): $ResourceLocation
public "getLevelName"(): string
public static "getLevelName"(arg0: $ResourceLocation$Type): string
public "getLevelInstance"(): $Level
get "levelName"(): string
get "levelInstance"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoordinateSelection$Type = ($CoordinateSelection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoordinateSelection_ = $CoordinateSelection$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$SagMillingRecipe$OutputItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SagMillingRecipe$OutputItem$SizedTagOutput, $SagMillingRecipe$OutputItem$SizedTagOutput$Type} from "packages/com/enderio/machines/common/recipe/$SagMillingRecipe$OutputItem$SizedTagOutput"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $SagMillingRecipe$OutputItem extends $Record {

constructor(output: $Either$Type<($ItemStack$Type), ($SagMillingRecipe$OutputItem$SizedTagOutput$Type)>, chance: float, isOptional: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $Item$Type, arg1: integer, arg2: float, arg3: boolean): $SagMillingRecipe$OutputItem
public static "of"(arg0: $TagKey$Type<($Item$Type)>, arg1: integer, arg2: float, arg3: boolean): $SagMillingRecipe$OutputItem
public static "of"(arg0: $ItemStack$Type, arg1: float, arg2: boolean): $SagMillingRecipe$OutputItem
public "isPresent"(): boolean
public "output"(): $Either<($ItemStack), ($SagMillingRecipe$OutputItem$SizedTagOutput)>
public static "fromJson"(arg0: $JsonObject$Type, arg1: $ResourceLocation$Type): $SagMillingRecipe$OutputItem
public "toJson"(): $JsonObject
public "getItemStack"(): $ItemStack
public "isOptional"(): boolean
public "chance"(): float
get "present"(): boolean
get "itemStack"(): $ItemStack
get "optional"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$OutputItem$Type = ($SagMillingRecipe$OutputItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SagMillingRecipe$OutputItem_ = $SagMillingRecipe$OutputItem$Type;
}}
declare module "packages/com/enderio/base/common/block/$WallEnderSkullBlock" {
import {$WallSkullBlock, $WallSkullBlock$Type} from "packages/net/minecraft/world/level/block/$WallSkullBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $WallEnderSkullBlock extends $WallSkullBlock {
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

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallEnderSkullBlock$Type = ($WallEnderSkullBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WallEnderSkullBlock_ = $WallEnderSkullBlock$Type;
}}
declare module "packages/com/enderio/api/capacitor/$ICapacitorData" {
import {$CapacitorModifier, $CapacitorModifier$Type} from "packages/com/enderio/api/capacitor/$CapacitorModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ICapacitorData {

 "getBase"(): float
 "getModifier"(arg0: $CapacitorModifier$Type): float
 "getAllModifiers"(): $Map<($CapacitorModifier), (float)>
}

export namespace $ICapacitorData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapacitorData$Type = ($ICapacitorData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapacitorData_ = $ICapacitorData$Type;
}}
declare module "packages/com/enderio/conduits/common/conduit/block/$ConduitBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$DynamicConnectionState, $DynamicConnectionState$Type} from "packages/com/enderio/conduits/common/conduit/connection/$DynamicConnectionState"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ConduitType, $ConduitType$Type} from "packages/com/enderio/api/conduit/$ConduitType"
import {$Mergeable$Dummy, $Mergeable$Dummy$Type} from "packages/dev/gigaherz/graph3/$Mergeable$Dummy"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnderBlockEntity, $EnderBlockEntity$Type} from "packages/com/enderio/core/common/blockentity/$EnderBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$RightClickAction, $RightClickAction$Type} from "packages/com/enderio/conduits/common/conduit/$RightClickAction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GraphObject, $GraphObject$Type} from "packages/dev/gigaherz/graph3/$GraphObject"
import {$ConduitShape, $ConduitShape$Type} from "packages/com/enderio/conduits/common/$ConduitShape"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ConduitGraphObject, $ConduitGraphObject$Type} from "packages/com/enderio/conduits/common/conduit/$ConduitGraphObject"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ConduitData, $ConduitData$Type} from "packages/com/enderio/api/conduit/$ConduitData"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ConduitBundle, $ConduitBundle$Type} from "packages/com/enderio/conduits/common/conduit/$ConduitBundle"

export class $ConduitBlockEntity extends $EnderBlockEntity {
static readonly "BUNDLE_MODEL_PROPERTY": $ModelProperty<($ConduitBundle)>
static readonly "POS": $ModelProperty<($BlockPos)>
static readonly "DATA": string
static readonly "INDEX": string

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "addType"(arg0: $ConduitType$Type<(any)>, arg1: $Player$Type): $RightClickAction
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getShape"(): $ConduitShape
public "getBundle"(): $ConduitBundle
public "menuProvider"(arg0: $Direction$Type, arg1: $ConduitType$Type<(any)>): $MenuProvider
public "onLoad"(): void
public "removeType"(arg0: $ConduitType$Type<(any)>, arg1: boolean): boolean
public "tryConnectTo"<T extends $ConduitData<(T)>>(arg0: $Direction$Type, arg1: $ConduitType$Type<(T)>, arg2: boolean, arg3: boolean, arg4: boolean): $Optional<($GraphObject<($Mergeable$Dummy)>)>
public "updateShape"(): void
public static "pushIOState"(arg0: $Direction$Type, arg1: $ConduitGraphObject$Type<(any)>, arg2: $DynamicConnectionState$Type): void
public "dropConnection"(arg0: $DynamicConnectionState$Type): void
public "everyTick"(): void
public "updateConnections"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type, arg3: boolean): void
public "getModelData"(): $ModelData
public "removeNeighborConnections"(arg0: $ConduitType$Type<(any)>): void
public "destroyAllConnections"(): void
public "removeTypeAndDelete"(arg0: $Player$Type, arg1: $ConduitType$Type<(any)>): void
public "getConduitItemHandler"(): $IItemHandler
public "handleConnectionStateUpdate"(arg0: $Direction$Type, arg1: $ConduitType$Type<(any)>, arg2: $DynamicConnectionState$Type): void
public "updateConnectionToData"(arg0: $ConduitType$Type<(any)>): void
public "handleExtendedDataUpdate"(arg0: $ConduitType$Type<(any)>, arg1: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "setLevel"(arg0: $Level$Type): void
public "onChunkUnloaded"(): void
public "hasType"(arg0: $ConduitType$Type<(any)>): boolean
public "stillValid"(arg0: $Player$Type): boolean
public "updateClient"(): void
get "shape"(): $ConduitShape
get "bundle"(): $ConduitBundle
get "modelData"(): $ModelData
get "conduitItemHandler"(): $IItemHandler
set "level"(value: $Level$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitBlockEntity$Type = ($ConduitBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitBlockEntity_ = $ConduitBlockEntity$Type;
}}
declare module "packages/com/enderio/base/common/item/$PaintedBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PaintedBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedBlockItem$Type = ($PaintedBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedBlockItem_ = $PaintedBlockItem$Type;
}}
declare module "packages/com/enderio/base/common/recipe/$GrindingBallRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$IGrindingBallData, $IGrindingBallData$Type} from "packages/com/enderio/api/grindingball/$IGrindingBallData"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$EnderRecipe, $EnderRecipe$Type} from "packages/com/enderio/core/common/recipes/$EnderRecipe"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $GrindingBallRecipe implements $IGrindingBallData, $EnderRecipe<($Container)> {

constructor(arg0: $ResourceLocation$Type, arg1: $Item$Type, arg2: float, arg3: float, arg4: float, arg5: integer)

public "getItem"(): $Item
public "getId"(): $ResourceLocation
public "getOutputMultiplier"(): float
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getPowerUse"(): float
public "getGrindingBallId"(): $ResourceLocation
public "getDurability"(): integer
public "getBonusMultiplier"(): float
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<($GrindingBallRecipe)>
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
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
get "item"(): $Item
get "id"(): $ResourceLocation
get "outputMultiplier"(): float
get "powerUse"(): float
get "grindingBallId"(): $ResourceLocation
get "durability"(): integer
get "bonusMultiplier"(): float
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<($GrindingBallRecipe)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
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
export type $GrindingBallRecipe$Type = ($GrindingBallRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrindingBallRecipe_ = $GrindingBallRecipe$Type;
}}
declare module "packages/com/enderio/conduits/common/conduit/block/$ConduitBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ConduitType, $ConduitType$Type} from "packages/com/enderio/api/conduit/$ConduitType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ConduitBlockEntity, $ConduitBlockEntity$Type} from "packages/com/enderio/conduits/common/conduit/block/$ConduitBlockEntity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$RightClickBlock$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ConduitBlock extends $Block implements $EntityBlock, $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
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

public static "canBeValidConnection"(arg0: $ConduitBlockEntity$Type, arg1: $ConduitType$Type<(any)>, arg2: $Direction$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public static "canBeOrIsValidConnection"(arg0: $ConduitBlockEntity$Type, arg1: $ConduitType$Type<(any)>, arg2: $Direction$Type): boolean
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $Fluid$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "handleShiftYeta"(arg0: $PlayerInteractEvent$RightClickBlock$Type): void
public "handleBlockPlace"(arg0: $BlockPlaceContext$Type): $Optional<($InteractionResult)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
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
export type $ConduitBlock$Type = ($ConduitBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitBlock_ = $ConduitBlock$Type;
}}
declare module "packages/com/enderio/base/common/enchantment/$EIOBaseEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $EIOBaseEnchantment extends $Enchantment {
 "slots": ($EquipmentSlot)[]
readonly "category": $EnchantmentCategory

constructor(arg0: $Enchantment$Rarity$Type, arg1: $EnchantmentCategory$Type, arg2: ($EquipmentSlot$Type)[], arg3: $Supplier$Type<(boolean)>)

public "getCategory"(): $EnchantmentCategory
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "isAllowedOnBooks"(): boolean
get "category"(): $EnchantmentCategory
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EIOBaseEnchantment$Type = ($EIOBaseEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EIOBaseEnchantment_ = $EIOBaseEnchantment$Type;
}}
declare module "packages/com/enderio/base/common/enchantment/$AutoSmeltEnchantment" {
import {$EIOBaseEnchantment, $EIOBaseEnchantment$Type} from "packages/com/enderio/base/common/enchantment/$EIOBaseEnchantment"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $AutoSmeltEnchantment extends $EIOBaseEnchantment {
 "slots": ($EquipmentSlot)[]
readonly "category": $EnchantmentCategory

constructor()

public "getMaxCost"(arg0: integer): integer
public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "isTreasureOnly"(): boolean
get "maxLevel"(): integer
get "treasureOnly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoSmeltEnchantment$Type = ($AutoSmeltEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoSmeltEnchantment_ = $AutoSmeltEnchantment$Type;
}}
declare module "packages/com/enderio/api/conduit/$ConduitGraph" {
import {$ConduitNode, $ConduitNode$Type} from "packages/com/enderio/api/conduit/$ConduitNode"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ConduitData, $ConduitData$Type} from "packages/com/enderio/api/conduit/$ConduitData"

export interface $ConduitGraph<T extends $ConduitData<(T)>> {

 "getNodes"(): $Collection<($ConduitNode<(T)>)>

(): $Collection<($ConduitNode<(T)>)>
}

export namespace $ConduitGraph {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitGraph$Type<T> = ($ConduitGraph<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitGraph_<T> = $ConduitGraph$Type<(T)>;
}}
declare module "packages/com/enderio/machines/common/recipe/$AlloySmeltingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$AlloySmeltingRecipe, $AlloySmeltingRecipe$Type} from "packages/com/enderio/machines/common/recipe/$AlloySmeltingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $AlloySmeltingRecipe$Serializer implements $RecipeSerializer<($AlloySmeltingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $AlloySmeltingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $AlloySmeltingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $AlloySmeltingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $AlloySmeltingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlloySmeltingRecipe$Serializer$Type = ($AlloySmeltingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlloySmeltingRecipe$Serializer_ = $AlloySmeltingRecipe$Serializer$Type;
}}
declare module "packages/com/enderio/base/common/block/$SilentPressurePlateBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PressurePlateBlock, $PressurePlateBlock$Type} from "packages/net/minecraft/world/level/block/$PressurePlateBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PressurePlateBlock$Sensitivity, $PressurePlateBlock$Sensitivity$Type} from "packages/net/minecraft/world/level/block/$PressurePlateBlock$Sensitivity"

export class $SilentPressurePlateBlock extends $PressurePlateBlock {
static readonly "POWERED": $BooleanProperty
readonly "sensitivity": $PressurePlateBlock$Sensitivity
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

constructor(arg0: $PressurePlateBlock$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SilentPressurePlateBlock$Type = ($SilentPressurePlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SilentPressurePlateBlock_ = $SilentPressurePlateBlock$Type;
}}
declare module "packages/com/enderio/base/common/block/$ReinforcedObsidianBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $ReinforcedObsidianBlock extends $Block {
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

public "canDropFromExplosion"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): boolean
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedObsidianBlock$Type = ($ReinforcedObsidianBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedObsidianBlock_ = $ReinforcedObsidianBlock$Type;
}}
declare module "packages/com/enderio/base/common/block/$SilentWeightedPressurePlateBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$WeightedPressurePlateBlock, $WeightedPressurePlateBlock$Type} from "packages/net/minecraft/world/level/block/$WeightedPressurePlateBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $SilentWeightedPressurePlateBlock extends $WeightedPressurePlateBlock {
static readonly "POWER": $IntegerProperty
readonly "maxWeight": integer
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

constructor(arg0: $WeightedPressurePlateBlock$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SilentWeightedPressurePlateBlock$Type = ($SilentWeightedPressurePlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SilentWeightedPressurePlateBlock_ = $SilentWeightedPressurePlateBlock$Type;
}}
declare module "packages/com/enderio/base/common/block/light/$PoweredLight" {
import {$Light, $Light$Type} from "packages/com/enderio/base/common/block/light/$Light"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PoweredLight extends $Light implements $EntityBlock {
readonly "wireless": boolean
static readonly "ENABLED": $BooleanProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: boolean, arg2: boolean)

public "isWireless"(): boolean
public "checkPoweredState"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "wireless"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredLight$Type = ($PoweredLight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoweredLight_ = $PoweredLight$Type;
}}
declare module "packages/com/enderio/machines/common/io/fluid/$MachineTankLayout" {
import {$MachineTankLayout$Builder, $MachineTankLayout$Builder$Type} from "packages/com/enderio/machines/common/io/fluid/$MachineTankLayout$Builder"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MachineFluidTank, $MachineFluidTank$Type} from "packages/com/enderio/machines/common/io/fluid/$MachineFluidTank"

export class $MachineTankLayout {


public static "builder"(): $MachineTankLayout$Builder
public "canInsert"(arg0: integer): boolean
public "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
public "getTankCapacity"(arg0: integer): integer
public "canExtract"(arg0: integer): boolean
public "createTanks"(): $List<($MachineFluidTank)>
public "getTankCount"(): integer
get "tankCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineTankLayout$Type = ($MachineTankLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineTankLayout_ = $MachineTankLayout$Type;
}}
declare module "packages/com/enderio/base/common/enchantment/$XPBoostEnchantment" {
import {$EIOBaseEnchantment, $EIOBaseEnchantment$Type} from "packages/com/enderio/base/common/enchantment/$EIOBaseEnchantment"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $XPBoostEnchantment extends $EIOBaseEnchantment {
 "slots": ($EquipmentSlot)[]
readonly "category": $EnchantmentCategory

constructor()

public "getMaxCost"(arg0: integer): integer
public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XPBoostEnchantment$Type = ($XPBoostEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XPBoostEnchantment_ = $XPBoostEnchantment$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$EnchanterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CountedIngredient, $CountedIngredient$Type} from "packages/com/enderio/core/common/recipes/$CountedIngredient"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$EnderRecipe, $EnderRecipe$Type} from "packages/com/enderio/core/common/recipes/$EnderRecipe"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $EnchanterRecipe implements $EnderRecipe<($Container)> {

constructor(arg0: $ResourceLocation$Type, arg1: $CountedIngredient$Type, arg2: $Enchantment$Type, arg3: integer)

public "getXPCostForLevel"(arg0: integer): integer
public "getBookForLevel"(arg0: integer): $ItemStack
public "getInput"(): $CountedIngredient
public "getId"(): $ResourceLocation
public "getEnchantmentLevel"(arg0: integer): integer
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getEnchantment"(): $Enchantment
public "getLapisForLevel"(arg0: integer): integer
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getInputAmountConsumed"(arg0: $Container$Type): integer
public "getCostMultiplier"(): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "getXPCost"(arg0: $Container$Type): integer
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
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
get "input"(): $CountedIngredient
get "id"(): $ResourceLocation
get "enchantment"(): $Enchantment
get "costMultiplier"(): integer
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
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
export type $EnchanterRecipe$Type = ($EnchanterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchanterRecipe_ = $EnchanterRecipe$Type;
}}
declare module "packages/com/enderio/base/common/recipe/$FireCraftingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$EnderRecipe, $EnderRecipe$Type} from "packages/com/enderio/core/common/recipes/$EnderRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $FireCraftingRecipe implements $EnderRecipe<($Container)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: integer, arg3: $List$Type<($Block$Type)>, arg4: $List$Type<($TagKey$Type<($Block$Type)>)>, arg5: $List$Type<($ResourceLocation$Type)>)

public "getBases"(): $List<($Block)>
public "getValidDimensions"(): $List<($ResourceLocation)>
public "getId"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getLootTable"(): $ResourceLocation
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "isBaseValid"(arg0: $Block$Type): boolean
public "isDimensionValid"(arg0: $ResourceKey$Type<($Level$Type)>): boolean
public "getMaxItemDrops"(): integer
public "getSerializer"(): $RecipeSerializer<($FireCraftingRecipe)>
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
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
get "bases"(): $List<($Block)>
get "validDimensions"(): $List<($ResourceLocation)>
get "id"(): $ResourceLocation
get "lootTable"(): $ResourceLocation
get "maxItemDrops"(): integer
get "serializer"(): $RecipeSerializer<($FireCraftingRecipe)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
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
export type $FireCraftingRecipe$Type = ($FireCraftingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireCraftingRecipe_ = $FireCraftingRecipe$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$SagMillingRecipe$Container" {
import {$RecipeWrapper, $RecipeWrapper$Type} from "packages/net/minecraftforge/items/wrapper/$RecipeWrapper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IGrindingBallData, $IGrindingBallData$Type} from "packages/com/enderio/api/grindingball/$IGrindingBallData"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"

export class $SagMillingRecipe$Container extends $RecipeWrapper {

constructor(arg0: $IItemHandlerModifiable$Type, arg1: $Supplier$Type<($IGrindingBallData$Type)>)

public "getGrindingBall"(): $IGrindingBallData
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "tryClear"(arg0: any): void
get "grindingBall"(): $IGrindingBallData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$Container$Type = ($SagMillingRecipe$Container);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SagMillingRecipe$Container_ = $SagMillingRecipe$Container$Type;
}}
declare module "packages/com/enderio/base/common/item/tool/$SoulVialItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$StoredEntityData, $StoredEntityData$Type} from "packages/com/enderio/api/capability/$StoredEntityData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/enderio/api/capability/$MultiCapabilityProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PlayerInteractEvent$EntityInteractSpecific, $PlayerInteractEvent$EntityInteractSpecific$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$EntityInteractSpecific"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IMultiCapabilityItem, $IMultiCapabilityItem$Type} from "packages/com/enderio/api/capability/$IMultiCapabilityItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IAdvancedTooltipProvider, $IAdvancedTooltipProvider$Type} from "packages/com/enderio/core/client/item/$IAdvancedTooltipProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FMLCommonSetupEvent, $FMLCommonSetupEvent$Type} from "packages/net/minecraftforge/fml/event/lifecycle/$FMLCommonSetupEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SoulVialItem extends $Item implements $IMultiCapabilityItem, $IAdvancedTooltipProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public static "onCommonSetup"(arg0: $FMLCommonSetupEvent$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "isFoil"(arg0: $ItemStack$Type): boolean
public static "getAllFilled"(): $List<($ItemStack)>
public static "setEntityType"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "addDetailedTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public "addCommonTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public static "getEntityData"(arg0: $ItemStack$Type): $Optional<($StoredEntityData)>
public static "onLivingInteract"(arg0: $PlayerInteractEvent$EntityInteractSpecific$Type): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $MultiCapabilityProvider$Type): $MultiCapabilityProvider
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "addBasicTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
get "allFilled"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulVialItem$Type = ($SoulVialItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulVialItem_ = $SoulVialItem$Type;
}}
declare module "packages/com/enderio/machines/common/blockentity/base/$MachineBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MachineState, $MachineState$Type} from "packages/com/enderio/machines/common/blockentity/$MachineState"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MachineFluidHandler, $MachineFluidHandler$Type} from "packages/com/enderio/machines/common/io/fluid/$MachineFluidHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnderBlockEntity, $EnderBlockEntity$Type} from "packages/com/enderio/core/common/blockentity/$EnderBlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/enderio/base/common/blockentity/$IWrenchable"
import {$RedstoneControl, $RedstoneControl$Type} from "packages/com/enderio/api/misc/$RedstoneControl"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$IIOConfig, $IIOConfig$Type} from "packages/com/enderio/api/io/$IIOConfig"
import {$MachineInventoryLayout, $MachineInventoryLayout$Type} from "packages/com/enderio/machines/common/io/item/$MachineInventoryLayout"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$MachineTankLayout, $MachineTankLayout$Type} from "packages/com/enderio/machines/common/io/fluid/$MachineTankLayout"
import {$MachineInventory, $MachineInventory$Type} from "packages/com/enderio/machines/common/io/item/$MachineInventory"

export class $MachineBlockEntity extends $EnderBlockEntity implements $MenuProvider, $IWrenchable {
static readonly "IO_CONFIG_PROPERTY": $ModelProperty<($IIOConfig)>
static readonly "DATA": string
static readonly "INDEX": string

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getInventory"(): $MachineInventory
public "getRange"(): integer
public "onLoad"(): void
public "getModelData"(): $ModelData
public "clientTick"(): void
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "stillValid"(arg0: $Player$Type): boolean
public "isRedstoneBlocked"(): boolean
public "getTankLayout"(): $MachineTankLayout
public "increaseRange"(): void
public "getIOConfig"(): $IIOConfig
public "getInventoryLayout"(): $MachineInventoryLayout
public "getMaxRange"(): integer
public "decreaseRange"(): void
public "setIsRangeVisible"(arg0: boolean): void
public "getMachineStates"(): $Set<($MachineState)>
public "setRedstoneControl"(arg0: $RedstoneControl$Type): void
public "getRedstoneControl"(): $RedstoneControl
public "isRangeVisible"(): boolean
public "onBlockEntityUsed"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "canActSlow"(): boolean
public "canOpenMenu"(): boolean
public "updateMachineState"(arg0: $MachineState$Type, arg1: boolean): void
public "canAct"(): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getFluidHandler"(): $MachineFluidHandler
public "getDisplayName"(): $Component
public "getLightEmission"(): integer
public "getColor"(): string
public "setRange"(arg0: integer): void
public "onWrenched"(arg0: $Player$Type, arg1: $Direction$Type): $InteractionResult
public "serverTick"(): void
public "createInventoryLayout"(): $MachineInventoryLayout
public "markCapabilityCacheDirty"(): void
public "getParticleLocation"(): $BlockPos
public "supportsRedstoneControl"(): boolean
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
get "inventory"(): $MachineInventory
get "range"(): integer
get "modelData"(): $ModelData
get "redstoneBlocked"(): boolean
get "tankLayout"(): $MachineTankLayout
get "iOConfig"(): $IIOConfig
get "inventoryLayout"(): $MachineInventoryLayout
get "maxRange"(): integer
get "machineStates"(): $Set<($MachineState)>
set "redstoneControl"(value: $RedstoneControl$Type)
get "redstoneControl"(): $RedstoneControl
get "rangeVisible"(): boolean
get "fluidHandler"(): $MachineFluidHandler
get "displayName"(): $Component
get "lightEmission"(): integer
get "color"(): string
set "range"(value: integer)
get "particleLocation"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineBlockEntity$Type = ($MachineBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineBlockEntity_ = $MachineBlockEntity$Type;
}}
declare module "packages/com/enderio/api/conduit/upgrade/$ConduitUpgrade" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConduitUpgrade {

}

export namespace $ConduitUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitUpgrade$Type = ($ConduitUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitUpgrade_ = $ConduitUpgrade$Type;
}}
declare module "packages/com/enderio/base/common/block/glass/$GlassLighting" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IIcon, $IIcon$Type} from "packages/com/enderio/api/misc/$IIcon"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Vector2i, $Vector2i$Type} from "packages/com/enderio/api/misc/$Vector2i"

export class $GlassLighting extends $Enum<($GlassLighting)> implements $IIcon {
static readonly "NONE": $GlassLighting
static readonly "BLOCKING": $GlassLighting
static readonly "EMITTING": $GlassLighting
static readonly "TEXTURE": $ResourceLocation


public static "values"(): ($GlassLighting)[]
public static "valueOf"(arg0: string): $GlassLighting
public "shortName"(): string
public "getTexturePosition"(): $Vector2i
public "getTextureLocation"(): $ResourceLocation
public "getIconSize"(): $Vector2i
public "getRenderSize"(): $Vector2i
public "englishName"(): string
public "shouldRender"(): boolean
public "getTextureSize"(): $Vector2i
public "getTooltip"(): $Component
get "texturePosition"(): $Vector2i
get "textureLocation"(): $ResourceLocation
get "iconSize"(): $Vector2i
get "renderSize"(): $Vector2i
get "textureSize"(): $Vector2i
get "tooltip"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassLighting$Type = (("emitting") | ("blocking") | ("none")) | ($GlassLighting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlassLighting_ = $GlassLighting$Type;
}}
declare module "packages/com/enderio/machines/common/io/item/$MachineInventory" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$MachineState, $MachineState$Type} from "packages/com/enderio/machines/common/blockentity/$MachineState"
import {$IIOConfig, $IIOConfig$Type} from "packages/com/enderio/api/io/$IIOConfig"
import {$MachineInventoryLayout, $MachineInventoryLayout$Type} from "packages/com/enderio/machines/common/io/item/$MachineInventoryLayout"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IEnderCapabilityProvider, $IEnderCapabilityProvider$Type} from "packages/com/enderio/api/capability/$IEnderCapabilityProvider"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $MachineInventory extends $ItemStackHandler implements $IEnderCapabilityProvider<($IItemHandler)> {

constructor(arg0: $IIOConfig$Type, arg1: $MachineInventoryLayout$Type)

public "getCapability"(arg0: $Direction$Type): $LazyOptional<($IItemHandler)>
public "getLayout"(): $MachineInventoryLayout
public "getConfig"(): $IIOConfig
public "invalidateCaps"(): void
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "updateMachineState"(arg0: $MachineState$Type, arg1: boolean): void
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getCapabilityType"(): $Capability<($IItemHandler)>
public "invalidateSide"(arg0: $Direction$Type): void
public "addSlotChangedCallback"(arg0: $IntConsumer$Type): void
get "layout"(): $MachineInventoryLayout
get "config"(): $IIOConfig
get "capabilityType"(): $Capability<($IItemHandler)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInventory$Type = ($MachineInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineInventory_ = $MachineInventory$Type;
}}
declare module "packages/com/enderio/machines/common/io/fluid/$MachineFluidTank" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$IFluidTank, $IFluidTank$Type} from "packages/net/minecraftforge/fluids/$IFluidTank"

export class $MachineFluidTank implements $IFluidTank {
static readonly "Capacity": string
static readonly "EMPTY": $MachineFluidTank

constructor(arg0: integer)
constructor(arg0: $FluidStack$Type, arg1: integer)

public "isEmpty"(): boolean
public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public static "from"(arg0: $CompoundTag$Type): $MachineFluidTank
public "save"(arg0: $CompoundTag$Type): $CompoundTag
public "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "getCapacity"(): integer
public "getFluidAmount"(): integer
public "isFluidValid"(arg0: $FluidStack$Type): boolean
public "getFluid"(): $FluidStack
public "setFluid"(arg0: $FluidStack$Type): void
get "empty"(): boolean
get "capacity"(): integer
get "fluidAmount"(): integer
get "fluid"(): $FluidStack
set "fluid"(value: $FluidStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineFluidTank$Type = ($MachineFluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineFluidTank_ = $MachineFluidTank$Type;
}}
declare module "packages/com/enderio/machines/common/block/$PaintedTravelAnchorBlock" {
import {$TravelAnchorBlock, $TravelAnchorBlock$Type} from "packages/com/enderio/machines/common/block/$TravelAnchorBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IPaintedBlock, $IPaintedBlock$Type} from "packages/com/enderio/base/common/block/painted/$IPaintedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PaintedTravelAnchorBlock extends $TravelAnchorBlock implements $IPaintedBlock {
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

public "getPaint"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Block
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getPaintState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getPaintedStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $ItemLike$Type): $ItemStack
public "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedTravelAnchorBlock$Type = ($PaintedTravelAnchorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedTravelAnchorBlock_ = $PaintedTravelAnchorBlock$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$SagMillingRecipe$BonusType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SagMillingRecipe$BonusType extends $Enum<($SagMillingRecipe$BonusType)> {
static readonly "NONE": $SagMillingRecipe$BonusType
static readonly "MULTIPLY_OUTPUT": $SagMillingRecipe$BonusType
static readonly "CHANCE_ONLY": $SagMillingRecipe$BonusType


public static "values"(): ($SagMillingRecipe$BonusType)[]
public static "valueOf"(arg0: string): $SagMillingRecipe$BonusType
public "useGrindingBall"(): boolean
public "canMultiply"(): boolean
public "doChance"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$BonusType$Type = (("chance_only") | ("multiply_output") | ("none")) | ($SagMillingRecipe$BonusType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SagMillingRecipe$BonusType_ = $SagMillingRecipe$BonusType$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$TankRecipe$Container" {
import {$RecipeWrapper, $RecipeWrapper$Type} from "packages/net/minecraftforge/items/wrapper/$RecipeWrapper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$MachineFluidTank, $MachineFluidTank$Type} from "packages/com/enderio/machines/common/io/fluid/$MachineFluidTank"

export class $TankRecipe$Container extends $RecipeWrapper {

constructor(arg0: $IItemHandlerModifiable$Type, arg1: $Supplier$Type<($MachineFluidTank$Type)>)

public "getFluidTank"(): $MachineFluidTank
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "tryClear"(arg0: any): void
get "fluidTank"(): $MachineFluidTank
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankRecipe$Container$Type = ($TankRecipe$Container);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankRecipe$Container_ = $TankRecipe$Container$Type;
}}
declare module "packages/com/enderio/armory/common/item/darksteel/upgrades/$DarkSteelUpgradeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SmithingTransformRecipe, $SmithingTransformRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmithingTransformRecipe"

export class $DarkSteelUpgradeRecipe extends $SmithingTransformRecipe {
readonly "template": $Ingredient
readonly "base": $Ingredient
readonly "addition": $Ingredient

constructor(arg0: $ResourceLocation$Type)

public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "isBaseIngredient"(arg0: $ItemStack$Type): boolean
public "isTemplateIngredient"(arg0: $ItemStack$Type): boolean
public "isAdditionIngredient"(arg0: $ItemStack$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelUpgradeRecipe$Type = ($DarkSteelUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkSteelUpgradeRecipe_ = $DarkSteelUpgradeRecipe$Type;
}}
declare module "packages/com/enderio/base/common/block/$ResettingLeverBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$LeverBlock, $LeverBlock$Type} from "packages/net/minecraft/world/level/block/$LeverBlock"

export class $ResettingLeverBlock extends $LeverBlock {
static readonly "POWERED": $BooleanProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
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

constructor(arg0: integer, arg1: boolean)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResettingLeverBlock$Type = ($ResettingLeverBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResettingLeverBlock_ = $ResettingLeverBlock$Type;
}}
declare module "packages/com/enderio/base/common/block/painted/$PaintedWallBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WallSide, $WallSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$WallSide"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$WallBlock, $WallBlock$Type} from "packages/net/minecraft/world/level/block/$WallBlock"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IPaintedBlock, $IPaintedBlock$Type} from "packages/com/enderio/base/common/block/painted/$IPaintedBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $PaintedWallBlock extends $WallBlock implements $EntityBlock, $IPaintedBlock {
static readonly "UP": $BooleanProperty
static readonly "EAST_WALL": $EnumProperty<($WallSide)>
static readonly "NORTH_WALL": $EnumProperty<($WallSide)>
static readonly "SOUTH_WALL": $EnumProperty<($WallSide)>
static readonly "WEST_WALL": $EnumProperty<($WallSide)>
static readonly "WATERLOGGED": $BooleanProperty
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

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPaintState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $ItemLike$Type): $ItemStack
public "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedWallBlock$Type = ($PaintedWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedWallBlock_ = $PaintedWallBlock$Type;
}}
declare module "packages/com/enderio/base/common/item/capacitors/$BaseCapacitorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseCapacitorItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseCapacitorItem$Type = ($BaseCapacitorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseCapacitorItem_ = $BaseCapacitorItem$Type;
}}
declare module "packages/com/enderio/machines/common/block/$MachineBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockEntityEntry, $BlockEntityEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntityEntry"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $MachineBlock extends $BaseEntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BlockEntityEntry$Type<(any)>)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BlockEntityEntry$Type<(any)>, arg2: $VoxelShape$Type)

public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineBlock$Type = ($MachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineBlock_ = $MachineBlock$Type;
}}
declare module "packages/com/enderio/base/common/recipe/$GrindingBallRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$GrindingBallRecipe, $GrindingBallRecipe$Type} from "packages/com/enderio/base/common/recipe/$GrindingBallRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $GrindingBallRecipe$Serializer implements $RecipeSerializer<($GrindingBallRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $GrindingBallRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $GrindingBallRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $GrindingBallRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $GrindingBallRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrindingBallRecipe$Serializer$Type = ($GrindingBallRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrindingBallRecipe$Serializer_ = $GrindingBallRecipe$Serializer$Type;
}}
declare module "packages/com/enderio/api/misc/$Vector2i" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $Vector2i extends $Record {
static readonly "MIN": $Vector2i
static readonly "MAX": $Vector2i
static readonly "ZERO": $Vector2i

constructor(x: integer, y: integer)

public "add"(arg0: integer, arg1: integer): $Vector2i
public "add"(arg0: $Vector2i$Type): $Vector2i
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): integer
public "expand"(arg0: integer): $Vector2i
public "y"(): integer
public "withY"(arg0: integer): $Vector2i
public "withX"(arg0: integer): $Vector2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vector2i$Type = ($Vector2i);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vector2i_ = $Vector2i$Type;
}}
declare module "packages/com/enderio/api/capability/$StoredEntityData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $StoredEntityData implements $INBTSerializable<($Tag)> {
static readonly "KEY_ID": string
static readonly "KEY_ENTITY": string

constructor()
constructor(arg0: $CompoundTag$Type, arg1: float)

public static "of"(arg0: $ResourceLocation$Type): $StoredEntityData
public static "of"(arg0: $LivingEntity$Type): $StoredEntityData
public static "empty"(): $StoredEntityData
public "serializeNBT"(): $Tag
public "deserializeNBT"(arg0: $Tag$Type): void
public "getEntityType"(): $Optional<($ResourceLocation)>
public "getEntityTag"(): $CompoundTag
public "getHealthState"(): $Optional<($Tuple<(float), (float)>)>
get "entityType"(): $Optional<($ResourceLocation)>
get "entityTag"(): $CompoundTag
get "healthState"(): $Optional<($Tuple<(float), (float)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoredEntityData$Type = ($StoredEntityData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StoredEntityData_ = $StoredEntityData$Type;
}}
declare module "packages/com/enderio/api/capacitor/$CapacitorModifier" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CapacitorModifier extends $Enum<($CapacitorModifier)> {
static readonly "ENERGY_CAPACITY": $CapacitorModifier
static readonly "ENERGY_USE": $CapacitorModifier
static readonly "FUEL_EFFICIENCY": $CapacitorModifier
static readonly "BURNING_ENERGY_GENERATION": $CapacitorModifier
static readonly "FIXED": $CapacitorModifier
readonly "id": $ResourceLocation
static readonly "SELECTABLE_MODIFIERS": $List<($CapacitorModifier)>


public static "values"(): ($CapacitorModifier)[]
public static "valueOf"(arg0: string): $CapacitorModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacitorModifier$Type = (("burning_energy_generation") | ("fuel_efficiency") | ("energy_use") | ("fixed") | ("energy_capacity")) | ($CapacitorModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapacitorModifier_ = $CapacitorModifier$Type;
}}
declare module "packages/com/enderio/base/common/item/filter/$FluidFilter" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidFilter extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: integer)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidFilter$Type = ($FluidFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidFilter_ = $FluidFilter$Type;
}}
declare module "packages/com/enderio/base/common/recipe/$ShapedEntityStorageRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ShapedEntityStorageRecipe, $ShapedEntityStorageRecipe$Type} from "packages/com/enderio/base/common/recipe/$ShapedEntityStorageRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedEntityStorageRecipe$Serializer implements $RecipeSerializer<($ShapedEntityStorageRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedEntityStorageRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedEntityStorageRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedEntityStorageRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedEntityStorageRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedEntityStorageRecipe$Serializer$Type = ($ShapedEntityStorageRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedEntityStorageRecipe$Serializer_ = $ShapedEntityStorageRecipe$Serializer$Type;
}}
declare module "packages/com/enderio/base/common/item/tool/$ColdFireIgniter" {
import {$CreativeModeTabModifier, $CreativeModeTabModifier$Type} from "packages/com/tterrag/registrate/util/$CreativeModeTabModifier"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ITabVariants, $ITabVariants$Type} from "packages/com/enderio/core/common/item/$ITabVariants"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/enderio/api/capability/$MultiCapabilityProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IMultiCapabilityItem, $IMultiCapabilityItem$Type} from "packages/com/enderio/api/capability/$IMultiCapabilityItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ColdFireIgniter extends $Item implements $IMultiCapabilityItem, $ITabVariants {
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
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "addAllVariants"(arg0: $CreativeModeTabModifier$Type): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $MultiCapabilityProvider$Type): $MultiCapabilityProvider
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColdFireIgniter$Type = ($ColdFireIgniter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColdFireIgniter_ = $ColdFireIgniter$Type;
}}
declare module "packages/com/enderio/conduits/common/conduit/$ConduitBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ConduitType, $ConduitType$Type} from "packages/com/enderio/api/conduit/$ConduitType"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConduitBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Supplier$Type<(any)>, arg1: $Block$Type, arg2: $Item$Properties$Type)

public "getType"(): $ConduitType<(any)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDescriptionId"(): string
public "place"(arg0: $BlockPlaceContext$Type): $InteractionResult
get "type"(): $ConduitType<(any)>
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitBlockItem$Type = ($ConduitBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitBlockItem_ = $ConduitBlockItem$Type;
}}
declare module "packages/com/enderio/base/common/particle/$RangeParticleType" {
import {$RangeParticleData, $RangeParticleData$Type} from "packages/com/enderio/base/common/particle/$RangeParticleData"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $RangeParticleType extends $ParticleType<($RangeParticleData)> {

constructor()

public "codec"(): $Codec<($RangeParticleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeParticleType$Type = ($RangeParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangeParticleType_ = $RangeParticleType$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$TankRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$EnderRecipe, $EnderRecipe$Type} from "packages/com/enderio/core/common/recipes/$EnderRecipe"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$TankRecipe$Container, $TankRecipe$Container$Type} from "packages/com/enderio/machines/common/recipe/$TankRecipe$Container"

export class $TankRecipe implements $EnderRecipe<($TankRecipe$Container)> {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: $FluidStack$Type, arg4: boolean)

public "matches"(arg0: $TankRecipe$Container$Type, arg1: $Level$Type): boolean
public "getInput"(): $Ingredient
public "getId"(): $ResourceLocation
public "getOutput"(): $ItemStack
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getFluid"(): $FluidStack
public "assemble"(arg0: $TankRecipe$Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "isEmptying"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $TankRecipe$Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
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
get "input"(): $Ingredient
get "id"(): $ResourceLocation
get "output"(): $ItemStack
get "fluid"(): $FluidStack
get "emptying"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
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
export type $TankRecipe$Type = ($TankRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankRecipe_ = $TankRecipe$Type;
}}
declare module "packages/com/enderio/base/common/item/misc/$EnderiosItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BowlFoodItem, $BowlFoodItem$Type} from "packages/net/minecraft/world/item/$BowlFoodItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnderiosItem extends $BowlFoodItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderiosItem$Type = ($EnderiosItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderiosItem_ = $EnderiosItem$Type;
}}
declare module "packages/com/enderio/base/common/item/tool/$ElectromagnetItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PoweredToggledItem, $PoweredToggledItem$Type} from "packages/com/enderio/base/common/item/tool/$PoweredToggledItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ElectromagnetItem extends $PoweredToggledItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectromagnetItem$Type = ($ElectromagnetItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectromagnetItem_ = $ElectromagnetItem$Type;
}}
declare module "packages/com/enderio/core/common/blockentity/$EnderBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IEnderCapabilityProvider, $IEnderCapabilityProvider$Type} from "packages/com/enderio/api/capability/$IEnderCapabilityProvider"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$NetworkDataSlot, $NetworkDataSlot$Type} from "packages/com/enderio/core/common/network/slot/$NetworkDataSlot"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnderBlockEntity extends $BlockEntity {
static readonly "DATA": string
static readonly "INDEX": string

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "sync"(): void
public static "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $EnderBlockEntity$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "invalidateCaps"(arg0: $Direction$Type): void
public "invalidateCaps"(): void
public "getUpdateTag"(): $CompoundTag
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "addDataSlot"(arg0: $NetworkDataSlot$Type<(any)>): void
public "setChanged"(): void
public "clientHandleBufferSync"(arg0: $FriendlyByteBuf$Type): void
public "serverHandleBufferChange"(arg0: $FriendlyByteBuf$Type): void
public "clientUpdateSlot"<T>(arg0: $NetworkDataSlot$Type<(T)>, arg1: T): void
public "addAfterSyncRunnable"(arg0: $Runnable$Type): void
public "addCapabilityProvider"(arg0: $IEnderCapabilityProvider$Type<(any)>): void
public "getCapabilityProviders"(): $Map<($Capability<(any)>), ($IEnderCapabilityProvider<(any)>)>
get "updateTag"(): $CompoundTag
get "capabilityProviders"(): $Map<($Capability<(any)>), ($IEnderCapabilityProvider<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderBlockEntity$Type = ($EnderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderBlockEntity_ = $EnderBlockEntity$Type;
}}
declare module "packages/com/enderio/conduits/common/conduit/$RightClickAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RightClickAction {

 "hasChanged"(): boolean
}

export namespace $RightClickAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RightClickAction$Type = ($RightClickAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RightClickAction_ = $RightClickAction$Type;
}}
declare module "packages/com/enderio/api/conduit/ticker/$ConduitTicker" {
import {$ConduitType, $ConduitType$Type} from "packages/com/enderio/api/conduit/$ConduitType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ConduitData, $ConduitData$Type} from "packages/com/enderio/api/conduit/$ConduitData"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ColoredRedstoneProvider, $ColoredRedstoneProvider$Type} from "packages/com/enderio/api/conduit/$ColoredRedstoneProvider"
import {$ConduitGraph, $ConduitGraph$Type} from "packages/com/enderio/api/conduit/$ConduitGraph"

export interface $ConduitTicker<T extends $ConduitData<(T)>> {

 "getTickRate"(): integer
 "tickGraph"(arg0: $ServerLevel$Type, arg1: $ConduitType$Type<(T)>, arg2: $ConduitGraph$Type<(T)>, arg3: $ColoredRedstoneProvider$Type): void
 "hasConnectionDelay"(): boolean
 "canForceConnect"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "canConnectTo"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "canConnectTo"(arg0: $ConduitType$Type<(any)>, arg1: $ConduitType$Type<(any)>): boolean
}

export namespace $ConduitTicker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitTicker$Type<T> = ($ConduitTicker<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitTicker_<T> = $ConduitTicker$Type<(T)>;
}}
declare module "packages/com/enderio/api/conduit/$ConduitType$ConduitConnectionData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RedstoneControl, $RedstoneControl$Type} from "packages/com/enderio/api/misc/$RedstoneControl"

export class $ConduitType$ConduitConnectionData extends $Record {

constructor(isInsert: boolean, isExtract: boolean, control: $RedstoneControl$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "control"(): $RedstoneControl
public "isExtract"(): boolean
public "isInsert"(): boolean
get "extract"(): boolean
get "insert"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitType$ConduitConnectionData$Type = ($ConduitType$ConduitConnectionData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitType$ConduitConnectionData_ = $ConduitType$ConduitConnectionData$Type;
}}
declare module "packages/com/enderio/api/conduit/$ConduitNode$IOState" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RedstoneControl, $RedstoneControl$Type} from "packages/com/enderio/api/misc/$RedstoneControl"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ColorControl, $ColorControl$Type} from "packages/com/enderio/api/misc/$ColorControl"

export class $ConduitNode$IOState extends $Record {

constructor(insert: $Optional$Type<($ColorControl$Type)>, extract: $Optional$Type<($ColorControl$Type)>, control: $RedstoneControl$Type, redstoneChannel: $ColorControl$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "extract"(): $Optional<($ColorControl)>
public "insert"(): $Optional<($ColorControl)>
public static "of"(arg0: $ColorControl$Type, arg1: $ColorControl$Type, arg2: $RedstoneControl$Type, arg3: $ColorControl$Type): $ConduitNode$IOState
public "control"(): $RedstoneControl
public "isExtract"(): boolean
public "isInsert"(): boolean
public "redstoneChannel"(): $ColorControl
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitNode$IOState$Type = ($ConduitNode$IOState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitNode$IOState_ = $ConduitNode$IOState$Type;
}}
declare module "packages/com/enderio/base/common/item/tool/$TravelStaffItem" {
import {$CreativeModeTabModifier, $CreativeModeTabModifier$Type} from "packages/com/tterrag/registrate/util/$CreativeModeTabModifier"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ITabVariants, $ITabVariants$Type} from "packages/com/enderio/core/common/item/$ITabVariants"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/enderio/api/capability/$MultiCapabilityProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IMultiCapabilityItem, $IMultiCapabilityItem$Type} from "packages/com/enderio/api/capability/$IMultiCapabilityItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IAdvancedTooltipProvider, $IAdvancedTooltipProvider$Type} from "packages/com/enderio/core/client/item/$IAdvancedTooltipProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TravelStaffItem extends $Item implements $IMultiCapabilityItem, $IAdvancedTooltipProvider, $ITabVariants {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "consumeResources"(arg0: $ItemStack$Type): void
public "hasResources"(arg0: $ItemStack$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getMaxEnergy"(): integer
public "addAllVariants"(arg0: $CreativeModeTabModifier$Type): void
public "performAction"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
public "addCommonTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $MultiCapabilityProvider$Type): $MultiCapabilityProvider
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "addDetailedTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelStaffItem$Type = ($TravelStaffItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TravelStaffItem_ = $TravelStaffItem$Type;
}}
declare module "packages/com/enderio/base/common/block/painted/$SinglePaintedBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IPaintedBlock, $IPaintedBlock$Type} from "packages/com/enderio/base/common/block/painted/$IPaintedBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $SinglePaintedBlock extends $Block implements $EntityBlock, $IPaintedBlock {
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

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPaintState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $ItemLike$Type): $ItemStack
public "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SinglePaintedBlock$Type = ($SinglePaintedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SinglePaintedBlock_ = $SinglePaintedBlock$Type;
}}
declare module "packages/com/enderio/base/common/item/tool/$ExperienceRodItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExperienceRodItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperienceRodItem$Type = ($ExperienceRodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperienceRodItem_ = $ExperienceRodItem$Type;
}}
declare module "packages/com/enderio/conduits/common/conduit/connection/$DynamicConnectionState" {
import {$ConduitType, $ConduitType$Type} from "packages/com/enderio/api/conduit/$ConduitType"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RedstoneControl, $RedstoneControl$Type} from "packages/com/enderio/api/misc/$RedstoneControl"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SlotType, $SlotType$Type} from "packages/com/enderio/api/conduit/$SlotType"
import {$ConnectionState, $ConnectionState$Type} from "packages/com/enderio/conduits/common/conduit/connection/$ConnectionState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ColorControl, $ColorControl$Type} from "packages/com/enderio/api/misc/$ColorControl"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DynamicConnectionState extends $Record implements $ConnectionState {

constructor(isInsert: boolean, insertChannel: $ColorControl$Type, isExtract: boolean, extractChannel: $ColorControl$Type, control: $RedstoneControl$Type, redstoneChannel: $ColorControl$Type, filterInsert: $ItemStack$Type, filterExtract: $ItemStack$Type, upgradeExtract: $ItemStack$Type)

public "withItems"(arg0: $DynamicConnectionState$Type): $DynamicConnectionState
public static "defaultConnection"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $ConduitType$Type<(any)>): $DynamicConnectionState
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getItem"(arg0: $SlotType$Type): $ItemStack
public "control"(): $RedstoneControl
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $DynamicConnectionState
public "isExtract"(): boolean
public "extractChannel"(): $ColorControl
public "insertChannel"(): $ColorControl
public "filterInsert"(): $ItemStack
public "upgradeExtract"(): $ItemStack
public "filterExtract"(): $ItemStack
public "isConnection"(): boolean
public "withColor"(arg0: boolean, arg1: $ColorControl$Type): $DynamicConnectionState
public "isInsert"(): boolean
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "withRedstoneChannel"(arg0: $ColorControl$Type): $DynamicConnectionState
public "withoutConnection"(): $DynamicConnectionState
public "withEnabled"(arg0: boolean, arg1: boolean): $DynamicConnectionState
public "withRedstoneMode"(arg0: $RedstoneControl$Type): $DynamicConnectionState
public "redstoneChannel"(): $ColorControl
public "withItem"(arg0: $SlotType$Type, arg1: $ItemStack$Type): $DynamicConnectionState
get "extract"(): boolean
get "connection"(): boolean
get "insert"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicConnectionState$Type = ($DynamicConnectionState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicConnectionState_ = $DynamicConnectionState$Type;
}}
declare module "packages/com/enderio/api/conduit/$ColoredRedstoneProvider" {
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ColorControl, $ColorControl$Type} from "packages/com/enderio/api/misc/$ColorControl"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ColoredRedstoneProvider {

 "isRedstoneActive"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $ColorControl$Type): boolean

(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $ColorControl$Type): boolean
}

export namespace $ColoredRedstoneProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredRedstoneProvider$Type = ($ColoredRedstoneProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColoredRedstoneProvider_ = $ColoredRedstoneProvider$Type;
}}
declare module "packages/com/enderio/machines/common/io/fluid/$MachineTankLayout$Builder" {
import {$TankAccess, $TankAccess$Type} from "packages/com/enderio/machines/common/io/fluid/$TankAccess"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$MachineTankLayout, $MachineTankLayout$Type} from "packages/com/enderio/machines/common/io/fluid/$MachineTankLayout"

export class $MachineTankLayout$Builder {

constructor()

public "build"(): $MachineTankLayout
public "tank"(arg0: $TankAccess$Type, arg1: integer, arg2: boolean, arg3: boolean, arg4: $Predicate$Type<($FluidStack$Type)>): $MachineTankLayout$Builder
public "tank"(arg0: $TankAccess$Type, arg1: integer, arg2: $Predicate$Type<($FluidStack$Type)>): $MachineTankLayout$Builder
public "tank"(arg0: $TankAccess$Type, arg1: integer): $MachineTankLayout$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineTankLayout$Builder$Type = ($MachineTankLayout$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineTankLayout$Builder_ = $MachineTankLayout$Builder$Type;
}}
declare module "packages/com/enderio/base/common/block/painted/$PaintedSlabBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SlabType, $SlabType$Type} from "packages/net/minecraft/world/level/block/state/properties/$SlabType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$SlabBlock, $SlabBlock$Type} from "packages/net/minecraft/world/level/block/$SlabBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IPaintedBlock, $IPaintedBlock$Type} from "packages/com/enderio/base/common/block/painted/$IPaintedBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $PaintedSlabBlock extends $SlabBlock implements $EntityBlock, $IPaintedBlock {
static readonly "TYPE": $EnumProperty<($SlabType)>
static readonly "WATERLOGGED": $BooleanProperty
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

public "getPaint"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Block
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPaintState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getPaintedStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $ItemLike$Type): $ItemStack
public "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedSlabBlock$Type = ($PaintedSlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedSlabBlock_ = $PaintedSlabBlock$Type;
}}
declare module "packages/com/enderio/base/common/item/misc/$LocationPrintoutItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$CoordinateSelection, $CoordinateSelection$Type} from "packages/com/enderio/api/capability/$CoordinateSelection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/enderio/api/capability/$MultiCapabilityProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IMultiCapabilityItem, $IMultiCapabilityItem$Type} from "packages/com/enderio/api/capability/$IMultiCapabilityItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LocationPrintoutItem extends $Item implements $IMultiCapabilityItem {
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
public static "setSelection"(arg0: $ItemStack$Type, arg1: $CoordinateSelection$Type): void
public static "getSelection"(arg0: $ItemStack$Type): $Optional<($CoordinateSelection)>
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $MultiCapabilityProvider$Type): $MultiCapabilityProvider
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocationPrintoutItem$Type = ($LocationPrintoutItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocationPrintoutItem_ = $LocationPrintoutItem$Type;
}}
declare module "packages/com/enderio/base/common/block/light/$LightNode" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $LightNode extends $Block implements $EntityBlock {
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

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $Fluid$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightNode$Type = ($LightNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightNode_ = $LightNode$Type;
}}
declare module "packages/com/enderio/base/common/enchantment/$RepellentEnchantment" {
import {$EIOBaseEnchantment, $EIOBaseEnchantment$Type} from "packages/com/enderio/base/common/enchantment/$EIOBaseEnchantment"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RepellentEnchantment extends $EIOBaseEnchantment {
 "slots": ($EquipmentSlot)[]
readonly "category": $EnchantmentCategory

constructor()

public "getMaxCost"(arg0: integer): integer
public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "doPostHurt"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepellentEnchantment$Type = ($RepellentEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepellentEnchantment_ = $RepellentEnchantment$Type;
}}
declare module "packages/com/enderio/base/common/item/$PaintedSlabBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PaintedBlockItem, $PaintedBlockItem$Type} from "packages/com/enderio/base/common/item/$PaintedBlockItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PaintedSlabBlockItem extends $PaintedBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedSlabBlockItem$Type = ($PaintedSlabBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedSlabBlockItem_ = $PaintedSlabBlockItem$Type;
}}
declare module "packages/com/enderio/machines/common/io/item/$MultiSlotAccess" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$SingleSlotAccess, $SingleSlotAccess$Type} from "packages/com/enderio/machines/common/io/item/$SingleSlotAccess"

export class $MultiSlotAccess {

constructor()

public "get"(arg0: integer): $SingleSlotAccess
public static "wrap"(arg0: $SingleSlotAccess$Type): $MultiSlotAccess
public "size"(): integer
public "contains"(arg0: integer): boolean
public "getAccesses"(): $List<($SingleSlotAccess)>
get "accesses"(): $List<($SingleSlotAccess)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiSlotAccess$Type = ($MultiSlotAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiSlotAccess_ = $MultiSlotAccess$Type;
}}
declare module "packages/com/enderio/api/misc/$RedstoneControl" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IIcon, $IIcon$Type} from "packages/com/enderio/api/misc/$IIcon"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Vector2i, $Vector2i$Type} from "packages/com/enderio/api/misc/$Vector2i"

export class $RedstoneControl extends $Enum<($RedstoneControl)> implements $IIcon {
static readonly "ALWAYS_ACTIVE": $RedstoneControl
static readonly "ACTIVE_WITH_SIGNAL": $RedstoneControl
static readonly "ACTIVE_WITHOUT_SIGNAL": $RedstoneControl
static readonly "NEVER_ACTIVE": $RedstoneControl


public static "values"(): ($RedstoneControl)[]
public static "valueOf"(arg0: string): $RedstoneControl
public "isActive"(arg0: boolean): boolean
public "getTexturePosition"(): $Vector2i
public "getTextureSize"(): $Vector2i
public "getTextureLocation"(): $ResourceLocation
public "getIconSize"(): $Vector2i
public "getTooltip"(): $Component
public "getRenderSize"(): $Vector2i
public "shouldRender"(): boolean
get "texturePosition"(): $Vector2i
get "textureSize"(): $Vector2i
get "textureLocation"(): $ResourceLocation
get "iconSize"(): $Vector2i
get "tooltip"(): $Component
get "renderSize"(): $Vector2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneControl$Type = (("never_active") | ("active_without_signal") | ("always_active") | ("active_with_signal")) | ($RedstoneControl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneControl_ = $RedstoneControl$Type;
}}
declare module "packages/com/enderio/machines/common/item/$FluidTankItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IAdvancedTooltipProvider, $IAdvancedTooltipProvider$Type} from "packages/com/enderio/core/client/item/$IAdvancedTooltipProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$MachineBlock, $MachineBlock$Type} from "packages/com/enderio/machines/common/block/$MachineBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidTankItem extends $BlockItem implements $IAdvancedTooltipProvider {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $MachineBlock$Type, arg1: $Item$Properties$Type, arg2: integer)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "addCommonTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public "getMaxStackSize"(arg0: $ItemStack$Type): integer
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "addDetailedTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankItem$Type = ($FluidTankItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTankItem_ = $FluidTankItem$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$TankRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TankRecipe, $TankRecipe$Type} from "packages/com/enderio/machines/common/recipe/$TankRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $TankRecipe$Serializer implements $RecipeSerializer<($TankRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $TankRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $TankRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $TankRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $TankRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankRecipe$Serializer$Type = ($TankRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankRecipe$Serializer_ = $TankRecipe$Serializer$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$SoulBindingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SoulBindingRecipe, $SoulBindingRecipe$Type} from "packages/com/enderio/machines/common/recipe/$SoulBindingRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SoulBindingRecipe$Serializer implements $RecipeSerializer<($SoulBindingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SoulBindingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SoulBindingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SoulBindingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SoulBindingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulBindingRecipe$Serializer$Type = ($SoulBindingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulBindingRecipe$Serializer_ = $SoulBindingRecipe$Serializer$Type;
}}
declare module "packages/com/enderio/base/common/item/capacitors/$LootCapacitorItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/enderio/api/capability/$MultiCapabilityProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IMultiCapabilityItem, $IMultiCapabilityItem$Type} from "packages/com/enderio/api/capability/$IMultiCapabilityItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$BaseCapacitorItem, $BaseCapacitorItem$Type} from "packages/com/enderio/base/common/item/capacitors/$BaseCapacitorItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootCapacitorItem extends $BaseCapacitorItem implements $IMultiCapabilityItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getName"(arg0: $ItemStack$Type): $Component
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $MultiCapabilityProvider$Type): $MultiCapabilityProvider
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "isRepairable"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCapacitorItem$Type = ($LootCapacitorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCapacitorItem_ = $LootCapacitorItem$Type;
}}
declare module "packages/com/enderio/base/common/block/$ColdFireBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$FireBlock, $FireBlock$Type} from "packages/net/minecraft/world/level/block/$FireBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ColdFireBlock extends $FireBlock {
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "UP": $BooleanProperty
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
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getStateWithAge"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColdFireBlock$Type = ($ColdFireBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColdFireBlock_ = $ColdFireBlock$Type;
}}
declare module "packages/com/enderio/core/common/recipes/$OutputStack" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $OutputStack extends $Record {
static readonly "EMPTY": $OutputStack

constructor(stack: $Either$Type<($ItemStack$Type), ($FluidStack$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "of"(arg0: $FluidStack$Type): $OutputStack
public static "of"(arg0: $ItemStack$Type): $OutputStack
public "stack"(): $Either<($ItemStack), ($FluidStack)>
public "getItem"(): $ItemStack
public static "fromNBT"(arg0: $CompoundTag$Type): $OutputStack
public "serializeNBT"(): $CompoundTag
public "getFluid"(): $FluidStack
public "isFluid"(): boolean
public "isItem"(): boolean
get "empty"(): boolean
get "item"(): $ItemStack
get "fluid"(): $FluidStack
get "fluid"(): boolean
get "item"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputStack$Type = ($OutputStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutputStack_ = $OutputStack$Type;
}}
declare module "packages/com/enderio/api/conduit/$ConduitMenuData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConduitMenuData {

 "showRedstoneExtract"(): boolean
 "hasFilterExtract"(): boolean
 "showColorInsert"(): boolean
 "showBarSeperator"(): boolean
 "showBothEnable"(): boolean
 "showColorExtract"(): boolean
 "hasFilterInsert"(): boolean
 "hasUpgrade"(): boolean
}

export namespace $ConduitMenuData {
const REDSTONE: $ConduitMenuData
const ITEM: $ConduitMenuData
const ENERGY: $ConduitMenuData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitMenuData$Type = ($ConduitMenuData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitMenuData_ = $ConduitMenuData$Type;
}}
declare module "packages/com/enderio/api/io/$IIOConfig" {
import {$IOMode, $IOMode$Type} from "packages/com/enderio/api/io/$IOMode"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$IEnderCapabilityProvider, $IEnderCapabilityProvider$Type} from "packages/com/enderio/api/capability/$IEnderCapabilityProvider"
import {$ISideConfig, $ISideConfig$Type} from "packages/com/enderio/api/capability/$ISideConfig"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $IIOConfig extends $INBTSerializable<($CompoundTag)>, $IEnderCapabilityProvider<($ISideConfig)> {

 "setMode"(arg0: $Direction$Type, arg1: $IOMode$Type): void
 "getMode"(arg0: $Direction$Type): $IOMode
 "supportsMode"(arg0: $Direction$Type, arg1: $IOMode$Type): boolean
 "cycleMode"(arg0: $Direction$Type): void
 "renderOverlay"(): boolean
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "getCapability"(arg0: $Direction$Type): $LazyOptional<($ISideConfig)>
 "invalidateCaps"(): void
 "getCapabilityType"(): $Capability<($ISideConfig)>
 "invalidateSide"(arg0: $Direction$Type): void
}

export namespace $IIOConfig {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIOConfig$Type = ($IIOConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIOConfig_ = $IIOConfig$Type;
}}
declare module "packages/com/enderio/api/filter/$ResourceFilter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ResourceFilter {

}

export namespace $ResourceFilter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceFilter$Type = ($ResourceFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceFilter_ = $ResourceFilter$Type;
}}
declare module "packages/com/enderio/base/common/item/tool/$LevitationStaffItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/enderio/api/capability/$MultiCapabilityProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PoweredToggledItem, $PoweredToggledItem$Type} from "packages/com/enderio/base/common/item/tool/$PoweredToggledItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LevitationStaffItem extends $PoweredToggledItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $MultiCapabilityProvider$Type): $MultiCapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevitationStaffItem$Type = ($LevitationStaffItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevitationStaffItem_ = $LevitationStaffItem$Type;
}}
declare module "packages/com/enderio/base/common/item/misc/$CreativeTabIconItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CreativeTabIconItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeTabIconItem$Type = ($CreativeTabIconItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeTabIconItem_ = $CreativeTabIconItem$Type;
}}
declare module "packages/com/enderio/base/common/enchantment/$WitherEnchantment" {
import {$EIOBaseEnchantment, $EIOBaseEnchantment$Type} from "packages/com/enderio/base/common/enchantment/$EIOBaseEnchantment"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WitherEnchantment extends $EIOBaseEnchantment {
 "slots": ($EquipmentSlot)[]
readonly "category": $EnchantmentCategory

constructor()

public "getMaxCost"(arg0: integer): integer
public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "doPostAttack"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitherEnchantment$Type = ($WitherEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WitherEnchantment_ = $WitherEnchantment$Type;
}}
declare module "packages/com/enderio/conduits/common/conduit/$ConduitGraphObject" {
import {$DynamicConnectionState, $DynamicConnectionState$Type} from "packages/com/enderio/conduits/common/conduit/connection/$DynamicConnectionState"
import {$ConduitNode, $ConduitNode$Type} from "packages/com/enderio/api/conduit/$ConduitNode"
import {$ConduitUpgrade, $ConduitUpgrade$Type} from "packages/com/enderio/api/conduit/upgrade/$ConduitUpgrade"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$GraphObject, $GraphObject$Type} from "packages/dev/gigaherz/graph3/$GraphObject"
import {$Mergeable$Dummy, $Mergeable$Dummy$Type} from "packages/dev/gigaherz/graph3/$Mergeable$Dummy"
import {$Graph, $Graph$Type} from "packages/dev/gigaherz/graph3/$Graph"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ConduitNode$IOState, $ConduitNode$IOState$Type} from "packages/com/enderio/api/conduit/$ConduitNode$IOState"
import {$ConduitData, $ConduitData$Type} from "packages/com/enderio/api/conduit/$ConduitData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ConduitGraph, $ConduitGraph$Type} from "packages/com/enderio/api/conduit/$ConduitGraph"
import {$ResourceFilter, $ResourceFilter$Type} from "packages/com/enderio/api/filter/$ResourceFilter"

export class $ConduitGraphObject<T extends $ConduitData<(T)>> implements $GraphObject<($Mergeable$Dummy)>, $ConduitNode<(T)> {

constructor(arg0: $BlockPos$Type, arg1: T)

public "pushState"(arg0: $Direction$Type, arg1: $DynamicConnectionState$Type): void
public "deepCopy"(): $ConduitGraphObject<(T)>
public "getConduitData"(): T
public "setGraph"(arg0: $Graph$Type<($Mergeable$Dummy$Type)>): void
public "getParentGraph"(): $ConduitGraph<(T)>
public "getIOState"(arg0: $Direction$Type): $Optional<($ConduitNode$IOState)>
public "clearState"(arg0: $Direction$Type): void
public "getExtractFilter"(arg0: $Direction$Type): $ResourceFilter
public "hashContents"(): integer
public "getUpgrade"(arg0: $Direction$Type): $ConduitUpgrade
public "getInsertFilter"(arg0: $Direction$Type): $ResourceFilter
public "getPos"(): $BlockPos
public "getGraph"(): $Graph<($Mergeable$Dummy)>
get "conduitData"(): T
set "graph"(value: $Graph$Type<($Mergeable$Dummy$Type)>)
get "parentGraph"(): $ConduitGraph<(T)>
get "pos"(): $BlockPos
get "graph"(): $Graph<($Mergeable$Dummy)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitGraphObject$Type<T> = ($ConduitGraphObject<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitGraphObject_<T> = $ConduitGraphObject$Type<(T)>;
}}
declare module "packages/com/enderio/base/common/block/$DarkSteelLadderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LadderBlock, $LadderBlock$Type} from "packages/net/minecraft/world/level/block/$LadderBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $DarkSteelLadderBlock extends $LadderBlock {
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelLadderBlock$Type = ($DarkSteelLadderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkSteelLadderBlock_ = $DarkSteelLadderBlock$Type;
}}
declare module "packages/com/enderio/base/common/block/glass/$FusedQuartzBlock" {
import {$GlassIdentifier, $GlassIdentifier$Type} from "packages/com/enderio/base/common/block/glass/$GlassIdentifier"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GlassLighting, $GlassLighting$Type} from "packages/com/enderio/base/common/block/glass/$GlassLighting"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractGlassBlock, $AbstractGlassBlock$Type} from "packages/net/minecraft/world/level/block/$AbstractGlassBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GlassCollisionPredicate, $GlassCollisionPredicate$Type} from "packages/com/enderio/base/common/block/glass/$GlassCollisionPredicate"

export class $FusedQuartzBlock extends $AbstractGlassBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $GlassIdentifier$Type, arg2: $DyeColor$Type)

public "getCollisionPredicate"(): $GlassCollisionPredicate
public "getDescriptionId"(): string
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getExplosionResistance"(): float
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getGlassLighting"(): $GlassLighting
get "collisionPredicate"(): $GlassCollisionPredicate
get "descriptionId"(): string
get "explosionResistance"(): float
get "glassLighting"(): $GlassLighting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FusedQuartzBlock$Type = ($FusedQuartzBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FusedQuartzBlock_ = $FusedQuartzBlock$Type;
}}
declare module "packages/com/enderio/base/common/block/painted/$PaintedFenceBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IPaintedBlock, $IPaintedBlock$Type} from "packages/com/enderio/base/common/block/painted/$IPaintedBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$FenceBlock, $FenceBlock$Type} from "packages/net/minecraft/world/level/block/$FenceBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $PaintedFenceBlock extends $FenceBlock implements $EntityBlock, $IPaintedBlock {
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPaintState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $ItemLike$Type): $ItemStack
public "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedFenceBlock$Type = ($PaintedFenceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedFenceBlock_ = $PaintedFenceBlock$Type;
}}
declare module "packages/com/enderio/api/conduit/$ConduitData" {
import {$ConduitType, $ConduitType$Type} from "packages/com/enderio/api/conduit/$ConduitType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConduitData$EmptyConduitData, $ConduitData$EmptyConduitData$Type} from "packages/com/enderio/api/conduit/$ConduitData$EmptyConduitData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ConduitData<T extends $ConduitData<(T)>> extends $INBTSerializable<($CompoundTag)> {

 "cast"<Z extends $ConduitData<(Z)>>(): Z
 "deepCopy"(): T
 "onCreated"(arg0: $ConduitType$Type<(any)>, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
 "onRemoved"(arg0: $ConduitType$Type<(any)>, arg1: $Level$Type, arg2: $BlockPos$Type): void
 "castTo"<Z extends $ConduitData<(Z)>>(arg0: $Class$Type<(Z)>): Z
 "updateConnection"(arg0: $Set$Type<($Direction$Type)>): void
 "onConnectTo"(arg0: T): void
 "serializeGuiNBT"(): $CompoundTag
 "canConnectTo"(arg0: T): boolean
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $ConduitData {
const EMPTY: $ConduitData$EmptyConduitData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitData$Type<T> = ($ConduitData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitData_<T> = $ConduitData$Type<(T)>;
}}
declare module "packages/com/enderio/machines/common/block/$ProgressMachineBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MachineBlock, $MachineBlock$Type} from "packages/com/enderio/machines/common/block/$MachineBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntityEntry, $BlockEntityEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntityEntry"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ProgressMachineBlock extends $MachineBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BlockEntityEntry$Type<(any)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressMachineBlock$Type = ($ProgressMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressMachineBlock_ = $ProgressMachineBlock$Type;
}}
declare module "packages/com/enderio/api/conduit/$ConduitData$EmptyConduitData" {
import {$ConduitType, $ConduitType$Type} from "packages/com/enderio/api/conduit/$ConduitType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ConduitData, $ConduitData$Type} from "packages/com/enderio/api/conduit/$ConduitData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ConduitData$EmptyConduitData implements $ConduitData<($ConduitData$EmptyConduitData)> {

constructor()

public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "cast"<Z extends $ConduitData<(Z)>>(): Z
public "deepCopy"(): $ConduitData$EmptyConduitData
public "onCreated"(arg0: $ConduitType$Type<(any)>, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "onRemoved"(arg0: $ConduitType$Type<(any)>, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "castTo"<Z extends $ConduitData<(Z)>>(arg0: $Class$Type<(Z)>): Z
public "updateConnection"(arg0: $Set$Type<($Direction$Type)>): void
public "onConnectTo"(arg0: $ConduitData$EmptyConduitData$Type): void
public "serializeGuiNBT"(): $CompoundTag
public "canConnectTo"(arg0: $ConduitData$EmptyConduitData$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitData$EmptyConduitData$Type = ($ConduitData$EmptyConduitData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitData$EmptyConduitData_ = $ConduitData$EmptyConduitData$Type;
}}
declare module "packages/com/enderio/machines/common/io/fluid/$MachineFluidHandler" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IEnderCapabilityProvider, $IEnderCapabilityProvider$Type} from "packages/com/enderio/api/capability/$IEnderCapabilityProvider"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IIOConfig, $IIOConfig$Type} from "packages/com/enderio/api/io/$IIOConfig"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$MachineTankLayout, $MachineTankLayout$Type} from "packages/com/enderio/machines/common/io/fluid/$MachineTankLayout"
import {$MachineFluidTank, $MachineFluidTank$Type} from "packages/com/enderio/machines/common/io/fluid/$MachineFluidTank"

export class $MachineFluidHandler implements $IFluidHandler, $IEnderCapabilityProvider<($IFluidHandler)>, $INBTSerializable<($CompoundTag)> {
static readonly "TANK_INDEX": string
static readonly "TANKS": string
static readonly "TANK_LIST_SIZE": string

constructor(arg0: $IIOConfig$Type, arg1: $MachineTankLayout$Type)

public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "getCapability"(arg0: $Direction$Type): $LazyOptional<($IFluidHandler)>
public "getLayout"(): $MachineTankLayout
public "getConfig"(): $IIOConfig
public "getTanks"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
public "getTankCapacity"(arg0: integer): integer
public "invalidateCaps"(): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
/**
 * 
 * @deprecated
 */
public "getTank"(arg0: integer): $MachineFluidTank
public "setFluidInTank"(arg0: integer, arg1: $FluidStack$Type): void
public "getCapabilityType"(): $Capability<($IFluidHandler)>
public "invalidateSide"(arg0: $Direction$Type): void
public "addSlotChangedCallback"(arg0: $IntConsumer$Type): void
get "layout"(): $MachineTankLayout
get "config"(): $IIOConfig
get "tanks"(): integer
get "capabilityType"(): $Capability<($IFluidHandler)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineFluidHandler$Type = ($MachineFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineFluidHandler_ = $MachineFluidHandler$Type;
}}
declare module "packages/com/enderio/api/conduit/$ConduitNode" {
import {$ConduitUpgrade, $ConduitUpgrade$Type} from "packages/com/enderio/api/conduit/upgrade/$ConduitUpgrade"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ConduitNode$IOState, $ConduitNode$IOState$Type} from "packages/com/enderio/api/conduit/$ConduitNode$IOState"
import {$ConduitData, $ConduitData$Type} from "packages/com/enderio/api/conduit/$ConduitData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ConduitGraph, $ConduitGraph$Type} from "packages/com/enderio/api/conduit/$ConduitGraph"
import {$ResourceFilter, $ResourceFilter$Type} from "packages/com/enderio/api/filter/$ResourceFilter"

export interface $ConduitNode<T extends $ConduitData<(T)>> {

 "getConduitData"(): T
 "getParentGraph"(): $ConduitGraph<(T)>
 "getIOState"(arg0: $Direction$Type): $Optional<($ConduitNode$IOState)>
 "getExtractFilter"(arg0: $Direction$Type): $ResourceFilter
 "getUpgrade"(arg0: $Direction$Type): $ConduitUpgrade
 "getInsertFilter"(arg0: $Direction$Type): $ResourceFilter
 "getPos"(): $BlockPos
}

export namespace $ConduitNode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitNode$Type<T> = ($ConduitNode<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitNode_<T> = $ConduitNode$Type<(T)>;
}}
declare module "packages/com/enderio/core/common/network/slot/$NetworkDataSlot" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $NetworkDataSlot<T> {

constructor(arg0: $Supplier$Type<(T)>, arg1: $Consumer$Type<(T)>)

public "writeBuffer"(arg0: $FriendlyByteBuf$Type): void
public "fromNBT"(arg0: $Tag$Type): void
public "toBuffer"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "serializeNBT"(arg0: boolean): $Tag
public "fromBuffer"(arg0: $FriendlyByteBuf$Type): void
public "needsUpdate"(): boolean
public "serializeValueNBT"(arg0: T): $Tag
public "updateServerCallback"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkDataSlot$Type<T> = ($NetworkDataSlot<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkDataSlot_<T> = $NetworkDataSlot$Type<(T)>;
}}
declare module "packages/com/enderio/core/client/item/$IAdvancedTooltipProvider" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IAdvancedTooltipProvider {

 "addDetailedTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
 "addCommonTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
 "addBasicTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
}

export namespace $IAdvancedTooltipProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdvancedTooltipProvider$Type = ($IAdvancedTooltipProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAdvancedTooltipProvider_ = $IAdvancedTooltipProvider$Type;
}}
declare module "packages/com/enderio/api/capability/$IMultiCapabilityItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IForgeItem, $IForgeItem$Type} from "packages/net/minecraftforge/common/extensions/$IForgeItem"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/enderio/api/capability/$MultiCapabilityProvider"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IMultiCapabilityItem extends $IForgeItem {

 "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
 "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $MultiCapabilityProvider$Type): $MultiCapabilityProvider
 "getEnchantmentLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
 "elytraFlightTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
 "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
 "canContinueUsing"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "onStopUsing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): void
 "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
 "getMaxDamage"(arg0: $ItemStack$Type): integer
 "isDamageable"(arg0: $ItemStack$Type): boolean
 "isRepairable"(arg0: $ItemStack$Type): boolean
 "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
 "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
 "isPiglinCurrency"(arg0: $ItemStack$Type): boolean
 "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
 "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getXpRepairRatio"(arg0: $ItemStack$Type): float
 "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
 "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
 "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
 "hasCustomEntity"(arg0: $ItemStack$Type): boolean
 "onInventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: integer): void
/**
 * 
 * @deprecated
 */
 "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
 "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
 "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
 "isDamaged"(arg0: $ItemStack$Type): boolean
 "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
 "getCreatorModId"(arg0: $ItemStack$Type): string
 "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
 "onHorseArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Mob$Type): void
 "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
 "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
 "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
 "getEnchantmentValue"(arg0: $ItemStack$Type): integer
 "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
 "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
 "getDefaultTooltipHideFlags"(arg0: $ItemStack$Type): integer
 "canGrindstoneRepair"(arg0: $ItemStack$Type): boolean
 "isNotReplaceableByPickAction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: integer): boolean
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
 "getAllEnchantments"(arg0: $ItemStack$Type): $Map<($Enchantment), (integer)>
 "isEnderMask"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EnderMan$Type): boolean
 "canDisableShield"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $LivingEntity$Type): boolean
 "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
 "getSweepHitBox"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): $AABB
 "canElytraFly"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
 "getEntityLifespan"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
 "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
 "onDestroyed"(arg0: $ItemEntity$Type, arg1: $DamageSource$Type): void
 "getHighlightTip"(arg0: $ItemStack$Type, arg1: $Component$Type): $Component
 "getDamage"(arg0: $ItemStack$Type): integer
 "getMaxStackSize"(arg0: $ItemStack$Type): integer
}

export namespace $IMultiCapabilityItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiCapabilityItem$Type = ($IMultiCapabilityItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiCapabilityItem_ = $IMultiCapabilityItem$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$SoulBindingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$OutputStack, $OutputStack$Type} from "packages/com/enderio/core/common/recipes/$OutputStack"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$SoulBindingRecipe$Container, $SoulBindingRecipe$Container$Type} from "packages/com/enderio/machines/common/recipe/$SoulBindingRecipe$Container"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MachineRecipe, $MachineRecipe$Type} from "packages/com/enderio/machines/common/recipe/$MachineRecipe"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $SoulBindingRecipe implements $MachineRecipe<($SoulBindingRecipe$Container)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type, arg2: $Ingredient$Type, arg3: integer, arg4: integer, arg5: $ResourceLocation$Type, arg6: $MobCategory$Type, arg7: string)

public "getSouldata"(): string
public "matches"(arg0: $SoulBindingRecipe$Container$Type, arg1: $Level$Type): boolean
public "getInput"(): $Ingredient
public "getId"(): $ResourceLocation
public "getExpCost"(): integer
public "getMobCategory"(): $MobCategory
public "craft"(arg0: $SoulBindingRecipe$Container$Type, arg1: $RegistryAccess$Type): $List<($OutputStack)>
public "getEntityType"(): $ResourceLocation
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$Type): $List<($OutputStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $SoulBindingRecipe$Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getEnergyCost"(arg0: $SoulBindingRecipe$Container$Type): integer
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $SoulBindingRecipe$Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
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
get "souldata"(): string
get "input"(): $Ingredient
get "id"(): $ResourceLocation
get "expCost"(): integer
get "mobCategory"(): $MobCategory
get "entityType"(): $ResourceLocation
get "baseEnergyCost"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
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
export type $SoulBindingRecipe$Type = ($SoulBindingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulBindingRecipe_ = $SoulBindingRecipe$Type;
}}
declare module "packages/com/enderio/core/common/recipes/$EnderRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $EnderRecipe<C extends $Container> extends $Recipe<(C)> {

 "isSpecial"(): boolean
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getId"(): $ResourceLocation
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: C, arg1: $Level$Type): boolean
 "assemble"(arg0: C, arg1: $RegistryAccess$Type): $ItemStack
 "getIngredients"(): $NonNullList<($Ingredient)>
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: C): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "getSerializer"(): $RecipeSerializer<(any)>
 "getType"(): $ResourceLocation
 "getMod"(): string
 "getSchema"(): $RecipeSchema
 "getGroup"(): string
 "setGroup"(group: string): void
 "getOrCreateId"(): $ResourceLocation
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
}

export namespace $EnderRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderRecipe$Type<C> = ($EnderRecipe<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderRecipe_<C> = $EnderRecipe$Type<(C)>;
}}
declare module "packages/com/enderio/base/common/item/misc/$BrokenSpawnerItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/enderio/api/capability/$MultiCapabilityProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IMultiCapabilityItem, $IMultiCapabilityItem$Type} from "packages/com/enderio/api/capability/$IMultiCapabilityItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BrokenSpawnerItem extends $Item implements $IMultiCapabilityItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public static "forType"(arg0: $ResourceLocation$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "gePossibleStacks"(): $List<($ItemStack)>
public static "getEntityType"(arg0: $ItemStack$Type): $Optional<($ResourceLocation)>
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $MultiCapabilityProvider$Type): $MultiCapabilityProvider
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrokenSpawnerItem$Type = ($BrokenSpawnerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrokenSpawnerItem_ = $BrokenSpawnerItem$Type;
}}
declare module "packages/com/enderio/machines/common/item/$BoundSoulBlockItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/enderio/api/capability/$MultiCapabilityProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IMultiCapabilityItem, $IMultiCapabilityItem$Type} from "packages/com/enderio/api/capability/$IMultiCapabilityItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IAdvancedTooltipProvider, $IAdvancedTooltipProvider$Type} from "packages/com/enderio/core/client/item/$IAdvancedTooltipProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BoundSoulBlockItem extends $BlockItem implements $IMultiCapabilityItem, $IAdvancedTooltipProvider {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "addCommonTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $MultiCapabilityProvider$Type): $MultiCapabilityProvider
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "addDetailedTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public "isRepairable"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundSoulBlockItem$Type = ($BoundSoulBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoundSoulBlockItem_ = $BoundSoulBlockItem$Type;
}}
declare module "packages/com/enderio/base/common/block/painted/$PaintedSandBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IPaintedBlock, $IPaintedBlock$Type} from "packages/com/enderio/base/common/block/painted/$IPaintedBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SandBlock, $SandBlock$Type} from "packages/net/minecraft/world/level/block/$SandBlock"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $PaintedSandBlock extends $SandBlock implements $EntityBlock, $IPaintedBlock {
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

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDustColor"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPaintState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $ItemLike$Type): $ItemStack
public "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedSandBlock$Type = ($PaintedSandBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedSandBlock_ = $PaintedSandBlock$Type;
}}
declare module "packages/com/enderio/api/conduit/$SlotType" {
import {$ConduitMenuData, $ConduitMenuData$Type} from "packages/com/enderio/api/conduit/$ConduitMenuData"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SlotType extends $Enum<($SlotType)> {
static readonly "FILTER_EXTRACT": $SlotType
static readonly "FILTER_INSERT": $SlotType
static readonly "UPGRADE_EXTRACT": $SlotType
static readonly "Y_POSITION": integer


public static "values"(): ($SlotType)[]
public static "valueOf"(arg0: string): $SlotType
public "getX"(): integer
public "getY"(): integer
public "isAvailableFor"(arg0: $ConduitMenuData$Type): boolean
get "x"(): integer
get "y"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotType$Type = (("upgrade_extract") | ("filter_insert") | ("filter_extract")) | ($SlotType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotType_ = $SlotType$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$PaintingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeWrapper, $RecipeWrapper$Type} from "packages/net/minecraftforge/items/wrapper/$RecipeWrapper"
import {$OutputStack, $OutputStack$Type} from "packages/com/enderio/core/common/recipes/$OutputStack"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MachineRecipe, $MachineRecipe$Type} from "packages/com/enderio/machines/common/recipe/$MachineRecipe"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $PaintingRecipe implements $MachineRecipe<($RecipeWrapper)> {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type)

public "matches"(arg0: $RecipeWrapper$Type, arg1: $Level$Type): boolean
public "getInput"(): $Ingredient
public "getId"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "craft"(arg0: $RecipeWrapper$Type, arg1: $RegistryAccess$Type): $List<($OutputStack)>
public "assemble"(arg0: $RecipeWrapper$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$Type): $List<($OutputStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "getEnergyCost"(arg0: $RecipeWrapper$Type): integer
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $RecipeWrapper$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
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
get "input"(): $Ingredient
get "id"(): $ResourceLocation
get "baseEnergyCost"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
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
export type $PaintingRecipe$Type = ($PaintingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintingRecipe_ = $PaintingRecipe$Type;
}}
declare module "packages/com/enderio/machines/common/io/item/$MachineInventoryLayout$Builder$SlotBuilder" {
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $MachineInventoryLayout$Builder$SlotBuilder {


public "extract"(): $MachineInventoryLayout$Builder$SlotBuilder
public "insert"(): $MachineInventoryLayout$Builder$SlotBuilder
public "filter"(arg0: $BiPredicate$Type<(integer), ($ItemStack$Type)>): $MachineInventoryLayout$Builder$SlotBuilder
public "stackLimit"(arg0: integer): $MachineInventoryLayout$Builder$SlotBuilder
public "guiExtract"(): $MachineInventoryLayout$Builder$SlotBuilder
public "guiInsert"(): $MachineInventoryLayout$Builder$SlotBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInventoryLayout$Builder$SlotBuilder$Type = ($MachineInventoryLayout$Builder$SlotBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineInventoryLayout$Builder$SlotBuilder_ = $MachineInventoryLayout$Builder$SlotBuilder$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$AlloySmeltingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$OutputStack, $OutputStack$Type} from "packages/com/enderio/core/common/recipes/$OutputStack"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$AlloySmeltingRecipe$ContainerWrapper, $AlloySmeltingRecipe$ContainerWrapper$Type} from "packages/com/enderio/machines/common/recipe/$AlloySmeltingRecipe$ContainerWrapper"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CountedIngredient, $CountedIngredient$Type} from "packages/com/enderio/core/common/recipes/$CountedIngredient"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MachineRecipe, $MachineRecipe$Type} from "packages/com/enderio/machines/common/recipe/$MachineRecipe"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $AlloySmeltingRecipe implements $MachineRecipe<($AlloySmeltingRecipe$ContainerWrapper)> {

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($CountedIngredient$Type)>, arg2: $ItemStack$Type, arg3: integer, arg4: float, arg5: boolean)
constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($CountedIngredient$Type)>, arg2: $ItemStack$Type, arg3: integer, arg4: float)

public "matches"(arg0: $AlloySmeltingRecipe$ContainerWrapper$Type, arg1: $Level$Type): boolean
public "getInputs"(): $List<($CountedIngredient)>
public "getId"(): $ResourceLocation
public "getExperience"(): float
public "craft"(arg0: $AlloySmeltingRecipe$ContainerWrapper$Type, arg1: $RegistryAccess$Type): $List<($OutputStack)>
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$Type): $List<($OutputStack)>
public "isSmelting"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $AlloySmeltingRecipe$ContainerWrapper$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getEnergyCost"(arg0: $AlloySmeltingRecipe$ContainerWrapper$Type): integer
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $AlloySmeltingRecipe$ContainerWrapper$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
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
get "inputs"(): $List<($CountedIngredient)>
get "id"(): $ResourceLocation
get "experience"(): float
get "baseEnergyCost"(): integer
get "smelting"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
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
export type $AlloySmeltingRecipe$Type = ($AlloySmeltingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlloySmeltingRecipe_ = $AlloySmeltingRecipe$Type;
}}
declare module "packages/com/enderio/base/common/block/light/$Light" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StateDefinition$Builder, $StateDefinition$Builder$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition$Builder"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$FaceAttachedHorizontalDirectionalBlock, $FaceAttachedHorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$FaceAttachedHorizontalDirectionalBlock"

export class $Light extends $FaceAttachedHorizontalDirectionalBlock {
static readonly "ENABLED": $BooleanProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: boolean)

public "checkPoweredState"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "m_7926_"(arg0: $StateDefinition$Builder$Type<($Block$Type), ($BlockState$Type)>): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isInverted"(): boolean
get "inverted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Light$Type = ($Light);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Light_ = $Light$Type;
}}
declare module "packages/com/enderio/base/common/block/painted/$PaintedRedstoneBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$PoweredBlock, $PoweredBlock$Type} from "packages/net/minecraft/world/level/block/$PoweredBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IPaintedBlock, $IPaintedBlock$Type} from "packages/com/enderio/base/common/block/painted/$IPaintedBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $PaintedRedstoneBlock extends $PoweredBlock implements $EntityBlock, $IPaintedBlock {
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

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPaintState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $ItemLike$Type): $ItemStack
public "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedRedstoneBlock$Type = ($PaintedRedstoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedRedstoneBlock_ = $PaintedRedstoneBlock$Type;
}}
declare module "packages/com/enderio/machines/common/blockentity/$MachineState" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MachineStateType, $MachineStateType$Type} from "packages/com/enderio/machines/common/blockentity/$MachineStateType"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $MachineState extends $Record {
static readonly "ACTIVE": $MachineState
static readonly "IDLE": $MachineState
static readonly "EMPTY_INPUT": $MachineState
static readonly "NO_SOURCE": $MachineState
static readonly "EMPTY_TANK": $MachineState
static readonly "FULL_TANK": $MachineState
static readonly "NO_POWER": $MachineState
static readonly "FULL_POWER": $MachineState
static readonly "NO_CAPACITOR": $MachineState
static readonly "NOT_SOULBOUND": $MachineState
static readonly "FULL_OUTPUT": $MachineState
static readonly "REDSTONE": $MachineState

constructor(type: $MachineStateType$Type, component: $MutableComponent$Type)

public "type"(): $MachineStateType
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "component"(): $MutableComponent
public static "fromNBT"(arg0: $CompoundTag$Type): $MachineState
public "toBuffer"(arg0: $FriendlyByteBuf$Type): void
public static "fromBuffer"(arg0: $FriendlyByteBuf$Type): $MachineState
public "toNBT"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineState$Type = ($MachineState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineState_ = $MachineState$Type;
}}
declare module "packages/com/enderio/api/capability/$IEnderCapabilityProvider" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $IEnderCapabilityProvider<T> {

 "getCapability"(arg0: $Direction$Type): $LazyOptional<(T)>
 "invalidateCaps"(): void
 "getCapabilityType"(): $Capability<(T)>
 "invalidateSide"(arg0: $Direction$Type): void
}

export namespace $IEnderCapabilityProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnderCapabilityProvider$Type<T> = ($IEnderCapabilityProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnderCapabilityProvider_<T> = $IEnderCapabilityProvider$Type<(T)>;
}}
declare module "packages/com/enderio/base/common/recipe/$ShapedEntityStorageRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ShapedEntityStorageRecipe extends $ShapedRecipe {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "width": integer
readonly "height": integer
 "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedEntityStorageRecipe$Type = ($ShapedEntityStorageRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedEntityStorageRecipe_ = $ShapedEntityStorageRecipe$Type;
}}
declare module "packages/com/enderio/base/common/block/painted/$PaintedStairBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$StairsShape, $StairsShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IPaintedBlock, $IPaintedBlock$Type} from "packages/com/enderio/base/common/block/painted/$IPaintedBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$StairBlock, $StairBlock$Type} from "packages/net/minecraft/world/level/block/$StairBlock"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $PaintedStairBlock extends $StairBlock implements $EntityBlock, $IPaintedBlock {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "WATERLOGGED": $BooleanProperty
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

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPaintState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $ItemLike$Type): $ItemStack
public "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedStairBlock$Type = ($PaintedStairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedStairBlock_ = $PaintedStairBlock$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$SagMillingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SagMillingRecipe, $SagMillingRecipe$Type} from "packages/com/enderio/machines/common/recipe/$SagMillingRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SagMillingRecipe$Serializer implements $RecipeSerializer<($SagMillingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SagMillingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SagMillingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SagMillingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SagMillingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$Serializer$Type = ($SagMillingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SagMillingRecipe$Serializer_ = $SagMillingRecipe$Serializer$Type;
}}
declare module "packages/com/enderio/api/grindingball/$IGrindingBallData" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IGrindingBallData {

 "getOutputMultiplier"(): float
 "getPowerUse"(): float
 "getGrindingBallId"(): $ResourceLocation
 "getDurability"(): integer
 "getBonusMultiplier"(): float
}

export namespace $IGrindingBallData {
const IDENTITY: $IGrindingBallData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGrindingBallData$Type = ($IGrindingBallData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGrindingBallData_ = $IGrindingBallData$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$PaintingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$PaintingRecipe, $PaintingRecipe$Type} from "packages/com/enderio/machines/common/recipe/$PaintingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PaintingRecipe$Serializer implements $RecipeSerializer<($PaintingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $PaintingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $PaintingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $PaintingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $PaintingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingRecipe$Serializer$Type = ($PaintingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintingRecipe$Serializer_ = $PaintingRecipe$Serializer$Type;
}}
declare module "packages/com/enderio/base/common/item/misc/$MaterialItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MaterialItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: boolean)

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialItem$Type = ($MaterialItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialItem_ = $MaterialItem$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$SlicingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$SlicingRecipe, $SlicingRecipe$Type} from "packages/com/enderio/machines/common/recipe/$SlicingRecipe"

export class $SlicingRecipe$Serializer implements $RecipeSerializer<($SlicingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SlicingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SlicingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SlicingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SlicingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicingRecipe$Serializer$Type = ($SlicingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicingRecipe$Serializer_ = $SlicingRecipe$Serializer$Type;
}}
declare module "packages/com/enderio/conduits/common/redstone/$RedstoneFilterItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ResourceFilter, $ResourceFilter$Type} from "packages/com/enderio/api/filter/$ResourceFilter"

export class $RedstoneFilterItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $Function$Type<($ItemStack$Type), ($ResourceFilter$Type)>, arg2: $Supplier$Type<($MenuType$Type<(any)>)>)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneFilterItem$Type = ($RedstoneFilterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneFilterItem_ = $RedstoneFilterItem$Type;
}}
declare module "packages/com/enderio/base/common/blockentity/$IWrenchable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"

export interface $IWrenchable {

 "onWrenched"(arg0: $Player$Type, arg1: $Direction$Type): $InteractionResult

(arg0: $Player$Type, arg1: $Direction$Type): $InteractionResult
}

export namespace $IWrenchable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWrenchable$Type = ($IWrenchable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWrenchable_ = $IWrenchable$Type;
}}
declare module "packages/com/enderio/machines/common/blockentity/$MachineStateType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $MachineStateType extends $Enum<($MachineStateType)> {
static readonly "ACTIVE": $MachineStateType
static readonly "IDLE": $MachineStateType
static readonly "ERROR": $MachineStateType
static readonly "DISABLED": $MachineStateType


public static "values"(): ($MachineStateType)[]
public static "valueOf"(arg0: string): $MachineStateType
public "getPriority"(): integer
get "priority"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineStateType$Type = (("idle") | ("active") | ("disabled") | ("error")) | ($MachineStateType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineStateType_ = $MachineStateType$Type;
}}
declare module "packages/com/enderio/base/common/block/painted/$PaintedFenceGateBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$FenceGateBlock, $FenceGateBlock$Type} from "packages/net/minecraft/world/level/block/$FenceGateBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IPaintedBlock, $IPaintedBlock$Type} from "packages/com/enderio/base/common/block/painted/$IPaintedBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $PaintedFenceGateBlock extends $FenceGateBlock implements $EntityBlock, $IPaintedBlock {
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "IN_WALL": $BooleanProperty
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

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPaintState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $ItemLike$Type): $ItemStack
public "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedFenceGateBlock$Type = ($PaintedFenceGateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedFenceGateBlock_ = $PaintedFenceGateBlock$Type;
}}
declare module "packages/com/enderio/base/common/item/capacitors/$FixedCapacitorItem" {
import {$ICapacitorData, $ICapacitorData$Type} from "packages/com/enderio/api/capacitor/$ICapacitorData"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/enderio/api/capability/$MultiCapabilityProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IMultiCapabilityItem, $IMultiCapabilityItem$Type} from "packages/com/enderio/api/capability/$IMultiCapabilityItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$BaseCapacitorItem, $BaseCapacitorItem$Type} from "packages/com/enderio/base/common/item/capacitors/$BaseCapacitorItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FixedCapacitorItem extends $BaseCapacitorItem implements $IMultiCapabilityItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ICapacitorData$Type, arg1: $Item$Properties$Type)

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $MultiCapabilityProvider$Type): $MultiCapabilityProvider
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "isRepairable"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FixedCapacitorItem$Type = ($FixedCapacitorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FixedCapacitorItem_ = $FixedCapacitorItem$Type;
}}
declare module "packages/com/enderio/machines/common/blockentity/solar/$ISolarPanelTier" {
import {$ICapacityTier, $ICapacityTier$Type} from "packages/com/enderio/machines/common/blockentity/multienergy/$ICapacityTier"

export interface $ISolarPanelTier extends $ICapacityTier {

 "getProductionRate"(): integer
 "getStorageCapacity"(): integer
}

export namespace $ISolarPanelTier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISolarPanelTier$Type = ($ISolarPanelTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISolarPanelTier_ = $ISolarPanelTier$Type;
}}
declare module "packages/com/enderio/base/common/item/tool/$YetaWrenchItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $YetaWrenchItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YetaWrenchItem$Type = ($YetaWrenchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YetaWrenchItem_ = $YetaWrenchItem$Type;
}}
declare module "packages/com/enderio/base/common/block/painted/$PaintedCraftingTableBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IPaintedBlock, $IPaintedBlock$Type} from "packages/com/enderio/base/common/block/painted/$IPaintedBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$CraftingTableBlock, $CraftingTableBlock$Type} from "packages/net/minecraft/world/level/block/$CraftingTableBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $PaintedCraftingTableBlock extends $CraftingTableBlock implements $EntityBlock, $IPaintedBlock {
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

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPaintState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $ItemLike$Type): $ItemStack
public "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedCraftingTableBlock$Type = ($PaintedCraftingTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedCraftingTableBlock_ = $PaintedCraftingTableBlock$Type;
}}
declare module "packages/com/enderio/base/common/block/$IndustrialInsulationBlock" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SpongeBlock, $SpongeBlock$Type} from "packages/net/minecraft/world/level/block/$SpongeBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $IndustrialInsulationBlock extends $SpongeBlock {
static readonly "MAX_DEPTH": integer
static readonly "MAX_COUNT": integer
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialInsulationBlock$Type = ($IndustrialInsulationBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IndustrialInsulationBlock_ = $IndustrialInsulationBlock$Type;
}}
declare module "packages/com/enderio/base/common/block/glass/$GlassCollisionPredicate" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IIcon, $IIcon$Type} from "packages/com/enderio/api/misc/$IIcon"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Vector2i, $Vector2i$Type} from "packages/com/enderio/api/misc/$Vector2i"
import {$EntityCollisionContext, $EntityCollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$EntityCollisionContext"

export class $GlassCollisionPredicate extends $Enum<($GlassCollisionPredicate)> implements $IIcon {
static readonly "NONE": $GlassCollisionPredicate
static readonly "PLAYERS_PASS": $GlassCollisionPredicate
static readonly "PLAYERS_BLOCK": $GlassCollisionPredicate
static readonly "MOBS_PASS": $GlassCollisionPredicate
static readonly "MOBS_BLOCK": $GlassCollisionPredicate
static readonly "ANIMALS_PASS": $GlassCollisionPredicate
static readonly "ANIMALS_BLOCK": $GlassCollisionPredicate
static readonly "TEXTURE": $ResourceLocation


public static "values"(): ($GlassCollisionPredicate)[]
public static "valueOf"(arg0: string): $GlassCollisionPredicate
public "shortName"(): string
public "getDescription"(): $Optional<($Component)>
public "getTexturePosition"(): $Vector2i
public "getTextureLocation"(): $ResourceLocation
public "getIconSize"(): $Vector2i
public "getRenderSize"(): $Vector2i
public static "invert"(arg0: $GlassCollisionPredicate$Type): $GlassCollisionPredicate
public static "fromToken"(arg0: $Item$Type): $GlassCollisionPredicate
public "canPass"(arg0: $EntityCollisionContext$Type): boolean
public "shouldRender"(): boolean
public "getTextureSize"(): $Vector2i
public "getTooltip"(): $Component
get "description"(): $Optional<($Component)>
get "texturePosition"(): $Vector2i
get "textureLocation"(): $ResourceLocation
get "iconSize"(): $Vector2i
get "renderSize"(): $Vector2i
get "textureSize"(): $Vector2i
get "tooltip"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassCollisionPredicate$Type = (("mobs_block") | ("players_pass") | ("players_block") | ("mobs_pass") | ("none") | ("animals_pass") | ("animals_block")) | ($GlassCollisionPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlassCollisionPredicate_ = $GlassCollisionPredicate$Type;
}}
declare module "packages/com/enderio/base/common/item/tool/$CoordinateSelectorItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CoordinateSelectorItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoordinateSelectorItem$Type = ($CoordinateSelectorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoordinateSelectorItem_ = $CoordinateSelectorItem$Type;
}}
declare module "packages/com/enderio/base/common/particle/$RangeParticleData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $RangeParticleData extends $Record implements $ParticleOptions {
static readonly "DESERIALIZER": $ParticleOptions$Deserializer<($RangeParticleData)>
static "CODEC": $Codec<($RangeParticleData)>

constructor(range: integer, color: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "color"(): string
public "range"(): integer
public "getType"(): $ParticleType<(any)>
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "writeToString"(): string
get "type"(): $ParticleType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeParticleData$Type = ($RangeParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangeParticleData_ = $RangeParticleData$Type;
}}
declare module "packages/com/enderio/base/common/item/filter/$EntityFilter" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EntityFilter extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: integer)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityFilter$Type = ($EntityFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityFilter_ = $EntityFilter$Type;
}}
declare module "packages/com/enderio/api/misc/$IIcon" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Vector2i, $Vector2i$Type} from "packages/com/enderio/api/misc/$Vector2i"

export interface $IIcon {

 "getTexturePosition"(): $Vector2i
 "getTextureSize"(): $Vector2i
 "getTextureLocation"(): $ResourceLocation
 "getIconSize"(): $Vector2i
 "getRenderSize"(): $Vector2i
 "getTooltip"(): $Component
 "shouldRender"(): boolean
}

export namespace $IIcon {
const DEFAULT_TEXTURE_SIZE: $Vector2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIcon$Type = ($IIcon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIcon_ = $IIcon$Type;
}}
declare module "packages/com/enderio/machines/common/io/item/$MachineInventoryLayout" {
import {$MachineInventoryLayout$Builder, $MachineInventoryLayout$Builder$Type} from "packages/com/enderio/machines/common/io/item/$MachineInventoryLayout$Builder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $MachineInventoryLayout {


public static "builder"(): $MachineInventoryLayout$Builder
public "canInsert"(arg0: integer): boolean
public "getStackLimit"(arg0: integer): integer
public "getCapacitorSlot"(): integer
public "supportsCapacitor"(): boolean
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "canExtract"(arg0: integer): boolean
public "guiCanExtract"(arg0: integer): boolean
public "guiCanInsert"(arg0: integer): boolean
public "getSlotCount"(): integer
get "capacitorSlot"(): integer
get "slotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInventoryLayout$Type = ($MachineInventoryLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineInventoryLayout_ = $MachineInventoryLayout$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$SagMillingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$SagMillingRecipe$BonusType, $SagMillingRecipe$BonusType$Type} from "packages/com/enderio/machines/common/recipe/$SagMillingRecipe$BonusType"
import {$OutputStack, $OutputStack$Type} from "packages/com/enderio/core/common/recipes/$OutputStack"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$IGrindingBallData, $IGrindingBallData$Type} from "packages/com/enderio/api/grindingball/$IGrindingBallData"
import {$SagMillingRecipe$OutputItem, $SagMillingRecipe$OutputItem$Type} from "packages/com/enderio/machines/common/recipe/$SagMillingRecipe$OutputItem"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$SagMillingRecipe$Container, $SagMillingRecipe$Container$Type} from "packages/com/enderio/machines/common/recipe/$SagMillingRecipe$Container"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MachineRecipe, $MachineRecipe$Type} from "packages/com/enderio/machines/common/recipe/$MachineRecipe"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $SagMillingRecipe implements $MachineRecipe<($SagMillingRecipe$Container)> {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $List$Type<($SagMillingRecipe$OutputItem$Type)>, arg3: integer, arg4: $SagMillingRecipe$BonusType$Type)

public "matches"(arg0: $SagMillingRecipe$Container$Type, arg1: $Level$Type): boolean
public "getInput"(): $Ingredient
public "getOutputs"(): $List<($SagMillingRecipe$OutputItem)>
public "getId"(): $ResourceLocation
public "craft"(arg0: $SagMillingRecipe$Container$Type, arg1: $RegistryAccess$Type): $List<($OutputStack)>
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$Type): $List<($OutputStack)>
public "getBonusType"(): $SagMillingRecipe$BonusType
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "getEnergyCost"(arg0: $SagMillingRecipe$Container$Type): integer
public "getEnergyCost"(arg0: $IGrindingBallData$Type): integer
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $SagMillingRecipe$Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $SagMillingRecipe$Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
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
get "input"(): $Ingredient
get "outputs"(): $List<($SagMillingRecipe$OutputItem)>
get "id"(): $ResourceLocation
get "baseEnergyCost"(): integer
get "bonusType"(): $SagMillingRecipe$BonusType
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
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
export type $SagMillingRecipe$Type = ($SagMillingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SagMillingRecipe_ = $SagMillingRecipe$Type;
}}
declare module "packages/com/enderio/base/common/block/$EnderSkullBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SkullBlock, $SkullBlock$Type} from "packages/net/minecraft/world/level/block/$SkullBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EnderSkullBlock extends $SkullBlock {
static readonly "MAX": integer
static readonly "ROTATION": $IntegerProperty
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

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderSkullBlock$Type = ($EnderSkullBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderSkullBlock_ = $EnderSkullBlock$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$SoulBindingRecipe$Container" {
import {$RecipeWrapper, $RecipeWrapper$Type} from "packages/net/minecraftforge/items/wrapper/$RecipeWrapper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"

export class $SoulBindingRecipe$Container extends $RecipeWrapper {

constructor(arg0: $IItemHandlerModifiable$Type, arg1: $Supplier$Type<(integer)>)

public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulBindingRecipe$Container$Type = ($SoulBindingRecipe$Container);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulBindingRecipe$Container_ = $SoulBindingRecipe$Container$Type;
}}
declare module "packages/com/enderio/base/common/block/$EIOPressurePlateBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EIOPressurePlateBlock$Detector, $EIOPressurePlateBlock$Detector$Type} from "packages/com/enderio/base/common/block/$EIOPressurePlateBlock$Detector"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PressurePlateBlock, $PressurePlateBlock$Type} from "packages/net/minecraft/world/level/block/$PressurePlateBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PressurePlateBlock$Sensitivity, $PressurePlateBlock$Sensitivity$Type} from "packages/net/minecraft/world/level/block/$PressurePlateBlock$Sensitivity"

export class $EIOPressurePlateBlock extends $PressurePlateBlock {
static readonly "PLAYER": $EIOPressurePlateBlock$Detector
static readonly "HOSTILE_MOB": $EIOPressurePlateBlock$Detector
static readonly "POWERED": $BooleanProperty
readonly "sensitivity": $PressurePlateBlock$Sensitivity
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $EIOPressurePlateBlock$Detector$Type, arg2: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EIOPressurePlateBlock$Type = ($EIOPressurePlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EIOPressurePlateBlock_ = $EIOPressurePlateBlock$Type;
}}
declare module "packages/com/enderio/machines/common/block/$TravelAnchorBlock" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MachineBlock, $MachineBlock$Type} from "packages/com/enderio/machines/common/block/$MachineBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntityEntry, $BlockEntityEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntityEntry"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TravelAnchorBlock extends $MachineBlock {
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

constructor(arg0: $BlockEntityEntry$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)
constructor(arg0: $BlockBehaviour$Properties$Type)

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelAnchorBlock$Type = ($TravelAnchorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TravelAnchorBlock_ = $TravelAnchorBlock$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$SlicingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$OutputStack, $OutputStack$Type} from "packages/com/enderio/core/common/recipes/$OutputStack"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MachineRecipe, $MachineRecipe$Type} from "packages/com/enderio/machines/common/recipe/$MachineRecipe"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $SlicingRecipe implements $MachineRecipe<($Container)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Ingredient$Type)>, arg3: integer)

public "getInputs"(): $List<($Ingredient)>
public "getId"(): $ResourceLocation
public "craft"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $List<($OutputStack)>
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$Type): $List<($OutputStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getEnergyCost"(arg0: $Container$Type): integer
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
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
get "inputs"(): $List<($Ingredient)>
get "id"(): $ResourceLocation
get "baseEnergyCost"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
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
export type $SlicingRecipe$Type = ($SlicingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicingRecipe_ = $SlicingRecipe$Type;
}}
declare module "packages/com/enderio/base/common/block/glass/$GlassIdentifier" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$GlassLighting, $GlassLighting$Type} from "packages/com/enderio/base/common/block/glass/$GlassLighting"
import {$GlassCollisionPredicate, $GlassCollisionPredicate$Type} from "packages/com/enderio/base/common/block/glass/$GlassCollisionPredicate"

export class $GlassIdentifier extends $Record {

constructor(lighting: $GlassLighting$Type, collisionPredicate: $GlassCollisionPredicate$Type, explosion_resistance: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "collisionPredicate"(): $GlassCollisionPredicate
public "lighting"(): $GlassLighting
public "glassName"(): string
public "withCollision"(arg0: $GlassCollisionPredicate$Type): $GlassIdentifier
public "withoutLight"(): $GlassIdentifier
public "explosion_resistance"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassIdentifier$Type = ($GlassIdentifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlassIdentifier_ = $GlassIdentifier$Type;
}}
declare module "packages/com/enderio/machines/common/io/item/$SingleSlotAccess" {
import {$MachineBlockEntity, $MachineBlockEntity$Type} from "packages/com/enderio/machines/common/blockentity/base/$MachineBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$MultiSlotAccess, $MultiSlotAccess$Type} from "packages/com/enderio/machines/common/io/item/$MultiSlotAccess"
import {$MachineInventory, $MachineInventory$Type} from "packages/com/enderio/machines/common/io/item/$MachineInventory"

export class $SingleSlotAccess {

constructor()

public "getIndex"(): integer
public "getItemStack"(arg0: $Container$Type): $ItemStack
public "getItemStack"(arg0: $MachineInventory$Type): $ItemStack
public "getItemStack"(arg0: $MachineBlockEntity$Type): $ItemStack
public "setStackInSlot"(arg0: $MachineBlockEntity$Type, arg1: $ItemStack$Type): void
public "setStackInSlot"(arg0: $MachineInventory$Type, arg1: $ItemStack$Type): void
public "insertItem"(arg0: $MachineInventory$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "insertItem"(arg0: $MachineBlockEntity$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "wrapToMulti"(): $MultiSlotAccess
public "isSlot"(arg0: integer): boolean
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleSlotAccess$Type = ($SingleSlotAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleSlotAccess_ = $SingleSlotAccess$Type;
}}
declare module "packages/com/enderio/conduits/common/conduit/connection/$ConnectionState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConnectionState {

 "isConnection"(): boolean

(): boolean
}

export namespace $ConnectionState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionState$Type = ($ConnectionState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectionState_ = $ConnectionState$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$AlloySmeltingRecipe$ContainerWrapper" {
import {$RecipeWrapper, $RecipeWrapper$Type} from "packages/net/minecraftforge/items/wrapper/$RecipeWrapper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$MultiSlotAccess, $MultiSlotAccess$Type} from "packages/com/enderio/machines/common/io/item/$MultiSlotAccess"

export class $AlloySmeltingRecipe$ContainerWrapper extends $RecipeWrapper {

constructor(arg0: boolean, arg1: $IItemHandlerModifiable$Type)

public "getSlotAccess"(): $MultiSlotAccess
public "getInputsTaken"(): integer
public "setInputsTaken"(arg0: integer): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "tryClear"(arg0: any): void
get "slotAccess"(): $MultiSlotAccess
get "inputsTaken"(): integer
set "inputsTaken"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlloySmeltingRecipe$ContainerWrapper$Type = ($AlloySmeltingRecipe$ContainerWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlloySmeltingRecipe$ContainerWrapper_ = $AlloySmeltingRecipe$ContainerWrapper$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$MachineRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$OutputStack, $OutputStack$Type} from "packages/com/enderio/core/common/recipes/$OutputStack"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$EnderRecipe, $EnderRecipe$Type} from "packages/com/enderio/core/common/recipes/$EnderRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $MachineRecipe<C extends $Container> extends $EnderRecipe<(C)> {

/**
 * 
 * @deprecated
 */
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "craft"(arg0: C, arg1: $RegistryAccess$Type): $List<($OutputStack)>
/**
 * 
 * @deprecated
 */
 "assemble"(arg0: C, arg1: $RegistryAccess$Type): $ItemStack
 "getBaseEnergyCost"(): integer
 "getResultStacks"(arg0: $RegistryAccess$Type): $List<($OutputStack)>
 "getEnergyCost"(arg0: C): integer
 "isSpecial"(): boolean
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getId"(): $ResourceLocation
 "matches"(arg0: C, arg1: $Level$Type): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: C): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "getSerializer"(): $RecipeSerializer<(any)>
 "getType"(): $ResourceLocation
 "getMod"(): string
 "getSchema"(): $RecipeSchema
 "getGroup"(): string
 "setGroup"(group: string): void
 "getOrCreateId"(): $ResourceLocation
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
}

export namespace $MachineRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineRecipe$Type<C> = ($MachineRecipe<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineRecipe_<C> = $MachineRecipe$Type<(C)>;
}}
declare module "packages/com/enderio/conduits/common/$ConduitShape" {
import {$ConduitType, $ConduitType$Type} from "packages/com/enderio/api/conduit/$ConduitType"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ConduitBundle, $ConduitBundle$Type} from "packages/com/enderio/conduits/common/conduit/$ConduitBundle"

export class $ConduitShape {
static readonly "CONNECTION": $VoxelShape

constructor()

public static "rotateVoxelShape"(arg0: $VoxelShape$Type, arg1: $Direction$Type): $VoxelShape
public "updateConduit"(arg0: $ConduitBundle$Type): void
public "getDirection"(arg0: $BlockPos$Type, arg1: $HitResult$Type): $Direction
public "getTotalShape"(): $VoxelShape
public "getConduit"(arg0: $BlockPos$Type, arg1: $HitResult$Type): $ConduitType<(any)>
public "getShapeFromHit"(arg0: $BlockPos$Type, arg1: $HitResult$Type): $VoxelShape
get "totalShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitShape$Type = ($ConduitShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitShape_ = $ConduitShape$Type;
}}
declare module "packages/com/enderio/base/common/recipe/$FireCraftingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$FireCraftingRecipe, $FireCraftingRecipe$Type} from "packages/com/enderio/base/common/recipe/$FireCraftingRecipe"

export class $FireCraftingRecipe$Serializer implements $RecipeSerializer<($FireCraftingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $FireCraftingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $FireCraftingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $FireCraftingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $FireCraftingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireCraftingRecipe$Serializer$Type = ($FireCraftingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireCraftingRecipe$Serializer_ = $FireCraftingRecipe$Serializer$Type;
}}
declare module "packages/com/enderio/base/common/item/misc/$EnderSkullBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$StandingAndWallBlockItem, $StandingAndWallBlockItem$Type} from "packages/net/minecraft/world/item/$StandingAndWallBlockItem"

export class $EnderSkullBlockItem extends $StandingAndWallBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: $Direction$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderSkullBlockItem$Type = ($EnderSkullBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderSkullBlockItem_ = $EnderSkullBlockItem$Type;
}}
declare module "packages/com/enderio/core/common/recipes/$CountedIngredient" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $CountedIngredient extends $Record implements $Predicate<($ItemStack)> {
static readonly "EMPTY": $CountedIngredient

constructor(ingredient: $Ingredient$Type, count: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $ItemStack$Type): boolean
public static "of"(arg0: $Ingredient$Type): $CountedIngredient
public static "of"(arg0: integer, arg1: $Ingredient$Type): $CountedIngredient
public static "of"(): $CountedIngredient
public static "of"(...arg0: ($ItemLike$Type)[]): $CountedIngredient
public static "of"(arg0: $Stream$Type<($ItemStack$Type)>): $CountedIngredient
public static "of"(arg0: integer, ...arg1: ($ItemStack$Type)[]): $CountedIngredient
public static "of"(...arg0: ($ItemStack$Type)[]): $CountedIngredient
public static "of"(arg0: integer, ...arg1: ($ItemLike$Type)[]): $CountedIngredient
public static "of"(arg0: integer, arg1: $Stream$Type<($ItemStack$Type)>): $CountedIngredient
public static "of"(arg0: integer, arg1: $TagKey$Type<($Item$Type)>): $CountedIngredient
public static "of"(arg0: $TagKey$Type<($Item$Type)>): $CountedIngredient
public "count"(): integer
public static "fromJson"(arg0: $JsonObject$Type): $CountedIngredient
public "toJson"(): $JsonObject
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $CountedIngredient
public "getItems"(): $List<($ItemStack)>
public "ingredient"(): $Ingredient
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
get "items"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CountedIngredient$Type = ($CountedIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CountedIngredient_ = $CountedIngredient$Type;
}}
declare module "packages/com/enderio/machines/mixin/$AbstractCookingRecipeAccessor" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AbstractCookingRecipeAccessor {

 "getResult"(): $ItemStack
 "getExperience"(): float
 "getIngredient"(): $Ingredient
}

export namespace $AbstractCookingRecipeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCookingRecipeAccessor$Type = ($AbstractCookingRecipeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCookingRecipeAccessor_ = $AbstractCookingRecipeAccessor$Type;
}}
declare module "packages/com/enderio/base/common/block/painted/$PaintedWoodenPressurePlateBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PressurePlateBlock, $PressurePlateBlock$Type} from "packages/net/minecraft/world/level/block/$PressurePlateBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IPaintedBlock, $IPaintedBlock$Type} from "packages/com/enderio/base/common/block/painted/$IPaintedBlock"
import {$PressurePlateBlock$Sensitivity, $PressurePlateBlock$Sensitivity$Type} from "packages/net/minecraft/world/level/block/$PressurePlateBlock$Sensitivity"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $PaintedWoodenPressurePlateBlock extends $PressurePlateBlock implements $EntityBlock, $IPaintedBlock {
static readonly "POWERED": $BooleanProperty
readonly "sensitivity": $PressurePlateBlock$Sensitivity
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

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPaintState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $ItemLike$Type): $ItemStack
public "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedWoodenPressurePlateBlock$Type = ($PaintedWoodenPressurePlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedWoodenPressurePlateBlock_ = $PaintedWoodenPressurePlateBlock$Type;
}}
declare module "packages/com/enderio/base/common/item/filter/$ItemFilter" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemFilter extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: integer)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilter$Type = ($ItemFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFilter_ = $ItemFilter$Type;
}}
declare module "packages/com/enderio/core/common/item/$ITabVariants" {
import {$CreativeModeTabModifier, $CreativeModeTabModifier$Type} from "packages/com/tterrag/registrate/util/$CreativeModeTabModifier"

export interface $ITabVariants {

 "addAllVariants"(arg0: $CreativeModeTabModifier$Type): void

(arg0: $CreativeModeTabModifier$Type): void
}

export namespace $ITabVariants {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITabVariants$Type = ($ITabVariants);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITabVariants_ = $ITabVariants$Type;
}}
declare module "packages/com/enderio/base/common/block/painted/$PaintedTrapDoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TrapDoorBlock, $TrapDoorBlock$Type} from "packages/net/minecraft/world/level/block/$TrapDoorBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IPaintedBlock, $IPaintedBlock$Type} from "packages/com/enderio/base/common/block/painted/$IPaintedBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $PaintedTrapDoorBlock extends $TrapDoorBlock implements $EntityBlock, $IPaintedBlock {
static readonly "OPEN": $BooleanProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPaintState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $ItemLike$Type): $ItemStack
public "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedTrapDoorBlock$Type = ($PaintedTrapDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedTrapDoorBlock_ = $PaintedTrapDoorBlock$Type;
}}
declare module "packages/com/enderio/machines/common/block/$SolarPanelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$ISolarPanelTier, $ISolarPanelTier$Type} from "packages/com/enderio/machines/common/blockentity/solar/$ISolarPanelTier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntityEntry, $BlockEntityEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntityEntry"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IAdvancedTooltipProvider, $IAdvancedTooltipProvider$Type} from "packages/com/enderio/core/client/item/$IAdvancedTooltipProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MachineBlock, $MachineBlock$Type} from "packages/com/enderio/machines/common/block/$MachineBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SolarPanelBlock extends $MachineBlock implements $IAdvancedTooltipProvider {
static readonly "NORTH": $BooleanProperty
static readonly "NORTH_EAST": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH_EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "SOUTH_WEST": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "NORTH_WEST": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BlockEntityEntry$Type<(any)>, arg2: $ISolarPanelTier$Type)

public "addDetailedTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "addCommonTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolarPanelBlock$Type = ($SolarPanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SolarPanelBlock_ = $SolarPanelBlock$Type;
}}
declare module "packages/com/enderio/machines/common/recipe/$SagMillingRecipe$OutputItem$SizedTagOutput" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $SagMillingRecipe$OutputItem$SizedTagOutput extends $Record {

constructor(itemTag: $TagKey$Type<($Item$Type)>, count: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "count"(): integer
public "itemTag"(): $TagKey<($Item)>
public "toJson"(): $JsonObject
public "getItemStack"(): $ItemStack
get "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$OutputItem$SizedTagOutput$Type = ($SagMillingRecipe$OutputItem$SizedTagOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SagMillingRecipe$OutputItem$SizedTagOutput_ = $SagMillingRecipe$OutputItem$SizedTagOutput$Type;
}}
declare module "packages/com/enderio/base/common/enchantment/$ShimmerEnchantment" {
import {$EIOBaseEnchantment, $EIOBaseEnchantment$Type} from "packages/com/enderio/base/common/enchantment/$EIOBaseEnchantment"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $ShimmerEnchantment extends $EIOBaseEnchantment {
 "slots": ($EquipmentSlot)[]
readonly "category": $EnchantmentCategory

constructor()

public "getMaxCost"(arg0: integer): integer
public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "isAllowedOnBooks"(): boolean
public "isTreasureOnly"(): boolean
get "maxLevel"(): integer
get "allowedOnBooks"(): boolean
get "treasureOnly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShimmerEnchantment$Type = ($ShimmerEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShimmerEnchantment_ = $ShimmerEnchantment$Type;
}}
declare module "packages/com/enderio/conduits/common/conduit/upgrade/$SpeedUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpeedUpgradeItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: integer)

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpeedUpgradeItem$Type = ($SpeedUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpeedUpgradeItem_ = $SpeedUpgradeItem$Type;
}}
declare module "packages/com/enderio/armory/common/item/darksteel/$DarkSteelSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IAdvancedTooltipProvider, $IAdvancedTooltipProvider$Type} from "packages/com/enderio/core/client/item/$IAdvancedTooltipProvider"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DarkSteelSwordItem extends $SwordItem implements $IAdvancedTooltipProvider {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "addDetailedTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public "addCommonTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public static "getSkull"(arg0: $LivingEntity$Type): $Optional<($ItemStack)>
public "addBasicTooltips"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelSwordItem$Type = ($DarkSteelSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkSteelSwordItem_ = $DarkSteelSwordItem$Type;
}}
declare module "packages/com/enderio/api/io/$IOMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IOMode extends $Enum<($IOMode)> {
static readonly "NONE": $IOMode
static readonly "PUSH": $IOMode
static readonly "PULL": $IOMode
static readonly "BOTH": $IOMode
static readonly "DISABLED": $IOMode


public static "values"(): ($IOMode)[]
public static "valueOf"(arg0: string): $IOMode
public "canConnect"(): boolean
public "canPull"(): boolean
public "canForce"(): boolean
public "canOutput"(): boolean
public "canPush"(): boolean
public "canInput"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOMode$Type = (("pull") | ("disabled") | ("none") | ("push") | ("both")) | ($IOMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOMode_ = $IOMode$Type;
}}
declare module "packages/com/enderio/api/misc/$ColorControl" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IIcon, $IIcon$Type} from "packages/com/enderio/api/misc/$IIcon"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Vector2i, $Vector2i$Type} from "packages/com/enderio/api/misc/$Vector2i"

export class $ColorControl extends $Enum<($ColorControl)> implements $IIcon {
static readonly "GREEN": $ColorControl
static readonly "BROWN": $ColorControl
static readonly "BLUE": $ColorControl
static readonly "PURPLE": $ColorControl
static readonly "CYAN": $ColorControl
static readonly "LIGHT_GRAY": $ColorControl
static readonly "GRAY": $ColorControl
static readonly "PINK": $ColorControl
static readonly "LIME": $ColorControl
static readonly "YELLOW": $ColorControl
static readonly "LIGHT_BLUE": $ColorControl
static readonly "MAGENTA": $ColorControl
static readonly "ORANGE": $ColorControl
static readonly "WHITE": $ColorControl
static readonly "BLACK": $ColorControl
static readonly "RED": $ColorControl


public static "values"(): ($ColorControl)[]
public static "valueOf"(arg0: string): $ColorControl
public "getTexturePosition"(): $Vector2i
public "getTextureSize"(): $Vector2i
public "getTextureLocation"(): $ResourceLocation
public "getIconSize"(): $Vector2i
public "getColorActive"(): integer
public "getTooltip"(): $Component
public "getColor"(): integer
public "getRenderSize"(): $Vector2i
public "shouldRender"(): boolean
get "texturePosition"(): $Vector2i
get "textureSize"(): $Vector2i
get "textureLocation"(): $ResourceLocation
get "iconSize"(): $Vector2i
get "colorActive"(): integer
get "tooltip"(): $Component
get "color"(): integer
get "renderSize"(): $Vector2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorControl$Type = (("magenta") | ("pink") | ("green") | ("light_gray") | ("lime") | ("yellow") | ("black") | ("light_blue") | ("brown") | ("cyan") | ("orange") | ("red") | ("gray") | ("blue") | ("white") | ("purple")) | ($ColorControl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorControl_ = $ColorControl$Type;
}}
declare module "packages/com/enderio/conduits/common/items/$ConduitProbeItem$State" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ConduitProbeItem$State extends $Enum<($ConduitProbeItem$State)> {
static readonly "PROBE": $ConduitProbeItem$State
static readonly "COPY_PASTE": $ConduitProbeItem$State


public static "values"(): ($ConduitProbeItem$State)[]
public static "valueOf"(arg0: string): $ConduitProbeItem$State
public "getStateText"(): $Component
get "stateText"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitProbeItem$State$Type = (("copy_paste") | ("probe")) | ($ConduitProbeItem$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitProbeItem$State_ = $ConduitProbeItem$State$Type;
}}
declare module "packages/com/enderio/conduits/common/items/$ConduitProbeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ConduitBlockEntity, $ConduitBlockEntity$Type} from "packages/com/enderio/conduits/common/conduit/block/$ConduitBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ConduitProbeItem$State, $ConduitProbeItem$State$Type} from "packages/com/enderio/conduits/common/items/$ConduitProbeItem$State"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConduitProbeItem extends $Item {
static readonly "STATE_FIELD": string
static readonly "CONDUIT_DATA": string
static readonly "IS_INSERT": string
static readonly "IS_EXTRACT": string
static readonly "INSERT_CHANNEL": string
static readonly "EXTRACT_CHANNEL": string
static readonly "REDSTONE_CONTROL": string
static readonly "REDSTONE_CHANNEL": string
static readonly "ROUND_ROBIN": string
static readonly "SELF_FEED": string
static readonly "PRIORITY": string
static readonly "BOOL_TAG": $Set<(string)>
static readonly "COLOR_CONTROL_TAG": $Set<(string)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public static "getState"(arg0: $ItemStack$Type): $ConduitProbeItem$State
public static "setState"(arg0: $ItemStack$Type, arg1: $ConduitProbeItem$State$Type, arg2: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "handlePaste"(arg0: $ConduitBlockEntity$Type, arg1: $Direction$Type, arg2: $ItemStack$Type, arg3: $Player$Type): void
public static "switchState"(arg0: $ItemStack$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitProbeItem$Type = ($ConduitProbeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitProbeItem_ = $ConduitProbeItem$Type;
}}
declare module "packages/com/enderio/conduits/common/conduit/$ConduitBundle" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$RightClickAction, $RightClickAction$Type} from "packages/com/enderio/conduits/common/conduit/$RightClickAction"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SlotType, $SlotType$Type} from "packages/com/enderio/api/conduit/$SlotType"
import {$ConnectionState, $ConnectionState$Type} from "packages/com/enderio/conduits/common/conduit/connection/$ConnectionState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ConduitGraphObject, $ConduitGraphObject$Type} from "packages/com/enderio/conduits/common/conduit/$ConduitGraphObject"
import {$ConduitType, $ConduitType$Type} from "packages/com/enderio/api/conduit/$ConduitType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ConduitData, $ConduitData$Type} from "packages/com/enderio/api/conduit/$ConduitData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ConduitBundle implements $INBTSerializable<($CompoundTag)> {
static readonly "MAX_CONDUIT_TYPES": integer

constructor(arg0: $Runnable$Type, arg1: $BlockPos$Type)

public "setOnChangedRunnable"(arg0: $Runnable$Type): void
public "removeNodeFor"<T extends $ConduitData<(T)>>(arg0: $Level$Type, arg1: $ConduitType$Type<(T)>): void
public "getTypeIndex"(arg0: $ConduitType$Type<(any)>): integer
/**
 * 
 * @deprecated
 */
public "disableType"(arg0: $Direction$Type, arg1: integer): void
public "disableType"(arg0: $Direction$Type, arg1: $ConduitType$Type<(any)>): void
public "hasFacade"(arg0: $Direction$Type): boolean
public "setFacade"(arg0: $BlockState$Type, arg1: $Direction$Type): void
public "setConnectionItem"(arg0: $Direction$Type, arg1: integer, arg2: $SlotType$Type, arg3: $ItemStack$Type): void
public "setConnectionItem"(arg0: $Direction$Type, arg1: $ConduitType$Type<(any)>, arg2: $SlotType$Type, arg3: $ItemStack$Type): void
public "getConnectionItem"(arg0: $Direction$Type, arg1: $ConduitType$Type<(any)>, arg2: $SlotType$Type): $ItemStack
public "getConnectionItem"(arg0: $Direction$Type, arg1: integer, arg2: $SlotType$Type): $ItemStack
public "hashCode"(): integer
public "addType"<T extends $ConduitData<(T)>>(arg0: $Level$Type, arg1: $ConduitType$Type<(T)>, arg2: $Player$Type): $RightClickAction
public "deepCopy"(): $ConduitBundle
public "onLoad"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "setNodeFor"(arg0: $ConduitType$Type<(any)>, arg1: $ConduitGraphObject$Type<(any)>): void
public "disconnectFrom"(arg0: $Direction$Type, arg1: $ConduitType$Type<(any)>): boolean
public "removeType"(arg0: $Level$Type, arg1: $ConduitType$Type<(any)>): boolean
public "removeType"(arg0: $Direction$Type, arg1: $ConduitType$Type<(any)>): void
public "getNodeFor"<T extends $ConduitData<(T)>>(arg0: $ConduitType$Type<(T)>): $ConduitGraphObject<(T)>
public "getConnectionState"(arg0: $Direction$Type, arg1: $ConduitType$Type<(any)>): $ConnectionState
/**
 * 
 * @deprecated
 */
public "getConnectionState"(arg0: $Direction$Type, arg1: integer): $ConnectionState
public "setConnectionState"(arg0: $Direction$Type, arg1: $ConduitType$Type<(any)>, arg2: $ConnectionState$Type): void
public "connectTo"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $ConduitType$Type<(any)>, arg4: boolean): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getTypes"(): $List<($ConduitType<(any)>)>
public "getFacade"(arg0: $Direction$Type): $Optional<($BlockState)>
public "getNodeForTypeExact"(arg0: $ConduitType$Type<(any)>): $ConduitGraphObject<(any)>
public "hasType"(arg0: $ConduitType$Type<(any)>): boolean
public "getConnectedTypes"(arg0: $Direction$Type): $List<($ConduitType<(any)>)>
public "isConnectionEnd"(arg0: $Direction$Type): boolean
public "onChanged"(): void
set "onChangedRunnable"(value: $Runnable$Type)
get "types"(): $List<($ConduitType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitBundle$Type = ($ConduitBundle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitBundle_ = $ConduitBundle$Type;
}}
declare module "packages/com/enderio/machines/common/blockentity/multienergy/$ICapacityTier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICapacityTier {

 "getStorageCapacity"(): integer

(): integer
}

export namespace $ICapacityTier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapacityTier$Type = ($ICapacityTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapacityTier_ = $ICapacityTier$Type;
}}
declare module "packages/com/enderio/api/capability/$ISideConfig" {
import {$IOMode, $IOMode$Type} from "packages/com/enderio/api/io/$IOMode"

export interface $ISideConfig {

 "setMode"(arg0: $IOMode$Type): void
 "getMode"(): $IOMode
 "cycleMode"(): void
}

export namespace $ISideConfig {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISideConfig$Type = ($ISideConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISideConfig_ = $ISideConfig$Type;
}}
declare module "packages/com/enderio/machines/common/item/$CapacitorBankItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CapacitorBankBlock, $CapacitorBankBlock$Type} from "packages/com/enderio/machines/common/block/$CapacitorBankBlock"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CapacitorBankItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $CapacitorBankBlock$Type, arg1: $Item$Properties$Type)

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacitorBankItem$Type = ($CapacitorBankItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapacitorBankItem_ = $CapacitorBankItem$Type;
}}
declare module "packages/com/enderio/api/capability/$MultiCapabilityProvider" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $MultiCapabilityProvider implements $ICapabilityProvider {

constructor()

public "add"<T>(arg0: $Capability$Type<(T)>, arg1: $LazyOptional$Type<(any)>): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiCapabilityProvider$Type = ($MultiCapabilityProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiCapabilityProvider_ = $MultiCapabilityProvider$Type;
}}
declare module "packages/com/enderio/machines/common/io/fluid/$TankAccess" {
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$MachineFluidHandler, $MachineFluidHandler$Type} from "packages/com/enderio/machines/common/io/fluid/$MachineFluidHandler"
import {$MachineBlockEntity, $MachineBlockEntity$Type} from "packages/com/enderio/machines/common/blockentity/base/$MachineBlockEntity"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$MachineFluidTank, $MachineFluidTank$Type} from "packages/com/enderio/machines/common/io/fluid/$MachineFluidTank"

export class $TankAccess {

constructor()

public "isEmpty"(arg0: $MachineBlockEntity$Type): boolean
public "isEmpty"(arg0: $MachineFluidHandler$Type): boolean
public "fill"(arg0: $MachineFluidHandler$Type, arg1: $FluidStack$Type, arg2: $IFluidHandler$FluidAction$Type): integer
public "fill"(arg0: $MachineBlockEntity$Type, arg1: $FluidStack$Type, arg2: $IFluidHandler$FluidAction$Type): integer
public "drain"(arg0: $MachineBlockEntity$Type, arg1: $FluidStack$Type, arg2: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: $MachineBlockEntity$Type, arg1: integer, arg2: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: $MachineFluidHandler$Type, arg1: $FluidStack$Type, arg2: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: $MachineFluidHandler$Type, arg1: integer, arg2: $IFluidHandler$FluidAction$Type): $FluidStack
public "getCapacity"(arg0: $MachineFluidHandler$Type): integer
public "getCapacity"(arg0: $MachineBlockEntity$Type): integer
public "getFluidAmount"(arg0: $MachineBlockEntity$Type): integer
public "getFluidAmount"(arg0: $MachineFluidHandler$Type): integer
public "isFluidValid"(arg0: $MachineBlockEntity$Type, arg1: $FluidStack$Type): boolean
public "isFluidValid"(arg0: $MachineFluidHandler$Type, arg1: $FluidStack$Type): boolean
public "getTank"(arg0: $MachineFluidHandler$Type): $MachineFluidTank
public "getTank"(arg0: $MachineBlockEntity$Type): $MachineFluidTank
public "getFluid"(arg0: $MachineFluidHandler$Type): $FluidStack
public "getFluid"(arg0: $MachineBlockEntity$Type): $FluidStack
public "setFluid"(arg0: $MachineFluidHandler$Type, arg1: $FluidStack$Type): void
public "setFluid"(arg0: $MachineBlockEntity$Type, arg1: $FluidStack$Type): void
public "isTank"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankAccess$Type = ($TankAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankAccess_ = $TankAccess$Type;
}}

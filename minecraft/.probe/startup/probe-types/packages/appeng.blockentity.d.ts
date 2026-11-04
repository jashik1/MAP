declare module "packages/appeng/blockentity/networking/$ControllerBlockEntity" {
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AENetworkPowerBlockEntity, $AENetworkPowerBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"

export class $ControllerBlockEntity extends $AENetworkPowerBlockEntity {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "updateState"(): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "onReady"(): void
public "getInternalInventory"(): $InternalInventory
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerBlockEntity$Type = ($ControllerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerBlockEntity_ = $ControllerBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/powersink/$IExternalPowerSink" {
import {$PowerMultiplier, $PowerMultiplier$Type} from "packages/appeng/api/config/$PowerMultiplier"
import {$PowerUnits, $PowerUnits$Type} from "packages/appeng/api/config/$PowerUnits"
import {$IAEPowerStorage, $IAEPowerStorage$Type} from "packages/appeng/api/networking/energy/$IAEPowerStorage"
import {$AccessRestriction, $AccessRestriction$Type} from "packages/appeng/api/config/$AccessRestriction"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export interface $IExternalPowerSink extends $IAEPowerStorage {

 "injectExternalPower"(arg0: $PowerUnits$Type, arg1: double, arg2: $Actionable$Type): double
 "getExternalPowerDemand"(arg0: $PowerUnits$Type, arg1: double): double
 "getPriority"(): integer
 "isAEPublicPowerStorage"(): boolean
 "getAEMaxPower"(): double
 "getPowerFlow"(): $AccessRestriction
 "getAECurrentPower"(): double
 "injectAEPower"(arg0: double, arg1: $Actionable$Type): double
 "extractAEPower"(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double
}

export namespace $IExternalPowerSink {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExternalPowerSink$Type = ($IExternalPowerSink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExternalPowerSink_ = $IExternalPowerSink$Type;
}}
declare module "packages/appeng/blockentity/misc/$PaintSplotchesBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$PaintSplotches, $PaintSplotches$Type} from "packages/appeng/block/paint/$PaintSplotches"
import {$Splotch, $Splotch$Type} from "packages/appeng/helpers/$Splotch"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"

export class $PaintSplotchesBlockEntity extends $AEBaseBlockEntity {
static readonly "SPLOTCHES": $ModelProperty<($PaintSplotches)>

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "cleanSide"(arg0: $Direction$Type): void
public "getModelData"(): $ModelData
public "m_183515_"(arg0: $CompoundTag$Type): void
public "addBlot"(arg0: $AEColor$Type, arg1: boolean, arg2: $Direction$Type, arg3: $Vec3$Type): void
public "addBlot"(arg0: $ItemStack$Type, arg1: $Direction$Type, arg2: $Vec3$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "neighborChanged"(): void
public "isSideValid"(arg0: $Direction$Type): boolean
public "getDots"(): $Collection<($Splotch)>
public static "tryClear"(arg0: any): void
get "modelData"(): $ModelData
get "dots"(): $Collection<($Splotch)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSplotchesBlockEntity$Type = ($PaintSplotchesBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSplotchesBlockEntity_ = $PaintSplotchesBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/networking/$CreativeEnergyCellBlockEntity" {
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$PowerMultiplier, $PowerMultiplier$Type} from "packages/appeng/api/config/$PowerMultiplier"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IAEPowerStorage, $IAEPowerStorage$Type} from "packages/appeng/api/networking/energy/$IAEPowerStorage"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$AccessRestriction, $AccessRestriction$Type} from "packages/appeng/api/config/$AccessRestriction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export class $CreativeEnergyCellBlockEntity extends $AENetworkBlockEntity implements $IAEPowerStorage {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getPriority"(): integer
public "isAEPublicPowerStorage"(): boolean
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getAEMaxPower"(): double
public "getPowerFlow"(): $AccessRestriction
public "extractAEPower"(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double
public "getAECurrentPower"(): double
public "injectAEPower"(arg0: double, arg1: $Actionable$Type): double
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "priority"(): integer
get "aEPublicPowerStorage"(): boolean
get "aEMaxPower"(): double
get "powerFlow"(): $AccessRestriction
get "aECurrentPower"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeEnergyCellBlockEntity$Type = ($CreativeEnergyCellBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeEnergyCellBlockEntity_ = $CreativeEnergyCellBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridConnectedBlockEntity, $IGridConnectedBlockEntity$Type} from "packages/appeng/me/helpers/$IGridConnectedBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$AEBaseInvBlockEntity, $AEBaseInvBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseInvBlockEntity"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"

export class $AENetworkInvBlockEntity extends $AEBaseInvBlockEntity implements $IGridConnectedBlockEntity {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getMainNode"(): $IManagedGridNode
public "m_183515_"(arg0: $CompoundTag$Type): void
public "onChunkUnloaded"(): void
public "clearRemoved"(): void
public "setRemoved"(): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "setOwner"(arg0: $Player$Type): void
public "getGridNode"(arg0: $Direction$Type): $IGridNode
public "getGridNode"(): $IGridNode
public "getActionableNode"(): $IGridNode
public "saveChanges"(): void
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "ifGridPresent"(arg0: $Consumer$Type<($IGrid$Type)>): boolean
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "mainNode"(): $IManagedGridNode
set "owner"(value: $Player$Type)
get "gridNode"(): $IGridNode
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AENetworkInvBlockEntity$Type = ($AENetworkInvBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AENetworkInvBlockEntity_ = $AENetworkInvBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/spatial/$SpatialAnchorBlockEntity" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$Setting, $Setting$Type} from "packages/appeng/api/config/$Setting"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$GridChunkEvent$GridChunkAdded, $GridChunkEvent$GridChunkAdded$Type} from "packages/appeng/api/networking/events/statistics/$GridChunkEvent$GridChunkAdded"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$GridChunkEvent$GridChunkRemoved, $GridChunkEvent$GridChunkRemoved$Type} from "packages/appeng/api/networking/events/statistics/$GridChunkEvent$GridChunkRemoved"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$IOverlayDataSource, $IOverlayDataSource$Type} from "packages/appeng/client/render/overlay/$IOverlayDataSource"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$DimensionalBlockPos, $DimensionalBlockPos$Type} from "packages/appeng/api/util/$DimensionalBlockPos"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IConfigManagerListener, $IConfigManagerListener$Type} from "packages/appeng/util/$IConfigManagerListener"

export class $SpatialAnchorBlockEntity extends $AENetworkBlockEntity implements $IGridTickable, $IConfigManagerListener, $IConfigurableObject, $IOverlayDataSource {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isActive"(): boolean
public "getOverlayBlockEntity"(): $BlockEntity
public "getOverlaySourceLocation"(): $DimensionalBlockPos
public "getConfigManager"(): $IConfigManager
public "onSettingChanged"(arg0: $IConfigManager$Type, arg1: $Setting$Type<(any)>): void
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getOverlayChunks"(): $Set<($ChunkPos)>
public "registerChunk"(arg0: $ChunkPos$Type): void
public "getOverlayColor"(): integer
public "getLoadedChunks"(): $Set<($ChunkPos)>
public "chunkAdded"(arg0: $GridChunkEvent$GridChunkAdded$Type): void
public "countLoadedChunks"(): integer
public "chunkRemoved"(arg0: $GridChunkEvent$GridChunkRemoved$Type): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "overlayBlockEntity"(): $BlockEntity
get "overlaySourceLocation"(): $DimensionalBlockPos
get "configManager"(): $IConfigManager
get "overlayChunks"(): $Set<($ChunkPos)>
get "overlayColor"(): integer
get "loadedChunks"(): $Set<($ChunkPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialAnchorBlockEntity$Type = ($SpatialAnchorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialAnchorBlockEntity_ = $SpatialAnchorBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/misc/$CrankBlockEntity" {
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ClientTickingBlockEntity, $ClientTickingBlockEntity$Type} from "packages/appeng/blockentity/$ClientTickingBlockEntity"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ServerTickingBlockEntity, $ServerTickingBlockEntity$Type} from "packages/appeng/blockentity/$ServerTickingBlockEntity"

export class $CrankBlockEntity extends $AEBaseBlockEntity implements $ServerTickingBlockEntity, $ClientTickingBlockEntity {
static readonly "POWER_PER_CRANK_TURN": integer

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "power"(): boolean
public "clientTick"(): void
public "serverTick"(): void
public "getVisibleRotation"(): float
public static "tryClear"(arg0: any): void
get "visibleRotation"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrankBlockEntity$Type = ($CrankBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrankBlockEntity_ = $CrankBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/misc/$InterfaceBlockEntity" {
import {$IPriorityHost, $IPriorityHost$Type} from "packages/appeng/helpers/$IPriorityHost"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$InterfaceLogic, $InterfaceLogic$Type} from "packages/appeng/helpers/$InterfaceLogic"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GenericStackInv, $GenericStackInv$Type} from "packages/appeng/helpers/externalstorage/$GenericStackInv"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$InterfaceLogicHost, $InterfaceLogicHost$Type} from "packages/appeng/helpers/$InterfaceLogicHost"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $InterfaceBlockEntity extends $AENetworkBlockEntity implements $IPriorityHost, $IUpgradeableObject, $IConfigurableObject, $InterfaceLogicHost {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "getMainMenuIcon"(): $ItemStack
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "getInterfaceLogic"(): $InterfaceLogic
public "clearContent"(): void
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "getUpgrades"(): $IUpgradeInventory
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "getConfigManager"(): $IConfigManager
public "getBlockEntity"(): $BlockEntity
public "getConfig"(): $GenericStackInv
public "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
public "saveChanges"(): void
public "openMenu"(arg0: $Player$Type, arg1: $MenuLocator$Type): void
public "getStorage"(): $GenericStackInv
public static "tryClear"(arg0: any): void
get "mainMenuIcon"(): $ItemStack
get "interfaceLogic"(): $InterfaceLogic
set "priority"(value: integer)
get "priority"(): integer
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "blockEntity"(): $BlockEntity
get "config"(): $GenericStackInv
get "storage"(): $GenericStackInv
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceBlockEntity$Type = ($InterfaceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceBlockEntity_ = $InterfaceBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/storage/$SkyChestBlockEntity" {
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AEBaseInvBlockEntity, $AEBaseInvBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseInvBlockEntity"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LidBlockEntity, $LidBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$LidBlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ClientTickingBlockEntity, $ClientTickingBlockEntity$Type} from "packages/appeng/blockentity/$ClientTickingBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SkyChestBlockEntity extends $AEBaseInvBlockEntity implements $ClientTickingBlockEntity, $LidBlockEntity {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "disassembleWithWrench"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockHitResult$Type, arg3: $ItemStack$Type): $InteractionResult
public "clientTick"(): void
public "recheckOpen"(): void
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public "getOpenNess"(arg0: float): float
public "getInternalInventory"(): $InternalInventory
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "isClientSide"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyChestBlockEntity$Type = ($SkyChestBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkyChestBlockEntity_ = $SkyChestBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/storage/$IOPortBlockEntity" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$StorageCell, $StorageCell$Type} from "packages/appeng/api/storage/cells/$StorageCell"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AENetworkInvBlockEntity, $AENetworkInvBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity"

export class $IOPortBlockEntity extends $AENetworkInvBlockEntity implements $IUpgradeableObject, $IConfigurableObject, $IGridTickable {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isActive"(): boolean
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getUpgrades"(): $IUpgradeInventory
public "getConfigManager"(): $IConfigManager
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "updateRedstoneState"(): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "matchesFullnessMode"(arg0: $StorageCell$Type): boolean
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "getInternalInventory"(): $InternalInventory
public "clearContent"(): void
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOPortBlockEntity$Type = ($IOPortBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOPortBlockEntity_ = $IOPortBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/networking/$CrystalResonanceGeneratorBlockEntity" {
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"

export class $CrystalResonanceGeneratorBlockEntity extends $AENetworkBlockEntity {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "isSuppressed"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "suppressed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalResonanceGeneratorBlockEntity$Type = ($CrystalResonanceGeneratorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystalResonanceGeneratorBlockEntity_ = $CrystalResonanceGeneratorBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/networking/$EnergyCellBlockEntity" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$PowerMultiplier, $PowerMultiplier$Type} from "packages/appeng/api/config/$PowerMultiplier"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$IAEPowerStorage, $IAEPowerStorage$Type} from "packages/appeng/api/networking/energy/$IAEPowerStorage"
import {$AccessRestriction, $AccessRestriction$Type} from "packages/appeng/api/config/$AccessRestriction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export class $EnergyCellBlockEntity extends $AENetworkBlockEntity implements $IAEPowerStorage, $IGridTickable {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getPriority"(): integer
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "isAEPublicPowerStorage"(): boolean
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public static "getStorageLevelFromFillFactor"(arg0: double): integer
public "getAEMaxPower"(): double
public "getPowerFlow"(): $AccessRestriction
public "extractAEPower"(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "getAECurrentPower"(): double
public "injectAEPower"(arg0: double, arg1: $Actionable$Type): double
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "priority"(): integer
get "aEPublicPowerStorage"(): boolean
get "aEMaxPower"(): double
get "powerFlow"(): $AccessRestriction
get "aECurrentPower"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyCellBlockEntity$Type = ($EnergyCellBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyCellBlockEntity_ = $EnergyCellBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/networking/$WirelessAccessPointBlockEntity" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$IWirelessAccessPoint, $IWirelessAccessPoint$Type} from "packages/appeng/api/implementations/blockentities/$IWirelessAccessPoint"
import {$DimensionalBlockPos, $DimensionalBlockPos$Type} from "packages/appeng/api/util/$DimensionalBlockPos"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IPowerChannelState, $IPowerChannelState$Type} from "packages/appeng/api/implementations/$IPowerChannelState"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$AENetworkInvBlockEntity, $AENetworkInvBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity"

export class $WirelessAccessPointBlockEntity extends $AENetworkInvBlockEntity implements $IWirelessAccessPoint, $IPowerChannelState {
static readonly "POWERED_FLAG": integer
static readonly "CHANNEL_FLAG": integer

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getLocation"(): $DimensionalBlockPos
public "isActive"(): boolean
public "getRange"(): double
public "saveChanges"(): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "onReady"(): void
public "getClientFlags"(): integer
public "getInternalInventory"(): $InternalInventory
public "getGrid"(): $IGrid
public "isPowered"(): boolean
public "getActionableNode"(): $IGridNode
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "location"(): $DimensionalBlockPos
get "active"(): boolean
get "range"(): double
get "clientFlags"(): integer
get "internalInventory"(): $InternalInventory
get "grid"(): $IGrid
get "powered"(): boolean
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessAccessPointBlockEntity$Type = ($WirelessAccessPointBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessAccessPointBlockEntity_ = $WirelessAccessPointBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/networking/$CableBusBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$CableBusContainer, $CableBusContainer$Type} from "packages/appeng/parts/$CableBusContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$DimensionalBlockPos, $DimensionalBlockPos$Type} from "packages/appeng/api/util/$DimensionalBlockPos"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$SelectedPart, $SelectedPart$Type} from "packages/appeng/api/parts/$SelectedPart"
import {$AEMultiBlockEntity, $AEMultiBlockEntity$Type} from "packages/appeng/helpers/$AEMultiBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IFacadeContainer, $IFacadeContainer$Type} from "packages/appeng/api/parts/$IFacadeContainer"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IPart, $IPart$Type} from "packages/appeng/api/parts/$IPart"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export class $CableBusBlockEntity extends $AEBaseBlockEntity implements $AEMultiBlockEntity {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isEmpty"(): boolean
public "getLocation"(): $DimensionalBlockPos
public "cleanup"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getGridNode"(arg0: $Direction$Type): $IGridNode
public "markForUpdate"(): void
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "getFacadeContainer"(): $IFacadeContainer
public "hasRedstone"(): boolean
public "getPart"(arg0: $Direction$Type): $IPart
public "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
public "getCableBus"(): $CableBusContainer
public "selectPartLocal"(arg0: $Vec3$Type): $SelectedPart
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "addPart"<T extends $IPart>(arg0: $IPartItem$Type<(T)>, arg1: $Direction$Type, arg2: $Player$Type): T
public "isBlocked"(arg0: $Direction$Type): boolean
public "partChanged"(): void
public "notifyNeighborNow"(arg0: $Direction$Type): void
public "clearContainer"(): void
public "canAddPart"(arg0: $ItemStack$Type, arg1: $Direction$Type): boolean
public "removePart"(arg0: $IPart$Type): boolean
public "removePartFromSide"(arg0: $Direction$Type): void
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "disassembleWithWrench"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockHitResult$Type, arg3: $ItemStack$Type): $InteractionResult
public "getCableConnectionLength"(arg0: $AECableType$Type): float
public "getModelData"(): $ModelData
public "m_183515_"(arg0: $CompoundTag$Type): void
public "onChunkUnloaded"(): void
public "clearRemoved"(): void
public "setRemoved"(): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "notifyNeighbors"(): void
public "getColor"(): $AEColor
public "clearContent"(): void
public "replacePart"<T extends $IPart>(arg0: $IPartItem$Type<(T)>, arg1: $Direction$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): T
public "markForSave"(): void
public "isInWorld"(): boolean
public "selectPartWorld"(arg0: $Vec3$Type): $SelectedPart
public static "tryClear"(arg0: any): void
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
get "facadeContainer"(): $IFacadeContainer
get "cableBus"(): $CableBusContainer
get "modelData"(): $ModelData
get "color"(): $AEColor
get "inWorld"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBusBlockEntity$Type = ($CableBusBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBusBlockEntity_ = $CableBusBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/misc/$LightDetectorBlockEntity" {
import {$CommonTickingBlockEntity, $CommonTickingBlockEntity$Type} from "packages/appeng/blockentity/$CommonTickingBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LightDetectorBlockEntity extends $AEBaseBlockEntity implements $CommonTickingBlockEntity {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isReady"(): boolean
public "updateLight"(): void
public "commonTick"(): void
public "clientTick"(): void
public "serverTick"(): void
public static "tryClear"(arg0: any): void
get "ready"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightDetectorBlockEntity$Type = ($LightDetectorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightDetectorBlockEntity_ = $LightDetectorBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/qnb/$QuantumBridgeBlockEntity" {
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$QnbFormedState, $QnbFormedState$Type} from "packages/appeng/block/qnb/$QnbFormedState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$ServerTickingBlockEntity, $ServerTickingBlockEntity$Type} from "packages/appeng/blockentity/$ServerTickingBlockEntity"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$QuantumCluster, $QuantumCluster$Type} from "packages/appeng/me/cluster/implementations/$QuantumCluster"
import {$IAEMultiBlock, $IAEMultiBlock$Type} from "packages/appeng/me/cluster/$IAEMultiBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$AENetworkInvBlockEntity, $AENetworkInvBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity"

export class $QuantumBridgeBlockEntity extends $AENetworkInvBlockEntity implements $IAEMultiBlock<($QuantumCluster)>, $ServerTickingBlockEntity {
static readonly "FORMED_STATE": $ModelProperty<($QnbFormedState)>
static readonly "TAG_FREQUENCY": string

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isValid"(): boolean
public "disconnect"(arg0: boolean): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getExposedInventoryForSide"(arg0: $Direction$Type): $InternalInventory
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getAdjacentQuantumBridges"(): $EnumSet<($Direction)>
public "breakClusterOnRemove"(): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getModelData"(): $ModelData
public "onChunkUnloaded"(): void
public "setRemoved"(): void
public "onReady"(): void
public "isFormed"(): boolean
public "neighborUpdate"(arg0: $BlockPos$Type): void
public "hasQES"(): boolean
public "isCorner"(): boolean
public "getCorner"(): byte
public static "assignFrequency"(arg0: $ItemStack$Type): void
public "getQEFrequency"(): long
public static "isValidEntangledSingularity"(arg0: $ItemStack$Type): boolean
public "getInternalInventory"(): $InternalInventory
public "updateStatus"(arg0: $QuantumCluster$Type, arg1: byte, arg2: boolean): void
public "getCluster"(): $QuantumCluster
public "isPowered"(): boolean
public "serverTick"(): void
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "valid"(): boolean
get "adjacentQuantumBridges"(): $EnumSet<($Direction)>
get "modelData"(): $ModelData
get "formed"(): boolean
get "corner"(): boolean
get "corner"(): byte
get "qEFrequency"(): long
get "internalInventory"(): $InternalInventory
get "cluster"(): $QuantumCluster
get "powered"(): boolean
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumBridgeBlockEntity$Type = ($QuantumBridgeBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumBridgeBlockEntity_ = $QuantumBridgeBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/crafting/$CraftingMonitorBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IColorableBlockEntity, $IColorableBlockEntity$Type} from "packages/appeng/api/implementations/blockentities/$IColorableBlockEntity"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CraftingBlockEntity, $CraftingBlockEntity$Type} from "packages/appeng/blockentity/crafting/$CraftingBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"

export class $CraftingMonitorBlockEntity extends $CraftingBlockEntity implements $IColorableBlockEntity {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
public "setJob"(arg0: $GenericStack$Type): void
public "getModelData"(): $ModelData
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "getColor"(): $AEColor
public "getJobProgress"(): $GenericStack
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
set "job"(value: $GenericStack$Type)
get "modelData"(): $ModelData
get "color"(): $AEColor
get "jobProgress"(): $GenericStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingMonitorBlockEntity$Type = ($CraftingMonitorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingMonitorBlockEntity_ = $CraftingMonitorBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/crafting/$CraftingBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$CraftingCPUCluster, $CraftingCPUCluster$Type} from "packages/appeng/me/cluster/implementations/$CraftingCPUCluster"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$AbstractCraftingUnitBlock, $AbstractCraftingUnitBlock$Type} from "packages/appeng/block/crafting/$AbstractCraftingUnitBlock"
import {$IPowerChannelState, $IPowerChannelState$Type} from "packages/appeng/api/implementations/$IPowerChannelState"
import {$IAEMultiBlock, $IAEMultiBlock$Type} from "packages/appeng/me/cluster/$IAEMultiBlock"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"

export class $CraftingBlockEntity extends $AENetworkBlockEntity implements $IAEMultiBlock<($CraftingCPUCluster)>, $IPowerChannelState, $IConfigurableObject {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "setName"(arg0: string): void
public "isActive"(): boolean
public "isValid"(): boolean
public "disconnect"(arg0: boolean): void
public "getStorageBytes"(): long
public "getConfigManager"(): $IConfigManager
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getModelData"(): $ModelData
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setBlockState"(arg0: $BlockState$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "isFormed"(): boolean
public "breakCluster"(): void
public "isCoreBlock"(): boolean
public "getUnitBlock"(): $AbstractCraftingUnitBlock<(any)>
public "updateMultiBlock"(arg0: $BlockPos$Type): void
public "updateSubType"(arg0: boolean): void
public "setPreviousState"(arg0: $CompoundTag$Type): void
public "setCoreBlock"(arg0: boolean): void
public "getPreviousState"(): $CompoundTag
public "getAcceleratorThreads"(): integer
public "updateStatus"(arg0: $CraftingCPUCluster$Type): void
public "isPowered"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
set "name"(value: string)
get "active"(): boolean
get "valid"(): boolean
get "storageBytes"(): long
get "configManager"(): $IConfigManager
get "modelData"(): $ModelData
set "blockState"(value: $BlockState$Type)
get "formed"(): boolean
get "coreBlock"(): boolean
get "unitBlock"(): $AbstractCraftingUnitBlock<(any)>
set "previousState"(value: $CompoundTag$Type)
set "coreBlock"(value: boolean)
get "previousState"(): $CompoundTag
get "acceleratorThreads"(): integer
get "powered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingBlockEntity$Type = ($CraftingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingBlockEntity_ = $CraftingBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/misc/$CondenserBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AEBaseInvBlockEntity, $AEBaseInvBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseInvBlockEntity"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CondenserBlockEntity extends $AEBaseInvBlockEntity implements $IConfigurableObject {
static readonly "BYTE_MULTIPLIER": integer

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getConfigManager"(): $IConfigManager
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "addPower"(arg0: double): void
public "getRequiredPower"(): double
public "getExternalInv"(): $InternalInventory
public "getMEStorage"(): $MEStorage
public "getFluidHandler"(): $IFluidHandler
public "getStorage"(): double
public "getInternalInventory"(): $InternalInventory
public "getStoredPower"(): double
public "isClientSide"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "configManager"(): $IConfigManager
get "requiredPower"(): double
get "externalInv"(): $InternalInventory
get "mEStorage"(): $MEStorage
get "fluidHandler"(): $IFluidHandler
get "storage"(): double
get "internalInventory"(): $InternalInventory
get "storedPower"(): double
get "clientSide"(): boolean
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
declare module "packages/appeng/blockentity/storage/$DriveBlockEntity" {
import {$IPriorityHost, $IPriorityHost$Type} from "packages/appeng/helpers/$IPriorityHost"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CellState, $CellState$Type} from "packages/appeng/api/storage/cells/$CellState"
import {$IStorageProvider, $IStorageProvider$Type} from "packages/appeng/api/storage/$IStorageProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IStorageMounts, $IStorageMounts$Type} from "packages/appeng/api/storage/$IStorageMounts"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$StorageCell, $StorageCell$Type} from "packages/appeng/api/storage/cells/$StorageCell"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"
import {$IChestOrDrive, $IChestOrDrive$Type} from "packages/appeng/api/implementations/blockentities/$IChestOrDrive"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$AENetworkInvBlockEntity, $AENetworkInvBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export class $DriveBlockEntity extends $AENetworkInvBlockEntity implements $IChestOrDrive, $IPriorityHost, $IStorageProvider {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "mountInventories"(arg0: $IStorageMounts$Type): void
public "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
public "getMainMenuIcon"(): $ItemStack
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getCellInventory"(arg0: integer): $MEStorage
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getModelData"(): $ModelData
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "getCellCount"(): integer
public "getCellStatus"(arg0: integer): $CellState
public "openMenu"(arg0: $Player$Type): void
public "getOriginalCellInventory"(arg0: integer): $StorageCell
public "getInternalInventory"(): $InternalInventory
public "getCellItem"(arg0: integer): $Item
public "isCellBlinking"(arg0: integer): boolean
public "isPowered"(): boolean
public static "requestUpdate"(arg0: $IManagedGridNode$Type): void
public "getActionableNode"(): $IGridNode
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
set "priority"(value: integer)
get "priority"(): integer
get "mainMenuIcon"(): $ItemStack
get "modelData"(): $ModelData
get "cellCount"(): integer
get "internalInventory"(): $InternalInventory
get "powered"(): boolean
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DriveBlockEntity$Type = ($DriveBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DriveBlockEntity_ = $DriveBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridConnectedBlockEntity, $IGridConnectedBlockEntity$Type} from "packages/appeng/me/helpers/$IGridConnectedBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$AEBasePoweredBlockEntity, $AEBasePoweredBlockEntity$Type} from "packages/appeng/blockentity/powersink/$AEBasePoweredBlockEntity"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"

export class $AENetworkPowerBlockEntity extends $AEBasePoweredBlockEntity implements $IGridConnectedBlockEntity {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getMainNode"(): $IManagedGridNode
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "m_183515_"(arg0: $CompoundTag$Type): void
public "onChunkUnloaded"(): void
public "clearRemoved"(): void
public "setRemoved"(): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "setOwner"(arg0: $Player$Type): void
public "getGridNode"(arg0: $Direction$Type): $IGridNode
public "getGridNode"(): $IGridNode
public "getActionableNode"(): $IGridNode
public "saveChanges"(): void
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "ifGridPresent"(arg0: $Consumer$Type<($IGrid$Type)>): boolean
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "mainNode"(): $IManagedGridNode
set "owner"(value: $Player$Type)
get "gridNode"(): $IGridNode
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AENetworkPowerBlockEntity$Type = ($AENetworkPowerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AENetworkPowerBlockEntity_ = $AENetworkPowerBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/crafting/$MolecularAssemblerBlockEntity" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICraftingMachine, $ICraftingMachine$Type} from "packages/appeng/api/implementations/blockentities/$ICraftingMachine"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"
import {$AENetworkInvBlockEntity, $AENetworkInvBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IMolecularAssemblerSupportedPattern, $IMolecularAssemblerSupportedPattern$Type} from "packages/appeng/blockentity/crafting/$IMolecularAssemblerSupportedPattern"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$PatternContainerGroup, $PatternContainerGroup$Type} from "packages/appeng/api/implementations/blockentities/$PatternContainerGroup"
import {$IPowerChannelState, $IPowerChannelState$Type} from "packages/appeng/api/implementations/$IPowerChannelState"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$AssemblerAnimationStatus, $AssemblerAnimationStatus$Type} from "packages/appeng/client/render/crafting/$AssemblerAnimationStatus"

export class $MolecularAssemblerBlockEntity extends $AENetworkInvBlockEntity implements $IUpgradeableObject, $IGridTickable, $ICraftingMachine, $IPowerChannelState {
static readonly "INV_MAIN": $ResourceLocation

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isActive"(): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getUpgrades"(): $IUpgradeInventory
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getCraftingProgress"(): integer
public "getCraftingMachineInfo"(): $PatternContainerGroup
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "pushPattern"(arg0: $IPatternDetails$Type, arg1: ($KeyCounter$Type)[], arg2: $Direction$Type): boolean
public "setAnimationStatus"(arg0: $AssemblerAnimationStatus$Type): void
public "acceptsPlans"(): boolean
public "getAnimationStatus"(): $AssemblerAnimationStatus
public "getCurrentPattern"(): $IMolecularAssemblerSupportedPattern
public "getInternalInventory"(): $InternalInventory
public "clearContent"(): void
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "isPowered"(): boolean
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public static "of"(arg0: $BlockEntity$Type, arg1: $Direction$Type): $ICraftingMachine
public static "of"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockEntity$Type): $ICraftingMachine
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "upgrades"(): $IUpgradeInventory
get "craftingProgress"(): integer
get "craftingMachineInfo"(): $PatternContainerGroup
set "animationStatus"(value: $AssemblerAnimationStatus$Type)
get "animationStatus"(): $AssemblerAnimationStatus
get "currentPattern"(): $IMolecularAssemblerSupportedPattern
get "internalInventory"(): $InternalInventory
get "powered"(): boolean
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolecularAssemblerBlockEntity$Type = ($MolecularAssemblerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolecularAssemblerBlockEntity_ = $MolecularAssemblerBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/spatial/$SpatialPylonBlockEntity$ClientState" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$SpatialPylonBlockEntity$AxisPosition, $SpatialPylonBlockEntity$AxisPosition$Type} from "packages/appeng/blockentity/spatial/$SpatialPylonBlockEntity$AxisPosition"

export class $SpatialPylonBlockEntity$ClientState extends $Record {
static readonly "DEFAULT": $SpatialPylonBlockEntity$ClientState

constructor(powered: boolean, online: boolean, axisPosition: $SpatialPylonBlockEntity$AxisPosition$Type, axis: $Direction$Axis$Type)

public "axisPosition"(): $SpatialPylonBlockEntity$AxisPosition
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "writeToStream"(arg0: $FriendlyByteBuf$Type): void
public static "readFromStream"(arg0: $FriendlyByteBuf$Type): $SpatialPylonBlockEntity$ClientState
public "axis"(): $Direction$Axis
public "writeToNbt"(arg0: $CompoundTag$Type): void
public "online"(): boolean
public "powered"(): boolean
public static "readFromNbt"(arg0: $CompoundTag$Type): $SpatialPylonBlockEntity$ClientState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonBlockEntity$ClientState$Type = ($SpatialPylonBlockEntity$ClientState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialPylonBlockEntity$ClientState_ = $SpatialPylonBlockEntity$ClientState$Type;
}}
declare module "packages/appeng/blockentity/misc/$GrowthAcceleratorBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IPowerChannelState, $IPowerChannelState$Type} from "packages/appeng/api/implementations/$IPowerChannelState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$ICrankable, $ICrankable$Type} from "packages/appeng/api/implementations/blockentities/$ICrankable"

export class $GrowthAcceleratorBlockEntity extends $AENetworkBlockEntity implements $IPowerChannelState {
static readonly "MAX_STORED_POWER": integer

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isActive"(): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "writeToStream"(arg0: $FriendlyByteBuf$Type): void
public "readFromStream"(arg0: $FriendlyByteBuf$Type): boolean
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getCrankable"(arg0: $Direction$Type): $ICrankable
public "isPowered"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "powered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowthAcceleratorBlockEntity$Type = ($GrowthAcceleratorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrowthAcceleratorBlockEntity_ = $GrowthAcceleratorBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/spatial/$SpatialPylonBlockEntity$AxisPosition" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SpatialPylonBlockEntity$AxisPosition extends $Enum<($SpatialPylonBlockEntity$AxisPosition)> {
static readonly "NONE": $SpatialPylonBlockEntity$AxisPosition
static readonly "START": $SpatialPylonBlockEntity$AxisPosition
static readonly "MIDDLE": $SpatialPylonBlockEntity$AxisPosition
static readonly "END": $SpatialPylonBlockEntity$AxisPosition


public static "values"(): ($SpatialPylonBlockEntity$AxisPosition)[]
public static "valueOf"(arg0: string): $SpatialPylonBlockEntity$AxisPosition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonBlockEntity$AxisPosition$Type = (("middle") | ("start") | ("end") | ("none")) | ($SpatialPylonBlockEntity$AxisPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialPylonBlockEntity$AxisPosition_ = $SpatialPylonBlockEntity$AxisPosition$Type;
}}
declare module "packages/appeng/blockentity/$ClientTickingBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientTickingBlockEntity {

 "clientTick"(): void

(): void
}

export namespace $ClientTickingBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientTickingBlockEntity$Type = ($ClientTickingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientTickingBlockEntity_ = $ClientTickingBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/misc/$InscriberBlockEntity" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InscriberRecipe, $InscriberRecipe$Type} from "packages/appeng/recipes/handlers/$InscriberRecipe"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$AENetworkPowerBlockEntity, $AENetworkPowerBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ICrankable, $ICrankable$Type} from "packages/appeng/api/implementations/blockentities/$ICrankable"

export class $InscriberBlockEntity extends $AENetworkPowerBlockEntity implements $IGridTickable, $IUpgradeableObject, $IConfigurableObject {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getUpgrades"(): $IUpgradeInventory
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getMaxProcessingTime"(): integer
public "getTask"(): $InscriberRecipe
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "setSmash"(arg0: boolean): void
public "isSmash"(): boolean
public "setRepeatSmash"(arg0: boolean): void
public "getCrankable"(arg0: $Direction$Type): $ICrankable
public "getProcessingTime"(): integer
public "getClientStart"(): long
public "isRepeatSmash"(): boolean
public "getInternalInventory"(): $InternalInventory
public "clearContent"(): void
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "upgrades"(): $IUpgradeInventory
get "maxProcessingTime"(): integer
get "task"(): $InscriberRecipe
set "smash"(value: boolean)
get "smash"(): boolean
set "repeatSmash"(value: boolean)
get "processingTime"(): integer
get "clientStart"(): long
get "repeatSmash"(): boolean
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InscriberBlockEntity$Type = ($InscriberBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InscriberBlockEntity_ = $InscriberBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/crafting/$PatternProviderBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$PatternProviderLogicHost, $PatternProviderLogicHost$Type} from "packages/appeng/helpers/patternprovider/$PatternProviderLogicHost"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PatternProviderLogic, $PatternProviderLogic$Type} from "packages/appeng/helpers/patternprovider/$PatternProviderLogic"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$PatternContainerGroup, $PatternContainerGroup$Type} from "packages/appeng/api/implementations/blockentities/$PatternContainerGroup"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"

export class $PatternProviderBlockEntity extends $AENetworkBlockEntity implements $PatternProviderLogicHost {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "getTargets"(): $EnumSet<($Direction)>
public "getMainMenuIcon"(): $ItemStack
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setBlockState"(arg0: $BlockState$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "getLogic"(): $PatternProviderLogic
public "getTerminalIcon"(): $AEItemKey
public "clearContent"(): void
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getBlockEntity"(): $BlockEntity
public "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
public "saveChanges"(): void
public "getConfigManager"(): $IConfigManager
public "isVisibleInTerminal"(): boolean
public "getTerminalPatternInventory"(): $InternalInventory
public "getTerminalSortOrder"(): long
public "openMenu"(arg0: $Player$Type, arg1: $MenuLocator$Type): void
public "getTerminalGroup"(): $PatternContainerGroup
public "getGrid"(): $IGrid
public static "tryClear"(arg0: any): void
get "targets"(): $EnumSet<($Direction)>
get "mainMenuIcon"(): $ItemStack
set "blockState"(value: $BlockState$Type)
get "logic"(): $PatternProviderLogic
get "terminalIcon"(): $AEItemKey
set "priority"(value: integer)
get "priority"(): integer
get "blockEntity"(): $BlockEntity
get "configManager"(): $IConfigManager
get "visibleInTerminal"(): boolean
get "terminalPatternInventory"(): $InternalInventory
get "terminalSortOrder"(): long
get "terminalGroup"(): $PatternContainerGroup
get "grid"(): $IGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternProviderBlockEntity$Type = ($PatternProviderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternProviderBlockEntity_ = $PatternProviderBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/networking/$EnergyAcceptorBlockEntity" {
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AENetworkPowerBlockEntity, $AENetworkPowerBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EnergyAcceptorBlockEntity extends $AENetworkPowerBlockEntity {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getInternalInventory"(): $InternalInventory
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyAcceptorBlockEntity$Type = ($EnergyAcceptorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyAcceptorBlockEntity_ = $EnergyAcceptorBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/storage/$SkyStoneTankBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IFluidTank, $IFluidTank$Type} from "packages/net/minecraftforge/fluids/$IFluidTank"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $SkyStoneTankBlockEntity extends $AEBaseBlockEntity {
static readonly "BUCKET_CAPACITY": integer

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onPlayerUse"(arg0: $Player$Type, arg1: $InteractionHand$Type): boolean
public "getStorage"(): $IFluidTank
public static "tryClear"(arg0: any): void
get "storage"(): $IFluidTank
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyStoneTankBlockEntity$Type = ($SkyStoneTankBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkyStoneTankBlockEntity_ = $SkyStoneTankBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/$CommonTickingBlockEntity" {
import {$ClientTickingBlockEntity, $ClientTickingBlockEntity$Type} from "packages/appeng/blockentity/$ClientTickingBlockEntity"
import {$ServerTickingBlockEntity, $ServerTickingBlockEntity$Type} from "packages/appeng/blockentity/$ServerTickingBlockEntity"

export interface $CommonTickingBlockEntity extends $ServerTickingBlockEntity, $ClientTickingBlockEntity {

 "clientTick"(): void
 "serverTick"(): void
 "commonTick"(): void

(): void
}

export namespace $CommonTickingBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonTickingBlockEntity$Type = ($CommonTickingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonTickingBlockEntity_ = $CommonTickingBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/powersink/$AEBasePoweredBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$PowerMultiplier, $PowerMultiplier$Type} from "packages/appeng/api/config/$PowerMultiplier"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PowerUnits, $PowerUnits$Type} from "packages/appeng/api/config/$PowerUnits"
import {$IExternalPowerSink, $IExternalPowerSink$Type} from "packages/appeng/blockentity/powersink/$IExternalPowerSink"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AEBaseInvBlockEntity, $AEBaseInvBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseInvBlockEntity"
import {$IAEPowerStorage, $IAEPowerStorage$Type} from "packages/appeng/api/networking/energy/$IAEPowerStorage"
import {$AccessRestriction, $AccessRestriction$Type} from "packages/appeng/api/config/$AccessRestriction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export class $AEBasePoweredBlockEntity extends $AEBaseInvBlockEntity implements $IAEPowerStorage, $IExternalPowerSink {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
public "isAEPublicPowerStorage"(): boolean
public "getInternalMaxPower"(): double
public "setInternalMaxPower"(arg0: double): void
public "setInternalPowerFlow"(arg0: $AccessRestriction$Type): void
public "setInternalCurrentPower"(arg0: double): void
public "setInternalPublicPowerStorage"(arg0: boolean): void
public "injectExternalPower"(arg0: $PowerUnits$Type, arg1: double, arg2: $Actionable$Type): double
public "getExternalPowerDemand"(arg0: $PowerUnits$Type, arg1: double): double
public "getInternalCurrentPower"(): double
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "getAEMaxPower"(): double
public "getPowerFlow"(): $AccessRestriction
public "extractAEPower"(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double
public "getAECurrentPower"(): double
public "injectAEPower"(arg0: double, arg1: $Actionable$Type): double
public "getPriority"(): integer
public "isClientSide"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "aEPublicPowerStorage"(): boolean
get "internalMaxPower"(): double
set "internalMaxPower"(value: double)
set "internalPowerFlow"(value: $AccessRestriction$Type)
set "internalCurrentPower"(value: double)
set "internalPublicPowerStorage"(value: boolean)
get "internalCurrentPower"(): double
get "aEMaxPower"(): double
get "powerFlow"(): $AccessRestriction
get "aECurrentPower"(): double
get "priority"(): integer
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBasePoweredBlockEntity$Type = ($AEBasePoweredBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBasePoweredBlockEntity_ = $AEBasePoweredBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/storage/$ChestBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$IPriorityHost, $IPriorityHost$Type} from "packages/appeng/helpers/$IPriorityHost"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CellState, $CellState$Type} from "packages/appeng/api/storage/cells/$CellState"
import {$IStorageProvider, $IStorageProvider$Type} from "packages/appeng/api/storage/$IStorageProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IStorageMounts, $IStorageMounts$Type} from "packages/appeng/api/storage/$IStorageMounts"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITerminalHost, $ITerminalHost$Type} from "packages/appeng/api/storage/$ITerminalHost"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$StorageCell, $StorageCell$Type} from "packages/appeng/api/storage/cells/$StorageCell"
import {$IColorableBlockEntity, $IColorableBlockEntity$Type} from "packages/appeng/api/implementations/blockentities/$IColorableBlockEntity"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IMEChest, $IMEChest$Type} from "packages/appeng/api/implementations/blockentities/$IMEChest"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$PowerMultiplier, $PowerMultiplier$Type} from "packages/appeng/api/config/$PowerMultiplier"
import {$AENetworkPowerBlockEntity, $AENetworkPowerBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$ServerTickingBlockEntity, $ServerTickingBlockEntity$Type} from "packages/appeng/blockentity/$ServerTickingBlockEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $ChestBlockEntity extends $AENetworkPowerBlockEntity implements $IMEChest, $ITerminalHost, $IPriorityHost, $IColorableBlockEntity, $ServerTickingBlockEntity, $IStorageProvider {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getInventory"(): $MEStorage
public "mountInventories"(arg0: $IStorageMounts$Type): void
public "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
public "getMainMenuIcon"(): $ItemStack
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
public "getCellInventory"(arg0: integer): $MEStorage
public "getConfigManager"(): $IConfigManager
public "getExposedInventoryForSide"(arg0: $Direction$Type): $InternalInventory
public "openCellInventoryMenu"(arg0: $Player$Type): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "getCellCount"(): integer
public "getCellStatus"(arg0: integer): $CellState
public "openGui"(arg0: $Player$Type): boolean
public "getMEStorage"(arg0: $Direction$Type): $MEStorage
public "getFluidHandler"(arg0: $Direction$Type): $IFluidHandler
public "getColor"(): $AEColor
public "getOriginalCellInventory"(arg0: integer): $StorageCell
public "getInternalInventory"(): $InternalInventory
public "getCellItem"(arg0: integer): $Item
public "isCellBlinking"(arg0: integer): boolean
public "isPowered"(): boolean
public "serverTick"(): void
public "getCell"(): $ItemStack
public "setCell"(arg0: $ItemStack$Type): void
public "getCloseHotkey"(): string
public static "requestUpdate"(arg0: $IManagedGridNode$Type): void
public "extractAEPower"(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "getUpgrades"(): $IUpgradeInventory
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
set "priority"(value: integer)
get "priority"(): integer
get "inventory"(): $MEStorage
get "mainMenuIcon"(): $ItemStack
get "configManager"(): $IConfigManager
get "cellCount"(): integer
get "color"(): $AEColor
get "internalInventory"(): $InternalInventory
get "powered"(): boolean
get "cell"(): $ItemStack
set "cell"(value: $ItemStack$Type)
get "closeHotkey"(): string
get "upgrades"(): $IUpgradeInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestBlockEntity$Type = ($ChestBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChestBlockEntity_ = $ChestBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/crafting/$IMolecularAssemblerSupportedPattern" {
import {$IMolecularAssemblerSupportedPattern$CraftingGridAccessor, $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$Type} from "packages/appeng/blockentity/crafting/$IMolecularAssemblerSupportedPattern$CraftingGridAccessor"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$IPatternDetails$PatternInputSink, $IPatternDetails$PatternInputSink$Type} from "packages/appeng/api/crafting/$IPatternDetails$PatternInputSink"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$IPatternDetails$IInput, $IPatternDetails$IInput$Type} from "packages/appeng/api/crafting/$IPatternDetails$IInput"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"

export interface $IMolecularAssemblerSupportedPattern extends $IPatternDetails {

 "isSlotEnabled"(arg0: integer): boolean
 "supportsPushInputsToExternalInventory"(): boolean
 "fillCraftingGrid"(arg0: ($KeyCounter$Type)[], arg1: $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$Type): void
 "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
 "assemble"(arg0: $Container$Type, arg1: $Level$Type): $ItemStack
 "isItemValid"(arg0: integer, arg1: $AEItemKey$Type, arg2: $Level$Type): boolean
 "getDefinition"(): $AEItemKey
 "getInputs"(): ($IPatternDetails$IInput)[]
 "getOutputs"(): ($GenericStack)[]
 "pushInputsToExternalInventory"(arg0: ($KeyCounter$Type)[], arg1: $IPatternDetails$PatternInputSink$Type): void
 "getPrimaryOutput"(): $GenericStack
}

export namespace $IMolecularAssemblerSupportedPattern {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMolecularAssemblerSupportedPattern$Type = ($IMolecularAssemblerSupportedPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMolecularAssemblerSupportedPattern_ = $IMolecularAssemblerSupportedPattern$Type;
}}
declare module "packages/appeng/blockentity/misc/$ChargerBlockEntity" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AENetworkPowerBlockEntity, $AENetworkPowerBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$ICrankable, $ICrankable$Type} from "packages/appeng/api/implementations/blockentities/$ICrankable"

export class $ChargerBlockEntity extends $AENetworkPowerBlockEntity implements $IGridTickable {
static readonly "POWER_MAXIMUM_AMOUNT": integer

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "activate"(arg0: $Player$Type): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getCrankable"(arg0: $Direction$Type): $ICrankable
public "isWorking"(): boolean
public "getInternalInventory"(): $InternalInventory
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "working"(): boolean
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargerBlockEntity$Type = ($ChargerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargerBlockEntity_ = $ChargerBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/$AEBaseBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Clearable, $Clearable$Type} from "packages/net/minecraft/world/$Clearable"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ISegmentedInventory, $ISegmentedInventory$Type} from "packages/appeng/api/inventories/$ISegmentedInventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"

export class $AEBaseBlockEntity extends $BlockEntity implements $Nameable, $ISegmentedInventory, $Clearable {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "setName"(arg0: string): void
public "isClientSide"(): boolean
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "getBlockEntity"(): $BlockEntity
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "markForUpdate"(): void
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "getReadyInvoked"(): byte
public "getQueuedForReady"(): byte
public "getOrientation"(): $BlockOrientation
public "saveChanges"(): void
public "disassembleWithWrench"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockHitResult$Type, arg3: $ItemStack$Type): $InteractionResult
public "getModelData"(): $ModelData
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "setBlockState"(arg0: $BlockState$Type): void
public "getCustomName"(): $Component
public "getGlobalPos"(): $GlobalPos
public "loadTag"(arg0: $CompoundTag$Type): void
public "getTop"(): $Direction
public "notLoaded"(): boolean
public "getFront"(): $Direction
public "onReady"(): void
public static "registerBlockEntityItem"(arg0: $BlockEntityType$Type<(any)>, arg1: $Item$Type): void
public "getName"(): $Component
public "getRenderBoundingBox"(): $AABB
public "clearContent"(): void
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public static "tryClear"(arg0: any): void
set "name"(value: string)
get "clientSide"(): boolean
get "blockEntity"(): $BlockEntity
get "readyInvoked"(): byte
get "queuedForReady"(): byte
get "orientation"(): $BlockOrientation
get "modelData"(): $ModelData
get "updateTag"(): $CompoundTag
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
set "blockState"(value: $BlockState$Type)
get "customName"(): $Component
get "globalPos"(): $GlobalPos
get "top"(): $Direction
get "front"(): $Direction
get "name"(): $Component
get "renderBoundingBox"(): $AABB
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBaseBlockEntity$Type = ($AEBaseBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBaseBlockEntity_ = $AEBaseBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/spatial/$SpatialPylonBlockEntity" {
import {$SpatialPylonBlockEntity$ClientState, $SpatialPylonBlockEntity$ClientState$Type} from "packages/appeng/blockentity/spatial/$SpatialPylonBlockEntity$ClientState"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IAEMultiBlock, $IAEMultiBlock$Type} from "packages/appeng/me/cluster/$IAEMultiBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$SpatialPylonCluster, $SpatialPylonCluster$Type} from "packages/appeng/me/cluster/implementations/$SpatialPylonCluster"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"

export class $SpatialPylonBlockEntity extends $AENetworkBlockEntity implements $IAEMultiBlock<($SpatialPylonCluster)> {
static readonly "STATE": $ModelProperty<($SpatialPylonBlockEntity$ClientState)>

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isValid"(): boolean
public "disconnect"(arg0: boolean): void
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getModelData"(): $ModelData
public "onChunkUnloaded"(): void
public "setRemoved"(): void
public "onReady"(): void
public "getClientState"(): $SpatialPylonBlockEntity$ClientState
public "neighborChanged"(arg0: $BlockPos$Type): void
public "updateStatus"(arg0: $SpatialPylonCluster$Type): void
public "getCluster"(): $SpatialPylonCluster
public "recalculateDisplay"(): void
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "valid"(): boolean
get "modelData"(): $ModelData
get "clientState"(): $SpatialPylonBlockEntity$ClientState
get "cluster"(): $SpatialPylonCluster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonBlockEntity$Type = ($SpatialPylonBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialPylonBlockEntity_ = $SpatialPylonBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/spatial/$SpatialIOPortBlockEntity" {
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AENetworkInvBlockEntity, $AENetworkInvBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"

export class $SpatialIOPortBlockEntity extends $AENetworkInvBlockEntity {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isActive"(): boolean
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "updateRedstoneState"(): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "getRedstoneState"(): boolean
public "getInternalInventory"(): $InternalInventory
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "redstoneState"(): boolean
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialIOPortBlockEntity$Type = ($SpatialIOPortBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialIOPortBlockEntity_ = $SpatialIOPortBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/misc/$VibrationChamberBlockEntity" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AENetworkInvBlockEntity, $AENetworkInvBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity"

export class $VibrationChamberBlockEntity extends $AENetworkInvBlockEntity implements $IGridTickable, $IUpgradeableObject {
 "isOn": boolean

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public static "hasBurnTime"(arg0: $ItemStack$Type): boolean
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public static "getBurnTime"(arg0: $ItemStack$Type): integer
public "getUpgrades"(): $IUpgradeInventory
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getEnergyPerFuelTick"(): double
public "getRemainingFuelTicks"(): double
public "getFuelItemFuelTicks"(): double
public "getCurrentFuelTicksPerTick"(): double
public "getMinFuelTicksPerTick"(): double
public "getMaxFuelTicksPerTick"(): double
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "getMaxEnergyRate"(): double
public "getInternalInventory"(): $InternalInventory
public "clearContent"(): void
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "upgrades"(): $IUpgradeInventory
get "energyPerFuelTick"(): double
get "remainingFuelTicks"(): double
get "fuelItemFuelTicks"(): double
get "currentFuelTicksPerTick"(): double
get "minFuelTicksPerTick"(): double
get "maxFuelTicksPerTick"(): double
get "maxEnergyRate"(): double
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VibrationChamberBlockEntity$Type = ($VibrationChamberBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VibrationChamberBlockEntity_ = $VibrationChamberBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/grid/$AENetworkBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridConnectedBlockEntity, $IGridConnectedBlockEntity$Type} from "packages/appeng/me/helpers/$IGridConnectedBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"

export class $AENetworkBlockEntity extends $AEBaseBlockEntity implements $IGridConnectedBlockEntity {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getMainNode"(): $IManagedGridNode
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "m_183515_"(arg0: $CompoundTag$Type): void
public "onChunkUnloaded"(): void
public "clearRemoved"(): void
public "setRemoved"(): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "setOwner"(arg0: $Player$Type): void
public "getGridNode"(arg0: $Direction$Type): $IGridNode
public "getGridNode"(): $IGridNode
public "getActionableNode"(): $IGridNode
public "saveChanges"(): void
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "ifGridPresent"(arg0: $Consumer$Type<($IGrid$Type)>): boolean
public static "tryClear"(arg0: any): void
get "mainNode"(): $IManagedGridNode
set "owner"(value: $Player$Type)
get "gridNode"(): $IGridNode
get "actionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AENetworkBlockEntity$Type = ($AENetworkBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AENetworkBlockEntity_ = $AENetworkBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/$ServerTickingBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerTickingBlockEntity {

 "serverTick"(): void

(): void
}

export namespace $ServerTickingBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerTickingBlockEntity$Type = ($ServerTickingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerTickingBlockEntity_ = $ServerTickingBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/$AEBaseInvBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$InternalInventoryHost, $InternalInventoryHost$Type} from "packages/appeng/util/inv/$InternalInventoryHost"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AEBaseInvBlockEntity extends $AEBaseBlockEntity implements $InternalInventoryHost {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "getInternalInventory"(): $InternalInventory
public "clearContent"(): void
public "isClientSide"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBaseInvBlockEntity$Type = ($AEBaseInvBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBaseInvBlockEntity_ = $AEBaseInvBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/crafting/$IMolecularAssemblerSupportedPattern$CraftingGridAccessor" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IMolecularAssemblerSupportedPattern$CraftingGridAccessor {

 "set"(arg0: integer, arg1: $ItemStack$Type): void

(arg0: integer, arg1: $ItemStack$Type): void
}

export namespace $IMolecularAssemblerSupportedPattern$CraftingGridAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$Type = ($IMolecularAssemblerSupportedPattern$CraftingGridAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMolecularAssemblerSupportedPattern$CraftingGridAccessor_ = $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$Type;
}}
declare module "packages/appeng/blockentity/misc/$CellWorkbenchBlockEntity" {
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$Type} from "packages/appeng/api/storage/cells/$ICellWorkbenchItem"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$InternalInventoryHost, $InternalInventoryHost$Type} from "packages/appeng/util/inv/$InternalInventoryHost"
import {$IConfigInvHost, $IConfigInvHost$Type} from "packages/appeng/helpers/$IConfigInvHost"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GenericStackInv, $GenericStackInv$Type} from "packages/appeng/helpers/externalstorage/$GenericStackInv"

export class $CellWorkbenchBlockEntity extends $AEBaseBlockEntity implements $IConfigurableObject, $IUpgradeableObject, $InternalInventoryHost, $IConfigInvHost {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public static "copy"(arg0: $GenericStackInv$Type, arg1: $GenericStackInv$Type): void
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "getConfig"(): $GenericStackInv
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getUpgrades"(): $IUpgradeInventory
public "getConfigManager"(): $IConfigManager
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "clearContent"(): void
public "getCell"(): $ICellWorkbenchItem
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "isClientSide"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "config"(): $GenericStackInv
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "cell"(): $ICellWorkbenchItem
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CellWorkbenchBlockEntity$Type = ($CellWorkbenchBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CellWorkbenchBlockEntity_ = $CellWorkbenchBlockEntity$Type;
}}

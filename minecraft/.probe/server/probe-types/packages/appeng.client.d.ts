declare module "packages/appeng/client/render/overlay/$IOverlayDataSource" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$DimensionalBlockPos, $DimensionalBlockPos$Type} from "packages/appeng/api/util/$DimensionalBlockPos"

export interface $IOverlayDataSource {

 "getOverlayBlockEntity"(): $BlockEntity
 "getOverlaySourceLocation"(): $DimensionalBlockPos
 "getOverlayChunks"(): $Set<($ChunkPos)>
 "getOverlayColor"(): integer
}

export namespace $IOverlayDataSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOverlayDataSource$Type = ($IOverlayDataSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOverlayDataSource_ = $IOverlayDataSource$Type;
}}
declare module "packages/appeng/client/render/crafting/$AssemblerAnimationStatus" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $AssemblerAnimationStatus {

constructor(arg0: byte, arg1: $ItemStack$Type)

public "getIs"(): $ItemStack
public "isExpired"(): boolean
public "getSpeed"(): byte
public "setAccumulatedTicks"(arg0: float): void
public "getAccumulatedTicks"(): float
public "setTicksUntilParticles"(arg0: float): void
public "getTicksUntilParticles"(): float
get "is"(): $ItemStack
get "expired"(): boolean
get "speed"(): byte
set "accumulatedTicks"(value: float)
get "accumulatedTicks"(): float
set "ticksUntilParticles"(value: float)
get "ticksUntilParticles"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblerAnimationStatus$Type = ($AssemblerAnimationStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblerAnimationStatus_ = $AssemblerAnimationStatus$Type;
}}
declare module "packages/appeng/client/render/cablebus/$CableCoreType" {
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CableCoreType extends $Enum<($CableCoreType)> {
static readonly "GLASS": $CableCoreType
static readonly "COVERED": $CableCoreType
static readonly "DENSE": $CableCoreType


public static "fromCableType"(arg0: $AECableType$Type): $CableCoreType
public static "values"(): ($CableCoreType)[]
public static "valueOf"(arg0: string): $CableCoreType
public "getTexture"(arg0: $AEColor$Type): $Material
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableCoreType$Type = (("glass") | ("covered") | ("dense")) | ($CableCoreType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableCoreType_ = $CableCoreType$Type;
}}
declare module "packages/appeng/client/render/cablebus/$FacadeRenderState" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $FacadeRenderState {

constructor(arg0: $BlockState$Type, arg1: boolean)

public "getSourceBlock"(): $BlockState
public "isTransparent"(): boolean
get "sourceBlock"(): $BlockState
get "transparent"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacadeRenderState$Type = ($FacadeRenderState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FacadeRenderState_ = $FacadeRenderState$Type;
}}
declare module "packages/appeng/client/render/cablebus/$CableBusRenderState" {
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CableCoreType, $CableCoreType$Type} from "packages/appeng/client/render/cablebus/$CableCoreType"
import {$FacadeRenderState, $FacadeRenderState$Type} from "packages/appeng/client/render/cablebus/$FacadeRenderState"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IPartModel, $IPartModel$Type} from "packages/appeng/api/parts/$IPartModel"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"

export class $CableBusRenderState {
static readonly "PROPERTY": $ModelProperty<($CableBusRenderState)>

constructor()

public "getPartModelData"(): $EnumMap<($Direction), ($ModelData)>
public "setConnectionTypes"(arg0: $EnumMap$Type<($Direction$Type), ($AECableType$Type)>): void
public "getCoreType"(): $CableCoreType
public "setCoreType"(arg0: $CableCoreType$Type): void
public "setCableColor"(arg0: $AEColor$Type): void
public "getCableType"(): $AECableType
public "setCableType"(arg0: $AECableType$Type): void
public "getConnectionTypes"(): $EnumMap<($Direction), ($AECableType)>
public "getAttachments"(): $EnumMap<($Direction), ($IPartModel)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getAttachmentConnections"(): $EnumMap<($Direction), (integer)>
public "getCableBusAdjacent"(): $EnumSet<($Direction)>
public "setCableBusAdjacent"(arg0: $EnumSet$Type<($Direction$Type)>): void
public "getFacades"(): $EnumMap<($Direction), ($FacadeRenderState)>
public "getCableColor"(): $AEColor
public "setChannelsOnSide"(arg0: $EnumMap$Type<($Direction$Type), (integer)>): void
public "getChannelsOnSide"(): $EnumMap<($Direction), (integer)>
public "setPos"(arg0: $BlockPos$Type): void
public "getPos"(): $BlockPos
public "getBoundingBoxes"(): $List<($AABB)>
get "partModelData"(): $EnumMap<($Direction), ($ModelData)>
set "connectionTypes"(value: $EnumMap$Type<($Direction$Type), ($AECableType$Type)>)
get "coreType"(): $CableCoreType
set "coreType"(value: $CableCoreType$Type)
set "cableColor"(value: $AEColor$Type)
get "cableType"(): $AECableType
set "cableType"(value: $AECableType$Type)
get "connectionTypes"(): $EnumMap<($Direction), ($AECableType)>
get "attachments"(): $EnumMap<($Direction), ($IPartModel)>
get "attachmentConnections"(): $EnumMap<($Direction), (integer)>
get "cableBusAdjacent"(): $EnumSet<($Direction)>
set "cableBusAdjacent"(value: $EnumSet$Type<($Direction$Type)>)
get "facades"(): $EnumMap<($Direction), ($FacadeRenderState)>
get "cableColor"(): $AEColor
set "channelsOnSide"(value: $EnumMap$Type<($Direction$Type), (integer)>)
get "channelsOnSide"(): $EnumMap<($Direction), (integer)>
set "pos"(value: $BlockPos$Type)
get "pos"(): $BlockPos
get "boundingBoxes"(): $List<($AABB)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBusRenderState$Type = ($CableBusRenderState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBusRenderState_ = $CableBusRenderState$Type;
}}

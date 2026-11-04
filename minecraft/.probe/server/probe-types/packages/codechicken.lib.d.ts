declare module "packages/codechicken/lib/gui/modular/lib/$ElementEvents" {
import {$GuiElement, $GuiElement$Type} from "packages/codechicken/lib/gui/modular/elements/$GuiElement"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ElementEvents {

 "getChildren"(): $List<($GuiElement<(any)>)>
 "mouseMoved"(arg0: double, arg1: double): void
 "charTyped"(arg0: character, arg1: integer, arg2: boolean): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): boolean
 "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: boolean): boolean
 "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer, arg3: boolean): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer, arg3: boolean): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "blockMouseEvents"(): boolean

(): $List<($GuiElement<(any)>)>
}

export namespace $ElementEvents {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementEvents$Type = ($ElementEvents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementEvents_ = $ElementEvents$Type;
}}
declare module "packages/codechicken/lib/vec/$Translation" {
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Matrix4, $Matrix4$Type} from "packages/codechicken/lib/vec/$Matrix4"

export class $Translation extends $Transformation {
static readonly "CENTER": $Translation
 "vec": $Vector3
static readonly "operationIndex": integer

constructor(arg0: $Translation$Type)
constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: $Vec3i$Type)
constructor(arg0: $Vector3$Type)

public "toString"(): string
public "apply"(arg0: $Vector3$Type): void
public "apply"(arg0: $Matrix4$Type): void
public "merge"(arg0: $Transformation$Type): $Transformation
public "at"(arg0: $Vector3$Type): $Transformation
public "inverse"(): $Transformation
public "applyN"(arg0: $Vector3$Type): void
public "isRedundant"(): boolean
public static "registerOperation"(): integer
public static "operationCount"(): integer
get "redundant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Translation$Type = ($Translation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Translation_ = $Translation$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$GeoParam" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Axis, $Axis$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Axis"

export class $GeoParam extends $Enum<($GeoParam)> {
static readonly "LEFT": $GeoParam
static readonly "RIGHT": $GeoParam
static readonly "WIDTH": $GeoParam
static readonly "TOP": $GeoParam
static readonly "BOTTOM": $GeoParam
static readonly "HEIGHT": $GeoParam
readonly "axis": $Axis


public static "values"(): ($GeoParam)[]
public static "valueOf"(arg0: string): $GeoParam
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoParam$Type = (("top") | ("left") | ("bottom") | ("width") | ("right") | ("height")) | ($GeoParam);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoParam_ = $GeoParam$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/container/$SlotGroup" {
import {$ModularSlot, $ModularSlot$Type} from "packages/codechicken/lib/inventory/container/modular/$ModularSlot"
import {$ModularGuiContainerMenu, $ModularGuiContainerMenu$Type} from "packages/codechicken/lib/inventory/container/modular/$ModularGuiContainerMenu"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $SlotGroup {
readonly "zone": integer
readonly "quickMoveTo": $List<(integer)>

constructor(arg0: $ModularGuiContainerMenu$Type, arg1: integer, ...arg2: (integer)[])

public "addAllSlots"(arg0: $Container$Type): void
public "addAllSlots"(arg0: $Container$Type, arg1: $BiFunction$Type<($Container$Type), (integer), ($ModularSlot$Type)>): void
public "indexOf"(arg0: $Slot$Type): integer
public "size"(): integer
public "getSlot"(arg0: integer): $ModularSlot
public "slots"(): $List<($ModularSlot)>
public "addSlot"(arg0: $ModularSlot$Type): $ModularSlot
public "addSlots"(arg0: integer, arg1: integer, arg2: $Function$Type<(integer), ($ModularSlot$Type)>): void
public "addPlayerMain"(arg0: $Inventory$Type): void
public "addPlayerBar"(arg0: $Inventory$Type): void
public "addPlayerArmor"(arg0: $Inventory$Type): void
public "addPlayerOffhand"(arg0: $Inventory$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotGroup$Type = ($SlotGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotGroup_ = $SlotGroup$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$Constraint" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$Axis, $Axis$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Axis"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export interface $Constraint {

 "get"(): double
 "axis"(): $Axis
 "markDirty"(): void
}

export namespace $Constraint {
function match(arg0: $GeoRef$Type): $ConstraintImpl$Relative
function between(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
function between(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
function between(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
function between(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
function literal(arg0: double): $ConstraintImpl$Literal
function relative(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
function relative(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
function dynamic(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
function midPoint(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
function midPoint(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
function midPoint(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constraint$Type = ($Constraint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Constraint_ = $Constraint$Type;
}}
declare module "packages/codechicken/lib/packet/$PacketCustom" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$NetworkDirection, $NetworkDirection$Type} from "packages/net/minecraftforge/network/$NetworkDirection"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$LongBuffer, $LongBuffer$Type} from "packages/java/nio/$LongBuffer"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$MCDataByteBuf, $MCDataByteBuf$Type} from "packages/codechicken/lib/data/$MCDataByteBuf"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PacketCustom extends $MCDataByteBuf {

constructor(arg0: $ByteBuf$Type)
constructor(arg0: $ResourceLocation$Type, arg1: integer)

public "append"(arg0: $ByteBuf$Type): $PacketCustom
public "append"(arg0: (byte)[]): $PacketCustom
public "getType"(): integer
public "getChannel"(): $ResourceLocation
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $PacketCustom
public "writeString"(arg0: string, arg1: integer): $PacketCustom
public "writeString"(arg0: string): $PacketCustom
public "writeBoolean"(arg0: boolean): $PacketCustom
public "writeShort"(arg0: integer): $PacketCustom
public "writeChars"(arg0: (character)[]): $PacketCustom
public "writeFloat"(arg0: float): $PacketCustom
public "writeShorts"(arg0: (short)[], arg1: integer, arg2: integer): $PacketCustom
public "writeShorts"(arg0: (short)[]): $PacketCustom
public "writeInts"(arg0: (integer)[], arg1: integer, arg2: integer): $PacketCustom
public "writeLongs"(arg0: (long)[], arg1: integer, arg2: integer): $PacketCustom
public "writeFloats"(arg0: (float)[], arg1: integer, arg2: integer): $PacketCustom
public "writePos"(arg0: $BlockPos$Type): $PacketCustom
public "writeTextComponent"(arg0: $Component$Type): $PacketCustom
public "sendToChunk"(arg0: $Level$Type, arg1: $ChunkPos$Type): void
public static "sendToChunk"(arg0: $Packet$Type<(any)>, arg1: $Level$Type, arg2: $BlockPos$Type): void
public static "sendToChunk"(arg0: $Packet$Type<(any)>, arg1: $Level$Type, arg2: integer, arg3: integer): void
public static "sendToChunk"(arg0: $Packet$Type<(any)>, arg1: $Level$Type, arg2: $ChunkPos$Type): void
public "sendToChunk"(arg0: $BlockEntity$Type): void
public "sendToChunk"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "sendToChunk"(arg0: $Level$Type, arg1: integer, arg2: integer): void
public "toPacket"(arg0: $NetworkDirection$Type): $Packet<(any)>
public "toPacket"(arg0: $NetworkDirection$Type, arg1: integer): $Packet<(any)>
public "writeRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: $ResourceLocation$Type): $PacketCustom
public "writeRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): $PacketCustom
public "writeLongBuffer"(arg0: $LongBuffer$Type): $PacketCustom
public "writeByteBuffer"(arg0: $ByteBuffer$Type): $PacketCustom
public "writeVarInts"(arg0: (integer)[], arg1: integer, arg2: integer): $PacketCustom
public "writeVarInts"(arg0: (integer)[]): $PacketCustom
public "writeVarLong"(arg0: long): $PacketCustom
public "writeBooleans"(arg0: (boolean)[]): $PacketCustom
public "writeFloatBuffer"(arg0: $FloatBuffer$Type): $PacketCustom
public "writeVec3d"(arg0: $Vec3$Type): $PacketCustom
public "writeVec3i"(arg0: $Vec3i$Type): $PacketCustom
public "writeResourceLocation"(arg0: $ResourceLocation$Type): $PacketCustom
public static "sendToServer"(arg0: $Packet$Type<(any)>): void
public "sendToServer"(): void
public "incoming"(): boolean
public static "sendToAllAround"(arg0: $Packet$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $ResourceKey$Type<($Level$Type)>): void
public "writeItemStack"(arg0: $ItemStack$Type, arg1: boolean): $PacketCustom
public "writeItemStack"(arg0: $ItemStack$Type): $PacketCustom
public "writeRegistryId"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): $PacketCustom
public "writeFluidStack"(arg0: $FluidStack$Type): $PacketCustom
public "writeEnum"(arg0: $Enum$Type<(any)>): $PacketCustom
public "sendToPlayer"(arg0: $ServerPlayer$Type): void
public static "sendToPlayer"(arg0: $Packet$Type<(any)>, arg1: $ServerPlayer$Type): void
public "sendToDimension"(arg0: $ResourceKey$Type<($Level$Type)>): void
public static "sendToDimension"(arg0: $Packet$Type<(any)>, arg1: $ResourceKey$Type<($Level$Type)>): void
public static "sendToClients"(arg0: $Packet$Type<(any)>): void
public "sendToClients"(): void
public "sendToOps"(): void
public static "sendToOps"(arg0: $Packet$Type<(any)>): void
public "sendPacketToAllAround"(arg0: $BlockPos$Type, arg1: double, arg2: $ResourceKey$Type<($Level$Type)>): void
public "sendPacketToAllAround"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$Type<($Level$Type)>): void
get "type"(): integer
get "channel"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketCustom$Type = ($PacketCustom);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketCustom_ = $PacketCustom$Type;
}}
declare module "packages/codechicken/lib/vec/$Transformation" {
import {$ITransformation, $ITransformation$Type} from "packages/codechicken/lib/vec/$ITransformation"
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$TransformationList, $TransformationList$Type} from "packages/codechicken/lib/vec/$TransformationList"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$Matrix4, $Matrix4$Type} from "packages/codechicken/lib/vec/$Matrix4"

export class $Transformation extends $ITransformation<($Vector3), ($Transformation)> implements $IVertexOperation {
static readonly "operationIndex": integer

constructor()

public "load"(arg0: $CCRenderState$Type): boolean
public "apply"(arg0: $Matrix4$Type): void
public "at"(arg0: $Vector3$Type): $Transformation
public "with"(arg0: $Transformation$Type): $TransformationList
public "applyN"(arg0: $Vector3$Type): void
public "operationID"(): integer
public "operate"(arg0: $CCRenderState$Type): void
public static "registerOperation"(): integer
public static "operationCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transformation$Type = ($Transformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transformation_ = $Transformation$Type;
}}
declare module "packages/codechicken/lib/render/pipeline/$IVertexSource" {
import {$Vertex5, $Vertex5$Type} from "packages/codechicken/lib/vec/$Vertex5"
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$AttributeKey, $AttributeKey$Type} from "packages/codechicken/lib/render/pipeline/attribute/$AttributeKey"

export interface $IVertexSource {

 "prepareVertex"(arg0: $CCRenderState$Type): void
 "getVertexCount"(): integer
 "getVertices"(): ($Vertex5)[]
 "getAttribute"<T>(arg0: $AttributeKey$Type<(T)>): T
 "hasAttribute"(arg0: $AttributeKey$Type<(any)>): boolean
}

export namespace $IVertexSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVertexSource$Type = ($IVertexSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVertexSource_ = $IVertexSource$Type;
}}
declare module "packages/codechicken/lib/render/pipeline/$CCRenderPipeline$PipelineBuilder" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$CCRenderPipeline, $CCRenderPipeline$Type} from "packages/codechicken/lib/render/pipeline/$CCRenderPipeline"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"

/**
 * 
 * @deprecated
 */
export class $CCRenderPipeline$PipelineBuilder {

constructor(arg0: $CCRenderPipeline$Type, arg1: $CCRenderState$Type)

public "build"(): void
public "add"(...arg0: ($IVertexOperation$Type)[]): $CCRenderPipeline$PipelineBuilder
public "add"(arg0: $IVertexOperation$Type): $CCRenderPipeline$PipelineBuilder
public "render"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCRenderPipeline$PipelineBuilder$Type = ($CCRenderPipeline$PipelineBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCRenderPipeline$PipelineBuilder_ = $CCRenderPipeline$PipelineBuilder$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl, $ConstraintImpl$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl$Literal extends $ConstraintImpl<($ConstraintImpl$Literal)> {

constructor(arg0: double)

public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$Literal$Type = ($ConstraintImpl$Literal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$Literal_ = $ConstraintImpl$Literal$Type;
}}
declare module "packages/codechicken/lib/render/pipeline/$CCRenderPipeline" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$VertexAttribute, $VertexAttribute$Type} from "packages/codechicken/lib/render/pipeline/$VertexAttribute"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$CCRenderPipeline$PipelineBuilder, $CCRenderPipeline$PipelineBuilder$Type} from "packages/codechicken/lib/render/pipeline/$CCRenderPipeline$PipelineBuilder"

export class $CCRenderPipeline {
/**
 * 
 * @deprecated
 */
 "forceFormatAttributes": boolean

constructor(arg0: $CCRenderState$Type)

public "setPipeline"(...arg0: ($IVertexOperation$Type)[]): void
/**
 * 
 * @deprecated
 */
public "builder"(): $CCRenderPipeline$PipelineBuilder
public "reset"(): void
public "addAttribute"(arg0: $VertexAttribute$Type<(any)>): void
public "addDependency"(arg0: $VertexAttribute$Type<(any)>): void
public "rebuild"(): void
public "addRequirement"(arg0: integer): void
public "operate"(): void
set "pipeline"(value: ($IVertexOperation$Type)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCRenderPipeline$Type = ($CCRenderPipeline);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCRenderPipeline_ = $CCRenderPipeline$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$Borders" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Borders {
 "top": double
 "left": double
 "bottom": double
 "right": double

constructor(arg0: double, arg1: double, arg2: double, arg3: double)

public "setTopBottom"(arg0: double): $Borders
public "setLeftRight"(arg0: double): $Borders
public "setBorders"(arg0: double, arg1: double): $Borders
public "setBorders"(arg0: double): $Borders
public "setBorders"(arg0: double, arg1: double, arg2: double, arg3: double): $Borders
public "left"(): double
public "left"(arg0: double): $Borders
public "right"(): double
public "right"(arg0: double): $Borders
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "top"(): double
public "top"(arg0: double): $Borders
public static "create"(arg0: double): $Borders
public static "create"(arg0: double, arg1: double): $Borders
public static "create"(arg0: double, arg1: double, arg2: double, arg3: double): $Borders
public "bottom"(): double
public "bottom"(arg0: double): $Borders
set "topBottom"(value: double)
set "leftRight"(value: double)
set "borders"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Borders$Type = ($Borders);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Borders_ = $Borders$Type;
}}
declare module "packages/codechicken/lib/inventory/container/modular/$ModularSlot" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$SlotItemHandler, $SlotItemHandler$Type} from "packages/net/minecraftforge/items/$SlotItemHandler"

export class $ModularSlot extends $SlotItemHandler {
readonly "slot": integer
readonly "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $IItemHandler$Type, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $Container$Type, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $IItemHandler$Type, arg1: integer)
constructor(arg0: $Container$Type, arg1: integer)

public "output"(): $ModularSlot
public "isActive"(): boolean
public "getMaxStackSize"(arg0: $ItemStack$Type): integer
public "mayPlace"(arg0: $ItemStack$Type): boolean
public "mayPickup"(arg0: $Player$Type): boolean
public "setStackLimit"(arg0: $Function$Type<($ItemStack$Type), (integer)>): $ModularSlot
public "setValidator"(arg0: $Predicate$Type<($ItemStack$Type)>): $ModularSlot
public "onSet"(arg0: $BiConsumer$Type<($ItemStack$Type), ($ItemStack$Type)>): $ModularSlot
public "setCanRemove"(arg0: $BiPredicate$Type<($Player$Type), ($ItemStack$Type)>): $ModularSlot
public "set"(arg0: $ItemStack$Type): void
public "setEnabled"(arg0: $Supplier$Type<(boolean)>): $ModularSlot
public "setEnabled"(arg0: boolean): $ModularSlot
public "noCheck"(): $ModularSlot
get "active"(): boolean
set "stackLimit"(value: $Function$Type<($ItemStack$Type), (integer)>)
set "validator"(value: $Predicate$Type<($ItemStack$Type)>)
set "canRemove"(value: $BiPredicate$Type<($Player$Type), ($ItemStack$Type)>)
set "enabled"(value: $Supplier$Type<(boolean)>)
set "enabled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularSlot$Type = ($ModularSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularSlot_ = $ModularSlot$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef" {
import {$GeoParam, $GeoParam$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoParam"
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $GeoRef implements $Supplier<(double)> {
readonly "geometry": $GuiParent<(any)>
readonly "parameter": $GeoParam

constructor(arg0: $GuiParent$Type<(any)>, arg1: $GeoParam$Type)

public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRef$Type = ($GeoRef);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRef_ = $GeoRef$Type;
}}
declare module "packages/codechicken/lib/render/pipeline/$IVertexOperation" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"

export interface $IVertexOperation {

 "load"(arg0: $CCRenderState$Type): boolean
 "operationID"(): integer
 "operate"(arg0: $CCRenderState$Type): void
}

export namespace $IVertexOperation {
function registerOperation(): integer
function operationCount(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVertexOperation$Type = ($IVertexOperation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVertexOperation_ = $IVertexOperation$Type;
}}
declare module "packages/codechicken/lib/vec/uv/$UV" {
import {$UVTransformation, $UVTransformation$Type} from "packages/codechicken/lib/vec/uv/$UVTransformation"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $UV implements $Copyable<($UV)> {
 "u": double
 "v": double
 "tex": integer

constructor()
constructor(arg0: $UV$Type)
constructor(arg0: double, arg1: double, arg2: integer)
constructor(arg0: double, arg1: double)

public "multiply"(arg0: double): $UV
public "add"(arg0: $UV$Type): $UV
public "equals"(arg0: any): boolean
public "toString"(): string
public "apply"(arg0: $UVTransformation$Type): $UV
public "set"(arg0: double, arg1: double): $UV
public "set"(arg0: double, arg1: double, arg2: integer): $UV
public "set"(arg0: (double)[]): $UV
public "set"(arg0: (float)[]): $UV
public "set"(arg0: $UV$Type): $UV
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UV$Type = ($UV);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UV_ = $UV$Type;
}}
declare module "packages/codechicken/lib/vec/$TransformationList" {
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Matrix4, $Matrix4$Type} from "packages/codechicken/lib/vec/$Matrix4"

export class $TransformationList extends $Transformation {
static readonly "operationIndex": integer

constructor(arg0: $TransformationList$Type)
constructor(arg0: $List$Type<($Transformation$Type)>)
constructor(...arg0: ($Transformation$Type)[])

public "toString"(): string
public "compile"(): $Matrix4
public "apply"(arg0: $Matrix4$Type): void
public "apply"(arg0: $Vector3$Type): void
public "prepend"(arg0: $Transformation$Type): $TransformationList
public "with"(arg0: $Transformation$Type): $TransformationList
public "reverseCompile"(): $Matrix4
public "applyN"(arg0: $Vector3$Type): void
public "isRedundant"(): boolean
public static "registerOperation"(): integer
public static "operationCount"(): integer
get "redundant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformationList$Type = ($TransformationList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformationList_ = $TransformationList$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Constraint, $Constraint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Constraint"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$Axis, $Axis$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Axis"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl<T extends $ConstraintImpl<(any)>> implements $Constraint {

constructor()

public "get"(): double
public "axis"(): $Axis
public "precise"(): T
public "markDirty"(): void
public "isPrecise"(): boolean
public "setAxis"(arg0: $Axis$Type): T
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$Type<T> = ($ConstraintImpl<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl_<T> = $ConstraintImpl$Type<(T)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$Position" {
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Axis, $Axis$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Axis"

export interface $Position {

 "get"(arg0: $Axis$Type): double
 "offset"(arg0: double, arg1: double): $Position
 "x"(): double
 "y"(): double
}

export namespace $Position {
function create(arg0: $GuiParent$Type<(any)>): $Position
function create(arg0: double, arg1: double): $Position
function create(arg0: $Supplier$Type<(double)>, arg1: $Supplier$Type<(double)>): $Position
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Position$Type = ($Position);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Position_ = $Position$Type;
}}
declare module "packages/codechicken/lib/gui/modular/sprite/$Material" {
import {$Material as $Material$0, $Material$Type as $Material$0$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $Material {

constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: $Function$Type<($ResourceLocation$Type), ($TextureAtlasSprite$Type)>)

public static "fromRawTexture"(arg0: $ResourceLocation$Type): $Material
public static "fromAtlas"(arg0: $ResourceLocation$Type, arg1: string): $Material
public "buffer"(arg0: $MultiBufferSource$Type, arg1: $Function$Type<($ResourceLocation$Type), ($RenderType$Type)>): $VertexConsumer
public "texture"(): $ResourceLocation
public "atlasLocation"(): $ResourceLocation
public "renderType"(arg0: $Function$Type<($ResourceLocation$Type), ($RenderType$Type)>): $RenderType
public "sprite"(): $TextureAtlasSprite
public static "fromSprite"(arg0: $TextureAtlasSprite$Type): $Material
public "getVanillaMat"(): $Material$0
get "vanillaMat"(): $Material$0
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Material$Type = ($Material);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Material_ = $Material$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl, $ConstraintImpl$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl$Relative extends $ConstraintImpl<($ConstraintImpl$Relative)> {

constructor(arg0: $GeoRef$Type, arg1: double)

public "getOffset"(): double
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
get "offset"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$Relative$Type = ($ConstraintImpl$Relative);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$Relative_ = $ConstraintImpl$Relative$Type;
}}
declare module "packages/codechicken/lib/vec/$Cuboid6" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $Cuboid6 implements $Copyable<($Cuboid6)> {
static "full": $Cuboid6
 "min": $Vector3
 "max": $Vector3

constructor(arg0: $AABB$Type)
constructor(arg0: $CompoundTag$Type)
constructor(arg0: $Cuboid6$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double)
constructor()
constructor(arg0: $Vector3$Type, arg1: $Vector3$Type)
constructor(arg0: $Vec3i$Type, arg1: $Vec3i$Type)

public "add"(arg0: $BlockPos$Type): $Cuboid6
public "add"(arg0: double, arg1: double, arg2: double): $Cuboid6
public "add"(arg0: double): $Cuboid6
public "add"(arg0: $Vector3$Type): $Cuboid6
public "add"(arg0: $Vec3i$Type): $Cuboid6
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "apply"(arg0: $Transformation$Type): $Cuboid6
public "offset"(arg0: $Cuboid6$Type): $Cuboid6
public "contains"(arg0: double, arg1: double, arg2: double): boolean
public "contains"(arg0: $Vector3$Type): boolean
public "set"(arg0: $Vector3$Type, arg1: $Vector3$Type): $Cuboid6
public "set"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): $Cuboid6
public "set"(arg0: $AABB$Type): $Cuboid6
public "set"(arg0: $Vec3i$Type, arg1: $Vec3i$Type): $Cuboid6
public "set"(arg0: $Cuboid6$Type): $Cuboid6
public "copy"(): $Cuboid6
public "expand"(arg0: double): $Cuboid6
public "expand"(arg0: $Vector3$Type): $Cuboid6
public "expand"(arg0: double, arg1: double, arg2: double): $Cuboid6
public "shape"(): $VoxelShape
public "intersects"(arg0: $Cuboid6$Type): boolean
public "subtract"(arg0: $Vec3i$Type): $Cuboid6
public "subtract"(arg0: $Vec3$Type): $Cuboid6
public "subtract"(arg0: $BlockPos$Type): $Cuboid6
public "subtract"(arg0: double, arg1: double, arg2: double): $Cuboid6
public "subtract"(arg0: double): $Cuboid6
public "subtract"(arg0: $Vector3$Type): $Cuboid6
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public "getSideSize"(arg0: $Direction$Type): double
public "equalsT"(arg0: $Cuboid6$Type): boolean
public "setSide"(arg0: $Direction$Type, arg1: double): $Cuboid6
public "setSide"(arg0: integer, arg1: double): $Cuboid6
public "getSide"(arg0: $Direction$Type): double
public "getSide"(arg0: integer): double
public "shrinkSide"(arg0: $Direction$Type, arg1: integer): $Cuboid6
public "expandSide"(arg0: $Direction$Type, arg1: integer): $Cuboid6
public "center"(): $Vector3
public "volume"(): double
public "aabb"(): $AABB
public "enclose"(arg0: $Vector3$Type): $Cuboid6
public "enclose"(arg0: $Cuboid6$Type): $Cuboid6
public "enclose"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): $Cuboid6
public "enclose"(arg0: double, arg1: double, arg2: double): $Cuboid6
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cuboid6$Type = ($Cuboid6);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cuboid6_ = $Cuboid6$Type;
}}
declare module "packages/codechicken/lib/vec/$Quat" {
import {$Rotation, $Rotation$Type} from "packages/codechicken/lib/vec/$Rotation"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Quaterniond, $Quaterniond$Type} from "packages/org/joml/$Quaterniond"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $Quat implements $Copyable<($Quat)> {
 "x": double
 "y": double
 "z": double
 "s": double

constructor(arg0: $Quaterniond$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double)
constructor()
constructor(arg0: $Quat$Type)
constructor(arg0: $Quaternionf$Type)

public "multiply"(arg0: $Quat$Type): $Quat
public "toString"(): string
public "set"(arg0: $Quat$Type): $Quat
public "set"(arg0: double, arg1: double, arg2: double, arg3: double): $Quat
public "normalize"(): $Quat
public "mag"(): double
public "rotate"(arg0: $Vector3$Type): void
public static "aroundAxis"(arg0: $Vector3$Type, arg1: double): $Quat
public static "aroundAxis"(arg0: double, arg1: double, arg2: double, arg3: double): $Quat
public "toQuaternionF"(): $Quaternionf
public "toQuaternionD"(): $Quaterniond
public "rightMultiply"(arg0: $Quat$Type): $Quat
public "setAroundAxis"(arg0: double, arg1: double, arg2: double, arg3: double): $Quat
public "setAroundAxis"(arg0: $Vector3$Type, arg1: double): $Quat
public "rotation"(): $Rotation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Quat$Type = ($Quat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Quat_ = $Quat$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$Axis" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Axis extends $Enum<($Axis)> {
static readonly "X": $Axis
static readonly "Y": $Axis


public static "values"(): ($Axis)[]
public static "valueOf"(arg0: string): $Axis
public "opposite"(): $Axis
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Axis$Type = (("x") | ("y")) | ($Axis);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Axis_ = $Axis$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle$Immutable" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Position, $Position$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Position"
import {$Rectangle, $Rectangle$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle"
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rectangle$Mutable, $Rectangle$Mutable$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle$Mutable"
import {$Axis, $Axis$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Axis"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $Rectangle$Immutable extends $Record implements $Rectangle {

constructor(position: $Position$Type, xSize: double, ySize: double)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "position"(): $Position
public "pos"(): $Position
public "width"(): double
public "height"(): double
public "xSize"(): double
public "ySize"(): double
public "toRect2i"(): $Rect2i
public "offsetSize"(arg0: double, arg1: double): $Rectangle
public "min"(arg0: $Axis$Type): double
public "max"(arg0: $Axis$Type): double
public "size"(arg0: $Axis$Type): double
public "x"(): double
public "contains"(arg0: double, arg1: double): boolean
public "combine"(...arg0: ($Rectangle$Type)[]): $Rectangle
public static "create"(arg0: $Position$Type, arg1: $Supplier$Type<(double)>, arg2: $Supplier$Type<(double)>): $Rectangle
public static "create"(arg0: $GuiParent$Type<(any)>): $Rectangle
public static "create"(arg0: double, arg1: double, arg2: double, arg3: double): $Rectangle
public static "create"(arg0: $Position$Type, arg1: double, arg2: double): $Rectangle
public "y"(): double
public "distance"(arg0: $Axis$Type, arg1: $Position$Type): double
public "intersect"(arg0: $Rectangle$Type): $Rectangle
public "setSize"(arg0: double, arg1: double): $Rectangle
public "intersects"(arg0: $Rectangle$Type): boolean
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "mutable"(): $Rectangle$Mutable
public "offsetPos"(arg0: double, arg1: double): $Rectangle
public "xMax"(): double
public "setPos"(arg0: double, arg1: double): $Rectangle
public "yMax"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rectangle$Immutable$Type = ($Rectangle$Immutable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rectangle$Immutable_ = $Rectangle$Immutable$Type;
}}
declare module "packages/codechicken/lib/vec/$ITransformation" {
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $ITransformation<Vector, Transformation extends $ITransformation<(Vector), (Transformation)>> implements $Copyable<(Transformation)> {

constructor()

public "apply"(arg0: Vector): void
public "merge"(arg0: Transformation): Transformation
public "at"(arg0: Vector): Transformation
public "with"(arg0: Transformation): Transformation
public "inverse"(): Transformation
public "$plus$plus"(arg0: Transformation): Transformation
public "isRedundant"(): boolean
public "copy"(): Transformation
get "redundant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITransformation$Type<Vector, Transformation> = ($ITransformation<(Vector), (Transformation)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITransformation_<Vector, Transformation> = $ITransformation$Type<(Vector), (Transformation)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$GeoParam, $GeoParam$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoParam"
import {$GuiElement, $GuiElement$Type} from "packages/codechicken/lib/gui/modular/elements/$GuiElement"
import {$ModularGui, $ModularGui$Type} from "packages/codechicken/lib/gui/modular/$ModularGui"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"

export interface $GuiParent<T extends $GuiParent<(any)>> {

 "get"(arg0: $GeoParam$Type): $GeoRef
 "getValue"(arg0: $GeoParam$Type): double
 "mc"(): $Minecraft
 "getChildren"(): $List<($GuiElement<(any)>)>
 "xSize"(): double
 "ySize"(): double
 "font"(): $Font
 "removeChild"(arg0: $GuiElement$Type<(any)>): void
 "addChild"(arg0: $Consumer$Type<(T)>): T
 "addChild"(arg0: $GuiElement$Type<(any)>): void
 "xMax"(): double
 "xMin"(): double
 "yMin"(): double
 "yMax"(): double
 "blockMouseOver"(arg0: $GuiElement$Type<(any)>, arg1: double, arg2: double): boolean
 "adoptChild"(arg0: $GuiElement$Type<(any)>): void
 "isDescendantOf"(arg0: $GuiElement$Type<(any)>): boolean
 "scaledScreenWidth"(): integer
 "onScreenInit"(arg0: $Minecraft$Type, arg1: $Font$Type, arg2: integer, arg3: integer): void
 "scaledScreenHeight"(): integer
 "getModularGui"(): $ModularGui
}

export namespace $GuiParent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiParent$Type<T> = ($GuiParent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiParent_<T> = $GuiParent$Type<(T)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl, $ConstraintImpl$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl$BetweenDynamic extends $ConstraintImpl<($ConstraintImpl$BetweenDynamic)> {

constructor(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>)

public "getEnd"(): double
public "clamp"(): $ConstraintImpl$BetweenDynamic
public "getStart"(): double
public "getPos"(): double
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
get "end"(): double
get "start"(): double
get "pos"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$BetweenDynamic$Type = ($ConstraintImpl$BetweenDynamic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$BetweenDynamic_ = $ConstraintImpl$BetweenDynamic$Type;
}}
declare module "packages/codechicken/lib/gui/modular/$ModularGui" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$GeoParam, $GeoParam$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoParam"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$TriConsumer, $TriConsumer$Type} from "packages/org/apache/logging/log4j/util/$TriConsumer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiRender, $GuiRender$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiRender"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$GuiElement, $GuiElement$Type} from "packages/codechicken/lib/gui/modular/elements/$GuiElement"
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiProvider, $GuiProvider$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiProvider"

export class $ModularGui implements $GuiParent<($ModularGui)> {

constructor(arg0: $GuiProvider$Type)
constructor(arg0: $GuiProvider$Type, arg1: $Screen$Type)

public "setFloatingItemDisablesToolTips"(arg0: boolean): void
public "setVanillaSlotRendering"(arg0: boolean): void
public "getJeiExclusions"(): $List<($GuiElement<(any)>)>
public "getJeiDropTargets"(): $List<($GuiElement<(any)>)>
public "initFullscreenGui"(): $ModularGui
public "getDirectRoot"(): $GuiElement<(any)>
public "setSlotHandler"(arg0: $Slot$Type, arg1: $GuiElement$Type<(any)>): void
public "onMouseClickPre"(arg0: $TriConsumer$Type<(double), (double), (integer)>): void
public "onKeyPressPost"(arg0: $TriConsumer$Type<(integer), (integer), (integer)>): void
public "setPauseScreen"(arg0: boolean): void
public "onMouseClickPost"(arg0: $TriConsumer$Type<(double), (double), (integer)>): void
/**
 * 
 * @deprecated
 */
public "createRender"(arg0: $MultiBufferSource$BufferSource$Type): $GuiRender
public "setCloseOnEscape"(arg0: boolean): void
public "onKeyPressPre"(arg0: $TriConsumer$Type<(integer), (integer), (integer)>): void
public "onResize"(arg0: $Runnable$Type): void
public "mc"(): $Minecraft
public "getRoot"(): $GuiElement<(any)>
public "onClose"(arg0: $Runnable$Type): void
public "getProvider"(): $GuiProvider
public "tick"(): void
public "getChildren"(): $List<($GuiElement<(any)>)>
public "render"(arg0: $GuiRender$Type, arg1: float): void
public "xSize"(): double
public "ySize"(): double
public "setJeiHighlightTime"(arg0: integer): void
public "getScreen"(): $Screen
public "getJeiHighlightTime"(): integer
public "font"(): $Font
public "doesFloatingItemDisableToolTips"(): boolean
public "vanillaSlotRendering"(): boolean
public "setScreen"(arg0: $Screen$Type): void
public "mouseMoved"(arg0: double, arg1: double): void
public "onGuiClose"(): void
public "closeOnEscape"(): boolean
public "isPauseScreen"(): boolean
public "setGuiTitle"(arg0: $Component$Type): void
public "removeChild"(arg0: $GuiElement$Type<(any)>): void
public "getParentScreen"(): $Screen
public "addChild"(arg0: $GuiElement$Type<(any)>): void
public "getGuiTitle"(): $Component
public "renderScreenBackground"(arg0: boolean): void
public "charTyped"(arg0: character, arg1: integer): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "renderBackground"(): boolean
public "xMax"(): double
public "xMin"(): double
public "setCursor"(arg0: $ResourceLocation$Type): void
public "onTick"(arg0: $Runnable$Type): void
public "renderOverlay"(arg0: $GuiRender$Type, arg1: float): boolean
public "yMin"(): double
public "yMax"(): double
public "adoptChild"(arg0: $GuiElement$Type<(any)>): void
public "scaledScreenWidth"(): integer
public "onScreenInit"(arg0: $Minecraft$Type, arg1: $Font$Type, arg2: integer, arg3: integer): void
public "scaledScreenHeight"(): integer
public "getModularGui"(): $ModularGui
public "computeMouseY"(): double
public "computeMouseX"(): double
public "getSlotHandler"(arg0: $Slot$Type): $GuiElement<(any)>
public "initStandardGui"(arg0: integer, arg1: integer): $ModularGui
public "get"(arg0: $GeoParam$Type): $GeoRef
public "getValue"(arg0: $GeoParam$Type): double
public "blockMouseOver"(arg0: $GuiElement$Type<(any)>, arg1: double, arg2: double): boolean
public "isDescendantOf"(arg0: $GuiElement$Type<(any)>): boolean
set "floatingItemDisablesToolTips"(value: boolean)
get "jeiExclusions"(): $List<($GuiElement<(any)>)>
get "jeiDropTargets"(): $List<($GuiElement<(any)>)>
get "directRoot"(): $GuiElement<(any)>
set "pauseScreen"(value: boolean)
get "root"(): $GuiElement<(any)>
get "provider"(): $GuiProvider
get "children"(): $List<($GuiElement<(any)>)>
set "jeiHighlightTime"(value: integer)
get "screen"(): $Screen
get "jeiHighlightTime"(): integer
set "screen"(value: $Screen$Type)
get "pauseScreen"(): boolean
set "guiTitle"(value: $Component$Type)
get "parentScreen"(): $Screen
get "guiTitle"(): $Component
set "cursor"(value: $ResourceLocation$Type)
get "modularGui"(): $ModularGui
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularGui$Type = ($ModularGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularGui_ = $ModularGui$Type;
}}
declare module "packages/codechicken/lib/render/pipeline/$VertexAttribute" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$AttributeKey, $AttributeKey$Type} from "packages/codechicken/lib/render/pipeline/attribute/$AttributeKey"

export class $VertexAttribute<T> implements $IVertexOperation {
 "active": boolean

constructor(arg0: $AttributeKey$Type<(T)>)

public "operationID"(): integer
public "load"(arg0: $CCRenderState$Type): boolean
public static "registerOperation"(): integer
public "operate"(arg0: $CCRenderState$Type): void
public static "operationCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexAttribute$Type<T> = ($VertexAttribute<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexAttribute_<T> = $VertexAttribute$Type<(T)>;
}}
declare module "packages/codechicken/lib/render/$CCRenderState" {
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$CCRenderPipeline, $CCRenderPipeline$Type} from "packages/codechicken/lib/render/pipeline/$CCRenderPipeline"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Matrix4, $Matrix4$Type} from "packages/codechicken/lib/vec/$Matrix4"
import {$IVertexSource, $IVertexSource$Type} from "packages/codechicken/lib/render/pipeline/$IVertexSource"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$Colour, $Colour$Type} from "packages/codechicken/lib/colour/$Colour"
import {$VertexFormat$Mode, $VertexFormat$Mode$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$LightMatrix, $LightMatrix$Type} from "packages/codechicken/lib/render/lighting/$LightMatrix"
import {$CachedFormat, $CachedFormat$Type} from "packages/codechicken/lib/model/$CachedFormat"
import {$VertexAttribute, $VertexAttribute$Type} from "packages/codechicken/lib/render/pipeline/$VertexAttribute"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import {$LC, $LC$Type} from "packages/codechicken/lib/render/lighting/$LC"
import {$Vertex5, $Vertex5$Type} from "packages/codechicken/lib/vec/$Vertex5"
import {$ColourRGBA, $ColourRGBA$Type} from "packages/codechicken/lib/colour/$ColourRGBA"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $CCRenderState {
readonly "normalAttrib": $VertexAttribute<(($Vector3)[])>
readonly "colourAttrib": $VertexAttribute<((integer)[])>
readonly "lightingAttrib": $VertexAttribute<((integer)[])>
readonly "sideAttrib": $VertexAttribute<((integer)[])>
readonly "lightCoordAttrib": $VertexAttribute<(($LC)[])>
 "model": $IVertexSource
 "firstVertexIndex": integer
 "lastVertexIndex": integer
 "vertexIndex": integer
 "pipeline": $CCRenderPipeline
 "r": $VertexConsumer
 "fmt": $VertexFormat
 "cFmt": $CachedFormat
 "baseColour": integer
 "alphaOverride": integer
 "computeLighting": boolean
 "lightMatrix": $LightMatrix
readonly "vert": $Vertex5
readonly "normal": $Vector3
 "colour": integer
 "brightness": integer
 "overlay": integer
 "side": integer
 "lc": $LC
 "sprite": $TextureAtlasSprite


public "preRenderWorld"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type): void
public "setVertexRange"(arg0: integer, arg1: integer): void
public "runPipeline"(): void
public "writeVert"(): void
public "setFluidColour"(arg0: $FluidStack$Type): void
public "setFluidColour"(arg0: $FluidStack$Type, arg1: integer): void
public "bindModel"(arg0: $IVertexSource$Type): void
public "setBrightness"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type): void
public "setBrightness"(arg0: $Entity$Type, arg1: float): void
public "setPipeline"(...arg0: ($IVertexOperation$Type)[]): void
public "setPipeline"(arg0: $IVertexSource$Type, arg1: integer, arg2: integer, ...arg3: ($IVertexOperation$Type)[]): void
public static "instance"(): $CCRenderState
public "bind"(arg0: $BufferBuilder$Type): void
public "bind"(arg0: $VertexConsumer$Type, arg1: $VertexFormat$Type): void
public "bind"(arg0: $RenderType$Type, arg1: $MultiBufferSource$Type, arg2: $Matrix4$Type): void
public "bind"(arg0: $RenderType$Type, arg1: $MultiBufferSource$Type, arg2: $PoseStack$Type): void
public "bind"(arg0: $RenderType$Type, arg1: $MultiBufferSource$Type): void
public "reset"(): void
public "render"(...arg0: ($IVertexOperation$Type)[]): void
public "render"(): void
public "draw"(): void
public "getVertexFormat"(): $VertexFormat
public "getConsumer"(): $VertexConsumer
public "setModel"(arg0: $IVertexSource$Type): void
public "setModel"(arg0: $IVertexSource$Type, arg1: integer, arg2: integer): void
public "setColour"(arg0: $Colour$Type): void
public "getColour"(): $ColourRGBA
public "startDrawing"(arg0: $VertexFormat$Mode$Type, arg1: $VertexFormat$Type): $BufferBuilder
public "startDrawing"(arg0: $VertexFormat$Mode$Type, arg1: $VertexFormat$Type, arg2: $BufferBuilder$Type): $BufferBuilder
set "fluidColour"(value: $FluidStack$Type)
set "pipeline"(value: ($IVertexOperation$Type)[])
get "vertexFormat"(): $VertexFormat
get "consumer"(): $VertexConsumer
set "model"(value: $IVertexSource$Type)
set "colour"(value: $Colour$Type)
get "colour"(): $ColourRGBA
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCRenderState$Type = ($CCRenderState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCRenderState_ = $CCRenderState$Type;
}}
declare module "packages/codechicken/lib/colour/$ColourRGBA" {
import {$Colour, $Colour$Type} from "packages/codechicken/lib/colour/$Colour"

export class $ColourRGBA extends $Colour {
 "r": byte
 "g": byte
 "b": byte
 "a": byte

constructor(arg0: $ColourRGBA$Type)
constructor(arg0: (float)[])
constructor(arg0: integer)
constructor(arg0: double, arg1: double, arg2: double, arg3: double)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public static "multiply"(arg0: integer, arg1: integer): integer
public "set"(arg0: integer): $Colour
public "copy"(): $Colour
public "pack"(): integer
public static "pack"(arg0: $Colour$Type): integer
public "packArray"(): (float)[]
public static "multiplyC"(arg0: integer, arg1: float): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColourRGBA$Type = ($ColourRGBA);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColourRGBA_ = $ColourRGBA$Type;
}}
declare module "packages/codechicken/lib/colour/$Colour" {
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $Colour implements $Copyable<($Colour)> {
 "r": byte
 "g": byte
 "b": byte
 "a": byte

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $Colour$Type)

public "multiply"(arg0: $Colour$Type): $Colour
public "add"(arg0: $Colour$Type): $Colour
public "equals"(arg0: any): boolean
public "equals"(arg0: $Colour$Type): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(arg0: double): $Colour
public "b"(): integer
public "a"(): integer
public "set"(arg0: double, arg1: double, arg2: double, arg3: double): $Colour
public "set"(arg0: $Colour$Type): $Colour
public "set"(arg0: integer): $Colour
public "set"(arg0: float, arg1: float, arg2: float, arg3: float): $Colour
public "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Colour
public "set"(arg0: (double)[]): $Colour
public "set"(arg0: (float)[]): $Colour
public "g"(): integer
public "r"(): integer
public "sub"(arg0: $Colour$Type): $Colour
public "rgb"(): integer
public static "pack"(arg0: (integer)[]): integer
public "pack"(): integer
public "gF"(): float
public "gF"(arg0: float): $Colour
public "gF"(arg0: integer): $Colour
public "invert"(): $Colour
public "interpolate"(arg0: $Colour$Type, arg1: double): $Colour
public static "unpack"(arg0: integer): (integer)[]
public "argb"(): integer
public "packArray"(): (float)[]
public "aF"(arg0: float): $Colour
public "aF"(arg0: integer): $Colour
public "aF"(): float
public "rF"(): float
public "rF"(arg0: float): $Colour
public "rF"(arg0: integer): $Colour
public "rgba"(): integer
public static "packARGB"(arg0: byte, arg1: byte, arg2: byte, arg3: byte): integer
public static "packARGB"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public static "packARGB"(arg0: double, arg1: double, arg2: double, arg3: double): integer
public static "packARGB"(arg0: (float)[]): integer
public "multiplyC"(arg0: double): $Colour
public "getARGB"(): (float)[]
public static "packRGBA"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public static "packRGBA"(arg0: (float)[]): integer
public static "packRGBA"(arg0: byte, arg1: byte, arg2: byte, arg3: byte): integer
public static "packRGBA"(arg0: double, arg1: double, arg2: double, arg3: double): integer
public static "flipABGR"(arg0: integer): integer
public "getRGBA"(): (float)[]
public "bF"(arg0: float): $Colour
public "bF"(arg0: integer): $Colour
public "bF"(): float
get "aRGB"(): (float)[]
get "rGBA"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Colour$Type = ($Colour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Colour_ = $Colour$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstrainedGeometry" {
import {$GeoParam, $GeoParam$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoParam"
import {$Rectangle, $Rectangle$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$Constraints$LayoutPos, $Constraints$LayoutPos$Type} from "packages/codechicken/lib/gui/modular/lib/$Constraints$LayoutPos"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Position, $Position$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Position"
import {$GuiElement, $GuiElement$Type} from "packages/codechicken/lib/gui/modular/elements/$GuiElement"
import {$ModularGui, $ModularGui$Type} from "packages/codechicken/lib/gui/modular/$ModularGui"
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Constraint, $Constraint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Constraint"
import {$Rectangle$Mutable, $Rectangle$Mutable$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle$Mutable"

export class $ConstrainedGeometry<T extends $ConstrainedGeometry<(T)>> implements $GuiParent<(T)> {

constructor()

public "get"(arg0: $GeoParam$Type): $GeoRef
public "validate"(): void
public "getParent"(arg0: $GeoParam$Type): $GeoRef
public "getParent"(): $GuiParent<(any)>
public "setSize"(arg0: double, arg1: double): T
public "getPosition"(): $Position
public "placeInside"(arg0: $ConstrainedGeometry$Type<(any)>, arg1: $Constraints$LayoutPos$Type, arg2: double, arg3: double): T
public "placeInside"(arg0: $ConstrainedGeometry$Type<(any)>, arg1: $Constraints$LayoutPos$Type): T
public "constrain"(arg0: $GeoParam$Type, arg1: $Constraint$Type): T
public "placeOutside"(arg0: $ConstrainedGeometry$Type<(any)>, arg1: $Constraints$LayoutPos$Type, arg2: double, arg3: double): T
public "placeOutside"(arg0: $ConstrainedGeometry$Type<(any)>, arg1: $Constraints$LayoutPos$Type): T
public "xSize"(): double
public "ySize"(): double
public "strictMode"(arg0: boolean): T
public "setHeight"(arg0: double): T
public "setWidth"(arg0: double): T
public "xMax"(): double
public "xMin"(): double
public "setPos"(arg0: double, arg1: double): T
public "yMin"(): double
public "yMax"(): double
public "setXPos"(arg0: double): T
public "setYPos"(arg0: double): T
public "getRectangle"(): $Rectangle
public "addBoundsToRect"(arg0: $Rectangle$Mutable$Type): $Rectangle$Mutable
public "xCenter"(): double
public "getChildBounds"(): $Rectangle$Mutable
public "clearConstraints"(): T
public "clearGeometryCache"(): void
public "yCenter"(): double
public "getEnclosingRect"(): $Rectangle$Mutable
public "getValue"(arg0: $GeoParam$Type): double
public "mc"(): $Minecraft
public "getChildren"(): $List<($GuiElement<(any)>)>
public "font"(): $Font
public "removeChild"(arg0: $GuiElement$Type<(any)>): void
public "addChild"(arg0: $Consumer$Type<(T)>): T
public "addChild"(arg0: $GuiElement$Type<(any)>): void
public "blockMouseOver"(arg0: $GuiElement$Type<(any)>, arg1: double, arg2: double): boolean
public "adoptChild"(arg0: $GuiElement$Type<(any)>): void
public "isDescendantOf"(arg0: $GuiElement$Type<(any)>): boolean
public "scaledScreenWidth"(): integer
public "onScreenInit"(arg0: $Minecraft$Type, arg1: $Font$Type, arg2: integer, arg3: integer): void
public "scaledScreenHeight"(): integer
public "getModularGui"(): $ModularGui
get "parent"(): $GuiParent<(any)>
get "position"(): $Position
set "height"(value: double)
set "width"(value: double)
set "xPos"(value: double)
set "yPos"(value: double)
get "rectangle"(): $Rectangle
get "childBounds"(): $Rectangle$Mutable
get "enclosingRect"(): $Rectangle$Mutable
get "children"(): $List<($GuiElement<(any)>)>
get "modularGui"(): $ModularGui
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstrainedGeometry$Type<T> = ($ConstrainedGeometry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstrainedGeometry_<T> = $ConstrainedGeometry$Type<(T)>;
}}
declare module "packages/codechicken/lib/render/pipeline/attribute/$AttributeKey" {
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"

export class $AttributeKey<T> {
readonly "attributeKeyIndex": integer
readonly "operationIndex": integer

constructor(arg0: string)

public "copyRange"(arg0: T, arg1: integer, arg2: T, arg3: integer, arg4: integer): T
public "copy"(arg0: T, arg1: integer): T
public static "create"<T>(arg0: string, arg1: $IntFunction$Type<(T)>): $AttributeKey<(T)>
public "createDefault"(arg0: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeKey$Type<T> = ($AttributeKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeKey_<T> = $AttributeKey$Type<(T)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/$GuiRender$RenderWrapper" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $GuiRender$RenderWrapper extends $GuiGraphics {
static readonly "MAX_GUI_Z": float
static readonly "MIN_GUI_Z": float
 "tooltipStack": $ItemStack


public "drawManaged"(arg0: $Runnable$Type): void
public "flushIfUnmanaged"(): void
public "flush"(): void
public "flushIfManaged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiRender$RenderWrapper$Type = ($GuiRender$RenderWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiRender$RenderWrapper_ = $GuiRender$RenderWrapper$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle" {
import {$Position, $Position$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Position"
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rectangle$Mutable, $Rectangle$Mutable$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle$Mutable"
import {$Axis, $Axis$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Axis"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $Rectangle {

 "toRect2i"(): $Rect2i
 "offsetSize"(arg0: double, arg1: double): $Rectangle
 "min"(arg0: $Axis$Type): double
 "max"(arg0: $Axis$Type): double
 "size"(arg0: $Axis$Type): double
 "x"(): double
 "contains"(arg0: double, arg1: double): boolean
 "combine"(...arg0: ($Rectangle$Type)[]): $Rectangle
 "pos"(): $Position
 "y"(): double
 "distance"(arg0: $Axis$Type, arg1: $Position$Type): double
 "intersect"(arg0: $Rectangle$Type): $Rectangle
 "setSize"(arg0: double, arg1: double): $Rectangle
 "width"(): double
 "height"(): double
 "intersects"(arg0: $Rectangle$Type): boolean
 "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "mutable"(): $Rectangle$Mutable
 "offsetPos"(arg0: double, arg1: double): $Rectangle
 "xMax"(): double
 "setPos"(arg0: double, arg1: double): $Rectangle
 "yMax"(): double
}

export namespace $Rectangle {
function create(arg0: $Position$Type, arg1: $Supplier$Type<(double)>, arg2: $Supplier$Type<(double)>): $Rectangle
function create(arg0: $GuiParent$Type<(any)>): $Rectangle
function create(arg0: double, arg1: double, arg2: double, arg3: double): $Rectangle
function create(arg0: $Position$Type, arg1: double, arg2: double): $Rectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rectangle$Type = ($Rectangle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rectangle_ = $Rectangle$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/$Constraints$LayoutPos" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Constraints$LayoutPos extends $Enum<($Constraints$LayoutPos)> {
static readonly "TOP_LEFT": $Constraints$LayoutPos
static readonly "TOP_CENTER": $Constraints$LayoutPos
static readonly "TOP_RIGHT": $Constraints$LayoutPos
static readonly "MIDDLE_RIGHT": $Constraints$LayoutPos
static readonly "MIDDLE_LEFT": $Constraints$LayoutPos
static readonly "BOTTOM_RIGHT": $Constraints$LayoutPos
static readonly "BOTTOM_CENTER": $Constraints$LayoutPos
static readonly "BOTTOM_LEFT": $Constraints$LayoutPos


public static "values"(): ($Constraints$LayoutPos)[]
public static "valueOf"(arg0: string): $Constraints$LayoutPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constraints$LayoutPos$Type = (("top_right") | ("top_center") | ("middle_right") | ("top_left") | ("middle_left") | ("bottom_right") | ("bottom_left") | ("bottom_center")) | ($Constraints$LayoutPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Constraints$LayoutPos_ = $Constraints$LayoutPos$Type;
}}
declare module "packages/codechicken/lib/vec/uv/$UVTransformationList" {
import {$UVTransformation, $UVTransformation$Type} from "packages/codechicken/lib/vec/uv/$UVTransformation"
import {$UV, $UV$Type} from "packages/codechicken/lib/vec/uv/$UV"

export class $UVTransformationList extends $UVTransformation {
static readonly "operationIndex": integer

constructor(...arg0: ($UVTransformation$Type)[])
constructor(arg0: $UVTransformationList$Type)

public "toString"(): string
public "apply"(arg0: $UV$Type): void
public "copy"(): $UVTransformation
public "prepend"(arg0: $UVTransformation$Type): $UVTransformationList
public "with"(arg0: $UVTransformation$Type): $UVTransformationList
public "inverse"(): $UVTransformation
public "isRedundant"(): boolean
public static "registerOperation"(): integer
public static "operationCount"(): integer
get "redundant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UVTransformationList$Type = ($UVTransformationList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UVTransformationList_ = $UVTransformationList$Type;
}}
declare module "packages/codechicken/lib/data/$MCDataByteBuf" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$DataInput, $DataInput$Type} from "packages/java/io/$DataInput"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CharBuffer, $CharBuffer$Type} from "packages/java/nio/$CharBuffer"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DoubleBuffer, $DoubleBuffer$Type} from "packages/java/nio/$DoubleBuffer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$ShortBuffer, $ShortBuffer$Type} from "packages/java/nio/$ShortBuffer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LongBuffer, $LongBuffer$Type} from "packages/java/nio/$LongBuffer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$DataOutput, $DataOutput$Type} from "packages/java/io/$DataOutput"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export class $MCDataByteBuf implements $MCDataInput, $MCDataOutput {

constructor()
constructor(arg0: $ByteBuf$Type)

public "writeInt"(arg0: integer): $MCDataOutput
public "readInt"(): integer
public "writeChar"(arg0: integer): $MCDataOutput
public "readChar"(): character
public "readLong"(): long
public "writeLong"(arg0: long): $MCDataOutput
public "readBoolean"(): boolean
public "readByte"(): byte
public "readShort"(): short
public "readDouble"(): double
public "writeBoolean"(arg0: boolean): $MCDataOutput
public "writeByte"(arg0: integer): $MCDataOutput
public "writeShort"(arg0: integer): $MCDataOutput
public "writeDouble"(arg0: double): $MCDataOutput
public "writeFloat"(arg0: float): $MCDataOutput
public "readFloat"(): float
public static "readFromNBT"(arg0: $CompoundTag$Type, arg1: string): $MCDataByteBuf
public "writeToNBT"(arg0: $CompoundTag$Type, arg1: string): $CompoundTag
public "toPacketBuffer"(): $FriendlyByteBuf
public "readUShort"(): integer
public "readUByte"(): short
public "toTag"(): $Tag
public static "fromTag"(arg0: $Tag$Type): $MCDataByteBuf
public "readBytes"(): (byte)[]
public "readString"(): string
public "toInputStream"(): $InputStream
public "readEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<(T)>): T
public "readInts"(): (integer)[]
public "readLongs"(): (long)[]
public "readFloats"(): (float)[]
public "readDoubles"(): (double)[]
public "readShorts"(): (short)[]
public "readChars"(): (character)[]
public "readBooleans"(): (boolean)[]
public "readResourceLocation"(): $ResourceLocation
public "readRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>): T
public "readPos"(): $BlockPos
public "readTextComponent"(): $MutableComponent
public "readVarLongs"(): (long)[]
public "readVec3f"(): $Vector3f
public "readVec3i"(): $Vec3i
public "readIntBuffer"(): $IntBuffer
public "readCharBuffer"(): $CharBuffer
public "readSignedVarInts"(): (integer)[]
public "readSignedVarInt"(): integer
public "readCuboid"(): $Cuboid6
public "readByteBuffer"(): $ByteBuffer
public "readFloatBuffer"(): $FloatBuffer
public "readShortBuffer"(): $ShortBuffer
public "readSignedVarLong"(): long
public "readUUID"(): $UUID
public "readVarInts"(): (integer)[]
public "readLongBuffer"(): $LongBuffer
public "readVarLong"(): long
public "readDirection"(): $Direction
public "readDoubleBuffer"(): $DoubleBuffer
public "readSignedVarLongs"(): (long)[]
public "readVector"(): $Vector3
public "readItemStack"(): $ItemStack
public "readCompoundNBT"(): $CompoundTag
public "readVec3d"(): $Vec3
public "readByteBuf"(): $ByteBuf
public "toDataInput"(): $DataInput
public "readVarInt"(): integer
public "readFluidStack"(): $FluidStack
public "readRegistryId"<T>(): T
public "append"(arg0: (byte)[]): $MCDataOutput
public "append"(arg0: $ByteBuf$Type): $MCDataOutput
public "writeBytes"(arg0: (byte)[]): $MCDataOutput
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeString"(arg0: string, arg1: integer): $MCDataOutput
public "writeString"(arg0: string): $MCDataOutput
public "writeChars"(arg0: (character)[]): $MCDataOutput
public "writeChars"(arg0: (character)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeShorts"(arg0: (short)[]): $MCDataOutput
public "writeShorts"(arg0: (short)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeInts"(arg0: (integer)[]): $MCDataOutput
public "writeInts"(arg0: (integer)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeLongs"(arg0: (long)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeLongs"(arg0: (long)[]): $MCDataOutput
public "writeFloats"(arg0: (float)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeFloats"(arg0: (float)[]): $MCDataOutput
public "writeDoubles"(arg0: (double)[]): $MCDataOutput
public "writeDoubles"(arg0: (double)[], arg1: integer, arg2: integer): $MCDataOutput
public "writePos"(arg0: $BlockPos$Type): $MCDataOutput
public "writeTextComponent"(arg0: $Component$Type): $MCDataOutput
public "writeUUID"(arg0: $UUID$Type): $MCDataOutput
public "writeVec3f"(arg0: $Vector3f$Type): $MCDataOutput
public "writeVector"(arg0: $Vector3$Type): $MCDataOutput
public "writeRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: $ResourceLocation$Type): $MCDataOutput
public "writeRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): $MCDataOutput
public "writeSignedVarLongs"(arg0: (long)[]): $MCDataOutput
public "writeSignedVarLongs"(arg0: (long)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeVarLongs"(arg0: (long)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeVarLongs"(arg0: (long)[]): $MCDataOutput
public "writeShortBuffer"(arg0: $ShortBuffer$Type): $MCDataOutput
public "writeIntBuffer"(arg0: $IntBuffer$Type): $MCDataOutput
public "writeLongBuffer"(arg0: $LongBuffer$Type): $MCDataOutput
public "writeSignedVarInts"(arg0: (integer)[]): $MCDataOutput
public "writeSignedVarInts"(arg0: (integer)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeSignedVarLong"(arg0: long): $MCDataOutput
public "writeByteBuffer"(arg0: $ByteBuffer$Type): $MCDataOutput
public "writeVarInts"(arg0: (integer)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeVarInts"(arg0: (integer)[]): $MCDataOutput
public "writeVarLong"(arg0: long): $MCDataOutput
public "writeDoubleBuffer"(arg0: $DoubleBuffer$Type): $MCDataOutput
public "writeSignedVarInt"(arg0: integer): $MCDataOutput
public "writeCuboid"(arg0: $Cuboid6$Type): $MCDataOutput
public "writeBooleans"(arg0: (boolean)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeBooleans"(arg0: (boolean)[]): $MCDataOutput
public "writeCharBuffer"(arg0: $CharBuffer$Type): $MCDataOutput
public "writeFloatBuffer"(arg0: $FloatBuffer$Type): $MCDataOutput
public "toDataOutput"(): $DataOutput
public "writeDirection"(arg0: $Direction$Type): $MCDataOutput
public "writeCompoundNBT"(arg0: $CompoundTag$Type): $MCDataOutput
public "toOutputStream"(): $OutputStream
public "writeVec3d"(arg0: $Vec3$Type): $MCDataOutput
public "writeByteBuf"(arg0: $ByteBuf$Type): $MCDataOutput
public "writeVec3i"(arg0: $Vec3i$Type): $MCDataOutput
public "writeResourceLocation"(arg0: $ResourceLocation$Type): $MCDataOutput
public "writeVarInt"(arg0: integer): $MCDataOutput
public "writeItemStack"(arg0: $ItemStack$Type, arg1: boolean): $MCDataOutput
public "writeItemStack"(arg0: $ItemStack$Type): $MCDataOutput
public "writeRegistryId"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: $ResourceLocation$Type): $MCDataOutput
public "writeRegistryId"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): $MCDataOutput
public "writeFluidStack"(arg0: $FluidStack$Type): $MCDataOutput
public "writeEnum"(arg0: $Enum$Type<(any)>): $MCDataOutput
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MCDataByteBuf$Type = ($MCDataByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MCDataByteBuf_ = $MCDataByteBuf$Type;
}}
declare module "packages/codechicken/lib/model/$CachedFormat" {
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"

export class $CachedFormat {
static readonly "BLOCK": $CachedFormat
readonly "format": $VertexFormat
readonly "hasPosition": boolean
readonly "hasNormal": boolean
readonly "hasColor": boolean
readonly "hasUV": boolean
readonly "hasOverlay": boolean
readonly "hasLightMap": boolean
readonly "positionIndex": integer
readonly "normalIndex": integer
readonly "colorIndex": integer
readonly "uvIndex": integer
readonly "overlayIndex": integer
readonly "lightMapIndex": integer
readonly "elementCount": integer


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "lookup"(arg0: $VertexFormat$Type): $CachedFormat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedFormat$Type = ($CachedFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachedFormat_ = $CachedFormat$Type;
}}
declare module "packages/codechicken/lib/inventory/container/data/$AbstractDataStore" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export class $AbstractDataStore<T> {

constructor(arg0: T)

public "isSameValue"(arg0: T): boolean
public "get"(): T
public "toBytes"(arg0: $MCDataOutput$Type): void
public "set"(arg0: T): void
public "fromBytes"(arg0: $MCDataInput$Type): void
public "toTag"(): $Tag
public "fromTag"(arg0: $Tag$Type): void
public "markDirty"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractDataStore$Type<T> = ($AbstractDataStore<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractDataStore_<T> = $AbstractDataStore$Type<(T)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/$TooltipHandler" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GuiRender, $GuiRender$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiRender"

export interface $TooltipHandler<T extends $TooltipHandler<(T)>> {

 "renderTooltip"(arg0: $GuiRender$Type, arg1: double, arg2: double): boolean
 "setTooltip"(arg0: $Supplier$Type<($List$Type<($Component$Type)>)>, arg1: integer): T
 "setTooltip"(arg0: $Supplier$Type<($List$Type<($Component$Type)>)>): T
 "setTooltip"(arg0: $List$Type<($Component$Type)>): T
 "setTooltip"(...arg0: ($Component$Type)[]): T
 "getTooltip"(): $Supplier<($List<($Component)>)>
 "getTooltipDelay"(): integer
 "setTooltipDelay"(arg0: integer): T
 "setTooltipSingle"(arg0: $Supplier$Type<($Component$Type)>): T
 "setTooltipSingle"(arg0: $Component$Type): T
}

export namespace $TooltipHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipHandler$Type<T> = ($TooltipHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipHandler_<T> = $TooltipHandler$Type<(T)>;
}}
declare module "packages/codechicken/lib/gui/modular/elements/$GuiElement" {
import {$ElementEvents, $ElementEvents$Type} from "packages/codechicken/lib/gui/modular/lib/$ElementEvents"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConstrainedGeometry, $ConstrainedGeometry$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstrainedGeometry"
import {$Rectangle, $Rectangle$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TooltipHandler, $TooltipHandler$Type} from "packages/codechicken/lib/gui/modular/lib/$TooltipHandler"
import {$GuiRender, $GuiRender$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiRender"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ModularGui, $ModularGui$Type} from "packages/codechicken/lib/gui/modular/$ModularGui"
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $GuiElement<T extends $GuiElement<(T)>> extends $ConstrainedGeometry<(T)> implements $ElementEvents, $TooltipHandler<(T)> {
 "initialized": boolean

constructor(arg0: $GuiParent$Type<(any)>)

public "toString"(): string
public "getParent"(): $GuiParent<(any)>
public "mc"(): $Minecraft
public "setOpaque"(arg0: boolean): T
public "isOpaque"(): boolean
public "tick"(arg0: double, arg1: double): void
public "isEnabled"(): boolean
public "getChildren"(): $List<($GuiElement<(any)>)>
public "jeiExclude"(): T
public "isTooltipEnabled"(): boolean
public "render"(arg0: $GuiRender$Type, arg1: double, arg2: double, arg3: float): void
public "getCombinedElementDepth"(): double
public "bringChildToForeground"(arg0: $GuiElement$Type<(any)>): void
public "sendChildToBackground"(arg0: $GuiElement$Type<(any)>): void
public "font"(): $Font
public "isRemoved"(): boolean
public "removeChild"(arg0: $GuiElement$Type<(any)>): void
public "setTooltip"(arg0: $Supplier$Type<($List$Type<($Component$Type)>)>): T
public "addChild"(arg0: $GuiElement$Type<(any)>): void
public "getTooltip"(): $Supplier<($List<($Component)>)>
public "setEnabled"(arg0: $Supplier$Type<(boolean)>): T
public "setEnabled"(arg0: boolean): T
public "isMouseOver"(): boolean
public "updateMouseOver"(arg0: double, arg1: double, arg2: boolean): boolean
public "renderOverlay"(arg0: $GuiRender$Type, arg1: double, arg2: double, arg3: float, arg4: boolean): boolean
public "blockMouseOver"(arg0: $GuiElement$Type<(any)>, arg1: double, arg2: double): boolean
public "adoptChild"(arg0: $GuiElement$Type<(any)>): void
public "isDescendantOf"(arg0: $GuiElement$Type<(any)>): boolean
public "scaledScreenWidth"(): integer
public "onScreenInit"(arg0: $Minecraft$Type, arg1: $Font$Type, arg2: integer, arg3: integer): void
public "scaledScreenHeight"(): integer
public "getModularGui"(): $ModularGui
public "setZStacking"(arg0: boolean): T
public "isJeiExcluded"(): boolean
public "setEnableToolTip"(arg0: $Supplier$Type<(boolean)>): T
public "setRenderCull"(arg0: $Rectangle$Type): T
public "hoverTime"(): integer
public "initElement"(arg0: $GuiParent$Type<(any)>): void
public "zStacking"(): boolean
public "sendChildToIndex"(arg0: $GuiElement$Type<(any)>, arg1: integer): void
public "blockMouseEvents"(): boolean
public "setJeiDropTarget"(arg0: $Consumer$Type<($ItemStack$Type)>, arg1: boolean): T
public "getJeiDropConsumer"(): $Consumer<($ItemStack)>
public "addJeiExclusions"(arg0: $List$Type<($GuiElement$Type<(any)>)>): $List<($GuiElement<(any)>)>
public "addJeiDropTargets"(arg0: $List$Type<($GuiElement$Type<(any)>)>): $List<($GuiElement<(any)>)>
public "showToolTip"(): boolean
public "getTooltipDelay"(): integer
public "isJeiDropTarget"(): boolean
public "setJeiExcluded"(arg0: boolean): T
public "setTooltipDelay"(arg0: integer): T
public "mouseMoved"(arg0: double, arg1: double): void
public "charTyped"(arg0: character, arg1: integer, arg2: boolean): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: boolean): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer, arg3: boolean): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer, arg3: boolean): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "renderTooltip"(arg0: $GuiRender$Type, arg1: double, arg2: double): boolean
public "setTooltip"(arg0: $Supplier$Type<($List$Type<($Component$Type)>)>, arg1: integer): T
public "setTooltip"(arg0: $List$Type<($Component$Type)>): T
public "setTooltip"(...arg0: ($Component$Type)[]): T
public "setTooltipSingle"(arg0: $Supplier$Type<($Component$Type)>): T
public "setTooltipSingle"(arg0: $Component$Type): T
get "parent"(): $GuiParent<(any)>
set "opaque"(value: boolean)
get "opaque"(): boolean
get "enabled"(): boolean
get "children"(): $List<($GuiElement<(any)>)>
get "tooltipEnabled"(): boolean
get "combinedElementDepth"(): double
get "removed"(): boolean
set "tooltip"(value: $Supplier$Type<($List$Type<($Component$Type)>)>)
get "tooltip"(): $Supplier<($List<($Component)>)>
set "enabled"(value: $Supplier$Type<(boolean)>)
set "enabled"(value: boolean)
get "mouseOver"(): boolean
get "modularGui"(): $ModularGui
get "jeiExcluded"(): boolean
set "enableToolTip"(value: $Supplier$Type<(boolean)>)
set "renderCull"(value: $Rectangle$Type)
get "jeiDropConsumer"(): $Consumer<($ItemStack)>
get "tooltipDelay"(): integer
get "jeiDropTarget"(): boolean
set "jeiExcluded"(value: boolean)
set "tooltipDelay"(value: integer)
set "tooltip"(value: $List$Type<($Component$Type)>)
set "tooltip"(value: ($Component$Type)[])
set "tooltipSingle"(value: $Supplier$Type<($Component$Type)>)
set "tooltipSingle"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiElement$Type<T> = ($GuiElement<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiElement_<T> = $GuiElement$Type<(T)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$Position$Mutable" {
import {$Position, $Position$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Position"
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Axis, $Axis$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Axis"

export class $Position$Mutable implements $Position {

constructor(arg0: double, arg1: double)

public "toString"(): string
public "offset"(arg0: double, arg1: double): $Position
public "x"(): double
public "set"(arg0: double, arg1: double): $Position
public "y"(): double
public "get"(arg0: $Axis$Type): double
public static "create"(arg0: $GuiParent$Type<(any)>): $Position
public static "create"(arg0: double, arg1: double): $Position
public static "create"(arg0: $Supplier$Type<(double)>, arg1: $Supplier$Type<(double)>): $Position
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Position$Mutable$Type = ($Position$Mutable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Position$Mutable_ = $Position$Mutable$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl, $ConstraintImpl$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl$MidPointDynamic extends $ConstraintImpl<($ConstraintImpl$MidPointDynamic)> {

constructor(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>)

public "getOffset"(): double
public "getEnd"(): double
public "getStart"(): double
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
get "offset"(): double
get "end"(): double
get "start"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$MidPointDynamic$Type = ($ConstraintImpl$MidPointDynamic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$MidPointDynamic_ = $ConstraintImpl$MidPointDynamic$Type;
}}
declare module "packages/codechicken/lib/render/lighting/$LightMatrix" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $LightMatrix implements $IVertexOperation {
static readonly "operationIndex": integer
 "computed": integer
 "ao": ((float)[])[]
 "brightness": ((integer)[])[]
 "access": $BlockAndTintGetter
 "pos": $BlockPos
static readonly "ssamplem": ((integer)[])[]
static readonly "qsamplem": ((integer)[])[]
static readonly "sideao": (float)[]

constructor()

public static "interpBrightness"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public "sideSample"(arg0: integer): void
public static "interpAO"(arg0: float, arg1: float, arg2: float, arg3: float): float
public "load"(arg0: $CCRenderState$Type): boolean
public "ao"(arg0: integer): (float)[]
public "sample"(arg0: integer): void
public "locate"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type): void
public "brightness"(arg0: integer): (integer)[]
public "operationID"(): integer
public "operate"(arg0: $CCRenderState$Type): void
public static "registerOperation"(): integer
public static "operationCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightMatrix$Type = ($LightMatrix);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightMatrix_ = $LightMatrix$Type;
}}
declare module "packages/codechicken/lib/render/lighting/$LC" {
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $LC implements $Copyable<($LC)> {
 "side": integer
 "fa": float
 "fb": float
 "fc": float
 "fd": float

constructor()
constructor(arg0: integer, arg1: float, arg2: float, arg3: float, arg4: float)

public "compute"(arg0: $Vector3$Type, arg1: $Vector3$Type): $LC
public "compute"(arg0: $Vector3$Type, arg1: integer): $LC
public "set"(arg0: $LC$Type): $LC
public "set"(arg0: integer, arg1: float, arg2: float, arg3: float, arg4: float): $LC
public "copy"(): $LC
public "computeO"(arg0: $Vector3$Type, arg1: integer): $LC
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LC$Type = ($LC);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LC_ = $LC$Type;
}}
declare module "packages/codechicken/lib/vec/$Rotation" {
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Quat, $Quat$Type} from "packages/codechicken/lib/vec/$Quat"
import {$Matrix4, $Matrix4$Type} from "packages/codechicken/lib/vec/$Matrix4"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $Rotation extends $Transformation {
static "quarterRotations": ($Transformation)[]
static "sideRotations": ($Transformation)[]
static "axes": ($Vector3)[]
static "sideRotMap": (integer)[]
static "rotSideMap": (integer)[]
static "sideRotOffsets": (integer)[]
 "angle": double
 "axis": $Vector3
static readonly "operationIndex": integer

constructor(arg0: double, arg1: $Vector3$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double)
constructor(arg0: $Quat$Type)
constructor(arg0: $Rotation$Type)

public "toString"(): string
public "apply"(arg0: $Vector3$Type): void
public "apply"(arg0: $Matrix4$Type): void
public "merge"(arg0: $Transformation$Type): $Transformation
public "copy"(): $Rotation
public static "rotationTo"(arg0: integer, arg1: integer): integer
public static "getSidedRotation"(arg0: $Player$Type, arg1: integer): integer
public static "rotateSide"(arg0: integer, arg1: integer): integer
public "toQuat"(): $Quat
public static "sideOrientation"(arg0: integer, arg1: integer): $Transformation
public static "getSideFromLookAngle"(arg0: $LivingEntity$Type): integer
public "applyN"(arg0: $Vector3$Type): void
public "isRedundant"(): boolean
public static "registerOperation"(): integer
public static "operationCount"(): integer
get "redundant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rotation$Type = ($Rotation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rotation_ = $Rotation$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/container/$DataSync" {
import {$ModularGuiContainerMenu, $ModularGuiContainerMenu$Type} from "packages/codechicken/lib/inventory/container/modular/$ModularGuiContainerMenu"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$AbstractDataStore, $AbstractDataStore$Type} from "packages/codechicken/lib/inventory/container/data/$AbstractDataStore"

export class $DataSync<T> {
static readonly "PKT_SEND_CHANGES": integer

constructor(arg0: $ModularGuiContainerMenu$Type, arg1: $AbstractDataStore$Type<(T)>, arg2: $Supplier$Type<(T)>)

public "get"(): T
public "detectAndSend"(): void
public "handleSyncPacket"(arg0: $MCDataInput$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataSync$Type<T> = ($DataSync<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataSync_<T> = $DataSync$Type<(T)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl, $ConstraintImpl$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"

export class $ConstraintImpl$RelativeDynamic extends $ConstraintImpl<($ConstraintImpl$RelativeDynamic)> {

constructor(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>)

public "getOffset"(): double
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
get "offset"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$RelativeDynamic$Type = ($ConstraintImpl$RelativeDynamic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$RelativeDynamic_ = $ConstraintImpl$RelativeDynamic$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/$GuiRender" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$Rectangle, $Rectangle$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle"
import {$Borders, $Borders$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Borders"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ClientTooltipPositioner, $ClientTooltipPositioner$Type} from "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipPositioner"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiRender$RenderWrapper, $GuiRender$RenderWrapper$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiRender$RenderWrapper"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$Material, $Material$Type} from "packages/codechicken/lib/gui/modular/sprite/$Material"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $GuiRender {
static readonly "SOLID": $RenderType

constructor(arg0: $Minecraft$Type, arg1: $PoseStack$Type, arg2: $MultiBufferSource$BufferSource$Type)
constructor(arg0: $Minecraft$Type, arg1: $MultiBufferSource$BufferSource$Type)

public "drawCenteredString"(arg0: $Component$Type, arg1: double, arg2: double, arg3: integer, arg4: boolean): void
public "drawCenteredString"(arg0: $Component$Type, arg1: double, arg2: double, arg3: integer): void
public "drawCenteredString"(arg0: string, arg1: double, arg2: double, arg3: integer, arg4: boolean): void
public "drawCenteredString"(arg0: string, arg1: double, arg2: double, arg3: integer): void
public "drawCenteredString"(arg0: $FormattedCharSequence$Type, arg1: double, arg2: double, arg3: integer): void
public "drawCenteredString"(arg0: $FormattedCharSequence$Type, arg1: double, arg2: double, arg3: integer, arg4: boolean): void
public static "convert"(arg0: $GuiGraphics$Type): $GuiRender
public "flush"(): void
public "fill"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): void
public "fill"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer): void
public "mc"(): $Minecraft
public "setColor"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "buffers"(): $MultiBufferSource$BufferSource
public "rect"(arg0: $Rectangle$Type, arg1: integer): void
public "rect"(arg0: $RenderType$Type, arg1: $Rectangle$Type, arg2: integer): void
public "rect"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): void
public "rect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer): void
public "shadedRect"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer, arg7: integer): void
public "shadedRect"(arg0: $Rectangle$Type, arg1: double, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "shadedRect"(arg0: $Rectangle$Type, arg1: double, arg2: integer, arg3: integer, arg4: integer): void
public "shadedRect"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "shadedRect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "borderRect"(arg0: $RenderType$Type, arg1: $Rectangle$Type, arg2: double, arg3: integer, arg4: integer): void
public "borderRect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: integer): void
public "borderRect"(arg0: $Rectangle$Type, arg1: double, arg2: integer, arg3: integer): void
public "borderRect"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer): void
public static "mixColours"(arg0: integer, arg1: integer, arg2: boolean): integer
public static "mixColours"(arg0: integer, arg1: integer): integer
public static "isInRect"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): boolean
public static "isInRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: double, arg5: double): boolean
public "tex"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double): void
public "tex"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer): void
public "tex"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float): void
public "tex"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer): void
public "tex"(arg0: $Material$Type, arg1: integer, arg2: double, arg3: double, arg4: double, arg5: double): void
public "tex"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: float, arg6: float, arg7: float, arg8: float): void
public "toolTipBackground"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer, arg5: integer, arg6: integer): void
public "toolTipBackground"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean): void
public "toolTipBackground"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "renderTooltip"(arg0: $ItemStack$Type, arg1: double, arg2: double, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "renderTooltip"(arg0: $List$Type<(any)>, arg1: double, arg2: double): void
public "renderTooltip"(arg0: $Component$Type, arg1: double, arg2: double, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "renderTooltip"(arg0: $Component$Type, arg1: double, arg2: double): void
public "renderTooltip"(arg0: $ItemStack$Type, arg1: double, arg2: double): void
public "renderTooltip"(arg0: $List$Type<(any)>, arg1: double, arg2: double, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "renderTooltip"(arg0: $List$Type<($FormattedCharSequence$Type)>, arg1: $ClientTooltipPositioner$Type, arg2: double, arg3: double, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public "drawScrollingString"(arg0: $Component$Type, arg1: double, arg2: double, arg3: double, arg4: integer, arg5: boolean, arg6: boolean): void
public "drawScrollingString"(arg0: $Component$Type, arg1: double, arg2: double, arg3: double, arg4: integer, arg5: boolean): void
public "renderItemDecorations"(arg0: $ItemStack$Type, arg1: double, arg2: double, arg3: double, arg4: string): void
public "renderItemDecorations"(arg0: $ItemStack$Type, arg1: double, arg2: double, arg3: string): void
public "renderItemDecorations"(arg0: $ItemStack$Type, arg1: double, arg2: double, arg3: double): void
public "renderItemDecorations"(arg0: $ItemStack$Type, arg1: double, arg2: double): void
public "font"(): $Font
public "guiHeight"(): integer
public "overrideFont"(arg0: $Font$Type): void
public "guiWidth"(): integer
public "batchDraw"(arg0: $Runnable$Type): void
/**
 * 
 * @deprecated
 */
public "guiGraphicsWrapper"(): $GuiRender$RenderWrapper
public "gradientFillV"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer): void
public "gradientFillV"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer, arg5: integer): void
public "spriteRect"(arg0: $RenderType$Type, arg1: $Rectangle$Type, arg2: integer, arg3: $TextureAtlasSprite$Type, arg4: integer): void
public "spriteRect"(arg0: $RenderType$Type, arg1: $Rectangle$Type, arg2: integer, arg3: $TextureAtlasSprite$Type): void
public "spriteRect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: float, arg7: float, arg8: float, arg9: float): void
public "spriteRect"(arg0: $RenderType$Type, arg1: $Rectangle$Type, arg2: integer, arg3: $TextureAtlasSprite$Type, arg4: float, arg5: float, arg6: float, arg7: float): void
public "spriteRect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: $TextureAtlasSprite$Type): void
public "spriteRect"(arg0: $RenderType$Type, arg1: $Rectangle$Type, arg2: $TextureAtlasSprite$Type, arg3: integer): void
public "spriteRect"(arg0: $RenderType$Type, arg1: $Rectangle$Type, arg2: $TextureAtlasSprite$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public "spriteRect"(arg0: $RenderType$Type, arg1: $Rectangle$Type, arg2: $TextureAtlasSprite$Type): void
public "spriteRect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type): void
public "spriteRect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: integer): void
public "spriteRect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: $TextureAtlasSprite$Type, arg7: integer): void
public "spriteRect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: $TextureAtlasSprite$Type, arg7: float, arg8: float, arg9: float, arg10: float): void
public "shadedFillInternal"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "shadedFill"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "shadedFill"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer, arg7: integer): void
public "shadedFill"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "gradientFillH"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer, arg5: integer): void
public "gradientFillH"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer): void
public "borderFill"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer): void
public "borderFill"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: integer): void
public "partialSpriteTex"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: double, arg7: double, arg8: double, arg9: double, arg10: integer): void
public "partialSpriteTex"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: double, arg7: double, arg8: double, arg9: double, arg10: float, arg11: float, arg12: float, arg13: float): void
public "drawWordWrap"(arg0: $FormattedText$Type, arg1: double, arg2: double, arg3: integer, arg4: integer, arg5: boolean, arg6: double): void
public "drawWordWrap"(arg0: $FormattedText$Type, arg1: double, arg2: double, arg3: integer, arg4: integer): void
public "drawWordWrap"(arg0: $FormattedText$Type, arg1: double, arg2: double, arg3: integer, arg4: integer, arg5: boolean): void
public "tileSprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: float, arg7: float, arg8: float, arg9: float): void
public "tileSprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: integer, arg7: integer, arg8: float, arg9: float, arg10: float, arg11: float): void
public "tileSprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: integer, arg7: integer, arg8: integer): void
public "tileSprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: integer): void
public static "texType"(arg0: $ResourceLocation$Type): $RenderType
public "renderFakeItem"(arg0: $ItemStack$Type, arg1: double, arg2: double): void
public "renderFakeItem"(arg0: $ItemStack$Type, arg1: double, arg2: double, arg3: double): void
public "renderComponentHoverEffect"(arg0: $Style$Type, arg1: integer, arg2: integer): void
public "renderItem"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: double, arg3: double, arg4: integer): void
public "renderItem"(arg0: $ItemStack$Type, arg1: double, arg2: double, arg3: double, arg4: integer): void
public "renderItem"(arg0: $ItemStack$Type, arg1: double, arg2: double, arg3: double): void
public "renderItem"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $ItemStack$Type, arg3: double, arg4: double, arg5: double, arg6: integer): void
public "renderItem"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: double, arg3: double, arg4: double, arg5: integer): void
public "renderItem"(arg0: $ItemStack$Type, arg1: double, arg2: double): void
public "pushScissor"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "popScissor"(): void
public "pose"(): $PoseStack
public "drawString"(arg0: $Component$Type, arg1: double, arg2: double, arg3: integer, arg4: boolean): integer
public "drawString"(arg0: $Component$Type, arg1: double, arg2: double, arg3: integer): integer
public "drawString"(arg0: $FormattedCharSequence$Type, arg1: double, arg2: double, arg3: integer, arg4: boolean): integer
public "drawString"(arg0: $FormattedCharSequence$Type, arg1: double, arg2: double, arg3: integer): integer
public "drawString"(arg0: string, arg1: double, arg2: double, arg3: integer, arg4: boolean): integer
public "drawString"(arg0: string, arg1: double, arg2: double, arg3: integer): integer
public "sprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: float, arg7: float, arg8: float, arg9: float): void
public "sprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: integer): void
public "sprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type): void
public "sprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: $TextureAtlasSprite$Type, arg7: integer): void
public "sprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: $TextureAtlasSprite$Type): void
public "sprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: $TextureAtlasSprite$Type, arg7: float, arg8: float, arg9: float, arg10: float): void
public "componentTooltip"(arg0: $List$Type<(any)>, arg1: double, arg2: double, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ItemStack$Type): void
public "componentTooltip"(arg0: $List$Type<(any)>, arg1: double, arg2: double): void
public "componentTooltip"(arg0: $List$Type<(any)>, arg1: double, arg2: double, arg3: $ItemStack$Type): void
public "componentTooltip"(arg0: $List$Type<($Component$Type)>, arg1: double, arg2: double, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public static "texColType"(arg0: $ResourceLocation$Type): $RenderType
public "partialSprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float): void
public "partialSprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: float, arg7: float, arg8: float, arg9: float, arg10: integer): void
public "texRect"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: float, arg6: float, arg7: float, arg8: float): void
public "texRect"(arg0: $Material$Type, arg1: integer, arg2: $Rectangle$Type): void
public "texRect"(arg0: $Material$Type, arg1: integer, arg2: $Rectangle$Type, arg3: integer): void
public "texRect"(arg0: $Material$Type, arg1: integer, arg2: $Rectangle$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public "texRect"(arg0: $Material$Type, arg1: integer, arg2: double, arg3: double, arg4: double, arg5: double): void
public "texRect"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float): void
public "texRect"(arg0: $Material$Type, arg1: integer, arg2: double, arg3: double, arg4: double, arg5: double, arg6: integer): void
public "texRect"(arg0: $Material$Type, arg1: $Rectangle$Type): void
public "texRect"(arg0: $Material$Type, arg1: $Rectangle$Type, arg2: integer): void
public "texRect"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer): void
public "texRect"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double): void
public "texRect"(arg0: $Material$Type, arg1: $Rectangle$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
public "dynamicTex"(arg0: $Material$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "dynamicTex"(arg0: $Material$Type, arg1: $Rectangle$Type, arg2: $Borders$Type, arg3: integer): void
public "dynamicTex"(arg0: $Material$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
public "dynamicTex"(arg0: $Material$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "dynamicTex"(arg0: $Material$Type, arg1: $Rectangle$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "dynamicTex"(arg0: $Material$Type, arg1: $Rectangle$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "dynamicTex"(arg0: $Material$Type, arg1: $Rectangle$Type, arg2: $Borders$Type): void
public "pushScissorRect"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "pushScissorRect"(arg0: $Rectangle$Type): void
public static "midColour"(arg0: integer, arg1: integer): integer
public "toolTipWithImage"(arg0: $List$Type<($Component$Type)>, arg1: $Optional$Type<($TooltipComponent$Type)>, arg2: double, arg3: double, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public "toolTipWithImage"(arg0: $List$Type<($Component$Type)>, arg1: $Optional$Type<($TooltipComponent$Type)>, arg2: $ItemStack$Type, arg3: double, arg4: double): void
public "toolTipWithImage"(arg0: $List$Type<($Component$Type)>, arg1: $Optional$Type<($TooltipComponent$Type)>, arg2: double, arg3: double): void
public "toolTipWithImage"(arg0: $List$Type<($Component$Type)>, arg1: $Optional$Type<($TooltipComponent$Type)>, arg2: $ItemStack$Type, arg3: double, arg4: double, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiRender$Type = ($GuiRender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiRender_ = $GuiRender$Type;
}}
declare module "packages/codechicken/lib/data/$MCDataOutput" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CharBuffer, $CharBuffer$Type} from "packages/java/nio/$CharBuffer"
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DoubleBuffer, $DoubleBuffer$Type} from "packages/java/nio/$DoubleBuffer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$ShortBuffer, $ShortBuffer$Type} from "packages/java/nio/$ShortBuffer"
import {$LongBuffer, $LongBuffer$Type} from "packages/java/nio/$LongBuffer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$DataOutput, $DataOutput$Type} from "packages/java/io/$DataOutput"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"

export interface $MCDataOutput {

 "append"(arg0: (byte)[]): $MCDataOutput
 "append"(arg0: $ByteBuf$Type): $MCDataOutput
 "writeInt"(arg0: integer): $MCDataOutput
 "writeBytes"(arg0: (byte)[]): $MCDataOutput
 "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeChar"(arg0: integer): $MCDataOutput
 "writeString"(arg0: string, arg1: integer): $MCDataOutput
 "writeString"(arg0: string): $MCDataOutput
 "writeLong"(arg0: long): $MCDataOutput
 "writeBoolean"(arg0: boolean): $MCDataOutput
 "writeByte"(arg0: integer): $MCDataOutput
 "writeShort"(arg0: integer): $MCDataOutput
 "writeDouble"(arg0: double): $MCDataOutput
 "writeChars"(arg0: (character)[]): $MCDataOutput
 "writeChars"(arg0: (character)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeFloat"(arg0: float): $MCDataOutput
 "writeShorts"(arg0: (short)[]): $MCDataOutput
 "writeShorts"(arg0: (short)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeInts"(arg0: (integer)[]): $MCDataOutput
 "writeInts"(arg0: (integer)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeLongs"(arg0: (long)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeLongs"(arg0: (long)[]): $MCDataOutput
 "writeFloats"(arg0: (float)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeFloats"(arg0: (float)[]): $MCDataOutput
 "writeDoubles"(arg0: (double)[]): $MCDataOutput
 "writeDoubles"(arg0: (double)[], arg1: integer, arg2: integer): $MCDataOutput
 "writePos"(arg0: $BlockPos$Type): $MCDataOutput
 "writeTextComponent"(arg0: $Component$Type): $MCDataOutput
 "writeUUID"(arg0: $UUID$Type): $MCDataOutput
 "writeVec3f"(arg0: $Vector3f$Type): $MCDataOutput
 "writeVector"(arg0: $Vector3$Type): $MCDataOutput
 "writeRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: $ResourceLocation$Type): $MCDataOutput
 "writeRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): $MCDataOutput
 "writeSignedVarLongs"(arg0: (long)[]): $MCDataOutput
 "writeSignedVarLongs"(arg0: (long)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeVarLongs"(arg0: (long)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeVarLongs"(arg0: (long)[]): $MCDataOutput
 "writeShortBuffer"(arg0: $ShortBuffer$Type): $MCDataOutput
 "writeIntBuffer"(arg0: $IntBuffer$Type): $MCDataOutput
 "writeLongBuffer"(arg0: $LongBuffer$Type): $MCDataOutput
 "writeSignedVarInts"(arg0: (integer)[]): $MCDataOutput
 "writeSignedVarInts"(arg0: (integer)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeSignedVarLong"(arg0: long): $MCDataOutput
 "writeByteBuffer"(arg0: $ByteBuffer$Type): $MCDataOutput
 "writeVarInts"(arg0: (integer)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeVarInts"(arg0: (integer)[]): $MCDataOutput
 "writeVarLong"(arg0: long): $MCDataOutput
 "writeDoubleBuffer"(arg0: $DoubleBuffer$Type): $MCDataOutput
 "writeSignedVarInt"(arg0: integer): $MCDataOutput
 "writeCuboid"(arg0: $Cuboid6$Type): $MCDataOutput
 "writeBooleans"(arg0: (boolean)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeBooleans"(arg0: (boolean)[]): $MCDataOutput
 "writeCharBuffer"(arg0: $CharBuffer$Type): $MCDataOutput
 "writeFloatBuffer"(arg0: $FloatBuffer$Type): $MCDataOutput
 "toDataOutput"(): $DataOutput
 "writeDirection"(arg0: $Direction$Type): $MCDataOutput
 "writeCompoundNBT"(arg0: $CompoundTag$Type): $MCDataOutput
 "toOutputStream"(): $OutputStream
 "writeVec3d"(arg0: $Vec3$Type): $MCDataOutput
 "writeByteBuf"(arg0: $ByteBuf$Type): $MCDataOutput
 "writeVec3i"(arg0: $Vec3i$Type): $MCDataOutput
 "writeResourceLocation"(arg0: $ResourceLocation$Type): $MCDataOutput
 "writeVarInt"(arg0: integer): $MCDataOutput
 "writeItemStack"(arg0: $ItemStack$Type, arg1: boolean): $MCDataOutput
 "writeItemStack"(arg0: $ItemStack$Type): $MCDataOutput
 "writeRegistryId"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: $ResourceLocation$Type): $MCDataOutput
 "writeRegistryId"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): $MCDataOutput
 "writeFluidStack"(arg0: $FluidStack$Type): $MCDataOutput
 "writeEnum"(arg0: $Enum$Type<(any)>): $MCDataOutput
}

export namespace $MCDataOutput {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MCDataOutput$Type = ($MCDataOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MCDataOutput_ = $MCDataOutput$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle$Mutable" {
import {$Position, $Position$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Position"
import {$Position$Mutable, $Position$Mutable$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Position$Mutable"
import {$Rectangle, $Rectangle$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle"
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rectangle$Immutable, $Rectangle$Immutable$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle$Immutable"
import {$Axis, $Axis$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Axis"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $Rectangle$Mutable implements $Rectangle {

constructor(arg0: $Position$Mutable$Type, arg1: double, arg2: double)

public "offsetSize"(arg0: double, arg1: double): $Rectangle
public "set"(arg0: $Rectangle$Type): void
public "combine"(...arg0: ($Rectangle$Type)[]): $Rectangle
public "pos"(): $Position
public "intersect"(arg0: $Rectangle$Type): $Rectangle
public "setSize"(arg0: double, arg1: double): $Rectangle
public "width"(): double
public "height"(): double
public "offsetPos"(arg0: double, arg1: double): $Rectangle
public "immutable"(): $Rectangle$Immutable
public "setPos"(arg0: double, arg1: double): $Rectangle
public "toRect2i"(): $Rect2i
public "min"(arg0: $Axis$Type): double
public "max"(arg0: $Axis$Type): double
public "size"(arg0: $Axis$Type): double
public "x"(): double
public "contains"(arg0: double, arg1: double): boolean
public static "create"(arg0: $Position$Type, arg1: $Supplier$Type<(double)>, arg2: $Supplier$Type<(double)>): $Rectangle
public static "create"(arg0: $GuiParent$Type<(any)>): $Rectangle
public static "create"(arg0: double, arg1: double, arg2: double, arg3: double): $Rectangle
public static "create"(arg0: $Position$Type, arg1: double, arg2: double): $Rectangle
public "y"(): double
public "distance"(arg0: $Axis$Type, arg1: $Position$Type): double
public "intersects"(arg0: $Rectangle$Type): boolean
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "mutable"(): $Rectangle$Mutable
public "xMax"(): double
public "yMax"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rectangle$Mutable$Type = ($Rectangle$Mutable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rectangle$Mutable_ = $Rectangle$Mutable$Type;
}}
declare module "packages/codechicken/lib/inventory/container/modular/$ModularGuiContainerMenu" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$SlotGroup, $SlotGroup$Type} from "packages/codechicken/lib/gui/modular/lib/container/$SlotGroup"
import {$DataSync, $DataSync$Type} from "packages/codechicken/lib/gui/modular/lib/container/$DataSync"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ContainerSynchronizer, $ContainerSynchronizer$Type} from "packages/net/minecraft/world/inventory/$ContainerSynchronizer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import {$Logger, $Logger$Type} from "packages/org/slf4j/$Logger"
import {$DataSlot, $DataSlot$Type} from "packages/net/minecraft/world/inventory/$DataSlot"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularGuiContainerMenu extends $AbstractContainerMenu {
readonly "inventory": $Inventory
readonly "slotGroups": $List<($SlotGroup)>
readonly "slotGroupMap": $Map<($Slot), ($SlotGroup)>
readonly "zonedSlots": $Map<(integer), ($List<($Slot)>)>
readonly "dataSyncs": $List<($DataSync<(any)>)>
static readonly "LOGGER": $Logger
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
readonly "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
readonly "dataSlots": $List<($DataSlot)>
 "carried": $ItemStack
readonly "remoteSlots": $NonNullList<($ItemStack)>
readonly "remoteDataSlots": $IntList
 "remoteCarried": $ItemStack
 "stateId": integer
readonly "menuType": $MenuType<(any)>
readonly "containerId": integer
 "quickcraftType": integer
 "quickcraftStatus": integer
readonly "quickcraftSlots": $Set<($Slot)>
readonly "containerListeners": $List<($ContainerListener)>
 "synchronizer": $ContainerSynchronizer
 "suppressRemoteUpdates": boolean


public "sendPacketToClient"(arg0: integer, arg1: $Consumer$Type<($MCDataOutput$Type)>): void
public "sendPacketToServer"(arg0: integer, arg1: $Consumer$Type<($MCDataOutput$Type)>): void
public "quickMoveStack"(arg0: $Player$Type, arg1: integer): $ItemStack
public "broadcastChanges"(): void
public "mapSlot"(arg0: $Slot$Type, arg1: $SlotGroup$Type): void
public static "canStacksMerge"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public static "handlePacketFromClient"(arg0: $Player$Type, arg1: $MCDataInput$Type): void
public "handlePacketFromClient"(arg0: $Player$Type, arg1: integer, arg2: $MCDataInput$Type): void
public static "handlePacketFromServer"(arg0: $Player$Type, arg1: $MCDataInput$Type): void
public "handlePacketFromServer"(arg0: $Player$Type, arg1: integer, arg2: $MCDataInput$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularGuiContainerMenu$Type = ($ModularGuiContainerMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularGuiContainerMenu_ = $ModularGuiContainerMenu$Type;
}}
declare module "packages/codechicken/lib/util/$Copyable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Copyable<T> {

 "copy"(): T

(): T
}

export namespace $Copyable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Copyable$Type<T> = ($Copyable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Copyable_<T> = $Copyable$Type<(T)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl, $ConstraintImpl$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl$Dynamic extends $ConstraintImpl<($ConstraintImpl$Dynamic)> {

constructor(arg0: $Supplier$Type<(double)>)

public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$Dynamic$Type = ($ConstraintImpl$Dynamic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$Dynamic_ = $ConstraintImpl$Dynamic$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/$GuiProvider" {
import {$GuiElement, $GuiElement$Type} from "packages/codechicken/lib/gui/modular/elements/$GuiElement"
import {$ModularGui, $ModularGui$Type} from "packages/codechicken/lib/gui/modular/$ModularGui"

export interface $GuiProvider {

 "buildGui"(arg0: $ModularGui$Type): void
 "createRootElement"(arg0: $ModularGui$Type): $GuiElement<(any)>

(arg0: $ModularGui$Type): void
}

export namespace $GuiProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiProvider$Type = ($GuiProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiProvider_ = $GuiProvider$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl$BetweenOffset extends $ConstraintImpl$Between {

constructor(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double)

public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$BetweenOffset$Type = ($ConstraintImpl$BetweenOffset);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$BetweenOffset_ = $ConstraintImpl$BetweenOffset$Type;
}}
declare module "packages/codechicken/lib/data/$MCDataInput" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$DataInput, $DataInput$Type} from "packages/java/io/$DataInput"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CharBuffer, $CharBuffer$Type} from "packages/java/nio/$CharBuffer"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DoubleBuffer, $DoubleBuffer$Type} from "packages/java/nio/$DoubleBuffer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ShortBuffer, $ShortBuffer$Type} from "packages/java/nio/$ShortBuffer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LongBuffer, $LongBuffer$Type} from "packages/java/nio/$LongBuffer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"

export interface $MCDataInput {

 "readInt"(): integer
 "readBytes"(): (byte)[]
 "readChar"(): character
 "readString"(): string
 "readLong"(): long
 "readBoolean"(): boolean
 "readByte"(): byte
 "readShort"(): short
 "readDouble"(): double
 "readFloat"(): float
 "toInputStream"(): $InputStream
 "readEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<(T)>): T
 "readInts"(): (integer)[]
 "readLongs"(): (long)[]
 "readFloats"(): (float)[]
 "readDoubles"(): (double)[]
 "readShorts"(): (short)[]
 "readChars"(): (character)[]
 "readBooleans"(): (boolean)[]
 "readResourceLocation"(): $ResourceLocation
 "readRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>): T
 "readPos"(): $BlockPos
 "readTextComponent"(): $MutableComponent
 "readVarLongs"(): (long)[]
 "readVec3f"(): $Vector3f
 "readVec3i"(): $Vec3i
 "readUShort"(): integer
 "readIntBuffer"(): $IntBuffer
 "readCharBuffer"(): $CharBuffer
 "readSignedVarInts"(): (integer)[]
 "readSignedVarInt"(): integer
 "readCuboid"(): $Cuboid6
 "readByteBuffer"(): $ByteBuffer
 "readFloatBuffer"(): $FloatBuffer
 "readShortBuffer"(): $ShortBuffer
 "readSignedVarLong"(): long
 "readUUID"(): $UUID
 "readUByte"(): short
 "readVarInts"(): (integer)[]
 "readLongBuffer"(): $LongBuffer
 "readVarLong"(): long
 "readDirection"(): $Direction
 "readDoubleBuffer"(): $DoubleBuffer
 "readSignedVarLongs"(): (long)[]
 "readVector"(): $Vector3
 "readItemStack"(): $ItemStack
 "readCompoundNBT"(): $CompoundTag
 "readVec3d"(): $Vec3
 "readByteBuf"(): $ByteBuf
 "toDataInput"(): $DataInput
 "readVarInt"(): integer
 "readFluidStack"(): $FluidStack
 "readRegistryId"<T>(): T
}

export namespace $MCDataInput {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MCDataInput$Type = ($MCDataInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MCDataInput_ = $MCDataInput$Type;
}}
declare module "packages/codechicken/lib/vec/$Vector3" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Quat, $Quat$Type} from "packages/codechicken/lib/vec/$Quat"
import {$Translation, $Translation$Type} from "packages/codechicken/lib/vec/$Translation"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Vector3 implements $Copyable<($Vector3)> {
static readonly "ZERO": $Vector3
static readonly "CENTER": $Vector3
static readonly "ONE": $Vector3
static readonly "X_POS": $Vector3
static readonly "X_NEG": $Vector3
static readonly "Y_POS": $Vector3
static readonly "Y_NEG": $Vector3
static readonly "Z_POS": $Vector3
static readonly "Z_NEG": $Vector3
 "x": double
 "y": double
 "z": double

constructor()
constructor(arg0: $Vec3$Type)
constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: $Vector3$Type)
constructor(arg0: (double)[])
constructor(arg0: (float)[])

public "multiply"(arg0: $Vector3$Type): $Vector3
public "multiply"(arg0: double): $Vector3
public "multiply"(arg0: double, arg1: double, arg2: double): $Vector3
public "add"(arg0: $BlockPos$Type): $Vector3
public "add"(arg0: $Vec3$Type): $Vector3
public "add"(arg0: $Vector3$Type): $Vector3
public "add"(arg0: double, arg1: double, arg2: double): $Vector3
public "add"(arg0: double): $Vector3
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "floor"(): $Vector3
public "ceil"(): $Vector3
public "apply"(arg0: $Transformation$Type): $Vector3
public "set"(arg0: double): $Vector3
public "set"(arg0: double, arg1: double, arg2: double): $Vector3
public "set"(arg0: $Vector3$Type): $Vector3
public "set"(arg0: $Vec3i$Type): $Vector3
public "set"(arg0: (double)[]): $Vector3
public "set"(arg0: (float)[]): $Vector3
public "copy"(): $Vector3
public "pos"(): $BlockPos
public "normalize"(): $Vector3
public "mag"(): double
public "distance"(arg0: $Vector3$Type): double
public "rotate"(arg0: double, arg1: $Vector3$Type): $Vector3
public "rotate"(arg0: $Quat$Type): $Vector3
public "isZero"(): boolean
public "negate"(): $Vector3
public "divide"(arg0: $Vector3$Type): $Vector3
public "divide"(arg0: double, arg1: double, arg2: double): $Vector3
public "divide"(arg0: double): $Vector3
public "divide"(arg0: $BlockPos$Type): $Vector3
public "subtract"(arg0: double): $Vector3
public "subtract"(arg0: double, arg1: double, arg2: double): $Vector3
public "subtract"(arg0: $Vec3$Type): $Vector3
public "subtract"(arg0: $BlockPos$Type): $Vector3
public "subtract"(arg0: $Vector3$Type): $Vector3
public "translation"(): $Translation
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public "equalsT"(arg0: $Vector3$Type): boolean
public static "fromNBT"(arg0: $CompoundTag$Type): $Vector3
public static "fromAxes"(arg0: (float)[]): $Vector3
public static "fromAxes"(arg0: (double)[]): $Vector3
public static "fromArray"(arg0: (double)[]): $Vector3
public static "fromArray"(arg0: (float)[]): $Vector3
public "magSquared"(): double
public "toArrayD"(): (double)[]
public "toArrayF"(): (float)[]
public "yCrossProduct"(): $Vector3
public static "fromTileCenter"(arg0: $BlockEntity$Type): $Vector3
public "scalarProject"(arg0: $Vector3$Type): double
public "$tilde"(): $Vector3
public "$div"(arg0: double): $Vector3
public "YZintercept"(arg0: $Vector3$Type, arg1: double): $Vector3
public "$dot$times"(arg0: $Vector3$Type): double
public "$minus"(arg0: $Vector3$Type): $Vector3
public "$times"(arg0: $Vector3$Type): $Vector3
public "$times"(arg0: double): $Vector3
public "unary_$tilde"(): $Vector3
public "isAxial"(): boolean
public "XZintercept"(arg0: $Vector3$Type, arg1: double): $Vector3
public "XYintercept"(arg0: $Vector3$Type, arg1: double): $Vector3
public "$plus"(arg0: $Vector3$Type): $Vector3
public "setSide"(arg0: integer, arg1: double): $Vector3
public "getSide"(arg0: integer): double
public "project"(arg0: $Vector3$Type): $Vector3
public "angle"(arg0: $Vector3$Type): double
public "distanceSquared"(arg0: $Vector3$Type): double
public static "fromVec3i"(arg0: $Vec3i$Type): $Vector3
public "dotProduct"(arg0: double, arg1: double, arg2: double): double
public "dotProduct"(arg0: $Vector3$Type): double
public "perpendicular"(): $Vector3
public "vec3"(): $Vec3
public static "fromTile"(arg0: $BlockEntity$Type): $Vector3
public "zCrossProduct"(): $Vector3
public "xCrossProduct"(): $Vector3
public "crossProduct"(arg0: $Vector3$Type): $Vector3
public "vector4f"(): $Vector4f
public "vector3f"(): $Vector3f
public static "fromEntity"(arg0: $Entity$Type): $Vector3
public static "fromEntityCenter"(arg0: $Entity$Type): $Vector3
public static "fromBlockPosCenter"(arg0: $BlockPos$Type): $Vector3
public static "fromBlockPos"(arg0: $BlockPos$Type): $Vector3
get "zero"(): boolean
get "axial"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vector3$Type = ($Vector3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vector3_ = $Vector3$Type;
}}
declare module "packages/codechicken/lib/vec/$Matrix4" {
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$DoubleBuffer, $DoubleBuffer$Type} from "packages/java/nio/$DoubleBuffer"
import {$Rotation, $Rotation$Type} from "packages/codechicken/lib/vec/$Rotation"
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"

export class $Matrix4 extends $Transformation {
 "m00": double
 "m01": double
 "m02": double
 "m03": double
 "m10": double
 "m11": double
 "m12": double
 "m13": double
 "m20": double
 "m21": double
 "m22": double
 "m23": double
 "m30": double
 "m31": double
 "m32": double
 "m33": double
static readonly "operationIndex": integer

constructor(arg0: $FloatBuffer$Type)
constructor(arg0: $DoubleBuffer$Type)
constructor(arg0: $Matrix4f$Type)
constructor(arg0: $PoseStack$Type)
constructor()
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: double, arg11: double, arg12: double, arg13: double, arg14: double, arg15: double)
constructor(arg0: $Matrix4$Type)
constructor(arg0: (float)[])
constructor(arg0: (double)[])

public "multiply"(arg0: $Matrix4$Type): $Matrix4
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(arg0: double, arg1: double, arg2: double): $Matrix4
public "scale"(arg0: double): $Matrix4
public "scale"(arg0: $Vector3$Type): $Matrix4
public "apply"(arg0: $Matrix4$Type): void
public "apply"(arg0: $Transformation$Type): $Matrix4
public "apply"(arg0: $Vector3$Type): void
public "set"(arg0: $DoubleBuffer$Type): $Matrix4
public "set"(arg0: $FloatBuffer$Type): $Matrix4
public "set"(arg0: (double)[]): $Matrix4
public "set"(arg0: $PoseStack$Type): $Matrix4
public "set"(arg0: $Matrix4f$Type): $Matrix4
public "set"(arg0: (float)[]): $Matrix4
public "set"(arg0: $Matrix4$Type): $Matrix4
public "save"(arg0: $DoubleBuffer$Type): void
public "save"(arg0: $FloatBuffer$Type): void
public "rotate"(arg0: $Rotation$Type): $Matrix4
public "rotate"(arg0: double, arg1: $Vector3$Type): $Matrix4
public "toArrayD"(): (double)[]
public "toArrayF"(): (float)[]
public "translate"(arg0: double, arg1: double, arg2: double): $Matrix4
public "translate"(arg0: $Vec3i$Type): $Matrix4
public "translate"(arg0: $Vector3$Type): $Matrix4
public "inverse"(): $Transformation
public "transpose"(): $Matrix4
public "toMatrix4f"(): $Matrix4f
public "setIdentity"(): $Matrix4
public "toFloatBuffer"(): $FloatBuffer
public "leftMultiply"(arg0: $Matrix4$Type): $Matrix4
public "toDoubleBuffer"(): $DoubleBuffer
public "multMatrix"(arg0: $Vector4f$Type): void
public static "gluProject"(arg0: $Vector3$Type, arg1: $Matrix4$Type, arg2: $Matrix4$Type, arg3: $IntBuffer$Type): $Vector3
public "applyN"(arg0: $Vector3$Type): void
public static "registerOperation"(): integer
public static "operationCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matrix4$Type = ($Matrix4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matrix4_ = $Matrix4$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between" {
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl, $ConstraintImpl$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl$Between extends $ConstraintImpl<($ConstraintImpl$Between)> {

constructor(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double)

public "getEnd"(): double
public "clamp"(): $ConstraintImpl$Between
public "getStart"(): double
public "getPos"(): double
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
get "end"(): double
get "start"(): double
get "pos"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$Between$Type = ($ConstraintImpl$Between);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$Between_ = $ConstraintImpl$Between$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl, $ConstraintImpl$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl$MidPoint extends $ConstraintImpl<($ConstraintImpl$MidPoint)> {

constructor(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double)

public "getOffset"(): double
public "getEnd"(): double
public "getStart"(): double
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
get "offset"(): double
get "end"(): double
get "start"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$MidPoint$Type = ($ConstraintImpl$MidPoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$MidPoint_ = $ConstraintImpl$MidPoint$Type;
}}
declare module "packages/codechicken/lib/vec/$Vertex5" {
import {$UVTransformation, $UVTransformation$Type} from "packages/codechicken/lib/vec/uv/$UVTransformation"
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$UV, $UV$Type} from "packages/codechicken/lib/vec/uv/$UV"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $Vertex5 implements $Copyable<($Vertex5)> {
 "vec": $Vector3
 "uv": $UV

constructor(arg0: $Vertex5$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer)
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double)
constructor()
constructor(arg0: $Vector3$Type, arg1: $UV$Type)
constructor(arg0: $Vector3$Type, arg1: double, arg2: double)

public "toString"(): string
public "apply"(arg0: $Transformation$Type): $Vertex5
public "apply"(arg0: $UVTransformation$Type): $Vertex5
public "set"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double): $Vertex5
public "set"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer): $Vertex5
public "set"(arg0: $Vector3$Type, arg1: double, arg2: double): $Vertex5
public "set"(arg0: $Vertex5$Type): $Vertex5
public "copy"(): $Vertex5
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vertex5$Type = ($Vertex5);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vertex5_ = $Vertex5$Type;
}}
declare module "packages/codechicken/lib/vec/uv/$UVTransformation" {
import {$UVTransformationList, $UVTransformationList$Type} from "packages/codechicken/lib/vec/uv/$UVTransformationList"
import {$ITransformation, $ITransformation$Type} from "packages/codechicken/lib/vec/$ITransformation"
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$UV, $UV$Type} from "packages/codechicken/lib/vec/uv/$UV"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"

export class $UVTransformation extends $ITransformation<($UV), ($UVTransformation)> implements $IVertexOperation {
static readonly "operationIndex": integer

constructor()

public "load"(arg0: $CCRenderState$Type): boolean
public "at"(arg0: $UV$Type): $UVTransformation
public "with"(arg0: $UVTransformation$Type): $UVTransformationList
public "operationID"(): integer
public "operate"(arg0: $CCRenderState$Type): void
public static "registerOperation"(): integer
public static "operationCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UVTransformation$Type = ($UVTransformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UVTransformation_ = $UVTransformation$Type;
}}

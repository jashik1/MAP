declare module "packages/dev/dubhe/curtain/features/player/helpers/$EntityPlayerActionPack" {
import {$EntityPlayerActionPack$ActionType, $EntityPlayerActionPack$ActionType$Type} from "packages/dev/dubhe/curtain/features/player/helpers/$EntityPlayerActionPack$ActionType"
import {$EntityPlayerActionPack$Action, $EntityPlayerActionPack$Action$Type} from "packages/dev/dubhe/curtain/features/player/helpers/$EntityPlayerActionPack$Action"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $EntityPlayerActionPack {

constructor(arg0: $ServerPlayer$Type)

public "start"(arg0: $EntityPlayerActionPack$ActionType$Type, arg1: $EntityPlayerActionPack$Action$Type): $EntityPlayerActionPack
public "copyFrom"(arg0: $EntityPlayerActionPack$Type): void
public "drop"(arg0: integer, arg1: boolean): void
public "onUpdate"(): void
public "setSlot"(arg0: integer): void
public "lookAt"(arg0: $Vec3$Type): $EntityPlayerActionPack
public "look"(arg0: float, arg1: float): $EntityPlayerActionPack
public "look"(arg0: $Vec2$Type): $EntityPlayerActionPack
public "look"(arg0: $Direction$Type): $EntityPlayerActionPack
public "setSprinting"(arg0: boolean): $EntityPlayerActionPack
public "stopAll"(): $EntityPlayerActionPack
public "setSneaking"(arg0: boolean): $EntityPlayerActionPack
public "setForward"(arg0: float): $EntityPlayerActionPack
public "stopMovement"(): $EntityPlayerActionPack
public "setStrafing"(arg0: float): $EntityPlayerActionPack
public "turn"(arg0: $Vec2$Type): $EntityPlayerActionPack
public "turn"(arg0: float, arg1: float): $EntityPlayerActionPack
public "dismount"(): $EntityPlayerActionPack
public "mount"(arg0: boolean): $EntityPlayerActionPack
set "slot"(value: integer)
set "sprinting"(value: boolean)
set "sneaking"(value: boolean)
set "forward"(value: float)
set "strafing"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPlayerActionPack$Type = ($EntityPlayerActionPack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPlayerActionPack_ = $EntityPlayerActionPack$Type;
}}
declare module "packages/dev/dubhe/curtain/features/rules/fakes/$TntEntityInterface" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TntEntityInterface {

 "getMergedTNT"(): integer

(): integer
}

export namespace $TntEntityInterface {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TntEntityInterface$Type = ($TntEntityInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TntEntityInterface_ = $TntEntityInterface$Type;
}}
declare module "packages/dev/dubhe/curtain/features/logging/fakes/$SpawnGroupInterface" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpawnGroupInterface {

 "getInitialSpawnCap"(): integer

(): integer
}

export namespace $SpawnGroupInterface {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnGroupInterface$Type = ($SpawnGroupInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnGroupInterface_ = $SpawnGroupInterface$Type;
}}
declare module "packages/dev/dubhe/curtain/features/player/fakes/$IServerPlayer" {
import {$EntityPlayerActionPack, $EntityPlayerActionPack$Type} from "packages/dev/dubhe/curtain/features/player/helpers/$EntityPlayerActionPack"

export interface $IServerPlayer {

 "getLanguage"(): string
 "getActionPack"(): $EntityPlayerActionPack
 "invalidateEntityObjectReference"(): void
 "isInvalidEntityObject"(): boolean
}

export namespace $IServerPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerPlayer$Type = ($IServerPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerPlayer_ = $IServerPlayer$Type;
}}
declare module "packages/dev/dubhe/curtain/features/rules/fakes/$ItemEntityInterface" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemEntityInterface {

 "getPickupDelayCM"(): integer

(): integer
}

export namespace $ItemEntityInterface {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityInterface$Type = ($ItemEntityInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEntityInterface_ = $ItemEntityInterface$Type;
}}
declare module "packages/dev/dubhe/curtain/features/player/fakes/$IPistonBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPistonBlock {

 "publicShouldExtend"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
}

export namespace $IPistonBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPistonBlock$Type = ($IPistonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPistonBlock_ = $IPistonBlock$Type;
}}
declare module "packages/dev/dubhe/curtain/features/player/fakes/$IClientConnection" {
import {$Channel, $Channel$Type} from "packages/io/netty/channel/$Channel"

export interface $IClientConnection {

 "setChannel"(arg0: $Channel$Type): void

(arg0: $Channel$Type): void
}

export namespace $IClientConnection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientConnection$Type = ($IClientConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientConnection_ = $IClientConnection$Type;
}}
declare module "packages/dev/dubhe/curtain/features/player/helpers/$EntityPlayerActionPack$Action" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $EntityPlayerActionPack$Action {
 "done": boolean
readonly "limit": integer
readonly "interval": integer
readonly "offset": integer


public static "continuous"(): $EntityPlayerActionPack$Action
public static "interval"(arg0: integer, arg1: integer): $EntityPlayerActionPack$Action
public static "interval"(arg0: integer): $EntityPlayerActionPack$Action
public static "once"(): $EntityPlayerActionPack$Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPlayerActionPack$Action$Type = ($EntityPlayerActionPack$Action);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPlayerActionPack$Action_ = $EntityPlayerActionPack$Action$Type;
}}
declare module "packages/dev/dubhe/curtain/features/player/fakes/$IEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEntity {

 "getPortalTimer"(): integer
 "isPermanentVehicle"(): boolean
 "setPortalTimer"(arg0: integer): void
 "getPublicNetherPortalCooldown"(): integer
 "setPublicNetherPortalCooldown"(arg0: integer): void
 "setPermanentVehicle"(arg0: boolean): void
 "getMainYaw"(arg0: float): float
}

export namespace $IEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntity$Type = ($IEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntity_ = $IEntity$Type;
}}
declare module "packages/dev/dubhe/curtain/features/player/helpers/$EntityPlayerActionPack$ActionType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EntityPlayerActionPack$ActionType extends $Enum<($EntityPlayerActionPack$ActionType)> {
static readonly "USE": $EntityPlayerActionPack$ActionType
static readonly "ATTACK": $EntityPlayerActionPack$ActionType
static readonly "JUMP": $EntityPlayerActionPack$ActionType
static readonly "DROP_ITEM": $EntityPlayerActionPack$ActionType
static readonly "DROP_STACK": $EntityPlayerActionPack$ActionType
static readonly "SWAP_HANDS": $EntityPlayerActionPack$ActionType
readonly "preventSpectator": boolean


public static "values"(): ($EntityPlayerActionPack$ActionType)[]
public static "valueOf"(arg0: string): $EntityPlayerActionPack$ActionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPlayerActionPack$ActionType$Type = (("drop_item") | ("drop_stack") | ("swap_hands") | ("use") | ("attack") | ("jump")) | ($EntityPlayerActionPack$ActionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPlayerActionPack$ActionType_ = $EntityPlayerActionPack$ActionType$Type;
}}
declare module "packages/dev/dubhe/curtain/mixins/$ExplosionAccessor" {
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$Type} from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ExplosionAccessor {

 "getSource"(): $Entity
 "getX"(): double
 "getY"(): double
 "getRandom"(): $RandomSource
 "getBlockInteraction"(): $Explosion$BlockInteraction
 "getZ"(): double
 "getRadius"(): float
 "isFire"(): boolean
 "getLevel"(): $Level
}

export namespace $ExplosionAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionAccessor$Type = ($ExplosionAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplosionAccessor_ = $ExplosionAccessor$Type;
}}

declare module "packages/appeng/core/definitions/$ItemDefinition" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"

export class $ItemDefinition<T extends $Item> implements $ItemLike {

constructor(arg0: string, arg1: $ResourceLocation$Type, arg2: T)

public "id"(): $ResourceLocation
public "stack"(arg0: integer): $ItemStack
public "stack"(): $ItemStack
public "getEnglishName"(): string
public "genericStack"(arg0: long): $GenericStack
public "isSameAs"(arg0: $AEKey$Type): boolean
public "isSameAs"(arg0: $ItemStack$Type): boolean
public "asItem"(): T
get "englishName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDefinition$Type<T> = ($ItemDefinition<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDefinition_<T> = $ItemDefinition$Type<(T)>;
}}
declare module "packages/appeng/core/settings/$TickRates" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TickRates extends $Enum<($TickRates)> {
static readonly "Interface": $TickRates
static readonly "ImportBus": $TickRates
static readonly "ExportBus": $TickRates
static readonly "AnnihilationPlane": $TickRates
static readonly "METunnel": $TickRates
static readonly "Inscriber": $TickRates
static readonly "Charger": $TickRates
static readonly "IOPort": $TickRates
static readonly "VibrationChamber": $TickRates
static readonly "StorageBus": $TickRates
static readonly "ItemTunnel": $TickRates
static readonly "LightTunnel": $TickRates


public static "values"(): ($TickRates)[]
public static "valueOf"(arg0: string): $TickRates
public "getMax"(): integer
public "getMin"(): integer
public "setMin"(arg0: integer): void
public "setMax"(arg0: integer): void
public "getDefaultMin"(): integer
public "getDefaultMax"(): integer
get "max"(): integer
get "min"(): integer
set "min"(value: integer)
set "max"(value: integer)
get "defaultMin"(): integer
get "defaultMax"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickRates$Type = (("exportbus") | ("charger") | ("inscriber") | ("importbus") | ("annihilationplane") | ("lighttunnel") | ("ioport") | ("interface") | ("metunnel") | ("storagebus") | ("itemtunnel") | ("vibrationchamber")) | ($TickRates);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickRates_ = $TickRates$Type;
}}

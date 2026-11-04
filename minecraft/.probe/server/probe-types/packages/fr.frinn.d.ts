declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$WeatherRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $WeatherRequirementJS extends $RecipeJSBuilder {

 "requireWeatherOnMachine"(weather: string): $RecipeJSBuilder
 "requireWeather"(weather: string): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $WeatherRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeatherRequirementJS$Type = ($WeatherRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeatherRequirementJS_ = $WeatherRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/impl/codec/$NamedMapCodec" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$MapCodec, $MapCodec$Type} from "packages/com/mojang/serialization/$MapCodec"
import {$MapEncoder, $MapEncoder$Type} from "packages/com/mojang/serialization/$MapEncoder"
import {$MapCodec$ResultFunction, $MapCodec$ResultFunction$Type} from "packages/com/mojang/serialization/$MapCodec$ResultFunction"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Encoder, $Encoder$Type} from "packages/com/mojang/serialization/$Encoder"
import {$UnboundedMapCodec, $UnboundedMapCodec$Type} from "packages/fr/frinn/custommachinery/impl/codec/$UnboundedMapCodec"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$KeyCompressor, $KeyCompressor$Type} from "packages/com/mojang/serialization/$KeyCompressor"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$MapLike, $MapLike$Type} from "packages/com/mojang/serialization/$MapLike"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$NamedRecordCodec$Instance, $NamedRecordCodec$Instance$Type} from "packages/fr/frinn/custommachinery/impl/codec/$NamedRecordCodec$Instance"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Lifecycle, $Lifecycle$Type} from "packages/com/mojang/serialization/$Lifecycle"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$MapDecoder, $MapDecoder$Type} from "packages/com/mojang/serialization/$MapDecoder"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$DoubleStream, $DoubleStream$Type} from "packages/java/util/stream/$DoubleStream"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"
import {$PairCodec, $PairCodec$Type} from "packages/fr/frinn/custommachinery/impl/codec/$PairCodec"
import {$RecordBuilder, $RecordBuilder$Type} from "packages/com/mojang/serialization/$RecordBuilder"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$CompressorHolder, $CompressorHolder$Type} from "packages/com/mojang/serialization/$CompressorHolder"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$NamedRecordCodec, $NamedRecordCodec$Type} from "packages/fr/frinn/custommachinery/impl/codec/$NamedRecordCodec"
import {$Registrar, $Registrar$Type} from "packages/dev/architectury/registry/registries/$Registrar"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NamedMapCodec<A> extends $CompressorHolder implements $MapDecoder<(A)>, $MapEncoder<(A)>, $NamedCodec<(A)> {

constructor()

public "decode"<T>(ops: $DynamicOps$Type<(T)>, input: T): $DataResult<($Pair<(A), (T)>)>
public "encode"<T>(ops: $DynamicOps$Type<(T)>, input: A, prefix: T): $DataResult<(T)>
public static "of"<A>(decoder: $MapDecoder$Type<(A)>, encoder: $MapEncoder$Type<(A)>, name: string): $NamedMapCodec<(A)>
public "orElse"(onError: $UnaryOperator$Type<(string)>, value: A): $NamedMapCodec<(A)>
public "orElse"(onError: $Consumer$Type<(string)>, value: A): $NamedMapCodec<(A)>
public "orElse"(value: A): $NamedMapCodec<(A)>
public "aliases"(...aliases: (string)[]): $NamedMapCodec<(A)>
public "orElseGet"(onError: $Consumer$Type<(string)>, value: $Supplier$Type<(any)>): $NamedMapCodec<(A)>
public "orElseGet"(onError: $UnaryOperator$Type<(string)>, value: $Supplier$Type<(any)>): $NamedMapCodec<(A)>
public "orElseGet"(value: $Supplier$Type<(any)>): $NamedMapCodec<(A)>
public "mapCodec"(): $MapCodec<(A)>
public "withLifecycle"(lifecycle: $Lifecycle$Type): $NamedMapCodec<(A)>
public "mapResult"(arg0: $MapCodec$ResultFunction$Type<(A)>): $NamedMapCodec<(A)>
public "forGetter"<O>(getter: $Function$Type<(O), (A)>): $NamedRecordCodec<(O), (A)>
public "decode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: $MapLike$Type<(T)>): $DataResult<(A)>
public "map"<B>(arg0: $Function$Type<(any), (any)>): $MapDecoder<(B)>
public "flatMap"<B>(arg0: $Function$Type<(any), (any)>): $MapDecoder<(B)>
public "decoder"(): $Decoder<(A)>
public "ap"<E>(arg0: $MapDecoder$Type<($Function$Type<(any), (any)>)>): $MapDecoder<(E)>
public "compressor"<T>(arg0: $DynamicOps$Type<(T)>): $KeyCompressor<(T)>
public "compressedDecode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<(A)>
public "encode"<T>(arg0: A, arg1: $DynamicOps$Type<(T)>, arg2: $RecordBuilder$Type<(T)>): $RecordBuilder<(T)>
public "encoder"(): $Encoder<(A)>
public "flatComap"<B>(arg0: $Function$Type<(any), (any)>): $MapEncoder<(B)>
public "comap"<B>(arg0: $Function$Type<(any), (any)>): $MapEncoder<(B)>
public "compressedBuilder"<T>(arg0: $DynamicOps$Type<(T)>): $RecordBuilder<(T)>
public static "makeCompressedBuilder"<T>(arg0: $DynamicOps$Type<(T)>, arg1: $KeyCompressor$Type<(T)>): $RecordBuilder<(T)>
public static "unit"<A>(defaultValue: $Supplier$Type<(A)>, name: string): $NamedCodec<(A)>
public static "unit"<A>(defaultValue: A, name: string): $NamedCodec<(A)>
public static "unit"<A>(defaultValue: A): $NamedCodec<(A)>
public "name"(): string
public "dispatch"<E>(typeKey: string, type: $Function$Type<(any), (any)>, valueCodecGetter: $Function$Type<(any), (any)>, name: string): $NamedMapCodec<(E)>
public "dispatch"<E>(type: $Function$Type<(any), (any)>, valueCodecGetter: $Function$Type<(any), (any)>, name: string): $NamedMapCodec<(E)>
public static "of"<A>(codec: $Codec$Type<(A)>, name: string): $NamedCodec<(A)>
public static "of"<A>(codec: $Codec$Type<(A)>): $NamedCodec<(A)>
public static "list"<A>(codec: $NamedCodec$Type<(A)>, name: string): $NamedCodec<($List<(A)>)>
public static "list"<A>(codec: $NamedCodec$Type<(A)>): $NamedCodec<($List<(A)>)>
public static "record"<O>(builder: $Function$Type<($NamedRecordCodec$Instance$Type<(O)>), (any)>, name: string): $NamedMapCodec<(O)>
public "read"<T>(ops: $DynamicOps$Type<(T)>, input: T): $DataResult<(A)>
public "copy"(input: A): A
public static "checkRange"<N extends (number) & ($Comparable<(N)>)>(minInclusive: N, maxInclusive: N): $Function<(N), ($DataResult<(N)>)>
public static "pair"<F, S>(first: $NamedCodec$Type<(F)>, second: $NamedCodec$Type<(S)>): $PairCodec<(F), (S)>
public static "lazy"<A>(supplier: $Supplier$Type<($NamedCodec$Type<(A)>)>, name: string): $NamedCodec<(A)>
public static "getJson"<U>(dynamic: $Dynamic$Type<(any)>): $JsonElement
public static "fromJson"<T>(parser: $Function$Type<($JsonElement$Type), (T)>, encoder: $Function$Type<(T), ($JsonElement$Type)>, name: string): $NamedCodec<(T)>
public static "enumMap"<K extends $Enum<(K)>, V>(keyEnumClass: $Class$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>): $NamedMapCodec<($Map<(K), (V)>)>
public static "enumMap"<K extends $Enum<(K)>, V>(keyEnumClass: $Class$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, name: string): $NamedMapCodec<($Map<(K), (V)>)>
public static "enumMap"<K extends $Enum<(K)>, V>(keyEnumClass: $Class$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, defaultValue: V): $NamedMapCodec<($Map<(K), (V)>)>
public static "enumMap"<K extends $Enum<(K)>, V>(keyEnumClass: $Class$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, defaultValue: V, name: string): $NamedMapCodec<($Map<(K), (V)>)>
public "fromNetwork"(buf: $FriendlyByteBuf$Type): A
public static "registrar"<A>(registrar: $Registrar$Type<(A)>): $NamedCodec<(A)>
public static "validateDoubleStreamSize"(stream: $DoubleStream$Type, size: integer): $DataResult<((double)[])>
public "xmap"<S>(to: $Function$Type<(any), (any)>, from: $Function$Type<(any), (any)>, name: string): $NamedCodec<(S)>
public "fieldOf"(fieldName: string): $NamedMapCodec<(A)>
public "codec"(): $Codec<(A)>
public "flatXmap"<S>(to: $Function$Type<(any), (any)>, from: $Function$Type<(any), (any)>, name: string): $NamedCodec<(S)>
public "optionalFieldOf"(fieldName: string, defaultValue: A): $NamedMapCodec<(A)>
public "optionalFieldOf"(fieldName: string, defaultValue: $Supplier$Type<(A)>): $NamedMapCodec<(A)>
public "optionalFieldOf"(fieldName: string): $NamedMapCodec<($Optional<(A)>)>
public static "either"<F, S>(first: $NamedCodec$Type<(F)>, second: $NamedCodec$Type<(S)>): $NamedCodec<($Either<(F), (S)>)>
public static "either"<F, S>(first: $NamedCodec$Type<(F)>, second: $NamedCodec$Type<(S)>, name: string): $NamedCodec<($Either<(F), (S)>)>
public "flatComapMap"<S>(to: $Function$Type<(any), (any)>, from: $Function$Type<(any), (any)>, name: string): $NamedCodec<(S)>
public static "unboundedMap"<K, V>(keyCodec: $NamedCodec$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, name: string): $UnboundedMapCodec<(K), (V)>
public "comapFlatMap"<S>(to: $Function$Type<(any), (any)>, from: $Function$Type<(any), (any)>, name: string): $NamedCodec<(S)>
public static "intRange"(minInclusive: integer, maxInclusive: integer): $NamedCodec<(integer)>
public static "floatRange"(minInclusive: float, maxInclusive: float): $NamedCodec<(float)>
public static "doubleRange"(minInclusive: double, maxInclusive: double): $NamedCodec<(double)>
public "encodeStart"<T>(ops: $DynamicOps$Type<(T)>, input: A): $DataResult<(T)>
public "listOf"(): $NamedCodec<($List<(A)>)>
public "listOf"(name: string): $NamedCodec<($List<(A)>)>
public static "longRange"(minInclusive: long, maxInclusive: long): $NamedCodec<(long)>
public "toNetwork"(input: A, buf: $FriendlyByteBuf$Type): void
public static "enumCodec"<E extends $Enum<(E)>>(enumClass: $Class$Type<(E)>): $NamedCodec<(E)>
public static "enumCodec"<E extends $Enum<(E)>>(enumClass: $Class$Type<(E)>, name: string): $NamedCodec<(E)>
public static "forStrings"(arg0: $Supplier$Type<($Stream$Type<(string)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedMapCodec$Type<A> = ($NamedMapCodec<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedMapCodec_<A> = $NamedMapCodec$Type<(A)>;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$EffectRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $EffectRequirementJS extends $RecipeJSBuilder {

 "giveEffectOnEnd"(effect: string, time: integer, radius: integer, level: integer, filter: (string)[]): $RecipeJSBuilder
 "giveEffectOnEnd"(effect: string, time: integer, radius: integer, filter: (string)[]): $RecipeJSBuilder
 "giveEffectOnEnd"(effect: string, time: integer, radius: integer, level: integer): $RecipeJSBuilder
 "giveEffectOnEnd"(effect: string, time: integer, radius: integer): $RecipeJSBuilder
 "giveEffectEachTick"(effect: string, time: integer, radius: integer, levelOrFilter: any): $RecipeJSBuilder
 "giveEffectEachTick"(effect: string, time: integer, radius: integer, level: integer, filter: (string)[]): $RecipeJSBuilder
 "giveEffectEachTick"(effect: string, time: integer, radius: integer): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $EffectRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectRequirementJS$Type = ($EffectRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectRequirementJS_ = $EffectRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/crafting/$IRecipeBuilder" {
import {$IMachineRecipe, $IMachineRecipe$Type} from "packages/fr/frinn/custommachinery/api/crafting/$IMachineRecipe"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IRecipeBuilder<T extends $IMachineRecipe> {

 "build"(arg0: $ResourceLocation$Type): T
 "withPriority"(arg0: integer): $IRecipeBuilder<(T)>
 "hide"(): $IRecipeBuilder<(T)>
 "withJeiRequirement"(arg0: $IRequirement$Type<(any)>): $IRecipeBuilder<(T)>
 "withRequirement"(arg0: $IRequirement$Type<(any)>): $IRecipeBuilder<(T)>
 "withJeiPriority"(arg0: integer): $IRecipeBuilder<(T)>
}

export namespace $IRecipeBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeBuilder$Type<T> = ($IRecipeBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeBuilder_<T> = $IRecipeBuilder$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/$CustomMachineUpgradeJSBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder, $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/$CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MachineUpgrade, $MachineUpgrade$Type} from "packages/fr/frinn/custommachinery/common/upgrade/$MachineUpgrade"

export class $CustomMachineUpgradeJSBuilder {

constructor(item: $Item$Type, maxAmount: integer)

public "build"(): $MachineUpgrade
public "modifier"(builder: $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder$Type): $CustomMachineUpgradeJSBuilder
public "tooltip"(...components: ($Component$Type)[]): $CustomMachineUpgradeJSBuilder
public "machine"(...string: (string)[]): $CustomMachineUpgradeJSBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMachineUpgradeJSBuilder$Type = ($CustomMachineUpgradeJSBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMachineUpgradeJSBuilder_ = $CustomMachineUpgradeJSBuilder$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ChunkloadRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $ChunkloadRequirementJS extends $RecipeJSBuilder {

 "chunkload"(): $RecipeJSBuilder
 "chunkload"(radius: integer): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $ChunkloadRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkloadRequirementJS$Type = ($ChunkloadRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkloadRequirementJS_ = $ChunkloadRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/network/$ISyncable" {
import {$IData, $IData$Type} from "packages/fr/frinn/custommachinery/api/network/$IData"

export interface $ISyncable<D extends $IData<(any)>, T> {

 "get"(): T
 "set"(arg0: T): void
 "getData"(arg0: short): D
 "needSync"(): boolean
}

export namespace $ISyncable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISyncable$Type<D, T> = ($ISyncable<(D), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISyncable_<D, T> = $ISyncable$Type<(D), (T)>;
}}
declare module "packages/fr/frinn/custommachinery/api/component/handler/$IComponentHandler" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MachineComponentType, $MachineComponentType$Type} from "packages/fr/frinn/custommachinery/api/component/$MachineComponentType"
import {$ComponentIOMode, $ComponentIOMode$Type} from "packages/fr/frinn/custommachinery/api/component/$ComponentIOMode"
import {$IMachineComponentManager, $IMachineComponentManager$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponentManager"
import {$IMachineComponent, $IMachineComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MachineStatus, $MachineStatus$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineStatus"

export interface $IComponentHandler<T extends $IMachineComponent> extends $IMachineComponent {

 "getComponentForID"(arg0: string): $Optional<(T)>
 "getComponents"(): $List<(T)>
 "init"(): void
 "getType"(): $MachineComponentType<(any)>
 "getMode"(): $ComponentIOMode
 "onStatusChanged"(oldStatus: $MachineStatus$Type, newStatus: $MachineStatus$Type, message: $Component$Type): void
 "onRemoved"(): void
 "getManager"(): $IMachineComponentManager
}

export namespace $IComponentHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentHandler$Type<T> = ($IComponentHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComponentHandler_<T> = $IComponentHandler$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$BiomeRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $BiomeRequirementJS extends $RecipeJSBuilder {

 "biomeBlacklist"(biomes: (string)[]): $RecipeJSBuilder
 "biomeWhitelist"(biomes: (string)[]): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $BiomeRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeRequirementJS$Type = ($BiomeRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeRequirementJS_ = $BiomeRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/impl/component/config/$RelativeSide" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"

export class $RelativeSide extends $Enum<($RelativeSide)> {
static readonly "TOP": $RelativeSide
static readonly "BOTTOM": $RelativeSide
static readonly "FRONT": $RelativeSide
static readonly "RIGHT": $RelativeSide
static readonly "BACK": $RelativeSide
static readonly "LEFT": $RelativeSide
static readonly "CODEC": $NamedCodec<($RelativeSide)>


public static "values"(): ($RelativeSide)[]
public static "valueOf"(name: string): $RelativeSide
public "getTranslationName"(): $Component
public "getDirection"(facing: $Direction$Type): $Direction
public static "fromDirections"(facing: $Direction$Type, side: $Direction$Type): $RelativeSide
get "translationName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelativeSide$Type = (("top") | ("left") | ("bottom") | ("back") | ("front") | ("right")) | ($RelativeSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelativeSide_ = $RelativeSide$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/component/$IComparatorInputComponent" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MachineComponentType, $MachineComponentType$Type} from "packages/fr/frinn/custommachinery/api/component/$MachineComponentType"
import {$ComponentIOMode, $ComponentIOMode$Type} from "packages/fr/frinn/custommachinery/api/component/$ComponentIOMode"
import {$IMachineComponentManager, $IMachineComponentManager$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponentManager"
import {$IMachineComponent, $IMachineComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponent"
import {$MachineStatus, $MachineStatus$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineStatus"

export interface $IComparatorInputComponent extends $IMachineComponent {

 "getComparatorInput"(): integer
 "init"(): void
 "getType"(): $MachineComponentType<(any)>
 "getMode"(): $ComponentIOMode
 "onStatusChanged"(oldStatus: $MachineStatus$Type, newStatus: $MachineStatus$Type, message: $Component$Type): void
 "onRemoved"(): void
 "getManager"(): $IMachineComponentManager
}

export namespace $IComparatorInputComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComparatorInputComponent$Type = ($IComparatorInputComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComparatorInputComponent_ = $IComparatorInputComponent$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/component/$ISerializableComponent" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MachineComponentType, $MachineComponentType$Type} from "packages/fr/frinn/custommachinery/api/component/$MachineComponentType"
import {$ComponentIOMode, $ComponentIOMode$Type} from "packages/fr/frinn/custommachinery/api/component/$ComponentIOMode"
import {$IMachineComponentManager, $IMachineComponentManager$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponentManager"
import {$IMachineComponent, $IMachineComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponent"
import {$MachineStatus, $MachineStatus$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineStatus"

export interface $ISerializableComponent extends $IMachineComponent {

 "serialize"(arg0: $CompoundTag$Type): void
 "deserialize"(arg0: $CompoundTag$Type): void
 "init"(): void
 "getType"(): $MachineComponentType<(any)>
 "getMode"(): $ComponentIOMode
 "onStatusChanged"(oldStatus: $MachineStatus$Type, newStatus: $MachineStatus$Type, message: $Component$Type): void
 "onRemoved"(): void
 "getManager"(): $IMachineComponentManager
}

export namespace $ISerializableComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISerializableComponent$Type = ($ISerializableComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISerializableComponent_ = $ISerializableComponent$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/guielement/$GuiElementType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IGuiElement, $IGuiElement$Type} from "packages/fr/frinn/custommachinery/api/guielement/$IGuiElement"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"

export class $GuiElementType<T extends $IGuiElement> {
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($GuiElementType<(any)>)>)>


public "getId"(): $ResourceLocation
public static "create"<T extends $IGuiElement>(codec: $NamedCodec$Type<(T)>): $GuiElementType<(T)>
public "getTranslatedName"(): $Component
public "getCodec"(): $NamedCodec<(T)>
get "id"(): $ResourceLocation
get "translatedName"(): $Component
get "codec"(): $NamedCodec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiElementType$Type<T> = ($GuiElementType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiElementType_<T> = $GuiElementType$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ExperienceRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $ExperienceRequirementJS extends $RecipeJSBuilder {

 "produceXp"(xp: integer): $RecipeJSBuilder
 "requireLevel"(levels: integer): $RecipeJSBuilder
 "produceLevel"(levels: integer): $RecipeJSBuilder
 "requireXp"(xp: integer): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $ExperienceRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperienceRequirementJS$Type = ($ExperienceRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperienceRequirementJS_ = $ExperienceRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/network/$IData" {
import {$DataType, $DataType$Type} from "packages/fr/frinn/custommachinery/api/network/$DataType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $IData<T> {

 "getValue"(): T
 "getType"(): $DataType<(any), (T)>
 "getID"(): short
 "writeData"(buffer: $FriendlyByteBuf$Type): void
}

export namespace $IData {
function readData(buffer: $FriendlyByteBuf$Type): $IData<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IData$Type<T> = ($IData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IData_<T> = $IData$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/$CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder {


public "target"(target: string): $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder
public "min"(min: double): $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder
public "max"(max: double): $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder
public static "expInput"(type: $ResourceLocation$Type, modifier: double): $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder
public static "mulOutput"(type: $ResourceLocation$Type, modifier: double): $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder
public static "expOutput"(type: $ResourceLocation$Type, modifier: double): $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder
public static "mulInput"(type: $ResourceLocation$Type, modifier: double): $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder
public static "addInput"(type: $ResourceLocation$Type, modifier: double): $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder
public "tooltip"(tooltip: $Component$Type): $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder
public static "addOutput"(type: $ResourceLocation$Type, modifier: double): $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder
public "chance"(chance: double): $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder$Type = ($CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder_ = $CustomMachineUpgradeJSBuilder$JSRecipeModifierBuilder$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/init/$CustomMachineTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MachineTile, $MachineTile$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineTile"
import {$UpgradeManager, $UpgradeManager$Type} from "packages/fr/frinn/custommachinery/common/crafting/$UpgradeManager"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MachineComponentManager, $MachineComponentManager$Type} from "packages/fr/frinn/custommachinery/common/component/$MachineComponentManager"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IGuiElement, $IGuiElement$Type} from "packages/fr/frinn/custommachinery/api/guielement/$IGuiElement"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IProcessor, $IProcessor$Type} from "packages/fr/frinn/custommachinery/api/crafting/$IProcessor"
import {$ISyncableStuff, $ISyncableStuff$Type} from "packages/fr/frinn/custommachinery/api/network/$ISyncableStuff"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ISyncable, $ISyncable$Type} from "packages/fr/frinn/custommachinery/api/network/$ISyncable"
import {$MachineAppearance, $MachineAppearance$Type} from "packages/fr/frinn/custommachinery/common/machine/$MachineAppearance"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MachineStatus, $MachineStatus$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineStatus"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IMachineAppearance, $IMachineAppearance$Type} from "packages/fr/frinn/custommachinery/api/machine/$IMachineAppearance"

export class $CustomMachineTile extends $MachineTile implements $ISyncableStuff {
static readonly "DUMMY": $ResourceLocation

constructor(pos: $BlockPos$Type, state: $BlockState$Type)

public "getMessage"(): $Component
public "getId"(): $ResourceLocation
public "unload"(): void
public "setOwner"(entity: $LivingEntity$Type): void
public "isUnloaded"(): boolean
public "refreshMachine"(id: $ResourceLocation$Type): void
public "setPaused"(paused: boolean): void
public "isPaused"(): boolean
public "getUpgradeManager"(): $UpgradeManager
public "setStatus"(status: $MachineStatus$Type, message: $Component$Type): void
public "resetProcess"(): void
public "startInteracting"(player: $ServerPlayer$Type): void
public "stopInteracting"(player: $ServerPlayer$Type): void
public "getStuffToSync"(container: $Consumer$Type<($ISyncable$Type<(any), (any)>)>): void
public "getStatus"(): $MachineStatus
public "getOwnerId"(): $UUID
public "setId"(id: $ResourceLocation$Type): void
public static "clientTick"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, tile: $CustomMachineTile$Type): void
public "load"(nbt: $CompoundTag$Type): void
public "setLevel"(level: $Level$Type): void
public "m_183515_"(nbt: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "setRemoved"(): void
public "getOwnerName"(): $Component
public "getAppearance"(): $MachineAppearance
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getComponentManager"(): $MachineComponentManager
public "getProcessor"(): $IProcessor
public static "serverTick"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, tile: $CustomMachineTile$Type): void
public "setCustomAppearance"(customAppearance: $IMachineAppearance$Type): void
public "setCustomGuiElements"(customGuiElements: $List$Type<($IGuiElement$Type)>): void
public "getGuiElements"(): $List<($IGuiElement)>
get "message"(): $Component
get "id"(): $ResourceLocation
set "owner"(value: $LivingEntity$Type)
get "unloaded"(): boolean
set "paused"(value: boolean)
get "paused"(): boolean
get "upgradeManager"(): $UpgradeManager
get "status"(): $MachineStatus
get "ownerId"(): $UUID
set "id"(value: $ResourceLocation$Type)
set "level"(value: $Level$Type)
get "updateTag"(): $CompoundTag
get "ownerName"(): $Component
get "appearance"(): $MachineAppearance
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "componentManager"(): $MachineComponentManager
get "processor"(): $IProcessor
set "customAppearance"(value: $IMachineAppearance$Type)
set "customGuiElements"(value: $List$Type<($IGuiElement$Type)>)
get "guiElements"(): $List<($IGuiElement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMachineTile$Type = ($CustomMachineTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMachineTile_ = $CustomMachineTile$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/$CustomCraftRecipeJSBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EnergyRequirementJS, $EnergyRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$EnergyRequirementJS"
import {$DimensionRequirementJS, $DimensionRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$DimensionRequirementJS"
import {$FuelRequirementJS, $FuelRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$FuelRequirementJS"
import {$RecipeFunction, $RecipeFunction$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/function/$RecipeFunction"
import {$BiomeRequirementJS, $BiomeRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$BiomeRequirementJS"
import {$CommandRequirementJS, $CommandRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$CommandRequirementJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemRequirementJS, $ItemRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ItemRequirementJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$StructureRequirement$Action, $StructureRequirement$Action$Type} from "packages/fr/frinn/custommachinery/common/requirement/$StructureRequirement$Action"
import {$TimeRequirementJS, $TimeRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$TimeRequirementJS"
import {$BlockRequirement$ACTION, $BlockRequirement$ACTION$Type} from "packages/fr/frinn/custommachinery/common/requirement/$BlockRequirement$ACTION"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$PositionRequirementJS, $PositionRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$PositionRequirementJS"
import {$ButtonRequirementJS, $ButtonRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ButtonRequirementJS"
import {$ItemFilterRequirementJS, $ItemFilterRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ItemFilterRequirementJS"
import {$FunctionRequirementJS, $FunctionRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$FunctionRequirementJS"
import {$ItemTransformRequirementJS, $ItemTransformRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ItemTransformRequirementJS"
import {$ExperienceRequirementJS, $ExperienceRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ExperienceRequirementJS"
import {$FluidStackJS, $FluidStackJS$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"
import {$BlockRequirementJS, $BlockRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$BlockRequirementJS"
import {$EntityRequirementJS, $EntityRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$EntityRequirementJS"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"
import {$WeatherRequirementJS, $WeatherRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$WeatherRequirementJS"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$DropRequirementJS, $DropRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$DropRequirementJS"
import {$EffectRequirementJS, $EffectRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$EffectRequirementJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$CustomCraftRecipeBuilder, $CustomCraftRecipeBuilder$Type} from "packages/fr/frinn/custommachinery/common/crafting/craft/$CustomCraftRecipeBuilder"
import {$DurabilityRequirementJS, $DurabilityRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$DurabilityRequirementJS"
import {$LightRequirementJS, $LightRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$LightRequirementJS"
import {$SkyRequirementJS, $SkyRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$SkyRequirementJS"
import {$RequirementIOMode, $RequirementIOMode$Type} from "packages/fr/frinn/custommachinery/api/requirement/$RequirementIOMode"
import {$FluidRequirementJS, $FluidRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$FluidRequirementJS"
import {$StructureRequirementJS, $StructureRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$StructureRequirementJS"
import {$AbstractRecipeJSBuilder, $AbstractRecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/$AbstractRecipeJSBuilder"
import {$RedstoneRequirementJS, $RedstoneRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$RedstoneRequirementJS"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$LootTableRequirementJS, $LootTableRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$LootTableRequirementJS"

export class $CustomCraftRecipeJSBuilder extends $AbstractRecipeJSBuilder<($CustomCraftRecipeBuilder)> implements $BiomeRequirementJS, $BlockRequirementJS, $CommandRequirementJS, $DimensionRequirementJS, $DropRequirementJS, $DurabilityRequirementJS, $EffectRequirementJS, $EnergyRequirementJS, $EntityRequirementJS, $FluidRequirementJS, $FuelRequirementJS, $FunctionRequirementJS, $ItemRequirementJS, $ItemTransformRequirementJS, $LightRequirementJS, $LootTableRequirementJS, $PositionRequirementJS, $RedstoneRequirementJS, $StructureRequirementJS, $TimeRequirementJS, $WeatherRequirementJS, $ButtonRequirementJS, $SkyRequirementJS, $ItemFilterRequirementJS, $ExperienceRequirementJS {
static readonly "IDS": $Map<($ResourceLocation), ($Map<($ResourceLocation), (integer)>)>
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor()

public "writeOutputItem"(value: $OutputItem$Type): $JsonElement
public "biomeBlacklist"(biomes: (string)[]): $RecipeJSBuilder
public "biomeWhitelist"(biomes: (string)[]): $RecipeJSBuilder
public "breakAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "breakAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[]): $RecipeJSBuilder
public "breakAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "breakAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "destroyBlockOnStart"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "destroyBlockOnStart"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "destroyAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "destroyAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[]): $RecipeJSBuilder
public "destroyAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "destroyAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "breakAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "breakAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "breakAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[]): $RecipeJSBuilder
public "breakAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "destroyAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[]): $RecipeJSBuilder
public "destroyAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "destroyAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "destroyAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "requireBlock"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "requireBlock"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, comparator: string): $RecipeJSBuilder
public "requireBlock"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "breakBlockOnStart"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "breakBlockOnStart"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "placeBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "placeBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "destroyBlockOnEnd"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "destroyBlockOnEnd"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "breakBlockOnEnd"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "breakBlockOnEnd"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "placeBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "placeBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "blockRequirement"(mode: $RequirementIOMode$Type, action: $BlockRequirement$ACTION$Type, block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, comparator: string, stringFilter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "runCommandOnEnd"(command: string): $RecipeJSBuilder
public "runCommandOnEnd"(command: string, permissionLevel: integer): $RecipeJSBuilder
public "runCommandOnEnd"(command: string, log: boolean): $RecipeJSBuilder
public "runCommandOnEnd"(command: string, permissionLevel: integer, log: boolean): $RecipeJSBuilder
public "runCommandEachTick"(command: string, log: boolean): $RecipeJSBuilder
public "runCommandEachTick"(command: string, permissionLevel: integer, log: boolean): $RecipeJSBuilder
public "runCommandEachTick"(command: string, permissionLevel: integer): $RecipeJSBuilder
public "runCommandEachTick"(command: string): $RecipeJSBuilder
public "runCommandOnStart"(command: string, permissionLevel: integer): $RecipeJSBuilder
public "runCommandOnStart"(command: string): $RecipeJSBuilder
public "runCommandOnStart"(command: string, log: boolean): $RecipeJSBuilder
public "runCommandOnStart"(command: string, permissionLevel: integer, log: boolean): $RecipeJSBuilder
public "dimensionWhitelist"(dimensions: (string)[]): $RecipeJSBuilder
public "dimensionBlacklist"(dimensions: (string)[]): $RecipeJSBuilder
public "consumeAnyDropOnStart"(amount: integer, radius: integer): $RecipeJSBuilder
public "consumeAnyDropOnEnd"(amount: integer, radius: integer): $RecipeJSBuilder
public "consumeDropsOnStart"(items: ($ItemStack$Type)[], amount: integer, radius: integer): $RecipeJSBuilder
public "consumeDropsOnStart"(items: ($ItemStack$Type)[], amount: integer, radius: integer, whitelist: boolean): $RecipeJSBuilder
public "consumeDropOnEnd"(item: $ItemStack$Type, amount: integer, radius: integer): $RecipeJSBuilder
public "consumeDropsOnEnd"(items: ($ItemStack$Type)[], amount: integer, radius: integer, whitelist: boolean): $RecipeJSBuilder
public "consumeDropsOnEnd"(items: ($ItemStack$Type)[], amount: integer, radius: integer): $RecipeJSBuilder
public "checkDrops"(items: ($ItemStack$Type)[], amount: integer, radius: integer, whitelist: boolean): $RecipeJSBuilder
public "checkDrops"(items: ($ItemStack$Type)[], amount: integer, radius: integer): $RecipeJSBuilder
public "dropItemOnStart"(stack: $ItemStack$Type): $RecipeJSBuilder
public "checkAnyDrop"(amount: integer, radius: integer): $RecipeJSBuilder
public "consumeDropOnStart"(item: $ItemStack$Type, amount: integer, radius: integer): $RecipeJSBuilder
public "checkDrop"(item: $ItemStack$Type, amount: integer, radius: integer): $RecipeJSBuilder
public "dropItemOnEnd"(stack: $ItemStack$Type): $RecipeJSBuilder
public "damageItemTagNoBreak"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
public "damageItemTagNoBreak"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, slot: string): $RecipeJSBuilder
public "damageItemTagNoBreak"(tag: string, amount: integer): $RecipeJSBuilder
public "repairItem"(stack: $ItemStack$Type, amount: integer): $RecipeJSBuilder
public "repairItem"(stack: $ItemStack$Type, amount: integer, slot: string): $RecipeJSBuilder
public "damageItemTag"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
public "damageItemTag"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, slot: string): $RecipeJSBuilder
public "damageItemTag"(tag: string, amount: integer): $RecipeJSBuilder
public "repairItemTag"(tag: string, amount: integer): $RecipeJSBuilder
public "repairItemTag"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
public "repairItemTag"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, slot: string): $RecipeJSBuilder
public "damageItemNoBreak"(stack: $ItemStack$Type, amount: integer): $RecipeJSBuilder
public "damageItemNoBreak"(stack: $ItemStack$Type, amount: integer, slot: string): $RecipeJSBuilder
public "damageItem"(stack: $ItemStack$Type, amount: integer, slot: string): $RecipeJSBuilder
public "damageItem"(stack: $ItemStack$Type, amount: integer): $RecipeJSBuilder
public "giveEffectOnEnd"(effect: string, time: integer, radius: integer, level: integer, filter: (string)[]): $RecipeJSBuilder
public "giveEffectOnEnd"(effect: string, time: integer, radius: integer, filter: (string)[]): $RecipeJSBuilder
public "giveEffectOnEnd"(effect: string, time: integer, radius: integer, level: integer): $RecipeJSBuilder
public "giveEffectOnEnd"(effect: string, time: integer, radius: integer): $RecipeJSBuilder
public "giveEffectEachTick"(effect: string, time: integer, radius: integer, levelOrFilter: any): $RecipeJSBuilder
public "giveEffectEachTick"(effect: string, time: integer, radius: integer, level: integer, filter: (string)[]): $RecipeJSBuilder
public "giveEffectEachTick"(effect: string, time: integer, radius: integer): $RecipeJSBuilder
public "requireEnergy"(amount: integer): $RecipeJSBuilder
public "produceEnergy"(amount: integer): $RecipeJSBuilder
public "killEntitiesOnStart"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "requireEntitiesHealth"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "consumeEntityHealthOnEnd"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "consumeEntityHealthOnStart"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "requireEntities"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "killEntitiesOnEnd"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "requireFluid"(stack: $FluidStackJS$Type): $RecipeJSBuilder
public "requireFluid"(stack: $FluidStackJS$Type, tank: string): $RecipeJSBuilder
public "produceFluid"(stack: $FluidStackJS$Type, tank: string): $RecipeJSBuilder
public "produceFluid"(stack: $FluidStackJS$Type): $RecipeJSBuilder
public "requireFluidTag"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, tank: string): $RecipeJSBuilder
public "requireFluidTag"(tag: string, amount: integer): $RecipeJSBuilder
public "requireFluidTag"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
public "requireFuel"(): $RecipeJSBuilder
public "requireFuel"(amount: integer): $RecipeJSBuilder
public "requireFunctionOnStart"(arg0: $RecipeFunction$Type): $RecipeJSBuilder
public "requireFunctionEachTick"(arg0: $RecipeFunction$Type): $RecipeJSBuilder
public "requireFunctionOnEnd"(arg0: $RecipeFunction$Type): $RecipeJSBuilder
public "requireFunctionToStart"(arg0: $RecipeFunction$Type): $RecipeJSBuilder
public "requireItem"(stack: $ItemStack$Type): $RecipeJSBuilder
public "requireItem"(stack: $ItemStack$Type, slot: string): $RecipeJSBuilder
public "requireItemTag"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
public "requireItemTag"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, slot: string): $RecipeJSBuilder
public "requireItemTag"(tag: string, amount: integer): $RecipeJSBuilder
public "requireItemTag"(tag: string): $RecipeJSBuilder
public "produceItem"(stack: $ItemStack$Type, slot: string): $RecipeJSBuilder
public "produceItem"(stack: $ItemStack$Type): $RecipeJSBuilder
public "transformItemTag"(tag: string, inputAmount: integer, inputNBT: $CompoundTag$Type, output: $ItemStack$Type, inputSlot: string, outputSlot: string, nbt: $Function$Type<($Map$Type<(any), (any)>), (any)>): $RecipeJSBuilder
public "transformItemTag"(tag: string, inputAmount: integer, inputNBT: $CompoundTag$Type): $RecipeJSBuilder
public "transformItemTag"(tag: string, inputAmount: integer, inputNBT: $CompoundTag$Type, output: $ItemStack$Type): $RecipeJSBuilder
public "transformItemTag"(tag: string, inputAmount: integer, inputNBT: $CompoundTag$Type, output: $ItemStack$Type, inputSlot: string, outputSlot: string): $RecipeJSBuilder
public "transformItemTag"(tag: string): $RecipeJSBuilder
public "transformItem"(input: $ItemStack$Type): $RecipeJSBuilder
public "transformItem"(input: $ItemStack$Type, output: $ItemStack$Type): $RecipeJSBuilder
public "transformItem"(input: $ItemStack$Type, output: $ItemStack$Type, inputSlot: string, outputSlot: string): $RecipeJSBuilder
public "transformItem"(input: $ItemStack$Type, output: $ItemStack$Type, inputSlot: string, outputSlot: string, nbt: $Function$Type<($Map$Type<(any), (any)>), (any)>): $RecipeJSBuilder
public "requireSkyLight"(level: string): $RecipeJSBuilder
public "requireBlockLight"(level: string): $RecipeJSBuilder
public "lootTableOutput"(lootTable: string): $RecipeJSBuilder
public "lootTableOutput"(lootTable: string, luck: float): $RecipeJSBuilder
public "requirePosition"(xString: string, yString: string, zString: string): $RecipeJSBuilder
public "requireRedstone"(power: string): $RecipeJSBuilder
public "destroyStructure"(pattern: ((string)[])[], keys: $Map$Type<(string), (string)>): $RecipeJSBuilder
public "placeStructure"(pattern: ((string)[])[], keys: $Map$Type<(string), (string)>, drops: boolean): $RecipeJSBuilder
public "requireStructure"(pattern: ((string)[])[], keys: $Map$Type<(string), (string)>): $RecipeJSBuilder
public "requireStructure"(pattern: ((string)[])[], keys: $Map$Type<(string), (string)>, action: $StructureRequirement$Action$Type): $RecipeJSBuilder
public "breakStructure"(pattern: ((string)[])[], keys: $Map$Type<(string), (string)>): $RecipeJSBuilder
public "requireTime"(time: string): $RecipeJSBuilder
public "requireWeatherOnMachine"(weather: string): $RecipeJSBuilder
public "requireWeather"(weather: string): $RecipeJSBuilder
public "requireButtonPressed"(id: string): $RecipeJSBuilder
public "requireButtonReleased"(id: string): $RecipeJSBuilder
public "mustSeeSky"(): $RecipeJSBuilder
public "requireItemFilter"(ingredient: $Ingredient$Type): $RecipeJSBuilder
public "requireItemFilter"(ingredient: $Ingredient$Type, slot: string): $RecipeJSBuilder
public "produceXp"(xp: integer): $RecipeJSBuilder
public "requireLevel"(levels: integer): $RecipeJSBuilder
public "produceLevel"(levels: integer): $RecipeJSBuilder
public "requireXp"(xp: integer): $RecipeJSBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomCraftRecipeJSBuilder$Type = ($CustomCraftRecipeJSBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomCraftRecipeJSBuilder_ = $CustomCraftRecipeJSBuilder$Type;
}}
declare module "packages/fr/frinn/custommachinery/impl/codec/$NamedRecordCodec$Instance" {
import {$Function8, $Function8$Type} from "packages/com/mojang/datafixers/util/$Function8"
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$Function9, $Function9$Type} from "packages/com/mojang/datafixers/util/$Function9"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$NamedRecordCodec$Mu, $NamedRecordCodec$Mu$Type} from "packages/fr/frinn/custommachinery/impl/codec/$NamedRecordCodec$Mu"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"
import {$Products$P10, $Products$P10$Type} from "packages/com/mojang/datafixers/$Products$P10"
import {$Products$P11, $Products$P11$Type} from "packages/com/mojang/datafixers/$Products$P11"
import {$Products$P14, $Products$P14$Type} from "packages/com/mojang/datafixers/$Products$P14"
import {$NamedRecordCodec$Instance$Mu, $NamedRecordCodec$Instance$Mu$Type} from "packages/fr/frinn/custommachinery/impl/codec/$NamedRecordCodec$Instance$Mu"
import {$Products$P15, $Products$P15$Type} from "packages/com/mojang/datafixers/$Products$P15"
import {$Products$P12, $Products$P12$Type} from "packages/com/mojang/datafixers/$Products$P12"
import {$Products$P13, $Products$P13$Type} from "packages/com/mojang/datafixers/$Products$P13"
import {$Products$P3, $Products$P3$Type} from "packages/com/mojang/datafixers/$Products$P3"
import {$Products$P4, $Products$P4$Type} from "packages/com/mojang/datafixers/$Products$P4"
import {$Products$P16, $Products$P16$Type} from "packages/com/mojang/datafixers/$Products$P16"
import {$Products$P1, $Products$P1$Type} from "packages/com/mojang/datafixers/$Products$P1"
import {$Function16, $Function16$Type} from "packages/com/mojang/datafixers/util/$Function16"
import {$Products$P2, $Products$P2$Type} from "packages/com/mojang/datafixers/$Products$P2"
import {$Applicative$Mu, $Applicative$Mu$Type} from "packages/com/mojang/datafixers/kinds/$Applicative$Mu"
import {$Function11, $Function11$Type} from "packages/com/mojang/datafixers/util/$Function11"
import {$Function10, $Function10$Type} from "packages/com/mojang/datafixers/util/$Function10"
import {$Products$P9, $Products$P9$Type} from "packages/com/mojang/datafixers/$Products$P9"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$Function15, $Function15$Type} from "packages/com/mojang/datafixers/util/$Function15"
import {$Products$P7, $Products$P7$Type} from "packages/com/mojang/datafixers/$Products$P7"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$Function14, $Function14$Type} from "packages/com/mojang/datafixers/util/$Function14"
import {$Products$P8, $Products$P8$Type} from "packages/com/mojang/datafixers/$Products$P8"
import {$Function13, $Function13$Type} from "packages/com/mojang/datafixers/util/$Function13"
import {$Products$P5, $Products$P5$Type} from "packages/com/mojang/datafixers/$Products$P5"
import {$Function12, $Function12$Type} from "packages/com/mojang/datafixers/util/$Function12"
import {$Products$P6, $Products$P6$Type} from "packages/com/mojang/datafixers/$Products$P6"

export class $NamedRecordCodec$Instance<O> implements $Applicative<($NamedRecordCodec$Mu<(O)>), ($NamedRecordCodec$Instance$Mu<(O)>)> {

constructor()

public "map"<T, R>(func: $Function$Type<(any), (any)>, ts: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "point"<A>(a: A): $App<($NamedRecordCodec$Mu<(O)>), (A)>
public "ap4"<T1, T2, T3, T4, R>(func: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function4$Type<(T1), (T2), (T3), (T4), (R)>)>, t1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, t2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, t3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, t4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "lift1"<A, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function$Type<(A), (R)>)>): $Function<($App<($NamedRecordCodec$Mu<(O)>), (A)>), ($App<($NamedRecordCodec$Mu<(O)>), (R)>)>
public "ap3"<T1, T2, T3, R>(func: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function3$Type<(T1), (T2), (T3), (R)>)>, t1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, t2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, t3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "ap2"<A, B, R>(func: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($BiFunction$Type<(A), (B), (R)>)>, a: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (A)>, b: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (B)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public static "unbox"<F extends $K1, Mu extends $Applicative$Mu>(arg0: $App$Type<($NamedRecordCodec$Instance$Mu$Type<(O)>), ($NamedRecordCodec$Mu$Type<(O)>)>): $Applicative<($NamedRecordCodec$Mu<(O)>), ($NamedRecordCodec$Instance$Mu<(O)>)>
public "ap"<A, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function$Type<(A), (R)>)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (A)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "ap"<A, R>(arg0: $Function$Type<(A), (R)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (A)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "ap6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function6$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "ap5"<T1, T2, T3, T4, T5, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function5$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "ap7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function7$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "ap8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function8$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "ap9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function9$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "lift6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function6$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>): $Function6<($App<($NamedRecordCodec$Mu<(O)>), (T1)>), ($App<($NamedRecordCodec$Mu<(O)>), (T2)>), ($App<($NamedRecordCodec$Mu<(O)>), (T3)>), ($App<($NamedRecordCodec$Mu<(O)>), (T4)>), ($App<($NamedRecordCodec$Mu<(O)>), (T5)>), ($App<($NamedRecordCodec$Mu<(O)>), (T6)>), ($App<($NamedRecordCodec$Mu<(O)>), (R)>)>
public "lift4"<T1, T2, T3, T4, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function4$Type<(T1), (T2), (T3), (T4), (R)>)>): $Function4<($App<($NamedRecordCodec$Mu<(O)>), (T1)>), ($App<($NamedRecordCodec$Mu<(O)>), (T2)>), ($App<($NamedRecordCodec$Mu<(O)>), (T3)>), ($App<($NamedRecordCodec$Mu<(O)>), (T4)>), ($App<($NamedRecordCodec$Mu<(O)>), (R)>)>
public "lift8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function8$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>): $Function8<($App<($NamedRecordCodec$Mu<(O)>), (T1)>), ($App<($NamedRecordCodec$Mu<(O)>), (T2)>), ($App<($NamedRecordCodec$Mu<(O)>), (T3)>), ($App<($NamedRecordCodec$Mu<(O)>), (T4)>), ($App<($NamedRecordCodec$Mu<(O)>), (T5)>), ($App<($NamedRecordCodec$Mu<(O)>), (T6)>), ($App<($NamedRecordCodec$Mu<(O)>), (T7)>), ($App<($NamedRecordCodec$Mu<(O)>), (T8)>), ($App<($NamedRecordCodec$Mu<(O)>), (R)>)>
public "lift9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function9$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>): $Function9<($App<($NamedRecordCodec$Mu<(O)>), (T1)>), ($App<($NamedRecordCodec$Mu<(O)>), (T2)>), ($App<($NamedRecordCodec$Mu<(O)>), (T3)>), ($App<($NamedRecordCodec$Mu<(O)>), (T4)>), ($App<($NamedRecordCodec$Mu<(O)>), (T5)>), ($App<($NamedRecordCodec$Mu<(O)>), (T6)>), ($App<($NamedRecordCodec$Mu<(O)>), (T7)>), ($App<($NamedRecordCodec$Mu<(O)>), (T8)>), ($App<($NamedRecordCodec$Mu<(O)>), (T9)>), ($App<($NamedRecordCodec$Mu<(O)>), (R)>)>
public "lift7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function7$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>): $Function7<($App<($NamedRecordCodec$Mu<(O)>), (T1)>), ($App<($NamedRecordCodec$Mu<(O)>), (T2)>), ($App<($NamedRecordCodec$Mu<(O)>), (T3)>), ($App<($NamedRecordCodec$Mu<(O)>), (T4)>), ($App<($NamedRecordCodec$Mu<(O)>), (T5)>), ($App<($NamedRecordCodec$Mu<(O)>), (T6)>), ($App<($NamedRecordCodec$Mu<(O)>), (T7)>), ($App<($NamedRecordCodec$Mu<(O)>), (R)>)>
public "lift5"<T1, T2, T3, T4, T5, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function5$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>): $Function5<($App<($NamedRecordCodec$Mu<(O)>), (T1)>), ($App<($NamedRecordCodec$Mu<(O)>), (T2)>), ($App<($NamedRecordCodec$Mu<(O)>), (T3)>), ($App<($NamedRecordCodec$Mu<(O)>), (T4)>), ($App<($NamedRecordCodec$Mu<(O)>), (T5)>), ($App<($NamedRecordCodec$Mu<(O)>), (R)>)>
public "lift2"<A, B, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($BiFunction$Type<(A), (B), (R)>)>): $BiFunction<($App<($NamedRecordCodec$Mu<(O)>), (A)>), ($App<($NamedRecordCodec$Mu<(O)>), (B)>), ($App<($NamedRecordCodec$Mu<(O)>), (R)>)>
public "lift3"<T1, T2, T3, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function3$Type<(T1), (T2), (T3), (R)>)>): $Function3<($App<($NamedRecordCodec$Mu<(O)>), (T1)>), ($App<($NamedRecordCodec$Mu<(O)>), (T2)>), ($App<($NamedRecordCodec$Mu<(O)>), (T3)>), ($App<($NamedRecordCodec$Mu<(O)>), (R)>)>
public "ap10"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function10$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>, arg10: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T10)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "apply4"<T1, T2, T3, T4, R>(arg0: $Function4$Type<(T1), (T2), (T3), (T4), (R)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "ap11"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function11$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>, arg10: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T10)>, arg11: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T11)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "ap14"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function14$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>, arg10: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T10)>, arg11: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T11)>, arg12: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T12)>, arg13: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T13)>, arg14: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T14)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "ap12"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function12$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>, arg10: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T10)>, arg11: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T11)>, arg12: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T12)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "ap15"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function15$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>, arg10: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T10)>, arg11: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T11)>, arg12: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T12)>, arg13: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T13)>, arg14: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T14)>, arg15: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T15)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "ap13"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function13$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>, arg10: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T10)>, arg11: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T11)>, arg12: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T12)>, arg13: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T13)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "ap16"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), ($Function16$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>, arg10: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T10)>, arg11: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T11)>, arg12: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T12)>, arg13: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T13)>, arg14: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T14)>, arg15: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T15)>, arg16: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T16)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "apply8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $Function8$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "apply5"<T1, T2, T3, T4, T5, R>(arg0: $Function5$Type<(T1), (T2), (T3), (T4), (T5), (R)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "apply7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $Function7$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "apply6"<T1, T2, T3, T4, T5, T6, R>(arg0: $Function6$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "apply9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $Function9$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "apply2"<A, B, R>(arg0: $BiFunction$Type<(A), (B), (R)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (A)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (B)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "apply3"<T1, T2, T3, R>(arg0: $Function3$Type<(T1), (T2), (T3), (R)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>): $App<($NamedRecordCodec$Mu<(O)>), (R)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>, arg9: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T10)>, arg10: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T11)>): $Products$P11<($NamedRecordCodec$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>, arg9: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T10)>): $Products$P10<($NamedRecordCodec$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>): $Products$P9<($NamedRecordCodec$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>, arg9: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T10)>, arg10: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T11)>, arg11: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T12)>, arg12: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T13)>, arg13: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T14)>, arg14: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T15)>, arg15: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T16)>): $Products$P16<($NamedRecordCodec$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>, arg9: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T10)>, arg10: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T11)>, arg11: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T12)>, arg12: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T13)>, arg13: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T14)>, arg14: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T15)>): $Products$P15<($NamedRecordCodec$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>, arg9: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T10)>, arg10: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T11)>, arg11: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T12)>, arg12: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T13)>, arg13: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T14)>): $Products$P14<($NamedRecordCodec$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>, arg9: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T10)>, arg10: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T11)>, arg11: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T12)>, arg12: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T13)>): $Products$P13<($NamedRecordCodec$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>, arg8: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T9)>, arg9: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T10)>, arg10: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T11)>, arg11: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T12)>): $Products$P12<($NamedRecordCodec$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
public "group"<T1, T2, T3>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>): $Products$P3<($NamedRecordCodec$Mu<(O)>), (T1), (T2), (T3)>
public "group"<T1, T2>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>): $Products$P2<($NamedRecordCodec$Mu<(O)>), (T1), (T2)>
public "group"<T1>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>): $Products$P1<($NamedRecordCodec$Mu<(O)>), (T1)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T8)>): $Products$P8<($NamedRecordCodec$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T7)>): $Products$P7<($NamedRecordCodec$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T6)>): $Products$P6<($NamedRecordCodec$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6)>
public "group"<T1, T2, T3, T4, T5>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T5)>): $Products$P5<($NamedRecordCodec$Mu<(O)>), (T1), (T2), (T3), (T4), (T5)>
public "group"<T1, T2, T3, T4>(arg0: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (T4)>): $Products$P4<($NamedRecordCodec$Mu<(O)>), (T1), (T2), (T3), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedRecordCodec$Instance$Type<O> = ($NamedRecordCodec$Instance<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedRecordCodec$Instance_<O> = $NamedRecordCodec$Instance$Type<(O)>;
}}
declare module "packages/fr/frinn/custommachinery/common/crafting/machine/$CustomMachineRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$CustomMachineRecipe, $CustomMachineRecipe$Type} from "packages/fr/frinn/custommachinery/common/crafting/machine/$CustomMachineRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CustomMachineRecipeSerializer implements $RecipeSerializer<($CustomMachineRecipe)> {

constructor()

public "fromJson"(recipeId: $ResourceLocation$Type, json: $JsonObject$Type): $CustomMachineRecipe
public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $CustomMachineRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $CustomMachineRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CustomMachineRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMachineRecipeSerializer$Type = ($CustomMachineRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMachineRecipeSerializer_ = $CustomMachineRecipeSerializer$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/machine/$MachineStatus" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $MachineStatus extends $Enum<($MachineStatus)> implements $StringRepresentable {
static readonly "IDLE": $MachineStatus
static readonly "RUNNING": $MachineStatus
static readonly "ERRORED": $MachineStatus
static readonly "PAUSED": $MachineStatus


public static "value"(string: string): $MachineStatus
public "toString"(): string
public static "values"(): ($MachineStatus)[]
public static "valueOf"(name: string): $MachineStatus
public "getTranslatedName"(): $MutableComponent
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "translatedName"(): $MutableComponent
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineStatus$Type = (("running") | ("paused") | ("idle") | ("errored")) | ($MachineStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineStatus_ = $MachineStatus$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/requirement/$IRequirement" {
import {$MachineComponentType, $MachineComponentType$Type} from "packages/fr/frinn/custommachinery/api/component/$MachineComponentType"
import {$DisplayInfoTemplate, $DisplayInfoTemplate$Type} from "packages/fr/frinn/custommachinery/api/integration/jei/$DisplayInfoTemplate"
import {$IMachineComponent, $IMachineComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponent"
import {$RequirementIOMode, $RequirementIOMode$Type} from "packages/fr/frinn/custommachinery/api/requirement/$RequirementIOMode"
import {$RequirementType, $RequirementType$Type} from "packages/fr/frinn/custommachinery/api/requirement/$RequirementType"
import {$CraftingResult, $CraftingResult$Type} from "packages/fr/frinn/custommachinery/api/crafting/$CraftingResult"
import {$IDisplayInfo, $IDisplayInfo$Type} from "packages/fr/frinn/custommachinery/api/integration/jei/$IDisplayInfo"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"
import {$ICraftingContext, $ICraftingContext$Type} from "packages/fr/frinn/custommachinery/api/crafting/$ICraftingContext"

export interface $IRequirement<T extends $IMachineComponent> {

 "test"(arg0: T, arg1: $ICraftingContext$Type): boolean
 "getComponentType"(): $MachineComponentType<(T)>
 "getType"(): $RequirementType<(any)>
 "getMode"(): $RequirementIOMode
 "getDisplayInfoTemplate"(): $DisplayInfoTemplate
 "setDisplayInfoTemplate"(arg0: $DisplayInfoTemplate$Type): void
 "processEnd"(arg0: T, arg1: $ICraftingContext$Type): $CraftingResult
 "processStart"(arg0: T, arg1: $ICraftingContext$Type): $CraftingResult
 "getDisplayInfo"(info: $IDisplayInfo$Type): void
}

export namespace $IRequirement {
const CODEC: $NamedCodec<($IRequirement<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRequirement$Type<T> = ($IRequirement<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRequirement_<T> = $IRequirement$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/api/machine/$MachineAppearanceProperty" {
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"

export class $MachineAppearanceProperty<T> {
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($MachineAppearanceProperty<(any)>)>)>


public "getId"(): $ResourceLocation
public "getDefaultValue"(): T
public static "create"<T>(codec: $NamedCodec$Type<(T)>, defaultValue: T): $MachineAppearanceProperty<(T)>
public "getCodec"(): $NamedCodec<(T)>
get "id"(): $ResourceLocation
get "defaultValue"(): T
get "codec"(): $NamedCodec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineAppearanceProperty$Type<T> = ($MachineAppearanceProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineAppearanceProperty_<T> = $MachineAppearanceProperty$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$EnergyPerTickRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $EnergyPerTickRequirementJS extends $RecipeJSBuilder {

 "requireEnergyPerTick"(amount: integer): $RecipeJSBuilder
 "produceEnergyPerTick"(amount: integer): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $EnergyPerTickRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyPerTickRequirementJS$Type = ($EnergyPerTickRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyPerTickRequirementJS_ = $EnergyPerTickRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/component/$IDumpComponent" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MachineComponentType, $MachineComponentType$Type} from "packages/fr/frinn/custommachinery/api/component/$MachineComponentType"
import {$ComponentIOMode, $ComponentIOMode$Type} from "packages/fr/frinn/custommachinery/api/component/$ComponentIOMode"
import {$IMachineComponentManager, $IMachineComponentManager$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponentManager"
import {$IMachineComponent, $IMachineComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MachineStatus, $MachineStatus$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineStatus"

export interface $IDumpComponent extends $IMachineComponent {

 "dump"(arg0: $List$Type<(string)>): void
 "init"(): void
 "getType"(): $MachineComponentType<(any)>
 "getMode"(): $ComponentIOMode
 "onStatusChanged"(oldStatus: $MachineStatus$Type, newStatus: $MachineStatus$Type, message: $Component$Type): void
 "onRemoved"(): void
 "getManager"(): $IMachineComponentManager
}

export namespace $IDumpComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDumpComponent$Type = ($IDumpComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDumpComponent_ = $IDumpComponent$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/component/$ComponentIOMode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$SideConfig$Template, $SideConfig$Template$Type} from "packages/fr/frinn/custommachinery/impl/component/config/$SideConfig$Template"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"

export class $ComponentIOMode extends $Enum<($ComponentIOMode)> {
static readonly "INPUT": $ComponentIOMode
static readonly "OUTPUT": $ComponentIOMode
static readonly "BOTH": $ComponentIOMode
static readonly "NONE": $ComponentIOMode
static readonly "CODEC": $NamedCodec<($ComponentIOMode)>


public static "value"(value: string): $ComponentIOMode
public "toString"(): string
public static "values"(): ($ComponentIOMode)[]
public static "valueOf"(name: string): $ComponentIOMode
public "isOutput"(): boolean
public "getBaseConfig"(): $SideConfig$Template
public "toComponent"(): $Component
public "isInput"(): boolean
get "output"(): boolean
get "baseConfig"(): $SideConfig$Template
get "input"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentIOMode$Type = (("output") | ("input") | ("none") | ("both")) | ($ComponentIOMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComponentIOMode_ = $ComponentIOMode$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/integration/jei/$IRecipeHelper" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$ICustomMachine, $ICustomMachine$Type} from "packages/fr/frinn/custommachinery/api/machine/$ICustomMachine"
import {$IComponentGuiElement, $IComponentGuiElement$Type} from "packages/fr/frinn/custommachinery/api/guielement/$IComponentGuiElement"
import {$IMachineComponentManager, $IMachineComponentManager$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponentManager"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IMachineComponentTemplate, $IMachineComponentTemplate$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponentTemplate"

export interface $IRecipeHelper {

 "getComponentForElement"(arg0: $IComponentGuiElement$Type<(any)>): $Optional<($IMachineComponentTemplate<(any)>)>
 "getJeiHelpers"(): $IJeiHelpers
 "getMachine"(): $ICustomMachine
 "getDummyManager"(): $IMachineComponentManager
}

export namespace $IRecipeHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeHelper$Type = ($IRecipeHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeHelper_ = $IRecipeHelper$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/init/$ConfigurationCardItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CustomMachineTile, $CustomMachineTile$Type} from "packages/fr/frinn/custommachinery/common/init/$CustomMachineTile"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigurationCardItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(properties: $Item$Properties$Type)

public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public static "pasteConfiguration"(level: $Level$Type, player: $Player$Type, machine: $CustomMachineTile$Type, stack: $ItemStack$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurationCardItem$Type = ($ConfigurationCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurationCardItem_ = $ConfigurationCardItem$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ItemRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ItemRequirementJS extends $RecipeJSBuilder {

 "requireItem"(stack: $ItemStack$Type): $RecipeJSBuilder
 "requireItem"(stack: $ItemStack$Type, slot: string): $RecipeJSBuilder
 "requireItemTag"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
 "requireItemTag"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, slot: string): $RecipeJSBuilder
 "requireItemTag"(tag: string, amount: integer): $RecipeJSBuilder
 "requireItemTag"(tag: string): $RecipeJSBuilder
 "produceItem"(stack: $ItemStack$Type, slot: string): $RecipeJSBuilder
 "produceItem"(stack: $ItemStack$Type): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $ItemRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRequirementJS$Type = ($ItemRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRequirementJS_ = $ItemRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$PositionRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $PositionRequirementJS extends $RecipeJSBuilder {

 "requirePosition"(xString: string, yString: string, zString: string): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $PositionRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionRequirementJS$Type = ($PositionRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionRequirementJS_ = $PositionRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/network/$DataType" {
import {$IData, $IData$Type} from "packages/fr/frinn/custommachinery/api/network/$IData"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ISyncable, $ISyncable$Type} from "packages/fr/frinn/custommachinery/api/network/$ISyncable"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $DataType<D extends $IData<(T)>, T> {
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($DataType<(any), (any)>)>)>


public "getId"(): $ResourceLocation
public static "create"<T, D extends $IData<(T)>>(type: $Class$Type<(T)>, builder: $BiFunction$Type<($Supplier$Type<(T)>), ($Consumer$Type<(T)>), ($ISyncable$Type<(D), (T)>)>, reader: $BiFunction$Type<(short), ($FriendlyByteBuf$Type), (D)>): $DataType<(D), (T)>
public "readData"(id: short, buffer: $FriendlyByteBuf$Type): D
public "createSyncable"(supplier: $Supplier$Type<(T)>, consumer: $Consumer$Type<(T)>): $ISyncable<(D), (T)>
public static "createSyncable"<T>(type: $Class$Type<(T)>, supplier: $Supplier$Type<(T)>, consumer: $Consumer$Type<(T)>): $ISyncable<($IData<(T)>), (T)>
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataType$Type<D, T> = ($DataType<(D), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataType_<D, T> = $DataType$Type<(D), (T)>;
}}
declare module "packages/fr/frinn/custommachinery/api/upgrade/$IRecipeModifier" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RequirementIOMode, $RequirementIOMode$Type} from "packages/fr/frinn/custommachinery/api/requirement/$RequirementIOMode"
import {$RequirementType, $RequirementType$Type} from "packages/fr/frinn/custommachinery/api/requirement/$RequirementType"

export interface $IRecipeModifier {

 "apply"(arg0: double, arg1: integer): double
 "getDefaultTooltip"(): $Component
 "shouldApply"(arg0: $RequirementType$Type<(any)>, arg1: $RequirementIOMode$Type, arg2: string): boolean
 "getTooltip"(): $Component
}

export namespace $IRecipeModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeModifier$Type = ($IRecipeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeModifier_ = $IRecipeModifier$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/component/$IMachineComponent" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MachineComponentType, $MachineComponentType$Type} from "packages/fr/frinn/custommachinery/api/component/$MachineComponentType"
import {$ComponentIOMode, $ComponentIOMode$Type} from "packages/fr/frinn/custommachinery/api/component/$ComponentIOMode"
import {$IMachineComponentManager, $IMachineComponentManager$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponentManager"
import {$MachineStatus, $MachineStatus$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineStatus"

export interface $IMachineComponent {

 "init"(): void
 "getType"(): $MachineComponentType<(any)>
 "getMode"(): $ComponentIOMode
 "onStatusChanged"(oldStatus: $MachineStatus$Type, newStatus: $MachineStatus$Type, message: $Component$Type): void
 "onRemoved"(): void
 "getManager"(): $IMachineComponentManager
}

export namespace $IMachineComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMachineComponent$Type = ($IMachineComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMachineComponent_ = $IMachineComponent$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/upgrade/$IMachineUpgradeManager" {
import {$IRecipeModifier, $IRecipeModifier$Type} from "packages/fr/frinn/custommachinery/api/upgrade/$IRecipeModifier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export interface $IMachineUpgradeManager {

 "markDirty"(): void
 "getAllModifiers"(): $List<($Pair<($IRecipeModifier), (integer)>)>
}

export namespace $IMachineUpgradeManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMachineUpgradeManager$Type = ($IMachineUpgradeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMachineUpgradeManager_ = $IMachineUpgradeManager$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$EnergyRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $EnergyRequirementJS extends $RecipeJSBuilder {

 "requireEnergy"(amount: integer): $RecipeJSBuilder
 "produceEnergy"(amount: integer): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $EnergyRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyRequirementJS$Type = ($EnergyRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyRequirementJS_ = $EnergyRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/crafting/$IProcessor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MachineTile, $MachineTile$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineTile"
import {$ProcessorType, $ProcessorType$Type} from "packages/fr/frinn/custommachinery/api/crafting/$ProcessorType"
import {$ICraftingContext, $ICraftingContext$Type} from "packages/fr/frinn/custommachinery/api/crafting/$ICraftingContext"

export interface $IProcessor {

 "getType"(): $ProcessorType<(any)>
 "reset"(): void
 "getTile"(): $MachineTile
 "tick"(): void
 "serialize"(): $CompoundTag
 "deserialize"(arg0: $CompoundTag$Type): void
 "setMachineInventoryChanged"(): void
 "getRecipeProgressTime"(): double
 "getCurrentContext"(): $ICraftingContext
}

export namespace $IProcessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProcessor$Type = ($IProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProcessor_ = $IProcessor$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$RedstoneRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $RedstoneRequirementJS extends $RecipeJSBuilder {

 "requireRedstone"(power: string): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $RedstoneRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneRequirementJS$Type = ($RedstoneRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneRequirementJS_ = $RedstoneRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/machine/$MachineAppearanceManager" {
import {$MachineAppearance, $MachineAppearance$Type} from "packages/fr/frinn/custommachinery/common/machine/$MachineAppearance"
import {$MachineAppearanceProperty, $MachineAppearanceProperty$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineAppearanceProperty"
import {$MachineStatus, $MachineStatus$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineStatus"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineAppearanceManager {
static readonly "CODEC": $NamedCodec<($MachineAppearanceManager)>
static readonly "DEFAULT": $MachineAppearanceManager

constructor(defaultProperties: $Map$Type<($MachineAppearanceProperty$Type<(any)>), (any)>, idle: $MachineAppearance$Type, running: $MachineAppearance$Type, errored: $MachineAppearance$Type, paused: $MachineAppearance$Type)

public "getStatusProperties"(status: $MachineStatus$Type): $Map<($MachineAppearanceProperty<(any)>), (any)>
public "getDefaultProperties"(): $Map<($MachineAppearanceProperty<(any)>), (any)>
public "getAppearance"(status: $MachineStatus$Type): $MachineAppearance
get "defaultProperties"(): $Map<($MachineAppearanceProperty<(any)>), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineAppearanceManager$Type = ($MachineAppearanceManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineAppearanceManager_ = $MachineAppearanceManager$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/upgrade/$MachineUpgrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"
import {$RecipeModifier, $RecipeModifier$Type} from "packages/fr/frinn/custommachinery/common/upgrade/$RecipeModifier"

export class $MachineUpgrade {
static readonly "CODEC": $NamedCodec<($MachineUpgrade)>

constructor(item: $Item$Type, machines: $List$Type<($ResourceLocation$Type)>, modifiers: $List$Type<($RecipeModifier$Type)>, tooltips: $List$Type<($Component$Type)>, max: integer)

public "getModifiers"(): $List<($RecipeModifier)>
public "getItem"(): $Item
public "getTooltips"(): $List<($Component)>
public "getMaxAmount"(): integer
public "getMachines"(): $List<($ResourceLocation)>
get "modifiers"(): $List<($RecipeModifier)>
get "item"(): $Item
get "tooltips"(): $List<($Component)>
get "maxAmount"(): integer
get "machines"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineUpgrade$Type = ($MachineUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineUpgrade_ = $MachineUpgrade$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$FunctionRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$RecipeFunction, $RecipeFunction$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/function/$RecipeFunction"

export interface $FunctionRequirementJS extends $RecipeJSBuilder {

 "requireFunctionOnStart"(arg0: $RecipeFunction$Type): $RecipeJSBuilder
 "requireFunctionEachTick"(arg0: $RecipeFunction$Type): $RecipeJSBuilder
 "requireFunctionOnEnd"(arg0: $RecipeFunction$Type): $RecipeJSBuilder
 "requireFunctionToStart"(arg0: $RecipeFunction$Type): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $FunctionRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FunctionRequirementJS$Type = ($FunctionRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FunctionRequirementJS_ = $FunctionRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$DurabilityRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $DurabilityRequirementJS extends $RecipeJSBuilder {

 "damageItemTagNoBreak"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
 "damageItemTagNoBreak"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, slot: string): $RecipeJSBuilder
 "damageItemTagNoBreak"(tag: string, amount: integer): $RecipeJSBuilder
 "repairItem"(stack: $ItemStack$Type, amount: integer): $RecipeJSBuilder
 "repairItem"(stack: $ItemStack$Type, amount: integer, slot: string): $RecipeJSBuilder
 "damageItemTag"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
 "damageItemTag"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, slot: string): $RecipeJSBuilder
 "damageItemTag"(tag: string, amount: integer): $RecipeJSBuilder
 "repairItemTag"(tag: string, amount: integer): $RecipeJSBuilder
 "repairItemTag"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
 "repairItemTag"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, slot: string): $RecipeJSBuilder
 "damageItemNoBreak"(stack: $ItemStack$Type, amount: integer): $RecipeJSBuilder
 "damageItemNoBreak"(stack: $ItemStack$Type, amount: integer, slot: string): $RecipeJSBuilder
 "damageItem"(stack: $ItemStack$Type, amount: integer, slot: string): $RecipeJSBuilder
 "damageItem"(stack: $ItemStack$Type, amount: integer): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $DurabilityRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DurabilityRequirementJS$Type = ($DurabilityRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DurabilityRequirementJS_ = $DurabilityRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$BlockRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$RequirementIOMode, $RequirementIOMode$Type} from "packages/fr/frinn/custommachinery/api/requirement/$RequirementIOMode"
import {$BlockRequirement$ACTION, $BlockRequirement$ACTION$Type} from "packages/fr/frinn/custommachinery/common/requirement/$BlockRequirement$ACTION"

export interface $BlockRequirementJS extends $RecipeJSBuilder {

 "breakAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
 "breakAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[]): $RecipeJSBuilder
 "breakAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
 "breakAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
 "destroyBlockOnStart"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
 "destroyBlockOnStart"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
 "destroyAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
 "destroyAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[]): $RecipeJSBuilder
 "destroyAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
 "destroyAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
 "breakAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
 "breakAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
 "breakAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[]): $RecipeJSBuilder
 "breakAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
 "destroyAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[]): $RecipeJSBuilder
 "destroyAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
 "destroyAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
 "destroyAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
 "requireBlock"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
 "requireBlock"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, comparator: string): $RecipeJSBuilder
 "requireBlock"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
 "breakBlockOnStart"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
 "breakBlockOnStart"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
 "placeBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
 "placeBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
 "destroyBlockOnEnd"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
 "destroyBlockOnEnd"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
 "breakBlockOnEnd"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
 "breakBlockOnEnd"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
 "placeBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
 "placeBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
 "blockRequirement"(mode: $RequirementIOMode$Type, action: $BlockRequirement$ACTION$Type, block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, comparator: string, stringFilter: (string)[], whitelist: boolean): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $BlockRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRequirementJS$Type = ($BlockRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRequirementJS_ = $BlockRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$DimensionRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $DimensionRequirementJS extends $RecipeJSBuilder {

 "dimensionWhitelist"(dimensions: (string)[]): $RecipeJSBuilder
 "dimensionBlacklist"(dimensions: (string)[]): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $DimensionRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionRequirementJS$Type = ($DimensionRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionRequirementJS_ = $DimensionRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/crafting/machine/$CustomMachineRecipeBuilder" {
import {$AbstractRecipeBuilder, $AbstractRecipeBuilder$Type} from "packages/fr/frinn/custommachinery/impl/crafting/$AbstractRecipeBuilder"
import {$MachineAppearance, $MachineAppearance$Type} from "packages/fr/frinn/custommachinery/common/machine/$MachineAppearance"
import {$CustomMachineRecipe, $CustomMachineRecipe$Type} from "packages/fr/frinn/custommachinery/common/crafting/machine/$CustomMachineRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IGuiElement, $IGuiElement$Type} from "packages/fr/frinn/custommachinery/api/guielement/$IGuiElement"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"

export class $CustomMachineRecipeBuilder extends $AbstractRecipeBuilder<($CustomMachineRecipe)> {
static readonly "CODEC": $NamedCodec<($CustomMachineRecipeBuilder)>

constructor(machine: $ResourceLocation$Type, time: integer)
constructor(recipe: $CustomMachineRecipe$Type)

public "toString"(): string
public "setResetOnError"(): $CustomMachineRecipeBuilder
public "withGuiElement"(element: $IGuiElement$Type): $CustomMachineRecipeBuilder
public "withAppearance"(appearance: $MachineAppearance$Type): $CustomMachineRecipeBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMachineRecipeBuilder$Type = ($CustomMachineRecipeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMachineRecipeBuilder_ = $CustomMachineRecipeBuilder$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/codec/$NamedCodec" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$UnboundedMapCodec, $UnboundedMapCodec$Type} from "packages/fr/frinn/custommachinery/impl/codec/$UnboundedMapCodec"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NamedRecordCodec$Instance, $NamedRecordCodec$Instance$Type} from "packages/fr/frinn/custommachinery/impl/codec/$NamedRecordCodec$Instance"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$NamedMapCodec, $NamedMapCodec$Type} from "packages/fr/frinn/custommachinery/impl/codec/$NamedMapCodec"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$LongStream, $LongStream$Type} from "packages/java/util/stream/$LongStream"
import {$IntStream, $IntStream$Type} from "packages/java/util/stream/$IntStream"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$DoubleStream, $DoubleStream$Type} from "packages/java/util/stream/$DoubleStream"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$PairCodec, $PairCodec$Type} from "packages/fr/frinn/custommachinery/impl/codec/$PairCodec"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Registrar, $Registrar$Type} from "packages/dev/architectury/registry/registries/$Registrar"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $NamedCodec<A> {

 "name"(): string
 "dispatch"<E>(typeKey: string, type: $Function$Type<(any), (any)>, valueCodecGetter: $Function$Type<(any), (any)>, name: string): $NamedMapCodec<(E)>
 "dispatch"<E>(type: $Function$Type<(any), (any)>, valueCodecGetter: $Function$Type<(any), (any)>, name: string): $NamedMapCodec<(E)>
 "decode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<($Pair<(A), (T)>)>
 "encode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: A, arg2: T): $DataResult<(T)>
 "read"<T>(ops: $DynamicOps$Type<(T)>, input: T): $DataResult<(A)>
 "copy"(input: A): A
 "fromNetwork"(buf: $FriendlyByteBuf$Type): A
 "xmap"<S>(to: $Function$Type<(any), (any)>, from: $Function$Type<(any), (any)>, name: string): $NamedCodec<(S)>
 "fieldOf"(fieldName: string): $NamedMapCodec<(A)>
 "codec"(): $Codec<(A)>
 "flatXmap"<S>(to: $Function$Type<(any), (any)>, from: $Function$Type<(any), (any)>, name: string): $NamedCodec<(S)>
 "optionalFieldOf"(fieldName: string, defaultValue: A): $NamedMapCodec<(A)>
 "optionalFieldOf"(fieldName: string, defaultValue: $Supplier$Type<(A)>): $NamedMapCodec<(A)>
 "optionalFieldOf"(fieldName: string): $NamedMapCodec<($Optional<(A)>)>
 "flatComapMap"<S>(to: $Function$Type<(any), (any)>, from: $Function$Type<(any), (any)>, name: string): $NamedCodec<(S)>
 "comapFlatMap"<S>(to: $Function$Type<(any), (any)>, from: $Function$Type<(any), (any)>, name: string): $NamedCodec<(S)>
 "encodeStart"<T>(ops: $DynamicOps$Type<(T)>, input: A): $DataResult<(T)>
 "listOf"(): $NamedCodec<($List<(A)>)>
 "listOf"(name: string): $NamedCodec<($List<(A)>)>
 "toNetwork"(input: A, buf: $FriendlyByteBuf$Type): void
}

export namespace $NamedCodec {
const BOOL: $NamedCodec<(boolean)>
const BYTE: $NamedCodec<(byte)>
const SHORT: $NamedCodec<(short)>
const INT: $NamedCodec<(integer)>
const LONG: $NamedCodec<(long)>
const FLOAT: $NamedCodec<(float)>
const DOUBLE: $NamedCodec<(double)>
const STRING: $NamedCodec<(string)>
const BYTE_BUFFER: $NamedCodec<($ByteBuffer)>
const INT_STREAM: $NamedCodec<($IntStream)>
const LONG_STREAM: $NamedCodec<($LongStream)>
const DOUBLE_STREAM: $NamedCodec<($DoubleStream)>
const PASSTHROUGH: $NamedCodec<($Dynamic<(any)>)>
function unit<A>(defaultValue: $Supplier$Type<(A)>, name: string): $NamedCodec<(A)>
function unit<A>(defaultValue: A, name: string): $NamedCodec<(A)>
function unit<A>(defaultValue: A): $NamedCodec<(A)>
function of<A>(codec: $Codec$Type<(A)>, name: string): $NamedCodec<(A)>
function of<A>(codec: $Codec$Type<(A)>): $NamedCodec<(A)>
function list<A>(codec: $NamedCodec$Type<(A)>, name: string): $NamedCodec<($List<(A)>)>
function list<A>(codec: $NamedCodec$Type<(A)>): $NamedCodec<($List<(A)>)>
function record<O>(builder: $Function$Type<($NamedRecordCodec$Instance$Type<(O)>), (any)>, name: string): $NamedMapCodec<(O)>
function checkRange<N>(minInclusive: N, maxInclusive: N): $Function<(N), ($DataResult<(N)>)>
function pair<F, S>(first: $NamedCodec$Type<(F)>, second: $NamedCodec$Type<(S)>): $PairCodec<(F), (S)>
function lazy<A>(supplier: $Supplier$Type<($NamedCodec$Type<(A)>)>, name: string): $NamedCodec<(A)>
function getJson<U>(dynamic: $Dynamic$Type<(any)>): $JsonElement
function fromJson<T>(parser: $Function$Type<($JsonElement$Type), (T)>, encoder: $Function$Type<(T), ($JsonElement$Type)>, name: string): $NamedCodec<(T)>
function enumMap<K, V>(keyEnumClass: $Class$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>): $NamedMapCodec<($Map<(K), (V)>)>
function enumMap<K, V>(keyEnumClass: $Class$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, name: string): $NamedMapCodec<($Map<(K), (V)>)>
function enumMap<K, V>(keyEnumClass: $Class$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, defaultValue: V): $NamedMapCodec<($Map<(K), (V)>)>
function enumMap<K, V>(keyEnumClass: $Class$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, defaultValue: V, name: string): $NamedMapCodec<($Map<(K), (V)>)>
function registrar<A>(registrar: $Registrar$Type<(A)>): $NamedCodec<(A)>
function validateDoubleStreamSize(stream: $DoubleStream$Type, size: integer): $DataResult<((double)[])>
function either<F, S>(first: $NamedCodec$Type<(F)>, second: $NamedCodec$Type<(S)>): $NamedCodec<($Either<(F), (S)>)>
function either<F, S>(first: $NamedCodec$Type<(F)>, second: $NamedCodec$Type<(S)>, name: string): $NamedCodec<($Either<(F), (S)>)>
function unboundedMap<K, V>(keyCodec: $NamedCodec$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, name: string): $UnboundedMapCodec<(K), (V)>
function intRange(minInclusive: integer, maxInclusive: integer): $NamedCodec<(integer)>
function floatRange(minInclusive: float, maxInclusive: float): $NamedCodec<(float)>
function doubleRange(minInclusive: double, maxInclusive: double): $NamedCodec<(double)>
function longRange(minInclusive: long, maxInclusive: long): $NamedCodec<(long)>
function enumCodec<E>(enumClass: $Class$Type<(E)>): $NamedCodec<(E)>
function enumCodec<E>(enumClass: $Class$Type<(E)>, name: string): $NamedCodec<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedCodec$Type<A> = ($NamedCodec<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedCodec_<A> = $NamedCodec$Type<(A)>;
}}
declare module "packages/fr/frinn/custommachinery/common/requirement/$BlockRequirement$ACTION" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"

export class $BlockRequirement$ACTION extends $Enum<($BlockRequirement$ACTION)> {
static readonly "CHECK": $BlockRequirement$ACTION
static readonly "BREAK": $BlockRequirement$ACTION
static readonly "DESTROY": $BlockRequirement$ACTION
static readonly "PLACE": $BlockRequirement$ACTION
static readonly "REPLACE_BREAK": $BlockRequirement$ACTION
static readonly "REPLACE_DESTROY": $BlockRequirement$ACTION
static readonly "CODEC": $NamedCodec<($BlockRequirement$ACTION)>


public static "value"(value: string): $BlockRequirement$ACTION
public static "values"(): ($BlockRequirement$ACTION)[]
public static "valueOf"(name: string): $BlockRequirement$ACTION
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRequirement$ACTION$Type = (("replace_break") | ("replace_destroy") | ("break") | ("destroy") | ("check") | ("place")) | ($BlockRequirement$ACTION);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRequirement$ACTION_ = $BlockRequirement$ACTION$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/component/$ITickableComponent" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MachineComponentType, $MachineComponentType$Type} from "packages/fr/frinn/custommachinery/api/component/$MachineComponentType"
import {$ComponentIOMode, $ComponentIOMode$Type} from "packages/fr/frinn/custommachinery/api/component/$ComponentIOMode"
import {$IMachineComponentManager, $IMachineComponentManager$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponentManager"
import {$IMachineComponent, $IMachineComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponent"
import {$MachineStatus, $MachineStatus$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineStatus"

export interface $ITickableComponent extends $IMachineComponent {

 "clientTick"(): void
 "serverTick"(): void
 "init"(): void
 "getType"(): $MachineComponentType<(any)>
 "getMode"(): $ComponentIOMode
 "onStatusChanged"(oldStatus: $MachineStatus$Type, newStatus: $MachineStatus$Type, message: $Component$Type): void
 "onRemoved"(): void
 "getManager"(): $IMachineComponentManager
}

export namespace $ITickableComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickableComponent$Type = ($ITickableComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickableComponent_ = $ITickableComponent$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/function/$MachineJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidStackJS, $FluidStackJS$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $MachineJS {


public "getOwner"(): $LivingEntity
public static "of"(o: any): $MachineJS
public "getId"(): string
public "getData"(): $CompoundTag
public "setOwner"(entity: $LivingEntity$Type): void
public "removeFluidFromTank"(tank: string, amount: long, simulate: boolean): $FluidStackJS
public "getFluidStored"(tank: string): $FluidStackJS
public "getPaused"(): boolean
public "setFluidStored"(tank: string, stackJS: $FluidStackJS$Type): void
public "removeEnergy"(toRemove: integer, simulate: boolean): integer
public "getItemStored"(slot: string): $ItemStack
public "getItemCapacity"(slot: string): integer
public "setItemStored"(slot: string, stack: $ItemStack$Type): void
public "isSlotLocked"(slot: string): boolean
public "addItemToSlot"(slot: string, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "addFluidToTank"(tank: string, stackJS: $FluidStackJS$Type, simulate: boolean): long
public "removeItemFromSlot"(slot: string, toRemove: integer, simulate: boolean): $ItemStack
public "isChunkloadEnabled"(): boolean
public "disableChunkload"(): void
public "enableChunkload"(radius: integer): void
public "getChunkloadRadius"(): integer
public "getEnergyCapacity"(): long
public "setPaused"(paused: boolean): void
public "isOwner"(entity: $LivingEntity$Type): boolean
public "getOwnerId"(): $UUID
public "getEnergyStored"(): long
public "setId"(id: string): void
public "lockSlot"(slot: string): void
public "unlockSlot"(slot: string): void
public "setEnergyStored"(energy: long): void
public "addEnergy"(toAdd: integer, simulate: boolean): integer
public "getOwnerName"(): $Component
public "addFluid"(stackJS: $FluidStackJS$Type, simulate: boolean): long
public "removeFluid"(stackJS: $FluidStackJS$Type, simulate: boolean): $FluidStackJS
public "getFluidCapacity"(tank: string): long
get "owner"(): $LivingEntity
get "id"(): string
get "data"(): $CompoundTag
set "owner"(value: $LivingEntity$Type)
get "paused"(): boolean
get "chunkloadEnabled"(): boolean
get "chunkloadRadius"(): integer
get "energyCapacity"(): long
set "paused"(value: boolean)
get "ownerId"(): $UUID
get "energyStored"(): long
set "id"(value: string)
set "energyStored"(value: long)
get "ownerName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineJS$Type = ($MachineJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineJS_ = $MachineJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/component/$IMachineComponentTemplate" {
import {$MachineComponentType, $MachineComponentType$Type} from "packages/fr/frinn/custommachinery/api/component/$MachineComponentType"
import {$IMachineComponentManager, $IMachineComponentManager$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponentManager"
import {$IMachineComponent, $IMachineComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponent"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"

export interface $IMachineComponentTemplate<T extends $IMachineComponent> {

 "build"(arg0: $IMachineComponentManager$Type): T
 "getId"(): string
 "getType"(): $MachineComponentType<(T)>
 "canAccept"(arg0: any, arg1: boolean, arg2: $IMachineComponentManager$Type): boolean
}

export namespace $IMachineComponentTemplate {
const CODEC: $NamedCodec<($IMachineComponentTemplate<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMachineComponentTemplate$Type<T> = ($IMachineComponentTemplate<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMachineComponentTemplate_<T> = $IMachineComponentTemplate$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/common/crafting/craft/$CustomCraftRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CustomCraftRecipe, $CustomCraftRecipe$Type} from "packages/fr/frinn/custommachinery/common/crafting/craft/$CustomCraftRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CustomCraftRecipeSerializer implements $RecipeSerializer<($CustomCraftRecipe)> {

constructor()

public "fromJson"(recipeId: $ResourceLocation$Type, json: $JsonObject$Type): $CustomCraftRecipe
public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $CustomCraftRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $CustomCraftRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CustomCraftRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomCraftRecipeSerializer$Type = ($CustomCraftRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomCraftRecipeSerializer_ = $CustomCraftRecipeSerializer$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/function/$Result" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export class $Result {


public static "error"(error: $Component$Type): $Result
public static "success"(): $Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Result$Type = ($Result);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Result_ = $Result$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/machine/$MachineLocation$Loader" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $MachineLocation$Loader extends $Enum<($MachineLocation$Loader)> {
static readonly "DEFAULT": $MachineLocation$Loader
static readonly "DATAPACK": $MachineLocation$Loader
static readonly "DATAPACK_ZIP": $MachineLocation$Loader
static readonly "KUBEJS": $MachineLocation$Loader
static readonly "KUBEJS_SCRIPT": $MachineLocation$Loader
static readonly "CODEC": $NamedCodec<($MachineLocation$Loader)>


public static "values"(): ($MachineLocation$Loader)[]
public static "valueOf"(name: string): $MachineLocation$Loader
public "getTranslatedName"(): $MutableComponent
get "translatedName"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineLocation$Loader$Type = (("default") | ("kubejs") | ("datapack_zip") | ("kubejs_script") | ("datapack")) | ($MachineLocation$Loader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineLocation$Loader_ = $MachineLocation$Loader$Type;
}}
declare module "packages/fr/frinn/custommachinery/impl/codec/$NamedRecordCodec" {
import {$NamedMapCodec, $NamedMapCodec$Type} from "packages/fr/frinn/custommachinery/impl/codec/$NamedMapCodec"
import {$NamedRecordCodec$Mu, $NamedRecordCodec$Mu$Type} from "packages/fr/frinn/custommachinery/impl/codec/$NamedRecordCodec$Mu"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$NamedRecordCodec$Instance, $NamedRecordCodec$Instance$Type} from "packages/fr/frinn/custommachinery/impl/codec/$NamedRecordCodec$Instance"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"

export class $NamedRecordCodec<O, F> implements $App<($NamedRecordCodec$Mu<(O)>), (F)> {


public static "instance"<O>(): $NamedRecordCodec$Instance<(O)>
public static "build"<O>(builderBox: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (O)>, name: string): $NamedMapCodec<(O)>
public static "of"<O, F>(getter: $Function$Type<(O), (F)>, codec: $NamedMapCodec$Type<(F)>): $NamedRecordCodec<(O), (F)>
public static "create"<O>(builder: $Function$Type<($NamedRecordCodec$Instance$Type<(O)>), (any)>, name: string): $NamedMapCodec<(O)>
public static "unbox"<O, F>(box: $App$Type<($NamedRecordCodec$Mu$Type<(O)>), (F)>): $NamedRecordCodec<(O), (F)>
public static "point"<O, F>(instance: F): $NamedRecordCodec<(O), (F)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedRecordCodec$Type<O, F> = ($NamedRecordCodec<(O), (F)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedRecordCodec_<O, F> = $NamedRecordCodec$Type<(O), (F)>;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/$AbstractRecipeJSBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$IRecipeBuilder, $IRecipeBuilder$Type} from "packages/fr/frinn/custommachinery/api/crafting/$IRecipeBuilder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$DisplayInfoTemplate, $DisplayInfoTemplate$Type} from "packages/fr/frinn/custommachinery/api/integration/jei/$DisplayInfoTemplate"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractRecipeJSBuilder<T extends $IRecipeBuilder<(any)>> extends $RecipeJS implements $RecipeJSBuilder {
static readonly "IDS": $Map<($ResourceLocation), ($Map<($ResourceLocation), (integer)>)>
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor(typeID: $ResourceLocation$Type)

public "priority"(priority: integer): $AbstractRecipeJSBuilder<(T)>
public "info"(consumer: $Consumer$Type<($DisplayInfoTemplate$Type)>): $AbstractRecipeJSBuilder<(T)>
public "delay"(delay: double): $AbstractRecipeJSBuilder<(T)>
public "error"(error: string, ...args: (any)[]): $RecipeJSBuilder
public "hide"(): $AbstractRecipeJSBuilder<(T)>
public "jei"(): $AbstractRecipeJSBuilder<(T)>
public "chance"(chance: double): $AbstractRecipeJSBuilder<(T)>
public "createRecipe"(): $Recipe<(any)>
public "afterLoaded"(): void
public "getFromToString"(): string
public "addRequirement"(requirement: $IRequirement$Type<(any)>): $AbstractRecipeJSBuilder<(T)>
public "makeBuilder"(): T
get "fromToString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRecipeJSBuilder$Type<T> = ($AbstractRecipeJSBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRecipeJSBuilder_<T> = $AbstractRecipeJSBuilder$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/api/requirement/$RequirementType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"

export class $RequirementType<T extends $IRequirement<(any)>> {
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($RequirementType<(any)>)>)>


public "getName"(): $Component
public "getId"(): $ResourceLocation
public static "inventory"<T extends $IRequirement<(any)>>(codec: $NamedCodec$Type<(T)>): $RequirementType<(T)>
public "getCodec"(): $NamedCodec<(T)>
public static "world"<T extends $IRequirement<(any)>>(codec: $NamedCodec$Type<(T)>): $RequirementType<(T)>
public "isWorldRequirement"(): boolean
get "name"(): $Component
get "id"(): $ResourceLocation
get "codec"(): $NamedCodec<(T)>
get "worldRequirement"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequirementType$Type<T> = ($RequirementType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequirementType_<T> = $RequirementType$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/common/util/$MachineShape" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineShape implements $Function<($Direction), ($VoxelShape)> {
static readonly "CODEC": $NamedCodec<($MachineShape)>
static readonly "DEFAULT": $MachineShape
static readonly "DEFAULT_COLLISION": $MachineShape

constructor()
constructor(shapes: $Map$Type<($Direction$Type), ($VoxelShape$Type)>)

public "apply"(side: $Direction$Type): $VoxelShape
public static "identity"<T>(): $Function<($Direction), ($Direction)>
public "compose"<V>(arg0: $Function$Type<(any), (any)>): $Function<(V), ($VoxelShape)>
public "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function<($Direction), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineShape$Type = ($MachineShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineShape_ = $MachineShape$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/crafting/craft/$CustomCraftRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$IJEIIngredientRequirement, $IJEIIngredientRequirement$Type} from "packages/fr/frinn/custommachinery/api/integration/jei/$IJEIIngredientRequirement"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$IMachineRecipe, $IMachineRecipe$Type} from "packages/fr/frinn/custommachinery/api/crafting/$IMachineRecipe"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RequirementType, $RequirementType$Type} from "packages/fr/frinn/custommachinery/api/requirement/$RequirementType"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$RecipeChecker, $RecipeChecker$Type} from "packages/fr/frinn/custommachinery/common/crafting/$RecipeChecker"

export class $CustomCraftRecipe implements $Recipe<($Container)>, $IMachineRecipe {
static readonly "FORBIDDEN_REQUIREMENTS": $List<($RequirementType<(any)>)>

constructor(id: $ResourceLocation$Type, machine: $ResourceLocation$Type, output: $ItemStack$Type, requirements: $List$Type<($IRequirement$Type<(any)>)>, jeiRequirements: $List$Type<($IRequirement$Type<(any)>)>, priority: integer, jeiPriority: integer, hidden: boolean)

public "getJeiPriority"(): integer
public "getJeiRequirements"(): $List<($IRequirement<(any)>)>
public "getPriority"(): integer
public "getId"(): $ResourceLocation
public "checker"(): $RecipeChecker<($CustomCraftRecipe)>
public "getOutput"(): $ItemStack
public "getResultItem"(access: $RegistryAccess$Type): $ItemStack
public "getMachineId"(): $ResourceLocation
public "showInJei"(): boolean
public "getRequirements"(): $List<($IRequirement<(any)>)>
public "getRecipeTime"(): integer
public "shouldResetOnError"(): boolean
public "getRecipeId"(): $ResourceLocation
public "matches"(container: $Container$Type, level: $Level$Type): boolean
public "assemble"(container: $Container$Type, access: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(i: integer, j: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "getJEIIngredientRequirements"(): $List<($IJEIIngredientRequirement<(any)>)>
public "getDisplayInfoRequirements"(): $List<($IRequirement<(any)>)>
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
get "jeiPriority"(): integer
get "jeiRequirements"(): $List<($IRequirement<(any)>)>
get "priority"(): integer
get "id"(): $ResourceLocation
get "output"(): $ItemStack
get "machineId"(): $ResourceLocation
get "requirements"(): $List<($IRequirement<(any)>)>
get "recipeTime"(): integer
get "recipeId"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "jEIIngredientRequirements"(): $List<($IJEIIngredientRequirement<(any)>)>
get "displayInfoRequirements"(): $List<($IRequirement<(any)>)>
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
export type $CustomCraftRecipe$Type = ($CustomCraftRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomCraftRecipe_ = $CustomCraftRecipe$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ItemTransformRequirementJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ItemTransformRequirementJS extends $RecipeJSBuilder {

 "transformItemTag"(tag: string, inputAmount: integer, inputNBT: $CompoundTag$Type, output: $ItemStack$Type, inputSlot: string, outputSlot: string, nbt: $Function$Type<($Map$Type<(any), (any)>), (any)>): $RecipeJSBuilder
 "transformItemTag"(tag: string, inputAmount: integer, inputNBT: $CompoundTag$Type): $RecipeJSBuilder
 "transformItemTag"(tag: string, inputAmount: integer, inputNBT: $CompoundTag$Type, output: $ItemStack$Type): $RecipeJSBuilder
 "transformItemTag"(tag: string, inputAmount: integer, inputNBT: $CompoundTag$Type, output: $ItemStack$Type, inputSlot: string, outputSlot: string): $RecipeJSBuilder
 "transformItemTag"(tag: string): $RecipeJSBuilder
 "transformItem"(input: $ItemStack$Type): $RecipeJSBuilder
 "transformItem"(input: $ItemStack$Type, output: $ItemStack$Type): $RecipeJSBuilder
 "transformItem"(input: $ItemStack$Type, output: $ItemStack$Type, inputSlot: string, outputSlot: string): $RecipeJSBuilder
 "transformItem"(input: $ItemStack$Type, output: $ItemStack$Type, inputSlot: string, outputSlot: string, nbt: $Function$Type<($Map$Type<(any), (any)>), (any)>): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $ItemTransformRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransformRequirementJS$Type = ($ItemTransformRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTransformRequirementJS_ = $ItemTransformRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/impl/codec/$NamedRecordCodec$Mu" {
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export class $NamedRecordCodec$Mu<O> implements $K1 {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedRecordCodec$Mu$Type<O> = ($NamedRecordCodec$Mu<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedRecordCodec$Mu_<O> = $NamedRecordCodec$Mu$Type<(O)>;
}}
declare module "packages/fr/frinn/custommachinery/api/machine/$IMachineAppearance" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IMachineModelLocation, $IMachineModelLocation$Type} from "packages/fr/frinn/custommachinery/impl/util/$IMachineModelLocation"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MachineAppearanceProperty, $MachineAppearanceProperty$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineAppearanceProperty"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IMachineAppearance {

 "getItemModel"(): $IMachineModelLocation
 "getProperty"<T>(arg0: $MachineAppearanceProperty$Type<(T)>): T
 "copy"(): $IMachineAppearance
 "getShape"(): $Function<($Direction), ($VoxelShape)>
 "getAmbientSound"(): $SoundEvent
 "getTool"(): $List<($TagKey<($Block)>)>
 "getMiningLevel"(): $TagKey<($Block)>
 "getHardness"(): float
 "getCollisionShape"(): $Function<($Direction), ($VoxelShape)>
 "getLightLevel"(): integer
 "getColor"(): integer
 "requiresCorrectToolForDrops"(): boolean
 "getInteractionSound"(): $SoundType
 "getResistance"(): float
 "getBlockModel"(): $IMachineModelLocation
}

export namespace $IMachineAppearance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMachineAppearance$Type = ($IMachineAppearance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMachineAppearance_ = $IMachineAppearance$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/requirement/$RequirementIOMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"

export class $RequirementIOMode extends $Enum<($RequirementIOMode)> {
static readonly "INPUT": $RequirementIOMode
static readonly "OUTPUT": $RequirementIOMode
static readonly "CODEC": $NamedCodec<($RequirementIOMode)>


public static "value"(mode: string): $RequirementIOMode
public "toString"(): string
public static "values"(): ($RequirementIOMode)[]
public static "valueOf"(name: string): $RequirementIOMode
public "getTranslationKey"(): string
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequirementIOMode$Type = (("output") | ("input")) | ($RequirementIOMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequirementIOMode_ = $RequirementIOMode$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/integration/jei/$IDisplayInfo" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDisplayInfo$TooltipPredicate, $IDisplayInfo$TooltipPredicate$Type} from "packages/fr/frinn/custommachinery/api/integration/jei/$IDisplayInfo$TooltipPredicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IDisplayInfo$ClickAction, $IDisplayInfo$ClickAction$Type} from "packages/fr/frinn/custommachinery/api/integration/jei/$IDisplayInfo$ClickAction"

export interface $IDisplayInfo {

 "addTooltip"(text: $Component$Type): $IDisplayInfo
 "addTooltip"(arg0: $Component$Type, arg1: $IDisplayInfo$TooltipPredicate$Type): $IDisplayInfo
 "setItemIcon"(item: $Item$Type): $IDisplayInfo
 "setItemIcon"(arg0: $ItemStack$Type): $IDisplayInfo
 "setSpriteIcon"(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type): $IDisplayInfo
 "setTextureIcon"(texture: $ResourceLocation$Type): $IDisplayInfo
 "setTextureIcon"(texture: $ResourceLocation$Type, width: integer, height: integer): $IDisplayInfo
 "setTextureIcon"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $IDisplayInfo
 "setClickAction"(arg0: $IDisplayInfo$ClickAction$Type): void
}

export namespace $IDisplayInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDisplayInfo$Type = ($IDisplayInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDisplayInfo_ = $IDisplayInfo$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/$CustomMachineBlockBuilderJS" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AssetJsonGenerator, $AssetJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $CustomMachineBlockBuilderJS extends $BuilderBase<($Block)> {
static readonly "VALID_RENDER_TYPES": $List<(string)>
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "generateAssetJsons"(generator: $AssetJsonGenerator$Type): void
public "createAdditionalObjects"(): void
public "occlude"(): $CustomMachineBlockBuilderJS
public "renderType"(renderType: string): $CustomMachineBlockBuilderJS
public "machine"(machineID: $ResourceLocation$Type): $CustomMachineBlockBuilderJS
public "getRegistryType"(): $RegistryInfo<(any)>
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMachineBlockBuilderJS$Type = ($CustomMachineBlockBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMachineBlockBuilderJS_ = $CustomMachineBlockBuilderJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/guielement/$IComponentGuiElement" {
import {$MachineComponentType, $MachineComponentType$Type} from "packages/fr/frinn/custommachinery/api/component/$MachineComponentType"
import {$IMachineComponentManager, $IMachineComponentManager$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponentManager"
import {$IMachineComponent, $IMachineComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponent"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IComponentGuiElement<T extends $IMachineComponent> {

 "getComponentType"(): $MachineComponentType<(T)>
 "getComponent"(manager: $IMachineComponentManager$Type): $Optional<(T)>
 "getComponentId"(): string
}

export namespace $IComponentGuiElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentGuiElement$Type<T> = ($IComponentGuiElement<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComponentGuiElement_<T> = $IComponentGuiElement$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/function/$RecipeFunction" {
import {$Context, $Context$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/function/$Context"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Result, $Result$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/function/$Result"

export interface $RecipeFunction extends $Function<($Context), ($Result)> {

 "apply"(arg0: $Context$Type): $Result
 "compose"<V>(arg0: $Function$Type<(any), (any)>): $Function<(V), ($Result)>
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function<($Context), (V)>

(arg0: $Context$Type): $Result
}

export namespace $RecipeFunction {
function identity<T>(): $Function<($Context), ($Context)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeFunction$Type = ($RecipeFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeFunction_ = $RecipeFunction$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/$CustomMachineUpgradeJSBuilder$UpgradeEvent" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CustomMachineUpgradeJSBuilder, $CustomMachineUpgradeJSBuilder$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/$CustomMachineUpgradeJSBuilder"

export class $CustomMachineUpgradeJSBuilder$UpgradeEvent extends $EventJS {

constructor()

public "create"(item: $Item$Type, maxAmount: integer): $CustomMachineUpgradeJSBuilder
public "create"(item: $Item$Type): $CustomMachineUpgradeJSBuilder
public "getBuilders"(): $List<($CustomMachineUpgradeJSBuilder)>
get "builders"(): $List<($CustomMachineUpgradeJSBuilder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMachineUpgradeJSBuilder$UpgradeEvent$Type = ($CustomMachineUpgradeJSBuilder$UpgradeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMachineUpgradeJSBuilder$UpgradeEvent_ = $CustomMachineUpgradeJSBuilder$UpgradeEvent$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/function/$Context" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Result, $Result$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/function/$Result"
import {$MachineTile, $MachineTile$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineTile"
import {$MachineJS, $MachineJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/function/$MachineJS"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ICraftingContext, $ICraftingContext$Type} from "packages/fr/frinn/custommachinery/api/crafting/$ICraftingContext"

export class $Context {

constructor(internal: $ICraftingContext$Type)

public "error"(error: $Component$Type): $Result
public "getTile"(): $MachineTile
public "success"(): $Result
public "getBlock"(): $BlockContainerJS
public "getRemainingTime"(): double
public "setBaseSpeed"(baseSpeed: double): void
public "getModifiedSpeed"(): double
public "getBaseSpeed"(): double
public "getMachine"(): $MachineJS
get "tile"(): $MachineTile
get "block"(): $BlockContainerJS
get "remainingTime"(): double
set "baseSpeed"(value: double)
get "modifiedSpeed"(): double
get "baseSpeed"(): double
get "machine"(): $MachineJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Context$Type = ($Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Context_ = $Context$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/crafting/$IProcessorTemplate" {
import {$IProcessor, $IProcessor$Type} from "packages/fr/frinn/custommachinery/api/crafting/$IProcessor"
import {$MachineTile, $MachineTile$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineTile"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"
import {$ProcessorType, $ProcessorType$Type} from "packages/fr/frinn/custommachinery/api/crafting/$ProcessorType"

export interface $IProcessorTemplate<T extends $IProcessor> {

 "build"(arg0: $MachineTile$Type): T
 "getType"(): $ProcessorType<(T)>
}

export namespace $IProcessorTemplate {
const CODEC: $NamedCodec<($IProcessorTemplate<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProcessorTemplate$Type<T> = ($IProcessorTemplate<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProcessorTemplate_<T> = $IProcessorTemplate$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/impl/component/config/$SideConfig$Template" {
import {$ISideConfigComponent, $ISideConfigComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$ISideConfigComponent"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"
import {$SideConfig, $SideConfig$Type} from "packages/fr/frinn/custommachinery/impl/component/config/$SideConfig"

export class $SideConfig$Template {
static readonly "CODEC": $NamedCodec<($SideConfig$Template)>
static readonly "DEFAULT_ALL_BOTH": $SideConfig$Template
static readonly "DEFAULT_ALL_INPUT": $SideConfig$Template
static readonly "DEFAULT_ALL_OUTPUT": $SideConfig$Template
static readonly "DEFAULT_ALL_NONE": $SideConfig$Template
static readonly "DEFAULT_ALL_NONE_DISABLED": $SideConfig$Template


public "build"<T extends $ISideConfigComponent>(component: T): $SideConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SideConfig$Template$Type = ($SideConfig$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SideConfig$Template_ = $SideConfig$Template$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/guielement/$IGuiElement" {
import {$GuiElementType, $GuiElementType$Type} from "packages/fr/frinn/custommachinery/api/guielement/$GuiElementType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MachineTile, $MachineTile$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineTile"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$AbstractGuiElement$Properties, $AbstractGuiElement$Properties$Type} from "packages/fr/frinn/custommachinery/impl/guielement/$AbstractGuiElement$Properties"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"

export interface $IGuiElement {

 "getProperties"(): $AbstractGuiElement$Properties
 "getPriority"(): integer
 "getId"(): string
 "getType"(): $GuiElementType<(any)>
 "getX"(): integer
 "getWidth"(): integer
 "getHeight"(): integer
 "getY"(): integer
 "getTooltips"(): $List<($Component)>
 "showInJei"(): boolean
 "handleClick"(button: byte, tile: $MachineTile$Type, container: $AbstractContainerMenu$Type, player: $ServerPlayer$Type): void
}

export namespace $IGuiElement {
const CODEC: $NamedCodec<($IGuiElement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiElement$Type = ($IGuiElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiElement_ = $IGuiElement$Type;
}}
declare module "packages/fr/frinn/custommachinery/impl/util/$IMachineModelLocation" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IMachineModelLocation {

 "toString"(): string
 "getProperties"(): string
 "getState"(): $BlockState
 "getItem"(): $Item
 "getLoc"(): $ResourceLocation
}

export namespace $IMachineModelLocation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMachineModelLocation$Type = ($IMachineModelLocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMachineModelLocation_ = $IMachineModelLocation$Type;
}}
declare module "packages/fr/frinn/custommachinery/impl/component/config/$SideMode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"

export class $SideMode extends $Enum<($SideMode)> {
static readonly "INPUT": $SideMode
static readonly "OUTPUT": $SideMode
static readonly "BOTH": $SideMode
static readonly "NONE": $SideMode
static readonly "CODEC": $NamedCodec<($SideMode)>


public static "values"(): ($SideMode)[]
public static "valueOf"(name: string): $SideMode
public "next"(): $SideMode
public "previous"(): $SideMode
public "color"(): integer
public "isOutput"(): boolean
public "isInput"(): boolean
public "title"(): $Component
public "isNone"(): boolean
get "output"(): boolean
get "input"(): boolean
get "none"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SideMode$Type = (("output") | ("input") | ("none") | ("both")) | ($SideMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SideMode_ = $SideMode$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/machine/$MachineTile" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IGuiElement, $IGuiElement$Type} from "packages/fr/frinn/custommachinery/api/guielement/$IGuiElement"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ICustomMachine, $ICustomMachine$Type} from "packages/fr/frinn/custommachinery/api/machine/$ICustomMachine"
import {$IProcessor, $IProcessor$Type} from "packages/fr/frinn/custommachinery/api/crafting/$IProcessor"
import {$IMachineComponentManager, $IMachineComponentManager$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponentManager"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMachineUpgradeManager, $IMachineUpgradeManager$Type} from "packages/fr/frinn/custommachinery/api/upgrade/$IMachineUpgradeManager"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MachineStatus, $MachineStatus$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineStatus"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IMachineAppearance, $IMachineAppearance$Type} from "packages/fr/frinn/custommachinery/api/machine/$IMachineAppearance"

export class $MachineTile extends $BlockEntity {

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "getOwner"(): $LivingEntity
public "getMessage"(): $Component
public "setOwner"(arg0: $LivingEntity$Type): void
public "isUnloaded"(): boolean
public "refreshMachine"(arg0: $ResourceLocation$Type): void
public "setPaused"(arg0: boolean): void
public "isPaused"(): boolean
public "getUpgradeManager"(): $IMachineUpgradeManager
public "setStatus"(arg0: $MachineStatus$Type, arg1: $Component$Type): void
public "setStatus"(status: $MachineStatus$Type): void
public "isOwner"(entity: $LivingEntity$Type): boolean
public "refreshClientData"(): void
public "resetProcess"(): void
public "getStatus"(): $MachineStatus
public "getOwnerId"(): $UUID
public "getOwnerName"(): $Component
public "getAppearance"(): $IMachineAppearance
public "getComponentManager"(): $IMachineComponentManager
public "getProcessor"(): $IProcessor
public "setCustomAppearance"(arg0: $IMachineAppearance$Type): void
public "setCustomGuiElements"(arg0: $List$Type<($IGuiElement$Type)>): void
public "getGuiElements"(): $List<($IGuiElement)>
public "getMachine"(): $ICustomMachine
get "owner"(): $LivingEntity
get "message"(): $Component
set "owner"(value: $LivingEntity$Type)
get "unloaded"(): boolean
set "paused"(value: boolean)
get "paused"(): boolean
get "upgradeManager"(): $IMachineUpgradeManager
set "status"(value: $MachineStatus$Type)
get "status"(): $MachineStatus
get "ownerId"(): $UUID
get "ownerName"(): $Component
get "appearance"(): $IMachineAppearance
get "componentManager"(): $IMachineComponentManager
get "processor"(): $IProcessor
set "customAppearance"(value: $IMachineAppearance$Type)
set "customGuiElements"(value: $List$Type<($IGuiElement$Type)>)
get "guiElements"(): $List<($IGuiElement)>
get "machine"(): $ICustomMachine
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineTile$Type = ($MachineTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineTile_ = $MachineTile$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/component/$ISideConfigComponent" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MachineComponentType, $MachineComponentType$Type} from "packages/fr/frinn/custommachinery/api/component/$MachineComponentType"
import {$ComponentIOMode, $ComponentIOMode$Type} from "packages/fr/frinn/custommachinery/api/component/$ComponentIOMode"
import {$IMachineComponentManager, $IMachineComponentManager$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponentManager"
import {$IMachineComponent, $IMachineComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponent"
import {$MachineStatus, $MachineStatus$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineStatus"
import {$SideConfig, $SideConfig$Type} from "packages/fr/frinn/custommachinery/impl/component/config/$SideConfig"

export interface $ISideConfigComponent extends $IMachineComponent {

 "getId"(): string
 "getConfig"(): $SideConfig
 "init"(): void
 "getType"(): $MachineComponentType<(any)>
 "getMode"(): $ComponentIOMode
 "onStatusChanged"(oldStatus: $MachineStatus$Type, newStatus: $MachineStatus$Type, message: $Component$Type): void
 "onRemoved"(): void
 "getManager"(): $IMachineComponentManager
}

export namespace $ISideConfigComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISideConfigComponent$Type = ($ISideConfigComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISideConfigComponent_ = $ISideConfigComponent$Type;
}}
declare module "packages/fr/frinn/custommachinery/impl/codec/$PairCodec" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$NamedMapCodec, $NamedMapCodec$Type} from "packages/fr/frinn/custommachinery/impl/codec/$NamedMapCodec"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$UnboundedMapCodec, $UnboundedMapCodec$Type} from "packages/fr/frinn/custommachinery/impl/codec/$UnboundedMapCodec"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$DoubleStream, $DoubleStream$Type} from "packages/java/util/stream/$DoubleStream"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NamedRecordCodec$Instance, $NamedRecordCodec$Instance$Type} from "packages/fr/frinn/custommachinery/impl/codec/$NamedRecordCodec$Instance"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Registrar, $Registrar$Type} from "packages/dev/architectury/registry/registries/$Registrar"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PairCodec<F, S> implements $NamedCodec<($Pair<(F), (S)>)> {


public "name"(): string
public "equals"(o: any): boolean
public "hashCode"(): integer
public "decode"<T>(ops: $DynamicOps$Type<(T)>, input: T): $DataResult<($Pair<($Pair<(F), (S)>), (T)>)>
public "encode"<T>(ops: $DynamicOps$Type<(T)>, value: $Pair$Type<(F), (S)>, rest: T): $DataResult<(T)>
public static "of"<F, S>(first: $NamedCodec$Type<(F)>, second: $NamedCodec$Type<(S)>): $PairCodec<(F), (S)>
public static "unit"<A>(defaultValue: $Supplier$Type<($Pair$Type<(F), (S)>)>, name: string): $NamedCodec<($Pair<(F), (S)>)>
public static "unit"<A>(defaultValue: $Pair$Type<(F), (S)>, name: string): $NamedCodec<($Pair<(F), (S)>)>
public static "unit"<A>(defaultValue: $Pair$Type<(F), (S)>): $NamedCodec<($Pair<(F), (S)>)>
public "dispatch"<E>(typeKey: string, type: $Function$Type<(any), (any)>, valueCodecGetter: $Function$Type<(any), (any)>, name: string): $NamedMapCodec<(E)>
public "dispatch"<E>(type: $Function$Type<(any), (any)>, valueCodecGetter: $Function$Type<(any), (any)>, name: string): $NamedMapCodec<(E)>
public static "of"<A>(codec: $Codec$Type<($Pair$Type<(F), (S)>)>, name: string): $NamedCodec<($Pair<(F), (S)>)>
public static "of"<A>(codec: $Codec$Type<($Pair$Type<(F), (S)>)>): $NamedCodec<($Pair<(F), (S)>)>
public static "list"<A>(codec: $NamedCodec$Type<($Pair$Type<(F), (S)>)>, name: string): $NamedCodec<($List<($Pair<(F), (S)>)>)>
public static "list"<A>(codec: $NamedCodec$Type<($Pair$Type<(F), (S)>)>): $NamedCodec<($List<($Pair<(F), (S)>)>)>
public static "record"<O>(builder: $Function$Type<($NamedRecordCodec$Instance$Type<(O)>), (any)>, name: string): $NamedMapCodec<(O)>
public "read"<T>(ops: $DynamicOps$Type<(T)>, input: T): $DataResult<($Pair<(F), (S)>)>
public "copy"(input: $Pair$Type<(F), (S)>): $Pair<(F), (S)>
public static "checkRange"<N extends (number) & ($Comparable<(N)>)>(minInclusive: N, maxInclusive: N): $Function<(N), ($DataResult<(N)>)>
public static "pair"<F, S>(first: $NamedCodec$Type<(F)>, second: $NamedCodec$Type<(S)>): $PairCodec<(F), (S)>
public static "lazy"<A>(supplier: $Supplier$Type<($NamedCodec$Type<($Pair$Type<(F), (S)>)>)>, name: string): $NamedCodec<($Pair<(F), (S)>)>
public static "getJson"<U>(dynamic: $Dynamic$Type<(any)>): $JsonElement
public static "fromJson"<T>(parser: $Function$Type<($JsonElement$Type), (T)>, encoder: $Function$Type<(T), ($JsonElement$Type)>, name: string): $NamedCodec<(T)>
public static "enumMap"<K extends $Enum<(K)>, V>(keyEnumClass: $Class$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>): $NamedMapCodec<($Map<(K), (V)>)>
public static "enumMap"<K extends $Enum<(K)>, V>(keyEnumClass: $Class$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, name: string): $NamedMapCodec<($Map<(K), (V)>)>
public static "enumMap"<K extends $Enum<(K)>, V>(keyEnumClass: $Class$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, defaultValue: V): $NamedMapCodec<($Map<(K), (V)>)>
public static "enumMap"<K extends $Enum<(K)>, V>(keyEnumClass: $Class$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, defaultValue: V, name: string): $NamedMapCodec<($Map<(K), (V)>)>
public "fromNetwork"(buf: $FriendlyByteBuf$Type): $Pair<(F), (S)>
public static "registrar"<A>(registrar: $Registrar$Type<($Pair$Type<(F), (S)>)>): $NamedCodec<($Pair<(F), (S)>)>
public static "validateDoubleStreamSize"(stream: $DoubleStream$Type, size: integer): $DataResult<((double)[])>
public "xmap"<S>(to: $Function$Type<(any), (any)>, from: $Function$Type<(any), (any)>, name: string): $NamedCodec<(S)>
public "fieldOf"(fieldName: string): $NamedMapCodec<($Pair<(F), (S)>)>
public "codec"(): $Codec<($Pair<(F), (S)>)>
public "flatXmap"<S>(to: $Function$Type<(any), (any)>, from: $Function$Type<(any), (any)>, name: string): $NamedCodec<(S)>
public "optionalFieldOf"(fieldName: string, defaultValue: $Pair$Type<(F), (S)>): $NamedMapCodec<($Pair<(F), (S)>)>
public "optionalFieldOf"(fieldName: string, defaultValue: $Supplier$Type<($Pair$Type<(F), (S)>)>): $NamedMapCodec<($Pair<(F), (S)>)>
public "optionalFieldOf"(fieldName: string): $NamedMapCodec<($Optional<($Pair<(F), (S)>)>)>
public static "either"<F, S>(first: $NamedCodec$Type<(F)>, second: $NamedCodec$Type<(S)>): $NamedCodec<($Either<(F), (S)>)>
public static "either"<F, S>(first: $NamedCodec$Type<(F)>, second: $NamedCodec$Type<(S)>, name: string): $NamedCodec<($Either<(F), (S)>)>
public "flatComapMap"<S>(to: $Function$Type<(any), (any)>, from: $Function$Type<(any), (any)>, name: string): $NamedCodec<(S)>
public static "unboundedMap"<K, V>(keyCodec: $NamedCodec$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, name: string): $UnboundedMapCodec<(K), (V)>
public "comapFlatMap"<S>(to: $Function$Type<(any), (any)>, from: $Function$Type<(any), (any)>, name: string): $NamedCodec<(S)>
public static "intRange"(minInclusive: integer, maxInclusive: integer): $NamedCodec<(integer)>
public static "floatRange"(minInclusive: float, maxInclusive: float): $NamedCodec<(float)>
public static "doubleRange"(minInclusive: double, maxInclusive: double): $NamedCodec<(double)>
public "encodeStart"<T>(ops: $DynamicOps$Type<(T)>, input: $Pair$Type<(F), (S)>): $DataResult<(T)>
public "listOf"(): $NamedCodec<($List<($Pair<(F), (S)>)>)>
public "listOf"(name: string): $NamedCodec<($List<($Pair<(F), (S)>)>)>
public static "longRange"(minInclusive: long, maxInclusive: long): $NamedCodec<(long)>
public "toNetwork"(input: $Pair$Type<(F), (S)>, buf: $FriendlyByteBuf$Type): void
public static "enumCodec"<E extends $Enum<(E)>>(enumClass: $Class$Type<(E)>): $NamedCodec<(E)>
public static "enumCodec"<E extends $Enum<(E)>>(enumClass: $Class$Type<(E)>, name: string): $NamedCodec<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PairCodec$Type<F, S> = ($PairCodec<(F), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PairCodec_<F, S> = $PairCodec$Type<(F), (S)>;
}}
declare module "packages/fr/frinn/custommachinery/api/machine/$ICustomMachine" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IProcessorTemplate, $IProcessorTemplate$Type} from "packages/fr/frinn/custommachinery/api/crafting/$IProcessorTemplate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MachineStatus, $MachineStatus$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineStatus"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IMachineAppearance, $IMachineAppearance$Type} from "packages/fr/frinn/custommachinery/api/machine/$IMachineAppearance"
import {$IGuiElement, $IGuiElement$Type} from "packages/fr/frinn/custommachinery/api/guielement/$IGuiElement"

export interface $ICustomMachine {

 "getName"(): $Component
 "getId"(): $ResourceLocation
 "isDummy"(): boolean
 "getProcessorTemplate"(): $IProcessorTemplate<(any)>
 "getRecipeIds"(): $List<($ResourceLocation)>
 "getAppearance"(arg0: $MachineStatus$Type): $IMachineAppearance
 "getGuiElements"(): $List<($IGuiElement)>
}

export namespace $ICustomMachine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomMachine$Type = ($ICustomMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomMachine_ = $ICustomMachine$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/init/$BoxCreatorItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BoxCreatorItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(properties: $Item$Properties$Type)

public static "getSelectedBlock"(first: boolean, stack: $ItemStack$Type): $BlockPos
public static "setSelectedBlock"(first: boolean, stack: $ItemStack$Type, pos: $BlockPos$Type): void
public "canAttackBlock"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "isFoil"(stack: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoxCreatorItem$Type = ($BoxCreatorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoxCreatorItem_ = $BoxCreatorItem$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/crafting/$IMachineRecipe" {
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IJEIIngredientRequirement, $IJEIIngredientRequirement$Type} from "packages/fr/frinn/custommachinery/api/integration/jei/$IJEIIngredientRequirement"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IMachineRecipe {

 "getJeiPriority"(): integer
 "getJeiRequirements"(): $List<($IRequirement<(any)>)>
 "getPriority"(): integer
 "getMachineId"(): $ResourceLocation
 "showInJei"(): boolean
 "getRequirements"(): $List<($IRequirement<(any)>)>
 "getRecipeTime"(): integer
 "shouldResetOnError"(): boolean
 "getJEIIngredientRequirements"(): $List<($IJEIIngredientRequirement<(any)>)>
 "getDisplayInfoRequirements"(): $List<($IRequirement<(any)>)>
 "getRecipeId"(): $ResourceLocation
}

export namespace $IMachineRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMachineRecipe$Type = ($IMachineRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMachineRecipe_ = $IMachineRecipe$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/crafting/$ICraftingContext" {
import {$IMachineRecipe, $IMachineRecipe$Type} from "packages/fr/frinn/custommachinery/api/crafting/$IMachineRecipe"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$MachineTile, $MachineTile$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineTile"

export interface $ICraftingContext {

 "getRemainingTime"(): double
 "setBaseSpeed"(arg0: double): void
 "getIntegerModifiedValue"(arg0: double, arg1: $IRequirement$Type<(any)>, arg2: string): long
 "getPerTickIntegerModifiedValue"(arg0: double, arg1: $IRequirement$Type<(any)>, arg2: string): long
 "getPerTickModifiedValue"(arg0: double, arg1: $IRequirement$Type<(any)>, arg2: string): double
 "getRecipe"(): $IMachineRecipe
 "getMachineTile"(): $MachineTile
 "getModifiedSpeed"(): double
 "getModifiedValue"(arg0: double, arg1: $IRequirement$Type<(any)>, arg2: string): double
 "getBaseSpeed"(): double
}

export namespace $ICraftingContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingContext$Type = ($ICraftingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingContext_ = $ICraftingContext$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$FuelRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $FuelRequirementJS extends $RecipeJSBuilder {

 "requireFuel"(): $RecipeJSBuilder
 "requireFuel"(amount: integer): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $FuelRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelRequirementJS$Type = ($FuelRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelRequirementJS_ = $FuelRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/machine/$MachineLocation" {
import {$File, $File$Type} from "packages/java/io/$File"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$MachineLocation$Loader, $MachineLocation$Loader$Type} from "packages/fr/frinn/custommachinery/common/machine/$MachineLocation$Loader"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $MachineLocation {
static readonly "CODEC": $NamedCodec<($MachineLocation)>


public static "fromKubeJS"(id: $ResourceLocation$Type, packName: string): $MachineLocation
public static "fromKubeJSScript"(id: $ResourceLocation$Type, packName: string): $MachineLocation
public "getId"(): $ResourceLocation
public "getFile"(server: $MinecraftServer$Type): $File
public "getLoader"(): $MachineLocation$Loader
public "getText"(): $MutableComponent
public "getPackName"(): string
public static "fromDatapack"(id: $ResourceLocation$Type, packName: string): $MachineLocation
public static "fromDefault"(id: $ResourceLocation$Type, packName: string): $MachineLocation
public static "fromDatapackZip"(id: $ResourceLocation$Type, packName: string): $MachineLocation
public "canEdit"(): boolean
public static "fromLoader"(loader: $MachineLocation$Loader$Type, id: $ResourceLocation$Type, packName: string): $MachineLocation
get "id"(): $ResourceLocation
get "loader"(): $MachineLocation$Loader
get "text"(): $MutableComponent
get "packName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineLocation$Type = ($MachineLocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineLocation_ = $MachineLocation$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/crafting/$CraftingResult" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export class $CraftingResult {


public "getMessage"(): $Component
public static "error"(message: $Component$Type): $CraftingResult
public static "pass"(): $CraftingResult
public static "success"(): $CraftingResult
public "isSuccess"(): boolean
get "message"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingResult$Type = ($CraftingResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingResult_ = $CraftingResult$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$FluidRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$FluidStackJS, $FluidStackJS$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $FluidRequirementJS extends $RecipeJSBuilder {

 "requireFluid"(stack: $FluidStackJS$Type): $RecipeJSBuilder
 "requireFluid"(stack: $FluidStackJS$Type, tank: string): $RecipeJSBuilder
 "produceFluid"(stack: $FluidStackJS$Type, tank: string): $RecipeJSBuilder
 "produceFluid"(stack: $FluidStackJS$Type): $RecipeJSBuilder
 "requireFluidTag"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, tank: string): $RecipeJSBuilder
 "requireFluidTag"(tag: string, amount: integer): $RecipeJSBuilder
 "requireFluidTag"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $FluidRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidRequirementJS$Type = ($FluidRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidRequirementJS_ = $FluidRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/component/$MachineComponentManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ISerializableComponent, $ISerializableComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$ISerializableComponent"
import {$IDumpComponent, $IDumpComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$IDumpComponent"
import {$IMachineComponent, $IMachineComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponent"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IComparatorInputComponent, $IComparatorInputComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$IComparatorInputComponent"
import {$IComponentHandler, $IComponentHandler$Type} from "packages/fr/frinn/custommachinery/api/component/handler/$IComponentHandler"
import {$CustomMachineTile, $CustomMachineTile$Type} from "packages/fr/frinn/custommachinery/common/init/$CustomMachineTile"
import {$ITickableComponent, $ITickableComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$ITickableComponent"
import {$ISyncableStuff, $ISyncableStuff$Type} from "packages/fr/frinn/custommachinery/api/network/$ISyncableStuff"
import {$MachineComponentType, $MachineComponentType$Type} from "packages/fr/frinn/custommachinery/api/component/$MachineComponentType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ISideConfigComponent, $ISideConfigComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$ISideConfigComponent"
import {$IMachineComponentManager, $IMachineComponentManager$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponentManager"
import {$ISyncable, $ISyncable$Type} from "packages/fr/frinn/custommachinery/api/network/$ISyncable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IMachineComponentTemplate, $IMachineComponentTemplate$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponentTemplate"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineComponentManager implements $IMachineComponentManager {

constructor(templates: $List$Type<($IMachineComponentTemplate$Type<(any)>)>, tile: $CustomMachineTile$Type)

public "getTile"(): $CustomMachineTile
public "getServer"(): $MinecraftServer
public "getDumpComponents"(): $List<($IDumpComponent)>
public "hasComponent"(type: $MachineComponentType$Type<(any)>): boolean
public "getStuffToSync"(container: $Consumer$Type<($ISyncable$Type<(any), (any)>)>): void
public "getComponent"<T extends $IMachineComponent>(type: $MachineComponentType$Type<(T)>): $Optional<(T)>
public "getConfigComponents"(): $Collection<($ISideConfigComponent)>
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "getComponents"(): $Map<($MachineComponentType<(any)>), ($IMachineComponent)>
public "getLevel"(): $Level
public "clientTick"(): void
public "getComponentHandler"<T extends $IMachineComponent>(type: $MachineComponentType$Type<(T)>): $Optional<($IComponentHandler<(T)>)>
public "serverTick"(): void
public "markDirty"(): void
public "getTickableComponents"(): $List<($ITickableComponent)>
public "getComparatorInputComponents"(): $List<($IComparatorInputComponent)>
public "getSerializableComponents"(): $List<($ISerializableComponent)>
public "getSyncableComponents"(): $List<($ISyncableStuff)>
public "getConfigComponentById"(id: string): $Optional<($ISideConfigComponent)>
get "tile"(): $CustomMachineTile
get "server"(): $MinecraftServer
get "dumpComponents"(): $List<($IDumpComponent)>
get "configComponents"(): $Collection<($ISideConfigComponent)>
get "components"(): $Map<($MachineComponentType<(any)>), ($IMachineComponent)>
get "level"(): $Level
get "tickableComponents"(): $List<($ITickableComponent)>
get "comparatorInputComponents"(): $List<($IComparatorInputComponent)>
get "serializableComponents"(): $List<($ISerializableComponent)>
get "syncableComponents"(): $List<($ISyncableStuff)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineComponentManager$Type = ($MachineComponentManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineComponentManager_ = $MachineComponentManager$Type;
}}
declare module "packages/fr/frinn/custommachinery/impl/guielement/$AbstractGuiElement$Properties" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AbstractGuiElement$Properties extends $Record {

constructor(x: integer, y: integer, width: integer, height: integer, priority: integer, texture: $ResourceLocation$Type, textureHovered: $ResourceLocation$Type, tooltips: $List$Type<($Component$Type)>, id: string)

public "priority"(): integer
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): integer
public "id"(): string
public "y"(): integer
public "width"(): integer
public "height"(): integer
public "texture"(): $ResourceLocation
public "tooltips"(): $List<($Component)>
public "textureHovered"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGuiElement$Properties$Type = ($AbstractGuiElement$Properties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGuiElement$Properties_ = $AbstractGuiElement$Properties$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ItemFilterRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $ItemFilterRequirementJS extends $RecipeJSBuilder {

 "requireItemFilter"(ingredient: $Ingredient$Type): $RecipeJSBuilder
 "requireItemFilter"(ingredient: $Ingredient$Type, slot: string): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $ItemFilterRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilterRequirementJS$Type = ($ItemFilterRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFilterRequirementJS_ = $ItemFilterRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/integration/jei/$IDisplayInfo$TooltipPredicate" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"

export interface $IDisplayInfo$TooltipPredicate {

 "shouldDisplay"(arg0: $Player$Type, arg1: boolean): boolean

(arg0: $Player$Type, arg1: boolean): boolean
}

export namespace $IDisplayInfo$TooltipPredicate {
const ALWAYS: $IDisplayInfo$TooltipPredicate
const ADVANCED: $IDisplayInfo$TooltipPredicate
const CREATIVE: $IDisplayInfo$TooltipPredicate
const CODEC: $NamedCodec<($IDisplayInfo$TooltipPredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDisplayInfo$TooltipPredicate$Type = ($IDisplayInfo$TooltipPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDisplayInfo$TooltipPredicate_ = $IDisplayInfo$TooltipPredicate$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/crafting/$RecipeChecker" {
import {$IMachineRecipe, $IMachineRecipe$Type} from "packages/fr/frinn/custommachinery/api/crafting/$IMachineRecipe"
import {$MachineTile, $MachineTile$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineTile"
import {$ICraftingContext, $ICraftingContext$Type} from "packages/fr/frinn/custommachinery/api/crafting/$ICraftingContext"

export class $RecipeChecker<T extends $IMachineRecipe> {

constructor(recipe: T)

public "isInventoryRequirementsOnly"(): boolean
public "isInventoryRequirementsOk"(): boolean
public "check"(tile: $MachineTile$Type, context: $ICraftingContext$Type, inventoryChanged: boolean): boolean
public "getRecipe"(): T
get "inventoryRequirementsOnly"(): boolean
get "inventoryRequirementsOk"(): boolean
get "recipe"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeChecker$Type<T> = ($RecipeChecker<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeChecker_<T> = $RecipeChecker$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/common/crafting/craft/$CustomCraftRecipeBuilder" {
import {$AbstractRecipeBuilder, $AbstractRecipeBuilder$Type} from "packages/fr/frinn/custommachinery/impl/crafting/$AbstractRecipeBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"
import {$CustomCraftRecipe, $CustomCraftRecipe$Type} from "packages/fr/frinn/custommachinery/common/crafting/craft/$CustomCraftRecipe"

export class $CustomCraftRecipeBuilder extends $AbstractRecipeBuilder<($CustomCraftRecipe)> {
static readonly "CODEC": $NamedCodec<($CustomCraftRecipeBuilder)>

constructor(machine: $ResourceLocation$Type, output: $ItemStack$Type)
constructor(recipe: $CustomCraftRecipe$Type)

public "build"(id: $ResourceLocation$Type): $CustomCraftRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomCraftRecipeBuilder$Type = ($CustomCraftRecipeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomCraftRecipeBuilder_ = $CustomCraftRecipeBuilder$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/network/$ISyncableStuff" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ISyncable, $ISyncable$Type} from "packages/fr/frinn/custommachinery/api/network/$ISyncable"

export interface $ISyncableStuff {

 "getStuffToSync"(arg0: $Consumer$Type<($ISyncable$Type<(any), (any)>)>): void

(arg0: $Consumer$Type<($ISyncable$Type<(any), (any)>)>): void
}

export namespace $ISyncableStuff {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISyncableStuff$Type = ($ISyncableStuff);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISyncableStuff_ = $ISyncableStuff$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$CommandRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $CommandRequirementJS extends $RecipeJSBuilder {

 "runCommandOnEnd"(command: string): $RecipeJSBuilder
 "runCommandOnEnd"(command: string, permissionLevel: integer): $RecipeJSBuilder
 "runCommandOnEnd"(command: string, log: boolean): $RecipeJSBuilder
 "runCommandOnEnd"(command: string, permissionLevel: integer, log: boolean): $RecipeJSBuilder
 "runCommandEachTick"(command: string, log: boolean): $RecipeJSBuilder
 "runCommandEachTick"(command: string, permissionLevel: integer, log: boolean): $RecipeJSBuilder
 "runCommandEachTick"(command: string, permissionLevel: integer): $RecipeJSBuilder
 "runCommandEachTick"(command: string): $RecipeJSBuilder
 "runCommandOnStart"(command: string, permissionLevel: integer): $RecipeJSBuilder
 "runCommandOnStart"(command: string): $RecipeJSBuilder
 "runCommandOnStart"(command: string, log: boolean): $RecipeJSBuilder
 "runCommandOnStart"(command: string, permissionLevel: integer, log: boolean): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $CommandRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandRequirementJS$Type = ($CommandRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandRequirementJS_ = $CommandRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ButtonRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $ButtonRequirementJS extends $RecipeJSBuilder {

 "requireButtonPressed"(id: string): $RecipeJSBuilder
 "requireButtonReleased"(id: string): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $ButtonRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonRequirementJS$Type = ($ButtonRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonRequirementJS_ = $ButtonRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/integration/jei/$IJEIIngredientWrapper" {
import {$IRecipeLayoutBuilder, $IRecipeLayoutBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$RequirementIOMode, $RequirementIOMode$Type} from "packages/fr/frinn/custommachinery/api/requirement/$RequirementIOMode"
import {$IRecipeHelper, $IRecipeHelper$Type} from "packages/fr/frinn/custommachinery/api/integration/jei/$IRecipeHelper"
import {$IGuiElement, $IGuiElement$Type} from "packages/fr/frinn/custommachinery/api/guielement/$IGuiElement"

export interface $IJEIIngredientWrapper<T> {

 "setupRecipe"(arg0: $IRecipeLayoutBuilder$Type, arg1: integer, arg2: integer, arg3: $IGuiElement$Type, arg4: $IRecipeHelper$Type): boolean
 "roleFromMode"(mode: $RequirementIOMode$Type): $RecipeIngredientRole

(arg0: $IRecipeLayoutBuilder$Type, arg1: integer, arg2: integer, arg3: $IGuiElement$Type, arg4: $IRecipeHelper$Type): boolean
}

export namespace $IJEIIngredientWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJEIIngredientWrapper$Type<T> = ($IJEIIngredientWrapper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJEIIngredientWrapper_<T> = $IJEIIngredientWrapper$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/api/integration/jei/$DisplayInfoTemplate" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IDisplayInfo$TooltipPredicate, $IDisplayInfo$TooltipPredicate$Type} from "packages/fr/frinn/custommachinery/api/integration/jei/$IDisplayInfo$TooltipPredicate"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IDisplayInfo, $IDisplayInfo$Type} from "packages/fr/frinn/custommachinery/api/integration/jei/$IDisplayInfo"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"

export class $DisplayInfoTemplate {
static readonly "TOOLTIPS": $NamedCodec<($Pair<($Component), ($IDisplayInfo$TooltipPredicate)>)>
static readonly "CODEC": $NamedCodec<($DisplayInfoTemplate)>

constructor()

public "build"(info: $IDisplayInfo$Type): void
public "item"(stack: $ItemStack$Type): $DisplayInfoTemplate
public "getTooltips"(): $List<($Pair<($Component), ($IDisplayInfo$TooltipPredicate)>)>
public "texture"(icon: $ResourceLocation$Type, width: integer, height: integer, u: integer, v: integer): $DisplayInfoTemplate
public "tooltip"(component: $Component$Type): $DisplayInfoTemplate
public "tooltip"(component: $Component$Type, predicate: $IDisplayInfo$TooltipPredicate$Type): $DisplayInfoTemplate
public "sprite"(atlas: $ResourceLocation$Type, sprite: $ResourceLocation$Type): $DisplayInfoTemplate
get "tooltips"(): $List<($Pair<($Component), ($IDisplayInfo$TooltipPredicate)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayInfoTemplate$Type = ($DisplayInfoTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayInfoTemplate_ = $DisplayInfoTemplate$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/integration/jei/$IJEIIngredientRequirement" {
import {$IMachineRecipe, $IMachineRecipe$Type} from "packages/fr/frinn/custommachinery/api/crafting/$IMachineRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IJEIIngredientWrapper, $IJEIIngredientWrapper$Type} from "packages/fr/frinn/custommachinery/api/integration/jei/$IJEIIngredientWrapper"

export interface $IJEIIngredientRequirement<T> {

 "getJEIIngredientWrappers"(arg0: $IMachineRecipe$Type): $List<($IJEIIngredientWrapper<(T)>)>

(arg0: $IMachineRecipe$Type): $List<($IJEIIngredientWrapper<(T)>)>
}

export namespace $IJEIIngredientRequirement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJEIIngredientRequirement$Type<T> = ($IJEIIngredientRequirement<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJEIIngredientRequirement_<T> = $IJEIIngredientRequirement$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/common/crafting/machine/$CustomMachineRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$IJEIIngredientRequirement, $IJEIIngredientRequirement$Type} from "packages/fr/frinn/custommachinery/api/integration/jei/$IJEIIngredientRequirement"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IGuiElement, $IGuiElement$Type} from "packages/fr/frinn/custommachinery/api/guielement/$IGuiElement"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$IMachineRecipe, $IMachineRecipe$Type} from "packages/fr/frinn/custommachinery/api/crafting/$IMachineRecipe"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MachineAppearance, $MachineAppearance$Type} from "packages/fr/frinn/custommachinery/common/machine/$MachineAppearance"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IMachineAppearance, $IMachineAppearance$Type} from "packages/fr/frinn/custommachinery/api/machine/$IMachineAppearance"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $CustomMachineRecipe implements $Recipe<($Container)>, $IMachineRecipe {

constructor(id: $ResourceLocation$Type, machine: $ResourceLocation$Type, time: integer, requirements: $List$Type<($IRequirement$Type<(any)>)>, jeiRequirements: $List$Type<($IRequirement$Type<(any)>)>, priority: integer, jeiPriority: integer, resetOnError: boolean, hidden: boolean, appearance: $MachineAppearance$Type, guiElements: $List$Type<($IGuiElement$Type)>)

public "getJeiPriority"(): integer
public "getJeiRequirements"(): $List<($IRequirement<(any)>)>
public "getPriority"(): integer
public "getId"(): $ResourceLocation
public "getCustomAppearance"(baseAppearance: $IMachineAppearance$Type): $MachineAppearance
public "getCustomGuiElements"(baseGuiElements: $List$Type<($IGuiElement$Type)>): $List<($IGuiElement)>
public "getResultItem"(access: $RegistryAccess$Type): $ItemStack
public "getMachineId"(): $ResourceLocation
public "showInJei"(): boolean
public "getRequirements"(): $List<($IRequirement<(any)>)>
public "getRecipeTime"(): integer
public "shouldResetOnError"(): boolean
public "getRecipeId"(): $ResourceLocation
public "matches"(inv: $Container$Type, worldIn: $Level$Type): boolean
public "assemble"(inv: $Container$Type, access: $RegistryAccess$Type): $ItemStack
public "getAppearance"(): $MachineAppearance
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getGuiElements"(): $List<($IGuiElement)>
public "isSpecial"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "getJEIIngredientRequirements"(): $List<($IJEIIngredientRequirement<(any)>)>
public "getDisplayInfoRequirements"(): $List<($IRequirement<(any)>)>
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
get "jeiPriority"(): integer
get "jeiRequirements"(): $List<($IRequirement<(any)>)>
get "priority"(): integer
get "id"(): $ResourceLocation
get "machineId"(): $ResourceLocation
get "requirements"(): $List<($IRequirement<(any)>)>
get "recipeTime"(): integer
get "recipeId"(): $ResourceLocation
get "appearance"(): $MachineAppearance
get "serializer"(): $RecipeSerializer<(any)>
get "guiElements"(): $List<($IGuiElement)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "jEIIngredientRequirements"(): $List<($IJEIIngredientRequirement<(any)>)>
get "displayInfoRequirements"(): $List<($IRequirement<(any)>)>
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
export type $CustomMachineRecipe$Type = ($CustomMachineRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMachineRecipe_ = $CustomMachineRecipe$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/init/$CustomMachineBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IBlockWithWorldlyProperties, $IBlockWithWorldlyProperties$Type} from "packages/com/communi/suggestu/saecularia/caudices/core/block/$IBlockWithWorldlyProperties"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $CustomMachineBlock extends $Block implements $EntityBlock, $IBlockWithWorldlyProperties {
readonly "renderType": string
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

constructor()
constructor(renderType: string, occlusion: boolean)

public "rotate"(state: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, rotation: $Rotation$Type): $BlockState
public "getCloneItemStack"(state: $BlockState$Type, hitResult: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public static "makeProperties"(occlusion: boolean): $BlockBehaviour$Properties
public "shouldCheckWeakPower"(blockState: $BlockState$Type, levelReader: $SignalGetter$Type, blockPos: $BlockPos$Type, direction: $Direction$Type): boolean
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "shouldDisplayFluidOverlay"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, fluidState: $FluidState$Type): boolean
public "getBeaconColorMultiplier"(blockState: $BlockState$Type, levelReader: $LevelReader$Type, blockPos: $BlockPos$Type, blockPos1: $BlockPos$Type): (float)[]
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "playerDestroy"(level: $Level$Type, player: $Player$Type, pos: $BlockPos$Type, state: $BlockState$Type, blockEntity: $BlockEntity$Type, tool: $ItemStack$Type): void
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "getColor"(): $DyeColor
public "onPlace"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "isSignalSource"(state: $BlockState$Type): boolean
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "canBeReplaced"(state: $BlockState$Type, fluid: $Fluid$Type): boolean
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getDestroyProgress"(state: $BlockState$Type, player: $Player$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getDirectSignal"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "getSignal"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "canBeGrass"(arg0: $LevelReader$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockPos$Type): boolean
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMachineBlock$Type = ($CustomMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMachineBlock_ = $CustomMachineBlock$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/init/$StructureCreatorItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StructureCreatorItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(properties: $Item$Properties$Type)

public static "getSelectedBlocks"(stack: $ItemStack$Type): $List<($BlockPos)>
public static "addSelectedBlock"(stack: $ItemStack$Type, pos: $BlockPos$Type): void
public static "removeSelectedBlock"(stack: $ItemStack$Type, pos: $BlockPos$Type): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "isFoil"(stack: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureCreatorItem$Type = ($StructureCreatorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureCreatorItem_ = $StructureCreatorItem$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/machine/$MachineAppearance" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$NamedMapCodec, $NamedMapCodec$Type} from "packages/fr/frinn/custommachinery/impl/codec/$NamedMapCodec"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MachineAppearanceProperty, $MachineAppearanceProperty$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineAppearanceProperty"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IMachineModelLocation, $IMachineModelLocation$Type} from "packages/fr/frinn/custommachinery/impl/util/$IMachineModelLocation"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IMachineAppearance, $IMachineAppearance$Type} from "packages/fr/frinn/custommachinery/api/machine/$IMachineAppearance"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineAppearance implements $IMachineAppearance {
static readonly "CODEC": $NamedMapCodec<($Map<($MachineAppearanceProperty<(any)>), (any)>)>
static readonly "DEFAULT": $MachineAppearance

constructor(properties: $Map$Type<($MachineAppearanceProperty$Type<(any)>), (any)>)

public "getItemModel"(): $IMachineModelLocation
public "getProperty"<T>(property: $MachineAppearanceProperty$Type<(T)>): T
public "getProperties"(): $Map<($MachineAppearanceProperty<(any)>), (any)>
public "copy"(): $MachineAppearance
public "getAmbientSound"(): $SoundEvent
public "getTool"(): $List<($TagKey<($Block)>)>
public "getMiningLevel"(): $TagKey<($Block)>
public "getHardness"(): float
public "getCollisionShape"(): $Function<($Direction), ($VoxelShape)>
public "getLightLevel"(): integer
public "getColor"(): integer
public "requiresCorrectToolForDrops"(): boolean
public "getInteractionSound"(): $SoundType
public "getResistance"(): float
public "getBlockModel"(): $IMachineModelLocation
public static "defaultProperties"(): $Map<($MachineAppearanceProperty<(any)>), (any)>
get "itemModel"(): $IMachineModelLocation
get "properties"(): $Map<($MachineAppearanceProperty<(any)>), (any)>
get "ambientSound"(): $SoundEvent
get "tool"(): $List<($TagKey<($Block)>)>
get "miningLevel"(): $TagKey<($Block)>
get "hardness"(): float
get "collisionShape"(): $Function<($Direction), ($VoxelShape)>
get "lightLevel"(): integer
get "color"(): integer
get "interactionSound"(): $SoundType
get "resistance"(): float
get "blockModel"(): $IMachineModelLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineAppearance$Type = ($MachineAppearance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineAppearance_ = $MachineAppearance$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/init/$CustomMachineItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$CustomMachine, $CustomMachine$Type} from "packages/fr/frinn/custommachinery/common/machine/$CustomMachine"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CustomMachineItem extends $BlockItem {
static readonly "MACHINE_TAG_KEY": string
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(block: $Block$Type, properties: $Item$Properties$Type, machineID: $ResourceLocation$Type)

public "onCraftedBy"(stack: $ItemStack$Type, worldIn: $Level$Type, playerIn: $Player$Type): void
public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public static "makeMachineItem"(machineID: $ResourceLocation$Type): $ItemStack
public "place"(blockPlaceContext: $BlockPlaceContext$Type): $InteractionResult
public static "getMachine"(stack: $ItemStack$Type): $Optional<($CustomMachine)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMachineItem$Type = ($CustomMachineItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMachineItem_ = $CustomMachineItem$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/component/$MachineComponentType" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IMachineComponentManager, $IMachineComponentManager$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponentManager"
import {$IMachineComponent, $IMachineComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"
import {$IComponentHandler, $IComponentHandler$Type} from "packages/fr/frinn/custommachinery/api/component/handler/$IComponentHandler"

export class $MachineComponentType<T extends $IMachineComponent> {
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($MachineComponentType<(any)>)>)>


public "getId"(): $ResourceLocation
public static "create"<T extends $IMachineComponent>(codec: $NamedCodec$Type<(any)>): $MachineComponentType<(T)>
public static "create"<T extends $IMachineComponent>(defaultComponentBuilder: $Function$Type<($IMachineComponentManager$Type), (T)>): $MachineComponentType<(T)>
public static "create"<T extends $IMachineComponent>(codec: $NamedCodec$Type<(any)>, defaultComponentBuilder: $Function$Type<($IMachineComponentManager$Type), (T)>): $MachineComponentType<(T)>
public "getHandler"(manager: $IMachineComponentManager$Type, components: $List$Type<(T)>): $IComponentHandler<(T)>
public "getTranslatedName"(): $Component
public "getDefaultComponentBuilder"(): $Function<($IMachineComponentManager), (T)>
public "getCodec"(): $NamedCodec<(any)>
public "isSingle"(): boolean
public "isDefaultComponent"(): boolean
public "setNotSingle"(handlerBuilder: $BiFunction$Type<($IMachineComponentManager$Type), ($List$Type<(T)>), ($IComponentHandler$Type<(T)>)>): $MachineComponentType<(T)>
get "id"(): $ResourceLocation
get "translatedName"(): $Component
get "defaultComponentBuilder"(): $Function<($IMachineComponentManager), (T)>
get "codec"(): $NamedCodec<(any)>
get "single"(): boolean
get "defaultComponent"(): boolean
set "notSingle"(value: $BiFunction$Type<($IMachineComponentManager$Type), ($List$Type<(T)>), ($IComponentHandler$Type<(T)>)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineComponentType$Type<T> = ($MachineComponentType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineComponentType_<T> = $MachineComponentType$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/common/requirement/$StructureRequirement$Action" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $StructureRequirement$Action extends $Enum<($StructureRequirement$Action)> {
static readonly "CHECK": $StructureRequirement$Action
static readonly "DESTROY": $StructureRequirement$Action
static readonly "BREAK": $StructureRequirement$Action
static readonly "PLACE_BREAK": $StructureRequirement$Action
static readonly "PLACE_DESTROY": $StructureRequirement$Action


public static "values"(): ($StructureRequirement$Action)[]
public static "valueOf"(name: string): $StructureRequirement$Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureRequirement$Action$Type = (("place_destroy") | ("break") | ("destroy") | ("check") | ("place_break")) | ($StructureRequirement$Action);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureRequirement$Action_ = $StructureRequirement$Action$Type;
}}
declare module "packages/fr/frinn/custommachinery/impl/crafting/$AbstractRecipeBuilder" {
import {$IMachineRecipe, $IMachineRecipe$Type} from "packages/fr/frinn/custommachinery/api/crafting/$IMachineRecipe"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IRecipeBuilder, $IRecipeBuilder$Type} from "packages/fr/frinn/custommachinery/api/crafting/$IRecipeBuilder"

export class $AbstractRecipeBuilder<T extends $IMachineRecipe> implements $IRecipeBuilder<(T)> {

constructor(machine: $ResourceLocation$Type)
constructor(recipe: T)

public "getJeiPriority"(): integer
public "getJeiRequirements"(): $List<($IRequirement<(any)>)>
public "isHidden"(): boolean
public "getPriority"(): integer
public "getRequirements"(): $List<($IRequirement<(any)>)>
public "withJeiRequirement"(requirement: $IRequirement$Type<(any)>): $AbstractRecipeBuilder<(T)>
public "withRequirement"(requirement: $IRequirement$Type<(any)>): $AbstractRecipeBuilder<(T)>
public "withJeiPriority"(jeiPriority: integer): $AbstractRecipeBuilder<(T)>
public "getMachine"(): $ResourceLocation
public "build"(arg0: $ResourceLocation$Type): T
get "jeiPriority"(): integer
get "jeiRequirements"(): $List<($IRequirement<(any)>)>
get "hidden"(): boolean
get "priority"(): integer
get "requirements"(): $List<($IRequirement<(any)>)>
get "machine"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRecipeBuilder$Type<T> = ($AbstractRecipeBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRecipeBuilder_<T> = $AbstractRecipeBuilder$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$FluidPerTickRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$FluidStackJS, $FluidStackJS$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $FluidPerTickRequirementJS extends $RecipeJSBuilder {

 "requireFluidPerTick"(stack: $FluidStackJS$Type): $RecipeJSBuilder
 "requireFluidPerTick"(stack: $FluidStackJS$Type, tank: string): $RecipeJSBuilder
 "requireFluidTagPerTick"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
 "requireFluidTagPerTick"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, tank: string): $RecipeJSBuilder
 "requireFluidTagPerTick"(tag: string, amount: integer): $RecipeJSBuilder
 "produceFluidPerTick"(stack: $FluidStackJS$Type): $RecipeJSBuilder
 "produceFluidPerTick"(stack: $FluidStackJS$Type, tank: string): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $FluidPerTickRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPerTickRequirementJS$Type = ($FluidPerTickRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPerTickRequirementJS_ = $FluidPerTickRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/component/$IMachineComponentManager" {
import {$ISerializableComponent, $ISerializableComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$ISerializableComponent"
import {$IDumpComponent, $IDumpComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$IDumpComponent"
import {$MachineTile, $MachineTile$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineTile"
import {$IMachineComponent, $IMachineComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IComparatorInputComponent, $IComparatorInputComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$IComparatorInputComponent"
import {$IComponentHandler, $IComponentHandler$Type} from "packages/fr/frinn/custommachinery/api/component/handler/$IComponentHandler"
import {$ITickableComponent, $ITickableComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$ITickableComponent"
import {$ISyncableStuff, $ISyncableStuff$Type} from "packages/fr/frinn/custommachinery/api/network/$ISyncableStuff"
import {$MachineComponentType, $MachineComponentType$Type} from "packages/fr/frinn/custommachinery/api/component/$MachineComponentType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IMachineComponentManager {

 "getTile"(): $MachineTile
 "getServer"(): $MinecraftServer
 "getDumpComponents"(): $List<($IDumpComponent)>
 "hasComponent"(arg0: $MachineComponentType$Type<(any)>): boolean
 "getComponent"<T extends $IMachineComponent>(arg0: $MachineComponentType$Type<(T)>): $Optional<(T)>
 "getComponents"(): $Map<($MachineComponentType<(any)>), ($IMachineComponent)>
 "getLevel"(): $Level
 "getComponentHandler"<T extends $IMachineComponent>(arg0: $MachineComponentType$Type<(T)>): $Optional<($IComponentHandler<(T)>)>
 "markDirty"(): void
 "getTickableComponents"(): $List<($ITickableComponent)>
 "getComparatorInputComponents"(): $List<($IComparatorInputComponent)>
 "getSerializableComponents"(): $List<($ISerializableComponent)>
 "getSyncableComponents"(): $List<($ISyncableStuff)>
}

export namespace $IMachineComponentManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMachineComponentManager$Type = ($IMachineComponentManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMachineComponentManager_ = $IMachineComponentManager$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ExperiencePerTickRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $ExperiencePerTickRequirementJS extends $RecipeJSBuilder {

 "produceLevelPerTick"(levels: integer): $RecipeJSBuilder
 "requireLevelPerTick"(levels: integer): $RecipeJSBuilder
 "requireXpPerTick"(xp: integer): $RecipeJSBuilder
 "produceXpPerTick"(xp: integer): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $ExperiencePerTickRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperiencePerTickRequirementJS$Type = ($ExperiencePerTickRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperiencePerTickRequirementJS_ = $ExperiencePerTickRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$DropRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $DropRequirementJS extends $RecipeJSBuilder {

 "consumeAnyDropOnStart"(amount: integer, radius: integer): $RecipeJSBuilder
 "consumeAnyDropOnEnd"(amount: integer, radius: integer): $RecipeJSBuilder
 "consumeDropsOnStart"(items: ($ItemStack$Type)[], amount: integer, radius: integer): $RecipeJSBuilder
 "consumeDropsOnStart"(items: ($ItemStack$Type)[], amount: integer, radius: integer, whitelist: boolean): $RecipeJSBuilder
 "consumeDropOnEnd"(item: $ItemStack$Type, amount: integer, radius: integer): $RecipeJSBuilder
 "consumeDropsOnEnd"(items: ($ItemStack$Type)[], amount: integer, radius: integer, whitelist: boolean): $RecipeJSBuilder
 "consumeDropsOnEnd"(items: ($ItemStack$Type)[], amount: integer, radius: integer): $RecipeJSBuilder
 "checkDrops"(items: ($ItemStack$Type)[], amount: integer, radius: integer, whitelist: boolean): $RecipeJSBuilder
 "checkDrops"(items: ($ItemStack$Type)[], amount: integer, radius: integer): $RecipeJSBuilder
 "dropItemOnStart"(stack: $ItemStack$Type): $RecipeJSBuilder
 "checkAnyDrop"(amount: integer, radius: integer): $RecipeJSBuilder
 "consumeDropOnStart"(item: $ItemStack$Type, amount: integer, radius: integer): $RecipeJSBuilder
 "checkDrop"(item: $ItemStack$Type, amount: integer, radius: integer): $RecipeJSBuilder
 "dropItemOnEnd"(stack: $ItemStack$Type): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $DropRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropRequirementJS$Type = ($DropRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropRequirementJS_ = $DropRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$EntityRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $EntityRequirementJS extends $RecipeJSBuilder {

 "killEntitiesOnStart"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
 "requireEntitiesHealth"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
 "consumeEntityHealthOnEnd"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
 "consumeEntityHealthOnStart"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
 "requireEntities"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
 "killEntitiesOnEnd"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $EntityRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRequirementJS$Type = ($EntityRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRequirementJS_ = $EntityRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/impl/codec/$UnboundedMapCodec" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$NamedMapCodec, $NamedMapCodec$Type} from "packages/fr/frinn/custommachinery/impl/codec/$NamedMapCodec"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$DoubleStream, $DoubleStream$Type} from "packages/java/util/stream/$DoubleStream"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$PairCodec, $PairCodec$Type} from "packages/fr/frinn/custommachinery/impl/codec/$PairCodec"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NamedRecordCodec$Instance, $NamedRecordCodec$Instance$Type} from "packages/fr/frinn/custommachinery/impl/codec/$NamedRecordCodec$Instance"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Registrar, $Registrar$Type} from "packages/dev/architectury/registry/registries/$Registrar"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UnboundedMapCodec<K, V> implements $NamedCodec<($Map<(K), (V)>)> {


public "name"(): string
public "decode"<T>(ops: $DynamicOps$Type<(T)>, input: T): $DataResult<($Pair<($Map<(K), (V)>), (T)>)>
public "encode"<T>(ops: $DynamicOps$Type<(T)>, input: $Map$Type<(K), (V)>, prefix: T): $DataResult<(T)>
public static "of"<K, V>(keyCodec: $NamedCodec$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, name: string): $UnboundedMapCodec<(K), (V)>
public static "unit"<A>(defaultValue: $Supplier$Type<($Map$Type<(K), (V)>)>, name: string): $NamedCodec<($Map<(K), (V)>)>
public static "unit"<A>(defaultValue: $Map$Type<(K), (V)>, name: string): $NamedCodec<($Map<(K), (V)>)>
public static "unit"<A>(defaultValue: $Map$Type<(K), (V)>): $NamedCodec<($Map<(K), (V)>)>
public "dispatch"<E>(typeKey: string, type: $Function$Type<(any), (any)>, valueCodecGetter: $Function$Type<(any), (any)>, name: string): $NamedMapCodec<(E)>
public "dispatch"<E>(type: $Function$Type<(any), (any)>, valueCodecGetter: $Function$Type<(any), (any)>, name: string): $NamedMapCodec<(E)>
public static "of"<A>(codec: $Codec$Type<($Map$Type<(K), (V)>)>, name: string): $NamedCodec<($Map<(K), (V)>)>
public static "of"<A>(codec: $Codec$Type<($Map$Type<(K), (V)>)>): $NamedCodec<($Map<(K), (V)>)>
public static "list"<A>(codec: $NamedCodec$Type<($Map$Type<(K), (V)>)>, name: string): $NamedCodec<($List<($Map<(K), (V)>)>)>
public static "list"<A>(codec: $NamedCodec$Type<($Map$Type<(K), (V)>)>): $NamedCodec<($List<($Map<(K), (V)>)>)>
public static "record"<O>(builder: $Function$Type<($NamedRecordCodec$Instance$Type<(O)>), (any)>, name: string): $NamedMapCodec<(O)>
public "read"<T>(ops: $DynamicOps$Type<(T)>, input: T): $DataResult<($Map<(K), (V)>)>
public "copy"(input: $Map$Type<(K), (V)>): $Map<(K), (V)>
public static "checkRange"<N extends (number) & ($Comparable<(N)>)>(minInclusive: N, maxInclusive: N): $Function<(N), ($DataResult<(N)>)>
public static "pair"<F, S>(first: $NamedCodec$Type<(F)>, second: $NamedCodec$Type<(S)>): $PairCodec<(F), (S)>
public static "lazy"<A>(supplier: $Supplier$Type<($NamedCodec$Type<($Map$Type<(K), (V)>)>)>, name: string): $NamedCodec<($Map<(K), (V)>)>
public static "getJson"<U>(dynamic: $Dynamic$Type<(any)>): $JsonElement
public static "fromJson"<T>(parser: $Function$Type<($JsonElement$Type), (T)>, encoder: $Function$Type<(T), ($JsonElement$Type)>, name: string): $NamedCodec<(T)>
public static "enumMap"<K extends $Enum<(K)>, V>(keyEnumClass: $Class$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>): $NamedMapCodec<($Map<(K), (V)>)>
public static "enumMap"<K extends $Enum<(K)>, V>(keyEnumClass: $Class$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, name: string): $NamedMapCodec<($Map<(K), (V)>)>
public static "enumMap"<K extends $Enum<(K)>, V>(keyEnumClass: $Class$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, defaultValue: V): $NamedMapCodec<($Map<(K), (V)>)>
public static "enumMap"<K extends $Enum<(K)>, V>(keyEnumClass: $Class$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, defaultValue: V, name: string): $NamedMapCodec<($Map<(K), (V)>)>
public "fromNetwork"(buf: $FriendlyByteBuf$Type): $Map<(K), (V)>
public static "registrar"<A>(registrar: $Registrar$Type<($Map$Type<(K), (V)>)>): $NamedCodec<($Map<(K), (V)>)>
public static "validateDoubleStreamSize"(stream: $DoubleStream$Type, size: integer): $DataResult<((double)[])>
public "xmap"<S>(to: $Function$Type<(any), (any)>, from: $Function$Type<(any), (any)>, name: string): $NamedCodec<(S)>
public "fieldOf"(fieldName: string): $NamedMapCodec<($Map<(K), (V)>)>
public "codec"(): $Codec<($Map<(K), (V)>)>
public "flatXmap"<S>(to: $Function$Type<(any), (any)>, from: $Function$Type<(any), (any)>, name: string): $NamedCodec<(S)>
public "optionalFieldOf"(fieldName: string, defaultValue: $Map$Type<(K), (V)>): $NamedMapCodec<($Map<(K), (V)>)>
public "optionalFieldOf"(fieldName: string, defaultValue: $Supplier$Type<($Map$Type<(K), (V)>)>): $NamedMapCodec<($Map<(K), (V)>)>
public "optionalFieldOf"(fieldName: string): $NamedMapCodec<($Optional<($Map<(K), (V)>)>)>
public static "either"<F, S>(first: $NamedCodec$Type<(F)>, second: $NamedCodec$Type<(S)>): $NamedCodec<($Either<(F), (S)>)>
public static "either"<F, S>(first: $NamedCodec$Type<(F)>, second: $NamedCodec$Type<(S)>, name: string): $NamedCodec<($Either<(F), (S)>)>
public "flatComapMap"<S>(to: $Function$Type<(any), (any)>, from: $Function$Type<(any), (any)>, name: string): $NamedCodec<(S)>
public static "unboundedMap"<K, V>(keyCodec: $NamedCodec$Type<(K)>, valueCodec: $NamedCodec$Type<(V)>, name: string): $UnboundedMapCodec<(K), (V)>
public "comapFlatMap"<S>(to: $Function$Type<(any), (any)>, from: $Function$Type<(any), (any)>, name: string): $NamedCodec<(S)>
public static "intRange"(minInclusive: integer, maxInclusive: integer): $NamedCodec<(integer)>
public static "floatRange"(minInclusive: float, maxInclusive: float): $NamedCodec<(float)>
public static "doubleRange"(minInclusive: double, maxInclusive: double): $NamedCodec<(double)>
public "encodeStart"<T>(ops: $DynamicOps$Type<(T)>, input: $Map$Type<(K), (V)>): $DataResult<(T)>
public "listOf"(): $NamedCodec<($List<($Map<(K), (V)>)>)>
public "listOf"(name: string): $NamedCodec<($List<($Map<(K), (V)>)>)>
public static "longRange"(minInclusive: long, maxInclusive: long): $NamedCodec<(long)>
public "toNetwork"(input: $Map$Type<(K), (V)>, buf: $FriendlyByteBuf$Type): void
public static "enumCodec"<E extends $Enum<(E)>>(enumClass: $Class$Type<(E)>): $NamedCodec<(E)>
public static "enumCodec"<E extends $Enum<(E)>>(enumClass: $Class$Type<(E)>, name: string): $NamedCodec<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnboundedMapCodec$Type<K, V> = ($UnboundedMapCodec<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnboundedMapCodec_<K, V> = $UnboundedMapCodec$Type<(K), (V)>;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$SkyRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $SkyRequirementJS extends $RecipeJSBuilder {

 "mustSeeSky"(): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $SkyRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyRequirementJS$Type = ($SkyRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkyRequirementJS_ = $SkyRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$LootTableRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $LootTableRequirementJS extends $RecipeJSBuilder {

 "lootTableOutput"(lootTable: string): $RecipeJSBuilder
 "lootTableOutput"(lootTable: string, luck: float): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $LootTableRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableRequirementJS$Type = ($LootTableRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableRequirementJS_ = $LootTableRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/crafting/$ProcessorType" {
import {$IProcessor, $IProcessor$Type} from "packages/fr/frinn/custommachinery/api/crafting/$IProcessor"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"

export class $ProcessorType<T extends $IProcessor> {
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($ProcessorType<(any)>)>)>


public "getId"(): $ResourceLocation
public static "create"<T extends $IProcessor>(codec: $NamedCodec$Type<(any)>): $ProcessorType<(T)>
public "getCodec"(): $NamedCodec<(any)>
get "id"(): $ResourceLocation
get "codec"(): $NamedCodec<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProcessorType$Type<T> = ($ProcessorType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProcessorType_<T> = $ProcessorType$Type<(T)>;
}}
declare module "packages/fr/frinn/custommachinery/common/crafting/$UpgradeManager" {
import {$CustomMachineTile, $CustomMachineTile$Type} from "packages/fr/frinn/custommachinery/common/init/$CustomMachineTile"
import {$IRecipeModifier, $IRecipeModifier$Type} from "packages/fr/frinn/custommachinery/api/upgrade/$IRecipeModifier"
import {$IMachineUpgradeManager, $IMachineUpgradeManager$Type} from "packages/fr/frinn/custommachinery/api/upgrade/$IMachineUpgradeManager"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export class $UpgradeManager implements $IMachineUpgradeManager {

constructor(tile: $CustomMachineTile$Type)

public "markDirty"(): void
public "getAllModifiers"(): $List<($Pair<($IRecipeModifier), (integer)>)>
get "allModifiers"(): $List<($Pair<($IRecipeModifier), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeManager$Type = ($UpgradeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeManager_ = $UpgradeManager$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/machine/$CustomMachine" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MachineLocation, $MachineLocation$Type} from "packages/fr/frinn/custommachinery/common/machine/$MachineLocation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MachineAppearanceManager, $MachineAppearanceManager$Type} from "packages/fr/frinn/custommachinery/common/machine/$MachineAppearanceManager"
import {$IGuiElement, $IGuiElement$Type} from "packages/fr/frinn/custommachinery/api/guielement/$IGuiElement"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"
import {$ICustomMachine, $ICustomMachine$Type} from "packages/fr/frinn/custommachinery/api/machine/$ICustomMachine"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IProcessorTemplate, $IProcessorTemplate$Type} from "packages/fr/frinn/custommachinery/api/crafting/$IProcessorTemplate"
import {$MachineAppearance, $MachineAppearance$Type} from "packages/fr/frinn/custommachinery/common/machine/$MachineAppearance"
import {$IMachineComponentTemplate, $IMachineComponentTemplate$Type} from "packages/fr/frinn/custommachinery/api/component/$IMachineComponentTemplate"
import {$MachineStatus, $MachineStatus$Type} from "packages/fr/frinn/custommachinery/api/machine/$MachineStatus"

export class $CustomMachine implements $ICustomMachine {
static readonly "CODEC": $NamedCodec<($CustomMachine)>
static readonly "DUMMY": $CustomMachine

constructor(name: $Component$Type, appearance: $MachineAppearanceManager$Type, tooltips: $List$Type<($Component$Type)>, guiElements: $List$Type<($IGuiElement$Type)>, jeiElements: $List$Type<($IGuiElement$Type)>, catalysts: $List$Type<($ResourceLocation$Type)>, componentTemplates: $List$Type<($IMachineComponentTemplate$Type<(any)>)>, processorTemplate: $IProcessorTemplate$Type<(any)>)

public "getJeiElements"(): $List<($IGuiElement)>
public "getName"(): $Component
public "getLocation"(): $MachineLocation
public "getId"(): $ResourceLocation
public "isDummy"(): boolean
public "getTooltips"(): $List<($Component)>
public "setLocation"(location: $MachineLocation$Type): $CustomMachine
public "getProcessorTemplate"(): $IProcessorTemplate<(any)>
public "getRecipeIds"(): $List<($ResourceLocation)>
public "getAppearanceManager"(): $MachineAppearanceManager
public "getAppearance"(status: $MachineStatus$Type): $MachineAppearance
public "getCatalysts"(): $List<($ResourceLocation)>
public "getComponentTemplates"(): $List<($IMachineComponentTemplate<(any)>)>
public "getGuiElements"(): $List<($IGuiElement)>
get "jeiElements"(): $List<($IGuiElement)>
get "name"(): $Component
get "location"(): $MachineLocation
get "id"(): $ResourceLocation
get "dummy"(): boolean
get "tooltips"(): $List<($Component)>
set "location"(value: $MachineLocation$Type)
get "processorTemplate"(): $IProcessorTemplate<(any)>
get "recipeIds"(): $List<($ResourceLocation)>
get "appearanceManager"(): $MachineAppearanceManager
get "catalysts"(): $List<($ResourceLocation)>
get "componentTemplates"(): $List<($IMachineComponentTemplate<(any)>)>
get "guiElements"(): $List<($IGuiElement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMachine$Type = ($CustomMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMachine_ = $CustomMachine$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$LightRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $LightRequirementJS extends $RecipeJSBuilder {

 "requireSkyLight"(level: string): $RecipeJSBuilder
 "requireBlockLight"(level: string): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $LightRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightRequirementJS$Type = ($LightRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightRequirementJS_ = $LightRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/$CustomMachineRecipeBuilderJS" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EnergyRequirementJS, $EnergyRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$EnergyRequirementJS"
import {$RecipeFunction, $RecipeFunction$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/function/$RecipeFunction"
import {$BiomeRequirementJS, $BiomeRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$BiomeRequirementJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$PositionRequirementJS, $PositionRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$PositionRequirementJS"
import {$ItemTransformRequirementJS, $ItemTransformRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ItemTransformRequirementJS"
import {$CustomMachineRecipeBuilder, $CustomMachineRecipeBuilder$Type} from "packages/fr/frinn/custommachinery/common/crafting/machine/$CustomMachineRecipeBuilder"
import {$ExperienceRequirementJS, $ExperienceRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ExperienceRequirementJS"
import {$EntityRequirementJS, $EntityRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$EntityRequirementJS"
import {$BlockRequirementJS, $BlockRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$BlockRequirementJS"
import {$WeatherRequirementJS, $WeatherRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$WeatherRequirementJS"
import {$EffectRequirementJS, $EffectRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$EffectRequirementJS"
import {$ExperiencePerTickRequirementJS, $ExperiencePerTickRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ExperiencePerTickRequirementJS"
import {$LightRequirementJS, $LightRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$LightRequirementJS"
import {$EnergyPerTickRequirementJS, $EnergyPerTickRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$EnergyPerTickRequirementJS"
import {$ChunkloadRequirementJS, $ChunkloadRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ChunkloadRequirementJS"
import {$DimensionRequirementJS, $DimensionRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$DimensionRequirementJS"
import {$FuelRequirementJS, $FuelRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$FuelRequirementJS"
import {$CommandRequirementJS, $CommandRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$CommandRequirementJS"
import {$ItemRequirementJS, $ItemRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ItemRequirementJS"
import {$StructureRequirement$Action, $StructureRequirement$Action$Type} from "packages/fr/frinn/custommachinery/common/requirement/$StructureRequirement$Action"
import {$TimeRequirementJS, $TimeRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$TimeRequirementJS"
import {$BlockRequirement$ACTION, $BlockRequirement$ACTION$Type} from "packages/fr/frinn/custommachinery/common/requirement/$BlockRequirement$ACTION"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ButtonRequirementJS, $ButtonRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ButtonRequirementJS"
import {$ItemFilterRequirementJS, $ItemFilterRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$ItemFilterRequirementJS"
import {$FunctionRequirementJS, $FunctionRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$FunctionRequirementJS"
import {$FluidPerTickRequirementJS, $FluidPerTickRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$FluidPerTickRequirementJS"
import {$FluidStackJS, $FluidStackJS$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$DropRequirementJS, $DropRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$DropRequirementJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$DurabilityRequirementJS, $DurabilityRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$DurabilityRequirementJS"
import {$SkyRequirementJS, $SkyRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$SkyRequirementJS"
import {$RequirementIOMode, $RequirementIOMode$Type} from "packages/fr/frinn/custommachinery/api/requirement/$RequirementIOMode"
import {$FluidRequirementJS, $FluidRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$FluidRequirementJS"
import {$StructureRequirementJS, $StructureRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$StructureRequirementJS"
import {$AbstractRecipeJSBuilder, $AbstractRecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/$AbstractRecipeJSBuilder"
import {$MachineAppearanceBuilderJS, $MachineAppearanceBuilderJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/$MachineAppearanceBuilderJS"
import {$RedstoneRequirementJS, $RedstoneRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$RedstoneRequirementJS"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$LootTableRequirementJS, $LootTableRequirementJS$Type} from "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$LootTableRequirementJS"

export class $CustomMachineRecipeBuilderJS extends $AbstractRecipeJSBuilder<($CustomMachineRecipeBuilder)> implements $ItemRequirementJS, $ItemTransformRequirementJS, $DurabilityRequirementJS, $FluidRequirementJS, $FluidPerTickRequirementJS, $EnergyRequirementJS, $EnergyPerTickRequirementJS, $TimeRequirementJS, $PositionRequirementJS, $BiomeRequirementJS, $DimensionRequirementJS, $FuelRequirementJS, $CommandRequirementJS, $EffectRequirementJS, $WeatherRequirementJS, $RedstoneRequirementJS, $LightRequirementJS, $EntityRequirementJS, $BlockRequirementJS, $StructureRequirementJS, $LootTableRequirementJS, $DropRequirementJS, $FunctionRequirementJS, $ButtonRequirementJS, $SkyRequirementJS, $ItemFilterRequirementJS, $ExperienceRequirementJS, $ExperiencePerTickRequirementJS, $ChunkloadRequirementJS {
static readonly "IDS": $Map<($ResourceLocation), ($Map<($ResourceLocation), (integer)>)>
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor()

public "resetOnError"(): $CustomMachineRecipeBuilderJS
public "gui"(...elements: ($JsonObject$Type)[]): $CustomMachineRecipeBuilderJS
public "appearance"(consumer: $Consumer$Type<($MachineAppearanceBuilderJS$Type)>): $CustomMachineRecipeBuilderJS
public "makeBuilder"(): $CustomMachineRecipeBuilder
public "requireItem"(stack: $ItemStack$Type): $RecipeJSBuilder
public "requireItem"(stack: $ItemStack$Type, slot: string): $RecipeJSBuilder
public "requireItemTag"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
public "requireItemTag"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, slot: string): $RecipeJSBuilder
public "requireItemTag"(tag: string, amount: integer): $RecipeJSBuilder
public "requireItemTag"(tag: string): $RecipeJSBuilder
public "produceItem"(stack: $ItemStack$Type, slot: string): $RecipeJSBuilder
public "produceItem"(stack: $ItemStack$Type): $RecipeJSBuilder
public "transformItemTag"(tag: string, inputAmount: integer, inputNBT: $CompoundTag$Type, output: $ItemStack$Type, inputSlot: string, outputSlot: string, nbt: $Function$Type<($Map$Type<(any), (any)>), (any)>): $RecipeJSBuilder
public "transformItemTag"(tag: string, inputAmount: integer, inputNBT: $CompoundTag$Type): $RecipeJSBuilder
public "transformItemTag"(tag: string, inputAmount: integer, inputNBT: $CompoundTag$Type, output: $ItemStack$Type): $RecipeJSBuilder
public "transformItemTag"(tag: string, inputAmount: integer, inputNBT: $CompoundTag$Type, output: $ItemStack$Type, inputSlot: string, outputSlot: string): $RecipeJSBuilder
public "transformItemTag"(tag: string): $RecipeJSBuilder
public "transformItem"(input: $ItemStack$Type): $RecipeJSBuilder
public "transformItem"(input: $ItemStack$Type, output: $ItemStack$Type): $RecipeJSBuilder
public "transformItem"(input: $ItemStack$Type, output: $ItemStack$Type, inputSlot: string, outputSlot: string): $RecipeJSBuilder
public "transformItem"(input: $ItemStack$Type, output: $ItemStack$Type, inputSlot: string, outputSlot: string, nbt: $Function$Type<($Map$Type<(any), (any)>), (any)>): $RecipeJSBuilder
public "damageItemTagNoBreak"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
public "damageItemTagNoBreak"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, slot: string): $RecipeJSBuilder
public "damageItemTagNoBreak"(tag: string, amount: integer): $RecipeJSBuilder
public "repairItem"(stack: $ItemStack$Type, amount: integer): $RecipeJSBuilder
public "repairItem"(stack: $ItemStack$Type, amount: integer, slot: string): $RecipeJSBuilder
public "damageItemTag"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
public "damageItemTag"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, slot: string): $RecipeJSBuilder
public "damageItemTag"(tag: string, amount: integer): $RecipeJSBuilder
public "repairItemTag"(tag: string, amount: integer): $RecipeJSBuilder
public "repairItemTag"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
public "repairItemTag"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, slot: string): $RecipeJSBuilder
public "damageItemNoBreak"(stack: $ItemStack$Type, amount: integer): $RecipeJSBuilder
public "damageItemNoBreak"(stack: $ItemStack$Type, amount: integer, slot: string): $RecipeJSBuilder
public "damageItem"(stack: $ItemStack$Type, amount: integer, slot: string): $RecipeJSBuilder
public "damageItem"(stack: $ItemStack$Type, amount: integer): $RecipeJSBuilder
public "requireFluid"(stack: $FluidStackJS$Type): $RecipeJSBuilder
public "requireFluid"(stack: $FluidStackJS$Type, tank: string): $RecipeJSBuilder
public "produceFluid"(stack: $FluidStackJS$Type, tank: string): $RecipeJSBuilder
public "produceFluid"(stack: $FluidStackJS$Type): $RecipeJSBuilder
public "requireFluidTag"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, tank: string): $RecipeJSBuilder
public "requireFluidTag"(tag: string, amount: integer): $RecipeJSBuilder
public "requireFluidTag"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
public "requireFluidPerTick"(stack: $FluidStackJS$Type): $RecipeJSBuilder
public "requireFluidPerTick"(stack: $FluidStackJS$Type, tank: string): $RecipeJSBuilder
public "requireFluidTagPerTick"(tag: string, amount: integer, thing: any): $RecipeJSBuilder
public "requireFluidTagPerTick"(tag: string, amount: integer, nbt: $Map$Type<(any), (any)>, tank: string): $RecipeJSBuilder
public "requireFluidTagPerTick"(tag: string, amount: integer): $RecipeJSBuilder
public "produceFluidPerTick"(stack: $FluidStackJS$Type): $RecipeJSBuilder
public "produceFluidPerTick"(stack: $FluidStackJS$Type, tank: string): $RecipeJSBuilder
public "requireEnergy"(amount: integer): $RecipeJSBuilder
public "produceEnergy"(amount: integer): $RecipeJSBuilder
public "requireEnergyPerTick"(amount: integer): $RecipeJSBuilder
public "produceEnergyPerTick"(amount: integer): $RecipeJSBuilder
public "requireTime"(time: string): $RecipeJSBuilder
public "requirePosition"(xString: string, yString: string, zString: string): $RecipeJSBuilder
public "biomeBlacklist"(biomes: (string)[]): $RecipeJSBuilder
public "biomeWhitelist"(biomes: (string)[]): $RecipeJSBuilder
public "dimensionWhitelist"(dimensions: (string)[]): $RecipeJSBuilder
public "dimensionBlacklist"(dimensions: (string)[]): $RecipeJSBuilder
public "requireFuel"(): $RecipeJSBuilder
public "requireFuel"(amount: integer): $RecipeJSBuilder
public "runCommandOnEnd"(command: string): $RecipeJSBuilder
public "runCommandOnEnd"(command: string, permissionLevel: integer): $RecipeJSBuilder
public "runCommandOnEnd"(command: string, log: boolean): $RecipeJSBuilder
public "runCommandOnEnd"(command: string, permissionLevel: integer, log: boolean): $RecipeJSBuilder
public "runCommandEachTick"(command: string, log: boolean): $RecipeJSBuilder
public "runCommandEachTick"(command: string, permissionLevel: integer, log: boolean): $RecipeJSBuilder
public "runCommandEachTick"(command: string, permissionLevel: integer): $RecipeJSBuilder
public "runCommandEachTick"(command: string): $RecipeJSBuilder
public "runCommandOnStart"(command: string, permissionLevel: integer): $RecipeJSBuilder
public "runCommandOnStart"(command: string): $RecipeJSBuilder
public "runCommandOnStart"(command: string, log: boolean): $RecipeJSBuilder
public "runCommandOnStart"(command: string, permissionLevel: integer, log: boolean): $RecipeJSBuilder
public "giveEffectOnEnd"(effect: string, time: integer, radius: integer, level: integer, filter: (string)[]): $RecipeJSBuilder
public "giveEffectOnEnd"(effect: string, time: integer, radius: integer, filter: (string)[]): $RecipeJSBuilder
public "giveEffectOnEnd"(effect: string, time: integer, radius: integer, level: integer): $RecipeJSBuilder
public "giveEffectOnEnd"(effect: string, time: integer, radius: integer): $RecipeJSBuilder
public "giveEffectEachTick"(effect: string, time: integer, radius: integer, levelOrFilter: any): $RecipeJSBuilder
public "giveEffectEachTick"(effect: string, time: integer, radius: integer, level: integer, filter: (string)[]): $RecipeJSBuilder
public "giveEffectEachTick"(effect: string, time: integer, radius: integer): $RecipeJSBuilder
public "requireWeatherOnMachine"(weather: string): $RecipeJSBuilder
public "requireWeather"(weather: string): $RecipeJSBuilder
public "requireRedstone"(power: string): $RecipeJSBuilder
public "requireSkyLight"(level: string): $RecipeJSBuilder
public "requireBlockLight"(level: string): $RecipeJSBuilder
public "killEntitiesOnStart"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "requireEntitiesHealth"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "consumeEntityHealthOnEnd"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "consumeEntityHealthOnStart"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "requireEntities"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "killEntitiesOnEnd"(amount: integer, radius: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "breakAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "breakAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[]): $RecipeJSBuilder
public "breakAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "breakAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "destroyBlockOnStart"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "destroyBlockOnStart"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "destroyAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "destroyAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[]): $RecipeJSBuilder
public "destroyAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "destroyAndPlaceBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "breakAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "breakAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "breakAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[]): $RecipeJSBuilder
public "breakAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "destroyAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[]): $RecipeJSBuilder
public "destroyAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, filter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "destroyAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "destroyAndPlaceBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "requireBlock"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "requireBlock"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, comparator: string): $RecipeJSBuilder
public "requireBlock"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "breakBlockOnStart"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "breakBlockOnStart"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "placeBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "placeBlockOnStart"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "destroyBlockOnEnd"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "destroyBlockOnEnd"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "breakBlockOnEnd"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "breakBlockOnEnd"(filter: (string)[], whitelist: boolean, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "placeBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer): $RecipeJSBuilder
public "placeBlockOnEnd"(block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer): $RecipeJSBuilder
public "blockRequirement"(mode: $RequirementIOMode$Type, action: $BlockRequirement$ACTION$Type, block: string, startX: integer, startY: integer, startZ: integer, endX: integer, endY: integer, endZ: integer, amount: integer, comparator: string, stringFilter: (string)[], whitelist: boolean): $RecipeJSBuilder
public "destroyStructure"(pattern: ((string)[])[], keys: $Map$Type<(string), (string)>): $RecipeJSBuilder
public "placeStructure"(pattern: ((string)[])[], keys: $Map$Type<(string), (string)>, drops: boolean): $RecipeJSBuilder
public "requireStructure"(pattern: ((string)[])[], keys: $Map$Type<(string), (string)>): $RecipeJSBuilder
public "requireStructure"(pattern: ((string)[])[], keys: $Map$Type<(string), (string)>, action: $StructureRequirement$Action$Type): $RecipeJSBuilder
public "breakStructure"(pattern: ((string)[])[], keys: $Map$Type<(string), (string)>): $RecipeJSBuilder
public "lootTableOutput"(lootTable: string): $RecipeJSBuilder
public "lootTableOutput"(lootTable: string, luck: float): $RecipeJSBuilder
public "consumeAnyDropOnStart"(amount: integer, radius: integer): $RecipeJSBuilder
public "consumeAnyDropOnEnd"(amount: integer, radius: integer): $RecipeJSBuilder
public "consumeDropsOnStart"(items: ($ItemStack$Type)[], amount: integer, radius: integer): $RecipeJSBuilder
public "consumeDropsOnStart"(items: ($ItemStack$Type)[], amount: integer, radius: integer, whitelist: boolean): $RecipeJSBuilder
public "consumeDropOnEnd"(item: $ItemStack$Type, amount: integer, radius: integer): $RecipeJSBuilder
public "consumeDropsOnEnd"(items: ($ItemStack$Type)[], amount: integer, radius: integer, whitelist: boolean): $RecipeJSBuilder
public "consumeDropsOnEnd"(items: ($ItemStack$Type)[], amount: integer, radius: integer): $RecipeJSBuilder
public "checkDrops"(items: ($ItemStack$Type)[], amount: integer, radius: integer, whitelist: boolean): $RecipeJSBuilder
public "checkDrops"(items: ($ItemStack$Type)[], amount: integer, radius: integer): $RecipeJSBuilder
public "dropItemOnStart"(stack: $ItemStack$Type): $RecipeJSBuilder
public "checkAnyDrop"(amount: integer, radius: integer): $RecipeJSBuilder
public "consumeDropOnStart"(item: $ItemStack$Type, amount: integer, radius: integer): $RecipeJSBuilder
public "checkDrop"(item: $ItemStack$Type, amount: integer, radius: integer): $RecipeJSBuilder
public "dropItemOnEnd"(stack: $ItemStack$Type): $RecipeJSBuilder
public "requireFunctionOnStart"(arg0: $RecipeFunction$Type): $RecipeJSBuilder
public "requireFunctionEachTick"(arg0: $RecipeFunction$Type): $RecipeJSBuilder
public "requireFunctionOnEnd"(arg0: $RecipeFunction$Type): $RecipeJSBuilder
public "requireFunctionToStart"(arg0: $RecipeFunction$Type): $RecipeJSBuilder
public "requireButtonPressed"(id: string): $RecipeJSBuilder
public "requireButtonReleased"(id: string): $RecipeJSBuilder
public "mustSeeSky"(): $RecipeJSBuilder
public "requireItemFilter"(ingredient: $Ingredient$Type): $RecipeJSBuilder
public "requireItemFilter"(ingredient: $Ingredient$Type, slot: string): $RecipeJSBuilder
public "produceXp"(xp: integer): $RecipeJSBuilder
public "requireLevel"(levels: integer): $RecipeJSBuilder
public "produceLevel"(levels: integer): $RecipeJSBuilder
public "requireXp"(xp: integer): $RecipeJSBuilder
public "produceLevelPerTick"(levels: integer): $RecipeJSBuilder
public "requireLevelPerTick"(levels: integer): $RecipeJSBuilder
public "requireXpPerTick"(xp: integer): $RecipeJSBuilder
public "produceXpPerTick"(xp: integer): $RecipeJSBuilder
public "chunkload"(): $RecipeJSBuilder
public "chunkload"(radius: integer): $RecipeJSBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMachineRecipeBuilderJS$Type = ($CustomMachineRecipeBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMachineRecipeBuilderJS_ = $CustomMachineRecipeBuilderJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/impl/component/config/$SideConfig" {
import {$ISideConfigComponent, $ISideConfigComponent$Type} from "packages/fr/frinn/custommachinery/api/component/$ISideConfigComponent"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$RelativeSide, $RelativeSide$Type} from "packages/fr/frinn/custommachinery/impl/component/config/$RelativeSide"
import {$SideMode, $SideMode$Type} from "packages/fr/frinn/custommachinery/impl/component/config/$SideMode"
import {$TriConsumer, $TriConsumer$Type} from "packages/org/apache/logging/log4j/util/$TriConsumer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SideConfig {

constructor(component: $ISideConfigComponent$Type, defaultConfig: $Map$Type<($RelativeSide$Type), ($SideMode$Type)>, autoInput: boolean, autoOutput: boolean, enabled: boolean)

public "set"(config: $SideConfig$Type): void
public "copy"(): $SideConfig
public "isEnabled"(): boolean
public "serialize"(): $Tag
public "deserialize"(tag: $Tag$Type): void
public "getSideMode"(direction: $Direction$Type): $SideMode
public "getSideMode"(side: $RelativeSide$Type): $SideMode
public "setSideMode"(side: $RelativeSide$Type, mode: $SideMode$Type): void
public "isAutoInput"(): boolean
public "setAutoInput"(autoInput: boolean): void
public "isAutoOutput"(): boolean
public "setAutoOutput"(autoOutput: boolean): void
public "setCallback"(callback: $TriConsumer$Type<($RelativeSide$Type), ($SideMode$Type), ($SideMode$Type)>): void
public "getComponent"(): $ISideConfigComponent
get "enabled"(): boolean
get "autoInput"(): boolean
set "autoInput"(value: boolean)
get "autoOutput"(): boolean
set "autoOutput"(value: boolean)
set "callback"(value: $TriConsumer$Type<($RelativeSide$Type), ($SideMode$Type), ($SideMode$Type)>)
get "component"(): $ISideConfigComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SideConfig$Type = ($SideConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SideConfig_ = $SideConfig$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder" {
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $RecipeJSBuilder {

 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $RecipeJSBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeJSBuilder$Type = ($RecipeJSBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeJSBuilder_ = $RecipeJSBuilder$Type;
}}
declare module "packages/fr/frinn/custommachinery/impl/codec/$NamedRecordCodec$Instance$Mu" {
import {$Applicative$Mu, $Applicative$Mu$Type} from "packages/com/mojang/datafixers/kinds/$Applicative$Mu"

export class $NamedRecordCodec$Instance$Mu<O> implements $Applicative$Mu {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedRecordCodec$Instance$Mu$Type<O> = ($NamedRecordCodec$Instance$Mu<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedRecordCodec$Instance$Mu_<O> = $NamedRecordCodec$Instance$Mu$Type<(O)>;
}}
declare module "packages/fr/frinn/custommachinery/api/upgrade/$IRecipeModifier$OPERATION" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"

export class $IRecipeModifier$OPERATION extends $Enum<($IRecipeModifier$OPERATION)> {
static readonly "ADDITION": $IRecipeModifier$OPERATION
static readonly "MULTIPLICATION": $IRecipeModifier$OPERATION
static readonly "EXPONENTIAL": $IRecipeModifier$OPERATION
static readonly "CODEC": $NamedCodec<($IRecipeModifier$OPERATION)>


public static "value"(value: string): $IRecipeModifier$OPERATION
public static "values"(): ($IRecipeModifier$OPERATION)[]
public static "valueOf"(name: string): $IRecipeModifier$OPERATION
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeModifier$OPERATION$Type = (("exponential") | ("multiplication") | ("addition")) | ($IRecipeModifier$OPERATION);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeModifier$OPERATION_ = $IRecipeModifier$OPERATION$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/upgrade/$RecipeModifier" {
import {$IRecipeModifier$OPERATION, $IRecipeModifier$OPERATION$Type} from "packages/fr/frinn/custommachinery/api/upgrade/$IRecipeModifier$OPERATION"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRecipeModifier, $IRecipeModifier$Type} from "packages/fr/frinn/custommachinery/api/upgrade/$IRecipeModifier"
import {$RequirementIOMode, $RequirementIOMode$Type} from "packages/fr/frinn/custommachinery/api/requirement/$RequirementIOMode"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$RequirementType, $RequirementType$Type} from "packages/fr/frinn/custommachinery/api/requirement/$RequirementType"
import {$NamedCodec, $NamedCodec$Type} from "packages/fr/frinn/custommachinery/api/codec/$NamedCodec"

export class $RecipeModifier implements $IRecipeModifier {
static readonly "CODEC": $NamedCodec<($RecipeModifier)>
static readonly "RAND": $Random
readonly "requirementType": $RequirementType<(any)>
readonly "target": string
readonly "mode": $RequirementIOMode
readonly "modifier": double
readonly "chance": double
readonly "max": double
readonly "min": double
readonly "tooltip": $Component

constructor(requirementType: $RequirementType$Type<(any)>, mode: $RequirementIOMode$Type, modifier: double, target: string, chance: double, max: double, min: double, tooltip: $Component$Type)

public "getOperation"(): $IRecipeModifier$OPERATION
public "shouldApply"(type: $RequirementType$Type<(any)>, mode: $RequirementIOMode$Type, target: string): boolean
public "getTooltip"(): $Component
public "apply"(arg0: double, arg1: integer): double
public "getDefaultTooltip"(): $Component
get "operation"(): $IRecipeModifier$OPERATION
get "tooltip"(): $Component
get "defaultTooltip"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeModifier$Type = ($RecipeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeModifier_ = $RecipeModifier$Type;
}}
declare module "packages/fr/frinn/custommachinery/api/integration/jei/$IDisplayInfo$ClickAction" {
import {$ICustomMachine, $ICustomMachine$Type} from "packages/fr/frinn/custommachinery/api/machine/$ICustomMachine"
import {$IMachineRecipe, $IMachineRecipe$Type} from "packages/fr/frinn/custommachinery/api/crafting/$IMachineRecipe"

export interface $IDisplayInfo$ClickAction {

 "handleClick"(arg0: $ICustomMachine$Type, arg1: $IMachineRecipe$Type, arg2: integer): void

(arg0: $ICustomMachine$Type, arg1: $IMachineRecipe$Type, arg2: integer): void
}

export namespace $IDisplayInfo$ClickAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDisplayInfo$ClickAction$Type = ($IDisplayInfo$ClickAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDisplayInfo$ClickAction_ = $IDisplayInfo$ClickAction$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$TimeRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"

export interface $TimeRequirementJS extends $RecipeJSBuilder {

 "requireTime"(time: string): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $TimeRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeRequirementJS$Type = ($TimeRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimeRequirementJS_ = $TimeRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/requirements/$StructureRequirementJS" {
import {$RecipeJSBuilder, $RecipeJSBuilder$Type} from "packages/fr/frinn/custommachinery/api/integration/kubejs/$RecipeJSBuilder"
import {$IRequirement, $IRequirement$Type} from "packages/fr/frinn/custommachinery/api/requirement/$IRequirement"
import {$StructureRequirement$Action, $StructureRequirement$Action$Type} from "packages/fr/frinn/custommachinery/common/requirement/$StructureRequirement$Action"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $StructureRequirementJS extends $RecipeJSBuilder {

 "destroyStructure"(pattern: ((string)[])[], keys: $Map$Type<(string), (string)>): $RecipeJSBuilder
 "placeStructure"(pattern: ((string)[])[], keys: $Map$Type<(string), (string)>, drops: boolean): $RecipeJSBuilder
 "requireStructure"(pattern: ((string)[])[], keys: $Map$Type<(string), (string)>): $RecipeJSBuilder
 "requireStructure"(pattern: ((string)[])[], keys: $Map$Type<(string), (string)>, action: $StructureRequirement$Action$Type): $RecipeJSBuilder
 "breakStructure"(pattern: ((string)[])[], keys: $Map$Type<(string), (string)>): $RecipeJSBuilder
 "error"(arg0: string, ...arg1: (any)[]): $RecipeJSBuilder
 "addRequirement"(arg0: $IRequirement$Type<(any)>): $RecipeJSBuilder
}

export namespace $StructureRequirementJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureRequirementJS$Type = ($StructureRequirementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureRequirementJS_ = $StructureRequirementJS$Type;
}}
declare module "packages/fr/frinn/custommachinery/common/integration/kubejs/$MachineAppearanceBuilderJS" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$MachineAppearance, $MachineAppearance$Type} from "packages/fr/frinn/custommachinery/common/machine/$MachineAppearance"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $MachineAppearanceBuilderJS {

constructor()

public "build"(): $MachineAppearance
public "block"(block: $ResourceLocation$Type): $MachineAppearanceBuilderJS
public "color"(color: integer): $MachineAppearanceBuilderJS
public "item"(item: $ResourceLocation$Type): $MachineAppearanceBuilderJS
public "light"(light: integer): $MachineAppearanceBuilderJS
public "requiresTool"(requires: boolean): $MachineAppearanceBuilderJS
public "hardness"(hardness: float): $MachineAppearanceBuilderJS
public "resistance"(resistance: float): $MachineAppearanceBuilderJS
public "toolType"(tools: ($ResourceLocation$Type)[]): $MachineAppearanceBuilderJS
public "miningLevel"(key: $ResourceLocation$Type): $MachineAppearanceBuilderJS
public "interactionSound"(sound: $Block$Type): $MachineAppearanceBuilderJS
public "ambientSound"(sound: $SoundEvent$Type): $MachineAppearanceBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineAppearanceBuilderJS$Type = ($MachineAppearanceBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineAppearanceBuilderJS_ = $MachineAppearanceBuilderJS$Type;
}}

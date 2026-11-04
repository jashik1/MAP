declare module "packages/kotlinx/serialization/json/$JsonConfiguration" {
import {$ClassDiscriminatorMode, $ClassDiscriminatorMode$Type} from "packages/kotlinx/serialization/json/$ClassDiscriminatorMode"
import {$JsonNamingStrategy, $JsonNamingStrategy$Type} from "packages/kotlinx/serialization/json/$JsonNamingStrategy"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $JsonConfiguration {

constructor()
constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: string, arg7: boolean, arg8: boolean, arg9: string, arg10: boolean, arg11: boolean, arg12: $JsonNamingStrategy$Type, arg13: boolean, arg14: boolean, arg15: boolean, arg16: $ClassDiscriminatorMode$Type, arg17: integer, arg18: $DefaultConstructorMarker$Type)
constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: string, arg7: boolean, arg8: boolean, arg9: string, arg10: boolean, arg11: boolean, arg12: $JsonNamingStrategy$Type, arg13: boolean, arg14: boolean, arg15: boolean, arg16: $ClassDiscriminatorMode$Type)

public "toString"(): string
public "isLenient"(): boolean
public "getPrettyPrint"(): boolean
public "getExplicitNulls"(): boolean
public "getEncodeDefaults"(): boolean
public "getAllowComments"(): boolean
public "getNamingStrategy"(): $JsonNamingStrategy
public "getIgnoreUnknownKeys"(): boolean
public "getPrettyPrintIndent"(): string
public "getCoerceInputValues"(): boolean
public "getClassDiscriminatorMode"(): $ClassDiscriminatorMode
public "getUseAlternativeNames"(): boolean
public "getDecodeEnumsCaseInsensitive"(): boolean
public "getClassDiscriminator"(): string
public "getAllowTrailingComma"(): boolean
public "getAllowSpecialFloatingPointValues"(): boolean
public "setClassDiscriminatorMode"(arg0: $ClassDiscriminatorMode$Type): void
public "getAllowStructuredMapKeys"(): boolean
public "getUseArrayPolymorphism"(): boolean
get "lenient"(): boolean
get "prettyPrint"(): boolean
get "explicitNulls"(): boolean
get "encodeDefaults"(): boolean
get "allowComments"(): boolean
get "namingStrategy"(): $JsonNamingStrategy
get "ignoreUnknownKeys"(): boolean
get "prettyPrintIndent"(): string
get "coerceInputValues"(): boolean
get "classDiscriminatorMode"(): $ClassDiscriminatorMode
get "useAlternativeNames"(): boolean
get "decodeEnumsCaseInsensitive"(): boolean
get "classDiscriminator"(): string
get "allowTrailingComma"(): boolean
get "allowSpecialFloatingPointValues"(): boolean
set "classDiscriminatorMode"(value: $ClassDiscriminatorMode$Type)
get "allowStructuredMapKeys"(): boolean
get "useArrayPolymorphism"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonConfiguration$Type = ($JsonConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonConfiguration_ = $JsonConfiguration$Type;
}}
declare module "packages/kotlinx/serialization/$StringFormat" {
import {$SerialFormat, $SerialFormat$Type} from "packages/kotlinx/serialization/$SerialFormat"
import {$DeserializationStrategy, $DeserializationStrategy$Type} from "packages/kotlinx/serialization/$DeserializationStrategy"
import {$SerializersModule, $SerializersModule$Type} from "packages/kotlinx/serialization/modules/$SerializersModule"
import {$SerializationStrategy, $SerializationStrategy$Type} from "packages/kotlinx/serialization/$SerializationStrategy"

export interface $StringFormat extends $SerialFormat {

 "encodeToString"<T>(arg0: $SerializationStrategy$Type<(any)>, arg1: T): string
 "decodeFromString"<T>(arg0: $DeserializationStrategy$Type<(any)>, arg1: string): T
 "getSerializersModule"(): $SerializersModule
}

export namespace $StringFormat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringFormat$Type = ($StringFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringFormat_ = $StringFormat$Type;
}}
declare module "packages/kotlinx/serialization/json/$Json$Default" {
import {$Json, $Json$Type} from "packages/kotlinx/serialization/json/$Json"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $Json$Default extends $Json {
static readonly "Default": $Json$Default

constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Json$Default$Type = ($Json$Default);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Json$Default_ = $Json$Default$Type;
}}
declare module "packages/kotlinx/serialization/modules/$SerializersModuleCollector" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$KClass, $KClass$Type} from "packages/kotlin/reflect/$KClass"
import {$Function1, $Function1$Type} from "packages/kotlin/jvm/functions/$Function1"

export interface $SerializersModuleCollector {

 "contextual"<T>(arg0: $KClass$Type<(T)>, arg1: $KSerializer$Type<(T)>): void
 "contextual"<T>(arg0: $KClass$Type<(T)>, arg1: $Function1$Type<(any), (any)>): void
 "polymorphic"<Base, Sub extends Base>(arg0: $KClass$Type<(Base)>, arg1: $KClass$Type<(Sub)>, arg2: $KSerializer$Type<(Sub)>): void
 "polymorphicDefaultSerializer"<Base>(arg0: $KClass$Type<(Base)>, arg1: $Function1$Type<(any), (any)>): void
 "polymorphicDefaultDeserializer"<Base>(arg0: $KClass$Type<(Base)>, arg1: $Function1$Type<(any), (any)>): void
 "polymorphicDefault"<Base>(arg0: $KClass$Type<(Base)>, arg1: $Function1$Type<(any), (any)>): void
}

export namespace $SerializersModuleCollector {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializersModuleCollector$Type = ($SerializersModuleCollector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializersModuleCollector_ = $SerializersModuleCollector$Type;
}}
declare module "packages/kotlinx/serialization/internal/$SerializationConstructorMarker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SerializationConstructorMarker {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationConstructorMarker$Type = ($SerializationConstructorMarker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializationConstructorMarker_ = $SerializationConstructorMarker$Type;
}}
declare module "packages/kotlinx/serialization/descriptors/$SerialKind" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $SerialKind {

constructor(arg0: $DefaultConstructorMarker$Type)

public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerialKind$Type = ($SerialKind);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerialKind_ = $SerialKind$Type;
}}
declare module "packages/kotlinx/serialization/encoding/$CompositeEncoder" {
import {$SerialDescriptor, $SerialDescriptor$Type} from "packages/kotlinx/serialization/descriptors/$SerialDescriptor"
import {$Encoder, $Encoder$Type} from "packages/kotlinx/serialization/encoding/$Encoder"
import {$SerializersModule, $SerializersModule$Type} from "packages/kotlinx/serialization/modules/$SerializersModule"
import {$SerializationStrategy, $SerializationStrategy$Type} from "packages/kotlinx/serialization/$SerializationStrategy"

export interface $CompositeEncoder {

 "encodeIntElement"(arg0: $SerialDescriptor$Type, arg1: integer, arg2: integer): void
 "encodeFloatElement"(arg0: $SerialDescriptor$Type, arg1: integer, arg2: float): void
 "endStructure"(arg0: $SerialDescriptor$Type): void
 "encodeShortElement"(arg0: $SerialDescriptor$Type, arg1: integer, arg2: short): void
 "encodeCharElement"(arg0: $SerialDescriptor$Type, arg1: integer, arg2: character): void
 "encodeByteElement"(arg0: $SerialDescriptor$Type, arg1: integer, arg2: byte): void
 "encodeLongElement"(arg0: $SerialDescriptor$Type, arg1: integer, arg2: long): void
 "getSerializersModule"(): $SerializersModule
 "encodeSerializableElement"<T>(arg0: $SerialDescriptor$Type, arg1: integer, arg2: $SerializationStrategy$Type<(any)>, arg3: T): void
 "shouldEncodeElementDefault"(arg0: $SerialDescriptor$Type, arg1: integer): boolean
 "encodeNullableSerializableElement"<T>(arg0: $SerialDescriptor$Type, arg1: integer, arg2: $SerializationStrategy$Type<(any)>, arg3: T): void
 "encodeBooleanElement"(arg0: $SerialDescriptor$Type, arg1: integer, arg2: boolean): void
 "encodeStringElement"(arg0: $SerialDescriptor$Type, arg1: integer, arg2: string): void
 "encodeInlineElement"(arg0: $SerialDescriptor$Type, arg1: integer): $Encoder
 "encodeDoubleElement"(arg0: $SerialDescriptor$Type, arg1: integer, arg2: double): void
}

export namespace $CompositeEncoder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeEncoder$Type = ($CompositeEncoder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeEncoder_ = $CompositeEncoder$Type;
}}
declare module "packages/kotlinx/serialization/json/$JsonElement" {
import {$JsonElement$Companion, $JsonElement$Companion$Type} from "packages/kotlinx/serialization/json/$JsonElement$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $JsonElement {
static readonly "Companion": $JsonElement$Companion

constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonElement$Type = ($JsonElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonElement_ = $JsonElement$Type;
}}
declare module "packages/kotlinx/serialization/encoding/$Encoder" {
import {$SerialDescriptor, $SerialDescriptor$Type} from "packages/kotlinx/serialization/descriptors/$SerialDescriptor"
import {$SerializersModule, $SerializersModule$Type} from "packages/kotlinx/serialization/modules/$SerializersModule"
import {$CompositeEncoder, $CompositeEncoder$Type} from "packages/kotlinx/serialization/encoding/$CompositeEncoder"
import {$SerializationStrategy, $SerializationStrategy$Type} from "packages/kotlinx/serialization/$SerializationStrategy"

export interface $Encoder {

 "beginStructure"(arg0: $SerialDescriptor$Type): $CompositeEncoder
 "encodeBoolean"(arg0: boolean): void
 "encodeString"(arg0: string): void
 "encodeInline"(arg0: $SerialDescriptor$Type): $Encoder
 "encodeInt"(arg0: integer): void
 "encodeChar"(arg0: character): void
 "encodeShort"(arg0: short): void
 "encodeEnum"(arg0: $SerialDescriptor$Type, arg1: integer): void
 "encodeNull"(): void
 "encodeLong"(arg0: long): void
 "encodeDouble"(arg0: double): void
 "encodeFloat"(arg0: float): void
 "encodeNotNullMark"(): void
 "encodeByte"(arg0: byte): void
 "beginCollection"(arg0: $SerialDescriptor$Type, arg1: integer): $CompositeEncoder
 "getSerializersModule"(): $SerializersModule
 "encodeSerializableValue"<T>(arg0: $SerializationStrategy$Type<(any)>, arg1: T): void
 "encodeNullableSerializableValue"<T>(arg0: $SerializationStrategy$Type<(any)>, arg1: T): void
}

export namespace $Encoder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Encoder$Type = ($Encoder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Encoder_ = $Encoder$Type;
}}
declare module "packages/kotlinx/serialization/encoding/$CompositeDecoder$Companion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CompositeDecoder$Companion {
static readonly "DECODE_DONE": integer
static readonly "UNKNOWN_NAME": integer


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeDecoder$Companion$Type = ($CompositeDecoder$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeDecoder$Companion_ = $CompositeDecoder$Companion$Type;
}}
declare module "packages/kotlinx/serialization/$KSerializer" {
import {$SerialDescriptor, $SerialDescriptor$Type} from "packages/kotlinx/serialization/descriptors/$SerialDescriptor"
import {$Decoder, $Decoder$Type} from "packages/kotlinx/serialization/encoding/$Decoder"
import {$DeserializationStrategy, $DeserializationStrategy$Type} from "packages/kotlinx/serialization/$DeserializationStrategy"
import {$Encoder, $Encoder$Type} from "packages/kotlinx/serialization/encoding/$Encoder"
import {$SerializationStrategy, $SerializationStrategy$Type} from "packages/kotlinx/serialization/$SerializationStrategy"

export interface $KSerializer<T> extends $SerializationStrategy<(T)>, $DeserializationStrategy<(T)> {

 "getDescriptor"(): $SerialDescriptor
 "serialize"(arg0: $Encoder$Type, arg1: T): void
 "deserialize"(arg0: $Decoder$Type): T
}

export namespace $KSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KSerializer$Type<T> = ($KSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KSerializer_<T> = $KSerializer$Type<(T)>;
}}
declare module "packages/kotlinx/serialization/json/$Json" {
import {$JsonConfiguration, $JsonConfiguration$Type} from "packages/kotlinx/serialization/json/$JsonConfiguration"
import {$JsonElement, $JsonElement$Type} from "packages/kotlinx/serialization/json/$JsonElement"
import {$StringFormat, $StringFormat$Type} from "packages/kotlinx/serialization/$StringFormat"
import {$DeserializationStrategy, $DeserializationStrategy$Type} from "packages/kotlinx/serialization/$DeserializationStrategy"
import {$Json$Default, $Json$Default$Type} from "packages/kotlinx/serialization/json/$Json$Default"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$SerializersModule, $SerializersModule$Type} from "packages/kotlinx/serialization/modules/$SerializersModule"
import {$DescriptorSchemaCache, $DescriptorSchemaCache$Type} from "packages/kotlinx/serialization/json/internal/$DescriptorSchemaCache"
import {$SerializationStrategy, $SerializationStrategy$Type} from "packages/kotlinx/serialization/$SerializationStrategy"

export class $Json implements $StringFormat {
static readonly "Default": $Json$Default

constructor(arg0: $JsonConfiguration$Type, arg1: $SerializersModule$Type, arg2: $DefaultConstructorMarker$Type)

public "encodeToString"<T>(arg0: $SerializationStrategy$Type<(any)>, arg1: T): string
public "parseToJsonElement"(arg0: string): $JsonElement
public "decodeFromString"<T>(arg0: $DeserializationStrategy$Type<(any)>, arg1: string): T
public "getConfiguration"(): $JsonConfiguration
public "decodeFromJsonElement"<T>(arg0: $DeserializationStrategy$Type<(any)>, arg1: $JsonElement$Type): T
public "getSerializersModule"(): $SerializersModule
public "encodeToJsonElement"<T>(arg0: $SerializationStrategy$Type<(any)>, arg1: T): $JsonElement
public "get_schemaCache$kotlinx_serialization_json"(): $DescriptorSchemaCache
get "configuration"(): $JsonConfiguration
get "serializersModule"(): $SerializersModule
get "_schemaCache$kotlinx_serialization_json"(): $DescriptorSchemaCache
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Json$Type = ($Json);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Json_ = $Json$Type;
}}
declare module "packages/kotlinx/serialization/$SerializationStrategy" {
import {$SerialDescriptor, $SerialDescriptor$Type} from "packages/kotlinx/serialization/descriptors/$SerialDescriptor"
import {$Encoder, $Encoder$Type} from "packages/kotlinx/serialization/encoding/$Encoder"

export interface $SerializationStrategy<T> {

 "getDescriptor"(): $SerialDescriptor
 "serialize"(arg0: $Encoder$Type, arg1: T): void
}

export namespace $SerializationStrategy {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationStrategy$Type<T> = ($SerializationStrategy<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializationStrategy_<T> = $SerializationStrategy$Type<(T)>;
}}
declare module "packages/kotlinx/serialization/encoding/$Decoder" {
import {$SerialDescriptor, $SerialDescriptor$Type} from "packages/kotlinx/serialization/descriptors/$SerialDescriptor"
import {$CompositeDecoder, $CompositeDecoder$Type} from "packages/kotlinx/serialization/encoding/$CompositeDecoder"
import {$DeserializationStrategy, $DeserializationStrategy$Type} from "packages/kotlinx/serialization/$DeserializationStrategy"
import {$SerializersModule, $SerializersModule$Type} from "packages/kotlinx/serialization/modules/$SerializersModule"

export interface $Decoder {

 "beginStructure"(arg0: $SerialDescriptor$Type): $CompositeDecoder
 "decodeNull"(): void
 "decodeNotNullMark"(): boolean
 "decodeLong"(): long
 "decodeShort"(): short
 "decodeBoolean"(): boolean
 "decodeByte"(): byte
 "decodeInt"(): integer
 "decodeDouble"(): double
 "decodeInline"(arg0: $SerialDescriptor$Type): $Decoder
 "decodeChar"(): character
 "decodeFloat"(): float
 "decodeEnum"(arg0: $SerialDescriptor$Type): integer
 "decodeString"(): string
 "decodeSerializableValue"<T>(arg0: $DeserializationStrategy$Type<(any)>): T
 "getSerializersModule"(): $SerializersModule
 "decodeNullableSerializableValue"<T>(arg0: $DeserializationStrategy$Type<(any)>): T
}

export namespace $Decoder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Decoder$Type = ($Decoder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Decoder_ = $Decoder$Type;
}}
declare module "packages/kotlinx/serialization/json/$JsonElement$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$JsonElement, $JsonElement$Type} from "packages/kotlinx/serialization/json/$JsonElement"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $JsonElement$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($JsonElement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonElement$Companion$Type = ($JsonElement$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonElement$Companion_ = $JsonElement$Companion$Type;
}}
declare module "packages/kotlinx/serialization/$DeserializationStrategy" {
import {$SerialDescriptor, $SerialDescriptor$Type} from "packages/kotlinx/serialization/descriptors/$SerialDescriptor"
import {$Decoder, $Decoder$Type} from "packages/kotlinx/serialization/encoding/$Decoder"

export interface $DeserializationStrategy<T> {

 "getDescriptor"(): $SerialDescriptor
 "deserialize"(arg0: $Decoder$Type): T
}

export namespace $DeserializationStrategy {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeserializationStrategy$Type<T> = ($DeserializationStrategy<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeserializationStrategy_<T> = $DeserializationStrategy$Type<(T)>;
}}
declare module "packages/kotlinx/serialization/descriptors/$SerialDescriptor" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$SerialKind, $SerialKind$Type} from "packages/kotlinx/serialization/descriptors/$SerialKind"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $SerialDescriptor {

 "getAnnotations"(): $List<($Annotation)>
 "getElementDescriptor"(arg0: integer): $SerialDescriptor
 "isInline"(): boolean
 "getElementName"(arg0: integer): string
 "getKind"(): $SerialKind
 "getSerialName"(): string
 "isElementOptional"(arg0: integer): boolean
 "getElementsCount"(): integer
 "isNullable"(): boolean
 "getElementIndex"(arg0: string): integer
 "getElementAnnotations"(arg0: integer): $List<($Annotation)>
}

export namespace $SerialDescriptor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerialDescriptor$Type = ($SerialDescriptor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerialDescriptor_ = $SerialDescriptor$Type;
}}
declare module "packages/kotlinx/serialization/json/$JsonNamingStrategy" {
import {$SerialDescriptor, $SerialDescriptor$Type} from "packages/kotlinx/serialization/descriptors/$SerialDescriptor"
import {$JsonNamingStrategy$Builtins, $JsonNamingStrategy$Builtins$Type} from "packages/kotlinx/serialization/json/$JsonNamingStrategy$Builtins"

export interface $JsonNamingStrategy {

 "serialNameForJson"(arg0: $SerialDescriptor$Type, arg1: integer, arg2: string): string

(arg0: $SerialDescriptor$Type, arg1: integer, arg2: string): string
}

export namespace $JsonNamingStrategy {
const Builtins: $JsonNamingStrategy$Builtins
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonNamingStrategy$Type = ($JsonNamingStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonNamingStrategy_ = $JsonNamingStrategy$Type;
}}
declare module "packages/kotlinx/serialization/json/$JsonNamingStrategy$Builtins" {
import {$JsonNamingStrategy, $JsonNamingStrategy$Type} from "packages/kotlinx/serialization/json/$JsonNamingStrategy"

export class $JsonNamingStrategy$Builtins {


public "getSnakeCase"(): $JsonNamingStrategy
public "getKebabCase"(): $JsonNamingStrategy
get "snakeCase"(): $JsonNamingStrategy
get "kebabCase"(): $JsonNamingStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonNamingStrategy$Builtins$Type = ($JsonNamingStrategy$Builtins);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonNamingStrategy$Builtins_ = $JsonNamingStrategy$Builtins$Type;
}}
declare module "packages/kotlinx/serialization/$SerialFormat" {
import {$SerializersModule, $SerializersModule$Type} from "packages/kotlinx/serialization/modules/$SerializersModule"

export interface $SerialFormat {

 "getSerializersModule"(): $SerializersModule

(): $SerializersModule
}

export namespace $SerialFormat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerialFormat$Type = ($SerialFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerialFormat_ = $SerialFormat$Type;
}}
declare module "packages/kotlinx/serialization/json/internal/$DescriptorSchemaCache$Key" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DescriptorSchemaCache$Key<T> {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DescriptorSchemaCache$Key$Type<T> = ($DescriptorSchemaCache$Key<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DescriptorSchemaCache$Key_<T> = $DescriptorSchemaCache$Key$Type<(T)>;
}}
declare module "packages/kotlinx/serialization/json/internal/$DescriptorSchemaCache" {
import {$SerialDescriptor, $SerialDescriptor$Type} from "packages/kotlinx/serialization/descriptors/$SerialDescriptor"
import {$DescriptorSchemaCache$Key, $DescriptorSchemaCache$Key$Type} from "packages/kotlinx/serialization/json/internal/$DescriptorSchemaCache$Key"
import {$Function0, $Function0$Type} from "packages/kotlin/jvm/functions/$Function0"

export class $DescriptorSchemaCache {

constructor()

public "get"<T>(arg0: $SerialDescriptor$Type, arg1: $DescriptorSchemaCache$Key$Type<(T)>): T
public "set"<T>(arg0: $SerialDescriptor$Type, arg1: $DescriptorSchemaCache$Key$Type<(T)>, arg2: T): void
public "getOrPut"<T>(arg0: $SerialDescriptor$Type, arg1: $DescriptorSchemaCache$Key$Type<(T)>, arg2: $Function0$Type<(any)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DescriptorSchemaCache$Type = ($DescriptorSchemaCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DescriptorSchemaCache_ = $DescriptorSchemaCache$Type;
}}
declare module "packages/kotlinx/serialization/json/$ClassDiscriminatorMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $ClassDiscriminatorMode extends $Enum<($ClassDiscriminatorMode)> {
static readonly "NONE": $ClassDiscriminatorMode
static readonly "ALL_JSON_OBJECTS": $ClassDiscriminatorMode
static readonly "POLYMORPHIC": $ClassDiscriminatorMode


public static "values"(): ($ClassDiscriminatorMode)[]
public static "valueOf"(arg0: string): $ClassDiscriminatorMode
public static "getEntries"(): $EnumEntries<($ClassDiscriminatorMode)>
get "entries"(): $EnumEntries<($ClassDiscriminatorMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassDiscriminatorMode$Type = (("polymorphic") | ("none") | ("all_json_objects")) | ($ClassDiscriminatorMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassDiscriminatorMode_ = $ClassDiscriminatorMode$Type;
}}
declare module "packages/kotlinx/serialization/encoding/$CompositeDecoder" {
import {$SerialDescriptor, $SerialDescriptor$Type} from "packages/kotlinx/serialization/descriptors/$SerialDescriptor"
import {$Decoder, $Decoder$Type} from "packages/kotlinx/serialization/encoding/$Decoder"
import {$DeserializationStrategy, $DeserializationStrategy$Type} from "packages/kotlinx/serialization/$DeserializationStrategy"
import {$CompositeDecoder$Companion, $CompositeDecoder$Companion$Type} from "packages/kotlinx/serialization/encoding/$CompositeDecoder$Companion"
import {$SerializersModule, $SerializersModule$Type} from "packages/kotlinx/serialization/modules/$SerializersModule"

export interface $CompositeDecoder {

 "decodeElementIndex"(arg0: $SerialDescriptor$Type): integer
 "decodeSequentially"(): boolean
 "endStructure"(arg0: $SerialDescriptor$Type): void
 "decodeCharElement"(arg0: $SerialDescriptor$Type, arg1: integer): character
 "decodeByteElement"(arg0: $SerialDescriptor$Type, arg1: integer): byte
 "decodeShortElement"(arg0: $SerialDescriptor$Type, arg1: integer): short
 "decodeLongElement"(arg0: $SerialDescriptor$Type, arg1: integer): long
 "decodeFloatElement"(arg0: $SerialDescriptor$Type, arg1: integer): float
 "decodeIntElement"(arg0: $SerialDescriptor$Type, arg1: integer): integer
 "getSerializersModule"(): $SerializersModule
 "decodeNullableSerializableElement"<T>(arg0: $SerialDescriptor$Type, arg1: integer, arg2: $DeserializationStrategy$Type<(any)>, arg3: T): T
 "decodeBooleanElement"(arg0: $SerialDescriptor$Type, arg1: integer): boolean
 "decodeSerializableElement"<T>(arg0: $SerialDescriptor$Type, arg1: integer, arg2: $DeserializationStrategy$Type<(any)>, arg3: T): T
 "decodeCollectionSize"(arg0: $SerialDescriptor$Type): integer
 "decodeDoubleElement"(arg0: $SerialDescriptor$Type, arg1: integer): double
 "decodeInlineElement"(arg0: $SerialDescriptor$Type, arg1: integer): $Decoder
 "decodeStringElement"(arg0: $SerialDescriptor$Type, arg1: integer): string
}

export namespace $CompositeDecoder {
const Companion: $CompositeDecoder$Companion
const DECODE_DONE: integer
const UNKNOWN_NAME: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeDecoder$Type = ($CompositeDecoder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeDecoder_ = $CompositeDecoder$Type;
}}
declare module "packages/kotlinx/serialization/modules/$SerializersModule" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$KClass, $KClass$Type} from "packages/kotlin/reflect/$KClass"
import {$DeserializationStrategy, $DeserializationStrategy$Type} from "packages/kotlinx/serialization/$DeserializationStrategy"
import {$SerializersModuleCollector, $SerializersModuleCollector$Type} from "packages/kotlinx/serialization/modules/$SerializersModuleCollector"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$SerializationStrategy, $SerializationStrategy$Type} from "packages/kotlinx/serialization/$SerializationStrategy"

export class $SerializersModule {

constructor(arg0: $DefaultConstructorMarker$Type)

public "dumpTo"(arg0: $SerializersModuleCollector$Type): void
public "getPolymorphic"<T>(arg0: $KClass$Type<(any)>, arg1: T): $SerializationStrategy<(T)>
public "getPolymorphic"<T>(arg0: $KClass$Type<(any)>, arg1: string): $DeserializationStrategy<(T)>
public "getContextual"<T>(arg0: $KClass$Type<(T)>, arg1: $List$Type<(any)>): $KSerializer<(T)>
public "getHasInterfaceContextualSerializers$kotlinx_serialization_core"(): boolean
get "hasInterfaceContextualSerializers$kotlinx_serialization_core"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializersModule$Type = ($SerializersModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializersModule_ = $SerializersModule$Type;
}}

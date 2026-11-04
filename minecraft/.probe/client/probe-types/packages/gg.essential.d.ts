declare module "packages/gg/essential/model/molang/$Molang" {
import {$Molang$Companion, $Molang$Companion$Type} from "packages/gg/essential/model/molang/$Molang$Companion"
import {$MolangExpression, $MolangExpression$Type} from "packages/gg/essential/model/molang/$MolangExpression"
import {$MolangContext, $MolangContext$Type} from "packages/gg/essential/model/molang/$MolangContext"

export class $Molang {
static readonly "Companion": $Molang$Companion

constructor(arg0: $MolangExpression$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $MolangExpression$Type): $Molang
public "getExpression"(): $MolangExpression
public "eval"(arg0: $MolangContext$Type): float
public "component1"(): $MolangExpression
get "expression"(): $MolangExpression
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Molang$Type = ($Molang);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Molang_ = $Molang$Type;
}}
declare module "packages/gg/essential/model/file/$AnimationFile$Animation$SoundEffect$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$AnimationFile$Animation$SoundEffect, $AnimationFile$Animation$SoundEffect$Type} from "packages/gg/essential/model/file/$AnimationFile$Animation$SoundEffect"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $AnimationFile$Animation$SoundEffect$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($AnimationFile$Animation$SoundEffect)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationFile$Animation$SoundEffect$Companion$Type = ($AnimationFile$Animation$SoundEffect$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationFile$Animation$SoundEffect$Companion_ = $AnimationFile$Animation$SoundEffect$Companion$Type;
}}
declare module "packages/gg/essential/model/$SoundEffect" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$SoundEffect$Entry, $SoundEffect$Entry$Type} from "packages/gg/essential/model/$SoundEffect$Entry"
import {$SoundCategory, $SoundCategory$Type} from "packages/gg/essential/model/$SoundCategory"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $SoundEffect {

constructor(arg0: string, arg1: $SoundCategory$Type, arg2: float, arg3: float, arg4: boolean, arg5: $List$Type<($SoundEffect$Entry$Type)>)
constructor(arg0: string, arg1: $SoundCategory$Type, arg2: float, arg3: float, arg4: boolean, arg5: $List$Type<(any)>, arg6: integer, arg7: $DefaultConstructorMarker$Type)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: $SoundCategory$Type, arg2: float, arg3: float, arg4: boolean, arg5: $List$Type<($SoundEffect$Entry$Type)>): $SoundEffect
public "component4"(): float
public "component3"(): float
public "component5"(): boolean
public "getSounds"(): $List<($SoundEffect$Entry)>
public "getCategory"(): $SoundCategory
public "component1"(): string
public "component2"(): $SoundCategory
public "component6"(): $List<($SoundEffect$Entry)>
public "randomEntry"(): $SoundEffect$Entry
public "getFixedPosition"(): boolean
public "getMinDistance"(): float
public "getMaxDistance"(): float
get "name"(): string
get "sounds"(): $List<($SoundEffect$Entry)>
get "category"(): $SoundCategory
get "fixedPosition"(): boolean
get "minDistance"(): float
get "maxDistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEffect$Type = ($SoundEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundEffect_ = $SoundEffect$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents" {
import {$ParticleEffectComponents$EmitterLifetimeEvents, $ParticleEffectComponents$EmitterLifetimeEvents$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeEvents"
import {$ParticleEffectComponents$ParticleAppearanceTinting, $ParticleEffectComponents$ParticleAppearanceTinting$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceTinting"
import {$ParticleEffectComponents$EmitterShapeBox, $ParticleEffectComponents$EmitterShapeBox$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapeBox"
import {$ParticleEffectComponents$EmitterLifetimeLooping, $ParticleEffectComponents$EmitterLifetimeLooping$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeLooping"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"
import {$ParticleEffectComponents$EmitterLocalSpace, $ParticleEffectComponents$EmitterLocalSpace$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLocalSpace"
import {$ParticleEffectComponents$EmitterShapePoint, $ParticleEffectComponents$EmitterShapePoint$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapePoint"
import {$ParticleEffectComponents$ParticleMotionDynamic, $ParticleEffectComponents$ParticleMotionDynamic$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionDynamic"
import {$ParticleEffectComponents$Companion, $ParticleEffectComponents$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$Companion"
import {$ParticleEffectComponents$ParticleLifetimeEvents, $ParticleEffectComponents$ParticleLifetimeEvents$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleLifetimeEvents"
import {$ParticleEffectComponents$EmitterRateInstant, $ParticleEffectComponents$EmitterRateInstant$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterRateInstant"
import {$ParticleEffectComponents$ParticleInitialization, $ParticleEffectComponents$ParticleInitialization$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleInitialization"
import {$ParticleEffectComponents$EmitterShapeSphere, $ParticleEffectComponents$EmitterShapeSphere$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapeSphere"
import {$ParticleEffectComponents$ParticleAppearanceBillboard, $ParticleEffectComponents$ParticleAppearanceBillboard$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard"
import {$ParticleEffectComponents$ParticleLifetimeExpression, $ParticleEffectComponents$ParticleLifetimeExpression$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleLifetimeExpression"
import {$ParticleEffectComponents$EmitterInitialization, $ParticleEffectComponents$EmitterInitialization$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterInitialization"
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$EmitterShapeDisc, $ParticleEffectComponents$EmitterShapeDisc$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapeDisc"
import {$ParticleEffectComponents$ParticleMotionCollision, $ParticleEffectComponents$ParticleMotionCollision$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionCollision"
import {$ParticleEffectComponents$ParticleMotionParametric, $ParticleEffectComponents$ParticleMotionParametric$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionParametric"
import {$Unit, $Unit$Type} from "packages/kotlin/$Unit"
import {$ParticleEffectComponents$EmitterLifetimeOnce, $ParticleEffectComponents$EmitterLifetimeOnce$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeOnce"
import {$ParticleEffectComponents$EmitterLifetimeExpression, $ParticleEffectComponents$EmitterLifetimeExpression$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeExpression"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticleEffectComponents$ParticleInitialSpin, $ParticleEffectComponents$ParticleInitialSpin$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleInitialSpin"
import {$ParticleEffectComponents$ParticleVisibility, $ParticleEffectComponents$ParticleVisibility$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleVisibility"
import {$ParticleEffectComponents$EmitterRateSteady, $ParticleEffectComponents$EmitterRateSteady$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterRateSteady"

export class $ParticleEffectComponents {
static readonly "Companion": $ParticleEffectComponents$Companion

constructor(arg0: integer, arg1: $ParticleEffectComponents$EmitterLocalSpace$Type, arg2: $ParticleEffectComponents$EmitterInitialization$Type, arg3: $ParticleEffectComponents$EmitterLifetimeEvents$Type, arg4: $ParticleEffectComponents$EmitterLifetimeLooping$Type, arg5: $ParticleEffectComponents$EmitterLifetimeOnce$Type, arg6: $ParticleEffectComponents$EmitterLifetimeExpression$Type, arg7: $ParticleEffectComponents$EmitterRateInstant$Type, arg8: $ParticleEffectComponents$EmitterRateSteady$Type, arg9: $ParticleEffectComponents$EmitterShapePoint$Type, arg10: $ParticleEffectComponents$EmitterShapeSphere$Type, arg11: $ParticleEffectComponents$EmitterShapeBox$Type, arg12: $ParticleEffectComponents$EmitterShapeDisc$Type, arg13: $ParticleEffectComponents$ParticleLifetimeEvents$Type, arg14: $ParticleEffectComponents$ParticleAppearanceBillboard$Type, arg15: $ParticleEffectComponents$ParticleAppearanceTinting$Type, arg16: $Unit$Type, arg17: $Molang$Type, arg18: $ParticleEffectComponents$ParticleInitialSpin$Type, arg19: $ParticleEffectComponents$ParticleInitialization$Type, arg20: $ParticleEffectComponents$ParticleMotionCollision$Type, arg21: $ParticleEffectComponents$ParticleMotionDynamic$Type, arg22: $ParticleEffectComponents$ParticleMotionParametric$Type, arg23: $ParticleEffectComponents$ParticleLifetimeExpression$Type, arg24: $ParticleEffectComponents$ParticleVisibility$Type, arg25: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $ParticleEffectComponents$EmitterLocalSpace$Type, arg1: $ParticleEffectComponents$EmitterInitialization$Type, arg2: $ParticleEffectComponents$EmitterLifetimeEvents$Type, arg3: $ParticleEffectComponents$EmitterLifetimeLooping$Type, arg4: $ParticleEffectComponents$EmitterLifetimeOnce$Type, arg5: $ParticleEffectComponents$EmitterLifetimeExpression$Type, arg6: $ParticleEffectComponents$EmitterRateInstant$Type, arg7: $ParticleEffectComponents$EmitterRateSteady$Type, arg8: $ParticleEffectComponents$EmitterShapePoint$Type, arg9: $ParticleEffectComponents$EmitterShapeSphere$Type, arg10: $ParticleEffectComponents$EmitterShapeBox$Type, arg11: $ParticleEffectComponents$EmitterShapeDisc$Type, arg12: $ParticleEffectComponents$ParticleLifetimeEvents$Type, arg13: $ParticleEffectComponents$ParticleAppearanceBillboard$Type, arg14: $ParticleEffectComponents$ParticleAppearanceTinting$Type, arg15: $Unit$Type, arg16: $Molang$Type, arg17: $ParticleEffectComponents$ParticleInitialSpin$Type, arg18: $ParticleEffectComponents$ParticleInitialization$Type, arg19: $ParticleEffectComponents$ParticleMotionCollision$Type, arg20: $ParticleEffectComponents$ParticleMotionDynamic$Type, arg21: $ParticleEffectComponents$ParticleMotionParametric$Type, arg22: $ParticleEffectComponents$ParticleLifetimeExpression$Type, arg23: $ParticleEffectComponents$ParticleVisibility$Type, arg24: integer, arg25: $DefaultConstructorMarker$Type)
constructor(arg0: $ParticleEffectComponents$EmitterLocalSpace$Type, arg1: $ParticleEffectComponents$EmitterInitialization$Type, arg2: $ParticleEffectComponents$EmitterLifetimeEvents$Type, arg3: $ParticleEffectComponents$EmitterLifetimeLooping$Type, arg4: $ParticleEffectComponents$EmitterLifetimeOnce$Type, arg5: $ParticleEffectComponents$EmitterLifetimeExpression$Type, arg6: $ParticleEffectComponents$EmitterRateInstant$Type, arg7: $ParticleEffectComponents$EmitterRateSteady$Type, arg8: $ParticleEffectComponents$EmitterShapePoint$Type, arg9: $ParticleEffectComponents$EmitterShapeSphere$Type, arg10: $ParticleEffectComponents$EmitterShapeBox$Type, arg11: $ParticleEffectComponents$EmitterShapeDisc$Type, arg12: $ParticleEffectComponents$ParticleLifetimeEvents$Type, arg13: $ParticleEffectComponents$ParticleAppearanceBillboard$Type, arg14: $ParticleEffectComponents$ParticleAppearanceTinting$Type, arg15: $Unit$Type, arg16: $Molang$Type, arg17: $ParticleEffectComponents$ParticleInitialSpin$Type, arg18: $ParticleEffectComponents$ParticleInitialization$Type, arg19: $ParticleEffectComponents$ParticleMotionCollision$Type, arg20: $ParticleEffectComponents$ParticleMotionDynamic$Type, arg21: $ParticleEffectComponents$ParticleMotionParametric$Type, arg22: $ParticleEffectComponents$ParticleLifetimeExpression$Type, arg23: $ParticleEffectComponents$ParticleVisibility$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $ParticleEffectComponents$EmitterLocalSpace$Type, arg1: $ParticleEffectComponents$EmitterInitialization$Type, arg2: $ParticleEffectComponents$EmitterLifetimeEvents$Type, arg3: $ParticleEffectComponents$EmitterLifetimeLooping$Type, arg4: $ParticleEffectComponents$EmitterLifetimeOnce$Type, arg5: $ParticleEffectComponents$EmitterLifetimeExpression$Type, arg6: $ParticleEffectComponents$EmitterRateInstant$Type, arg7: $ParticleEffectComponents$EmitterRateSteady$Type, arg8: $ParticleEffectComponents$EmitterShapePoint$Type, arg9: $ParticleEffectComponents$EmitterShapeSphere$Type, arg10: $ParticleEffectComponents$EmitterShapeBox$Type, arg11: $ParticleEffectComponents$EmitterShapeDisc$Type, arg12: $ParticleEffectComponents$ParticleLifetimeEvents$Type, arg13: $ParticleEffectComponents$ParticleAppearanceBillboard$Type, arg14: $ParticleEffectComponents$ParticleAppearanceTinting$Type, arg15: $Unit$Type, arg16: $Molang$Type, arg17: $ParticleEffectComponents$ParticleInitialSpin$Type, arg18: $ParticleEffectComponents$ParticleInitialization$Type, arg19: $ParticleEffectComponents$ParticleMotionCollision$Type, arg20: $ParticleEffectComponents$ParticleMotionDynamic$Type, arg21: $ParticleEffectComponents$ParticleMotionParametric$Type, arg22: $ParticleEffectComponents$ParticleLifetimeExpression$Type, arg23: $ParticleEffectComponents$ParticleVisibility$Type): $ParticleEffectComponents
public "component4"(): $ParticleEffectComponents$EmitterLifetimeLooping
public "component3"(): $ParticleEffectComponents$EmitterLifetimeEvents
public "component5"(): $ParticleEffectComponents$EmitterLifetimeOnce
public "component14"(): $ParticleEffectComponents$ParticleAppearanceBillboard
public "component16"(): $Unit
public "component12"(): $ParticleEffectComponents$EmitterShapeDisc
public "component15"(): $ParticleEffectComponents$ParticleAppearanceTinting
public "component17"(): $Molang
public "component13"(): $ParticleEffectComponents$ParticleLifetimeEvents
public "component11"(): $ParticleEffectComponents$EmitterShapeBox
public "component10"(): $ParticleEffectComponents$EmitterShapeSphere
public "component1"(): $ParticleEffectComponents$EmitterLocalSpace
public "component2"(): $ParticleEffectComponents$EmitterInitialization
public "getEmitterShapeSphere"(): $ParticleEffectComponents$EmitterShapeSphere
public "getParticleLifetimeExpression"(): $ParticleEffectComponents$ParticleLifetimeExpression
public "getEmitterShapePoint"(): $ParticleEffectComponents$EmitterShapePoint
public "getParticleInitialSpeed"(): $Molang
public "getParticleVisibility"(): $ParticleEffectComponents$ParticleVisibility
public "getParticleAppearanceTinting"(): $ParticleEffectComponents$ParticleAppearanceTinting
public "getParticleLifetimeEvents"(): $ParticleEffectComponents$ParticleLifetimeEvents
public "getParticleInitialization"(): $ParticleEffectComponents$ParticleInitialization
public "getEmitterRateSteady"(): $ParticleEffectComponents$EmitterRateSteady
public "getEmitterShapeDisc"(): $ParticleEffectComponents$EmitterShapeDisc
public "getParticleAppearanceLighting"(): $Unit
public "getParticleInitialSpin"(): $ParticleEffectComponents$ParticleInitialSpin
public "getParticleMotionParametric"(): $ParticleEffectComponents$ParticleMotionParametric
public "getParticleAppearanceBillboard"(): $ParticleEffectComponents$ParticleAppearanceBillboard
public "getParticleMotionCollision"(): $ParticleEffectComponents$ParticleMotionCollision
public "getParticleMotionDynamic"(): $ParticleEffectComponents$ParticleMotionDynamic
public "component9"(): $ParticleEffectComponents$EmitterShapePoint
public "component8"(): $ParticleEffectComponents$EmitterRateSteady
public "component7"(): $ParticleEffectComponents$EmitterRateInstant
public "component6"(): $ParticleEffectComponents$EmitterLifetimeExpression
public "getEmitterShapeBox"(): $ParticleEffectComponents$EmitterShapeBox
public "component22"(): $ParticleEffectComponents$ParticleMotionParametric
public "component20"(): $ParticleEffectComponents$ParticleMotionCollision
public "component21"(): $ParticleEffectComponents$ParticleMotionDynamic
public "component19"(): $ParticleEffectComponents$ParticleInitialization
public "component18"(): $ParticleEffectComponents$ParticleInitialSpin
public "component24"(): $ParticleEffectComponents$ParticleVisibility
public "component23"(): $ParticleEffectComponents$ParticleLifetimeExpression
public "getEmitterLifetimeEvents"(): $ParticleEffectComponents$EmitterLifetimeEvents
public "getEmitterLifetimeOnce"(): $ParticleEffectComponents$EmitterLifetimeOnce
public "getEmitterInitialization"(): $ParticleEffectComponents$EmitterInitialization
public "getEmitterLifetimeExpression"(): $ParticleEffectComponents$EmitterLifetimeExpression
public "getEmitterRateInstant"(): $ParticleEffectComponents$EmitterRateInstant
public "getEmitterLifetimeLooping"(): $ParticleEffectComponents$EmitterLifetimeLooping
public "getEmitterLocalSpace"(): $ParticleEffectComponents$EmitterLocalSpace
get "emitterShapeSphere"(): $ParticleEffectComponents$EmitterShapeSphere
get "particleLifetimeExpression"(): $ParticleEffectComponents$ParticleLifetimeExpression
get "emitterShapePoint"(): $ParticleEffectComponents$EmitterShapePoint
get "particleInitialSpeed"(): $Molang
get "particleVisibility"(): $ParticleEffectComponents$ParticleVisibility
get "particleAppearanceTinting"(): $ParticleEffectComponents$ParticleAppearanceTinting
get "particleLifetimeEvents"(): $ParticleEffectComponents$ParticleLifetimeEvents
get "particleInitialization"(): $ParticleEffectComponents$ParticleInitialization
get "emitterRateSteady"(): $ParticleEffectComponents$EmitterRateSteady
get "emitterShapeDisc"(): $ParticleEffectComponents$EmitterShapeDisc
get "particleAppearanceLighting"(): $Unit
get "particleInitialSpin"(): $ParticleEffectComponents$ParticleInitialSpin
get "particleMotionParametric"(): $ParticleEffectComponents$ParticleMotionParametric
get "particleAppearanceBillboard"(): $ParticleEffectComponents$ParticleAppearanceBillboard
get "particleMotionCollision"(): $ParticleEffectComponents$ParticleMotionCollision
get "particleMotionDynamic"(): $ParticleEffectComponents$ParticleMotionDynamic
get "emitterShapeBox"(): $ParticleEffectComponents$EmitterShapeBox
get "emitterLifetimeEvents"(): $ParticleEffectComponents$EmitterLifetimeEvents
get "emitterLifetimeOnce"(): $ParticleEffectComponents$EmitterLifetimeOnce
get "emitterInitialization"(): $ParticleEffectComponents$EmitterInitialization
get "emitterLifetimeExpression"(): $ParticleEffectComponents$EmitterLifetimeExpression
get "emitterRateInstant"(): $ParticleEffectComponents$EmitterRateInstant
get "emitterLifetimeLooping"(): $ParticleEffectComponents$EmitterLifetimeLooping
get "emitterLocalSpace"(): $ParticleEffectComponents$EmitterLocalSpace
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$Type = ($ParticleEffectComponents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents_ = $ParticleEffectComponents$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceTinting" {
import {$MolangColorOrGradient, $MolangColorOrGradient$Type} from "packages/gg/essential/model/file/$MolangColorOrGradient"
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$ParticleAppearanceTinting$Companion, $ParticleEffectComponents$ParticleAppearanceTinting$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceTinting$Companion"

export class $ParticleEffectComponents$ParticleAppearanceTinting {
static readonly "Companion": $ParticleEffectComponents$ParticleAppearanceTinting$Companion

constructor(arg0: $MolangColorOrGradient$Type)
constructor(arg0: integer, arg1: $MolangColorOrGradient$Type, arg2: $SerializationConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $MolangColorOrGradient$Type): $ParticleEffectComponents$ParticleAppearanceTinting
public "component1"(): $MolangColorOrGradient
public "getColor"(): $MolangColorOrGradient
get "color"(): $MolangColorOrGradient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleAppearanceTinting$Type = ($ParticleEffectComponents$ParticleAppearanceTinting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleAppearanceTinting_ = $ParticleEffectComponents$ParticleAppearanceTinting$Type;
}}
declare module "packages/gg/essential/mixins/impl/client/audio/$SoundSystemExt" {
import {$Quaternion, $Quaternion$Type} from "packages/gg/essential/model/util/$Quaternion"
import {$Vec3, $Vec3$Type} from "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec3"

export interface $SoundSystemExt {

 "essential$getListenerPosition"(): $Vec3
 "essential$getListenerRotation"(): $Quaternion
}

export namespace $SoundSystemExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundSystemExt$Type = ($SoundSystemExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundSystemExt_ = $SoundSystemExt$Type;
}}
declare module "packages/gg/essential/mixins/ext/client/$MinecraftExt" {
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"

export interface $MinecraftExt {

 "getEssential$executor"(): $Executor

(): $Executor
}

export namespace $MinecraftExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftExt$Type = ($MinecraftExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftExt_ = $MinecraftExt$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticProperty$Variants$Variant$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$CosmeticProperty$Variants$Variant, $CosmeticProperty$Variants$Variant$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticProperty$Variants$Variant"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $CosmeticProperty$Variants$Variant$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($CosmeticProperty$Variants$Variant)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticProperty$Variants$Variant$Companion$Type = ($CosmeticProperty$Variants$Variant$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticProperty$Variants$Variant$Companion_ = $CosmeticProperty$Variants$Variant$Companion$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/$CosmeticSlot" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$CosmeticSlot$Companion, $CosmeticSlot$Companion$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticSlot$Companion"

export class $CosmeticSlot {
static readonly "Companion": $CosmeticSlot$Companion
static readonly "BACK": $CosmeticSlot
static readonly "EARS": $CosmeticSlot
static readonly "FACE": $CosmeticSlot
static readonly "FULL_BODY": $CosmeticSlot
static readonly "HAT": $CosmeticSlot
static readonly "PET": $CosmeticSlot
static readonly "TAIL": $CosmeticSlot
static readonly "ARMS": $CosmeticSlot
static readonly "SHOULDERS": $CosmeticSlot
static readonly "SUITS": $CosmeticSlot
static readonly "SHOES": $CosmeticSlot
static readonly "PANTS": $CosmeticSlot
static readonly "WINGS": $CosmeticSlot
static readonly "EFFECT": $CosmeticSlot
static readonly "CAPE": $CosmeticSlot
static readonly "EMOTE": $CosmeticSlot
static readonly "ICON": $CosmeticSlot
static readonly "TOP": $CosmeticSlot
static readonly "ACCESSORY": $CosmeticSlot
static readonly "HEAD": $CosmeticSlot
static readonly "SKIRT": $CosmeticSlot

constructor(arg0: string, arg1: $DefaultConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public static "values"(): $List<($CosmeticSlot)>
public "hashCode"(): integer
public "getId"(): string
public "copy"(arg0: string): $CosmeticSlot
public "component1"(): string
get "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticSlot$Type = ($CosmeticSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticSlot_ = $CosmeticSlot$Type;
}}
declare module "packages/gg/essential/model/file/$ModelFile$Bone$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ModelFile$Bone, $ModelFile$Bone$Type} from "packages/gg/essential/model/file/$ModelFile$Bone"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ModelFile$Bone$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ModelFile$Bone)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$Bone$Companion$Type = ($ModelFile$Bone$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile$Bone$Companion_ = $ModelFile$Bone$Companion$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/$CosmeticAssets$SkinMask$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$CosmeticAssets$SkinMask, $CosmeticAssets$SkinMask$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticAssets$SkinMask"

export class $CosmeticAssets$SkinMask$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($CosmeticAssets$SkinMask)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticAssets$SkinMask$Companion$Type = ($CosmeticAssets$SkinMask$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticAssets$SkinMask$Companion_ = $CosmeticAssets$SkinMask$Companion$Type;
}}
declare module "packages/gg/essential/gui/elementa/state/v2/$State" {
import {$Observer, $Observer$Type} from "packages/gg/essential/gui/elementa/state/v2/$Observer"
import {$Unit, $Unit$Type} from "packages/kotlin/$Unit"
import {$ReferenceHolder, $ReferenceHolder$Type} from "packages/gg/essential/elementa/state/v2/$ReferenceHolder"
import {$Function0, $Function0$Type} from "packages/kotlin/jvm/functions/$Function0"
import {$Function1, $Function1$Type} from "packages/kotlin/jvm/functions/$Function1"

export interface $State<T> {

 "get"(): T
 "get"(arg0: $Observer$Type): T
 "onSetValue"(arg0: $ReferenceHolder$Type, arg1: $Function1$Type<(any), ($Unit$Type)>): $Function0<($Unit)>
 "getUntracked"(): T

(): T
}

export namespace $State {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $State$Type<T> = ($State<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $State_<T> = $State$Type<(T)>;
}}
declare module "packages/gg/essential/network/cosmetics/$CosmeticBase" {
import {$CosmeticTier, $CosmeticTier$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticTier"
import {$EssentialAsset, $EssentialAsset$Type} from "packages/gg/essential/mod/$EssentialAsset"
import {$CosmeticSlot, $CosmeticSlot$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticSlot"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CosmeticProperty, $CosmeticProperty$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticProperty"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CosmeticBase {

constructor(arg0: string, arg1: $CosmeticSlot$Type, arg2: $CosmeticTier$Type, arg3: $Map$Type<(string), (string)>, arg4: $Map$Type<(string), ($EssentialAsset$Type)>, arg5: $List$Type<(any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getId"(): string
public "copy"(arg0: string, arg1: $CosmeticSlot$Type, arg2: $CosmeticTier$Type, arg3: $Map$Type<(string), (string)>, arg4: $Map$Type<(string), ($EssentialAsset$Type)>, arg5: $List$Type<(any)>): $CosmeticBase
public "getSlot"(): $CosmeticSlot
public "component4"(): $Map<(string), (string)>
public "component3"(): $CosmeticTier
public "component5"(): $Map<(string), ($EssentialAsset)>
public "getDisplayNames"(): $Map<(string), (string)>
public "getFiles"(): $Map<(string), ($EssentialAsset)>
public "component1"(): string
public "component2"(): $CosmeticSlot
public "getTier"(): $CosmeticTier
public "getAllProperties"(): $List<($CosmeticProperty)>
public "component6"(): $List<($CosmeticProperty)>
get "id"(): string
get "slot"(): $CosmeticSlot
get "displayNames"(): $Map<(string), (string)>
get "files"(): $Map<(string), ($EssentialAsset)>
get "tier"(): $CosmeticTier
get "allProperties"(): $List<($CosmeticProperty)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticBase$Type = ($CosmeticBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticBase_ = $CosmeticBase$Type;
}}
declare module "packages/gg/essential/cosmetics/skinmask/$SkinMask" {
import {$Mask, $Mask$Type} from "packages/gg/essential/util/image/mask/$Mask"
import {$MutableBitmap, $MutableBitmap$Type} from "packages/gg/essential/util/image/bitmap/$MutableBitmap"
import {$SkinMask$Companion, $SkinMask$Companion$Type} from "packages/gg/essential/cosmetics/skinmask/$SkinMask$Companion"
import {$EnumPart, $EnumPart$Type} from "packages/gg/essential/model/$EnumPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Bitmap, $Bitmap$Type} from "packages/gg/essential/util/image/bitmap/$Bitmap"

export class $SkinMask {
static readonly "Companion": $SkinMask$Companion

constructor(arg0: $Map$Type<($EnumPart$Type), (any)>)

public "apply"(arg0: $Bitmap$Type): $Bitmap
public "offset"(arg0: integer, arg1: integer, arg2: integer): $SkinMask
public "getParts"(): $Map<($EnumPart), ($Mask)>
public "applyTo"(arg0: $MutableBitmap$Type): void
get "parts"(): $Map<($EnumPart), ($Mask)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkinMask$Type = ($SkinMask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkinMask_ = $SkinMask$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/$CosmeticCategory" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$CosmeticSlot, $CosmeticSlot$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticSlot"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$CosmeticCategory$Companion, $CosmeticCategory$Companion$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticCategory$Companion"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CosmeticCategory {
static readonly "Companion": $CosmeticCategory$Companion
static readonly "EMOTE_CATEGORY_TAG": string
static readonly "HIDDEN_CATEGORY_TAG": string

constructor(arg0: integer, arg1: string, arg2: $Map$Type<(any), (any)>, arg3: $Map$Type<(any), (any)>, arg4: $Map$Type<(any), (any)>, arg5: $Set$Type<(any)>, arg6: $Set$Type<(any)>, arg7: integer, arg8: $Instant$Type, arg9: $Instant$Type, arg10: $SerializationConstructorMarker$Type)
constructor(arg0: string, arg1: $Map$Type<(any), (any)>, arg2: $Map$Type<(any), (any)>, arg3: $Map$Type<(any), (any)>, arg4: $Set$Type<(any)>, arg5: $Set$Type<(any)>, arg6: integer, arg7: $Instant$Type, arg8: $Instant$Type, arg9: integer, arg10: $DefaultConstructorMarker$Type)
constructor(arg0: string, arg1: $Map$Type<(string), (string)>, arg2: $Map$Type<(string), (string)>, arg3: $Map$Type<(string), (string)>, arg4: $Set$Type<($CosmeticSlot$Type)>, arg5: $Set$Type<(string)>, arg6: integer, arg7: $Instant$Type, arg8: $Instant$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isHidden"(): boolean
public "getId"(): string
public "copy"(arg0: string, arg1: $Map$Type<(string), (string)>, arg2: $Map$Type<(string), (string)>, arg3: $Map$Type<(string), (string)>, arg4: $Set$Type<($CosmeticSlot$Type)>, arg5: $Set$Type<(string)>, arg6: integer, arg7: $Instant$Type, arg8: $Instant$Type): $CosmeticCategory
public "getOrder"(): integer
public "component4"(): $Map<(string), (string)>
public "component3"(): $Map<(string), (string)>
public "component5"(): $Set<($CosmeticSlot)>
public "getDisplayNames"(): $Map<(string), (string)>
public "getSlots"(): $Set<($CosmeticSlot)>
public "getTags"(): $Set<(string)>
public "component1"(): string
public "component2"(): $Map<(string), (string)>
public "component9"(): $Instant
public "getCompactNames"(): $Map<(string), (string)>
public "getDescriptions"(): $Map<(string), (string)>
public "getAvailableAfter"(): $Instant
public "component8"(): $Instant
public "getAvailableUntil"(): $Instant
public "isEmoteCategory"(): boolean
public "component7"(): integer
public "component6"(): $Set<(string)>
get "hidden"(): boolean
get "id"(): string
get "order"(): integer
get "displayNames"(): $Map<(string), (string)>
get "slots"(): $Set<($CosmeticSlot)>
get "tags"(): $Set<(string)>
get "compactNames"(): $Map<(string), (string)>
get "descriptions"(): $Map<(string), (string)>
get "availableAfter"(): $Instant
get "availableUntil"(): $Instant
get "emoteCategory"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticCategory$Type = ($CosmeticCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticCategory_ = $CosmeticCategory$Type;
}}
declare module "packages/gg/essential/lib/kotgl/matrix/matrices/$Mat" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Mat {

 "copyOf"(): $Mat

(): $Mat
}

export namespace $Mat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mat$Type = ($Mat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mat_ = $Mat$Type;
}}
declare module "packages/gg/essential/network/connectionmanager/cosmetics/$CosmeticsData" {
import {$FeaturedPageCollection, $FeaturedPageCollection$Type} from "packages/gg/essential/mod/cosmetics/featured/$FeaturedPageCollection"
import {$GitRepoCosmeticsDatabase$CosmeticImplicitOwnership, $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Type} from "packages/gg/essential/mod/cosmetics/database/$GitRepoCosmeticsDatabase$CosmeticImplicitOwnership"
import {$State, $State$Type} from "packages/gg/essential/gui/elementa/state/v2/$State"
import {$CosmeticBase, $CosmeticBase$Type} from "packages/gg/essential/network/cosmetics/$CosmeticBase"
import {$Cosmetic, $Cosmetic$Type} from "packages/gg/essential/network/cosmetics/$Cosmetic"
import {$CosmeticBundle, $CosmeticBundle$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticBundle"
import {$TrackedList, $TrackedList$Type} from "packages/gg/essential/gui/elementa/state/v2/collections/$TrackedList"
import {$CosmeticStoreInfo, $CosmeticStoreInfo$Type} from "packages/gg/essential/network/cosmetics/$CosmeticStoreInfo"
import {$CosmeticCategory, $CosmeticCategory$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticCategory"

export interface $CosmeticsData {

 "getCategory"(arg0: string): $CosmeticCategory
 "getCosmetics"(): $State<($TrackedList<($Cosmetic)>)>
 "cosmeticStoreInfo"(arg0: string): $State<($CosmeticStoreInfo)>
 "cosmeticBase"(arg0: string): $State<($CosmeticBase)>
 "getBundles"(): $State<($TrackedList<($CosmeticBundle)>)>
 "getCosmeticBundle"(arg0: string): $CosmeticBundle
 "getCosmetic"(arg0: string): $Cosmetic
 "getCategories"(): $State<($TrackedList<($CosmeticCategory)>)>
 "getFeaturedPageCollections"(): $State<($TrackedList<($FeaturedPageCollection)>)>
 "getFeaturedPageCollection"(arg0: string): $FeaturedPageCollection
 "getImplicitOwnerships"(): $State<($TrackedList<($GitRepoCosmeticsDatabase$CosmeticImplicitOwnership)>)>
 "getImplicitOwnership"(arg0: string): $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership
 "cosmetic"(arg0: string): $State<($Cosmetic)>
}

export namespace $CosmeticsData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticsData$Type = ($CosmeticsData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticsData_ = $CosmeticsData$Type;
}}
declare module "packages/gg/essential/model/file/$ModelFile$Geometry" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelFile$Geometry$Companion, $ModelFile$Geometry$Companion$Type} from "packages/gg/essential/model/file/$ModelFile$Geometry$Companion"
import {$ModelFile$Description, $ModelFile$Description$Type} from "packages/gg/essential/model/file/$ModelFile$Description"
import {$ModelFile$Bone, $ModelFile$Bone$Type} from "packages/gg/essential/model/file/$ModelFile$Bone"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ModelFile$Geometry {
static readonly "Companion": $ModelFile$Geometry$Companion

constructor(arg0: integer, arg1: $ModelFile$Description$Type, arg2: $List$Type<(any)>, arg3: $SerializationConstructorMarker$Type)
constructor(arg0: $ModelFile$Description$Type, arg1: $List$Type<(any)>, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: $ModelFile$Description$Type, arg1: $List$Type<($ModelFile$Bone$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $ModelFile$Description$Type, arg1: $List$Type<($ModelFile$Bone$Type)>): $ModelFile$Geometry
public "getDescription"(): $ModelFile$Description
public "component1"(): $ModelFile$Description
public "component2"(): $List<($ModelFile$Bone)>
public "getBones"(): $List<($ModelFile$Bone)>
get "description"(): $ModelFile$Description
get "bones"(): $List<($ModelFile$Bone)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$Geometry$Type = ($ModelFile$Geometry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile$Geometry_ = $ModelFile$Geometry$Type;
}}
declare module "packages/gg/essential/universal/$UMatrixStack$Entry" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"

export class $UMatrixStack$Entry {

constructor(model: $Matrix4f$Type, normal: $Matrix3f$Type)

public "equals"(other: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(model: $Matrix4f$Type, normal: $Matrix3f$Type): $UMatrixStack$Entry
public "deepCopy"(): $UMatrixStack$Entry
public "getNormal"(): $Matrix3f
public "component1"(): $Matrix4f
public "component2"(): $Matrix3f
public "toMCStack"(): $PoseStack
public "getModelAsArray"(): (float)[]
public "getModel"(): $Matrix4f
get "normal"(): $Matrix3f
get "modelAsArray"(): (float)[]
get "model"(): $Matrix4f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UMatrixStack$Entry$Type = ($UMatrixStack$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UMatrixStack$Entry_ = $UMatrixStack$Entry$Type;
}}
declare module "packages/gg/essential/model/bones/$BakedAnimations" {
import {$Quaternion, $Quaternion$Type} from "packages/gg/essential/model/util/$Quaternion"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BakedAnimations$Companion, $BakedAnimations$Companion$Type} from "packages/gg/essential/model/bones/$BakedAnimations$Companion"
import {$Bones, $Bones$Type} from "packages/gg/essential/model/$Bones"
import {$BakedAnimations$BakedBone, $BakedAnimations$BakedBone$Type} from "packages/gg/essential/model/bones/$BakedAnimations$BakedBone"

export class $BakedAnimations {
static readonly "Companion": $BakedAnimations$Companion

constructor(arg0: $List$Type<($BakedAnimations$BakedBone$Type)>, arg1: $Quaternion$Type)

public "apply"(arg0: $Bones$Type): void
public "reset"(arg0: $Bones$Type): void
public "getBakedBones"(): $List<($BakedAnimations$BakedBone)>
public "getEntityRotation"(): $Quaternion
get "bakedBones"(): $List<($BakedAnimations$BakedBone)>
get "entityRotation"(): $Quaternion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedAnimations$Type = ($BakedAnimations);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedAnimations_ = $BakedAnimations$Type;
}}
declare module "packages/gg/essential/model/file/$AnimationFile$Animation$ParticleEffect" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$AnimationFile$Animation$ParticleEffect$Companion, $AnimationFile$Animation$ParticleEffect$Companion$Type} from "packages/gg/essential/model/file/$AnimationFile$Animation$ParticleEffect$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"

export class $AnimationFile$Animation$ParticleEffect {
static readonly "Companion": $AnimationFile$Animation$ParticleEffect$Companion

constructor(arg0: integer, arg1: string, arg2: string, arg3: $Molang$Type, arg4: $SerializationConstructorMarker$Type)
constructor(arg0: string, arg1: string, arg2: $Molang$Type, arg3: integer, arg4: $DefaultConstructorMarker$Type)
constructor(arg0: string, arg1: string, arg2: $Molang$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: string, arg2: $Molang$Type): $AnimationFile$Animation$ParticleEffect
public "component3"(): $Molang
public "getPreEffectScript"(): $Molang
public "component1"(): string
public "component2"(): string
public "getLocator"(): string
public "getEffect"(): string
get "preEffectScript"(): $Molang
get "locator"(): string
get "effect"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationFile$Animation$ParticleEffect$Type = ($AnimationFile$Animation$ParticleEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationFile$Animation$ParticleEffect_ = $AnimationFile$Animation$ParticleEffect$Type;
}}
declare module "packages/gg/essential/model/$EnumPart$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$EnumPart, $EnumPart$Type} from "packages/gg/essential/model/$EnumPart"

export class $EnumPart$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "fromBoneName"(arg0: string): $EnumPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumPart$Companion$Type = ($EnumPart$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumPart$Companion_ = $EnumPart$Companion$Type;
}}
declare module "packages/gg/essential/model/$SoundCategory$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$SoundCategory, $SoundCategory$Type} from "packages/gg/essential/model/$SoundCategory"

export class $SoundCategory$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($SoundCategory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundCategory$Companion$Type = ($SoundCategory$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundCategory$Companion_ = $SoundCategory$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeEvents" {
import {$TreeMap, $TreeMap$Type} from "packages/gg/essential/model/util/$TreeMap"
import {$ParticleEffectComponents$EmitterLifetimeEvents$Companion, $ParticleEffectComponents$EmitterLifetimeEvents$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeEvents$Companion"
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance, $ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$EmitterLifetimeEvents {
static readonly "Companion": $ParticleEffectComponents$EmitterLifetimeEvents$Companion

constructor(arg0: integer, arg1: $List$Type<(any)>, arg2: $List$Type<(any)>, arg3: $TreeMap$Type<(any), (any)>, arg4: $TreeMap$Type<(any), (any)>, arg5: $List$Type<(any)>, arg6: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $List$Type<(any)>, arg1: $List$Type<(any)>, arg2: $TreeMap$Type<(any), (any)>, arg3: $TreeMap$Type<(any), (any)>, arg4: $List$Type<(any)>, arg5: integer, arg6: $DefaultConstructorMarker$Type)
constructor(arg0: $List$Type<(string)>, arg1: $List$Type<(string)>, arg2: $TreeMap$Type<(float), ($List$Type<(string)>)>, arg3: $TreeMap$Type<(float), ($List$Type<(string)>)>, arg4: $List$Type<($ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $List$Type<(string)>, arg1: $List$Type<(string)>, arg2: $TreeMap$Type<(float), ($List$Type<(string)>)>, arg3: $TreeMap$Type<(float), ($List$Type<(string)>)>, arg4: $List$Type<($ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance$Type)>): $ParticleEffectComponents$EmitterLifetimeEvents
public "component4"(): $TreeMap<(float), ($List<(string)>)>
public "component3"(): $TreeMap<(float), ($List<(string)>)>
public "component5"(): $List<($ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance)>
public "component1"(): $List<(string)>
public "component2"(): $List<(string)>
public "getTimeline"(): $TreeMap<(float), ($List<(string)>)>
public "getCreationEvents"(): $List<(string)>
public "getTravelDistanceEvents"(): $TreeMap<(float), ($List<(string)>)>
public "getLoopingTravelDistanceEvents"(): $List<($ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance)>
public "getExpirationEvents"(): $List<(string)>
get "timeline"(): $TreeMap<(float), ($List<(string)>)>
get "creationEvents"(): $List<(string)>
get "travelDistanceEvents"(): $TreeMap<(float), ($List<(string)>)>
get "loopingTravelDistanceEvents"(): $List<($ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance)>
get "expirationEvents"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterLifetimeEvents$Type = ($ParticleEffectComponents$EmitterLifetimeEvents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterLifetimeEvents_ = $ParticleEffectComponents$EmitterLifetimeEvents$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/featured/$FeaturedPageCollection" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$FeaturedPage, $FeaturedPage$Type} from "packages/gg/essential/mod/cosmetics/featured/$FeaturedPage"
import {$FeaturedPageCollection$Availability, $FeaturedPageCollection$Availability$Type} from "packages/gg/essential/mod/cosmetics/featured/$FeaturedPageCollection$Availability"
import {$FeaturedPageCollection$Companion, $FeaturedPageCollection$Companion$Type} from "packages/gg/essential/mod/cosmetics/featured/$FeaturedPageCollection$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $FeaturedPageCollection {
static readonly "Companion": $FeaturedPageCollection$Companion

constructor(arg0: integer, arg1: string, arg2: $FeaturedPageCollection$Availability$Type, arg3: $Map$Type<(any), (any)>, arg4: $SerializationConstructorMarker$Type)
constructor(arg0: string, arg1: $FeaturedPageCollection$Availability$Type, arg2: $Map$Type<(any), (any)>, arg3: integer, arg4: $DefaultConstructorMarker$Type)
constructor(arg0: string, arg1: $FeaturedPageCollection$Availability$Type, arg2: $Map$Type<(integer), ($FeaturedPage$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getId"(): string
public "copy"(arg0: string, arg1: $FeaturedPageCollection$Availability$Type, arg2: $Map$Type<(integer), ($FeaturedPage$Type)>): $FeaturedPageCollection
public "component3"(): $Map<(integer), ($FeaturedPage)>
public "getPages"(): $Map<(integer), ($FeaturedPage)>
public "component1"(): string
public "component2"(): $FeaturedPageCollection$Availability
public "getAvailability"(): $FeaturedPageCollection$Availability
public "getClosestLayoutOrNull"(arg0: integer): $Map$Entry<(integer), ($FeaturedPage)>
get "id"(): string
get "pages"(): $Map<(integer), ($FeaturedPage)>
get "availability"(): $FeaturedPageCollection$Availability
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeaturedPageCollection$Type = ($FeaturedPageCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeaturedPageCollection_ = $FeaturedPageCollection$Type;
}}
declare module "packages/gg/essential/mixins/ext/client/model/geom/$ExtraTransformHolder" {
import {$Mat4, $Mat4$Type} from "packages/gg/essential/lib/kotgl/matrix/matrices/$Mat4"

export interface $ExtraTransformHolder {

 "setExtra"(arg0: $Mat4$Type): void
 "getExtra"(): $Mat4
}

export namespace $ExtraTransformHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraTransformHolder$Type = ($ExtraTransformHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraTransformHolder_ = $ExtraTransformHolder$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleInitialSpin$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticleEffectComponents$ParticleInitialSpin, $ParticleEffectComponents$ParticleInitialSpin$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleInitialSpin"

export class $ParticleEffectComponents$ParticleInitialSpin$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$ParticleInitialSpin)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleInitialSpin$Companion$Type = ($ParticleEffectComponents$ParticleInitialSpin$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleInitialSpin$Companion_ = $ParticleEffectComponents$ParticleInitialSpin$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$SoundDefinitionsFile$Sound" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$SoundDefinitionsFile$Sound$Companion, $SoundDefinitionsFile$Sound$Companion$Type} from "packages/gg/essential/model/file/$SoundDefinitionsFile$Sound$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $SoundDefinitionsFile$Sound {
static readonly "Companion": $SoundDefinitionsFile$Sound$Companion

constructor(arg0: integer, arg1: string, arg2: boolean, arg3: boolean, arg4: float, arg5: float, arg6: boolean, arg7: boolean, arg8: integer, arg9: $SerializationConstructorMarker$Type)
constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: float, arg4: float, arg5: boolean, arg6: boolean, arg7: integer)
constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: float, arg4: float, arg5: boolean, arg6: boolean, arg7: integer, arg8: integer, arg9: $DefaultConstructorMarker$Type)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: boolean, arg2: boolean, arg3: float, arg4: float, arg5: boolean, arg6: boolean, arg7: integer): $SoundDefinitionsFile$Sound
public "getStream"(): boolean
public "component4"(): float
public "component3"(): boolean
public "component5"(): float
public "getVolume"(): float
public "getWeight"(): integer
public "component1"(): string
public "component2"(): boolean
public "component8"(): integer
public "getPitch"(): float
public "component7"(): boolean
public "component6"(): boolean
public "getInterruptible"(): boolean
public "getDirectional"(): boolean
public "getLooping"(): boolean
get "name"(): string
get "stream"(): boolean
get "volume"(): float
get "weight"(): integer
get "pitch"(): float
get "interruptible"(): boolean
get "directional"(): boolean
get "looping"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundDefinitionsFile$Sound$Type = ($SoundDefinitionsFile$Sound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundDefinitionsFile$Sound_ = $SoundDefinitionsFile$Sound$Type;
}}
declare module "packages/gg/essential/util/$UIdentifier$Companion" {
import {$UIdentifier, $UIdentifier$Type} from "packages/gg/essential/util/$UIdentifier"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $UIdentifier$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "of"(arg0: string): $UIdentifier
public "serializer"(): $KSerializer<($UIdentifier)>
public "ofLegacy"(arg0: string): $UIdentifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIdentifier$Companion$Type = ($UIdentifier$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UIdentifier$Companion_ = $UIdentifier$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance$Companion, $ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance$Companion"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance {
static readonly "Companion": $ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance$Companion

constructor(arg0: float, arg1: $List$Type<(string)>)
constructor(arg0: integer, arg1: float, arg2: $List$Type<(any)>, arg3: $SerializationConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: float, arg1: $List$Type<(string)>): $ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance
public "getDistance"(): float
public "component1"(): float
public "component2"(): $List<(string)>
public "getEffects"(): $List<(string)>
get "distance"(): float
get "effects"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance$Type = ($ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance_ = $ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance$Type;
}}
declare module "packages/gg/essential/model/file/$MolangColorOrGradient" {
import {$MolangColorOrGradient$Companion, $MolangColorOrGradient$Companion$Type} from "packages/gg/essential/model/file/$MolangColorOrGradient$Companion"
import {$MolangContext, $MolangContext$Type} from "packages/gg/essential/model/molang/$MolangContext"
import {$Vec4, $Vec4$Type} from "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec4"

export interface $MolangColorOrGradient {

 "eval"(arg0: $MolangContext$Type): $Vec4

(arg0: $MolangContext$Type): $Vec4
}

export namespace $MolangColorOrGradient {
const Companion: $MolangColorOrGradient$Companion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolangColorOrGradient$Type = ($MolangColorOrGradient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolangColorOrGradient_ = $MolangColorOrGradient$Type;
}}
declare module "packages/gg/essential/gui/elementa/state/v2/$ObserverImpl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ObserverImpl {

}

export namespace $ObserverImpl {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObserverImpl$Type = ($ObserverImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObserverImpl_ = $ObserverImpl$Type;
}}
declare module "packages/gg/essential/cosmetics/state/$EssentialAnimationSystem$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$BedrockModel, $BedrockModel$Type} from "packages/gg/essential/model/$BedrockModel"
import {$AnimationEvent, $AnimationEvent$Type} from "packages/gg/essential/cosmetics/events/$AnimationEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssentialAnimationSystem$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "getRandomEmoteAnimationEventOrNull"(arg0: $BedrockModel$Type, arg1: $Map$Type<(string), (string)>): $AnimationEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssentialAnimationSystem$Companion$Type = ($EssentialAnimationSystem$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssentialAnimationSystem$Companion_ = $EssentialAnimationSystem$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ModelFile$Description" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ModelFile$Description$Companion, $ModelFile$Description$Companion$Type} from "packages/gg/essential/model/file/$ModelFile$Description$Companion"
import {$Vector3, $Vector3$Type} from "packages/gg/essential/model/$Vector3"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ModelFile$Description {
static readonly "Companion": $ModelFile$Description$Companion

constructor(arg0: integer, arg1: string, arg2: integer, arg3: integer, arg4: boolean, arg5: float, arg6: float, arg7: $Vector3$Type, arg8: $SerializationConstructorMarker$Type)
constructor(arg0: string, arg1: integer, arg2: integer, arg3: boolean, arg4: float, arg5: float, arg6: $Vector3$Type, arg7: integer, arg8: $DefaultConstructorMarker$Type)
constructor(arg0: string, arg1: integer, arg2: integer, arg3: boolean, arg4: float, arg5: float, arg6: $Vector3$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: integer, arg2: integer, arg3: boolean, arg4: float, arg5: float, arg6: $Vector3$Type): $ModelFile$Description
public "getIdentifier"(): string
public "component4"(): boolean
public "component3"(): integer
public "component5"(): float
public "component1"(): string
public "component2"(): integer
public "getTextureHeight"(): integer
public "getTextureWidth"(): integer
public "component7"(): $Vector3
public "component6"(): float
public "getVisibleBoundsHeight"(): float
public "getTextureTranslucent"(): boolean
public "getVisibleBoundsWidth"(): float
public "getVisibleBoundsOffset"(): $Vector3
get "identifier"(): string
get "textureHeight"(): integer
get "textureWidth"(): integer
get "visibleBoundsHeight"(): float
get "textureTranslucent"(): boolean
get "visibleBoundsWidth"(): float
get "visibleBoundsOffset"(): $Vector3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$Description$Type = ($ModelFile$Description);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile$Description_ = $ModelFile$Description$Type;
}}
declare module "packages/gg/essential/util/image/bitmap/$Bitmap" {
import {$MutableBitmap, $MutableBitmap$Type} from "packages/gg/essential/util/image/bitmap/$MutableBitmap"
import {$Bitmap$Companion, $Bitmap$Companion$Type} from "packages/gg/essential/util/image/bitmap/$Bitmap$Companion"

export interface $Bitmap {

 "getWidth"(): integer
 "getHeight"(): integer
 "get-XEV4ZDs"(arg0: integer, arg1: integer): integer
 "mutableCopy"(): $MutableBitmap
}

export namespace $Bitmap {
const Companion: $Bitmap$Companion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bitmap$Type = ($Bitmap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Bitmap_ = $Bitmap$Type;
}}
declare module "packages/gg/essential/model/$Cube" {
import {$UVertexConsumer, $UVertexConsumer$Type} from "packages/gg/essential/model/util/$UVertexConsumer"
import {$UMatrixStack, $UMatrixStack$Type} from "packages/gg/essential/model/util/$UMatrixStack"
import {$Face, $Face$Type} from "packages/gg/essential/model/$Face"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CubeUvData, $CubeUvData$Type} from "packages/gg/essential/model/$CubeUvData"

export class $Cube {

constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: boolean, arg8: integer, arg9: integer, arg10: $CubeUvData$Type)
constructor(arg0: $List$Type<($Face$Type)>, arg1: boolean)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: boolean, arg10: integer, arg11: integer)

public "getMirror"(): boolean
public "deepCopy"(): $Cube
public "render-Vzb6JUo"(arg0: $UMatrixStack$Type, arg1: $UVertexConsumer$Type, arg2: integer, arg3: float): void
public "getBoxName"(): string
public "setPosX2"(arg0: float): void
public "getQuadList"(): $List<($Face)>
public "setPosY2"(arg0: float): void
public "getPosX1"(): float
public "setPosZ2"(arg0: float): void
public "getPosX2"(): float
public "setPosX1"(arg0: float): void
public "setPosY1"(arg0: float): void
public "getPosZ2"(): float
public "getPosY2"(): float
public "setBoxName"(arg0: string): void
public "setPosZ1"(arg0: float): void
public "getPosY1"(): float
public "getPosZ1"(): float
get "mirror"(): boolean
get "boxName"(): string
set "posX2"(value: float)
get "quadList"(): $List<($Face)>
set "posY2"(value: float)
get "posX1"(): float
set "posZ2"(value: float)
get "posX2"(): float
set "posX1"(value: float)
set "posY1"(value: float)
get "posZ2"(): float
get "posY2"(): float
set "boxName"(value: string)
set "posZ1"(value: float)
get "posY1"(): float
get "posZ1"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cube$Type = ($Cube);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cube_ = $Cube$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Event$RandomizeOption" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticlesFile$Event, $ParticlesFile$Event$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event"
import {$ParticlesFile$Event$RandomizeOption$Companion, $ParticlesFile$Event$RandomizeOption$Companion$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event$RandomizeOption$Companion"

export class $ParticlesFile$Event$RandomizeOption {
static readonly "Companion": $ParticlesFile$Event$RandomizeOption$Companion

constructor(arg0: float, arg1: $ParticlesFile$Event$Type)
constructor(arg0: integer, arg1: float, arg2: $ParticlesFile$Event$Type, arg3: $SerializationConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getValue"(): $ParticlesFile$Event
public "copy"(arg0: float, arg1: $ParticlesFile$Event$Type): $ParticlesFile$Event$RandomizeOption
public "getWeight"(): float
public "component1"(): float
public "component2"(): $ParticlesFile$Event
get "value"(): $ParticlesFile$Event
get "weight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Event$RandomizeOption$Type = ($ParticlesFile$Event$RandomizeOption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Event$RandomizeOption_ = $ParticlesFile$Event$RandomizeOption$Type;
}}
declare module "packages/gg/essential/cosmetics/$IngameEquippedOutfitsUpdateEncoder" {
import {$IngameEquippedOutfitsManager$Update, $IngameEquippedOutfitsManager$Update$Type} from "packages/gg/essential/cosmetics/$IngameEquippedOutfitsManager$Update"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TrackedList, $TrackedList$Type} from "packages/gg/essential/gui/elementa/state/v2/collections/$TrackedList"
import {$EquippedOutfitsManager$Outfit, $EquippedOutfitsManager$Outfit$Type} from "packages/gg/essential/network/connectionmanager/cosmetics/$EquippedOutfitsManager$Outfit"
import {$Pair, $Pair$Type} from "packages/kotlin/$Pair"
import {$List, $List$Type} from "packages/java/util/$List"

export class $IngameEquippedOutfitsUpdateEncoder {

constructor()

public "update"(arg0: $TrackedList$Type<($Pair$Type<($UUID$Type), ($EquippedOutfitsManager$Outfit$Type)>)>): $List<($Pair<($UUID), ($List<($IngameEquippedOutfitsManager$Update)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngameEquippedOutfitsUpdateEncoder$Type = ($IngameEquippedOutfitsUpdateEncoder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngameEquippedOutfitsUpdateEncoder_ = $IngameEquippedOutfitsUpdateEncoder$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterInitialization$Companion" {
import {$ParticleEffectComponents$EmitterInitialization, $ParticleEffectComponents$EmitterInitialization$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterInitialization"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$EmitterInitialization$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$EmitterInitialization)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterInitialization$Companion$Type = ($ParticleEffectComponents$EmitterInitialization$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterInitialization$Companion_ = $ParticleEffectComponents$EmitterInitialization$Companion$Type;
}}
declare module "packages/gg/essential/model/$PositionTexVertex" {
import {$Vector3, $Vector3$Type} from "packages/gg/essential/model/$Vector3"

export class $PositionTexVertex {
 "vector3": $Vector3
 "texturePositionY": float

constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float)
constructor(arg0: $PositionTexVertex$Type, arg1: float, arg2: float)
constructor(arg0: $Vector3$Type, arg1: float, arg2: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Vector3$Type, arg1: float, arg2: float): $PositionTexVertex
public "copy"(): $PositionTexVertex
public "component3"(): float
public "getTexturePositionX"(): float
public "setTexturePositionX"(arg0: float): void
public "component1"(): $Vector3
public "component2"(): float
public "setTexturePosition"(arg0: float, arg1: float): $PositionTexVertex
get "texturePositionX"(): float
set "texturePositionX"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionTexVertex$Type = ($PositionTexVertex);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionTexVertex_ = $PositionTexVertex$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapeBox$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticleEffectComponents$EmitterShapeBox, $ParticleEffectComponents$EmitterShapeBox$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapeBox"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$EmitterShapeBox$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$EmitterShapeBox)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterShapeBox$Companion$Type = ($ParticleEffectComponents$EmitterShapeBox$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterShapeBox$Companion_ = $ParticleEffectComponents$EmitterShapeBox$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ModelFile$Geometry$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ModelFile$Geometry, $ModelFile$Geometry$Type} from "packages/gg/essential/model/file/$ModelFile$Geometry"

export class $ModelFile$Geometry$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ModelFile$Geometry)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$Geometry$Companion$Type = ($ModelFile$Geometry$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile$Geometry$Companion_ = $ModelFile$Geometry$Companion$Type;
}}
declare module "packages/gg/essential/model/$ParticleSystem" {
import {$UMatrixStack, $UMatrixStack$Type} from "packages/gg/essential/model/util/$UMatrixStack"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Light, $Light$Type} from "packages/gg/essential/model/light/$Light"
import {$LightProvider, $LightProvider$Type} from "packages/gg/essential/model/light/$LightProvider"
import {$Random, $Random$Type} from "packages/kotlin/random/$Random"
import {$Function1, $Function1$Type} from "packages/kotlin/jvm/functions/$Function1"
import {$Vec3, $Vec3$Type} from "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec3"
import {$Quaternion, $Quaternion$Type} from "packages/gg/essential/model/util/$Quaternion"
import {$RenderBackend$CommandQueue, $RenderBackend$CommandQueue$Type} from "packages/gg/essential/model/backend/$RenderBackend$CommandQueue"
import {$CollisionProvider, $CollisionProvider$Type} from "packages/gg/essential/model/collision/$CollisionProvider"
import {$Unit, $Unit$Type} from "packages/kotlin/$Unit"
import {$ModelAnimationState$ParticleEvent, $ModelAnimationState$ParticleEvent$Type} from "packages/gg/essential/model/$ModelAnimationState$ParticleEvent"

export class $ParticleSystem {

constructor(arg0: $Random$Type, arg1: $CollisionProvider$Type, arg2: $LightProvider$Type, arg3: $Function1$Type<(any), ($Unit$Type)>)

public "update"(): void
public "isEmpty"(): boolean
public "render"(arg0: $UMatrixStack$Type, arg1: $Vec3$Type, arg2: $Quaternion$Type, arg3: $RenderBackend$CommandQueue$Type, arg4: $UUID$Type, arg5: boolean, arg6: boolean, arg7: $UUID$Type): void
public "hasAnythingToRender"(): boolean
public "render-wYRpD5U"(arg0: $UMatrixStack$Type, arg1: $Vec3$Type, arg2: $Quaternion$Type, arg3: $RenderBackend$CommandQueue$Type, arg4: $UUID$Type, arg5: boolean, arg6: boolean, arg7: $UUID$Type, arg8: $Light$Type): void
public "spawn"(arg0: $ModelAnimationState$ParticleEvent$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleSystem$Type = ($ParticleSystem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleSystem_ = $ParticleSystem$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$AnimationVariant$Companion" {
import {$CosmeticSetting$AnimationVariant, $CosmeticSetting$AnimationVariant$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$AnimationVariant"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $CosmeticSetting$AnimationVariant$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($CosmeticSetting$AnimationVariant)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticSetting$AnimationVariant$Companion$Type = ($CosmeticSetting$AnimationVariant$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticSetting$AnimationVariant$Companion_ = $CosmeticSetting$AnimationVariant$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionParametric" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$ParticleMotionParametric$Companion, $ParticleEffectComponents$ParticleMotionParametric$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionParametric$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$MolangVec3, $MolangVec3$Type} from "packages/gg/essential/model/molang/$MolangVec3"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"

export class $ParticleEffectComponents$ParticleMotionParametric {
static readonly "Companion": $ParticleEffectComponents$ParticleMotionParametric$Companion

constructor(arg0: integer, arg1: $MolangVec3$Type, arg2: $MolangVec3$Type, arg3: $Molang$Type, arg4: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $MolangVec3$Type, arg1: $MolangVec3$Type, arg2: $Molang$Type, arg3: integer, arg4: $DefaultConstructorMarker$Type)
constructor(arg0: $MolangVec3$Type, arg1: $MolangVec3$Type, arg2: $Molang$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $MolangVec3$Type, arg1: $MolangVec3$Type, arg2: $Molang$Type): $ParticleEffectComponents$ParticleMotionParametric
public "component3"(): $Molang
public "getRotation"(): $Molang
public "getDirection"(): $MolangVec3
public "component1"(): $MolangVec3
public "component2"(): $MolangVec3
public "getRelativePosition"(): $MolangVec3
get "rotation"(): $Molang
get "direction"(): $MolangVec3
get "relativePosition"(): $MolangVec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleMotionParametric$Type = ($ParticleEffectComponents$ParticleMotionParametric);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleMotionParametric_ = $ParticleEffectComponents$ParticleMotionParametric$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/$CosmeticBundle$Skin$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$CosmeticBundle$Skin, $CosmeticBundle$Skin$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticBundle$Skin"

export class $CosmeticBundle$Skin$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($CosmeticBundle$Skin)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticBundle$Skin$Companion$Type = ($CosmeticBundle$Skin$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticBundle$Skin$Companion_ = $CosmeticBundle$Skin$Companion$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/database/$GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion, $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Type} from "packages/gg/essential/mod/cosmetics/database/$GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion"

export class $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Companion {


public "serializer"(): $KSerializer<($GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Companion$Type = ($GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Companion_ = $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Companion$Type;
}}
declare module "packages/gg/essential/model/util/$TreeMap$Companion" {
import {$TreeMap, $TreeMap$Type} from "packages/gg/essential/model/util/$TreeMap"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $TreeMap$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"<K, V>(arg0: $KSerializer$Type<(K)>, arg1: $KSerializer$Type<(V)>): $KSerializer<($TreeMap<(K), (V)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeMap$Companion$Type = ($TreeMap$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeMap$Companion_ = $TreeMap$Companion$Type;
}}
declare module "packages/gg/essential/mixins/transformers/feature/gamerules/$MixinGameRulesValueAccessor" {
import {$GameRules$Type, $GameRules$Type$Type} from "packages/net/minecraft/world/level/$GameRules$Type"

export interface $MixinGameRulesValueAccessor {

 "getType"(): $GameRules$Type<(any)>

(): $GameRules$Type<(any)>
}

export namespace $MixinGameRulesValueAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinGameRulesValueAccessor$Type = ($MixinGameRulesValueAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinGameRulesValueAccessor_ = $MixinGameRulesValueAccessor$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/featured/$FeaturedPageCollection$Availability" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$FeaturedPageCollection$Availability$Companion, $FeaturedPageCollection$Availability$Companion$Type} from "packages/gg/essential/mod/cosmetics/featured/$FeaturedPageCollection$Availability$Companion"

export class $FeaturedPageCollection$Availability {
static readonly "Companion": $FeaturedPageCollection$Availability$Companion

constructor(arg0: integer, arg1: $Instant$Type, arg2: $Instant$Type, arg3: $Instant$Type, arg4: $SerializationConstructorMarker$Type)
constructor(arg0: $Instant$Type, arg1: $Instant$Type, arg2: $Instant$Type, arg3: integer, arg4: $DefaultConstructorMarker$Type)
constructor(arg0: $Instant$Type, arg1: $Instant$Type, arg2: $Instant$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Instant$Type, arg1: $Instant$Type, arg2: $Instant$Type): $FeaturedPageCollection$Availability
public "component3"(): $Instant
public "getAfter"(): $Instant
public "component1"(): $Instant
public "component2"(): $Instant
public "getShowTimerAfter"(): $Instant
public "getUntil"(): $Instant
get "after"(): $Instant
get "showTimerAfter"(): $Instant
get "until"(): $Instant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeaturedPageCollection$Availability$Type = ($FeaturedPageCollection$Availability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeaturedPageCollection$Availability_ = $FeaturedPageCollection$Availability$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Curve" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ParticlesFile$Curve$Type, $ParticlesFile$Curve$Type$Type} from "packages/gg/essential/model/file/$ParticlesFile$Curve$Type"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"
import {$ParticlesFile$Curve$Companion, $ParticlesFile$Curve$Companion$Type} from "packages/gg/essential/model/file/$ParticlesFile$Curve$Companion"

export class $ParticlesFile$Curve {
static readonly "Companion": $ParticlesFile$Curve$Companion

constructor(arg0: integer, arg1: $ParticlesFile$Curve$Type$Type, arg2: $List$Type<(any)>, arg3: $Molang$Type, arg4: $Molang$Type, arg5: $SerializationConstructorMarker$Type)
constructor(arg0: $ParticlesFile$Curve$Type$Type, arg1: $List$Type<(any)>, arg2: $Molang$Type, arg3: $Molang$Type, arg4: integer, arg5: $DefaultConstructorMarker$Type)
constructor(arg0: $ParticlesFile$Curve$Type$Type, arg1: $List$Type<($Molang$Type)>, arg2: $Molang$Type, arg3: $Molang$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getType"(): $ParticlesFile$Curve$Type
public "copy"(arg0: $ParticlesFile$Curve$Type$Type, arg1: $List$Type<($Molang$Type)>, arg2: $Molang$Type, arg3: $Molang$Type): $ParticlesFile$Curve
public "getInput"(): $Molang
public "component4"(): $Molang
public "component3"(): $Molang
public "getRange"(): $Molang
public "component1"(): $ParticlesFile$Curve$Type
public "component2"(): $List<($Molang)>
public "getNodes"(): $List<($Molang)>
get "type"(): $ParticlesFile$Curve$Type
get "input"(): $Molang
get "range"(): $Molang
get "nodes"(): $List<($Molang)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Curve$Type = ($ParticlesFile$Curve);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Curve_ = $ParticlesFile$Curve$Type;
}}
declare module "packages/gg/essential/mixins/impl/client/gui/$EssentialPostScreenDrawHook" {
import {$UDrawContext, $UDrawContext$Type} from "packages/gg/essential/util/$UDrawContext"

export interface $EssentialPostScreenDrawHook {

 "essential$afterDraw"(arg0: $UDrawContext$Type, arg1: integer, arg2: integer, arg3: float): void

(arg0: $UDrawContext$Type, arg1: integer, arg2: integer, arg3: float): void
}

export namespace $EssentialPostScreenDrawHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssentialPostScreenDrawHook$Type = ($EssentialPostScreenDrawHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssentialPostScreenDrawHook_ = $EssentialPostScreenDrawHook$Type;
}}
declare module "packages/gg/essential/model/$Vector3$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $Vector3$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vector3$Companion$Type = ($Vector3$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vector3$Companion_ = $Vector3$Companion$Type;
}}
declare module "packages/gg/essential/mod/$EssentialAsset$Companion" {
import {$EssentialAsset, $EssentialAsset$Type} from "packages/gg/essential/mod/$EssentialAsset"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $EssentialAsset$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "of"(arg0: (byte)[]): $EssentialAsset
public "of"(arg0: string): $EssentialAsset
public "serializer"(): $KSerializer<($EssentialAsset)>
public "getEMPTY"(): $EssentialAsset
get "eMPTY"(): $EssentialAsset
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssentialAsset$Companion$Type = ($EssentialAsset$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssentialAsset$Companion_ = $EssentialAsset$Companion$Type;
}}
declare module "packages/gg/essential/model/backend/$PlayerPose$Part$Companion" {
import {$PlayerPose$Part, $PlayerPose$Part$Type} from "packages/gg/essential/model/backend/$PlayerPose$Part"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $PlayerPose$Part$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "getMISSING"(): $PlayerPose$Part
public "getZERO"(): $PlayerPose$Part
get "mISSING"(): $PlayerPose$Part
get "zERO"(): $PlayerPose$Part
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerPose$Part$Companion$Type = ($PlayerPose$Part$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerPose$Part$Companion_ = $PlayerPose$Part$Companion$Type;
}}
declare module "packages/gg/essential/mod/$Skin$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Skin, $Skin$Type} from "packages/gg/essential/mod/$Skin"
import {$Model, $Model$Type} from "packages/gg/essential/mod/$Model"

export class $Skin$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($Skin)>
public "defaultPre1_19_3For"(arg0: $UUID$Type): $Skin
public "defaultFor"(arg0: $UUID$Type): $Skin
public "getEFE_SLIM"(): $Skin
public "getMAKENA_SLIM"(): $Skin
public "getKAI_SLIM"(): $Skin
public "getSTEVE_SLIM"(): $Skin
public "getARI_WIDE"(): $Skin
public "getEFE_WIDE"(): $Skin
public "getMAKENA_WIDE"(): $Skin
public "getNOOR_WIDE"(): $Skin
public "getALEX_WIDE"(): $Skin
public "getSUNNY_SLIM"(): $Skin
public "getALEX_SLIM"(): $Skin
public "getZURI_SLIM"(): $Skin
public "getNOOR_SLIM"(): $Skin
public "getKAI_WIDE"(): $Skin
public "getARI_SLIM"(): $Skin
public "getSUNNY_WIDE"(): $Skin
public "getSTEVE_WIDE"(): $Skin
public "getDEFAULT_SKINS"(): $List<($Skin)>
public "getZURI_WIDE"(): $Skin
public "fromInfra"(arg0: string): $Skin
public "hashFromUrl"(arg0: string): string
public "fromUrl"(arg0: string, arg1: $Model$Type): $Skin
get "eFE_SLIM"(): $Skin
get "mAKENA_SLIM"(): $Skin
get "kAI_SLIM"(): $Skin
get "sTEVE_SLIM"(): $Skin
get "aRI_WIDE"(): $Skin
get "eFE_WIDE"(): $Skin
get "mAKENA_WIDE"(): $Skin
get "nOOR_WIDE"(): $Skin
get "aLEX_WIDE"(): $Skin
get "sUNNY_SLIM"(): $Skin
get "aLEX_SLIM"(): $Skin
get "zURI_SLIM"(): $Skin
get "nOOR_SLIM"(): $Skin
get "kAI_WIDE"(): $Skin
get "aRI_SLIM"(): $Skin
get "sUNNY_WIDE"(): $Skin
get "sTEVE_WIDE"(): $Skin
get "dEFAULT_SKINS"(): $List<($Skin)>
get "zURI_WIDE"(): $Skin
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Skin$Companion$Type = ($Skin$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Skin$Companion_ = $Skin$Companion$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticProperty$InterruptsEmote$Data$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$CosmeticProperty$InterruptsEmote$Data, $CosmeticProperty$InterruptsEmote$Data$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticProperty$InterruptsEmote$Data"

export class $CosmeticProperty$InterruptsEmote$Data$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($CosmeticProperty$InterruptsEmote$Data)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticProperty$InterruptsEmote$Data$Companion$Type = ($CosmeticProperty$InterruptsEmote$Data$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticProperty$InterruptsEmote$Data$Companion_ = $CosmeticProperty$InterruptsEmote$Data$Companion$Type;
}}
declare module "packages/gg/essential/sps/$IntegratedServerManager$GameMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IntegratedServerManager$GameMode$Companion, $IntegratedServerManager$GameMode$Companion$Type} from "packages/gg/essential/sps/$IntegratedServerManager$GameMode$Companion"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $IntegratedServerManager$GameMode extends $Enum<($IntegratedServerManager$GameMode)> {
static readonly "Companion": $IntegratedServerManager$GameMode$Companion
static readonly "Survival": $IntegratedServerManager$GameMode
static readonly "Creative": $IntegratedServerManager$GameMode
static readonly "Adventure": $IntegratedServerManager$GameMode
static readonly "Spectator": $IntegratedServerManager$GameMode


public static "values"(): ($IntegratedServerManager$GameMode)[]
public static "valueOf"(arg0: string): $IntegratedServerManager$GameMode
public static "getEntries"(): $EnumEntries<($IntegratedServerManager$GameMode)>
get "entries"(): $EnumEntries<($IntegratedServerManager$GameMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegratedServerManager$GameMode$Type = (("adventure") | ("survival") | ("spectator") | ("creative")) | ($IntegratedServerManager$GameMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegratedServerManager$GameMode_ = $IntegratedServerManager$GameMode$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeLooping" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticleEffectComponents$EmitterLifetimeLooping$Companion, $ParticleEffectComponents$EmitterLifetimeLooping$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeLooping$Companion"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"

export class $ParticleEffectComponents$EmitterLifetimeLooping {
static readonly "Companion": $ParticleEffectComponents$EmitterLifetimeLooping$Companion

constructor(arg0: integer, arg1: $Molang$Type, arg2: $Molang$Type, arg3: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $Molang$Type, arg1: $Molang$Type, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: $Molang$Type, arg1: $Molang$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Molang$Type, arg1: $Molang$Type): $ParticleEffectComponents$EmitterLifetimeLooping
public "component1"(): $Molang
public "component2"(): $Molang
public "getSleepTime"(): $Molang
public "getActiveTime"(): $Molang
get "sleepTime"(): $Molang
get "activeTime"(): $Molang
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterLifetimeLooping$Type = ($ParticleEffectComponents$EmitterLifetimeLooping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterLifetimeLooping_ = $ParticleEffectComponents$EmitterLifetimeLooping$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapeSphere$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticleEffectComponents$EmitterShapeSphere, $ParticleEffectComponents$EmitterShapeSphere$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapeSphere"

export class $ParticleEffectComponents$EmitterShapeSphere$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$EmitterShapeSphere)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterShapeSphere$Companion$Type = ($ParticleEffectComponents$EmitterShapeSphere$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterShapeSphere$Companion_ = $ParticleEffectComponents$EmitterShapeSphere$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLocalSpace$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticleEffectComponents$EmitterLocalSpace, $ParticleEffectComponents$EmitterLocalSpace$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLocalSpace"

export class $ParticleEffectComponents$EmitterLocalSpace$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$EmitterLocalSpace)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterLocalSpace$Companion$Type = ($ParticleEffectComponents$EmitterLocalSpace$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterLocalSpace$Companion_ = $ParticleEffectComponents$EmitterLocalSpace$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Description$Companion" {
import {$ParticlesFile$Description, $ParticlesFile$Description$Type} from "packages/gg/essential/model/file/$ParticlesFile$Description"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticlesFile$Description$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticlesFile$Description)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Description$Companion$Type = ($ParticlesFile$Description$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Description$Companion_ = $ParticlesFile$Description$Companion$Type;
}}
declare module "packages/gg/essential/model/molang/$MolangQuery" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MolangQuery {

}

export namespace $MolangQuery {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolangQuery$Type = ($MolangQuery);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolangQuery_ = $MolangQuery$Type;
}}
declare module "packages/gg/essential/mixins/transformers/server/$GameRulesAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRulesAccessor {

}

export namespace $GameRulesAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRulesAccessor$Type = ($GameRulesAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRulesAccessor_ = $GameRulesAccessor$Type;
}}
declare module "packages/gg/essential/model/util/$UMatrixStack" {
import {$Quaternion, $Quaternion$Type} from "packages/gg/essential/model/util/$Quaternion"
import {$Mat4, $Mat4$Type} from "packages/gg/essential/lib/kotgl/matrix/matrices/$Mat4"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UMatrixStack$Entry, $UMatrixStack$Entry$Type} from "packages/gg/essential/model/util/$UMatrixStack$Entry"
import {$Mat3, $Mat3$Type} from "packages/gg/essential/lib/kotgl/matrix/matrices/$Mat3"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Vec3, $Vec3$Type} from "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec3"

export class $UMatrixStack {

constructor(arg0: $List$Type<($UMatrixStack$Entry$Type)>)
constructor(arg0: $Mat4$Type, arg1: $Mat3$Type, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: $Mat4$Type, arg1: $Mat3$Type)

public "multiply"(arg0: $UMatrixStack$Type): void
public "scale"(arg0: float, arg1: float, arg2: float): void
public "scale"(arg0: float): void
public "peek"(): $UMatrixStack$Entry
public "rotate"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: boolean): void
public "rotate"(arg0: $Quaternion$Type): void
public "push"(): void
public "pop"(): void
public "fork"(): $UMatrixStack
public "translate"(arg0: float, arg1: float, arg2: float): void
public "translate"(arg0: $Vec3$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UMatrixStack$Type = ($UMatrixStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UMatrixStack_ = $UMatrixStack$Type;
}}
declare module "packages/gg/essential/model/backend/$PlayerPose$Companion" {
import {$PlayerPose$Part, $PlayerPose$Part$Type} from "packages/gg/essential/model/backend/$PlayerPose$Part"
import {$PlayerPose, $PlayerPose$Type} from "packages/gg/essential/model/backend/$PlayerPose"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$EnumPart, $EnumPart$Type} from "packages/gg/essential/model/$EnumPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PlayerPose$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "neutral"(): $PlayerPose
public "fromMap"(arg0: $Map$Type<($EnumPart$Type), ($PlayerPose$Part$Type)>, arg1: boolean): $PlayerPose
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerPose$Companion$Type = ($PlayerPose$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerPose$Companion_ = $PlayerPose$Companion$Type;
}}
declare module "packages/gg/essential/mixins/transformers/server/$MinecraftServerAccessor" {
import {$Thread, $Thread$Type} from "packages/java/lang/$Thread"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ServerStatus, $ServerStatus$Type} from "packages/net/minecraft/network/protocol/status/$ServerStatus"
import {$ServerStatus$Favicon, $ServerStatus$Favicon$Type} from "packages/net/minecraft/network/protocol/status/$ServerStatus$Favicon"

export interface $MinecraftServerAccessor {

 "invokeCreateMetadata"(): $ServerStatus
 "invokeLoadFavicon"(): $Optional<($ServerStatus$Favicon)>
 "setMetadata"(arg0: $ServerStatus$Type): void
 "setFavicon"(arg0: $ServerStatus$Favicon$Type): void
 "getServerThread"(): $Thread
}

export namespace $MinecraftServerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerAccessor$Type = ($MinecraftServerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftServerAccessor_ = $MinecraftServerAccessor$Type;
}}
declare module "packages/gg/essential/model/util/$UVertexConsumer" {
import {$UMatrixStack, $UMatrixStack$Type} from "packages/gg/essential/model/util/$UMatrixStack"

export interface $UVertexConsumer {

 "pos"(arg0: $UMatrixStack$Type, arg1: double, arg2: double, arg3: double): $UVertexConsumer
 "norm"(arg0: $UMatrixStack$Type, arg1: float, arg2: float, arg3: float): $UVertexConsumer
 "tex"(arg0: double, arg1: double): $UVertexConsumer
 "endVertex"(): $UVertexConsumer
 "color-EIFkdBU"(arg0: integer): $UVertexConsumer
 "light-vX8ayIk"(arg0: integer): $UVertexConsumer
}

export namespace $UVertexConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UVertexConsumer$Type = ($UVertexConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UVertexConsumer_ = $UVertexConsumer$Type;
}}
declare module "packages/gg/essential/util/$UDrawContext" {
import {$UMatrixStack, $UMatrixStack$Type} from "packages/gg/essential/universal/$UMatrixStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $UDrawContext {

constructor(mc: $GuiGraphics$Type, matrixStack: $UMatrixStack$Type)

public "getMatrixStack"(): $UMatrixStack
public "getMc"(): $GuiGraphics
get "matrixStack"(): $UMatrixStack
get "mc"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UDrawContext$Type = ($UDrawContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UDrawContext_ = $UDrawContext$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting" {
import {$CosmeticSettingType, $CosmeticSettingType$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSettingType"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$CosmeticSetting$Companion, $CosmeticSetting$Companion$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$Companion"

export class $CosmeticSetting {
static readonly "Companion": $CosmeticSetting$Companion

constructor(arg0: $DefaultConstructorMarker$Type)

public "getId"(): string
public "getType"(): $CosmeticSettingType
public "getEnabled"(): boolean
get "id"(): string
get "type"(): $CosmeticSettingType
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticSetting$Type = ($CosmeticSetting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticSetting_ = $CosmeticSetting$Type;
}}
declare module "packages/gg/essential/network/connectionmanager/cosmetics/$EquippedOutfitsManager" {
import {$State, $State$Type} from "packages/gg/essential/gui/elementa/state/v2/$State"
import {$EquippedCosmetic, $EquippedCosmetic$Type} from "packages/gg/essential/cosmetics/$EquippedCosmetic"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EquippedOutfitsManager$Outfit, $EquippedOutfitsManager$Outfit$Type} from "packages/gg/essential/network/connectionmanager/cosmetics/$EquippedOutfitsManager$Outfit"
import {$CosmeticSlot, $CosmeticSlot$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticSlot"
import {$Skin, $Skin$Type} from "packages/gg/essential/mod/$Skin"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $EquippedOutfitsManager {

 "getSkin"(arg0: $UUID$Type): $Skin
 "getCapeHash"(arg0: $UUID$Type): string
 "getVisibleCosmeticsState"(arg0: $UUID$Type): $State<($Map<($CosmeticSlot), ($EquippedCosmetic)>)>
 "getEquippedCosmeticsState"(arg0: $UUID$Type): $State<($EquippedOutfitsManager$Outfit)>
}

export namespace $EquippedOutfitsManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquippedOutfitsManager$Type = ($EquippedOutfitsManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquippedOutfitsManager_ = $EquippedOutfitsManager$Type;
}}
declare module "packages/gg/essential/cosmetics/$IngameEquippedOutfitsManager" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EquippedOutfitsManager$Outfit, $EquippedOutfitsManager$Outfit$Type} from "packages/gg/essential/network/connectionmanager/cosmetics/$EquippedOutfitsManager$Outfit"
import {$CosmeticSlot, $CosmeticSlot$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticSlot"
import {$CosmeticsData, $CosmeticsData$Type} from "packages/gg/essential/network/connectionmanager/cosmetics/$CosmeticsData"
import {$Function3, $Function3$Type} from "packages/kotlin/jvm/functions/$Function3"
import {$Skin, $Skin$Type} from "packages/gg/essential/mod/$Skin"
import {$EquippedOutfitsManager, $EquippedOutfitsManager$Type} from "packages/gg/essential/network/connectionmanager/cosmetics/$EquippedOutfitsManager"
import {$State, $State$Type} from "packages/gg/essential/gui/elementa/state/v2/$State"
import {$EquippedCosmetic, $EquippedCosmetic$Type} from "packages/gg/essential/cosmetics/$EquippedCosmetic"
import {$Unit, $Unit$Type} from "packages/kotlin/$Unit"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IngameEquippedOutfitsManager implements $EquippedOutfitsManager {

constructor(arg0: $CosmeticsData$Type, arg1: $Function3$Type<(any), (any), (any), ($Unit$Type)>)

public "getSkin"(arg0: $UUID$Type): $Skin
public "getCapeHash"(arg0: $UUID$Type): string
public "applyUpdates"(arg0: $List$Type<(any)>): void
public "applyUpdates"(arg0: $UUID$Type, arg1: $List$Type<(any)>): void
public "getVisibleCosmeticsState"(arg0: $UUID$Type): $State<($Map<($CosmeticSlot), ($EquippedCosmetic)>)>
public "getEquippedCosmeticsState"(arg0: $UUID$Type): $State<($EquippedOutfitsManager$Outfit)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngameEquippedOutfitsManager$Type = ($IngameEquippedOutfitsManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngameEquippedOutfitsManager_ = $IngameEquippedOutfitsManager$Type;
}}
declare module "packages/gg/essential/lib/kotgl/matrix/matrices/$Mat3" {
import {$Mat, $Mat$Type} from "packages/gg/essential/lib/kotgl/matrix/matrices/$Mat"

export class $Mat3 implements $Mat {

constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copyOf"(): $Mat3
public "getM11"(): float
public "getM02"(): float
public "getM22"(): float
public "getM10"(): float
public "getM00"(): float
public "getM21"(): float
public "getM12"(): float
public "getM01"(): float
public "getM20"(): float
get "m11"(): float
get "m02"(): float
get "m22"(): float
get "m10"(): float
get "m00"(): float
get "m21"(): float
get "m12"(): float
get "m01"(): float
get "m20"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mat3$Type = ($Mat3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mat3_ = $Mat3$Type;
}}
declare module "packages/gg/essential/lib/kotgl/matrix/matrices/$Mat4" {
import {$Mat, $Mat$Type} from "packages/gg/essential/lib/kotgl/matrix/matrices/$Mat"

export class $Mat4 implements $Mat {

constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copyOf"(): $Mat4
public "getM30"(): float
public "getM11"(): float
public "getM31"(): float
public "getM02"(): float
public "getM22"(): float
public "getM10"(): float
public "getM00"(): float
public "getM21"(): float
public "getM12"(): float
public "getM01"(): float
public "getM32"(): float
public "getM33"(): float
public "getM20"(): float
public "getM03"(): float
public "getM13"(): float
public "getM23"(): float
get "m30"(): float
get "m11"(): float
get "m31"(): float
get "m02"(): float
get "m22"(): float
get "m10"(): float
get "m00"(): float
get "m21"(): float
get "m12"(): float
get "m01"(): float
get "m32"(): float
get "m33"(): float
get "m20"(): float
get "m03"(): float
get "m13"(): float
get "m23"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mat4$Type = ($Mat4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mat4_ = $Mat4$Type;
}}
declare module "packages/gg/essential/gui/elementa/state/v2/$MutableState" {
import {$State, $State$Type} from "packages/gg/essential/gui/elementa/state/v2/$State"
import {$Observer, $Observer$Type} from "packages/gg/essential/gui/elementa/state/v2/$Observer"
import {$Unit, $Unit$Type} from "packages/kotlin/$Unit"
import {$ReferenceHolder, $ReferenceHolder$Type} from "packages/gg/essential/elementa/state/v2/$ReferenceHolder"
import {$Function0, $Function0$Type} from "packages/kotlin/jvm/functions/$Function0"
import {$Function1, $Function1$Type} from "packages/kotlin/jvm/functions/$Function1"

export interface $MutableState<T> extends $State<(T)> {

 "set"(arg0: $Function1$Type<(any), (any)>): void
 "set"(arg0: T): void
 "get"(): T
 "get"(arg0: $Observer$Type): T
 "onSetValue"(arg0: $ReferenceHolder$Type, arg1: $Function1$Type<(any), ($Unit$Type)>): $Function0<($Unit)>
 "getUntracked"(): T
}

export namespace $MutableState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableState$Type<T> = ($MutableState<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableState_<T> = $MutableState$Type<(T)>;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleVisibility" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$ParticleVisibility$Companion, $ParticleEffectComponents$ParticleVisibility$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleVisibility$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$ParticleVisibility {
static readonly "Companion": $ParticleEffectComponents$ParticleVisibility$Companion

constructor(arg0: integer, arg1: boolean, arg2: boolean, arg3: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: boolean, arg1: boolean, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: boolean, arg1: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: boolean, arg1: boolean): $ParticleEffectComponents$ParticleVisibility
public "getThirdPerson"(): boolean
public "getFirstPerson"(): boolean
public "component1"(): boolean
public "component2"(): boolean
get "thirdPerson"(): boolean
get "firstPerson"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleVisibility$Type = ($ParticleEffectComponents$ParticleVisibility);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleVisibility_ = $ParticleEffectComponents$ParticleVisibility$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Event$Particle" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticlesFile$Event$Particle$Companion, $ParticlesFile$Event$Particle$Companion$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event$Particle$Companion"
import {$ParticlesFile$Event$Particle$Type, $ParticlesFile$Event$Particle$Type$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event$Particle$Type"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"

export class $ParticlesFile$Event$Particle {
static readonly "Companion": $ParticlesFile$Event$Particle$Companion

constructor(arg0: integer, arg1: string, arg2: $ParticlesFile$Event$Particle$Type$Type, arg3: $Molang$Type, arg4: $SerializationConstructorMarker$Type)
constructor(arg0: string, arg1: $ParticlesFile$Event$Particle$Type$Type, arg2: $Molang$Type, arg3: integer, arg4: $DefaultConstructorMarker$Type)
constructor(arg0: string, arg1: $ParticlesFile$Event$Particle$Type$Type, arg2: $Molang$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getType"(): $ParticlesFile$Event$Particle$Type
public "copy"(arg0: string, arg1: $ParticlesFile$Event$Particle$Type$Type, arg2: $Molang$Type): $ParticlesFile$Event$Particle
public "component3"(): $Molang
public "component1"(): string
public "component2"(): $ParticlesFile$Event$Particle$Type
public "getEffect"(): string
public "getPreEffectExpression"(): $Molang
get "type"(): $ParticlesFile$Event$Particle$Type
get "effect"(): string
get "preEffectExpression"(): $Molang
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Event$Particle$Type = ($ParticlesFile$Event$Particle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Event$Particle_ = $ParticlesFile$Event$Particle$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeExpression" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"
import {$ParticleEffectComponents$EmitterLifetimeExpression$Companion, $ParticleEffectComponents$EmitterLifetimeExpression$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeExpression$Companion"

export class $ParticleEffectComponents$EmitterLifetimeExpression {
static readonly "Companion": $ParticleEffectComponents$EmitterLifetimeExpression$Companion

constructor(arg0: integer, arg1: $Molang$Type, arg2: $Molang$Type, arg3: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $Molang$Type, arg1: $Molang$Type, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: $Molang$Type, arg1: $Molang$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Molang$Type, arg1: $Molang$Type): $ParticleEffectComponents$EmitterLifetimeExpression
public "component1"(): $Molang
public "component2"(): $Molang
public "getExpirationExpression"(): $Molang
public "getActivationExpression"(): $Molang
get "expirationExpression"(): $Molang
get "activationExpression"(): $Molang
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterLifetimeExpression$Type = ($ParticleEffectComponents$EmitterLifetimeExpression);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterLifetimeExpression_ = $ParticleEffectComponents$EmitterLifetimeExpression$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/featured/$FeaturedPageCollection$Companion" {
import {$FeaturedPageCollection, $FeaturedPageCollection$Type} from "packages/gg/essential/mod/cosmetics/featured/$FeaturedPageCollection"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $FeaturedPageCollection$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($FeaturedPageCollection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeaturedPageCollection$Companion$Type = ($FeaturedPageCollection$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeaturedPageCollection$Companion_ = $FeaturedPageCollection$Companion$Type;
}}
declare module "packages/gg/essential/mixins/transformers/client/$MouseHelperAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHelperAccessor {

 "setMouseY"(arg0: double): void
 "setMouseX"(arg0: double): void
}

export namespace $MouseHelperAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHelperAccessor$Type = ($MouseHelperAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseHelperAccessor_ = $MouseHelperAccessor$Type;
}}
declare module "packages/gg/essential/model/file/$ModelFile" {
import {$ModelFile$Companion, $ModelFile$Companion$Type} from "packages/gg/essential/model/file/$ModelFile$Companion"
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ModelFile$Geometry, $ModelFile$Geometry$Type} from "packages/gg/essential/model/file/$ModelFile$Geometry"

export class $ModelFile {
static readonly "Companion": $ModelFile$Companion

constructor(arg0: integer, arg1: string, arg2: $List$Type<(any)>, arg3: $SerializationConstructorMarker$Type)
constructor(arg0: string, arg1: $List$Type<(any)>, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: string, arg1: $List$Type<($ModelFile$Geometry$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: $List$Type<($ModelFile$Geometry$Type)>): $ModelFile
public "component1"(): string
public "component2"(): $List<($ModelFile$Geometry)>
public "getGeometries"(): $List<($ModelFile$Geometry)>
public "getFormatVersion"(): string
get "geometries"(): $List<($ModelFile$Geometry)>
get "formatVersion"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$Type = ($ModelFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile_ = $ModelFile$Type;
}}
declare module "packages/gg/essential/model/file/$AnimationFile$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$AnimationFile, $AnimationFile$Type} from "packages/gg/essential/model/file/$AnimationFile"

export class $AnimationFile$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($AnimationFile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationFile$Companion$Type = ($AnimationFile$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationFile$Companion_ = $AnimationFile$Companion$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$Variant" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$CosmeticSetting$Variant$Companion, $CosmeticSetting$Variant$Companion$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$Variant$Companion"
import {$CosmeticSetting$Variant$Data, $CosmeticSetting$Variant$Data$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$Variant$Data"
import {$CosmeticSettingType, $CosmeticSettingType$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSettingType"
import {$CosmeticSetting, $CosmeticSetting$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting"

export class $CosmeticSetting$Variant extends $CosmeticSetting {
static readonly "Companion": $CosmeticSetting$Variant$Companion

constructor(arg0: string, arg1: boolean, arg2: $CosmeticSetting$Variant$Data$Type)
constructor(arg0: integer, arg1: string, arg2: boolean, arg3: $CosmeticSetting$Variant$Data$Type, arg4: $SerializationConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getId"(): string
public "getType"(): $CosmeticSettingType
public "copy"(arg0: string, arg1: boolean, arg2: $CosmeticSetting$Variant$Data$Type): $CosmeticSetting$Variant
public "getData"(): $CosmeticSetting$Variant$Data
public "component3"(): $CosmeticSetting$Variant$Data
public "component1"(): string
public "component2"(): boolean
public "getEnabled"(): boolean
get "id"(): string
get "type"(): $CosmeticSettingType
get "data"(): $CosmeticSetting$Variant$Data
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticSetting$Variant$Type = ($CosmeticSetting$Variant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticSetting$Variant_ = $CosmeticSetting$Variant$Type;
}}
declare module "packages/gg/essential/model/light/$Light$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $Light$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "getMIN_VALUE-cWgJFAk"(): integer
public "getMAX_VALUE-cWgJFAk"(): integer
get "mIN_VALUE-cWgJFAk"(): integer
get "mAX_VALUE-cWgJFAk"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Light$Companion$Type = ($Light$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Light$Companion_ = $Light$Companion$Type;
}}
declare module "packages/gg/essential/model/util/$Color$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Vec4, $Vec4$Type} from "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec4"

export class $Color$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "rgba-Z_pCfcY"(arg0: integer): integer
public "fromVec-WvJmvJ8"(arg0: $Vec4$Type): integer
public "getWHITE-yaPNGYs"(): integer
public "getBLACK-yaPNGYs"(): integer
public "fromFloats-MQoBapg"(arg0: float, arg1: float, arg2: float, arg3: float): integer
public "argb-Z_pCfcY"(arg0: integer): integer
get "wHITE-yaPNGYs"(): integer
get "bLACK-yaPNGYs"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$Companion$Type = ($Color$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color$Companion_ = $Color$Companion$Type;
}}
declare module "packages/gg/essential/model/molang/$MolangVec3" {
import {$MolangVec3$Companion, $MolangVec3$Companion$Type} from "packages/gg/essential/model/molang/$MolangVec3$Companion"
import {$MolangContext, $MolangContext$Type} from "packages/gg/essential/model/molang/$MolangContext"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"
import {$Vec3, $Vec3$Type} from "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec3"

export class $MolangVec3 {
static readonly "Companion": $MolangVec3$Companion

constructor(arg0: $Molang$Type, arg1: $Molang$Type, arg2: $Molang$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Molang$Type, arg1: $Molang$Type, arg2: $Molang$Type): $MolangVec3
public "getX"(): $Molang
public "component3"(): $Molang
public "getY"(): $Molang
public "getZ"(): $Molang
public "eval"(arg0: $MolangContext$Type): $Vec3
public "component1"(): $Molang
public "component2"(): $Molang
get "x"(): $Molang
get "y"(): $Molang
get "z"(): $Molang
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolangVec3$Type = ($MolangVec3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolangVec3_ = $MolangVec3$Type;
}}
declare module "packages/gg/essential/model/molang/$MolangContext" {
import {$MolangQuery, $MolangQuery$Type} from "packages/gg/essential/model/molang/$MolangQuery"
import {$Variables, $Variables$Type} from "packages/gg/essential/model/molang/$Variables"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $MolangContext {

constructor(arg0: $MolangQuery$Type, arg1: $Variables$Type)
constructor(arg0: $MolangQuery$Type, arg1: $Variables$Type, arg2: integer, arg3: $DefaultConstructorMarker$Type)

public "getQuery"(): $MolangQuery
public "getVariables"(): $Variables
get "query"(): $MolangQuery
get "variables"(): $Variables
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolangContext$Type = ($MolangContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolangContext_ = $MolangContext$Type;
}}
declare module "packages/gg/essential/model/util/$Quaternion" {
import {$Quaternion$Companion, $Quaternion$Companion$Type} from "packages/gg/essential/model/util/$Quaternion$Companion"
import {$Vec3, $Vec3$Type} from "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec3"

export class $Quaternion {
static readonly "Companion": $Quaternion$Companion

constructor(arg0: float, arg1: float, arg2: float, arg3: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: float, arg1: float, arg2: float, arg3: float): $Quaternion
public "normalize"(): $Quaternion
public "getX"(): float
public "component4"(): float
public "component3"(): float
public "getY"(): float
public "invert"(): $Quaternion
public "conjugate"(): $Quaternion
public "getW"(): float
public "getZ"(): float
public "times"(arg0: $Quaternion$Type): $Quaternion
public "times"(arg0: $Vec3$Type): $Vec3
public "opposite"(): $Quaternion
public "component1"(): float
public "component2"(): float
public "projectAroundAxis"(arg0: $Vec3$Type): $Quaternion
get "x"(): float
get "y"(): float
get "w"(): float
get "z"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Quaternion$Type = ($Quaternion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Quaternion_ = $Quaternion$Type;
}}
declare module "packages/gg/essential/network/connectionmanager/cosmetics/$EquippedOutfitsManager$Outfit" {
import {$EquippedCosmeticId, $EquippedCosmeticId$Type} from "packages/gg/essential/cosmetics/$EquippedCosmeticId"
import {$CosmeticSlot, $CosmeticSlot$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticSlot"
import {$Skin, $Skin$Type} from "packages/gg/essential/mod/$Skin"
import {$EquippedOutfitsManager$Outfit$Companion, $EquippedOutfitsManager$Outfit$Companion$Type} from "packages/gg/essential/network/connectionmanager/cosmetics/$EquippedOutfitsManager$Outfit$Companion"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EquippedOutfitsManager$Outfit {
static readonly "Companion": $EquippedOutfitsManager$Outfit$Companion

constructor(arg0: $Map$Type<($CosmeticSlot$Type), ($EquippedCosmeticId$Type)>, arg1: $Skin$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Map$Type<($CosmeticSlot$Type), ($EquippedCosmeticId$Type)>, arg1: $Skin$Type): $EquippedOutfitsManager$Outfit
public "getSkin"(): $Skin
public "getCosmetics"(): $Map<($CosmeticSlot), ($EquippedCosmeticId)>
public "component1"(): $Map<($CosmeticSlot), ($EquippedCosmeticId)>
public "component2"(): $Skin
get "skin"(): $Skin
get "cosmetics"(): $Map<($CosmeticSlot), ($EquippedCosmeticId)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquippedOutfitsManager$Outfit$Type = ($EquippedOutfitsManager$Outfit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquippedOutfitsManager$Outfit_ = $EquippedOutfitsManager$Outfit$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$AnimationVariant$Data" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$CosmeticSetting$AnimationVariant$Data$Companion, $CosmeticSetting$AnimationVariant$Data$Companion$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$AnimationVariant$Data$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $CosmeticSetting$AnimationVariant$Data {
static readonly "Companion": $CosmeticSetting$AnimationVariant$Data$Companion

constructor(arg0: integer, arg1: string, arg2: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: string, arg1: integer, arg2: $DefaultConstructorMarker$Type)
constructor(arg0: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string): $CosmeticSetting$AnimationVariant$Data
public "component1"(): string
public "getAnimationVariant"(): string
get "animationVariant"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticSetting$AnimationVariant$Data$Type = ($CosmeticSetting$AnimationVariant$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticSetting$AnimationVariant$Data_ = $CosmeticSetting$AnimationVariant$Data$Type;
}}
declare module "packages/gg/essential/network/cosmetics/$Cosmetic$Diagnostic$Type$Companion" {
import {$Cosmetic$Diagnostic$Type, $Cosmetic$Diagnostic$Type$Type} from "packages/gg/essential/network/cosmetics/$Cosmetic$Diagnostic$Type"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $Cosmetic$Diagnostic$Type$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($Cosmetic$Diagnostic$Type)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cosmetic$Diagnostic$Type$Companion$Type = ($Cosmetic$Diagnostic$Type$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cosmetic$Diagnostic$Type$Companion_ = $Cosmetic$Diagnostic$Type$Companion$Type;
}}
declare module "packages/gg/essential/model/molang/$Variables$Variable" {
import {$KProperty, $KProperty$Type} from "packages/kotlin/reflect/$KProperty"

export interface $Variables$Variable {

 "get"(): float
 "getValue"(arg0: any, arg1: $KProperty$Type<(any)>): float
 "set"(arg0: float): void
 "setValue"(arg0: any, arg1: $KProperty$Type<(any)>, arg2: float): void
}

export namespace $Variables$Variable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Variables$Variable$Type = ($Variables$Variable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Variables$Variable_ = $Variables$Variable$Type;
}}
declare module "packages/gg/essential/model/backend/$RenderBackend$BlitOp" {
import {$RenderBackend$Texture, $RenderBackend$Texture$Type} from "packages/gg/essential/model/backend/$RenderBackend$Texture"

export class $RenderBackend$BlitOp {

constructor(arg0: $RenderBackend$Texture$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $RenderBackend$Texture$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $RenderBackend$BlitOp
public "component4"(): integer
public "component3"(): integer
public "component5"(): integer
public "getWidth"(): integer
public "getHeight"(): integer
public "getDestX"(): integer
public "getDestY"(): integer
public "getSrcY"(): integer
public "getSrcX"(): integer
public "component1"(): $RenderBackend$Texture
public "component2"(): integer
public "component7"(): integer
public "component6"(): integer
public "getSrc"(): $RenderBackend$Texture
get "width"(): integer
get "height"(): integer
get "destX"(): integer
get "destY"(): integer
get "srcY"(): integer
get "srcX"(): integer
get "src"(): $RenderBackend$Texture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBackend$BlitOp$Type = ($RenderBackend$BlitOp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderBackend$BlitOp_ = $RenderBackend$BlitOp$Type;
}}
declare module "packages/gg/essential/cosmetics/$WearablesManager$CommandQueueProvider" {
import {$RenderBackend$CommandQueue, $RenderBackend$CommandQueue$Type} from "packages/gg/essential/model/backend/$RenderBackend$CommandQueue"

export interface $WearablesManager$CommandQueueProvider {

 "forCosmetic"(arg0: string): $RenderBackend$CommandQueue

(arg0: string): $RenderBackend$CommandQueue
}

export namespace $WearablesManager$CommandQueueProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WearablesManager$CommandQueueProvider$Type = ($WearablesManager$CommandQueueProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WearablesManager$CommandQueueProvider_ = $WearablesManager$CommandQueueProvider$Type;
}}
declare module "packages/gg/essential/gui/elementa/state/v2/collections/$TrackedList$Change" {
import {$TrackedList$Change$Companion, $TrackedList$Change$Companion$Type} from "packages/gg/essential/gui/elementa/state/v2/collections/$TrackedList$Change$Companion"

export interface $TrackedList$Change<E> {

}

export namespace $TrackedList$Change {
const Companion: $TrackedList$Change$Companion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedList$Change$Type<E> = ($TrackedList$Change<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedList$Change_<E> = $TrackedList$Change$Type<(E)>;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleInitialSpin" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$ParticleInitialSpin$Companion, $ParticleEffectComponents$ParticleInitialSpin$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleInitialSpin$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"

export class $ParticleEffectComponents$ParticleInitialSpin {
static readonly "Companion": $ParticleEffectComponents$ParticleInitialSpin$Companion

constructor(arg0: integer, arg1: $Molang$Type, arg2: $Molang$Type, arg3: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $Molang$Type, arg1: $Molang$Type, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: $Molang$Type, arg1: $Molang$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Molang$Type, arg1: $Molang$Type): $ParticleEffectComponents$ParticleInitialSpin
public "getRotation"(): $Molang
public "component1"(): $Molang
public "component2"(): $Molang
public "getRotationRate"(): $Molang
get "rotation"(): $Molang
get "rotationRate"(): $Molang
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleInitialSpin$Type = ($ParticleEffectComponents$ParticleInitialSpin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleInitialSpin_ = $ParticleEffectComponents$ParticleInitialSpin$Type;
}}
declare module "packages/gg/essential/network/cosmetics/$Cosmetic$Diagnostic$Type" {
import {$Cosmetic$Diagnostic$Type$Companion, $Cosmetic$Diagnostic$Type$Companion$Type} from "packages/gg/essential/network/cosmetics/$Cosmetic$Diagnostic$Type$Companion"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $Cosmetic$Diagnostic$Type extends $Enum<($Cosmetic$Diagnostic$Type)> {
static readonly "Companion": $Cosmetic$Diagnostic$Type$Companion
static readonly "Fatal": $Cosmetic$Diagnostic$Type
static readonly "Error": $Cosmetic$Diagnostic$Type
static readonly "Warning": $Cosmetic$Diagnostic$Type


public static "values"(): ($Cosmetic$Diagnostic$Type)[]
public static "valueOf"(arg0: string): $Cosmetic$Diagnostic$Type
public static "getEntries"(): $EnumEntries<($Cosmetic$Diagnostic$Type)>
get "entries"(): $EnumEntries<($Cosmetic$Diagnostic$Type)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cosmetic$Diagnostic$Type$Type = (("warning") | ("error") | ("fatal")) | ($Cosmetic$Diagnostic$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cosmetic$Diagnostic$Type_ = $Cosmetic$Diagnostic$Type$Type;
}}
declare module "packages/gg/essential/mixins/transformers/client/network/$SJoinGamePacketAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SJoinGamePacketAccessor {

 "getMaxPlayers"(): integer

(): integer
}

export namespace $SJoinGamePacketAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SJoinGamePacketAccessor$Type = ($SJoinGamePacketAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SJoinGamePacketAccessor_ = $SJoinGamePacketAccessor$Type;
}}
declare module "packages/gg/essential/model/util/$PlayerPoseManager" {
import {$WearablesManager, $WearablesManager$Type} from "packages/gg/essential/cosmetics/$WearablesManager"
import {$MolangQueryEntity, $MolangQueryEntity$Type} from "packages/gg/essential/model/molang/$MolangQueryEntity"
import {$ModelInstance, $ModelInstance$Type} from "packages/gg/essential/model/$ModelInstance"
import {$PlayerPose, $PlayerPose$Type} from "packages/gg/essential/model/backend/$PlayerPose"
import {$PlayerPoseManager$Companion, $PlayerPoseManager$Companion$Type} from "packages/gg/essential/model/util/$PlayerPoseManager$Companion"

export class $PlayerPoseManager {
static readonly "Companion": $PlayerPoseManager$Companion
static readonly "transitionTime": float

constructor(arg0: $MolangQueryEntity$Type)

public "update"(arg0: $ModelInstance$Type): void
public "update"(arg0: $WearablesManager$Type): void
public "computePose"(arg0: $WearablesManager$Type, arg1: $PlayerPose$Type): $PlayerPose
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerPoseManager$Type = ($PlayerPoseManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerPoseManager_ = $PlayerPoseManager$Type;
}}
declare module "packages/gg/essential/cosmetics/events/$AnimationEvent$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$AnimationEvent, $AnimationEvent$Type} from "packages/gg/essential/cosmetics/events/$AnimationEvent"

export class $AnimationEvent$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($AnimationEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationEvent$Companion$Type = ($AnimationEvent$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationEvent$Companion_ = $AnimationEvent$Companion$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/$CosmeticBundle$Skin" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$CosmeticBundle$Skin$Companion, $CosmeticBundle$Skin$Companion$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticBundle$Skin$Companion"
import {$Skin, $Skin$Type} from "packages/gg/essential/mod/$Skin"
import {$Model, $Model$Type} from "packages/gg/essential/mod/$Model"

export class $CosmeticBundle$Skin {
static readonly "Companion": $CosmeticBundle$Skin$Companion

constructor(arg0: $Skin$Type, arg1: string)
constructor(arg0: $Skin$Type, arg1: string, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: string, arg1: $Model$Type, arg2: string)
constructor(arg0: string, arg1: $Model$Type, arg2: string, arg3: integer, arg4: $DefaultConstructorMarker$Type)
constructor(arg0: integer, arg1: string, arg2: $Model$Type, arg3: string, arg4: $SerializationConstructorMarker$Type)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: $Model$Type, arg2: string): $CosmeticBundle$Skin
public "component3"(): string
public "toMod"(): $Skin
public "component1"(): string
public "component2"(): $Model
public "getModel"(): $Model
public "getHash"(): string
get "name"(): string
get "model"(): $Model
get "hash"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticBundle$Skin$Type = ($CosmeticBundle$Skin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticBundle$Skin_ = $CosmeticBundle$Skin$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$Variant$Data" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$CosmeticSetting$Variant$Data$Companion, $CosmeticSetting$Variant$Data$Companion$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$Variant$Data$Companion"

export class $CosmeticSetting$Variant$Data {
static readonly "Companion": $CosmeticSetting$Variant$Data$Companion

constructor(arg0: string)
constructor(arg0: integer, arg1: string, arg2: $SerializationConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string): $CosmeticSetting$Variant$Data
public "getVariant"(): string
public "component1"(): string
get "variant"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticSetting$Variant$Data$Type = ($CosmeticSetting$Variant$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticSetting$Variant$Data_ = $CosmeticSetting$Variant$Data$Type;
}}
declare module "packages/gg/essential/cosmetics/skinmask/$SkinMask$Companion" {
import {$SkinMask, $SkinMask$Type} from "packages/gg/essential/cosmetics/skinmask/$SkinMask"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Bitmap, $Bitmap$Type} from "packages/gg/essential/util/image/bitmap/$Bitmap"

export class $SkinMask$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "merge"(arg0: $List$Type<($SkinMask$Type)>): $SkinMask
public "read"(arg0: $Bitmap$Type): $SkinMask
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkinMask$Companion$Type = ($SkinMask$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkinMask$Companion_ = $SkinMask$Companion$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/featured/$FeaturedPage$Companion" {
import {$FeaturedPage, $FeaturedPage$Type} from "packages/gg/essential/mod/cosmetics/featured/$FeaturedPage"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $FeaturedPage$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($FeaturedPage)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeaturedPage$Companion$Type = ($FeaturedPage$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeaturedPage$Companion_ = $FeaturedPage$Companion$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/$CosmeticAssets$Geometry" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$EssentialAsset, $EssentialAsset$Type} from "packages/gg/essential/mod/$EssentialAsset"
import {$CosmeticAssets$Geometry$Companion, $CosmeticAssets$Geometry$Companion$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticAssets$Geometry$Companion"

export class $CosmeticAssets$Geometry {
static readonly "Companion": $CosmeticAssets$Geometry$Companion

constructor(arg0: $EssentialAsset$Type, arg1: $EssentialAsset$Type)
constructor(arg0: integer, arg1: $EssentialAsset$Type, arg2: $EssentialAsset$Type, arg3: $SerializationConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $EssentialAsset$Type, arg1: $EssentialAsset$Type): $CosmeticAssets$Geometry
public "getAlex"(): $EssentialAsset
public "getSteve"(): $EssentialAsset
public "component1"(): $EssentialAsset
public "component2"(): $EssentialAsset
get "alex"(): $EssentialAsset
get "steve"(): $EssentialAsset
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticAssets$Geometry$Type = ($CosmeticAssets$Geometry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticAssets$Geometry_ = $CosmeticAssets$Geometry$Type;
}}
declare module "packages/gg/essential/mod/$Model" {
import {$Model$Companion, $Model$Companion$Type} from "packages/gg/essential/mod/$Model$Companion"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $Model extends $Enum<($Model)> {
static readonly "Companion": $Model$Companion
static readonly "STEVE": $Model
static readonly "ALEX": $Model


public static "values"(): ($Model)[]
public static "valueOf"(arg0: string): $Model
public "getType"(): string
public static "getEntries"(): $EnumEntries<($Model)>
public "getVariant"(): string
public static "byTypeOrDefault"(arg0: string): $Model
public static "byType"(arg0: string): $Model
public static "byVariant"(arg0: string): $Model
public static "byVariantOrDefault"(arg0: string): $Model
get "type"(): string
get "entries"(): $EnumEntries<($Model)>
get "variant"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Model$Type = (("alex") | ("steve")) | ($Model);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Model_ = $Model$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleLifetimeExpression$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticleEffectComponents$ParticleLifetimeExpression, $ParticleEffectComponents$ParticleLifetimeExpression$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleLifetimeExpression"

export class $ParticleEffectComponents$ParticleLifetimeExpression$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$ParticleLifetimeExpression)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleLifetimeExpression$Companion$Type = ($ParticleEffectComponents$ParticleLifetimeExpression$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleLifetimeExpression$Companion_ = $ParticleEffectComponents$ParticleLifetimeExpression$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleInitialization" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$ParticleInitialization$Companion, $ParticleEffectComponents$ParticleInitialization$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleInitialization$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"

export class $ParticleEffectComponents$ParticleInitialization {
static readonly "Companion": $ParticleEffectComponents$ParticleInitialization$Companion

constructor(arg0: integer, arg1: $Molang$Type, arg2: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $Molang$Type)
constructor(arg0: $Molang$Type, arg1: integer, arg2: $DefaultConstructorMarker$Type)

public "getPerRenderExpression"(): $Molang
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Molang$Type): $ParticleEffectComponents$ParticleInitialization
public "component1"(): $Molang
get "perRenderExpression"(): $Molang
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleInitialization$Type = ($ParticleEffectComponents$ParticleInitialization);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleInitialization_ = $ParticleEffectComponents$ParticleInitialization$Type;
}}
declare module "packages/gg/essential/cosmetics/$EquippedCosmetic" {
import {$Cosmetic, $Cosmetic$Type} from "packages/gg/essential/network/cosmetics/$Cosmetic"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CosmeticSetting, $CosmeticSetting$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting"

export class $EquippedCosmetic {

constructor(arg0: $Cosmetic$Type, arg1: $List$Type<(any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getId"(): string
public "copy"(arg0: $Cosmetic$Type, arg1: $List$Type<(any)>): $EquippedCosmetic
public "getSettings"(): $List<($CosmeticSetting)>
public "getVariant"(): string
public "getCosmetic"(): $Cosmetic
public "component1"(): $Cosmetic
public "component2"(): $List<($CosmeticSetting)>
get "id"(): string
get "settings"(): $List<($CosmeticSetting)>
get "variant"(): string
get "cosmetic"(): $Cosmetic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquippedCosmetic$Type = ($EquippedCosmetic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquippedCosmetic_ = $EquippedCosmetic$Type;
}}
declare module "packages/gg/essential/model/$Keyframes" {
import {$TreeMap, $TreeMap$Type} from "packages/gg/essential/model/util/$TreeMap"
import {$Keyframe, $Keyframe$Type} from "packages/gg/essential/model/$Keyframe"
import {$MolangContext, $MolangContext$Type} from "packages/gg/essential/model/molang/$MolangContext"
import {$Keyframes$Companion, $Keyframes$Companion$Type} from "packages/gg/essential/model/$Keyframes$Companion"
import {$Vec3, $Vec3$Type} from "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec3"

export class $Keyframes {
static readonly "Companion": $Keyframes$Companion

constructor(arg0: $TreeMap$Type<(float), ($Keyframe$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $TreeMap$Type<(float), ($Keyframe$Type)>): $Keyframes
public "getFrames"(): $TreeMap<(float), ($Keyframe)>
public "eval"(arg0: $MolangContext$Type): $Vec3
public "component1"(): $TreeMap<(float), ($Keyframe)>
get "frames"(): $TreeMap<(float), ($Keyframe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Keyframes$Type = ($Keyframes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Keyframes_ = $Keyframes$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Curve$Type$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticlesFile$Curve$Type, $ParticlesFile$Curve$Type$Type} from "packages/gg/essential/model/file/$ParticlesFile$Curve$Type"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticlesFile$Curve$Type$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticlesFile$Curve$Type)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Curve$Type$Companion$Type = ($ParticlesFile$Curve$Type$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Curve$Type$Companion_ = $ParticlesFile$Curve$Type$Companion$Type;
}}
declare module "packages/gg/essential/cosmetics/state/$TextureAnimationSync" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TextureAnimationSync {

constructor(arg0: integer)

public "syncTextureStart"(): void
public "getAdjustedLifetime"(arg0: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAnimationSync$Type = ($TextureAnimationSync);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureAnimationSync_ = $TextureAnimationSync$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$Variant$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$CosmeticSetting$Variant, $CosmeticSetting$Variant$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$Variant"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $CosmeticSetting$Variant$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($CosmeticSetting$Variant)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticSetting$Variant$Companion$Type = ($CosmeticSetting$Variant$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticSetting$Variant$Companion_ = $CosmeticSetting$Variant$Companion$Type;
}}
declare module "packages/gg/essential/model/util/$PlayerPoseManager$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $PlayerPoseManager$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerPoseManager$Companion$Type = ($PlayerPoseManager$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerPoseManager$Companion_ = $PlayerPoseManager$Companion$Type;
}}
declare module "packages/gg/essential/mixins/transformers/client/options/$GameOptionsAccessor" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"

export interface $GameOptionsAccessor {

 "setKeyBindings"(arg0: ($KeyMapping$Type)[]): void

(arg0: ($KeyMapping$Type)[]): void
}

export namespace $GameOptionsAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameOptionsAccessor$Type = ($GameOptionsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameOptionsAccessor_ = $GameOptionsAccessor$Type;
}}
declare module "packages/gg/essential/model/util/$TreeMap" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$TreeMap$Companion, $TreeMap$Companion$Type} from "packages/gg/essential/model/util/$TreeMap$Companion"
import {$KMappedMarker, $KMappedMarker$Type} from "packages/kotlin/jvm/internal/markers/$KMappedMarker"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $TreeMap<K extends $Comparable<(any)>, V> implements $Map<(K), (V)>, $KMappedMarker {
static readonly "Companion": $TreeMap$Companion

constructor(arg0: $Map$Type<(K), (any)>)

public "remove"(arg0: any): V
public "remove"(arg0: any, arg1: any): boolean
public "get"(arg0: K): V
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "toString"(): string
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replace"(arg0: K, arg1: V): V
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public "size"(): integer
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$Type<(any), (any), (any)>): V
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public "containsKey"(arg0: any): boolean
public "containsKey"(arg0: K): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$Type<(any), (any)>): V
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "computeIfPresent"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public "getSize"(): integer
public "getEntries"(): $Set<($Map$Entry<(K), (V)>)>
public "lastKey"(): K
public "lowerEntry"(arg0: K): $Map$Entry<(K), (V)>
public "floorEntry"(arg0: K): $Map$Entry<(K), (V)>
public "ceilingEntry"(arg0: K): $Map$Entry<(K), (V)>
public "higherEntry"(arg0: K): $Map$Entry<(K), (V)>
public "getKeys"(): $Set<(K)>
public "lowestEntry"(): $Map$Entry<(K), (V)>
public "getValues"(): $Collection<(V)>
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "getOrDefault"(arg0: any, arg1: V): V
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
[index: string | number]: V
get "empty"(): boolean
get "entries"(): $Set<($Map$Entry<(K), (V)>)>
get "keys"(): $Set<(K)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeMap$Type<K, V> = ($TreeMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeMap_<K, V> = $TreeMap$Type<(K), (V)>;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Event$Particle$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ParticlesFile$Event$Particle$Type$Companion, $ParticlesFile$Event$Particle$Type$Companion$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event$Particle$Type$Companion"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $ParticlesFile$Event$Particle$Type extends $Enum<($ParticlesFile$Event$Particle$Type)> {
static readonly "Companion": $ParticlesFile$Event$Particle$Type$Companion
static readonly "Emitter": $ParticlesFile$Event$Particle$Type
static readonly "EmitterBound": $ParticlesFile$Event$Particle$Type
static readonly "Particle": $ParticlesFile$Event$Particle$Type
static readonly "ParticleWithVelocity": $ParticlesFile$Event$Particle$Type


public static "values"(): ($ParticlesFile$Event$Particle$Type)[]
public static "valueOf"(arg0: string): $ParticlesFile$Event$Particle$Type
public static "getEntries"(): $EnumEntries<($ParticlesFile$Event$Particle$Type)>
public "getInheritVelocity"(): boolean
public "isParticle"(): boolean
public "isBound"(): boolean
get "entries"(): $EnumEntries<($ParticlesFile$Event$Particle$Type)>
get "inheritVelocity"(): boolean
get "particle"(): boolean
get "bound"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Event$Particle$Type$Type = (("particlewithvelocity") | ("emitterbound") | ("particle") | ("emitter")) | ($ParticlesFile$Event$Particle$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Event$Particle$Type_ = $ParticlesFile$Event$Particle$Type$Type;
}}
declare module "packages/gg/essential/model/$ParticleSystem$Locator" {
import {$Quaternion, $Quaternion$Type} from "packages/gg/essential/model/util/$Quaternion"
import {$Pair, $Pair$Type} from "packages/kotlin/$Pair"
import {$Vec3, $Vec3$Type} from "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec3"

export interface $ParticleSystem$Locator {

 "getParent"(): $ParticleSystem$Locator
 "isValid"(): boolean
 "getPosition"(): $Vec3
 "getRotation"(): $Quaternion
 "getPositionAndRotation"(): $Pair<($Vec3), ($Quaternion)>
 "isVisible"(): boolean
 "getVelocity"(): $Vec3
}

export namespace $ParticleSystem$Locator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleSystem$Locator$Type = ($ParticleSystem$Locator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleSystem$Locator_ = $ParticleSystem$Locator$Type;
}}
declare module "packages/gg/essential/model/bones/$BakedAnimations$BakedBone" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BakedAnimations$BakedBone {

constructor(arg0: integer)

public "getGimbal"(): boolean
public "getAnimScaleZ"(): float
public "setAnimScaleY"(arg0: float): void
public "setAnimScaleZ"(arg0: float): void
public "setWorldGimbal"(arg0: boolean): void
public "setGimbal"(arg0: boolean): void
public "getWorldGimbal"(): boolean
public "getBoneId"(): integer
public "setAnimRotY"(arg0: float): void
public "getAnimScaleY"(): float
public "getAnimOffsetX"(): float
public "getAnimOffsetY"(): float
public "getAnimRotY"(): float
public "setAnimRotZ"(arg0: float): void
public "setAnimOffsetY"(arg0: float): void
public "setAnimOffsetX"(arg0: float): void
public "setAnimOffsetZ"(arg0: float): void
public "getAnimRotZ"(): float
public "getAnimScaleX"(): float
public "getAnimOffsetZ"(): float
public "setAnimRotX"(arg0: float): void
public "setAnimScaleX"(arg0: float): void
public "getAnimRotX"(): float
get "gimbal"(): boolean
get "animScaleZ"(): float
set "animScaleY"(value: float)
set "animScaleZ"(value: float)
set "worldGimbal"(value: boolean)
set "gimbal"(value: boolean)
get "worldGimbal"(): boolean
get "boneId"(): integer
set "animRotY"(value: float)
get "animScaleY"(): float
get "animOffsetX"(): float
get "animOffsetY"(): float
get "animRotY"(): float
set "animRotZ"(value: float)
set "animOffsetY"(value: float)
set "animOffsetX"(value: float)
set "animOffsetZ"(value: float)
get "animRotZ"(): float
get "animScaleX"(): float
get "animOffsetZ"(): float
set "animRotX"(value: float)
set "animScaleX"(value: float)
get "animRotX"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedAnimations$BakedBone$Type = ($BakedAnimations$BakedBone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedAnimations$BakedBone_ = $BakedAnimations$BakedBone$Type;
}}
declare module "packages/gg/essential/model/$BedrockModel$Offset" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BedrockModel$Offset {

constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float)

public "getOffsetX"(): float
public "getPivotY"(): float
public "getOffsetY"(): float
public "getPivotZ"(): float
public "getOffsetZ"(): float
public "getPivotX"(): float
get "offsetX"(): float
get "pivotY"(): float
get "offsetY"(): float
get "pivotZ"(): float
get "offsetZ"(): float
get "pivotX"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BedrockModel$Offset$Type = ($BedrockModel$Offset);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BedrockModel$Offset_ = $BedrockModel$Offset$Type;
}}
declare module "packages/gg/essential/model/molang/$MolangVec3$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$MolangVec3, $MolangVec3$Type} from "packages/gg/essential/model/molang/$MolangVec3"

export class $MolangVec3$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($MolangVec3)>
public "getUNIT_X"(): $MolangVec3
public "getUNIT_Z"(): $MolangVec3
public "getUNIT_Y"(): $MolangVec3
public "getZERO"(): $MolangVec3
get "uNIT_X"(): $MolangVec3
get "uNIT_Z"(): $MolangVec3
get "uNIT_Y"(): $MolangVec3
get "zERO"(): $MolangVec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolangVec3$Companion$Type = ($MolangVec3$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolangVec3$Companion_ = $MolangVec3$Companion$Type;
}}
declare module "packages/gg/essential/model/$ModelInstance" {
import {$UMatrixStack, $UMatrixStack$Type} from "packages/gg/essential/model/util/$UMatrixStack"
import {$Cosmetic, $Cosmetic$Type} from "packages/gg/essential/network/cosmetics/$Cosmetic"
import {$EssentialAnimationSystem, $EssentialAnimationSystem$Type} from "packages/gg/essential/cosmetics/state/$EssentialAnimationSystem"
import {$PlayerPose, $PlayerPose$Type} from "packages/gg/essential/model/backend/$PlayerPose"
import {$BedrockModel, $BedrockModel$Type} from "packages/gg/essential/model/$BedrockModel"
import {$Function1, $Function1$Type} from "packages/kotlin/jvm/functions/$Function1"
import {$RenderBackend$CommandQueue, $RenderBackend$CommandQueue$Type} from "packages/gg/essential/model/backend/$RenderBackend$CommandQueue"
import {$MolangQueryEntity, $MolangQueryEntity$Type} from "packages/gg/essential/model/molang/$MolangQueryEntity"
import {$ModelAnimationState, $ModelAnimationState$Type} from "packages/gg/essential/model/$ModelAnimationState"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Unit, $Unit$Type} from "packages/kotlin/$Unit"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WearableLocator, $WearableLocator$Type} from "packages/gg/essential/cosmetics/state/$WearableLocator"
import {$TextureAnimationSync, $TextureAnimationSync$Type} from "packages/gg/essential/cosmetics/state/$TextureAnimationSync"
import {$RenderMetadata, $RenderMetadata$Type} from "packages/gg/essential/model/$RenderMetadata"
import {$AnimationTarget, $AnimationTarget$Type} from "packages/gg/essential/cosmetics/events/$AnimationTarget"
import {$CosmeticsState, $CosmeticsState$Type} from "packages/gg/essential/cosmetics/$CosmeticsState"

export class $ModelInstance {

constructor(arg0: $BedrockModel$Type, arg1: $MolangQueryEntity$Type, arg2: $Set$Type<(any)>, arg3: $CosmeticsState$Type, arg4: $Function1$Type<(any), ($Unit$Type)>)

public "render"(arg0: $UMatrixStack$Type, arg1: $RenderBackend$CommandQueue$Type, arg2: $List$Type<(any)>, arg3: $RenderMetadata$Type): void
public "getEntity"(): $MolangQueryEntity
public "getAnimationState"(): $ModelAnimationState
public "getEssentialAnimationSystem"(): $EssentialAnimationSystem
public "getCosmetic"(): $Cosmetic
public "computePose"(arg0: $PlayerPose$Type): $PlayerPose
public "updateLocators"(arg0: $PlayerPose$Type, arg1: $CosmeticsState$Type): void
public "setLocator"(arg0: $WearableLocator$Type): void
public "getLocator"(): $WearableLocator
public "setAnimationState"(arg0: $ModelAnimationState$Type): void
public "getOnAnimation"(): $Function1<(string), ($Unit)>
public "setModel"(arg0: $BedrockModel$Type): void
public "switchModel"(arg0: $BedrockModel$Type, arg1: $CosmeticsState$Type): void
public "getModel"(): $BedrockModel
public "setTextureAnimationSync"(arg0: $TextureAnimationSync$Type): void
public "setEssentialAnimationSystem"(arg0: $EssentialAnimationSystem$Type): void
public "getTextureAnimationSync"(): $TextureAnimationSync
public "getAnimationTargets"(): $Set<($AnimationTarget)>
get "entity"(): $MolangQueryEntity
get "animationState"(): $ModelAnimationState
get "essentialAnimationSystem"(): $EssentialAnimationSystem
get "cosmetic"(): $Cosmetic
set "locator"(value: $WearableLocator$Type)
get "locator"(): $WearableLocator
set "animationState"(value: $ModelAnimationState$Type)
get "onAnimation"(): $Function1<(string), ($Unit)>
set "model"(value: $BedrockModel$Type)
get "model"(): $BedrockModel
set "textureAnimationSync"(value: $TextureAnimationSync$Type)
set "essentialAnimationSystem"(value: $EssentialAnimationSystem$Type)
get "textureAnimationSync"(): $TextureAnimationSync
get "animationTargets"(): $Set<($AnimationTarget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelInstance$Type = ($ModelInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelInstance_ = $ModelInstance$Type;
}}
declare module "packages/gg/essential/sps/$IntegratedServerManager$Difficulty" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"
import {$IntegratedServerManager$Difficulty$Companion, $IntegratedServerManager$Difficulty$Companion$Type} from "packages/gg/essential/sps/$IntegratedServerManager$Difficulty$Companion"

export class $IntegratedServerManager$Difficulty extends $Enum<($IntegratedServerManager$Difficulty)> {
static readonly "Companion": $IntegratedServerManager$Difficulty$Companion
static readonly "Peaceful": $IntegratedServerManager$Difficulty
static readonly "Easy": $IntegratedServerManager$Difficulty
static readonly "Normal": $IntegratedServerManager$Difficulty
static readonly "Hard": $IntegratedServerManager$Difficulty


public static "values"(): ($IntegratedServerManager$Difficulty)[]
public static "valueOf"(arg0: string): $IntegratedServerManager$Difficulty
public static "getEntries"(): $EnumEntries<($IntegratedServerManager$Difficulty)>
get "entries"(): $EnumEntries<($IntegratedServerManager$Difficulty)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegratedServerManager$Difficulty$Type = (("normal") | ("hard") | ("easy") | ("peaceful")) | ($IntegratedServerManager$Difficulty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegratedServerManager$Difficulty_ = $IntegratedServerManager$Difficulty$Type;
}}
declare module "packages/gg/essential/network/cosmetics/$Cosmetic" {
import {$CosmeticBase, $CosmeticBase$Type} from "packages/gg/essential/network/cosmetics/$CosmeticBase"
import {$CosmeticTier, $CosmeticTier$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticTier"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$CosmeticSlot, $CosmeticSlot$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticSlot"
import {$CosmeticProperty$Variants$Variant, $CosmeticProperty$Variants$Variant$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticProperty$Variants$Variant"
import {$Cosmetic$Diagnostic, $Cosmetic$Diagnostic$Type} from "packages/gg/essential/network/cosmetics/$Cosmetic$Diagnostic"
import {$EssentialAsset, $EssentialAsset$Type} from "packages/gg/essential/mod/$EssentialAsset"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$CosmeticStoreInfo, $CosmeticStoreInfo$Type} from "packages/gg/essential/network/cosmetics/$CosmeticStoreInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CosmeticProperty, $CosmeticProperty$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticProperty"
import {$Side, $Side$Type} from "packages/gg/essential/model/$Side"
import {$CosmeticSetting$Variant, $CosmeticSetting$Variant$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$Variant"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$CosmeticAssets, $CosmeticAssets$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticAssets"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$CosmeticProperty$InterruptsEmote$Data, $CosmeticProperty$InterruptsEmote$Data$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticProperty$InterruptsEmote$Data"

export class $Cosmetic {

constructor(arg0: $CosmeticBase$Type, arg1: $CosmeticStoreInfo$Type, arg2: $List$Type<($Cosmetic$Diagnostic$Type)>)
constructor(arg0: $CosmeticBase$Type, arg1: $CosmeticStoreInfo$Type, arg2: $List$Type<(any)>, arg3: integer, arg4: $DefaultConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getProperties"(): $List<($CosmeticProperty)>
public "getId"(): string
public "copy"(arg0: $CosmeticBase$Type, arg1: $CosmeticStoreInfo$Type, arg2: $List$Type<($Cosmetic$Diagnostic$Type)>): $Cosmetic
public "getSlot"(): $CosmeticSlot
public "getDisplayName"(arg0: string): string
public "getDisplayName"(): string
public "getVariants"(): $List<($CosmeticProperty$Variants$Variant)>
public "getBase"(): $CosmeticBase
public "component3"(): $List<($Cosmetic$Diagnostic)>
public "getDisplayNames"(): $Map<(string), (string)>
public "getLocalPath"(): string
public "isLegacy"(): boolean
public "getDefaultVariantName"(): string
public "getTags"(): $Set<(string)>
public "getFiles"(): $Map<(string), ($EssentialAsset)>
public "component1"(): $CosmeticBase
public "component2"(): $CosmeticStoreInfo
public "getTier"(): $CosmeticTier
public "getAvailableAfter"(): $Instant
public "getAvailableUntil"(): $Instant
public "getStoreInfo"(): $CosmeticStoreInfo
public "isCosmeticFree"(): boolean
public "getDiagnostics"(): $List<($Cosmetic$Diagnostic)>
public "getDefaultSide"(): $Side
public "getDefaultVariant"(): $CosmeticProperty$Variants$Variant
public "getPartnerCreator"(): boolean
public "getBaseAssets"(): $CosmeticAssets
public "getAllProperties"(): $List<($CosmeticProperty)>
public "isPurchasable"(): boolean
public "getShowTimerAfter"(): $Instant
public "getAssetVariants"(): $Map<(string), ($CosmeticAssets)>
public "getPrice"(): integer
public "getPartnerEvent"(): string
public "getPartnerName"(): string
public "isPartnered"(): boolean
public "getPartnerMod"(): string
public "getCategories"(): $Map<(string), (integer)>
public "assets"(arg0: string): $CosmeticAssets
public "assets"(arg0: $List$Type<(any)>): $CosmeticAssets
public "requiresUnlockAction"(): boolean
public "getDefaultSortWeight"(): integer
public "getDefaultVariantSetting"(): $CosmeticSetting$Variant
public "getEmoteInterruptionTriggers"(): $CosmeticProperty$InterruptsEmote$Data
public "getDisabledProperties"(): $List<($CosmeticProperty)>
public "getMutuallyExclusiveWith"(): $Set<($CosmeticSlot)>
get "properties"(): $List<($CosmeticProperty)>
get "id"(): string
get "slot"(): $CosmeticSlot
get "displayName"(): string
get "variants"(): $List<($CosmeticProperty$Variants$Variant)>
get "base"(): $CosmeticBase
get "displayNames"(): $Map<(string), (string)>
get "localPath"(): string
get "legacy"(): boolean
get "defaultVariantName"(): string
get "tags"(): $Set<(string)>
get "files"(): $Map<(string), ($EssentialAsset)>
get "tier"(): $CosmeticTier
get "availableAfter"(): $Instant
get "availableUntil"(): $Instant
get "storeInfo"(): $CosmeticStoreInfo
get "cosmeticFree"(): boolean
get "diagnostics"(): $List<($Cosmetic$Diagnostic)>
get "defaultSide"(): $Side
get "defaultVariant"(): $CosmeticProperty$Variants$Variant
get "partnerCreator"(): boolean
get "baseAssets"(): $CosmeticAssets
get "allProperties"(): $List<($CosmeticProperty)>
get "purchasable"(): boolean
get "showTimerAfter"(): $Instant
get "assetVariants"(): $Map<(string), ($CosmeticAssets)>
get "price"(): integer
get "partnerEvent"(): string
get "partnerName"(): string
get "partnered"(): boolean
get "partnerMod"(): string
get "categories"(): $Map<(string), (integer)>
get "defaultSortWeight"(): integer
get "defaultVariantSetting"(): $CosmeticSetting$Variant
get "emoteInterruptionTriggers"(): $CosmeticProperty$InterruptsEmote$Data
get "disabledProperties"(): $List<($CosmeticProperty)>
get "mutuallyExclusiveWith"(): $Set<($CosmeticSlot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cosmetic$Type = ($Cosmetic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cosmetic_ = $Cosmetic$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/$CosmeticSlot$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$CosmeticSlot, $CosmeticSlot$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticSlot"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $CosmeticSlot$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "values"(): $List<($CosmeticSlot)>
public "of"(arg0: string): $CosmeticSlot
public "serializer"(): $KSerializer<($CosmeticSlot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticSlot$Companion$Type = ($CosmeticSlot$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticSlot$Companion_ = $CosmeticSlot$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapeDisc$Companion" {
import {$ParticleEffectComponents$EmitterShapeDisc, $ParticleEffectComponents$EmitterShapeDisc$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapeDisc"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$EmitterShapeDisc$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$EmitterShapeDisc)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterShapeDisc$Companion$Type = ($ParticleEffectComponents$EmitterShapeDisc$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterShapeDisc$Companion_ = $ParticleEffectComponents$EmitterShapeDisc$Companion$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$Variant$Data$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$CosmeticSetting$Variant$Data, $CosmeticSetting$Variant$Data$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$Variant$Data"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $CosmeticSetting$Variant$Data$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($CosmeticSetting$Variant$Data)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticSetting$Variant$Data$Companion$Type = ($CosmeticSetting$Variant$Data$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticSetting$Variant$Data$Companion_ = $CosmeticSetting$Variant$Data$Companion$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticProperty$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CosmeticProperty, $CosmeticProperty$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticProperty"
import {$Json, $Json$Type} from "packages/kotlinx/serialization/json/$Json"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $CosmeticProperty$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($CosmeticProperty)>
public "getJson"(): $Json
public "fromJson"(arg0: string): $CosmeticProperty
public "fromJsonArray"(arg0: string): $List<($CosmeticProperty)>
get "json"(): $Json
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticProperty$Companion$Type = ($CosmeticProperty$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticProperty$Companion_ = $CosmeticProperty$Companion$Type;
}}
declare module "packages/gg/essential/network/cosmetics/$Cosmetic$Diagnostic" {
import {$Cosmetic$Diagnostic$Type, $Cosmetic$Diagnostic$Type$Type} from "packages/gg/essential/network/cosmetics/$Cosmetic$Diagnostic$Type"
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$Pair, $Pair$Type} from "packages/kotlin/$Pair"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Cosmetic$Diagnostic$Companion, $Cosmetic$Diagnostic$Companion$Type} from "packages/gg/essential/network/cosmetics/$Cosmetic$Diagnostic$Companion"
import {$Model, $Model$Type} from "packages/gg/essential/mod/$Model"

export class $Cosmetic$Diagnostic {
static readonly "Companion": $Cosmetic$Diagnostic$Companion

constructor(arg0: integer, arg1: $Cosmetic$Diagnostic$Type$Type, arg2: string, arg3: string, arg4: string, arg5: $Pair$Type<(any), (any)>, arg6: string, arg7: $Model$Type, arg8: $SerializationConstructorMarker$Type)
constructor(arg0: $Cosmetic$Diagnostic$Type$Type, arg1: string, arg2: string, arg3: string, arg4: $Pair$Type<(any), (any)>, arg5: string, arg6: $Model$Type, arg7: integer, arg8: $DefaultConstructorMarker$Type)
constructor(arg0: $Cosmetic$Diagnostic$Type$Type, arg1: string, arg2: string, arg3: string, arg4: $Pair$Type<(integer), (integer)>, arg5: string, arg6: $Model$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getMessage"(): string
public "getType"(): $Cosmetic$Diagnostic$Type
public "copy"(arg0: $Cosmetic$Diagnostic$Type$Type, arg1: string, arg2: string, arg3: string, arg4: $Pair$Type<(integer), (integer)>, arg5: string, arg6: $Model$Type): $Cosmetic$Diagnostic
public "getFile"(): string
public "getVariant"(): string
public "component4"(): string
public "component3"(): string
public "component5"(): $Pair<(integer), (integer)>
public "getLineColumn"(): $Pair<(integer), (integer)>
public "getStacktrace"(): string
public "getSkin"(): $Model
public "component1"(): $Cosmetic$Diagnostic$Type
public "component2"(): string
public "component7"(): $Model
public "component6"(): string
get "message"(): string
get "type"(): $Cosmetic$Diagnostic$Type
get "file"(): string
get "variant"(): string
get "lineColumn"(): $Pair<(integer), (integer)>
get "stacktrace"(): string
get "skin"(): $Model
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cosmetic$Diagnostic$Type = ($Cosmetic$Diagnostic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cosmetic$Diagnostic_ = $Cosmetic$Diagnostic$Type;
}}
declare module "packages/gg/essential/model/$Keyframe$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$Keyframe, $Keyframe$Type} from "packages/gg/essential/model/$Keyframe"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $Keyframe$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($Keyframe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Keyframe$Companion$Type = ($Keyframe$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Keyframe$Companion_ = $Keyframe$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapeSphere" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$EmitterShapeSphere$Companion, $ParticleEffectComponents$EmitterShapeSphere$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapeSphere$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$MolangVec3, $MolangVec3$Type} from "packages/gg/essential/model/molang/$MolangVec3"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"
import {$ParticleEffectComponents$Direction, $ParticleEffectComponents$Direction$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$Direction"

export class $ParticleEffectComponents$EmitterShapeSphere {
static readonly "Companion": $ParticleEffectComponents$EmitterShapeSphere$Companion

constructor(arg0: integer, arg1: $MolangVec3$Type, arg2: $Molang$Type, arg3: boolean, arg4: $ParticleEffectComponents$Direction$Type, arg5: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $MolangVec3$Type, arg1: $Molang$Type, arg2: boolean, arg3: $ParticleEffectComponents$Direction$Type, arg4: integer, arg5: $DefaultConstructorMarker$Type)
constructor(arg0: $MolangVec3$Type, arg1: $Molang$Type, arg2: boolean, arg3: $ParticleEffectComponents$Direction$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $MolangVec3$Type, arg1: $Molang$Type, arg2: boolean, arg3: $ParticleEffectComponents$Direction$Type): $ParticleEffectComponents$EmitterShapeSphere
public "getOffset"(): $MolangVec3
public "component4"(): $ParticleEffectComponents$Direction
public "component3"(): boolean
public "getRadius"(): $Molang
public "getDirection"(): $ParticleEffectComponents$Direction
public "component1"(): $MolangVec3
public "component2"(): $Molang
public "getSurfaceOnly"(): boolean
get "offset"(): $MolangVec3
get "radius"(): $Molang
get "direction"(): $ParticleEffectComponents$Direction
get "surfaceOnly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterShapeSphere$Type = ($ParticleEffectComponents$EmitterShapeSphere);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterShapeSphere_ = $ParticleEffectComponents$EmitterShapeSphere$Type;
}}
declare module "packages/gg/essential/model/file/$AnimationFile$Animation$SoundEffect" {
import {$AnimationFile$Animation$SoundEffect$Companion, $AnimationFile$Animation$SoundEffect$Companion$Type} from "packages/gg/essential/model/file/$AnimationFile$Animation$SoundEffect$Companion"
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $AnimationFile$Animation$SoundEffect {
static readonly "Companion": $AnimationFile$Animation$SoundEffect$Companion

constructor(arg0: integer, arg1: string, arg2: string, arg3: $SerializationConstructorMarker$Type)
constructor(arg0: string, arg1: string, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: string, arg1: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: string): $AnimationFile$Animation$SoundEffect
public "component1"(): string
public "component2"(): string
public "getLocator"(): string
public "getEffect"(): string
get "locator"(): string
get "effect"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationFile$Animation$SoundEffect$Type = ($AnimationFile$Animation$SoundEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationFile$Animation$SoundEffect_ = $AnimationFile$Animation$SoundEffect$Type;
}}
declare module "packages/gg/essential/model/util/$Quaternion$Companion" {
import {$Quaternion, $Quaternion$Type} from "packages/gg/essential/model/util/$Quaternion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Mat3, $Mat3$Type} from "packages/gg/essential/lib/kotgl/matrix/matrices/$Mat3"
import {$Vec3, $Vec3$Type} from "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec3"

export class $Quaternion$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "getX180"(): $Quaternion
public "getZ180"(): $Quaternion
public "getY180"(): $Quaternion
public "fromLookAt"(arg0: $Vec3$Type, arg1: $Vec3$Type): $Quaternion
public "fromRotationMatrix"(arg0: $Mat3$Type): $Quaternion
public "fromAxisAngle"(arg0: $Vec3$Type, arg1: float): $Quaternion
public "getIdentity"(): $Quaternion
get "x180"(): $Quaternion
get "z180"(): $Quaternion
get "y180"(): $Quaternion
get "identity"(): $Quaternion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Quaternion$Companion$Type = ($Quaternion$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Quaternion$Companion_ = $Quaternion$Companion$Type;
}}
declare module "packages/gg/essential/model/$Keyframe" {
import {$Keyframe$Companion, $Keyframe$Companion$Type} from "packages/gg/essential/model/$Keyframe$Companion"
import {$MolangVec3, $MolangVec3$Type} from "packages/gg/essential/model/molang/$MolangVec3"

export class $Keyframe {
static readonly "Companion": $Keyframe$Companion

constructor(arg0: $MolangVec3$Type, arg1: $MolangVec3$Type, arg2: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $MolangVec3$Type, arg1: $MolangVec3$Type, arg2: boolean): $Keyframe
public "component3"(): boolean
public "getPost"(): $MolangVec3
public "getSmooth"(): boolean
public "getPre"(): $MolangVec3
public "component1"(): $MolangVec3
public "component2"(): $MolangVec3
get "post"(): $MolangVec3
get "smooth"(): boolean
get "pre"(): $MolangVec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Keyframe$Type = ($Keyframe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Keyframe_ = $Keyframe$Type;
}}
declare module "packages/gg/essential/model/$RelativeTo" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$RelativeTo$Companion, $RelativeTo$Companion$Type} from "packages/gg/essential/model/$RelativeTo$Companion"

export class $RelativeTo {
static readonly "Companion": $RelativeTo$Companion

constructor(arg0: integer, arg1: string, arg2: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: string, arg1: integer, arg2: $DefaultConstructorMarker$Type)
constructor(arg0: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string): $RelativeTo
public "getRotation"(): string
public "component1"(): string
get "rotation"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelativeTo$Type = ($RelativeTo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelativeTo_ = $RelativeTo$Type;
}}
declare module "packages/gg/essential/universal/$UMatrixStack$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $UMatrixStack$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UMatrixStack$Companion$Type = ($UMatrixStack$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UMatrixStack$Companion_ = $UMatrixStack$Companion$Type;
}}
declare module "packages/gg/essential/sps/$IntegratedServerManager$GameMode$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $IntegratedServerManager$GameMode$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegratedServerManager$GameMode$Companion$Type = ($IntegratedServerManager$GameMode$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegratedServerManager$GameMode$Companion_ = $IntegratedServerManager$GameMode$Companion$Type;
}}
declare module "packages/gg/essential/model/$Channels" {
import {$RelativeTo, $RelativeTo$Type} from "packages/gg/essential/model/$RelativeTo"
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$Channels$Companion, $Channels$Companion$Type} from "packages/gg/essential/model/$Channels$Companion"
import {$Keyframes, $Keyframes$Type} from "packages/gg/essential/model/$Keyframes"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $Channels {
static readonly "Companion": $Channels$Companion

constructor(arg0: integer, arg1: $Keyframes$Type, arg2: $Keyframes$Type, arg3: $Keyframes$Type, arg4: $RelativeTo$Type, arg5: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $Keyframes$Type, arg1: $Keyframes$Type, arg2: $Keyframes$Type, arg3: $RelativeTo$Type, arg4: integer, arg5: $DefaultConstructorMarker$Type)
constructor(arg0: $Keyframes$Type, arg1: $Keyframes$Type, arg2: $Keyframes$Type, arg3: $RelativeTo$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Keyframes$Type, arg1: $Keyframes$Type, arg2: $Keyframes$Type, arg3: $RelativeTo$Type): $Channels
public "getPosition"(): $Keyframes
public "component4"(): $RelativeTo
public "component3"(): $Keyframes
public "getRotation"(): $Keyframes
public "getScale"(): $Keyframes
public "component1"(): $Keyframes
public "component2"(): $Keyframes
public "getRelativeTo"(): $RelativeTo
get "position"(): $Keyframes
get "rotation"(): $Keyframes
get "scale"(): $Keyframes
get "relativeTo"(): $RelativeTo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Channels$Type = ($Channels);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Channels_ = $Channels$Type;
}}
declare module "packages/gg/essential/cosmetics/events/$AnimationTarget" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $AnimationTarget extends $Enum<($AnimationTarget)> {
static readonly "SELF": $AnimationTarget
static readonly "OTHERS": $AnimationTarget
static readonly "ALL": $AnimationTarget


public static "values"(): ($AnimationTarget)[]
public static "valueOf"(arg0: string): $AnimationTarget
public static "getEntries"(): $EnumEntries<($AnimationTarget)>
get "entries"(): $EnumEntries<($AnimationTarget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationTarget$Type = (("all") | ("self") | ("others")) | ($AnimationTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationTarget_ = $AnimationTarget$Type;
}}
declare module "packages/gg/essential/cosmetics/$CosmeticsState" {
import {$Cosmetic, $Cosmetic$Type} from "packages/gg/essential/network/cosmetics/$Cosmetic"
import {$ArmorSlots, $ArmorSlots$Type} from "packages/gg/essential/cosmetics/$ArmorSlots"
import {$CosmeticSlot, $CosmeticSlot$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticSlot"
import {$Vector3, $Vector3$Type} from "packages/gg/essential/model/$Vector3"
import {$CosmeticsState$Companion, $CosmeticsState$Companion$Type} from "packages/gg/essential/cosmetics/$CosmeticsState$Companion"
import {$BedrockModel, $BedrockModel$Type} from "packages/gg/essential/model/$BedrockModel"
import {$Model, $Model$Type} from "packages/gg/essential/mod/$Model"
import {$Cube, $Cube$Type} from "packages/gg/essential/model/$Cube"
import {$SkinMask, $SkinMask$Type} from "packages/gg/essential/cosmetics/skinmask/$SkinMask"
import {$EquippedCosmetic, $EquippedCosmetic$Type} from "packages/gg/essential/cosmetics/$EquippedCosmetic"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Side, $Side$Type} from "packages/gg/essential/model/$Side"
import {$EnumPart, $EnumPart$Type} from "packages/gg/essential/model/$EnumPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CosmeticsState {
static readonly "Companion": $CosmeticsState$Companion
static readonly "EMPTY": $CosmeticsState

constructor(arg0: $Model$Type, arg1: $Map$Type<($CosmeticSlot$Type), ($EquippedCosmetic$Type)>, arg2: $Map$Type<($Cosmetic$Type), ($BedrockModel$Type)>, arg3: $ArmorSlots$Type)

public "getHidesHeldItems"(): boolean
public "getUsesCapePose"(): boolean
public "getUsesElytraPose"(): boolean
public "getCosmetics"(): $Map<($CosmeticSlot), ($EquippedCosmetic)>
public "getPartsEquipped"(): $Set<(integer)>
public "getLocksPlayerRotation"(): boolean
public "getHiddenBones"(): $Map<(string), ($Set<(string)>)>
public "getSkinMask"(): $SkinMask
public "copyWithout"(arg0: $CosmeticSlot$Type): $CosmeticsState
public "getBedrockModels"(): $Map<($Cosmetic), ($BedrockModel)>
public "getHiddenParts"(): $Map<(string), ($Set<($EnumPart)>)>
public "getPositionAdjustment"(arg0: $Cosmetic$Type): $Vector3
public "getSkinType"(): $Model
public "getArmor"(): $ArmorSlots
public "getSides"(): $Map<(string), ($Side)>
public "propertyHidesEntireCosmetic"(arg0: string): boolean
public "getPositionAdjustments"(): $Map<(string), ($Vector3)>
public "getRenderGeometries"(): $Map<(string), ($List<($List<($Cube)>)>)>
get "hidesHeldItems"(): boolean
get "usesCapePose"(): boolean
get "usesElytraPose"(): boolean
get "cosmetics"(): $Map<($CosmeticSlot), ($EquippedCosmetic)>
get "partsEquipped"(): $Set<(integer)>
get "locksPlayerRotation"(): boolean
get "hiddenBones"(): $Map<(string), ($Set<(string)>)>
get "skinMask"(): $SkinMask
get "bedrockModels"(): $Map<($Cosmetic), ($BedrockModel)>
get "hiddenParts"(): $Map<(string), ($Set<($EnumPart)>)>
get "skinType"(): $Model
get "armor"(): $ArmorSlots
get "sides"(): $Map<(string), ($Side)>
get "positionAdjustments"(): $Map<(string), ($Vector3)>
get "renderGeometries"(): $Map<(string), ($List<($List<($Cube)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticsState$Type = ($CosmeticsState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticsState_ = $CosmeticsState$Type;
}}
declare module "packages/gg/essential/mod/$EssentialAsset" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$EssentialAsset$Companion, $EssentialAsset$Companion$Type} from "packages/gg/essential/mod/$EssentialAsset$Companion"

export class $EssentialAsset {
static readonly "Companion": $EssentialAsset$Companion

constructor(arg0: string, arg1: string)
constructor(arg0: integer, arg1: string, arg2: string, arg3: $SerializationConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: string): $EssentialAsset
public "getUrl"(): string
public "component1"(): string
public "component2"(): string
public "getChecksum"(): string
get "url"(): string
get "checksum"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssentialAsset$Type = ($EssentialAsset);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssentialAsset_ = $EssentialAsset$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/featured/$FeaturedPageComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FeaturedPageComponent {

}

export namespace $FeaturedPageComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeaturedPageComponent$Type = ($FeaturedPageComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeaturedPageComponent_ = $FeaturedPageComponent$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/$CosmeticBundle" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$CosmeticTier, $CosmeticTier$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticTier"
import {$CosmeticSlot, $CosmeticSlot$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticSlot"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CosmeticSetting, $CosmeticSetting$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting"
import {$CosmeticBundle$Companion, $CosmeticBundle$Companion$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticBundle$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$CosmeticBundle$Skin, $CosmeticBundle$Skin$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticBundle$Skin"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CosmeticBundle {
static readonly "Companion": $CosmeticBundle$Companion

constructor(arg0: integer, arg1: string, arg2: string, arg3: $CosmeticTier$Type, arg4: float, arg5: boolean, arg6: $CosmeticBundle$Skin$Type, arg7: $Map$Type<(any), (any)>, arg8: $Map$Type<(any), (any)>, arg9: $SerializationConstructorMarker$Type)
constructor(arg0: string, arg1: string, arg2: $CosmeticTier$Type, arg3: float, arg4: boolean, arg5: $CosmeticBundle$Skin$Type, arg6: $Map$Type<(any), (any)>, arg7: $Map$Type<(any), (any)>, arg8: integer, arg9: $DefaultConstructorMarker$Type)
constructor(arg0: string, arg1: string, arg2: $CosmeticTier$Type, arg3: float, arg4: boolean, arg5: $CosmeticBundle$Skin$Type, arg6: $Map$Type<($CosmeticSlot$Type), (string)>, arg7: $Map$Type<(string), (any)>)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getId"(): string
public "copy"(arg0: string, arg1: string, arg2: $CosmeticTier$Type, arg3: float, arg4: boolean, arg5: $CosmeticBundle$Skin$Type, arg6: $Map$Type<($CosmeticSlot$Type), (string)>, arg7: $Map$Type<(string), (any)>): $CosmeticBundle
public "getSettings"(): $Map<(string), ($List<($CosmeticSetting)>)>
public "component4"(): float
public "component3"(): $CosmeticTier
public "component5"(): boolean
public "getSkin"(): $CosmeticBundle$Skin
public "getDiscountPercent"(): float
public "getCosmetics"(): $Map<($CosmeticSlot), (string)>
public "component1"(): string
public "component2"(): string
public "getTier"(): $CosmeticTier
public "component8"(): $Map<(string), ($List<($CosmeticSetting)>)>
public "setSkin"(arg0: $CosmeticBundle$Skin$Type): void
public "getRotateOnPreview"(): boolean
public "component7"(): $Map<($CosmeticSlot), (string)>
public "component6"(): $CosmeticBundle$Skin
get "name"(): string
get "id"(): string
get "settings"(): $Map<(string), ($List<($CosmeticSetting)>)>
get "skin"(): $CosmeticBundle$Skin
get "discountPercent"(): float
get "cosmetics"(): $Map<($CosmeticSlot), (string)>
get "tier"(): $CosmeticTier
set "skin"(value: $CosmeticBundle$Skin$Type)
get "rotateOnPreview"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticBundle$Type = ($CosmeticBundle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticBundle_ = $CosmeticBundle$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapePoint$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticleEffectComponents$EmitterShapePoint, $ParticleEffectComponents$EmitterShapePoint$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapePoint"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$EmitterShapePoint$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$EmitterShapePoint)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterShapePoint$Companion$Type = ($ParticleEffectComponents$EmitterShapePoint$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterShapePoint$Companion_ = $ParticleEffectComponents$EmitterShapePoint$Companion$Type;
}}
declare module "packages/gg/essential/model/$BedrockModel" {
import {$Animation, $Animation$Type} from "packages/gg/essential/model/$Animation"
import {$BakedAnimations, $BakedAnimations$Type} from "packages/gg/essential/model/bones/$BakedAnimations"
import {$UMatrixStack, $UMatrixStack$Type} from "packages/gg/essential/model/util/$UMatrixStack"
import {$Cosmetic, $Cosmetic$Type} from "packages/gg/essential/network/cosmetics/$Cosmetic"
import {$SoundDefinitionsFile, $SoundDefinitionsFile$Type} from "packages/gg/essential/model/file/$SoundDefinitionsFile"
import {$BedrockModel$Companion, $BedrockModel$Companion$Type} from "packages/gg/essential/model/$BedrockModel$Companion"
import {$PlayerPose, $PlayerPose$Type} from "packages/gg/essential/model/backend/$PlayerPose"
import {$ModelFile, $ModelFile$Type} from "packages/gg/essential/model/file/$ModelFile"
import {$Bones, $Bones$Type} from "packages/gg/essential/model/$Bones"
import {$Cube, $Cube$Type} from "packages/gg/essential/model/$Cube"
import {$Cosmetic$Diagnostic, $Cosmetic$Diagnostic$Type} from "packages/gg/essential/network/cosmetics/$Cosmetic$Diagnostic"
import {$SkinMask, $SkinMask$Type} from "packages/gg/essential/cosmetics/skinmask/$SkinMask"
import {$RenderBackend$CommandQueue, $RenderBackend$CommandQueue$Type} from "packages/gg/essential/model/backend/$RenderBackend$CommandQueue"
import {$ModelAnimationState, $ModelAnimationState$Type} from "packages/gg/essential/model/$ModelAnimationState"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ParticlesFile, $ParticlesFile$Type} from "packages/gg/essential/model/file/$ParticlesFile"
import {$RenderBackend$Texture, $RenderBackend$Texture$Type} from "packages/gg/essential/model/backend/$RenderBackend$Texture"
import {$Side, $Side$Type} from "packages/gg/essential/model/$Side"
import {$AnimationFile, $AnimationFile$Type} from "packages/gg/essential/model/file/$AnimationFile"
import {$RenderMetadata, $RenderMetadata$Type} from "packages/gg/essential/model/$RenderMetadata"
import {$AnimationEvent, $AnimationEvent$Type} from "packages/gg/essential/cosmetics/events/$AnimationEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BedrockModel {
static readonly "Companion": $BedrockModel$Companion
 "boundingBoxes": $List<(any)>
static readonly "TEXTURE_ANIMATION_FPS": float

constructor(arg0: $Cosmetic$Type, arg1: string, arg2: $ModelFile$Type, arg3: $AnimationFile$Type, arg4: $Map$Type<(string), ($ParticlesFile$Type)>, arg5: $SoundDefinitionsFile$Type, arg6: $RenderBackend$Texture$Type, arg7: $RenderBackend$Texture$Type, arg8: $Map$Type<($Side$Type), ($SkinMask$Type)>)

public "getVariant"(): string
public "getEmissiveTexture"(): $RenderBackend$Texture
public "getAnimations"(): $List<($Animation)>
public "render"(arg0: $UMatrixStack$Type, arg1: $RenderBackend$CommandQueue$Type, arg2: $List$Type<(any)>, arg3: $BakedAnimations$Type, arg4: $RenderMetadata$Type, arg5: float): void
public "getTexture"(): $RenderBackend$Texture
public "getCosmetic"(): $Cosmetic
public "computePose"(arg0: $PlayerPose$Type, arg1: $ModelAnimationState$Type): $PlayerPose
public "getDiagnostics"(): $List<($Cosmetic$Diagnostic)>
public "setTranslucent"(arg0: boolean): void
public "getTranslucent"(): boolean
public "getSoundData"(): $SoundDefinitionsFile
public "setAnimations"(arg0: $List$Type<($Animation$Type)>): void
public "getAnimationData"(): $AnimationFile
public "getSkinMasks"(): $Map<($Side), ($SkinMask)>
public "getParticleData"(): $Map<(string), ($ParticlesFile)>
public "getBones"(): $Bones
public "setEmissiveTexture"(arg0: $RenderBackend$Texture$Type): void
public "setAnimationEvents"(arg0: $List$Type<($AnimationEvent$Type)>): void
public "getAnimationByName"(arg0: string): $Animation
public "getSideOptions"(): $Set<($Side)>
public "getAnimationEvents"(): $List<($AnimationEvent)>
public "getDefaultRenderGeometry"(): $List<($List<($Cube)>)>
public "setTextureFrameCount"(arg0: integer): void
public "getTextureFrameCount"(): integer
public "isContainsSideOption"(): boolean
public "setTexture"(arg0: $RenderBackend$Texture$Type): void
get "variant"(): string
get "emissiveTexture"(): $RenderBackend$Texture
get "animations"(): $List<($Animation)>
get "texture"(): $RenderBackend$Texture
get "cosmetic"(): $Cosmetic
get "diagnostics"(): $List<($Cosmetic$Diagnostic)>
set "translucent"(value: boolean)
get "translucent"(): boolean
get "soundData"(): $SoundDefinitionsFile
set "animations"(value: $List$Type<($Animation$Type)>)
get "animationData"(): $AnimationFile
get "skinMasks"(): $Map<($Side), ($SkinMask)>
get "particleData"(): $Map<(string), ($ParticlesFile)>
get "bones"(): $Bones
set "emissiveTexture"(value: $RenderBackend$Texture$Type)
set "animationEvents"(value: $List$Type<($AnimationEvent$Type)>)
get "sideOptions"(): $Set<($Side)>
get "animationEvents"(): $List<($AnimationEvent)>
get "defaultRenderGeometry"(): $List<($List<($Cube)>)>
set "textureFrameCount"(value: integer)
get "textureFrameCount"(): integer
get "containsSideOption"(): boolean
set "texture"(value: $RenderBackend$Texture$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BedrockModel$Type = ($BedrockModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BedrockModel_ = $BedrockModel$Type;
}}
declare module "packages/gg/essential/model/molang/$Variables" {
import {$Variables$Variable, $Variables$Variable$Type} from "packages/gg/essential/model/molang/$Variables$Variable"

export interface $Variables {

 "get"(arg0: string): float
 "set"(arg0: string, arg1: float): void
 "fallbackBackTo"(arg0: $Variables$Type): $Variables
 "getOrNull"(arg0: string): $Variables$Variable
 "getOrPut"(arg0: string, arg1: float): $Variables$Variable
}

export namespace $Variables {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Variables$Type = ($Variables);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Variables_ = $Variables$Type;
}}
declare module "packages/gg/essential/model/collision/$CollisionProvider" {
import {$Pair, $Pair$Type} from "packages/kotlin/$Pair"
import {$Vec3, $Vec3$Type} from "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec3"

export interface $CollisionProvider {

 "query"(arg0: $Vec3$Type, arg1: float, arg2: $Vec3$Type): $Pair<($Vec3), ($Vec3)>

(arg0: $Vec3$Type, arg1: float, arg2: $Vec3$Type): $Pair<($Vec3), ($Vec3)>
}

export namespace $CollisionProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CollisionProvider$Type = ($CollisionProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CollisionProvider_ = $CollisionProvider$Type;
}}
declare module "packages/gg/essential/model/molang/$MolangExpression$Companion" {
import {$LiteralExpr, $LiteralExpr$Type} from "packages/gg/essential/model/molang/$LiteralExpr"

export class $MolangExpression$Companion {


public "getONE"(): $LiteralExpr
public "getZERO"(): $LiteralExpr
get "oNE"(): $LiteralExpr
get "zERO"(): $LiteralExpr
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolangExpression$Companion$Type = ($MolangExpression$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolangExpression$Companion_ = $MolangExpression$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Curve$Companion" {
import {$ParticlesFile$Curve, $ParticlesFile$Curve$Type} from "packages/gg/essential/model/file/$ParticlesFile$Curve"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticlesFile$Curve$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticlesFile$Curve)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Curve$Companion$Type = ($ParticlesFile$Curve$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Curve$Companion_ = $ParticlesFile$Curve$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ModelFile$Cube" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ModelFile$Uvs, $ModelFile$Uvs$Type} from "packages/gg/essential/model/file/$ModelFile$Uvs"
import {$Vector3, $Vector3$Type} from "packages/gg/essential/model/$Vector3"
import {$ModelFile$Cube$Companion, $ModelFile$Cube$Companion$Type} from "packages/gg/essential/model/file/$ModelFile$Cube$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ModelFile$Cube {
static readonly "Companion": $ModelFile$Cube$Companion

constructor(arg0: integer, arg1: $Vector3$Type, arg2: $Vector3$Type, arg3: $ModelFile$Uvs$Type, arg4: boolean, arg5: float, arg6: $SerializationConstructorMarker$Type)
constructor(arg0: $Vector3$Type, arg1: $Vector3$Type, arg2: $ModelFile$Uvs$Type, arg3: boolean, arg4: float, arg5: integer, arg6: $DefaultConstructorMarker$Type)
constructor(arg0: $Vector3$Type, arg1: $Vector3$Type, arg2: $ModelFile$Uvs$Type, arg3: boolean, arg4: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Vector3$Type, arg1: $Vector3$Type, arg2: $ModelFile$Uvs$Type, arg3: boolean, arg4: float): $ModelFile$Cube
public "getSize"(): $Vector3
public "getOrigin"(): $Vector3
public "component4"(): boolean
public "component3"(): $ModelFile$Uvs
public "component5"(): float
public "getMirror"(): boolean
public "getInflate"(): float
public "getUv"(): $ModelFile$Uvs
public "component1"(): $Vector3
public "component2"(): $Vector3
get "size"(): $Vector3
get "origin"(): $Vector3
get "mirror"(): boolean
get "inflate"(): float
get "uv"(): $ModelFile$Uvs
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$Cube$Type = ($ModelFile$Cube);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile$Cube_ = $ModelFile$Cube$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/$CosmeticAssets" {
import {$CosmeticAssets$Geometry, $CosmeticAssets$Geometry$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticAssets$Geometry"
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$EssentialAsset, $EssentialAsset$Type} from "packages/gg/essential/mod/$EssentialAsset"
import {$Side, $Side$Type} from "packages/gg/essential/model/$Side"
import {$CosmeticAssets$Companion, $CosmeticAssets$Companion$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticAssets$Companion"
import {$CosmeticAssets$SkinMask, $CosmeticAssets$SkinMask$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticAssets$SkinMask"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CosmeticAssets {
static readonly "Companion": $CosmeticAssets$Companion

constructor(arg0: $Map$Type<(string), ($EssentialAsset$Type)>)
constructor(arg0: integer, arg1: $Map$Type<(any), (any)>, arg2: $EssentialAsset$Type, arg3: $EssentialAsset$Type, arg4: $EssentialAsset$Type, arg5: $CosmeticAssets$Geometry$Type, arg6: $EssentialAsset$Type, arg7: $CosmeticAssets$SkinMask$Type, arg8: $Map$Type<(any), (any)>, arg9: $EssentialAsset$Type, arg10: $Map$Type<(any), (any)>, arg11: $EssentialAsset$Type, arg12: $SerializationConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Map$Type<(string), ($EssentialAsset$Type)>): $CosmeticAssets
public "getSettings"(): $EssentialAsset
public "getEmissiveTexture"(): $EssentialAsset
public "getGeometry"(): $CosmeticAssets$Geometry
public "getSidedSkinMasks"(): $Map<($Side), ($CosmeticAssets$SkinMask)>
public "getDefaultSkinMask"(): $CosmeticAssets$SkinMask
public "getOtherFiles"(): $Map<(string), ($EssentialAsset)>
public "getAnimations"(): $EssentialAsset
public "getParticles"(): $Map<(string), ($EssentialAsset)>
public "getTexture"(): $EssentialAsset
public "getAllFiles"(): $Map<(string), ($EssentialAsset)>
public "component1"(): $Map<(string), ($EssentialAsset)>
public "getThumbnail"(): $EssentialAsset
public "getSoundDefinitions"(): $EssentialAsset
get "settings"(): $EssentialAsset
get "emissiveTexture"(): $EssentialAsset
get "geometry"(): $CosmeticAssets$Geometry
get "sidedSkinMasks"(): $Map<($Side), ($CosmeticAssets$SkinMask)>
get "defaultSkinMask"(): $CosmeticAssets$SkinMask
get "otherFiles"(): $Map<(string), ($EssentialAsset)>
get "animations"(): $EssentialAsset
get "particles"(): $Map<(string), ($EssentialAsset)>
get "texture"(): $EssentialAsset
get "allFiles"(): $Map<(string), ($EssentialAsset)>
get "thumbnail"(): $EssentialAsset
get "soundDefinitions"(): $EssentialAsset
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticAssets$Type = ($CosmeticAssets);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticAssets_ = $CosmeticAssets$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeOnce" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$EmitterLifetimeOnce$Companion, $ParticleEffectComponents$EmitterLifetimeOnce$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeOnce$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"

export class $ParticleEffectComponents$EmitterLifetimeOnce {
static readonly "Companion": $ParticleEffectComponents$EmitterLifetimeOnce$Companion

constructor(arg0: integer, arg1: $Molang$Type, arg2: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $Molang$Type, arg1: integer, arg2: $DefaultConstructorMarker$Type)
constructor(arg0: $Molang$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Molang$Type): $ParticleEffectComponents$EmitterLifetimeOnce
public "component1"(): $Molang
public "getActiveTime"(): $Molang
get "activeTime"(): $Molang
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterLifetimeOnce$Type = ($ParticleEffectComponents$EmitterLifetimeOnce);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterLifetimeOnce_ = $ParticleEffectComponents$EmitterLifetimeOnce$Type;
}}
declare module "packages/gg/essential/model/$SoundCategory" {
import {$SoundCategory$Companion, $SoundCategory$Companion$Type} from "packages/gg/essential/model/$SoundCategory$Companion"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $SoundCategory extends $Enum<($SoundCategory)> {
static readonly "Companion": $SoundCategory$Companion
static readonly "MUSIC": $SoundCategory
static readonly "RECORD": $SoundCategory
static readonly "WEATHER": $SoundCategory
static readonly "BLOCK": $SoundCategory
static readonly "HOSTILE": $SoundCategory
static readonly "NEUTRAL": $SoundCategory
static readonly "PLAYER": $SoundCategory
static readonly "AMBIENT": $SoundCategory


public static "values"(): ($SoundCategory)[]
public static "valueOf"(arg0: string): $SoundCategory
public static "getEntries"(): $EnumEntries<($SoundCategory)>
get "entries"(): $EnumEntries<($SoundCategory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundCategory$Type = (("music") | ("hostile") | ("record") | ("weather") | ("neutral") | ("block") | ("ambient") | ("player")) | ($SoundCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundCategory_ = $SoundCategory$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/featured/$FeaturedPageCollection$Availability$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$FeaturedPageCollection$Availability, $FeaturedPageCollection$Availability$Type} from "packages/gg/essential/mod/cosmetics/featured/$FeaturedPageCollection$Availability"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $FeaturedPageCollection$Availability$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($FeaturedPageCollection$Availability)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeaturedPageCollection$Availability$Companion$Type = ($FeaturedPageCollection$Availability$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeaturedPageCollection$Availability$Companion_ = $FeaturedPageCollection$Availability$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionDynamic$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticleEffectComponents$ParticleMotionDynamic, $ParticleEffectComponents$ParticleMotionDynamic$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionDynamic"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$ParticleMotionDynamic$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$ParticleMotionDynamic)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleMotionDynamic$Companion$Type = ($ParticleEffectComponents$ParticleMotionDynamic$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleMotionDynamic$Companion_ = $ParticleEffectComponents$ParticleMotionDynamic$Companion$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/$CosmeticTier$Companion" {
import {$CosmeticTier, $CosmeticTier$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticTier"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $CosmeticTier$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($CosmeticTier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticTier$Companion$Type = ($CosmeticTier$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticTier$Companion_ = $CosmeticTier$Companion$Type;
}}
declare module "packages/gg/essential/model/backend/$PlayerPose" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$PlayerPose$Part, $PlayerPose$Part$Type} from "packages/gg/essential/model/backend/$PlayerPose$Part"
import {$KMappedMarker, $KMappedMarker$Type} from "packages/kotlin/jvm/internal/markers/$KMappedMarker"
import {$Function2, $Function2$Type} from "packages/kotlin/jvm/functions/$Function2"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$PlayerPose$Companion, $PlayerPose$Companion$Type} from "packages/gg/essential/model/backend/$PlayerPose$Companion"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$EnumPart, $EnumPart$Type} from "packages/gg/essential/model/$EnumPart"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PlayerPose implements $Map<($EnumPart), ($PlayerPose$Part)>, $KMappedMarker {
static readonly "Companion": $PlayerPose$Companion

constructor(arg0: $PlayerPose$Part$Type, arg1: $PlayerPose$Part$Type, arg2: $PlayerPose$Part$Type, arg3: $PlayerPose$Part$Type, arg4: $PlayerPose$Part$Type, arg5: $PlayerPose$Part$Type, arg6: $PlayerPose$Part$Type, arg7: $PlayerPose$Part$Type, arg8: $PlayerPose$Part$Type, arg9: $PlayerPose$Part$Type, arg10: $PlayerPose$Part$Type, arg11: boolean)

public "remove"(arg0: any, arg1: any): boolean
public "get"(arg0: $EnumPart$Type): $PlayerPose$Part
public "put"(arg0: $EnumPart$Type, arg1: $PlayerPose$Part$Type): $PlayerPose$Part
public "equals"(arg0: any): boolean
public "toString"(): string
public "values"(): $Collection<($PlayerPose$Part)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: $EnumPart$Type, arg1: $PlayerPose$Part$Type): $PlayerPose$Part
public "replace"(arg0: $EnumPart$Type, arg1: $PlayerPose$Part$Type, arg2: $PlayerPose$Part$Type): boolean
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public "size"(): integer
public "merge"(arg0: $EnumPart$Type, arg1: $PlayerPose$Part$Type, arg2: $BiFunction$Type<(any), (any), (any)>): $PlayerPose$Part
public "entrySet"(): $Set<($Map$Entry<($EnumPart), ($PlayerPose$Part)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "putIfAbsent"(arg0: $EnumPart$Type, arg1: $PlayerPose$Part$Type): $PlayerPose$Part
public "compute"(arg0: $EnumPart$Type, arg1: $BiFunction$Type<(any), (any), (any)>): $PlayerPose$Part
public "containsKey"(arg0: $EnumPart$Type): boolean
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: $EnumPart$Type, arg1: $Function$Type<(any), (any)>): $PlayerPose$Part
public "keySet"(): $Set<($EnumPart)>
public "containsValue"(arg0: $PlayerPose$Part$Type): boolean
public "containsValue"(arg0: any): boolean
public "computeIfPresent"(arg0: $EnumPart$Type, arg1: $BiFunction$Type<(any), (any), (any)>): $PlayerPose$Part
public "copy"(arg0: $PlayerPose$Part$Type, arg1: $PlayerPose$Part$Type, arg2: $PlayerPose$Part$Type, arg3: $PlayerPose$Part$Type, arg4: $PlayerPose$Part$Type, arg5: $PlayerPose$Part$Type, arg6: $PlayerPose$Part$Type, arg7: $PlayerPose$Part$Type, arg8: $PlayerPose$Part$Type, arg9: $PlayerPose$Part$Type, arg10: $PlayerPose$Part$Type, arg11: boolean): $PlayerPose
public "getSize"(): integer
public "getEntries"(): $Set<($Map$Entry<($EnumPart), ($PlayerPose$Part)>)>
public "getKeys"(): $Set<($EnumPart)>
public "getChild"(): boolean
public "component4"(): $PlayerPose$Part
public "component3"(): $PlayerPose$Part
public "component5"(): $PlayerPose$Part
public "getLeftShoulderEntity"(): $PlayerPose$Part
public "getRightShoulderEntity"(): $PlayerPose$Part
public "mapParts"(arg0: $Function2$Type<(any), (any), ($PlayerPose$Part$Type)>): $PlayerPose
public "getLeftWing"(): $PlayerPose$Part
public "getLeftLeg"(): $PlayerPose$Part
public "getLeftArm"(): $PlayerPose$Part
public "getRightWing"(): $PlayerPose$Part
public "getRightArm"(): $PlayerPose$Part
public "getRightLeg"(): $PlayerPose$Part
public "getCape"(): $PlayerPose$Part
public "getHead"(): $PlayerPose$Part
public "component12"(): boolean
public "component11"(): $PlayerPose$Part
public "component10"(): $PlayerPose$Part
public "withoutAttachments"(): $PlayerPose
public "getValues"(): $Collection<($PlayerPose$Part)>
public "component1"(): $PlayerPose$Part
public "component2"(): $PlayerPose$Part
public "getBody"(): $PlayerPose$Part
public "component9"(): $PlayerPose$Part
public "component8"(): $PlayerPose$Part
public "component7"(): $PlayerPose$Part
public "component6"(): $PlayerPose$Part
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<($EnumPart), ($PlayerPose$Part)>
public static "of"<K, V>(arg0: $EnumPart$Type, arg1: $PlayerPose$Part$Type, arg2: $EnumPart$Type, arg3: $PlayerPose$Part$Type, arg4: $EnumPart$Type, arg5: $PlayerPose$Part$Type, arg6: $EnumPart$Type, arg7: $PlayerPose$Part$Type, arg8: $EnumPart$Type, arg9: $PlayerPose$Part$Type): $Map<($EnumPart), ($PlayerPose$Part)>
public static "of"<K, V>(arg0: $EnumPart$Type, arg1: $PlayerPose$Part$Type, arg2: $EnumPart$Type, arg3: $PlayerPose$Part$Type, arg4: $EnumPart$Type, arg5: $PlayerPose$Part$Type, arg6: $EnumPart$Type, arg7: $PlayerPose$Part$Type): $Map<($EnumPart), ($PlayerPose$Part)>
public static "of"<K, V>(arg0: $EnumPart$Type, arg1: $PlayerPose$Part$Type, arg2: $EnumPart$Type, arg3: $PlayerPose$Part$Type, arg4: $EnumPart$Type, arg5: $PlayerPose$Part$Type): $Map<($EnumPart), ($PlayerPose$Part)>
public static "of"<K, V>(): $Map<($EnumPart), ($PlayerPose$Part)>
public static "of"<K, V>(arg0: $EnumPart$Type, arg1: $PlayerPose$Part$Type, arg2: $EnumPart$Type, arg3: $PlayerPose$Part$Type): $Map<($EnumPart), ($PlayerPose$Part)>
public static "of"<K, V>(arg0: $EnumPart$Type, arg1: $PlayerPose$Part$Type): $Map<($EnumPart), ($PlayerPose$Part)>
public static "of"<K, V>(arg0: $EnumPart$Type, arg1: $PlayerPose$Part$Type, arg2: $EnumPart$Type, arg3: $PlayerPose$Part$Type, arg4: $EnumPart$Type, arg5: $PlayerPose$Part$Type, arg6: $EnumPart$Type, arg7: $PlayerPose$Part$Type, arg8: $EnumPart$Type, arg9: $PlayerPose$Part$Type, arg10: $EnumPart$Type, arg11: $PlayerPose$Part$Type, arg12: $EnumPart$Type, arg13: $PlayerPose$Part$Type, arg14: $EnumPart$Type, arg15: $PlayerPose$Part$Type, arg16: $EnumPart$Type, arg17: $PlayerPose$Part$Type, arg18: $EnumPart$Type, arg19: $PlayerPose$Part$Type): $Map<($EnumPart), ($PlayerPose$Part)>
public static "of"<K, V>(arg0: $EnumPart$Type, arg1: $PlayerPose$Part$Type, arg2: $EnumPart$Type, arg3: $PlayerPose$Part$Type, arg4: $EnumPart$Type, arg5: $PlayerPose$Part$Type, arg6: $EnumPart$Type, arg7: $PlayerPose$Part$Type, arg8: $EnumPart$Type, arg9: $PlayerPose$Part$Type, arg10: $EnumPart$Type, arg11: $PlayerPose$Part$Type, arg12: $EnumPart$Type, arg13: $PlayerPose$Part$Type, arg14: $EnumPart$Type, arg15: $PlayerPose$Part$Type, arg16: $EnumPart$Type, arg17: $PlayerPose$Part$Type): $Map<($EnumPart), ($PlayerPose$Part)>
public static "of"<K, V>(arg0: $EnumPart$Type, arg1: $PlayerPose$Part$Type, arg2: $EnumPart$Type, arg3: $PlayerPose$Part$Type, arg4: $EnumPart$Type, arg5: $PlayerPose$Part$Type, arg6: $EnumPart$Type, arg7: $PlayerPose$Part$Type, arg8: $EnumPart$Type, arg9: $PlayerPose$Part$Type, arg10: $EnumPart$Type, arg11: $PlayerPose$Part$Type, arg12: $EnumPart$Type, arg13: $PlayerPose$Part$Type, arg14: $EnumPart$Type, arg15: $PlayerPose$Part$Type): $Map<($EnumPart), ($PlayerPose$Part)>
public static "of"<K, V>(arg0: $EnumPart$Type, arg1: $PlayerPose$Part$Type, arg2: $EnumPart$Type, arg3: $PlayerPose$Part$Type, arg4: $EnumPart$Type, arg5: $PlayerPose$Part$Type, arg6: $EnumPart$Type, arg7: $PlayerPose$Part$Type, arg8: $EnumPart$Type, arg9: $PlayerPose$Part$Type, arg10: $EnumPart$Type, arg11: $PlayerPose$Part$Type, arg12: $EnumPart$Type, arg13: $PlayerPose$Part$Type): $Map<($EnumPart), ($PlayerPose$Part)>
public static "of"<K, V>(arg0: $EnumPart$Type, arg1: $PlayerPose$Part$Type, arg2: $EnumPart$Type, arg3: $PlayerPose$Part$Type, arg4: $EnumPart$Type, arg5: $PlayerPose$Part$Type, arg6: $EnumPart$Type, arg7: $PlayerPose$Part$Type, arg8: $EnumPart$Type, arg9: $PlayerPose$Part$Type, arg10: $EnumPart$Type, arg11: $PlayerPose$Part$Type): $Map<($EnumPart), ($PlayerPose$Part)>
public static "entry"<K, V>(arg0: $EnumPart$Type, arg1: $PlayerPose$Part$Type): $Map$Entry<($EnumPart), ($PlayerPose$Part)>
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "getOrDefault"(arg0: any, arg1: $PlayerPose$Part$Type): $PlayerPose$Part
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<($EnumPart), ($PlayerPose$Part)>
[index: string | number]: $PlayerPose$Part
get "empty"(): boolean
get "entries"(): $Set<($Map$Entry<($EnumPart), ($PlayerPose$Part)>)>
get "keys"(): $Set<($EnumPart)>
get "child"(): boolean
get "leftShoulderEntity"(): $PlayerPose$Part
get "rightShoulderEntity"(): $PlayerPose$Part
get "leftWing"(): $PlayerPose$Part
get "leftLeg"(): $PlayerPose$Part
get "leftArm"(): $PlayerPose$Part
get "rightWing"(): $PlayerPose$Part
get "rightArm"(): $PlayerPose$Part
get "rightLeg"(): $PlayerPose$Part
get "cape"(): $PlayerPose$Part
get "head"(): $PlayerPose$Part
get "body"(): $PlayerPose$Part
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerPose$Type = ($PlayerPose);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerPose_ = $PlayerPose$Type;
}}
declare module "packages/gg/essential/gui/elementa/state/v2/collections/$TrackedList" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$KMappedMarker, $KMappedMarker$Type} from "packages/kotlin/jvm/internal/markers/$KMappedMarker"
import {$ListIterator, $ListIterator$Type} from "packages/java/util/$ListIterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Sequence, $Sequence$Type} from "packages/kotlin/sequences/$Sequence"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$TrackedList$Change, $TrackedList$Change$Type} from "packages/gg/essential/gui/elementa/state/v2/collections/$TrackedList$Change"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $TrackedList<E> extends $List<(E)>, $KMappedMarker {

 "getChangesSince"(arg0: $TrackedList$Type<(any)>): $Sequence<($TrackedList$Change<(E)>)>
 "add"(arg0: integer, arg1: E): void
 "add"(arg0: E): boolean
 "remove"(arg0: any): boolean
 "remove"(arg0: integer): E
 "get"(arg0: integer): E
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "indexOf"(arg0: any): integer
 "clear"(): void
 "lastIndexOf"(arg0: any): integer
 "isEmpty"(): boolean
 "replaceAll"(arg0: $UnaryOperator$Type<(E)>): void
 "size"(): integer
 "subList"(arg0: integer, arg1: integer): $List<(E)>
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
 "iterator"(): $Iterator<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: integer, arg1: $Collection$Type<(any)>): boolean
 "addAll"(arg0: $Collection$Type<(any)>): boolean
 "set"(arg0: integer, arg1: E): E
 "sort"(arg0: $Comparator$Type<(any)>): void
 "removeAll"(arg0: $Collection$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$Type<(any)>): boolean
 "listIterator"(arg0: integer): $ListIterator<(E)>
 "listIterator"(): $ListIterator<(E)>
 "containsAll"(arg0: $Collection$Type<(any)>): boolean
 "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $TrackedList {
function copyOf<E>(arg0: $Collection$Type<(any)>): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
function of<E>(arg0: E, arg1: E): $List<(E)>
function of<E>(arg0: E): $List<(E)>
function of<E>(): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
function of<E>(...arg0: (E)[]): $List<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedList$Type<E> = ($TrackedList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedList_<E> = $TrackedList$Type<(E)>;
}}
declare module "packages/gg/essential/model/file/$MolangColorOrGradient$Companion" {
import {$MolangColorOrGradient, $MolangColorOrGradient$Type} from "packages/gg/essential/model/file/$MolangColorOrGradient"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"

export class $MolangColorOrGradient$Companion {


public "serializer"(): $KSerializer<($MolangColorOrGradient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolangColorOrGradient$Companion$Type = ($MolangColorOrGradient$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolangColorOrGradient$Companion_ = $MolangColorOrGradient$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionCollision$Event$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticleEffectComponents$ParticleMotionCollision$Event, $ParticleEffectComponents$ParticleMotionCollision$Event$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionCollision$Event"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$ParticleMotionCollision$Event$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$ParticleMotionCollision$Event)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleMotionCollision$Event$Companion$Type = ($ParticleEffectComponents$ParticleMotionCollision$Event$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleMotionCollision$Event$Companion_ = $ParticleEffectComponents$ParticleMotionCollision$Event$Companion$Type;
}}
declare module "packages/gg/essential/mixins/transformers/client/$ClientWorldAccessor" {
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"

export interface $ClientWorldAccessor {

 "getConnection"(): $ClientPacketListener

(): $ClientPacketListener
}

export namespace $ClientWorldAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientWorldAccessor$Type = ($ClientWorldAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientWorldAccessor_ = $ClientWorldAccessor$Type;
}}
declare module "packages/gg/essential/mixins/ext/client/multiplayer/$ServerDataExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerDataExt {

 "getEssential$shareWithFriends"(): boolean
 "getEssential$recommendedVersion"(): string
 "setEssential$pingRegion"(arg0: string): void
 "getEssential$skipModCompatCheck"(): boolean
 "setEssential$isTrusted"(arg0: boolean): void
 "setEssential$showDownloadIcon"(arg0: boolean): void
 "setEssential$skipModCompatCheck"(arg0: boolean): void
 "setEssential$recommendedVersion"(arg0: string): void
 "getEssential$pingOverride"(): long
 "getEssential$pingRegion"(): string
 "setEssential$shareWithFriends"(arg0: boolean): void
 "getEssential$showDownloadIcon"(): boolean
 "getEssential$isTrusted"(): boolean
 "setEssential$pingOverride"(arg0: long): void
}

export namespace $ServerDataExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerDataExt$Type = ($ServerDataExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerDataExt_ = $ServerDataExt$Type;
}}
declare module "packages/gg/essential/model/$ModelAnimationState$ParticleEvent" {
import {$MolangQueryEntity, $MolangQueryEntity$Type} from "packages/gg/essential/model/molang/$MolangQueryEntity"
import {$ParticleEffectWithReferencedEffects, $ParticleEffectWithReferencedEffects$Type} from "packages/gg/essential/model/$ParticleEffectWithReferencedEffects"
import {$ParticleSystem$Locator, $ParticleSystem$Locator$Type} from "packages/gg/essential/model/$ParticleSystem$Locator"
import {$RenderBackend$Texture, $RenderBackend$Texture$Type} from "packages/gg/essential/model/backend/$RenderBackend$Texture"
import {$MolangQueryTime, $MolangQueryTime$Type} from "packages/gg/essential/model/molang/$MolangQueryTime"
import {$Function0, $Function0$Type} from "packages/kotlin/jvm/functions/$Function0"
import {$ModelAnimationState$Event, $ModelAnimationState$Event$Type} from "packages/gg/essential/model/$ModelAnimationState$Event"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"

export class $ModelAnimationState$ParticleEvent implements $ModelAnimationState$Event {

constructor(arg0: $MolangQueryTime$Type, arg1: float, arg2: $MolangQueryEntity$Type, arg3: $ParticleEffectWithReferencedEffects$Type, arg4: $ParticleSystem$Locator$Type, arg5: $Molang$Type, arg6: $Function0$Type<(any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $MolangQueryTime$Type, arg1: float, arg2: $MolangQueryEntity$Type, arg3: $ParticleEffectWithReferencedEffects$Type, arg4: $ParticleSystem$Locator$Type, arg5: $Molang$Type, arg6: $Function0$Type<(any)>): $ModelAnimationState$ParticleEvent
public "getTime"(): float
public "component4"(): $ParticleEffectWithReferencedEffects
public "component3"(): $MolangQueryEntity
public "component5"(): $ParticleSystem$Locator
public "getPreEffectScript"(): $Molang
public "component1"(): $MolangQueryTime
public "component2"(): float
public "getLocator"(): $ParticleSystem$Locator
public "component7"(): $Function0<($RenderBackend$Texture)>
public "component6"(): $Molang
public "getTimeSource"(): $MolangQueryTime
public "getSourceEntity"(): $MolangQueryEntity
public "getTextureSource"(): $Function0<($RenderBackend$Texture)>
public "getEffect"(): $ParticleEffectWithReferencedEffects
get "time"(): float
get "preEffectScript"(): $Molang
get "locator"(): $ParticleSystem$Locator
get "timeSource"(): $MolangQueryTime
get "sourceEntity"(): $MolangQueryEntity
get "textureSource"(): $Function0<($RenderBackend$Texture)>
get "effect"(): $ParticleEffectWithReferencedEffects
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelAnimationState$ParticleEvent$Type = ($ModelAnimationState$ParticleEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelAnimationState$ParticleEvent_ = $ModelAnimationState$ParticleEvent$Type;
}}
declare module "packages/gg/essential/model/$Face" {
import {$UVertexConsumer, $UVertexConsumer$Type} from "packages/gg/essential/model/util/$UVertexConsumer"
import {$UMatrixStack, $UMatrixStack$Type} from "packages/gg/essential/model/util/$UMatrixStack"
import {$PositionTexVertex, $PositionTexVertex$Type} from "packages/gg/essential/model/$PositionTexVertex"

export class $Face {
 "vertexPositions": ($PositionTexVertex)[]

constructor(arg0: ($PositionTexVertex$Type)[])
constructor(arg0: ($PositionTexVertex$Type)[], arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float)

public "flipFace"(): void
public "draw-Vzb6JUo"(arg0: $UMatrixStack$Type, arg1: $UVertexConsumer$Type, arg2: integer, arg3: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Face$Type = ($Face);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Face_ = $Face$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterInitialization" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"
import {$ParticleEffectComponents$EmitterInitialization$Companion, $ParticleEffectComponents$EmitterInitialization$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterInitialization$Companion"

export class $ParticleEffectComponents$EmitterInitialization {
static readonly "Companion": $ParticleEffectComponents$EmitterInitialization$Companion

constructor(arg0: integer, arg1: $Molang$Type, arg2: $Molang$Type, arg3: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $Molang$Type, arg1: $Molang$Type, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: $Molang$Type, arg1: $Molang$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Molang$Type, arg1: $Molang$Type): $ParticleEffectComponents$EmitterInitialization
public "component1"(): $Molang
public "component2"(): $Molang
public "getPerUpdateExpression"(): $Molang
public "getCreationExpression"(): $Molang
get "perUpdateExpression"(): $Molang
get "creationExpression"(): $Molang
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterInitialization$Type = ($ParticleEffectComponents$EmitterInitialization);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterInitialization_ = $ParticleEffectComponents$EmitterInitialization$Type;
}}
declare module "packages/gg/essential/model/file/$AnimationFile$Loop$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$AnimationFile$Loop, $AnimationFile$Loop$Type} from "packages/gg/essential/model/file/$AnimationFile$Loop"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $AnimationFile$Loop$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($AnimationFile$Loop)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationFile$Loop$Companion$Type = ($AnimationFile$Loop$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationFile$Loop$Companion_ = $AnimationFile$Loop$Companion$Type;
}}
declare module "packages/gg/essential/mixins/transformers/server/integrated/$ServerWorldAccessor" {
import {$ServerLevelData, $ServerLevelData$Type} from "packages/net/minecraft/world/level/storage/$ServerLevelData"

export interface $ServerWorldAccessor {

 "getServerWorldInfo"(): $ServerLevelData

(): $ServerLevelData
}

export namespace $ServerWorldAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldAccessor$Type = ($ServerWorldAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerWorldAccessor_ = $ServerWorldAccessor$Type;
}}
declare module "packages/gg/essential/sps/$McIntegratedServerManager$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $McIntegratedServerManager$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $McIntegratedServerManager$Companion$Type = ($McIntegratedServerManager$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $McIntegratedServerManager$Companion_ = $McIntegratedServerManager$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$AnimationFile$Animation$ParticleEffect$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$AnimationFile$Animation$ParticleEffect, $AnimationFile$Animation$ParticleEffect$Type} from "packages/gg/essential/model/file/$AnimationFile$Animation$ParticleEffect"

export class $AnimationFile$Animation$ParticleEffect$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($AnimationFile$Animation$ParticleEffect)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationFile$Animation$ParticleEffect$Companion$Type = ($AnimationFile$Animation$ParticleEffect$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationFile$Animation$ParticleEffect$Companion_ = $AnimationFile$Animation$ParticleEffect$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleLifetimeEvents$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticleEffectComponents$ParticleLifetimeEvents, $ParticleEffectComponents$ParticleLifetimeEvents$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleLifetimeEvents"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$ParticleLifetimeEvents$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$ParticleLifetimeEvents)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleLifetimeEvents$Companion$Type = ($ParticleEffectComponents$ParticleLifetimeEvents$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleLifetimeEvents$Companion_ = $ParticleEffectComponents$ParticleLifetimeEvents$Companion$Type;
}}
declare module "packages/gg/essential/mixins/impl/client/network/$NetworkPlayerInfoExt" {
import {$EquippedOutfitsManager, $EquippedOutfitsManager$Type} from "packages/gg/essential/network/connectionmanager/cosmetics/$EquippedOutfitsManager"

export interface $NetworkPlayerInfoExt {

 "getEssential$equippedOutfitsManager"(): $EquippedOutfitsManager
 "setEssential$equippedOutfitsManager"(arg0: $EquippedOutfitsManager$Type): void
}

export namespace $NetworkPlayerInfoExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkPlayerInfoExt$Type = ($NetworkPlayerInfoExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkPlayerInfoExt_ = $NetworkPlayerInfoExt$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterRateInstant" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"
import {$ParticleEffectComponents$EmitterRateInstant$Companion, $ParticleEffectComponents$EmitterRateInstant$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterRateInstant$Companion"

export class $ParticleEffectComponents$EmitterRateInstant {
static readonly "Companion": $ParticleEffectComponents$EmitterRateInstant$Companion

constructor(arg0: integer, arg1: $Molang$Type, arg2: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $Molang$Type, arg1: integer, arg2: $DefaultConstructorMarker$Type)
constructor(arg0: $Molang$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Molang$Type): $ParticleEffectComponents$EmitterRateInstant
public "component1"(): $Molang
public "getNumParticles"(): $Molang
get "numParticles"(): $Molang
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterRateInstant$Type = ($ParticleEffectComponents$EmitterRateInstant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterRateInstant_ = $ParticleEffectComponents$EmitterRateInstant$Type;
}}
declare module "packages/gg/essential/model/file/$SoundDefinitionsFile$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$SoundDefinitionsFile, $SoundDefinitionsFile$Type} from "packages/gg/essential/model/file/$SoundDefinitionsFile"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $SoundDefinitionsFile$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($SoundDefinitionsFile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundDefinitionsFile$Companion$Type = ($SoundDefinitionsFile$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundDefinitionsFile$Companion_ = $SoundDefinitionsFile$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleLifetimeExpression" {
import {$ParticleEffectComponents$ParticleLifetimeExpression$Companion, $ParticleEffectComponents$ParticleLifetimeExpression$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleLifetimeExpression$Companion"
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"

export class $ParticleEffectComponents$ParticleLifetimeExpression {
static readonly "Companion": $ParticleEffectComponents$ParticleLifetimeExpression$Companion

constructor(arg0: integer, arg1: $Molang$Type, arg2: $Molang$Type, arg3: $SerializationConstructorMarker$Type)
constructor(arg0: $Molang$Type, arg1: $Molang$Type, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: $Molang$Type, arg1: $Molang$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Molang$Type, arg1: $Molang$Type): $ParticleEffectComponents$ParticleLifetimeExpression
public "component1"(): $Molang
public "component2"(): $Molang
public "getMaxLifetime"(): $Molang
public "getExpirationExpression"(): $Molang
get "maxLifetime"(): $Molang
get "expirationExpression"(): $Molang
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleLifetimeExpression$Type = ($ParticleEffectComponents$ParticleLifetimeExpression);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleLifetimeExpression_ = $ParticleEffectComponents$ParticleLifetimeExpression$Type;
}}
declare module "packages/gg/essential/model/light/$LightProvider" {
import {$Vec3, $Vec3$Type} from "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec3"

export interface $LightProvider {

 "query-PvXcHUY"(arg0: $Vec3$Type): integer

(arg0: $Vec3$Type): integer
}

export namespace $LightProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightProvider$Type = ($LightProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightProvider_ = $LightProvider$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleVisibility$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticleEffectComponents$ParticleVisibility, $ParticleEffectComponents$ParticleVisibility$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleVisibility"

export class $ParticleEffectComponents$ParticleVisibility$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$ParticleVisibility)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleVisibility$Companion$Type = ($ParticleEffectComponents$ParticleVisibility$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleVisibility$Companion_ = $ParticleEffectComponents$ParticleVisibility$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionCollision$Companion" {
import {$ParticleEffectComponents$ParticleMotionCollision, $ParticleEffectComponents$ParticleMotionCollision$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionCollision"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$ParticleMotionCollision$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$ParticleMotionCollision)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleMotionCollision$Companion$Type = ($ParticleEffectComponents$ParticleMotionCollision$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleMotionCollision$Companion_ = $ParticleEffectComponents$ParticleMotionCollision$Companion$Type;
}}
declare module "packages/gg/essential/model/bones/$BakedAnimations$Companion" {
import {$BakedAnimations, $BakedAnimations$Type} from "packages/gg/essential/model/bones/$BakedAnimations"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $BakedAnimations$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "getEMPTY"(): $BakedAnimations
get "eMPTY"(): $BakedAnimations
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedAnimations$Companion$Type = ($BakedAnimations$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedAnimations$Companion_ = $BakedAnimations$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeLooping$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticleEffectComponents$EmitterLifetimeLooping, $ParticleEffectComponents$EmitterLifetimeLooping$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeLooping"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$EmitterLifetimeLooping$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$EmitterLifetimeLooping)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterLifetimeLooping$Companion$Type = ($ParticleEffectComponents$EmitterLifetimeLooping$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterLifetimeLooping$Companion_ = $ParticleEffectComponents$EmitterLifetimeLooping$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$UV$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticleEffectComponents$ParticleAppearanceBillboard$UV, $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$UV"

export class $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$ParticleAppearanceBillboard$UV)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Companion$Type = ($ParticleEffectComponents$ParticleAppearanceBillboard$UV$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Companion_ = $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ModelFile$Uvs" {
import {$ModelFile$Uvs$Companion, $ModelFile$Uvs$Companion$Type} from "packages/gg/essential/model/file/$ModelFile$Uvs$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ModelFile$Uvs {
static readonly "Companion": $ModelFile$Uvs$Companion

constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$Uvs$Type = ($ModelFile$Uvs);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile$Uvs_ = $ModelFile$Uvs$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Companion, $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Companion"
import {$Pair, $Pair$Type} from "packages/kotlin/$Pair"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"

export class $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook {
static readonly "Companion": $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Companion

constructor(arg0: integer, arg1: $Pair$Type<(any), (any)>, arg2: $Pair$Type<(any), (any)>, arg3: $Pair$Type<(any), (any)>, arg4: float, arg5: $Molang$Type, arg6: boolean, arg7: boolean, arg8: $SerializationConstructorMarker$Type)
constructor(arg0: $Pair$Type<(any), (any)>, arg1: $Pair$Type<(any), (any)>, arg2: $Pair$Type<(any), (any)>, arg3: float, arg4: $Molang$Type, arg5: boolean, arg6: boolean, arg7: integer, arg8: $DefaultConstructorMarker$Type)
constructor(arg0: $Pair$Type<($Molang$Type), ($Molang$Type)>, arg1: $Pair$Type<(float), (float)>, arg2: $Pair$Type<(float), (float)>, arg3: float, arg4: $Molang$Type, arg5: boolean, arg6: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Pair$Type<($Molang$Type), ($Molang$Type)>, arg1: $Pair$Type<(float), (float)>, arg2: $Pair$Type<(float), (float)>, arg3: float, arg4: $Molang$Type, arg5: boolean, arg6: boolean): $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook
public "getSize"(): $Pair<(float), (float)>
public "getBase"(): $Pair<($Molang), ($Molang)>
public "component4"(): float
public "component3"(): $Pair<(float), (float)>
public "component5"(): $Molang
public "getStep"(): $Pair<(float), (float)>
public "component1"(): $Pair<($Molang), ($Molang)>
public "component2"(): $Pair<(float), (float)>
public "component7"(): boolean
public "component6"(): boolean
public "getLoop"(): boolean
public "getMaxFrame"(): $Molang
public "getFramePerSecond"(): float
public "getStretchToLifetime"(): boolean
get "size"(): $Pair<(float), (float)>
get "base"(): $Pair<($Molang), ($Molang)>
get "step"(): $Pair<(float), (float)>
get "loop"(): boolean
get "maxFrame"(): $Molang
get "framePerSecond"(): float
get "stretchToLifetime"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Type = ($ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook_ = $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Type;
}}
declare module "packages/gg/essential/model/backend/$RenderBackend$CommandQueue" {
import {$Unit, $Unit$Type} from "packages/kotlin/$Unit"
import {$RenderBackend$Texture, $RenderBackend$Texture$Type} from "packages/gg/essential/model/backend/$RenderBackend$Texture"
import {$Function1, $Function1$Type} from "packages/kotlin/jvm/functions/$Function1"
import {$ParticleEffect$RenderPass, $ParticleEffect$RenderPass$Type} from "packages/gg/essential/model/$ParticleEffect$RenderPass"

export interface $RenderBackend$CommandQueue {

 "submit"(arg0: $RenderBackend$Texture$Type, arg1: boolean, arg2: boolean, arg3: $Function1$Type<(any), ($Unit$Type)>): void
 "submit"(arg0: $ParticleEffect$RenderPass$Type, arg1: $Function1$Type<(any), ($Unit$Type)>): void
}

export namespace $RenderBackend$CommandQueue {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBackend$CommandQueue$Type = ($RenderBackend$CommandQueue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderBackend$CommandQueue_ = $RenderBackend$CommandQueue$Type;
}}
declare module "packages/gg/essential/sps/$McIntegratedServerManager" {
import {$MutableTrackedList, $MutableTrackedList$Type} from "packages/gg/essential/gui/elementa/state/v2/collections/$MutableTrackedList"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$TrackedList, $TrackedList$Type} from "packages/gg/essential/gui/elementa/state/v2/collections/$TrackedList"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$MutableState, $MutableState$Type} from "packages/gg/essential/gui/elementa/state/v2/$MutableState"
import {$IntegratedServerManager$Difficulty, $IntegratedServerManager$Difficulty$Type} from "packages/gg/essential/sps/$IntegratedServerManager$Difficulty"
import {$CoroutineScope, $CoroutineScope$Type} from "packages/kotlinx/coroutines/$CoroutineScope"
import {$IntegratedServerManager$ServerResourcePack, $IntegratedServerManager$ServerResourcePack$Type} from "packages/gg/essential/sps/$IntegratedServerManager$ServerResourcePack"
import {$IntegratedServerManager$GameMode, $IntegratedServerManager$GameMode$Type} from "packages/gg/essential/sps/$IntegratedServerManager$GameMode"
import {$McIntegratedServerManager$Companion, $McIntegratedServerManager$Companion$Type} from "packages/gg/essential/sps/$McIntegratedServerManager$Companion"
import {$IntegratedServer, $IntegratedServer$Type} from "packages/net/minecraft/client/server/$IntegratedServer"
import {$State, $State$Type} from "packages/gg/essential/gui/elementa/state/v2/$State"
import {$UIdentifier, $UIdentifier$Type} from "packages/gg/essential/util/$UIdentifier"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$CoroutineDispatcher, $CoroutineDispatcher$Type} from "packages/kotlinx/coroutines/$CoroutineDispatcher"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IntegratedServerManager$SuspendingMutableState, $IntegratedServerManager$SuspendingMutableState$Type} from "packages/gg/essential/sps/$IntegratedServerManager$SuspendingMutableState"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$IntegratedServerManager, $IntegratedServerManager$Type} from "packages/gg/essential/sps/$IntegratedServerManager"

export class $McIntegratedServerManager implements $IntegratedServerManager {
static readonly "Companion": $McIntegratedServerManager$Companion

constructor(server: $IntegratedServer$Type)

public "setWhitelistSource"(source: $State$Type<(any)>): void
public "getWorldFolder"(): $Path
public "setOpenToLanSource"(source: $State$Type<(boolean)>): void
public "getConnectedGuests"(): $State<($TrackedList<($UUID)>)>
public "getServerPort"(): $MutableState<(integer)>
public "getLastPlayed"(): $Instant
public "setOpsSource"(source: $State$Type<(any)>): void
public "setGameRulesSource"(source: $IntegratedServerManager$SuspendingMutableState$Type<($Map$Type<($UIdentifier$Type), (string)>)>): void
public "setDifficultyLockedControlledByState"(arg0: boolean): void
public "setDefaultGameModeControlledByState"(arg0: boolean): void
public "isDifficultyLockedControlledByState"(): boolean
public "getServer"(): $IntegratedServer
public "getCoroutineScope"(): $CoroutineScope
public "getAppliedServerResourcePack"(): $Optional<($IntegratedServerManager$ServerResourcePack)>
public "getThirdPartyVoicePort"(): $MutableState<(integer)>
public "setAppliedOpenToLan"(arg0: boolean): void
public "setAppliedServerResourcePack"(arg0: $Optional$Type<($IntegratedServerManager$ServerResourcePack$Type)>): void
public "setCheatsEnabledSource"(source: $State$Type<(boolean)>): void
public "setGameRulesControlledByState"(arg0: boolean): void
public "getServerDispatcher"(): $CoroutineDispatcher
public "setResourcePackSource"(source: $State$Type<($IntegratedServerManager$ServerResourcePack$Type)>): void
public "setDifficultyControlledByState"(arg0: boolean): void
public "isDefaultGameModeControlledByState"(): boolean
public "isDifficultyControlledByState"(): boolean
public "setDifficultyLockedSource"(source: $MutableState$Type<(boolean)>): void
public "getAppliedOpenToLan"(): boolean
public "setDefaultGameModeSource"(source: $MutableState$Type<($IntegratedServerManager$GameMode$Type)>): void
public "setDifficultySource"(source: $MutableState$Type<($IntegratedServerManager$Difficulty$Type)>): void
public "getStatusResponseJson"(): $State<(string)>
public "setAppliedCheatsEnabled"(arg0: boolean): void
public "getOpenToLan"(): $State<(boolean)>
public "getConnectedPlayers"(): $MutableState<($MutableTrackedList<($UUID)>)>
public "updateServerGameRules"(changes: $Map$Type<($UIdentifier$Type), (string)>): void
public "updateServerGameRules"(): void
public "isGameRulesControlledByState"(): boolean
public "updateServerStatusResponse"(statusJson: string): void
public "getWhitelist"(): $State<($Set<($UUID)>)>
public "getAppliedCheatsEnabled"(): boolean
set "whitelistSource"(value: $State$Type<(any)>)
get "worldFolder"(): $Path
set "openToLanSource"(value: $State$Type<(boolean)>)
get "connectedGuests"(): $State<($TrackedList<($UUID)>)>
get "serverPort"(): $MutableState<(integer)>
get "lastPlayed"(): $Instant
set "opsSource"(value: $State$Type<(any)>)
set "gameRulesSource"(value: $IntegratedServerManager$SuspendingMutableState$Type<($Map$Type<($UIdentifier$Type), (string)>)>)
set "difficultyLockedControlledByState"(value: boolean)
set "defaultGameModeControlledByState"(value: boolean)
get "difficultyLockedControlledByState"(): boolean
get "server"(): $IntegratedServer
get "coroutineScope"(): $CoroutineScope
get "appliedServerResourcePack"(): $Optional<($IntegratedServerManager$ServerResourcePack)>
get "thirdPartyVoicePort"(): $MutableState<(integer)>
set "appliedOpenToLan"(value: boolean)
set "appliedServerResourcePack"(value: $Optional$Type<($IntegratedServerManager$ServerResourcePack$Type)>)
set "cheatsEnabledSource"(value: $State$Type<(boolean)>)
set "gameRulesControlledByState"(value: boolean)
get "serverDispatcher"(): $CoroutineDispatcher
set "resourcePackSource"(value: $State$Type<($IntegratedServerManager$ServerResourcePack$Type)>)
set "difficultyControlledByState"(value: boolean)
get "defaultGameModeControlledByState"(): boolean
get "difficultyControlledByState"(): boolean
set "difficultyLockedSource"(value: $MutableState$Type<(boolean)>)
get "appliedOpenToLan"(): boolean
set "defaultGameModeSource"(value: $MutableState$Type<($IntegratedServerManager$GameMode$Type)>)
set "difficultySource"(value: $MutableState$Type<($IntegratedServerManager$Difficulty$Type)>)
get "statusResponseJson"(): $State<(string)>
set "appliedCheatsEnabled"(value: boolean)
get "openToLan"(): $State<(boolean)>
get "connectedPlayers"(): $MutableState<($MutableTrackedList<($UUID)>)>
get "gameRulesControlledByState"(): boolean
get "whitelist"(): $State<($Set<($UUID)>)>
get "appliedCheatsEnabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $McIntegratedServerManager$Type = ($McIntegratedServerManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $McIntegratedServerManager_ = $McIntegratedServerManager$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapeBox" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$MolangVec3, $MolangVec3$Type} from "packages/gg/essential/model/molang/$MolangVec3"
import {$ParticleEffectComponents$EmitterShapeBox$Companion, $ParticleEffectComponents$EmitterShapeBox$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapeBox$Companion"
import {$ParticleEffectComponents$Direction, $ParticleEffectComponents$Direction$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$Direction"

export class $ParticleEffectComponents$EmitterShapeBox {
static readonly "Companion": $ParticleEffectComponents$EmitterShapeBox$Companion

constructor(arg0: integer, arg1: $MolangVec3$Type, arg2: $MolangVec3$Type, arg3: boolean, arg4: $ParticleEffectComponents$Direction$Type, arg5: $SerializationConstructorMarker$Type)
constructor(arg0: $MolangVec3$Type, arg1: $MolangVec3$Type, arg2: boolean, arg3: $ParticleEffectComponents$Direction$Type, arg4: integer, arg5: $DefaultConstructorMarker$Type)
constructor(arg0: $MolangVec3$Type, arg1: $MolangVec3$Type, arg2: boolean, arg3: $ParticleEffectComponents$Direction$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $MolangVec3$Type, arg1: $MolangVec3$Type, arg2: boolean, arg3: $ParticleEffectComponents$Direction$Type): $ParticleEffectComponents$EmitterShapeBox
public "getOffset"(): $MolangVec3
public "component4"(): $ParticleEffectComponents$Direction
public "component3"(): boolean
public "getDirection"(): $ParticleEffectComponents$Direction
public "component1"(): $MolangVec3
public "component2"(): $MolangVec3
public "getSurfaceOnly"(): boolean
public "getHalfDimensions"(): $MolangVec3
get "offset"(): $MolangVec3
get "direction"(): $ParticleEffectComponents$Direction
get "surfaceOnly"(): boolean
get "halfDimensions"(): $MolangVec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterShapeBox$Type = ($ParticleEffectComponents$EmitterShapeBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterShapeBox_ = $ParticleEffectComponents$EmitterShapeBox$Type;
}}
declare module "packages/gg/essential/util/image/mask/$MutableMask" {
import {$Mask, $Mask$Type} from "packages/gg/essential/util/image/mask/$Mask"

export interface $MutableMask extends $Mask {

 "clear"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
 "clear"(arg0: integer, arg1: integer): void
 "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
 "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
 "set"(arg0: integer, arg1: integer, arg2: boolean): void
 "set"(arg0: integer, arg1: integer): void
 "inv"(): void
 "setAnd"(arg0: $Mask$Type): void
 "setOr"(arg0: $Mask$Type): void
 "get"(arg0: integer, arg1: integer): boolean
 "count"(): integer
 "getWidth"(): integer
 "getHeight"(): integer
 "mutableCopy"(): $MutableMask
}

export namespace $MutableMask {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableMask$Type = ($MutableMask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableMask_ = $MutableMask$Type;
}}
declare module "packages/gg/essential/cosmetics/events/$AnimationEventType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $AnimationEventType extends $Enum<($AnimationEventType)> {
static readonly "EQUIP": $AnimationEventType
static readonly "JOIN_WORLD": $AnimationEventType
static readonly "LEAVE_WORLD": $AnimationEventType
static readonly "JUMP_START": $AnimationEventType
static readonly "JUMP_END": $AnimationEventType
static readonly "WALK_START": $AnimationEventType
static readonly "WALK_END": $AnimationEventType
static readonly "SWING": $AnimationEventType
static readonly "SNEAK_START": $AnimationEventType
static readonly "SNEAK_END": $AnimationEventType
static readonly "FLY_ON": $AnimationEventType
static readonly "FLY_OFF": $AnimationEventType
static readonly "FLY_MOVE_START": $AnimationEventType
static readonly "FLY_MOVE_END": $AnimationEventType
static readonly "ON_DAMAGE": $AnimationEventType
static readonly "TICK": $AnimationEventType
static readonly "IDLE": $AnimationEventType
static readonly "TEXTURE_ANIMATION_START": $AnimationEventType
static readonly "EMOTE": $AnimationEventType
static readonly "BY_OTHER": $AnimationEventType


public static "values"(): ($AnimationEventType)[]
public static "valueOf"(arg0: string): $AnimationEventType
public static "getEntries"(): $EnumEntries<($AnimationEventType)>
get "entries"(): $EnumEntries<($AnimationEventType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationEventType$Type = (("jump_start") | ("walk_end") | ("on_damage") | ("idle") | ("join_world") | ("jump_end") | ("sneak_start") | ("leave_world") | ("tick") | ("texture_animation_start") | ("swing") | ("fly_on") | ("fly_move_start") | ("fly_move_end") | ("equip") | ("emote") | ("sneak_end") | ("by_other") | ("walk_start") | ("fly_off")) | ($AnimationEventType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationEventType_ = $AnimationEventType$Type;
}}
declare module "packages/gg/essential/mixins/ext/server/integrated/$IntegratedServerExt" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$McIntegratedServerManager, $McIntegratedServerManager$Type} from "packages/gg/essential/sps/$McIntegratedServerManager"

export interface $IntegratedServerExt {

 "essential$undoLan"(arg0: $UUID$Type): void
 "getEssential$manager"(): $McIntegratedServerManager
}

export namespace $IntegratedServerExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegratedServerExt$Type = ($IntegratedServerExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegratedServerExt_ = $IntegratedServerExt$Type;
}}
declare module "packages/gg/essential/mixins/impl/client/$MinecraftExt" {
import {$User, $User$Type} from "packages/net/minecraft/client/$User"

export interface $MinecraftExt {

 "setSession"(arg0: $User$Type): void

(arg0: $User$Type): void
}

export namespace $MinecraftExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftExt$Type = ($MinecraftExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftExt_ = $MinecraftExt$Type;
}}
declare module "packages/gg/essential/model/util/$UMatrixStack$Entry" {
import {$MutableMat4, $MutableMat4$Type} from "packages/gg/essential/lib/kotgl/matrix/matrices/mutables/$MutableMat4"
import {$MutableMat3, $MutableMat3$Type} from "packages/gg/essential/lib/kotgl/matrix/matrices/mutables/$MutableMat3"

export class $UMatrixStack$Entry {

constructor(arg0: $MutableMat4$Type, arg1: $MutableMat3$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $MutableMat4$Type, arg1: $MutableMat3$Type): $UMatrixStack$Entry
public "deepCopy"(): $UMatrixStack$Entry
public "getNormal"(): $MutableMat3
public "component1"(): $MutableMat4
public "component2"(): $MutableMat3
public "getModel"(): $MutableMat4
get "normal"(): $MutableMat3
get "model"(): $MutableMat4
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UMatrixStack$Entry$Type = ($UMatrixStack$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UMatrixStack$Entry_ = $UMatrixStack$Entry$Type;
}}
declare module "packages/gg/essential/network/connectionmanager/cosmetics/$EquippedOutfitsManager$Outfit$Companion" {
import {$EquippedOutfitsManager$Outfit, $EquippedOutfitsManager$Outfit$Type} from "packages/gg/essential/network/connectionmanager/cosmetics/$EquippedOutfitsManager$Outfit"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $EquippedOutfitsManager$Outfit$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "getEMPTY"(): $EquippedOutfitsManager$Outfit
get "eMPTY"(): $EquippedOutfitsManager$Outfit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquippedOutfitsManager$Outfit$Companion$Type = ($EquippedOutfitsManager$Outfit$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquippedOutfitsManager$Outfit$Companion_ = $EquippedOutfitsManager$Outfit$Companion$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticProperty$InterruptsEmote$Data" {
import {$CosmeticProperty$InterruptsEmote$Data$Companion, $CosmeticProperty$InterruptsEmote$Data$Companion$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticProperty$InterruptsEmote$Data$Companion"
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $CosmeticProperty$InterruptsEmote$Data {
static readonly "Companion": $CosmeticProperty$InterruptsEmote$Data$Companion

constructor(arg0: integer, arg1: boolean, arg2: double, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: boolean, arg1: double, arg2: boolean, arg3: boolean, arg4: boolean, arg5: integer, arg6: $DefaultConstructorMarker$Type)
constructor(arg0: boolean, arg1: double, arg2: boolean, arg3: boolean, arg4: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: boolean, arg1: double, arg2: boolean, arg3: boolean, arg4: boolean): $CosmeticProperty$InterruptsEmote$Data
public "component4"(): boolean
public "component3"(): boolean
public "component5"(): boolean
public "component1"(): boolean
public "component2"(): double
public "getArmSwing"(): boolean
public "getMovement"(): boolean
public "getAttack"(): boolean
public "getDamaged"(): boolean
public "getMovementGraceTime"(): double
get "armSwing"(): boolean
get "movement"(): boolean
get "attack"(): boolean
get "damaged"(): boolean
get "movementGraceTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticProperty$InterruptsEmote$Data$Type = ($CosmeticProperty$InterruptsEmote$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticProperty$InterruptsEmote$Data_ = $CosmeticProperty$InterruptsEmote$Data$Type;
}}
declare module "packages/gg/essential/model/$SoundEffect$Entry" {
import {$EssentialAsset, $EssentialAsset$Type} from "packages/gg/essential/mod/$EssentialAsset"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $SoundEffect$Entry {

constructor(arg0: $EssentialAsset$Type, arg1: boolean, arg2: boolean, arg3: float, arg4: float, arg5: boolean, arg6: boolean, arg7: integer)
constructor(arg0: $EssentialAsset$Type, arg1: boolean, arg2: boolean, arg3: float, arg4: float, arg5: boolean, arg6: boolean, arg7: integer, arg8: integer, arg9: $DefaultConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $EssentialAsset$Type, arg1: boolean, arg2: boolean, arg3: float, arg4: float, arg5: boolean, arg6: boolean, arg7: integer): $SoundEffect$Entry
public "getStream"(): boolean
public "component4"(): float
public "component3"(): boolean
public "component5"(): float
public "getVolume"(): float
public "getAsset"(): $EssentialAsset
public "getWeight"(): integer
public "component1"(): $EssentialAsset
public "component2"(): boolean
public "component8"(): integer
public "getPitch"(): float
public "component7"(): boolean
public "component6"(): boolean
public "getInterruptible"(): boolean
public "getDirectional"(): boolean
public "getLooping"(): boolean
get "stream"(): boolean
get "volume"(): float
get "asset"(): $EssentialAsset
get "weight"(): integer
get "pitch"(): float
get "interruptible"(): boolean
get "directional"(): boolean
get "looping"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEffect$Entry$Type = ($SoundEffect$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundEffect$Entry_ = $SoundEffect$Entry$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$AnimationVariant$Data$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$CosmeticSetting$AnimationVariant$Data, $CosmeticSetting$AnimationVariant$Data$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$AnimationVariant$Data"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $CosmeticSetting$AnimationVariant$Data$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($CosmeticSetting$AnimationVariant$Data)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticSetting$AnimationVariant$Data$Companion$Type = ($CosmeticSetting$AnimationVariant$Data$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticSetting$AnimationVariant$Data$Companion_ = $CosmeticSetting$AnimationVariant$Data$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Event$RandomizeOption$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticlesFile$Event$RandomizeOption, $ParticlesFile$Event$RandomizeOption$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event$RandomizeOption"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticlesFile$Event$RandomizeOption$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticlesFile$Event$RandomizeOption)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Event$RandomizeOption$Companion$Type = ($ParticlesFile$Event$RandomizeOption$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Event$RandomizeOption$Companion_ = $ParticlesFile$Event$RandomizeOption$Companion$Type;
}}
declare module "packages/gg/essential/sps/$IntegratedServerManager$ServerResourcePack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $IntegratedServerManager$ServerResourcePack {

constructor(arg0: string, arg1: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: string): $IntegratedServerManager$ServerResourcePack
public "getUrl"(): string
public "component1"(): string
public "component2"(): string
public "getChecksum"(): string
get "url"(): string
get "checksum"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegratedServerManager$ServerResourcePack$Type = ($IntegratedServerManager$ServerResourcePack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegratedServerManager$ServerResourcePack_ = $IntegratedServerManager$ServerResourcePack$Type;
}}
declare module "packages/gg/essential/model/$Side" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Side$Companion, $Side$Companion$Type} from "packages/gg/essential/model/$Side$Companion"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $Side extends $Enum<($Side)> {
static readonly "Companion": $Side$Companion
static readonly "FRONT": $Side
static readonly "LEFT": $Side
static readonly "RIGHT": $Side
static readonly "BACK": $Side


public static "values"(): ($Side)[]
public static "valueOf"(arg0: string): $Side
public static "getEntries"(): $EnumEntries<($Side)>
public "getDisplayName"(): string
public static "getDefaultSideOrNull"(arg0: $Set$Type<(any)>): $Side
get "entries"(): $EnumEntries<($Side)>
get "displayName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Side$Type = (("left") | ("back") | ("front") | ("right")) | ($Side);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Side_ = $Side$Type;
}}
declare module "packages/gg/essential/model/$ModelAnimationState$AnimationState" {
import {$Animation, $Animation$Type} from "packages/gg/essential/model/$Animation"
import {$MolangQueryEntity, $MolangQueryEntity$Type} from "packages/gg/essential/model/molang/$MolangQueryEntity"
import {$ParticleSystem$Locator, $ParticleSystem$Locator$Type} from "packages/gg/essential/model/$ParticleSystem$Locator"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MolangQueryAnimation, $MolangQueryAnimation$Type} from "packages/gg/essential/model/molang/$MolangQueryAnimation"
import {$MolangContext, $MolangContext$Type} from "packages/gg/essential/model/molang/$MolangContext"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$VariablesMap, $VariablesMap$Type} from "packages/gg/essential/model/molang/$VariablesMap"

export class $ModelAnimationState$AnimationState implements $MolangQueryAnimation, $MolangQueryEntity {

constructor(arg0: $Animation$Type, arg1: $MolangQueryEntity$Type, arg2: float, arg3: $VariablesMap$Type, arg4: float, arg5: integer)
constructor(arg0: $Animation$Type, arg1: $MolangQueryEntity$Type, arg2: float, arg3: $VariablesMap$Type, arg4: float, arg5: integer, arg6: integer, arg7: $DefaultConstructorMarker$Type)

public "getContext"(): $MolangContext
public "copy"(arg0: $Animation$Type, arg1: $MolangQueryEntity$Type, arg2: float, arg3: $VariablesMap$Type, arg4: float, arg5: integer): $ModelAnimationState$AnimationState
public "getTime"(): float
public "getEntity"(): $MolangQueryEntity
public "getHasEnded"(): boolean
public "getAnimLoopTime"(): float
public "getAnimTime"(): float
public "getLocator"(): $ParticleSystem$Locator
public "getAnimation"(): $Animation
public "getAnimStartTime"(): float
public "getLifeTime"(): float
public "getUuid"(): $UUID
public "getLoop"(): integer
public "getModifiedDistanceMoved"(): float
public "getModifiedMoveSpeed"(): float
public "getEffectLoops$cosmetics"(): integer
public "setEffectLoops$cosmetics"(arg0: integer): void
public "setLastEffectTime$cosmetics"(arg0: float): void
public "getEffectLoopsDuration$cosmetics"(): float
public "getLastEffectTime$cosmetics"(): float
get "context"(): $MolangContext
get "time"(): float
get "entity"(): $MolangQueryEntity
get "hasEnded"(): boolean
get "animLoopTime"(): float
get "animTime"(): float
get "locator"(): $ParticleSystem$Locator
get "animation"(): $Animation
get "animStartTime"(): float
get "lifeTime"(): float
get "uuid"(): $UUID
get "loop"(): integer
get "modifiedDistanceMoved"(): float
get "modifiedMoveSpeed"(): float
get "effectLoops$cosmetics"(): integer
set "effectLoops$cosmetics"(value: integer)
set "lastEffectTime$cosmetics"(value: float)
get "effectLoopsDuration$cosmetics"(): float
get "lastEffectTime$cosmetics"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelAnimationState$AnimationState$Type = ($ModelAnimationState$AnimationState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelAnimationState$AnimationState_ = $ModelAnimationState$AnimationState$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/database/$GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion" {
import {$GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Companion, $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Companion$Type} from "packages/gg/essential/mod/cosmetics/database/$GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Companion"

export interface $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion {

 "getType"(): string

(): string
}

export namespace $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion {
const Companion: $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Companion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Type = ($GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion_ = $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Type;
}}
declare module "packages/gg/essential/mixins/ext/server/$MinecraftServerExt" {
import {$CoroutineDispatcher, $CoroutineDispatcher$Type} from "packages/kotlinx/coroutines/$CoroutineDispatcher"
import {$CoroutineScope, $CoroutineScope$Type} from "packages/kotlinx/coroutines/$CoroutineScope"

export interface $MinecraftServerExt {

 "essential$updateServerStatus"(): void
 "getEssential$dispatcher"(): $CoroutineDispatcher
 "getEssential$coroutineScope"(): $CoroutineScope
}

export namespace $MinecraftServerExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerExt$Type = ($MinecraftServerExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftServerExt_ = $MinecraftServerExt$Type;
}}
declare module "packages/gg/essential/model/$RelativeTo$Companion" {
import {$RelativeTo, $RelativeTo$Type} from "packages/gg/essential/model/$RelativeTo"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $RelativeTo$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($RelativeTo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelativeTo$Companion$Type = ($RelativeTo$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelativeTo$Companion_ = $RelativeTo$Companion$Type;
}}
declare module "packages/gg/essential/model/$ParticleEffectWithReferencedEffects" {
import {$SoundEffect, $SoundEffect$Type} from "packages/gg/essential/model/$SoundEffect"
import {$ParticleEffect, $ParticleEffect$Type} from "packages/gg/essential/model/$ParticleEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ParticleEffectWithReferencedEffects {

constructor(arg0: string, arg1: $Map$Type<(string), ($ParticleEffect$Type)>, arg2: $Map$Type<(string), ($SoundEffect$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: $Map$Type<(string), ($ParticleEffect$Type)>, arg2: $Map$Type<(string), ($SoundEffect$Type)>): $ParticleEffectWithReferencedEffects
public "component3"(): $Map<(string), ($SoundEffect)>
public "component2"(): $Map<(string), ($ParticleEffect)>
public "getParticleEffect"(): $ParticleEffect
public "getReferencedEffects"(): $Map<(string), ($ParticleEffect)>
public "getOtherParticleByReference"(arg0: string): $ParticleEffectWithReferencedEffects
public "getReferencedSounds"(): $Map<(string), ($SoundEffect)>
get "particleEffect"(): $ParticleEffect
get "referencedEffects"(): $Map<(string), ($ParticleEffect)>
get "referencedSounds"(): $Map<(string), ($SoundEffect)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectWithReferencedEffects$Type = ($ParticleEffectWithReferencedEffects);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectWithReferencedEffects_ = $ParticleEffectWithReferencedEffects$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$ParticleAppearanceBillboard$Companion, $ParticleEffectComponents$ParticleAppearanceBillboard$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$Companion"
import {$Pair, $Pair$Type} from "packages/kotlin/$Pair"
import {$ParticleEffectComponents$ParticleAppearanceBillboard$Direction, $ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$Direction"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode, $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode"
import {$ParticleEffectComponents$ParticleAppearanceBillboard$UV, $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$UV"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"

export class $ParticleEffectComponents$ParticleAppearanceBillboard {
static readonly "Companion": $ParticleEffectComponents$ParticleAppearanceBillboard$Companion

constructor(arg0: integer, arg1: $Pair$Type<(any), (any)>, arg2: $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Type, arg3: $ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Type, arg4: $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Type, arg5: $SerializationConstructorMarker$Type)
constructor(arg0: $Pair$Type<(any), (any)>, arg1: $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Type, arg2: $ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Type, arg3: $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Type, arg4: integer, arg5: $DefaultConstructorMarker$Type)
constructor(arg0: $Pair$Type<($Molang$Type), ($Molang$Type)>, arg1: $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Type, arg2: $ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Type, arg3: $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Pair$Type<($Molang$Type), ($Molang$Type)>, arg1: $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Type, arg2: $ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Type, arg3: $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Type): $ParticleEffectComponents$ParticleAppearanceBillboard
public "getSize"(): $Pair<($Molang), ($Molang)>
public "component4"(): $ParticleEffectComponents$ParticleAppearanceBillboard$UV
public "component3"(): $ParticleEffectComponents$ParticleAppearanceBillboard$Direction
public "getUv"(): $ParticleEffectComponents$ParticleAppearanceBillboard$UV
public "getDirection"(): $ParticleEffectComponents$ParticleAppearanceBillboard$Direction
public "component1"(): $Pair<($Molang), ($Molang)>
public "component2"(): $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode
public "getFacingCameraMode"(): $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode
get "size"(): $Pair<($Molang), ($Molang)>
get "uv"(): $ParticleEffectComponents$ParticleAppearanceBillboard$UV
get "direction"(): $ParticleEffectComponents$ParticleAppearanceBillboard$Direction
get "facingCameraMode"(): $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleAppearanceBillboard$Type = ($ParticleEffectComponents$ParticleAppearanceBillboard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleAppearanceBillboard_ = $ParticleEffectComponents$ParticleAppearanceBillboard$Type;
}}
declare module "packages/gg/essential/lib/kotgl/matrix/matrices/mutables/$MutableMat" {
import {$Mat, $Mat$Type} from "packages/gg/essential/lib/kotgl/matrix/matrices/$Mat"

export interface $MutableMat extends $Mat {

 "copyOf"(): $MutableMat

(): $MutableMat
}

export namespace $MutableMat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableMat$Type = ($MutableMat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableMat_ = $MutableMat$Type;
}}
declare module "packages/gg/essential/cosmetics/$EquippedCosmeticId" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$CosmeticSetting, $CosmeticSetting$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting"

export class $EquippedCosmeticId {

constructor(arg0: string, arg1: $List$Type<(any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getId"(): string
public "copy"(arg0: string, arg1: $List$Type<(any)>): $EquippedCosmeticId
public "getSettings"(): $List<($CosmeticSetting)>
public "component1"(): string
public "component2"(): $List<($CosmeticSetting)>
get "id"(): string
get "settings"(): $List<($CosmeticSetting)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquippedCosmeticId$Type = ($EquippedCosmeticId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquippedCosmeticId_ = $EquippedCosmeticId$Type;
}}
declare module "packages/gg/essential/cosmetics/events/$AnimationEvent" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$AnimationEventType, $AnimationEventType$Type} from "packages/gg/essential/cosmetics/events/$AnimationEventType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$AnimationEvent$Companion, $AnimationEvent$Companion$Type} from "packages/gg/essential/cosmetics/events/$AnimationEvent$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$BedrockModel, $BedrockModel$Type} from "packages/gg/essential/model/$BedrockModel"
import {$AnimationTarget, $AnimationTarget$Type} from "packages/gg/essential/cosmetics/events/$AnimationTarget"

export class $AnimationEvent {
static readonly "Companion": $AnimationEvent$Companion

constructor(arg0: $AnimationEventType$Type, arg1: $AnimationTarget$Type, arg2: string, arg3: $AnimationEvent$Type, arg4: $Set$Type<(string)>, arg5: float, arg6: integer, arg7: integer, arg8: integer)
constructor(arg0: integer, arg1: $AnimationEventType$Type, arg2: $AnimationTarget$Type, arg3: string, arg4: $AnimationEvent$Type, arg5: $Set$Type<(any)>, arg6: float, arg7: integer, arg8: integer, arg9: integer, arg10: $SerializationConstructorMarker$Type)
constructor(arg0: $AnimationEventType$Type, arg1: $AnimationTarget$Type, arg2: string, arg3: $AnimationEvent$Type, arg4: $Set$Type<(any)>, arg5: float, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: $DefaultConstructorMarker$Type)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getPriority"(): integer
public "getType"(): $AnimationEventType
public "copy"(arg0: $AnimationEventType$Type, arg1: $AnimationTarget$Type, arg2: string, arg3: $AnimationEvent$Type, arg4: $Set$Type<(string)>, arg5: float, arg6: integer, arg7: integer, arg8: integer): $AnimationEvent
public "getTarget"(): $AnimationTarget
public "component4"(): $AnimationEvent
public "component3"(): string
public "component5"(): $Set<(string)>
public "getTotalTime"(arg0: $BedrockModel$Type, arg1: float): float
public "component1"(): $AnimationEventType
public "component2"(): $AnimationTarget
public "component9"(): integer
public "component8"(): integer
public "component7"(): integer
public "component6"(): float
public "getOnComplete"(): $AnimationEvent
public "getLoops"(): integer
public "getSkips"(): integer
public "getProbability"(): float
public "getTriggerInOtherCosmetic"(): $Set<(string)>
get "name"(): string
get "priority"(): integer
get "type"(): $AnimationEventType
get "target"(): $AnimationTarget
get "onComplete"(): $AnimationEvent
get "loops"(): integer
get "skips"(): integer
get "probability"(): float
get "triggerInOtherCosmetic"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationEvent$Type = ($AnimationEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationEvent_ = $AnimationEvent$Type;
}}
declare module "packages/gg/essential/model/molang/$MolangExpression" {
import {$MolangEvalImpl, $MolangEvalImpl$Type} from "packages/gg/essential/model/molang/$MolangEvalImpl"
import {$MolangContext, $MolangContext$Type} from "packages/gg/essential/model/molang/$MolangContext"
import {$MolangExpression$Companion, $MolangExpression$Companion$Type} from "packages/gg/essential/model/molang/$MolangExpression$Companion"

export interface $MolangExpression extends $MolangEvalImpl {

 "eval"(arg0: $MolangContext$Type): float

(arg0: $MolangContext$Type): float
}

export namespace $MolangExpression {
const Companion: $MolangExpression$Companion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolangExpression$Type = ($MolangExpression);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolangExpression_ = $MolangExpression$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Event$Particle$Type$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticlesFile$Event$Particle$Type, $ParticlesFile$Event$Particle$Type$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event$Particle$Type"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticlesFile$Event$Particle$Type$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticlesFile$Event$Particle$Type)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Event$Particle$Type$Companion$Type = ($ParticlesFile$Event$Particle$Type$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Event$Particle$Type$Companion_ = $ParticlesFile$Event$Particle$Type$Companion$Type;
}}
declare module "packages/gg/essential/model/molang/$MolangQueryEntity" {
import {$ParticleSystem$Locator, $ParticleSystem$Locator$Type} from "packages/gg/essential/model/$ParticleSystem$Locator"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MolangQuery, $MolangQuery$Type} from "packages/gg/essential/model/molang/$MolangQuery"
import {$MolangQueryTime, $MolangQueryTime$Type} from "packages/gg/essential/model/molang/$MolangQueryTime"

export interface $MolangQueryEntity extends $MolangQuery, $MolangQueryTime {

 "getTime"(): float
 "getLocator"(): $ParticleSystem$Locator
 "getLifeTime"(): float
 "getUuid"(): $UUID
 "getModifiedDistanceMoved"(): float
 "getModifiedMoveSpeed"(): float
}

export namespace $MolangQueryEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolangQueryEntity$Type = ($MolangQueryEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolangQueryEntity_ = $MolangQueryEntity$Type;
}}
declare module "packages/gg/essential/mixins/impl/client/gui/$EssentialGuiScreenBeforeClose" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EssentialGuiScreenBeforeClose {

 "essential$beforeClose"(): void

(): void
}

export namespace $EssentialGuiScreenBeforeClose {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssentialGuiScreenBeforeClose$Type = ($EssentialGuiScreenBeforeClose);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssentialGuiScreenBeforeClose_ = $EssentialGuiScreenBeforeClose$Type;
}}
declare module "packages/gg/essential/model/$ParticleEffect" {
import {$ParticlesFile$Curve, $ParticlesFile$Curve$Type} from "packages/gg/essential/model/file/$ParticlesFile$Curve"
import {$ParticlesFile$Event, $ParticlesFile$Event$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event"
import {$ParticlesFile$Material, $ParticlesFile$Material$Type} from "packages/gg/essential/model/file/$ParticlesFile$Material"
import {$ParticleEffectComponents, $ParticleEffectComponents$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents"
import {$Function0, $Function0$Type} from "packages/kotlin/jvm/functions/$Function0"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ParticleEffect$RenderPass, $ParticleEffect$RenderPass$Type} from "packages/gg/essential/model/$ParticleEffect$RenderPass"

export class $ParticleEffect {

constructor(arg0: string, arg1: string, arg2: $ParticlesFile$Material$Type, arg3: $ParticleEffectComponents$Type, arg4: $Map$Type<(string), ($ParticlesFile$Curve$Type)>, arg5: $Map$Type<(string), ($ParticlesFile$Event$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: string, arg2: $ParticlesFile$Material$Type, arg3: $ParticleEffectComponents$Type, arg4: $Map$Type<(string), ($ParticlesFile$Curve$Type)>, arg5: $Map$Type<(string), ($ParticlesFile$Event$Type)>): $ParticleEffect
public "getFile"(): string
public "getIdentifier"(): string
public "component4"(): $ParticleEffectComponents
public "component3"(): $ParticlesFile$Material
public "component5"(): $Map<(string), ($ParticlesFile$Curve)>
public "getMaterial"(): $ParticlesFile$Material
public "getEvents"(): $Map<(string), ($ParticlesFile$Event)>
public "getComponents"(): $ParticleEffectComponents
public "component1"(): string
public "component2"(): string
public "renderPass"(arg0: $Function0$Type<(any)>): $ParticleEffect$RenderPass
public "component6"(): $Map<(string), ($ParticlesFile$Event)>
public "getCurves"(): $Map<(string), ($ParticlesFile$Curve)>
get "file"(): string
get "identifier"(): string
get "material"(): $ParticlesFile$Material
get "events"(): $Map<(string), ($ParticlesFile$Event)>
get "components"(): $ParticleEffectComponents
get "curves"(): $Map<(string), ($ParticlesFile$Curve)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffect$Type = ($ParticleEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffect_ = $ParticleEffect$Type;
}}
declare module "packages/gg/essential/model/$ParticleEffect$RenderPass" {
import {$ParticlesFile$Material, $ParticlesFile$Material$Type} from "packages/gg/essential/model/file/$ParticlesFile$Material"
import {$RenderBackend$Texture, $RenderBackend$Texture$Type} from "packages/gg/essential/model/backend/$RenderBackend$Texture"

export class $ParticleEffect$RenderPass {

constructor(arg0: $ParticlesFile$Material$Type, arg1: $RenderBackend$Texture$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $ParticlesFile$Material$Type, arg1: $RenderBackend$Texture$Type): $ParticleEffect$RenderPass
public "getMaterial"(): $ParticlesFile$Material
public "getTexture"(): $RenderBackend$Texture
public "component1"(): $ParticlesFile$Material
public "component2"(): $RenderBackend$Texture
get "material"(): $ParticlesFile$Material
get "texture"(): $RenderBackend$Texture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffect$RenderPass$Type = ($ParticleEffect$RenderPass);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffect$RenderPass_ = $ParticleEffect$RenderPass$Type;
}}
declare module "packages/gg/essential/model/$Bones" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$KMappedMarker, $KMappedMarker$Type} from "packages/kotlin/jvm/internal/markers/$KMappedMarker"
import {$ListIterator, $ListIterator$Type} from "packages/java/util/$ListIterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Bone, $Bone$Type} from "packages/gg/essential/model/$Bone"
import {$EnumPart, $EnumPart$Type} from "packages/gg/essential/model/$EnumPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Bones implements $List<($Bone)>, $KMappedMarker {

constructor(arg0: $List$Type<($Bone$Type)>)
constructor()

public "add"(arg0: $Bone$Type): boolean
public "add"(arg0: integer, arg1: $Bone$Type): void
public "remove"(arg0: integer): $Bone
public "remove"(arg0: any): boolean
public "get"(arg0: integer): $Bone
public "get"(arg0: string): $Bone
public "indexOf"(arg0: $Bone$Type): integer
public "indexOf"(arg0: any): integer
public "clear"(): void
public "lastIndexOf"(arg0: $Bone$Type): integer
public "lastIndexOf"(arg0: any): integer
public "isEmpty"(): boolean
public "replaceAll"(arg0: $UnaryOperator$Type<($Bone$Type)>): void
public "size"(): integer
public "subList"(arg0: integer, arg1: integer): $List<($Bone)>
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<($Bone)>
public "contains"(arg0: $Bone$Type): boolean
public "contains"(arg0: any): boolean
public "contains"(arg0: string): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "addAll"(arg0: integer, arg1: $Collection$Type<(any)>): boolean
public "set"(arg0: integer, arg1: $Bone$Type): $Bone
public "getRoot"(): $Bone
public "getSize"(): integer
public "getByName"(): $Map<(string), ($Bone)>
public "sort"(arg0: $Comparator$Type<(any)>): void
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "listIterator"(arg0: integer): $ListIterator<($Bone)>
public "listIterator"(): $ListIterator<($Bone)>
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
public "getById"(): $List<($Bone)>
public "getByPart"(): $Map<($EnumPart), ($Bone)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<($Bone)>
public static "of"<E>(arg0: $Bone$Type, arg1: $Bone$Type, arg2: $Bone$Type, arg3: $Bone$Type): $List<($Bone)>
public static "of"<E>(arg0: $Bone$Type, arg1: $Bone$Type, arg2: $Bone$Type): $List<($Bone)>
public static "of"<E>(arg0: $Bone$Type, arg1: $Bone$Type): $List<($Bone)>
public static "of"<E>(arg0: $Bone$Type): $List<($Bone)>
public static "of"<E>(): $List<($Bone)>
public static "of"<E>(arg0: $Bone$Type, arg1: $Bone$Type, arg2: $Bone$Type, arg3: $Bone$Type, arg4: $Bone$Type, arg5: $Bone$Type, arg6: $Bone$Type, arg7: $Bone$Type): $List<($Bone)>
public static "of"<E>(arg0: $Bone$Type, arg1: $Bone$Type, arg2: $Bone$Type, arg3: $Bone$Type, arg4: $Bone$Type, arg5: $Bone$Type, arg6: $Bone$Type): $List<($Bone)>
public static "of"<E>(arg0: $Bone$Type, arg1: $Bone$Type, arg2: $Bone$Type, arg3: $Bone$Type, arg4: $Bone$Type, arg5: $Bone$Type): $List<($Bone)>
public static "of"<E>(arg0: $Bone$Type, arg1: $Bone$Type, arg2: $Bone$Type, arg3: $Bone$Type, arg4: $Bone$Type): $List<($Bone)>
public static "of"<E>(arg0: $Bone$Type, arg1: $Bone$Type, arg2: $Bone$Type, arg3: $Bone$Type, arg4: $Bone$Type, arg5: $Bone$Type, arg6: $Bone$Type, arg7: $Bone$Type, arg8: $Bone$Type, arg9: $Bone$Type): $List<($Bone)>
public static "of"<E>(arg0: $Bone$Type, arg1: $Bone$Type, arg2: $Bone$Type, arg3: $Bone$Type, arg4: $Bone$Type, arg5: $Bone$Type, arg6: $Bone$Type, arg7: $Bone$Type, arg8: $Bone$Type): $List<($Bone)>
public static "of"<E>(...arg0: ($Bone$Type)[]): $List<($Bone)>
public "spliterator"(): $Spliterator<($Bone)>
public "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
public "stream"(): $Stream<($Bone)>
public "removeIf"(arg0: $Predicate$Type<(any)>): boolean
public "parallelStream"(): $Stream<($Bone)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$Bone>;
[index: number]: $Bone
get "empty"(): boolean
get "root"(): $Bone
get "byName"(): $Map<(string), ($Bone)>
get "byId"(): $List<($Bone)>
get "byPart"(): $Map<($EnumPart), ($Bone)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bones$Type = ($Bones);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Bones_ = $Bones$Type;
}}
declare module "packages/gg/essential/model/molang/$VariablesMap" {
import {$Variables$Variable, $Variables$Variable$Type} from "packages/gg/essential/model/molang/$Variables$Variable"
import {$Variables, $Variables$Type} from "packages/gg/essential/model/molang/$Variables"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$VariablesMap$Variable, $VariablesMap$Variable$Type} from "packages/gg/essential/model/molang/$VariablesMap$Variable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VariablesMap implements $Variables {

constructor()
constructor(arg0: $Map$Type<(any), (any)>, arg1: integer, arg2: $DefaultConstructorMarker$Type)
constructor(arg0: $Map$Type<(string), ($VariablesMap$Variable$Type)>)

public "copy"(): $VariablesMap
public "getOrNull"(arg0: string): $Variables$Variable
public "getOrPut"(arg0: string, arg1: float): $Variables$Variable
public "get"(arg0: string): float
public "set"(arg0: string, arg1: float): void
public "fallbackBackTo"(arg0: $Variables$Type): $Variables
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariablesMap$Type = ($VariablesMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariablesMap_ = $VariablesMap$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook, $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Companion$Type = ($ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Companion_ = $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeOnce$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticleEffectComponents$EmitterLifetimeOnce, $ParticleEffectComponents$EmitterLifetimeOnce$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeOnce"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$EmitterLifetimeOnce$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$EmitterLifetimeOnce)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterLifetimeOnce$Companion$Type = ($ParticleEffectComponents$EmitterLifetimeOnce$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterLifetimeOnce$Companion_ = $ParticleEffectComponents$EmitterLifetimeOnce$Companion$Type;
}}
declare module "packages/gg/essential/cosmetics/$IngameEquippedOutfitsManager$Update" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IngameEquippedOutfitsManager$Update {

}

export namespace $IngameEquippedOutfitsManager$Update {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngameEquippedOutfitsManager$Update$Type = ($IngameEquippedOutfitsManager$Update);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngameEquippedOutfitsManager$Update_ = $IngameEquippedOutfitsManager$Update$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$ParticleEffect$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticlesFile$ParticleEffect, $ParticlesFile$ParticleEffect$Type} from "packages/gg/essential/model/file/$ParticlesFile$ParticleEffect"

export class $ParticlesFile$ParticleEffect$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticlesFile$ParticleEffect)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$ParticleEffect$Companion$Type = ($ParticlesFile$ParticleEffect$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$ParticleEffect$Companion_ = $ParticlesFile$ParticleEffect$Companion$Type;
}}
declare module "packages/gg/essential/model/$EnumPart" {
import {$EnumPart$Companion, $EnumPart$Companion$Type} from "packages/gg/essential/model/$EnumPart$Companion"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $EnumPart extends $Enum<($EnumPart)> {
static readonly "Companion": $EnumPart$Companion
static readonly "ROOT": $EnumPart
static readonly "HEAD": $EnumPart
static readonly "BODY": $EnumPart
static readonly "RIGHT_ARM": $EnumPart
static readonly "LEFT_ARM": $EnumPart
static readonly "LEFT_LEG": $EnumPart
static readonly "RIGHT_LEG": $EnumPart
static readonly "RIGHT_SHOULDER_ENTITY": $EnumPart
static readonly "LEFT_SHOULDER_ENTITY": $EnumPart
static readonly "RIGHT_WING": $EnumPart
static readonly "LEFT_WING": $EnumPart
static readonly "CAPE": $EnumPart


public static "values"(): ($EnumPart)[]
public static "valueOf"(arg0: string): $EnumPart
public static "getEntries"(): $EnumEntries<($EnumPart)>
public "getArmorSlotIds"(): $Set<(integer)>
public static "fromBoneName"(arg0: string): $EnumPart
get "entries"(): $EnumEntries<($EnumPart)>
get "armorSlotIds"(): $Set<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumPart$Type = (("head") | ("right_arm") | ("left_leg") | ("left_arm") | ("right_leg") | ("right_wing") | ("left_wing") | ("root") | ("left_shoulder_entity") | ("body") | ("right_shoulder_entity") | ("cape")) | ($EnumPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumPart_ = $EnumPart$Type;
}}
declare module "packages/gg/essential/model/file/$AnimationFile$Animation$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$AnimationFile$Animation, $AnimationFile$Animation$Type} from "packages/gg/essential/model/file/$AnimationFile$Animation"

export class $AnimationFile$Animation$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($AnimationFile$Animation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationFile$Animation$Companion$Type = ($AnimationFile$Animation$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationFile$Animation$Companion_ = $AnimationFile$Animation$Companion$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticProperty" {
import {$CosmeticPropertyType, $CosmeticPropertyType$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticPropertyType"
import {$CosmeticProperty$Companion, $CosmeticProperty$Companion$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticProperty$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $CosmeticProperty {
static readonly "Companion": $CosmeticProperty$Companion

constructor(arg0: $DefaultConstructorMarker$Type)

public "getId"(): string
public "getType"(): $CosmeticPropertyType
public "getEnabled"(): boolean
get "id"(): string
get "type"(): $CosmeticPropertyType
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticProperty$Type = ($CosmeticProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticProperty_ = $CosmeticProperty$Type;
}}
declare module "packages/gg/essential/model/molang/$MolangQueryTime" {
import {$MolangQuery, $MolangQuery$Type} from "packages/gg/essential/model/molang/$MolangQuery"

export interface $MolangQueryTime extends $MolangQuery {

 "getTime"(): float

(): float
}

export namespace $MolangQueryTime {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolangQueryTime$Type = ($MolangQueryTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolangQueryTime_ = $MolangQueryTime$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/database/$GitRepoCosmeticsDatabase$CosmeticImplicitOwnership" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Companion, $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Companion$Type} from "packages/gg/essential/mod/cosmetics/database/$GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Companion"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion, $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Type} from "packages/gg/essential/mod/cosmetics/database/$GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion"

export class $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership {
static readonly "Companion": $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Companion

constructor(arg0: string, arg1: $List$Type<(string)>, arg2: $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Type)
constructor(arg0: integer, arg1: string, arg2: $List$Type<(any)>, arg3: $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Type, arg4: $SerializationConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getId"(): string
public "copy"(arg0: string, arg1: $List$Type<(string)>, arg2: $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Type): $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership
public "component3"(): $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion
public "getCosmetics"(): $List<(string)>
public "component1"(): string
public "component2"(): $List<(string)>
public "getCriterion"(): $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion
get "id"(): string
get "cosmetics"(): $List<(string)>
get "criterion"(): $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Type = ($GitRepoCosmeticsDatabase$CosmeticImplicitOwnership);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership_ = $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/featured/$FeaturedPage" {
import {$FeaturedPage$Companion, $FeaturedPage$Companion$Type} from "packages/gg/essential/mod/cosmetics/featured/$FeaturedPage$Companion"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FeaturedPageComponent, $FeaturedPageComponent$Type} from "packages/gg/essential/mod/cosmetics/featured/$FeaturedPageComponent"

export class $FeaturedPage {
static readonly "Companion": $FeaturedPage$Companion

constructor(arg0: $List$Type<(any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $List$Type<(any)>): $FeaturedPage
public "getRows"(): $List<($FeaturedPageComponent)>
public "component1"(): $List<($FeaturedPageComponent)>
get "rows"(): $List<($FeaturedPageComponent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeaturedPage$Type = ($FeaturedPage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeaturedPage_ = $FeaturedPage$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionCollision$Event" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$ParticleMotionCollision$Event$Companion, $ParticleEffectComponents$ParticleMotionCollision$Event$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionCollision$Event$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$ParticleMotionCollision$Event {
static readonly "Companion": $ParticleEffectComponents$ParticleMotionCollision$Event$Companion

constructor(arg0: integer, arg1: string, arg2: float, arg3: $SerializationConstructorMarker$Type)
constructor(arg0: string, arg1: float, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: string, arg1: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: float): $ParticleEffectComponents$ParticleMotionCollision$Event
public "getEvent"(): string
public "component1"(): string
public "component2"(): float
public "getMinSpeed"(): float
get "event"(): string
get "minSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleMotionCollision$Event$Type = ($ParticleEffectComponents$ParticleMotionCollision$Event);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleMotionCollision$Event_ = $ParticleEffectComponents$ParticleMotionCollision$Event$Type;
}}
declare module "packages/gg/essential/model/$Side$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Side, $Side$Type} from "packages/gg/essential/model/$Side"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $Side$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($Side)>
public "getDefaultSideOrNull"(arg0: $Set$Type<(any)>): $Side
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Side$Companion$Type = ($Side$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Side$Companion_ = $Side$Companion$Type;
}}
declare module "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Vec {

 "copyOf"(): $Vec
 "getX"(): float
 "getY"(): float
 "getW"(): float
 "getZ"(): float
}

export namespace $Vec {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec$Type = ($Vec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec_ = $Vec$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterRateSteady$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticleEffectComponents$EmitterRateSteady, $ParticleEffectComponents$EmitterRateSteady$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterRateSteady"

export class $ParticleEffectComponents$EmitterRateSteady$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$EmitterRateSteady)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterRateSteady$Companion$Type = ($ParticleEffectComponents$EmitterRateSteady$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterRateSteady$Companion_ = $ParticleEffectComponents$EmitterRateSteady$Companion$Type;
}}
declare module "packages/gg/essential/cosmetics/state/$EssentialAnimationSystem" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BedrockModel, $BedrockModel$Type} from "packages/gg/essential/model/$BedrockModel"
import {$EssentialAnimationSystem$Companion, $EssentialAnimationSystem$Companion$Type} from "packages/gg/essential/cosmetics/state/$EssentialAnimationSystem$Companion"
import {$Function1, $Function1$Type} from "packages/kotlin/jvm/functions/$Function1"
import {$CosmeticSetting$AnimationVariant, $CosmeticSetting$AnimationVariant$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$AnimationVariant"
import {$AnimationEventType, $AnimationEventType$Type} from "packages/gg/essential/cosmetics/events/$AnimationEventType"
import {$MolangQueryEntity, $MolangQueryEntity$Type} from "packages/gg/essential/model/molang/$MolangQueryEntity"
import {$ModelAnimationState, $ModelAnimationState$Type} from "packages/gg/essential/model/$ModelAnimationState"
import {$ModelInstance, $ModelInstance$Type} from "packages/gg/essential/model/$ModelInstance"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Unit, $Unit$Type} from "packages/kotlin/$Unit"
import {$TextureAnimationSync, $TextureAnimationSync$Type} from "packages/gg/essential/cosmetics/state/$TextureAnimationSync"

export class $EssentialAnimationSystem {
static readonly "Companion": $EssentialAnimationSystem$Companion

constructor(arg0: $BedrockModel$Type, arg1: $MolangQueryEntity$Type, arg2: $ModelAnimationState$Type, arg3: $TextureAnimationSync$Type, arg4: $Set$Type<(any)>, arg5: $CosmeticSetting$AnimationVariant$Type, arg6: $Function1$Type<(any), ($Unit$Type)>)

public "fireTriggerFromAnimation"(arg0: string, arg1: $AnimationEventType$Type): void
public "processEvent"(arg0: $AnimationEventType$Type): void
public "triggerPendingAnimationsForOtherModels"(arg0: $Collection$Type<($ModelInstance$Type)>): void
public "maybeFireTextureAnimationStartEvent"(): void
public "updateAnimationState"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssentialAnimationSystem$Type = ($EssentialAnimationSystem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssentialAnimationSystem_ = $EssentialAnimationSystem$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleInitialization$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticleEffectComponents$ParticleInitialization, $ParticleEffectComponents$ParticleInitialization$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleInitialization"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$ParticleInitialization$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$ParticleInitialization)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleInitialization$Companion$Type = ($ParticleEffectComponents$ParticleInitialization$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleInitialization$Companion_ = $ParticleEffectComponents$ParticleInitialization$Companion$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/$CosmeticTier" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$CosmeticTier$Companion, $CosmeticTier$Companion$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticTier$Companion"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $CosmeticTier extends $Enum<($CosmeticTier)> {
static readonly "Companion": $CosmeticTier$Companion
static readonly "COMMON": $CosmeticTier
static readonly "UNCOMMON": $CosmeticTier
static readonly "RARE": $CosmeticTier
static readonly "EPIC": $CosmeticTier
static readonly "LEGENDARY": $CosmeticTier


public static "values"(): ($CosmeticTier)[]
public static "valueOf"(arg0: string): $CosmeticTier
public static "getEntries"(): $EnumEntries<($CosmeticTier)>
get "entries"(): $EnumEntries<($CosmeticTier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticTier$Type = (("uncommon") | ("common") | ("legendary") | ("rare") | ("epic")) | ($CosmeticTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticTier_ = $CosmeticTier$Type;
}}
declare module "packages/gg/essential/model/file/$ModelFile$Bone" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ModelFile$Bone$Companion, $ModelFile$Bone$Companion$Type} from "packages/gg/essential/model/file/$ModelFile$Bone$Companion"
import {$ModelFile$Cube, $ModelFile$Cube$Type} from "packages/gg/essential/model/file/$ModelFile$Cube"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Vector3, $Vector3$Type} from "packages/gg/essential/model/$Vector3"
import {$Side, $Side$Type} from "packages/gg/essential/model/$Side"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModelFile$Bone {
static readonly "Companion": $ModelFile$Bone$Companion

constructor(arg0: integer, arg1: string, arg2: string, arg3: $Vector3$Type, arg4: $Vector3$Type, arg5: boolean, arg6: $Side$Type, arg7: $List$Type<(any)>, arg8: $Map$Type<(any), (any)>, arg9: $SerializationConstructorMarker$Type)
constructor(arg0: string, arg1: string, arg2: $Vector3$Type, arg3: $Vector3$Type, arg4: boolean, arg5: $Side$Type, arg6: $List$Type<($ModelFile$Cube$Type)>, arg7: $Map$Type<(string), ($Vector3$Type)>)
constructor(arg0: string, arg1: string, arg2: $Vector3$Type, arg3: $Vector3$Type, arg4: boolean, arg5: $Side$Type, arg6: $List$Type<(any)>, arg7: $Map$Type<(any), (any)>, arg8: integer, arg9: $DefaultConstructorMarker$Type)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getParent"(): string
public "copy"(arg0: string, arg1: string, arg2: $Vector3$Type, arg3: $Vector3$Type, arg4: boolean, arg5: $Side$Type, arg6: $List$Type<($ModelFile$Cube$Type)>, arg7: $Map$Type<(string), ($Vector3$Type)>): $ModelFile$Bone
public "component4"(): $Vector3
public "component3"(): $Vector3
public "component5"(): boolean
public "getMirror"(): boolean
public "getSide"(): $Side
public "getRotation"(): $Vector3
public "component1"(): string
public "component2"(): string
public "component8"(): $Map<(string), ($Vector3)>
public "component7"(): $List<($ModelFile$Cube)>
public "component6"(): $Side
public "getLocators"(): $Map<(string), ($Vector3)>
public "getPivot"(): $Vector3
public "getCubes"(): $List<($ModelFile$Cube)>
get "name"(): string
get "parent"(): string
get "mirror"(): boolean
get "side"(): $Side
get "rotation"(): $Vector3
get "locators"(): $Map<(string), ($Vector3)>
get "pivot"(): $Vector3
get "cubes"(): $List<($ModelFile$Cube)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$Bone$Type = ($ModelFile$Bone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile$Bone_ = $ModelFile$Bone$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticlesFile$Companion, $ParticlesFile$Companion$Type} from "packages/gg/essential/model/file/$ParticlesFile$Companion"
import {$ParticlesFile$ParticleEffect, $ParticlesFile$ParticleEffect$Type} from "packages/gg/essential/model/file/$ParticlesFile$ParticleEffect"

export class $ParticlesFile {
static readonly "Companion": $ParticlesFile$Companion

constructor(arg0: string, arg1: $ParticlesFile$ParticleEffect$Type)
constructor(arg0: integer, arg1: string, arg2: $ParticlesFile$ParticleEffect$Type, arg3: $SerializationConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: $ParticlesFile$ParticleEffect$Type): $ParticlesFile
public "component1"(): string
public "component2"(): $ParticlesFile$ParticleEffect
public "getFormatVersion"(): string
public "getParticleEffect"(): $ParticlesFile$ParticleEffect
get "formatVersion"(): string
get "particleEffect"(): $ParticlesFile$ParticleEffect
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Type = ($ParticlesFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile_ = $ParticlesFile$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/$CosmeticAssets$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$CosmeticAssets, $CosmeticAssets$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticAssets"

export class $CosmeticAssets$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($CosmeticAssets)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticAssets$Companion$Type = ($CosmeticAssets$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticAssets$Companion_ = $CosmeticAssets$Companion$Type;
}}
declare module "packages/gg/essential/mixins/transformers/client/network/$CPacketChatMessageAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CPacketChatMessageAccessor {

 "setMessage"(arg0: string): void

(arg0: string): void
}

export namespace $CPacketChatMessageAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CPacketChatMessageAccessor$Type = ($CPacketChatMessageAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CPacketChatMessageAccessor_ = $CPacketChatMessageAccessor$Type;
}}
declare module "packages/gg/essential/cosmetics/$WearablesManager" {
import {$UMatrixStack, $UMatrixStack$Type} from "packages/gg/essential/model/util/$UMatrixStack"
import {$Cosmetic, $Cosmetic$Type} from "packages/gg/essential/network/cosmetics/$Cosmetic"
import {$CosmeticSlot, $CosmeticSlot$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticSlot"
import {$Function2, $Function2$Type} from "packages/kotlin/jvm/functions/$Function2"
import {$PlayerPose, $PlayerPose$Type} from "packages/gg/essential/model/backend/$PlayerPose"
import {$Function1, $Function1$Type} from "packages/kotlin/jvm/functions/$Function1"
import {$WearablesManager$Companion, $WearablesManager$Companion$Type} from "packages/gg/essential/cosmetics/$WearablesManager$Companion"
import {$RenderBackend, $RenderBackend$Type} from "packages/gg/essential/model/backend/$RenderBackend"
import {$RenderBackend$CommandQueue, $RenderBackend$CommandQueue$Type} from "packages/gg/essential/model/backend/$RenderBackend$CommandQueue"
import {$MolangQueryEntity, $MolangQueryEntity$Type} from "packages/gg/essential/model/molang/$MolangQueryEntity"
import {$ModelInstance, $ModelInstance$Type} from "packages/gg/essential/model/$ModelInstance"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Unit, $Unit$Type} from "packages/kotlin/$Unit"
import {$WearablesManager$CommandQueueProvider, $WearablesManager$CommandQueueProvider$Type} from "packages/gg/essential/cosmetics/$WearablesManager$CommandQueueProvider"
import {$RenderBackend$Texture, $RenderBackend$Texture$Type} from "packages/gg/essential/model/backend/$RenderBackend$Texture"
import {$CosmeticsState, $CosmeticsState$Type} from "packages/gg/essential/cosmetics/$CosmeticsState"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WearablesManager {
static readonly "Companion": $WearablesManager$Companion

constructor(arg0: $RenderBackend$Type, arg1: $MolangQueryEntity$Type, arg2: $Set$Type<(any)>, arg3: $Function2$Type<(any), (any), ($Unit$Type)>)

public "update"(): void
public "getState"(): $CosmeticsState
public "resetModel"(arg0: $CosmeticSlot$Type): void
public "updateLocators"(arg0: $PlayerPose$Type): void
public "getModels"(): $Map<($Cosmetic), ($ModelInstance)>
public "updateState"(arg0: $CosmeticsState$Type): void
public "render-zkmfrqk"(arg0: $UMatrixStack$Type, arg1: $WearablesManager$CommandQueueProvider$Type, arg2: integer, arg3: $PlayerPose$Type, arg4: $RenderBackend$Texture$Type, arg5: $Set$Type<(any)>): void
public "render-6Qb1oLs"(arg0: $UMatrixStack$Type, arg1: $RenderBackend$CommandQueue$Type, arg2: integer, arg3: $ModelInstance$Type, arg4: $PlayerPose$Type, arg5: $RenderBackend$Texture$Type, arg6: $Set$Type<(any)>): void
public "collectEvents"(arg0: $Function1$Type<(any), ($Unit$Type)>): void
get "state"(): $CosmeticsState
get "models"(): $Map<($Cosmetic), ($ModelInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WearablesManager$Type = ($WearablesManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WearablesManager_ = $WearablesManager$Type;
}}
declare module "packages/gg/essential/model/backend/$RenderBackend" {
import {$RenderBackend$BlitOp, $RenderBackend$BlitOp$Type} from "packages/gg/essential/model/backend/$RenderBackend$BlitOp"
import {$Continuation, $Continuation$Type} from "packages/kotlin/coroutines/$Continuation"
import {$RenderBackend$Texture, $RenderBackend$Texture$Type} from "packages/gg/essential/model/backend/$RenderBackend$Texture"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $RenderBackend {

 "blitTexture"(arg0: $RenderBackend$Texture$Type, arg1: $Iterable$Type<($RenderBackend$BlitOp$Type)>): void
 "readTexture"(arg0: string, arg1: (byte)[], arg2: $Continuation$Type<(any)>): any
 "createTexture"(arg0: string, arg1: integer, arg2: integer): $RenderBackend$Texture
 "deleteTexture"(arg0: $RenderBackend$Texture$Type): void
}

export namespace $RenderBackend {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBackend$Type = ($RenderBackend);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderBackend_ = $RenderBackend$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$BasicRenderParameters$Companion" {
import {$ParticlesFile$BasicRenderParameters, $ParticlesFile$BasicRenderParameters$Type} from "packages/gg/essential/model/file/$ParticlesFile$BasicRenderParameters"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticlesFile$BasicRenderParameters$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticlesFile$BasicRenderParameters)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$BasicRenderParameters$Companion$Type = ($ParticlesFile$BasicRenderParameters$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$BasicRenderParameters$Companion_ = $ParticlesFile$BasicRenderParameters$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Companion, $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Companion"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode extends $Enum<($ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode)> {
static readonly "Companion": $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Companion
static readonly "RotateXYZ": $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode
static readonly "RotateY": $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode
static readonly "LookAtXYZ": $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode
static readonly "LookAtY": $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode
static readonly "LookAtDirection": $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode
static readonly "DirectionX": $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode
static readonly "DirectionY": $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode
static readonly "DirectionZ": $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode
static readonly "EmitterTransformXY": $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode
static readonly "EmitterTransformXZ": $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode
static readonly "EmitterTransformYZ": $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode


public static "values"(): ($ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode)[]
public static "valueOf"(arg0: string): $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode
public static "getEntries"(): $EnumEntries<($ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode)>
get "entries"(): $EnumEntries<($ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Type = (("emittertransformxy") | ("emittertransformyz") | ("lookatdirection") | ("rotatexyz") | ("directionx") | ("directiony") | ("directionz") | ("rotatey") | ("lookaty") | ("lookatxyz") | ("emittertransformxz")) | ($ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode_ = $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Event$Companion" {
import {$ParticlesFile$Event, $ParticlesFile$Event$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticlesFile$Event$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticlesFile$Event)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Event$Companion$Type = ($ParticlesFile$Event$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Event$Companion_ = $ParticlesFile$Event$Companion$Type;
}}
declare module "packages/gg/essential/sps/$IntegratedServerManager" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$TrackedList, $TrackedList$Type} from "packages/gg/essential/gui/elementa/state/v2/collections/$TrackedList"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$MutableState, $MutableState$Type} from "packages/gg/essential/gui/elementa/state/v2/$MutableState"
import {$IntegratedServerManager$Difficulty, $IntegratedServerManager$Difficulty$Type} from "packages/gg/essential/sps/$IntegratedServerManager$Difficulty"
import {$CoroutineScope, $CoroutineScope$Type} from "packages/kotlinx/coroutines/$CoroutineScope"
import {$IntegratedServerManager$ServerResourcePack, $IntegratedServerManager$ServerResourcePack$Type} from "packages/gg/essential/sps/$IntegratedServerManager$ServerResourcePack"
import {$IntegratedServerManager$GameMode, $IntegratedServerManager$GameMode$Type} from "packages/gg/essential/sps/$IntegratedServerManager$GameMode"
import {$State, $State$Type} from "packages/gg/essential/gui/elementa/state/v2/$State"
import {$UIdentifier, $UIdentifier$Type} from "packages/gg/essential/util/$UIdentifier"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$CoroutineDispatcher, $CoroutineDispatcher$Type} from "packages/kotlinx/coroutines/$CoroutineDispatcher"
import {$IntegratedServerManager$SuspendingMutableState, $IntegratedServerManager$SuspendingMutableState$Type} from "packages/gg/essential/sps/$IntegratedServerManager$SuspendingMutableState"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IntegratedServerManager {

 "setWhitelistSource"(arg0: $State$Type<(any)>): void
 "getWorldFolder"(): $Path
 "setOpenToLanSource"(arg0: $State$Type<(boolean)>): void
 "getMaxPlayers"(): $State<(integer)>
 "getConnectedGuests"(): $State<($TrackedList<($UUID)>)>
 "getServerPort"(): $State<(integer)>
 "getLastPlayed"(): $Instant
 "setOpsSource"(arg0: $State$Type<(any)>): void
 "setGameRulesSource"(arg0: $IntegratedServerManager$SuspendingMutableState$Type<($Map$Type<($UIdentifier$Type), (string)>)>): void
 "getCoroutineScope"(): $CoroutineScope
 "getThirdPartyVoicePort"(): $State<(integer)>
 "setCheatsEnabledSource"(arg0: $State$Type<(boolean)>): void
 "getServerDispatcher"(): $CoroutineDispatcher
 "setResourcePackSource"(arg0: $State$Type<($IntegratedServerManager$ServerResourcePack$Type)>): void
 "setDifficultyLockedSource"(arg0: $MutableState$Type<(boolean)>): void
 "setDefaultGameModeSource"(arg0: $MutableState$Type<($IntegratedServerManager$GameMode$Type)>): void
 "setDifficultySource"(arg0: $MutableState$Type<($IntegratedServerManager$Difficulty$Type)>): void
 "getStatusResponseJson"(): $State<(string)>
 "getOpenToLan"(): $State<(boolean)>
 "getConnectedPlayers"(): $State<($TrackedList<($UUID)>)>
 "getWhitelist"(): $State<($Set<($UUID)>)>
}

export namespace $IntegratedServerManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegratedServerManager$Type = ($IntegratedServerManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegratedServerManager_ = $IntegratedServerManager$Type;
}}
declare module "packages/gg/essential/util/$UIdentifier" {
import {$UIdentifier$Companion, $UIdentifier$Companion$Type} from "packages/gg/essential/util/$UIdentifier$Companion"

export class $UIdentifier {
static readonly "Companion": $UIdentifier$Companion

constructor(arg0: string, arg1: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: string): $UIdentifier
public "copy"(arg0: string, arg1: string): $UIdentifier
public "getPath"(): string
public "getNamespace"(): string
public static "ofLegacy"(arg0: string): $UIdentifier
public "toLegacyString"(): string
public "component1"(): string
public "component2"(): string
get "path"(): string
get "namespace"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIdentifier$Type = ($UIdentifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UIdentifier_ = $UIdentifier$Type;
}}
declare module "packages/gg/essential/model/file/$ModelFile$Uvs$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ModelFile$Uvs, $ModelFile$Uvs$Type} from "packages/gg/essential/model/file/$ModelFile$Uvs"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ModelFile$Uvs$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ModelFile$Uvs)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$Uvs$Companion$Type = ($ModelFile$Uvs$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile$Uvs$Companion_ = $ModelFile$Uvs$Companion$Type;
}}
declare module "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec3" {
import {$Vec4, $Vec4$Type} from "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec4"

export class $Vec3 extends $Vec4 {

constructor()

public "toString"(): string
public "copyOf"(): $Vec3
public "getW"(): float
get "w"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec3$Type = ($Vec3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec3_ = $Vec3$Type;
}}
declare module "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec4" {
import {$Vec, $Vec$Type} from "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec"

export class $Vec4 implements $Vec {

constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copyOf"(): $Vec4
public "component4"(): float
public "component3"(): float
public "component1"(): float
public "component2"(): float
public "getX"(): float
public "getY"(): float
public "getW"(): float
public "getZ"(): float
get "x"(): float
get "y"(): float
get "w"(): float
get "z"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec4$Type = ($Vec4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec4_ = $Vec4$Type;
}}
declare module "packages/gg/essential/mixins/transformers/client/options/$KeyBindingAccessor" {
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $KeyBindingAccessor {

 "getBoundKey"(): $InputConstants$Key
 "invokeUnpressKey"(): void
}

export namespace $KeyBindingAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyBindingAccessor$Type = ($KeyBindingAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyBindingAccessor_ = $KeyBindingAccessor$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticProperty$Variants$Variant" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$CosmeticProperty$Variants$Variant$Companion, $CosmeticProperty$Variants$Variant$Companion$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticProperty$Variants$Variant$Companion"
import {$Color, $Color$Type} from "packages/gg/essential/model/util/$Color"

export class $CosmeticProperty$Variants$Variant {
static readonly "Companion": $CosmeticProperty$Variants$Variant$Companion

constructor(arg0: string, arg1: integer, arg2: $DefaultConstructorMarker$Type)
constructor(arg0: integer, arg1: string, arg2: $Color$Type, arg3: $SerializationConstructorMarker$Type, arg4: $DefaultConstructorMarker$Type)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getColor-yaPNGYs"(): integer
public "component2-yaPNGYs"(): integer
public "copy-BS0M10c"(arg0: string, arg1: integer): $CosmeticProperty$Variants$Variant
public "component1"(): string
get "name"(): string
get "color-yaPNGYs"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticProperty$Variants$Variant$Type = ($CosmeticProperty$Variants$Variant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticProperty$Variants$Variant_ = $CosmeticProperty$Variants$Variant$Type;
}}
declare module "packages/gg/essential/util/image/mask/$Mask$Companion" {
import {$MutableMask, $MutableMask$Type} from "packages/gg/essential/util/image/mask/$MutableMask"
import {$Bitmap, $Bitmap$Type} from "packages/gg/essential/util/image/bitmap/$Bitmap"

export class $Mask$Companion {


public "copyOf"(arg0: $Bitmap$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $MutableMask
public "ofSize"(arg0: integer, arg1: integer): $MutableMask
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mask$Companion$Type = ($Mask$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mask$Companion_ = $Mask$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ModelFile$Description$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ModelFile$Description, $ModelFile$Description$Type} from "packages/gg/essential/model/file/$ModelFile$Description"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ModelFile$Description$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ModelFile$Description)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$Description$Companion$Type = ($ModelFile$Description$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile$Description$Companion_ = $ModelFile$Description$Companion$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/database/$GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Companion" {
import {$GitRepoCosmeticsDatabase$CosmeticImplicitOwnership, $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Type} from "packages/gg/essential/mod/cosmetics/database/$GitRepoCosmeticsDatabase$CosmeticImplicitOwnership"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($GitRepoCosmeticsDatabase$CosmeticImplicitOwnership)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Companion$Type = ($GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Companion_ = $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Companion$Type;
}}
declare module "packages/gg/essential/util/image/bitmap/$MutableBitmap" {
import {$Bitmap, $Bitmap$Type} from "packages/gg/essential/util/image/bitmap/$Bitmap"

export interface $MutableBitmap extends $Bitmap {

 "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $Bitmap$Type, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
 "set-gk-R20I"(arg0: integer, arg1: integer, arg2: integer): void
 "set-YpvzPaY"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
 "getWidth"(): integer
 "getHeight"(): integer
 "get-XEV4ZDs"(arg0: integer, arg1: integer): integer
 "mutableCopy"(): $MutableBitmap
}

export namespace $MutableBitmap {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableBitmap$Type = ($MutableBitmap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableBitmap_ = $MutableBitmap$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleLifetimeEvents" {
import {$TreeMap, $TreeMap$Type} from "packages/gg/essential/model/util/$TreeMap"
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticleEffectComponents$ParticleLifetimeEvents$Companion, $ParticleEffectComponents$ParticleLifetimeEvents$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleLifetimeEvents$Companion"

export class $ParticleEffectComponents$ParticleLifetimeEvents {
static readonly "Companion": $ParticleEffectComponents$ParticleLifetimeEvents$Companion

constructor(arg0: integer, arg1: $List$Type<(any)>, arg2: $List$Type<(any)>, arg3: $TreeMap$Type<(any), (any)>, arg4: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $List$Type<(any)>, arg1: $List$Type<(any)>, arg2: $TreeMap$Type<(any), (any)>, arg3: integer, arg4: $DefaultConstructorMarker$Type)
constructor(arg0: $List$Type<(string)>, arg1: $List$Type<(string)>, arg2: $TreeMap$Type<(float), ($List$Type<(string)>)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $List$Type<(string)>, arg1: $List$Type<(string)>, arg2: $TreeMap$Type<(float), ($List$Type<(string)>)>): $ParticleEffectComponents$ParticleLifetimeEvents
public "component3"(): $TreeMap<(float), ($List<(string)>)>
public "component1"(): $List<(string)>
public "component2"(): $List<(string)>
public "getTimeline"(): $TreeMap<(float), ($List<(string)>)>
public "getCreationEvents"(): $List<(string)>
public "getExpirationEvents"(): $List<(string)>
get "timeline"(): $TreeMap<(float), ($List<(string)>)>
get "creationEvents"(): $List<(string)>
get "expirationEvents"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleLifetimeEvents$Type = ($ParticleEffectComponents$ParticleLifetimeEvents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleLifetimeEvents_ = $ParticleEffectComponents$ParticleLifetimeEvents$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/$CosmeticAssets$Geometry$Companion" {
import {$CosmeticAssets$Geometry, $CosmeticAssets$Geometry$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticAssets$Geometry"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $CosmeticAssets$Geometry$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($CosmeticAssets$Geometry)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticAssets$Geometry$Companion$Type = ($CosmeticAssets$Geometry$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticAssets$Geometry$Companion_ = $CosmeticAssets$Geometry$Companion$Type;
}}
declare module "packages/gg/essential/mixins/ext/client/network/$NetHandlerPlayClientExt" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IngameEquippedOutfitsManager, $IngameEquippedOutfitsManager$Type} from "packages/gg/essential/cosmetics/$IngameEquippedOutfitsManager"
import {$IngameEquippedOutfitsUpdateEncoder, $IngameEquippedOutfitsUpdateEncoder$Type} from "packages/gg/essential/cosmetics/$IngameEquippedOutfitsUpdateEncoder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $NetHandlerPlayClientExt {

 "getEssential$maxPlayers"(): integer
 "getEssential$ingameEquippedOutfitsManager"(): $IngameEquippedOutfitsManager
 "getEssential$ingameEquippedOutfitsUpdateEncoder"(): $IngameEquippedOutfitsUpdateEncoder
 "essential$getNameIdCache"(): $Map<(string), ($UUID)>
}

export namespace $NetHandlerPlayClientExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetHandlerPlayClientExt$Type = ($NetHandlerPlayClientExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetHandlerPlayClientExt_ = $NetHandlerPlayClientExt$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticSettingType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $CosmeticSettingType extends $Enum<($CosmeticSettingType)> {
static readonly "PLAYER_POSITION_ADJUSTMENT": $CosmeticSettingType
static readonly "SIDE": $CosmeticSettingType
static readonly "VARIANT": $CosmeticSettingType
static readonly "ANIMATION_VARIANT": $CosmeticSettingType


public static "values"(): ($CosmeticSettingType)[]
public static "valueOf"(arg0: string): $CosmeticSettingType
public static "getEntries"(): $EnumEntries<($CosmeticSettingType)>
public "getDisplayName"(): string
public "getSingleton"(): boolean
get "entries"(): $EnumEntries<($CosmeticSettingType)>
get "displayName"(): string
get "singleton"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticSettingType$Type = (("side") | ("variant") | ("player_position_adjustment") | ("animation_variant")) | ($CosmeticSettingType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticSettingType_ = $CosmeticSettingType$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterRateInstant$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticleEffectComponents$EmitterRateInstant, $ParticleEffectComponents$EmitterRateInstant$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterRateInstant"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$EmitterRateInstant$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$EmitterRateInstant)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterRateInstant$Companion$Type = ($ParticleEffectComponents$EmitterRateInstant$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterRateInstant$Companion_ = $ParticleEffectComponents$EmitterRateInstant$Companion$Type;
}}
declare module "packages/gg/essential/mixins/transformers/server/integrated/$Mixin_SetWorldName" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Mixin_SetWorldName {

 "setWorldName"(arg0: string): void

(arg0: string): void
}

export namespace $Mixin_SetWorldName {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mixin_SetWorldName$Type = ($Mixin_SetWorldName);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mixin_SetWorldName_ = $Mixin_SetWorldName$Type;
}}
declare module "packages/gg/essential/mixins/impl/client/model/$ModelBipedExt" {
import {$PlayerPose, $PlayerPose$Type} from "packages/gg/essential/model/backend/$PlayerPose"

export interface $ModelBipedExt {

 "getResetPose"(): $PlayerPose
 "setResetPose"(arg0: $PlayerPose$Type): void
}

export namespace $ModelBipedExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBipedExt$Type = ($ModelBipedExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBipedExt_ = $ModelBipedExt$Type;
}}
declare module "packages/gg/essential/model/molang/$LiteralExpr" {
import {$MolangExpression, $MolangExpression$Type} from "packages/gg/essential/model/molang/$MolangExpression"
import {$MolangContext, $MolangContext$Type} from "packages/gg/essential/model/molang/$MolangContext"

export class $LiteralExpr implements $MolangExpression {

constructor(arg0: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getValue"(): float
public "copy"(arg0: float): $LiteralExpr
public "eval"(arg0: $MolangContext$Type): float
public "component1"(): float
get "value"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiteralExpr$Type = ($LiteralExpr);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiteralExpr_ = $LiteralExpr$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticPropertyType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $CosmeticPropertyType extends $Enum<($CosmeticPropertyType)> {
static readonly "ARMOR_HANDLING": $CosmeticPropertyType
static readonly "ARMOR_HANDLING_V2": $CosmeticPropertyType
static readonly "POSITION_RANGE": $CosmeticPropertyType
static readonly "INTERRUPTS_EMOTE": $CosmeticPropertyType
static readonly "REQUIRES_UNLOCK_ACTION": $CosmeticPropertyType
static readonly "PREVIEW_RESET_TIME": $CosmeticPropertyType
static readonly "LOCALIZATION": $CosmeticPropertyType
static readonly "COSMETIC_BONE_HIDING": $CosmeticPropertyType
static readonly "EXTERNAL_HIDDEN_BONE": $CosmeticPropertyType
static readonly "TRANSITION_DELAY": $CosmeticPropertyType
static readonly "VARIANTS": $CosmeticPropertyType
static readonly "DEFAULT_SIDE": $CosmeticPropertyType
static readonly "MUTUALLY_EXCLUSIVE": $CosmeticPropertyType
static readonly "ALL_OTHER_COSMETIC_OR_ITEM_HIDING": $CosmeticPropertyType
static readonly "LOCKS_PLAYER_ROTATION": $CosmeticPropertyType


public static "values"(): ($CosmeticPropertyType)[]
public static "valueOf"(arg0: string): $CosmeticPropertyType
public static "getEntries"(): $EnumEntries<($CosmeticPropertyType)>
public "getDisplayName"(): string
public "getSingleton"(): boolean
get "entries"(): $EnumEntries<($CosmeticPropertyType)>
get "displayName"(): string
get "singleton"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticPropertyType$Type = (("localization") | ("preview_reset_time") | ("mutually_exclusive") | ("armor_handling_v2") | ("default_side") | ("variants") | ("position_range") | ("armor_handling") | ("transition_delay") | ("all_other_cosmetic_or_item_hiding") | ("cosmetic_bone_hiding") | ("requires_unlock_action") | ("interrupts_emote") | ("external_hidden_bone") | ("locks_player_rotation")) | ($CosmeticPropertyType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticPropertyType_ = $CosmeticPropertyType$Type;
}}
declare module "packages/gg/essential/mod/$Model$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Model, $Model$Type} from "packages/gg/essential/mod/$Model"

export class $Model$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($Model)>
public "byTypeOrDefault"(arg0: string): $Model
public "byType"(arg0: string): $Model
public "byVariant"(arg0: string): $Model
public "byVariantOrDefault"(arg0: string): $Model
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Model$Companion$Type = ($Model$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Model$Companion_ = $Model$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ModelFile$Cube$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ModelFile$Cube, $ModelFile$Cube$Type} from "packages/gg/essential/model/file/$ModelFile$Cube"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ModelFile$Cube$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ModelFile$Cube)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$Cube$Companion$Type = ($ModelFile$Cube$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile$Cube$Companion_ = $ModelFile$Cube$Companion$Type;
}}
declare module "packages/gg/essential/sps/$IntegratedServerManager$SuspendingMutableState" {
import {$State, $State$Type} from "packages/gg/essential/gui/elementa/state/v2/$State"
import {$Continuation, $Continuation$Type} from "packages/kotlin/coroutines/$Continuation"
import {$Observer, $Observer$Type} from "packages/gg/essential/gui/elementa/state/v2/$Observer"
import {$Unit, $Unit$Type} from "packages/kotlin/$Unit"
import {$ReferenceHolder, $ReferenceHolder$Type} from "packages/gg/essential/elementa/state/v2/$ReferenceHolder"
import {$Function0, $Function0$Type} from "packages/kotlin/jvm/functions/$Function0"
import {$Function1, $Function1$Type} from "packages/kotlin/jvm/functions/$Function1"

export interface $IntegratedServerManager$SuspendingMutableState<T> extends $State<(T)> {

 "set"(arg0: $Function1$Type<(any), (any)>, arg1: $Continuation$Type<(any)>): any
 "set"(arg0: T, arg1: $Continuation$Type<(any)>): any
 "get"(): T
 "get"(arg0: $Observer$Type): T
 "onSetValue"(arg0: $ReferenceHolder$Type, arg1: $Function1$Type<(any), ($Unit$Type)>): $Function0<($Unit)>
 "getUntracked"(): T
}

export namespace $IntegratedServerManager$SuspendingMutableState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegratedServerManager$SuspendingMutableState$Type<T> = ($IntegratedServerManager$SuspendingMutableState<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegratedServerManager$SuspendingMutableState_<T> = $IntegratedServerManager$SuspendingMutableState$Type<(T)>;
}}
declare module "packages/gg/essential/model/$Animation$Event" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Animation$Event {

}

export namespace $Animation$Event {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$Event$Type = ($Animation$Event);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation$Event_ = $Animation$Event$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeEvents$Companion" {
import {$ParticleEffectComponents$EmitterLifetimeEvents, $ParticleEffectComponents$EmitterLifetimeEvents$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeEvents"
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$EmitterLifetimeEvents$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$EmitterLifetimeEvents)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterLifetimeEvents$Companion$Type = ($ParticleEffectComponents$EmitterLifetimeEvents$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterLifetimeEvents$Companion_ = $ParticleEffectComponents$EmitterLifetimeEvents$Companion$Type;
}}
declare module "packages/gg/essential/model/light/$Light" {
import {$Light$Companion, $Light$Companion$Type} from "packages/gg/essential/model/light/$Light$Companion"

export class $Light {
static readonly "Companion": $Light$Companion


public static "getSkyLight-Mh2AYeg"(arg0: integer): short
public static "getBlockLight-Mh2AYeg"(arg0: integer): short
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "toString-impl"(arg0: integer): string
public static "equals-impl"(arg0: integer, arg1: any): boolean
public static "hashCode-impl"(arg0: integer): integer
public static "equals-impl0"(arg0: integer, arg1: integer): boolean
public static "constructor-impl"(arg0: short, arg1: short): integer
public static "constructor-impl"(arg0: integer): integer
public "getValue-pVg5ArA"(): integer
get "value-pVg5ArA"(): integer
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
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$AnimationVariant" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$CosmeticSettingType, $CosmeticSettingType$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSettingType"
import {$CosmeticSetting$AnimationVariant$Data, $CosmeticSetting$AnimationVariant$Data$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$AnimationVariant$Data"
import {$CosmeticSetting, $CosmeticSetting$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting"
import {$CosmeticSetting$AnimationVariant$Companion, $CosmeticSetting$AnimationVariant$Companion$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$AnimationVariant$Companion"

export class $CosmeticSetting$AnimationVariant extends $CosmeticSetting {
static readonly "Companion": $CosmeticSetting$AnimationVariant$Companion

constructor(arg0: string, arg1: boolean, arg2: $CosmeticSetting$AnimationVariant$Data$Type)
constructor(arg0: integer, arg1: string, arg2: boolean, arg3: $CosmeticSetting$AnimationVariant$Data$Type, arg4: $SerializationConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getId"(): string
public "getType"(): $CosmeticSettingType
public "copy"(arg0: string, arg1: boolean, arg2: $CosmeticSetting$AnimationVariant$Data$Type): $CosmeticSetting$AnimationVariant
public "getData"(): $CosmeticSetting$AnimationVariant$Data
public "component3"(): $CosmeticSetting$AnimationVariant$Data
public "component1"(): string
public "component2"(): boolean
public "getEnabled"(): boolean
get "id"(): string
get "type"(): $CosmeticSettingType
get "data"(): $CosmeticSetting$AnimationVariant$Data
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticSetting$AnimationVariant$Type = ($CosmeticSetting$AnimationVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticSetting$AnimationVariant_ = $CosmeticSetting$AnimationVariant$Type;
}}
declare module "packages/gg/essential/model/file/$SoundDefinitionsFile$Sound$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$SoundDefinitionsFile$Sound, $SoundDefinitionsFile$Sound$Type} from "packages/gg/essential/model/file/$SoundDefinitionsFile$Sound"

export class $SoundDefinitionsFile$Sound$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($SoundDefinitionsFile$Sound)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundDefinitionsFile$Sound$Companion$Type = ($SoundDefinitionsFile$Sound$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundDefinitionsFile$Sound$Companion_ = $SoundDefinitionsFile$Sound$Companion$Type;
}}
declare module "packages/gg/essential/elementa/state/v2/$ReferenceHolder" {
import {$Unit, $Unit$Type} from "packages/kotlin/$Unit"
import {$Function0, $Function0$Type} from "packages/kotlin/jvm/functions/$Function0"

export interface $ReferenceHolder {

 "holdOnto"(arg0: any): $Function0<($Unit)>

(arg0: any): $Function0<($Unit)>
}

export namespace $ReferenceHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReferenceHolder$Type = ($ReferenceHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReferenceHolder_ = $ReferenceHolder$Type;
}}
declare module "packages/gg/essential/model/molang/$MolangEvalImpl" {
import {$MolangContext, $MolangContext$Type} from "packages/gg/essential/model/molang/$MolangContext"

export interface $MolangEvalImpl {

 "eval"(arg0: $MolangContext$Type): float

(arg0: $MolangContext$Type): float
}

export namespace $MolangEvalImpl {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolangEvalImpl$Type = ($MolangEvalImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolangEvalImpl_ = $MolangEvalImpl$Type;
}}
declare module "packages/gg/essential/cosmetics/$WearablesManager$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $WearablesManager$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WearablesManager$Companion$Type = ($WearablesManager$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WearablesManager$Companion_ = $WearablesManager$Companion$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/$CosmeticCategory$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$CosmeticCategory, $CosmeticCategory$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticCategory"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $CosmeticCategory$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($CosmeticCategory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticCategory$Companion$Type = ($CosmeticCategory$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticCategory$Companion_ = $CosmeticCategory$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$Direction$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticleEffectComponents$Direction, $ParticleEffectComponents$Direction$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$Direction"

export class $ParticleEffectComponents$Direction$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$Direction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$Direction$Companion$Type = ($ParticleEffectComponents$Direction$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$Direction$Companion_ = $ParticleEffectComponents$Direction$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionParametric$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticleEffectComponents$ParticleMotionParametric, $ParticleEffectComponents$ParticleMotionParametric$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionParametric"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$ParticleMotionParametric$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$ParticleMotionParametric)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleMotionParametric$Companion$Type = ($ParticleEffectComponents$ParticleMotionParametric$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleMotionParametric$Companion_ = $ParticleEffectComponents$ParticleMotionParametric$Companion$Type;
}}
declare module "packages/gg/essential/model/backend/$RenderBackend$Texture" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderBackend$Texture {

 "getWidth"(): integer
 "getHeight"(): integer
}

export namespace $RenderBackend$Texture {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBackend$Texture$Type = ($RenderBackend$Texture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderBackend$Texture_ = $RenderBackend$Texture$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionDynamic" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$ParticleMotionDynamic$Companion, $ParticleEffectComponents$ParticleMotionDynamic$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionDynamic$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$MolangVec3, $MolangVec3$Type} from "packages/gg/essential/model/molang/$MolangVec3"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"

export class $ParticleEffectComponents$ParticleMotionDynamic {
static readonly "Companion": $ParticleEffectComponents$ParticleMotionDynamic$Companion

constructor(arg0: integer, arg1: $MolangVec3$Type, arg2: $Molang$Type, arg3: $Molang$Type, arg4: $Molang$Type, arg5: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $MolangVec3$Type, arg1: $Molang$Type, arg2: $Molang$Type, arg3: $Molang$Type, arg4: integer, arg5: $DefaultConstructorMarker$Type)
constructor(arg0: $MolangVec3$Type, arg1: $Molang$Type, arg2: $Molang$Type, arg3: $Molang$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $MolangVec3$Type, arg1: $Molang$Type, arg2: $Molang$Type, arg3: $Molang$Type): $ParticleEffectComponents$ParticleMotionDynamic
public "component4"(): $Molang
public "component3"(): $Molang
public "getLinearAcceleration"(): $MolangVec3
public "getLinearDragCoefficient"(): $Molang
public "getRotationAcceleration"(): $Molang
public "getRotationDragCoefficient"(): $Molang
public "component1"(): $MolangVec3
public "component2"(): $Molang
get "linearAcceleration"(): $MolangVec3
get "linearDragCoefficient"(): $Molang
get "rotationAcceleration"(): $Molang
get "rotationDragCoefficient"(): $Molang
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleMotionDynamic$Type = ($ParticleEffectComponents$ParticleMotionDynamic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleMotionDynamic_ = $ParticleEffectComponents$ParticleMotionDynamic$Type;
}}
declare module "packages/gg/essential/model/util/$Color" {
import {$Color$Companion, $Color$Companion$Type} from "packages/gg/essential/model/util/$Color$Companion"

export class $Color {
static readonly "Companion": $Color$Companion


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "toString-impl"(arg0: integer): string
public static "equals-impl"(arg0: integer, arg1: any): boolean
public static "hashCode-impl"(arg0: integer): integer
public static "equals-impl0"(arg0: integer, arg1: integer): boolean
public static "constructor-impl"(arg0: integer): integer
public static "constructor-impl"(arg0: byte, arg1: byte, arg2: byte, arg3: byte): integer
public "getRgba-pVg5ArA"(): integer
public static "getR-w2LRezQ"(arg0: integer): byte
public static "copy-ehsoyi0"(arg0: integer, arg1: byte, arg2: byte, arg3: byte, arg4: byte): integer
public static "getArgb-pVg5ArA"(arg0: integer): integer
public static "getG-w2LRezQ"(arg0: integer): byte
public static "getA-w2LRezQ"(arg0: integer): byte
public static "getB-w2LRezQ"(arg0: integer): byte
get "rgba-pVg5ArA"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$Type = ($Color);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color_ = $Color$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/$CosmeticAssets$SkinMask" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$EssentialAsset, $EssentialAsset$Type} from "packages/gg/essential/mod/$EssentialAsset"
import {$CosmeticAssets$SkinMask$Companion, $CosmeticAssets$SkinMask$Companion$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticAssets$SkinMask$Companion"

export class $CosmeticAssets$SkinMask {
static readonly "Companion": $CosmeticAssets$SkinMask$Companion

constructor(arg0: $EssentialAsset$Type, arg1: $EssentialAsset$Type)
constructor(arg0: integer, arg1: $EssentialAsset$Type, arg2: $EssentialAsset$Type, arg3: $SerializationConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $EssentialAsset$Type, arg1: $EssentialAsset$Type): $CosmeticAssets$SkinMask
public "getAlex"(): $EssentialAsset
public "getSteve"(): $EssentialAsset
public "component1"(): $EssentialAsset
public "component2"(): $EssentialAsset
get "alex"(): $EssentialAsset
get "steve"(): $EssentialAsset
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticAssets$SkinMask$Type = ($CosmeticAssets$SkinMask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticAssets$SkinMask_ = $CosmeticAssets$SkinMask$Type;
}}
declare module "packages/gg/essential/model/$CubeUvData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CubeUvData {

constructor(arg0: (float)[], arg1: (float)[], arg2: (float)[], arg3: (float)[], arg4: (float)[], arg5: (float)[])

public "getUp"(): (float)[]
public "getDown"(): (float)[]
public "getNorth"(): (float)[]
public "getWest"(): (float)[]
public "getEast"(): (float)[]
public "getSouth"(): (float)[]
get "up"(): (float)[]
get "down"(): (float)[]
get "north"(): (float)[]
get "west"(): (float)[]
get "east"(): (float)[]
get "south"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CubeUvData$Type = ($CubeUvData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CubeUvData_ = $CubeUvData$Type;
}}
declare module "packages/gg/essential/mixins/transformers/feature/gamerules/$MixinGameRulesAccessor" {
import {$GameRules$Value, $GameRules$Value$Type} from "packages/net/minecraft/world/level/$GameRules$Value"
import {$GameRules$Key, $GameRules$Key$Type} from "packages/net/minecraft/world/level/$GameRules$Key"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $MixinGameRulesAccessor {

 "getRules"(): $Map<($GameRules$Key<(any)>), ($GameRules$Value<(any)>)>

(): $Map<($GameRules$Key<(any)>), ($GameRules$Value<(any)>)>
}

export namespace $MixinGameRulesAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinGameRulesAccessor$Type = ($MixinGameRulesAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinGameRulesAccessor_ = $MixinGameRulesAccessor$Type;
}}
declare module "packages/gg/essential/model/file/$ModelFile$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ModelFile, $ModelFile$Type} from "packages/gg/essential/model/file/$ModelFile"

export class $ModelFile$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ModelFile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$Companion$Type = ($ModelFile$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile$Companion_ = $ModelFile$Companion$Type;
}}
declare module "packages/gg/essential/network/cosmetics/$Cosmetic$Diagnostic$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$Pair, $Pair$Type} from "packages/kotlin/$Pair"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Model, $Model$Type} from "packages/gg/essential/mod/$Model"
import {$Cosmetic$Diagnostic, $Cosmetic$Diagnostic$Type} from "packages/gg/essential/network/cosmetics/$Cosmetic$Diagnostic"

export class $Cosmetic$Diagnostic$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "error"(arg0: string, arg1: string, arg2: string, arg3: $Pair$Type<(integer), (integer)>, arg4: string, arg5: $Model$Type): $Cosmetic$Diagnostic
public "warning"(arg0: string, arg1: string, arg2: string, arg3: $Pair$Type<(integer), (integer)>, arg4: string, arg5: $Model$Type): $Cosmetic$Diagnostic
public "fatal"(arg0: string, arg1: string, arg2: string, arg3: $Pair$Type<(integer), (integer)>, arg4: string, arg5: $Model$Type): $Cosmetic$Diagnostic
public "serializer"(): $KSerializer<($Cosmetic$Diagnostic)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cosmetic$Diagnostic$Companion$Type = ($Cosmetic$Diagnostic$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cosmetic$Diagnostic$Companion_ = $Cosmetic$Diagnostic$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$SoundDefinitionsFile" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$SoundDefinitionsFile$Companion, $SoundDefinitionsFile$Companion$Type} from "packages/gg/essential/model/file/$SoundDefinitionsFile$Companion"
import {$SoundDefinitionsFile$Definition, $SoundDefinitionsFile$Definition$Type} from "packages/gg/essential/model/file/$SoundDefinitionsFile$Definition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SoundDefinitionsFile {
static readonly "Companion": $SoundDefinitionsFile$Companion

constructor(arg0: $Map$Type<(string), ($SoundDefinitionsFile$Definition$Type)>)
constructor(arg0: integer, arg1: $Map$Type<(any), (any)>, arg2: $SerializationConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Map$Type<(string), ($SoundDefinitionsFile$Definition$Type)>): $SoundDefinitionsFile
public "component1"(): $Map<(string), ($SoundDefinitionsFile$Definition)>
public "getDefinitions"(): $Map<(string), ($SoundDefinitionsFile$Definition)>
get "definitions"(): $Map<(string), ($SoundDefinitionsFile$Definition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundDefinitionsFile$Type = ($SoundDefinitionsFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundDefinitionsFile_ = $SoundDefinitionsFile$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Curve$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ParticlesFile$Curve$Type$Companion, $ParticlesFile$Curve$Type$Companion$Type} from "packages/gg/essential/model/file/$ParticlesFile$Curve$Type$Companion"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $ParticlesFile$Curve$Type extends $Enum<($ParticlesFile$Curve$Type)> {
static readonly "Companion": $ParticlesFile$Curve$Type$Companion
static readonly "Linear": $ParticlesFile$Curve$Type
static readonly "Bezier": $ParticlesFile$Curve$Type
static readonly "CatmullRom": $ParticlesFile$Curve$Type
static readonly "BezierChain": $ParticlesFile$Curve$Type


public static "values"(): ($ParticlesFile$Curve$Type)[]
public static "valueOf"(arg0: string): $ParticlesFile$Curve$Type
public static "getEntries"(): $EnumEntries<($ParticlesFile$Curve$Type)>
get "entries"(): $EnumEntries<($ParticlesFile$Curve$Type)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Curve$Type$Type = (("catmullrom") | ("bezierchain") | ("linear") | ("bezier")) | ($ParticlesFile$Curve$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Curve$Type_ = $ParticlesFile$Curve$Type$Type;
}}
declare module "packages/gg/essential/mixins/transformers/server/$GameRulesBooleanValueAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRulesBooleanValueAccessor {

}

export namespace $GameRulesBooleanValueAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRulesBooleanValueAccessor$Type = ($GameRulesBooleanValueAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRulesBooleanValueAccessor_ = $GameRulesBooleanValueAccessor$Type;
}}
declare module "packages/gg/essential/gui/elementa/state/v2/collections/$MutableTrackedList" {
import {$Sequence, $Sequence$Type} from "packages/kotlin/sequences/$Sequence"
import {$TrackedList, $TrackedList$Type} from "packages/gg/essential/gui/elementa/state/v2/collections/$TrackedList"
import {$TrackedList$Change, $TrackedList$Change$Type} from "packages/gg/essential/gui/elementa/state/v2/collections/$TrackedList$Change"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$AbstractList, $AbstractList$Type} from "packages/kotlin/collections/$AbstractList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$AbstractList$Companion, $AbstractList$Companion$Type} from "packages/kotlin/collections/$AbstractList$Companion"

export class $MutableTrackedList<E> extends $AbstractList<(E)> implements $TrackedList<(E)> {
static readonly "Companion": $AbstractList$Companion

constructor(arg0: $List$Type<(any)>, arg1: integer, arg2: $DefaultConstructorMarker$Type)
constructor(arg0: $List$Type<(E)>)

public "add"(arg0: integer, arg1: E): $MutableTrackedList<(E)>
public "add"(arg0: E): $MutableTrackedList<(E)>
public "remove"(arg0: E): $MutableTrackedList<(E)>
public "get"(arg0: integer): E
public "clear"(): $MutableTrackedList<(E)>
public "addAll"(arg0: $Collection$Type<(any)>): $MutableTrackedList<(E)>
public "addAll"(arg0: integer, arg1: $Collection$Type<(any)>): $MutableTrackedList<(E)>
public "set"(arg0: integer, arg1: E): $MutableTrackedList<(E)>
public "getSize"(): integer
public "removeAll"(arg0: $Collection$Type<(any)>): $MutableTrackedList<(E)>
public "retainAll"(arg0: $Collection$Type<(any)>): $MutableTrackedList<(E)>
public "applyChanges"(arg0: $List$Type<(any)>): $MutableTrackedList<(E)>
public "getChangesSince"(arg0: $TrackedList$Type<(any)>): $Sequence<($TrackedList$Change<(E)>)>
public "getChangesSince"(arg0: $MutableTrackedList$Type<(E)>): $Sequence<($TrackedList$Change<(E)>)>
public "removeAt"(arg0: integer): $MutableTrackedList<(E)>
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "contains"(arg0: any): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableTrackedList$Type<E> = ($MutableTrackedList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableTrackedList_<E> = $MutableTrackedList$Type<(E)>;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapeDisc" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticleEffectComponents$EmitterShapeDisc$Companion, $ParticleEffectComponents$EmitterShapeDisc$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapeDisc$Companion"
import {$MolangVec3, $MolangVec3$Type} from "packages/gg/essential/model/molang/$MolangVec3"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"
import {$ParticleEffectComponents$Direction, $ParticleEffectComponents$Direction$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$Direction"

export class $ParticleEffectComponents$EmitterShapeDisc {
static readonly "Companion": $ParticleEffectComponents$EmitterShapeDisc$Companion

constructor(arg0: integer, arg1: $MolangVec3$Type, arg2: $MolangVec3$Type, arg3: $Molang$Type, arg4: boolean, arg5: $ParticleEffectComponents$Direction$Type, arg6: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $MolangVec3$Type, arg1: $MolangVec3$Type, arg2: $Molang$Type, arg3: boolean, arg4: $ParticleEffectComponents$Direction$Type, arg5: integer, arg6: $DefaultConstructorMarker$Type)
constructor(arg0: $MolangVec3$Type, arg1: $MolangVec3$Type, arg2: $Molang$Type, arg3: boolean, arg4: $ParticleEffectComponents$Direction$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $MolangVec3$Type, arg1: $MolangVec3$Type, arg2: $Molang$Type, arg3: boolean, arg4: $ParticleEffectComponents$Direction$Type): $ParticleEffectComponents$EmitterShapeDisc
public "getOffset"(): $MolangVec3
public "component4"(): boolean
public "component3"(): $Molang
public "component5"(): $ParticleEffectComponents$Direction
public "getRadius"(): $Molang
public "getDirection"(): $ParticleEffectComponents$Direction
public "component1"(): $MolangVec3
public "component2"(): $MolangVec3
public "getSurfaceOnly"(): boolean
public "getPlaneNormal"(): $MolangVec3
get "offset"(): $MolangVec3
get "radius"(): $Molang
get "direction"(): $ParticleEffectComponents$Direction
get "surfaceOnly"(): boolean
get "planeNormal"(): $MolangVec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterShapeDisc$Type = ($ParticleEffectComponents$EmitterShapeDisc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterShapeDisc_ = $ParticleEffectComponents$EmitterShapeDisc$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterRateSteady" {
import {$ParticleEffectComponents$EmitterRateSteady$Companion, $ParticleEffectComponents$EmitterRateSteady$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterRateSteady$Companion"
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"

export class $ParticleEffectComponents$EmitterRateSteady {
static readonly "Companion": $ParticleEffectComponents$EmitterRateSteady$Companion

constructor(arg0: integer, arg1: $Molang$Type, arg2: $Molang$Type, arg3: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $Molang$Type, arg1: $Molang$Type, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: $Molang$Type, arg1: $Molang$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Molang$Type, arg1: $Molang$Type): $ParticleEffectComponents$EmitterRateSteady
public "component1"(): $Molang
public "component2"(): $Molang
public "getMaxParticles"(): $Molang
public "getSpawnRate"(): $Molang
get "maxParticles"(): $Molang
get "spawnRate"(): $Molang
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterRateSteady$Type = ($ParticleEffectComponents$EmitterRateSteady);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterRateSteady_ = $ParticleEffectComponents$EmitterRateSteady$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Material" {
import {$ParticlesFile$Material$Companion, $ParticlesFile$Material$Companion$Type} from "packages/gg/essential/model/file/$ParticlesFile$Material$Companion"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $ParticlesFile$Material extends $Enum<($ParticlesFile$Material)> {
static readonly "Companion": $ParticlesFile$Material$Companion
static readonly "Add": $ParticlesFile$Material
static readonly "Cutout": $ParticlesFile$Material
static readonly "Blend": $ParticlesFile$Material


public static "values"(): ($ParticlesFile$Material)[]
public static "valueOf"(arg0: string): $ParticlesFile$Material
public static "getEntries"(): $EnumEntries<($ParticlesFile$Material)>
public "getBackfaceCulling"(): boolean
public "getNeedsSorting"(): boolean
get "entries"(): $EnumEntries<($ParticlesFile$Material)>
get "backfaceCulling"(): boolean
get "needsSorting"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Material$Type = (("add") | ("blend") | ("cutout")) | ($ParticlesFile$Material);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Material_ = $ParticlesFile$Material$Type;
}}
declare module "packages/gg/essential/model/$RenderMetadata" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$RenderBackend$Texture, $RenderBackend$Texture$Type} from "packages/gg/essential/model/backend/$RenderBackend$Texture"
import {$Vector3, $Vector3$Type} from "packages/gg/essential/model/$Vector3"
import {$Side, $Side$Type} from "packages/gg/essential/model/$Side"
import {$PlayerPose, $PlayerPose$Type} from "packages/gg/essential/model/backend/$PlayerPose"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$EnumPart, $EnumPart$Type} from "packages/gg/essential/model/$EnumPart"

export class $RenderMetadata {

constructor(arg0: $PlayerPose$Type, arg1: $RenderBackend$Texture$Type, arg2: integer, arg3: $Side$Type, arg4: $Set$Type<(any)>, arg5: $Vector3$Type, arg6: $Set$Type<(any)>, arg7: $DefaultConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "component4"(): $Side
public "component5"(): $Set<(string)>
public "component3-cWgJFAk"(): integer
public "copy-6Qb1oLs"(arg0: $PlayerPose$Type, arg1: $RenderBackend$Texture$Type, arg2: integer, arg3: $Side$Type, arg4: $Set$Type<(string)>, arg5: $Vector3$Type, arg6: $Set$Type<(any)>): $RenderMetadata
public "getSkin"(): $RenderBackend$Texture
public "getSide"(): $Side
public "getParts"(): $Set<($EnumPart)>
public "getPose"(): $PlayerPose
public "component1"(): $PlayerPose
public "component2"(): $RenderBackend$Texture
public "component7"(): $Set<($EnumPart)>
public "component6"(): $Vector3
public "getHiddenBones"(): $Set<(string)>
public "getLight-cWgJFAk"(): integer
public "getPositionAdjustment"(): $Vector3
get "skin"(): $RenderBackend$Texture
get "side"(): $Side
get "parts"(): $Set<($EnumPart)>
get "pose"(): $PlayerPose
get "hiddenBones"(): $Set<(string)>
get "light-cWgJFAk"(): integer
get "positionAdjustment"(): $Vector3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderMetadata$Type = ($RenderMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderMetadata_ = $RenderMetadata$Type;
}}
declare module "packages/gg/essential/cosmetics/$CosmeticsState$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $CosmeticsState$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticsState$Companion$Type = ($CosmeticsState$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticsState$Companion_ = $CosmeticsState$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Description" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticlesFile$BasicRenderParameters, $ParticlesFile$BasicRenderParameters$Type} from "packages/gg/essential/model/file/$ParticlesFile$BasicRenderParameters"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticlesFile$Description$Companion, $ParticlesFile$Description$Companion$Type} from "packages/gg/essential/model/file/$ParticlesFile$Description$Companion"

export class $ParticlesFile$Description {
static readonly "Companion": $ParticlesFile$Description$Companion

constructor(arg0: integer, arg1: string, arg2: $ParticlesFile$BasicRenderParameters$Type, arg3: $SerializationConstructorMarker$Type)
constructor(arg0: string, arg1: $ParticlesFile$BasicRenderParameters$Type, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: string, arg1: $ParticlesFile$BasicRenderParameters$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: $ParticlesFile$BasicRenderParameters$Type): $ParticlesFile$Description
public "getIdentifier"(): string
public "component1"(): string
public "component2"(): $ParticlesFile$BasicRenderParameters
public "getBasicRenderParameters"(): $ParticlesFile$BasicRenderParameters
get "identifier"(): string
get "basicRenderParameters"(): $ParticlesFile$BasicRenderParameters
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Description$Type = ($ParticlesFile$Description);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Description_ = $ParticlesFile$Description$Type;
}}
declare module "packages/gg/essential/mixins/ext/network/$NetworkSystemExt" {
import {$SocketAddress, $SocketAddress$Type} from "packages/java/net/$SocketAddress"

export interface $NetworkSystemExt {

 "essential$getIceEndpoint"(): $SocketAddress
 "essential$removeLanEndpoint"(): void
}

export namespace $NetworkSystemExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkSystemExt$Type = ($NetworkSystemExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkSystemExt_ = $NetworkSystemExt$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$ParticleEffect" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticlesFile$Curve, $ParticlesFile$Curve$Type} from "packages/gg/essential/model/file/$ParticlesFile$Curve"
import {$ParticlesFile$Description, $ParticlesFile$Description$Type} from "packages/gg/essential/model/file/$ParticlesFile$Description"
import {$ParticlesFile$Event, $ParticlesFile$Event$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event"
import {$ParticlesFile$ParticleEffect$Companion, $ParticlesFile$ParticleEffect$Companion$Type} from "packages/gg/essential/model/file/$ParticlesFile$ParticleEffect$Companion"
import {$ParticleEffectComponents, $ParticleEffectComponents$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ParticlesFile$ParticleEffect {
static readonly "Companion": $ParticlesFile$ParticleEffect$Companion

constructor(arg0: integer, arg1: $ParticlesFile$Description$Type, arg2: $Map$Type<(any), (any)>, arg3: $Map$Type<(any), (any)>, arg4: $ParticleEffectComponents$Type, arg5: $SerializationConstructorMarker$Type)
constructor(arg0: $ParticlesFile$Description$Type, arg1: $Map$Type<(any), (any)>, arg2: $Map$Type<(any), (any)>, arg3: $ParticleEffectComponents$Type, arg4: integer, arg5: $DefaultConstructorMarker$Type)
constructor(arg0: $ParticlesFile$Description$Type, arg1: $Map$Type<(string), ($ParticlesFile$Curve$Type)>, arg2: $Map$Type<(string), ($ParticlesFile$Event$Type)>, arg3: $ParticleEffectComponents$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $ParticlesFile$Description$Type, arg1: $Map$Type<(string), ($ParticlesFile$Curve$Type)>, arg2: $Map$Type<(string), ($ParticlesFile$Event$Type)>, arg3: $ParticleEffectComponents$Type): $ParticlesFile$ParticleEffect
public "getDescription"(): $ParticlesFile$Description
public "component4"(): $ParticleEffectComponents
public "component3"(): $Map<(string), ($ParticlesFile$Event)>
public "getEvents"(): $Map<(string), ($ParticlesFile$Event)>
public "getComponents"(): $ParticleEffectComponents
public "component1"(): $ParticlesFile$Description
public "component2"(): $Map<(string), ($ParticlesFile$Curve)>
public "getCurves"(): $Map<(string), ($ParticlesFile$Curve)>
get "description"(): $ParticlesFile$Description
get "events"(): $Map<(string), ($ParticlesFile$Event)>
get "components"(): $ParticleEffectComponents
get "curves"(): $Map<(string), ($ParticlesFile$Curve)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$ParticleEffect$Type = ($ParticlesFile$ParticleEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$ParticleEffect_ = $ParticlesFile$ParticleEffect$Type;
}}
declare module "packages/gg/essential/mixins/transformers/entity/player/$EntityPlayerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityPlayerAccessor {

}

export namespace $EntityPlayerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPlayerAccessor$Type = ($EntityPlayerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPlayerAccessor_ = $EntityPlayerAccessor$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceTinting$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticleEffectComponents$ParticleAppearanceTinting, $ParticleEffectComponents$ParticleAppearanceTinting$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceTinting"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$ParticleAppearanceTinting$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$ParticleAppearanceTinting)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleAppearanceTinting$Companion$Type = ($ParticleEffectComponents$ParticleAppearanceTinting$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleAppearanceTinting$Companion_ = $ParticleEffectComponents$ParticleAppearanceTinting$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$BasicRenderParameters" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticlesFile$Material, $ParticlesFile$Material$Type} from "packages/gg/essential/model/file/$ParticlesFile$Material"
import {$ParticlesFile$BasicRenderParameters$Companion, $ParticlesFile$BasicRenderParameters$Companion$Type} from "packages/gg/essential/model/file/$ParticlesFile$BasicRenderParameters$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticlesFile$BasicRenderParameters {
static readonly "Companion": $ParticlesFile$BasicRenderParameters$Companion

constructor(arg0: integer, arg1: $ParticlesFile$Material$Type, arg2: string, arg3: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $ParticlesFile$Material$Type, arg1: string, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: $ParticlesFile$Material$Type, arg1: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $ParticlesFile$Material$Type, arg1: string): $ParticlesFile$BasicRenderParameters
public "getMaterial"(): $ParticlesFile$Material
public "getTexture"(): string
public "component1"(): $ParticlesFile$Material
public "component2"(): string
get "material"(): $ParticlesFile$Material
get "texture"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$BasicRenderParameters$Type = ($ParticlesFile$BasicRenderParameters);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$BasicRenderParameters_ = $ParticlesFile$BasicRenderParameters$Type;
}}
declare module "packages/gg/essential/network/cosmetics/$CosmeticStoreInfo" {
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CosmeticStoreInfo {

constructor(arg0: integer, arg1: $Set$Type<(string)>, arg2: $Instant$Type, arg3: $Instant$Type, arg4: $Instant$Type, arg5: $Map$Type<(string), (integer)>, arg6: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: integer, arg1: $Set$Type<(string)>, arg2: $Instant$Type, arg3: $Instant$Type, arg4: $Instant$Type, arg5: $Map$Type<(string), (integer)>, arg6: integer): $CosmeticStoreInfo
public "component4"(): $Instant
public "component3"(): $Instant
public "component5"(): $Instant
public "getTags"(): $Set<(string)>
public "component1"(): integer
public "component2"(): $Set<(string)>
public "getAvailableAfter"(): $Instant
public "getAvailableUntil"(): $Instant
public "getShowTimerAfter"(): $Instant
public "getPrice"(): integer
public "getCategories"(): $Map<(string), (integer)>
public "component7"(): integer
public "component6"(): $Map<(string), (integer)>
public "getDefaultSortWeight"(): integer
get "tags"(): $Set<(string)>
get "availableAfter"(): $Instant
get "availableUntil"(): $Instant
get "showTimerAfter"(): $Instant
get "price"(): integer
get "categories"(): $Map<(string), (integer)>
get "defaultSortWeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticStoreInfo$Type = ($CosmeticStoreInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticStoreInfo_ = $CosmeticStoreInfo$Type;
}}
declare module "packages/gg/essential/mixins/transformers/server/integrated/$LanConnectionsAccessor" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $LanConnectionsAccessor {

 "getPlayerEntityList"(): $List<($ServerPlayer)>

(): $List<($ServerPlayer)>
}

export namespace $LanConnectionsAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LanConnectionsAccessor$Type = ($LanConnectionsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LanConnectionsAccessor_ = $LanConnectionsAccessor$Type;
}}
declare module "packages/gg/essential/cosmetics/$ArmorSlots" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ArmorSlots {

constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: integer, arg6: $DefaultConstructorMarker$Type)
constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean)
constructor(arg0: byte)

public "get"(arg0: integer): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: byte): $ArmorSlots
public "getSlots"(): byte
public "component1"(): byte
get "slots"(): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorSlots$Type = ($ArmorSlots);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorSlots_ = $ArmorSlots$Type;
}}
declare module "packages/gg/essential/util/image/mask/$Mask" {
import {$Mask$Companion, $Mask$Companion$Type} from "packages/gg/essential/util/image/mask/$Mask$Companion"
import {$MutableMask, $MutableMask$Type} from "packages/gg/essential/util/image/mask/$MutableMask"

export interface $Mask {

 "get"(arg0: integer, arg1: integer): boolean
 "count"(): integer
 "getWidth"(): integer
 "getHeight"(): integer
 "mutableCopy"(): $MutableMask
}

export namespace $Mask {
const Companion: $Mask$Companion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mask$Type = ($Mask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mask_ = $Mask$Type;
}}
declare module "packages/gg/essential/mixins/transformers/client/gui/$GuiScreenAccessor" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $GuiScreenAccessor {

 "essential$addDrawableChild"<T extends ($GuiEventListener) & ($Renderable) & ($NarratableEntry)>(arg0: T): T
 "essential$getChildren"(): $List<($GuiEventListener)>
 "getDrawables"(): $List<($Renderable)>
 "getSelectables"(): $List<($NarratableEntry)>
}

export namespace $GuiScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiScreenAccessor$Type = ($GuiScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiScreenAccessor_ = $GuiScreenAccessor$Type;
}}
declare module "packages/gg/essential/model/$Keyframes$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$Keyframes, $Keyframes$Type} from "packages/gg/essential/model/$Keyframes"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $Keyframes$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($Keyframes)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Keyframes$Companion$Type = ($Keyframes$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Keyframes$Companion_ = $Keyframes$Companion$Type;
}}
declare module "packages/gg/essential/universal/$UMatrixStack" {
import {$UMatrixStack$Companion, $UMatrixStack$Companion$Type} from "packages/gg/essential/universal/$UMatrixStack$Companion"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$UMatrixStack$Entry, $UMatrixStack$Entry$Type} from "packages/gg/essential/universal/$UMatrixStack$Entry"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$Function0, $Function0$Type} from "packages/kotlin/jvm/functions/$Function0"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $UMatrixStack {
static readonly "Companion": $UMatrixStack$Companion
static readonly "UNIT": $UMatrixStack

constructor(mc: $PoseStack$Pose$Type)
constructor(mc: $PoseStack$Type)
constructor()

public "multiply"(quaternion: $Quaternionf$Type): void
public "scale"(x: float, y: float, z: float): void
public "scale"(x: double, y: double, z: double): void
public "isEmpty"(): boolean
public "peek"(): $UMatrixStack$Entry
public "rotate"(angle: float, x: float, y: float, z: float): void
public "rotate"(angle: float, x: float, y: float, z: float, degrees: boolean): void
public "push"(): void
public "pop"(): void
public "runReplacingGlobalState"<R>(block: $Function0$Type<(any)>): R
public "runReplacingGlobalState"(block: $Runnable$Type): void
public "runWithGlobalState"<R>(block: $Function0$Type<(any)>): R
public "runWithGlobalState"(block: $Runnable$Type): void
public "fork"(): $UMatrixStack
public "translate"(x: double, y: double, z: double): void
public "translate"(x: float, y: float, z: float): void
public "applyToGlobalState"(): void
public "replaceGlobalState"(): void
public "toMC"(): $PoseStack
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UMatrixStack$Type = ($UMatrixStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UMatrixStack_ = $UMatrixStack$Type;
}}
declare module "packages/gg/essential/model/$Animation" {
import {$Animation$Companion, $Animation$Companion$Type} from "packages/gg/essential/model/$Animation$Companion"
import {$Animation$Event, $Animation$Event$Type} from "packages/gg/essential/model/$Animation$Event"
import {$Channels, $Channels$Type} from "packages/gg/essential/model/$Channels"
import {$Bones, $Bones$Type} from "packages/gg/essential/model/$Bones"
import {$AnimationFile$Animation, $AnimationFile$Animation$Type} from "packages/gg/essential/model/file/$AnimationFile$Animation"
import {$TreeMap, $TreeMap$Type} from "packages/gg/essential/model/util/$TreeMap"
import {$ParticleEffectWithReferencedEffects, $ParticleEffectWithReferencedEffects$Type} from "packages/gg/essential/model/$ParticleEffectWithReferencedEffects"
import {$SoundEffect, $SoundEffect$Type} from "packages/gg/essential/model/$SoundEffect"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AnimationFile$Loop, $AnimationFile$Loop$Type} from "packages/gg/essential/model/file/$AnimationFile$Loop"
import {$EnumPart, $EnumPart$Type} from "packages/gg/essential/model/$EnumPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Animation {
static readonly "Companion": $Animation$Companion

constructor(arg0: string, arg1: $AnimationFile$Animation$Type, arg2: $Bones$Type, arg3: $Map$Type<(string), ($ParticleEffectWithReferencedEffects$Type)>, arg4: $Map$Type<(string), ($SoundEffect$Type)>)
constructor(arg0: string, arg1: float, arg2: $AnimationFile$Loop$Type, arg3: $Map$Type<(string), ($Channels$Type)>, arg4: $TreeMap$Type<(float), ($List$Type<($Animation$Event$Type)>)>, arg5: $Set$Type<(any)>)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: float, arg2: $AnimationFile$Loop$Type, arg3: $Map$Type<(string), ($Channels$Type)>, arg4: $TreeMap$Type<(float), ($List$Type<($Animation$Event$Type)>)>, arg5: $Set$Type<(any)>): $Animation
public "component4"(): $Map<(string), ($Channels)>
public "component3"(): $AnimationFile$Loop
public "component5"(): $TreeMap<(float), ($List<($Animation$Event)>)>
public "component1"(): string
public "component2"(): float
public "component6"(): $Set<($EnumPart)>
public "getBones"(): $Map<(string), ($Channels)>
public "getAnimationLength"(): float
public "getAffectsPose"(): boolean
public "getEffects"(): $TreeMap<(float), ($List<($Animation$Event)>)>
public "getAffectsPoseParts"(): $Set<($EnumPart)>
public "getLoop"(): $AnimationFile$Loop
get "name"(): string
get "bones"(): $Map<(string), ($Channels)>
get "animationLength"(): float
get "affectsPose"(): boolean
get "effects"(): $TreeMap<(float), ($List<($Animation$Event)>)>
get "affectsPoseParts"(): $Set<($EnumPart)>
get "loop"(): $AnimationFile$Loop
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$Type = ($Animation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation_ = $Animation$Type;
}}
declare module "packages/gg/essential/mod/$Skin" {
import {$Skin$Companion, $Skin$Companion$Type} from "packages/gg/essential/mod/$Skin$Companion"
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$Model, $Model$Type} from "packages/gg/essential/mod/$Model"

export class $Skin {
static readonly "Companion": $Skin$Companion
static readonly "SKIN_URL": string

constructor(arg0: string, arg1: $Model$Type)
constructor(arg0: integer, arg1: string, arg2: $Model$Type, arg3: string, arg4: $SerializationConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: $Model$Type): $Skin
public "getUrl"(): string
public "component1"(): string
public "component2"(): $Model
public static "hashFromUrl"(arg0: string): string
public static "fromUrl"(arg0: string, arg1: $Model$Type): $Skin
public "getModel"(): $Model
public "getHash"(): string
get "url"(): string
get "model"(): $Model
get "hash"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Skin$Type = ($Skin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Skin_ = $Skin$Type;
}}
declare module "packages/gg/essential/gui/elementa/state/v2/collections/$TrackedList$Change$Companion" {
import {$TrackedList$Change, $TrackedList$Change$Type} from "packages/gg/essential/gui/elementa/state/v2/collections/$TrackedList$Change"
import {$List, $List$Type} from "packages/java/util/$List"

export class $TrackedList$Change$Companion {


public "estimate"<E>(arg0: $List$Type<(any)>, arg1: $List$Type<(any)>): $List<($TrackedList$Change<(E)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedList$Change$Companion$Type = ($TrackedList$Change$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedList$Change$Companion_ = $TrackedList$Change$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Event$Sound$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticlesFile$Event$Sound, $ParticlesFile$Event$Sound$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event$Sound"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticlesFile$Event$Sound$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticlesFile$Event$Sound)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Event$Sound$Companion$Type = ($ParticlesFile$Event$Sound$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Event$Sound$Companion_ = $ParticlesFile$Event$Sound$Companion$Type;
}}
declare module "packages/gg/essential/model/molang/$Molang$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"

export class $Molang$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "literal"(arg0: float): $Molang
public "serializer"(): $KSerializer<($Molang)>
public "getONE"(): $Molang
public "getZERO"(): $Molang
get "oNE"(): $Molang
get "zERO"(): $Molang
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Molang$Companion$Type = ($Molang$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Molang$Companion_ = $Molang$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionCollision" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$ParticleMotionCollision$Companion, $ParticleEffectComponents$ParticleMotionCollision$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionCollision$Companion"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ParticleEffectComponents$ParticleMotionCollision$Event, $ParticleEffectComponents$ParticleMotionCollision$Event$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleMotionCollision$Event"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"

export class $ParticleEffectComponents$ParticleMotionCollision {
static readonly "Companion": $ParticleEffectComponents$ParticleMotionCollision$Companion

constructor(arg0: integer, arg1: $Molang$Type, arg2: float, arg3: float, arg4: float, arg5: boolean, arg6: $List$Type<(any)>, arg7: $SerializationConstructorMarker$Type)
constructor(arg0: $Molang$Type, arg1: float, arg2: float, arg3: float, arg4: boolean, arg5: $List$Type<(any)>, arg6: integer, arg7: $DefaultConstructorMarker$Type)
constructor(arg0: $Molang$Type, arg1: float, arg2: float, arg3: float, arg4: boolean, arg5: $List$Type<($ParticleEffectComponents$ParticleMotionCollision$Event$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Molang$Type, arg1: float, arg2: float, arg3: float, arg4: boolean, arg5: $List$Type<($ParticleEffectComponents$ParticleMotionCollision$Event$Type)>): $ParticleEffectComponents$ParticleMotionCollision
public "component4"(): float
public "component3"(): float
public "component5"(): boolean
public "getEvents"(): $List<($ParticleEffectComponents$ParticleMotionCollision$Event)>
public "component1"(): $Molang
public "component2"(): float
public "getEnabled"(): $Molang
public "component6"(): $List<($ParticleEffectComponents$ParticleMotionCollision$Event)>
public "getCollisionDrag"(): float
public "getExpireOnContact"(): boolean
public "getCollisionRadius"(): float
public "getCoefficientOfRestitution"(): float
get "events"(): $List<($ParticleEffectComponents$ParticleMotionCollision$Event)>
get "enabled"(): $Molang
get "collisionDrag"(): float
get "expireOnContact"(): boolean
get "collisionRadius"(): float
get "coefficientOfRestitution"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleMotionCollision$Type = ($ParticleEffectComponents$ParticleMotionCollision);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleMotionCollision_ = $ParticleEffectComponents$ParticleMotionCollision$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/$CosmeticBundle$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$CosmeticBundle, $CosmeticBundle$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticBundle"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $CosmeticBundle$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($CosmeticBundle)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticBundle$Companion$Type = ($CosmeticBundle$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticBundle$Companion_ = $CosmeticBundle$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticlesFile, $ParticlesFile$Type} from "packages/gg/essential/model/file/$ParticlesFile"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticlesFile$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticlesFile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Companion$Type = ($ParticlesFile$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Companion_ = $ParticlesFile$Companion$Type;
}}
declare module "packages/gg/essential/model/$Animation$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $Animation$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$Companion$Type = ($Animation$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation$Companion_ = $Animation$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$AnimationFile$Loop" {
import {$AnimationFile$Loop$Companion, $AnimationFile$Loop$Companion$Type} from "packages/gg/essential/model/file/$AnimationFile$Loop$Companion"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $AnimationFile$Loop extends $Enum<($AnimationFile$Loop)> {
static readonly "Companion": $AnimationFile$Loop$Companion
static readonly "False": $AnimationFile$Loop
static readonly "True": $AnimationFile$Loop
static readonly "HoldOnLastFrame": $AnimationFile$Loop


public static "values"(): ($AnimationFile$Loop)[]
public static "valueOf"(arg0: string): $AnimationFile$Loop
public static "getEntries"(): $EnumEntries<($AnimationFile$Loop)>
get "entries"(): $EnumEntries<($AnimationFile$Loop)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationFile$Loop$Type = (("false") | ("true") | ("holdonlastframe")) | ($AnimationFile$Loop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationFile$Loop_ = $AnimationFile$Loop$Type;
}}
declare module "packages/gg/essential/mixins/transformers/network/$NetworkManagerAccessor" {
import {$Channel, $Channel$Type} from "packages/io/netty/channel/$Channel"

export interface $NetworkManagerAccessor {

 "getChannel"(): $Channel

(): $Channel
}

export namespace $NetworkManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkManagerAccessor$Type = ($NetworkManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkManagerAccessor_ = $NetworkManagerAccessor$Type;
}}
declare module "packages/gg/essential/gui/elementa/state/v2/$Observer" {
import {$State, $State$Type} from "packages/gg/essential/gui/elementa/state/v2/$State"
import {$ObserverImpl, $ObserverImpl$Type} from "packages/gg/essential/gui/elementa/state/v2/$ObserverImpl"

export interface $Observer {

 "invoke"<T>(arg0: $State$Type<(any)>): T
 "getObserverImpl"(): $ObserverImpl

(arg0: $State$Type<(any)>): T
}

export namespace $Observer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Observer$Type = ($Observer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Observer_ = $Observer$Type;
}}
declare module "packages/gg/essential/model/$PlayerMolangQuery$RealYawAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerMolangQuery$RealYawAccess {

 "essential$getRealPrevRenderYaw"(): float
 "essential$getRealRenderYaw"(): float
}

export namespace $PlayerMolangQuery$RealYawAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerMolangQuery$RealYawAccess$Type = ($PlayerMolangQuery$RealYawAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerMolangQuery$RealYawAccess_ = $PlayerMolangQuery$RealYawAccess$Type;
}}
declare module "packages/gg/essential/model/backend/$PlayerPose$Part" {
import {$Quaternion, $Quaternion$Type} from "packages/gg/essential/model/util/$Quaternion"
import {$Mat4, $Mat4$Type} from "packages/gg/essential/lib/kotgl/matrix/matrices/$Mat4"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$PlayerPose$Part$Companion, $PlayerPose$Part$Companion$Type} from "packages/gg/essential/model/backend/$PlayerPose$Part$Companion"
import {$Vec3, $Vec3$Type} from "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec3"

export class $PlayerPose$Part {
static readonly "Companion": $PlayerPose$Part$Companion

constructor()
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $Mat4$Type, arg7: integer, arg8: $DefaultConstructorMarker$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $Mat4$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "offset"(arg0: $Vec3$Type): $PlayerPose$Part
public "copy"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $Mat4$Type): $PlayerPose$Part
public "getExtra"(): $Mat4
public "component4"(): float
public "component3"(): float
public "component5"(): float
public "getRotateAngleZ"(): float
public "getRotateAngleX"(): float
public "getRotateAngleY"(): float
public "getRotation"(): $Quaternion
public "component1"(): float
public "component2"(): float
public "component7"(): $Mat4
public "component6"(): float
public "getPivot"(): $Vec3
public "getPivotY"(): float
public "getPivotZ"(): float
public "getPivotX"(): float
get "extra"(): $Mat4
get "rotateAngleZ"(): float
get "rotateAngleX"(): float
get "rotateAngleY"(): float
get "rotation"(): $Quaternion
get "pivot"(): $Vec3
get "pivotY"(): float
get "pivotZ"(): float
get "pivotX"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerPose$Part$Type = ($PlayerPose$Part);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerPose$Part_ = $PlayerPose$Part$Type;
}}
declare module "packages/gg/essential/model/file/$SoundDefinitionsFile$Definition" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SoundDefinitionsFile$Definition$Companion, $SoundDefinitionsFile$Definition$Companion$Type} from "packages/gg/essential/model/file/$SoundDefinitionsFile$Definition$Companion"
import {$SoundCategory, $SoundCategory$Type} from "packages/gg/essential/model/$SoundCategory"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$SoundDefinitionsFile$Sound, $SoundDefinitionsFile$Sound$Type} from "packages/gg/essential/model/file/$SoundDefinitionsFile$Sound"

export class $SoundDefinitionsFile$Definition {
static readonly "Companion": $SoundDefinitionsFile$Definition$Companion

constructor(arg0: integer, arg1: $SoundCategory$Type, arg2: float, arg3: float, arg4: boolean, arg5: $List$Type<(any)>, arg6: $SerializationConstructorMarker$Type)
constructor(arg0: $SoundCategory$Type, arg1: float, arg2: float, arg3: boolean, arg4: $List$Type<(any)>, arg5: integer, arg6: $DefaultConstructorMarker$Type)
constructor(arg0: $SoundCategory$Type, arg1: float, arg2: float, arg3: boolean, arg4: $List$Type<($SoundDefinitionsFile$Sound$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $SoundCategory$Type, arg1: float, arg2: float, arg3: boolean, arg4: $List$Type<($SoundDefinitionsFile$Sound$Type)>): $SoundDefinitionsFile$Definition
public "component4"(): boolean
public "component3"(): float
public "component5"(): $List<($SoundDefinitionsFile$Sound)>
public "getSounds"(): $List<($SoundDefinitionsFile$Sound)>
public "getCategory"(): $SoundCategory
public "component1"(): $SoundCategory
public "component2"(): float
public "getFixedPosition"(): boolean
public "getMinDistance"(): float
public "getMaxDistance"(): float
get "sounds"(): $List<($SoundDefinitionsFile$Sound)>
get "category"(): $SoundCategory
get "fixedPosition"(): boolean
get "minDistance"(): float
get "maxDistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundDefinitionsFile$Definition$Type = ($SoundDefinitionsFile$Definition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundDefinitionsFile$Definition_ = $SoundDefinitionsFile$Definition$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$UV" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$Pair, $Pair$Type} from "packages/kotlin/$Pair"
import {$ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook, $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"
import {$ParticleEffectComponents$ParticleAppearanceBillboard$UV$Companion, $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$UV$Companion"

export class $ParticleEffectComponents$ParticleAppearanceBillboard$UV {
static readonly "Companion": $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Companion

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $Pair$Type<(any), (any)>, arg4: $Pair$Type<(any), (any)>, arg5: $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Type, arg6: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: integer, arg1: integer, arg2: $Pair$Type<(any), (any)>, arg3: $Pair$Type<(any), (any)>, arg4: $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Type, arg5: integer, arg6: $DefaultConstructorMarker$Type)
constructor(arg0: integer, arg1: integer, arg2: $Pair$Type<($Molang$Type), ($Molang$Type)>, arg3: $Pair$Type<($Molang$Type), ($Molang$Type)>, arg4: $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: integer, arg1: integer, arg2: $Pair$Type<($Molang$Type), ($Molang$Type)>, arg3: $Pair$Type<($Molang$Type), ($Molang$Type)>, arg4: $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Type): $ParticleEffectComponents$ParticleAppearanceBillboard$UV
public "component4"(): $Pair<($Molang), ($Molang)>
public "component3"(): $Pair<($Molang), ($Molang)>
public "component5"(): $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook
public "getUv"(): $Pair<($Molang), ($Molang)>
public "getUvSize"(): $Pair<($Molang), ($Molang)>
public "getFlipbook"(): $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook
public "component1"(): integer
public "component2"(): integer
public "getTextureHeight"(): integer
public "getTextureWidth"(): integer
get "uv"(): $Pair<($Molang), ($Molang)>
get "uvSize"(): $Pair<($Molang), ($Molang)>
get "flipbook"(): $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook
get "textureHeight"(): integer
get "textureWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Type = ($ParticleEffectComponents$ParticleAppearanceBillboard$UV);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleAppearanceBillboard$UV_ = $ParticleEffectComponents$ParticleAppearanceBillboard$UV$Type;
}}
declare module "packages/gg/essential/model/$Channels$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$Channels, $Channels$Type} from "packages/gg/essential/model/$Channels"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $Channels$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($Channels)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Channels$Companion$Type = ($Channels$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Channels$Companion_ = $Channels$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance, $ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance$Companion$Type = ($ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance$Companion_ = $ParticleEffectComponents$EmitterLifetimeEvents$LoopingDistance$Companion$Type;
}}
declare module "packages/gg/essential/util/image/bitmap/$Bitmap$Companion" {
import {$MutableBitmap, $MutableBitmap$Type} from "packages/gg/essential/util/image/bitmap/$MutableBitmap"

export class $Bitmap$Companion {


public "ofSize"(arg0: integer, arg1: integer): $MutableBitmap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bitmap$Companion$Type = ($Bitmap$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Bitmap$Companion_ = $Bitmap$Companion$Type;
}}
declare module "packages/gg/essential/lib/kotgl/matrix/matrices/mutables/$MutableMat4" {
import {$MutableMat, $MutableMat$Type} from "packages/gg/essential/lib/kotgl/matrix/matrices/mutables/$MutableMat"
import {$Mat4, $Mat4$Type} from "packages/gg/essential/lib/kotgl/matrix/matrices/$Mat4"

export class $MutableMat4 extends $Mat4 implements $MutableMat {

constructor()

public "copyOf"(): $MutableMat4
public "getM30"(): float
public "getM11"(): float
public "getM31"(): float
public "getM02"(): float
public "getM22"(): float
public "getM10"(): float
public "getM00"(): float
public "getM21"(): float
public "getM12"(): float
public "getM01"(): float
public "getM32"(): float
public "getM33"(): float
public "getM20"(): float
public "getM03"(): float
public "setM03"(arg0: float): void
public "getM13"(): float
public "setM13"(arg0: float): void
public "getM23"(): float
public "setM23"(arg0: float): void
public "setM22"(arg0: float): void
public "setM31"(arg0: float): void
public "setM32"(arg0: float): void
public "setM33"(arg0: float): void
public "setM11"(arg0: float): void
public "setM00"(arg0: float): void
public "setM01"(arg0: float): void
public "setM10"(arg0: float): void
public "setM30"(arg0: float): void
public "setM21"(arg0: float): void
public "setM02"(arg0: float): void
public "setM20"(arg0: float): void
public "setM12"(arg0: float): void
get "m30"(): float
get "m11"(): float
get "m31"(): float
get "m02"(): float
get "m22"(): float
get "m10"(): float
get "m00"(): float
get "m21"(): float
get "m12"(): float
get "m01"(): float
get "m32"(): float
get "m33"(): float
get "m20"(): float
get "m03"(): float
set "m03"(value: float)
get "m13"(): float
set "m13"(value: float)
get "m23"(): float
set "m23"(value: float)
set "m22"(value: float)
set "m31"(value: float)
set "m32"(value: float)
set "m33"(value: float)
set "m11"(value: float)
set "m00"(value: float)
set "m01"(value: float)
set "m10"(value: float)
set "m30"(value: float)
set "m21"(value: float)
set "m02"(value: float)
set "m20"(value: float)
set "m12"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableMat4$Type = ($MutableMat4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableMat4_ = $MutableMat4$Type;
}}
declare module "packages/gg/essential/lib/kotgl/matrix/matrices/mutables/$MutableMat3" {
import {$MutableMat, $MutableMat$Type} from "packages/gg/essential/lib/kotgl/matrix/matrices/mutables/$MutableMat"
import {$Mat3, $Mat3$Type} from "packages/gg/essential/lib/kotgl/matrix/matrices/$Mat3"

export class $MutableMat3 extends $Mat3 implements $MutableMat {

constructor()

public "copyOf"(): $MutableMat3
public "getM11"(): float
public "getM02"(): float
public "getM22"(): float
public "getM10"(): float
public "getM00"(): float
public "getM21"(): float
public "getM12"(): float
public "getM01"(): float
public "getM20"(): float
public "setM22"(arg0: float): void
public "setM11"(arg0: float): void
public "setM00"(arg0: float): void
public "setM01"(arg0: float): void
public "setM10"(arg0: float): void
public "setM21"(arg0: float): void
public "setM02"(arg0: float): void
public "setM20"(arg0: float): void
public "setM12"(arg0: float): void
get "m11"(): float
get "m02"(): float
get "m22"(): float
get "m10"(): float
get "m00"(): float
get "m21"(): float
get "m12"(): float
get "m01"(): float
get "m20"(): float
set "m22"(value: float)
set "m11"(value: float)
set "m00"(value: float)
set "m01"(value: float)
set "m10"(value: float)
set "m21"(value: float)
set "m02"(value: float)
set "m20"(value: float)
set "m12"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableMat3$Type = ($MutableMat3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableMat3_ = $MutableMat3$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapePoint" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$EmitterShapePoint$Companion, $ParticleEffectComponents$EmitterShapePoint$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterShapePoint$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$MolangVec3, $MolangVec3$Type} from "packages/gg/essential/model/molang/$MolangVec3"
import {$ParticleEffectComponents$Direction, $ParticleEffectComponents$Direction$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$Direction"

export class $ParticleEffectComponents$EmitterShapePoint {
static readonly "Companion": $ParticleEffectComponents$EmitterShapePoint$Companion

constructor(arg0: integer, arg1: $MolangVec3$Type, arg2: $ParticleEffectComponents$Direction$Type, arg3: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $MolangVec3$Type, arg1: $ParticleEffectComponents$Direction$Type, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: $MolangVec3$Type, arg1: $ParticleEffectComponents$Direction$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $MolangVec3$Type, arg1: $ParticleEffectComponents$Direction$Type): $ParticleEffectComponents$EmitterShapePoint
public "getOffset"(): $MolangVec3
public "getDirection"(): $ParticleEffectComponents$Direction
public "component1"(): $MolangVec3
public "component2"(): $ParticleEffectComponents$Direction
get "offset"(): $MolangVec3
get "direction"(): $ParticleEffectComponents$Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterShapePoint$Type = ($ParticleEffectComponents$EmitterShapePoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterShapePoint_ = $ParticleEffectComponents$EmitterShapePoint$Type;
}}
declare module "packages/gg/essential/model/molang/$MolangQueryAnimation" {
import {$MolangQuery, $MolangQuery$Type} from "packages/gg/essential/model/molang/$MolangQuery"

export interface $MolangQueryAnimation extends $MolangQuery {

 "getAnimLoopTime"(): float
 "getAnimTime"(): float
}

export namespace $MolangQueryAnimation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolangQueryAnimation$Type = ($MolangQueryAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolangQueryAnimation_ = $MolangQueryAnimation$Type;
}}
declare module "packages/gg/essential/model/$ModelAnimationState" {
import {$BakedAnimations, $BakedAnimations$Type} from "packages/gg/essential/model/bones/$BakedAnimations"
import {$Animation, $Animation$Type} from "packages/gg/essential/model/$Animation"
import {$MolangQueryEntity, $MolangQueryEntity$Type} from "packages/gg/essential/model/molang/$MolangQueryEntity"
import {$ParticleSystem$Locator, $ParticleSystem$Locator$Type} from "packages/gg/essential/model/$ParticleSystem$Locator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelAnimationState$AnimationState, $ModelAnimationState$AnimationState$Type} from "packages/gg/essential/model/$ModelAnimationState$AnimationState"
import {$Bones, $Bones$Type} from "packages/gg/essential/model/$Bones"
import {$Function0, $Function0$Type} from "packages/kotlin/jvm/functions/$Function0"
import {$ModelAnimationState$Event, $ModelAnimationState$Event$Type} from "packages/gg/essential/model/$ModelAnimationState$Event"

export class $ModelAnimationState {

constructor(arg0: $MolangQueryEntity$Type, arg1: $ParticleSystem$Locator$Type, arg2: $Function0$Type<(any)>)

public "getEntity"(): $MolangQueryEntity
public "updateLocators"(arg0: $Bones$Type, arg1: float): void
public "getActive"(): $List<($ModelAnimationState$AnimationState)>
public "bake"(arg0: $Bones$Type): $BakedAnimations
public "getParentLocator"(): $ParticleSystem$Locator
public "getPendingEvents"(): $List<($ModelAnimationState$Event)>
public "updateEffects"(arg0: float): void
public "locatorsNeedUpdating"(): boolean
public "startAnimation"(arg0: $Animation$Type): void
get "entity"(): $MolangQueryEntity
get "active"(): $List<($ModelAnimationState$AnimationState)>
get "parentLocator"(): $ParticleSystem$Locator
get "pendingEvents"(): $List<($ModelAnimationState$Event)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelAnimationState$Type = ($ModelAnimationState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelAnimationState_ = $ModelAnimationState$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Event" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticlesFile$Event$Particle, $ParticlesFile$Event$Particle$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event$Particle"
import {$ParticlesFile$Event$Sound, $ParticlesFile$Event$Sound$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event$Sound"
import {$ParticlesFile$Event$RandomizeOption, $ParticlesFile$Event$RandomizeOption$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event$RandomizeOption"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Molang, $Molang$Type} from "packages/gg/essential/model/molang/$Molang"
import {$ParticlesFile$Event$Companion, $ParticlesFile$Event$Companion$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event$Companion"

export class $ParticlesFile$Event {
static readonly "Companion": $ParticlesFile$Event$Companion

constructor(arg0: integer, arg1: $List$Type<(any)>, arg2: $List$Type<(any)>, arg3: $ParticlesFile$Event$Particle$Type, arg4: $ParticlesFile$Event$Sound$Type, arg5: $Molang$Type, arg6: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $List$Type<(any)>, arg1: $List$Type<(any)>, arg2: $ParticlesFile$Event$Particle$Type, arg3: $ParticlesFile$Event$Sound$Type, arg4: $Molang$Type, arg5: integer, arg6: $DefaultConstructorMarker$Type)
constructor(arg0: $List$Type<($ParticlesFile$Event$Type)>, arg1: $List$Type<($ParticlesFile$Event$RandomizeOption$Type)>, arg2: $ParticlesFile$Event$Particle$Type, arg3: $ParticlesFile$Event$Sound$Type, arg4: $Molang$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $List$Type<($ParticlesFile$Event$Type)>, arg1: $List$Type<($ParticlesFile$Event$RandomizeOption$Type)>, arg2: $ParticlesFile$Event$Particle$Type, arg3: $ParticlesFile$Event$Sound$Type, arg4: $Molang$Type): $ParticlesFile$Event
public "getSequence"(): $List<($ParticlesFile$Event)>
public "component4"(): $ParticlesFile$Event$Sound
public "component3"(): $ParticlesFile$Event$Particle
public "component5"(): $Molang
public "getParticle"(): $ParticlesFile$Event$Particle
public "getRandomize"(): $List<($ParticlesFile$Event$RandomizeOption)>
public "getExpression"(): $Molang
public "getSound"(): $ParticlesFile$Event$Sound
public "component1"(): $List<($ParticlesFile$Event)>
public "component2"(): $List<($ParticlesFile$Event$RandomizeOption)>
get "sequence"(): $List<($ParticlesFile$Event)>
get "particle"(): $ParticlesFile$Event$Particle
get "randomize"(): $List<($ParticlesFile$Event$RandomizeOption)>
get "expression"(): $Molang
get "sound"(): $ParticlesFile$Event$Sound
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Event$Type = ($ParticlesFile$Event);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Event_ = $ParticlesFile$Event$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode, $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode"

export class $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Companion$Type = ($ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Companion_ = $ParticleEffectComponents$ParticleAppearanceBillboard$FacingCameraMode$Companion$Type;
}}
declare module "packages/gg/essential/cosmetics/state/$WearableLocator" {
import {$Quaternion, $Quaternion$Type} from "packages/gg/essential/model/util/$Quaternion"
import {$ParticleSystem$Locator, $ParticleSystem$Locator$Type} from "packages/gg/essential/model/$ParticleSystem$Locator"
import {$Pair, $Pair$Type} from "packages/kotlin/$Pair"
import {$Vec3, $Vec3$Type} from "packages/gg/essential/lib/kotgl/matrix/vectors/$Vec3"

export class $WearableLocator implements $ParticleSystem$Locator {

constructor(arg0: $ParticleSystem$Locator$Type, arg1: boolean)

public "getParent"(): $ParticleSystem$Locator
public "isValid"(): boolean
public "getPosition"(): $Vec3
public "getRotation"(): $Quaternion
public "getPositionAndRotation"(): $Pair<($Vec3), ($Quaternion)>
public "setWearableVisible"(arg0: boolean): void
public "getWearableVisible"(): boolean
public "isVisible"(): boolean
public "getVelocity"(): $Vec3
public "setValid"(arg0: boolean): void
get "parent"(): $ParticleSystem$Locator
get "valid"(): boolean
get "position"(): $Vec3
get "rotation"(): $Quaternion
get "positionAndRotation"(): $Pair<($Vec3), ($Quaternion)>
set "wearableVisible"(value: boolean)
get "wearableVisible"(): boolean
get "visible"(): boolean
get "velocity"(): $Vec3
set "valid"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WearableLocator$Type = ($WearableLocator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WearableLocator_ = $WearableLocator$Type;
}}
declare module "packages/gg/essential/model/file/$AnimationFile$Animation" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$AnimationFile$Animation$SoundEffect, $AnimationFile$Animation$SoundEffect$Type} from "packages/gg/essential/model/file/$AnimationFile$Animation$SoundEffect"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AnimationFile$Loop, $AnimationFile$Loop$Type} from "packages/gg/essential/model/file/$AnimationFile$Loop"
import {$Channels, $Channels$Type} from "packages/gg/essential/model/$Channels"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$AnimationFile$Animation$ParticleEffect, $AnimationFile$Animation$ParticleEffect$Type} from "packages/gg/essential/model/file/$AnimationFile$Animation$ParticleEffect"
import {$AnimationFile$Animation$Companion, $AnimationFile$Animation$Companion$Type} from "packages/gg/essential/model/file/$AnimationFile$Animation$Companion"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimationFile$Animation {
static readonly "Companion": $AnimationFile$Animation$Companion

constructor(arg0: integer, arg1: $AnimationFile$Loop$Type, arg2: float, arg3: $Map$Type<(any), (any)>, arg4: $Map$Type<(any), (any)>, arg5: $Map$Type<(any), (any)>, arg6: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: $AnimationFile$Loop$Type, arg1: float, arg2: $Map$Type<(any), (any)>, arg3: $Map$Type<(any), (any)>, arg4: $Map$Type<(any), (any)>, arg5: integer, arg6: $DefaultConstructorMarker$Type)
constructor(arg0: $AnimationFile$Loop$Type, arg1: float, arg2: $Map$Type<(string), ($Channels$Type)>, arg3: $Map$Type<(float), (any)>, arg4: $Map$Type<(float), (any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $AnimationFile$Loop$Type, arg1: float, arg2: $Map$Type<(string), ($Channels$Type)>, arg3: $Map$Type<(float), (any)>, arg4: $Map$Type<(float), (any)>): $AnimationFile$Animation
public "component4"(): $Map<(float), ($List<($AnimationFile$Animation$ParticleEffect)>)>
public "component3"(): $Map<(string), ($Channels)>
public "component5"(): $Map<(float), ($List<($AnimationFile$Animation$SoundEffect)>)>
public "component1"(): $AnimationFile$Loop
public "component2"(): float
public "getBones"(): $Map<(string), ($Channels)>
public "getAnimationLength"(): float
public "getLoop"(): $AnimationFile$Loop
public "getSoundEffects"(): $Map<(float), ($List<($AnimationFile$Animation$SoundEffect)>)>
public "getParticleEffects"(): $Map<(float), ($List<($AnimationFile$Animation$ParticleEffect)>)>
get "bones"(): $Map<(string), ($Channels)>
get "animationLength"(): float
get "loop"(): $AnimationFile$Loop
get "soundEffects"(): $Map<(float), ($List<($AnimationFile$Animation$SoundEffect)>)>
get "particleEffects"(): $Map<(float), ($List<($AnimationFile$Animation$ParticleEffect)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationFile$Animation$Type = ($AnimationFile$Animation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationFile$Animation_ = $AnimationFile$Animation$Type;
}}
declare module "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CosmeticSetting, $CosmeticSetting$Type} from "packages/gg/essential/mod/cosmetics/settings/$CosmeticSetting"
import {$Json, $Json$Type} from "packages/kotlinx/serialization/json/$Json"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $CosmeticSetting$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($CosmeticSetting)>
public "getJson"(): $Json
public "fromJson"(arg0: string): $CosmeticSetting
public "fromJsonArray"(arg0: string): $List<($CosmeticSetting)>
get "json"(): $Json
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticSetting$Companion$Type = ($CosmeticSetting$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticSetting$Companion_ = $CosmeticSetting$Companion$Type;
}}
declare module "packages/gg/essential/mixins/ext/client/$ParticleSystemHolder" {
import {$ParticleSystem, $ParticleSystem$Type} from "packages/gg/essential/model/$ParticleSystem"

export interface $ParticleSystemHolder {

 "getParticleSystem"(): $ParticleSystem

(): $ParticleSystem
}

export namespace $ParticleSystemHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleSystemHolder$Type = ($ParticleSystemHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleSystemHolder_ = $ParticleSystemHolder$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticleEffectComponents, $ParticleEffectComponents$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$Companion$Type = ($ParticleEffectComponents$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$Companion_ = $ParticleEffectComponents$Companion$Type;
}}
declare module "packages/gg/essential/mixins/impl/client/entity/$AbstractClientPlayerExt" {
import {$WearablesManager, $WearablesManager$Type} from "packages/gg/essential/cosmetics/$WearablesManager"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Pair, $Pair$Type} from "packages/kotlin/$Pair"
import {$CosmeticSlot, $CosmeticSlot$Type} from "packages/gg/essential/mod/cosmetics/$CosmeticSlot"
import {$PlayerPose, $PlayerPose$Type} from "packages/gg/essential/model/backend/$PlayerPose"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UIdentifier, $UIdentifier$Type} from "packages/gg/essential/util/$UIdentifier"
import {$State, $State$Type} from "packages/gg/essential/gui/elementa/state/v2/$State"
import {$EquippedCosmetic, $EquippedCosmetic$Type} from "packages/gg/essential/cosmetics/$EquippedCosmetic"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PlayerPoseManager, $PlayerPoseManager$Type} from "packages/gg/essential/model/util/$PlayerPoseManager"
import {$CosmeticsState, $CosmeticsState$Type} from "packages/gg/essential/cosmetics/$CosmeticsState"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AbstractClientPlayerExt {

 "getWearablesManager"(): $WearablesManager
 "setEssentialCosmeticsCape"(arg0: string, arg1: $Pair$Type<($List$Type<($UIdentifier$Type)>), ($List$Type<($UIdentifier$Type)>)>): void
 "applyEssentialCosmeticsMask"(arg0: $ResourceLocation$Type): $ResourceLocation
 "getCosmeticsSourceUuid"(): $UUID
 "getEmissiveCapeTexture"(): $UIdentifier
 "wasArmorRenderingSuppressed"(): (boolean)[]
 "essential$getCosmeticFrozenYaw"(): float
 "essential$setCosmeticFrozenYaw"(arg0: float): void
 "getCosmeticsSource"(): $State<($Map<($CosmeticSlot), ($EquippedCosmetic)>)>
 "setCosmeticsSource"(arg0: $State$Type<($Map$Type<($CosmeticSlot$Type), ($EquippedCosmetic$Type)>)>): void
 "getCosmeticsState"(): $CosmeticsState
 "getRenderedPose"(): $PlayerPose
 "getPoseManager"(): $PlayerPoseManager
 "setRenderedPose"(arg0: $PlayerPose$Type): void
 "setPoseModified"(arg0: boolean): void
 "isPoseModified"(): boolean
}

export namespace $AbstractClientPlayerExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractClientPlayerExt$Type = ($AbstractClientPlayerExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractClientPlayerExt_ = $AbstractClientPlayerExt$Type;
}}
declare module "packages/gg/essential/model/$ModelAnimationState$Event" {
import {$MolangQueryEntity, $MolangQueryEntity$Type} from "packages/gg/essential/model/molang/$MolangQueryEntity"
import {$MolangQueryTime, $MolangQueryTime$Type} from "packages/gg/essential/model/molang/$MolangQueryTime"

export interface $ModelAnimationState$Event {

 "getTime"(): float
 "getTimeSource"(): $MolangQueryTime
 "getSourceEntity"(): $MolangQueryEntity
}

export namespace $ModelAnimationState$Event {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelAnimationState$Event$Type = ($ModelAnimationState$Event);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelAnimationState$Event_ = $ModelAnimationState$Event$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$Direction" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Companion, $ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$ParticleAppearanceBillboard$Direction {
static readonly "Companion": $ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Companion

constructor(arg0: integer, arg1: $SerializationConstructorMarker$Type)
constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Type = ($ParticleEffectComponents$ParticleAppearanceBillboard$Direction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleAppearanceBillboard$Direction_ = $ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Event$Sound" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticlesFile$Event$Sound$Companion, $ParticlesFile$Event$Sound$Companion$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event$Sound$Companion"

export class $ParticlesFile$Event$Sound {
static readonly "Companion": $ParticlesFile$Event$Sound$Companion

constructor(arg0: string)
constructor(arg0: integer, arg1: string, arg2: $SerializationConstructorMarker$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string): $ParticlesFile$Event$Sound
public "getEvent"(): string
public "component1"(): string
get "event"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Event$Sound$Type = ($ParticlesFile$Event$Sound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Event$Sound_ = $ParticlesFile$Event$Sound$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Material$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticlesFile$Material, $ParticlesFile$Material$Type} from "packages/gg/essential/model/file/$ParticlesFile$Material"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticlesFile$Material$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticlesFile$Material)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Material$Companion$Type = ($ParticlesFile$Material$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Material$Companion_ = $ParticlesFile$Material$Companion$Type;
}}
declare module "packages/gg/essential/model/$Bone" {
import {$Quaternion, $Quaternion$Type} from "packages/gg/essential/model/util/$Quaternion"
import {$UVertexConsumer, $UVertexConsumer$Type} from "packages/gg/essential/model/util/$UVertexConsumer"
import {$UMatrixStack, $UMatrixStack$Type} from "packages/gg/essential/model/util/$UMatrixStack"
import {$Mat4, $Mat4$Type} from "packages/gg/essential/lib/kotgl/matrix/matrices/$Mat4"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Side, $Side$Type} from "packages/gg/essential/model/$Side"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$EnumPart, $EnumPart$Type} from "packages/gg/essential/model/$EnumPart"

export class $Bone {

constructor(arg0: integer, arg1: string, arg2: $List$Type<($Bone$Type)>, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: $Side$Type)
constructor(arg0: integer, arg1: string, arg2: $List$Type<(any)>, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: $Side$Type, arg10: integer, arg11: $DefaultConstructorMarker$Type)

public "getId"(): integer
public "getChild"(): boolean
public "getGimbal"(): boolean
public "getSide"(): $Side
public "getPart"(): $EnumPart
public "setVisible"(arg0: boolean): void
public "getVisible"(): boolean
public "getUserOffsetY"(): float
public "setUserOffsetY"(arg0: float): void
public "getUserOffsetZ"(): float
public "setUserOffsetZ"(arg0: float): void
public "applyTransform"(arg0: $UMatrixStack$Type): void
public "getUserOffsetX"(): float
public "setUserOffsetX"(arg0: float): void
public "getAnimScaleZ"(): float
public "setAnimScaleY"(arg0: float): void
public "setAnimScaleZ"(arg0: float): void
public "setChild"(arg0: boolean): void
public "propagateGimbal"(arg0: $Quaternion$Type, arg1: $Quaternion$Type): void
public "getParentRotation"(): $Quaternion
public "setWorldGimbal"(arg0: boolean): void
public "setParentRotation"(arg0: $Quaternion$Type): void
public "setGimbal"(arg0: boolean): void
public "getWorldGimbal"(): boolean
public "isVisible"(): boolean
public "getAffectsPose"(): boolean
public "render-h-6-dEE"(arg0: $UMatrixStack$Type, arg1: $UVertexConsumer$Type, arg2: $List$Type<(any)>, arg3: integer, arg4: float): void
public "resetAnimationOffsets"(arg0: boolean): void
public "getChildModels"(): $List<($Bone)>
public "getPoseRotX"(): float
public "setPoseRotX"(arg0: float): void
public "getPoseRotY"(): float
public "setPoseRotY"(arg0: float): void
public "getBoxName"(): string
public "getPoseRotZ"(): float
public "setPoseRotZ"(arg0: float): void
public "getPoseOffsetX"(): float
public "setPoseOffsetX"(arg0: float): void
public "setAnimRotY"(arg0: float): void
public "getAnimScaleY"(): float
public "getPoseOffsetZ"(): float
public "setPoseOffsetZ"(arg0: float): void
public "getAnimOffsetX"(): float
public "getAnimOffsetY"(): float
public "getAnimRotY"(): float
public "setAnimRotZ"(arg0: float): void
public "setAnimOffsetY"(arg0: float): void
public "setAnimOffsetX"(arg0: float): void
public "setPoseExtra"(arg0: $Mat4$Type): void
public "setAnimOffsetZ"(arg0: float): void
public "getAnimRotZ"(): float
public "getAnimScaleX"(): float
public "getAnimOffsetZ"(): float
public "setAnimRotX"(arg0: float): void
public "setAnimScaleX"(arg0: float): void
public "setPoseOffsetY"(arg0: float): void
public "getPoseOffsetY"(): float
public "getPoseExtra"(): $Mat4
public "getAnimRotX"(): float
public "containsVisibleBoxes"(arg0: $List$Type<(any)>): boolean
public "propagateVisibility"(arg0: boolean, arg1: $Side$Type): void
public "getAffectsPoseParts"(): $Set<($EnumPart)>
public "getPivotY"(): float
public "getPivotZ"(): float
public "getPivotX"(): float
get "id"(): integer
get "child"(): boolean
get "gimbal"(): boolean
get "side"(): $Side
get "part"(): $EnumPart
set "visible"(value: boolean)
get "visible"(): boolean
get "userOffsetY"(): float
set "userOffsetY"(value: float)
get "userOffsetZ"(): float
set "userOffsetZ"(value: float)
get "userOffsetX"(): float
set "userOffsetX"(value: float)
get "animScaleZ"(): float
set "animScaleY"(value: float)
set "animScaleZ"(value: float)
set "child"(value: boolean)
get "parentRotation"(): $Quaternion
set "worldGimbal"(value: boolean)
set "parentRotation"(value: $Quaternion$Type)
set "gimbal"(value: boolean)
get "worldGimbal"(): boolean
get "visible"(): boolean
get "affectsPose"(): boolean
get "childModels"(): $List<($Bone)>
get "poseRotX"(): float
set "poseRotX"(value: float)
get "poseRotY"(): float
set "poseRotY"(value: float)
get "boxName"(): string
get "poseRotZ"(): float
set "poseRotZ"(value: float)
get "poseOffsetX"(): float
set "poseOffsetX"(value: float)
set "animRotY"(value: float)
get "animScaleY"(): float
get "poseOffsetZ"(): float
set "poseOffsetZ"(value: float)
get "animOffsetX"(): float
get "animOffsetY"(): float
get "animRotY"(): float
set "animRotZ"(value: float)
set "animOffsetY"(value: float)
set "animOffsetX"(value: float)
set "poseExtra"(value: $Mat4$Type)
set "animOffsetZ"(value: float)
get "animRotZ"(): float
get "animScaleX"(): float
get "animOffsetZ"(): float
set "animRotX"(value: float)
set "animScaleX"(value: float)
set "poseOffsetY"(value: float)
get "poseOffsetY"(): float
get "poseExtra"(): $Mat4
get "animRotX"(): float
get "affectsPoseParts"(): $Set<($EnumPart)>
get "pivotY"(): float
get "pivotZ"(): float
get "pivotX"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bone$Type = ($Bone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Bone_ = $Bone$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeExpression$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticleEffectComponents$EmitterLifetimeExpression, $ParticleEffectComponents$EmitterLifetimeExpression$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLifetimeExpression"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$EmitterLifetimeExpression$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$EmitterLifetimeExpression)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterLifetimeExpression$Companion$Type = ($ParticleEffectComponents$EmitterLifetimeExpression$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterLifetimeExpression$Companion_ = $ParticleEffectComponents$EmitterLifetimeExpression$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ParticleEffectComponents$ParticleAppearanceBillboard, $ParticleEffectComponents$ParticleAppearanceBillboard$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard"

export class $ParticleEffectComponents$ParticleAppearanceBillboard$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$ParticleAppearanceBillboard)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleAppearanceBillboard$Companion$Type = ($ParticleEffectComponents$ParticleAppearanceBillboard$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleAppearanceBillboard$Companion_ = $ParticleEffectComponents$ParticleAppearanceBillboard$Companion$Type;
}}
declare module "packages/gg/essential/sps/$IntegratedServerManager$Difficulty$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $IntegratedServerManager$Difficulty$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegratedServerManager$Difficulty$Companion$Type = ($IntegratedServerManager$Difficulty$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegratedServerManager$Difficulty$Companion_ = $IntegratedServerManager$Difficulty$Companion$Type;
}}
declare module "packages/gg/essential/model/molang/$VariablesMap$Variable" {
import {$KProperty, $KProperty$Type} from "packages/kotlin/reflect/$KProperty"
import {$Variables$Variable, $Variables$Variable$Type} from "packages/gg/essential/model/molang/$Variables$Variable"

export class $VariablesMap$Variable implements $Variables$Variable {

constructor(arg0: float)

public "get"(): float
public "getField"(): float
public "set"(arg0: float): void
public "copy"(): $VariablesMap$Variable
public "setField"(arg0: float): void
public "getValue"(arg0: any, arg1: $KProperty$Type<(any)>): float
public "setValue"(arg0: any, arg1: $KProperty$Type<(any)>, arg2: float): void
get "field"(): float
set "field"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariablesMap$Variable$Type = ($VariablesMap$Variable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariablesMap$Variable_ = $VariablesMap$Variable$Type;
}}
declare module "packages/gg/essential/model/file/$ParticlesFile$Event$Particle$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticlesFile$Event$Particle, $ParticlesFile$Event$Particle$Type} from "packages/gg/essential/model/file/$ParticlesFile$Event$Particle"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticlesFile$Event$Particle$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticlesFile$Event$Particle)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlesFile$Event$Particle$Companion$Type = ($ParticlesFile$Event$Particle$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticlesFile$Event$Particle$Companion_ = $ParticlesFile$Event$Particle$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$Direction" {
import {$ParticleEffectComponents$Direction$Companion, $ParticleEffectComponents$Direction$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$Direction$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$Direction {
static readonly "Companion": $ParticleEffectComponents$Direction$Companion

constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$Direction$Type = ($ParticleEffectComponents$Direction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$Direction_ = $ParticleEffectComponents$Direction$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$ParticleEffectComponents$ParticleAppearanceBillboard$Direction, $ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$ParticleAppearanceBillboard$Direction"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($ParticleEffectComponents$ParticleAppearanceBillboard$Direction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Companion$Type = ($ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Companion_ = $ParticleEffectComponents$ParticleAppearanceBillboard$Direction$Companion$Type;
}}
declare module "packages/gg/essential/model/file/$AnimationFile" {
import {$AnimationFile$Companion, $AnimationFile$Companion$Type} from "packages/gg/essential/model/file/$AnimationFile$Companion"
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$AnimationFile$Animation, $AnimationFile$Animation$Type} from "packages/gg/essential/model/file/$AnimationFile$Animation"
import {$AnimationEvent, $AnimationEvent$Type} from "packages/gg/essential/cosmetics/events/$AnimationEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimationFile {
static readonly "Companion": $AnimationFile$Companion

constructor(arg0: integer, arg1: string, arg2: $Map$Type<(any), (any)>, arg3: $List$Type<(any)>, arg4: $SerializationConstructorMarker$Type)
constructor(arg0: string, arg1: $Map$Type<(any), (any)>, arg2: $List$Type<(any)>, arg3: integer, arg4: $DefaultConstructorMarker$Type)
constructor(arg0: string, arg1: $Map$Type<(string), ($AnimationFile$Animation$Type)>, arg2: $List$Type<($AnimationEvent$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: string, arg1: $Map$Type<(string), ($AnimationFile$Animation$Type)>, arg2: $List$Type<($AnimationEvent$Type)>): $AnimationFile
public "component3"(): $List<($AnimationEvent)>
public "getAnimations"(): $Map<(string), ($AnimationFile$Animation)>
public "getTriggers"(): $List<($AnimationEvent)>
public "component1"(): string
public "component2"(): $Map<(string), ($AnimationFile$Animation)>
public "getFormatVersion"(): string
get "animations"(): $Map<(string), ($AnimationFile$Animation)>
get "triggers"(): $List<($AnimationEvent)>
get "formatVersion"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationFile$Type = ($AnimationFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationFile_ = $AnimationFile$Type;
}}
declare module "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLocalSpace" {
import {$SerializationConstructorMarker, $SerializationConstructorMarker$Type} from "packages/kotlinx/serialization/internal/$SerializationConstructorMarker"
import {$ParticleEffectComponents$EmitterLocalSpace$Companion, $ParticleEffectComponents$EmitterLocalSpace$Companion$Type} from "packages/gg/essential/model/file/$ParticleEffectComponents$EmitterLocalSpace$Companion"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $ParticleEffectComponents$EmitterLocalSpace {
static readonly "Companion": $ParticleEffectComponents$EmitterLocalSpace$Companion

constructor(arg0: integer, arg1: boolean, arg2: boolean, arg3: boolean, arg4: $SerializationConstructorMarker$Type)
constructor()
constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: integer, arg4: $DefaultConstructorMarker$Type)
constructor(arg0: boolean, arg1: boolean, arg2: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: boolean, arg1: boolean, arg2: boolean): $ParticleEffectComponents$EmitterLocalSpace
public "getPosition"(): boolean
public "component3"(): boolean
public "getRotation"(): boolean
public "component1"(): boolean
public "component2"(): boolean
public "getVelocity"(): boolean
get "position"(): boolean
get "rotation"(): boolean
get "velocity"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEffectComponents$EmitterLocalSpace$Type = ($ParticleEffectComponents$EmitterLocalSpace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEffectComponents$EmitterLocalSpace_ = $ParticleEffectComponents$EmitterLocalSpace$Type;
}}
declare module "packages/gg/essential/model/$Vector3" {
import {$Vector3$Companion, $Vector3$Companion$Type} from "packages/gg/essential/model/$Vector3$Companion"

export class $Vector3 {
static readonly "Companion": $Vector3$Companion
 "x": float
 "y": float
 "z": float
static readonly "ZERO": $Vector3
static readonly "X": $Vector3
static readonly "Y": $Vector3
static readonly "Z": $Vector3

constructor(arg0: float, arg1: float, arg2: float)
constructor(arg0: number, arg1: number, arg2: number)
constructor()

public "multiply"(arg0: $Vector3$Type): $Vector3
public "round"(): $Vector3
public "add"(arg0: $Vector3$Type): $Vector3
public "get"(arg0: integer): float
public "equals"(arg0: any): boolean
public "length"(): float
public "toString"(): string
public "hashCode"(): integer
public "clone"(): $Vector3
public "min"(arg0: $Vector3$Type): $Vector3
public "max"(arg0: $Vector3$Type): $Vector3
public "floor"(): $Vector3
public "ceil"(): $Vector3
public "dot"(arg0: $Vector3$Type): float
public "set"(arg0: integer, arg1: float): $Vector3
public "set"(arg0: number, arg1: number, arg2: number): $Vector3
public "setLength"(arg0: float): $Vector3
public "copy"(arg0: $Vector3$Type): $Vector3
public "copy"(arg0: float, arg1: float, arg2: float): $Vector3
public "normalize"(): $Vector3
public "sub"(arg0: $Vector3$Type): $Vector3
public "negate"(): $Vector3
public "plus"(arg0: $Vector3$Type): $Vector3
public "minus"(arg0: $Vector3$Type): $Vector3
public "component3"(): float
public "clamp"(arg0: $Vector3$Type, arg1: $Vector3$Type): $Vector3
public "negateY"(): $Vector3
public "cross"(arg0: $Vector3$Type): $Vector3
public "lerp"(arg0: $Vector3$Type, arg1: float): $Vector3
public "subVectors"(arg0: $Vector3$Type, arg1: $Vector3$Type): $Vector3
public "component1"(): float
public "component2"(): float
public "reflect"(arg0: $Vector3$Type): $Vector3
public "distanceTo"(arg0: $Vector3$Type): float
public "distanceToSquared"(arg0: $Vector3$Type): float
public "divideScalar"(arg0: float): $Vector3
public "addScalar"(arg0: float): $Vector3
public "addVectors"(arg0: $Vector3$Type, arg1: $Vector3$Type): $Vector3
public "crossVectors"(arg0: $Vector3$Type, arg1: $Vector3$Type): $Vector3
public "setScalar"(arg0: number): $Vector3
public "multiplyScalar"(arg0: float): $Vector3
set "scalar"(value: number)
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
declare module "packages/gg/essential/model/file/$SoundDefinitionsFile$Definition$Companion" {
import {$KSerializer, $KSerializer$Type} from "packages/kotlinx/serialization/$KSerializer"
import {$SoundDefinitionsFile$Definition, $SoundDefinitionsFile$Definition$Type} from "packages/gg/essential/model/file/$SoundDefinitionsFile$Definition"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $SoundDefinitionsFile$Definition$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "serializer"(): $KSerializer<($SoundDefinitionsFile$Definition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundDefinitionsFile$Definition$Companion$Type = ($SoundDefinitionsFile$Definition$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundDefinitionsFile$Definition$Companion_ = $SoundDefinitionsFile$Definition$Companion$Type;
}}
declare module "packages/gg/essential/model/$BedrockModel$Companion" {
import {$BedrockModel$Offset, $BedrockModel$Offset$Type} from "packages/gg/essential/model/$BedrockModel$Offset"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$EnumPart, $EnumPart$Type} from "packages/gg/essential/model/$EnumPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BedrockModel$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "getOFFSETS"(): $Map<($EnumPart), ($BedrockModel$Offset)>
get "oFFSETS"(): $Map<($EnumPart), ($BedrockModel$Offset)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BedrockModel$Companion$Type = ($BedrockModel$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BedrockModel$Companion_ = $BedrockModel$Companion$Type;
}}
declare module "packages/gg/essential/api/cosmetics/$RenderCosmetic" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderCosmetic {

}

export namespace $RenderCosmetic {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderCosmetic$Type = ($RenderCosmetic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderCosmetic_ = $RenderCosmetic$Type;
}}

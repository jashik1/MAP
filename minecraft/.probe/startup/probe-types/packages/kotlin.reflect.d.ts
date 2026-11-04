declare module "packages/kotlin/reflect/$KParameter" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$KParameter$Kind, $KParameter$Kind$Type} from "packages/kotlin/reflect/$KParameter$Kind"
import {$List, $List$Type} from "packages/java/util/$List"
import {$KAnnotatedElement, $KAnnotatedElement$Type} from "packages/kotlin/reflect/$KAnnotatedElement"
import {$KType, $KType$Type} from "packages/kotlin/reflect/$KType"

export interface $KParameter extends $KAnnotatedElement {

 "getName"(): string
 "getType"(): $KType
 "getIndex"(): integer
 "isVararg"(): boolean
 "getKind"(): $KParameter$Kind
 "isOptional"(): boolean
 "getAnnotations"(): $List<($Annotation)>
}

export namespace $KParameter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KParameter$Type = ($KParameter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KParameter_ = $KParameter$Type;
}}
declare module "packages/kotlin/reflect/$KFunction" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$KParameter, $KParameter$Type} from "packages/kotlin/reflect/$KParameter"
import {$List, $List$Type} from "packages/java/util/$List"
import {$KVisibility, $KVisibility$Type} from "packages/kotlin/reflect/$KVisibility"
import {$KCallable, $KCallable$Type} from "packages/kotlin/reflect/$KCallable"
import {$KType, $KType$Type} from "packages/kotlin/reflect/$KType"
import {$KTypeParameter, $KTypeParameter$Type} from "packages/kotlin/reflect/$KTypeParameter"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Function, $Function$Type} from "packages/kotlin/$Function"

export interface $KFunction<R> extends $KCallable<(R)>, $Function<(R)> {

 "isExternal"(): boolean
 "isSuspend"(): boolean
 "isInfix"(): boolean
 "isInline"(): boolean
 "isOperator"(): boolean
 "getName"(): string
 "getTypeParameters"(): $List<($KTypeParameter)>
 "getReturnType"(): $KType
 "isOpen"(): boolean
 "getParameters"(): $List<($KParameter)>
 "isFinal"(): boolean
 "isAbstract"(): boolean
 "call"(...arg0: (any)[]): R
 "callBy"(arg0: $Map$Type<($KParameter$Type), (any)>): R
 "getVisibility"(): $KVisibility
 "getAnnotations"(): $List<($Annotation)>
}

export namespace $KFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KFunction$Type<R> = ($KFunction<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KFunction_<R> = $KFunction$Type<(R)>;
}}
declare module "packages/kotlin/reflect/$KProperty" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$KParameter, $KParameter$Type} from "packages/kotlin/reflect/$KParameter"
import {$List, $List$Type} from "packages/java/util/$List"
import {$KProperty$Getter, $KProperty$Getter$Type} from "packages/kotlin/reflect/$KProperty$Getter"
import {$KVisibility, $KVisibility$Type} from "packages/kotlin/reflect/$KVisibility"
import {$KCallable, $KCallable$Type} from "packages/kotlin/reflect/$KCallable"
import {$KType, $KType$Type} from "packages/kotlin/reflect/$KType"
import {$KTypeParameter, $KTypeParameter$Type} from "packages/kotlin/reflect/$KTypeParameter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $KProperty<V> extends $KCallable<(V)> {

 "isLateinit"(): boolean
 "getGetter"(): $KProperty$Getter<(V)>
 "isConst"(): boolean
 "getName"(): string
 "getTypeParameters"(): $List<($KTypeParameter)>
 "getReturnType"(): $KType
 "isOpen"(): boolean
 "getParameters"(): $List<($KParameter)>
 "isFinal"(): boolean
 "isAbstract"(): boolean
 "call"(...arg0: (any)[]): V
 "callBy"(arg0: $Map$Type<($KParameter$Type), (any)>): V
 "isSuspend"(): boolean
 "getVisibility"(): $KVisibility
 "getAnnotations"(): $List<($Annotation)>
}

export namespace $KProperty {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KProperty$Type<V> = ($KProperty<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KProperty_<V> = $KProperty$Type<(V)>;
}}
declare module "packages/kotlin/reflect/$KType" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$KClassifier, $KClassifier$Type} from "packages/kotlin/reflect/$KClassifier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$KTypeProjection, $KTypeProjection$Type} from "packages/kotlin/reflect/$KTypeProjection"
import {$KAnnotatedElement, $KAnnotatedElement$Type} from "packages/kotlin/reflect/$KAnnotatedElement"

export interface $KType extends $KAnnotatedElement {

 "getArguments"(): $List<($KTypeProjection)>
 "getClassifier"(): $KClassifier
 "isMarkedNullable"(): boolean
 "getAnnotations"(): $List<($Annotation)>
}

export namespace $KType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KType$Type = ($KType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KType_ = $KType$Type;
}}
declare module "packages/kotlin/reflect/$KParameter$Kind" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $KParameter$Kind extends $Enum<($KParameter$Kind)> {
static readonly "INSTANCE": $KParameter$Kind
static readonly "CONTEXT": $KParameter$Kind
static readonly "EXTENSION_RECEIVER": $KParameter$Kind
static readonly "VALUE": $KParameter$Kind


public static "values"(): ($KParameter$Kind)[]
public static "valueOf"(arg0: string): $KParameter$Kind
public static "getEntries"(): $EnumEntries<($KParameter$Kind)>
get "entries"(): $EnumEntries<($KParameter$Kind)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KParameter$Kind$Type = (("instance") | ("context") | ("extension_receiver") | ("value")) | ($KParameter$Kind);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KParameter$Kind_ = $KParameter$Kind$Type;
}}
declare module "packages/kotlin/reflect/$KCallable" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$KParameter, $KParameter$Type} from "packages/kotlin/reflect/$KParameter"
import {$List, $List$Type} from "packages/java/util/$List"
import {$KAnnotatedElement, $KAnnotatedElement$Type} from "packages/kotlin/reflect/$KAnnotatedElement"
import {$KVisibility, $KVisibility$Type} from "packages/kotlin/reflect/$KVisibility"
import {$KType, $KType$Type} from "packages/kotlin/reflect/$KType"
import {$KTypeParameter, $KTypeParameter$Type} from "packages/kotlin/reflect/$KTypeParameter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $KCallable<R> extends $KAnnotatedElement {

 "getName"(): string
 "getTypeParameters"(): $List<($KTypeParameter)>
 "getReturnType"(): $KType
 "isOpen"(): boolean
 "getParameters"(): $List<($KParameter)>
 "isFinal"(): boolean
 "isAbstract"(): boolean
 "call"(...arg0: (any)[]): R
 "callBy"(arg0: $Map$Type<($KParameter$Type), (any)>): R
 "isSuspend"(): boolean
 "getVisibility"(): $KVisibility
 "getAnnotations"(): $List<($Annotation)>
}

export namespace $KCallable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KCallable$Type<R> = ($KCallable<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KCallable_<R> = $KCallable$Type<(R)>;
}}
declare module "packages/kotlin/reflect/$KTypeProjection$Companion" {
import {$KTypeProjection, $KTypeProjection$Type} from "packages/kotlin/reflect/$KTypeProjection"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$KType, $KType$Type} from "packages/kotlin/reflect/$KType"

export class $KTypeProjection$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "covariant"(arg0: $KType$Type): $KTypeProjection
public "contravariant"(arg0: $KType$Type): $KTypeProjection
public "invariant"(arg0: $KType$Type): $KTypeProjection
public "getSTAR"(): $KTypeProjection
get "sTAR"(): $KTypeProjection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KTypeProjection$Companion$Type = ($KTypeProjection$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KTypeProjection$Companion_ = $KTypeProjection$Companion$Type;
}}
declare module "packages/kotlin/reflect/$KAnnotatedElement" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $KAnnotatedElement {

 "getAnnotations"(): $List<($Annotation)>

(): $List<($Annotation)>
}

export namespace $KAnnotatedElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KAnnotatedElement$Type = ($KAnnotatedElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KAnnotatedElement_ = $KAnnotatedElement$Type;
}}
declare module "packages/kotlin/reflect/$KTypeProjection" {
import {$KTypeProjection$Companion, $KTypeProjection$Companion$Type} from "packages/kotlin/reflect/$KTypeProjection$Companion"
import {$KVariance, $KVariance$Type} from "packages/kotlin/reflect/$KVariance"
import {$KType, $KType$Type} from "packages/kotlin/reflect/$KType"

export class $KTypeProjection {
static readonly "Companion": $KTypeProjection$Companion
static readonly "star": $KTypeProjection

constructor(arg0: $KVariance$Type, arg1: $KType$Type)

public static "covariant"(arg0: $KType$Type): $KTypeProjection
public static "contravariant"(arg0: $KType$Type): $KTypeProjection
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getType"(): $KType
public "copy"(arg0: $KVariance$Type, arg1: $KType$Type): $KTypeProjection
public "getVariance"(): $KVariance
public static "invariant"(arg0: $KType$Type): $KTypeProjection
public "component1"(): $KVariance
public "component2"(): $KType
get "type"(): $KType
get "variance"(): $KVariance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KTypeProjection$Type = ($KTypeProjection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KTypeProjection_ = $KTypeProjection$Type;
}}
declare module "packages/kotlin/reflect/$KProperty$Getter" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$KProperty, $KProperty$Type} from "packages/kotlin/reflect/$KProperty"
import {$KParameter, $KParameter$Type} from "packages/kotlin/reflect/$KParameter"
import {$List, $List$Type} from "packages/java/util/$List"
import {$KVisibility, $KVisibility$Type} from "packages/kotlin/reflect/$KVisibility"
import {$KProperty$Accessor, $KProperty$Accessor$Type} from "packages/kotlin/reflect/$KProperty$Accessor"
import {$KType, $KType$Type} from "packages/kotlin/reflect/$KType"
import {$KTypeParameter, $KTypeParameter$Type} from "packages/kotlin/reflect/$KTypeParameter"
import {$KFunction, $KFunction$Type} from "packages/kotlin/reflect/$KFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $KProperty$Getter<V> extends $KProperty$Accessor<(V)>, $KFunction<(V)> {

 "getProperty"(): $KProperty<(V)>
 "isExternal"(): boolean
 "isSuspend"(): boolean
 "isInfix"(): boolean
 "isInline"(): boolean
 "isOperator"(): boolean
 "getName"(): string
 "getTypeParameters"(): $List<($KTypeParameter)>
 "getReturnType"(): $KType
 "isOpen"(): boolean
 "getParameters"(): $List<($KParameter)>
 "isFinal"(): boolean
 "isAbstract"(): boolean
 "call"(...arg0: (any)[]): V
 "callBy"(arg0: $Map$Type<($KParameter$Type), (any)>): V
 "getVisibility"(): $KVisibility
 "getAnnotations"(): $List<($Annotation)>
}

export namespace $KProperty$Getter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KProperty$Getter$Type<V> = ($KProperty$Getter<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KProperty$Getter_<V> = $KProperty$Getter$Type<(V)>;
}}
declare module "packages/kotlin/reflect/$KVariance" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $KVariance extends $Enum<($KVariance)> {
static readonly "INVARIANT": $KVariance
static readonly "IN": $KVariance
static readonly "OUT": $KVariance


public static "values"(): ($KVariance)[]
public static "valueOf"(arg0: string): $KVariance
public static "getEntries"(): $EnumEntries<($KVariance)>
get "entries"(): $EnumEntries<($KVariance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KVariance$Type = (("in") | ("invariant") | ("out")) | ($KVariance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KVariance_ = $KVariance$Type;
}}
declare module "packages/kotlin/reflect/$KClass" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$KClassifier, $KClassifier$Type} from "packages/kotlin/reflect/$KClassifier"
import {$KDeclarationContainer, $KDeclarationContainer$Type} from "packages/kotlin/reflect/$KDeclarationContainer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$KAnnotatedElement, $KAnnotatedElement$Type} from "packages/kotlin/reflect/$KAnnotatedElement"
import {$KCallable, $KCallable$Type} from "packages/kotlin/reflect/$KCallable"
import {$KVisibility, $KVisibility$Type} from "packages/kotlin/reflect/$KVisibility"
import {$KType, $KType$Type} from "packages/kotlin/reflect/$KType"
import {$KTypeParameter, $KTypeParameter$Type} from "packages/kotlin/reflect/$KTypeParameter"
import {$KFunction, $KFunction$Type} from "packages/kotlin/reflect/$KFunction"

export interface $KClass<T> extends $KDeclarationContainer, $KAnnotatedElement, $KClassifier {

 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "isInstance"(arg0: any): boolean
 "getTypeParameters"(): $List<($KTypeParameter)>
 "getSimpleName"(): string
 "isOpen"(): boolean
 "getConstructors"(): $Collection<($KFunction<(T)>)>
 "isSealed"(): boolean
 "isFinal"(): boolean
 "isAbstract"(): boolean
 "getMembers"(): $Collection<($KCallable<(any)>)>
 "getObjectInstance"(): T
 "getSupertypes"(): $List<($KType)>
 "getNestedClasses"(): $Collection<($KClass<(any)>)>
 "isFun"(): boolean
 "isCompanion"(): boolean
 "getQualifiedName"(): string
 "isInner"(): boolean
 "getSealedSubclasses"(): $List<($KClass<(any)>)>
 "isData"(): boolean
 "isValue"(): boolean
 "getVisibility"(): $KVisibility
 "getAnnotations"(): $List<($Annotation)>
}

export namespace $KClass {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KClass$Type<T> = ($KClass<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KClass_<T> = $KClass$Type<(T)>;
}}
declare module "packages/kotlin/reflect/$KTypeParameter" {
import {$KClassifier, $KClassifier$Type} from "packages/kotlin/reflect/$KClassifier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$KVariance, $KVariance$Type} from "packages/kotlin/reflect/$KVariance"
import {$KType, $KType$Type} from "packages/kotlin/reflect/$KType"

export interface $KTypeParameter extends $KClassifier {

 "getName"(): string
 "getUpperBounds"(): $List<($KType)>
 "isReified"(): boolean
 "getVariance"(): $KVariance
}

export namespace $KTypeParameter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KTypeParameter$Type = ($KTypeParameter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KTypeParameter_ = $KTypeParameter$Type;
}}
declare module "packages/kotlin/reflect/$KVisibility" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $KVisibility extends $Enum<($KVisibility)> {
static readonly "PUBLIC": $KVisibility
static readonly "PROTECTED": $KVisibility
static readonly "INTERNAL": $KVisibility
static readonly "PRIVATE": $KVisibility


public static "values"(): ($KVisibility)[]
public static "valueOf"(arg0: string): $KVisibility
public static "getEntries"(): $EnumEntries<($KVisibility)>
get "entries"(): $EnumEntries<($KVisibility)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KVisibility$Type = (("internal") | ("private") | ("public") | ("protected")) | ($KVisibility);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KVisibility_ = $KVisibility$Type;
}}
declare module "packages/kotlin/reflect/$KProperty$Accessor" {
import {$KProperty, $KProperty$Type} from "packages/kotlin/reflect/$KProperty"

export interface $KProperty$Accessor<V> {

 "getProperty"(): $KProperty<(V)>

(): $KProperty<(V)>
}

export namespace $KProperty$Accessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KProperty$Accessor$Type<V> = ($KProperty$Accessor<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KProperty$Accessor_<V> = $KProperty$Accessor$Type<(V)>;
}}
declare module "packages/kotlin/reflect/$KDeclarationContainer" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$KCallable, $KCallable$Type} from "packages/kotlin/reflect/$KCallable"

export interface $KDeclarationContainer {

 "getMembers"(): $Collection<($KCallable<(any)>)>

(): $Collection<($KCallable<(any)>)>
}

export namespace $KDeclarationContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KDeclarationContainer$Type = ($KDeclarationContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KDeclarationContainer_ = $KDeclarationContainer$Type;
}}
declare module "packages/kotlin/reflect/$KClassifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $KClassifier {

}

export namespace $KClassifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KClassifier$Type = ($KClassifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KClassifier_ = $KClassifier$Type;
}}

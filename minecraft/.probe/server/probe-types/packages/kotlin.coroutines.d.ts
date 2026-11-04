declare module "packages/kotlin/coroutines/$ContinuationInterceptor$Key" {
import {$ContinuationInterceptor, $ContinuationInterceptor$Type} from "packages/kotlin/coroutines/$ContinuationInterceptor"
import {$CoroutineContext$Key, $CoroutineContext$Key$Type} from "packages/kotlin/coroutines/$CoroutineContext$Key"

export class $ContinuationInterceptor$Key implements $CoroutineContext$Key<($ContinuationInterceptor)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContinuationInterceptor$Key$Type = ($ContinuationInterceptor$Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContinuationInterceptor$Key_ = $ContinuationInterceptor$Key$Type;
}}
declare module "packages/kotlin/coroutines/$AbstractCoroutineContextKey" {
import {$CoroutineContext$Key, $CoroutineContext$Key$Type} from "packages/kotlin/coroutines/$CoroutineContext$Key"
import {$CoroutineContext$Element, $CoroutineContext$Element$Type} from "packages/kotlin/coroutines/$CoroutineContext$Element"
import {$Function1, $Function1$Type} from "packages/kotlin/jvm/functions/$Function1"

export class $AbstractCoroutineContextKey<B extends $CoroutineContext$Element, E extends B> implements $CoroutineContext$Key<(E)> {

constructor(arg0: $CoroutineContext$Key$Type<(B)>, arg1: $Function1$Type<(any), (any)>)

public "tryCast$kotlin_stdlib"(arg0: $CoroutineContext$Element$Type): E
public "isSubKey$kotlin_stdlib"(arg0: $CoroutineContext$Key$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCoroutineContextKey$Type<B, E> = ($AbstractCoroutineContextKey<(B), (E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCoroutineContextKey_<B, E> = $AbstractCoroutineContextKey$Type<(B), (E)>;
}}
declare module "packages/kotlin/coroutines/$AbstractCoroutineContextElement" {
import {$CoroutineContext, $CoroutineContext$Type} from "packages/kotlin/coroutines/$CoroutineContext"
import {$CoroutineContext$Key, $CoroutineContext$Key$Type} from "packages/kotlin/coroutines/$CoroutineContext$Key"
import {$Function2, $Function2$Type} from "packages/kotlin/jvm/functions/$Function2"
import {$CoroutineContext$Element, $CoroutineContext$Element$Type} from "packages/kotlin/coroutines/$CoroutineContext$Element"

export class $AbstractCoroutineContextElement implements $CoroutineContext$Element {

constructor(arg0: $CoroutineContext$Key$Type<(any)>)

public "get"<E extends $CoroutineContext$Element>(arg0: $CoroutineContext$Key$Type<(E)>): E
public "getKey"(): $CoroutineContext$Key<(any)>
public "plus"(arg0: $CoroutineContext$Type): $CoroutineContext
public "minusKey"(arg0: $CoroutineContext$Key$Type<(any)>): $CoroutineContext
public "fold"<R>(arg0: R, arg1: $Function2$Type<(any), (any), (any)>): R
get "key"(): $CoroutineContext$Key<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCoroutineContextElement$Type = ($AbstractCoroutineContextElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCoroutineContextElement_ = $AbstractCoroutineContextElement$Type;
}}
declare module "packages/kotlin/coroutines/$CoroutineContext$Element" {
import {$CoroutineContext, $CoroutineContext$Type} from "packages/kotlin/coroutines/$CoroutineContext"
import {$CoroutineContext$Key, $CoroutineContext$Key$Type} from "packages/kotlin/coroutines/$CoroutineContext$Key"
import {$Function2, $Function2$Type} from "packages/kotlin/jvm/functions/$Function2"

export interface $CoroutineContext$Element extends $CoroutineContext {

 "get"<E extends $CoroutineContext$Element>(arg0: $CoroutineContext$Key$Type<(E)>): E
 "getKey"(): $CoroutineContext$Key<(any)>
 "minusKey"(arg0: $CoroutineContext$Key$Type<(any)>): $CoroutineContext
 "fold"<R>(arg0: R, arg1: $Function2$Type<(any), (any), (any)>): R
 "plus"(arg0: $CoroutineContext$Type): $CoroutineContext
}

export namespace $CoroutineContext$Element {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoroutineContext$Element$Type = ($CoroutineContext$Element);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoroutineContext$Element_ = $CoroutineContext$Element$Type;
}}
declare module "packages/kotlin/coroutines/$Continuation" {
import {$CoroutineContext, $CoroutineContext$Type} from "packages/kotlin/coroutines/$CoroutineContext"

export interface $Continuation<T> {

 "getContext"(): $CoroutineContext
 "resumeWith"(arg0: any): void
}

export namespace $Continuation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Continuation$Type<T> = ($Continuation<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Continuation_<T> = $Continuation$Type<(T)>;
}}
declare module "packages/kotlin/coroutines/$CoroutineContext$Key" {
import {$CoroutineContext$Element, $CoroutineContext$Element$Type} from "packages/kotlin/coroutines/$CoroutineContext$Element"

export interface $CoroutineContext$Key<E extends $CoroutineContext$Element> {

}

export namespace $CoroutineContext$Key {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoroutineContext$Key$Type<E> = ($CoroutineContext$Key<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoroutineContext$Key_<E> = $CoroutineContext$Key$Type<(E)>;
}}
declare module "packages/kotlin/coroutines/$ContinuationInterceptor" {
import {$Continuation, $Continuation$Type} from "packages/kotlin/coroutines/$Continuation"
import {$CoroutineContext, $CoroutineContext$Type} from "packages/kotlin/coroutines/$CoroutineContext"
import {$ContinuationInterceptor$Key, $ContinuationInterceptor$Key$Type} from "packages/kotlin/coroutines/$ContinuationInterceptor$Key"
import {$CoroutineContext$Key, $CoroutineContext$Key$Type} from "packages/kotlin/coroutines/$CoroutineContext$Key"
import {$Function2, $Function2$Type} from "packages/kotlin/jvm/functions/$Function2"
import {$CoroutineContext$Element, $CoroutineContext$Element$Type} from "packages/kotlin/coroutines/$CoroutineContext$Element"

export interface $ContinuationInterceptor extends $CoroutineContext$Element {

 "get"<E extends $CoroutineContext$Element>(arg0: $CoroutineContext$Key$Type<(E)>): E
 "minusKey"(arg0: $CoroutineContext$Key$Type<(any)>): $CoroutineContext
 "interceptContinuation"<T>(arg0: $Continuation$Type<(any)>): $Continuation<(T)>
 "releaseInterceptedContinuation"(arg0: $Continuation$Type<(any)>): void
 "getKey"(): $CoroutineContext$Key<(any)>
 "fold"<R>(arg0: R, arg1: $Function2$Type<(any), (any), (any)>): R
 "plus"(arg0: $CoroutineContext$Type): $CoroutineContext
}

export namespace $ContinuationInterceptor {
const Key: $ContinuationInterceptor$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContinuationInterceptor$Type = ($ContinuationInterceptor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContinuationInterceptor_ = $ContinuationInterceptor$Type;
}}
declare module "packages/kotlin/coroutines/$CoroutineContext" {
import {$CoroutineContext$Key, $CoroutineContext$Key$Type} from "packages/kotlin/coroutines/$CoroutineContext$Key"
import {$Function2, $Function2$Type} from "packages/kotlin/jvm/functions/$Function2"
import {$CoroutineContext$Element, $CoroutineContext$Element$Type} from "packages/kotlin/coroutines/$CoroutineContext$Element"

export interface $CoroutineContext {

 "get"<E extends $CoroutineContext$Element>(arg0: $CoroutineContext$Key$Type<(E)>): E
 "plus"(arg0: $CoroutineContext$Type): $CoroutineContext
 "minusKey"(arg0: $CoroutineContext$Key$Type<(any)>): $CoroutineContext
 "fold"<R>(arg0: R, arg1: $Function2$Type<(any), (any), (any)>): R
}

export namespace $CoroutineContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoroutineContext$Type = ($CoroutineContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoroutineContext_ = $CoroutineContext$Type;
}}

declare module "packages/kotlinx/coroutines/$CoroutineDispatcher$Key" {
import {$ContinuationInterceptor, $ContinuationInterceptor$Type} from "packages/kotlin/coroutines/$ContinuationInterceptor"
import {$CoroutineDispatcher, $CoroutineDispatcher$Type} from "packages/kotlinx/coroutines/$CoroutineDispatcher"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$AbstractCoroutineContextKey, $AbstractCoroutineContextKey$Type} from "packages/kotlin/coroutines/$AbstractCoroutineContextKey"

export class $CoroutineDispatcher$Key extends $AbstractCoroutineContextKey<($ContinuationInterceptor), ($CoroutineDispatcher)> {

constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoroutineDispatcher$Key$Type = ($CoroutineDispatcher$Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoroutineDispatcher$Key_ = $CoroutineDispatcher$Key$Type;
}}
declare module "packages/kotlinx/coroutines/$CoroutineScope" {
import {$CoroutineContext, $CoroutineContext$Type} from "packages/kotlin/coroutines/$CoroutineContext"

export interface $CoroutineScope {

 "getCoroutineContext"(): $CoroutineContext

(): $CoroutineContext
}

export namespace $CoroutineScope {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoroutineScope$Type = ($CoroutineScope);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoroutineScope_ = $CoroutineScope$Type;
}}
declare module "packages/kotlinx/coroutines/$CoroutineDispatcher" {
import {$AbstractCoroutineContextElement, $AbstractCoroutineContextElement$Type} from "packages/kotlin/coroutines/$AbstractCoroutineContextElement"
import {$CoroutineDispatcher$Key, $CoroutineDispatcher$Key$Type} from "packages/kotlinx/coroutines/$CoroutineDispatcher$Key"
import {$Continuation, $Continuation$Type} from "packages/kotlin/coroutines/$Continuation"
import {$ContinuationInterceptor, $ContinuationInterceptor$Type} from "packages/kotlin/coroutines/$ContinuationInterceptor"
import {$CoroutineContext, $CoroutineContext$Type} from "packages/kotlin/coroutines/$CoroutineContext"
import {$CoroutineContext$Key, $CoroutineContext$Key$Type} from "packages/kotlin/coroutines/$CoroutineContext$Key"
import {$CoroutineContext$Element, $CoroutineContext$Element$Type} from "packages/kotlin/coroutines/$CoroutineContext$Element"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $CoroutineDispatcher extends $AbstractCoroutineContextElement implements $ContinuationInterceptor {
static readonly "Key": $CoroutineDispatcher$Key

constructor()

public "get"<E extends $CoroutineContext$Element>(arg0: $CoroutineContext$Key$Type<(E)>): E
public "dispatch"(arg0: $CoroutineContext$Type, arg1: $Runnable$Type): void
public "toString"(): string
public "plus"(arg0: $CoroutineDispatcher$Type): $CoroutineDispatcher
public "minusKey"(arg0: $CoroutineContext$Key$Type<(any)>): $CoroutineContext
public "interceptContinuation"<T>(arg0: $Continuation$Type<(any)>): $Continuation<(T)>
public "releaseInterceptedContinuation"(arg0: $Continuation$Type<(any)>): void
public "limitedParallelism"(arg0: integer, arg1: string): $CoroutineDispatcher
public "dispatchYield"(arg0: $CoroutineContext$Type, arg1: $Runnable$Type): void
public "isDispatchNeeded"(arg0: $CoroutineContext$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoroutineDispatcher$Type = ($CoroutineDispatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoroutineDispatcher_ = $CoroutineDispatcher$Type;
}}

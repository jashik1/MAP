declare module "packages/kotlin/$Pair" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $Pair<A, B> implements $Serializable {

constructor(arg0: A, arg1: B)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: A, arg1: B): $Pair<(A), (B)>
public "getSecond"(): B
public "getFirst"(): A
public "component1"(): A
public "component2"(): B
get "second"(): B
get "first"(): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<A, B> = ($Pair<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<A, B> = $Pair$Type<(A), (B)>;
}}

declare module "packages/kotlin/random/$Random" {
import {$Random$Default, $Random$Default$Type} from "packages/kotlin/random/$Random$Default"

export class $Random {
static readonly "Default": $Random$Default

constructor()

public "nextDouble"(arg0: double): double
public "nextDouble"(arg0: double, arg1: double): double
public "nextDouble"(): double
public "nextInt"(arg0: integer): integer
public "nextInt"(): integer
public "nextInt"(arg0: integer, arg1: integer): integer
public "nextBytes"(arg0: integer): (byte)[]
public "nextBytes"(arg0: (byte)[]): (byte)[]
public "nextBytes"(arg0: (byte)[], arg1: integer, arg2: integer): (byte)[]
public "nextFloat"(): float
public "nextLong"(): long
public "nextLong"(arg0: long): long
public "nextLong"(arg0: long, arg1: long): long
public "nextBoolean"(): boolean
public "nextBits"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Random$Type = ($Random);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Random_ = $Random$Type;
}}
declare module "packages/kotlin/random/$Random$Default" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Random, $Random$Type} from "packages/kotlin/random/$Random"

export class $Random$Default extends $Random implements $Serializable {
static readonly "Default": $Random$Default

constructor(arg0: $DefaultConstructorMarker$Type)

public "nextDouble"(): double
public "nextDouble"(arg0: double): double
public "nextDouble"(arg0: double, arg1: double): double
public "nextInt"(): integer
public "nextInt"(arg0: integer, arg1: integer): integer
public "nextInt"(arg0: integer): integer
public "nextBytes"(arg0: (byte)[]): (byte)[]
public "nextBytes"(arg0: integer): (byte)[]
public "nextBytes"(arg0: (byte)[], arg1: integer, arg2: integer): (byte)[]
public "nextFloat"(): float
public "nextLong"(arg0: long, arg1: long): long
public "nextLong"(arg0: long): long
public "nextLong"(): long
public "nextBoolean"(): boolean
public "nextBits"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Random$Default$Type = ($Random$Default);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Random$Default_ = $Random$Default$Type;
}}

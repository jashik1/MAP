declare module "packages/kotlin/sequences/$Sequence" {
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $Sequence<T> {

 "iterator"(): $Iterator<(T)>

(): $Iterator<(T)>
}

export namespace $Sequence {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sequence$Type<T> = ($Sequence<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Sequence_<T> = $Sequence$Type<(T)>;
}}

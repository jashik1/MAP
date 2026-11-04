declare module "packages/kotlin/collections/$AbstractList$Companion" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $AbstractList$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "checkBoundsIndexes$kotlin_stdlib"(arg0: integer, arg1: integer, arg2: integer): void
public "checkRangeIndexes$kotlin_stdlib"(arg0: integer, arg1: integer, arg2: integer): void
public "checkPositionIndex$kotlin_stdlib"(arg0: integer, arg1: integer): void
public "orderedHashCode$kotlin_stdlib"(arg0: $Collection$Type<(any)>): integer
public "checkElementIndex$kotlin_stdlib"(arg0: integer, arg1: integer): void
public "newCapacity$kotlin_stdlib"(arg0: integer, arg1: integer): integer
public "orderedEquals$kotlin_stdlib"(arg0: $Collection$Type<(any)>, arg1: $Collection$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractList$Companion$Type = ($AbstractList$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractList$Companion_ = $AbstractList$Companion$Type;
}}
declare module "packages/kotlin/collections/$AbstractCollection" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$KMappedMarker, $KMappedMarker$Type} from "packages/kotlin/jvm/internal/markers/$KMappedMarker"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $AbstractCollection<E> implements $Collection<(E)>, $KMappedMarker {


public "add"(arg0: E): boolean
public "remove"(arg0: any): boolean
public "toString"(): string
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "getSize"(): integer
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
public "stream"(): $Stream<(E)>
public "spliterator"(): $Spliterator<(E)>
public "removeIf"(arg0: $Predicate$Type<(any)>): boolean
public "parallelStream"(): $Stream<(E)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCollection$Type<E> = ($AbstractCollection<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCollection_<E> = $AbstractCollection$Type<(E)>;
}}
declare module "packages/kotlin/collections/$AbstractList" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$AbstractCollection, $AbstractCollection$Type} from "packages/kotlin/collections/$AbstractCollection"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$KMappedMarker, $KMappedMarker$Type} from "packages/kotlin/jvm/internal/markers/$KMappedMarker"
import {$ListIterator, $ListIterator$Type} from "packages/java/util/$ListIterator"
import {$AbstractList$Companion, $AbstractList$Companion$Type} from "packages/kotlin/collections/$AbstractList$Companion"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $AbstractList<E> extends $AbstractCollection<(E)> implements $List<(E)>, $KMappedMarker {
static readonly "Companion": $AbstractList$Companion


public "add"(arg0: integer, arg1: E): void
public "remove"(arg0: integer): E
public "get"(arg0: integer): E
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "indexOf"(arg0: any): integer
public "lastIndexOf"(arg0: any): integer
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "iterator"(): $Iterator<(E)>
public "addAll"(arg0: integer, arg1: $Collection$Type<(any)>): boolean
public "set"(arg0: integer, arg1: E): E
public "getSize"(): integer
public "listIterator"(): $ListIterator<(E)>
public "listIterator"(arg0: integer): $ListIterator<(E)>
public "add"(arg0: E): boolean
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public "clear"(): void
public "isEmpty"(): boolean
public "replaceAll"(arg0: $UnaryOperator$Type<(E)>): void
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
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "sort"(arg0: $Comparator$Type<(any)>): void
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
[index: number]: E
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractList$Type<E> = ($AbstractList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractList_<E> = $AbstractList$Type<(E)>;
}}

declare module "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder" {
import {$DistancePredicate, $DistancePredicate$Type} from "packages/net/minecraft/advancements/critereon/$DistancePredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"

export class $DistancePredicateBuilder {

constructor()

public "build"(): $DistancePredicate
public "x"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
public "z"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
public "y"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
public "absolute"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
public "horizontal"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DistancePredicateBuilder$Type = ($DistancePredicateBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DistancePredicateBuilder_ = $DistancePredicateBuilder$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$ILootCondition" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILootCondition extends $ILootHandler, $Predicate<($LootContext)> {

 "applyLootHandler"(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
 "test"(arg0: $LootContext$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>
 "negate"(): $Predicate<($LootContext)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>

(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
}

export namespace $ILootCondition {
function isEqual<T>(arg0: any): $Predicate<($LootContext)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootCondition$Type = ($ILootCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootCondition_ = $ILootCondition$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/action/$CompositeLootAction" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ILootAction, $ILootAction$Type} from "packages/com/almostreliable/lootjs/core/$ILootAction"

export class $CompositeLootAction implements $ILootAction {

constructor(handlers: $Collection$Type<($ILootHandler$Type)>)

public "applyLootHandler"(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeLootAction$Type = ($CompositeLootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeLootAction_ = $CompositeLootAction$Type;
}}
declare module "packages/com/almostreliable/lootjs/forge/filters/$ForgeItemFilter" {
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ResourceLocationFilter, $ResourceLocationFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ForgeItemFilter extends $ItemFilter {

 "test"(arg0: $ItemStack$Type): boolean
 "or"(other: $ItemFilter$Type): $ItemFilter
 "negate"(): $ItemFilter
 "and"(other: $ItemFilter$Type): $ItemFilter
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>

(...actions: (string)[]): $ItemFilter
}

export namespace $ForgeItemFilter {
function canPerformAnyAction(...actions: (string)[]): $ItemFilter
function canPerformAction(...actions: (string)[]): $ItemFilter
function or(...itemFilters: ($ItemFilter$Type)[]): $ItemFilter
function and(...itemFilters: ($ItemFilter$Type)[]): $ItemFilter
function not(itemFilter: $ItemFilter$Type): $ItemFilter
function custom(predicate: $Predicate$Type<($ItemStack$Type)>): $ItemFilter
function equipmentSlot(slot: $EquipmentSlot$Type): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$Type, min: integer, max: integer): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$Type): $ItemFilter
function isEqual<T>(arg0: any): $Predicate<($ItemStack)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeItemFilter$Type = ($ForgeItemFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeItemFilter_ = $ForgeItemFilter$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/action/$GroupedLootAction" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CompositeLootAction, $CompositeLootAction$Type} from "packages/com/almostreliable/lootjs/loot/action/$CompositeLootAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $GroupedLootAction extends $CompositeLootAction {

constructor(numberProvider: $NumberProvider$Type, handlers: $Collection$Type<($ILootHandler$Type)>)

public "applyLootHandler"(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GroupedLootAction$Type = ($GroupedLootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GroupedLootAction_ = $GroupedLootAction$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$LootEntry$Generator" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $LootEntry$Generator {

 "create"(arg0: $LootContext$Type): $ItemStack

(arg0: $LootContext$Type): $ItemStack
}

export namespace $LootEntry$Generator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntry$Generator$Type = ($LootEntry$Generator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntry$Generator_ = $LootEntry$Generator$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $AddAttributesFunction$Modifier {

constructor(probability: float, attribute: $Attribute$Type, operation: $AttributeModifier$Operation$Type, amount: $NumberProvider$Type, name: string, slots: $Function$Type<($ItemStack$Type), (($EquipmentSlot$Type)[])>, uuid: $UUID$Type)

public "createAttributeModifier"(context: $LootContext$Type): $AttributeModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Modifier$Type = ($AddAttributesFunction$Modifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Modifier_ = $AddAttributesFunction$Modifier$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder" {
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AddAttributesFunction$Modifier$Builder, $AddAttributesFunction$Modifier$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier$Builder"
import {$AddAttributesFunction, $AddAttributesFunction$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $AddAttributesFunction$Builder implements $LootItemFunction$Builder {

constructor()

public "forSlots"(probability: float, attribute: $Attribute$Type, amount: $NumberProvider$Type, slots: ($EquipmentSlot$Type)[]): $AddAttributesFunction$Builder
public "forSlots"(attribute: $Attribute$Type, amount: $NumberProvider$Type, slots: ($EquipmentSlot$Type)[]): $AddAttributesFunction$Builder
public "preserveDefaults"(flag: boolean): $AddAttributesFunction$Builder
public "build"(): $AddAttributesFunction
public "add"(modifier: $AddAttributesFunction$Modifier$Type): $AddAttributesFunction$Builder
public "add"(attribute: $Attribute$Type, amount: $NumberProvider$Type, action: $Consumer$Type<($AddAttributesFunction$Modifier$Builder$Type)>): $AddAttributesFunction$Builder
public "simple"(attribute: $Attribute$Type, amount: $NumberProvider$Type): $AddAttributesFunction$Builder
public "simple"(probability: float, attribute: $Attribute$Type, amount: $NumberProvider$Type): $AddAttributesFunction$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Builder$Type = ($AddAttributesFunction$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Builder_ = $AddAttributesFunction$Builder$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/$LootEntryWrapper" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $LootEntryWrapper {

constructor()

public static "of"(arg0: $ItemStack$Type, count: integer, nbt: $CompoundTag$Type): $LootEntry
public static "of"(arg0: $ItemStack$Type, nbt: $CompoundTag$Type): $LootEntry
public static "of"(arg0: $ItemStack$Type, count: integer): $LootEntry
public static "of"(o: any): $LootEntry
public static "withChance"(o: any, chance: integer): $LootEntry
public static "ofJson"(json: $JsonObject$Type): $LootEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntryWrapper$Type = ($LootEntryWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntryWrapper_ = $LootEntryWrapper$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS" {
import {$EntityPredicateBuilderJS, $EntityPredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import {$AllOfCondition$Builder, $AllOfCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$AllOfCondition$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AnyOfCondition$Builder, $AnyOfCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$AnyOfCondition$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"

export class $DamageSourcePredicateBuilderJS implements $LootItemCondition$Builder {

constructor()

public "is"(tag: $ResourceLocation$Type): $DamageSourcePredicateBuilderJS
public "anyType"(...names: (string)[]): $DamageSourcePredicateBuilderJS
public "matchDirectEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $DamageSourcePredicateBuilderJS
public "matchSourceEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $DamageSourcePredicateBuilderJS
public "isNot"(tag: $ResourceLocation$Type): $DamageSourcePredicateBuilderJS
public "or"(arg0: $LootItemCondition$Builder$Type): $AnyOfCondition$Builder
public "invert"(): $LootItemCondition$Builder
public "and"(arg0: $LootItemCondition$Builder$Type): $AllOfCondition$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageSourcePredicateBuilderJS$Type = ($DamageSourcePredicateBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageSourcePredicateBuilderJS_ = $DamageSourcePredicateBuilderJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier$Builder" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $AddAttributesFunction$Modifier$Builder {

constructor(attribute: $Attribute$Type, amount: $NumberProvider$Type)

public "setProbability"(probability: float): void
public "setOperation"(operation: $AttributeModifier$Operation$Type): void
public "build"(): $AddAttributesFunction$Modifier
public "setName"(name: string): void
public "setSlots"(slots: ($EquipmentSlot$Type)[]): void
public "setUuid"(uuid: $UUID$Type): void
set "probability"(value: float)
set "operation"(value: $AttributeModifier$Operation$Type)
set "name"(value: string)
set "slots"(value: ($EquipmentSlot$Type)[])
set "uuid"(value: $UUID$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Modifier$Builder$Type = ($AddAttributesFunction$Modifier$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Modifier$Builder_ = $AddAttributesFunction$Modifier$Builder$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$LootActionsContainer" {
import {$ModifyLootAction$Callback, $ModifyLootAction$Callback$Type} from "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$Type} from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$ILootAction, $ILootAction$Type} from "packages/com/almostreliable/lootjs/core/$ILootAction"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export interface $LootActionsContainer<A extends $LootActionsContainer<(any)>> {

 "removeLoot"(filter: $ItemFilter$Type): A
 "addWeightedLoot"(numberProvider: $NumberProvider$Type, allowDuplicateLoot: boolean, poolEntries: ($LootEntry$Type)[]): A
 "addWeightedLoot"(poolEntries: ($LootEntry$Type)[]): A
 "addWeightedLoot"(numberProvider: $NumberProvider$Type, poolEntries: ($LootEntry$Type)[]): A
 "addLoot"(...entries: ($LootEntry$Type)[]): A
 "addSequenceLoot"(...entries: ($LootEntry$Type)[]): A
 "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type, preserveCount: boolean): A
 "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type): A
 "triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$Type, fire: boolean): A
 "triggerExplosion"(radius: float, destroy: boolean, fire: boolean): A
 "addAction"(arg0: $ILootAction$Type): A
 "addAlternativesLoot"(...entries: ($LootEntry$Type)[]): A
 "triggerLightningStrike"(shouldDamage: boolean): A
 "modifyLoot"(filter: $ItemFilter$Type, callback: $ModifyLootAction$Callback$Type): A
 "dropExperience"(amount: integer): A

(filter: $ItemFilter$Type): A
}

export namespace $LootActionsContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootActionsContainer$Type<A> = ($LootActionsContainer<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootActionsContainer_<A> = $LootActionsContainer$Type<(A)>;
}}
declare module "packages/com/almostreliable/lootjs/core/$ILootHandler" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILootHandler {

 "applyLootHandler"(arg0: $LootContext$Type, arg1: $List$Type<($ItemStack$Type)>): boolean

(arg0: $LootContext$Type, arg1: $List$Type<($ItemStack$Type)>): boolean
}

export namespace $ILootHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootHandler$Type = ($ILootHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootHandler_ = $ILootHandler$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/builder/$LootActionsBuilderJS" {
import {$EntityPredicateBuilderJS, $EntityPredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootConditionsContainer, $LootConditionsContainer$Type} from "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Resolver, $Resolver$Type} from "packages/com/almostreliable/lootjs/filters/$Resolver"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LootActionsContainer, $LootActionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootActionsContainer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ModifyLootAction$Callback, $ModifyLootAction$Callback$Type} from "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$DamageSourcePredicateBuilderJS, $DamageSourcePredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS"
import {$LootFunctionsContainer, $LootFunctionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer"
import {$ILootCondition, $ILootCondition$Type} from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$DistancePredicateBuilder, $DistancePredicateBuilder$Type} from "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$Type} from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import {$LootContextJS, $LootContextJS$Type} from "packages/com/almostreliable/lootjs/kube/$LootContextJS"
import {$GroupedLootBuilder, $GroupedLootBuilder$Type} from "packages/com/almostreliable/lootjs/loot/$GroupedLootBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootActionsBuilderJS implements $LootConditionsContainer<($LootActionsBuilderJS)>, $LootFunctionsContainer<($LootActionsBuilderJS)>, $LootActionsContainer<($LootActionsBuilderJS)> {
static readonly "DEPRECATED_MSG": string

constructor()

public "playerAction"(action: $Consumer$Type<($ServerPlayer$Type)>): $LootActionsBuilderJS
public "group"(callback: $Consumer$Type<($GroupedLootBuilder$Type)>): $LootActionsBuilderJS
public "apply"(action: $Consumer$Type<($LootContextJS$Type)>): $LootActionsBuilderJS
public "pool"(callback: $Consumer$Type<($GroupedLootBuilder$Type)>): $LootActionsBuilderJS
public "logName"(logName: string): $LootActionsBuilderJS
public "addCondition"(condition: $ILootCondition$Type): $LootActionsBuilderJS
public "getLogName"(alternative: string): string
public "matchEquip"(slot: $EquipmentSlot$Type, filter: $ItemFilter$Type): $LootActionsBuilderJS
public "timeCheck"(period: long, min: integer, max: integer): $LootActionsBuilderJS
public "timeCheck"(min: integer, max: integer): $LootActionsBuilderJS
public "matchLoot"(filter: $ItemFilter$Type): $LootActionsBuilderJS
public "matchLoot"(filter: $ItemFilter$Type, exact: boolean): $LootActionsBuilderJS
public "matchMainHand"(filter: $ItemFilter$Type): $LootActionsBuilderJS
public "matchOffHand"(filter: $ItemFilter$Type): $LootActionsBuilderJS
public "anyBiome"(...resolvers: ($Resolver$Type)[]): $LootActionsBuilderJS
public "killedByPlayer"(): $LootActionsBuilderJS
public "anyDimension"(...dimensions: ($ResourceLocation$Type)[]): $LootActionsBuilderJS
public "weatherCheck"(map: $Map$Type<(string), (boolean)>): $LootActionsBuilderJS
public "anyStructure"(idOrTags: (string)[], exact: boolean): $LootActionsBuilderJS
public "matchBlockState"(block: $Block$Type, propertyMap: $Map$Type<(string), (string)>): $LootActionsBuilderJS
public "randomTableBonus"(enchantment: $Enchantment$Type, chances: (float)[]): $LootActionsBuilderJS
public "killerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $LootActionsBuilderJS
public "hasAnyStage"(...stages: (string)[]): $LootActionsBuilderJS
public "matchKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "matchPlayer"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "matchEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "distanceToKiller"(bounds: $MinMaxBounds$Doubles$Type): $LootActionsBuilderJS
public "matchFluid"(resolver: $Resolver$Type): $LootActionsBuilderJS
public "matchDamageSource"(action: $Consumer$Type<($DamageSourcePredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "matchDirectKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "createConditions"(action: $Consumer$Type<($LootConditionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $List<($ILootCondition)>
public "customCondition"(json: $JsonObject$Type): $LootActionsBuilderJS
public "or"(action: $Consumer$Type<($LootConditionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $LootActionsBuilderJS
public "and"(action: $Consumer$Type<($LootConditionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $LootActionsBuilderJS
public "not"(action: $Consumer$Type<($LootConditionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $LootActionsBuilderJS
public "randomChance"(value: float): $LootActionsBuilderJS
public "randomChanceWithLooting"(value: float, looting: float): $LootActionsBuilderJS
public "randomChanceWithEnchantment"(enchantment: $Enchantment$Type, chances: (float)[]): $LootActionsBuilderJS
public "blockEntityPredicate"(predicate: $Predicate$Type<($BlockEntity$Type)>): $LootActionsBuilderJS
public "directKillerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $LootActionsBuilderJS
public "customDistanceToPlayer"(action: $Consumer$Type<($DistancePredicateBuilder$Type)>): $LootActionsBuilderJS
public "entityPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $LootActionsBuilderJS
public "lightLevel"(min: integer, max: integer): $LootActionsBuilderJS
public "addCondition"(builder: $LootItemCondition$Builder$Type): $LootActionsBuilderJS
public "survivesExplosion"(): $LootActionsBuilderJS
public "biome"(...resolvers: ($Resolver$Type)[]): $LootActionsBuilderJS
public "playerPredicate"(predicate: $Predicate$Type<($ServerPlayer$Type)>): $LootActionsBuilderJS
public "setName"(component: $Component$Type): $LootActionsBuilderJS
public "addAttributes"(action: $Consumer$Type<($AddAttributesFunction$Builder$Type)>): $LootActionsBuilderJS
public "functions"(filter: $ItemFilter$Type, action: $Consumer$Type<($LootFunctionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $LootActionsBuilderJS
public "addFunction"(builder: $LootItemFunction$Builder$Type): $LootActionsBuilderJS
public "damage"(numberProvider: $NumberProvider$Type): $LootActionsBuilderJS
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$Type, probability: float, n: integer): $LootActionsBuilderJS
public "simulateExplosionDecay"(): $LootActionsBuilderJS
public "addNBT"(tag: $CompoundTag$Type): $LootActionsBuilderJS
public "replaceLore"(...components: ($Component$Type)[]): $LootActionsBuilderJS
public "smeltLoot"(): $LootActionsBuilderJS
public "addNbt"(tag: $CompoundTag$Type): $LootActionsBuilderJS
public "addLore"(...components: ($Component$Type)[]): $LootActionsBuilderJS
public "limitCount"(numberProvider: $NumberProvider$Type): $LootActionsBuilderJS
public "limitCount"(numberProviderMin: $NumberProvider$Type, numberProviderMax: $NumberProvider$Type): $LootActionsBuilderJS
public "addPotion"(potion: $Potion$Type): $LootActionsBuilderJS
public "customFunction"(json: $JsonObject$Type): $LootActionsBuilderJS
public "applyLootingBonus"(numberProvider: $NumberProvider$Type): $LootActionsBuilderJS
public "enchantRandomly"(): $LootActionsBuilderJS
public "enchantRandomly"(enchantments: ($Enchantment$Type)[]): $LootActionsBuilderJS
public "enchantWithLevels"(numberProvider: $NumberProvider$Type, allowTreasure: boolean): $LootActionsBuilderJS
public "enchantWithLevels"(numberProvider: $NumberProvider$Type): $LootActionsBuilderJS
public "applyOreBonus"(enchantment: $Enchantment$Type): $LootActionsBuilderJS
public "applyBonus"(enchantment: $Enchantment$Type, multiplier: integer): $LootActionsBuilderJS
public "removeLoot"(filter: $ItemFilter$Type): $LootActionsBuilderJS
public "addWeightedLoot"(numberProvider: $NumberProvider$Type, allowDuplicateLoot: boolean, poolEntries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "addWeightedLoot"(poolEntries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "addWeightedLoot"(numberProvider: $NumberProvider$Type, poolEntries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "addLoot"(...entries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "addSequenceLoot"(...entries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type, preserveCount: boolean): $LootActionsBuilderJS
public "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type): $LootActionsBuilderJS
public "triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$Type, fire: boolean): $LootActionsBuilderJS
public "triggerExplosion"(radius: float, destroy: boolean, fire: boolean): $LootActionsBuilderJS
public "addAlternativesLoot"(...entries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "triggerLightningStrike"(shouldDamage: boolean): $LootActionsBuilderJS
public "modifyLoot"(filter: $ItemFilter$Type, callback: $ModifyLootAction$Callback$Type): $LootActionsBuilderJS
public "dropExperience"(amount: integer): $LootActionsBuilderJS
set "name"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootActionsBuilderJS$Type = ($LootActionsBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootActionsBuilderJS_ = $LootActionsBuilderJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootItemFunction, $LootItemFunction$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"

export interface $LootFunctionsContainer<F extends $LootFunctionsContainer<(any)>> {

 "setName"(component: $Component$Type): F
 "addAttributes"(action: $Consumer$Type<($AddAttributesFunction$Builder$Type)>): F
 "functions"(filter: $ItemFilter$Type, action: $Consumer$Type<($LootFunctionsContainer$Type<(F)>)>): F
 "addFunction"(builder: $LootItemFunction$Builder$Type): F
 "addFunction"(arg0: $LootItemFunction$Type): F
 "damage"(numberProvider: $NumberProvider$Type): F
 "applyBinomialDistributionBonus"(enchantment: $Enchantment$Type, probability: float, n: integer): F
 "simulateExplosionDecay"(): F
 "addNBT"(tag: $CompoundTag$Type): F
 "replaceLore"(...components: ($Component$Type)[]): F
 "smeltLoot"(): F
 "addNbt"(tag: $CompoundTag$Type): F
 "addLore"(...components: ($Component$Type)[]): F
 "limitCount"(numberProvider: $NumberProvider$Type): F
 "limitCount"(numberProviderMin: $NumberProvider$Type, numberProviderMax: $NumberProvider$Type): F
 "addPotion"(potion: $Potion$Type): F
 "customFunction"(json: $JsonObject$Type): F
 "applyLootingBonus"(numberProvider: $NumberProvider$Type): F
 "enchantRandomly"(): F
 "enchantRandomly"(enchantments: ($Enchantment$Type)[]): F
 "enchantWithLevels"(numberProvider: $NumberProvider$Type, allowTreasure: boolean): F
 "enchantWithLevels"(numberProvider: $NumberProvider$Type): F
 "applyOreBonus"(enchantment: $Enchantment$Type): F
 "applyBonus"(enchantment: $Enchantment$Type, multiplier: integer): F

(component: $Component$Type): F
}

export namespace $LootFunctionsContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootFunctionsContainer$Type<F> = ($LootFunctionsContainer<(F)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootFunctionsContainer_<F> = $LootFunctionsContainer$Type<(F)>;
}}
declare module "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ResourceLocationFilter extends $Predicate<($ResourceLocation)> {

 "test"(arg0: $ResourceLocation$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ResourceLocation)>
 "negate"(): $Predicate<($ResourceLocation)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ResourceLocation)>

(arg0: $ResourceLocation$Type): boolean
}

export namespace $ResourceLocationFilter {
function isEqual<T>(arg0: any): $Predicate<($ResourceLocation)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceLocationFilter$Type = ($ResourceLocationFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceLocationFilter_ = $ResourceLocationFilter$Type;
}}
declare module "packages/com/almostreliable/lootjs/filters/$ItemFilter" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ResourceLocationFilter, $ResourceLocationFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ItemFilter extends $Predicate<($ItemStack)> {

 "test"(arg0: $ItemStack$Type): boolean
 "or"(other: $ItemFilter$Type): $ItemFilter
 "negate"(): $ItemFilter
 "and"(other: $ItemFilter$Type): $ItemFilter
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>

(arg0: $ItemStack$Type): boolean
}

export namespace $ItemFilter {
const ALWAYS_FALSE: $ItemFilter
const ALWAYS_TRUE: $ItemFilter
const SWORD: $ItemFilter
const PICKAXE: $ItemFilter
const AXE: $ItemFilter
const SHOVEL: $ItemFilter
const HOE: $ItemFilter
const TOOL: $ItemFilter
const POTION: $ItemFilter
const HAS_TIER: $ItemFilter
const PROJECTILE_WEAPON: $ItemFilter
const ARMOR: $ItemFilter
const WEAPON: $ItemFilter
const HEAD_ARMOR: $ItemFilter
const CHEST_ARMOR: $ItemFilter
const LEGS_ARMOR: $ItemFilter
const FEET_ARMOR: $ItemFilter
const FOOD: $ItemFilter
const DAMAGEABLE: $ItemFilter
const DAMAGED: $ItemFilter
const ENCHANTABLE: $ItemFilter
const ENCHANTED: $ItemFilter
const BLOCK: $ItemFilter
function or(...itemFilters: ($ItemFilter$Type)[]): $ItemFilter
function and(...itemFilters: ($ItemFilter$Type)[]): $ItemFilter
function not(itemFilter: $ItemFilter$Type): $ItemFilter
function custom(predicate: $Predicate$Type<($ItemStack$Type)>): $ItemFilter
function equipmentSlot(slot: $EquipmentSlot$Type): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$Type, min: integer, max: integer): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$Type): $ItemFilter
function isEqual<T>(arg0: any): $Predicate<($ItemStack)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilter$Type = ($ItemFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFilter_ = $ItemFilter$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/wrapper/$IntervalJS" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"

export class $IntervalJS {

constructor()

public "toString"(): string
public "min"(min: double): $IntervalJS
public "max"(max: double): $IntervalJS
public "matches"(value: double): boolean
public "between"(min: double, max: double): $IntervalJS
public static "ofInt"(o: any): $MinMaxBounds$Ints
public static "ofDoubles"(o: any): $MinMaxBounds$Doubles
public "getVanillaInt"(): $MinMaxBounds$Ints
public "matchesSqr"(value: double): boolean
public "getVanillaDoubles"(): $MinMaxBounds$Doubles
get "vanillaInt"(): $MinMaxBounds$Ints
get "vanillaDoubles"(): $MinMaxBounds$Doubles
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntervalJS$Type = ($IntervalJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntervalJS_ = $IntervalJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer" {
import {$EntityPredicateBuilderJS, $EntityPredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$DamageSourcePredicateBuilderJS, $DamageSourcePredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ILootCondition, $ILootCondition$Type} from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$DistancePredicateBuilder, $DistancePredicateBuilder$Type} from "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import {$Resolver, $Resolver$Type} from "packages/com/almostreliable/lootjs/filters/$Resolver"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $LootConditionsContainer<B extends $LootConditionsContainer<(any)>> {

 "matchEquip"(slot: $EquipmentSlot$Type, filter: $ItemFilter$Type): B
 "timeCheck"(period: long, min: integer, max: integer): B
 "timeCheck"(min: integer, max: integer): B
 "matchLoot"(filter: $ItemFilter$Type): B
 "matchLoot"(filter: $ItemFilter$Type, exact: boolean): B
 "matchMainHand"(filter: $ItemFilter$Type): B
 "matchOffHand"(filter: $ItemFilter$Type): B
 "anyBiome"(...resolvers: ($Resolver$Type)[]): B
 "killedByPlayer"(): B
 "anyDimension"(...dimensions: ($ResourceLocation$Type)[]): B
 "weatherCheck"(map: $Map$Type<(string), (boolean)>): B
 "anyStructure"(idOrTags: (string)[], exact: boolean): B
 "matchBlockState"(block: $Block$Type, propertyMap: $Map$Type<(string), (string)>): B
 "randomTableBonus"(enchantment: $Enchantment$Type, chances: (float)[]): B
 "killerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): B
 "hasAnyStage"(...stages: (string)[]): B
 "matchKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): B
 "matchPlayer"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): B
 "matchEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): B
 "distanceToKiller"(bounds: $MinMaxBounds$Doubles$Type): B
 "matchFluid"(resolver: $Resolver$Type): B
 "matchDamageSource"(action: $Consumer$Type<($DamageSourcePredicateBuilderJS$Type)>): B
 "matchDirectKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): B
 "createConditions"(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): $List<($ILootCondition)>
 "customCondition"(json: $JsonObject$Type): B
 "or"(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): B
 "and"(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): B
 "not"(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): B
 "randomChance"(value: float): B
 "randomChanceWithLooting"(value: float, looting: float): B
 "randomChanceWithEnchantment"(enchantment: $Enchantment$Type, chances: (float)[]): B
 "blockEntityPredicate"(predicate: $Predicate$Type<($BlockEntity$Type)>): B
 "directKillerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): B
 "customDistanceToPlayer"(action: $Consumer$Type<($DistancePredicateBuilder$Type)>): B
 "entityPredicate"(predicate: $Predicate$Type<($Entity$Type)>): B
 "lightLevel"(min: integer, max: integer): B
 "addCondition"(arg0: $ILootCondition$Type): B
 "addCondition"(builder: $LootItemCondition$Builder$Type): B
 "survivesExplosion"(): B
 "biome"(...resolvers: ($Resolver$Type)[]): B
 "playerPredicate"(predicate: $Predicate$Type<($ServerPlayer$Type)>): B

(slot: $EquipmentSlot$Type, filter: $ItemFilter$Type): B
}

export namespace $LootConditionsContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootConditionsContainer$Type<B> = ($LootConditionsContainer<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootConditionsContainer_<B> = $LootConditionsContainer$Type<(B)>;
}}
declare module "packages/com/almostreliable/lootjs/core/$ILootAction" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILootAction extends $ILootHandler {

 "applyLootHandler"(arg0: $LootContext$Type, arg1: $List$Type<($ItemStack$Type)>): boolean

(arg0: $LootContext$Type, arg1: $List$Type<($ItemStack$Type)>): boolean
}

export namespace $ILootAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootAction$Type = ($ILootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootAction_ = $ILootAction$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$LootContextType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LootContextType extends $Enum<($LootContextType)> {
static readonly "UNKNOWN": $LootContextType
static readonly "BLOCK": $LootContextType
static readonly "ENTITY": $LootContextType
static readonly "CHEST": $LootContextType
static readonly "FISHING": $LootContextType
static readonly "GIFT": $LootContextType
static readonly "PIGLIN_BARTER": $LootContextType
static readonly "ADVANCEMENT_ENTITY": $LootContextType
static readonly "ADVANCEMENT_REWARD": $LootContextType


public static "values"(): ($LootContextType)[]
public static "valueOf"(name: string): $LootContextType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootContextType$Type = (("gift") | ("chest") | ("piglin_barter") | ("advancement_entity") | ("advancement_reward") | ("fishing") | ("block") | ("entity") | ("unknown")) | ($LootContextType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootContextType_ = $LootContextType$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/$LootContextJS" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootContextType, $LootContextType$Type} from "packages/com/almostreliable/lootjs/core/$LootContextType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootContextJS {

constructor(context: $LootContext$Type)

public "removeLoot"(itemFilter: $ItemFilter$Type): void
public "addLoot"(lootEntry: $LootEntry$Type): void
public "forEachLoot"(action: $Consumer$Type<($ItemStack$Type)>): void
public "getDestroyedBlock"(): $BlockContainerJS
public "getLuck"(): float
public "getKillerEntity"(): $Entity
public "getLoot"(): $List<($ItemStack)>
public "hasLoot"(ingredient: $ItemFilter$Type): boolean
public "getExplosionRadius"(): float
public "findLoot"(itemFilter: $ItemFilter$Type): $List<($ItemStack)>
public "isExploded"(): boolean
public "getVanillaContext"(): $LootContext
public "getType"(): $LootContextType
public "getPosition"(): $Vec3
public "getServer"(): $MinecraftServer
public "getLooting"(): integer
public "cancel"(): void
public "getEntity"(): $Entity
public "getTool"(): $ItemStack
public "getRandom"(): $RandomSource
public "isCanceled"(): boolean
public "getLevel"(): $ServerLevel
public "getBlockPos"(): $BlockPos
public "getDamageSource"(): $DamageSource
public "getLootTableId"(): $ResourceLocation
public "getPlayer"(): $ServerPlayer
public "lootSize"(): integer
public "getCustomData"(): $Map<(string), (any)>
get "destroyedBlock"(): $BlockContainerJS
get "luck"(): float
get "killerEntity"(): $Entity
get "loot"(): $List<($ItemStack)>
get "explosionRadius"(): float
get "exploded"(): boolean
get "vanillaContext"(): $LootContext
get "type"(): $LootContextType
get "position"(): $Vec3
get "server"(): $MinecraftServer
get "looting"(): integer
get "entity"(): $Entity
get "tool"(): $ItemStack
get "random"(): $RandomSource
get "canceled"(): boolean
get "level"(): $ServerLevel
get "blockPos"(): $BlockPos
get "damageSource"(): $DamageSource
get "lootTableId"(): $ResourceLocation
get "player"(): $ServerPlayer
get "customData"(): $Map<(string), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootContextJS$Type = ($LootContextJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootContextJS_ = $LootContextJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$LootItemFunction, $LootItemFunction$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import {$LootItemFunctionType, $LootItemFunctionType$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunctionType"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$LootContextParam, $LootContextParam$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ValidationContext, $ValidationContext$Type} from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier"

export class $AddAttributesFunction implements $LootItemFunction {

constructor(preserveDefaultModifier: boolean, modifiers: $List$Type<($AddAttributesFunction$Modifier$Type)>)

public "preserveDefaultAttributes"(itemStack: $ItemStack$Type, slot: $EquipmentSlot$Type): void
public "apply"(itemStack: $ItemStack$Type, context: $LootContext$Type): $ItemStack
public "getType"(): $LootItemFunctionType
public static "decorate"(arg0: $BiFunction$Type<($ItemStack$Type), ($LootContext$Type), ($ItemStack$Type)>, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: $LootContext$Type): $Consumer<($ItemStack)>
public "validate"(arg0: $ValidationContext$Type): void
public "getReferencedContextParams"(): $Set<($LootContextParam<(any)>)>
public "andThen"<V>(arg0: $Function$Type<(any), (any)>): $BiFunction<($ItemStack), ($LootContext), (V)>
get "type"(): $LootItemFunctionType
get "referencedContextParams"(): $Set<($LootContextParam<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Type = ($AddAttributesFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction_ = $AddAttributesFunction$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$LootEntry" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$LootFunctionsContainer, $LootFunctionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer"
import {$LootConditionsContainer, $LootConditionsContainer$Type} from "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$LootEntry$Generator, $LootEntry$Generator$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry$Generator"

export class $LootEntry implements $LootFunctionsContainer<($LootEntry)> {

constructor(generator: $LootEntry$Generator$Type)
constructor(itemStack: $ItemStack$Type)
constructor(item: $Item$Type)

public "when"(action: $Consumer$Type<($LootConditionsContainer$Type<(any)>)>): $LootEntry
public "getWeight"(): integer
public "withChance"(chance: integer): $LootEntry
public "createItem"(context: $LootContext$Type): $ItemStack
public "matchesConditions"(context: $LootContext$Type): boolean
public "hasWeight"(): boolean
public "withWeight"(weight: integer): $LootEntry
public "setName"(component: $Component$Type): $LootEntry
public "addAttributes"(action: $Consumer$Type<($AddAttributesFunction$Builder$Type)>): $LootEntry
public "functions"(filter: $ItemFilter$Type, action: $Consumer$Type<($LootFunctionsContainer$Type<($LootEntry$Type)>)>): $LootEntry
public "addFunction"(builder: $LootItemFunction$Builder$Type): $LootEntry
public "damage"(numberProvider: $NumberProvider$Type): $LootEntry
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$Type, probability: float, n: integer): $LootEntry
public "simulateExplosionDecay"(): $LootEntry
public "addNBT"(tag: $CompoundTag$Type): $LootEntry
public "replaceLore"(...components: ($Component$Type)[]): $LootEntry
public "smeltLoot"(): $LootEntry
public "addNbt"(tag: $CompoundTag$Type): $LootEntry
public "addLore"(...components: ($Component$Type)[]): $LootEntry
public "limitCount"(numberProvider: $NumberProvider$Type): $LootEntry
public "limitCount"(numberProviderMin: $NumberProvider$Type, numberProviderMax: $NumberProvider$Type): $LootEntry
public "addPotion"(potion: $Potion$Type): $LootEntry
public "customFunction"(json: $JsonObject$Type): $LootEntry
public "applyLootingBonus"(numberProvider: $NumberProvider$Type): $LootEntry
public "enchantRandomly"(): $LootEntry
public "enchantRandomly"(enchantments: ($Enchantment$Type)[]): $LootEntry
public "enchantWithLevels"(numberProvider: $NumberProvider$Type, allowTreasure: boolean): $LootEntry
public "enchantWithLevels"(numberProvider: $NumberProvider$Type): $LootEntry
public "applyOreBonus"(enchantment: $Enchantment$Type): $LootEntry
public "applyBonus"(enchantment: $Enchantment$Type, multiplier: integer): $LootEntry
get "weight"(): integer
set "name"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntry$Type = ($LootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntry_ = $LootEntry$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ModifyLootAction$Callback {

 "modify"(arg0: $ItemStack$Type): $ItemStack

(arg0: $ItemStack$Type): $ItemStack
}

export namespace $ModifyLootAction$Callback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyLootAction$Callback$Type = ($ModifyLootAction$Callback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifyLootAction$Callback_ = $ModifyLootAction$Callback$Type;
}}
declare module "packages/com/almostreliable/lootjs/filters/$Resolver" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Resolver {


public static "of"(value: string): $Resolver
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resolver$Type = ($Resolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resolver_ = $Resolver$Type;
}}
declare module "packages/com/almostreliable/lootjs/mixin/$LootItemConditionMixin" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ILootCondition, $ILootCondition$Type} from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $LootItemConditionMixin extends $ILootCondition {

 "applyLootHandler"(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
 "test"(arg0: $LootContext$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>
 "negate"(): $Predicate<($LootContext)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>

(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
}

export namespace $LootItemConditionMixin {
function isEqual<T>(arg0: any): $Predicate<($LootContext)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootItemConditionMixin$Type = ($LootItemConditionMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootItemConditionMixin_ = $LootItemConditionMixin$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS" {
import {$Resolver, $Resolver$Type} from "packages/com/almostreliable/lootjs/filters/$Resolver"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$EntityPredicate, $EntityPredicate$Type} from "packages/net/minecraft/advancements/critereon/$EntityPredicate"
import {$ExtendedEntityFlagsPredicate$IBuilder, $ExtendedEntityFlagsPredicate$IBuilder$Type} from "packages/com/almostreliable/lootjs/predicate/$ExtendedEntityFlagsPredicate$IBuilder"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EntityPredicateBuilderJS implements $ExtendedEntityFlagsPredicate$IBuilder<($EntityPredicate)> {

constructor()

public "matchTargetedEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $EntityPredicateBuilderJS
public "matchFluid"(resolver: $Resolver$Type): $EntityPredicateBuilderJS
public "isInWater"(flag: boolean): $EntityPredicateBuilderJS
public "build"(): $EntityPredicate
public "anyType"(...resolvers: ($Resolver$Type)[]): $EntityPredicateBuilderJS
public "matchBlock"(resolver: $Resolver$Type, propertyMap: $Map$Type<(string), (string)>): $EntityPredicateBuilderJS
public "matchBlock"(resolver: $Resolver$Type): $EntityPredicateBuilderJS
public "isOnFire"(flag: boolean): $EntityPredicateBuilderJS
public "matchMount"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $EntityPredicateBuilderJS
public "isSwimming"(flag: boolean): $EntityPredicateBuilderJS
public "isSprinting"(flag: boolean): $EntityPredicateBuilderJS
public "matchSlot"(slot: $EquipmentSlot$Type, itemFilter: $ItemFilter$Type): $EntityPredicateBuilderJS
public "nbt"(nbt: $CompoundTag$Type): $EntityPredicateBuilderJS
public "isOnGround"(flag: boolean): $EntityPredicateBuilderJS
public "hasEffect"(effect: $MobEffect$Type, amplifier: integer): $EntityPredicateBuilderJS
public "hasEffect"(effect: $MobEffect$Type): $EntityPredicateBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPredicateBuilderJS$Type = ($EntityPredicateBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPredicateBuilderJS_ = $EntityPredicateBuilderJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$GroupedLootBuilder" {
import {$EntityPredicateBuilderJS, $EntityPredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GroupedLootAction, $GroupedLootAction$Type} from "packages/com/almostreliable/lootjs/loot/action/$GroupedLootAction"
import {$LootConditionsContainer, $LootConditionsContainer$Type} from "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Resolver, $Resolver$Type} from "packages/com/almostreliable/lootjs/filters/$Resolver"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LootActionsContainer, $LootActionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootActionsContainer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ModifyLootAction$Callback, $ModifyLootAction$Callback$Type} from "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$DamageSourcePredicateBuilderJS, $DamageSourcePredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$LootFunctionsContainer, $LootFunctionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer"
import {$ILootCondition, $ILootCondition$Type} from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$DistancePredicateBuilder, $DistancePredicateBuilder$Type} from "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$Type} from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GroupedLootBuilder implements $LootConditionsContainer<($GroupedLootBuilder)>, $LootFunctionsContainer<($GroupedLootBuilder)>, $LootActionsContainer<($GroupedLootBuilder)> {

constructor()

public "build"(): $GroupedLootAction
public "rolls"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "matchEquip"(slot: $EquipmentSlot$Type, filter: $ItemFilter$Type): $GroupedLootBuilder
public "timeCheck"(period: long, min: integer, max: integer): $GroupedLootBuilder
public "timeCheck"(min: integer, max: integer): $GroupedLootBuilder
public "matchLoot"(filter: $ItemFilter$Type): $GroupedLootBuilder
public "matchLoot"(filter: $ItemFilter$Type, exact: boolean): $GroupedLootBuilder
public "matchMainHand"(filter: $ItemFilter$Type): $GroupedLootBuilder
public "matchOffHand"(filter: $ItemFilter$Type): $GroupedLootBuilder
public "anyBiome"(...resolvers: ($Resolver$Type)[]): $GroupedLootBuilder
public "killedByPlayer"(): $GroupedLootBuilder
public "anyDimension"(...dimensions: ($ResourceLocation$Type)[]): $GroupedLootBuilder
public "weatherCheck"(map: $Map$Type<(string), (boolean)>): $GroupedLootBuilder
public "anyStructure"(idOrTags: (string)[], exact: boolean): $GroupedLootBuilder
public "matchBlockState"(block: $Block$Type, propertyMap: $Map$Type<(string), (string)>): $GroupedLootBuilder
public "randomTableBonus"(enchantment: $Enchantment$Type, chances: (float)[]): $GroupedLootBuilder
public "killerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $GroupedLootBuilder
public "hasAnyStage"(...stages: (string)[]): $GroupedLootBuilder
public "matchKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $GroupedLootBuilder
public "matchPlayer"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $GroupedLootBuilder
public "matchEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $GroupedLootBuilder
public "distanceToKiller"(bounds: $MinMaxBounds$Doubles$Type): $GroupedLootBuilder
public "matchFluid"(resolver: $Resolver$Type): $GroupedLootBuilder
public "matchDamageSource"(action: $Consumer$Type<($DamageSourcePredicateBuilderJS$Type)>): $GroupedLootBuilder
public "matchDirectKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $GroupedLootBuilder
public "createConditions"(action: $Consumer$Type<($LootConditionsContainer$Type<($GroupedLootBuilder$Type)>)>): $List<($ILootCondition)>
public "customCondition"(json: $JsonObject$Type): $GroupedLootBuilder
public "or"(action: $Consumer$Type<($LootConditionsContainer$Type<($GroupedLootBuilder$Type)>)>): $GroupedLootBuilder
public "and"(action: $Consumer$Type<($LootConditionsContainer$Type<($GroupedLootBuilder$Type)>)>): $GroupedLootBuilder
public "not"(action: $Consumer$Type<($LootConditionsContainer$Type<($GroupedLootBuilder$Type)>)>): $GroupedLootBuilder
public "randomChance"(value: float): $GroupedLootBuilder
public "randomChanceWithLooting"(value: float, looting: float): $GroupedLootBuilder
public "randomChanceWithEnchantment"(enchantment: $Enchantment$Type, chances: (float)[]): $GroupedLootBuilder
public "blockEntityPredicate"(predicate: $Predicate$Type<($BlockEntity$Type)>): $GroupedLootBuilder
public "directKillerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $GroupedLootBuilder
public "customDistanceToPlayer"(action: $Consumer$Type<($DistancePredicateBuilder$Type)>): $GroupedLootBuilder
public "entityPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $GroupedLootBuilder
public "lightLevel"(min: integer, max: integer): $GroupedLootBuilder
public "addCondition"(builder: $LootItemCondition$Builder$Type): $GroupedLootBuilder
public "survivesExplosion"(): $GroupedLootBuilder
public "biome"(...resolvers: ($Resolver$Type)[]): $GroupedLootBuilder
public "playerPredicate"(predicate: $Predicate$Type<($ServerPlayer$Type)>): $GroupedLootBuilder
public "setName"(component: $Component$Type): $GroupedLootBuilder
public "addAttributes"(action: $Consumer$Type<($AddAttributesFunction$Builder$Type)>): $GroupedLootBuilder
public "functions"(filter: $ItemFilter$Type, action: $Consumer$Type<($LootFunctionsContainer$Type<($GroupedLootBuilder$Type)>)>): $GroupedLootBuilder
public "addFunction"(builder: $LootItemFunction$Builder$Type): $GroupedLootBuilder
public "damage"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$Type, probability: float, n: integer): $GroupedLootBuilder
public "simulateExplosionDecay"(): $GroupedLootBuilder
public "addNBT"(tag: $CompoundTag$Type): $GroupedLootBuilder
public "replaceLore"(...components: ($Component$Type)[]): $GroupedLootBuilder
public "smeltLoot"(): $GroupedLootBuilder
public "addNbt"(tag: $CompoundTag$Type): $GroupedLootBuilder
public "addLore"(...components: ($Component$Type)[]): $GroupedLootBuilder
public "limitCount"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "limitCount"(numberProviderMin: $NumberProvider$Type, numberProviderMax: $NumberProvider$Type): $GroupedLootBuilder
public "addPotion"(potion: $Potion$Type): $GroupedLootBuilder
public "customFunction"(json: $JsonObject$Type): $GroupedLootBuilder
public "applyLootingBonus"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "enchantRandomly"(): $GroupedLootBuilder
public "enchantRandomly"(enchantments: ($Enchantment$Type)[]): $GroupedLootBuilder
public "enchantWithLevels"(numberProvider: $NumberProvider$Type, allowTreasure: boolean): $GroupedLootBuilder
public "enchantWithLevels"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "applyOreBonus"(enchantment: $Enchantment$Type): $GroupedLootBuilder
public "applyBonus"(enchantment: $Enchantment$Type, multiplier: integer): $GroupedLootBuilder
public "removeLoot"(filter: $ItemFilter$Type): $GroupedLootBuilder
public "addWeightedLoot"(numberProvider: $NumberProvider$Type, allowDuplicateLoot: boolean, poolEntries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "addWeightedLoot"(poolEntries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "addWeightedLoot"(numberProvider: $NumberProvider$Type, poolEntries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "addLoot"(...entries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "addSequenceLoot"(...entries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type, preserveCount: boolean): $GroupedLootBuilder
public "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type): $GroupedLootBuilder
public "triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$Type, fire: boolean): $GroupedLootBuilder
public "triggerExplosion"(radius: float, destroy: boolean, fire: boolean): $GroupedLootBuilder
public "addAlternativesLoot"(...entries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "triggerLightningStrike"(shouldDamage: boolean): $GroupedLootBuilder
public "modifyLoot"(filter: $ItemFilter$Type, callback: $ModifyLootAction$Callback$Type): $GroupedLootBuilder
public "dropExperience"(amount: integer): $GroupedLootBuilder
set "name"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GroupedLootBuilder$Type = ($GroupedLootBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GroupedLootBuilder_ = $GroupedLootBuilder$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/$LootModificationEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$LootContextType, $LootContextType$Type} from "packages/com/almostreliable/lootjs/core/$LootContextType"
import {$LootActionsBuilderJS, $LootActionsBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$LootActionsBuilderJS"
import {$ResourceLocationFilter, $ResourceLocationFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter"

export class $LootModificationEventJS extends $EventJS {

constructor()

public "disableLootModification"(...filters: ($ResourceLocationFilter$Type)[]): void
public "disableSkeletonHeadDrop"(): void
public "disableCreeperHeadDrop"(): void
public "disableZombieHeadDrop"(): void
public "disableWitherStarDrop"(): void
public "addLootTypeModifier"(...types: ($LootContextType$Type)[]): $LootActionsBuilderJS
public "addEntityLootModifier"(...entities: ($EntityType$Type<(any)>)[]): $LootActionsBuilderJS
public "addLootTableModifier"(...filters: ($ResourceLocationFilter$Type)[]): $LootActionsBuilderJS
public "addBlockLootModifier"(o: any): $LootActionsBuilderJS
public "enableLogging"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootModificationEventJS$Type = ($LootModificationEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootModificationEventJS_ = $LootModificationEventJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/predicate/$ExtendedEntityFlagsPredicate$IBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedEntityFlagsPredicate$IBuilder<T> {

 "isInWater"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "build"(): T
 "isCrouching"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isWaterMob"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isIllegarMob"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isOnFire"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isUnderWater"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isMonster"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isSwimming"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isCreature"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isBaby"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isArthropodMob"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isSprinting"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isUndeadMob"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isOnGround"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
}

export namespace $ExtendedEntityFlagsPredicate$IBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedEntityFlagsPredicate$IBuilder$Type<T> = ($ExtendedEntityFlagsPredicate$IBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedEntityFlagsPredicate$IBuilder_<T> = $ExtendedEntityFlagsPredicate$IBuilder$Type<(T)>;
}}
